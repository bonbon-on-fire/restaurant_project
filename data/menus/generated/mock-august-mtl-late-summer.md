---
# ============================================================
# GENERATED MOCK MENU — a fictional "what-if" week produced by
# the menus-recommend skill. NOT a real chef menu. Isolated under
# data/menus/generated/. source: generated + status: mock always.
# ============================================================
id: mock-august-mtl-late-summer
source: generated
status: mock
generated: 2026-07-27
patterns_generated: 2026-07-24
language: en
week_label: "Mock — late-summer back-to-school week (Montreal)"
scenario:
  given: "August in Montreal, Canada — use typical weather"
  invented: >-
    Late-summer / back-to-school week. Mon 27°C sunny; Tue 26°C sunny;
    Wed 29°C hot, humid; Thu 24°C afternoon thunderstorm; Fri 23°C cooler,
    clearing. Invented EVENT: back-to-school week (demand shaped by
    back-to-school per the captured demand-volume themes — soft narrative
    flag, not modeled). Mock date range 31 Aug – 4 September.
  week_label: "Mock — late-summer back-to-school week (Montreal)"

# ============================================================
# DISH POOL — LEFT page, by fixed category. Filled to skeleton medians.
# Each category holds DISTINCT dishes (no dish in two categories).
# ============================================================
pool:
  vege:
    - "Vegan poutine (medium)"
    - "Ratatouille"
    - "Vegetable lasagna (gluten-free)"
    - "Veggie paella"
  poisson:
    - "Salmon pesto artichoke"
    - "Salmon crumble"
    - "Mediterranean-style haddock"
  texture:
    - "Korean veggie-chicken poké bowl"
    - "Veggie jerk chicken with orange rémoulade"
  soupe:
    - "Spanish soup"
    - "Green tom yum soup"
    - "Chipotle lentil vegetable soup"
    - "Fisherman's chowder"
    - "Tulum soup"
  potage:
    - "Cream of tomato soup"
    - "Parsnip pear pecan soup"
    - "Rutabaga apple maple soup"
    - "Mushroom tarragon soup"
    - "Cold Mélonccio soup"
  sandwichs:
    - "Satay veggie-chicken banh mi sandwich"
    - "Blackened haddock sandwich"
  wraps:
    - "Tuna salad wrap"
  salades:
    - "Kale mango cabbage salad"
    - "Asian cabbage salad"
    - "Orange fennel salad"
    - "Cabbage pepper salad with mint"
    - "Beet hazelnut salad"
    - "Crunchy cabbage salad"
  salade-comp:
    - "Creamy broccoli salad"
    - "Provençal salad"
    - "Chickpea crumble salad"
  sauces:
    - "Satay sauce"
  hummus:
    - "Dill hummus"
    - "Broccoli and pistachio hummus"
  quiche:
    - "Ham and vegetable quiche"
  burgers:
    - "Veggie beef burger"
  pico-de-gallo:
    - "Pico de gallo"

