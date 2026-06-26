# menus-recommend Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a `menus-recommend` skill that generates a mock weekly menu from the Parsley repertoire, guided by `PATTERNS.md` and a (given-or-invented) scenario, writes it as a flagged mock artifact under `data/menus/generated/`, and explains its reasoning.

**Architecture:** The deliverable is a prompt document (`.claude/skills/menus-recommend/SKILL.md`), the consumer end of the menu pipeline. There is **no executable code, no per-instance template, and no unit-test harness**; the output schema lives in the skill, and the skill is validated by running it with a scenario and checking the generated file against acceptance criteria. The TDD red/green cycle is replaced by: define acceptance criteria → run the skill → verify the artifact → commit.

**Tech Stack:** Markdown + YAML frontmatter (skill and generated artifact). Git (Bash tool, POSIX sh) for commits. Python 3 + PyYAML is available and used **only** for verification, never as part of the skill.

## Global Constraints

These apply to every task; the SKILL.md must encode them and every validation must check them.

- **Reads (read-only):** `data/menus/PATTERNS.md`, the Parsley repertoire (`data/parsley/INDEX.md` + `data/parsley/recipes-en/`), and the user's scenario. Never reads `data/menus/processed/transcribed-en/` real menus.
- **Writes only** into `data/menus/generated/`. Never edits `PATTERNS.md`, the Parsley recipes, or any real menu.
- **Always flagged mock:** every generated file carries `source: generated` and `status: mock` and a `scenario:` block. Never writes into `processed/transcribed-en/`; never uses a real-menu status value (`draft`/`flagged`/`verified`/`archived`).
- **Constraints:** use every user-supplied constraint; invent only the unspecified gaps (season-appropriate); record both `given` and `invented` in `scenario:`.
- **Output unit:** a full week — a category `pool` + a Mon–Fri `schedule` with per-day `temp_c`/`weather`/`notes`, plus a `dishes:` tag block (inferred tags the choices were based on), plus a `## Why this menu` rationale.
- **Dish sourcing:** the full Parsley repertoire, inferring a candidate's tags on the fly; anchor the high-confidence `rotation` staples; honor `menu_skeleton` counts, `per_day_balance`, `weather_temp`, and `calendar`.
- **Fresh artifact per run:** each run writes a NEW, non-colliding filename; never overwrites a prior mock. Generative — not idempotent.
- **Honesty first:** prefer high-confidence patterns; flag every improvisation, low/`speculative` pattern reliance, and approximate inferred tag in the rationale; reference the small-sample caveat.
- **Spec is authoritative:** `docs/superpowers/specs/2026-06-25-menus-recommend-design.md`.

---

## File Structure

- **Create:** `.claude/skills/menus-recommend/SKILL.md` — the skill prompt document (the bulk of the work).
- **Generated during validation:** files under `data/menus/generated/` — the mock menus (committed as example outputs).
- **Read-only inputs the skill consumes:** `data/menus/PATTERNS.md`; `data/parsley/INDEX.md` + `data/parsley/recipes-en/`.

Sibling skills to mirror for tone, structure, and gating: `.claude/skills/menus-analyze/SKILL.md` and `.claude/skills/menus-tag/SKILL.md`. The canonical menu structure to mirror lives in `data/menus/_TEMPLATE.md`.

---

## Task 1: Author the menus-recommend SKILL.md

**Files:**
- Create: `.claude/skills/menus-recommend/SKILL.md`

**Interfaces:**
- Consumes: `PATTERNS.md` (six dimensions + support/confidence/source); the Parsley repertoire; the canonical menu structure from `data/menus/_TEMPLATE.md`.
- Produces: the executable skill behavior validated in Tasks 2–3. When run, it writes a flagged mock menu into `data/menus/generated/`.

- [ ] **Step 1: Define acceptance criteria**

The file must have valid YAML frontmatter with `name: menus-recommend` and a trigger-style `description:` (third-person; when to use it; that it produces a flagged MOCK menu and never edits real data). The body must specify: inputs/outputs, the generated-file schema (generation metadata + canonical `pool`/`schedule` + `dishes:` block + `## Why this menu`), the procedure, the layered rationale, and the rules — consistent with the Global Constraints and exact paths.

