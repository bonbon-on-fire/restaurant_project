---
# ============================================================
# GENERATED MOCK WEEKLY MENU — a fictional "what-if" week.
# NOT a real chef menu. source: generated + status: mock.
# Drawn from the Parsley repertoire, shaped by data/menus/PATTERNS.md.
# ============================================================
id: mock-august-mtl-heatwave
source: generated
status: mock
generated: 2026-07-27
patterns_generated: 2026-07-24
scenario:
  given: "August in Montreal, Canada — use typical weather"
  invented: >-
    Heatwave week (a hot, humid spell — realistic for a Montreal August).
    Mon 30 °C hot & humid; Tue 32 °C hot; Wed 33 °C very hot & humid;
    Thu 31 °C hot; Fri 29 °C hot. No holiday or closure this week.
  week_label: "Mock — August heatwave week (Montreal)"
  week_range: "10–14 August"

# ============================================================
# DISH POOL — by fixed category. Filled to the skeleton counts,
# tilted toward the salad/cold end for extreme heat.
# ============================================================
pool:
  vege: ["Ratatouille", "Veggie paella", "Vegan poutine", "Falafels"]
  poisson: ["Salmon pesto artichoke", "Sesame ginger salmon", "Dill gravlax salmon over potato & fennel salad"]
  texture: ["Veggie jerk chicken with orange rémoulade", "Veggie chicken satay with almonds"]
  soupe: ["Korean soup", "Green tom yum soup", "Vegan pho soup", "Mole verde soup"]
  potage: ["Cold melonccio soup", "Cream of tomato soup", "Parsnip pear pecan soup", "Green summer potage"]
  sandwichs: ["Cajun salmon sandwich", "Tropical veggie chicken sandwich"]
  wraps: ["Tuna salad wrap"]
  salades: ["Kale mango cabbage salad", "Creamy broccoli salad", "Orange fennel salad", "Asian cabbage salad", "Cabbage pepper salad with mint", "Bandhu salad", "Crunchy cabbage salad"]
  salade-comp: ["Chickpea crumble salad", "Korean grilled sweet potato salad", "Black-eyed pea salad", "Cassava tabbouleh salad"]
  sauces: ["Satay sauce"]
  hummus: ["Broccoli pistachio hummus", "Green lime hummus"]
  quiche: ["Ham & vegetable quiche"]
  burgers: ["Veggie chicken burger", "Veggie beef burger"]
  pico-de-gallo: ["Pico de gallo"]

# ============================================================
# DAILY SCHEDULE — one entry per service day (Mon–Fri).
# ============================================================
schedule:
  - day: monday
    date: 2026-08-10
    dishes: ["Kale mango cabbage salad", "Creamy broccoli salad", "Orange fennel salad", "Korean soup", "Cream of tomato soup", "Salmon pesto artichoke", "Ratatouille", "Vegan poutine", "Broccoli pistachio hummus", "Cajun salmon sandwich", "Veggie chicken burger"]
    temp_c: 30
    weather: "hot & humid"
    notes:
  - day: tuesday
    date: 2026-08-11
    dishes: ["Asian cabbage salad", "Cabbage pepper salad with mint", "Green tom yum soup", "Green summer potage", "Sesame ginger salmon", "Veggie jerk chicken with orange rémoulade", "Green lime hummus", "Veggie beef burger", "Falafels"]
    temp_c: 32
    weather: "hot"
    notes: "Texture main (jerk veggie-chicken) — Tuesday per chef rule."
  - day: wednesday
    date: 2026-08-12
    dishes: ["Cold melonccio soup", "Vegan pho soup", "Bandhu salad", "Crunchy cabbage salad", "Dill gravlax salmon over potato & fennel salad", "Chickpea crumble salad", "Broccoli pistachio hummus", "Veggie paella"]
    temp_c: 33
    weather: "very hot & humid"
    notes: "Peak heat — coldest, most salad-lean day; chilled Mélonccio placed here."
  - day: thursday
    date: 2026-08-13
    dishes: ["Pico de gallo", "Creamy broccoli salad", "Korean grilled sweet potato salad", "Mole verde soup", "Parsnip pear pecan soup", "Salmon pesto artichoke", "Veggie chicken satay with almonds", "Tuna salad wrap", "Veggie chicken burger", "Vegan poutine"]
    temp_c: 31
    weather: "hot"
    notes: "Pico de Gallo — Thursday per chef rule. Texture main (satay veggie-chicken) — Thursday, spaced from Tue."
  - day: friday
    date: 2026-08-14
    dishes: ["Crunchy cabbage salad", "Black-eyed pea salad", "Cassava tabbouleh salad", "Green tom yum soup", "Green summer potage", "Sesame ginger salmon", "Ham & vegetable quiche", "Tropical veggie chicken sandwich", "Satay sauce", "Veggie beef burger"]
    temp_c: 29
    weather: "hot"
    notes:

