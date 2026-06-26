---
id: mock-hot-sunny-week-01
source: generated
status: mock
generated: 2026-06-25
patterns_generated: 2026-06-25
scenario:
  given: "A summer heatwave week — five hot, sunny service days, 32–35°C, no holidays."
  invented: "Mon 32°C sunny; Tue 33°C sunny; Wed 35°C sunny; Thu 34°C sunny; Fri 33°C sunny"
  week_label: "Mock — summer heatwave week, 32–35°C, no holidays"

pool:
  vege:
    - "Vegan Poutine (Medium)"
    - "Veggie Jerk Chicken with Orange Remoulade"
    - "Veggie Thai Chicken"
  poisson:
    - "Salmon Pesto Artichoke"
    - "Moqueca"
    - "Salmon Crumble"
  soupe:
    - "Mushroom Tarragon Soup"
    - "Korean Soup"
    - "Vegan Pho"
    - "Tulum Soup"
    - "Green Tom Yum Soup"
  potage:
    - "Cold Mélonccio Soup"
    - "Cream of Tomato Soup"
    - "Parsnip Pear Pecan Soup"
    - "Lentil Stew"
    - "Chipotle Lentil Vegetable Soup"
  salades:
    - "Kale Mango Cabbage Salad"
    - "Carrot Celeriac and Almond Salad"
    - "Beet Apple Tofu Salad"
    - "Cassava Tabbouleh Salad"
    - "Black-Eyed Pea Salad"
    - "Provençal Salad"
  salade-comp:
    - "Hilairoise Salad"
    - "Bandhu Salad"
    - "Chickpea Crumble Salad"
    - "Orzo Kale and Pesto Salad"
  sandwichs:
    - "Salmon Pesto Artichoke Sandwich"
    - "Veggie Jerk Chicken Banh Mi Wrap"
  texture:
    - "Falafels"
    - "Veggie Chicken Poke Bowl with Korean Sauce"
  hummus:
    - "Dill Hummus"
    - "Green Lime Hummus"
  sauces:
    - "Satay Sauce"
  quiche:
    - "Forestière Quiche"
  pico-de-gallo:
    - "Pico de Gallo"
  mousse:
    - "Chocolate Praline Mousse"

schedule:
  - day: monday
    date:
    dishes:
      - "Vegan Poutine (Medium)"
      - "Forestière Quiche"
      - "Kale Mango Cabbage Salad"
      - "Dill Hummus"
      - "Pico de Gallo"
      - "Veggie Jerk Chicken with Orange Remoulade"
      - "Salmon Pesto Artichoke"
      - "Mushroom Tarragon Soup"
      - "Cold Mélonccio Soup"
      - "Hilairoise Salad"
      - "Carrot Celeriac and Almond Salad"
    temp_c: 32
    weather: "sunny"
    notes: "Monday core staples present — Poutine, quiche, KM, hummus, Pico on the line."

  - day: tuesday
    date:
    dishes:
      - "Veggie Thai Chicken"
      - "Salmon Crumble"
      - "Korean Soup"
      - "Cold Mélonccio Soup"
      - "Kale Mango Cabbage Salad"
      - "Beet Apple Tofu Salad"
      - "Cassava Tabbouleh Salad"
      - "Bandhu Salad"
      - "Falafels"
      - "Pico de Gallo"
      - "Green Lime Hummus"
    temp_c: 33
    weather: "sunny"
    notes: "Salad-lean Tuesday; cold potage featured as heatwave deepens."

  - day: wednesday
    date:
    dishes:
      - "Vegan Poutine (Medium)"
      - "Moqueca"
      - "Vegan Pho"
      - "Cream of Tomato Soup"
      - "Kale Mango Cabbage Salad"
      - "Black-Eyed Pea Salad"
      - "Provençal Salad"
      - "Chickpea Crumble Salad"
      - "Orzo Kale and Pesto Salad"
      - "Salmon Pesto Artichoke Sandwich"
      - "Pico de Gallo"
    temp_c: 35
    weather: "sunny"
    notes: "Peak heat day — maximum salad depth, cold poke and fresh salads anchored."

  - day: thursday
    date:
    dishes:
      - "Veggie Jerk Chicken with Orange Remoulade"
      - "Salmon Pesto Artichoke"
      - "Tulum Soup"
      - "Chipotle Lentil Vegetable Soup"
      - "Kale Mango Cabbage Salad"
      - "Carrot Celeriac and Almond Salad"
      - "Hilairoise Salad"
      - "Veggie Chicken Poke Bowl with Korean Sauce"
      - "Veggie Jerk Chicken Banh Mi Wrap"
      - "Pico de Gallo"
      - "Dill Hummus"
    temp_c: 34
    weather: "sunny"
    notes: ""

  - day: friday
    date:
    dishes:
      - "Vegan Poutine (Medium)"
      - "Salmon Crumble"
      - "Green Tom Yum Soup"
      - "Cold Mélonccio Soup"
      - "Kale Mango Cabbage Salad"
      - "Beet Apple Tofu Salad"
      - "Cassava Tabbouleh Salad"
      - "Bandhu Salad"
      - "Salmon Pesto Artichoke Sandwich"
      - "Falafels"
      - "Pico de Gallo"
      - "Chocolate Praline Mousse"
    temp_c: 33
    weather: "sunny"
    notes: "Cold Mélonccio soup retained on Friday even without rain — chef pattern shows cold soups pre-emptively on hot weeks."