- [ ] **Step 2: Create the skill file with the full content below**

Create `.claude/skills/menus-recommend/SKILL.md` with exactly this content:

````markdown
---
name: menus-recommend
description: >-
  Generate a mock weekly menu in the chef's style from a scenario (weather,
  temperatures, day-of-week, holidays/events — given by the user or invented),
  drawing dishes from the Parsley repertoire and guided by the chef-pattern
  document data/menus/PATTERNS.md, then explain why it composed the week that
  way. Use when the user wants to mock up / draft / recommend a menu, see a
  "what-if" week for some weather or event, or test the chef's patterns against
  new constraints. Writes a clearly-flagged MOCK file under data/menus/generated/
  (never a real menu) and never edits PATTERNS.md, the recipes, or real menus.
  This is the final, consumer end of the menu pipeline (after menus-analyze).
---

# Recommend a mock weekly menu in the chef's style

Generate a **mock weekly menu** for a given or invented scenario by drawing
dishes from the Parsley repertoire, shaped by the chef's patterns in
`data/menus/PATTERNS.md`, and **explain why** the week looks the way it does.

The output is a fictional exploration artifact — a "what-if" week — NOT a real
chef menu. Flag it as mock, keep it isolated under `data/menus/generated/`, and
be honest in the rationale about where you followed a strong pattern versus where
you improvised or guessed.

## Inputs and outputs

- **Constraints / scenario (input).** Take any constraints the user gives in the
  request (e.g. "hot sunny week, Tuesday is a holiday"). **Invent** plausible,
  season-appropriate values for anything left unspecified (per-day temp/weather,
  an optional event). Record both the given and invented parts.
- **`data/menus/PATTERNS.md` (read-only).** The chef-pattern living document —
  all six dimensions (`menu_skeleton`, `rotation`, `per_day_balance`,
  `weather_temp`, `calendar`, `stated_intent`) with `support`/`confidence`/
  `source`. This is your only source of chef knowledge. If it is missing or thin,
  say so and generate with an explicit "limited pattern basis" caveat.
- **Parsley repertoire (read-only).** `data/parsley/INDEX.md` +
  `data/parsley/recipes-en/` (210 recipes). Pick dishes from here; **infer** a
  candidate's tags (protein/temperature/format/cuisine/diet/spice) from its name
  + ingredients when you need them for balance/weather decisions. Never modify a
  recipe file.
- **Output (write only).** A NEW file under `data/menus/generated/`. Never read or
  write the real menus in `data/menus/processed/transcribed-en/`.

## The generated file

Mirror the canonical menu structure (`data/menus/_TEMPLATE.md`) so the mock is
comparable to real menus, but flag it unmistakably as generated.

### Frontmatter

```yaml
id: mock-hot-sunny-week-01        # kebab slug from the scenario; unique, no collision
source: generated                 # ALWAYS generated — marks this as machine-made
status: mock                      # ALWAYS mock — NEVER draft/flagged/verified/archived
generated: <YYYY-MM-DD>
patterns_generated: <YYYY-MM-DD>  # the `meta.generated` date of the PATTERNS.md you used
scenario:
  given: "hot sunny week, Tuesday is a holiday"   # verbatim user input, or "none"
  invented: "Mon 28° sunny; Tue CLOSED holiday; Wed 30° sunny; Thu 27° cloudy; Fri 31° sunny"
  week_label: "Mock — hot sunny week"
pool:
  vege: [...]
  poisson: [...]
  soupe: [...]
  potage: [...]
  salades: [...]
  salade-comp: [...]
  # ... the pool categories from data/menus/_TEMPLATE.md, filled to the skeleton counts
schedule:
  - day: monday
    date:                          # leave blank or a mock date; this is not a real week
    dishes: [...]
    temp_c: 28
    weather: "sunny"
    notes:
  # ... tuesday..friday; a closed day has dishes: [] and a notes reason
dishes:
  - name: "..."                    # each unique chosen dish, like menus-tag's block
    recipe_id:                     # parsley slug if matched, else blank
    recipe_source: parsley         # parsley | none
    tag_source: inferred
    protein: ...
    temperature: ...
    richness: ...
    format: ...
    cuisine: ...
    spice_level: ...
    diet: [...]
```

