---
# ============================================================
# GENERATED MOCK MENU — a fictional "what-if" week produced by
# the menus-recommend skill. NOT a real chef menu. Isolated under
# data/menus/generated/. source: generated + status: mock always.
# ============================================================
id: mock-august-mtl-warm-sunny
source: generated
status: mock
generated: 2026-07-27
patterns_generated: 2026-07-24
week_label: "Mock — warm sunny August week (Montreal)"
scenario:
  given: "August in Montreal, Canada — use typical weather"
  invented: "Mon 25°C sunny; Tue 26°C sunny; Wed 27°C sunny, humid; Thu 28°C hot & sunny; Fri 24°C partly cloudy. Mock date range 3–7 August. Classic warm & sunny typical-August week (week 1 of a 5-week batch)."
  week_label: "Mock — warm sunny August week (Montreal)"

# ============================================================
# DISH POOL — LEFT page, by fixed category. Counts follow the
# menu_skeleton medians in PATTERNS.md (bounded by min/max).
# ============================================================
pool:
  vege:                      # median 4; 5 here (Poutine staple has no dedicated category, parked in vege)
    - "Vegan poutine (medium)"
    - "Ratatouille"
    - "Veggie paella"
    - "Gluten-free vegetable lasagna"
    - "Mushroom risotto"
  poisson:                   # median 3
    - "Salmon pesto artichoke"
    - "Sesame-ginger salmon"
    - "Mediterranean-style haddock"
  texture:                   # median 2 — végé-chicken mains, spaced Tue/Thu
    - "Veggie jerk chicken with orange remoulade"
    - "Veggie chicken satay with almonds"
  soupe:                     # median 5
    - "Korean soup"
    - "Green tom yum soup"
    - "Mole verde soup"
    - "Vegan pho soup"
    - "Chipotle lentil vegetable soup"
  potage:                    # median 5; 4 here (repertoire has only 4 blended potages — see honesty flags)
    - "Cream of tomato soup"
    - "Cold melonccio soup"
    - "Parsnip pear pecan soup"
    - "Rutabaga apple maple soup"
  sandwichs:                 # median 2
    - "Hummus, apple and brie sandwich"
    - "Blackened haddock sandwich"
  wraps:                     # median 1
    - "Tuna salad wrap"
  salades:                   # median 6
    - "Kale mango cabbage salad"
    - "Creamy broccoli salad"
    - "Asian cabbage salad"
    - "Orange fennel salad"
    - "Cabbage pepper salad with mint"
    - "Carrot celeriac and almond salad"
  salade-comp:               # median 3
    - "Bandhu salad"
    - "Chickpea crumble salad"
    - "Cassava tabbouleh salad"
  sauces:                    # median 1 — an actual sauce
    - "Vegan tarragon mushroom sauce"
  hummus:                    # median 2
    - "Dill hummus"
    - "Broccoli and pistachio hummus"
  quiche:                    # median 1 — the weekly Ham staple
    - "Ham and vegetable quiche"
  burgers:                   # median 1 — warm-season add-on
    - "Veggie beef burger"
  pico-de-gallo:             # warm-season dish; Thursday only
    - "Pico de gallo"

