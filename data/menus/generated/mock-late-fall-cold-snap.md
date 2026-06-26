---
# ============================================================
# MOCK MENU — machine-generated artifact. NOT a real chef menu.
# source: generated | status: mock — NEVER change these.
# ============================================================
id: mock-late-fall-cold-snap
source: generated
status: mock
generated: 2026-06-25
patterns_generated: 2026-06-25
scenario:
  given: "The first cold snap of late fall — 2–6°C, with a snowy day on Friday, no holidays."
  invented: >-
    Mon 5°C overcast; Tue 4°C light rain; Wed 6°C grey/overcast; Thu 3°C cold wind;
    Fri 2°C heavy snow. No holidays; all five days open.
  week_label: "Mock — late-fall cold snap (2–6°C, snowy Friday)"

pool:
  vege:
    - "Vegan Poutine (Medium)"
    - "Veggie Jerk Chicken with Orange Rémoulade"
    - "Veggie Paella"
  poisson:
    - "Moqueca"
    - "Salmon Pesto Artichoke"
    - "Haddock Curry with Mango and Coconut"
  soupe:
    - "Mushroom Tarragon Soup"
    - "Korean Soup"
    - "Vegan Pho Soup"
    - "Tulum Soup"
    - "Green Tom Yum Soup"
  potage:
    - "Cream of Tomato Soup"
    - "Parsnip Pear Pecan Soup"
    - "Rutabaga Apple Maple Soup"
    - "Fisherman's Chowder"
    - "Lentil Stew"
  salades:
    - "Kale Mango Cabbage Salad"
    - "Carrot Celeriac and Almond Salad"
    - "Beet Apple Tofu Salad"
    - "Provençal Salad"
    - "Bandhu Salad"
    - "Black-Eyed Pea Salad"
  salade-comp:
    - "Hilairoise Salad"
    - "Goat Cheese and Cabbage"
    - "Falafels, Tabbouleh, Pickled Turnip, Tzatziki"
    - "Vegan Veggie Chicken Salad Sandwich (plated)"
  sandwichs:
    - "Salmon Pesto Artichoke Sandwich"
    - "Satay Veggie Chicken Banh Mi Sandwich"
  texture:
    - "Ban-Oufti"
    - "Ban-Oufti Rainbow"
  hummus:
    - "Dill Hummus"
    - "Parsnip Hummus"
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
      - "Mushroom Tarragon Soup"
      - "Cream of Tomato Soup"
      - "Moqueca"
      - "Hilairoise Salad"
      - "Ban-Oufti"
    temp_c: 5
    weather: "overcast"
    notes: "Monday staple core — Poutine, quiche, KM, hummus, Pico all on the line. Soups pushed early given cold snap."

  - day: tuesday
    date:
    dishes:
      - "Veggie Jerk Chicken with Orange Rémoulade"
      - "Salmon Pesto Artichoke"
      - "Kale Mango Cabbage Salad"
      - "Carrot Celeriac and Almond Salad"
      - "Parsnip Hummus"
      - "Korean Soup"
      - "Parsnip Pear Pecan Soup"
      - "Goat Cheese and Cabbage"
      - "Salmon Pesto Artichoke Sandwich"
      - "Pico de Gallo"
    temp_c: 4
    weather: "light rain"
    notes: "Light rain — brothy Korean soup + root-vegetable potage. Caribbean jerk provides warmth contrast."

  - day: wednesday
    date:
    dishes:
      - "Veggie Paella"
      - "Haddock Curry with Mango and Coconut"
      - "Kale Mango Cabbage Salad"
      - "Beet Apple Tofu Salad"
      - "Provençal Salad"
      - "Vegan Pho Soup"
      - "Rutabaga Apple Maple Soup"
      - "Falafels, Tabbouleh, Pickled Turnip, Tzatziki"
      - "Satay Veggie Chicken Banh Mi Sandwich"
      - "Satay Sauce"
    temp_c: 6
    weather: "grey/overcast"
    notes: "Mid-week variety push — Spanish paella, Indian-style haddock curry, and Mediterranean falafels keep cuisine spread broad."

  - day: thursday
    date:
    dishes:
      - "Vegan Poutine (Medium)"
      - "Salmon Pesto Artichoke"
      - "Kale Mango Cabbage Salad"
      - "Bandhu Salad"
      - "Black-Eyed Pea Salad"
      - "Tulum Soup"
      - "Fisherman's Chowder"
      - "Goat Cheese and Cabbage"
      - "Dill Hummus"
      - "Ban-Oufti Rainbow"
    temp_c: 3
    weather: "cold wind"
    notes: "Cold wind — hearty chowder + Tulum broth. Poutine returns mid-week per chef pattern; fisherman's chowder especially apt."

  - day: friday
    date:
    dishes:
      - "Veggie Jerk Chicken with Orange Rémoulade"
      - "Moqueca"
      - "Kale Mango Cabbage Salad"
      - "Carrot Celeriac and Almond Salad"
      - "Provençal Salad"
      - "Green Tom Yum Soup"
      - "Lentil Stew"
      - "Hilairoise Salad"
      - "Vegan Veggie Chicken Salad Sandwich (plated)"
      - "Chocolate Praline Mousse"
    temp_c: 2
    weather: "heavy snow"
    notes: >-
      SNOWY FRIDAY — coldest day of the week. Per chef-stated pattern
      'Cold soups for rainy/cold weekend' (2026-06-15), that directive
      applies to cold/wet conditions. However, at 2°C with snow, serving
      cold soups is a stretch — this menu instead DOUBLES DOWN on hot brothy
      soups (Tom Yum + Lentil Stew) and keeps the cold soup (Mélonccio) OUT.
      This is an extrapolation flagged below: the chef's stated trigger was
      a rainy +18°C evening, not a 2°C blizzard. Mousse added as Friday
      indulgence close-out.

