import { promises as fs } from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { statusDir, Status } from "./paths";
import { kebab, uniqueId, type Ingredient } from "./recipes";

export type NewRecipeInput = {
  title: string;
  description?: string;
  language?: string;
  categories?: string[];
  ingredients?: Ingredient[];
  yield?: { portions?: number | string; portion_size?: string };
  body?: string;
};

function todayISO(): string {
  return new Date().toISOString().slice(0, 10);
}

/** Drop `undefined` values recursively — js-yaml refuses to dump them. */
function prune<T>(value: T): T {
  return JSON.parse(JSON.stringify(value ?? null));
}

/** Build the frontmatter object for a manually-entered, human-verified recipe. */
function buildFrontmatter(input: NewRecipeInput, id: string) {
  const fm: Record<string, unknown> = {
    id,
    title: input.title,
    description: input.description || undefined,
    language: input.language || undefined,
    source: "manual",
    status: "verified",
    created: todayISO(),
    categories: input.categories?.length ? input.categories : [],
  };
  if (input.yield && (input.yield.portions || input.yield.portion_size)) {
    fm.yield = {
      portions: input.yield.portions || undefined,
      portion_size: input.yield.portion_size || undefined,
    };
  }
  if (input.ingredients?.length) {
    fm.ingredients = input.ingredients.map((ing) => ({
      name: ing.name || undefined,
      section: ing.section || undefined,
      qty: ing.qty ?? undefined,
      unit: ing.unit || undefined,
      preparation: ing.preparation || undefined,
    }));
  }
  return fm;
}

/** Default markdown body when the author didn't supply one. */
function defaultBody(input: NewRecipeInput): string {
  const lines: string[] = [`# ${input.title}`, ""];
  if (input.ingredients?.length) {
    lines.push("## Ingredients", "");
    for (const ing of input.ingredients) {
      const qty = [ing.qty, ing.unit].filter(Boolean).join(" ");
      const prep = ing.preparation ? ` — ${ing.preparation}` : "";
      lines.push(`- ${qty} ${ing.name ?? ""}${prep}`.replace(/\s+/g, " ").trim());
    }
    lines.push("");
  }
  lines.push("## Instructions", "");
  return lines.join("\n");
}

/**
 * Write a new manually-entered recipe into data/recipes/verified/.
 * Returns the final id (may have a -2 suffix if the kebab id collided).
 */
export async function createVerifiedRecipe(input: NewRecipeInput): Promise<string> {
  const base = kebab(input.title);
  if (!base) throw new Error("Title is required.");
  const id = await uniqueId(base);

  const fm = prune(buildFrontmatter(input, id));
  const body = (input.body && input.body.trim()) || defaultBody(input);
  const fileText = matter.stringify(`\n${body}\n`, fm);

  const dir = statusDir("verified");
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(path.join(dir, `${id}.md`), fileText, "utf8");
  return id;
}

/**
 * Write a digitized recipe (from the photo pipeline) into draft/ or flagged/.
 * `markdown` is the full file content produced by Claude; `status` decides the folder.
 */
export async function writeDigitizedRecipe(
  id: string,
  status: Extract<Status, "draft" | "flagged">,
  markdown: string,
): Promise<void> {
  const dir = statusDir(status);
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(path.join(dir, `${id}.md`), markdown, "utf8");
}
