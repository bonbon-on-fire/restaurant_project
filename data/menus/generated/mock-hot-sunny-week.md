---
id: mock-hot-sunny-week
source: generated
status: mock
generated: 2026-06-25
patterns_generated: 2026-06-25
scenario:
  given: "hot sunny week (high-20s to low-30s °C), and Tuesday is a statutory holiday (closed)"
  invented: "Mon 28° sunny; Tue CLOSED statutory holiday; Wed 30° sunny; Thu 27° partly cloudy; Fri 31° sunny"
  week_label: "Mock — hot sunny week, Tuesday holiday"

pool:
  vege:
    - "Poutine (vegan)"
    - "Jerk chicken (veggie)"
    - "Paella (veggie)"
  poisson:
    - "Salmon pesto"
    - "Moqueca"
    - "Salmon Cajun sandwich"
  soupe:
    - "Korean soup"
    - "Tom Yum"
    - "Mushroom tarragon"
    - "Pho"
    - "Soupe Mole Verde"
  potage:
    - "Potage Froid Mélonccio"
    - "Potage Crème de tomates"
    - "Tulum"
    - "Cream of broccoli"
    - "Chili d'Orge"
  salades:
    - "Kale mango cabbage (KM)"
    - "Salade Betterave Pommes Tofu"
    - "Carrot celeriac"
    - "Tabbouleh"
    - "Salade Chou poivrons à la menthe"
    - "Salade Provençal"
  salade-comp:
    - "Salade Hilairoise"
    - "Salade Bandhu"
    - "Chicken salad (veggie)"
    - "Poké bol au poulet végé sauce coréenne"
  sandwichs:
    - "Sandwich Saumon Pesto Artichaut"
    - "Sandwich Poulet végé Tropical"
  texture:
    - "Falafels"
    - "Croquettes de Courgette Patate Épinards"
  hummus:
    - "Hummus à l'aneth"
    - "Hummus Verts lime"
  sauces:
    - "Pico de Gallo"
  quiche:
    - "Quiche Forestier"
  pico-de-gallo:
    - "Pico de Gallo"
  mousse:
    - "Mousse Choco Praliné"

schedule:
  - day: monday
    date:
    dishes:
      - "Poutine (vegan)"
      - "Quiche Forestier"
      - "Kale mango cabbage (KM)"
      - "Hummus à l'aneth"
      - "Korean soup"
      - "Potage Froid Mélonccio"
      - "Salmon pesto"
      - "Salade Betterave Pommes Tofu"
      - "Pico de Gallo"
      - "Falafels"
    temp_c: 28
    weather: "sunny"
    notes: "Staple core opening day — Poutine + Quiche + KM + Hummus anchoring the line"

  - day: tuesday
    date:
    dishes: []
    temp_c:
    weather:
    notes: "Closed — statutory holiday"

  - day: wednesday
    date:
    dishes:
      - "Jerk chicken (veggie)"
      - "Paella (veggie)"
      - "Kale mango cabbage (KM)"
      - "Tom Yum"
      - "Potage Crème de tomates"
      - "Moqueca"
      - "Salade Hilairoise"
      - "Tabbouleh"
      - "Carrot celeriac"
      - "Hummus Verts lime"
      - "Sandwich Saumon Pesto Artichaut"
      - "Croquettes de Courgette Patate Épinards"
    temp_c: 30
    weather: "sunny"
    notes: "Hottest day — cold potage, expanded salad/sandwich lean; Jerk + Moqueca cover plant + fish bases"

  - day: thursday
    date:
    dishes:
      - "Poutine (vegan)"
      - "Chicken salad (veggie)"
      - "Kale mango cabbage (KM)"
      - "Mushroom tarragon"
      - "Tulum"
      - "Salmon Cajun sandwich"
      - "Salade Bandhu"
      - "Salade Chou poivrons à la menthe"
      - "Salade Provençal"
      - "Sandwich Poulet végé Tropical"
      - "Mousse Choco Praliné"
    temp_c: 27
    weather: "partly cloudy"
    notes: "Mid-week service; rotating soups Mushroom tarragon + Tulum; broad cuisine mix (Caribbean via Jerk + French via Tulum + Fusion)"

  - day: friday
    date:
    dishes:
      - "Jerk chicken (veggie)"
      - "Paella (veggie)"
      - "Kale mango cabbage (KM)"
      - "Pho"
      - "Soupe Mole Verde"
      - "Potage Froid Mélonccio"
      - "Chili d'Orge"
      - "Salmon pesto"
      - "Poké bol au poulet végé sauce coréenne"
      - "Salade Betterave Pommes Tofu"
      - "Tabbouleh"
      - "Pico de Gallo"
    temp_c: 31
    weather: "sunny"
    notes: "Hottest day of week — double cold potage (Mélonccio repeated per hot-week pattern); poke bowls for light lunch crowd"