# ============================================================
# DAILY SCHEDULE — RIGHT page. One entry per service day.
# Mock dates (3–7 August); this is not a real week.
# ============================================================
schedule:
  - day: monday
    date: 2025-08-03
    dishes:
      - "Vegan poutine (medium)"
      - "Ratatouille"
      - "Salmon pesto artichoke"
      - "Ham and vegetable quiche"
      - "Korean soup"
      - "Cream of tomato soup"
      - "Kale mango cabbage salad"
      - "Creamy broccoli salad"
      - "Dill hummus"
      - "Vegan tarragon mushroom sauce"
    temp_c: 25
    weather: "sunny"
    notes: "Kale mango cabbage on Monday per chef rule. No texture main today (spaced to Tue/Thu)."
  - day: tuesday
    date: 2025-08-04
    dishes:
      - "Vegan poutine (medium)"
      - "Ratatouille"
      - "Veggie jerk chicken with orange remoulade"
      - "Sesame-ginger salmon"
      - "Green tom yum soup"
      - "Cream of tomato soup"
      - "Asian cabbage salad"
      - "Orange fennel salad"
      - "Bandhu salad"
      - "Broccoli and pistachio hummus"
      - "Veggie beef burger"
    temp_c: 26
    weather: "sunny"
    notes: "First texture main of the week (Tue). Burger runs — warm-season."
  - day: wednesday
    date: 2025-08-05
    dishes:
      - "Vegan poutine (medium)"
      - "Veggie paella"
      - "Salmon pesto artichoke"
      - "Ham and vegetable quiche"
      - "Korean soup"
      - "Mole verde soup"
      - "Cream of tomato soup"
      - "Cabbage pepper salad with mint"
      - "Creamy broccoli salad"
      - "Cassava tabbouleh salad"
      - "Dill hummus"
      - "Tuna salad wrap"
      - "Hummus, apple and brie sandwich"
    temp_c: 27
    weather: "sunny, humid"
    notes: "High-demand mid-week; no 3rd texture main added (demand not high enough to trigger Wed texture)."
  - day: thursday
    date: 2025-08-06
    dishes:
      - "Vegan poutine (medium)"
      - "Mushroom risotto"
      - "Mediterranean-style haddock"
      - "Veggie chicken satay with almonds"
      - "Cold melonccio soup"
      - "Vegan pho soup"
      - "Asian cabbage salad"
      - "Carrot celeriac and almond salad"
      - "Chickpea crumble salad"
      - "Broccoli and pistachio hummus"
      - "Pico de gallo"
      - "Vegan tarragon mushroom sauce"
    temp_c: 28
    weather: "hot & sunny"
    notes: "Hottest day: cold Mélonccio soup (≥24°C rule, once/week) + Pico de Gallo (Thursday). Second texture main (Thu)."
  - day: friday
    date: 2025-08-07
    dishes:
      - "Vegan poutine (medium)"
      - "Gluten-free vegetable lasagna"
      - "Sesame-ginger salmon"
      - "Chipotle lentil vegetable soup"
      - "Parsnip pear pecan soup"
      - "Rutabaga apple maple soup"
      - "Orange fennel salad"
      - "Carrot celeriac and almond salad"
      - "Blackened haddock sandwich"
    temp_c: 24
    weather: "partly cloudy"
    notes: "Coolest day — heartier root potages parked here; no texture main (spaced Tue/Thu)."

comment: "Mock warm-sunny typical-August week (Montreal). All five days ≥24°C; salad-lean, light. Generated artifact — not a real chef menu."

