---
# ============================================================
# GENERATED MOCK MENU — a fictional "what-if" week produced by
# the menus-recommend skill. NOT a real chef menu. Isolated under
# data/menus/generated/. Dishes drawn from the Parsley repertoire
# and shaped by data/menus/PATTERNS.md (read-only).
# ============================================================
id: mock-august-mtl-cool-rainy
week_of: 2026-08-24            # mock Monday; this is not a real week
week_label: "Mock — cool rainy late-August week (Montreal)"
language: en
original_language: en
source: generated             # ALWAYS generated — machine-made
status: mock                  # ALWAYS mock — never draft/flagged/verified/archived
generated: 2026-07-27
patterns_generated: 2026-07-24  # meta.generated of the PATTERNS.md used
scenario:
  given: "August in Montreal, Canada — use typical weather"
  invented: >-
    Week 4 of 5 — a COOL, RAINY late-August week, an early hint of fall (a genuine
    Montreal August pattern). Per-day: Mon 20°C cloudy · Tue 19°C rainy ·
    Wed 22°C overcast · Thu 21°C cloudy · Fri 18°C cool, rainy. Mock date range
    24–28 August. No day reaches 24°C.
  week_label: "Mock — cool rainy late-August week (Montreal)"

# ============================================================
# DISH POOL — LEFT page, by fixed category. Skeleton counts from
# menu_skeleton medians, shifted toward the hot/hearty end for a
# cool week (soupe & vege above median; salads held at median).
# ============================================================
pool:
  vege:                       # 5 (median 4; +1 hearty for the cool spell) — incl. Poutine staple
    - "Vegan poutine"
    - "Ratatouille"
    - "Veggie paella"
    - "Gluten-free vegetable lasagna"
    - "Veggie moussaka"
  poisson:                    # 3 (median 3)
    - "Salmon pesto artichoke"
    - "Salt cod curry"
    - "Salmon crumble"
  texture:                    # 2 (median 2) — spaced Tue + Thu
    - "Veggie jerk chicken with orange remoulade"
    - "Veggie thai chicken"
  soupe:                      # 6 (median 5; +1 for the cool week) — ALL served hot
    - "Korean soup"
    - "Green tom yum soup"
    - "Chipotle lentil vegetable soup"
    - "Mole verde soup"
    - "Spanish soup"
    - "Vegan pho soup"
  potage:                     # 5 (median 5) — 4 hot + 1 flagged cold-family exception
    - "Cream of tomato soup"
    - "Parsnip pear pecan soup"
    - "Rutabaga apple maple soup"
    - "Mushroom tarragon soup"
    - "Potage Vert L'été (green summer potage)"   # surplus exception — prêt-à-manger fridge, NOT hot line
  sandwichs:                  # 2 (median 2)
    - "Blackened haddock sandwich"
    - "Tropical veggie chicken sandwich"
  wraps:                      # 1 (median 1)
    - "Tuna salad wrap"
  salades:                    # 6 (median 6)
    - "Kale mango cabbage salad"
    - "Creamy broccoli salad"
    - "Bandhu salad"
    - "Carrot celeriac almond salad"
    - "Asian cabbage salad"
    - "Beet hazelnut salad"
  salade-comp:                # 3 (median 3)
    - "Provençal salad"
    - "Chickpea crumble salad"
    - "Cassava tabbouleh salad"
  sauces:                     # 1 (median 1) — an actual sauce
    - "Satay sauce"
  hummus:                     # 2 (median 2)
    - "Broccoli and pistachio hummus"
    - "Dill hummus"
  quiche:                     # 1 (median 1) — the Ham staple
    - "Ham and vegetable quiche"
  burgers:                    # 1 (median 1; warm-season tail) — placed on the mildest day
    - "Veggie chicken burger"

