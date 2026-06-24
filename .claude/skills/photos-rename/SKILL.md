---
name: photos-rename
description: >-
  Rename recipe photos in data/recipes/inbox/ to match the recipe on each sheet, using
  an English name. Use when the user wants to rename/clean up photo filenames, or asks
  to "rename the photos" / "name the photos by recipe". Reads each image, derives a
  kebab-case English name from the recipe title (translating the title to English when
  needed), and renames the file in place. Does NOT create recipe files (that is the
  photos-to-recipes skill).
---

# Rename photos by recipe (English names)

Give each photo in `data/recipes/inbox/` a filename that matches the recipe printed on
it, expressed in **English** so a photo and its recipe are easy to match regardless of
the sheet's original language. This only renames image files — it does not read into the
recipe database or move photos out of `inbox/`.

## Naming convention

`<kebab-case English recipe title><original extension>` — the same id form
`photos-to-recipes` uses, so a photo and its future recipe file share a stem.

To build the name from the title:
- start from the dish title printed on the sheet,
- **translate it to English** when it is not already English (e.g. "Poulet à la
  Cardamome" → "cardamom chicken"); use the natural English name of the dish,
- lowercase it,
- strip accents/diacritics to ASCII (é→e, è→e, ç→c, ô→o, …),
- replace any run of spaces/punctuation with a single hyphen,
- drop leading section words that are labels, not the dish name, **only** when clearly
  a prefix (e.g. "SOUPE: Ribollita" → `ribollita-soup` keeps the dish; keep it
  readable).
- keep the original extension as-is (`.jpg`, `.png`, `.heic`, …), lowercased.

Examples: "Sauce au Pétoncles et Crevettes" → `scallop-shrimp-sauce.jpg`;
"Poulet À La Cardamome" → `cardamom-chicken.jpg`; "SOUPE: Ribollita" → `ribollita-soup.jpg`.

## Procedure

1. **Find work.** List image files in `data/recipes/inbox/`. If there are none, tell the
   user the inbox is empty and stop.

2. **For each image, in turn:**

   a. **Read the image** with vision and find the **recipe title** — the main dish name
      printed at the top of the sheet.

   b. **Build the target name** from the title using the convention above, translating
      the dish name to English where needed.

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
- **English names.** Always express the filename in English, translating the dish title
  when the sheet is in another language. The original-language title is preserved later
  by `photos-to-recipes` in the husk transcription, not here.
- **Never overwrite.** If two photos resolve to the same name, de-duplicate with a
  numeric suffix — never clobber an existing file.
- **Title comes from the photo.** Derive the name only from the recipe title printed on
  the sheet (then translate it); never guess or invent a dish. Unsure → skip and report.
- **Idempotent.** Re-running is safe: already-correct names are left untouched.
