---
# ============================================================
# GENERATED MOCK MENU - machine-made week built on REAL weather.
# NOT a real chef menu. Produced by the menus-recommend skill.
# ============================================================
id: mock-real-mtl-2026-08-17
source: generated
status: mock
generated: 2026-08-15
patterns_generated: 2026-08-09
scenario:
  given: "real Montreal weather, next few weeks (auto-fetched forecast); week of 2026-08-17"
  invented: >-
    Nothing about the weather is invented - Mon 22C heavy rain, Tue 25C, Wed 24C, Thu 24C,
    Fri 24C are the Open-Meteo forecast. No statutory holiday this week (Labour Day is
    Sep 7). A 3-day >=24C streak (Tue-Thu) meets the chef's chilled-cold-soup trigger.
  week_label: "17-21 August 2026 (real forecast)"
  weather_source: >-
    Open-Meteo forecast for Montreal (45.50N, 73.57W), fetched 2026-08-15.
    Real forecast values - subject to change as the dates approach.
pool:
  vege: ["Ratatouille", "Veggie Paella", "Braised Vegetables", "Vegan Poutine (Medium)"]
  poisson: ["Salmon Pesto Artichoke", "Sesame Ginger Salmon", "Haddock Curry with Mango and Coconut"]
  texture: ["Veggie Chicken Makhani", "Veggie Chicken Satay with Almonds"]
  soupe: ["Korean Soup", "Green Tom Yum Soup", "Mushroom Tarragon Soup", "Harira", "Cold Melonccio Soup"]
  potage: ["Cream of Tomato Soup", "Parsnip Pear Pecan Soup", "Squash Spinach Coconut", "Carrot Apple Curry", "The Moroccan"]
  sandwichs: ["Salmon Pesto Artichoke Sandwich", "Satay Vege Chicken Banh Mi Sandwich"]
  salades: ["Kale Mango Cabbage Salad", "Creamy Broccoli Salad", "Beet Goat Cheese", "Carrot, Celeriac, and Almond Salad", "Provencal Salad", "Orange Fennel Salad"]
  salade-comp: ["Vege Chicken Salad", "Bandhu Salad", "Root Trio"]
  sauces: ["Satay Sauce"]
  hummus: ["Broccoli and Pistachio Hummus", "Dill Hummus"]
  quiche: ["Forestiere Quiche"]
  pico-de-gallo: ["Pico de Gallo"]
schedule:
  - day: monday
    date: 2026-08-17
    dishes: ["Kale Mango Cabbage Salad", "Korean Soup", "Cream of Tomato Soup", "Creamy Broccoli Salad", "Beet Goat Cheese", "Salmon Pesto Artichoke", "Ratatouille", "Vegan Poutine (Medium)", "Broccoli and Pistachio Hummus"]
    temp_c: 22
    weather: "heavy rain"
    notes: "Heavy rain (59% pop) - comfort mains (poutine, ratatouille) hold. KM on Monday per placement rule."
  - day: tuesday
    date: 2026-08-18
    dishes: ["Veggie Chicken Makhani", "Green Tom Yum Soup", "The Moroccan", "Provencal Salad", "Carrot, Celeriac, and Almond Salad", "Vege Chicken Salad", "Veggie Paella", "Salmon Pesto Artichoke Sandwich", "Satay Vege Chicken Banh Mi Sandwich", "Satay Sauce", "Forestiere Quiche", "Dill Hummus"]
    temp_c: 25
    weather: "overcast"
    notes: "Warmest day (25 C). Sandwiches + sauces made this morning after soups. First texture main (makhani)."
  - day: wednesday
    date: 2026-08-19
    dishes: ["Cold Melonccio Soup", "Mushroom Tarragon Soup", "Squash Spinach Coconut", "Sesame Ginger Salmon", "Orange Fennel Salad", "Bandhu Salad", "Braised Vegetables"]
    temp_c: 24
    weather: "light drizzle"
    notes: "3-day >=24 C streak reached (Tue-Thu) -> one chilled cold soup (Melonccio). Salmon ginger paired with salmon pesto."
  - day: thursday
    date: 2026-08-20
    dishes: ["Veggie Chicken Satay with Almonds", "Harira", "Carrot Apple Curry", "Parsnip Pear Pecan Soup", "Haddock Curry with Mango and Coconut", "Pico de Gallo", "Root Trio", "Orange Fennel Salad"]
    temp_c: 24
    weather: "overcast"
    notes: "Pico on Thursday (warm day + Thursday slot). Second texture (satay) spaced from Tuesday. Extra late soups made for Friday."
  - day: friday
    date: 2026-08-21
    dishes: ["Korean Soup", "Cold Melonccio Soup", "Kale Mango Cabbage Salad", "Creamy Broccoli Salad", "Haddock Curry with Mango and Coconut"]
    temp_c: 24
    weather: "overcast"
    notes: "SERVICE-ONLY - no production. Thursday's late soups + pret-a-manger stock serve today."
