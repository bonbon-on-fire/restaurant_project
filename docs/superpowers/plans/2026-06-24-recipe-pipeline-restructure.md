# Recipe Pipeline Restructure Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rework the recipe-digitization skills so photos flow `inbox → processed/photos` with English names, recipes are transcribed as original-language "husks" then translated into a canonical English file, and lifecycle status lives in a frontmatter field instead of a folder.

**Architecture:** Two templates (`_TEMPLATE.md` full + new `_TEMPLATE_HUSK.md` content-only) and four skills chained by the `recipe-pipeline` agent: `photos-rename → photos-to-recipes → recipes-translate → recipes-tag`. Folders become language-based (`transcribed-en/`, `transcribed-<lang>/`); status (`draft|flagged|verified|archived`) is a field on the canonical English file only.

**Tech Stack:** Markdown skill/agent files with YAML frontmatter (Claude Code skills under `.claude/skills/`, agent under `.claude/agents/`) and recipe template files under `data/recipes/`. No code, no test runner — each task is verified by inspection plus `rg` (ripgrep) checks that old paths are gone and new ones are present.

## Global Constraints

- Spec: `docs/superpowers/specs/2026-06-24-recipe-pipeline-restructure-design.md` — the source of truth; copy its decisions verbatim.
- Canonical folder names (exact spelling): `data/recipes/inbox/`, `data/recipes/processed/photos/`, `data/recipes/processed/transcribed-en/`, `data/recipes/processed/transcribed-<lang>/`. Never write the typo `transcibed`.
- Status values exactly: `draft | flagged | verified | archived`. Status lives ONLY on the canonical `transcribed-en/` file's `status:` field. No folder encodes status.
- The original-language husk is a pure reference: minimal frontmatter (`id`, `language`) + recipe content only. No `status`, no `tags`, no operational metadata. The one exception is a temporary `flag:` set by `photos-to-recipes` and removed by `recipes-translate`.
- Tags are written ONLY on the `transcribed-en/` file. `recipes-tag` never touches a husk.
- Out of scope: migrating existing photos/recipes, deleting old `data/photos/` and old status folders, renaming the pre-existing `transcibed-en` typo folder. Skills/agent/templates only.
- Pipeline order is fixed: `photos-rename → photos-to-recipes → recipes-translate → recipes-tag`.

---

### Task 1: Create the husk template `_TEMPLATE_HUSK.md`

**Files:**
- Create: `data/recipes/_TEMPLATE_HUSK.md`

**Interfaces:**
- Consumes: nothing.
- Produces: the husk schema referenced by `photos-to-recipes` (writes it) and `recipes-translate` (reads it). Husk frontmatter keys: `id`, `title`, `language`, `flag` (optional), `yield` (`portions`/`batches`/`portion_size`), `ingredients[]` (`name`/`section`/`qty`/`unit`/`preparation`). Body sections: `## Ingredients`, `## Instructions`, `## Notes`.

- [ ] **Step 1: Write the husk template file**

Create `data/recipes/_TEMPLATE_HUSK.md` with exactly this content:

```markdown
---
# ============================================================
# HUSK — pure transcription, original language, recipe content ONLY.
# Produced by photos-to-recipes. Promoted to the full _TEMPLATE.md
# (English, with status + tags) by recipes-translate.
# NO status, tags, categories, allergens, cost, labor, timing, or
# nutrition fields belong here. `flag` is temporary (set on an
# uncertain transcription, removed by recipes-translate).
# ============================================================
id:                       # kebab-case English stem; matches the photo + canonical file
title:                    # primary recipe name, in the sheet's ORIGINAL language
language:                 # source language of this sheet (e.g. fr, en, es)
flag:                     # one-paragraph reason — ONLY when the transcription is uncertain

# ============================================================
# YIELD & PORTION
# ============================================================
yield:
  portions:
  batches:                # optional
  portion_size:           # serving size per portion, e.g. "5 oz", "250 ml", "1 filet"

# ============================================================
# INGREDIENTS  (transcribe exactly as printed)
# ============================================================
ingredients:
  - name:
    section:              # printed sheet section, e.g. Bouillon, Légumes, Hors feu (blank if none)
    qty:
    unit:                 # g, kg, ml, l, filet, ea, tbsp...  (prefer weight for accuracy)
    preparation:          # e.g. "diced", "room temp"
---

# {{ title }}

> Yields {{ portions }} portions{{ #portion_size }} · {{ portion_size }} each{{ /portion_size }}

## Ingredients

- {{ qty }} {{ unit }} {{ name }}{{ #preparation }} — {{ preparation }}{{ /preparation }}

## Instructions

1. <!-- step, with its own preparation/instruction text -->

## Notes

<!-- only text literally printed on the sheet: PLU codes, symbols, printed plating, alternate-size columns, storage text -->
```

