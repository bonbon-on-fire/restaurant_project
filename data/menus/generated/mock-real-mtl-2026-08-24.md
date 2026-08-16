---
# ============================================================
# GENERATED MOCK MENU - machine-made week built on REAL weather.
# NOT a real chef menu. Produced by the menus-recommend skill.
# ============================================================
id: mock-real-mtl-2026-08-24
source: generated
status: mock
generated: 2026-08-15
patterns_generated: 2026-08-09
scenario:
  given: "real Montreal weather, next few weeks (auto-fetched forecast); week of 2026-08-24"
  invented: >-
    Nothing about the weather is invented - Mon 22C, Tue 20C rain, Wed 19C, Thu 17C,
    Fri 20C are the Open-Meteo forecast. No statutory holiday this week. No >=24C day,
    so no chilled cold soup; a cool, wet week that favours hearty soupes and stews.
  week_label: "24-28 August 2026 (real forecast)"
  weather_source: >-
    Open-Meteo forecast for Montreal (45.50N, 73.57W), fetched 2026-08-15.
    Real forecast values - subject to change as the dates approach.
pool:
  vege: ["Gluten-Free Vegetable Lasagna", "Mushroom Risotto", "Braised Vegetables", "Vegan Poutine (Medium)"]
  poisson: ["Salmon Pesto Artichoke", "Moqueca", "Salt Cod Curry"]
  texture: ["Veggie Thai Chicken", "Veggie Jerk Chicken with Orange Remoulade"]
  soupe: ["Korean Soup", "Vegan Pho Soup", "Thai Peanut", "Lentil Stew", "Harira"]
  potage: ["Cream of Tomato Soup", "Carrot Madras Curry", "Squash Spinach Coconut", "The Moroccan", "Parsnip Pear Pecan Soup"]
  sandwichs: ["Blackened Haddock Sandwich", "Hummus Apple and Brie Sandwich"]
  salades: ["Kale Mango Cabbage Salad", "Creamy Broccoli Salad", "Beet Hazelnut Salad", "Carrot Orange", "Crunchy Cabbage Salad", "Provencal Salad"]
  salade-comp: ["Black-Eyed Pea Salad", "Squash Lentils"]
  sauces: ["Romesco"]
  hummus: ["Cashew Hummus", "Parsnip Hummus"]
  quiche: ["Salmon Shrimp and Vegetable Quiche"]
schedule:
  - day: monday
    date: 2026-08-24
    dishes: ["Kale Mango Cabbage Salad", "Korean Soup", "Cream of Tomato Soup", "Creamy Broccoli Salad", "Beet Hazelnut Salad", "Salmon Pesto Artichoke", "Gluten-Free Vegetable Lasagna", "Cashew Hummus"]
    temp_c: 22
    weather: "overcast"
    notes: "KM on Monday. Lasagna anchors the hearty mains for the cooling week."
  - day: tuesday
    date: 2026-08-25
    dishes: ["Veggie Thai Chicken", "Vegan Pho Soup", "Carrot Madras Curry", "Provencal Salad", "Carrot Orange", "Black-Eyed Pea Salad", "Mushroom Risotto", "Blackened Haddock Sandwich", "Hummus Apple and Brie Sandwich", "Romesco", "Salmon Shrimp and Vegetable Quiche", "Parsnip Hummus"]
    temp_c: 20
    weather: "rain showers"
    notes: "Cool & rainy. Sandwiches + sauce made this morning. First texture (thai chicken). Risotto this week (no paella)."
  - day: wednesday
    date: 2026-08-26
    dishes: ["Thai Peanut", "Lentil Stew", "Squash Spinach Coconut", "Moqueca", "Crunchy Cabbage Salad", "Squash Lentils", "Braised Vegetables"]
    temp_c: 19
    weather: "heavy drizzle"
    notes: "Coolest, wettest midweek -> hearty stews (lentil, moqueca) and warming soups."
  - day: thursday
    date: 2026-08-27
    dishes: ["Veggie Jerk Chicken with Orange Remoulade", "Harira", "The Moroccan", "Parsnip Pear Pecan Soup", "Salt Cod Curry", "Vegan Poutine (Medium)", "Provencal Salad"]
    temp_c: 17
    weather: "overcast"
    notes: "Coldest day (17 C) -> hearty. Second texture (jerk) spaced from Tuesday. Orange remoulade omitted because jerk chicken is on the menu (rotation rule). Extra late soups for Friday."
  - day: friday
    date: 2026-08-28
    dishes: ["Korean Soup", "Thai Peanut", "Kale Mango Cabbage Salad", "Creamy Broccoli Salad", "Salt Cod Curry"]
    temp_c: 20
    weather: "overcast"
    notes: "SERVICE-ONLY - no production. Thursday's late soups + pret-a-manger stock serve today."