# ============================================================
# DAILY SCHEDULE — RIGHT page. One entry per service day.
# Mock date range 31 Aug – 4 September (not a real calendar week).
# ============================================================
schedule:
  - day: monday
    date: 2025-08-31
    dishes:
      - "Kale mango cabbage salad"
      - "Beet hazelnut salad"
      - "Creamy broccoli salad"
      - "Cream of tomato soup"
      - "Spanish soup"
      - "Salmon pesto artichoke"
      - "Vegan poutine (medium)"
      - "Dill hummus"
      - "Ham and vegetable quiche"
    temp_c: 27
    weather: "sunny"
    notes: "Back-to-school week begins. KM on Monday. Warm, salad-forward start."
  - day: tuesday
    date: 2025-09-01
    dishes:
      - "Asian cabbage salad"
      - "Orange fennel salad"
      - "Provençal salad"
      - "Parsnip pear pecan soup"
      - "Green tom yum soup"
      - "Salmon crumble"
      - "Korean veggie-chicken poké bowl"
      - "Broccoli and pistachio hummus"
      - "Veggie beef burger"
      - "Satay sauce"
    temp_c: 26
    weather: "sunny"
    notes: "First texture main (Korean) — Tue of the Tue/Thu texture pair. Warm → burger runs."
  - day: wednesday
    date: 2025-09-02
    dishes:
      - "Cabbage pepper salad with mint"
      - "Crunchy cabbage salad"
      - "Chickpea crumble salad"
      - "Cold Mélonccio soup"
      - "Tulum soup"
      - "Mediterranean-style haddock"
      - "Ratatouille"
      - "Satay veggie-chicken banh mi sandwich"
      - "Tuna salad wrap"
    temp_c: 29
    weather: "hot, humid"
    notes: "Hottest day (29°C) → cold Mélonccio soup placed here, once this week. Salad-lean."
  - day: thursday
    date: 2025-09-03
    dishes:
      - "Beet hazelnut salad"
      - "Asian cabbage salad"
      - "Creamy broccoli salad"
      - "Mushroom tarragon soup"
      - "Chipotle lentil vegetable soup"
      - "Salmon pesto artichoke"
      - "Veggie jerk chicken with orange rémoulade"
      - "Pico de gallo"
      - "Blackened haddock sandwich"
      - "Broccoli and pistachio hummus"
    temp_c: 24
    weather: "afternoon thunderstorm"
    notes: "Second texture main (jerk) — Thu of the pair, spaced from Tue. Pico on Thursday. Afternoon storm."
  - day: friday
    date: 2025-09-04
    dishes:
      - "Crunchy cabbage salad"
      - "Orange fennel salad"
      - "Provençal salad"
      - "Rutabaga apple maple soup"
      - "Fisherman's chowder"
      - "Salmon crumble"
      - "Vegetable lasagna (gluten-free)"
      - "Veggie paella"
      - "Dill hummus"
    temp_c: 23
    weather: "cooler, clearing"
    notes: "Cooler clearing day (23°C, below 24) → NO cold soup. Hearty soups + plates pushed."

comment: >-
  Mock late-summer / back-to-school week for Montreal. Warm sunny start,
  a hot humid Wednesday, an afternoon thunderstorm Thursday, and a cooler
  clearing Friday. Cold soup only on the 29°C day; hearty items weighted
  toward the cool tail of the week.