comment: "Mock heatwave week (Montreal, August). Week tilted to the salad/cold end; burgers + falafels emphasized on the hot days; one chilled cold soup (Mélonccio) on the 33 °C peak."

# ============================================================
# DISH TAGS — one entry per UNIQUE dish across pool + schedule.
# tag_source: inferred (from Parsley name + repertoire knowledge).
# recipe_id verified against data/parsley/recipes-en/ (exact filename − .md).
# Controlled vocabulary per data/recipes/_TEMPLATE.md.
# ============================================================
dishes:
  # --- vege ---
  - name: "Ratatouille"
    aka: []
    recipe_id: ratatouille
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: hot
    weather: warm
    richness: moderate
    format: stew
    cuisine: french
    spice_level: none
    diet: [vegan, vegetarian, gluten-free, dairy-free]
  - name: "Veggie paella"
    aka: ["Paella"]
    recipe_id: veggie-paella
    recipe_source: parsley
    tag_source: inferred
    protein: mixed
    temperature: hot
    weather: warm
    richness: moderate
    format: plated-main
    cuisine: spanish
    spice_level: mild
    diet: [vegan, vegetarian, gluten-free]
  - name: "Vegan poutine"
    aka: ["Poutine"]
    recipe_id: vegan-poutine-medium
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: hot
    weather: cool
    richness: indulgent
    format: plated-main
    cuisine: quebecois
    spice_level: none
    diet: [vegan, vegetarian, dairy-free]
  - name: "Falafels"
    aka: []
    recipe_id: falafels-8
    recipe_source: parsley
    tag_source: inferred
    protein: legume
    temperature: warm
    weather: warm
    richness: moderate
    format: handheld
    cuisine: middle-eastern
    spice_level: mild
    diet: [vegan, vegetarian, dairy-free]
  # --- poisson ---
  - name: "Salmon pesto artichoke"
    aka: []
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
  - name: "Sesame ginger salmon"
    aka: ["Salmon ginger"]
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
  - name: "Dill gravlax salmon over potato & fennel salad"
    aka: []
    recipe_id: dill-gravlax-salmon-over-potato-and-fennel-salad
    recipe_source: parsley
    tag_source: inferred
    protein: fish
    temperature: cold
    weather: hot
    richness: light
    format: salad
    cuisine: scandinavian
    spice_level: none
    diet: [pescatarian, gluten-free, dairy-free]
  # --- texture (plant-substitute mains) ---
  - name: "Veggie jerk chicken with orange rémoulade"
    aka: ["Jerk chicken"]
    recipe_id: veggie-jerk-chicken-with-orange-remoulade
    recipe_source: parsley
    tag_source: inferred
    protein: plant-substitute
    temperature: hot
    weather: warm
    richness: moderate
    format: plated-main
    cuisine: caribbean
    spice_level: medium
    diet: [vegan, vegetarian]
  - name: "Veggie chicken satay with almonds"
    aka: ["Satay chicken"]
    recipe_id: veggie-chicken-satay-with-almonds
    recipe_source: parsley
    tag_source: inferred
    protein: plant-substitute
    temperature: hot
    weather: warm
    richness: moderate
    format: plated-main
    cuisine: thai
    spice_level: mild
    diet: [vegan, vegetarian]
  # --- soupe ---
  - name: "Korean soup"
    aka: ["Korean"]
    recipe_id: korean-soup
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: hot
    weather: cool
    richness: moderate
    format: soup
    cuisine: korean
    spice_level: medium
    diet: [vegan, vegetarian]
  - name: "Green tom yum soup"
    aka: ["Tom yum"]
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
  - name: "Vegan pho soup"
    aka: ["Pho"]
    recipe_id: vegan-pho-soup
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: hot
    weather: warm
    richness: light
    format: broth
    cuisine: vietnamese
    spice_level: mild
    diet: [vegan, vegetarian]
  - name: "Mole verde soup"
    aka: []
    recipe_id: mole-verde-soup
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: hot
    weather: mild
    richness: moderate
    format: soup
    cuisine: mexican
    spice_level: medium
    diet: [vegan, vegetarian, gluten-free]
  # --- potage ---
  - name: "Cold melonccio soup"
    aka: ["Mélonccio", "Potage Froid Mélonccio"]
    recipe_id: cold-melonccio-soup
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: cold
    weather: hot
    richness: light
    format: soup
    cuisine: spanish
    spice_level: none
    diet: [vegan, vegetarian, gluten-free, dairy-free]
  - name: "Cream of tomato soup"
    aka: []
    recipe_id: cream-of-tomato-soup
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: hot
    weather: mild
    richness: moderate
    format: soup
    cuisine: american
    spice_level: none
    diet: [vegetarian, gluten-free]
  - name: "Parsnip pear pecan soup"
    aka: []
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
    diet: [vegan, vegetarian, gluten-free]
  - name: "Green summer potage"
    aka: ["Potage Vert L'été"]
    recipe_id:
    recipe_source: none
    tag_source: inferred
    protein: vegetable
    temperature: warm
    weather: warm
    richness: light
    format: soup
    cuisine: french
    spice_level: none
    diet: [vegan, vegetarian, gluten-free]
  # --- salades ---
  - name: "Kale mango cabbage salad"
    aka: ["Kale mango cabbage", "KM"]
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
    aka: ["Creamy broccoli"]
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
  - name: "Orange fennel salad"
    aka: []
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
    diet: [vegan, vegetarian, gluten-free, dairy-free]
  - name: "Asian cabbage salad"
    aka: ["Asian"]
    recipe_id: asian-cabbage-salad
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: cold
    weather: hot
    richness: light
    format: salad
    cuisine: asian
    spice_level: mild
    diet: [vegan, vegetarian, gluten-free, dairy-free]
  - name: "Cabbage pepper salad with mint"
    aka: []
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
    diet: [vegan, vegetarian, gluten-free, dairy-free]
  - name: "Bandhu salad"
    aka: ["Bandhu"]
    recipe_id: bandhu-salad
    recipe_source: parsley
    tag_source: inferred
    protein: mixed
    temperature: cold
    weather: warm
    richness: light
    format: salad
    cuisine: indian
    spice_level: mild
    diet: [vegan, vegetarian, gluten-free]
  - name: "Crunchy cabbage salad"
    aka: []
    recipe_id: crunchy-cabbage-salad
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: cold
    weather: hot
    richness: light
    format: salad
    cuisine: american
    spice_level: none
    diet: [vegan, vegetarian, gluten-free, dairy-free]
  # --- salade-comp ---
  - name: "Chickpea crumble salad"
    aka: []
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
  - name: "Korean grilled sweet potato salad"
    aka: []
    recipe_id: korean-grilled-sweet-potato-salad
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: room
    weather: warm
    richness: moderate
    format: salad
    cuisine: korean
    spice_level: medium
    diet: [vegan, vegetarian, gluten-free]
  - name: "Black-eyed pea salad"
    aka: []
    recipe_id: black-eyed-pea-salad
    recipe_source: parsley
    tag_source: inferred
    protein: legume
    temperature: cold
    weather: warm
    richness: moderate
    format: salad
    cuisine: southern-us
    spice_level: mild
    diet: [vegan, vegetarian, gluten-free]
  - name: "Cassava tabbouleh salad"
    aka: ["Tabbouleh"]
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
  # --- sauces ---
  - name: "Satay sauce"
    aka: []
    recipe_id: satay-sauce
    recipe_source: parsley
    tag_source: inferred
    protein: nut-seed
    temperature: warm
    weather: any
    richness: rich
    format: sauce-condiment
    cuisine: thai
    spice_level: medium
    diet: [vegan, vegetarian, gluten-free]
  # --- hummus ---
  - name: "Broccoli pistachio hummus"
    aka: ["Broccoli pistachio"]
    recipe_id: broccoli-and-pistachio-hummus
    recipe_source: parsley
    tag_source: inferred
    protein: legume
    temperature: cold
    weather: hot
    richness: light
    format: dip-spread
    cuisine: middle-eastern
    spice_level: none
    diet: [vegan, vegetarian, gluten-free, dairy-free]
  - name: "Green lime hummus"
    aka: []
    recipe_id: green-lime-hummus
    recipe_source: parsley
    tag_source: inferred
    protein: legume
    temperature: cold
    weather: hot
    richness: light
    format: dip-spread
    cuisine: middle-eastern
    spice_level: mild
    diet: [vegan, vegetarian, gluten-free, dairy-free]
  # --- quiche ---
  - name: "Ham & vegetable quiche"
    aka: ["Ham"]
    recipe_id: ham-and-vegetable-quiche
    recipe_source: parsley
    tag_source: inferred
    protein: pork
    temperature: hot
    weather: cool
    richness: rich
    format: baked-good
    cuisine: french
    spice_level: none
    diet: []
  # --- sandwichs ---
  - name: "Cajun salmon sandwich"
    aka: []
    recipe_id: cajun-salmon-sandwich
    recipe_source: parsley
    tag_source: inferred
    protein: fish
    temperature: room
    weather: mild
    richness: moderate
    format: handheld
    cuisine: cajun-creole
    spice_level: medium
    diet: [pescatarian]
  - name: "Tropical veggie chicken sandwich"
    aka: []
    recipe_id: tropical-veggie-chicken-sandwich
    recipe_source: parsley
    tag_source: inferred
    protein: plant-substitute
    temperature: room
    weather: warm
    richness: moderate
    format: handheld
    cuisine: fusion
    spice_level: mild
    diet: [vegan, vegetarian]
  # --- wraps ---
  - name: "Tuna salad wrap"
    aka: ["Tuna salad"]
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
  # --- burgers ---
  - name: "Veggie chicken burger"
    aka: []
    recipe_id: veggie-chicken-burger
    recipe_source: parsley
    tag_source: inferred
    protein: plant-substitute
    temperature: hot
    weather: warm
    richness: rich
    format: handheld
    cuisine: american
    spice_level: mild
    diet: [vegetarian]
  - name: "Veggie beef burger"
    aka: []
    recipe_id: veggie-beef-burger
    recipe_source: parsley
    tag_source: inferred
    protein: plant-substitute
    temperature: hot
    weather: warm
    richness: rich
    format: handheld
    cuisine: american
    spice_level: mild
    diet: [vegetarian]
  # --- pico-de-gallo ---
  - name: "Pico de gallo"
    aka: ["Pico de Gallo"]
    recipe_id: pico-de-gallo
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: cold
    weather: hot
    richness: light
    format: dip-spread
    cuisine: mexican
    spice_level: mild
    diet: [vegan, vegetarian, gluten-free, dairy-free]
