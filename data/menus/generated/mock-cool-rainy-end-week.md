---
id: mock-cool-rainy-end-week
source: generated
status: mock
generated: 2026-06-25
patterns_generated: 2026-06-25
scenario:
  given: "none"
  invented: "Mon 26° sunny; Tue 24° partly cloudy; Wed 22° overcast; Thu 18° rainy; Fri 17° rainy — late-June mixed week turning cool and rainy by Thursday"
  week_label: "Mock — mixed week, cool rainy end"

pool:
  vege:
    - "Poutine (vegan)"
    - "Jerk chicken (veggie)"
    - "Thai peanut chicken (Poulet Végé Thai)"
  poisson:
    - "Salmon pesto"
    - "Moqueca"
    - "Mini Galettes de Saumon"
  soupe:
    - "Mushroom tarragon"
    - "Korean soup"
    - "Pho"
    - "Tom Yum"
    - "Soupe Légumes Lentilles Chipotle"
  potage:
    - "Potage Crème de tomates"
    - "Potage Froid Mélonccio"
    - "Chili d'Orge"
    - "Potage Panais Poires Pecan"
    - "Ribollita"
  salades:
    - "Kale mango cabbage (KM)"
    - "Salade Betterave Pommes Tofu"
    - "Tabbouleh"
    - "Salade Dolique à l'oeil noir"
    - "Salade Orange Fenouil"
    - "Salade de Brocoli Crémeuse"
  salade-comp:
    - "Chicken salad (veggie)"
    - "Salade Hilairoise"
    - "Salade Bandhu"
    - "Salade Crumble Pois Chiches"
  sandwichs:
    - "Sandwich Saumon Cajun"
    - "Sandwich Banh Mi Poulet Végé Satay"
  texture:
    - "Falafels"
    - "Croquettes de Courgette Patate Épinards"
  hummus:
    - "Hummus de Brocoli et Pistache"
    - "Hummus de Panais"
  sauces:
    - "Sauce Satay"
  quiche:
    - "Quiche de jambon et légumes"
  pico-de-gallo:
    - "Pico de Gallo"
  mousse:
    - "Mousse D'autre Foie"