dishes:
  - name: "Ratatouille"
    recipe_id: ratatouille
    recipe_source: repertoire
    tag_source: linked
    protein: vegetable
    temperature: hot
    weather: cool
    richness: moderate
    format: stew
    cuisine: french
    spice_level: mild
    diet: [vegan, vegetarian, gluten-free, dairy-free]
  - name: "Veggie Paella"
    recipe_id: veggie-paella
    recipe_source: repertoire
    tag_source: linked
    protein: plant-substitute
    temperature: hot
    weather: cool
    richness: moderate
    format: shareable
    cuisine: spanish
    spice_level: mild
    diet: [vegan, vegetarian, dairy-free]
  - name: "Braised Vegetables"
    recipe_id: braised-vegetables
    recipe_source: repertoire
    tag_source: linked
    protein: vegetable
    temperature: hot
    weather: cool
    richness: moderate
    format: stew
    cuisine: 
    spice_level: 
    diet: []
  - name: "Vegan Poutine (Medium)"
    recipe_id: vegan-poutine-medium
    recipe_source: repertoire
    tag_source: linked
    protein: tofu
    temperature: hot
    weather: cold
    richness: rich
    format: side
    cuisine: canadian
    spice_level: mild
    diet: [vegan, vegetarian, gluten-free, dairy-free]
  - name: "Salmon Pesto Artichoke"
    recipe_id: salmon-pesto-artichoke
    recipe_source: repertoire
    tag_source: linked
    protein: fish
    temperature: hot
    weather: cool
    richness: rich
    format: plated-main
    cuisine: 
    spice_level: mild
    diet: [pescatarian, gluten-free]
  - name: "Sesame Ginger Salmon"
    recipe_id: sesame-ginger-salmon
    recipe_source: repertoire
    tag_source: linked
    protein: fish
    temperature: hot
    weather: warm
    richness: moderate
    format: plated-main
    cuisine: japanese
    spice_level: mild
    diet: [pescatarian, dairy-free]
  - name: "Haddock Curry with Mango and Coconut"
    recipe_id: haddock-curry-with-mango-and-coconut
    recipe_source: repertoire
    tag_source: linked
    protein: fish
    temperature: hot
    weather: cold
    richness: rich
    format: curry
    cuisine: indian
    spice_level: medium
    diet: [pescatarian]
  - name: "Veggie Chicken Makhani"
    recipe_id: veggie-chicken-makhani
    recipe_source: repertoire
    tag_source: linked
    protein: plant-substitute
    temperature: hot
    weather: cool
    richness: rich
    format: curry
    cuisine: indian
    spice_level: medium
    diet: [vegan, vegetarian, dairy-free]
  - name: "Veggie Chicken Satay with Almonds"
    recipe_id: veggie-chicken-satay-with-almonds
    recipe_source: repertoire
    tag_source: linked
    protein: plant-substitute
    temperature: hot
    weather: cool
    richness: rich
    format: plated-main
    cuisine: thai
    spice_level: mild
    diet: [vegan, vegetarian, dairy-free]
  - name: "Korean Soup"
    recipe_id: korean-soup
    recipe_source: repertoire
    tag_source: linked
    protein: none
    temperature: hot
    weather: cold
    richness: moderate
    format: soup
    cuisine: korean
    spice_level: medium
    diet: [vegan, vegetarian, dairy-free]
  - name: "Green Tom Yum Soup"
    recipe_id: green-tom-yum-soup
    recipe_source: repertoire
    tag_source: linked
    protein: tofu
    temperature: hot
    weather: cold
    richness: moderate
    format: soup
    cuisine: thai
    spice_level: medium
    diet: [vegan, vegetarian, dairy-free]
  - name: "Mushroom Tarragon Soup"
    recipe_id: mushroom-tarragon-soup
    recipe_source: repertoire
    tag_source: linked
    protein: mushroom
    temperature: hot
    weather: cold
    richness: moderate
    format: soup
    cuisine: french
    spice_level: mild
    diet: [vegan, vegetarian, gluten-free, dairy-free]
  - name: "Harira"
    recipe_id: harira
    recipe_source: repertoire
    tag_source: linked
    protein: legume
    temperature: hot
    weather: cool
    richness: moderate
    format: soup
    cuisine: moroccan
    spice_level: mild
    diet: []
  - name: "Cold Melonccio Soup"
    recipe_id: cold-melonccio-soup
    recipe_source: repertoire
    tag_source: linked
    protein: vegetable
    temperature: cold
    weather: hot
    richness: light
    format: soup
    cuisine: spanish
    spice_level: mild
    diet: [vegan, vegetarian, gluten-free, dairy-free]
  - name: "Cream of Tomato Soup"
    recipe_id: cream-of-tomato-soup
    recipe_source: repertoire
    tag_source: linked
    protein: vegetable
    temperature: hot
    weather: cold
    richness: moderate
    format: soup
    cuisine: 
    spice_level: mild
    diet: [vegan, vegetarian, dairy-free]
  - name: "Parsnip Pear Pecan Soup"
    recipe_id: parsnip-pear-pecan-soup
    recipe_source: repertoire
    tag_source: linked
    protein: vegetable
    temperature: hot
    weather: cold
    richness: moderate
    format: soup
    cuisine: 
    spice_level: mild
    diet: [vegan, vegetarian, gluten-free, dairy-free]
  - name: "Squash Spinach Coconut"
    recipe_id: squash-spinach-coconut
    recipe_source: repertoire
    tag_source: linked
    protein: vegetable
    temperature: hot
    weather: cool
    richness: rich
    format: curry
    cuisine: indian
    spice_level: mild
    diet: []
  - name: "Carrot Apple Curry"
    recipe_id: carrot-apple-curry
    recipe_source: repertoire
    tag_source: linked
    protein: vegetable
    temperature: hot
    weather: cool
    richness: moderate
    format: soup
    cuisine: indian
    spice_level: medium
    diet: []
  - name: "The Moroccan"
    recipe_id: the-moroccan
    recipe_source: repertoire
    tag_source: linked
    protein: vegetable
    temperature: hot
    weather: cool
    richness: moderate
    format: soup
    cuisine: moroccan
    spice_level: mild
    diet: []
  - name: "Salmon Pesto Artichoke Sandwich"
    recipe_id: salmon-pesto-artichoke-sandwich
    recipe_source: repertoire
    tag_source: linked
    protein: fish
    temperature: cold
    weather: 
    richness: rich
    format: handheld
    cuisine: italian
    spice_level: mild
    diet: [pescatarian]
  - name: "Satay Vege Chicken Banh Mi Sandwich"
    recipe_id: satay-veggie-chicken-banh-mi-sandwich
    recipe_source: repertoire
    tag_source: linked
    protein: plant-substitute
    temperature: cold
    weather: warm
    richness: moderate
    format: handheld
    cuisine: vietnamese
    spice_level: medium
    diet: [vegan, vegetarian, dairy-free]
  - name: "Kale Mango Cabbage Salad"
    recipe_id: kale-mango-cabbage-salad
    recipe_source: repertoire
    tag_source: linked
    protein: none
    temperature: cold
    weather: hot
    richness: light
    format: salad
    cuisine: 
    spice_level: mild
    diet: [vegetarian, dairy-free, gluten-free, nut-free]
  - name: "Creamy Broccoli Salad"
    recipe_id: creamy-broccoli-salad
    recipe_source: repertoire
    tag_source: linked
    protein: vegetable
    temperature: cold
    weather: warm
    richness: moderate
    format: salad
    cuisine: 
    spice_level: mild
    diet: [vegetarian, dairy-free]
  - name: "Beet Goat Cheese"
    recipe_id: beet-goat-cheese
    recipe_source: repertoire
    tag_source: linked
    protein: vegetable
    temperature: cold
    weather: warm
    richness: moderate
    format: salad
    cuisine: french
    spice_level: none
    diet: [vegetarian]
  - name: "Carrot, Celeriac, and Almond Salad"
    recipe_id: carrot-celeriac-and-almond-salad
    recipe_source: repertoire
    tag_source: linked
    protein: vegetable
    temperature: cold
    weather: warm
    richness: moderate
    format: salad
    cuisine: middle-eastern
    spice_level: mild
    diet: [vegetarian, gluten-free]
  - name: "Provencal Salad"
    recipe_id: provencal-salad
    recipe_source: repertoire
    tag_source: linked
    protein: vegetable
    temperature: cold
    weather: hot
    richness: moderate
    format: salad
    cuisine: french
    spice_level: mild
    diet: [gluten-free]
  - name: "Orange Fennel Salad"
    recipe_id: orange-fennel-salad
    recipe_source: repertoire
    tag_source: linked
    protein: vegetable
    temperature: cold
    weather: hot
    richness: light
    format: salad
    cuisine: mediterranean
    spice_level: mild
    diet: []
  - name: "Vege Chicken Salad"
    recipe_id: vege-chicken-salad
    recipe_source: repertoire
    tag_source: linked
    protein: plant-substitute
    temperature: cold
    weather: warm
    richness: light
    format: salad
    cuisine: caribbean
    spice_level: medium
    diet: []
  - name: "Bandhu Salad"
    recipe_id: bandhu-salad
    recipe_source: repertoire
    tag_source: linked
    protein: vegetable
    temperature: room
    weather: 
    richness: moderate
    format: salad
    cuisine: indian
    spice_level: mild
    diet: [vegan, vegetarian, gluten-free, dairy-free]
  - name: "Root Trio"
    recipe_id: root-trio
    recipe_source: repertoire
    tag_source: linked
    protein: vegetable
    temperature: cold
    weather: warm
    richness: light
    format: salad
    cuisine: 
    spice_level: none
    diet: []
  - name: "Satay Sauce"
    recipe_id: satay-sauce
    recipe_source: repertoire
    tag_source: linked
    protein: nut-seed
    temperature: 
    weather: 
    richness: rich
    format: sauce-condiment
    cuisine: thai
    spice_level: medium
    diet: [vegan, vegetarian, dairy-free]
  - name: "Broccoli and Pistachio Hummus"
    recipe_id: broccoli-and-pistachio-hummus
    recipe_source: repertoire
    tag_source: linked
    protein: legume
    temperature: cold
    weather: warm
    richness: moderate
    format: dip-spread
    cuisine: middle-eastern
    spice_level: mild
    diet: [vegan, vegetarian, gluten-free, dairy-free]
  - name: "Dill Hummus"
    recipe_id: dill-hummus
    recipe_source: repertoire
    tag_source: linked
    protein: legume
    temperature: cold
    weather: hot
    richness: moderate
    format: dip-spread
    cuisine: middle-eastern
    spice_level: mild
    diet: [vegan, vegetarian, gluten-free, dairy-free]
  - name: "Forestiere Quiche"
    recipe_id: forestiere-quiche
    recipe_source: repertoire
    tag_source: linked
    protein: egg
    temperature: warm
    weather: 
    richness: rich
    format: casserole
    cuisine: french
    spice_level: mild
    diet: [vegetarian]
  - name: "Pico de Gallo"
    recipe_id: pico-de-gallo
    recipe_source: repertoire
    tag_source: linked
    protein: vegetable
    temperature: cold
    weather: hot
    richness: lean
    format: sauce-condiment
    cuisine: mexican
    spice_level: medium
    diet: [vegan, vegetarian, gluten-free, dairy-free]