---

# Week of Mock — August heatwave week (Montreal)

> **GENERATED MOCK — not a real chef menu.** `source: generated`, `status: mock`.
> A fictional "what-if" week drawn from the Parsley repertoire and shaped by
> `data/menus/PATTERNS.md` (generated 2026-07-24). Scenario given: *"August in
> Montreal, Canada — use typical weather"*; the heatwave spell and per-day
> temperatures are invented but realistic for a Montreal August.

## Weekly production

- **Végé:** Ratatouille · Veggie paella · Vegan poutine *(staple)* · Falafels
- **Poisson:** Salmon pesto artichoke *(staple)* · Sesame ginger salmon · Dill gravlax salmon over potato & fennel salad
- **Texture (végé-chicken):** Veggie jerk chicken with orange rémoulade · Veggie chicken satay with almonds
- **Soupe:** Korean soup *(staple)* · Green tom yum soup · Vegan pho soup · Mole verde soup
- **Potage:** Cold melonccio soup *(chilled)* · Cream of tomato soup · Parsnip pear pecan soup · Green summer potage
- **Salades:** Kale mango cabbage salad *(staple)* · Creamy broccoli salad *(staple)* · Orange fennel salad · Asian cabbage salad · Cabbage pepper salad with mint · Bandhu salad · Crunchy cabbage salad
- **Salade-comp:** Chickpea crumble salad · Korean grilled sweet potato salad · Black-eyed pea salad · Cassava tabbouleh salad
- **Sauces:** Satay sauce
- **Hummus:** Broccoli pistachio hummus · Green lime hummus
- **Quiche:** Ham & vegetable quiche *(Ham staple)*
- **Sandwichs:** Cajun salmon sandwich · Tropical veggie chicken sandwich
- **Wraps:** Tuna salad wrap
- **Burgers:** Veggie chicken burger · Veggie beef burger
- **Pico de Gallo:** Pico de gallo