dishes:
  - name: "Poutine (vegan)"
    recipe_id: "poutine-vegane-medium"
    recipe_source: parsley
    tag_source: inferred
    protein: plant-based
    temperature: hot
    richness: moderate
    format: plated-main
    cuisine: québécois
    spice_level: mild
    diet: [vegan, gluten-free]

  - name: "Jerk chicken (veggie)"
    recipe_id: "tofu-jerk-a-la-noix-de-coco"
    recipe_source: parsley
    tag_source: inferred
    protein: plant-based
    temperature: hot
    richness: moderate
    format: plated-main
    cuisine: caribbean
    spice_level: hot
    diet: [vegan, gluten-free]

  - name: "Paella (veggie)"
    recipe_id: "paella-vege"
    recipe_source: parsley
    tag_source: inferred
    protein: plant-based
    temperature: hot
    richness: moderate
    format: plated-main
    cuisine: spanish
    spice_level: mild
    diet: [vegan]

  - name: "Salmon pesto"
    recipe_id: "saumon-au-pesto-poivrons-rotis"
    recipe_source: parsley
    tag_source: inferred
    protein: fish
    temperature: warm
    richness: moderate
    format: plated-main
    cuisine: french-mediterranean
    spice_level: mild
    diet: [pescatarian, gluten-free]

  - name: "Moqueca"
    recipe_id: "moqueca"
    recipe_source: parsley
    tag_source: inferred
    protein: fish
    temperature: hot
    richness: rich
    format: stew
    cuisine: brazilian
    spice_level: medium
    diet: [pescatarian, gluten-free, dairy-free]

  - name: "Salmon Cajun sandwich"
    recipe_id: "sandwich-saumon-cajun"
    recipe_source: parsley
    tag_source: inferred
    protein: fish
    temperature: warm
    richness: moderate
    format: handheld
    cuisine: cajun
    spice_level: medium
    diet: [pescatarian]

  - name: "Korean soup"
    recipe_id: "soupe-coreenne"
    recipe_source: parsley
    tag_source: inferred
    protein: plant-based
    temperature: hot
    richness: light
    format: broth
    cuisine: korean
    spice_level: medium
    diet: [vegan, gluten-free]

  - name: "Tom Yum"
    recipe_id: "soupe-tom-mium-vert"
    recipe_source: parsley
    tag_source: inferred
    protein: plant-based
    temperature: hot
    richness: light
    format: broth
    cuisine: thai
    spice_level: hot
    diet: [vegan, gluten-free]

  - name: "Mushroom tarragon"
    recipe_id: "soupe-champignon-estragon"
    recipe_source: parsley
    tag_source: inferred
    protein: plant-based
    temperature: hot
    richness: light
    format: broth
    cuisine: french
    spice_level: none
    diet: [vegan, gluten-free]

  - name: "Pho"
    recipe_id: "soup-pho-vegane"
    recipe_source: parsley
    tag_source: inferred
    protein: plant-based
    temperature: hot
    richness: light
    format: broth
    cuisine: vietnamese
    spice_level: mild
    diet: [vegan, gluten-free]

  - name: "Soupe Mole Verde"
    recipe_id: "soupe-mole-verde"
    recipe_source: parsley
    tag_source: inferred
    protein: plant-based
    temperature: hot
    richness: moderate
    format: soup
    cuisine: mexican
    spice_level: medium
    diet: [vegan, gluten-free]

  - name: "Potage Froid Mélonccio"
    recipe_id: "potage-froid-melonccio"
    recipe_source: parsley
    tag_source: inferred
    protein: none
    temperature: cold
    richness: lean
    format: soup
    cuisine: french-mediterranean
    spice_level: none
    diet: [vegan, gluten-free, dairy-free]

  - name: "Potage Crème de tomates"
    recipe_id: "potage-creme-de-tomates"
    recipe_source: parsley
    tag_source: inferred
    protein: none
    temperature: hot
    richness: light
    format: soup
    cuisine: french
    spice_level: none
    diet: [vegan, gluten-free]

  - name: "Tulum"
    recipe_id: "soupe-tulum"
    recipe_source: parsley
    tag_source: inferred
    protein: plant-based
    temperature: hot
    richness: moderate
    format: soup
    cuisine: mexican-fusion
    spice_level: medium
    diet: [vegan, gluten-free]

  - name: "Cream of broccoli"
    recipe_id:
    recipe_source: none
    tag_source: inferred
    protein: plant-based
    temperature: hot
    richness: light
    format: soup
    cuisine: french
    spice_level: none
    diet: [vegan, gluten-free]

  - name: "Chili d'Orge"
    recipe_id: "chili-d-orge"
    recipe_source: parsley
    tag_source: inferred
    protein: plant-based
    temperature: hot
    richness: moderate
    format: stew
    cuisine: fusion
    spice_level: medium
    diet: [vegan]

  - name: "Kale mango cabbage (KM)"
    recipe_id: "salade-kale-mangue-chou"
    recipe_source: parsley
    tag_source: inferred
    protein: none
    temperature: cold
    richness: lean
    format: salad
    cuisine: fusion
    spice_level: none
    diet: [vegan, gluten-free, dairy-free]

  - name: "Salade Betterave Pommes Tofu"
    recipe_id: "salade-betterave-pommes-tofu"
    recipe_source: parsley
    tag_source: inferred
    protein: tofu
    temperature: cold
    richness: lean
    format: salad
    cuisine: french-fusion
    spice_level: none
    diet: [vegan, gluten-free, dairy-free]

  - name: "Carrot celeriac"
    recipe_id: "salade-de-carottes-celeri-rave-amandes"
    recipe_source: parsley
    tag_source: inferred
    protein: none
    temperature: cold
    richness: lean
    format: salad
    cuisine: french
    spice_level: none
    diet: [vegan, gluten-free, dairy-free]

  - name: "Tabbouleh"
    recipe_id: "salade-tabole-de-manioc"
    recipe_source: parsley
    tag_source: inferred
    protein: none
    temperature: cold
    richness: lean
    format: salad
    cuisine: middle-eastern
    spice_level: none
    diet: [vegan, gluten-free, dairy-free]

  - name: "Salade Chou poivrons à la menthe"
    recipe_id: "salade-chou-poivrons-a-la-menthe"
    recipe_source: parsley
    tag_source: inferred
    protein: none
    temperature: cold
    richness: lean
    format: salad
    cuisine: fusion
    spice_level: none
    diet: [vegan, gluten-free, dairy-free]

  - name: "Salade Provençal"
    recipe_id: "salade-provencal"
    recipe_source: parsley
    tag_source: inferred
    protein: none
    temperature: cold
    richness: lean
    format: salad
    cuisine: french-provençal
    spice_level: none
    diet: [vegan, gluten-free, dairy-free]

  - name: "Salade Hilairoise"
    recipe_id: "salade-hilairoise"
    recipe_source: parsley
    tag_source: inferred
    protein: fish
    temperature: cold
    richness: lean
    format: salad
    cuisine: french-québécois
    spice_level: none
    diet: [pescatarian, gluten-free]

  - name: "Salade Bandhu"
    recipe_id: "salade-bandhu"
    recipe_source: parsley
    tag_source: inferred
    protein: plant-based
    temperature: cold
    richness: lean
    format: salad
    cuisine: south-asian-fusion
    spice_level: mild
    diet: [vegan, gluten-free, dairy-free]

  - name: "Chicken salad (veggie)"
    recipe_id: "croissant-aux-salade-de-poulet-vege"
    recipe_source: parsley
    tag_source: inferred
    protein: plant-based
    temperature: cold
    richness: light
    format: salad
    cuisine: québécois
    spice_level: none
    diet: [vegetarian]

  - name: "Poké bol au poulet végé sauce coréenne"
    recipe_id: "poke-bol-au-poulet-vege-sauce-coreenne"
    recipe_source: parsley
    tag_source: inferred
    protein: plant-based
    temperature: cold
    richness: moderate
    format: bowl
    cuisine: korean-fusion
    spice_level: medium
    diet: [vegan, gluten-free]

  - name: "Sandwich Saumon Pesto Artichaut"
    recipe_id: "sandwich-saumon-pesto-artichaut"
    recipe_source: parsley
    tag_source: inferred
    protein: fish
    temperature: room
    richness: moderate
    format: handheld
    cuisine: french-mediterranean
    spice_level: none
    diet: [pescatarian]

  - name: "Sandwich Poulet végé Tropical"
    recipe_id: "sandwich-poulet-vege-tropical"
    recipe_source: parsley
    tag_source: inferred
    protein: plant-based
    temperature: room
    richness: moderate
    format: handheld
    cuisine: fusion
    spice_level: mild
    diet: [vegan]

  - name: "Falafels"
    recipe_id: "falafels-8"
    recipe_source: parsley
    tag_source: inferred
    protein: plant-based
    temperature: warm
    richness: moderate
    format: shareable
    cuisine: middle-eastern
    spice_level: mild
    diet: [vegan, dairy-free]

  - name: "Croquettes de Courgette Patate Épinards"
    recipe_id: "croquettes-de-courgette-patate-et-epinards"
    recipe_source: parsley
    tag_source: inferred
    protein: plant-based
    temperature: warm
    richness: moderate
    format: shareable
    cuisine: french
    spice_level: none
    diet: [vegetarian, gluten-free]

  - name: "Hummus à l'aneth"
    recipe_id: "hummus-a-l-aneth"
    recipe_source: parsley
    tag_source: inferred
    protein: plant-based
    temperature: cold
    richness: lean
    format: dip-spread
    cuisine: middle-eastern
    spice_level: none
    diet: [vegan, gluten-free, dairy-free]

  - name: "Hummus Verts lime"
    recipe_id: "hummus-verts-lime"
    recipe_source: parsley
    tag_source: inferred
    protein: plant-based
    temperature: cold
    richness: lean
    format: dip-spread
    cuisine: middle-eastern-fusion
    spice_level: none
    diet: [vegan, gluten-free, dairy-free]

  - name: "Pico de Gallo"
    recipe_id: "pico-de-gallo"
    recipe_source: parsley
    tag_source: inferred
    protein: none
    temperature: cold
    richness: lean
    format: sauce-condiment
    cuisine: mexican
    spice_level: mild
    diet: [vegan, gluten-free, dairy-free]

  - name: "Quiche Forestier"
    recipe_id: "quiche-forestier"
    recipe_source: parsley
    tag_source: inferred
    protein: dairy
    temperature: warm
    richness: moderate
    format: plated-main
    cuisine: french
    spice_level: none
    diet: [vegetarian]

  - name: "Mousse Choco Praliné"
    recipe_id: "mousse-choco-praline"
    recipe_source: parsley
    tag_source: inferred
    protein: none
    temperature: cold
    richness: indulgent
    format: baked-good
    cuisine: french
    spice_level: none
    diet: [vegan, gluten-free]
