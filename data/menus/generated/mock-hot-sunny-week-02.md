---
id: mock-hot-sunny-week-02
source: generated
status: mock
generated: 2026-06-25
patterns_generated: 2026-06-25
scenario:
  given: "A warm sunny week (~26 degrees C) with Canada Day (Wednesday, July 1) a statutory holiday — closed Wednesday."
  invented: "Mon Jun 29 26°C sunny; Tue Jun 30 27°C sunny; Wed Jul 1 CLOSED — Canada Day statutory holiday; Thu Jul 2 25°C sunny; Fri Jul 3 26°C partly cloudy"
  week_label: "Mock — warm sunny Canada Day week (Jun 29 – Jul 3, 2026)"

pool:
  vege:
    - "Vegan Poutine (Medium)"
    - "Veggie Jerk Chicken with Orange Remoulade"
    - "Veggie Thai Chicken"
  poisson:
    - "Salmon Pesto Artichoke"
    - "Moqueca"
    - "Mini Salmon Cakes"
  soupe:
    - "Mushroom Tarragon Soup"
    - "Korean Soup"
    - "Green Tom Yum Soup"
    - "Vegan Pho Soup"
    - "Cold Melonccio Soup"
  potage:
    - "Cream of Tomato Soup"
    - "Tulum Soup"
    - "Parsnip Pear Pecan Soup"
    - "Chipotle Lentil Vegetable Soup"
    - "Rutabaga Apple Maple Soup"
  salades:
    - "Kale Mango Cabbage Salad"
    - "Bandhu Salad"
    - "Cassava Tabbouleh Salad"
    - "Carrot Celeriac and Almond Salad"
    - "Beet Apple Tofu Salad"
    - "Provencal Salad"
  salade-comp:
    - "Hilairoise Salad"
    - "Goat Cheese and Cabbage"
    - "Orzo Kale and Pesto Salad"
    - "Korean Grilled Sweet Potato Salad"
  sandwichs:
    - "Salmon Pesto Artichoke Sandwich"
    - "Vegan Pulled Oyster Mushroom Sandwich"
  texture:
    - "Falafels (8)"
    - "Chickpea Crumble Salad"
  hummus:
    - "Dill Hummus"
    - "Broccoli and Pistachio Hummus"
  sauces:
    - "Satay Sauce"
  quiche:
    - "Forestiere Quiche"
  pico-de-gallo:
    - "Pico de Gallo"
  mousse:
    - "Chocolate Praline Mousse"

schedule:
  - day: monday
    date: 2026-06-29
    dishes:
      - "Vegan Poutine (Medium)"
      - "Veggie Jerk Chicken with Orange Remoulade"
      - "Salmon Pesto Artichoke"
      - "Forestiere Quiche"
      - "Mushroom Tarragon Soup"
      - "Cream of Tomato Soup"
      - "Kale Mango Cabbage Salad"
      - "Hilairoise Salad"
      - "Dill Hummus"
      - "Pico de Gallo"
      - "Falafels (8)"
    temp_c: 26
    weather: "sunny"
    notes: "Monday staple core — Poutine + Jerk + quiche + KM + hummus + Pico all on the line (per_day_balance Monday pattern, medium confidence)."

  - day: tuesday
    date: 2026-06-30
    dishes:
      - "Veggie Thai Chicken"
      - "Mini Salmon Cakes"
      - "Korean Soup"
      - "Tulum Soup"
      - "Kale Mango Cabbage Salad"
      - "Bandhu Salad"
      - "Goat Cheese and Cabbage"
      - "Orzo Kale and Pesto Salad"
      - "Salmon Pesto Artichoke Sandwich"
      - "Broccoli and Pistachio Hummus"
      - "Chickpea Crumble Salad"
    temp_c: 27
    weather: "sunny"
    notes: "Warmest day — salad-heavy, mixed-cuisine line (Thai / Korean / French / Italian / Indian)."

  - day: wednesday
    date: 2026-07-01
    dishes: []
    temp_c:
    weather:
    notes: "CLOSED — Canada Day (statutory holiday). No service."

  - day: thursday
    date: 2026-07-02
    dishes:
      - "Vegan Poutine (Medium)"
      - "Moqueca"
      - "Green Tom Yum Soup"
      - "Parsnip Pear Pecan Soup"
      - "Kale Mango Cabbage Salad"
      - "Carrot Celeriac and Almond Salad"
      - "Beet Apple Tofu Salad"
      - "Korean Grilled Sweet Potato Salad"
      - "Vegan Pulled Oyster Mushroom Sandwich"
      - "Cold Melonccio Soup"
      - "Satay Sauce"
    temp_c: 25
    weather: "sunny"
    notes: "Post-holiday return. Cold Melonccio added for the warm-week pre-emptive cold-soup signal (weather_temp, low/stated). Broad cuisine mix: Brazilian / Thai / French / Korean."

  - day: friday
    date: 2026-07-03
    dishes:
      - "Veggie Jerk Chicken with Orange Remoulade"
      - "Salmon Pesto Artichoke"
      - "Vegan Pho Soup"
      - "Chipotle Lentil Vegetable Soup"
      - "Rutabaga Apple Maple Soup"
      - "Kale Mango Cabbage Salad"
      - "Provencal Salad"
      - "Cassava Tabbouleh Salad"
      - "Hilairoise Salad"
      - "Forestiere Quiche"
      - "Pico de Gallo"
      - "Chocolate Praline Mousse"
    temp_c: 26
    weather: "partly cloudy"
    notes: "End-of-week: quiche and Pico cycle back, salad bank deepened with tabbouleh and Provencal. Mousse closes the week."