## Weekly schedule

| Day | Temp | Weather | Dishes |
|---|---|---|---|
| **Mon** 10 Aug | 30 °C | hot & humid | Kale mango cabbage salad · Creamy broccoli salad · Orange fennel salad · Korean soup · Cream of tomato soup · Salmon pesto artichoke · Ratatouille · Vegan poutine · Broccoli pistachio hummus · Cajun salmon sandwich · Veggie chicken burger |
| **Tue** 11 Aug | 32 °C | hot | Asian cabbage salad · Cabbage pepper salad with mint · Green tom yum soup · Green summer potage · Sesame ginger salmon · **Veggie jerk chicken with orange rémoulade** · Green lime hummus · Veggie beef burger · Falafels |
| **Wed** 12 Aug | 33 °C | very hot & humid | **Cold melonccio soup** · Vegan pho soup · Bandhu salad · Crunchy cabbage salad · Dill gravlax salmon over potato & fennel salad · Chickpea crumble salad · Broccoli pistachio hummus · Veggie paella |
| **Thu** 13 Aug | 31 °C | hot | **Pico de gallo** · Creamy broccoli salad · Korean grilled sweet potato salad · Mole verde soup · Parsnip pear pecan soup · Salmon pesto artichoke · **Veggie chicken satay with almonds** · Tuna salad wrap · Veggie chicken burger · Vegan poutine |
| **Fri** 14 Aug | 29 °C | hot | Crunchy cabbage salad · Black-eyed pea salad · Cassava tabbouleh salad · Green tom yum soup · Green summer potage · Sesame ginger salmon · Ham & vegetable quiche · Tropical veggie chicken sandwich · Satay sauce · Veggie beef burger |

