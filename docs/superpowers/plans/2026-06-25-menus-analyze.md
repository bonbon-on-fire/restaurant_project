# menus-analyze Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a `menus-analyze` skill that reads all tagged weekly menus and regenerates one living document, `data/menus/PATTERNS.md`, portraying the chef's menu-making patterns across six dimensions, each pattern carrying support/confidence/source.

**Architecture:** The deliverable is a prompt document (`.claude/skills/menus-analyze/SKILL.md`), the synthesis sibling to `menus-tag`. There is **no executable code, no per-instance template, and no unit-test harness** in this repo; the `PATTERNS.md` schema lives inside the skill, and the skill is validated by running it against the 6 tagged menus and checking the generated document against acceptance criteria. The TDD red/green cycle is replaced by: define acceptance criteria → run the skill → verify the document → commit.

**Tech Stack:** Markdown + YAML frontmatter (skill and generated document). Git (Bash tool, POSIX sh) for commits. Python 3 + PyYAML is available and used **only** for verification (parsing the generated frontmatter), never as part of the skill.

## Global Constraints

These apply to every task; the SKILL.md must encode them and every validation must check them.

- **Reads (read-only):** canonical English menus in `data/menus/processed/transcribed-en/` whose `status:` is **not** `archived` **and** that have a populated `dishes:` block. Never read `transcribed-fr/` husks or recipe files.
- **Writes only** `data/menus/PATTERNS.md`, regenerated **wholesale** each run. Never modifies, reorders, or moves a menu file.
- **Six dimensions, in this order:** `menu_skeleton`, `rotation`, `per_day_balance`, `weather_temp`, `calendar`, `stated_intent`.
- **Per-pattern evidence model:** every pattern entry (all dimensions except `meta`) carries `support` (string `"n/total"` + contributing week dates), `confidence` (`high | medium | low | speculative`), and `source` (`stated | inferred`). `stated_intent` entries carry `quote`, `week`, `source`.
- **Confidence rubric:** high = ≥5/6 weeks or chef-stated+corroborated; medium = 3–4/6 or stated with partial support; low = 2 weeks or stated once uncorroborated; speculative = single week / weak inference. A `stated` fact is reliable as a fact at n=1 but its generality stays `low` until repeated.
- **Cross-week dish identity** is matched by normalized `name` + `aka`.
- **Insufficient-data guard:** if fewer than 2 menus are tagged, emit a minimal document stating "insufficient data" rather than inventing patterns.
- **Confident or flagged:** never assert beyond the evidence; prefer `stated` over `inferred`; keep the small-sample caveat prominent.
- **Spec is authoritative:** `docs/superpowers/specs/2026-06-25-menus-analyze-design.md`.

---

## File Structure

- **Create:** `.claude/skills/menus-analyze/SKILL.md` — the skill prompt document (the bulk of the work).
- **Generated during validation:** `data/menus/PATTERNS.md` — the living patterns document (created by running the skill; committed as the first real output).
- **Read-only inputs the skill consumes:** `data/menus/processed/transcribed-en/*.md` (the 6 tagged menus: `dishes:` tags + `name`/`aka`, per-day `schedule` temp/weather/notes, `comment`, `pool`).

The sibling skills to mirror for tone, structure, and gating are `.claude/skills/menus-tag/SKILL.md` and `.claude/skills/recipes-tag/SKILL.md`.

---

## Task 1: Author the menus-analyze SKILL.md

**Files:**
- Create: `.claude/skills/menus-analyze/SKILL.md`

**Interfaces:**
- Consumes: the tagged-menu structure produced by `menus-tag` (the `dishes:` block with `name`/`aka`/core tags, and the `schedule` with `temp_c`/`weather`/`notes`).
- Produces: the executable skill behavior validated in Tasks 2–3. When run, it writes `data/menus/PATTERNS.md` with the six-dimension schema below.

- [ ] **Step 1: Define acceptance criteria**

The file must have valid YAML frontmatter with `name: menus-analyze` and a trigger-style `description:` (third-person; says when to use it; says it produces patterns, not recommendations, and does not edit menus). The body must specify: inputs/outputs/gating, the `PATTERNS.md` schema (the six dimensions + the `meta` block + the per-pattern evidence model), the confidence rubric, the procedure, and the rules — all consistent with the Global Constraints and exact paths.