dishes:
  - name: "Vegan Poutine (Medium)"
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

  - name: "Veggie Jerk Chicken with Orange Rémoulade"
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

  - name: "Veggie Paella"
    recipe_id: veggie-paella
    recipe_source: parsley
    tag_source: inferred
    protein: plant-substitute
    temperature: hot
    richness: moderate
    format: plated-main
    cuisine: spanish
    spice_level: mild
    diet: [vegan, dairy-free, gluten-free]

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
    diet: [pescatarian, dairy-free, gluten-free]

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
    diet: [pescatarian, gluten-free, dairy-free]

  - name: "Haddock Curry with Mango and Coconut"
    recipe_id: haddock-curry-with-mango-and-coconut
    recipe_source: parsley
    tag_source: inferred
    protein: fish
    temperature: hot
    richness: rich
    format: curry
    cuisine: indian
    spice_level: medium
    diet: [pescatarian, dairy-free, gluten-free]

  - name: "Mushroom Tarragon Soup"
    recipe_id: mushroom-tarragon-soup
    recipe_source: parsley
    tag_source: inferred
    protein: mushroom
    temperature: hot
    richness: moderate
    format: broth
    cuisine: french
    spice_level: none
    diet: [vegan, dairy-free, gluten-free]

  - name: "Korean Soup"
    recipe_id: korean-soup
    recipe_source: parsley
    tag_source: inferred
    protein: plant-substitute
    temperature: hot
    richness: light
    format: broth
    cuisine: korean
    spice_level: medium
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
    diet: [vegan, dairy-free, gluten-free]

  - name: "Tulum Soup"
    recipe_id: tulum-soup
    recipe_source: parsley
    tag_source: inferred
    protein: legume
    temperature: hot
    richness: light
    format: broth
    cuisine: mexican
    spice_level: medium
    diet: [vegan, dairy-free, gluten-free]

  - name: "Green Tom Yum Soup"
    recipe_id: green-tom-yum-soup
    recipe_source: parsley
    tag_source: inferred
    protein: plant-substitute
    temperature: hot
    richness: light
    format: broth
    cuisine: thai
    spice_level: hot
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

  - name: "Rutabaga Apple Maple Soup"
    recipe_id: rutabaga-apple-maple-soup
    recipe_source: parsley
    tag_source: inferred
    protein: vegetable
    temperature: hot
    richness: moderate
    format: soup
    cuisine: canadian
    spice_level: none
    diet: [vegan, dairy-free, gluten-free]

  - name: "Fisherman's Chowder"
    recipe_id: fishermans-chowder
    recipe_source: parsley
    tag_source: inferred
    protein: fish
    temperature: hot
    richness: rich
    format: soup
    cuisine: american
    spice_level: mild
    diet: [pescatarian]

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
    diet: [vegan, dairy-free, gluten-free]

  - name: "Bandhu Salad"
    recipe_id: bandhu-salad
    recipe_source: parsley
    tag_source: inferred
    protein: legume
    temperature: cold
    richness: lean
    format: salad
    cuisine: south-asian
    spice_level: mild
    diet: [vegan, dairy-free, gluten-free]

  - name: "Black-Eyed Pea Salad"
    recipe_id: black-eyed-pea-salad
    recipe_source: parsley
    tag_source: inferred
    protein: legume
    temperature: cold
    richness: lean
    format: salad
    cuisine: southern-us
    spice_level: mild
    diet: [vegan, dairy-free, gluten-free]

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
    diet: [pescatarian]

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

  - name: "Falafels, Tabbouleh, Pickled Turnip, Tzatziki"
    recipe_id: falafels-tabbouleh-pickled-turnip-tzatziki
    recipe_source: parsley
    tag_source: inferred
    protein: legume
    temperature: room
    richness: moderate
    format: shareable
    cuisine: middle-eastern
    spice_level: mild
    diet: [vegetarian]

  - name: "Vegan Veggie Chicken Salad Sandwich (plated)"
    recipe_id: vegan-veggie-chicken-salad-sandwich
    recipe_source: parsley
    tag_source: inferred
    protein: plant-substitute
    temperature: cold
    richness: moderate
    format: plated-main
    cuisine: fusion
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
    cuisine: french
    spice_level: none
    diet: [pescatarian]

  - name: "Satay Veggie Chicken Banh Mi Sandwich"
    recipe_id: satay-veggie-chicken-banh-mi-sandwich
    recipe_source: parsley
    tag_source: inferred
    protein: plant-substitute
    temperature: room
    richness: moderate
    format: handheld
    cuisine: vietnamese
    spice_level: medium
    diet: [vegan, dairy-free]

  - name: "Ban-Oufti"
    recipe_id: ban-oufti
    recipe_source: parsley
    tag_source: inferred
    protein: plant-substitute
    temperature: cold
    richness: moderate
    format: shareable
    cuisine: fusion
    spice_level: mild
    diet: [vegan, dairy-free]

  - name: "Ban-Oufti Rainbow"
    recipe_id: ban-oufti-rainbow
    recipe_source: parsley
    tag_source: inferred
    protein: plant-substitute
    temperature: cold
    richness: moderate
    format: shareable
    cuisine: fusion
    spice_level: mild
    diet: [vegan, dairy-free]

  - name: "Dill Hummus"
    recipe_id: dill-hummus
    recipe_source: parsley
    tag_source: inferred
    protein: legume
    temperature: cold
    richness: lean
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
    richness: lean
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
    spice_level: medium
    diet: [vegan, dairy-free, gluten-free]

  - name: "Forestière Quiche"
    recipe_id: forestiere-quiche
    recipe_source: parsley
    tag_source: inferred
    protein: mushroom
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
    spice_level: medium
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

