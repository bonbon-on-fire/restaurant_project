import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "node:fs";
import path from "node:path";
import { INBOX_DIR, PHOTOS_DONE_DIR, PHOTOS_FLAGGED_DIR } from "@/lib/paths";
import { uniqueId } from "@/lib/recipes";
import { mediaTypeFor, renameFromPhoto, digitizeFromPhoto } from "@/lib/pipeline";
import { writeDigitizedRecipe } from "@/lib/writeRecipe";

export const dynamic = "force-dynamic";
export const maxDuration = 120; // digitization can take a while

function todayISO(): string {
  return new Date().toISOString().slice(0, 10);
}

export async function POST(req: NextRequest) {
  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ error: "Expected multipart form data." }, { status: 400 });
  }

  const file = form.get("photo");
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "No photo uploaded." }, { status: 400 });
  }

  const mediaType = mediaTypeFor(file.name);
  if (!mediaType) {
    return NextResponse.json(
      { error: "Unsupported image type. Use JPG, PNG, WEBP, or GIF." },
      { status: 400 },
    );
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const base64 = buffer.toString("base64");
  const ext = file.name.toLowerCase().split(".").pop()!;

  try {
    // 1. Read the title and derive an id.
    const named = await renameFromPhoto(base64, mediaType);
    if (!named) {
      // Couldn't read a title — stage the photo in the inbox for a human, don't digitize.
      await fs.mkdir(INBOX_DIR, { recursive: true });
      const stagedName = `${Date.now()}-${file.name}`;
      await fs.writeFile(path.join(INBOX_DIR, stagedName), buffer);
      return NextResponse.json(
        {
          skipped: true,
          reason: "Could not read a recipe title from the photo. Left it in the inbox for review.",
          photo: stagedName,
        },
        { status: 200 },
      );
    }

    const id = await uniqueId(named.id);
    const photoFilename = `${id}.${ext}`;
    const created = todayISO();

    // 2. Transcribe into a full recipe markdown file.
    const { markdown, status } = await digitizeFromPhoto(base64, mediaType, {
      id,
      photoFilename,
      created,
    });

    // 3. Write the recipe into draft/ or flagged/.
    await writeDigitizedRecipe(id, status, markdown);

    // 4. File the photo alongside, in done/ (clean) or flagged/ (needs a human).
    const photoDir = status === "flagged" ? PHOTOS_FLAGGED_DIR : PHOTOS_DONE_DIR;
    await fs.mkdir(photoDir, { recursive: true });
    await fs.writeFile(path.join(photoDir, photoFilename), buffer);

    return NextResponse.json({ id, title: named.title, status, photo: photoFilename }, { status: 201 });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Digitization failed.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