---

# Week of 17-21 August 2026 (real forecast)

> **⚠️ GENERATED MOCK - not a real chef menu.** A `menus-recommend` "what-if" week
> drawing dishes from `data/repertoire/`, shaped by `data/menus/PATTERNS.md`
> (generated 2026-08-09). **Weather is REAL** (Open-Meteo forecast for Montreal,
> fetched 2026-08-15). Isolated under `data/menus/generated/`. See **Why this menu**.

## Weekly production

**Vege (mains)** - Ratatouille · Veggie Paella · Braised Vegetables · Vegan Poutine (Medium)
**Poisson** - Salmon Pesto Artichoke · Sesame Ginger Salmon · Haddock Curry with Mango and Coconut
**Texture (vege chicken/beef)** - Veggie Chicken Makhani · Veggie Chicken Satay with Almonds
**Soupe** - Korean Soup · Green Tom Yum Soup · Mushroom Tarragon Soup · Harira · Cold Melonccio Soup
**Potage** - Cream of Tomato Soup · Parsnip Pear Pecan Soup · Squash Spinach Coconut · Carrot Apple Curry · The Moroccan
**Sandwichs** - Salmon Pesto Artichoke Sandwich · Satay Vege Chicken Banh Mi Sandwich
**Salades** - Kale Mango Cabbage Salad · Creamy Broccoli Salad · Beet Goat Cheese · Carrot, Celeriac, and Almond Salad · Provencal Salad · Orange Fennel Salad
**Salade compose** - Vege Chicken Salad · Bandhu Salad · Root Trio
**Sauces** - Satay Sauce
**Hummus** - Broccoli and Pistachio Hummus · Dill Hummus
**Quiche** - Forestiere Quiche
**Pico de gallo** - Pico de Gallo

