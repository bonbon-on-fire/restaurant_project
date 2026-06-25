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