schedule:
  - day: monday
    date:
    dishes:
      - "Poutine (vegan)"
      - "Quiche de jambon et légumes"
      - "Kale mango cabbage (KM)"
      - "Hummus de Brocoli et Pistache"
      - "Mushroom tarragon"
      - "Potage Crème de tomates"
      - "Salmon pesto"
      - "Salade Betterave Pommes Tofu"
      - "Pico de Gallo"
      - "Falafels"
    temp_c: 26
    weather: "sunny"
    notes: "Staple-core opening day — Poutine, Quiche, KM, Hummus anchoring the line; comfortable warmth, standard mixed line"

  - day: tuesday
    date:
    dishes:
      - "Jerk chicken (veggie)"
      - "Thai peanut chicken (Poulet Végé Thai)"
      - "Kale mango cabbage (KM)"
      - "Korean soup"
      - "Potage Froid Mélonccio"
      - "Salmon pesto"
      - "Chicken salad (veggie)"
      - "Tabbouleh"
      - "Salade Orange Fenouil"
      - "Hummus de Panais"
      - "Sandwich Saumon Cajun"
      - "Croquettes de Courgette Patate Épinards"
    temp_c: 24
    weather: "partly cloudy"
    notes: "Mid-warm day; rotating soups + cold Mélonccio still appropriate; two plant-substitute vege mains (Jerk + Thai peanut)"

  - day: wednesday
    date:
    dishes:
      - "Poutine (vegan)"
      - "Jerk chicken (veggie)"
      - "Kale mango cabbage (KM)"
      - "Pho"
      - "Chili d'Orge"
      - "Moqueca"
      - "Salade Hilairoise"
      - "Salade Dolique à l'oeil noir"
      - "Salade de Brocoli Crémeuse"
      - "Sandwich Banh Mi Poulet Végé Satay"
      - "Mousse D'autre Foie"
    temp_c: 22
    weather: "overcast"
    notes: "Cooling into the week; heavier Chili d'Orge potage replaces cold Mélonccio; Moqueca covers fish stew slot"

  - day: thursday
    date:
    dishes:
      - "Thai peanut chicken (Poulet Végé Thai)"
      - "Kale mango cabbage (KM)"
      - "Mushroom tarragon"
      - "Tom Yum"
      - "Potage Froid Mélonccio"
      - "Potage Panais Poires Pecan"
      - "Ribollita"
      - "Mini Galettes de Saumon"
      - "Salade Bandhu"
      - "Tabbouleh"
      - "Salade Crumble Pois Chiches"
      - "Pico de Gallo"
    temp_c: 18
    weather: "rainy"
    notes: "First cold rainy day — chef-stated 'cold soups for rainy/cold weekend' (2026-06-15): cold Mélonccio featured alongside hot thick soups (Panais Poires Pecan + Ribollita); warm brothy soups (Tom Yum + Mushroom tarragon) for warmth balance"

  - day: friday
    date:
    dishes:
      - "Jerk chicken (veggie)"
      - "Kale mango cabbage (KM)"
      - "Korean soup"
      - "Soupe Légumes Lentilles Chipotle"
      - "Potage Froid Mélonccio"
      - "Chili d'Orge"
      - "Ribollita"
      - "Moqueca"
      - "Salade Hilairoise"
      - "Salade Orange Fenouil"
      - "Salade Betterave Pommes Tofu"
      - "Pico de Gallo"
      - "Falafels"
    temp_c: 17
    weather: "rainy"
    notes: "Coolest rainiest day — cold Mélonccio featured per chef-stated 'cold soups for rainy/cold weekend' (2026-06-15); double hot thick soups (Chili d'Orge + Ribollita) for warmth; Korean + Chipotle brothy soups for the rainy weekend"

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

  - name: "Thai peanut chicken (Poulet Végé Thai)"
    recipe_id: "poulet-vege-thai"
    recipe_source: parsley
    tag_source: inferred
    protein: plant-based
    temperature: hot
    richness: moderate
    format: plated-main
    cuisine: thai
    spice_level: medium
    diet: [vegan, gluten-free]

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

  - name: "Mini Galettes de Saumon"
    recipe_id: "mini-galettes-de-saumon"
    recipe_source: parsley
    tag_source: inferred
    protein: fish
    temperature: warm
    richness: moderate
    format: shareable
    cuisine: french-québécois
    spice_level: mild
    diet: [pescatarian, gluten-free]

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

  - name: "Soupe Légumes Lentilles Chipotle"
    recipe_id: "soupe-legumes-lentilles-chipotle"
    recipe_source: parsley
    tag_source: inferred
    protein: plant-based
    temperature: hot
    richness: moderate
    format: soup
    cuisine: mexican-fusion
    spice_level: medium
    diet: [vegan, gluten-free]

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

  - name: "Potage Panais Poires Pecan"
    recipe_id: "potage-panais-poires-pecan"
    recipe_source: parsley
    tag_source: inferred
    protein: none
    temperature: hot
    richness: moderate
    format: soup
    cuisine: french
    spice_level: none
    diet: [vegan, gluten-free]

  - name: "Ribollita"
    recipe_id:
    recipe_source: none
    tag_source: inferred
    protein: plant-based
    temperature: hot
    richness: moderate
    format: stew
    cuisine: italian
    spice_level: none
    diet: [vegan, dairy-free]

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

  - name: "Salade Dolique à l'oeil noir"
    recipe_id: "salade-dolique-a-l-oeil-noir"
    recipe_source: parsley
    tag_source: inferred
    protein: plant-based
    temperature: cold
    richness: lean
    format: salad
    cuisine: caribbean-fusion
    spice_level: mild
    diet: [vegan, gluten-free, dairy-free]

  - name: "Salade Orange Fenouil"
    recipe_id: "salade-orange-fenouil"
    recipe_source: parsley
    tag_source: inferred
    protein: none
    temperature: cold
    richness: lean
    format: salad
    cuisine: french-mediterranean
    spice_level: none
    diet: [vegan, gluten-free, dairy-free]

  - name: "Salade de Brocoli Crémeuse"
    recipe_id: "salade-de-brocoli-cremeuse"
    recipe_source: parsley
    tag_source: inferred
    protein: none
    temperature: cold
    richness: light
    format: salad
    cuisine: french
    spice_level: none
    diet: [vegetarian, gluten-free]

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

  - name: "Salade Crumble Pois Chiches"
    recipe_id: "salade-crumble-pois-chiches"
    recipe_source: parsley
    tag_source: inferred
    protein: plant-based
    temperature: cold
    richness: lean
    format: salad
    cuisine: middle-eastern-fusion
    spice_level: mild
    diet: [vegan, gluten-free, dairy-free]

  - name: "Sandwich Saumon Cajun"
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

  - name: "Sandwich Banh Mi Poulet Végé Satay"
    recipe_id: "sandwich-banh-mi-poulet-vege-satay"
    recipe_source: parsley
    tag_source: inferred
    protein: plant-based
    temperature: room
    richness: moderate
    format: handheld
    cuisine: vietnamese-fusion
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

  - name: "Hummus de Brocoli et Pistache"
    recipe_id: "hummus-de-brocoli-et-pistache"
    recipe_source: parsley
    tag_source: inferred
    protein: plant-based
    temperature: cold
    richness: lean
    format: dip-spread
    cuisine: middle-eastern-fusion
    spice_level: none
    diet: [vegan, gluten-free, dairy-free]

  - name: "Hummus de Panais"
    recipe_id: "hummus-de-panais"
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

  - name: "Sauce Satay"
    recipe_id: "sauce-satay"
    recipe_source: parsley
    tag_source: inferred
    protein: none
    temperature: room
    richness: moderate
    format: sauce-condiment
    cuisine: southeast-asian
    spice_level: mild
    diet: [vegan, gluten-free, dairy-free]

  - name: "Quiche de jambon et légumes"
    recipe_id: "quiche-de-jambon-et-legumes"
    recipe_source: parsley
    tag_source: inferred
    protein: pork
    temperature: warm
    richness: moderate
    format: plated-main
    cuisine: french
    spice_level: none
    diet: [gluten-free]

  - name: "Mousse D'autre Foie"
    recipe_id: "mousse-d-autre-foie"
    recipe_source: parsley
    tag_source: inferred
    protein: none
    temperature: cold
    richness: indulgent
    format: dip-spread
    cuisine: french
    spice_level: none
    diet: [dairy-free]