# ============================================================
# DAILY SCHEDULE — RIGHT page. One entry per service day.
# Each day: >=1 soup, >=1 salad, >=1 fish main, plant main most days.
# ============================================================
schedule:
  - day: monday
    date: 2026-08-24
    dishes:
      - "Kale mango cabbage salad"      # KM → Monday (chef-stated)
      - "Creamy broccoli salad"
      - "Cream of tomato soup"          # hot potage
      - "Korean soup"                   # hot soupe
      - "Salmon pesto artichoke"        # fish main (staple)
      - "Ratatouille"                   # hearty plant main
      - "Vegan poutine"                 # staple
      - "Ham and vegetable quiche"      # staple
      - "Broccoli and pistachio hummus"
    temp_c: 20
    weather: "cloudy"
    notes: "KM on Monday per chef rule. No Pico (never made Monday). All soups hot."
  - day: tuesday
    date: 2026-08-25
    dishes:
      - "Veggie jerk chicken with orange remoulade"  # texture → Tue
      - "Bandhu salad"
      - "Provençal salad"
      - "Rutabaga apple maple soup"     # hot potage — hearty for a rainy day
      - "Green tom yum soup"            # hot soupe
      - "Salt cod curry"                # fish main (hearty)
      - "Gluten-free vegetable lasagna" # hearty plant main
      - "Vegan poutine"                 # staple
      - "Dill hummus"
      - "Blackened haddock sandwich"
    temp_c: 19
    weather: "rainy"
    notes: "Cold rain → push hot, hearty soups + curry. First spaced texture main (jerk)."
  - day: wednesday
    date: 2026-08-26
    dishes:
      - "Asian cabbage salad"
      - "Carrot celeriac almond salad"
      - "Mushroom tarragon soup"        # hot potage
      - "Spanish soup"                  # hot soupe
      - "Salmon crumble"                # fish main
      - "Veggie paella"                 # hearty plant main
      - "Vegan poutine"                 # staple
      - "Veggie chicken burger"         # warm-season tail → mildest day (22°C, dry)
      - "Tuna salad wrap"
      - "Potage Vert L'été (green summer potage)"  # COLD exception — fridge grab-and-go, surplus-driven
    temp_c: 22
    weather: "overcast"
    notes: "Mildest, driest day → the lone burger sits here. Green summer potage is a chilled prêt-à-manger fridge item on a broccoli/zucchini surplus — NOT a hot-line soup; the only cold-soup-family item allowed below 24°C. No texture main (spaced Tue/Thu)."
  - day: thursday
    date: 2026-08-27
    dishes:
      - "Veggie thai chicken"           # texture → Thu
      - "Beet hazelnut salad"
      - "Cassava tabbouleh salad"
      - "Parsnip pear pecan soup"       # hot potage
      - "Mole verde soup"               # hot soupe
      - "Salmon pesto artichoke"        # fish main (staple, runs the week)
      - "Veggie moussaka"               # hearty plant main
      - "Vegan poutine"                 # staple
      - "Ham and vegetable quiche"      # staple
      - "Tropical veggie chicken sandwich"
      - "Satay sauce"
    temp_c: 21
    weather: "cloudy"
    notes: "Second spaced texture main (thai). Pico WOULD go here (Thursday), but dropped — see rationale (cool spell + sub-24°C). All soups hot."
  - day: friday
    date: 2026-08-28
    dishes:
      - "Chickpea crumble salad"
      - "Creamy broccoli salad"
      - "Chipotle lentil vegetable soup" # hot soupe — hearty, warming
      - "Vegan pho soup"                 # hot broth — warming
      - "Parsnip pear pecan soup"        # hot potage (runs)
      - "Salt cod curry"                 # fish main (hearty, warming)
      - "Ratatouille"                    # hearty plant main (runs)
      - "Vegan poutine"                  # staple
      - "Dill hummus"
      - "Tuna salad wrap"
    temp_c: 18
    weather: "cool, rainy"
    notes: "Coldest, rainiest day → heaviest hot soups + hearty stew/curry. No cold soup."

