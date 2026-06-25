# menus-recommend — design

**Date:** 2026-06-25
**Status:** approved design, pending implementation plan

## Summary

`menus-recommend` is the final skill in the menu pipeline. Given a scenario
(weather, temperatures, day-of-week structure, holidays/events — supplied by the
user, or invented when not), it generates a **mock weekly menu in the chef's
style** by drawing dishes from the Parsley recipe repertoire, guided by the
chef-pattern living document `data/menus/PATTERNS.md`, and then **explains why it
composed the week the way it did**, citing the patterns and constraints it
followed.

It consumes `menus-analyze`'s output (`PATTERNS.md`) and is the end of the line —
nothing downstream consumes it. Its output is a **mock exploration artifact**,
clearly flagged as generated and kept isolated from the real menu corpus so it
can never be mistaken for, or pollute, the chef's actual sheets or the patterns
derived from them.

## Context (why this shape)

- Pipeline so far: menus are transcribed → tagged (`menus-tag`) → analyzed into
  patterns (`menus-analyze` → `PATTERNS.md`). `menus-recommend` is the consumer
  that turns those patterns back into a concrete (fictional) menu.
- The chef works in **weekly spreads**: a category `pool` + a per-day `schedule`
  carrying `temp_c`/`weather`/`notes`. The generated menu mirrors this structure
  so it is directly comparable to real menus.
- Dishes come from the **Parsley repertoire** (`data/parsley/`, 210 recipes +
  53 sub-recipes), which is untagged (ingredients only). The weather/balance
  patterns need each dish's tags (protein/temperature/format/cuisine/diet/spice),
  so the skill **infers a candidate's tags on the fly** (from its name +
  ingredients) the same way `menus-tag` does.
- `PATTERNS.md` carries `support`/`confidence`/`source` on every pattern and a
  small-sample caveat. The recommender must honor that: lean on high-confidence
  patterns and openly flag where it improvises or relies on weak ones.

## Naming

`menus-recommend` — matches the `menus-` prefix convention (`menus-tag`,
`menus-analyze`) and the verb style of `recipes-tag`/`recipes-translate`.

## Inputs (all read-only)

- **Constraints / scenario.** Parsed from the invocation when the user supplies
  one (e.g. "hot sunny week, Tuesday is a holiday"). Any gaps are **invented** as
  a plausible, season-appropriate scenario. Covers: per-day `temp_c`/`weather`,
  the Mon–Fri service structure, and holidays/events/closures.
- **`data/menus/PATTERNS.md`.** The chef-pattern living document — all six
  dimensions (`menu_skeleton`, `rotation`, `per_day_balance`, `weather_temp`,
  `calendar`, `stated_intent`) with their `support`/`confidence`/`source`.
- **Parsley repertoire.** `data/parsley/INDEX.md` + `data/parsley/recipes-en/`
  (210 recipes; the French mirror exists too). Candidate dishes' tags are
  inferred as needed; recipe files are never modified.

The skill does not read or edit the real menus in
`data/menus/processed/transcribed-en/` at all — its chef knowledge comes entirely
from `PATTERNS.md` (and its dish choices from the Parsley repertoire).

## Output

A persisted file in a **new `data/menus/generated/` folder**, mirroring the
canonical menu structure so it is comparable to real menus:

- **frontmatter** — the menu canonical fields (`pool` by category; per-day
  `schedule` with the invented `temp_c`/`weather`/`notes`), plus a lightweight
  `dishes:` tag block (the inferred tags the choices were based on — the same
  shape `menus-tag` produces), plus generation metadata.
- **mock flagging** — `source: generated`, `status: mock`, and a `scenario:`
  block capturing the exact constraints used (given vs invented). These guarantee
  the file is never mistaken for a real sheet.
- **body** — a rendered menu (production + schedule, like a real menu) followed by
  a `## Why this menu` rationale section (below).

### Generation metadata (frontmatter)

```yaml
id: mock-hot-sunny-week-01        # kebab slug; no collision with real dated menus
source: generated                 # NEVER photo/manual — marks this as machine-made
status: mock                      # NEVER draft/flagged/verified — marks this as not-real
generated: 2026-06-25
patterns_generated: 2026-06-25    # the `generated` date of the PATTERNS.md used
scenario:
  given: "hot sunny week, Tuesday is a holiday"   # verbatim user input, or "none"
  invented: "Mon 28° sunny, Tue CLOSED (holiday), Wed 30° sunny, Thu 27° cloudy, Fri 31° sunny"
  week_label: "Mock — hot sunny week"
```

### Filename / identity