# ============================================================
# DISH TAGS — one entry per UNIQUE dish across pool + schedule.
# tag_source: inferred (tags read from dish name + INDEX ingredients,
# NOT from a tagged recipe). Values use data/recipes/_TEMPLATE.md vocab.
# Every recipe_id verified against data/parsley/recipes-en/.
# ============================================================
dishes:
  - name: "Kale mango cabbage salad"
    recipe_id: kale-mango-cabbage-salad
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: cold
    weather: warm
    richness: light
    format: salad
    cuisine: fusion
    spice_level: none
    diet: [vegan, vegetarian, gluten-free, dairy-free]
  - name: "Asian cabbage salad"
    recipe_id: asian-cabbage-salad
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: cold
    weather: warm
    richness: light
    format: salad
    cuisine: asian
    spice_level: mild
    diet: [vegan, vegetarian, dairy-free]
  - name: "Orange fennel salad"
    recipe_id: orange-fennel-salad
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: cold
    weather: warm
    richness: light
    format: salad
    cuisine: mediterranean
    spice_level: none
    diet: [vegan, vegetarian, gluten-free, dairy-free]
  - name: "Cabbage pepper salad with mint"
    recipe_id: cabbage-pepper-salad-with-mint
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: cold
    weather: hot
    richness: light
    format: salad
    cuisine: mediterranean
    spice_level: mild
    diet: [vegan, vegetarian, gluten-free, dairy-free]
  - name: "Beet hazelnut salad"
    recipe_id: beet-hazelnut-salad
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: cold
    weather: warm
    richness: light
    format: salad
    cuisine: french
    spice_level: none
    diet: [vegan, vegetarian, gluten-free, dairy-free]
  - name: "Crunchy cabbage salad"
    recipe_id: crunchy-cabbage-salad
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: cold
    weather: warm
    richness: light
    format: salad
    cuisine: fusion
    spice_level: mild
    diet: [vegan, vegetarian, gluten-free, dairy-free]
  - name: "Creamy broccoli salad"
    recipe_id: creamy-broccoli-salad
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: cold
    weather: warm
    richness: moderate
    format: salad
    cuisine: american
    spice_level: none
    diet: [vegetarian, gluten-free]
  - name: "Provençal salad"
    recipe_id: provencal-salad
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: cold
    weather: warm
    richness: light
    format: salad
    cuisine: french
    spice_level: none
    diet: [vegan, vegetarian, gluten-free, dairy-free]
  - name: "Chickpea crumble salad"
    recipe_id: chickpea-crumble-salad
    recipe_source: parsley
    tag_source: inferred
    protein: legume
    temperature: cold
    weather: warm
    richness: moderate
    format: salad
    cuisine: mediterranean
    spice_level: mild
    diet: [vegan, vegetarian, dairy-free]
  - name: "Cream of tomato soup"
    recipe_id: cream-of-tomato-soup
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: hot
    weather: mild
    richness: moderate
    format: soup
    cuisine: french
    spice_level: none
    diet: [vegetarian, gluten-free]
  - name: "Parsnip pear pecan soup"
    recipe_id: parsnip-pear-pecan-soup
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: hot
    weather: cool
    richness: moderate
    format: soup
    cuisine: french
    spice_level: none
    diet: [vegan, vegetarian, gluten-free, dairy-free]
  - name: "Rutabaga apple maple soup"
    recipe_id: rutabaga-apple-maple-soup
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: hot
    weather: cool
    richness: moderate
    format: soup
    cuisine: french
    spice_level: none
    diet: [vegan, vegetarian, gluten-free, dairy-free]
  - name: "Mushroom tarragon soup"
    recipe_id: mushroom-tarragon-soup
    recipe_source: parsley
    tag_source: inferred
    protein: mushroom
    temperature: hot
    weather: cool
    richness: moderate
    format: soup
    cuisine: french
    spice_level: none
    diet: [vegetarian, gluten-free]
  - name: "Cold Mélonccio soup"
    recipe_id: cold-melonccio-soup
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: cold
    weather: hot
    richness: light
    format: soup
    cuisine: fusion
    spice_level: none
    diet: [vegan, vegetarian, gluten-free, dairy-free]
  - name: "Spanish soup"
    recipe_id: spanish-soup
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: hot
    weather: mild
    richness: moderate
    format: soup
    cuisine: spanish
    spice_level: mild
    diet: [vegan, vegetarian, gluten-free, dairy-free]
  - name: "Green tom yum soup"
    recipe_id: green-tom-yum-soup
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: hot
    weather: warm
    richness: light
    format: soup
    cuisine: thai
    spice_level: medium
    diet: [vegan, vegetarian, gluten-free, dairy-free]
  - name: "Chipotle lentil vegetable soup"
    recipe_id: chipotle-lentil-vegetable-soup
    recipe_source: parsley
    tag_source: inferred
    protein: legume
    temperature: hot
    weather: cool
    richness: moderate
    format: soup
    cuisine: mexican
    spice_level: medium
    diet: [vegan, vegetarian, gluten-free, dairy-free]
  - name: "Fisherman's chowder"
    recipe_id: fishermans-chowder
    recipe_source: parsley
    tag_source: inferred
    protein: fish
    temperature: hot
    weather: cold
    richness: rich
    format: soup
    cuisine: french
    spice_level: none
    diet: [pescatarian]
  - name: "Tulum soup"
    recipe_id: tulum-soup
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: hot
    weather: warm
    richness: moderate
    format: soup
    cuisine: mexican
    spice_level: medium
    diet: [vegan, vegetarian, gluten-free, dairy-free]
  - name: "Vegan poutine (medium)"
    recipe_id: vegan-poutine-medium
    recipe_source: parsley
    tag_source: inferred
    protein: mixed
    temperature: hot
    weather: cool
    richness: indulgent
    format: plated-main
    cuisine: quebecois
    spice_level: mild
    diet: [vegan, vegetarian, dairy-free]
  - name: "Ratatouille"
    recipe_id: ratatouille
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: hot
    weather: mild
    richness: light
    format: stew
    cuisine: french
    spice_level: none
    diet: [vegan, vegetarian, gluten-free, dairy-free]
  - name: "Vegetable lasagna (gluten-free)"
    recipe_id: gluten-free-vegetable-lasagna
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: hot
    weather: cool
    richness: rich
    format: casserole
    cuisine: italian
    spice_level: none
    diet: [vegetarian, gluten-free]
  - name: "Veggie paella"
    recipe_id: veggie-paella
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: hot
    weather: warm
    richness: moderate
    format: plated-main
    cuisine: spanish
    spice_level: mild
    diet: [vegan, vegetarian, gluten-free, dairy-free]
  - name: "Salmon pesto artichoke"
    recipe_id: salmon-pesto-artichoke
    recipe_source: parsley
    tag_source: inferred
    protein: fish
    temperature: warm
    weather: mild
    richness: moderate
    format: plated-main
    cuisine: mediterranean
    spice_level: none
    diet: [pescatarian, gluten-free]
  - name: "Salmon crumble"
    recipe_id: salmon-crumble
    recipe_source: parsley
    tag_source: inferred
    protein: fish
    temperature: hot
    weather: cool
    richness: rich
    format: casserole
    cuisine: french
    spice_level: none
    diet: [pescatarian]
  - name: "Mediterranean-style haddock"
    recipe_id: mediterranean-style-haddock
    recipe_source: parsley
    tag_source: inferred
    protein: fish
    temperature: hot
    weather: warm
    richness: moderate
    format: plated-main
    cuisine: mediterranean
    spice_level: mild
    diet: [pescatarian, gluten-free]
  - name: "Korean veggie-chicken poké bowl"
    recipe_id: veggie-chicken-poke-bowl-with-korean-sauce
    recipe_source: parsley
    tag_source: inferred
    protein: plant-substitute
    temperature: room
    weather: warm
    richness: moderate
    format: bowl
    cuisine: korean
    spice_level: medium
    diet: [vegan, vegetarian]
  - name: "Veggie jerk chicken with orange rémoulade"
    recipe_id: veggie-jerk-chicken-with-orange-remoulade
    recipe_source: parsley
    tag_source: inferred
    protein: plant-substitute
    temperature: hot
    weather: warm
    richness: moderate
    format: plated-main
    cuisine: caribbean
    spice_level: hot
    diet: [vegan, vegetarian]
  - name: "Dill hummus"
    recipe_id: dill-hummus
    recipe_source: parsley
    tag_source: inferred
    protein: legume
    temperature: cold
    weather: warm
    richness: light
    format: dip-spread
    cuisine: middle-eastern
    spice_level: none
    diet: [vegan, vegetarian, gluten-free, dairy-free]
  - name: "Broccoli and pistachio hummus"
    recipe_id: broccoli-and-pistachio-hummus
    recipe_source: parsley
    tag_source: inferred
    protein: legume
    temperature: cold
    weather: warm
    richness: light
    format: dip-spread
    cuisine: middle-eastern
    spice_level: none
    diet: [vegan, vegetarian, gluten-free, dairy-free]
  - name: "Satay veggie-chicken banh mi sandwich"
    recipe_id: satay-veggie-chicken-banh-mi-sandwich
    recipe_source: parsley
    tag_source: inferred
    protein: plant-substitute
    temperature: room
    weather: warm
    richness: moderate
    format: handheld
    cuisine: vietnamese
    spice_level: medium
    diet: [vegan, vegetarian]
  - name: "Blackened haddock sandwich"
    recipe_id: blackened-haddock-sandwich
    recipe_source: parsley
    tag_source: inferred
    protein: fish
    temperature: warm
    weather: mild
    richness: moderate
    format: handheld
    cuisine: cajun-creole
    spice_level: medium
    diet: [pescatarian]
  - name: "Tuna salad wrap"
    recipe_id: tuna-salad-wrap
    recipe_source: parsley
    tag_source: inferred
    protein: fish
    temperature: cold
    weather: warm
    richness: moderate
    format: handheld
    cuisine: american
    spice_level: mild
    diet: [pescatarian]
  - name: "Satay sauce"
    recipe_id: satay-sauce
    recipe_source: parsley
    tag_source: inferred
    protein: nut-seed
    temperature: warm
    weather: any
    richness: rich
    format: sauce-condiment
    cuisine: indonesian
    spice_level: medium
    diet: [vegan, vegetarian, dairy-free]
  - name: "Ham and vegetable quiche"
    recipe_id: ham-and-vegetable-quiche
    recipe_source: parsley
    tag_source: inferred
    protein: pork
    temperature: warm
    weather: mild
    richness: rich
    format: baked-good
    cuisine: french
    spice_level: none
    diet: []
  - name: "Veggie beef burger"
    recipe_id: veggie-beef-burger
    recipe_source: parsley
    tag_source: inferred
    protein: plant-substitute
    temperature: hot
    weather: warm
    richness: indulgent
    format: handheld
    cuisine: american
    spice_level: mild
    diet: [vegetarian]
  - name: "Pico de gallo"
    recipe_id: pico-de-gallo
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: cold
    weather: hot
    richness: lean
    format: dip-spread
    cuisine: mexican
    spice_level: mild
    diet: [vegan, vegetarian, gluten-free, dairy-free]
