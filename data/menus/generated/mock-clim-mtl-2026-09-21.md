---
# ============================================================
# GENERATED MOCK MENU - machine-made week.
# NOT a real chef menu. Produced by the menus-recommend skill.
# ============================================================
id: mock-clim-mtl-2026-09-21
source: generated
status: mock
generated: 2026-08-15
patterns_generated: 2026-08-09
scenario:
  given: "remaining Montreal production weeks (seasonal); week of 2026-09-21"
  invented: >-
    Weather invented from late-Sep normals: Mon 18C, Tue 17C rain, Wed 16C, Thu 15C rain, Fri 17C.
    Autumn proper. No statutory holiday this week. Wraps stay on for the school year.
  week_label: "21-25 September 2026 (seasonal estimate)"
  weather_source: >-
    Invented from Montreal September climate normals (highs easing ~24C -> ~15C
    through the month, more frequent rain). The real Open-Meteo forecast only reaches
    2026-08-30, so every day here is a plausible seasonal placeholder, NOT a forecast.
pool:
  vege: ["Gluten-Free Vegetable Lasagna", "Mushroom Risotto", "Braised Vegetables", "Vegan Poutine (Medium)"]
  poisson: ["Salmon Pesto Artichoke", "Moqueca", "Cod Quenelles (flat)"]
  texture: ["Veggie Jerk Chicken with Orange Remoulade", "Festive Vegan Meatballs"]
  soupe: ["Korean Soup", "Vegan Pho Soup", "Mole Verde Soup", "Lentil Stew", "Harira"]
  potage: ["Cream of Tomato Soup", "Sweet Potato White Wine", "Squash Spinach Coconut", "Carrot Madras Curry", "Parsnip Pear Pecan Soup"]
  sandwichs: ["Blackened Haddock Sandwich", "Tropical Veggie Chicken Sandwich"]
  wraps: ["Satay Veggie Chicken Banh-Mi Wrap", "Hummus, Apple, and Brie Wrap"]
  salades: ["Kale Mango Cabbage Salad", "Creamy Broccoli Salad", "Beet Hazelnut Salad", "Carrot Orange", "Crunchy Cabbage Salad", "Provencal Salad"]
  salade-comp: ["Black-Eyed Pea Salad", "Squash Lentils"]
  sauces: ["Romesco"]
  hummus: ["Cashew Hummus", "Roasted Peppers"]
  quiche: ["Ham and Vegetable Quiche"]
