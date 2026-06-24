---
name: photos-rename
description: >-
  Rename recipe photos in data/photos/inbox/ to match the recipe on each sheet. Use
  when the user wants to rename/clean up photo filenames, or asks to "rename the
  photos" / "name the photos by recipe". Reads each image, derives a kebab-case name
  from the recipe title, and renames the file in place. Does NOT create recipe files
  (that is the photos-to-recipes skill).
---

# Rename photos by recipe

Give each photo in `data/photos/inbox/` a filename that matches the recipe printed on
it. This only renames image files — it does not read into the recipe database or move
photos out of `inbox/`.

## Naming convention

`<kebab-case recipe title><original extension>` — the same id form `photos-to-recipes`
uses, so a photo and its future recipe file share a stem.

To build the name from the title:
- lowercase it,
- strip accents/diacritics to ASCII (é→e, è→e, ç→c, ô→o, …),
- replace any run of spaces/punctuation with a single hyphen,
- drop leading section words that are labels, not the dish name, **only** when clearly
  a prefix (e.g. "SOUPE: Ribollita" → `soupe-ribollita` keeps both; "Le Chèvre et le
  Chou" → `chevre-et-chou` may drop the leading article — keep it readable).
- keep the original extension as-is (`.jpg`, `.png`, `.heic`, …), lowercased.

Examples: "Sauce au Pétoncles et Crevettes" → `sauce-petoncles-crevettes.jpg`;
"Poulet À La Cardamome" → `poulet-cardamome.jpg`.

## Procedure

1. **Find work.** List image files in `data/photos/inbox/`. If there are none, tell the
   user the inbox is empty and stop.

2. **For each image, in turn:**

   a. **Read the image** with vision and find the **recipe title** — the main dish name
      printed at the top of the sheet.

   b. **Build the target name** from the title using the convention above.

   c. **Decide and act:**
      - If the file is already named exactly the target → leave it, count as unchanged.
      - If the target name is free → rename the file to it.
      - If the target name is already taken by a **different** file → append `-2`, `-3`,
        … to make it unique, then rename.

   d. **If you cannot read a title** (illegible, blurry, not a recipe, multiple recipes
      on one page) → **do not rename it.** Leave the filename as-is and report it as
      skipped, with the reason.

3. **Report.** List each rename as `old → new`, plus any files left unchanged or skipped
   (with the reason).

## Rules

- **Rename only.** Never edit image contents, never create or modify recipe files, never
  move photos out of `inbox/`.
- **Never overwrite.** If two photos resolve to the same name, de-duplicate with a
  numeric suffix — never clobber an existing file.
- **Title comes from the photo.** Derive the name only from the recipe title printed on
  the sheet; never guess or invent a name. Unsure → skip and report.
- **Idempotent.** Re-running is safe: already-correct names are left untouched.