## Weekly schedule

| Day | Temp | Weather | Featured dishes | Notes |
|---|---|---|---|---|
| **Monday** | 22 °C | heavy rain | Kale Mango Cabbage Salad, Korean Soup, Cream of Tomato Soup, Creamy Broccoli Salad, Beet Goat Cheese, Salmon Pesto Artichoke, Ratatouille, Vegan Poutine (Medium), Broccoli and Pistachio Hummus | Heavy rain (59% pop) - comfort mains (poutine, ratatouille) hold. KM on Monday per placement rule. |
| **Tuesday** | 25 °C | overcast | Veggie Chicken Makhani, Green Tom Yum Soup, The Moroccan, Provencal Salad, Carrot, Celeriac, and Almond Salad, Vege Chicken Salad, Veggie Paella, Salmon Pesto Artichoke Sandwich, Satay Vege Chicken Banh Mi Sandwich, Satay Sauce, Forestiere Quiche, Dill Hummus | Warmest day (25 C). Sandwiches + sauces made this morning after soups. First texture main (makhani). |
| **Wednesday** | 24 °C | light drizzle | Cold Melonccio Soup, Mushroom Tarragon Soup, Squash Spinach Coconut, Sesame Ginger Salmon, Orange Fennel Salad, Bandhu Salad, Braised Vegetables | 3-day >=24 C streak reached (Tue-Thu) -> one chilled cold soup (Melonccio). Salmon ginger paired with salmon pesto. |
| **Thursday** | 24 °C | overcast | Veggie Chicken Satay with Almonds, Harira, Carrot Apple Curry, Parsnip Pear Pecan Soup, Haddock Curry with Mango and Coconut, Pico de Gallo, Root Trio, Orange Fennel Salad | Pico on Thursday (warm day + Thursday slot). Second texture (satay) spaced from Tuesday. Extra late soups made for Friday. |
| **Friday** | 24 °C | overcast | Korean Soup, Cold Melonccio Soup, Kale Mango Cabbage Salad, Creamy Broccoli Salad, Haddock Curry with Mango and Coconut | SERVICE-ONLY - no production. Thursday's late soups + pret-a-manger stock serve today. |