---

# Week of Mock — late-summer back-to-school week (Montreal)

> **MOCK MENU — generated, not a real chef menu.** `source: generated`,
> `status: mock`. A fictional "what-if" week drawn from the Parsley repertoire
> and shaped by `data/menus/PATTERNS.md` (generated 2026-07-24). All dish tags
> are **inferred** from names + INDEX ingredients, not copied from tagged recipes.

## Weekly production

**Végé (4):** Vegan poutine (medium) · Ratatouille · Vegetable lasagna (gluten-free) · Veggie paella
**Poisson (3):** Salmon pesto artichoke · Salmon crumble · Mediterranean-style haddock
**Texture (2):** Korean veggie-chicken poké bowl · Veggie jerk chicken with orange rémoulade
**Soupe (5):** Spanish soup · Green tom yum soup · Chipotle lentil vegetable soup · Fisherman's chowder · Tulum soup
**Potage (5):** Cream of tomato soup · Parsnip pear pecan soup · Rutabaga apple maple soup · Mushroom tarragon soup · Cold Mélonccio soup
**Sandwichs (2):** Satay veggie-chicken banh mi sandwich · Blackened haddock sandwich
**Wraps (1):** Tuna salad wrap
**Salades (6):** Kale mango cabbage salad · Asian cabbage salad · Orange fennel salad · Cabbage pepper salad with mint · Beet hazelnut salad · Crunchy cabbage salad
**Salade composée (3):** Creamy broccoli salad · Provençal salad · Chickpea crumble salad
**Sauces (1):** Satay sauce
**Hummus (2):** Dill hummus · Broccoli and pistachio hummus
**Quiche (1):** Ham and vegetable quiche
**Burgers (1):** Veggie beef burger
**Pico de gallo (1):** Pico de gallo

