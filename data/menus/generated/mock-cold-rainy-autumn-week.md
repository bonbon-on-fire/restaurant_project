---
id: mock-cold-rainy-autumn-week
source: generated
status: mock
generated: 2026-06-25
patterns_generated: 2026-06-25
scenario:
  given: "A cold, rainy autumn week — 8–13°C, rain on most days, no holidays."
  invented: >-
    Mon 10°C rain; Tue 9°C rain; Wed 11°C overcast; Thu 8°C rain; Fri 13°C light rain.
    No holidays. Week label: Mock — cold rainy autumn week (Oct).
  week_label: "Mock — cold rainy autumn week"

pool:
  vege:
    - "Vegan Poutine"
    - "Jerk Chicken (Veggie)"
    - "Veggie Makhani Chicken"
  poisson:
    - "Salmon Pesto Artichoke"
    - "Moqueca (Fish Stew)"
    - "Salmon Crumble"
  soupe:
    - "Mushroom Tarragon Soup"
    - "Korean Soup"
    - "Tom Yum Soup"
    - "Tulum Soup"
    - "Chipotle Lentil Vegetable Soup"
  potage:
    - "Cream of Tomato Soup"
    - "Rutabaga Apple Maple Potage"
    - "Parsnip Pear Pecan Potage"
    - "Cold Mélonccio Soup"
    - "Pho (Veggie)"
  salades:
    - "Kale Mango Cabbage"
    - "Carrot Celeriac Almond Salad"
    - "Beet Apple Tofu Salad"
    - "Bandhu Salad"
    - "Provençal Salad"
    - "Orzo Kale Pesto Salad"
  salade-comp:
    - "Hilairoise Salad"
    - "Veggie Chicken Salad (Veggie)"
    - "Goat Cheese & Cabbage"
    - "Korean Grilled Sweet Potato Salad"
  sandwichs:
    - "Cajun Salmon Sandwich"
    - "Vegan Pulled Oyster Mushroom Sandwich"
  texture:
    - "Falafels"
    - "Veggie Chicken Satay with Almonds"
  hummus:
    - "Dill Hummus"
    - "Parsnip Hummus"
  sauces:
    - "Satay Sauce"
  quiche:
    - "Quiche Forestier"
  pico-de-gallo:
    - "Pico de Gallo"
  mousse:
    - "Chocolate Praline Mousse"