- [ ] **Step 2: Create the skill file with the full content below**

Create `.claude/skills/menus-analyze/SKILL.md` with exactly this content:

````markdown
---
name: menus-analyze
description: >-
  Analyze all tagged weekly menus and regenerate the living patterns document
  data/menus/PATTERNS.md. Use when the user wants to understand the chef's
  menu-making patterns, refresh/rebuild the menu patterns document, or analyze
  menus after tagging. Reads each tagged menu's dish tags + per-day schedule
  (temperature/weather/notes) + comment and derives six dimensions — menu
  skeleton, dish rotation, per-day balance, weather/temperature tendencies,
  calendar/holiday behaviors, and a verbatim stated-intent log — each pattern
  carrying support/confidence/source so a small, partly-inferred sample stays
  honest. Produces patterns, NOT recommendations, and never edits the menus.
  Runs after menus-tag.
---

# Analyze menus into a living patterns document

Read every tagged weekly menu and **regenerate one living document,
`data/menus/PATTERNS.md`**, that portrays how this chef thinks about menus. Each
run rebuilds the document from ALL currently tagged menus, so it always reflects
the chef's full body of work to date. This is the synthesis step after
`menus-tag`. It produces **patterns, not recommendations** — a future
menu-recommender is the consumer.

The dataset is small and partly inferred, so the document must be **honest about
evidence**: every pattern records how much support it has, how confident we are,
and whether the chef stated it or we inferred it. Never assert beyond the
evidence; a flagged-as-weak pattern is correct, an overconfident one is harmful.

## Inputs and outputs

- **Input (read-only):** canonical English menus in
  `data/menus/processed/transcribed-en/` whose `status:` is **not** `archived`
  **and** that have a populated `dishes:` block (already tagged by `menus-tag`).
  For each, use: the `dishes:` entries (core tags + `name` + `aka`), the per-day
  `schedule` (`day`, `date`, `dishes`, `temp_c`, `weather`, `notes`), the
  `comment` footer, and the `pool` category counts. Do **not** read the
  `transcribed-fr/` husks and do **not** read recipe files — the tags are the
  abstraction layer.
- **Excluded:** menus with no `dishes:` block (untagged) are NOT analyzed; list
  them in `meta.excluded_untagged` with a reminder to run `menus-tag`. Archived
  menus are skipped silently.
- **Output (write only):** `data/menus/PATTERNS.md`, regenerated wholesale each
  run (overwrite any existing file). **Never** modify, reorder, or move a menu
  file.

## The PATTERNS.md document

YAML frontmatter is the machine-readable source of truth; the markdown body
renders the same content as readable prose/tables. Regenerate BOTH every run.

### Per-pattern evidence model

Every pattern entry (in every dimension except `meta`) carries:

- `support` — `"n/total"` plus the contributing week dates, e.g.
  `"4/6 [2026-05-25, 2026-06-01, 2026-06-08, 2026-06-15]"`.
- `confidence` — `high | medium | low | speculative` (rubric below).
- `source` — `stated` (chef wrote it in a note/comment) or `inferred` (derived
  from tags/schedule).

### Six dimensions (emit in this order)

1. **menu_skeleton** — for each `pool` category, the per-week count distribution
   (`per_week_count: {min, median, max}`): the chef's structural template.
2. **rotation** — dish-level frequency across weeks (same dish matched via
   normalized `name` + `aka`), each with `weeks_present` and a `role` of
   `staple` (recurs most weeks) / `rotating` (intermittent) / `one-off` (single
   week).
