---
name: menus-digitize
description: >-
  Transcribe photos of handwritten weekly menu spreads into structured "husk" markdown
  files in their original language. Use when the user wants to digitize menu photos,
  process the menu inbox, or asks to "digitize menus" / "process menu photos" / "process
  the menus in inbox". Reads images from data/menus/inbox/, writes one content-only husk
  per week (matching data/menus/_TEMPLATE_HUSK.md) to
  data/menus/processed/transcribed-<lang>/<week-start>.md, and files each photo as a JPEG
  in data/menus/processed/photos/. Does NOT translate, tag, link recipes, or set status —
  those are the menus-translate and menus-tag skills.
---

# Menu spread photo → husk markdown

Digitize photos of handwritten weekly menu-planning spreads into the project's husk menu
format — one markdown file per **week**, in the sheet's **original language**. This is
**pure transcription**: copy what is literally on the spread into the matching husk fields
and leave everything else blank. Never translate, infer, classify, link, or invent.
Translation to the English canonical file and dish tagging happen later
(`menus-translate`, then `menus-tag`).

This is the menu analogue of `recipes-digitize`. The differences that matter: the unit is
a **weekly spread** (a left-page dish pool + a right-page daily schedule), not a single
recipe; the id is derived from the **week date on the sheet**, not from the filename; and
the COGS/price sticky note is **intentionally never transcribed**.

## Inputs and outputs

- **Input:** image files in `data/menus/inbox/` (heic, jpg, jpeg, png, webp). These are
  raw phone photos named like `IMG_9350.HEIC` — the filename is **not** the id. Each photo
  is normally one full spread (both pages in a single image); occasionally a week is split
  across two photos (left page and right page separately).
- **Menu format:** `data/menus/_TEMPLATE_HUSK.md` — the husk schema (menu content only).
  Read it fresh every run so output stays in sync if the template changes.
- **Output:** one husk file per week at
  `data/menus/processed/transcribed-<lang>/<week-start>.md`, where `<lang>` is the language
  the sheet is written in (e.g. `transcribed-fr/` for French) and `<week-start>` is the ISO
  date of that week's Monday (the `id`). Create the language folder if it does not exist.
- **Photo routing:** file each processed photo as a JPEG at
  `data/menus/processed/photos/<week-start>.jpg` (convert from HEIC if needed — see step
  3a). Photos you cannot transcribe at all stay in `inbox/`.

## Procedure

1. **Find work.** List image files in `data/menus/inbox/`. If there are none, tell the user
   the inbox is empty and stop.

2. **Load the schema.** Read `data/menus/_TEMPLATE_HUSK.md` so the output matches the
   current husk field set exactly.