## Weekly schedule

| Day | Temp | Weather | Dishes |
|---|---|---|---|
| **Mon** 31 Aug | 27 °C | sunny | Kale mango cabbage salad · Beet hazelnut salad · Creamy broccoli salad · Cream of tomato soup · Spanish soup · Salmon pesto artichoke · Vegan poutine (medium) · Dill hummus · Ham and vegetable quiche |
| **Tue** 1 Sep | 26 °C | sunny | Asian cabbage salad · Orange fennel salad · Provençal salad · Parsnip pear pecan soup · Green tom yum soup · Salmon crumble · Korean veggie-chicken poké bowl · Broccoli and pistachio hummus · Veggie beef burger · Satay sauce |
| **Wed** 2 Sep | 29 °C | hot, humid | Cabbage pepper salad with mint · Crunchy cabbage salad · Chickpea crumble salad · Cold Mélonccio soup · Tulum soup · Mediterranean-style haddock · Ratatouille · Satay veggie-chicken banh mi sandwich · Tuna salad wrap |
| **Thu** 3 Sep | 24 °C | afternoon thunderstorm | Beet hazelnut salad · Asian cabbage salad · Creamy broccoli salad · Mushroom tarragon soup · Chipotle lentil vegetable soup · Salmon pesto artichoke · Veggie jerk chicken with orange rémoulade · Pico de gallo · Blackened haddock sandwich · Broccoli and pistachio hummus |
| **Fri** 4 Sep | 23 °C | cooler, clearing | Crunchy cabbage salad · Orange fennel salad · Provençal salad · Rutabaga apple maple soup · Fisherman's chowder · Salmon crumble · Vegetable lasagna (gluten-free) · Veggie paella · Dill hummus |