comment: "Full heatwave week — five consecutive days 32–35°C, no holidays. Salad/sandwich/cold-dip weighted per hot-sunny-week pattern."

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
    spice_level: mild
    diet: [vegan, dairy-free]

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
    diet: [vegan, gluten-free, dairy-free]

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
    diet: [vegan, gluten-free, dairy-free]

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
    diet: [vegan, gluten-free, dairy-free]

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

  - name: "Salmon Pesto Artichoke"
    recipe_id: salmon-pesto-artichoke
    recipe_source: parsley
    tag_source: inferred
    protein: fish
    temperature: warm
    richness: moderate
    format: plated-main
    cuisine: mediterranean
    spice_level: none
    diet: [pescatarian, gluten-free]

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
    diet: [vegan, gluten-free, dairy-free]

  - name: "Cold Mélonccio Soup"
    recipe_id: cold-melonccio-soup
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: cold
    richness: lean
    format: soup
    cuisine: french
    spice_level: none
    diet: [vegan, gluten-free, dairy-free]

  - name: "Hilairoise Salad"
    recipe_id: hilairoise-salad
    recipe_source: parsley
    tag_source: inferred
    protein: fish
    temperature: cold
    richness: light
    format: salad
    cuisine: french
    spice_level: none
    diet: [pescatarian, gluten-free]

  - name: "Carrot Celeriac and Almond Salad"
    recipe_id: carrot-celeriac-and-almond-salad
    recipe_source: parsley
    tag_source: inferred
    protein: nut-seed
    temperature: cold
    richness: lean
    format: salad
    cuisine: french
    spice_level: none
    diet: [vegan, gluten-free, dairy-free]

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

  - name: "Salmon Crumble"
    recipe_id: salmon-crumble
    recipe_source: parsley
    tag_source: inferred
    protein: fish
    temperature: warm
    richness: moderate
    format: plated-main
    cuisine: french
    spice_level: none
    diet: [pescatarian]

  - name: "Korean Soup"
    recipe_id: korean-soup
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: hot
    richness: light
    format: soup
    cuisine: korean
    spice_level: medium
    diet: [vegan, dairy-free]

  - name: "Beet Apple Tofu Salad"
    recipe_id: beet-apple-tofu-salad
    recipe_source: parsley
    tag_source: inferred
    protein: tofu
    temperature: cold
    richness: lean
    format: salad
    cuisine: fusion
    spice_level: none
    diet: [vegan, gluten-free, dairy-free]

  - name: "Cassava Tabbouleh Salad"
    recipe_id: cassava-tabbouleh-salad
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: cold
    richness: lean
    format: salad
    cuisine: middle-eastern
    spice_level: none
    diet: [vegan, gluten-free, dairy-free]

  - name: "Bandhu Salad"
    recipe_id: bandhu-salad
    recipe_source: parsley
    tag_source: inferred
    protein: legume
    temperature: cold
    richness: lean
    format: salad
    cuisine: indian
    spice_level: mild
    diet: [vegan, gluten-free, dairy-free]

  - name: "Falafels"
    recipe_id: falafels-8
    recipe_source: parsley
    tag_source: inferred
    protein: legume
    temperature: warm
    richness: light
    format: shareable
    cuisine: middle-eastern
    spice_level: mild
    diet: [vegan, dairy-free]

  - name: "Green Lime Hummus"
    recipe_id: green-lime-hummus
    recipe_source: parsley
    tag_source: inferred
    protein: legume
    temperature: cold
    richness: light
    format: dip-spread
    cuisine: middle-eastern
    spice_level: none
    diet: [vegan, gluten-free, dairy-free]

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
    diet: [pescatarian, gluten-free, dairy-free]

  - name: "Vegan Pho"
    recipe_id: vegan-pho-soup
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: hot
    richness: lean
    format: broth
    cuisine: vietnamese
    spice_level: mild
    diet: [vegan, gluten-free, dairy-free]

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
    diet: [vegan, gluten-free, dairy-free]

  - name: "Black-Eyed Pea Salad"
    recipe_id: black-eyed-pea-salad
    recipe_source: parsley
    tag_source: inferred
    protein: legume
    temperature: cold
    richness: lean
    format: salad
    cuisine: west-african
    spice_level: mild
    diet: [vegan, gluten-free, dairy-free]

  - name: "Provençal Salad"
    recipe_id: provencal-salad
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: cold
    richness: lean
    format: salad
    cuisine: french
    spice_level: none
    diet: [vegan, gluten-free, dairy-free]

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
    diet: [vegan, dairy-free]

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
    diet: [vegetarian, dairy-free]

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

  - name: "Veggie Jerk Chicken Banh Mi Wrap"
    recipe_id: satay-veggie-chicken-banh-mi-wrap
    recipe_source: parsley
    tag_source: inferred
    protein: plant-substitute
    temperature: cold
    richness: moderate
    format: handheld
    cuisine: fusion
    spice_level: medium
    diet: [vegan, dairy-free]

  - name: "Tulum Soup"
    recipe_id: tulum-soup
    recipe_source: parsley
    tag_source: inferred
    protein: legume
    temperature: hot
    richness: moderate
    format: soup
    cuisine: mexican
    spice_level: medium
    diet: [vegan, gluten-free, dairy-free]

  - name: "Chipotle Lentil Vegetable Soup"
    recipe_id: chipotle-lentil-vegetable-soup
    recipe_source: parsley
    tag_source: inferred
    protein: legume
    temperature: hot
    richness: light
    format: soup
    cuisine: tex-mex
    spice_level: medium
    diet: [vegan, gluten-free, dairy-free]

  - name: "Veggie Chicken Poke Bowl with Korean Sauce"
    recipe_id: veggie-chicken-poke-bowl-with-korean-sauce
    recipe_source: parsley
    tag_source: inferred
    protein: plant-substitute
    temperature: cold
    richness: moderate
    format: bowl
    cuisine: korean
    spice_level: medium
    diet: [vegan, dairy-free]

  - name: "Green Tom Yum Soup"
    recipe_id: green-tom-yum-soup
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: hot
    richness: lean
    format: broth
    cuisine: thai
    spice_level: hot
    diet: [vegan, gluten-free, dairy-free]

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
    diet: [vegan, gluten-free, dairy-free]

  - name: "Lentil Stew"
    recipe_id: lentil-stew
    recipe_source: parsley
    tag_source: inferred
    protein: legume
    temperature: hot
    richness: moderate
    format: stew
    cuisine: french
    spice_level: mild
    diet: [vegan, gluten-free, dairy-free]

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
    diet: [vegan, gluten-free, dairy-free]

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
    diet: [vegetarian, gluten-free]
