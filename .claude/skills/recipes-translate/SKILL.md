---
name: recipes-translate
description: >-
  Translate original-language recipe husks into the canonical English recipe file. Use
  when the user wants to translate recipes to English, promote husks, or asks to
  "translate the recipes". Reads husks from data/recipes/processed/transcribed-<lang>/,
  translates the content to English, promotes it to the full _TEMPLATE.md schema (adding
  status and blank metadata), and writes data/recipes/processed/transcribed-en/<id>.md.
  Does NOT infer tags — that is the recipes-tag skill.
---

# Translate husks → canonical English recipes

Turn each original-language husk into the project's canonical English recipe file. The
`photos-to-recipes` skill produces husks (pure transcription, original language); this
skill translates them to English and promotes them to the full recipe schema, adding the
metadata scaffolding (status, plus blank tag/cost/etc. fields) that later steps fill.

The English file in `transcribed-en/` is the **single canonical record**. A non-English
husk stays in its `transcribed-<lang>/` folder as a pure reference.

## Inputs and outputs

- **Input:** husk files under `data/recipes/processed/transcribed-<lang>/` that have not
  yet been promoted. A husk **needs promotion** when:
  - no `data/recipes/processed/transcribed-en/<id>.md` exists yet, **or**
  - (English original) the file at `transcribed-en/<id>.md` is still a husk — it has no
    `status:` field (only the full template has one).
- **Schemas:** read both `data/recipes/_TEMPLATE_HUSK.md` and `data/recipes/_TEMPLATE.md`
  fresh every run.
- **Output:** one canonical English file at
  `data/recipes/processed/transcribed-en/<id>.md`, matching `_TEMPLATE.md`.

## Procedure

1. **Find work.** List husk files across all `transcribed-<lang>/` folders (including
   `transcribed-en/`). Select those needing promotion (per the rule above). If none, tell
   the user there is nothing to translate and stop.

2. **Load the schemas.** Read `_TEMPLATE_HUSK.md` and `_TEMPLATE.md`.

3. **For each husk, in turn:**

   a. **Read the husk** — its frontmatter (`id`, `title`, `language`, `flag`, `yield`,
      `ingredients`) and body (`## Ingredients`, `## Instructions`, `## Notes`).

   b. **Translate the content to English.** Translate `title`, ingredient `name`s,
      `section` labels, `preparation` notes, the instructions, and `## Notes`. When the
      husk's `language` is already `en`, this is a copy-through (no translation). Preserve
      all quantities, units, and numeric values exactly; preserve meaning faithfully; do
      not re-classify, add, or drop content.

   c. **Promote to the full template.** Build a `_TEMPLATE.md`-shaped file: copy the
      translated content into the matching fields, add every other field blank, and set:
      - `id` (= the husk's id / stem), `title` (English),
      - `language: en`,
      - `original_language:` = the husk's source language (e.g. `fr`); leave blank or `en`
        when the husk was already English,
      - `source: photo`, `created:` (today's date, `YYYY-MM-DD`),
      - `photo:` = `<id>.<ext>` referencing the photo now in
        `data/recipes/processed/photos/` (match the actual file extension there),
      - `status:` = `flagged` if the husk has a `flag`, else `draft`,
      - `flag:` = the husk's flag text (only when flagged; otherwise blank).

      Leave `categories`, the entire `tags` block, `allergens`, `cost`, `labor`, `timing`,
      `nutrition`, and the other operational fields **blank** — `recipes-tag` fills the tag
      block later; the rest are filled by humans/tools. If a translation choice is itself
      genuinely ambiguous, you may append a note to `flag:` and keep `status: flagged`.

   d. **Write the canonical file** to `data/recipes/processed/transcribed-en/<id>.md`.

   e. **Finalize the husk:**
      - **English original:** the husk already lives at `transcribed-en/<id>.md` — the
        file you just wrote **overwrites it in place**. Nothing else to do; no separate
        reference remains.
      - **Non-English original:** the husk stays in `transcribed-<lang>/<id>.md` as the
        pure reference. **Delete its `flag:` field** (the flag now lives on the English
        file) so the husk ends as pure content + minimal frontmatter (`id`, `language`).

4. **Report.** For each recipe: the source language, the canonical file written, its
   status (`draft`/`flagged`, with the flag reason if flagged), and whether a husk
   reference was kept (non-English) or overwritten (English).

## Rules

- **Translate faithfully.** Convert language only — never invent, drop, or re-classify
  content. Preserve all quantities and units exactly.
- **English file is canonical.** Status and (later) tags live only on the
  `transcribed-en/` file. The original-language husk is a pure reference with no status or
  tags.
- **Status from the flag.** `flagged` iff the husk carried a flag; otherwise `draft`. Never
  set `verified` or `archived` — those are human-only.
- **Move the flag, don't copy it.** After promotion, the canonical file holds the flag and
  the non-English husk's `flag` field is removed.
- **Don't tag.** Leave `tags`, `allergens`, and `categories` blank for `recipes-tag`.
- **Never overwrite a promoted recipe.** Skip any husk whose `transcribed-en/<id>.md`
  already has a `status:` field. Idempotent: safe to re-run.