# Mock — Late-Fall Cold Snap (2–6°C, Snowy Friday)

> **MOCK FILE — generated artifact, not a real menu.**
> `source: generated` / `status: mock`

## Weekly production

### Vege (mains, plant-substitute)
- Vegan Poutine (Medium)
- Veggie Jerk Chicken with Orange Rémoulade
- Veggie Paella

### Poisson (fish mains)
- Moqueca
- Salmon Pesto Artichoke
- Haddock Curry with Mango and Coconut

### Soupe (brothy soups)
- Mushroom Tarragon Soup
- Korean Soup
- Vegan Pho Soup
- Tulum Soup
- Green Tom Yum Soup

### Potage (thick soups)
- Cream of Tomato Soup
- Parsnip Pear Pecan Soup
- Rutabaga Apple Maple Soup
- Fisherman's Chowder
- Lentil Stew

### Salades (cold salads)
- Kale Mango Cabbage Salad
- Carrot Celeriac and Almond Salad
- Beet Apple Tofu Salad
- Provençal Salad
- Bandhu Salad
- Black-Eyed Pea Salad

### Salade-comp (composed salads / plates)
- Hilairoise Salad
- Goat Cheese and Cabbage
- Falafels, Tabbouleh, Pickled Turnip, Tzatziki
- Vegan Veggie Chicken Salad Sandwich (plated)

