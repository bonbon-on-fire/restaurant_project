---
id: mock-mild-spring-week
source: generated
status: mock
generated: 2026-06-25
patterns_generated: 2026-06-25
scenario:
  given: "A mild, mixed spring week — 14–19°C, sun and cloud, a light-rain Thursday, no holidays."
  invented: "Mon 17°C partly cloudy; Tue 19°C sunny; Wed 18°C sunny; Thu 14°C light rain; Fri 16°C cloudy"
  week_label: "Mock — mild mixed spring week"

pool:
  vege:
    - Vegan Poutine
    - Veggie Jerk Chicken with Orange Remoulade
    - Veggie Thai Chicken
  poisson:
    - Salmon Pesto Artichoke (main)
    - Moqueca
    - Hilairoise Salad with Salmon Cake
  soupe:
    - Mushroom Tarragon Soup
    - Korean Soup
    - Green Tom Yum Soup
    - Vegan Pho Soup
    - Tulum Soup
  potage:
    - Cream of Tomato Soup
    - Cold Mélonccio Soup
    - Parsnip Pear Pecan Soup
    - Chipotle Lentil Vegetable Soup
    - Rutabaga Apple Maple Soup
  salades:
    - Carrot Celeriac and Almond Salad
    - Provençal Salad
    - Bandhu Salad
    - Cassava Tabbouleh Salad
    - Beet Apple Tofu Salad
    - Black-Eyed Pea Salad
  salade-comp:
    - Kale Mango Cabbage Salad
    - Goat Cheese and Cabbage
    - Chickpea Crumble Salad
    - Orzo Kale and Pesto Salad
  sandwichs:
    - Salmon Pesto Artichoke Sandwich
    - Satay Veggie Chicken Banh Mi Sandwich
  texture:
    - Falafels
    - Cauliflower General Tao
  hummus:
    - Dill Hummus
    - Broccoli and Pistachio Hummus
  sauces:
    - Satay Sauce
  quiche:
    - Forestière Quiche
  pico-de-gallo:
    - Pico de Gallo
  mousse:
    - Chocolate Praline Mousse

schedule:
  - day: monday
    date:
    dishes:
      - Vegan Poutine
      - Forestière Quiche
      - Veggie Jerk Chicken with Orange Remoulade
      - Mushroom Tarragon Soup
      - Cream of Tomato Soup
      - Kale Mango Cabbage Salad
      - Carrot Celeriac and Almond Salad
      - Dill Hummus
      - Pico de Gallo
      - Salmon Pesto Artichoke (main)
    temp_c: 17
    weather: "partly cloudy"
    notes: "Monday staple core — Poutine, quiche, KM, hummus all present."

  - day: tuesday
    date:
    dishes:
      - Veggie Thai Chicken
      - Moqueca
      - Korean Soup
      - Parsnip Pear Pecan Soup
      - Bandhu Salad
      - Provençal Salad
      - Goat Cheese and Cabbage
      - Chickpea Crumble Salad
      - Salmon Pesto Artichoke Sandwich
      - Broccoli and Pistachio Hummus
      - Falafels
    temp_c: 19
    weather: "sunny"
    notes: "Warmer, sunniest day — salad-forward, lighter potage."

  - day: wednesday
    date:
    dishes:
      - Vegan Poutine
      - Hilairoise Salad with Salmon Cake
      - Green Tom Yum Soup
      - Chipotle Lentil Vegetable Soup
      - Cassava Tabbouleh Salad
      - Beet Apple Tofu Salad
      - Kale Mango Cabbage Salad
      - Orzo Kale and Pesto Salad
      - Satay Veggie Chicken Banh Mi Sandwich
      - Satay Sauce
      - Cauliflower General Tao
    temp_c: 18
    weather: "sunny"
    notes: "Mid-week rotation — Hilairoise + salmon cake (low-confidence trial dish per chef note 2026-06-01)."

  - day: thursday
    date:
    dishes:
      - Veggie Jerk Chicken with Orange Remoulade
      - Salmon Pesto Artichoke (main)
      - Tulum Soup
      - Cold Mélonccio Soup
      - Carrot Celeriac and Almond Salad
      - Bandhu Salad
      - Goat Cheese and Cabbage
      - Dill Hummus
      - Falafels
      - Chocolate Praline Mousse
    temp_c: 14
    weather: "light rain"
    notes: "Rain day — cold Mélonccio included per chef-stated weather pattern (2026-06-15 note); warmest soupe (Tulum) anchors the brothy slot."

  - day: friday
    date:
    dishes:
      - Veggie Thai Chicken
      - Moqueca
      - Mushroom Tarragon Soup
      - Rutabaga Apple Maple Soup
      - Black-Eyed Pea Salad
      - Provençal Salad
      - Orzo Kale and Pesto Salad
      - Chickpea Crumble Salad
      - Pico de Gallo
      - Cauliflower General Tao
    temp_c: 16
    weather: "cloudy"
    notes: "End-of-week; cooler and overcast — mixed warm soups, diverse salad bank, pico de gallo staple present."