- [ ] **Step 2: Verify the husk excludes forbidden fields**

Run: `rg -n 'status:|tags:|categories:|allergens:|cost:|labor:|nutrition:' data/recipes/_TEMPLATE_HUSK.md`
Expected: no matches (exit code 1, no output). The husk must not contain any of these keys.

- [ ] **Step 3: Verify the husk includes the required content keys**

Run: `rg -n '^id:|^title:|^language:|^flag:|^ingredients:' data/recipes/_TEMPLATE_HUSK.md`
Expected: one match per key (5 lines).

- [ ] **Step 4: Commit**

```bash
git add data/recipes/_TEMPLATE_HUSK.md
git commit -m "feat: add husk recipe template (content-only, original language)"
```

---

### Task 2: Update the full template `_TEMPLATE.md`

**Files:**
- Modify: `data/recipes/_TEMPLATE.md` (identity block, lines ~8–13)

**Interfaces:**
- Consumes: nothing.
- Produces: the canonical schema consumed by `recipes-translate` (writes it) and `recipes-tag` (reads/edits it). Adds `original_language:` to the identity block; clarifies `language`, `photo`, and `status` semantics. All other fields unchanged.

- [ ] **Step 1: Add `original_language` and clarify the identity comments**

In `data/recipes/_TEMPLATE.md`, replace this block:

```yaml
language:                 # source language (e.g. fr, en, es)
source: photo             # photo | manual | imported (e.g. from Parsley)
status: draft             # draft | flagged | verified | archived
flag:                     # one-paragraph reason — ONLY when status is flagged
created:                  # YYYY-MM-DD
photo:                    # source photo filename in data/photos/
```

with:

```yaml
language: en              # language of THIS canonical file — always en
original_language:        # source language if translated (e.g. fr); blank/en if originally English
source: photo             # photo | manual | imported (e.g. from Parsley)
status: draft             # draft | flagged | verified | archived — SOLE record of status (no status folders)
flag:                     # one-paragraph reason — ONLY when status is flagged
created:                  # YYYY-MM-DD
photo:                    # source photo filename in data/recipes/processed/photos/
```

- [ ] **Step 2: Verify the new field and paths**

Run: `rg -n 'original_language|processed/photos|SOLE record' data/recipes/_TEMPLATE.md`
Expected: 3 matches (the `original_language:` line, the `photo:` comment, the `status:` comment).

- [ ] **Step 3: Verify no stale `data/photos/` path remains in the template**

Run: `rg -n 'data/photos/' data/recipes/_TEMPLATE.md`
Expected: no matches (exit code 1).

- [ ] **Step 4: Commit**

```bash
git add data/recipes/_TEMPLATE.md
git commit -m "feat: add original_language to full recipe template; status is sole record"
```

---

### Task 3: Update the `photos-rename` skill (English names, new inbox path)

**Files:**
- Modify: `.claude/skills/photos-rename/SKILL.md` (whole file)

**Interfaces:**
- Consumes: photos in `data/recipes/inbox/`.
- Produces: photos renamed in place to a kebab-case English stem (translating the dish title to English when needed). The stem becomes the recipe `id` used by all downstream skills.

- [ ] **Step 1: Replace the skill file**

Overwrite `.claude/skills/photos-rename/SKILL.md` with exactly this content:

```markdown
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
```

- [ ] **Step 2: Verify the new inbox path and English-naming language are present**

Run: `rg -n 'data/recipes/inbox/|translate it to English|English names' .claude/skills/photos-rename/SKILL.md`
Expected: multiple matches (at least the inbox path, the translation bullet, and the rule).

- [ ] **Step 3: Verify no stale `data/photos/` path remains**

Run: `rg -n 'data/photos/' .claude/skills/photos-rename/SKILL.md`
Expected: no matches (exit code 1).

- [ ] **Step 4: Commit**

```bash
git add .claude/skills/photos-rename/SKILL.md
git commit -m "feat!: photos-rename uses data/recipes/inbox and English names"
```

---

### Task 4: Update the `photos-to-recipes` skill (husk output, new paths)