dishes:
  - name: "Gluten-Free Vegetable Lasagna"
    recipe_id: gluten-free-vegetable-lasagna
    recipe_source: repertoire
    tag_source: linked
    protein: vegetable
    temperature: hot
    weather: cold
    richness: rich
    format: casserole
    cuisine: italian
    spice_level: none
    diet: [vegetarian, gluten-free]
  - name: "Mushroom Risotto"
    recipe_id: mushroom-risotto
    recipe_source: repertoire
    tag_source: linked
    protein: grain
    temperature: hot
    weather: cool
    richness: rich
    format: plated-main
    cuisine: italian
    spice_level: mild
    diet: [gluten-free]
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
  - name: "Moqueca"
    recipe_id: moqueca
    recipe_source: repertoire
    tag_source: linked
    protein: fish
    temperature: hot
    weather: cool
    richness: rich
    format: stew
    cuisine: brazilian
    spice_level: medium
    diet: [pescatarian, dairy-free, gluten-free]
  - name: "Salt Cod Curry"
    recipe_id: salt-cod-curry
    recipe_source: repertoire
    tag_source: linked
    protein: fish
    temperature: hot
    weather: cool
    richness: moderate
    format: curry
    cuisine: caribbean
    spice_level: medium
    diet: [pescatarian, dairy-free]
  - name: "Veggie Thai Chicken"
    recipe_id: veggie-thai-chicken
    recipe_source: repertoire
    tag_source: linked
    protein: plant-substitute
    temperature: hot
    weather: cool
    richness: rich
    format: curry
    cuisine: thai
    spice_level: medium
    diet: [vegan, vegetarian, dairy-free]
  - name: "Veggie Jerk Chicken with Orange Remoulade"
    recipe_id: veggie-jerk-chicken-with-orange-remoulade
    recipe_source: repertoire
    tag_source: linked
    protein: plant-substitute
    temperature: hot
    weather: cool
    richness: rich
    format: plated-main
    cuisine: caribbean
    spice_level: hot
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
  - name: "Vegan Pho Soup"
    recipe_id: vegan-pho-soup
    recipe_source: repertoire
    tag_source: linked
    protein: vegetable
    temperature: hot
    weather: cold
    richness: light
    format: soup
    cuisine: vietnamese
    spice_level: medium
    diet: [vegan, vegetarian, gluten-free, dairy-free]
  - name: "Thai Peanut"
    recipe_id: thai-peanut
    recipe_source: repertoire
    tag_source: linked
    protein: vegetable
    temperature: hot
    weather: cool
    richness: moderate
    format: soup
    cuisine: thai
    spice_level: medium
    diet: []
  - name: "Lentil Stew"
    recipe_id: lentil-stew
    recipe_source: repertoire
    tag_source: linked
    protein: legume
    temperature: hot
    weather: cold
    richness: moderate
    format: stew
    cuisine: french
    spice_level: mild
    diet: [vegan, vegetarian, dairy-free]
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
  - name: "Carrot Madras Curry"
    recipe_id: carrot-madras-curry
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
  - name: "Blackened Haddock Sandwich"
    recipe_id: blackened-haddock-sandwich
    recipe_source: repertoire
    tag_source: linked
    protein: fish
    temperature: warm
    weather: 
    richness: moderate
    format: handheld
    cuisine: fusion
    spice_level: medium
    diet: [pescatarian]
  - name: "Hummus Apple and Brie Sandwich"
    recipe_id: hummus-apple-and-brie-sandwich
    recipe_source: repertoire
    tag_source: linked
    protein: mixed
    temperature: room
    weather: 
    richness: moderate
    format: handheld
    cuisine: 
    spice_level: mild
    diet: [vegetarian]
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
  - name: "Beet Hazelnut Salad"
    recipe_id: beet-hazelnut-salad
    recipe_source: repertoire
    tag_source: linked
    protein: vegetable
    temperature: cold
    weather: warm
    richness: moderate
    format: salad
    cuisine: 
    spice_level: none
    diet: [vegan, vegetarian, gluten-free, dairy-free]
  - name: "Carrot Orange"
    recipe_id: carrot-orange
    recipe_source: repertoire
    tag_source: linked
    protein: vegetable
    temperature: cold
    weather: warm
    richness: 
    format: salad
    cuisine: 
    spice_level: 
    diet: []
  - name: "Crunchy Cabbage Salad"
    recipe_id: crunchy-cabbage-salad
    recipe_source: repertoire
    tag_source: linked
    protein: vegetable
    temperature: cold
    weather: warm
    richness: moderate
    format: salad
    cuisine: 
    spice_level: mild
    diet: [vegetarian, gluten-free, dairy-free]
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
  - name: "Black-Eyed Pea Salad"
    recipe_id: black-eyed-pea-salad
    recipe_source: repertoire
    tag_source: linked
    protein: legume
    temperature: cold
    weather: warm
    richness: moderate
    format: salad
    cuisine: southern-us
    spice_level: mild
    diet: [vegan, vegetarian, gluten-free, dairy-free]
  - name: "Squash Lentils"
    recipe_id: squash-lentils
    recipe_source: repertoire
    tag_source: linked
    protein: legume
    temperature: cold
    weather: warm
    richness: moderate
    format: salad
    cuisine: 
    spice_level: 
    diet: []
  - name: "Romesco"
    recipe_id: romesco
    recipe_source: repertoire
    tag_source: linked
    protein: 
    temperature: room
    weather: 
    richness: moderate
    format: sauce-condiment
    cuisine: spanish
    spice_level: mild
    diet: [vegan, dairy-free]
  - name: "Cashew Hummus"
    recipe_id: cashew-hummus
    recipe_source: repertoire
    tag_source: linked
    protein: legume
    temperature: room
    weather: 
    richness: moderate
    format: dip-spread
    cuisine: middle-eastern
    spice_level: mild
    diet: [vegetarian, gluten-free, dairy-free]
  - name: "Parsnip Hummus"
    recipe_id: parsnip-hummus
    recipe_source: repertoire
    tag_source: linked
    protein: legume
    temperature: room
    weather: 
    richness: moderate
    format: dip-spread
    cuisine: middle-eastern
    spice_level: mild
    diet: [vegan, vegetarian, gluten-free, dairy-free]
  - name: "Salmon Shrimp and Vegetable Quiche"
    recipe_id: salmon-shrimp-and-vegetable-quiche
    recipe_source: repertoire
    tag_source: linked
    protein: mixed
    temperature: hot
    weather: cool
    richness: rich
    format: casserole
    cuisine: french
    spice_level: mild
    diet: [pescatarian]