### Body

- The rendered menu: a `## Weekly production` (pool by category) and
  `## Weekly schedule` (the Mon–Fri table with temp/weather), exactly like a real
  menu body.
- Then a `## Why this menu` rationale section (below).

### Filename / identity

Write to `data/menus/generated/<slug>.md` where `<slug>` derives from the
scenario (e.g. `mock-hot-sunny-week`). If that file already exists, append a
numeric suffix (`-01`, `-02`, …) so you **never overwrite a prior mock**. Each run
is a fresh artifact.

## The `## Why this menu` rationale (layered)

1. **Strategy** — one paragraph: the scenario and how it shaped the week overall.
2. **Per-day notes** — what each service day emphasizes and why (weather/event
   driven), including any closure.
3. **Pattern citations** — key choices cite the specific `PATTERNS` dimension and
   its confidence, e.g. "Kale mango cabbage every day — rotation staple, high";
   "cold soups Friday — weather_temp, chef-stated"; "soup + potage daily —
   per_day_balance, medium".
4. **Improvisation / honesty flags** — explicitly call out where you improvised
   (no governing pattern), leaned on a `low`/`speculative` pattern, or used an
   approximate *inferred* tag for a repertoire dish whose real tags are unknown.
   Reference the `PATTERNS.md` small-sample caveat.

## Procedure

1. **Resolve constraints.** Parse the user's scenario; invent plausible
   season-appropriate values for anything unspecified. Record `given` and
   `invented` in the `scenario:` block.
2. **Load patterns + repertoire.** Read `PATTERNS.md` (all six dimensions) and the
   Parsley `INDEX.md`.
3. **Build the weekly skeleton.** Set per-category counts from `menu_skeleton`
   (use `median`, bounded by `min`/`max`).
4. **Assemble the dish pool from Parsley.** Anchor the high-confidence `rotation`
   staples (map each to a Parsley recipe). Fill remaining category slots from the
   repertoire, inferring each candidate's tags and honoring `per_day_balance`,
   `weather_temp`, diet coverage, and cuisine variety.
5. **Lay out Mon–Fri.** Assign pool dishes to days honoring within-day balance
   (≥1 fish/pescatarian main + ≥1 plant-substitute main; a brothy soup and a
   thick potage in parallel; multiple cold salads; mixed cuisines) and each day's
   weather (cold/rainy → push soups; hot → salad-lean). Close holiday days
   (`dishes: []` + a `notes` reason).
6. **Write the file.** Canonical structure (`pool` + `schedule` + `dishes:` tag
   block) with the mock flags, plus the `## Why this menu` rationale. Use a fresh,
   non-colliding filename under `data/menus/generated/`.
7. **Report.** Summarize the scenario used, where the file was saved, and the
   headline reasoning.

## Rules

- **Read-only on real data.** Never edit `PATTERNS.md`, Parsley recipes, or any
  real menu. Write only into `data/menus/generated/`.
- **Always flagged mock.** Every file carries `source: generated` + `status:
  mock`. Never write into `processed/transcribed-en/`, never use a real-menu
  status.
- **Honesty first.** Prefer high-confidence patterns; surface every improvisation
  and the small-sample caveat. Never dress a weak inference up as a chef rule.
- **Respect chef style.** Honor skeleton counts, staples, within-day balance, and
  weather/calendar behaviors from `PATTERNS.md`.
- **Use given, invent the gaps.** Never ignore a supplied constraint; only
  fabricate the unspecified; record both.
- **Fresh artifact per run.** Each run writes a new, non-colliding file; never
  overwrite a prior mock.
- **Degrade gracefully.** If `PATTERNS.md` is missing or thin, generate with an
  explicit "limited pattern basis" caveat rather than fabricating confident rules.
````

- [ ] **Step 3: Verify the file structure**

Re-read `.claude/skills/menus-recommend/SKILL.md`. Confirm: frontmatter has
`name: menus-recommend` and a `description:`; the body contains Inputs/outputs,
the generated-file schema (frontmatter + body + filename), the `## Why this menu`
layered rationale, the Procedure, and the Rules; every referenced path
(`data/menus/PATTERNS.md`, `data/parsley/INDEX.md`, `data/parsley/recipes-en/`,
`data/menus/generated/`, `data/menus/_TEMPLATE.md`) is correct.