**Files:**
- Modify: `.claude/skills/photos-to-recipes/SKILL.md` (whole file)

**Interfaces:**
- Consumes: English-named photos in `data/recipes/inbox/`; the husk schema `data/recipes/_TEMPLATE_HUSK.md` (Task 1).
- Produces: a husk at `data/recipes/processed/transcribed-<lang>/<id>.md` (with optional `flag:`), and the photo moved to `data/recipes/processed/photos/`. Sets `id`, `title`, `language`, `yield`, `ingredients`, body, and `flag` only. Never sets status/tags.

- [ ] **Step 1: Replace the skill file**

Overwrite `.claude/skills/photos-to-recipes/SKILL.md` with exactly this content:

```markdown
---
name: photos-to-recipes
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
  should already be named in English by the `photos-rename` skill; the filename stem is
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
      - `id`: the filename stem (kebab-case English name from `photos-rename`). The id
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
```

- [ ] **Step 2: Verify new paths, husk template reference, and absence of status**

Run: `rg -n '_TEMPLATE_HUSK.md|transcribed-<lang>/|processed/photos/|data/recipes/inbox/' .claude/skills/photos-to-recipes/SKILL.md`
Expected: multiple matches covering the husk template, the output folder pattern, the photo destination, and the inbox.

- [ ] **Step 3: Verify no stale paths or status-folder language remain**

Run: `rg -n 'data/photos/|data/recipes/draft/|data/recipes/flagged/|status: draft' .claude/skills/photos-to-recipes/SKILL.md`
Expected: no matches (exit code 1). The skill must not reference old photo folders, old recipe status folders, or set a status.

- [ ] **Step 4: Commit**

```bash
git add .claude/skills/photos-to-recipes/SKILL.md
git commit -m "feat!: photos-to-recipes writes original-language husks, no status/tags"
```

---

### Task 5: Create the `recipes-translate` skill

**Files:**
- Create: `.claude/skills/recipes-translate/SKILL.md`

**Interfaces:**
- Consumes: husks under `data/recipes/processed/transcribed-<lang>/`; both schemas `_TEMPLATE_HUSK.md` and `_TEMPLATE.md`.
- Produces: a canonical English file at `data/recipes/processed/transcribed-en/<id>.md` matching `_TEMPLATE.md`, with `language: en`, `original_language`, `status` (`draft`/`flagged`), `flag` (if flagged), `source: photo`, `created`, `photo`, and blank tag/cost/etc. fields. For non-English husks, removes the husk's `flag:`; for English husks, overwrites the husk in place. "Needs promotion" signal: no `transcribed-en/<id>.md`, or one without a `status:` field.

- [ ] **Step 1: Write the skill file**

Create `.claude/skills/recipes-translate/SKILL.md` with exactly this content:

```markdown
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
```

- [ ] **Step 2: Verify the skill references both schemas and the canonical output, and the flag hand-off**

Run: `rg -n '_TEMPLATE_HUSK.md|_TEMPLATE.md|transcribed-en/|Delete its .flag|overwrites it in place' .claude/skills/recipes-translate/SKILL.md`
Expected: matches for both templates, the output folder, the flag-deletion rule, and the in-place-overwrite rule.

- [ ] **Step 3: Verify status logic and no tagging**

Run: `rg -n 'flagged if the husk|else .draft|Leave .categories|Don.t tag' .claude/skills/recipes-translate/SKILL.md`
Expected: matches confirming status-from-flag and that tagging is left to recipes-tag.

- [ ] **Step 4: Commit**

```bash
git add .claude/skills/recipes-translate/SKILL.md
git commit -m "feat: add recipes-translate skill (husk -> canonical English recipe)"
```

---

### Task 6: Update the `recipes-tag` skill (transcribed-en only, status-field filtering)

**Files:**
- Modify: `.claude/skills/recipes-tag/SKILL.md` (description, Inputs/outputs, Procedure step 1, Rules)

**Interfaces:**
- Consumes: canonical English files in `data/recipes/processed/transcribed-en/` that have a `status:` field not equal to `archived` and at least one empty tag field; `_TEMPLATE.md` for the controlled vocabulary.
- Produces: the same files edited in place — only `tags`, `allergens`, `categories`. Never touches husks, status, or content.

- [ ] **Step 1: Update the description frontmatter**

In `.claude/skills/recipes-tag/SKILL.md`, replace the `description:` block:

