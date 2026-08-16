---
# ============================================================
# GENERATED MOCK MENU - machine-made week.
# NOT a real chef menu. Produced by the menus-recommend skill.
# ============================================================
id: mock-clim-mtl-2026-09-07
source: generated
status: mock
generated: 2026-08-15
patterns_generated: 2026-08-09
scenario:
  given: "remaining Montreal production weeks (seasonal); week of 2026-09-07 (Labour Day)"
  invented: >-
    Weather invented from early-Sep normals: Tue 23C, Wed 21C, Thu 20C rain, Fri 21C.
    Monday Sep 7 is LABOUR DAY - a statutory Monday holiday, so the shop is CLOSED
    Monday and produces Tue-Thu. School year has started -> wraps go on the menu.
  week_label: "7-11 September 2026 (seasonal estimate; Labour Day)"
  weather_source: >-
    Invented from Montreal September climate normals (highs easing ~24C -> ~15C
    through the month, more frequent rain). The real Open-Meteo forecast only reaches
    2026-08-30, so every day here is a plausible seasonal placeholder, NOT a forecast.
pool:
  vege: ["Gluten-Free Vegetable Lasagna", "Mushroom Risotto", "Braised Vegetables", "Vegan Gluten-Free Mac N' Cheeze"]
  poisson: ["Salmon Pesto Artichoke", "Moqueca", "Salt Cod Curry"]
  texture: ["Veggie Chicken with Cardamom", "Coconut Jerk Tofu"]
  soupe: ["Korean Soup", "Vegan Pho Soup", "Mulligatawny", "Lentil Stew", "Harira"]
  potage: ["Cream of Tomato Soup", "Carrot Madras Curry", "Butternut Beet", "Squash Spinach Coconut", "Parsnip Pear Pecan Soup"]
  sandwichs: ["Blackened Haddock Sandwich", "Hummus Apple and Brie Sandwich"]
  wraps: ["Tuna Salad Wrap", "Hummus, Apple, and Brie Wrap"]
  salades: ["Kale Mango Cabbage Salad", "Creamy Broccoli Salad", "Beet Hazelnut Salad", "Carrot Orange", "Crunchy Cabbage Salad", "Provencal Salad"]
  salade-comp: ["Black-Eyed Pea Salad", "Farro"]
  sauces: ["Romesco"]
  hummus: ["Parsnip Hummus", "Roasted Peppers"]
  quiche: ["Forestiere Quiche"]