dishes:
  - name: "Vegan Poutine"
    recipe_id: vegan-poutine-medium
    recipe_source: parsley
    tag_source: inferred
    protein: plant-substitute
    temperature: hot
    richness: rich
    format: plated-main
    cuisine: canadian
    spice_level: mild
    diet: [vegan, dairy-free]

  - name: "Veggie Jerk Chicken with Orange Remoulade"
    recipe_id: veggie-jerk-chicken-with-orange-remoulade
    recipe_source: parsley
    tag_source: inferred
    protein: plant-substitute
    temperature: hot
    richness: moderate
    format: plated-main
    cuisine: caribbean
    spice_level: hot
    diet: [vegan, dairy-free]

  - name: "Veggie Thai Chicken"
    recipe_id: veggie-thai-chicken
    recipe_source: parsley
    tag_source: inferred
    protein: plant-substitute
    temperature: hot
    richness: moderate
    format: plated-main
    cuisine: thai
    spice_level: medium
    diet: [vegan, dairy-free]

  - name: "Salmon Pesto Artichoke (main)"
    recipe_id: salmon-pesto-artichoke
    recipe_source: parsley
    tag_source: inferred
    protein: fish
    temperature: hot
    richness: moderate
    format: plated-main
    cuisine: mediterranean
    spice_level: none
    diet: [pescatarian, gluten-free]

  - name: "Moqueca"
    recipe_id: moqueca
    recipe_source: parsley
    tag_source: inferred
    protein: fish
    temperature: hot
    richness: rich
    format: stew
    cuisine: brazilian
    spice_level: medium
    diet: [pescatarian, dairy-free]

  - name: "Hilairoise Salad with Salmon Cake"
    recipe_id: hilairoise-salad
    recipe_source: parsley
    tag_source: inferred
    protein: fish
    temperature: cold
    richness: light
    format: salad
    cuisine: french
    spice_level: none
    diet: [pescatarian]

  - name: "Mushroom Tarragon Soup"
    recipe_id: mushroom-tarragon-soup
    recipe_source: parsley
    tag_source: inferred
    protein: mushroom
    temperature: hot
    richness: light
    format: soup
    cuisine: french
    spice_level: none
    diet: [vegan, dairy-free, gluten-free]

  - name: "Korean Soup"
    recipe_id: korean-soup
    recipe_source: parsley
    tag_source: inferred
    protein: plant-substitute
    temperature: hot
    richness: moderate
    format: broth
    cuisine: korean
    spice_level: medium
    diet: [vegan, dairy-free]

  - name: "Green Tom Yum Soup"
    recipe_id: green-tom-yum-soup
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: hot
    richness: light
    format: broth
    cuisine: thai
    spice_level: hot
    diet: [vegan, dairy-free, gluten-free]

  - name: "Vegan Pho Soup"
    recipe_id: vegan-pho-soup
    recipe_source: parsley
    tag_source: inferred
    protein: plant-substitute
    temperature: hot
    richness: light
    format: broth
    cuisine: vietnamese
    spice_level: mild
    diet: [vegan, dairy-free]

  - name: "Tulum Soup"
    recipe_id: tulum-soup
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: hot
    richness: moderate
    format: soup
    cuisine: mexican
    spice_level: medium
    diet: [vegan, dairy-free, gluten-free]

  - name: "Cream of Tomato Soup"
    recipe_id: cream-of-tomato-soup
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: hot
    richness: moderate
    format: soup
    cuisine: french
    spice_level: mild
    diet: [vegan, dairy-free, gluten-free]

  - name: "Cold Mélonccio Soup"
    recipe_id: cold-melonccio-soup
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: cold
    richness: lean
    format: soup
    cuisine: mediterranean
    spice_level: none
    diet: [vegan, dairy-free, gluten-free]

  - name: "Parsnip Pear Pecan Soup"
    recipe_id: parsnip-pear-pecan-soup
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: hot
    richness: moderate
    format: soup
    cuisine: french
    spice_level: none
    diet: [vegan, dairy-free, gluten-free]

  - name: "Chipotle Lentil Vegetable Soup"
    recipe_id: chipotle-lentil-vegetable-soup
    recipe_source: parsley
    tag_source: inferred
    protein: legume
    temperature: hot
    richness: moderate
    format: soup
    cuisine: tex-mex
    spice_level: medium
    diet: [vegan, dairy-free, gluten-free]

  - name: "Rutabaga Apple Maple Soup"
    recipe_id: rutabaga-apple-maple-soup
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: hot
    richness: light
    format: soup
    cuisine: canadian
    spice_level: none
    diet: [vegan, dairy-free, gluten-free]

  - name: "Carrot Celeriac and Almond Salad"
    recipe_id: carrot-celeriac-and-almond-salad
    recipe_source: parsley
    tag_source: inferred
    protein: nut-seed
    temperature: cold
    richness: light
    format: salad
    cuisine: french
    spice_level: none
    diet: [vegan, dairy-free, gluten-free]

  - name: "Provençal Salad"
    recipe_id: provencal-salad
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: cold
    richness: light
    format: salad
    cuisine: french
    spice_level: none
    diet: [vegan, dairy-free, gluten-free]

  - name: "Bandhu Salad"
    recipe_id: bandhu-salad
    recipe_source: parsley
    tag_source: inferred
    protein: legume
    temperature: cold
    richness: light
    format: salad
    cuisine: indian
    spice_level: mild
    diet: [vegan, dairy-free, gluten-free]

  - name: "Cassava Tabbouleh Salad"
    recipe_id: cassava-tabbouleh-salad
    recipe_source: parsley
    tag_source: inferred
    protein: grain
    temperature: cold
    richness: lean
    format: salad
    cuisine: middle-eastern
    spice_level: none
    diet: [vegan, dairy-free, gluten-free]

  - name: "Beet Apple Tofu Salad"
    recipe_id: beet-apple-tofu-salad
    recipe_source: parsley
    tag_source: inferred
    protein: tofu
    temperature: cold
    richness: light
    format: salad
    cuisine: fusion
    spice_level: none
    diet: [vegan, dairy-free, gluten-free]

  - name: "Black-Eyed Pea Salad"
    recipe_id: black-eyed-pea-salad
    recipe_source: parsley
    tag_source: inferred
    protein: legume
    temperature: cold
    richness: light
    format: salad
    cuisine: caribbean
    spice_level: mild
    diet: [vegan, dairy-free, gluten-free]

  - name: "Kale Mango Cabbage Salad"
    recipe_id: kale-mango-cabbage-salad
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: cold
    richness: lean
    format: salad
    cuisine: fusion
    spice_level: none
    diet: [vegan, dairy-free, gluten-free]

  - name: "Goat Cheese and Cabbage"
    recipe_id: goat-cheese-and-cabbage
    recipe_source: parsley
    tag_source: inferred
    protein: cheese
    temperature: cold
    richness: moderate
    format: salad
    cuisine: french
    spice_level: none
    diet: [vegetarian, gluten-free]

  - name: "Chickpea Crumble Salad"
    recipe_id: chickpea-crumble-salad
    recipe_source: parsley
    tag_source: inferred
    protein: legume
    temperature: cold
    richness: light
    format: salad
    cuisine: mediterranean
    spice_level: mild
    diet: [vegan, dairy-free, gluten-free]

  - name: "Orzo Kale and Pesto Salad"
    recipe_id: orzo-kale-and-pesto-salad
    recipe_source: parsley
    tag_source: inferred
    protein: grain
    temperature: cold
    richness: light
    format: salad
    cuisine: italian
    spice_level: none
    diet: [vegan, dairy-free]

  - name: "Salmon Pesto Artichoke Sandwich"
    recipe_id: salmon-pesto-artichoke-sandwich
    recipe_source: parsley
    tag_source: inferred
    protein: fish
    temperature: cold
    richness: moderate
    format: handheld
    cuisine: mediterranean
    spice_level: none
    diet: [pescatarian]

  - name: "Satay Veggie Chicken Banh Mi Sandwich"
    recipe_id: satay-veggie-chicken-banh-mi-sandwich
    recipe_source: parsley
    tag_source: inferred
    protein: plant-substitute
    temperature: cold
    richness: moderate
    format: handheld
    cuisine: vietnamese
    spice_level: mild
    diet: [vegan, dairy-free]

  - name: "Falafels"
    recipe_id: falafels-8
    recipe_source: parsley
    tag_source: inferred
    protein: legume
    temperature: hot
    richness: moderate
    format: shareable
    cuisine: middle-eastern
    spice_level: mild
    diet: [vegan, dairy-free]

  - name: "Cauliflower General Tao"
    recipe_id: cauliflower-general-tao
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: hot
    richness: moderate
    format: shareable
    cuisine: chinese
    spice_level: medium
    diet: [vegan, dairy-free]

  - name: "Dill Hummus"
    recipe_id: dill-hummus
    recipe_source: parsley
    tag_source: inferred
    protein: legume
    temperature: cold
    richness: light
    format: dip-spread
    cuisine: middle-eastern
    spice_level: none
    diet: [vegan, dairy-free, gluten-free]

  - name: "Broccoli and Pistachio Hummus"
    recipe_id: broccoli-and-pistachio-hummus
    recipe_source: parsley
    tag_source: inferred
    protein: legume
    temperature: cold
    richness: light
    format: dip-spread
    cuisine: middle-eastern
    spice_level: none
    diet: [vegan, dairy-free, gluten-free]

  - name: "Satay Sauce"
    recipe_id: satay-sauce
    recipe_source: parsley
    tag_source: inferred
    protein: nut-seed
    temperature: room
    richness: moderate
    format: sauce-condiment
    cuisine: thai
    spice_level: mild
    diet: [vegan, dairy-free, gluten-free]

  - name: "Forestière Quiche"
    recipe_id: forestiere-quiche
    recipe_source: parsley
    tag_source: inferred
    protein: egg
    temperature: warm
    richness: moderate
    format: plated-main
    cuisine: french
    spice_level: none
    diet: [vegetarian]

  - name: "Pico de Gallo"
    recipe_id: pico-de-gallo
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: cold
    richness: lean
    format: sauce-condiment
    cuisine: mexican
    spice_level: mild
    diet: [vegan, dairy-free, gluten-free]

  - name: "Chocolate Praline Mousse"
    recipe_id: chocolate-praline-mousse
    recipe_source: parsley
    tag_source: inferred
    protein: none
    temperature: cold
    richness: indulgent
    format: shareable
    cuisine: french
    spice_level: none
    diet: [vegan, dairy-free, gluten-free]