---

# Week of 24-28 August 2026 (real forecast)

> **⚠️ GENERATED MOCK - not a real chef menu.** A `menus-recommend` "what-if" week
> drawing dishes from `data/repertoire/`, shaped by `data/menus/PATTERNS.md`
> (generated 2026-08-09). **Weather is REAL** (Open-Meteo forecast for Montreal,
> fetched 2026-08-15). Isolated under `data/menus/generated/`. See **Why this menu**.

## Weekly production

**Vege (mains)** - Gluten-Free Vegetable Lasagna · Mushroom Risotto · Braised Vegetables · Vegan Poutine (Medium)
**Poisson** - Salmon Pesto Artichoke · Moqueca · Salt Cod Curry
**Texture (vege chicken/beef)** - Veggie Thai Chicken · Veggie Jerk Chicken with Orange Remoulade
**Soupe** - Korean Soup · Vegan Pho Soup · Thai Peanut · Lentil Stew · Harira
**Potage** - Cream of Tomato Soup · Carrot Madras Curry · Squash Spinach Coconut · The Moroccan · Parsnip Pear Pecan Soup
**Sandwichs** - Blackened Haddock Sandwich · Hummus Apple and Brie Sandwich
**Salades** - Kale Mango Cabbage Salad · Creamy Broccoli Salad · Beet Hazelnut Salad · Carrot Orange · Crunchy Cabbage Salad · Provencal Salad
**Salade compose** - Black-Eyed Pea Salad · Squash Lentils
**Sauces** - Romesco
**Hummus** - Cashew Hummus · Parsnip Hummus
**Quiche** - Salmon Shrimp and Vegetable Quiche

## Weekly schedule

| Day | Temp | Weather | Featured dishes | Notes |
|---|---|---|---|---|
| **Monday** | 22 °C | overcast | Kale Mango Cabbage Salad, Korean Soup, Cream of Tomato Soup, Creamy Broccoli Salad, Beet Hazelnut Salad, Salmon Pesto Artichoke, Gluten-Free Vegetable Lasagna, Cashew Hummus | KM on Monday. Lasagna anchors the hearty mains for the cooling week. |
| **Tuesday** | 20 °C | rain showers | Veggie Thai Chicken, Vegan Pho Soup, Carrot Madras Curry, Provencal Salad, Carrot Orange, Black-Eyed Pea Salad, Mushroom Risotto, Blackened Haddock Sandwich, Hummus Apple and Brie Sandwich, Romesco, Salmon Shrimp and Vegetable Quiche, Parsnip Hummus | Cool & rainy. Sandwiches + sauce made this morning. First texture (thai chicken). Risotto this week (no paella). |
| **Wednesday** | 19 °C | heavy drizzle | Thai Peanut, Lentil Stew, Squash Spinach Coconut, Moqueca, Crunchy Cabbage Salad, Squash Lentils, Braised Vegetables | Coolest, wettest midweek -> hearty stews (lentil, moqueca) and warming soups. |
| **Thursday** | 17 °C | overcast | Veggie Jerk Chicken with Orange Remoulade, Harira, The Moroccan, Parsnip Pear Pecan Soup, Salt Cod Curry, Vegan Poutine (Medium), Provencal Salad | Coldest day (17 C) -> hearty. Second texture (jerk) spaced from Tuesday. Orange remoulade omitted because jerk chicken is on the menu (rotation rule). Extra late soups for Friday. |
| **Friday** | 20 °C | overcast | Korean Soup, Thai Peanut, Kale Mango Cabbage Salad, Creamy Broccoli Salad, Salt Cod Curry | SERVICE-ONLY - no production. Thursday's late soups + pret-a-manger stock serve today. |