## Comments and weather

Warm, showery late-August week. Rainy Monday (22 C) then a genuine 3-day >=24 C streak Tue-Thu - the chef's stated trigger for a chilled cold soup - so one Melonccio is placed midweek. Otherwise a salad-leaning warm-week shape with the full spine on every service day. Production Mon-Thu; Friday service-only.

## Why this menu

### Strategy

Real forecast, warm and showery. The week keeps the full spine (soup + salad + fish
every service day) but leans **salad-forward** because four of five days sit at
24-25 C. The one weather event that changes the shape is the **3-day >=24 C streak
(Tue-Thu)**, which meets the chef's stated chilled-cold-soup trigger - so a single
Melonccio goes on midweek. The rainy Monday keeps a couple of comfort mains
(poutine, ratatouille) on to hold sales on a stay-home day.

### Per-day notes

- **Monday (22 C, heavy rain).** Comfort mains hold against a stay-home day; KM anchors Monday.
- **Tuesday (25 C).** Warmest day, salad-lean; sandwiches + sauces produced this morning; first texture (makhani).
- **Wednesday (24 C).** Mid-streak - the chilled Melonccio lands here; salmon ginger pairs with salmon pesto.
- **Thursday (24 C).** Pico takes its Thursday slot on a warm day; second texture (satay) spaced a day from Tuesday; extra late soups made for Friday.
- **Friday (24 C).** Service-only - Thursday's late soups + pret-a-manger stock.