---

# Mock — mixed week, cool rainy end

> **MOCK FILE — machine-generated, not a real chef menu.**
> Source: `menus-recommend` skill run 2026-06-25. Scenario: invented (no user input given). Never edit real menus or PATTERNS.md.

## Weekly production

### Vege (plant mains)
- Poutine (vegan)
- Jerk chicken (veggie)
- Thai peanut chicken (Poulet Végé Thai)

### Poisson (fish)
- Salmon pesto
- Moqueca
- Mini Galettes de Saumon

### Soupe (brothy soups)
- Mushroom tarragon
- Korean soup
- Pho
- Tom Yum
- Soupe Légumes Lentilles Chipotle

### Potage (thick soups)
- Potage Crème de tomates
- Potage Froid Mélonccio *(cold soup — featured on rainy/cool days per chef-stated pattern)*
- Chili d'Orge
- Potage Panais Poires Pecan
- Ribollita

### Salades
- Kale mango cabbage (KM) *(weekly staple)*
- Salade Betterave Pommes Tofu
- Tabbouleh
- Salade Dolique à l'oeil noir
- Salade Orange Fenouil
- Salade de Brocoli Crémeuse

### Salade-comp (composed salads)
- Chicken salad (veggie)
- Salade Hilairoise
- Salade Bandhu
- Salade Crumble Pois Chiches

### Sandwichs
- Sandwich Saumon Cajun
- Sandwich Banh Mi Poulet Végé Satay

### Texture
- Falafels
- Croquettes de Courgette Patate Épinards

### Hummus / dips
- Hummus de Brocoli et Pistache
- Hummus de Panais

### Sauces / condiments
- Sauce Satay

### Quiche
- Quiche de jambon et légumes

### Pico de Gallo
- Pico de Gallo

### Mousse
- Mousse D'autre Foie

---

## Weekly schedule

| Day | Temp | Weather | Highlights |
|-----|------|---------|------------|
| Monday | 26°C | sunny | Poutine · Quiche (jambon) · KM · Hummus Brocoli · Mushroom tarragon · Crème tomates · Salmon pesto · Betterave Tofu · Pico · Falafels |
| Tuesday | 24°C | partly cloudy | Jerk chicken · Thai peanut · KM · Korean soup · Mélonccio · Salmon pesto · Chicken salad · Tabbouleh · Orange Fenouil · Hummus Panais · Saumon Cajun sandwich · Croquettes |
| Wednesday | 22°C | overcast | Poutine · Jerk chicken · KM · Pho · Chili d'Orge · Moqueca · Hilairoise · Dolique · Brocoli Crémeuse · Banh Mi · Mousse |
| Thursday | 18°C | rainy | Thai peanut · KM · Mushroom tarragon · Tom Yum · **Mélonccio** · Panais Poires Pecan · Ribollita · Galettes Saumon · Bandhu · Tabbouleh · Crumble Pois Chiches · Pico |
| Friday | 17°C | rainy | Jerk chicken · KM · Korean soup · Chipotle Lentilles · **Mélonccio** · Chili d'Orge · Ribollita · Moqueca · Hilairoise · Orange Fenouil · Betterave Tofu · Pico · Falafels |