# ============================================================
# DISH TAGS — one entry per unique dish. Tags INFERRED from name +
# repertoire knowledge (tag_source: inferred). Controlled vocab from
# data/recipes/_TEMPLATE.md.
# ============================================================
dishes:
  - name: "Vegan poutine (medium)"
    recipe_id: vegan-poutine-medium
    recipe_source: parsley
    tag_source: inferred
    protein: plant-substitute
    temperature: hot
    weather: any
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
    weather: warm
    richness: light
    format: stew
    cuisine: french
    spice_level: mild
    diet: [vegan, vegetarian, gluten-free, dairy-free]
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
    diet: [vegan, vegetarian, gluten-free]
  - name: "Gluten-free vegetable lasagna"
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
  - name: "Mushroom risotto"
    recipe_id: mushroom-risotto
    recipe_source: parsley
    tag_source: inferred
    protein: mushroom
    temperature: hot
    weather: mild
    richness: rich
    format: plated-main
    cuisine: italian
    spice_level: none
    diet: [vegetarian, gluten-free]
  - name: "Salmon pesto artichoke"
    recipe_id: salmon-pesto-artichoke
    recipe_source: parsley
    tag_source: inferred
    protein: fish
    temperature: warm
    weather: warm
    richness: moderate
    format: plated-main
    cuisine: mediterranean
    spice_level: none
    diet: [pescatarian, gluten-free, dairy-free]
  - name: "Sesame-ginger salmon"
    recipe_id: sesame-ginger-salmon
    recipe_source: parsley
    tag_source: inferred
    protein: fish
    temperature: warm
    weather: warm
    richness: moderate
    format: plated-main
    cuisine: japanese
    spice_level: mild
    diet: [pescatarian, dairy-free]
  - name: "Mediterranean-style haddock"
    recipe_id: mediterranean-style-haddock
    recipe_source: parsley
    tag_source: inferred
    protein: fish
    temperature: hot
    weather: warm
    richness: light
    format: plated-main
    cuisine: mediterranean
    spice_level: mild
    diet: [pescatarian, dairy-free]
  - name: "Korean soup"
    recipe_id: korean-soup
    recipe_source: parsley
    tag_source: inferred
    protein: plant-substitute
    temperature: hot
    weather: cool
    richness: moderate
    format: soup
    cuisine: korean
    spice_level: medium
    diet: [vegan, vegetarian]
  - name: "Green tom yum soup"
    recipe_id: green-tom-yum-soup
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: hot
    weather: warm
    richness: light
    format: broth
    cuisine: thai
    spice_level: hot
    diet: [vegan, vegetarian, gluten-free]
  - name: "Mole verde soup"
    recipe_id: mole-verde-soup
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: hot
    weather: warm
    richness: light
    format: soup
    cuisine: mexican
    spice_level: medium
    diet: [vegan, vegetarian, gluten-free]
  - name: "Vegan pho soup"
    recipe_id: vegan-pho-soup
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: hot
    weather: mild
    richness: light
    format: broth
    cuisine: vietnamese
    spice_level: mild
    diet: [vegan, vegetarian, gluten-free]
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
    diet: [vegan, vegetarian, gluten-free]
  - name: "Cream of tomato soup"
    recipe_id: cream-of-tomato-soup
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: hot
    weather: warm
    richness: light
    format: soup
    cuisine: french
    spice_level: none
    diet: [vegetarian, gluten-free]
  - name: "Cold melonccio soup"
    recipe_id: cold-melonccio-soup
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: cold
    weather: hot
    richness: light
    format: soup
    cuisine: mediterranean
    spice_level: none
    diet: [vegan, vegetarian, gluten-free]
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
    diet: [vegetarian, gluten-free]
  - name: "Rutabaga apple maple soup"
    recipe_id: rutabaga-apple-maple-soup
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: hot
    weather: cool
    richness: moderate
    format: soup
    cuisine: quebecois
    spice_level: none
    diet: [vegan, vegetarian, gluten-free]
  - name: "Kale mango cabbage salad"
    recipe_id: kale-mango-cabbage-salad
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: cold
    weather: hot
    richness: light
    format: salad
    cuisine: fusion
    spice_level: none
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
  - name: "Asian cabbage salad"
    recipe_id: asian-cabbage-salad
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: cold
    weather: hot
    richness: light
    format: salad
    cuisine: fusion
    spice_level: mild
    diet: [vegan, vegetarian, gluten-free]
  - name: "Orange fennel salad"
    recipe_id: orange-fennel-salad
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: cold
    weather: hot
    richness: light
    format: salad
    cuisine: mediterranean
    spice_level: none
    diet: [vegan, vegetarian, gluten-free]
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
    spice_level: none
    diet: [vegan, vegetarian, gluten-free]
  - name: "Carrot celeriac and almond salad"
    recipe_id: carrot-celeriac-and-almond-salad
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: cold
    weather: warm
    richness: light
    format: salad
    cuisine: french
    spice_level: none
    diet: [vegan, vegetarian, gluten-free]
  - name: "Bandhu salad"
    recipe_id: bandhu-salad
    recipe_source: parsley
    tag_source: inferred
    protein: legume
    temperature: cold
    weather: warm
    richness: moderate
    format: salad
    cuisine: indian
    spice_level: mild
    diet: [vegan, vegetarian, gluten-free]
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
    diet: [vegan, vegetarian]
  - name: "Cassava tabbouleh salad"
    recipe_id: cassava-tabbouleh-salad
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: cold
    weather: hot
    richness: light
    format: salad
    cuisine: middle-eastern
    spice_level: none
    diet: [vegan, vegetarian, gluten-free]
  - name: "Dill hummus"
    recipe_id: dill-hummus
    recipe_source: parsley
    tag_source: inferred
    protein: legume
    temperature: cold
    weather: warm
    richness: moderate
    format: dip-spread
    cuisine: middle-eastern
    spice_level: none
    diet: [vegan, vegetarian, gluten-free]
  - name: "Broccoli and pistachio hummus"
    recipe_id: broccoli-and-pistachio-hummus
    recipe_source: parsley
    tag_source: inferred
    protein: legume
    temperature: cold
    weather: warm
    richness: moderate
    format: dip-spread
    cuisine: middle-eastern
    spice_level: none
    diet: [vegan, vegetarian, gluten-free]
  - name: "Veggie jerk chicken with orange remoulade"
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
  - name: "Veggie chicken satay with almonds"
    recipe_id: veggie-chicken-satay-with-almonds
    recipe_source: parsley
    tag_source: inferred
    protein: plant-substitute
    temperature: hot
    weather: warm
    richness: moderate
    format: plated-main
    cuisine: thai
    spice_level: medium
    diet: [vegan, vegetarian]
  - name: "Hummus, apple and brie sandwich"
    recipe_id: hummus-apple-and-brie-sandwich
    recipe_source: parsley
    tag_source: inferred
    protein: cheese
    temperature: cold
    weather: warm
    richness: moderate
    format: handheld
    cuisine: french
    spice_level: none
    diet: [vegetarian]
  - name: "Blackened haddock sandwich"
    recipe_id: blackened-haddock-sandwich
    recipe_source: parsley
    tag_source: inferred
    protein: fish
    temperature: warm
    weather: warm
    richness: moderate
    format: handheld
    cuisine: cajun-creole
    spice_level: medium
    diet: [pescatarian]
  - name: "Vegan tarragon mushroom sauce"
    recipe_id: vegan-tarragon-mushroom-sauce
    recipe_source: parsley
    tag_source: inferred
    protein: mushroom
    temperature: hot
    weather: cool
    richness: rich
    format: sauce-condiment
    cuisine: french
    spice_level: none
    diet: [vegan, vegetarian, gluten-free]
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
    spice_level: none
    diet: [pescatarian]
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
    diet: [vegan, vegetarian]
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
    spice_level: medium
    diet: [vegan, vegetarian, gluten-free, dairy-free]
