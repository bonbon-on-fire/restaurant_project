---
name: recipes-digitize
description: >-
  Transcribe photos of paper recipes into structured "husk" markdown files in their
  original language. Use when the user wants to digitize recipe photos, process the
  recipe inbox, or asks to "digitize recipes" / "process recipe photos". Reads images
  from data/recipes/inbox/, writes a content-only husk (matching _TEMPLATE_HUSK.md) to
  data/recipes/processed/transcribed-<lang>/, and moves each photo to
  data/recipes/processed/photos/. Does NOT translate, tag, or set status — those are the
  recipes-translate and recipes-tag skills.
---

# Recipe photo → husk markdown

Digitize photos of paper recipes into the project's husk recipe format — one markdown
file per recipe, in the recipe's **original language**. This is **pure transcription**:
copy what is literally on the sheet into the matching husk fields and leave everything
else blank. Never translate, infer, classify, or invent. Translation to English and
classification happen later (`recipes-translate`, then `recipes-tag`).

## Inputs and outputs

- **Input:** image files in `data/recipes/inbox/` (jpg, jpeg, png, heic, webp). These
  should already be named in English by the `recipes-photos-rename` skill; the filename stem is
  the recipe id.
- **Recipe format:** `data/recipes/_TEMPLATE_HUSK.md` — the husk schema (recipe content
  only). Read it fresh every run so output stays in sync if the template changes.
- **Output:** one husk file per recipe at
  `data/recipes/processed/transcribed-<lang>/<id>.md`, where `<lang>` is the language the
  sheet is written in (e.g. `transcribed-fr/` for French, `transcribed-en/` for an
  English sheet). Create the language folder if it does not exist.
- **Photo routing:** move each processed photo out of `inbox/` into
  `data/recipes/processed/photos/` (clean or uncertain alike). Photos you cannot
  transcribe at all stay in `inbox/`.

## Procedure

1. **Find work.** List image files in `data/recipes/inbox/`. If there are none, tell the
   user the inbox is empty and stop.

2. **Load the schema.** Read `data/recipes/_TEMPLATE_HUSK.md` so the output matches the
   current husk field set exactly.

3. **For each photo, in turn:**

   a. **Read the image** with vision. Transcribe everything you can see — title,
      ingredients (quantity + unit + name + any preparation note + printed section),
      instructions, yield, and any extra detail printed on the sheet. Transcribe in the
      recipe's **original language**; do not translate.

   b. **Detect the language** of the sheet (e.g. `fr`, `en`, `es`). This sets both the
      husk's `language` field and the `transcribed-<lang>/` output folder.

   c. **Map onto the husk template — transcription only.** Set:
      - `id`: the filename stem (kebab-case English name from `recipes-photos-rename`). The id
        must be unique across **all** `transcribed-*` folders — if `<id>.md` already
        exists in any of them for a different recipe, append `-2`, `-3`, … so nothing is
        overwritten.
      - `title` (in the original language) and `language` (the detected source language).

      Then fill the content fields — `yield`, `ingredients` (name/section/qty/unit/
      preparation), the body instructions, and the `## Notes` section — ONLY where the
      sheet states the value. If the sheet explicitly prints item/PLU numbers, printed
      plating, alternate-size columns, symbols, or storage text, transcribe those verbatim
      into `## Notes`. Otherwise leave the field blank.

      Group ingredients with the `section:` field: copy each ingredient's printed section
      header (e.g. Bouillon, Légumes, Hors feu, Riz, Chutney) into its `section`. Leave
      `section` blank if the sheet shows no grouping.

   d. **Leave everything else blank — do NOT infer.** The husk has no status, tags,
      categories, allergens, cost, labor, timing, or nutrition fields, and you must not
      add any. Never derive a value the sheet doesn't state. Classification is a later
      step (`recipes-tag`); translation is `recipes-translate`. An empty field is correct;
      an inferred or fabricated one is a bug.

   e. **Judge confidence and flag if needed:**
      - **Clean read** — everything legible and unambiguous → leave the husk's `flag`
        field blank.
      - **Uncertain** — an illegible or ambiguous quantity, an unverifiable token (a word
        you cannot confidently read), blur or glare, the recipe is cut off, the page holds
        multiple recipes, or it spans more than one photo → still write the best-effort
        transcription, and fill the husk's `flag:` field (see **Flag format** below).
        `recipes-translate` carries this flag onto the English file's status later.

   f. **Write and move.** Write the husk to
      `data/recipes/processed/transcribed-<lang>/<id>.md`, then move the photo from
      `inbox/` to `data/recipes/processed/photos/`.

4. **Report.** Summarize: how many husks were written and to which `transcribed-<lang>/`
   folders, how many carry a `flag` and why (one line each), and list the new files.

## Flag format

When the transcription is uncertain, fill the husk frontmatter `flag:` field as a YAML
`>-` block scalar. Write it **to the person who will fix the recipe** — this text is read
by a human (and may be shown in tools/UI), so make it clear, friendly, and actionable, not
a terse internal note:

- Address the reader directly ("you"). Plain language, no jargon.
- For each issue, say three things: what the sheet shows, why it is unclear or
  conflicting, and what you would like them to do about it. Where you made a best-effort
  choice (e.g. transcribed one of several size columns), say so and tell them where the
  alternatives are (e.g. "the Medium and Grand amounts are in the Notes").
- State facts, not guesses — describe the problem; do not pick a value for them.
- Keep it short and concrete. If there are several issues, enumerate them inline
  ("(1) … (2) …") rather than as one run-on sentence.

```yaml
flag: >-
  A couple of things to confirm before this is good to go. (1) The vinaigrette is given
  in three sizes (Petit / Medium / Grand) with none marked as the default; I used the
  Petit column — please confirm that is the right batch size, or switch it (the Medium and
  Grand amounts are in the Notes). (2) The title says "Saumon Teriyaki," but there is no
  teriyaki salmon on the sheet — please add the missing component or point me to where its
  recipe lives.
```

## Rules

- **Transcribe, don't interpret.** Only copy what is literally on the sheet. Do not
  translate, and do not infer tags, categories, allergens, diet, status, or any
  classification — those are later steps.
- **Original language only.** Preserve the sheet's language; English translation is the
  `recipes-translate` step.
- **No comments in output.** Generated husk files contain only transcribed content — no
  `#` section banners, no inline field hints. The template's guidance comments are
  scaffolding; do not copy them through.
- **Notes are verbatim only.** The body `## Notes` section holds only text literally
  printed on the sheet (PLU codes, symbols, printed plating, alternate-size columns). No
  editorial commentary, no "Source:" lines.
- **Never invent data.** Visible → record it. Not visible → leave blank. Unsure → flag it,
  don't guess.
- **Idempotent.** Only touch `inbox/`; move photos as you go so re-running never
  double-processes. Never overwrite an existing husk — de-duplicate the id against every
  `transcribed-*` folder.
- **One recipe per file.** If a photo contains several recipes, create one husk per recipe
  and flag it so a human can confirm the split.