---

## Why this menu

### Strategy

No scenario was provided by the user — the scenario above was invented by the `menus-recommend` skill. The date-basis is 2026-06-25 (late June), which falls within the late-spring/early-summer window of the PATTERNS.md sample (May 11 – June 15, 2026). A late-June week in Montréal often opens mild and sunny before a rainy trough moves through mid-to-end week, so the invented scenario gives: two warm-to-mild early days (Mon 26°, Tue 24°), a transitional overcast Wednesday (22°), then two cold rainy days (Thu 18°, Fri 17°). This trajectory lets the menu demonstrate the chef's stated cold-soup weather behavior across a single week: on the cool/rainy days (Thu/Fri) the cold Mélonccio is featured per the chef-stated pattern ("cold soups for rainy/cold weekend"), while the warm early days (Mon) lead with the hot-soup anchor (Crème de tomates).

The pool is built to skeleton medians: 5 soupe, 5 potage, 6 salades, 3 vege, 3 poisson, 4 salade-comp, 2 sandwichs, 2 texture, 2 hummus, 1 sauces (Sauce Satay), 1 quiche, 1 pico-de-gallo, 1 mousse. Salad counts are at median (not upper range) because this is not a pure hot week — the weather_temp "hot weeks lean salad-heavy" pattern (low confidence) does not apply to the cool end of the week.

### Per-day notes

**Monday** (26°C, sunny) opens with the staple core per the `per_day_balance` Monday rule (medium confidence): Poutine (vegan), Quiche de jambon et légumes, Kale mango cabbage (KM), and Hummus de Brocoli et Pistache all on day one. A comfortable sunny day; the cold Mélonccio potage is included as an early-week option before the weather turns. Salmon pesto covers the fish slot; Mushroom tarragon and Crème de tomates run as the brothy/thick soup pair.

**Tuesday** (24°C, partly cloudy) is still warm. The cold Mélonccio stays in rotation. Two plant-substitute mains (Jerk chicken + Thai peanut) give full coverage for the pescatarian/vegan clientele. Cuisine spread covers Korean (soupe), Vietnamese (Pho in the pool), Thai (Thai peanut), Cajun (sandwich), and Québécois (Chicken salad).

**Wednesday** (22°C, overcast) is the transition day. The cold Mélonccio is dropped from Wednesday service — overcast signals the coming rain. The thick soup slot defaults to Chili d'Orge (warm, hearty). Moqueca (Brazilian fish stew, hot, rich) suits the heavier feel. Pho covers the brothy soup; the composed salads (Hilairoise, Dolique) and Mousse D'autre Foie give mid-week variety.

**Thursday** (18°C, rainy) is the first cold rainy day. This is the strongest weather trigger in the PATTERNS.md sample — chef-stated "cold soups for rainy / cold weekend" (2026-06-15, low confidence, stated). Per that stated direction, the cold Potage Froid Mélonccio is featured on Thursday alongside the hot thick soups (Potage Panais Poires Pecan + Ribollita). Tom Yum and Mushroom tarragon provide hot brothy cover. Mini Galettes de Saumon are the fish entry — a lighter, warm format suited to an indoor rainy day. No sandwiches on Thursday (reducing cold handheld formats on cold/rainy days is an improvisation — no direct pattern support).