---

# Mock — Mild Mixed Spring Week

> **GENERATED MOCK — NOT A REAL MENU.** `source: generated` / `status: mock`.
> This is a "what-if" planning artifact. Do not use as a production schedule.

## Weekly production

### Vege (plant-substitute mains)
- Vegan Poutine
- Veggie Jerk Chicken with Orange Remoulade
- Veggie Thai Chicken

### Poisson (fish mains)
- Salmon Pesto Artichoke (main)
- Moqueca
- Hilairoise Salad with Salmon Cake

### Soupe (brothy soups)
- Mushroom Tarragon Soup
- Korean Soup
- Green Tom Yum Soup
- Vegan Pho Soup
- Tulum Soup

### Potage (thick / purée soups)
- Cream of Tomato Soup
- Cold Mélonccio Soup
- Parsnip Pear Pecan Soup
- Chipotle Lentil Vegetable Soup
- Rutabaga Apple Maple Soup

### Salades
- Carrot Celeriac and Almond Salad
- Provençal Salad
- Bandhu Salad
- Cassava Tabbouleh Salad
- Beet Apple Tofu Salad
- Black-Eyed Pea Salad

### Salade-comp (composed salads)
- Kale Mango Cabbage Salad
- Goat Cheese and Cabbage
- Chickpea Crumble Salad
- Orzo Kale and Pesto Salad

