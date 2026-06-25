# menus-analyze — design

**Date:** 2026-06-25
**Status:** approved design, pending implementation plan

## Summary

`menus-analyze` is the synthesis step that runs after `menus-tag`. It reads
every tagged weekly menu and regenerates **one living document,
`data/menus/PATTERNS.md`**, that portrays how this chef thinks about menus:
the structural template they work from, which dishes are staples vs. rotating
specials, how each service day is balanced, how dishes track weather/temperature
and the calendar, and the reasoning the chef writes on the sheets verbatim.

The document is a **living portrait**: each run rebuilds it from *all* currently
tagged menus, so as new weekly sheets are ingested → tagged, re-running keeps the
document current with the chef's full body of work. It produces **patterns, not
recommendations** — a future menu-recommender is the consumer.

## Context (why this shape)

- Pipeline so far: weekly sheets are transcribed (husk) → promoted to canonical
  English menus → tagged by `menus-tag` (a deduped `dishes:` block with core tags
  + `aka` aliases, plus a per-day `schedule` carrying temp/weather/notes). This
  skill is the analysis layer on top.
- The tags are the abstraction layer. `menus-analyze` reasons over dish *tags*
  (protein/temperature/richness/format/cuisine/spice_level/diet), not raw recipe
  files — so it never needs to open recipes.
- Cross-week dish identity comes from the `aka` field added in `menus-tag`: the
  same dish is written differently across `pool`/`schedule` and across weeks
  (e.g. "KM" / "Kale mango cabbage (KM)"), and `name` + `aka` is how the same
  dish is matched week-to-week for rotation analysis.
- The dataset is small (6 weeks at first write) and partly inferred, with
  temp/weather present on only ~4 of 6 weeks. The document must therefore be
  honest about evidence — the same trust discipline as `menus-tag`'s
  `tag_source`/`recipe_source` markers, here expressed as per-pattern
  `support` / `confidence` / `source`.

## Inputs, outputs, gating

- **Reads (read-only):** canonical English menus in
  `data/menus/processed/transcribed-en/` whose `status:` is **not** `archived`
  **and** that have a populated `dishes:` block (already tagged). For each such
  menu it uses: the `dishes:` entries (tags + `name` + `aka`), the per-day
  `schedule` (`day`, `date`, `dishes`, `temp_c`, `weather`, `notes`), the
  `comment` footer, and the `pool` category structure. It does **not** read the
  `transcribed-fr/` husks and does **not** read recipe files.
- **Excluded:** menus with no `dishes:` block (not yet tagged) are listed in the
  output as `excluded_untagged` with a note to run `menus-tag` first. Archived
  menus are skipped silently.
- **Writes only:** `data/menus/PATTERNS.md`, regenerated wholesale each run. It
  **never** modifies the menu files (clean separation, mirroring how `menus-tag`
  only writes its own block).

## The PATTERNS.md document

YAML frontmatter is the machine-readable source of truth a future recommender
queries; the markdown body renders the same content as readable prose/tables for
human sanity-checking.

### Per-pattern evidence model

Every pattern entry (in every dimension except `meta`) carries:

- `support` — a string `"n/total"` plus the contributing week dates, e.g.
  `"4/6 [2026-05-25, 2026-06-01, 2026-06-08, 2026-06-15]"`.
- `confidence` — one of `high | medium | low | speculative` (rubric below).
- `source` — `stated` (the chef wrote it in a note/comment) or `inferred`
  (derived from the tags/schedule).

### Six dimensions

1. **menu_skeleton** — the chef's structural template: for each `pool` category,
   the per-week count distribution (`min`/`median`/`max`).
2. **rotation** — dish-level frequency across weeks (same dish matched via
   normalized `name` + `aka`), each classified `staple` (recurs most weeks),
   `rotating` (appears intermittently), or `one-off` (single week), with the
   count of weeks present.