schedule:
  - day: monday
    date: 2026-09-21
    dishes: ["Kale Mango Cabbage Salad", "Korean Soup", "Cream of Tomato Soup", "Creamy Broccoli Salad", "Beet Hazelnut Salad", "Salmon Pesto Artichoke", "Gluten-Free Vegetable Lasagna", "Cashew Hummus"]
    temp_c: 18
    weather: "partly cloudy"
    notes: "KM on Monday. Lasagna leads the hearty mains."
  - day: tuesday
    date: 2026-09-22
    dishes: ["Veggie Jerk Chicken with Orange Remoulade", "Vegan Pho Soup", "Carrot Madras Curry", "Provencal Salad", "Carrot Orange", "Black-Eyed Pea Salad", "Mushroom Risotto", "Blackened Haddock Sandwich", "Tropical Veggie Chicken Sandwich", "Satay Veggie Chicken Banh-Mi Wrap", "Hummus, Apple, and Brie Wrap", "Romesco", "Ham and Vegetable Quiche", "Roasted Peppers"]
    temp_c: 17
    weather: "rain"
    notes: "Cool & rainy. Sandwiches + wraps + sauce this morning. First texture (jerk chicken) -> orange remoulade omitted (rotation rule). Ham quiche (staple)."
  - day: wednesday
    date: 2026-09-23
    dishes: ["Mole Verde Soup", "Sweet Potato White Wine", "Moqueca", "Crunchy Cabbage Salad", "Squash Lentils", "Braised Vegetables"]
    temp_c: 16
    weather: "cloudy"
    notes: "Cool -> hearty and warming."
  - day: thursday
    date: 2026-09-24
    dishes: ["Festive Vegan Meatballs", "Lentil Stew", "Squash Spinach Coconut", "Parsnip Pear Pecan Soup", "Cod Quenelles (flat)", "Vegan Poutine (Medium)", "Harira"]
    temp_c: 15
    weather: "light rain"
    notes: "Coldest, wettest day -> hearty (meatballs, lentil stew, poutine). Second texture (vegan meatballs = vege-beef). Extra late soups for Friday."
  - day: friday
    date: 2026-09-25
    dishes: ["Korean Soup", "Mole Verde Soup", "Kale Mango Cabbage Salad", "Creamy Broccoli Salad", "Cod Quenelles (flat)"]
    temp_c: 17
    weather: "cloudy"
    notes: "SERVICE-ONLY - no production. Thursday's late soups + pret-a-manger stock."
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
  - name: "Cod Quenelles (flat)"
    recipe_id: cod-quenelles-flat
    recipe_source: repertoire
    tag_source: linked
    protein: fish
    temperature: hot
    weather: cool
    richness: moderate
    format: plated-main
    cuisine: portuguese
    spice_level: mild
    diet: [pescatarian]
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
  - name: "Festive Vegan Meatballs"
    recipe_id: festive-vegan-meatballs
    recipe_source: repertoire
    tag_source: linked
    protein: plant-substitute
    temperature: hot
    weather: cold
    richness: rich
    format: shareable
    cuisine: american
    spice_level: mild
    diet: [vegan, vegetarian, dairy-free, gluten-free]
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
  - name: "Mole Verde Soup"
    recipe_id: mole-verde-soup
    recipe_source: repertoire
    tag_source: linked
    protein: none
    temperature: hot
    weather: cold
    richness: moderate
    format: soup
    cuisine: mexican
    spice_level: medium
    diet: [vegan, vegetarian, dairy-free, nut-free]
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
  - name: "Sweet Potato White Wine"
    recipe_id: sweet-potato-white-wine
    recipe_source: repertoire
    tag_source: linked
    protein: vegetable
    temperature: hot
    weather: cold
    richness: moderate
    format: soup
    cuisine: 
    spice_level: none
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
  - name: "Tropical Veggie Chicken Sandwich"
    recipe_id: tropical-veggie-chicken-sandwich
    recipe_source: repertoire
    tag_source: linked
    protein: plant-substitute
    temperature: cold
    weather: warm
    richness: moderate
    format: handheld
    cuisine: caribbean
    spice_level: medium
    diet: [vegetarian, dairy-free]
  - name: "Satay Veggie Chicken Banh-Mi Wrap"
    recipe_id: satay-veggie-chicken-banh-mi-wrap
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
  - name: "Hummus, Apple, and Brie Wrap"
    recipe_id: hummus-apple-and-brie-wrap
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
    richness: light
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
  - name: "Roasted Peppers"
    recipe_id: roasted-peppers
    recipe_source: repertoire
    tag_source: linked
    protein: legume
    temperature: cold
    weather: warm
    richness: moderate
    format: dip-spread
    cuisine: middle-eastern
    spice_level: mild
    diet: [vegan, dairy-free]
  - name: "Ham and Vegetable Quiche"
    recipe_id: ham-and-vegetable-quiche
    recipe_source: repertoire
    tag_source: linked
    protein: egg
    temperature: warm
    weather: cool
    richness: rich
    format: casserole
    cuisine: french
    spice_level: none
    diet: [vegetarian]
---

# Week of 21-25 September 2026 (seasonal estimate)

> **⚠️ GENERATED MOCK - not a real chef menu.** A `menus-recommend` "what-if" week
> drawing dishes from `data/repertoire/`, shaped by `data/menus/PATTERNS.md`
> (generated 2026-08-09). **Weather is INVENTED** from Montreal September climate
> normals - it is beyond the 16-day forecast horizon, so treat temps as seasonal
> placeholders, not a forecast. Isolated under `data/menus/generated/`.

## Weekly production

**Vege (mains)** - Gluten-Free Vegetable Lasagna · Mushroom Risotto · Braised Vegetables · Vegan Poutine (Medium)
**Poisson** - Salmon Pesto Artichoke · Moqueca · Cod Quenelles (flat)
**Texture (vege chicken/beef)** - Veggie Jerk Chicken with Orange Remoulade · Festive Vegan Meatballs
**Soupe** - Korean Soup · Vegan Pho Soup · Mole Verde Soup · Lentil Stew · Harira
**Potage** - Cream of Tomato Soup · Sweet Potato White Wine · Squash Spinach Coconut · Carrot Madras Curry · Parsnip Pear Pecan Soup
**Sandwichs** - Blackened Haddock Sandwich · Tropical Veggie Chicken Sandwich
**Wraps** - Satay Veggie Chicken Banh-Mi Wrap · Hummus, Apple, and Brie Wrap
**Salades** - Kale Mango Cabbage Salad · Creamy Broccoli Salad · Beet Hazelnut Salad · Carrot Orange · Crunchy Cabbage Salad · Provencal Salad
**Salade compose** - Black-Eyed Pea Salad · Squash Lentils
**Sauces** - Romesco
**Hummus** - Cashew Hummus · Roasted Peppers
**Quiche** - Ham and Vegetable Quiche