dishes:
  - name: "Vegan Poutine (Medium)"
    recipe_id: vegan-poutine-medium
    recipe_source: parsley
    tag_source: inferred
    protein: plant-substitute
    temperature: hot
    richness: moderate
    format: plated-main
    cuisine: canadian
    spice_level: none
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

  - name: "Salmon Pesto Artichoke"
    recipe_id: salmon-pesto-artichoke
    recipe_source: parsley
    tag_source: inferred
    protein: fish
    temperature: hot
    richness: moderate
    format: plated-main
    cuisine: french
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

  - name: "Mini Salmon Cakes"
    recipe_id: mini-salmon-cakes
    recipe_source: parsley
    tag_source: inferred
    protein: fish
    temperature: hot
    richness: moderate
    format: plated-main
    cuisine: french
    spice_level: mild
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
    protein: vegetable
    temperature: hot
    richness: light
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
    protein: vegetable
    temperature: hot
    richness: light
    format: broth
    cuisine: vietnamese
    spice_level: mild
    diet: [vegan, dairy-free]

  - name: "Cold Melonccio Soup"
    recipe_id: cold-melonccio-soup
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: cold
    richness: light
    format: soup
    cuisine: french
    spice_level: none
    diet: [vegan, dairy-free, gluten-free]

  - name: "Cream of Tomato Soup"
    recipe_id: cream-of-tomato-soup
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: hot
    richness: light
    format: soup
    cuisine: french
    spice_level: none
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

  - name: "Parsnip Pear Pecan Soup"
    recipe_id: parsnip-pear-pecan-soup
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: hot
    richness: light
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
    spice_level: hot
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

  - name: "Kale Mango Cabbage Salad"
    recipe_id: kale-mango-cabbage-salad
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: cold
    richness: light
    format: salad
    cuisine: fusion
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
    protein: vegetable
    temperature: cold
    richness: light
    format: salad
    cuisine: middle-eastern
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

  - name: "Provencal Salad"
    recipe_id: provencal-salad
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: cold
    richness: light
    format: salad
    cuisine: french
    spice_level: none
    diet: [vegan, dairy-free]

  - name: "Hilairoise Salad"
    recipe_id: hilairoise-salad
    recipe_source: parsley
    tag_source: inferred
    protein: fish
    temperature: cold
    richness: moderate
    format: salad
    cuisine: french
    spice_level: none
    diet: [pescatarian, gluten-free]

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

  - name: "Korean Grilled Sweet Potato Salad"
    recipe_id: korean-grilled-sweet-potato-salad
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: room
    richness: moderate
    format: salad
    cuisine: korean
    spice_level: medium
    diet: [vegan, dairy-free, gluten-free]

  - name: "Salmon Pesto Artichoke Sandwich"
    recipe_id: salmon-pesto-artichoke-sandwich
    recipe_source: parsley
    tag_source: inferred
    protein: fish
    temperature: room
    richness: moderate
    format: handheld
    cuisine: french
    spice_level: none
    diet: [pescatarian]

  - name: "Vegan Pulled Oyster Mushroom Sandwich"
    recipe_id: vegan-pulled-oyster-mushroom-sandwich
    recipe_source: parsley
    tag_source: inferred
    protein: mushroom
    temperature: hot
    richness: moderate
    format: handheld
    cuisine: american
    spice_level: mild
    diet: [vegan, dairy-free]

  - name: "Falafels (8)"
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

  - name: "Chickpea Crumble Salad"
    recipe_id: chickpea-crumble-salad
    recipe_source: parsley
    tag_source: inferred
    protein: legume
    temperature: cold
    richness: light
    format: salad
    cuisine: mediterranean
    spice_level: none
    diet: [vegan, dairy-free, gluten-free]

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

  - name: "Forestiere Quiche"
    recipe_id: forestiere-quiche
    recipe_source: parsley
    tag_source: inferred
    protein: egg
    temperature: hot
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
    format: baked-good
    cuisine: french
    spice_level: none
    diet: [vegetarian, gluten-free]