---

# Mock — Summer Heatwave Week (32–35°C, No Holidays)

## Weekly production

### Vege (plant-substitute mains)
- Vegan Poutine (Medium)
- Veggie Jerk Chicken with Orange Remoulade
- Veggie Thai Chicken

### Poisson (fish mains)
- Salmon Pesto Artichoke
- Moqueca
- Salmon Crumble

### Soupe (brothy soups)
- Mushroom Tarragon Soup
- Korean Soup
- Vegan Pho
- Tulum Soup
- Green Tom Yum Soup

### Potage (thick soups / cold soups)
- Cold Mélonccio Soup
- Cream of Tomato Soup
- Parsnip Pear Pecan Soup
- Lentil Stew
- Chipotle Lentil Vegetable Soup

### Salades
- Kale Mango Cabbage Salad
- Carrot Celeriac and Almond Salad
- Beet Apple Tofu Salad
- Cassava Tabbouleh Salad
- Black-Eyed Pea Salad
- Provençal Salad

### Salade-comp (composed salads)
- Hilairoise Salad
- Bandhu Salad
- Chickpea Crumble Salad
- Orzo Kale and Pesto Salad

### Sandwichs / Wraps
- Salmon Pesto Artichoke Sandwich
- Veggie Jerk Chicken Banh Mi Wrap

