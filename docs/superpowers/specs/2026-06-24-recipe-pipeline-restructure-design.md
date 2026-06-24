# Recipe pipeline restructure — language-based folders + translate step

**Date:** 2026-06-24
**Status:** Approved design, ready for implementation plan

## Summary

Rework the recipe-digitization skills so that:

1. Photos are uploaded to `data/recipes/inbox/`, named in **English**, and moved to
   `data/recipes/processed/photos/` once transcribed.
2. Every recipe ends up as an **English canonical file** in
   `data/recipes/processed/transcribed-en/`. Recipes not originally in English also
   keep a **pure original-language transcription** (a "husk") in
   `data/recipes/processed/transcribed-<lang>/` (e.g. `transcribed-fr/`).
3. A recipe's lifecycle status (`draft` / `flagged` / `verified` / `archived`) lives
   **only in the `status:` frontmatter field of the English canonical file** — folders
   no longer encode status.

This replaces today's status-based recipe folders (`draft/`, `flagged/`, `verified/`,
`archived/`) and the separate `data/photos/` tree.

**Scope:** skills, the pipeline agent, and templates only. Migrating or re-processing
existing photos/recipes and renaming any pre-existing typo'd folders is **out of scope**
(the user will handle existing data).

## Target folder layout

```
data/recipes/
  inbox/                       raw uploaded photos; unreadable ones stay here
  processed/
    photos/                    transcribed photos, renamed to the English kebab stem
    transcribed-en/            CANONICAL recipe: full template, status + tags + English body
    transcribed-fr/            husk: pure French transcription (content only)
    transcribed-<lang>/        husk for any other source language
  _TEMPLATE.md                 full schema — canonical English files (exists today)
  _TEMPLATE_HUSK.md            NEW: husk schema — recipe content only
```

- **English original** → only a `transcribed-en/<stem>.md` file (canonical).
- **Non-English original** (e.g. French) → `transcribed-en/<stem>.md` (canonical) **and**
  `transcribed-fr/<stem>.md` (pure reference), sharing the same English-derived stem.
- Canonical names use the correct spelling `transcribed-en`. (Note for data cleanup,
  out of scope: an existing `transcibed-en` typo folder should be renamed by the user.)

## Two templates

### `_TEMPLATE.md` (full, canonical — mostly unchanged)

The existing full schema is the shape of every `transcribed-en/` file. Changes:

- Add `original_language:` to the identity block — the source language code (e.g. `fr`),
  blank/`en` when the recipe was originally English. Signals that a husk reference exists.
- `language:` on a canonical file is always `en`.
- `photo:` references the file in `data/recipes/processed/photos/`.
- `status:` (`draft | flagged | verified | archived`) remains; it is now the **sole**
  record of status (no longer mirrored by a folder).

### `_TEMPLATE_HUSK.md` (new, pure transcription)

A stripped copy of the full template containing only what pertains to the recipe itself:

- **Frontmatter:** `id`, `title`, `language`, optional `flag:`, `yield`
  (`portions` / `batches` / `portion_size`), and `ingredients`
  (`name` / `section` / `qty` / `unit` / `preparation`).
- **Body:** `# {{ title }}`, `## Ingredients`, `## Instructions`, `## Notes`
  (Notes holds any other text literally printed on the sheet — PLU codes, printed
  plating, alternate-size columns, symbols).
- **Excluded:** `status`, `tags`, `categories`, `allergens`, `cost`, `labor`, `timing`,
  `critical_control_points`, `plating`, `storage`, `nutrition`, `source`, `created`,
  `photo`, `item_id`, `barcode`, ingredient cost hooks, and the setup fields. The
  `recipes-translate` skill adds these (blank) when it promotes a husk to the full
  template.

The `flag:` field is the single piece of process metadata the husk may carry, because it
is about the trustworthiness of the transcription itself. It is filled by
`photos-to-recipes` and removed by `recipes-translate` (see below), so a finished husk
ends as pure content + minimal frontmatter.

## The pipeline

Four skills, chained in order by the `recipe-pipeline` agent:

```
photos-rename → photos-to-recipes → recipes-translate → recipes-tag
```

### 1. photos-rename (updated)

- **Input:** image files in `data/recipes/inbox/` (was `data/photos/inbox/`).
- Read each photo, derive an **English** kebab-case stem from the dish title —
  **translating the title to English when the dish name is not English**. Same stem form
  the recipe file will use.
- Rename in place in `inbox/`. Never creates recipe files, never moves photos out of
  `inbox/`. Unreadable/ambiguous title → skip, leave as-is, report.
- Idempotent; de-duplicate colliding stems with `-2`, `-3`, …
- Examples updated to show translation, e.g. *"Sauce au Pétoncles et Crevettes"* →
  `scallop-shrimp-sauce`, *"Poulet à la Cardamome"* → `cardamom-chicken`.

### 2. photos-to-recipes (updated)

- **Input:** renamed photos in `data/recipes/inbox/`.
- **Schema:** read `_TEMPLATE_HUSK.md` fresh each run.
- For each photo, transcribe in the **original language** (pure transcription — no
  translation, no inference, no tags). Detect the sheet's language.