schedule:
  - day: monday
    date: 2026-09-07
    dishes: []
    temp_c: 
    weather: "CLOSED - Labour Day"
    notes: "CLOSED - Labour Day statutory Monday holiday (closure flagged a week ahead; no Monday service)."
  - day: tuesday
    date: 2026-09-08
    dishes: ["Kale Mango Cabbage Salad", "Veggie Chicken with Cardamom", "Korean Soup", "Cream of Tomato Soup", "Creamy Broccoli Salad", "Beet Hazelnut Salad", "Salmon Pesto Artichoke", "Gluten-Free Vegetable Lasagna", "Blackened Haddock Sandwich", "Hummus Apple and Brie Sandwich", "Tuna Salad Wrap", "Hummus, Apple, and Brie Wrap", "Romesco", "Forestiere Quiche", "Parsnip Hummus"]
    temp_c: 23
    weather: "mostly sunny"
    notes: "First service day after the holiday. Sandwich production halved/spread (Mon holiday rule); WRAPS added for the school year. KM shifts to Tuesday (no Monday service). First texture (cardamom chicken)."
  - day: wednesday
    date: 2026-09-09
    dishes: ["Vegan Pho Soup", "Butternut Beet", "Mushroom Risotto", "Moqueca", "Crunchy Cabbage Salad", "Farro", "Roasted Peppers"]
    temp_c: 21
    weather: "cloudy"
    notes: "Cool early autumn. Risotto this week (no paella)."
  - day: thursday
    date: 2026-09-10
    dishes: ["Coconut Jerk Tofu", "Mulligatawny", "Carrot Madras Curry", "Parsnip Pear Pecan Soup", "Salt Cod Curry", "Vegan Gluten-Free Mac N' Cheeze", "Provencal Salad", "Black-Eyed Pea Salad"]
    temp_c: 20
    weather: "light rain"
    notes: "Rainy/cool -> hearty comfort (mac n' cheeze, curries). Second texture (jerk tofu), spaced from Tuesday. Extra late soups for Friday."
  - day: friday
    date: 2026-09-11
    dishes: ["Korean Soup", "Vegan Pho Soup", "Kale Mango Cabbage Salad", "Creamy Broccoli Salad", "Salt Cod Curry"]
    temp_c: 21
    weather: "partly cloudy"
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
  - name: "Vegan Gluten-Free Mac N' Cheeze"
    recipe_id: vegan-gluten-free-mac-n-cheeze
    recipe_source: repertoire
    tag_source: linked
    protein: plant-substitute
    temperature: hot
    weather: cold
    richness: rich
    format: pasta
    cuisine: american
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
  - name: "Veggie Chicken with Cardamom"
    recipe_id: veggie-chicken-with-cardamom
    recipe_source: repertoire
    tag_source: linked
    protein: plant-substitute
    temperature: hot
    weather: cool
    richness: rich
    format: curry
    cuisine: indian
    spice_level: medium
    diet: [vegetarian]
  - name: "Coconut Jerk Tofu"
    recipe_id: coconut-jerk-tofu
    recipe_source: repertoire
    tag_source: linked
    protein: tofu
    temperature: hot
    weather: cool
    richness: rich
    format: plated-main
    cuisine: caribbean
    spice_level: hot
    diet: [vegan, vegetarian, gluten-free, dairy-free]
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
  - name: "Mulligatawny"
    recipe_id: mulligatawny
    recipe_source: repertoire
    tag_source: linked
    protein: legume
    temperature: hot
    weather: cold
    richness: moderate
    format: soup
    cuisine: indian
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
  - name: "Butternut Beet"
    recipe_id: butternut-beet
    recipe_source: repertoire
    tag_source: linked
    protein: vegetable
    temperature: hot
    weather: cold
    richness: moderate
    format: soup
    cuisine: 
    spice_level: mild
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
  - name: "Tuna Salad Wrap"
    recipe_id: tuna-salad-wrap
    recipe_source: repertoire
    tag_source: linked
    protein: fish
    temperature: cold
    weather: warm
    richness: moderate
    format: handheld
    cuisine: american
    spice_level: mild
    diet: [pescatarian, dairy-free]
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
  - name: "Farro"
    recipe_id: farro
    recipe_source: repertoire
    tag_source: linked
    protein: grain
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
---

# Week of 7-11 September 2026 (seasonal estimate; Labour Day)

> **⚠️ GENERATED MOCK - not a real chef menu.** A `menus-recommend` "what-if" week
> drawing dishes from `data/repertoire/`, shaped by `data/menus/PATTERNS.md`
> (generated 2026-08-09). **Weather is INVENTED** from Montreal September climate
> normals - it is beyond the 16-day forecast horizon, so treat temps as seasonal
> placeholders, not a forecast. Isolated under `data/menus/generated/`.

## Weekly production

**Vege (mains)** - Gluten-Free Vegetable Lasagna · Mushroom Risotto · Braised Vegetables · Vegan Gluten-Free Mac N' Cheeze
**Poisson** - Salmon Pesto Artichoke · Moqueca · Salt Cod Curry
**Texture (vege chicken/beef)** - Veggie Chicken with Cardamom · Coconut Jerk Tofu
**Soupe** - Korean Soup · Vegan Pho Soup · Mulligatawny · Lentil Stew · Harira
**Potage** - Cream of Tomato Soup · Carrot Madras Curry · Butternut Beet · Squash Spinach Coconut · Parsnip Pear Pecan Soup
**Sandwichs** - Blackened Haddock Sandwich · Hummus Apple and Brie Sandwich
**Wraps** - Tuna Salad Wrap · Hummus, Apple, and Brie Wrap
**Salades** - Kale Mango Cabbage Salad · Creamy Broccoli Salad · Beet Hazelnut Salad · Carrot Orange · Crunchy Cabbage Salad · Provencal Salad
**Salade compose** - Black-Eyed Pea Salad · Farro
**Sauces** - Romesco
**Hummus** - Parsnip Hummus · Roasted Peppers
**Quiche** - Forestiere Quiche

## Weekly schedule