3. **For each photo (or left/right photo pair for one week), in turn:**

   a. **Read the image** with vision. If the file is HEIC and cannot be read directly,
      convert it to a JPEG first, then read that — for example:

      ```python
      from PIL import Image
      import pillow_heif; pillow_heif.register_heif_opener()
      im = Image.open("data/menus/inbox/IMG_9350.HEIC"); im.thumbnail((1600, 1600))
      im.convert("RGB").save("<scratchpad>/IMG_9350.jpg", "JPEG", quality=85)
      ```

      Transcribe everything you can read on **both** pages: the left-page dish **pool** by
      its printed category rows, the right-page daily **schedule** (each service day's
      dishes plus any temperature / weather / note in the margin), and the
      "Commentaire et Météo" footer. Transcribe in the sheet's **original language**; keep
      abbreviations exactly as written; do not translate.

   b. **Detect the language** of the sheet (e.g. `fr`, `en`). This sets both the husk's
      `language` field and the `transcribed-<lang>/` output folder.

   c. **Derive the week-start id.** Read the "Semaine du" date range and the days/dates in
      the schedule. The `id` is the ISO date of that week's **Monday** (the first service
      day, `lundi`). If the year is not written, infer it from the weekday/date alignment
      (e.g. Monday = 16 Dec → 2024-12-16) and say so in the `flag`. The id must be unique
      across **all** `transcribed-*` folders — if `<id>.md` already exists for a *different*
      spread, append `-2`, `-3`, … so nothing is overwritten, and flag it so a human can
      confirm whether it is a duplicate re-photo of the same week.

   d. **Map onto the husk template — transcription only.** Set:
      - `id`: the week-start ISO date from step 3c.
      - `week_label`: the date range exactly as written on the sheet (e.g. `"15-21 Dec"`).
      - `language`: the detected source language.

      Then fill the content blocks ONLY where the sheet states the value:
      - `pool`: for each printed category row (`vege`, `poisson`, `texture`, `soupe`,
        `potage`, `sandwichs`, `wraps`, `salades`, `salade-comp`, `sauces`, `hummus`,
        `quiche`, `quenelles-morue`, `croquettes`, `burgers`, `vinaigrettes`, `feves-lard`,
        `popee-lentilles`, `mousse`, `pico-de-gallo`), list the dish names written in that
        row, verbatim, abbreviations kept. **Omit any category row that is empty** that
        week.
      - `schedule`: one entry per service day (`day`, `date`, `dishes`, and `temp_c` /
        `weather` / `notes` only if written in the margin).
      - `comment`: the "Commentaire et Météo" footer line, verbatim, if any.

   e. **Leave everything else blank — do NOT infer.** The husk has no status, tags, recipe
      links, protein/temperature/format classification, or cost fields, and you must not
      add any. Never derive a value the sheet doesn't state. Translation is `menus-translate`;
      tagging is `menus-tag`. An empty field is correct; an inferred or fabricated one is a
      bug. **Do NOT transcribe the COGS/price sticky note** — it is deliberately out of
      scope.

   f. **Judge confidence and flag if needed:**
      - **Clean read** — every dish name and day legible and unambiguous → leave the husk's
        `flag` field blank.
      - **Uncertain** — illegible or ambiguous handwriting, a dish name you cannot
        confidently read (mark it inline with a trailing ` ?`), an inferred year, a spread
        split across two photos, or a possible duplicate week → still write the best-effort
        transcription, and fill the husk's `flag:` field (see **Flag format** below).
        Handwritten spreads are hard to read, so a flag is common and expected.

   g. **Write and file.** Write the husk to
      `data/menus/processed/transcribed-<lang>/<id>.md`, then file the photo as
      `data/menus/processed/photos/<id>.jpg` (the converted JPEG from step 3a) and remove
      the original from `inbox/`. For a two-photo week, file both (e.g. `<id>.jpg` and
      `<id>-b.jpg`) and note it in the flag.

4. **Report.** Summarize: how many husks were written and to which `transcribed-<lang>/`
   folder, how many carry a `flag` and why (one line each), any weeks that collided or were
   split, and list the new files.

## Flag format

When the transcription is uncertain, fill the husk frontmatter `flag:` field as a YAML
block scalar. Write it **to the person who will fix the menu** — this text is read by a
human (and may be shown in tools/UI), so make it clear, friendly, and actionable, not a
terse internal note:

- Address the reader directly ("you"). Plain language, no jargon.
- For each issue, say what the sheet shows, why it is unclear, and what you would like them
  to do about it. Where you made a best-effort read, say so (e.g. a dish marked ` ?`).
- State facts, not guesses — describe the problem; do not silently pick a value.
- Keep it short and concrete. Enumerate multiple issues inline ("(1) … (2) …").
- If you inferred the year from the weekday/date alignment, say so. If the COGS sticky was
  present, you may note that it was intentionally not transcribed.

```yaml
flag: >-
  Handwritten source is hard to read. (1) Several dish names are abbreviations or illegible
  and are marked with a trailing "?" — please confirm them with the chef. (2) The year is
  not written; I inferred 2024 from the weekday/date alignment (Monday = 16 Dec 2024) —
  please confirm. (3) The COGS cost note on the sticky is intentionally not transcribed.
```

## Rules

- **Transcribe, don't interpret.** Only copy what is literally on the spread. Do not
  translate, and do not infer status, tags, recipe links, diet, cuisine, or any
  classification — those are later steps (`menus-translate`, `menus-tag`).
- **Original language only.** Preserve the sheet's language and its abbreviations; English
  translation is the `menus-translate` step.
- **The COGS/price sticky is never transcribed.** It is intentionally out of scope, exactly
  as in the recipe husk boundary.
- **One week per file.** Each husk is one weekly spread, keyed by its Monday date. If one
  week is split across two photos, combine them into a single husk and flag it.
- **No comments in output.** Generated husk files contain only transcribed content — no `#`
  section banners, no inline field hints. The template's guidance comments are scaffolding;
  do not copy them through.
- **Never invent data.** Visible → record it. Not visible → leave blank. Unsure → mark the
  token with ` ?` and flag it, don't guess.
- **Idempotent.** Only touch `inbox/`; file photos as you go so re-running never
  double-processes. Never overwrite an existing husk — de-duplicate the id against every
  `transcribed-*` folder.