### Pattern citations

- Chilled cold soup only on a 2-3 day >=24 C streak - **weather_temp**, chef-stated (high). The Tue-Thu streak qualifies.
- KM -> Monday - **per_day_balance**, chef-stated (high).
- Texture mains Tue + Thu, spaced - **per_day_balance**, chef-stated (high).
- Pico -> Thursday, never Monday; warm/surplus-driven - **per_day_balance / weather_temp**, chef-stated (high).
- Salmon ginger paired with salmon pesto same week - **rotation**, chef-stated (high).
- Two spicy Asian soups (Korean, Tom Yum) kept alongside savoury non-spicy (Mushroom Tarragon, Harira) - **rotation**, chef-stated (high).
- Forestiere quiche in place of the ham quiche - **rotation**, chef-stated (high).
- One carrot salad (Carrot-Celeriac-Almond); one cabbage salad (KM only) - **per_day_balance**, chef-stated (high).
- Vege chicken salad as this week's alternating compose - **rotation** (tuna <-> vege chicken biweekly), chef-stated (high).
- Ratatouille without lasagna; paella without risotto - **rotation** alternation, chef-stated (high).
- Mon-Thu production, Friday service-only - **per_day_balance / work-week**, chef-stated (high).
- Skeleton counts (6 salades, 5 soupe, 5 potage, 4 vege, 3 poisson, 3 compose, 2 hummus, 2 texture, 2 sandwich, 1 sauce, 1 quiche, 1 pico) - **menu_skeleton** medians (high).

### Improvisation / honesty flags

- **Weather is REAL but a forecast** (fetched 2026-08-15); values 2-6 days out can shift, which would move the cold-soup decision.
- **The chilled cold soup is a borderline call.** The streak is 24-25 C - warm, but not the "hottest part of summer" the chef reserves Melonccio for. Placed because the >=24 C streak rule is met; flag it as the one weather-judgment on the week.
- **One-chicken + one-vege-beef texture only half-met** - both textures are vege *chicken* (Makhani, Satay); the repertoire has no distinct vege-*beef* texture main. Repertoire gap, not a chef choice.
- **The "Ham" staple (47/47 weeks) is unrepresented** - the pool is vegan-forward with no standalone ham main.
- **Tags are linked from the repertoire recipes** (themselves largely inferred; see PATTERNS.md small-sample caveat).
- **Soupe vs. potage split is my inferred judgment** (most are tagged `format: soup`).
- **Poke omitted** - the one-poke-per-week slot has no category in the menu template.