```yaml
description: >-
  Add structured menu-planning tags to recipe markdown files in data/recipes/.
  Use when the user wants to tag/classify recipes, fill in the tags block, or
  "tag the recipes" so the menu planner has data to work with. Reads each recipe's
  ingredients and instructions and infers controlled-vocabulary tags (protein,
  course, temperature, spice, richness, diet, allergens, etc.). This is the
  inference step photos-to-recipes deliberately skips. Does NOT transcribe photos
  or change a recipe's status folder.
```

with:

```yaml
description: >-
  Add structured menu-planning tags to the canonical English recipe files in
  data/recipes/processed/transcribed-en/. Use when the user wants to tag/classify
  recipes, fill in the tags block, or "tag the recipes" so the menu planner has data
  to work with. Reads each recipe's ingredients and instructions and infers
  controlled-vocabulary tags (protein, course, temperature, spice, richness, diet,
  allergens, etc.). This is the inference step photos-to-recipes/recipes-translate
  deliberately skip. Does NOT transcribe, translate, or change a recipe's status.
```

- [ ] **Step 2: Update the Inputs and outputs section**

Replace this block:

```markdown
- **Input:** existing recipe markdown files in `data/recipes/draft/`,
  `data/recipes/flagged/`, and `data/recipes/verified/`. **Skip `data/recipes/archived/`.**
- **Schema:** `data/recipes/_TEMPLATE.md` — the canonical field set and the **allowed
  values** for every tag. Read it fresh every run; the controlled vocabularies live
  there and are the source of truth.
- **Output:** the same files, edited in place. Only ever touch the `tags:` block,
  `allergens:`, and `categories:`. Never alter `id`, `title`, `status`, ingredients,
  instructions, or any other field. Never move a file between status folders.
```

with:

```markdown
- **Input:** canonical English recipe files in `data/recipes/processed/transcribed-en/`.
  Process a file only if it has a `status:` field whose value is **not** `archived`.
  **Skip files with `status: archived`**, and **skip any file with no `status:` field**
  (an un-promoted husk that `recipes-translate` has not processed yet). Never read or edit
  the original-language husks in other `transcribed-<lang>/` folders.
- **Schema:** `data/recipes/_TEMPLATE.md` — the canonical field set and the **allowed
  values** for every tag. Read it fresh every run; the controlled vocabularies live there
  and are the source of truth.
- **Output:** the same `transcribed-en/` files, edited in place. Only ever touch the
  `tags:` block, `allergens:`, and `categories:`. Never alter `id`, `title`, `status`,
  ingredients, instructions, or any other field. Never move a file.
```

- [ ] **Step 3: Update Procedure step 1**

Replace:

```markdown
1. **Find work.** List recipe files in `draft/`, `flagged/`, and `verified/`. A recipe
   "needs tagging" if any tag field is empty. By default process every recipe with
   empty tag fields; if the user names specific recipes, do only those.
```

with:

```markdown
1. **Find work.** List recipe files in `data/recipes/processed/transcribed-en/`. A recipe
   "needs tagging" if it has a `status:` field that is not `archived` and any tag field is
   empty. Skip files without a `status:` field (un-promoted husks). By default process
   every such recipe; if the user names specific recipes, do only those.
```

- [ ] **Step 4: Update the two Rules bullets that name status folders**

Replace:

```markdown
- **Touch tags only.** Never change `id`, `title`, `status`, `created`, ingredients,
  instructions, or move files between status folders. Tagging never re-files a recipe.
- **Skip archived.** Only `draft/`, `flagged/`, and `verified/` get tagged.
```

with:

```markdown
- **Touch tags only.** Never change `id`, `title`, `status`, `created`, ingredients,
  instructions, or move a file. Tagging never re-files a recipe.
- **Canonical English only.** Tag only files in `transcribed-en/` that have a `status:`
  field. Skip `status: archived` and skip the original-language husks entirely.
```

- [ ] **Step 5: Verify new input path and status-field filtering**

Run: `rg -n 'transcribed-en/|status: archived|no .status: field|un-promoted husk' .claude/skills/recipes-tag/SKILL.md`
Expected: multiple matches covering the input folder, the archived skip, and the husk skip.

- [ ] **Step 6: Verify no stale status-folder paths remain**

Run: `rg -n 'data/recipes/draft/|data/recipes/flagged/|data/recipes/verified/|data/recipes/archived/' .claude/skills/recipes-tag/SKILL.md`
Expected: no matches (exit code 1).

- [ ] **Step 7: Commit**

