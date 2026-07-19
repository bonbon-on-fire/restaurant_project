---
name: menus-translate
description: >-
  Translate original-language weekly-menu husks into the canonical English menu file. Use
  when the user wants to translate menus to English, promote menu husks, or asks to
  "translate the menus". Reads husks from data/menus/processed/transcribed-<lang>/,
  translates the content to English, promotes it to the full data/menus/_TEMPLATE.md schema
  (adding status and blank metadata), and writes data/menus/processed/transcribed-en/<id>.md.
  Does NOT tag dishes or link recipes — that is the menus-tag skill.
---

# Translate menu husks → canonical English menus

Turn each original-language weekly-menu husk into the project's canonical English menu
file. The `menus-digitize` skill produces husks (pure transcription, original language);
this skill translates them to English and promotes them to the full menu schema, adding the
metadata scaffolding (status, plus the blank `dishes:` tag block) that later steps fill.

This is the menu analogue of `recipes-translate`. The English file in `transcribed-en/` is
the **single canonical record** for a week. A non-English husk stays in its
`transcribed-<lang>/` folder as a pure reference.

## Inputs and outputs

- **Input:** menu husk files under `data/menus/processed/transcribed-<lang>/` that have not
  yet been promoted. A husk **needs promotion** when:
  - no `data/menus/processed/transcribed-en/<id>.md` exists yet, **or**
  - (English original) the file at `transcribed-en/<id>.md` is still a husk — it has no
    `status:` field (only the full template has one).
- **Schemas:** read both `data/menus/_TEMPLATE_HUSK.md` and `data/menus/_TEMPLATE.md` fresh
  every run.
- **Output:** one canonical English file per week at
  `data/menus/processed/transcribed-en/<id>.md`, matching `_TEMPLATE.md`.

## Procedure

1. **Find work.** List husk files across all `transcribed-<lang>/` folders (including
   `transcribed-en/`). Select those needing promotion (per the rule above). If none, tell
   the user there is nothing to translate and stop.

2. **Load the schemas.** Read `_TEMPLATE_HUSK.md` and `_TEMPLATE.md`.

3. **For each husk, in turn:**

   a. **Read the husk** — its frontmatter (`id`, `week_label`, `language`, `flag`, `pool`,
      `schedule`, `comment`) and its body.

   b. **Translate the content to English.** Translate `week_label` (e.g. `"15-21 Dec"` →
      `"15-21 Dec"`, `"9-15 Feb"` stays, but `"Mars 2-8"` → `"March 2-8"`), every dish name
      in `pool` and in each `schedule` day's `dishes`, plus `weather`, `notes`, and
      `comment`. When the husk's `language` is already `en`, this is a copy-through (no
      translation). Rules while translating:
      - **Preserve dates, `date:` values, `temp_c`, and the `id` exactly** — never shift a
        day or a number.
      - **Keep uncertainty markers.** A trailing ` ?` on a dish stays ` ?`. Translate the
        French annotation `(rayé)` to `(struck out)`; keep other inline markers (e.g.
        `MDF`, `x2`, `x3`, `FERMÉ` → `CLOSED`).
      - Where a dish is a known kitchen shorthand, translate it but you may keep the
        original term in parentheses when it helps the chef (matching existing
        `transcribed-en/` files, e.g. `Saumon croustade` → `Salmon crumble (croustade)`).
      - Leave already-English notes (the Friday sales/weather lines) as written.
      - Never re-classify, add, drop, or merge dishes. Faithful language conversion only.

   c. **Promote to the full template.** Build a `_TEMPLATE.md`-shaped file: copy the
      translated `pool`, `schedule`, and `comment` into the matching fields and set:
      - `id` (= the husk's id) and `week_of:` (= the id),
      - `week_label:` (English),
      - `language: en`,
      - `original_language:` = the husk's source language (e.g. `fr`); blank/`en` when the
        husk was already English,
      - `source: photo`,
      - `status:` = `flagged` if the husk has a `flag`, else `draft`,
      - `flag:` = the husk's flag text translated to English (only when flagged; otherwise
        blank),
      - `created:` = today's date (`YYYY-MM-DD`),
      - `photo:` = `<id>.jpg` referencing the spread photo now in
        `data/menus/processed/photos/` (match the actual file there).

      Leave the entire `dishes:` tag block **blank** (`dishes: []`) — `menus-tag` fills it
      later — and leave the body "Dish tags" section as its placeholder comment.

   d. **Render the body** in English, mirroring `_TEMPLATE.md` / the existing
      `transcribed-en/` files: `# Week of <week_label>`, `## Weekly production` (pool as a
      bullet per category), `## Weekly schedule` (a `Day | Date | Dishes` table),
      `## Comments and weather`, and the empty `## Dish tags` placeholder.

   e. **Write the canonical file** to `data/menus/processed/transcribed-en/<id>.md`.

   f. **Finalize the husk:**
      - **Non-English original (the normal case, `fr`):** the husk stays in
        `transcribed-<lang>/<id>.md` as the pure reference. **Delete its `flag:` field**
        (the flag now lives on the English file) so the husk ends as pure content + minimal
        frontmatter.
      - **English original:** the husk already lives at `transcribed-en/<id>.md` — the file
        you just wrote overwrites it in place. Nothing else to do.

4. **Report.** For each week: the source language, the canonical file written, its status
   (`draft`/`flagged`, with the flag reason if flagged), and whether a husk reference was
   kept (non-English) or overwritten (English).

## Rules

- **Translate faithfully.** Convert language only — never invent, drop, re-classify, or
  reorder dishes. Preserve all dates, temperatures, and numeric values exactly.
- **English file is canonical.** Status and (later) dish tags live only on the
  `transcribed-en/` file. The original-language husk is a pure reference with no status or
  tags.
- **Status from the flag.** `flagged` iff the husk carried a flag; otherwise `draft`. Never
  set `verified` or `archived` — those are human-only.
- **Move the flag, don't copy it.** After promotion, the canonical file holds the (English)
  flag and the non-English husk's `flag` field is removed.
- **Don't tag.** Leave the `dishes:` block blank and the "Dish tags" body section empty for
  `menus-tag`.
- **The COGS sticky stays out.** It was never transcribed and is never introduced here.
- **Never overwrite a promoted menu.** Skip any husk whose `transcribed-en/<id>.md` already
  has a `status:` field. Idempotent: safe to re-run.