---

# Week of Mock — warm sunny August week (Montreal)

> **MOCK / GENERATED** — a fictional "what-if" week produced by the `menus-recommend`
> skill from `PATTERNS.md` + the Parsley repertoire. Not a real chef menu. Mock dates
> 3–7 August; all values invented except the given scenario.

## Weekly production

**Végé (5)** — Vegan poutine (medium) · Ratatouille · Veggie paella · Gluten-free vegetable lasagna · Mushroom risotto
**Poisson (3)** — Salmon pesto artichoke · Sesame-ginger salmon · Mediterranean-style haddock
**Texture (2)** — Veggie jerk chicken with orange remoulade · Veggie chicken satay with almonds
**Soupe (5)** — Korean soup · Green tom yum soup · Mole verde soup · Vegan pho soup · Chipotle lentil vegetable soup
**Potage (4)** — Cream of tomato soup · Cold melonccio soup · Parsnip pear pecan soup · Rutabaga apple maple soup
**Sandwichs (2)** — Hummus, apple and brie sandwich · Blackened haddock sandwich
**Wraps (1)** — Tuna salad wrap
**Salades (6)** — Kale mango cabbage salad · Creamy broccoli salad · Asian cabbage salad · Orange fennel salad · Cabbage pepper salad with mint · Carrot celeriac and almond salad
**Salade-comp (3)** — Bandhu salad · Chickpea crumble salad · Cassava tabbouleh salad
**Sauces (1)** — Vegan tarragon mushroom sauce
**Hummus (2)** — Dill hummus · Broccoli and pistachio hummus
**Quiche (1)** — Ham and vegetable quiche
**Burgers (1)** — Veggie beef burger
**Pico de gallo (1)** — Pico de gallo

## Weekly schedule