---

# Mock — hot sunny week, Tuesday holiday

> **MOCK FILE — machine-generated, not a real chef menu.**
> Source: `menus-recommend` skill run 2026-06-25. Never edit real menus or PATTERNS.md.

## Weekly production

### Vege (plant mains)
- Poutine (vegan)
- Jerk chicken (veggie)
- Paella (veggie)

### Poisson (fish)
- Salmon pesto
- Moqueca
- Salmon Cajun sandwich

### Soupe (brothy soups)
- Korean soup
- Tom Yum
- Mushroom tarragon
- Pho
- Soupe Mole Verde

### Potage (thick soups)
- Potage Froid Mélonccio *(cold — hot-week anchor)*
- Potage Crème de tomates
- Tulum
- Cream of broccoli
- Chili d'Orge

### Salades
- Kale mango cabbage (KM) *(weekly staple)*
- Salade Betterave Pommes Tofu
- Carrot celeriac
- Tabbouleh
- Salade Chou poivrons à la menthe
- Salade Provençal

### Salade-comp (composed salads / bowls)
- Salade Hilairoise
- Salade Bandhu
- Chicken salad (veggie)
- Poké bol au poulet végé sauce coréenne

### Sandwichs
- Sandwich Saumon Pesto Artichaut
- Sandwich Poulet végé Tropical