schedule:
  - day: monday
    date:
    dishes:
      - "Vegan Poutine"
      - "Quiche Forestier"
      - "Kale Mango Cabbage"
      - "Dill Hummus"
      - "Pico de Gallo"
      - "Mushroom Tarragon Soup"
      - "Cream of Tomato Soup"
      - "Salmon Pesto Artichoke"
      - "Hilairoise Salad"
      - "Cajun Salmon Sandwich"
    temp_c: 10
    weather: "rain"
    notes: "Monday staple core — Poutine, Quiche, KM, Hummus, Pico all present (per_day_balance, medium). Mushroom Tarragon anchors the warm brothy soupe slot."

  - day: tuesday
    date:
    dishes:
      - "Jerk Chicken (Veggie)"
      - "Moqueca (Fish Stew)"
      - "Korean Soup"
      - "Rutabaga Apple Maple Potage"
      - "Kale Mango Cabbage"
      - "Beet Apple Tofu Salad"
      - "Goat Cheese & Cabbage"
      - "Vegan Pulled Oyster Mushroom Sandwich"
      - "Falafels"
    temp_c: 9
    weather: "rain"
    notes: "Cold and rainy — warm brothy Korean Soup + hearty Rutabaga potage. Jerk Chicken (plant-substitute main) + Moqueca (fish main) satisfies per-day balance rule."

  - day: wednesday
    date:
    dishes:
      - "Veggie Makhani Chicken"
      - "Salmon Crumble"
      - "Tom Yum Soup"
      - "Parsnip Pear Pecan Potage"
      - "Kale Mango Cabbage"
      - "Bandhu Salad"
      - "Korean Grilled Sweet Potato Salad"
      - "Veggie Chicken Satay with Almonds"
      - "Satay Sauce"
      - "Parsnip Hummus"
    temp_c: 11
    weather: "overcast"
    notes: "Overcast midweek. Tom Yum broth + Parsnip Pear Pecan thick potage warm the service. Makhani (Indian) + Tom Yum (Thai) + Bandhu mix cuisines per mixed-cuisine rule."

  - day: thursday
    date:
    dishes:
      - "Vegan Poutine"
      - "Jerk Chicken (Veggie)"
      - "Moqueca (Fish Stew)"
      - "Tulum Soup"
      - "Cream of Tomato Soup"
      - "Kale Mango Cabbage"
      - "Carrot Celeriac Almond Salad"
      - "Provençal Salad"
      - "Veggie Chicken Salad (Veggie)"
      - "Cajun Salmon Sandwich"
    temp_c: 8
    weather: "rain"
    notes: "Coldest day of the week — Tulum warm brothy soup + Cream of Tomato potage. Poutine repeats as staple (all-weeks staple). Mixed cuisines: Caribbean Jerk + French Provençal + Brazilian Moqueca."

  - day: friday
    date:
    dishes:
      - "Salmon Pesto Artichoke"
      - "Veggie Makhani Chicken"
      - "Chipotle Lentil Vegetable Soup"
      - "Pho (Veggie)"
      - "Cold Mélonccio Soup"
      - "Kale Mango Cabbage"
      - "Orzo Kale Pesto Salad"
      - "Hilairoise Salad"
      - "Chocolate Praline Mousse"
      - "Pico de Gallo"
    temp_c: 13
    weather: "light rain"
    notes: >-
      Friday: Cold Mélonccio soup included — honoring chef's stated 'Cold soups for rainy / cold weekend'
      (weather_temp, low, chef-stated 2026-06-15). Chipotle Lentil brothy + Pho thick potage
      keep the week warm. End-of-week treat: Chocolate Praline Mousse.

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
    spice_level: none
    diet: [vegan, dairy-free]

  - name: "Jerk Chicken (Veggie)"
    recipe_id: veggie-jerk-chicken-with-orange-remoulade
    recipe_source: parsley
    tag_source: inferred
    protein: plant-substitute
    temperature: hot
    richness: moderate
    format: plated-main
    cuisine: caribbean
    spice_level: medium
    diet: [vegan, dairy-free]

  - name: "Veggie Makhani Chicken"
    recipe_id: veggie-chicken-makhani
    recipe_source: parsley
    tag_source: inferred
    protein: plant-substitute
    temperature: hot
    richness: rich
    format: plated-main
    cuisine: indian
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

  - name: "Moqueca (Fish Stew)"
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

  - name: "Salmon Crumble"
    recipe_id: salmon-crumble
    recipe_source: parsley
    tag_source: inferred
    protein: fish
    temperature: hot
    richness: moderate
    format: plated-main
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
    protein: vegetable
    temperature: hot
    richness: light
    format: broth
    cuisine: korean
    spice_level: medium
    diet: [vegan, dairy-free, gluten-free]

  - name: "Tom Yum Soup"
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
    diet: [vegan, dairy-free, gluten-free]

  - name: "Rutabaga Apple Maple Potage"
    recipe_id: rutabaga-apple-maple-soup
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: hot
    richness: moderate
    format: soup
    cuisine: french
    spice_level: none
    diet: [vegan, dairy-free, gluten-free]

  - name: "Parsnip Pear Pecan Potage"
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

  - name: "Cold Mélonccio Soup"
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

  - name: "Pho (Veggie)"
    recipe_id: vegan-pho-soup
    recipe_source: parsley
    tag_source: inferred
    protein: plant-substitute
    temperature: hot
    richness: light
    format: broth
    cuisine: vietnamese
    spice_level: mild
    diet: [vegan, dairy-free, gluten-free]

  - name: "Kale Mango Cabbage"
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

  - name: "Carrot Celeriac Almond Salad"
    recipe_id: carrot-celeriac-and-almond-salad
    recipe_source: parsley
    tag_source: inferred
    protein: nut-seed
    temperature: cold
    richness: lean
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
    richness: lean
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
    richness: lean
    format: salad
    cuisine: fusion
    spice_level: mild
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

  - name: "Orzo Kale Pesto Salad"
    recipe_id: orzo-kale-and-pesto-salad
    recipe_source: parsley
    tag_source: inferred
    protein: grain
    temperature: room
    richness: light
    format: salad
    cuisine: italian
    spice_level: none
    diet: [vegetarian]

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

  - name: "Veggie Chicken Salad (Veggie)"
    recipe_id:
    recipe_source: none
    tag_source: inferred
    protein: plant-substitute
    temperature: cold
    richness: light
    format: salad
    cuisine: fusion
    spice_level: none
    diet: [vegan, dairy-free]

  - name: "Goat Cheese & Cabbage"
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

  - name: "Korean Grilled Sweet Potato Salad"
    recipe_id: korean-grilled-sweet-potato-salad
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: room
    richness: light
    format: salad
    cuisine: korean
    spice_level: medium
    diet: [vegan, dairy-free, gluten-free]

  - name: "Cajun Salmon Sandwich"
    recipe_id: cajun-salmon-sandwich
    recipe_source: parsley
    tag_source: inferred
    protein: fish
    temperature: hot
    richness: moderate
    format: handheld
    cuisine: cajun-creole
    spice_level: hot
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

  - name: "Veggie Chicken Satay with Almonds"
    recipe_id: veggie-chicken-satay-with-almonds
    recipe_source: parsley
    tag_source: inferred
    protein: plant-substitute
    temperature: hot
    richness: moderate
    format: skewer
    cuisine: thai
    spice_level: mild
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

  - name: "Parsnip Hummus"
    recipe_id: parsnip-hummus
    recipe_source: parsley
    tag_source: inferred
    protein: legume
    temperature: cold
    richness: light
    format: dip-spread
    cuisine: fusion
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

  - name: "Quiche Forestier"
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
    format: shareable
    cuisine: french
    spice_level: none
    diet: [vegetarian, gluten-free]