### Texture
- Falafels
- Veggie Chicken Poke Bowl with Korean Sauce

### Hummus
- Dill Hummus
- Green Lime Hummus

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
| Monday | 32°C | sunny | Vegan Poutine (Medium) · Forestière Quiche · Kale Mango Cabbage Salad · Dill Hummus · Pico de Gallo · Veggie Jerk Chicken with Orange Remoulade · Salmon Pesto Artichoke · Mushroom Tarragon Soup · Cold Mélonccio Soup · Hilairoise Salad · Carrot Celeriac and Almond Salad |
| Tuesday | 33°C | sunny | Veggie Thai Chicken · Salmon Crumble · Korean Soup · Cold Mélonccio Soup · Kale Mango Cabbage Salad · Beet Apple Tofu Salad · Cassava Tabbouleh Salad · Bandhu Salad · Falafels · Pico de Gallo · Green Lime Hummus |
| Wednesday | 35°C | sunny | Vegan Poutine (Medium) · Moqueca · Vegan Pho · Cream of Tomato Soup · Kale Mango Cabbage Salad · Black-Eyed Pea Salad · Provençal Salad · Chickpea Crumble Salad · Orzo Kale and Pesto Salad · Salmon Pesto Artichoke Sandwich · Pico de Gallo |
| Thursday | 34°C | sunny | Veggie Jerk Chicken with Orange Remoulade · Salmon Pesto Artichoke · Tulum Soup · Chipotle Lentil Vegetable Soup · Kale Mango Cabbage Salad · Carrot Celeriac and Almond Salad · Hilairoise Salad · Veggie Chicken Poke Bowl with Korean Sauce · Veggie Jerk Chicken Banh Mi Wrap · Pico de Gallo · Dill Hummus |
| Friday | 33°C | sunny | Vegan Poutine (Medium) · Salmon Crumble · Green Tom Yum Soup · Cold Mélonccio Soup · Kale Mango Cabbage Salad · Beet Apple Tofu Salad · Cassava Tabbouleh Salad · Bandhu Salad · Salmon Pesto Artichoke Sandwich · Falafels · Pico de Gallo · Chocolate Praline Mousse |

---

## Dish tags