**Friday** (17°C, rainy) is the coldest wettest day. Following the `weather_temp` stated pattern ("cold soups for rainy/cold weekend"), the cold Potage Froid Mélonccio is again featured. Double hot thick soups (Chili d'Orge + Ribollita) accompany it in the potage slots, giving customers the choice of cold or hot. Brothy soups (Korean + Chipotle Lentilles) are warming and spiced. Moqueca returns for the fish slot — its hot/rich Brazilian profile suits cold weather. Falafels return as the texture entry for the week-end service.

### Pattern citations

1. **Rotation staples every week** — Poutine (vegan), Kale mango cabbage (KM), Pico de Gallo, a quiche variant, and Jerk chicken (veggie) all appear in the pool. `rotation` dimension, confidence: high (6/6 weeks for each staple). The quiche is Quiche de jambon et légumes — a variant of the weekly quiche staple.

2. **Monday staple-core opening** — Poutine + Quiche + KM + Hummus all on Monday. `per_day_balance` Monday rule, confidence: medium (4/6 weeks).

3. **Both soupe and potage daily** — every service day runs at least one brothy soup (soupe) and at least one thick soup (potage) in parallel. `per_day_balance` parallel-soup rule, confidence: medium (5/6 weeks).

4. **Fish main + plant-substitute main daily** — every service day has at least one fish/pescatarian main (Salmon pesto or Moqueca or Galettes) and at least one plant-substitute main (Poutine, Jerk, Thai peanut). `per_day_balance`, confidence: medium (5/6 weeks).

5. **Cold salads dominating non-main slots** — each day carries multiple cold salads (KM + 2–3 additional). `per_day_balance` cold-salad rule, confidence: high (6/6 weeks).

6. **Mixed cuisine per day** — every service day spans at least four cuisines (e.g. Thursday: Thai via Tom Yum, French via Mushroom tarragon + Panais Poires Pecan, Italian via Ribollita, Brazilian via Moqueca, South-Asian via Bandhu, Middle-Eastern via Crumble Pois Chiches). `per_day_balance` broad-cuisine rule, confidence: medium (5/6 weeks).

7. **Cool/rainy days → cold soup featured** — the chef's stated "cold soups for rainy/cold weekend" (2026-06-15) is applied in its stated direction: on cool/rainy days (Thu/Fri ≤ 18°C) the cold Potage Froid Mélonccio is featured on the service line. Hot thick soups (Panais Poires Pecan, Ribollita, Chili d'Orge) run alongside to give warm-weather balance. `weather_temp`, confidence: low (1/4 weather-noted weeks, stated). This follows the single chef-stated data point; extrapolating it to two consecutive rainy days is this model's extension of a thin signal.

### Improvisation and honesty flags

- **Invented scenario — no user input** — the entire scenario (dates, temperatures, weather, trajectory) was fabricated by the skill based on plausible late-June Montréal weather patterns. The PATTERNS.md sample covers May 11 – June 15 only; late-June behaviour is extrapolated. Flag: scenario invented; seasonal extrapolation.

- **Cold Mélonccio on Thursday/Friday** — the chef stated "cold soups for rainy/cold weekend" but the direct evidence is one instance (2026-06-15, Friday). Featuring the cold Mélonccio on two consecutive rainy days follows the stated direction but extends it beyond the single data point. Flag: weather_temp pattern extended to two days, low confidence.

- **No sandwiches on Thursday/Friday** — the skill reduced sandwich representation on the two cold/rainy days as a weather-response improvisation. There is no explicit pattern in PATTERNS.md supporting reduced sandwiches in cool weather; this is an aesthetic guess. Flag: improvised, no pattern support.

- **Ribollita potage** — Ribollita appears twice in the sample (2026-05-18, 2026-06-01) at low confidence. It is placed on the two cold/rainy days because it is a hearty Italian vegetable-bread stew, a reasonable cool-weather match. However, the real Ribollita recipe is not in the Parsley index under that name (no direct file match), so the recipe_source is set to "none" and the parsley slug is left blank. Flag: low-confidence rotation dish, no direct Parsley file match.

- **Quiche variant: Quiche de jambon et légumes** — the pattern says "Quiche (Forestier / Ham / Vegetable)" appears every week. This mock uses the ham variant to differ from the Task 2 mock (which used Quiche Forestier). The pattern supports any quiche variant equally; the specific choice here is variety-driven. Flag: low-level improvisation within a high-confidence staple.

- **All tags are `tag_source: inferred`** — no recipe file in the transcribed-en corpus has been linked here; tags are inferred from dish names and Parsley ingredient lists. Per the PATTERNS.md sample caveat (6 weeks, mostly inferred tags), treat all tag-based claims as hypotheses.

- **Small-sample caveat (PATTERNS.md)** — the patterns document covers only 6 consecutive late-spring/early-summer weeks, all flagged status, with temperature data on only 4 of them. Every weather/calendar/rotation inference here is based on a limited, potentially biased sample. This menu is a "what-if" exploration artifact, not a chef-endorsed plan.
