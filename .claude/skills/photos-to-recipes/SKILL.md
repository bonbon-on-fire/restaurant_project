---
name: photos-to-recipes
description: >-
  Convert photos of paper recipes into structured recipe markdown files. Use when
  the user wants to digitize recipe photos, process the recipe inbox, or asks to
  "digitize recipes" / "process recipe photos". Reads images from
  data/photos/inbox/, writes recipes to data/recipes/draft/ or data/recipes/flagged/
  matching _TEMPLATE.md, and moves each photo to data/photos/done/ or
  data/photos/flagged/.
---

# Recipe photo → markdown

Digitize photos of paper recipes into the project's structured recipe format. One
markdown file per recipe. This is **pure transcription**: copy what is literally on
the sheet into the matching template fields and leave everything else blank.
Preserve the original language. Never infer, classify, or invent.

## Inputs and outputs

- **Input:** image files in `data/photos/inbox/` (jpg, jpeg, png, heic, webp).
- **Recipe format:** `data/recipes/_TEMPLATE.md` — the canonical schema. Read it
  fresh every run so output stays in sync if the template changes.
- **Output:** one file per recipe in a status folder — `data/recipes/draft/<id>.md`
  (clean) or `data/recipes/flagged/<id>.md` (needs a human). Recipes are organized by
  status folder: `draft/`, `flagged/`, `verified/`, `archived/`. This skill only ever
  writes into `draft/` or `flagged/`; `verified/` and `archived/` are set later by a
  human.
- **Photo routing:** move each processed photo out of `inbox/` into either
  `data/photos/done/` (clean) or `data/photos/flagged/` (needs a human).

## Procedure

1. **Find work.** List image files in `data/photos/inbox/`. If there are none, tell
   the user the inbox is empty and stop.

2. **Load the schema.** Read `data/recipes/_TEMPLATE.md` so the output matches the
   current field set exactly.

3. **For each photo, in turn:**

   a. **Read the image** with vision. Transcribe everything you can see — title,
      ingredients (quantity + unit + name), instructions, yield, and any extra
      detail (prep time, plating, etc.). Transcribe in the recipe's **original
      language**; do not translate.

   b. **Map onto the template — transcription only.** Put each value from the photo
      into its matching field. Set the operational metadata:
      - `id`: kebab-case from the title (e.g. "Pesto Zucchini" → `pesto-zucchini`).
        The id must be unique across **all** status folders — if `<id>.md` already
        exists in any of `data/recipes/draft/`, `flagged/`, `verified/`, or
        `archived/`, append `-2`, `-3`, … so nothing is overwritten.
      - `title`, `language` (the language the sheet is written in), `source: photo`,
        `created` (today's date, YYYY-MM-DD), `photo: <filename>` (`status` is set in
        step d).

      Then fill the **content** fields — `ingredients`, `yield`, instructions, and any
      other field — ONLY where the sheet states the value. If the sheet explicitly
      prints item/PLU numbers, prep time, packout, plating, storage, or an
      allergen/symbol line, transcribe those verbatim into the matching field.
      Otherwise leave the field blank.

      Group ingredients with the `section:` field: copy each ingredient's printed
      section header (e.g. Bouillon, Légumes, Hors feu, Riz, Chutney) into its
      `section`. Leave `section` blank if the sheet shows no grouping.

   c. **Leave everything else blank — do NOT infer.** Never derive a value the sheet
      doesn't state. In particular, leave `tags` (diet, temperature, weight, season,
      course, cuisine), `categories`, and `allergens` **blank** unless that exact
      classification is printed on the sheet — do not deduce "fish dish → fish" or
      "salad → cold." Likewise leave `cost`, `labor`, `timing`, and `nutrition`
      blank unless stated. An empty field is correct; an inferred or fabricated one
      is a bug.

   d. **Judge confidence, set status, and route the photo:**
      - **Clean read** — everything legible and unambiguous → set `status: draft`,
        write the recipe to `data/recipes/draft/<id>.md`, and move the photo to
        `data/photos/done/`.
      - **Uncertain** — an illegible or ambiguous quantity, an unverifiable token
        (an ingredient/word you cannot confidently read), blur or glare, the recipe
        is cut off, the page holds multiple recipes, or it spans more than one photo
        → still write the best-effort transcription, but set `status: flagged`, fill
        the `flag:` field (see **Flag format** below), write the recipe to
        `data/recipes/flagged/<id>.md`, and move the photo to `data/photos/flagged/`
        (not `done/`).

   The recipe's `status` frontmatter must always match the folder it lives in. This
   skill only ever produces `status: draft` (in `draft/`) or `status: flagged` (in
   `flagged/`). `status` means: `flagged` = the skill found a problem a human must
   resolve; `draft` = clean transcription, not yet human-verified; `verified` = set
   later by a human (file moved to `verified/`); `archived` = retired by a human (file
   moved to `archived/`). Never write `verified` or `archived`.

4. **Report.** Summarize: how many recipes were written to `data/recipes/draft/`
   (photos moved to `done/`), how many to `data/recipes/flagged/` and why (one line
   each), and list the new files created.

## Flag format

When `status: flagged`, fill the frontmatter `flag:` field with ONE concise
paragraph, as a YAML `>-` block scalar, formatted identically every time:

- Plain sentences only — no markdown, no lists, no headings.
- State each unresolved problem as "`<what is wrong>` — `<what a human must decide
  or supply>`." Separate multiple problems with a period and a space.
- Factual and short (1–3 sentences). No fixes, no opinions.

```yaml
flag: >-
  Vinaigrette lists Petit/Medium/Grand columns with no marked default, Petit
  transcribed — confirm the standard size. Salmon teriyaki named in the title is
  absent from the sheet — source the missing component.
```

## Rules

- **Transcribe, don't interpret.** Only copy what is literally on the sheet. Do not
  infer tags, categories, allergens, diet, or any classification — that is a later,
  human step.
- **No comments in output.** Generated recipe files contain only transcribed content
  — no `#` section banners, no inline field hints, no `# --- grouping ---` lines. The
  template's guidance comments are scaffolding; do not copy them through.
- **Notes are verbatim only.** The body `## Notes` section holds only text literally
  printed on the sheet (e.g. PLU codes, symbols, empotage instructions, alternate-size
  columns). No editorial commentary, no "Source:" lines.
- **Never invent data.** Visible → record it. Not visible → leave blank. Unsure →
  flag it, don't guess.
- **Preserve language.** Do not translate at digitization time.
- **Idempotent.** Only touch `inbox/`; move photos as you go so re-running never
  double-processes. Never overwrite an existing recipe file — de-duplicate the id
  against every status folder.
- **Status folder = status field.** Only ever write into `draft/` or `flagged/`, and
  keep the `status` frontmatter equal to the folder name. Never write into `verified/`
  or `archived/` — those are human-only.
- **One recipe per file.** If a photo contains several recipes, create one file per
  recipe and flag the photo so a human can confirm the split.