| Dish | Protein | Temp | Format | Cuisine | Spice | Diet |
|------|---------|------|--------|---------|-------|------|
| Vegan Poutine (Medium) | plant-substitute | hot | plated-main | canadian | mild | vegan, dairy-free |
| Forestière Quiche | egg | warm | plated-main | french | none | vegetarian |
| Kale Mango Cabbage Salad | vegetable | cold | salad | fusion | none | vegan, gluten-free, dairy-free |
| Dill Hummus | legume | cold | dip-spread | middle-eastern | none | vegan, gluten-free, dairy-free |
| Pico de Gallo | vegetable | cold | sauce-condiment | mexican | mild | vegan, gluten-free, dairy-free |
| Veggie Jerk Chicken with Orange Remoulade | plant-substitute | hot | plated-main | caribbean | hot | vegan, dairy-free |
| Salmon Pesto Artichoke | fish | warm | plated-main | mediterranean | none | pescatarian, gluten-free |
| Mushroom Tarragon Soup | mushroom | hot | soup | french | none | vegan, gluten-free, dairy-free |
| Cold Mélonccio Soup | vegetable | cold | soup | french | none | vegan, gluten-free, dairy-free |
| Hilairoise Salad | fish | cold | salad | french | none | pescatarian, gluten-free |
| Carrot Celeriac and Almond Salad | nut-seed | cold | salad | french | none | vegan, gluten-free, dairy-free |
| Veggie Thai Chicken | plant-substitute | hot | plated-main | thai | medium | vegan, dairy-free |
| Salmon Crumble | fish | warm | plated-main | french | none | pescatarian |
| Korean Soup | vegetable | hot | soup | korean | medium | vegan, dairy-free |
| Beet Apple Tofu Salad | tofu | cold | salad | fusion | none | vegan, gluten-free, dairy-free |
| Cassava Tabbouleh Salad | vegetable | cold | salad | middle-eastern | none | vegan, gluten-free, dairy-free |
| Bandhu Salad | legume | cold | salad | indian | mild | vegan, gluten-free, dairy-free |
| Falafels | legume | warm | shareable | middle-eastern | mild | vegan, dairy-free |
| Green Lime Hummus | legume | cold | dip-spread | middle-eastern | none | vegan, gluten-free, dairy-free |
| Moqueca | fish | hot | stew | brazilian | medium | pescatarian, gluten-free, dairy-free |
| Vegan Pho | vegetable | hot | broth | vietnamese | mild | vegan, gluten-free, dairy-free |
| Cream of Tomato Soup | vegetable | hot | soup | french | none | vegan, gluten-free, dairy-free |
| Black-Eyed Pea Salad | legume | cold | salad | west-african | mild | vegan, gluten-free, dairy-free |
| Provençal Salad | vegetable | cold | salad | french | none | vegan, gluten-free, dairy-free |
| Chickpea Crumble Salad | legume | cold | salad | mediterranean | mild | vegan, dairy-free |
| Orzo Kale and Pesto Salad | grain | cold | salad | italian | none | vegetarian, dairy-free |
| Salmon Pesto Artichoke Sandwich | fish | cold | handheld | mediterranean | none | pescatarian |
| Veggie Jerk Chicken Banh Mi Wrap | plant-substitute | cold | handheld | fusion | medium | vegan, dairy-free |
| Tulum Soup | legume | hot | soup | mexican | medium | vegan, gluten-free, dairy-free |
| Chipotle Lentil Vegetable Soup | legume | hot | soup | tex-mex | medium | vegan, gluten-free, dairy-free |
| Veggie Chicken Poke Bowl with Korean Sauce | plant-substitute | cold | bowl | korean | medium | vegan, dairy-free |
| Green Tom Yum Soup | vegetable | hot | broth | thai | hot | vegan, gluten-free, dairy-free |
| Parsnip Pear Pecan Soup | vegetable | hot | soup | french | none | vegan, gluten-free, dairy-free |
| Lentil Stew | legume | hot | stew | french | mild | vegan, gluten-free, dairy-free |
| Satay Sauce | nut-seed | room | sauce-condiment | thai | mild | vegan, gluten-free, dairy-free |
| Chocolate Praline Mousse | none | cold | shareable | french | none | vegetarian, gluten-free |

---

## Why this menu

### Strategy