| Day | Temp | Weather | Featured dishes | Notes |
|---|---|---|---|---|
| **Monday** | — | CLOSED - Labour Day | *CLOSED* | CLOSED - Labour Day statutory Monday holiday (closure flagged a week ahead; no Monday service). |
| **Tuesday** | 23 °C | mostly sunny | Kale Mango Cabbage Salad, Veggie Chicken with Cardamom, Korean Soup, Cream of Tomato Soup, Creamy Broccoli Salad, Beet Hazelnut Salad, Salmon Pesto Artichoke, Gluten-Free Vegetable Lasagna, Blackened Haddock Sandwich, Hummus Apple and Brie Sandwich, Tuna Salad Wrap, Hummus, Apple, and Brie Wrap, Romesco, Forestiere Quiche, Parsnip Hummus | First service day after the holiday. Sandwich production halved/spread (Mon holiday rule); WRAPS added for the school year. KM shifts to Tuesday (no Monday service). First texture (cardamom chicken). |
| **Wednesday** | 21 °C | cloudy | Vegan Pho Soup, Butternut Beet, Mushroom Risotto, Moqueca, Crunchy Cabbage Salad, Farro, Roasted Peppers | Cool early autumn. Risotto this week (no paella). |
| **Thursday** | 20 °C | light rain | Coconut Jerk Tofu, Mulligatawny, Carrot Madras Curry, Parsnip Pear Pecan Soup, Salt Cod Curry, Vegan Gluten-Free Mac N' Cheeze, Provencal Salad, Black-Eyed Pea Salad | Rainy/cool -> hearty comfort (mac n' cheeze, curries). Second texture (jerk tofu), spaced from Tuesday. Extra late soups for Friday. |
| **Friday** | 21 °C | partly cloudy | Korean Soup, Vegan Pho Soup, Kale Mango Cabbage Salad, Creamy Broccoli Salad, Salt Cod Curry | SERVICE-ONLY - no production. Thursday's late soups + pret-a-manger stock. |

## Comments and weather

Short week: Labour Day closes Monday, so production runs Tuesday-Thursday. Early-autumn cool (low 20s, rain Thursday) broadens demand toward soups and hearty mains. The school year is underway, so WRAPS join the line (they sell when sandwiches run out); with the Monday holiday, sandwich production is halved/spread. No cold soup (no >=24C day).

## Why this menu

### Strategy

A four-day week built around the **Labour Day Monday closure**. Production runs
Tuesday-Thursday; the closure was flagged a week ahead (see the Aug 31 week).
Early-autumn cool (low 20s, rain Thursday) is the chef's "everything sells"
weather, so the week keeps a full soup + hearty + salad line. The **school year
has started**, so wraps join the menu - and because the Monday holiday halves
sandwich production, the wraps also cover the sandwich gap.

### Per-day notes

- **Monday.** CLOSED - Labour Day.
- **Tuesday (23 C).** First service day: KM shifts here; sandwiches halved/spread; wraps debut; first texture (cardamom chicken).
- **Wednesday (21 C).** Risotto week; cool-autumn soups.
- **Thursday (20 C, rain).** Rainy -> hearty comfort; second texture (jerk tofu); extra late soups for Friday.
- **Friday (21 C).** Service-only.

### Pattern citations

- Monday statutory holiday -> closed that day - **calendar**, chef-stated (high).
- Sandwiches made Tue morning; a Monday holiday halves/spreads sandwich production - **calendar**, chef-stated (high).
- Wraps sell during the school year when sandwiches run out (tuna salad, hummus-apple-brie) - **rotation / calendar**, chef-stated (high).
- No >=24C day -> no chilled cold soup - **weather_temp**, chef-stated (high).
- Cool/rainy -> push hot, hearty soupes and mains - **weather_temp**, chef-stated (high).
- KM present (shifted to Tuesday as the first service day) - **per_day_balance**, chef-stated (high).
- Texture mains Tue + Thu, spaced - **per_day_balance**, chef-stated (high).
- Lasagna without ratatouille; risotto without paella; mushroom tarragon OFF (biweekly) - **rotation**, chef-stated (high).
- Mon-Thu production, Friday service-only - **per_day_balance / work-week**, chef-stated (high).

### Improvisation / honesty flags

- **Weather is INVENTED** (early-September normals) - beyond the forecast horizon.
- **Both textures are chicken/tofu, not one vege-beef** - the chicken+beef pair is only half-met this week (repertoire has no plated vege-beef main; the closest, vegan meatballs, ran the prior week).
- **Ham staple** appears as the ham quiche on alternating weeks (forestiere this week).
- **Some repertoire tags (weather/richness) were blank and inferred.**
- **Poke omitted** - no category in the menu template.