---

# Mock — Cold Rainy Autumn Week

> **GENERATED / MOCK** — This is a fictional "what-if" menu, not a real chef menu.
> File: `data/menus/generated/mock-cold-rainy-autumn-week.md`
> Source: generated | Status: mock

---

## Weekly production

### Vege (3)
- Vegan Poutine
- Jerk Chicken (Veggie)
- Veggie Makhani Chicken

### Poisson (3)
- Salmon Pesto Artichoke
- Moqueca (Fish Stew)
- Salmon Crumble

### Soupe (5)
- Mushroom Tarragon Soup
- Korean Soup
- Tom Yum Soup
- Tulum Soup
- Chipotle Lentil Vegetable Soup

### Potage (5)
- Cream of Tomato Soup
- Rutabaga Apple Maple Potage
- Parsnip Pear Pecan Potage
- Cold Mélonccio Soup *(cold — chef-stated for rainy days)*
- Pho (Veggie)

### Salades (6)
- Kale Mango Cabbage *(staple)*
- Carrot Celeriac Almond Salad
- Beet Apple Tofu Salad
- Bandhu Salad
- Provençal Salad
- Orzo Kale Pesto Salad

### Salade-comp (4)
- Hilairoise Salad
- Veggie Chicken Salad (Veggie)
- Goat Cheese & Cabbage
- Korean Grilled Sweet Potato Salad

### Sandwichs (2)
- Cajun Salmon Sandwich
- Vegan Pulled Oyster Mushroom Sandwich

### Texture (2)
- Falafels
- Veggie Chicken Satay with Almonds

### Hummus (2)
- Dill Hummus
- Parsnip Hummus

### Sauces (1)
- Satay Sauce

### Quiche (1)
- Quiche Forestier

### Pico-de-gallo (1)
- Pico de Gallo

### Mousse (1)
- Chocolate Praline Mousse

---

## Weekly schedule

| Day | Temp | Weather | Dishes |
|-----|------|---------|--------|
| Monday | 10°C | Rain | Vegan Poutine · Quiche Forestier · Kale Mango Cabbage · Dill Hummus · Pico de Gallo · Mushroom Tarragon Soup · Cream of Tomato Soup · Salmon Pesto Artichoke · Hilairoise Salad · Cajun Salmon Sandwich |
| Tuesday | 9°C | Rain | Jerk Chicken (Veggie) · Moqueca (Fish Stew) · Korean Soup · Rutabaga Apple Maple Potage · Kale Mango Cabbage · Beet Apple Tofu Salad · Goat Cheese & Cabbage · Vegan Pulled Oyster Mushroom Sandwich · Falafels |
| Wednesday | 11°C | Overcast | Veggie Makhani Chicken · Salmon Crumble · Tom Yum Soup · Parsnip Pear Pecan Potage · Kale Mango Cabbage · Bandhu Salad · Korean Grilled Sweet Potato Salad · Veggie Chicken Satay with Almonds · Satay Sauce · Parsnip Hummus |
| Thursday | 8°C | Rain | Vegan Poutine · Jerk Chicken (Veggie) · Moqueca (Fish Stew) · Tulum Soup · Cream of Tomato Soup · Kale Mango Cabbage · Carrot Celeriac Almond Salad · Provençal Salad · Veggie Chicken Salad (Veggie) · Cajun Salmon Sandwich |
| Friday | 13°C | Light rain | Salmon Pesto Artichoke · Veggie Makhani Chicken · Chipotle Lentil Vegetable Soup · Pho (Veggie) · **Cold Mélonccio Soup** · Kale Mango Cabbage · Orzo Kale Pesto Salad · Hilairoise Salad · Chocolate Praline Mousse · Pico de Gallo |