---

# Mock — warm sunny Canada Day week (Jun 29 – Jul 3, 2026)

> **MOCK FILE — machine-generated, not a real chef menu. Do not use for production.**
> `source: generated` | `status: mock`

---

## Weekly production

### Vege (3)
- Vegan Poutine (Medium)
- Veggie Jerk Chicken with Orange Remoulade
- Veggie Thai Chicken

### Poisson (3)
- Salmon Pesto Artichoke
- Moqueca
- Mini Salmon Cakes

### Soupe (5)
- Mushroom Tarragon Soup
- Korean Soup
- Green Tom Yum Soup
- Vegan Pho Soup
- Cold Melonccio Soup

### Potage (5)
- Cream of Tomato Soup
- Tulum Soup
- Parsnip Pear Pecan Soup
- Chipotle Lentil Vegetable Soup
- Rutabaga Apple Maple Soup

### Salades (6)
- Kale Mango Cabbage Salad *(staple)*
- Bandhu Salad
- Cassava Tabbouleh Salad
- Carrot Celeriac and Almond Salad
- Beet Apple Tofu Salad
- Provencal Salad

### Salade-comp (4)
- Hilairoise Salad
- Goat Cheese and Cabbage
- Orzo Kale and Pesto Salad
- Korean Grilled Sweet Potato Salad

### Sandwichs (2)
- Salmon Pesto Artichoke Sandwich
- Vegan Pulled Oyster Mushroom Sandwich

### Texture (2)
- Falafels (8)
- Chickpea Crumble Salad

### Hummus (2)
- Dill Hummus
- Broccoli and Pistachio Hummus

### Sauces (1)
- Satay Sauce

### Quiche (1)
- Forestiere Quiche

### Pico de Gallo (1)
- Pico de Gallo

### Mousse (1)
- Chocolate Praline Mousse

---

## Weekly schedule

| Day | Date | Temp | Weather | Dishes | Notes |
|-----|------|------|---------|--------|-------|
| Monday | Jun 29 | 26 C | sunny | Vegan Poutine, Veggie Jerk Chicken, Salmon Pesto Artichoke, Forestiere Quiche, Mushroom Tarragon Soup, Cream of Tomato Soup, Kale Mango Cabbage Salad, Hilairoise Salad, Dill Hummus, Pico de Gallo, Falafels (8) | Staple core day: Poutine + Jerk + quiche + KM + hummus + Pico all on the line |
| Tuesday | Jun 30 | 27 C | sunny | Veggie Thai Chicken, Mini Salmon Cakes, Korean Soup, Tulum Soup, Kale Mango Cabbage Salad, Bandhu Salad, Goat Cheese and Cabbage, Orzo Kale and Pesto Salad, Salmon Pesto Artichoke Sandwich, Broccoli and Pistachio Hummus, Chickpea Crumble Salad | Warm sunny day — salad-lean line, diverse cuisine spread |
| Wednesday | Jul 1 | — | — | CLOSED | Canada Day — statutory holiday. No service. |
| Thursday | Jul 2 | 25 C | sunny | Vegan Poutine, Moqueca, Green Tom Yum Soup, Parsnip Pear Pecan Soup, Kale Mango Cabbage Salad, Carrot Celeriac and Almond Salad, Beet Apple Tofu Salad, Korean Grilled Sweet Potato Salad, Vegan Pulled Oyster Mushroom Sandwich, Cold Melonccio Soup, Satay Sauce | Post-holiday return; Cold Melonccio for warm-week cold-soup signal |
| Friday | Jul 3 | 26 C | partly cloudy | Veggie Jerk Chicken, Salmon Pesto Artichoke, Vegan Pho Soup, Chipotle Lentil Vegetable Soup, Rutabaga Apple Maple Soup, Kale Mango Cabbage Salad, Provencal Salad, Cassava Tabbouleh Salad, Hilairoise Salad, Forestiere Quiche, Pico de Gallo, Chocolate Praline Mousse | End-of-week: quiche and Pico cycle back, mousse closes the week |