comment: "Mock cool, rainy late-August week (Montreal), 18–22°C, no day ≥24°C. Menu leans hot/hearty (soups + hearty plant mains above median) while keeping the full salad spine; all soups served hot; the one cold-soup-family item (Potage Vert L'été) is a surplus-driven fridge item, not a hot-line soup. Pico dropped for the cool spell."

# ============================================================
# DISH TAGS — one entry per UNIQUE dish across pool + schedule.
# tag_source: inferred (from name + repertoire knowledge). Controlled
# vocabulary per data/recipes/_TEMPLATE.md. recipe_id values verified
# against data/parsley/recipes-en/ (exact filename minus .md).
# ============================================================
dishes:
  - name: "Kale mango cabbage salad"
    recipe_id: kale-mango-cabbage-salad
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: cold
    weather: any
    richness: light
    format: salad
    cuisine: fusion
    spice_level: none
    diet: [vegan, vegetarian, gluten-free]
  - name: "Creamy broccoli salad"
    recipe_id: creamy-broccoli-salad
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: cold
    weather: cool
    richness: moderate
    format: salad
    cuisine: american
    spice_level: none
    diet: [vegetarian, gluten-free]
  - name: "Bandhu salad"
    recipe_id: bandhu-salad
    recipe_source: parsley
    tag_source: inferred
    protein: legume
    temperature: cold
    weather: mild
    richness: light
    format: salad
    cuisine: indian
    spice_level: mild
    diet: [vegan, gluten-free]
  - name: "Carrot celeriac almond salad"
    recipe_id: carrot-celeriac-and-almond-salad
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: cold
    weather: cool
    richness: light
    format: salad
    cuisine: french
    spice_level: none
    diet: [vegan, gluten-free]
  - name: "Asian cabbage salad"
    recipe_id: asian-cabbage-salad
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: cold
    weather: warm
    richness: light
    format: salad
    cuisine: fusion
    spice_level: mild
    diet: [vegan]
  - name: "Beet hazelnut salad"
    recipe_id: beet-hazelnut-salad
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: cold
    weather: cool
    richness: moderate
    format: salad
    cuisine: french
    spice_level: none
    diet: [vegetarian, gluten-free]
  - name: "Provençal salad"
    recipe_id: provencal-salad
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: cold
    weather: mild
    richness: moderate
    format: salad
    cuisine: french
    spice_level: none
    diet: [vegan, gluten-free]
  - name: "Chickpea crumble salad"
    recipe_id: chickpea-crumble-salad
    recipe_source: parsley
    tag_source: inferred
    protein: legume
    temperature: cold
    weather: cool
    richness: moderate
    format: salad
    cuisine: mediterranean
    spice_level: mild
    diet: [vegan]
  - name: "Cassava tabbouleh salad"
    recipe_id: cassava-tabbouleh-salad
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: cold
    weather: warm
    richness: light
    format: salad
    cuisine: middle-eastern
    spice_level: none
    diet: [vegan, gluten-free]
  - name: "Cream of tomato soup"
    recipe_id: cream-of-tomato-soup
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
  - name: "Parsnip pear pecan soup"
    recipe_id: parsnip-pear-pecan-soup
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: hot
    weather: cold
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
    weather: cold
    richness: moderate
    format: soup
    cuisine: quebecois
    spice_level: none
    diet: [vegan, gluten-free]
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
  - name: "Potage Vert L'été (green summer potage)"
    recipe_id:
    recipe_source: none          # no matching Parsley recipe file exists — not invented
    tag_source: inferred
    protein: vegetable
    temperature: cold            # served chilled from the prêt-à-manger fridge
    weather: warm
    richness: light
    format: soup
    cuisine: french
    spice_level: none
    diet: [vegan, gluten-free]
  - name: "Korean soup"
    recipe_id: korean-soup
    recipe_source: parsley
    tag_source: inferred
    protein: plant-substitute
    temperature: hot
    weather: cool
    richness: moderate
    format: broth
    cuisine: korean
    spice_level: medium
    diet: [vegan]
  - name: "Green tom yum soup"
    recipe_id: green-tom-yum-soup
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: hot
    weather: cool
    richness: light
    format: broth
    cuisine: thai
    spice_level: hot
    diet: [vegan, gluten-free]
  - name: "Chipotle lentil vegetable soup"
    recipe_id: chipotle-lentil-vegetable-soup
    recipe_source: parsley
    tag_source: inferred
    protein: legume
    temperature: hot
    weather: cold
    richness: moderate
    format: soup
    cuisine: mexican
    spice_level: medium
    diet: [vegan, gluten-free]
  - name: "Mole verde soup"
    recipe_id: mole-verde-soup
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: hot
    weather: cool
    richness: moderate
    format: soup
    cuisine: mexican
    spice_level: medium
    diet: [vegan]
  - name: "Spanish soup"
    recipe_id: spanish-soup
    recipe_source: parsley
    tag_source: inferred
    protein: legume
    temperature: hot
    weather: cool
    richness: moderate
    format: soup
    cuisine: spanish
    spice_level: mild
    diet: [vegan]
  - name: "Vegan pho soup"
    recipe_id: vegan-pho-soup
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: hot
    weather: cold
    richness: light
    format: broth
    cuisine: vietnamese
    spice_level: mild
    diet: [vegan, gluten-free]
  - name: "Vegan poutine"
    recipe_id: vegan-poutine-medium
    recipe_source: parsley
    tag_source: inferred
    protein: plant-substitute
    temperature: hot
    weather: cold
    richness: indulgent
    format: plated-main
    cuisine: quebecois
    spice_level: none
    diet: [vegan]
  - name: "Ratatouille"
    recipe_id: ratatouille
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: hot
    weather: cool
    richness: moderate
    format: stew
    cuisine: french
    spice_level: none
    diet: [vegan, gluten-free]
  - name: "Veggie paella"
    recipe_id: veggie-paella
    recipe_source: parsley
    tag_source: inferred
    protein: mixed
    temperature: hot
    weather: mild
    richness: moderate
    format: plated-main
    cuisine: spanish
    spice_level: mild
    diet: [vegan, gluten-free]
  - name: "Gluten-free vegetable lasagna"
    recipe_id: gluten-free-vegetable-lasagna
    recipe_source: parsley
    tag_source: inferred
    protein: cheese
    temperature: hot
    weather: cool
    richness: rich
    format: casserole
    cuisine: italian
    spice_level: none
    diet: [vegetarian, gluten-free]
  - name: "Veggie moussaka"
    recipe_id: veggie-moussaka
    recipe_source: parsley
    tag_source: inferred
    protein: plant-substitute
    temperature: hot
    weather: cold
    richness: rich
    format: casserole
    cuisine: greek
    spice_level: mild
    diet: [vegetarian]
  - name: "Salmon pesto artichoke"
    recipe_id: salmon-pesto-artichoke
    recipe_source: parsley
    tag_source: inferred
    protein: fish
    temperature: hot
    weather: any
    richness: moderate
    format: plated-main
    cuisine: mediterranean
    spice_level: none
    diet: [pescatarian, gluten-free]
  - name: "Salt cod curry"
    recipe_id: salt-cod-curry
    recipe_source: parsley
    tag_source: inferred
    protein: fish
    temperature: hot
    weather: cold
    richness: moderate
    format: curry
    cuisine: indian
    spice_level: medium
    diet: [pescatarian]
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
    diet: [vegan]
  - name: "Veggie thai chicken"
    recipe_id: veggie-thai-chicken
    recipe_source: parsley
    tag_source: inferred
    protein: plant-substitute
    temperature: hot
    weather: cool
    richness: moderate
    format: curry
    cuisine: thai
    spice_level: medium
    diet: [vegan]
  - name: "Broccoli and pistachio hummus"
    recipe_id: broccoli-and-pistachio-hummus
    recipe_source: parsley
    tag_source: inferred
    protein: legume
    temperature: cold
    weather: any
    richness: light
    format: dip-spread
    cuisine: middle-eastern
    spice_level: none
    diet: [vegan, gluten-free]
  - name: "Dill hummus"
    recipe_id: dill-hummus
    recipe_source: parsley
    tag_source: inferred
    protein: legume
    temperature: room
    weather: any
    richness: light
    format: dip-spread
    cuisine: middle-eastern
    spice_level: none
    diet: [vegan, gluten-free]
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
  - name: "Tropical veggie chicken sandwich"
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
    diet: [vegan]
  - name: "Satay sauce"
    recipe_id: satay-sauce
    recipe_source: parsley
    tag_source: inferred
    protein: nut-seed
    temperature: warm
    weather: any
    richness: moderate
    format: sauce-condiment
    cuisine: indonesian
    spice_level: medium
    diet: [vegan, gluten-free]
  - name: "Ham and vegetable quiche"
    recipe_id: ham-and-vegetable-quiche
    recipe_source: parsley
    tag_source: inferred
    protein: pork
    temperature: warm
    weather: cool
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
  - name: "Veggie chicken burger"
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
---