| Day | Temp | Weather | Dishes |
|---|---|---|---|
| **Mon** 3 Aug | 25 °C | sunny | Vegan poutine · Ratatouille · Salmon pesto artichoke · Ham & vegetable quiche · Korean soup · Cream of tomato soup · **Kale mango cabbage salad** · Creamy broccoli salad · Dill hummus · Vegan tarragon mushroom sauce |
| **Tue** 4 Aug | 26 °C | sunny | Vegan poutine · Ratatouille · **Veggie jerk chicken w/ orange remoulade** · Sesame-ginger salmon · Green tom yum soup · Cream of tomato soup · Asian cabbage salad · Orange fennel salad · Bandhu salad · Broccoli & pistachio hummus · Veggie beef burger |
| **Wed** 5 Aug | 27 °C | sunny, humid | Vegan poutine · Veggie paella · Salmon pesto artichoke · Ham & vegetable quiche · Korean soup · Mole verde soup · Cream of tomato soup · Cabbage pepper salad w/ mint · Creamy broccoli salad · Cassava tabbouleh salad · Dill hummus · Tuna salad wrap · Hummus/apple/brie sandwich |
| **Thu** 6 Aug | 28 °C | hot & sunny | Vegan poutine · Mushroom risotto · Mediterranean-style haddock · **Veggie chicken satay w/ almonds** · **Cold melonccio soup** · Vegan pho soup · Asian cabbage salad · Carrot celeriac & almond salad · Chickpea crumble salad · Broccoli & pistachio hummus · **Pico de gallo** · Vegan tarragon mushroom sauce |
| **Fri** 7 Aug | 24 °C | partly cloudy | Vegan poutine · Gluten-free vegetable lasagna · Sesame-ginger salmon · Chipotle lentil vegetable soup · Parsnip pear pecan soup · Rutabaga apple maple soup · Orange fennel salad · Carrot celeriac & almond salad · Blackened haddock sandwich |

## Comments and weather

Mock warm-sunny typical-August week in Montreal. All five service days sit at 24–28 °C —
a hot, salad-lean week with light mains, one cold soup on the peak day, and a burger and
Pico de Gallo carried as warm-season items. Generated artifact, not a real chef menu.

## Why this menu

### Strategy

The only given was *"August in Montreal, Canada — use typical weather"*; everything else
(per-day temps, the sunny/humid mix, mock dates) is invented for a classic early-August
warm week — every day 24–28 °C, sunny to partly cloudy. Montreal August is the hottest,
most humid stretch of the year, so the whole week is pulled toward the **hot-weather →
lighter-menu** pattern (*weather_temp, chef-stated, high*): a wide salad wall (6 salads +
3 composed), fresh brothy soups over heavy ragoûts, lean fish, and the warm-season extras
the chef only runs when it's hot — a **burger** and **Pico de Gallo**. Heavy root-vegetable
potages and casseroles are kept to the coolest day. The staple spine (Ham/quiche, Poutine,
Kale mango cabbage, Salmon pesto artichoke, Korean, Creamy broccoli) anchors every week and
is all present.

### Per-day notes

- **Mon 25 °C sunny** — Opens with **Kale mango cabbage** (chef places KM on Monday) plus
  Creamy broccoli; Ham & vegetable quiche and Poutine anchor the staples; Korean soup +
  Cream of tomato potage cover the soup requirement; Salmon pesto artichoke is the fish.
  No texture main today — it is deliberately spaced to Tue/Thu.
- **Tue 26 °C sunny** — First **texture** main (Veggie jerk chicken); Green tom yum brings a
  light, spicy brothy soup for the heat; the **Veggie beef burger** runs as a warm-season add.
  Two cold salads + Bandhu composed salad keep it salad-forward.
- **Wed 27 °C sunny/humid** — Busiest mid-week slate; Veggie paella as the véggie main, a
  fresh Mole verde soup, tuna wrap + hummus-apple-brie sandwich for grab-and-go in the heat.
  No 3rd texture main — demand isn't high enough to trigger the Wednesday texture exception.
- **Thu 28 °C hot & sunny** — Peak heat: the **Cold melonccio soup** appears here (its only
  outing this week), and **Pico de Gallo** is served (chef rule: Thursday, never Monday).
  Second **texture** main (Veggie chicken satay). Lightest, freshest day of the week.