### Sandwichs
- Salmon Pesto Artichoke Sandwich
- Satay Veggie Chicken Banh Mi Sandwich

### Texture
- Falafels
- Cauliflower General Tao

### Hummus
- Dill Hummus
- Broccoli and Pistachio Hummus

### Sauces
- Satay Sauce

### Quiche
- Forestière Quiche

### Pico de Gallo
- Pico de Gallo

### Mousse
- Chocolate Praline Mousse

---

## Weekly schedule

| Day | Temp | Weather | Dishes |
|-----|------|---------|--------|
| Monday | 17°C | partly cloudy | Vegan Poutine · Forestière Quiche · Veggie Jerk Chicken with Orange Remoulade · Mushroom Tarragon Soup · Cream of Tomato Soup · Kale Mango Cabbage Salad · Carrot Celeriac and Almond Salad · Dill Hummus · Pico de Gallo · Salmon Pesto Artichoke (main) |
| Tuesday | 19°C | sunny | Veggie Thai Chicken · Moqueca · Korean Soup · Parsnip Pear Pecan Soup · Bandhu Salad · Provençal Salad · Goat Cheese and Cabbage · Chickpea Crumble Salad · Salmon Pesto Artichoke Sandwich · Broccoli and Pistachio Hummus · Falafels |
| Wednesday | 18°C | sunny | Vegan Poutine · Hilairoise Salad with Salmon Cake · Green Tom Yum Soup · Chipotle Lentil Vegetable Soup · Cassava Tabbouleh Salad · Beet Apple Tofu Salad · Kale Mango Cabbage Salad · Orzo Kale and Pesto Salad · Satay Veggie Chicken Banh Mi Sandwich · Satay Sauce · Cauliflower General Tao |
| Thursday | 14°C | light rain | Veggie Jerk Chicken with Orange Remoulade · Salmon Pesto Artichoke (main) · Tulum Soup · Cold Mélonccio Soup · Carrot Celeriac and Almond Salad · Bandhu Salad · Goat Cheese and Cabbage · Dill Hummus · Falafels · Chocolate Praline Mousse |
| Friday | 16°C | cloudy | Veggie Thai Chicken · Moqueca · Mushroom Tarragon Soup · Rutabaga Apple Maple Soup · Black-Eyed Pea Salad · Provençal Salad · Orzo Kale and Pesto Salad · Chickpea Crumble Salad · Pico de Gallo · Cauliflower General Tao |