## Comments and weather

Mock late-summer / back-to-school week for Montreal: a warm sunny start, a hot
humid Wednesday, an afternoon thunderstorm Thursday, and a cooler clearing
Friday. The one cold soup sits on the hottest day; hearty plates and soups are
weighted toward the cooler tail.

## Why this menu

### Strategy

The given constraint was only "August in Montreal, Canada — use typical weather";
everything else (per-day temps, weather, the event) is invented and recorded in
`scenario.invented`. Late-August Montreal typically runs warm-to-hot with humid
spells and convective afternoon storms, so I set a warm sunny Mon–Tue, a hot humid
Wed (29 °C), a 24 °C Thursday broken by an afternoon thunderstorm, and a cooler
23 °C clearing Friday. The week is built salad-forward on the hot front half
(**hot summer → lighter menu**, `weather_temp`, high/stated) and tilts toward
hearty soups and plates on the cooler Thursday/Friday tail (**cool weather →
soups + hearty + salads all sell**, `weather_temp`, medium/stated). The invented
**back-to-school event** is treated only as a soft narrative flag (see honesty
flags): it is a *demand-volume* theme captured in PATTERNS but explicitly **not
modeled** as a placement rule, so it shapes the story, not the dish grid.

Category counts follow the `menu_skeleton` medians exactly (high confidence):
salades 6, potage 5, soupe 5, végé 4, poisson 3, salade-comp 3, hummus 2, texture
2, sandwichs 2, sauces 1, quiche 1, wraps 1, burgers 1 (plus a warm-season pico).
All six staples appear: **Ham** (as the ham & vegetable quiche), **Poutine**,
**Kale mango cabbage**, **Salmon pesto artichoke**, **Korean** (as the veggie-chicken
poké bowl, used as a texture main), and **Creamy broccoli**.

### Per-day notes

- **Mon 27 °C sunny** — warm, salad-forward opener. **Kale mango cabbage is placed
  on Monday** (`per_day_balance`, chef-stated). Soup + potage in parallel (Spanish
  soup + cream of tomato), a salad slate, salmon pesto artichoke as the fish main,
  poutine as the plant/veg main, and the ham quiche. No texture main and no pico
  (both belong later in the week).
- **Tue 26 °C sunny** — the **first texture main** of the Tue/Thu pair: the Korean
  veggie-chicken poké bowl (`per_day_balance`, chef-stated). Still warm, so the
  veggie beef burger runs (**burgers cluster on hot days**, `weather_temp`/`calendar`).
  Salmon crumble is the fish; green tom yum + parsnip potage cover the soups.
- **Wed 29 °C hot, humid** — the hottest day, so the **cold Mélonccio soup** is placed
  here and **only here** (chef rule: cold soups only on days ≥ 24 °C, ≤ once/week,
  hottest summer only). Salad-lean composition, a lighter haddock fish main, ratatouille
  as the veg main, plus a banh mi and a tuna wrap for cold handhelds.
- **Thu 24 °C afternoon thunderstorm** — the **second texture main**, veggie jerk
  chicken, spaced a day from Tuesday (`per_day_balance`, chef-stated). **Pico de gallo
  is placed on Thursday** and never on Monday (`per_day_balance`, chef-stated). At
  24 °C a cold soup would technically be eligible, but it was already used once on
  Wednesday, so Thursday leans to hot soups (mushroom tarragon + chipotle lentil)
  as the storm rolls in. The *day of* a storm tends to keep clients home (demand-volume
  theme, captured-not-modeled) — noted narratively only.
- **Fri 23 °C cooler, clearing** — 23 °C is **below the 24 °C cold-soup threshold**, so
  **no cold soup Friday**. Cooler weather broadens demand, so the day pushes hearty:
  fisherman's chowder + rutabaga-apple-maple potage, salmon crumble, and two warm
  plates (GF vegetable lasagna, veggie paella).

### Pattern citations (with confidence)