### Sandwichs
- Salmon Pesto Artichoke Sandwich
- Satay Veggie Chicken Banh Mi Sandwich

### Texture
- Ban-Oufti
- Ban-Oufti Rainbow

### Hummus
- Dill Hummus
- Parsnip Hummus

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
| **Monday** | 5°C | Overcast | Vegan Poutine · Forestière Quiche · Kale Mango Cabbage Salad · Dill Hummus · Pico de Gallo · Mushroom Tarragon Soup · Cream of Tomato Soup · Moqueca · Hilairoise Salad · Ban-Oufti |
| **Tuesday** | 4°C | Light rain | Veggie Jerk Chicken with Orange Rémoulade · Salmon Pesto Artichoke · Kale Mango Cabbage Salad · Carrot Celeriac and Almond Salad · Parsnip Hummus · Korean Soup · Parsnip Pear Pecan Soup · Goat Cheese and Cabbage · Salmon Pesto Artichoke Sandwich · Pico de Gallo |
| **Wednesday** | 6°C | Grey/overcast | Veggie Paella · Haddock Curry with Mango and Coconut · Kale Mango Cabbage Salad · Beet Apple Tofu Salad · Provençal Salad · Vegan Pho Soup · Rutabaga Apple Maple Soup · Falafels, Tabbouleh, Pickled Turnip, Tzatziki · Satay Veggie Chicken Banh Mi Sandwich · Satay Sauce |
| **Thursday** | 3°C | Cold wind | Vegan Poutine · Salmon Pesto Artichoke · Kale Mango Cabbage Salad · Bandhu Salad · Black-Eyed Pea Salad · Tulum Soup · Fisherman's Chowder · Goat Cheese and Cabbage · Dill Hummus · Ban-Oufti Rainbow |
| **Friday** | 2°C | Heavy snow | Veggie Jerk Chicken with Orange Rémoulade · Moqueca · Kale Mango Cabbage Salad · Carrot Celeriac and Almond Salad · Provençal Salad · Green Tom Yum Soup · Lentil Stew · Hilairoise Salad · Vegan Veggie Chicken Salad Sandwich (plated) · Chocolate Praline Mousse |

---

## Why this menu

### 1. Strategy

The scenario is a late-fall cold snap — 2–6°C all week, peaking with heavy snow on Friday, no holidays. The governing move is to lean fully into the soup-heavy register. PATTERNS.md records "cool/rainy days drive cold soups onto the menu" as a *chef-stated* directive (2026-06-15, confidence: low; the only such signal in the sample), but the structural skeleton evidence is stronger: 5 brothy soups + 5 thick soups every week regardless of weather (confidence: high). In cold conditions, this daily soup volume feels if anything conservative — a snowy week is a natural candidate to amplify both categories. The salad bank stays because the chef runs cold salads every day regardless of temperature (per_day_balance: high confidence); that pattern holds even here, though the full salad count (6 salades) is at median rather than the warm-week maximum of 8. The five staples — Poutine, KM salad, Pico de Gallo, Forestière Quiche, Veggie Jerk — are present every week in the sample (rotation staples, confidence: high) and anchor the pool.

**Extrapolation caveat.** PATTERNS.md covers only 6 late-spring/early-summer weeks (May 11 – June 15 2026). A 2–6°C November week is entirely outside the observed range. Every cold-weather inference below is an extrapolation, not a confirmed chef pattern.