### Texture
- Falafels
- Croquettes de Courgette Patate Épinards

### Hummus / dips
- Hummus à l'aneth
- Hummus Verts lime

### Sauces / condiments
- Pico de Gallo

### Quiche
- Quiche Forestier

### Pico de Gallo
- Pico de Gallo

### Mousse
- Mousse Choco Praliné

---

## Weekly schedule

| Day | Temp | Weather | Highlights |
|-----|------|---------|------------|
| Monday | 28°C | sunny | Poutine · Quiche Forestier · KM · Hummus · Korean soup · Mélonccio · Salmon pesto · Betterave Tofu · Pico · Falafels |
| **Tuesday** | — | — | **CLOSED — statutory holiday** |
| Wednesday | 30°C | sunny | Jerk chicken · Paella · KM · Tom Yum · Crème tomates · Moqueca · Hilairoise · Tabbouleh · Carrot celeriac · Hummus Verts lime · Saumon Pesto sandwich · Croquettes |
| Thursday | 27°C | partly cloudy | Poutine · Chicken salad · KM · Mushroom tarragon · Tulum · Salmon Cajun · Bandhu · Chou poivrons · Provençal · Tropical sandwich · Mousse |
| Friday | 31°C | sunny | Jerk chicken · Paella · KM · Pho · Mole Verde · Mélonccio · Chili d'Orge · Salmon pesto · Poké coréen · Betterave Tofu · Tabbouleh · Pico |