# Week of Mock — cool rainy late-August week (Montreal)

> **MOCK / GENERATED** — a fictional "what-if" week from the `menus-recommend`
> skill. Not a real chef menu. Dishes are drawn from the Parsley repertoire and
> shaped by `data/menus/PATTERNS.md` (generated 2026-07-24). Tags are **inferred**.

## Weekly production

**Salades (6):** Kale mango cabbage · Creamy broccoli · Bandhu · Carrot celeriac almond · Asian cabbage · Beet hazelnut
**Salades composées (3):** Provençal · Chickpea crumble · Cassava tabbouleh
**Potages (5) — hot line unless noted:** Cream of tomato · Parsnip pear pecan · Rutabaga apple maple · Mushroom tarragon · *Potage Vert L'été (chilled — prêt-à-manger fridge, surplus exception)*
**Soupes (6) — all served hot:** Korean · Green tom yum · Chipotle lentil vegetable · Mole verde · Spanish · Vegan pho
**Végé mains (5):** Vegan poutine *(staple)* · Ratatouille · Veggie paella · Gluten-free vegetable lasagna · Veggie moussaka
**Poisson (3):** Salmon pesto artichoke *(staple)* · Salt cod curry · Salmon crumble
**Texture / végé-chicken (2):** Veggie jerk chicken w/ orange remoulade · Veggie thai chicken
**Hummus (2):** Broccoli & pistachio · Dill
**Sandwichs (2):** Blackened haddock · Tropical veggie chicken
**Wraps (1):** Tuna salad
**Sauces (1):** Satay sauce
**Quiche (1):** Ham & vegetable *(the "Ham" staple)*
**Burgers (1):** Veggie chicken burger *(warm-season tail)*