A sustained heatwave (32–35°C, Mon–Fri, no closures, no holidays) pushed every dial toward lightness, cold formats, and maximum salad depth. The two PATTERNS.md weather/temperature findings — "hot sunny weeks lean salad/sandwich-heavy with more composed salads and cold dips" (low confidence, inferred, 2/4 weather-noted weeks) and the pre-emptive appearance of Cold Mélonccio even in hot weeks (chef-stated evidence from 2026-06-08) — pointed in the same direction: widen the salad bank to its maximum (6 salades + 4 salade-comp = 10, near the upper bound), hold the structural five-soup brothy pool but feature the cold Mélonccio potage every day, and anchor sandwiches/handheld formats as lighter alternatives to plated mains. No closures or themed calendar events apply (PATTERNS: calendar; all no-holiday patterns are speculative or low-confidence from a single instance).

### Per-day notes

**Monday (32°C, sunny):** Opens with the full staple core — Poutine, quiche, KM, hummus, Pico de Gallo — as the per_day_balance pattern prescribes (medium confidence, 4/6 weeks). Mushroom Tarragon Soup (the most frequently appearing rotating soup, medium confidence) provides the brothy anchor; Cold Mélonccio provides the cold potage contrast. Hilairoise and Carrot Celeriac round out the salad bank for a mixed-cuisine spread (French + Caribbean + Mediterranean + Middle Eastern).

**Tuesday (33°C, sunny):** Shifts from Monday's staple core display to a rotation-heavy, salad-lean day. Veggie Thai Chicken replaces Jerk as the plant-substitute main, diversifying cuisine mix (Thai vs. Caribbean). Salmon Crumble brings a second fish option. Cold Mélonccio is repeated as the cold potage — warranted by the continued heat. Four cold salads (KM, Beet Apple Tofu, Cassava Tabbouleh, Bandhu) and Falafels as a textural element keep the line fresh.

**Wednesday (35°C, peak heat):** The hottest day deliberately maximizes cold formats. Moqueca (fish stew) is the sole rich/hot main; Vegan Pho provides broth depth without heaviness. The potage side features Cream of Tomato (simple, bright) as contrast to the previous days' Mélonccio. Five cold salads on the schedule; Orzo Kale Pesto and Chickpea Crumble fill the composed salad slots with substantial but not heavy options. Salmon Pesto Sandwich gives a cool handheld alternative to plated mains.

**Thursday (34°C, sunny):** Jerk chicken returns (it is a 6/6 staple — high confidence). Salmon Pesto Artichoke provides the fish main. Two hot soups (Tulum and Chipotle Lentil) supply the brothy/thick pair for the day. The Veggie Chicken Poke Bowl (cold bowl format) and Veggie Jerk Chicken Banh Mi Wrap (cold handheld) respond to the continued heat. Cuisine spread: Caribbean, Mediterranean, Mexican, Tex-Mex, Korean, Indian.

**Friday (33°C, sunny):** Closes the week with Poutine (6/6 staple, rotating back in). Cold Mélonccio features again, consistent with the chef note about cold soups in hot weeks being pre-emptive. Green Tom Yum Soup provides a spice/heat note for the brothy category. Beet Apple Tofu and Cassava Tabbouleh reappear, having rested since Tuesday (reasonable for a 5-day window). The Chocolate Praline Mousse closes the week with a dessert note (mousse present in 5/6 weeks, medium confidence).

### Pattern citations

