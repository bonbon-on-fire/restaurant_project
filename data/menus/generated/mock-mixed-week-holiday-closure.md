---
# ============================================================
# GENERATED MOCK MENU — machine-made "what-if" week.
# NOT a real chef menu. Produced by the menus-recommend skill.
# ============================================================
id: mock-mixed-week-holiday-closure
source: generated
status: mock
generated: 2026-08-15
patterns_generated: 2026-08-09
scenario:
  given: "mixed-weather week with one statutory-holiday closure"
  invented: >-
    Mid-August 2026, Montreal. Mon CLOSED (hypothetical Monday statutory-holiday
    closure — no real Quebec stat holiday falls in mid-August; modeled on the
    chef's documented Monday-holiday closure behaviour). Tue 26 C sunny; Wed 19 C
    rainy; Thu 22 C cloudy; Fri 24 C partly sunny (service-only). No 2-3 day hot
    streak, so no chilled cold soups.
  week_label: "Mock - mixed week, Monday holiday closure"
pool:
  vege: [Ratatouille, Veggie Paella, Braised Vegetables, Vegan Poutine (Medium)]
  poisson: [Salmon Pesto Artichoke, Sesame Ginger Salmon, Haddock Curry with Mango and Coconut]
  texture: [Veggie Chicken Makhani, Veggie Chicken Satay with Almonds]
  soupe: [Korean Soup, Green Tom Yum Soup, Harira, Mulligatawny, Indian Lentils]
  potage: [Cream of Tomato Soup, Parsnip Pear Pecan Soup, Squash Spinach Coconut, Carrot Apple Curry, Mushroom Tarragon Soup]
  sandwichs: [Salmon Pesto Artichoke Sandwich]
  salades: [Kale Mango Cabbage Salad, Beet Goat Cheese, Creamy Broccoli Salad, Carrot Celeriac and Almond Salad, Provencal Salad, Vegan Greek Salad]
  salade-comp: [Vege Chicken Salad, Bandhu Salad, Root Trio]
  sauces: [Satay Sauce]
  hummus: [Broccoli and Pistachio Hummus, Dill Hummus]
  quiche: [Forestiere Quiche]
schedule:
  - day: monday
    date:
    dishes: []
    temp_c:
    weather:
    notes: "CLOSED - statutory-holiday closure (Monday); no service, no production."
  - day: tuesday
    date:
    dishes: [Korean Soup, Cream of Tomato Soup, Creamy Broccoli Salad, Provencal Salad, Vegan Greek Salad, Vege Chicken Salad, Salmon Pesto Artichoke, Veggie Chicken Makhani, Veggie Paella, Broccoli and Pistachio Hummus, Dill Hummus, Salmon Pesto Artichoke Sandwich, Satay Sauce, Forestiere Quiche]
    temp_c: 26
    weather: "sunny"
    notes: "Warm single day - salad-lean. Sandwich + sauces produced this morning after the soups. Sandwich cut to one sort because of the Monday holiday."
  - day: wednesday
    date:
    dishes: [Harira, Mulligatawny, Mushroom Tarragon Soup, Squash Spinach Coconut, Beet Goat Cheese, Carrot Celeriac and Almond Salad, Bandhu Salad, Root Trio, Sesame Ginger Salmon, Ratatouille, Braised Vegetables, Vegan Poutine (Medium)]
    temp_c: 19
    weather: "rainy"
    notes: "Cool & rainy - push hot, hearty soupes and comfort mains (poutine, ratatouille, braised veg)."
  - day: thursday
    date:
    dishes: [Kale Mango Cabbage Salad, Green Tom Yum Soup, Indian Lentils, Carrot Apple Curry, Parsnip Pear Pecan Soup, Veggie Chicken Satay with Almonds, Satay Sauce, Haddock Curry with Mango and Coconut, Beet Goat Cheese, Root Trio]
    temp_c: 22
    weather: "cloudy"
    notes: "KM sits on Thursday (Monday closed). Second texture (satay chicken) spaced from Tuesday's makhani. Thursday runs extra soups - the two late-afternoon batches serve Friday."
  - day: friday
    date:
    dishes: [Green Tom Yum Soup, Korean Soup, Kale Mango Cabbage Salad, Beet Goat Cheese, Haddock Curry with Mango and Coconut]
    temp_c: 24
    weather: "partly sunny"
    notes: "SERVICE-ONLY - no production. Thursday's late-afternoon soups plus pret-a-manger stock serve today."
dishes:
  - name: "Ratatouille"
    recipe_id: ratatouille
    recipe_source: repertoire
    tag_source: linked
    protein: vegetable
    temperature: hot
    weather: cool
    richness: moderate
    format: stew
    cuisine: french
    spice_level: mild
    diet: [vegan, vegetarian, gluten-free, dairy-free]
  - name: "Veggie Paella"
    recipe_id: veggie-paella
    recipe_source: repertoire
    tag_source: linked
    protein: plant-substitute
    temperature: hot
    weather: cool
    richness: moderate
    format: shareable
    cuisine: spanish
    spice_level: mild
    diet: [vegan, vegetarian, dairy-free]
  - name: "Braised Vegetables"
    recipe_id: braised-vegetables
    recipe_source: repertoire
    tag_source: linked
    protein: vegetable
    temperature: hot
    weather: cool
    richness: moderate
    format: stew
    cuisine:
    spice_level:
    diet: []
  - name: "Vegan Poutine (Medium)"
    recipe_id: vegan-poutine-medium
    recipe_source: repertoire
    tag_source: linked
    protein: tofu
    temperature: hot
    weather: cold
    richness: rich
    format: side
    cuisine: canadian
    spice_level: mild
    diet: [vegan, vegetarian, gluten-free, dairy-free]
  - name: "Salmon Pesto Artichoke"
    recipe_id: salmon-pesto-artichoke
    recipe_source: repertoire
    tag_source: linked
    protein: fish
    temperature: hot
    weather: cool
    richness: rich
    format: plated-main
    cuisine:
    spice_level: mild
    diet: [pescatarian, gluten-free]
  - name: "Sesame Ginger Salmon"
    recipe_id: sesame-ginger-salmon
    recipe_source: repertoire
    tag_source: linked
    protein: fish
    temperature: hot
    weather: warm
    richness: moderate
    format: plated-main
    cuisine: japanese
    spice_level: mild
    diet: [pescatarian, dairy-free]
  - name: "Haddock Curry with Mango and Coconut"
    recipe_id: haddock-curry-with-mango-and-coconut
    recipe_source: repertoire
    tag_source: linked
    protein: fish
    temperature: hot
    weather: cold
    richness: rich
    format: curry
    cuisine: indian
    spice_level: medium
    diet: [pescatarian]
  - name: "Veggie Chicken Makhani"
    recipe_id: veggie-chicken-makhani
    recipe_source: repertoire
    tag_source: linked
    protein: plant-substitute
    temperature: hot
    weather: cool
    richness: rich
    format: curry
    cuisine: indian
    spice_level: medium
    diet: [vegan, vegetarian, dairy-free]
  - name: "Veggie Chicken Satay with Almonds"
    recipe_id: veggie-chicken-satay-with-almonds
    recipe_source: repertoire
    tag_source: linked
    protein: plant-substitute
    temperature: hot
    weather: cool
    richness: rich
    format: plated-main
    cuisine: thai
    spice_level: mild
    diet: [vegan, vegetarian, dairy-free]
  - name: "Korean Soup"
    recipe_id: korean-soup
    recipe_source: repertoire
    tag_source: linked
    protein: none
    temperature: hot
    weather: cold
    richness: moderate
    format: soup
    cuisine: korean
    spice_level: medium
    diet: [vegan, vegetarian, dairy-free]
  - name: "Green Tom Yum Soup"
    recipe_id: green-tom-yum-soup
    recipe_source: repertoire
    tag_source: linked
    protein: tofu
    temperature: hot
    weather: cold
    richness: moderate
    format: soup
    cuisine: thai
    spice_level: medium
    diet: [vegan, vegetarian, dairy-free]
  - name: "Harira"
    recipe_id: harira
    recipe_source: repertoire
    tag_source: linked
    protein: legume
    temperature: hot
    weather: cool
    richness: moderate
    format: soup
    cuisine: moroccan
    spice_level: mild
    diet: []
  - name: "Mulligatawny"
    recipe_id: mulligatawny
    recipe_source: repertoire
    tag_source: linked
    protein: legume
    temperature: hot
    weather: cold
    richness: moderate
    format: soup
    cuisine: indian
    spice_level: medium
    diet: []
  - name: "Indian Lentils"
    recipe_id: indian-lentils
    recipe_source: repertoire
    tag_source: linked
    protein: legume
    temperature: hot
    weather: cool
    richness: moderate
    format: soup
    cuisine: indian
    spice_level: medium
    diet: []
  - name: "Cream of Tomato Soup"
    recipe_id: cream-of-tomato-soup
    recipe_source: repertoire
    tag_source: linked
    protein: vegetable
    temperature: hot
    weather: cold
    richness: moderate
    format: soup
    cuisine:
    spice_level: mild
    diet: [vegan, vegetarian, dairy-free]
  - name: "Parsnip Pear Pecan Soup"
    recipe_id: parsnip-pear-pecan-soup
    recipe_source: repertoire
    tag_source: linked
    protein: vegetable
    temperature: hot
    weather: cold
    richness: moderate
    format: soup
    cuisine:
    spice_level: mild
    diet: [vegan, vegetarian, gluten-free, dairy-free]
  - name: "Squash Spinach Coconut"
    recipe_id: squash-spinach-coconut
    recipe_source: repertoire
    tag_source: linked
    protein: vegetable
    temperature: hot
    weather: cool
    richness: rich
    format: curry
    cuisine: indian
    spice_level: mild
    diet: []
  - name: "Carrot Apple Curry"
    recipe_id: carrot-apple-curry
    recipe_source: repertoire
    tag_source: linked
    protein: vegetable
    temperature: hot
    weather: cool
    richness: moderate
    format: soup
    cuisine: indian
    spice_level: medium
    diet: []
  - name: "Mushroom Tarragon Soup"
    recipe_id: mushroom-tarragon-soup
    recipe_source: repertoire
    tag_source: linked
    protein: mushroom
    temperature: hot
    weather: cold
    richness: moderate
    format: soup
    cuisine: french
    spice_level: mild
    diet: [vegan, vegetarian, gluten-free, dairy-free]
  - name: "Kale Mango Cabbage Salad"
    recipe_id: kale-mango-cabbage-salad
    recipe_source: repertoire
    tag_source: linked
    protein: none
    temperature: cold
    weather: hot
    richness: light
    format: salad
    cuisine:
    spice_level: mild
    diet: [vegetarian, dairy-free, gluten-free, nut-free]
  - name: "Beet Goat Cheese"
    recipe_id: beet-goat-cheese
    recipe_source: repertoire
    tag_source: linked
    protein: vegetable
    temperature: cold
    weather: warm
    richness: moderate
    format: salad
    cuisine: french
    spice_level: none
    diet: [vegetarian]
  - name: "Creamy Broccoli Salad"
    recipe_id: creamy-broccoli-salad
    recipe_source: repertoire
    tag_source: linked
    protein: vegetable
    temperature: cold
    weather: warm
    richness: moderate
    format: salad
    cuisine:
    spice_level: mild
    diet: [vegetarian, dairy-free]
  - name: "Carrot Celeriac and Almond Salad"
    recipe_id: carrot-celeriac-and-almond-salad
    recipe_source: repertoire
    tag_source: linked
    protein: vegetable
    temperature: cold
    weather: warm
    richness: moderate
    format: salad
    cuisine: middle-eastern
    spice_level: mild
    diet: [vegetarian, gluten-free]
  - name: "Provencal Salad"
    recipe_id: provencal-salad
    recipe_source: repertoire
    tag_source: linked
    protein: vegetable
    temperature: cold
    weather: hot
    richness: moderate
    format: salad
    cuisine: french
    spice_level: mild
    diet: [gluten-free]
  - name: "Vegan Greek Salad"
    recipe_id: vegan-greek-salad
    recipe_source: repertoire
    tag_source: linked
    protein: tofu
    temperature: cold
    weather: hot
    richness: light
    format: salad
    cuisine: greek
    spice_level: mild
    diet: [vegan, vegetarian, gluten-free, dairy-free]
  - name: "Vege Chicken Salad"
    recipe_id: vege-chicken-salad
    recipe_source: repertoire
    tag_source: linked
    protein: plant-substitute
    temperature: cold
    weather: warm
    richness: light
    format: salad
    cuisine: caribbean
    spice_level: medium
    diet: []
  - name: "Bandhu Salad"
    recipe_id: bandhu-salad
    recipe_source: repertoire
    tag_source: linked
    protein: vegetable
    temperature: room
    weather:
    richness: moderate
    format: salad
    cuisine: indian
    spice_level: mild
    diet: [vegan, vegetarian, gluten-free, dairy-free]
  - name: "Root Trio"
    recipe_id: root-trio
    recipe_source: repertoire
    tag_source: linked
    protein: vegetable
    temperature: cold
    weather: warm
    richness: light
    format: salad
    cuisine:
    spice_level: none
    diet: []
  - name: "Broccoli and Pistachio Hummus"
    recipe_id: broccoli-and-pistachio-hummus
    recipe_source: repertoire
    tag_source: linked
    protein: legume
    temperature: cold
    weather: warm
    richness: moderate
    format: dip-spread
    cuisine: middle-eastern
    spice_level: mild
    diet: [vegan, vegetarian, gluten-free, dairy-free]
  - name: "Dill Hummus"
    recipe_id: dill-hummus
    recipe_source: repertoire
    tag_source: linked
    protein: legume
    temperature: cold
    weather: hot
    richness: moderate
    format: dip-spread
    cuisine: middle-eastern
    spice_level: mild
    diet: [vegan, vegetarian, gluten-free, dairy-free]
  - name: "Salmon Pesto Artichoke Sandwich"
    recipe_id: salmon-pesto-artichoke-sandwich
    recipe_source: repertoire
    tag_source: linked
    protein: fish
    temperature: cold
    weather:
    richness: rich
    format: handheld
    cuisine: italian
    spice_level: mild
    diet: [pescatarian]
  - name: "Satay Sauce"
    recipe_id: satay-sauce
    recipe_source: repertoire
    tag_source: linked
    protein: nut-seed
    temperature:
    weather:
    richness: rich
    format: sauce-condiment
    cuisine: thai
    spice_level: medium
    diet: [vegan, vegetarian, dairy-free]
  - name: "Forestiere Quiche"
    recipe_id: forestiere-quiche
    recipe_source: repertoire
    tag_source: linked
    protein: egg
    temperature: warm
    weather:
    richness: rich
    format: casserole
    cuisine: french
    spice_level: mild
    diet: [vegetarian]
---

# Week of Mock — mixed week, Monday holiday closure

> **⚠️ GENERATED MOCK — not a real chef menu.** This is a fictional "what-if"
> week produced by `menus-recommend`, drawing dishes from
> `data/repertoire/` and shaped by `data/menus/PATTERNS.md`
> (generated 2026-08-09). Isolated under `data/menus/generated/`. See
> **Why this menu** for where a strong pattern was followed vs. where the choice
> was improvised.

## Weekly production

**Végé (mains)** — Ratatouille · Veggie Paella · Braised Vegetables · Vegan Poutine (Medium)
**Poisson** — Salmon Pesto Artichoke · Sesame Ginger Salmon · Haddock Curry with Mango and Coconut
**Texture (végé chicken/beef)** — Veggie Chicken Makhani · Veggie Chicken Satay with Almonds
**Soupe** — Korean Soup · Green Tom Yum Soup · Harira · Mulligatawny · Indian Lentils
**Potage** — Cream of Tomato Soup · Parsnip Pear Pecan Soup · Squash Spinach Coconut · Carrot Apple Curry · Mushroom Tarragon Soup
**Salades** — Kale Mango Cabbage Salad · Beet Goat Cheese · Creamy Broccoli Salad · Carrot Celeriac and Almond Salad · Provençal Salad · Vegan Greek Salad
**Salade composé** — Vège Chicken Salad · Bandhu Salad · Root Trio
**Hummus** — Broccoli and Pistachio Hummus · Dill Hummus
**Sandwichs** — Salmon Pesto Artichoke Sandwich *(one sort only — halved for the Monday closure)*
**Sauces** — Satay Sauce
**Quiche** — Forestière Quiche

## Weekly schedule

| Day | Temp | Weather | Featured dishes | Notes |
|---|---|---|---|---|
| **Monday** | — | — | *CLOSED* | Statutory-holiday closure — no service, no production |
| **Tuesday** | 26 °C | sunny | Korean Soup; Cream of Tomato; Creamy Broccoli, Provençal & Vegan Greek salads; Vège Chicken Salad; Salmon Pesto Artichoke; Veggie Chicken Makhani; Veggie Paella; 2 hummus; Salmon Pesto sandwich; Satay Sauce; Forestière Quiche | Warm single day → salad-lean. Sandwich + sauces made this morning after soups; sandwich cut to one sort (Monday holiday) |
| **Wednesday** | 19 °C | rainy | Harira; Mulligatawny; Mushroom Tarragon; Squash Spinach Coconut; Beet Goat Cheese & Carrot-Celeriac salads; Bandhu & Root Trio; Sesame Ginger Salmon; Ratatouille; Braised Vegetables; Vegan Poutine | Cool & rainy → hot hearty soupes + comfort mains |
| **Thursday** | 22 °C | cloudy | Kale Mango Cabbage (KM); Green Tom Yum; Indian Lentils; Carrot Apple Curry; Parsnip Pear Pecan; Veggie Chicken Satay + Satay Sauce; Haddock Curry; Beet Goat Cheese; Root Trio | KM on Thursday (Mon closed); 2nd texture spaced from Tue; extra late soups made for Friday |
| **Friday** | 24 °C | partly sunny | Green Tom Yum & Korean soups; KM & Beet Goat Cheese salads; Haddock Curry | **Service-only** — no production; Thursday's late soups + prêt-à-manger stock serve today |

## Comments and weather

Mixed-weather short week around a Monday statutory-holiday closure. Production
runs Tuesday–Thursday only; Friday is service-only. One warm day (Tue, 26 °C) but
no sustained hot streak, so no chilled cold soups. Cool, rainy midweek pulls the
menu toward hot, hearty soupes and comfort mains.

## Why this menu

### Strategy

The scenario is a **four-day work week compressed to three production days** by a
Monday holiday closure. That single fact drives most of the week: production
shifts to Tue–Thu (Friday is service-only per the chef's stated work-week), the
Monday-anchored **Kale Mango Cabbage** salad slides to **Thursday**, and sandwich
production is **halved to one sort**. Weather is genuinely mixed — one warm day,
one cool/rainy day, two mild — so the week keeps the full spine (soups + salads +
fish every service day) rather than leaning hard lighter or heartier, and the
mildly hearty midweek gets the comfort mains.

### Per-day notes

- **Monday — closed.** Statutory holidays that fall on a Monday → closed (no
  Monday service).
- **Tuesday (26 °C, sunny).** Warmest day → salad-lean (three cold salads + the
  composé). Sandwich and sauces are produced this morning after the soups, per
  the chef's Tuesday production choreography. A single 26 °C day is **not** a
  2–3 day hot streak, so no chilled cold soup is placed.
- **Wednesday (19 °C, rainy).** Cool & rainy → the hearty soupes (Harira,
  Mulligatawny) and thick potages plus comfort mains (Ratatouille, Braised
  Vegetables, Vegan Poutine) carry the day.
- **Thursday (22 °C, cloudy).** KM lands here (Monday closed), the second texture
  main (satay chicken) is spaced a day from Tuesday's makhani, and Thursday runs
  extra soups whose two late-afternoon batches serve Friday.
- **Friday (24 °C, partly sunny).** Service-only — no new production; it serves
  Thursday's late soups plus prêt-à-manger stock.

### Pattern citations

- Monday closed for the holiday — **calendar**, chef-stated (high).
- Tue–Thu production, Friday service-only — **per_day_balance / work-week**, chef-stated (high).
- KM moved to Thursday — **per_day_balance** ("KM → Monday, occasionally Thursday"), chef-stated (high).
- Texture mains on Tue + Thu, spaced — **per_day_balance**, chef-stated (high).
- Sandwich halved to one sort for the Monday holiday — **calendar** ("a Monday/Tuesday holiday halves production"), chef-stated (high).
- No chilled cold soup — **weather_temp** ("cold soup only on a 2–3 day hot streak; ≥24 °C"), chef-stated (high); the lone 26 °C Tuesday doesn't qualify.
- Cool/rainy Wednesday → hot hearty soupes — **weather_temp** ("cool weather → soups + hearty sell"), chef-stated (medium).
- Salmon ginger paired with salmon pesto in the same week — **rotation** co-occurrence rule, chef-stated (high).
- Haddock mango-coconut ragout for variety, no plain haddock alongside — **rotation**, chef-stated (high).
- Two spicy Asian soups (Korean, Green Tom Yum) kept alongside savoury non-spicy options (Mushroom Tarragon, Harira) — **rotation**, chef-stated (high).
- Forestière (mushroom) quiche in place of the ham quiche — **rotation** ("ham quiche → forestier"), chef-stated (high).
- Exactly one carrot salad (Carrot-Celeriac-Almond) and ≤2 cabbage salads (only KM) — **per_day_balance**, chef-stated (high).
- Végé chicken salad as this week's alternating composé — **rotation** ("tuna ↔ végé chicken salad alternate biweekly"), chef-stated (high).
- Ratatouille without lasagna; paella without mushroom risotto — **rotation** alternation rules, chef-stated (high).
- Skeleton counts (6 salades, 5 soupe, 5 potage, 4 végé, 3 poisson, 3 composé, 2 hummus, 2 texture, 1 sauce, 1 quiche) — **menu_skeleton** medians (high).

### Improvisation / honesty flags

- **The Monday holiday itself is invented.** No real Quebec statutory holiday
  falls in mid-August (the last is Canada Day, Jul 1; the next is Labour Day,
  Sep 1). The closure is modeled on the chef's documented *Monday-holiday →
  closed* behaviour purely to exercise the scenario you asked for.
- **All per-day temperatures/weather are invented** (season-appropriate mid-August
  guesses); only "mixed week + a holiday closure" came from you.
- **The one-chicken + one-végé-beef texture rule is only half-met.** Both texture
  mains this week are végé *chicken* (Makhani, Satay). The repertoire has no
  distinct végé-*beef* texture main to draw from, so the "one chicken + one
  végé-beef" target (per_day_balance, chef-stated) could not be satisfied — a
  repertoire gap, not a chef choice.
- **The "Ham" staple (47/47 weeks) is not represented.** The repertoire is
  vegan-forward and has no standalone ham main (only the ham-and-vegetable quiche,
  which the chef is phasing out in favour of the forestier). Rather than force a
  poor match, the slot is left out and flagged.
- **Poké and pico are omitted.** One poké/week and a Thursday pico are both
  optional slots; the mixed/cool week and a lean holiday-shortened production run
  argued against them. Both are legitimate stand-ins if you'd want them added.
- **All dish tags are copied from the repertoire recipes' own tag blocks**
  (`tag_source: linked`). Those underlying tags are themselves largely *inferred*
  (see the PATTERNS.md small-sample caveat), so protein/format/weather values
  carry inference error.
- **Soupe vs. potage split is my judgment call.** The repertoire tags most of
  these as `format: soup`; I sorted brothy/chunky items into *soupe* and
  thick/creamy purées into *potage* to mirror the chef's sheet, but that split is
  inferred, not stated.