## Weekly schedule

| Day | Temp | Weather | Featured dishes |
|---|---|---|---|
| **Mon 24 Aug** | 20°C | cloudy | KM salad, creamy broccoli · Cream of tomato (hot), Korean soup · Salmon pesto artichoke · Ratatouille · Poutine, Ham quiche, broccoli-pistachio hummus |
| **Tue 25 Aug** | 19°C | rainy | Bandhu, Provençal · Rutabaga-apple-maple (hot), Green tom yum · Salt cod curry · **Jerk chicken (texture)**, GF veg lasagna · Poutine, dill hummus, blackened haddock sandwich |
| **Wed 26 Aug** | 22°C | overcast | Asian cabbage, carrot-celeriac · Mushroom tarragon (hot), Spanish soup · Salmon crumble · Veggie paella · Poutine, **veggie chicken burger**, tuna wrap · *Potage Vert L'été (chilled fridge exception)* |
| **Thu 27 Aug** | 21°C | cloudy | Beet hazelnut, cassava tabbouleh · Parsnip-pear-pecan (hot), Mole verde · Salmon pesto artichoke · **Thai chicken (texture)**, veggie moussaka · Poutine, Ham quiche, tropical veggie-chicken sandwich, satay sauce |
| **Fri 28 Aug** | 18°C | cool, rainy | Chickpea crumble, creamy broccoli · Chipotle lentil veg (hot), Vegan pho, Parsnip-pear-pecan · Salt cod curry · Ratatouille · Poutine, dill hummus, tuna wrap |