## Weekly schedule

| Day | Temp | Weather | Featured dishes | Notes |
|---|---|---|---|---|
| **Monday** | 18 °C | partly cloudy | Kale Mango Cabbage Salad, Korean Soup, Cream of Tomato Soup, Creamy Broccoli Salad, Beet Hazelnut Salad, Salmon Pesto Artichoke, Gluten-Free Vegetable Lasagna, Cashew Hummus | KM on Monday. Lasagna leads the hearty mains. |
| **Tuesday** | 17 °C | rain | Veggie Jerk Chicken with Orange Remoulade, Vegan Pho Soup, Carrot Madras Curry, Provencal Salad, Carrot Orange, Black-Eyed Pea Salad, Mushroom Risotto, Blackened Haddock Sandwich, Tropical Veggie Chicken Sandwich, Satay Veggie Chicken Banh-Mi Wrap, Hummus, Apple, and Brie Wrap, Romesco, Ham and Vegetable Quiche, Roasted Peppers | Cool & rainy. Sandwiches + wraps + sauce this morning. First texture (jerk chicken) -> orange remoulade omitted (rotation rule). Ham quiche (staple). |
| **Wednesday** | 16 °C | cloudy | Mole Verde Soup, Sweet Potato White Wine, Moqueca, Crunchy Cabbage Salad, Squash Lentils, Braised Vegetables | Cool -> hearty and warming. |
| **Thursday** | 15 °C | light rain | Festive Vegan Meatballs, Lentil Stew, Squash Spinach Coconut, Parsnip Pear Pecan Soup, Cod Quenelles (flat), Vegan Poutine (Medium), Harira | Coldest, wettest day -> hearty (meatballs, lentil stew, poutine). Second texture (vegan meatballs = vege-beef). Extra late soups for Friday. |
| **Friday** | 17 °C | cloudy | Korean Soup, Mole Verde Soup, Kale Mango Cabbage Salad, Creamy Broccoli Salad, Cod Quenelles (flat) | SERVICE-ONLY - no production. Thursday's late soups + pret-a-manger stock. |

## Comments and weather

Cool, wet autumn week (mid-teens). Full lean into hot soupes, stews, and hearty mains (lasagna, risotto, jerk chicken, meatballs) with salads still on. Lasagna/risotto swap in against last week's ratatouille/paella; mushroom tarragon rests (biweekly). Ham quiche takes the quiche slot.

## Why this menu

### Strategy

Cool, wet autumn week in the mid-teens - a full lean into hot soupes, stews, and
hearty mains, with salads still present. Rotation swaps to lasagna/risotto against
last week's ratatouille/paella, rests mushroom tarragon, and gives the quiche slot
to the ham quiche. Jerk chicken on the menu means its orange remoulade is left off
(chef rotation rule); the vege-beef meatballs take Thursday's texture.

### Per-day notes

- **Monday (18 C).** KM anchors Monday; lasagna leads.
- **Tuesday (17 C, rain).** Sandwiches + wraps + sauce this morning; jerk chicken (remoulade omitted); ham quiche.
- **Wednesday (16 C).** Warming soups + moqueca.
- **Thursday (15 C, rain).** Coldest/wettest -> hearty; second texture (vege-beef meatballs); extra late soups.
- **Friday (17 C).** Service-only.

### Pattern citations

- Cool/rainy -> push hot, hearty soupes and mains - **weather_temp**, chef-stated (high).
- No >=24C day -> no chilled cold soup - **weather_temp**, chef-stated (high).
- Orange remoulade left off because jerk chicken is on the menu - **rotation**, chef-stated (high).
- One-chicken + one-vege-beef texture pair MET (jerk chicken + vegan meatballs) - **per_day_balance**, chef-stated (high).
- KM -> Monday; texture mains Tue + Thu spaced - **per_day_balance**, chef-stated (high).
- Lasagna <-> ratatouille alternate; risotto <-> paella; mushroom tarragon OFF (biweekly) - **rotation**, chef-stated (high).
- Ham quiche honours the Ham staple; <=2 cabbage (KM + crunchy), one carrot - **menu_skeleton / per_day_balance**, high.
- Wraps on for the school year - **rotation / calendar**, chef-stated (high).
- Mon-Thu production, Friday service-only - **per_day_balance / work-week**, chef-stated (high).

### Improvisation / honesty flags

- **Weather is INVENTED** (late-September normals) - beyond the forecast horizon.
- **Some repertoire tags (weather/richness) were blank and inferred.**
- **Poke omitted** - no category in the menu template.