---

## Why this menu

### Strategy

A hot, sunny week in the high-20s to low-30s°C range calls for a service line that leans light and cold. With only four working days (Tuesday closed for a statutory holiday), each service day carries the full pool across all categories. The scenario maps directly onto the `weather_temp` pattern from PATTERNS.md ("Hot, sunny weeks lean salad/sandwich-heavy with more composed salads and cold dips"; low confidence, inferred from 2 of 4 weather-noted weeks), so the salad counts are pushed toward the upper range (6 salades + 4 salade-comp = 10 cold formats), and cold formats dominate the non-main slots. The pool is built to the `menu_skeleton` medians: 5 soupe, 5 potage (including the cold Mélonccio as the hot-weather anchor), 6 salades, 3 vege, 3 poisson, 4 salade-comp, 2 sandwichs, 2 texture, 2 hummus, 1 sauces, 1 quiche, 1 pico-de-gallo, 1 mousse.

### Per-day notes

**Monday** opens the week with the five staples together per the `per_day_balance` Monday rule (medium confidence): Poutine (vegan) + Quiche Forestier + Kale mango cabbage + Hummus à l'aneth all appear on day one alongside the Korean soup and the cold Mélonccio potage. The fish slot is covered by Salmon pesto. Falafels provide the texture entry.

**Tuesday** is closed. The calendar pattern "Statutory holiday → closed that day" (low confidence, stated; from Victoria Day 2026-05-18) is the single direct precedent in the sample. The notes field records the reason explicitly.

**Wednesday** is the hottest mid-week day (30°C, sunny). The line skews toward cold and medium-weight dishes: the cold Mélonccio potage returns, composed salads (Hilairoise + Tabbouleh + Carrot celeriac) expand, and the tropical Sandwich Poulet végé Tropical appears. Moqueca (fish stew, Brazilian) delivers the fish main; Jerk chicken (veggie) and Paella (veggie) cover the two plant-substitute slots. Cuisine spread covers Thai (Tom Yum), French (Crème tomates, Salmon pesto), Brazilian (Moqueca), and Caribbean (Jerk) per the `per_day_balance` broad-cuisine rule (medium confidence, 5/6 weeks).