---

### 2. Per-day notes

**Monday (5°C, overcast):** Opens with the full staple core — Poutine, Quiche, KM, Dill Hummus, Pico de Gallo — per the Monday staple-opening pattern (per_day_balance, confidence: medium; 4/6 weeks). Mushroom Tarragon Soup (medium confidence, 4/6 weeks) is the flagship brothy soup. Cream of Tomato potage is warming and approachable for the first cold day. Moqueca (fish stew) covers the fish/pescatarian main requirement. Hilairoise (salmon-based composed salad) provides the composed-salad slot. Ban-Oufti adds texture variety.

**Tuesday (4°C, light rain):** Rain triggers the soup emphasis. Korean Soup (medium confidence, 4/6 weeks) is the brothy option; Parsnip Pear Pecan Soup is a seasonal root-vegetable potage well-suited to late fall. Veggie Jerk provides spice warmth; Salmon Pesto delivers the fish main. Goat Cheese & Cabbage (medium confidence, 3/6 weeks) fills the composed slot. Carrot Celeriac salad is the most "fall" of the repertoire salads. Salmon Pesto Artichoke Sandwich covers the sandwich requirement.

**Wednesday (6°C, grey):** The warmest day of the week, still cold. Mid-week pushes for cuisine breadth: Spanish paella (veggie), Indian haddock curry, Vietnamese pho, and Middle-Eastern falafels on one line — consistent with the "broad and mixed cuisine" per_day_balance rule (medium confidence, 5/6 weeks). Rutabaga Apple Maple Soup is a distinctly autumnal Quebec potage. Satay Sauce paired with the Banh Mi Sandwich; Beet Apple Tofu and Provençal round the salad bank.

**Thursday (3°C, cold wind):** Dropping temperature. Poutine returns mid-week (it appeared on Monday; the rotation is rich enough to carry it twice in a cold week — improvisation, no governing pattern for within-week Poutine frequency). Tulum Soup (low confidence, 2/6 weeks) and Fisherman's Chowder make Thursday the most hearty soup day before the snowy Friday close. Black-Eyed Pea Salad and Bandhu Salad add legume variety to the cold bank. Ban-Oufti Rainbow provides visual contrast in the texture slot.

**Friday (2°C, heavy snow):** The coldest and snowiest day. The chef's stated intent "Cold soups for rainy/cold weekend" (2026-06-15) is the one direct weather-pattern signal. However, that directive referenced a +18–19°C rainy afternoon — not a 2°C blizzard. Serving cold Mélonccio soup at 2°C in a snowstorm was judged counterintuitive; this menu instead doubles down on hot brothy options (Green Tom Yum, Lentil Stew). This is an **intentional inversion of the chef-stated cold-soup pattern**, flagged explicitly as an improvisation below. Moqueca (Brazilian fish stew) provides the hearty fish main. Chocolate Praline Mousse is a Friday close-out indulgence (mousse present 5/6 weeks, medium confidence).

---

### 3. Pattern citations

