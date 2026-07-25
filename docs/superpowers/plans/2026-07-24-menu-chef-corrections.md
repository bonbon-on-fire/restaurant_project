# Menu Chef Corrections Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Store the chef's mock-menu corrections as a durable chef-notes input that `menus-analyze` folds into `PATTERNS.md`, fix the menu taxonomy (define "texture", reclassify Chili d'orge and falafels as végé), and stop `menus-recommend` from putting chilled cold soups on cold days.

**Architecture:** A new `data/menus/chef-notes/*.md` file holds chef-stated corrections (source of truth). Two prompt-file skills gain it as an authoritative input: `menus-analyze` folds its `corrections:` into `PATTERNS.md` (stated beats inferred), and `menus-tag` reads its `taxonomy:` as per-dish overrides. `PATTERNS.md` and `menus-recommend` are corrected to match.

**Tech Stack:** Markdown-on-disk, YAML frontmatter, Claude Agent skills (prompt files). No compiler or test runner — the "code" is prompt text and structured markdown. Verification is by grep + inspection of regenerated output (the project has no automated test harness for skills; this is stated in the spec).

## Global Constraints

- The husk/inference discipline holds: **chef-stated facts outrank inferred patterns**; where they conflict, stated wins and the inferred entry is removed or annotated as superseded.
- **Verbatim `stated_intent` quotes in `PATTERNS.md` are never deleted** — including the 2026-06-15 "Cold soups for rainy / cold weekend" quote.
- Controlled vocabulary comes from `data/recipes/_TEMPLATE.md`; do not invent new tag values.
- `PATTERNS.md` frontmatter is the source of truth; its markdown body is a derived render — **edit both so they cannot drift**.
- Chef-notes dish names must match the pool/Parsley spellings used elsewhere, or matching silently no-ops.
- Commit after each task. Work happens on branch `feat/menu-chef-corrections` (already created).

---

### Task 1: Chef-notes input file

**Files:**
- Create: `data/menus/chef-notes/2026-07-24.md`

**Interfaces:**
- Produces: a file with YAML frontmatter containing a `corrections:` list (each: `rule`, `dimension`, `source`, `date`, optional `overrides`) and a `taxonomy:` list (each: `dish`, forced classification fields, `source`, optional `note`). `menus-analyze` (Task 2) reads `corrections:`; `menus-tag` (Task 4) reads `taxonomy:`.

- [ ] **Step 1: Create the chef-notes file**

Create `data/menus/chef-notes/2026-07-24.md` with exactly this content:

