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
    recipe_id: vegan-poutine-medium  # MUST be an exact filename (no .md) from data/parsley/recipes-en/; leave blank if no confident match
    recipe_source: parsley         # parsley | none  (use "none" + blank recipe_id when no confident match exists)
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
- **Each pool category holds distinct dishes.** Do not assign the same dish to two
  categories (e.g. Pico de Gallo belongs only in `pico-de-gallo`; `sauces` must
  hold an actual sauce such as Sauce Satay or Sauce Marinara, not Pico de Gallo).
- **Apply chef-stated weather patterns in their stated direction.** If PATTERNS.md
  records "cold soups for rainy/cold weekend", feature cold soup(s) on cool/rainy
  days — do not invert or suppress them. Inversion is a separate inference and must
  be explicitly flagged as such with a low/speculative confidence label.
- **Verify every `recipe_id` against `data/parsley/recipes-en/`.** When setting
  `recipe_source: parsley`, the `recipe_id` value MUST be an exact existing filename
  in `data/parsley/recipes-en/` (without the `.md` extension). List the directory to
  confirm before writing. If no confident match exists, set `recipe_source: none` and
  leave `recipe_id` blank — never invent or guess a slug.