- **Skeleton counts = medians** — `menu_skeleton`, **high** (inferred). Every category
  set to its median within min/max.
- **KM → Monday** — `per_day_balance`, **high, chef-stated**.
- **Pico de gallo → Thursday, never Monday** — `per_day_balance`, **high, chef-stated**;
  and pico is a **warm-season** dish (`calendar`, medium) — late August qualifies.
- **Texture mains → Tuesday + Thursday, spaced** — `per_day_balance`, **high,
  chef-stated**. No third (Wednesday) texture main, since that only appears under high
  demand.
- **Cold soup only on days ≥ 24 °C, ≤ once/week, hottest summer** — `weather_temp`,
  **high, chef-stated** (this supersedes the older inferred "cool/rainy → cold soup"
  rule). Placed on the 29 °C Wednesday; kept off the 23 °C Friday.
- **Hot summer → lighter/salad-forward menu; burgers/pico cluster on hot days** —
  `weather_temp`, **high, chef-stated**, corroborated in warm-month weeks.
- **Cool weather → soups + hearty + salads all sell** — `weather_temp`, **medium,
  chef-stated**. Drives the hearty Thu/Fri tail.
- **≥ 1 soup and ≥ 1 salad every day; a fish main most days; a plant/texture main
  most days** — `per_day_balance`, **high** (soup/salad/fish) and **medium** (texture),
  inferred. Each service day here fields ≥ 2 soups, multiple salads, ≥ 1 fish main,
  and a plant/veg/texture main.
- **Staple anchoring** (Ham, Poutine, KM, Salmon pesto artichoke, Korean, Creamy
  broccoli) — `rotation`, **high**, inferred.

### Improvisation & honesty flags (+ small-sample caveat)

- **Every dish tag is `inferred`**, read from the dish name and the Parsley INDEX
  ingredient counts — not copied from a verified tagged recipe. Protein/temperature/
  richness/cuisine/diet values (and especially diet flags like vegan vs. vegetarian,
  or gluten-free) may be wrong for any given dish. In particular I inferred:
  *cream of tomato* and *mushroom tarragon* as **dairy-containing** (vegetarian, not
  vegan); *creamy broccoli* and *GF lasagna* as vegetarian; the *veggie beef burger*
  as vegetarian (it may be vegan). Verify against the recipe files before real use.
- **Staple → dish mapping is a judgment call.** The rotation staple **"Korean"** is
  ambiguous (there is a Korean soup, a Korean grilled-sweet-potato salad, and a
  Korean-sauce veggie-chicken poké bowl). I mapped it to the **poké bowl** so it could
  serve as one of the two texture mains; if the chef's "Korean" is actually the soup,
  the texture slot would need a different dish (e.g. Thai or satay veggie chicken).
- **"Ham" as a quiche** — the staple "Ham" was mapped to `ham-and-vegetable-quiche`
  (the only ham-forward repertoire item); the real menu "Ham" could be a different
  format. Judgment call, flagged.
- **Back-to-school event is narrative only.** PATTERNS records back-to-school under
  **demand-volume themes that are captured, NOT modeled** (no volume dimension exists
  yet), so it does not move any dish onto a specific day here — it only colors the
  rationale. Likewise the "day before a storm buy more / day of stay home" theme is
  mentioned but not used to change placement.
- **Cross-day repeats** (e.g. salmon pesto artichoke on Mon + Thu, beet hazelnut salad
  on Mon + Thu) reflect normal multi-day production and are an authoring choice, not a
  pattern rule.
- **Mélonccio at exactly 24 °C on Thursday was deliberately avoided** to respect the
  "≤ once/week" clause even though 24 °C is technically eligible — a conservative read.
- **Small-sample caveat (from PATTERNS.md):** the 47 analyzed weeks are non-contiguous
  with large gaps, weather/temp is noted on only 36/47 weeks, autumn is mostly bare,
  and nearly all dish tags in the corpus are themselves inferred. Treat `low`/
  `speculative` rows as hypotheses; the `stated` rules leaned on here (KM→Mon,
  Pico→Thu, texture Tue/Thu, cold-soup ≥24 °C, hot→lighter) are the highest-confidence
  signals available and carried the most weight in this mock.