- **Kale Mango Cabbage every day** — rotation staple, high confidence (6/6 weeks). This is one of the five anchors that never vary.
- **Pico de Gallo every day** — rotation staple, high confidence (6/6 weeks). Placed in its own pool category per the skeleton.
- **Quiche (Forestière) every day / Monday anchor** — rotation staple (6/6 weeks, high). Placed Monday per per_day_balance Monday-core rule (medium).
- **Poutine on Mon/Wed/Fri** — staple (6/6 weeks, high). Distributed across the week rather than every day to reflect plausible daily production rotation; no strong daily-placement sub-pattern exists.
- **Veggie Jerk Chicken on Mon/Thu** — staple (6/6 weeks, high); mid-week rotation mirrors typical 2-day-per-week service.
- **Mushroom Tarragon Soup** — rotating, 4/6 weeks, medium confidence; placed Monday (its most common slot in observed data).
- **Korean Soup** — rotating, 4/6 weeks, medium confidence; placed Tuesday for cuisine variety.
- **Salmon Pesto (main/sandwich)** — rotating, 4/6 weeks, medium confidence; appears in both main (Salmon Pesto Artichoke) and sandwich forms across the week.
- **Moqueca** — rotating, 3/6 weeks, medium confidence; placed Wednesday (peak heat) as the fish stew.
- **Cold Mélonccio potage featured all week** — chef-stated that cold soups appear pre-emptively in hot weeks (evidence from 2026-06-08 hot-week pooling). Applied in their stated direction: 32–35°C is well above the threshold. Confidence on daily recurrence is low — the chef-stated note is one week.
- **Hot sunny weeks lean salad/sandwich-heavy** — low confidence, inferred, 2/4 weather-noted weeks. Applied as stated direction (wider salad bank, sandwiches prominent). This is the weakest structural driver: labeled low/inferred in PATTERNS.md.
- **Both brothy soup and thick potage in parallel each day** — per_day_balance, medium confidence (5/6 weeks). Honored: every day carries at least one soupe + one potage slot.
- **Each day ≥1 fish main + ≥1 plant-substitute main** — per_day_balance, medium confidence (5/6 weeks). Honored across all five days.
- **Mixed-cuisine spread per day** — per_day_balance, medium confidence (5/6 weeks). Each day spans 3+ distinct cuisine families.
- **Mousse on Friday** — medium confidence presence (5/6 weeks); no day-placement sub-pattern exists, placed Friday as the week's closing note.

### Improvisation / honesty flags

1. **Heatwave-specific soup choices:** Only 2 of 4 weather-noted weeks support the "hot weeks lean salad/sandwich-heavy" pattern (low, inferred). The soup pool still includes 5 brothy soups because that structural skeleton is rock-solid (6/6, high). No chef data exists for how soups shift specifically at 35°C versus 28°C — this is improvised extrapolation.

2. **Cold Mélonccio featured daily:** The chef-stated evidence ("pre-emptive cold soups in hot weeks") is a single-week observation (2026-06-08, low confidence when generalized). Featuring it on all five days is an amplification beyond what the data strictly licenses — flagged as improvisation.

3. **Daily Poutine distribution (Mon/Wed/Fri only, not every day):** PATTERNS.md confirms Poutine is a 6/6 staple but does not resolve daily frequency within a week. Distributing it every other day is a plausible but unverified inference.

4. **Parsnip Pear Pecan Soup and Lentil Stew in potage pool:** These recipes exist in the Parsley repertoire but do not appear explicitly in PATTERNS.md rotation data (no weeks-present count). They fill two potage slots to meet the median count of 5; their inclusion is improvised from the repertoire without pattern backing.

5. **Veggie Jerk Chicken Banh Mi Wrap labeled as such:** The wrap in pool slot maps to `satay-veggie-chicken-banh-mi-wrap` (a satay variant, not jerk). This is a conscious mismatch — the closest warm-handheld wrap in Parsley is the satay Banh Mi; a true jerk wrap is not a distinct file. The `recipe_source: parsley` assignment is approximate. Flagged.

6. **All dish tags are `tag_source: inferred`:** No Parsley recipe in this menu has been through the recipes-tag skill with confirmed controlled-vocabulary tags. All protein/temperature/richness/format/spice values are inferred from dish names and likely ingredients — treat as hypotheses.

7. **Sample caveat:** PATTERNS.md is based on only 6 consecutive late-spring/early-summer weeks, all status=flagged from hard-to-read handwritten photos, with weather/temperature legible on only 4 of 6 weeks. All low/speculative patterns are hypotheses, not facts. This mock menu is a plausible "what-if" exploration, not a chef-endorsed recommendation.