---

## Why this menu

### Strategy

A mild, mixed spring week (14–19°C, sun and cloud, rain Thursday) calls for the
full structural skeleton at median counts — neither the salad-heavy lean of a hot
summer week nor the soup-pushed weight of a cold week. The range is narrow enough
that no single day needs a dramatic departure from the baseline; Thursday's light
rain is the only weather signal that triggers a pattern-driven move (cold soup
addition, per chef stated intent). No holidays, so all five service days are open.
The week opens with the full staple core on Monday and rotates the three vege
mains and three fish mains across the week to keep variety without repeating a
main on consecutive days.

### Per-day notes

**Monday (17°C, partly cloudy):** Per the medium-confidence `per_day_balance`
pattern, Monday anchors the staple core together — Poutine, Forestière Quiche,
KM salad, a hummus, and Pico de Gallo all on the line. Veggie Jerk Chicken (high
confidence staple, 6/6 weeks) opens the week alongside the first fish main
(Salmon Pesto Artichoke). Soup pair: Mushroom Tarragon (medium rotating) +
Cream of Tomato (low rotating).

**Tuesday (19°C, sunny):** Warmest, sunniest day. Slightly salad-forward: four
cold salads/composed items. Korean Soup + Parsnip Pear Pecan (lighter potage)
provide the brothy+thick pair. Veggie Thai Chicken and Moqueca bring Asian/
Brazilian cuisine breadth. Satay Veggie Chicken Sandwich swapped to Wednesday to
spread sandwichs coverage.

**Wednesday (18°C, sunny):** Mid-week rotation. Hilairoise with salmon cake
appears — a low-confidence rotating dish (2/6) that the chef trialled on
2026-06-01 and called "very good." Green Tom Yum + Chipotle Lentil give a Thai/
TexMex soup pair. KM salad returns (staple). Satay Sauce accompanies the Banh Mi.

**Thursday (14°C, light rain):** Coolest and rainiest day. Chef stated "cold
soups for rainy/cold weekend" (2026-06-15, low/1 week, stated). Applied in the
stated direction: Cold Mélonccio (cold potage) appears alongside Tulum Soup
(brothy, warm), honouring the dual-soup pattern while acknowledging the weather
signal. Mousse (Chocolate Praline) placed here — it is a medium-confidence weekly
item that adds richness appropriate to a grey day.