**Thursday** is the coolest day of the service week (27°C, partly cloudy). Rotating soups Mushroom tarragon and Tulum appear here as the slightly lower temperature supports heavier brothy options. Chicken salad (veggie) and Salade Bandhu (south-Asian fusion) add cuisine variety. The Mousse Choco Praliné is placed on Thursday as the one-per-week dessert.

**Friday** is the hottest day (31°C, sunny). Following the `weather_temp` stated pattern "cold soups for hot/rainy periods" (low, stated, 2026-06-15), the cold Mélonccio is doubled onto the Friday line. The Poké bol au poulet végé sauce coréenne (composed bowl, cold, Korean-fusion) adds a light lunch option. Pho and Soupe Mole Verde cover the brothy soup slots; Chili d'Orge provides the thick hearty alternative for customers who want something warming. Two plant-substitute mains (Jerk chicken + Paella) balance against Salmon pesto for the fish slot.

### Pattern citations

1. **Rotation staples every week** — Poutine (vegan), Kale mango cabbage, Pico de Gallo, Quiche Forestier, and Jerk chicken (veggie) all appear in the pool. `rotation` dimension, confidence: high (6/6 weeks for each staple).

2. **Salad-heavy hot weeks** — 6 salades + 4 salade-comp = 10 cold salad formats, at the upper range of the `menu_skeleton` salades (max: 8) and composed salads (median: 4, max: 5). This is the `weather_temp` pattern "hot weeks lean salad/sandwich-heavy", confidence: low (2/4 weather-noted weeks, inferred).

3. **Cold Mélonccio on hot days** — the `weather_temp` dimension notes that the cold Potage Froid Mélonccio was pooled even in the hot week 2026-06-08 (pre-emptively) and that the chef stated "cold soups for rainy/cold weekend" in 2026-06-15. The confidence is low/stated but the chef's own framing is used here. Mélonccio appears on Monday and Friday (the two sunniest days).

4. **Monday staple-core opening** — Poutine + Quiche + KM + Hummus all on Monday. `per_day_balance` Monday rule, confidence: medium (4/6 weeks).

5. **Both soupe and potage running in parallel daily** — every service day has at least one brothy soup and one thick soup. `per_day_balance` parallel-soup rule, confidence: medium (5/6 weeks).

6. **Holiday closure on Tuesday** — one direct precedent (Victoria Day 2026-05-18, Monday CLOSED). Applied here to Tuesday, confidence: low. The calendar pattern gives the form; the day transfer is an improvisation.

### Improvisation and honesty flags

- **Cold Mélonccio doubled onto Friday** — there is only one chef-stated data point (2026-06-15) for weather-driven cold-soup behavior. The doubling to two days is this model's extrapolation from a thin signal, not a confirmed chef behavior. Flag: improvised.

- **Tuesday is the closed holiday, not Monday** — the only prior holiday closure in the sample is a Monday (Victoria Day). Applying the same pattern to a Tuesday is a plausible transfer but is not directly evidenced. Flag: low-confidence transfer.

- **Cream of broccoli potage** — this dish has no direct Parsley match and does not appear in the rotation list; it fills the fifth potage slot as a common late-spring/early-summer option. Flag: repertoire improvisation; no pattern support.

- **Salade Hilairoise on Wednesday** — this dish has two appearances in the sample (2026-06-01, 2026-06-15) and was explicitly noted as a successful trial ("Hilairoise test with salmon cake — very good"). Its inclusion is supported at low confidence but its placement on Wednesday rather than any other day is arbitrary. Flag: low-confidence rotation.

- **All tags are `tag_source: inferred`** — no recipe file in the transcribed-en corpus has been linked here; tags are inferred from dish names and Parsley ingredient lists. Per the PATTERNS.md sample caveat (6 weeks, mostly inferred tags), treat all tag-based claims as hypotheses.

- **Small-sample caveat (PATTERNS.md)** — the patterns document covers only 6 consecutive late-spring/early-summer weeks, all flagged status, with temperature data on only 4 of them. Every weather/calendar/rotation inference here is therefore based on a limited, potentially biased sample. This menu is a "what-if" exploration, not a chef-endorsed plan.