- **Fri 24 °C partly cloudy** — Coolest day, so the two heartier **root-vegetable potages**
  (Parsnip-pear-pecan, Rutabaga-apple-maple) and the GF vegetable lasagna are parked here,
  alongside a chipotle-lentil soup. No texture main (Tue/Thu spacing).

### Pattern citations (with confidence)

- **Menu skeleton counts** — salades 6, soupe 5, poisson 3, salade-comp 3, hummus 2,
  texture 2, sandwichs 2, sauces 1, quiche 1, wraps 1, burgers 1 all match the `menu_skeleton`
  medians. *(high; inferred)* Potage set to **4** (see honesty flags). Végé shows 5 because
  Poutine has no dedicated pool category and is parked in végé (still within végé min 3 / max 8).
- **Staples anchored** — Ham (quiche), Poutine, Kale mango cabbage, Salmon pesto artichoke,
  Korean (soup), Creamy broccoli all present. *(rotation, high; Ham/Poutine 47/47)*
- **Kale mango cabbage → Monday.** *(per_day_balance, chef-stated, high)*
- **Pico de Gallo → Thursday, never Monday** — placed Thursday only. *(per_day_balance,
  chef-stated, high)* Also honored as a **warm-season** dish appropriate in August.
  *(calendar, medium)*
- **Texture mains → Tuesday and Thursday, spaced**, no 3rd on Wednesday (demand not high).
  *(per_day_balance, chef-stated, high)*
- **Every service day fields ≥1 soup, ≥1 salad, ≥1 fish** — verified across all five days.
  *(per_day_balance, high; inferred)* Plant-substitute main present Tue/Thu (texture) and a
  vegan poutine daily; not forced onto all five days, matching the "spaced, not daily" read.
  *(medium; inferred)*
- **Hot weather → lighter, salad-lean menu**, burgers/falafels + Pico cluster in warm weeks.
  *(weather_temp, chef-stated, high)*
- **Cold-served cold soup only on days ≥24 °C, Mélonccio ≤once/week in hottest summer** —
  Cold melonccio soup placed on the single hottest day (Thu 28 °C). *(weather_temp,
  chef-stated, high)*

### Improvisation & honesty flags

- **Potage count is 4, not the median 5.** The Parsley repertoire contains only four clearly
  blended "potage" recipes (cream-of-tomato, cold-melonccio, parsnip-pear-pecan,
  rutabaga-apple-maple); I did not invent a fifth or reclassify a chunky soupe to hit the
  median. 4 is within the skeleton min (4). *Improvisation: under-count driven by repertoire
  limits.*
- **Root-vegetable potages on a warm week.** Parsnip-pear-pecan and Rutabaga-apple-maple are
  cool-weather dishes; the repertoire lacks light *summer* potages (e.g. a chilled green
  potage), so I parked both on the coolest day (Fri 24 °C) rather than drop the category.
  *Improvisation against the hot-week lean.*
- **All dish tags are `inferred`** from name + repertoire knowledge, not read from tagged
  recipe files. Protein/temperature/cuisine/spice values (e.g. Korean soup as
  plant-substitute, Cold melonccio as a cold mediterranean soup, Poutine as `quebecois`)
  carry inference error. `PATTERNS.md`'s own small-sample caveat applies — nearly all corpus
  dish tags are inferred too.
- **Poutine has no dedicated pool category** and is parked under végé; this is a modelling
  choice, not a chef-stated placement.
- **Burger placement (Tue/Thu) and specific soup/salad day-assignments** beyond the stated
  rules (KM Monday, Pico Thursday, texture Tue/Thu, cold soup on hot day) are improvised for
  within-day balance and cuisine variety — no governing pattern dictates them.
- **Small-sample caveat (from `PATTERNS.md`).** The 47 analyzed weeks are non-contiguous with
  large gaps, weather is noted on only 36/47 weeks, and there is no August-2026 data; the
  warm-season behaviors lean on chef-stated rules plus a handful of May–Aug 2025/2026 weeks.
  Treat this mock as a plausible hypothesis, not a prediction.