Each service day fields ≥1 soup, ≥1 salad, ≥1 fish main, and a plant main (per
`per_day_balance`, all `high`/`stated`). Texture mains are spaced Tue + Thu.

## Comments and weather

Mock cool, rainy late-August week (Montreal), 18–22°C — **no day reaches 24°C**.
The week leans hot/hearty (soupes and hearty végé mains above their medians) while
keeping the full six-salad spine. **All soups are served hot.** The single
cold-soup-family item, *Potage Vert L'été*, is a surplus-driven chilled item for
the prêt-à-manger fridge — never on the hot line. No chilled cold soup (Mélonccio)
this week; no Chili d'Orge (Oct–April only). Pico de Gallo dropped for the cool
spell.

## Why this menu

### Strategy

The brief is a cool, rainy late-August week in Montreal — an early hint of fall,
a genuine local pattern — with every day between 18°C and 22°C and **none at or
above 24°C**. Per `weather_temp`, cool weather **broadens** demand rather than
narrowing it: soups sell well, hearty dishes sell again, and salads still sell
(chef-stated, medium). So the week keeps the full salad spine at its median (6
salades + 3 composées) but pushes the hot/hearty end **above** median — 6 soupes
(median 5) and 5 végé mains (median 4) — with hearty stews, curries, casseroles,
and root/cream potages doing the heavy lifting on the wettest days. The staple
spine (Ham, Poutine, KM, Salmon pesto artichoke, Korean, Creamy broccoli) anchors
every week and is all present.

### Per-day notes

- **Mon 20°C cloudy** — KM salad opens the week (chef rule: KM → Monday). Hot
  Cream-of-tomato potage + Korean soup; salmon pesto artichoke and ratatouille as
  the fish/plant mains. No Pico (never made Monday).
- **Tue 19°C rainy** — cold rain → the hearty push: rutabaga-apple-maple potage
  and green tom yum, salt cod curry, GF veg lasagna. First spaced texture main
  (jerk chicken).
- **Wed 22°C overcast** — the mildest, driest day, so the lone warm-season burger
  sits here. Salmon crumble + veggie paella. This is where the flagged cold-family
  exception lives (below).
- **Thu 21°C cloudy** — second spaced texture main (thai chicken) + veggie
  moussaka; mole verde + parsnip-pear-pecan potage; satay sauce over pasta/poutine.
  Pico *would* be a Thursday item but is dropped (see honesty flags).
- **Fri 18°C cool, rainy** — the coldest, wettest day gets the heaviest hot
  soups and a warming stew/curry: chipotle lentil vegetable soup, vegan pho, salt
  cod curry, ratatouille.

### The "no cold soup below 24°C" reasoning (explicit)

`weather_temp` carries a **high-confidence, chef-stated** rule that *supersedes*
the older inferred "cool/rainy → cold soups": **cold-served cold soups appear only
on days ≥ 24°C** — a cold soup suits hot weather, not cold. **No day this week
reaches 24°C** (max 22°C Wed), so **no chilled cold soup is scheduled at all**.
Concretely, *Potage Froid Mélonccio* (`cold-melonccio-soup`) is **excluded** — it
runs only in the hottest part of summer, ≤ once a week — and every soupe/potage on
the hot line is served hot.

