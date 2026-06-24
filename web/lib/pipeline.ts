import { promises as fs } from "node:fs";
import Anthropic from "@anthropic-ai/sdk";
import matter from "gray-matter";
import { TEMPLATE_PATH } from "./paths";
import { kebab } from "./recipes";

// Sonnet 4.6 — best balance of OCR accuracy and cost for dense handwritten sheets.
const MODEL = process.env.RECIPE_PIPELINE_MODEL || "claude-sonnet-4-6";

export type MediaType = "image/jpeg" | "image/png" | "image/webp" | "image/gif";

export function mediaTypeFor(filename: string): MediaType | null {
  const ext = filename.toLowerCase().split(".").pop();
  switch (ext) {
    case "jpg":
    case "jpeg":
      return "image/jpeg";
    case "png":
      return "image/png";
    case "webp":
      return "image/webp";
    case "gif":
      return "image/gif";
    default:
      return null;
  }
}

function client(): Anthropic {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    throw new Error(
      "ANTHROPIC_API_KEY is not set. Add it to web/.env.local to enable photo digitization.",
    );
  }
  return new Anthropic({ apiKey });
}

function imageBlock(base64: string, mediaType: MediaType): Anthropic.ImageBlockParam {
  return { type: "image", source: { type: "base64", media_type: mediaType, data: base64 } };
}

function firstText(msg: Anthropic.Message): string {
  const block = msg.content.find((b) => b.type === "text");
  return block && block.type === "text" ? block.text.trim() : "";
}

/** Strip ``` fences a model sometimes wraps output in. */
function stripFences(text: string): string {
  const fenced = text.match(/^```(?:\w+)?\n([\s\S]*?)\n```$/);
  return fenced ? fenced[1].trim() : text.trim();
}

/**
 * Step 1 — read the recipe title from the photo and derive a kebab id.
 * Returns null if no title is legible.
 */
export async function renameFromPhoto(
  base64: string,
  mediaType: MediaType,
): Promise<{ title: string; id: string } | null> {
  const msg = await client().messages.create({
    model: MODEL,
    max_tokens: 300,
    messages: [
      {
        role: "user",
        content: [
          imageBlock(base64, mediaType),
          {
            type: "text",
            text:
              "This is a photo of a paper recipe sheet. Find the main recipe TITLE printed at the top.\n" +
              'Respond with ONLY a JSON object: {"title": "<exact printed title>", "id": "<kebab-case id>"}.\n' +
              "For the id: lowercase, strip accents to ASCII, replace runs of spaces/punctuation with single hyphens; " +
              "drop a leading label word only when it is clearly a prefix.\n" +
              'If you cannot confidently read a title, respond {"title": null, "id": null}.',
          },
        ],
      },
    ],
  });

  try {
    const parsed = JSON.parse(stripFences(firstText(msg)));
    if (!parsed.title) return null;
    const id = parsed.id ? kebab(String(parsed.id)) : kebab(String(parsed.title));
    if (!id) return null;
    return { title: String(parsed.title), id };
  } catch {
    return null;
  }
}

const DIGITIZE_INSTRUCTIONS = `You are digitizing a photo of a paper recipe into ONE markdown file that matches the template schema given below.

Rules — pure transcription:
- Copy only what is literally printed/written on the sheet. Preserve the original language; do not translate.
- Group ingredients with the per-ingredient "section" field (e.g. Bouillon, Légumes, Hors feu, Riz, Chutney). Leave section blank if there is no grouping.
- NEVER infer tags, categories, allergens, diet, cost, labor, or nutrition unless that exact value is literally printed on the sheet. An empty field is correct; an invented one is a bug.
- Transcribe PLU/item numbers, prep notes, plating, storage, and empotage/notes verbatim into the matching fields or the ## Notes section.

Status & flag:
- Set status: "draft" if the whole sheet is legible and unambiguous.
- Set status: "flagged" if ANYTHING is illegible, ambiguous (e.g. a conflicting handwritten annotation, an unreadable quantity), the recipe is cut off, the sheet holds multiple recipes, or a titled component is missing.
- When flagged, fill the "flag:" field as a YAML block scalar written TO THE PERSON who will fix the recipe: address them directly, say what the sheet shows, why it is unclear, and what you'd like them to do. Enumerate multiple issues inline "(1) ... (2) ...".

Output: ONLY the markdown file content — the YAML frontmatter delimited by --- lines, then the body (# title, ## Ingredients, ## Instructions, ## Plating, ## Notes). No code fences, no commentary before or after.`;

/**
 * Step 2 — transcribe the photo into a full recipe markdown file.
 * Returns the markdown plus the status the model chose. Operational metadata
 * (id, photo, source, created, status) is normalized server-side afterward.
 */
export async function digitizeFromPhoto(
  base64: string,
  mediaType: MediaType,
  opts: { id: string; photoFilename: string; created: string },
): Promise<{ markdown: string; status: "draft" | "flagged" }> {
  const template = await fs.readFile(TEMPLATE_PATH, "utf8");

  const msg = await client().messages.create({
    model: MODEL,
    max_tokens: 4096,
    messages: [
      {
        role: "user",
        content: [
          imageBlock(base64, mediaType),
          {
            type: "text",
            text:
              DIGITIZE_INSTRUCTIONS +
              `\n\nUse these exact values in the frontmatter: id: ${opts.id}, source: photo, photo: ${opts.photoFilename}, created: ${opts.created}.\n\n--- TEMPLATE ---\n` +
              template,
          },
        ],
      },
    ],
  });

  const raw = stripFences(firstText(msg));
  const { data, content } = matter(raw);

  // Normalize operational metadata regardless of what the model emitted.
  let status: "draft" | "flagged" = data.status === "flagged" ? "flagged" : "draft";
  data.id = opts.id;
  data.source = "photo";
  data.photo = opts.photoFilename;
  data.created = opts.created;
  data.status = status;
  if (status === "draft") delete data.flag;

  // js-yaml refuses to dump `undefined`; round-trip to drop any such values.
  const safe = JSON.parse(JSON.stringify(data ?? null));
  const markdown = matter.stringify(`\n${content.trim()}\n`, safe);
  return { markdown, status };
}