| Choice | PATTERNS dimension | Confidence |
|--------|-------------------|------------|
| Poutine, Quiche, KM, Pico de Gallo on Monday | per_day_balance: Monday staple core | medium |
| Poutine, KM, Pico de Gallo every week | rotation: staples | high |
| Veggie Jerk Chicken every week | rotation: staple | high |
| Forestière Quiche every week | rotation: staple | high |
| 5 brothy soups in the pool | menu_skeleton: soupe | high |
| 5 thick soups / potages in the pool | menu_skeleton: potage | high |
| 6 salades in pool | menu_skeleton: salades (median) | high |
| 3 vege mains | menu_skeleton: vege | high |
| 3 poisson mains | menu_skeleton: poisson | high |
| 4 salade-comp | menu_skeleton: salade-comp (median) | high |
| 2 sandwichs | menu_skeleton: sandwichs | high |
| 2 texture items | menu_skeleton: texture | high |
| 2 hummus | menu_skeleton: hummus | high |
| 1 sauce | menu_skeleton: sauces | high |
| 1 quiche | menu_skeleton: quiche | high |
| 1 pico-de-gallo | menu_skeleton: pico-de-gallo | high |
| 1 mousse | menu_skeleton: mousse | medium |
| Fish/pescatarian main + plant-substitute main every day | per_day_balance | medium |
| Multiple cold salads every day | per_day_balance | high |
| Both soupe + potage parallel daily | per_day_balance | medium |
| Mixed cuisine spread within a day | per_day_balance | medium |
| Mushroom Tarragon Soup in pool | rotation: rotating soup | medium |
| Korean Soup in pool | rotation: rotating soup | medium |
| Pho in pool | rotation: rotating soup | medium |
| Moqueca in pool | rotation: fish stew | medium |
| Goat Cheese & Cabbage in pool | rotation: rotating | medium |
| Hilairoise Salad in pool | rotation: rotating | low |
| Cream of Tomato Soup in pool | rotation: rotating | low |
| Tulum Soup in pool | rotation: rotating | low |
| Carrot Celeriac Salad in pool | rotation: rotating | low |
| Bandhu Salad in pool | rotation: rotating | low |
| Beet Apple Tofu Salad in pool | rotation: rotating | low |
| Tabbouleh/Falafels in pool | rotation: rotating | low |
| Soup-forward emphasis on cold/rainy days | weather_temp: cool/rainy → push soups | low (stated) |

---

### 4. Improvisation and honesty flags

**FLAG 1 — Deep-cold season is fully outside the data window.**
All 6 analyzed weeks are late spring / early summer (May–June 2026, 18–31°C). A 2–6°C late-fall week is a complete extrapolation. The cold-soup and salad-lean patterns documented in PATTERNS.md are observed at +18–31°C. Their behavior at 2–6°C is unknown. Every weather-shaped choice in this mock is a hypothesis, not a chef pattern.

**FLAG 2 — Cold-soup pattern inverted on Friday.**
The chef-stated directive "Cold soups for rainy/cold weekend" (2026-06-15) was observed at +18–19°C rain, not at freezing temperatures. This menu does NOT place cold soup (Mélonccio) on the snowy Friday; instead it uses two hot brothy soups. That inverts the stated direction and is therefore an explicit improvisation. If the chef's intent was precisely to serve cold soup even in cold weather (as a deliberate menu contrast), this menu is wrong on Friday. Mark as speculative.

**FLAG 3 — Mulligatawny and Ribollita absent.**
Both are low-confidence rotating soups in the sample (2/6 weeks each). They have no matching recipe file in `data/parsley/recipes-en/` (confirmed by directory listing), so they were excluded. `recipe_source: none` would have been required; they were dropped in favour of verified Parsley IDs.

**FLAG 4 — Parsnip Pear Pecan Soup and Rutabaga Apple Maple Soup are repertoire picks, not rotation patterns.**
These two potages appear in Parsley but not in PATTERNS.md rotation (neither was observed in the 6 sampled weeks). They were chosen as seasonally appropriate late-fall potages (root vegetables, earthy-sweet). This is an improvisation guided by ingredient seasonality inference, not a chef pattern.

**FLAG 5 — All dish tags are `tag_source: inferred`.**
No dish in this mock has a linked, chef-verified tag from a tagged recipe file. All protein/temperature/richness/format values are inferred from recipe names and typical dish types. They may not match the actual Parsley recipe content.

**FLAG 6 — "Vegan Veggie Chicken Salad Sandwich (plated)" used as salade-comp.**
The source recipe `vegan-veggie-chicken-salad-sandwich` is a sandwich, not a composed salad plate. It was placed in the `salade-comp` slot as a plated variant consistent with how similar dishes appear in menus (e.g. the chef notes Hilairoise test "with salmon cake"), but this re-categorisation is an improvisation. The canonical pool entry for this dish might be `sandwichs`, not `salade-comp`.

**FLAG 7 — Poutine appears twice in the schedule (Monday and Thursday).**
The rotation pattern only confirms Poutine appears every week; within-week frequency is not governed by any PATTERNS.md rule. Appearing twice in a cold week is plausible (comfort food) but is an unconfirmed inference.