The **only** cold-soup-family item on the sheet is *Potage Vert L'été*, placed on
Wednesday and flagged as the stated exception: it may appear **any season on a
broccoli/zucchini surplus** and goes to the **prêt-à-manger fridge, not the hot
line**. It is included here as a surplus-utilisation item (the week is broccoli/
zucchini-heavy via creamy broccoli, broccoli hummus, and pesto/ratatouille prep),
NOT as a weather-driven cold soup — which is exactly the distinction the rule
draws. Had there been no surplus rationale, it would have been dropped too.

### Pattern citations (with confidence)

- **Skeleton counts** from `menu_skeleton` medians, bounded by min/max — salades 6,
  potage 5, soupe 5→**6**, végé 4→**5**, poisson 3, salade-comp 3, hummus 2,
  texture 2, sandwichs 2, sauces 1, quiche 1, wraps 1, burgers 1. *(high; inferred)*
- **Cool week → soupes & hearty mains above median, salads still full** —
  `weather_temp` "cool weather broadens demand." *(chef-stated; medium)*
- **No chilled cold soup below 24°C; Mélonccio excluded** — `weather_temp`
  cold-soup rule. *(chef-stated; high)*
- **Potage Vert L'été only as a surplus fridge item** — `weather_temp` stated
  exception (a). *(chef-stated; high)*
- **KM → Monday** — `per_day_balance`. *(chef-stated; high)*
- **Texture / végé-chicken → Tuesday + Thursday, spaced; no third midweek main
  under normal demand** — `per_day_balance`. *(chef-stated; high)*
- **Pico de Gallo → Thursday, never Monday; warm-season only** — `per_day_balance`
  + `calendar`. *(chef-stated / medium)* — here honored by placement logic, then
  dropped (below).
- **Chili d'Orge → Oct–April only, excluded** — `calendar`. *(chef-stated; high)*
- **≥1 soup, ≥1 salad, ≥1 fish main, plant main most days** — `per_day_balance`.
  *(high / medium; inferred)*
- **Staple spine present** (Ham, Poutine, KM, Salmon pesto artichoke, Korean,
  Creamy broccoli) — `rotation` staples. *(high; inferred)*

### Improvisation & honesty flags

- **Pico de Gallo dropped.** The brief allowed keeping one Thursday pico or
  dropping it given the cool spell. I dropped it: pico is a fresh, warm-season cold
  condiment whose demand pattern clusters in 20–33°C weeks; with a sub-24°C, rainy
  week leaning hot/hearty, it earns its slot less than another hot soup. As its own
  pool row pico's median is 0 anyway (`menu_skeleton`, low). This is a judgment
  call, not a hard rule.
- **Burger kept but flagged.** Burgers cluster in **hot** (20–33°C) weeks
  (`weather_temp`/`calendar`, corroborated). A cool week slightly disfavors them,
  but the median is 1 and it is still warm-season August, so I kept a single
  veggie-chicken burger on the mildest, driest day (Wed 22°C). Low-confidence lean.
- **Potage Vert L'été has no Parsley recipe file** — `recipe_source: none`,
  `recipe_id` left blank (not invented). Its surplus rationale is plausible but
  improvised for this mock.
- **Potage vs. soupe split and all dish tags are INFERRED** from names +
  repertoire knowledge, not from tagged recipe files, so protein/format/richness
  and the hot-potage classification of items like "Cream of tomato" or "Mushroom
  tarragon" carry inference error. The `korean-soup`/`veggie-chicken`/`ham` recipe
  mappings for the ambiguous staple names "Korean" and "Ham" are best-guess reads.
- **Weather-per-day values are invented** (the brief gave only "August, typical
  weather"); the cool-rainy late-August framing is a real Montreal possibility but
  one scenario among several.
- **Small-sample caveat** (`PATTERNS.md`): the 47 weeks are non-contiguous with a
  summer gap (nothing 2025-07-14 → 2025-08-11), temperature is noted on only
  95/188 service days, and nearly all dish tags are inferred. Treat `low`/
  `speculative` rows as hypotheses; the `stated` weather/calendar rules this menu
  leans on are the trustworthy backbone.