---

## Why this menu

### Strategy

A warm (26-27 C), consistently sunny week with Wednesday July 1 closed for Canada Day leaves four service days (Mon, Tue, Thu, Fri). Two PATTERNS.md signals shape the week: (a) hot/sunny weeks lean salad- and sandwich-heavy with more composed salads and cold dips (weather_temp, low/inferred, 2/4 weather-noted weeks) — applied here by filling salades to its median of 6 and salade-comp to 4, keeping sandwichs at median 2; and (b) Cold Melonccio soup appears pre-emptively in hot weeks (chef-stated evidence from 2026-06-08 hot week; weather_temp, low). Wednesday is closed per the statutory-holiday pattern (calendar, low/stated, established from Victoria Day 2026-05-18). Pool counts are set to skeleton medians; the mid-week closure reduces the service-day count but not the production pool.

### Per-day notes

**Monday (Jun 29, 26 C sunny).** The per_day_balance pattern (medium confidence, 4/6 weeks) calls for the full staple core to open the week together: Vegan Poutine, Veggie Jerk Chicken, Forestiere Quiche, Kale Mango Cabbage, Dill Hummus, and Pico de Gallo all appear. Salmon Pesto Artichoke satisfies the "at least one fish/pescatarian main" rule (medium confidence). Mushroom Tarragon Soup (brothy) and Cream of Tomato (potage/thick) run in parallel (per_day_balance, medium confidence). Hilairoise (composed salad) and Falafels round out the line with mixed cuisine (French / Caribbean / Middle Eastern).

**Tuesday (Jun 30, 27 C sunny).** Warmest day. The line shifts to Veggie Thai Chicken (plant-sub) and Mini Salmon Cakes (fish) as the mains. Korean Soup (brothy) and Tulum Soup (thick) maintain the parallel-soup rule. Four composed/simple salads (KM + Bandhu + Goat Cheese and Cabbage + Orzo Kale Pesto) plus Chickpea Crumble (texture) lean into the hot-sunny salad-heavy pattern. Cuisine spread: Thai, Korean, Mexican, French, Italian, Indian — mixed per pattern (medium confidence).

**Wednesday (Jul 1) — CLOSED.** Canada Day is a statutory holiday. Calendar pattern: statutory holiday → closed (low confidence, stated, from Victoria Day 2026-05-18). dishes: [] with a notes reason.

**Thursday (Jul 2, 25 C sunny).** Post-holiday return. Vegan Poutine reappears (6/6 staple). Moqueca (fish stew, medium confidence rotating 3/6 weeks) provides the fish main. Green Tom Yum (brothy) and Parsnip Pear Pecan Soup (thick) run in parallel. Cold Melonccio is added here — the pre-emptive cold-soup signal for a warm week (weather_temp, low/stated evidence from 2026-06-08). Satay Sauce fills the single sauces slot. Cuisine spread: Brazilian, Thai, French, Korean, American.

**Friday (Jul 3, 26 C partly cloudy).** The line is partly cloudy but still warm — no rainy/cold protocol invoked. Veggie Jerk Chicken cycles back (6/6 staple). Salmon Pesto Artichoke returns as the fish main (4/6 rotating, medium confidence). Three brothy-register soups (Pho, Chipotle Lentil, Rutabaga Apple Maple) round out the potage side — these fill the last unconsumed potage slots. Hilairoise reappears in the salade-comp slot. Forestiere Quiche and Pico de Gallo return (both weekly staples). Chocolate Praline Mousse closes the week (mousse category, 5/6 weeks, medium confidence).