- [ ] **Step 4: Commit**

```bash
git add .claude/skills/menus-recommend/SKILL.md
git commit -m "feat(menus-recommend): add skill that generates mock menus from patterns

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
```

---

## Task 2: Generate a mock menu from a given scenario, and validate

Acceptance test with an explicit scenario so the checks are concrete.

**Files:**
- Create (skill output): a file under `data/menus/generated/` (e.g. `data/menus/generated/mock-hot-sunny-week.md`).

**Interfaces:**
- Consumes: the SKILL.md from Task 1, `PATTERNS.md`, the Parsley repertoire.
- Produces: the first committed mock menu.

- [ ] **Step 1: Capture the real-corpus pre-state**

Record `git status --porcelain` of `data/menus/processed/transcribed-en/`,
`data/menus/PATTERNS.md`, and `data/parsley/` (all expected clean) so you can
prove afterwards the run touched none of them.

- [ ] **Step 2: Run the skill with a concrete scenario**

Invoke `menus-recommend` with the scenario: **"hot sunny week (high-20s to low-30s
°C), and Tuesday is a statutory holiday (closed)."** Let it write the mock menu
under `data/menus/generated/`.

- [ ] **Step 3: Verify the artifact mechanically**

Run this checker (finds the newest generated file, parses its frontmatter, asserts
the schema/flag/scenario rules):

```bash
cd /d/restaurant_project
PYTHONIOENCODING=utf-8 python - <<'PY'
import io,glob,os,yaml,sys
files=glob.glob('data/menus/generated/*.md')
assert files, "no file written under data/menus/generated/"
f=max(files, key=os.path.getmtime)
t=io.open(f,encoding='utf-8').read()
fm=yaml.safe_load(t.split('---')[1])
ok=True
def check(c,msg):
    global ok; print(("OK  " if c else "FAIL")+" "+msg); ok=ok and c
check(fm.get('source')=='generated', "source == generated")
check(fm.get('status')=='mock', "status == mock")
check(isinstance(fm.get('scenario'),dict) and fm['scenario'].get('given'), "scenario.given present")
check(bool(fm['scenario'].get('invented')), "scenario.invented present")
check(isinstance(fm.get('pool'),dict) and any(fm['pool'].values()), "pool present and non-empty")
sch=fm.get('schedule') or []
check(len(sch)==5, f"schedule has 5 days (got {len(sch)})")
closed=[d for d in sch if not (d.get('dishes') or [])]
check(len(closed)>=1, "at least one closed day (the Tuesday holiday)")
tue=[d for d in sch if str(d.get('day','')).lower()=='tuesday']
check(bool(tue) and not (tue[0].get('dishes') or []), "Tuesday is the closed day")
check(isinstance(fm.get('dishes'),list) and len(fm['dishes'])>0, "dishes tag block present")
for i,e in enumerate(fm.get('dishes',[])):
    check('name' in e and 'tag_source' in e, f"dishes[{i}] has name+tag_source")
check('## Why this menu' in t, "body has '## Why this menu' rationale")
print("\nFILE:", f)
print("RESULT:", "ALL PASS" if ok else "FAILURES")
sys.exit(0 if ok else 1)
PY
```
Expected: every line `OK` and `RESULT: ALL PASS`.

- [ ] **Step 4: Verify by content (spot checks)**

Re-read the generated file and confirm:
- **Staples present:** the high-confidence rotation staples (Poutine, Kale mango
  cabbage, Pico de Gallo, a quiche, veggie Jerk chicken) appear in the `pool`.
- **Scenario honored:** the hot days skew salad/sandwich-heavy; Tuesday's
  `schedule` entry is closed with a holiday `notes` reason; the days' `temp_c`/
  `weather` match the stated hot-sunny scenario.
- **Skeleton respected:** category counts are within the `menu_skeleton` ranges
  from `PATTERNS.md` (e.g. ~5 soupe, ~5 potage, 1 quiche, a pico).
- **Rationale quality:** `## Why this menu` has a strategy paragraph, per-day
  notes, at least two explicit pattern citations naming a `PATTERNS` dimension +
  confidence, and at least one honesty/improvisation flag.