---

## Why this menu

### Strategy

This is a mock cold, rainy autumn week (8–13°C, rain on most days). The entire PATTERNS.md corpus is 6 consecutive late-spring/early-summer weeks — there is **no autumn data at all**. All seasonal inferences here are extrapolations, not observations, and must be treated as speculative. Within that honest constraint, the weather patterns that do exist in PATTERNS.md are applied in their stated direction: the chef explicitly noted "Cold soups for rainy / cold weekend" (2026-06-15, weather_temp, **low confidence, chef-stated**), which is applied on rainy Friday. The structural skeleton (high confidence, all 6 weeks) is followed faithfully: 5 soupe, 5 potage, 6 salades, 3 vege, 3 poisson, 4 salade-comp, 2 sandwichs, 2 texture, 2 hummus, 1 sauce, 1 quiche, 1 pico, 1 mousse. The five staples anchor every week without exception.

The cold weather is used to favor the warmer/heartier rotating soups (Mushroom Tarragon, Korean, Tom Yum, Tulum, Chipotle Lentil) and autumnal potages (Rutabaga Apple Maple, Parsnip Pear Pecan — both warm, earthy, thick), while Cold Mélonccio is kept in the pool and featured on rainy Friday per the chef's own stated directive. The hot-week leanings toward large salad banks (low confidence, inferred from 2 summer weeks) are **not** applied in reverse here — there is no evidence the chef reduces salads in cold weather; the skeleton count is maintained.

### Per-day notes

**Monday (10°C, rain):** Monday opens with the staple core all present — Poutine, Quiche Forestier, Kale Mango Cabbage, Dill Hummus, Pico de Gallo. Mushroom Tarragon (4/6 rotating, medium) anchors soupe. Cream of Tomato runs as potage. Salmon Pesto Artichoke covers the fish main slot. Hilairoise Salad fills salade-comp. Cajun Salmon Sandwich covers sandwichs. Per-day balance: Poutine (plant-substitute main) + Salmon (fish main); soupe + potage in parallel; multiple cold salads (KM, Hilairoise); mixed cuisines (Québécois/Canadian + French + Cajun).

**Tuesday (9°C, rain):** Coldest rain — Korean Soup (4/6, medium) brings spiced broth warmth; Rutabaga Apple Maple Potage is a hearty, earthy autumn-style thick soup (autumn resonance is improvised — not in the corpus). Jerk Chicken (plant-substitute) + Moqueca (fish) maintain per-day balance. Beet Apple Tofu and Goat Cheese & Cabbage (3/6, medium) bring salad depth. Mixed cuisines: Caribbean + Brazilian + Korean + French.

**Wednesday (11°C, overcast):** Overcast midweek break from hard rain. Tom Yum (3/6, medium) for broth + Parsnip Pear Pecan thick potage (autumn resonance, improvised). Veggie Makhani (Indian) + Salmon Crumble (French) cover mains. Bandhu + Korean Grilled Sweet Potato for salade-comp variety. Satay Sauce dresses the Veggie Chicken Satay texture dish. Wide cuisine spread: Indian + Thai + French + Korean.

**Thursday (8°C, rain — coldest):** Heaviest rain day. Tulum Soup (2/6, low) brings Mexican warmth; Cream of Tomato repeats as potage (2/6, low). Poutine returns as staple across the week. Jerk Chicken + Moqueca maintain plant-substitute + fish balance. Provençal and Carrot Celeriac add French/Mediterranean salad anchors. Veggie Chicken Salad fills salade-comp (recipe_source: none — no standalone recipe found, improvised assignment).