- **Output:** one **husk** file at `data/recipes/processed/transcribed-<lang>/<stem>.md`,
  where `<lang>` is the detected source language (English originals → `transcribed-en/`).
  Create the language folder if missing.
  - Husk frontmatter: `id` (= stem), `title`, `language`, `yield`, `ingredients`, and
    `flag:` **only when the transcription is uncertain**.
- **Uncertainty** (illegible/ambiguous quantity, glare, cut off, multiple recipes on a
  page, spans multiple photos) → still write the best-effort husk, and fill the `flag:`
  field using the existing flag-writing guidance (clear, friendly, actionable, addressed
  to the human who will fix it). Status is **not** set here.
- **Photo routing:** move every transcribed photo (clean or flagged) from `inbox/` to
  `data/recipes/processed/photos/`. Photos that cannot be transcribed at all stay in
  `inbox/`. (No separate flagged-photo folder — the flag rides on the recipe.)
- **id uniqueness:** the stem must be unique across all `transcribed-*` folders; if
  taken by a different recipe, append `-2`, `-3`, … Never overwrite.
- Idempotent: only touches `inbox/`; moves photos as it goes.

### 3. recipes-translate (NEW)

- **Input:** husk files under `transcribed-<lang>/` that have **not yet been promoted**
  to a canonical English file.
  - "Needs promotion" = no `transcribed-en/<stem>.md` exists yet, **or** (English
    original) the `transcribed-en/<stem>.md` is still a husk — detectable by the absence
    of a `status:` field, which only the full template has.
- **Schema:** read both `_TEMPLATE_HUSK.md` and `_TEMPLATE.md` fresh.
- For each husk:
  1. **Translate the content to English** — title, ingredient names, `section` labels,
     instructions, and notes. A no-op when the husk is already English. Preserve
     quantities, units, and meaning faithfully; do not invent or re-classify.
  2. **Promote to the full template:** copy the content fields, add all the metadata
     fields (blank, ready for tagging), and set:
     - `id` (= stem), `title` (English), `language: en`,
       `original_language: <lang>` (blank/`en` if originally English),
       `source: photo`, `created:` (today, `YYYY-MM-DD`),
       `photo:` (the file in `processed/photos/`).
     - `status:` = `flagged` if the husk carried a `flag:`, else `draft`; copy the flag
       text into the canonical file's `flag:` field.
     - Leave `tags`, `categories`, `allergens`, `cost`, `labor`, `timing`, `nutrition`,
       etc. blank — `recipes-tag` fills the tag block later.
  3. **Write** the full file to `data/recipes/processed/transcribed-en/<stem>.md`.
     - English original: the husk already lives there — **overwrite it in place** with
       the promoted full version (the husk's `flag:` is consumed naturally; no separate
       reference file remains).
     - Non-English original: the husk stays in `transcribed-<lang>/` as the pure
       reference. **Delete its `flag:` field** so it ends as pure content + minimal
       frontmatter (`id`, `language`).
- Translation only fills content/metadata scaffolding; it does **not** infer tags.
- May append to the canonical `flag:` (and keep `status: flagged`) if a translation is
  genuinely ambiguous.
- Idempotent: skip husks already promoted (a `transcribed-en/<stem>.md` with a `status:`
  field exists).

### 4. recipes-tag (updated)

- **Input:** canonical files in `data/recipes/processed/transcribed-en/` whose tag
  fields are empty. **Only `-en` files** — never touch husks in other `transcribed-*`
  folders. Skip any file without a `status:` field (an un-promoted English husk that
  `recipes-translate` has not processed yet) so a standalone run never tags a husk.
- **Skip archived:** skip files with `status: archived` (status is now a field, not a
  folder).
- **Schema:** `_TEMPLATE.md` — controlled vocabularies are the source of truth.
- Infer and fill `tags`, `allergens`, `categories` in place on the `-en` file, exactly as
  today (confident-or-blank, controlled vocabulary, never overwrite an existing value,
  never change `id`/`title`/`status`/content). Idempotent.

### recipe-pipeline agent (updated)

- Chain the **four** skills in order:
  `photos-rename → photos-to-recipes → recipes-translate → recipes-tag`.
- Update all folder references: inbox is `data/recipes/inbox/`; the photo moves to
  `data/recipes/processed/photos/` during transcription; the recipe lands as a husk in
  `transcribed-<lang>/` then a canonical file in `transcribed-en/`.
- Update step descriptions and the consolidated report (rename → husk → translated
  canonical file with status → tags). Keep its single-photo scope, strict ordering, and
  stop-on-hard-block behavior.

## Status lifecycle

- `status:` lives only on the canonical `transcribed-en/` file:
  `draft | flagged | verified | archived`.
- `recipes-translate` sets `draft` (clean) or `flagged` (husk had a flag).
- `verified` and `archived` are set later by a human by editing the field; the file
  **stays** in `transcribed-en/` (no folder move).
- The original-language husk has no status — it is a pure reference.

## Out of scope

- Migrating existing photos (`data/photos/done`, `data/photos/flagged`) or existing
  recipe files into the new layout.
- Deleting the old `data/photos/` tree and the old status-based recipe folders.
- Renaming the pre-existing `transcibed-en` typo folder.

The user will handle all existing-data movement; this work changes only the skills,
the pipeline agent, and the templates.