- [ ] **Step 5: Verify scope — real corpus untouched**

```bash
cd /d/restaurant_project
for p in data/menus/processed/transcribed-en/ data/menus/PATTERNS.md data/parsley/; do
  git status --porcelain "$p" | grep . && echo "^^ UNEXPECTED change in $p" || echo "$p untouched OK"
done
git status --porcelain data/menus/generated/
```
Expected: each real path "untouched OK"; the generated file shows as new/untracked.

- [ ] **Step 6: Fix the skill if any check fails**

If a mechanical or content check fails, the fault is in the SKILL.md wording.
Delete the generated file, edit `.claude/skills/menus-recommend/SKILL.md` to
remove the ambiguity, commit the skill fix, and re-run Steps 2–5.

- [ ] **Step 7: Commit the example mock menu**

```bash
cd /d/restaurant_project
git add data/menus/generated/
git commit -m "data(menus): add hot-sunny-week mock via menus-recommend (example output)

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
```

---

## Task 3: Invented-scenario run + fresh-artifact check

**Files:**
- Create (skill output): a second file under `data/menus/generated/`.

**Interfaces:**
- Consumes: the validated skill and the Task 2 mock.
- Produces: a second mock proving scenario-invention and no-overwrite.

- [ ] **Step 1: Count existing generated files**

```bash
cd /d/restaurant_project
ls -1 data/menus/generated/*.md | wc -l
```
Note the count (1 after Task 2).

- [ ] **Step 2: Run the skill with NO scenario**

Invoke `menus-recommend` with no constraints ("just generate a mock week"). It
must invent a plausible season-appropriate scenario.

- [ ] **Step 3: Verify invention + fresh artifact (no overwrite)**

```bash
cd /d/restaurant_project
echo "file count (expect 2):"; ls -1 data/menus/generated/*.md | wc -l
PYTHONIOENCODING=utf-8 python - <<'PY'
import io,glob,os,yaml
files=sorted(glob.glob('data/menus/generated/*.md'), key=os.path.getmtime)
newest=files[-1]
fm=yaml.safe_load(io.open(newest,encoding='utf-8').read().split('---')[1])
print("newest file:", newest)
print("distinct filename from Task 2:", os.path.basename(files[0])!=os.path.basename(files[-1]))
print("source/status:", fm.get('source'), fm.get('status'))
g=(fm.get('scenario') or {}).get('given')
print("scenario.given indicates none/invented:", str(g).strip().lower() in {'none','', 'none — invented','(none)'} or 'invent' in str(g).lower())
print("scenario.invented present:", bool((fm.get('scenario') or {}).get('invented')))
PY
```
Expected: count is **2** (the Task 2 file was NOT overwritten); the newest file has
a distinct filename, `source: generated` / `status: mock`, `scenario.given`
marking it as none/invented, and a populated `scenario.invented`.

- [ ] **Step 4: Verify real corpus still untouched**

```bash
cd /d/restaurant_project
for p in data/menus/processed/transcribed-en/ data/menus/PATTERNS.md data/parsley/; do
  git status --porcelain "$p" | grep . && echo "^^ UNEXPECTED change in $p" || echo "$p untouched OK"
done
```
Expected: each "untouched OK".

- [ ] **Step 5: Commit the second example mock menu**

```bash
cd /d/restaurant_project
git add data/menus/generated/
git commit -m "data(menus): add invented-scenario mock via menus-recommend (fresh-artifact check)

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
```

---

## Notes for the implementer

- This repo has **no test runner, linter, or build**. "Verify" means run the
  provided Python checker, read the artifact against the listed criteria, and
  `git status` to confirm scope.
- The skill is generative, so exact output varies run-to-run; acceptance is about
  the mock flags, schema validity, the scenario being honored (closed Tuesday;
  hot-day salad lean), the staples appearing, and an honest rationale — NOT
  byte-for-byte reproducibility.
- Keep the skill's tone and section shape close to
  `.claude/skills/menus-analyze/SKILL.md`; they are sibling skills.
- This is the end of the pipeline — nothing consumes `data/menus/generated/`, and
  `menus-tag`/`menus-analyze` must never read it (they only read
  `processed/transcribed-en/`).