```markdown
---
date: 2026-07-24
source: chef-notes
context: "Chef review of generated mock menus (the 'MOCK MENU NOTES' page). Chef-stated ground truth; outranks inferred PATTERNS.md."
corrections:
  - rule: "Pico de Gallo is served on Thursday; it is never made on a Monday."
    dimension: per_day_balance
    source: stated
    date: 2026-07-24
  - rule: "Kale mango salad is made on Monday (and on occasion Thursday), not every day."
    dimension: per_day_balance
    source: stated
    date: 2026-07-24
  - rule: "Végé-chicken / texture dishes run Tuesday and Thursday, spaced a day apart; a third texture dish appears on Wednesday only under high demand."
    dimension: per_day_balance
    source: stated
    date: 2026-07-24
  - rule: "Chilled cold soups appear in the rotation only on days that are 24°C and above. A 'cold soup' is served cold and suits hot weather, not cold weather."
    dimension: weather_temp
    source: stated
    date: 2026-07-24
    overrides: "Cool/rainy days drive cold soups onto the menu (chef-stated for the rainy weekend); cold soups (Mélonccio) also appear pre-emptively in hot weeks"
  - rule: "Exception to the cold-soup rule: Potage Vert L'été may appear in any season when the store has a surplus of broccoli or zucchini it cannot sell. It fills the prêt-à-manger fridge (no reheating), not the hot line; it browns if held hot all day and does not sell in the restaurant in cold months."
    dimension: weather_temp
    source: stated
    date: 2026-07-24
  - rule: "Mélonccio (cold soup) is limited to once per week, with one to two weeks between appearances, and sells only in the hottest part of summer."
    dimension: weather_temp
    source: stated
    date: 2026-07-24
  - rule: "Chili d'orge appears in the rotation only in the colder months, October through April."
    dimension: calendar
    source: stated
    date: 2026-07-24
taxonomy:
  - dish: "Chili d'orge"
    pool_category: vege
    format: stew
    weather: cold
    season: "oct-apr"
    source: stated
    note: "A végé dish, NOT a soupe. Its principal character is a hearty barley chili, good for cold days."
  - dish: "Falafels"
    pool_category: vege
    protein: legume
    source: stated
    note: "A végé dish. Sold as the complete dish, or as sous-vide falafels in bags of 8 (a production option, not a tag)."
---

# Chef notes — 2026-07-24

Chef review of the generated mock menus. These are **chef-stated corrections**
and take precedence over the inferred patterns in `data/menus/PATTERNS.md`.

## Corrections (fold into PATTERNS.md)

- **Pico de Gallo → Thursday, never Monday.** (per_day_balance)
- **Kale mango salad → Monday, occasionally Thursday; not daily.** (per_day_balance)
- **Végé-chicken / texture → Tuesday + Thursday, spaced a day apart; Wednesday
  only on high demand.** (per_day_balance)
- **Chilled cold soups → only on days ≥ 24 °C.** (weather_temp) Supersedes the
  earlier "cool/rainy → cold soups" inference.
- **Exception — Potage Vert L'été** may appear any season on broccoli/zucchini
  surplus; goes to the prêt-à-manger fridge, not the hot line. (weather_temp)
- **Mélonccio → once/week max, 1–2 weeks apart, hottest summer only.** (weather_temp)
- **Chili d'orge → Oct–Apr only.** (calendar)

## Taxonomy overrides (fold into menus-tag)

- **Chili d'orge** is a **végé** dish, not a soupe (`weather: cold`, `season:
  oct-apr`).
- **Falafels** is a **végé** dish.
```

- [ ] **Step 2: Verify the file exists and the frontmatter is well-formed**

Run: `rg -n "dimension|pool_category|overrides" data/menus/chef-notes/2026-07-24.md`
Expected: matches for all seven `dimension:` lines, both `pool_category:` lines, and the one `overrides:` line.

Confirm by eye that the YAML frontmatter (between the `---` fences) is valid: two top-level lists `corrections:` and `taxonomy:`, consistent indentation, quoted strings with accents intact.

- [ ] **Step 3: Commit**

```bash
git add data/menus/chef-notes/2026-07-24.md
git commit -m "feat(menus): add chef-notes input (2026-07-24 mock-menu corrections)

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
```

---

### Task 2: Make `menus-analyze` chef-notes-aware

**Files:**
- Modify: `.claude/skills/menus-analyze/SKILL.md`

**Interfaces:**
- Consumes: `data/menus/chef-notes/*.md` `corrections:` list from Task 1.
- Produces: an analyze skill that, on every run, folds chef-stated corrections into their named dimension (`source: stated`) and drops/annotates any inferred pattern named in an entry's `overrides`.

- [ ] **Step 1: Add chef-notes to the Inputs section**

In `.claude/skills/menus-analyze/SKILL.md`, in `## Inputs and outputs`, immediately after the `- **Input (read-only):**` bullet (the one ending "…do **not** read recipe files — the tags are the abstraction layer."), add:

```markdown
- **Chef-notes (read-only):** every file in `data/menus/chef-notes/*.md`. Each has
  a `corrections:` list of chef-**stated** pattern rules, each with a `dimension`
  (`per_day_balance` | `weather_temp` | `rotation` | `calendar`), `source: stated`,
  a `date`, and an optional `overrides` string naming an inferred pattern it
  supersedes. These are ground truth and **outrank** anything inferred from the
  weeks. (The `taxonomy:` section of the same files is for `menus-tag`, not for
  this skill — ignore it here.)
```

- [ ] **Step 2: Add the fold-in step to the Procedure**

In `## Procedure`, between step 4 ("**Derive each dimension**…") and step 5 ("**Score every pattern**…"), insert a new step (renumber the following steps):

```markdown
5. **Fold in chef-notes (stated beats inferred).** Load every
   `data/menus/chef-notes/*.md`. For each `corrections:` entry, add it to the
   dimension named by its `dimension` field with `source: stated`, a `support`
   of `"chef-stated <date>"`, and `confidence` per the rubric (an explicit chef
   rule scores `high`). If the entry has an `overrides` value, find the inferred
   pattern in that dimension whose text matches it and **remove it** (or, if it
   carries independent evidence worth keeping, annotate its `evidence` with
   "superseded by chef note <date>"). **Never** delete or alter any
   `stated_intent` verbatim quote — correct only the inference built on it.
```

- [ ] **Step 3: Add a Rules bullet**

In `## Rules`, after the `- **Confident or flagged.**` bullet, add:

```markdown
- **Chef-notes are authoritative.** Corrections in `data/menus/chef-notes/*.md`
  are `source: stated` and outrank inferred patterns; where they conflict, the
  chef-note wins and the inferred pattern is dropped or annotated as superseded.
  Verbatim `stated_intent` quotes are never removed.
```

- [ ] **Step 4: Update the meta note about folded notes**

In the schema example under `meta:`, after the `generated:` line, add a line so future readers know the field exists:

```yaml
  chef_notes_folded: []   # dates of chef-notes files whose corrections were folded in, e.g. [2026-07-24]
```

- [ ] **Step 5: Verify the edits are present**

Run: `rg -n "chef-notes|chef note|Fold in chef-notes|chef_notes_folded" .claude/skills/menus-analyze/SKILL.md`
Expected: matches in the Inputs bullet, the new Procedure step, the new Rules bullet, and the meta field.

- [ ] **Step 6: Commit**

```bash
git add .claude/skills/menus-analyze/SKILL.md
git commit -m "feat(menus): teach menus-analyze to fold chef-notes into PATTERNS

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
```

---

### Task 3: Regenerate `PATTERNS.md` with the corrections

**Files:**
- Modify: `data/menus/PATTERNS.md`

**Interfaces:**
- Consumes: chef-notes `corrections:` (Task 1), the fold-in rules (Task 2).
- Produces: a `PATTERNS.md` whose `weather_temp`, `per_day_balance`, and `calendar` dimensions carry the chef corrections (`source: stated`), with the superseded cold-soup inference removed, verbatim quotes intact, and the body render matching the frontmatter.

These are the exact deltas a chef-notes-aware `menus-analyze` run produces over the current 6-week inference; all other entries stay byte-for-byte the same (same 6 weeks ⇒ same inferred numbers).

- [ ] **Step 1: Replace the superseded cold-soup `weather_temp` entry**

In `data/menus/PATTERNS.md` frontmatter, in `weather_temp:`, replace this entry:

```yaml
  - pattern: "Cool/rainy days drive cold soups onto the menu (chef-stated for the rainy weekend); cold soups (Mélonccio) also appear pre-emptively in hot weeks"
    support: "1/4 weeks with weather noted, chef-stated [2026-06-15]"
    confidence: low
    source: stated
    evidence: "2026-06-15 Friday note 'Cold soups for rainy / cold weekend' (Thu/Fri 18-19°, rain). Cold Mélonccio soup also pooled in hot week 2026-06-08, so the cold→cold-soup link is not exclusive."
```

with:

```yaml
  - pattern: "Chilled cold soups appear only on days ≥24°C (hot days) — a 'cold soup' is served cold and suits hot weather, not cold weather"
    support: "chef-stated 2026-07-24"
    confidence: high
    source: stated
    evidence: "Chef note 2026-07-24. Supersedes the earlier inference that cool/rainy days drive cold soups, which misread 'cold soup' (chilled format) as a cold-weather dish. The verbatim 2026-06-15 note 'Cold soups for rainy / cold weekend' meant hot/hearty soups (or Chili d'orge), not the chilled format."
  - pattern: "Exception — Potage Vert L'été may appear in any season when broccoli/zucchini surplus can't be sold; it fills the prêt-à-manger fridge (no reheating), not the hot line (it browns if held hot and won't sell in the restaurant in cold months)"
    support: "chef-stated 2026-07-24"
    confidence: high
    source: stated
    evidence: "Chef note 2026-07-24."
  - pattern: "Mélonccio (cold soup) limited to once per week, 1–2 weeks apart, hottest-summer only"
    support: "chef-stated 2026-07-24"
    confidence: high
    source: stated
    evidence: "Chef note 2026-07-24. Refines the inferred Mélonccio rotation."
```

- [ ] **Step 2: Add the three `per_day_balance` corrections**

In `per_day_balance:`, after the last existing entry (the "Cuisine spread within a day is broad and mixed…" entry, which ends `source: inferred`), append:

```yaml
  - rule: "Pico de Gallo is served on Thursday; never on Monday"
    support: "chef-stated 2026-07-24"
    confidence: high
    source: stated
  - rule: "Kale mango cabbage (KM) is made on Monday (occasionally Thursday), not every day"
    support: "chef-stated 2026-07-24"
    confidence: high
    source: stated
  - rule: "Végé-chicken / texture dishes run Tuesday and Thursday, spaced a day apart; a third (Wednesday) only under high demand"
    support: "chef-stated 2026-07-24"
    confidence: high
    source: stated
```

- [ ] **Step 3: Add the `calendar` correction**

In `calendar:`, after the last existing entry ("New dishes are trialled and judged before entering rotation…"), append:

```yaml
  - pattern: "Chili d'Orge (a végé dish for cold days, not a soupe) appears Oct–Apr only"
    support: "chef-stated 2026-07-24"
    confidence: high
    source: stated
    evidence: "Chef note 2026-07-24. Paired taxonomy fix: Chili d'Orge is a végé dish, not a soupe."
```

- [ ] **Step 4: Record the fold in `meta`**

In `meta:`, after the `generated: 2026-06-25` line, add:

```yaml
  chef_notes_folded: [2026-07-24]
```

- [ ] **Step 5: Update the body render to match the frontmatter**

The markdown body must mirror the frontmatter (no drift). In the `## Weather / temperature tendencies` section, replace the first bullet:

```markdown
- Cool/rainy days drive cold soups onto the menu (chef-stated for the rainy weekend); cold soups (Mélonccio) also appear pre-emptively in hot weeks, so the link is not exclusive. (1/4 weeks with weather noted [2026-06-15]; low; stated)
```

with:

```markdown
- Chilled cold soups appear only on days ≥ 24 °C (hot days) — a "cold soup" is served cold and suits hot weather, not cold. (chef-stated 2026-07-24; high; stated)
- Exception — Potage Vert L'été may appear any season on broccoli/zucchini surplus; it fills the prêt-à-manger fridge, not the hot line (browns if held hot; won't sell in the restaurant in cold months). (chef-stated 2026-07-24; high; stated)
- Mélonccio (cold soup) limited to once per week, 1–2 weeks apart, hottest-summer only. (chef-stated 2026-07-24; high; stated)
```

In the `## Per-day balance` section, append these bullets:

```markdown
- Pico de Gallo is served on Thursday; never on Monday. (chef-stated 2026-07-24; high; stated)
- Kale mango cabbage (KM) is made on Monday (occasionally Thursday), not every day. (chef-stated 2026-07-24; high; stated)
- Végé-chicken / texture dishes run Tuesday and Thursday, spaced a day apart; a third (Wednesday) only under high demand. (chef-stated 2026-07-24; high; stated)
```

In the `## Calendar / holiday / seasonal behaviors` section, append:

```markdown
- Chili d'Orge (a végé dish for cold days, not a soupe) appears Oct–Apr only. (chef-stated 2026-07-24; high; stated)
```

Also update the top-of-body `**Meta.**` / caveat area is optional; leave the sample caveat text unchanged.

- [ ] **Step 6: Verify corrections present, superseded text gone, verbatim quote intact**

Run: `rg -n "≥24°C|≥ 24 °C|Pico de Gallo is served on Thursday|Chili d'Orge .*Oct–Apr|chef_notes_folded" data/menus/PATTERNS.md`
Expected: matches for the cold-soup rule (frontmatter + body), the Pico rule (frontmatter + body), the Chili d'orge calendar entry, and the meta field.

Run: `rg -n "Cool/rainy days drive cold soups" data/menus/PATTERNS.md`
Expected: **no matches** (the superseded inference is gone from both frontmatter and body).

Run: `rg -n "Cold soups for rainy / cold weekend" data/menus/PATTERNS.md`
Expected: **still present** (the verbatim `stated_intent` quote at the bottom is preserved).

- [ ] **Step 7: Commit**

```bash
git add data/menus/PATTERNS.md
git commit -m "feat(menus): fold chef corrections into PATTERNS.md (cold-soup, pico, KM, texture spacing, Chili d'orge)

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
```

---

### Task 4: Taxonomy — define "texture" and consume chef-notes overrides in `menus-tag`

**Files:**
- Modify: `data/menus/_TEMPLATE.md:32` (the `texture:` pool line)
- Modify: `.claude/skills/menus-tag/SKILL.md`

**Interfaces:**
- Consumes: chef-notes `taxonomy:` list from Task 1.
- Produces: a `menus-tag` skill that defines the "texture" category and applies chef-notes `taxonomy:` entries as authoritative per-dish overrides.

- [ ] **Step 1: Annotate the `texture` pool category in the menu template**

In `data/menus/_TEMPLATE.md`, change the line:

```yaml
  texture: []
```

to:

```yaml
  texture: []             # principal ingredient is végé chicken OR végé beef (both soy + shiitake based) → protein: plant-substitute
```

- [ ] **Step 2: Add chef-notes taxonomy to the `menus-tag` Inputs**

In `.claude/skills/menus-tag/SKILL.md`, in `## Inputs and outputs`, after the `- **Vocabulary (schema):**` bullet, add:

```markdown
- **Chef-notes taxonomy (read-only, authoritative):** the `taxonomy:` section of
  every `data/menus/chef-notes/*.md`. Each entry names a `dish` and forces
  classification fields (`pool_category`, `format`, `protein`, `weather`,
  `season`, …). When a dish you are tagging matches a `taxonomy:` entry (match by
  normalized name/aka), **use the stated values instead of inferring** — this is
  chef ground truth and overrides content inference. (The `corrections:` section
  of the same files is for `menus-analyze`, not this skill — ignore it here.)
```

- [ ] **Step 3: Define "texture" in the core tag set**

In `## The core tag set`, in the `protein` bullet, after "(vege chicken / TVP / pulled mushroom → `plant-substitute`)", append this sentence:

```markdown
  A **texture** dish (the menu's `texture` pool category) is one whose principal
  ingredient is **végé chicken or végé beef** (both soy + shiitake based) → its
  `protein` is `plant-substitute`.
```

- [ ] **Step 4: Add the override to the Procedure**

In `## Procedure` step 3, in sub-step **c. Two-tier match**, add a leading line before "**Tier 1**":

```markdown
      - **Tier 0 — chef-notes taxonomy override.** If the dish matches a
        `taxonomy:` entry in `data/menus/chef-notes/*.md`, set the fields that
        entry states (e.g. Chili d'Orge → not a soup, `weather: cold`; falafels →
        végé) and mark `tag_source: stated`. Chef-stated values take precedence
        over Tier-1/2/3 inference for those fields; infer the remaining fields
        normally.
```

- [ ] **Step 5: Add a Rules bullet**

In `## Rules`, after the `- **Controlled vocabulary only.**` bullet, add:

```markdown
- **Chef-notes taxonomy overrides inference.** A dish named in a chef-notes
  `taxonomy:` entry takes the chef-stated classification (e.g. Chili d'Orge is a
  végé dish, not a soupe; falafels is végé), not an inferred one.
```

- [ ] **Step 6: Verify the edits are present**

Run: `rg -n "soy \+ shiitake|texture pool category|Chef-notes taxonomy|Tier 0" .claude/skills/menus-tag/SKILL.md`
Expected: matches for the texture definition, the inputs bullet, the Tier-0 procedure line, and the rules bullet.

Run: `rg -n "soy \+ shiitake" data/menus/_TEMPLATE.md`
Expected: one match on the `texture:` line.

- [ ] **Step 7: Commit**

```bash
git add data/menus/_TEMPLATE.md .claude/skills/menus-tag/SKILL.md
git commit -m "feat(menus): define 'texture' category + chef-notes taxonomy overrides in menus-tag

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
```

---

### Task 5: Fix the cold-soup rule in `menus-recommend`

**Files:**
- Modify: `.claude/skills/menus-recommend/SKILL.md`

**Interfaces:**
- Consumes: the corrected `PATTERNS.md` (Task 3) at runtime.
- Produces: a recommender whose hardcoded weather guidance no longer contradicts the ≥24 °C cold-soup rule.

- [ ] **Step 1: Fix the procedure step**

In `.claude/skills/menus-recommend/SKILL.md`, in `## Procedure` step 5 ("**Lay out Mon–Fri.**"), change the phrase:

```
each day's weather (cold/rainy → push soups; hot → salad-lean)
```

to:

```
each day's weather (cold/rainy → push hot/hearty soupes; hot days ≥24°C → salad-lean and where chilled cold soups belong)
```

- [ ] **Step 2: Fix the Rules bullet**

In `## Rules`, replace the bullet that currently reads:

```markdown
- **Apply chef-stated weather patterns in their stated direction.** If PATTERNS.md
  records "cold soups for rainy/cold weekend", feature cold soup(s) on cool/rainy
  days — do not invert or suppress them. Inversion is a separate inference and must
  be explicitly flagged as such with a low/speculative confidence label.
```

with:

```markdown
- **Apply chef-stated weather patterns in their stated direction.** Honor
  PATTERNS.md as written: chilled **cold soups** belong on **hot days (≥24°C)**,
  while hot/hearty **soupes** suit cold/rainy days. Do not put a chilled cold soup
  on a cold day. If a specific PATTERNS entry ever states a direction explicitly,
  follow that entry; never silently invert a stated pattern, and flag any
  deviation with a low/speculative confidence label.
```

- [ ] **Step 3: Verify**

Run: `rg -n "cold soups on cool/rainy days|feature cold soup\(s\) on cool/rainy" .claude/skills/menus-recommend/SKILL.md`
Expected: **no matches** (the contradicting instruction is gone).

Run: `rg -n "hot days ≥24°C|cold soups belong on|≥24°C" .claude/skills/menus-recommend/SKILL.md`
Expected: matches in both the procedure step and the rules bullet.

- [ ] **Step 4: Commit**

```bash
git add .claude/skills/menus-recommend/SKILL.md
git commit -m "fix(menus): correct cold-soup weather rule in menus-recommend (≥24°C, not cold days)

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
```

---

## Final verification (after all tasks)

- [ ] **Optional smoke test — generate two mock weeks.** Invoke `menus-recommend` for (a) a hot week (days ≥ 24 °C) and (b) a cool/rainy autumn week. Confirm in the generated files: chilled cold soups appear only on the ≥ 24 °C days; Pico de Gallo lands on Thursday and never Monday; Kale mango salad appears Monday (not every day); Chili d'orge does not appear in the summer week. This exercises the corrected `PATTERNS.md` + `menus-recommend` end to end. (Generated mock files land in `data/menus/generated/`; delete or keep them as desired — they are `status: mock`.)

## Notes for the implementer

- **Why Pico and KM corrections have no `overrides`:** the current `PATTERNS.md`
  does not actually place Pico on Monday, and its Monday rule already lists KM on
  Monday correctly. The mock-menu mistakes (Pico on Monday, KM every day) came
  from the *recommender's* reading, not from a wrong PATTERNS entry — so these two
  corrections are **additive** placement facts, not overrides. Only the cold-soup
  `weather_temp` entry is a genuine override.
- **No test runner exists** for these prompt-file skills; verification is grep +
  inspection as written in each task, plus the optional end-to-end smoke test.