**Friday (13°C, light rain):** Warmest day but still rainy. **Cold Mélonccio is featured directly per the chef's stated intent** "Cold soups for rainy / cold weekend" (2026-06-15, weather_temp, low, chef-stated). This is the primary weather pattern applied in its stated direction. Chipotle Lentil Soup + Pho round out soupe/potage. Chocolate Praline Mousse closes the week (mousse, medium confidence, 5/6 weeks).

### Pattern citations

| Choice | PATTERNS.md dimension | Confidence |
|--------|----------------------|------------|
| Poutine every week | rotation — staple | high |
| Kale Mango Cabbage every service day | rotation — staple | high |
| Pico de Gallo every week | rotation — staple | high |
| Quiche Forestier every week | rotation — staple | high |
| Jerk Chicken (Veggie) every week | rotation — staple | high |
| Monday opens with staple core (Poutine + Quiche + KM + Hummus) | per_day_balance | medium |
| Every service day: ≥1 fish main + ≥1 plant-substitute main | per_day_balance | medium |
| Every service day: multiple cold salads | per_day_balance | high |
| Every service day: soupe + potage in parallel | per_day_balance | medium |
| Mixed cuisines within a day | per_day_balance | medium |
| 5 soupe / 5 potage / 6 salades / 3 vege / 3 poisson / 4 salade-comp / 2 sandwichs / 2 texture / 2 hummus / 1 sauce / 1 quiche / 1 pico / 1 mousse | menu_skeleton | high |
| Mushroom Tarragon Soup on Monday | rotation — rotating | medium |
| Cold Mélonccio on rainy Friday | weather_temp — chef-stated | low |
| Korean Soup on cold/rainy Tuesday | rotation — rotating | medium |
| Tom Yum on Wednesday | rotation — rotating | medium |
| Moqueca twice in the week | rotation — rotating | medium |
| Cream of Tomato as potage | rotation — rotating | low |
| Tulum Soup on cold Thursday | rotation — rotating | low |

### Improvisation / honesty flags

1. **No autumn data in corpus.** PATTERNS.md explicitly warns its window is "late-spring/early-summer only, so seasonal inferences do not generalize to other seasons." This entire menu is a cross-season extrapolation. Everything autumn-specific (Rutabaga Apple Maple Potage, Parsnip Pear Pecan Potage as "autumnal" choices) is **improvised with no chef evidence**.

2. **Cold-soup on rainy days.** The chef-stated "Cold soups for rainy / cold weekend" is applied on Friday. This is the single explicit weather pattern (1/4 weather-noted weeks, low confidence). Applying it to a cold autumn rainy week inverts the temperature association (cold air + cold soup) — the chef may have meant it for a late-summer weekend cool-down, not a 10°C autumn day. This inversion is flagged: **speculative application of a low-confidence pattern**.

3. **"Veggie Chicken Salad (Veggie)"** assigned to salade-comp has no standalone Parsley recipe (only composite dish wrappers: `croissant-with-veggie-chicken-salad`, `vegan-veggie-chicken-salad-sandwich`). Set `recipe_source: none` — the dish is in the rotation (3/6, medium) but cannot be linked to a standalone recipe file.

4. **Mulligatawny and Ribollita** (2/6, low confidence rotating soups) were not found in `data/parsley/recipes-en/` and are therefore excluded from the pool. This reduces the warmth-forward options slightly.

5. **Hot/warm bias toward soups on cold days.** The per-day assignment of warming soups to the coldest days (Tulum on Thursday 8°C, Tom Yum on Wednesday) is improvised logic not explicitly in PATTERNS.md. The chef's corpus shows "no clear day-to-day re-plan beyond the stated cold-soup move" (weather_temp, speculative).

6. **Rutabaga and Parsnip Pear potages** are in Parsley (confirmed: `rutabaga-apple-maple-soup`, `parsnip-pear-pecan-soup`) but not in the rotation pattern (never appeared in the 6-week corpus). Their inclusion is improvisation based on autumn ingredient resonance and pool-filling need for 5 potage slots.

7. **All tag values** are `tag_source: inferred` — no recipe in this pool has been formally tagged by the recipes-tag skill. Protein, temperature, richness, format, cuisine, and spice_level values are all inferred from dish names and known Parsley ingredients.