## Comments and weather

Mock heatwave week (Montreal, August). The whole week is tilted to the salad/cold
end; burgers and falafels are emphasized across the hot days; one chilled cold
soup (Mélonccio) sits on the 33 °C peak (Wed). No holiday/closure this week.

## Why this menu

### Strategy

The scenario gives "August in Montreal — typical weather" and this batch slot
makes it a **heatwave** week (a hot, humid spell, entirely realistic for a
Montreal August). The governing signal is the chef-stated **hot-weather →
lighter menu** pattern: salads, cold soups and fresh dishes sell, while hearty
ragoûts/curries/cooked-veg-plus-starch get hard to move (*weather_temp,
chef-stated, high*). So the week is deliberately pushed toward the salad/cold end:
**salades at the top of their range (7** vs a median of 6), plant/fish mains kept
light, and the hearty **végé** category held at its **minimum (4)** — and even
those four skew summery (ratatouille, paella) rather than winter stews. Burgers
sit at the **top of their warm-season range (2)** and falafels are added, because
both cluster in the 20–33 °C weeks (*weather_temp / menu_skeleton, medium–high*).
Every day still fields ≥1 soup, ≥1 salad and ≥1 fish main per the per-day balance
rules.

### Per-day notes

- **Monday, 30 °C** — Opens with the **Kale mango cabbage** staple (KM → Monday
  rule) plus two more cold salads, a light Korean broth and a cream of tomato
  potage, salmon pesto artichoke as the fish main, and a burger. No texture main
  (those are held for Tue/Thu) and **no Pico** (never made on Monday).
- **Tuesday, 32 °C** — First **texture main** of the week (jerk veggie-chicken),
  spaced for Thursday's second. Two fresh salads (including a minty cabbage
  salad), a light green tom yum broth, a burger **and falafels** — the hot-day
  burger/falafel cluster.
- **Wednesday, 33 °C (peak)** — The hottest, most salad-lean day. The one
  **chilled Mélonccio cold soup** of the week goes here (cold soups belong on
  days ≥24 °C; Mélonccio runs ≤once/week — this is its single placement). The fish
  main is **cold** too (dill gravlax over potato-fennel salad). No texture main
  (a third texture dish only appears Wednesday under high demand — not modelled
  here) and no burger — the day leans coldest.