### Pattern citations

| Decision | PATTERNS.md dimension | Confidence |
|----------|-----------------------|------------|
| Full skeleton counts (5 soupe / 5 potage / 6 salades / 3 vege / 3 poisson / 4 salade-comp / etc.) | menu_skeleton | high |
| Poutine, KM, Pico de Gallo, Quiche, Veggie Jerk Chicken in the pool every week | rotation — staples | high |
| KM on every service day | rotation — staple | high |
| Monday: full staple core together on the line | per_day_balance | medium |
| Every service day at least 1 fish main + at least 1 plant-sub main | per_day_balance | medium |
| Each service day multiple cold salads alongside hot mains | per_day_balance | high |
| Both brothy soup and thick soup most service days | per_day_balance | medium |
| Broad mixed cuisine spread within a day | per_day_balance | medium |
| Hot/sunny week -> salad/sandwich-heavy, more composed salads, cold dips | weather_temp | low (inferred) |
| Cold Melonccio in a warm week (pre-emptive cold soup) | weather_temp (stated evidence) | low |
| Wednesday closed for Canada Day (statutory holiday) | calendar | low (stated) |
| Mousse in the pool | menu_skeleton (mousse) | medium |
| Mushroom Tarragon Soup present | rotation (4/6 weeks) | medium |
| Korean Soup present | rotation (4/6 weeks) | medium |
| Salmon Pesto variants present | rotation (4/6 weeks) | medium |
| Tom Yum Soup present | rotation (3/6 weeks) | medium |
| Pho Soup present | rotation (3/6 weeks) | medium |
| Moqueca present | rotation (3/6 weeks) | medium |
| Goat Cheese and Cabbage present | rotation (3/6 weeks) | medium |
| Hilairoise Salad present | rotation (2/6 weeks) | low |
| Tabbouleh variant present | rotation (2/6 weeks) | low |
| Bandhu Salad present | rotation (2/6 weeks) | low |
| Beet Apple Tofu Salad present | rotation (2/6 weeks) | low |
| Carrot Celeriac Salad present | rotation (2/6 weeks) | low |
| Falafels present | rotation (2/6 weeks) | low |

### Improvisation / honesty flags

1. **Sample caveat applies in full.** PATTERNS.md is derived from only 6 consecutive late-spring/early-summer weeks, all status=flagged from hard-to-read handwritten photos with many unreadable dish names. Temperature/weather is legible on only 4 of 6 weeks. All low/speculative patterns are hypotheses, not facts.

2. **Hot-week salad-lean signal is low confidence.** The "hot/sunny weeks lean salad/sandwich-heavy" pattern is low/inferred from 2/4 weather-noted weeks. Applied here in its stated direction, but it is the weakest structural driver.

3. **Canada Day closure from a single prior data point.** The statutory-holiday closure pattern comes from one observed instance (Victoria Day 2026-05-18). Extending it to Canada Day is directionally correct but rests on a single example.

4. **Cold Melonccio on Thursday.** The pre-emptive cold-soup evidence comes from 2026-06-08 pooling (not a daily schedule placement). Placing it on Thursday is an interpretation of that evidence, not a replicated chef behavior.

5. **Potage category includes autumn-register soups.** Rutabaga Apple Maple Soup and Parsnip Pear Pecan Soup have autumn/winter flavor profiles (maple, root vegetables). Including them in a late-June/early-July week fills the potage count to the median of 5 but has no seasonal pattern support — explicitly flagged as improvisation.

6. **Texture category interpretation.** PATTERNS.md names "texture" as a pool category but does not define it. This mock treats it as crunchy/fried items (Falafels, Chickpea Crumble Salad). This is a plausible but unverified interpretation.

7. **No MDF marker.** The real menus carry a recurring "MDF" weekly event/prep cue (medium confidence, 5/6 weeks) whose full meaning is unresolved. This mock omits it rather than fabricating its content.

8. **All dish tags are tag_source: inferred.** No Parsley recipe in this menu has been through the recipes-tag skill. All protein/temperature/richness/format/spice_level values are inferred from dish names and ingredient-list overviews — treat as hypotheses, not verified tags.