## Comments and weather

Distinctly cooler, wetter week - highs fall from 22 C Monday to 17 C Thursday with rain midweek. Per the chef, cool weather broadens demand (soups AND hearty AND salads all sell), so the week leans into hot soupes and hearty mains (lasagna, risotto, stews) while keeping salads on. No >=24 C day, so no cold soup. Production Mon-Thu; Friday service-only.

## Why this menu

### Strategy

Real forecast, and a clear contrast with the prior week: highs slide from 22 C to
**17 C** with rain midweek. The chef's stated read of cool weather is that it
*broadens* demand - soups, hearty mains, and salads all sell - so this week leans
into **hot soupes and hearty mains** (lasagna, risotto, lentil stew, moqueca) while
keeping a full salad line. With **no >=24 C day**, there is deliberately **no cold
soup**. Rotating dishes are swapped from last week for biweekly variety.

### Per-day notes

- **Monday (22 C).** KM anchors Monday; lasagna leads the hearty mains as the week cools.
- **Tuesday (20 C, rain).** Sandwiches + sauce made this morning; first texture (thai chicken); risotto this week.
- **Wednesday (19 C, wet).** Coolest, wettest midweek - hearty stews (lentil, moqueca) and warming soups.
- **Thursday (17 C).** Coldest day, hearty; second texture (jerk) spaced from Tuesday; extra late soups for Friday.
- **Friday (20 C).** Service-only - Thursday's late soups + pret-a-manger stock.

### Pattern citations

- Cool weather -> soups + hearty + salads all sell - **weather_temp**, chef-stated (medium).
- No >=24 C day -> no chilled cold soup - **weather_temp**, chef-stated (high).
- KM -> Monday - **per_day_balance**, chef-stated (high).
- Texture mains Tue + Thu, spaced - **per_day_balance**, chef-stated (high).
- Orange remoulade left off because jerk chicken is on the menu - **rotation**, chef-stated (high).
- Ratatouille <-> lasagna alternate (lasagna this week; ratatouille last week) - **rotation**, chef-stated (high).
- Mushroom risotto <-> paella never share a week (risotto this week; paella last week) - **rotation**, chef-stated (high).
- Mushroom tarragon dropped this week (biweekly, ran last week) - **rotation**, chef-stated (high).
- Hummus colours varied week to week (pale cashew/parsnip vs. last week's green) - **rotation**, chef-stated (high).
- Two spicy Asian soups (Korean, Pho, Thai Peanut) kept alongside savoury non-spicy (Lentil Stew, Harira) - **rotation**, chef-stated (high).
- <=2 cabbage salads (KM + crunchy cabbage); one carrot salad (carrot-orange) - **per_day_balance**, chef-stated (high).
- Mon-Thu production, Friday service-only - **per_day_balance / work-week**, chef-stated (high).
- Skeleton counts (6 salades, 5 soupe, 5 potage, 4 vege, 3 poisson, 2 compose, 2 hummus, 2 texture, 2 sandwich, 1 sauce, 1 quiche) - **menu_skeleton** medians (high; compose at min 2).

### Improvisation / honesty flags

- **Weather is REAL but a forecast** (fetched 2026-08-15); 9-13 days out it can shift materially - treat this week's temps as indicative.
- **The biweekly tuna-salad compose is omitted** - the tuna <-> vege chicken compose alternation would put tuna salad here, but the repertoire has no standalone tuna-salad file (only tuna wraps), so the compose count sits at the minimum of 2.
- **One-chicken + one-vege-beef texture only half-met** - both textures are vege *chicken* (Thai, Jerk); no distinct vege-*beef* texture main exists in the repertoire.
- **The "Ham" staple (47/47 weeks) is unrepresented** - vegan-forward pool, no standalone ham main.
- **Romesco as the week's sauce is a soft fit** - its stated trigger is cheap cauliflower (not on this menu); used here as a general sauce. Swap to a marinara if lasagna's day-before sauce is wanted instead (no dedicated marinara file exists in the repertoire).
- **Tags are linked from the repertoire recipes** (themselves largely inferred).
- **Soupe vs. potage split is my inferred judgment.**
- **Poke omitted** - no category in the menu template.