- **Thursday, 31 °C** — **Pico de Gallo** (Thursday rule; warm-season dish, ideal
  in heat). Second **texture main** (satay veggie-chicken), a wrap, a burger, and
  a lighter mole verde soup.
- **Friday, 29 °C** — Composed bean/tabbouleh salads, tom yum, the **Ham
  quiche** staple, a veggie-chicken sandwich, the week's **sauce** (Satay sauce),
  and a burger to close the hot week.

### Pattern citations (with confidence)

- **Skeleton counts** — salades 7 (upper range), potage/soupe 4 each, végé 4
  (min), poisson 3, salade-comp 4, hummus 2, texture 2, sandwichs 2, sauces 1,
  quiche 1, wraps 1, burgers 2. *(menu_skeleton, high; burgers medium/warm-season)*
- **Staples mapped to Parsley** — Ham (`ham-and-vegetable-quiche`), Poutine
  (`vegan-poutine-medium`), Kale mango cabbage (`kale-mango-cabbage-salad`),
  Salmon pesto artichoke (`salmon-pesto-artichoke`), Korean (`korean-soup`),
  Creamy broccoli (`creamy-broccoli-salad`). *(rotation, high)*
- **Kale mango cabbage → Monday.** *(per_day_balance, chef-stated, high)*
- **Pico de Gallo → Thursday, never Monday.** *(per_day_balance, chef-stated, high;
  and calendar: warm-season only, medium)*
- **Texture mains → Tuesday + Thursday, spaced.** *(per_day_balance, chef-stated,
  high)*
- **Hot week → salad/cold lean; burgers + falafels cluster on hot days.**
  *(weather_temp, chef-stated + corroborated, high)*
- **Chilled cold soup (Mélonccio) only on a ≥24 °C day, ≤once/week** — placed on
  the 33 °C Wednesday. *(weather_temp, chef-stated, high)*
- **≥1 soup, ≥1 salad, ≥1 fish main each day.** *(per_day_balance, high for
  soup/salad, high for fish)*

### Improvisation & honesty flags

- **Small-sample caveat (from PATTERNS.md).** The 47 analyzed weeks are
  non-contiguous, temperature is noted on only 95/188 service days, and **nearly
  all dish tags are inferred** — so protein/format counts carry inference error.
  This mock is a plausibility exercise, not a validated chef plan. Also note there
  is a real August 2025 window (2025-08-11 ..) in the corpus but its per-day
  weather is thin, so the heatwave detail here is invented, not observed.
- **All dish tags in the `dishes:` block are `tag_source: inferred`** from the
  recipe name + repertoire knowledge, not copied from tagged recipe files. Treat
  temperature/weather/spice/diet as approximate — e.g. Creamy broccoli's dairy
  content and the exact spice level of Korean soup / tom yum are guesses.
- **"Green summer potage" has no matching Parsley recipe** — set
  `recipe_source: none` with a blank `recipe_id` (never invented a slug). It is
  included only on the chef's stated surplus/fridge exception for *Potage Vert
  L'été*, and is a low-confidence, improvised inclusion.
- **"Korean" staple resolved to `korean-soup`** (a soupe). The name is ambiguous
  in the rotation — it could instead be the Korean sweet-potato salad or the
  Korean poke bowl; this is an inference. (The distinct
  `korean-grilled-sweet-potato-salad` also appears as a composed salad on Thu —
  a different dish, not a duplicate.)
- **Parsnip-pear-pecan potage is a stretch in a heatwave** (it reads more
  autumnal). It is here mainly to honor the potage **minimum of 4** and offer one
  non-cold soup option; in a real hot week the chef might drop it. Flagged as a
  low-confidence, improvised choice.
- **Vegan poutine (staple, 47/47) is heavy for extreme heat** — the 2026-05-18
  note even has "Poutine stalling." It is kept because it is an every-week staple,
  but placed on only two days (Mon, Thu) and never on the 33 °C peak. Improvised
  trade-off between the staple rule and the heat-lean rule.
- **Burger diet tags** left at `[vegetarian]` (not vegan) as a conservative guess;
  the veggie-chicken/beef patty binders and buns weren't checked against the
  recipe files.