3. **per_day_balance** — recurring *within-day* composition rules (e.g. "every
   service day fields at least one fish main and one plant-substitute main", "a
   soup and a thicker potage both appear most days"), expressed across the
   protein/temperature/format/cuisine/diet tags.
4. **weather_temp** — tendencies linking temperature/weather buckets to dish-tag
   tendencies (e.g. cold/rainy → more soups; hot → more cold/light salads).
5. **calendar** — holiday / event / seasonal behaviors (statutory-holiday
   closures, themed weeks such as Father's Day, recurring "MDF" markers,
   vacation/seasonal production prep).
6. **stated_intent** — a log of verbatim chef reasoning pulled from `notes` /
   `comment`, each with its `week`; the highest-confidence signal because it is
   the chef's own words.

### Schema example

```yaml
meta:
  weeks_analyzed: 6
  week_range: "2026-05-11 .. 2026-06-15"
  weeks: [2026-05-11, 2026-05-18, 2026-05-25, 2026-06-01, 2026-06-08, 2026-06-15]
  excluded_untagged: []
  generated: 2026-06-25
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
    evidence: "2026-06-15 chef note 'cold soups for rainy/cold weekend'; hot 2026-06-08 week salad-heavy"

calendar:
  - pattern: "Statutory holidays → closed that day"
    support: "1/6 [2026-05-18 Victoria Day]"
    confidence: low
    source: stated

stated_intent:
  - quote: "Cold soups for rainy / cold weekend"
    week: 2026-06-15
    source: stated
```

### Body render

The body regenerates from the frontmatter each run (derived view, never
hand-edited) and presents:

- a `meta` summary line with the sample caveat,
- a rotation table sorted by `weeks_present` (dish | weeks | role | confidence),
- the menu skeleton as a category table,
- per-day balance, weather/temp, and calendar as short prose/bullet lists with
  their confidence,
- the stated-intent log as a quoted list with week dates.

## Procedure (per run)

1. **Find work.** List menus in `data/menus/processed/transcribed-en/` with
   `status:` ≠ `archived`. Partition into tagged (populated `dishes:`) and
   untagged; analyze the tagged set, record the untagged in `excluded_untagged`.
2. **Load & join.** For each tagged menu, join each `schedule` day's dish strings
   to their `dishes:` entry via normalized `name` / `aka`; collect that day's
   `temp_c` / `weather` / `notes`, the week `comment`, and the `pool` category
   counts.
3. **Build per-week understanding** (intermediate, not persisted): each day's tag
   composition (proteins, formats, temperatures, cuisines, diet coverage), the
   week skeleton, and its events.
4. **Derive each dimension** across weeks (menu_skeleton, rotation,
   per_day_balance, weather_temp, calendar, stated_intent) as defined above.
5. **Score every pattern** — compute `support` (count + week list), assign
   `confidence` per the rubric, set `source`.
6. **Write `PATTERNS.md` wholesale** — frontmatter + rendered body; overwrite any
   existing file.
7. **Report** — weeks analyzed, pattern counts per dimension, the
   highest-confidence findings, and the explicit small-sample caveat.

## Confidence rubric

- **high** — consistent in ≥5/6 weeks, or chef-`stated` *and* corroborated by the
  tags.
- **medium** — present in 3–4/6 weeks, or a clear stated intent with partial
  corroboration.
- **low** — 2 weeks, or stated once with no corroboration.
- **speculative** — single week / weak inference.
- A chef-`stated` fact is reliable *as a fact* even at n=1, but its
  **generality** stays `low` until repeated; the rubric scores generality, and
  the `source: stated` flag records that it is documented intent.

## Rules

- **Confident or flagged.** Never assert beyond the evidence. Prefer `stated`
  over `inferred`. Keep the small-sample caveat prominent in `meta` and the body.
- **Read-only on menus; writes only `PATTERNS.md`.** Never edit, reorder, or move
  a menu file.
- **Wholesale regeneration.** The document is fully generated from the menus each
  run and is not hand-edited; re-running after new menus are tagged rebuilds it
  from the full set. (A human-editable curated section is intentionally out of
  scope for v1; it can be added later as a preserved block.)
- **Depends on `menus-tag`.** Analyze only tagged menus. If fewer than 2 menus
  are tagged, emit a minimal document stating "insufficient data" rather than
  inventing patterns.
- **Tags are the abstraction.** Reason from dish tags + schedule + notes; do not
  open recipe files.
- **Cross-week identity via `name` + `aka`.** Match the same dish across weeks by
  normalized `name`/`aka`; this is the backbone of rotation analysis.

## Out of scope

- Generating menu recommendations or draft menus (a separate future skill that
  consumes `PATTERNS.md`).
- Editing or re-tagging menus (that is `menus-tag`).
- Reading recipe files or ingredient-level seasonality (the tags are the
  analysis layer; ingredient seasonality was considered and deferred as the
  thinnest-supported dimension at 6 weeks).
- A hand-curated notes section in `PATTERNS.md` (possible later enhancement).