**Friday (16°C, cloudy):** Cooler end-of-week. Mushroom Tarragon Soup returns
(medium, 4/6 — it didn't appear on Thursday to avoid consecutive repetition).
Rutabaga Apple Maple rounds out the potage pool. Moqueca and Veggie Thai Chicken
cycle back; KM not repeated here (Wednesday already carried it). Pico de Gallo
appears as a second weekly slot — the staple is 6/6 weeks and the schedule spreads
it.

### Pattern citations

| Choice | PATTERNS dimension | Confidence |
|--------|--------------------|------------|
| 5 brothy soups + 5 thick soups in the pool | `menu_skeleton` | high |
| 6 salades + 4 salade-comp in the pool | `menu_skeleton` | high |
| 3 vege + 3 poisson mains | `menu_skeleton` | high |
| 1 quiche (Forestière) | `menu_skeleton` + `rotation` | high |
| 1 pico-de-gallo | `menu_skeleton` + `rotation` (6/6 staple) | high |
| Poutine in the pool (6/6 staple) | `rotation` | high |
| KM salad as salade-comp staple (6/6) | `rotation` | high |
| Veggie Jerk Chicken present (6/6 staple) | `rotation` | high |
| Monday: Poutine + quiche + KM + hummus together | `per_day_balance` | medium |
| Each day: ≥1 fish main + ≥1 plant-substitute main | `per_day_balance` | medium |
| Each day: multiple cold salads dominate non-main slots | `per_day_balance` | high |
| Each day: brothy soup + thick soup in parallel | `per_day_balance` | medium |
| Mixed cuisine per day (not single-cuisine themed) | `per_day_balance` | medium |
| Mushroom Tarragon Soup in the pool (4/6 rotating) | `rotation` | medium |
| Korean Soup in pool (4/6 rotating) | `rotation` | medium |
| Tom Yum Soup in pool (3/6 rotating) | `rotation` | medium |
| Pho Soup in pool (3/6 rotating) | `rotation` | medium |
| Moqueca in pool (3/6 rotating) | `rotation` | medium |
| Hilairoise in pool (2/6 rotating) | `rotation` | low |
| Cold Mélonccio on rainy Thursday | `weather_temp` + `stated_intent` | low (1/4 weeks, chef-stated) |

### Improvisation and honesty flags

1. **Per-day dish assignment is entirely improvised.** PATTERNS.md records no
   day-by-day assignment rules beyond the Monday staple core pattern (medium,
   4/6). Which dish appears on which day is a fictional allocation; the real chef
   likely has scheduling logic not captured in the 6-week sample.

2. **Weather inference is weak.** The `weather_temp` patterns are all low/
   speculative, derived from 4 of 6 weeks with legible weather. The cold-soup
   move on Thursday follows the chef's one stated direction; applying it to any
   day of the week (vs. the originally stated "rainy/cold weekend") is a slight
   extrapolation, flagged.

3. **Hilairoise with salmon cake** is a low-confidence (2/6) rotating item. Its
   appearance here is justified by the chef explicitly noting it as "very good"
   (2026-06-01), but the pattern is thin.

4. **Rutabaga Apple Maple Soup and Parsnip Pear Pecan Soup** appear only once
   each in the sample or not at all in the rotation table (they are in the Parsley
   repertoire but not enumerated in PATTERNS.md rotation). Their inclusion is
   improvised to fill potage slots; this is speculative.

5. **Cauliflower General Tao** does not appear in PATTERNS.md rotation at all.
   Used to fill the second texture slot (pattern calls for 2, median); this is
   improvised from the repertoire with no chef pattern support.

6. **All tag values are inferred** (tag_source: inferred on every dish). No dish
   in this mock has chef-stated tags. Protein uses `plant-substitute` per
   controlled vocabulary, not "plant-based."

7. **Small-sample caveat (PATTERNS.md meta):** Only 6 weeks analyzed, all
   late-spring/early-summer, all status=flagged from hard-to-read photos with
   many "?" dish names. Every pattern here is a hypothesis, not a proven chef
   rule. This mock is a plausible "what-if," not a prediction.

## Dish tags

<!-- regenerated by menus-tag from the dishes: block — do not hand-edit -->