3. **per_day_balance** — recurring WITHIN-day composition rules across the
   protein/temperature/format/cuisine/diet tags (e.g. "every service day fields
   at least one fish main and one plant-substitute main").
4. **weather_temp** — tendencies linking temperature/weather buckets to dish-tag
   tendencies (e.g. cold/rainy → soups; hot → cold/light salads). Support
   denominator here is "weeks with weather/temp noted", stated as such.
5. **calendar** — holiday/event/seasonal behaviors (statutory-holiday closures,
   themed weeks like Father's Day, recurring "MDF" markers, vacation/seasonal
   prep).
6. **stated_intent** — verbatim chef reasoning pulled from `notes`/`comment`,
   each with `quote`, `week`, and `source: stated`. Highest-confidence signal.

### Schema example (shape to follow)

```yaml
meta:
  weeks_analyzed: 6
  week_range: "2026-05-11 .. 2026-06-15"
  weeks: [2026-05-11, 2026-05-18, 2026-05-25, 2026-06-01, 2026-06-08, 2026-06-15]
  excluded_untagged: []
  generated: <YYYY-MM-DD>
  sample_caveat: "6 weeks; temp/weather present on 4. Treat low/speculative patterns as hypotheses."
menu_skeleton:
  - category: poisson
    per_week_count: {min: 2, median: 3, max: 3}
    support: "6/6"
    confidence: high
    source: inferred
rotation:
  - dish: "Kale mango cabbage (KM)"
    weeks_present: 6
    role: staple
    support: "6/6 [all weeks]"
    confidence: high
    source: inferred
per_day_balance:
  - rule: "Every service day fields at least one fish main and one plant-substitute main"
    support: "5/6 [2026-05-11, 2026-05-25, 2026-06-01, 2026-06-08, 2026-06-15]"
    confidence: medium
    source: inferred
weather_temp:
  - pattern: "Cold / rainy days lean to soups; hot days add cold, light salads"
    support: "3/4 weeks with weather noted"
    confidence: medium
    source: stated
    evidence: "2026-06-15 note 'cold soups for rainy/cold weekend'; hot 2026-06-08 salad-heavy"
calendar:
  - pattern: "Statutory holidays -> closed that day"
    support: "1/6 [2026-05-18 Victoria Day]"
    confidence: low
    source: stated
stated_intent:
  - quote: "Cold soups for rainy / cold weekend"
    week: 2026-06-15
    source: stated
```

### Body render (regenerate from the frontmatter every run)

- A `meta` summary line including the `sample_caveat`.
- A rotation table sorted by `weeks_present` desc: Dish | Weeks | Role | Confidence.
- The menu skeleton as a category table: Category | Min | Median | Max | Confidence.
- per_day_balance, weather_temp, calendar as short bullet lists, each bullet
  ending with `(support; confidence; source)`.
- The stated_intent log as a quoted list with week dates.

The body is a derived view — always rebuild it from the frontmatter so the two
cannot drift.

## Confidence rubric

- **high** — consistent in ≥5/6 weeks, or chef-`stated` AND corroborated by tags.
- **medium** — 3–4/6 weeks, or a clear stated intent with partial corroboration.
- **low** — 2 weeks, or stated once with no corroboration.
- **speculative** — single week / weak inference.
- A chef-`stated` fact is reliable AS A FACT even at n=1, but its GENERALITY
  stays `low` until repeated; score generality, and let `source: stated` record
  that it is documented intent.

## Procedure

1. **Find work.** List menus in `data/menus/processed/transcribed-en/` with
   `status:` not `archived`. Partition into tagged (populated `dishes:`) and
   untagged. Analyze the tagged set; record the untagged in
   `meta.excluded_untagged`. **If fewer than 2 menus are tagged**, write a
   minimal `PATTERNS.md` whose `meta` says "insufficient data" and stop.
2. **Load & join.** For each tagged menu, join each `schedule` day's dish
   strings to their `dishes:` entry via normalized `name`/`aka`; collect that
   day's `temp_c`/`weather`/`notes`, the week `comment`, and the `pool` counts.
3. **Build per-week understanding** (intermediate, not written): each day's tag
   composition (proteins, formats, temperatures, cuisines, diet coverage), the
   week skeleton, and its events.
4. **Derive each dimension** across weeks (the six above).
5. **Score every pattern** — compute `support` (count + week list), assign
   `confidence` per the rubric, set `source`.
6. **Write `PATTERNS.md` wholesale** — frontmatter + rendered body; overwrite.
7. **Report** — weeks analyzed, pattern counts per dimension, the
   highest-confidence findings, and the explicit small-sample caveat.

## Rules

- **Confident or flagged.** Never assert beyond the evidence. Prefer `stated`
  over `inferred`. Keep the small-sample caveat prominent in `meta` and body.
- **Read-only on menus; writes only `PATTERNS.md`.** Never edit/reorder/move a
  menu file.
- **Wholesale regeneration.** The document is fully generated each run from all
  tagged menus; it is not hand-edited. Re-running after new menus are tagged
  rebuilds it from the full set.
- **Depends on `menus-tag`.** Analyze only tagged menus; honor the
  insufficient-data guard.
- **Tags are the abstraction.** Reason from dish tags + schedule + notes; do not
  open recipe files.
- **Cross-week identity via `name` + `aka`.** Match the same dish across weeks by
  normalized `name`/`aka`; this is the backbone of rotation.
````

- [ ] **Step 3: Verify the file structure**

Re-read `.claude/skills/menus-analyze/SKILL.md`. Confirm: frontmatter has
`name: menus-analyze` and a `description:`; the body contains the Inputs/outputs,
the six-dimension schema, the evidence model, the confidence rubric, the
Procedure, and the Rules; the six dimension names appear in the required order;
every referenced path (`data/menus/processed/transcribed-en/`,
`data/menus/PATTERNS.md`) is correct.

- [ ] **Step 4: Commit**

```bash
git add .claude/skills/menus-analyze/SKILL.md
git commit -m "feat(menus-analyze): add skill that builds the menu patterns living document

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
```

---

## Task 2: Generate and validate PATTERNS.md on the 6 tagged menus

This is the acceptance test. Run the skill against the real corpus and verify the
generated document.

**Files:**
- Create (skill output): `data/menus/PATTERNS.md`

**Interfaces:**
- Consumes: the SKILL.md from Task 1 and the 6 tagged menus.
- Produces: the first real `PATTERNS.md`, committed.

- [ ] **Step 1: Capture the menus' pre-state**

Record the current `git status --porcelain` of `data/menus/processed/transcribed-en/`
(expected: clean) so you can prove afterwards that analysis did not modify any
menu file.

- [ ] **Step 2: Run the skill**

Invoke the `menus-analyze` skill. Let it read all 6 tagged menus and write
`data/menus/PATTERNS.md`.

- [ ] **Step 3: Verify the document mechanically**

Run this checker (parses the frontmatter and asserts the schema/evidence rules):

```bash
cd /d/restaurant_project
PYTHONIOENCODING=utf-8 python - <<'PY'
import io,yaml,sys
t=io.open('data/menus/PATTERNS.md',encoding='utf-8').read()
assert t.startswith('---'), "no frontmatter"
fm=yaml.safe_load(t.split('---')[1])
ok=True
def check(c,msg):
    global ok
    print(("OK  " if c else "FAIL")+" "+msg); ok = ok and c
meta=fm.get('meta',{})
check(meta.get('weeks_analyzed')==6, "meta.weeks_analyzed == 6")
check(len(meta.get('weeks',[]))==6, "meta.weeks lists 6 weeks")
check(meta.get('excluded_untagged')==[], "meta.excluded_untagged == []")
check(bool(meta.get('sample_caveat')), "meta.sample_caveat present")
dims=['menu_skeleton','rotation','per_day_balance','weather_temp','calendar','stated_intent']
for d in dims:
    check(isinstance(fm.get(d),list) and len(fm[d])>0, f"{d} present and non-empty")
allowed={'high','medium','low','speculative'}
for d in ['menu_skeleton','rotation','per_day_balance','weather_temp','calendar']:
    for i,e in enumerate(fm.get(d,[])):
        check('support' in e, f"{d}[{i}] has support")
        check(e.get('confidence') in allowed, f"{d}[{i}] confidence valid ({e.get('confidence')})")
        check(e.get('source') in {'stated','inferred'}, f"{d}[{i}] source valid ({e.get('source')})")
for i,e in enumerate(fm.get('stated_intent',[])):
    check('quote' in e and 'week' in e, f"stated_intent[{i}] has quote+week")
print("\nRESULT:", "ALL PASS" if ok else "FAILURES ABOVE")
sys.exit(0 if ok else 1)
PY
```
Expected: every line `OK` and `RESULT: ALL PASS`.

- [ ] **Step 4: Verify the document by content (spot checks)**

Re-read `data/menus/PATTERNS.md` and confirm:
- **Rotation correctness:** a known recurring dish (e.g. "Kale mango cabbage (KM)",
  which appears in every week's pool) is present in `rotation` with a high
  `weeks_present` and `role: staple`.
- **Stated intent captured:** the `stated_intent` log includes the chef's
  verbatim line "Cold soups for rainy / cold weekend" (from 2026-06-15), and the
  weather dimension references it with `source: stated`.
- **Honesty:** at least one pattern is marked `low` or `speculative` (a 6-week
  sample should not be all-`high`); the `weather_temp` support uses the "weeks
  with weather noted" denominator.
- **Body render:** the body has a rotation table sorted by weeks, a skeleton
  table, and the stated-intent quoted list.

- [ ] **Step 5: Verify scope — menus untouched, only PATTERNS.md created**

```bash
cd /d/restaurant_project
git status --porcelain data/menus/processed/transcribed-en/ | grep . && echo "^^ UNEXPECTED menu changes" || echo "menus untouched OK"
git status --porcelain data/menus/PATTERNS.md
```
Expected: "menus untouched OK", and `PATTERNS.md` shows as a new untracked file (`?? data/menus/PATTERNS.md`).

- [ ] **Step 6: Fix the skill if any check fails**

If a mechanical check or spot check fails, the fault is in the SKILL.md wording.
Delete the generated file (`rm data/menus/PATTERNS.md`), edit
`.claude/skills/menus-analyze/SKILL.md` to remove the ambiguity, commit the skill
fix, and re-run Steps 2–5.

- [ ] **Step 7: Commit the document**

```bash
git add data/menus/PATTERNS.md
git commit -m "data(menus): generate PATTERNS.md living document via menus-analyze

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
```

---

## Task 3: Regeneration (wholesale) check

**Files:**
- Modify (skill output): `data/menus/PATTERNS.md`

**Interfaces:**
- Consumes: the validated skill and the committed `PATTERNS.md`.
- Produces: confirmation that re-running regenerates a valid document without
  touching menus.

- [ ] **Step 1: Re-run the skill**

Invoke `menus-analyze` again (no menus changed since Task 2).

- [ ] **Step 2: Verify regeneration is valid and stable**

Re-run the mechanical checker from Task 2 Step 3 against the regenerated file.
Expected: `RESULT: ALL PASS` again. The document is wholesale-generated, so minor
prose wording may differ between runs, but it MUST still: cover the same 6 weeks,
keep all six dimensions non-empty, keep the same set of high-confidence staples
(e.g. KM remains a `staple`), and keep every pattern's evidence fields valid.

- [ ] **Step 3: Verify menus still untouched**

```bash
cd /d/restaurant_project
git status --porcelain data/menus/processed/transcribed-en/ | grep . && echo "^^ UNEXPECTED menu changes" || echo "menus untouched OK"
```
Expected: "menus untouched OK".

- [ ] **Step 4: Commit only if the regeneration meaningfully improved the document**

If the regenerated document is equivalent or only cosmetically different, discard
it to avoid churn:
```bash
git checkout -- data/menus/PATTERNS.md
```
If it is a genuine improvement, commit it:
```bash
git add data/menus/PATTERNS.md
git commit -m "data(menus): refresh PATTERNS.md regeneration

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
```

---

## Notes for the implementer

- This repo has **no test runner, linter, or build**. "Verify" means run the
  provided Python frontmatter checker and read the document against the listed
  criteria, plus `git status` to confirm scope.
- The skill is a synthesis/reasoning task, so exact output varies run-to-run;
  acceptance is about schema validity, evidence honesty, and a few known-true
  content anchors (KM is a staple; the 2026-06-15 cold-soup note is captured) —
  NOT byte-for-byte reproducibility.
- Keep the skill's tone and section shape close to
  `.claude/skills/menus-tag/SKILL.md`; they are sibling skills.
- The menu **recommender** that consumes `PATTERNS.md` is a separate future skill
  and is explicitly out of scope here.