```bash
git add .claude/skills/recipes-tag/SKILL.md
git commit -m "feat!: recipes-tag reads transcribed-en and filters by status field"
```

---

### Task 7: Update the `recipe-pipeline` agent (four skills, new folders)

**Files:**
- Modify: `.claude/agents/recipe-pipeline.md` (whole file)

**Interfaces:**
- Consumes: a single photo in `data/recipes/inbox/`.
- Produces: orchestrates `photos-rename → photos-to-recipes → recipes-translate → recipes-tag` on that one photo, threading the result of each into the next.

- [ ] **Step 1: Replace the agent file**

Overwrite `.claude/agents/recipe-pipeline.md` with exactly this content:

```markdown
---
name: recipe-pipeline
description: >-
  End-to-end pipeline for a single recipe photo. Runs the photos-rename,
  photos-to-recipes, recipes-translate, and recipes-tag skills in succession on one
  selected photo so a raw inbox image becomes a fully named, transcribed, translated, and
  tagged recipe in one call. Use when the user points at a specific photo (or "the photo")
  and wants it taken all the way from inbox to a tagged English recipe without invoking the
  four skills by hand.
tools: Read, Write, Edit, Glob, Grep, Bash, Skill
---

# Recipe pipeline (one photo, four skills)

You take **one selected recipe photo** from raw inbox image to a fully named, transcribed,
translated, and tagged recipe by running four existing skills back-to-back, in this exact
order, in a single invocation:

1. **`photos-rename`** — give the photo a kebab-case **English** filename derived from its
   recipe title (translating the title when the dish name is not English), in place in
   `data/recipes/inbox/`.
2. **`photos-to-recipes`** — transcribe the (now correctly named) photo into an
   original-language **husk** markdown file under
   `data/recipes/processed/transcribed-<lang>/`, and move the photo to
   `data/recipes/processed/photos/`.
3. **`recipes-translate`** — translate that husk into the canonical English recipe at
   `data/recipes/processed/transcribed-en/`, setting `status` (`draft`/`flagged`) and the
   metadata scaffolding. The original-language husk stays as a pure reference (English
   originals have their husk overwritten in place).
4. **`recipes-tag`** — add menu-planning tags to the canonical English recipe file that
   step 3 just produced.

These four skills are designed to chain: rename sets the filename/stem, transcribe turns it
into a husk, translate promotes it to the canonical English recipe, tag classifies it. Run
them in order and pass the result of each into the next.

## Which photo

You operate on a **single photo** — the one the user selected or named. Determine the target
before you start:

- If the user names a specific file (or one is provided as input), that is your target.
- If the user says "the photo" / "this photo" and only one image sits in
  `data/recipes/inbox/`, that one is the target.
- If the inbox is empty, or it is ambiguous which photo is meant (several photos, no
  selection), **stop and ask** which photo to process rather than processing the whole
  inbox. This agent is single-photo by design.

## Procedure

Work on **only the target photo** at each step. The underlying skills naturally scan the
whole `inbox/`; keep your actions scoped to the one photo so you don't process others. Note
that the photo's **filename changes** after step 1 and the photo **moves out of `inbox/`**
during step 2 — track the current name/location as you go. The recipe id is the English
filename stem from step 1.

1. **Rename.** Invoke the `photos-rename` skill, scoped to the target photo. Record the new
   English filename (the kebab-case stem becomes the recipe's id). If rename **skips** the
   photo (illegible/blurry/no readable title), the downstream steps will also struggle —
   report that and stop; do not push a bad photo through transcription.

2. **Transcribe.** Invoke the `photos-to-recipes` skill on the renamed photo. Note the husk
   it produced and its `transcribed-<lang>/<id>.md` location (the `<lang>` tells you the
   source language), and that the photo moved to `data/recipes/processed/photos/`. Carry the
   husk path and id forward.

3. **Translate.** Invoke the `recipes-translate` skill on that husk. Note the canonical file
   it produced at `transcribed-en/<id>.md`, its `status` (`draft` vs `flagged`, with the
   flag reason if flagged), and whether the husk was kept as a reference (non-English) or
   overwritten in place (English). Carry the canonical file path forward to step 4.

4. **Tag.** Invoke the `recipes-tag` skill on the canonical file from step 3. It fills the
   `tags`, `allergens`, and `categories` fields by inference and leaves genuinely ambiguous
   fields blank. (It skips `status: archived`; a `draft` or `flagged` recipe is tagged.)

5. **Report.** Give one consolidated summary of the whole run:
   - the rename (`old → new`),
   - the husk created and its language folder,
   - the canonical English recipe created and its status (`draft` vs `flagged`, with the
     flag reason if flagged),
   - the tags that were set, and any fields deliberately left blank.

## Rules

- **One photo per invocation.** Each call handles exactly one selected photo through all
  four skills. Do not fan out across the whole inbox.
- **Strict order, no skipping.** Always rename → transcribe → translate → tag. Each step's
  output is the next step's input.
- **Stop on a hard block.** If `photos-rename` can't read a title, or `photos-to-recipes`
  can't transcribe at all, stop and report — don't fabricate a name or a recipe to keep the
  chain going. A `flagged` recipe is fine to continue through translation and tagging; a
  total failure is not.
- **Respect each skill's own contract.** Don't re-implement their logic — invoke the skills
  and let them do their job (naming convention, husk vs full schema, translation, photo
  routing, controlled vocabularies, idempotency). This agent only orchestrates and threads
  the result of one into the next.
- **Idempotent.** All four skills are safe to re-run; if a step was already done, let the
  skill no-op and continue.
```