`data/menus/generated/<slug>.md`, where `<slug>` derives from the scenario (e.g.
`mock-hot-sunny-week`). If a file with that slug exists, append a numeric suffix
(`-01`, `-02`) so **each run is a fresh artifact and never overwrites a prior
mock** — multiple what-ifs coexist.

### Clean separation

`generated/` sits **outside** `processed/transcribed-en/`, so `menus-tag` and
`menus-analyze` (which only read `processed/transcribed-en/`) never ingest mock
menus. They cannot pollute the real corpus or `PATTERNS.md`. (A user could still
deliberately feed one back as a what-if.)

## Procedure (per run)

1. **Resolve constraints.** Parse the user's scenario; invent plausible
   season-appropriate values for anything unspecified (temps/weather per day, an
   optional event/holiday). Record both the given and invented parts in the
   `scenario:` block.
2. **Load patterns + repertoire.** Read `PATTERNS.md` (all six dimensions) and
   the Parsley `INDEX.md`.
3. **Build the weekly skeleton.** Set per-category counts from `menu_skeleton`
   (use the `median`, bounded by `min`/`max`): e.g. ~5 soupe + ~5 potage, 5–6
   salades, 3–4 composed salads, 3 vege, ~3 poisson, exactly 1 quiche, a standing
   pico de gallo.
4. **Assemble the dish pool from Parsley.** Anchor the high-confidence `rotation`
   staples (Poutine, Kale mango cabbage, Pico, a quiche, veggie Jerk chicken),
   mapping each to a Parsley recipe. Fill the remaining category slots from the
   repertoire, inferring each candidate's tags (protein/temperature/format/
   cuisine/diet/spice) and honoring `per_day_balance`, `weather_temp`, diet
   coverage, and cuisine variety.
5. **Lay out the Mon–Fri schedule.** Assign pool dishes to service days honoring
   within-day balance (≥1 fish/pescatarian main + ≥1 plant-substitute main; a
   brothy soup and a thick potage in parallel; multiple cold salads; mixed
   cuisines) and each day's weather (cold/rainy → push soups; hot → salad-lean).
   Apply closures on holiday days (empty schedule + a `notes` reason).
6. **Write the generated file.** Canonical structure (`pool` + `schedule` +
   `dishes:` tag block) with the mock flags, plus the `## Why this menu`
   rationale. Use a fresh, non-colliding filename.
7. **Report.** Summarize the scenario used, where the file was saved, and the
   headline reasoning.

## The `## Why this menu` rationale (layered)

1. **Strategy paragraph** — the scenario and how it shaped the week overall.
2. **Per-day notes** — what each service day emphasizes and why (weather/event
   driven), including any closure.
3. **Pattern citations** — key choices cite the specific `PATTERNS` dimension and
   its confidence, e.g. *"Kale mango cabbage every day — `rotation` staple,
   high"*; *"cold soups Friday — `weather_temp`, chef-stated"*; *"a brothy soup
   and a potage daily — `per_day_balance`, medium"*.
4. **Improvisation / honesty flags** — explicitly call out where the skill
   improvised (no governing pattern), leaned on a `low`/`speculative` pattern, or
   used an approximate *inferred* tag for a repertoire dish whose real tags are
   unknown. Reference the `PATTERNS.md` small-sample caveat.

## Rules

- **Read-only on real data.** Never edit `PATTERNS.md`, the Parsley recipes, or
  any real menu. Write only into `data/menus/generated/`.
- **Always flagged mock.** Every generated file carries `source: generated` and
  `status: mock`. Never write into `processed/transcribed-en/`, and never use a
  real-menu `status` value.
- **Honesty first.** Prefer high-confidence patterns; surface every improvisation
  and the small-sample caveat in the rationale. Do not present a weak inference as
  a chef rule.
- **Respect chef style.** Honor the skeleton counts, the staples, within-day
  balance, and weather/calendar behaviors from `PATTERNS.md`.
- **Constraints: use given, invent the gaps.** Never ignore a user-supplied
  constraint; only fabricate what was left unspecified; record both.
- **Fresh artifact per run.** Each run writes a new, non-colliding file; it does
  not overwrite prior mocks. Generative by nature — not idempotent.
- **Degrade gracefully.** If `PATTERNS.md` is missing or thin, say so and generate
  with an explicit "limited pattern basis" caveat rather than fabricating
  confident rules.

## Out of scope

- Costing, nutrition, or production-scaling of the mock menu (the tags are the
  analysis layer; this skill plans the lineup, not the kitchen math).
- Editing real menus, re-tagging, or updating `PATTERNS.md`.
- A UI or interactive menu editor (the artifact is a markdown file).
- Promoting a mock menu into the real corpus (a deliberate, separate manual step
  if ever wanted).