- [ ] **Step 2: Verify all four skills and the new folders are referenced**

Run: `rg -n 'recipes-translate|transcribed-<lang>/|transcribed-en/|processed/photos/|data/recipes/inbox/' .claude/agents/recipe-pipeline.md`
Expected: matches for the new skill and every new path.

- [ ] **Step 3: Verify no stale paths or three-skill language remain**

Run: `rg -n 'data/photos/|data/recipes/draft/|data/recipes/flagged/|three skills' .claude/agents/recipe-pipeline.md`
Expected: no matches (exit code 1).

- [ ] **Step 4: Commit**

```bash
git add .claude/agents/recipe-pipeline.md
git commit -m "feat!: recipe-pipeline runs four skills with language-based folders"
```

---

### Task 8: Repo-wide consistency sweep

**Files:**
- Verify only (no new files): all skills, the agent, and templates.

**Interfaces:**
- Consumes: the outputs of Tasks 1–7.
- Produces: confirmation that no stale paths or status-folder assumptions remain anywhere in the skills/agent/templates.

- [ ] **Step 1: Confirm no old photo/status-folder paths remain across skills, agent, and templates**

Run: `rg -n 'data/photos/|data/recipes/draft/|data/recipes/flagged/|data/recipes/verified/|data/recipes/archived/|transcibed' .claude/skills .claude/agents data/recipes/_TEMPLATE.md data/recipes/_TEMPLATE_HUSK.md`
Expected: no matches (exit code 1). (Note the deliberate `transcibed` typo check — it must not appear.)

- [ ] **Step 2: Confirm the new pipeline vocabulary is present everywhere it should be**

Run: `rg -ln 'transcribed-en' .claude/skills .claude/agents data/recipes/_TEMPLATE.md`
Expected: at least `photos-to-recipes/SKILL.md` (via `transcribed-<lang>`), `recipes-translate/SKILL.md`, `recipes-tag/SKILL.md`, and `recipe-pipeline.md`.

- [ ] **Step 3: Confirm the four skill files and both templates exist**

Run: `ls .claude/skills/photos-rename/SKILL.md .claude/skills/photos-to-recipes/SKILL.md .claude/skills/recipes-translate/SKILL.md .claude/skills/recipes-tag/SKILL.md data/recipes/_TEMPLATE.md data/recipes/_TEMPLATE_HUSK.md`
Expected: all six paths listed, no "No such file" errors.

- [ ] **Step 4: Final commit (if the sweep prompted any fixes; otherwise skip)**

```bash
git add -A
git commit -m "chore: consistency sweep for recipe pipeline restructure"
```

---

## Notes for the implementer

- These are prompt/instruction files, not executable code; "verification" is `rg`/`ls`
  inspection, not a unit-test suite. Treat a non-empty match where "no matches" is expected
  (or vice-versa) as a failing check and fix before committing.
- Do **not** create, move, or delete any files under `data/recipes/inbox/`,
  `data/recipes/processed/`, `data/photos/`, or the old status folders — data migration is
  out of scope (the user handles it). You only create the two template files and the skill/
  agent markdown. The skills create their own runtime folders (e.g. `transcribed-<lang>/`)
  when they run later; you do not pre-create them here.
- Commit messages use `feat!:` where a skill's external contract (paths/behavior) changes,
  matching the repo's existing convention (see `git log`).
```

