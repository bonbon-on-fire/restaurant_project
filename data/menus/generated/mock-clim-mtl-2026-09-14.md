---
# ============================================================
# GENERATED MOCK MENU - machine-made week.
# NOT a real chef menu. Produced by the menus-recommend skill.
# ============================================================
id: mock-clim-mtl-2026-09-14
source: generated
status: mock
generated: 2026-08-15
patterns_generated: 2026-08-09
scenario:
  given: "remaining Montreal production weeks (seasonal); week of 2026-09-14"
  invented: >-
    Weather invented from mid-Sep normals: Mon 20C, Tue 19C, Wed 18C rain, Thu 17C, Fri 19C.
    School year in full swing -> wraps stay on. No statutory holiday this week.
  week_label: "14-18 September 2026 (seasonal estimate)"
  weather_source: >-
    Invented from Montreal September climate normals (highs easing ~24C -> ~15C
    through the month, more frequent rain). The real Open-Meteo forecast only reaches
    2026-08-30, so every day here is a plausible seasonal placeholder, NOT a forecast.
pool:
  vege: ["Ratatouille", "Veggie Paella", "Braised Vegetables", "Veggie Moussaka"]
  poisson: ["Salmon Pesto Artichoke", "Mediterranean-Style Haddock", "Salmon Crumble"]
  texture: ["Veggie Chicken Satay with Almonds", "L'eau Vive Stew"]
  soupe: ["Korean Soup", "Mushroom Tarragon Soup", "Thai Peanut", "Ribollita Soup", "Harira"]
  potage: ["Cream of Tomato Soup", "Squash Apple Swiss", "Carrot Curry", "The Moroccan", "Veg Almond Coconut"]
  sandwichs: ["Salmon Pesto Artichoke Sandwich", "Makhani Chicken Sandwich"]
  wraps: ["Makhani Veggie Chicken Wrap", "Tuna Salad Wrap"]
  salades: ["Kale Mango Cabbage Salad", "Creamy Broccoli Salad", "Beet Goat Cheese", "Carrot, Celeriac, and Almond Salad", "Asian Cabbage Salad", "Provencal Salad"]
  salade-comp: ["Vege Chicken Salad", "Carrot Kale Quinoa"]
  sauces: ["Satay Sauce"]
  hummus: ["Dill Hummus", "Butternut Squash Hummus"]
  quiche: ["Salmon Shrimp and Vegetable Quiche"]
schedule:
  - day: monday
    date: 2026-09-14
    dishes: ["Kale Mango Cabbage Salad", "Korean Soup", "Cream of Tomato Soup", "Creamy Broccoli Salad", "Beet Goat Cheese", "Salmon Pesto Artichoke", "Ratatouille", "Dill Hummus"]
    temp_c: 20
    weather: "cloudy"
    notes: "KM on Monday. Ratatouille anchors the mains as autumn sets in."
  - day: tuesday
    date: 2026-09-15
    dishes: ["Veggie Chicken Satay with Almonds", "Mushroom Tarragon Soup", "The Moroccan", "Provencal Salad", "Carrot, Celeriac, and Almond Salad", "Vege Chicken Salad", "Veggie Paella", "Salmon Pesto Artichoke Sandwich", "Makhani Chicken Sandwich", "Makhani Veggie Chicken Wrap", "Tuna Salad Wrap", "Satay Sauce", "Salmon Shrimp and Vegetable Quiche", "Butternut Squash Hummus"]
    temp_c: 19
    weather: "partly cloudy"
    notes: "Sandwiches + wraps + sauce made this morning. First texture (satay). Mushroom tarragon (biweekly slot)."
  - day: wednesday
    date: 2026-09-16
    dishes: ["Thai Peanut", "Squash Apple Swiss", "Mediterranean-Style Haddock", "Asian Cabbage Salad", "Carrot Kale Quinoa", "Braised Vegetables"]
    temp_c: 18
    weather: "light rain"
    notes: "Cool/wet -> hearty. Second cabbage salad (asian) alongside KM (<=2 cabbage)."
  - day: thursday
    date: 2026-09-17
    dishes: ["L'eau Vive Stew", "Ribollita Soup", "Carrot Curry", "Veg Almond Coconut", "Salmon Crumble", "Veggie Moussaka"]
    temp_c: 17
    weather: "cloudy"
    notes: "Coldest day -> hearty stews and casserole. Second texture (L'eau Vive stew). Extra late soups for Friday."
  - day: friday
    date: 2026-09-18
    dishes: ["Korean Soup", "Thai Peanut", "Kale Mango Cabbage Salad", "Creamy Broccoli Salad", "Salmon Crumble"]
    temp_c: 19
    weather: "partly cloudy"
    notes: "SERVICE-ONLY - no production. Thursday's late soups + pret-a-manger stock."
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
  - name: "Veggie Moussaka"
    recipe_id: veggie-moussaka
    recipe_source: repertoire
    tag_source: linked
    protein: tofu
    temperature: hot
    weather: cool
    richness: rich
    format: casserole
    cuisine: greek
    spice_level: mild
    diet: [vegetarian]
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
  - name: "Mediterranean-Style Haddock"
    recipe_id: mediterranean-style-haddock
    recipe_source: repertoire
    tag_source: linked
    protein: fish
    temperature: hot
    weather: cool
    richness: moderate
    format: plated-main
    cuisine: mediterranean
    spice_level: mild
    diet: [pescatarian, gluten-free, nut-free]
  - name: "Salmon Crumble"
    recipe_id: salmon-crumble
    recipe_source: repertoire
    tag_source: linked
    protein: fish
    temperature: hot
    weather: cold
    richness: rich
    format: casserole
    cuisine: 
    spice_level: mild
    diet: [pescatarian, gluten-free]
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
  - name: "L'eau Vive Stew"
    recipe_id: leau-vive-stew
    recipe_source: repertoire
    tag_source: linked
    protein: plant-substitute
    temperature: hot
    weather: cold
    richness: rich
    format: stew
    cuisine: 
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
  - name: "Ribollita Soup"
    recipe_id: ribollita-soup
    recipe_source: repertoire
    tag_source: linked
    protein: legume
    temperature: hot
    weather: cold
    richness: moderate
    format: soup
    cuisine: italian
    spice_level: mild
    diet: []
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
  - name: "Squash Apple Swiss"
    recipe_id: squash-apple-swiss
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
  - name: "Carrot Curry"
    recipe_id: carrot-curry
    recipe_source: repertoire
    tag_source: linked
    protein: vegetable
    temperature: hot
    weather: cold
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
  - name: "Veg Almond Coconut"
    recipe_id: veg-almond-coconut
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
  - name: "Makhani Chicken Sandwich"
    recipe_id: makhani-chicken-sandwich
    recipe_source: repertoire
    tag_source: linked
    protein: plant-substitute
    temperature: warm
    weather: cool
    richness: moderate
    format: handheld
    cuisine: indian
    spice_level: medium
    diet: [vegetarian]
  - name: "Makhani Veggie Chicken Wrap"
    recipe_id: makhani-veggie-chicken-wrap
    recipe_source: repertoire
    tag_source: linked
    protein: plant-substitute
    temperature: warm
    weather: cool
    richness: moderate
    format: handheld
    cuisine: indian
    spice_level: medium
    diet: [vegan, vegetarian, dairy-free]
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
  - name: "Asian Cabbage Salad"
    recipe_id: asian-cabbage-salad
    recipe_source: repertoire
    tag_source: linked
    protein: vegetable
    temperature: cold
    weather: hot
    richness: light
    format: salad
    cuisine: korean
    spice_level: mild
    diet: [vegan, vegetarian, dairy-free]
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
  - name: "Carrot Kale Quinoa"
    recipe_id: carrot-kale-quinoa
    recipe_source: repertoire
    tag_source: linked
    protein: grain
    temperature: cold
    weather: warm
    richness: moderate
    format: salad
    cuisine: 
    spice_level: none
    diet: [vegan, dairy-free]
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
  - name: "Butternut Squash Hummus"
    recipe_id: butternut-squash
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

# Week of 14-18 September 2026 (seasonal estimate)

> **⚠️ GENERATED MOCK - not a real chef menu.** A `menus-recommend` "what-if" week
> drawing dishes from `data/repertoire/`, shaped by `data/menus/PATTERNS.md`
> (generated 2026-08-09). **Weather is INVENTED** from Montreal September climate
> normals - it is beyond the 16-day forecast horizon, so treat temps as seasonal
> placeholders, not a forecast. Isolated under `data/menus/generated/`.

## Weekly production

**Vege (mains)** - Ratatouille · Veggie Paella · Braised Vegetables · Veggie Moussaka
**Poisson** - Salmon Pesto Artichoke · Mediterranean-Style Haddock · Salmon Crumble
**Texture (vege chicken/beef)** - Veggie Chicken Satay with Almonds · L'eau Vive Stew
**Soupe** - Korean Soup · Mushroom Tarragon Soup · Thai Peanut · Ribollita Soup · Harira
**Potage** - Cream of Tomato Soup · Squash Apple Swiss · Carrot Curry · The Moroccan · Veg Almond Coconut
**Sandwichs** - Salmon Pesto Artichoke Sandwich · Makhani Chicken Sandwich
**Wraps** - Makhani Veggie Chicken Wrap · Tuna Salad Wrap
**Salades** - Kale Mango Cabbage Salad · Creamy Broccoli Salad · Beet Goat Cheese · Carrot, Celeriac, and Almond Salad · Asian Cabbage Salad · Provencal Salad
**Salade compose** - Vege Chicken Salad · Carrot Kale Quinoa
**Sauces** - Satay Sauce
**Hummus** - Dill Hummus · Butternut Squash Hummus
**Quiche** - Salmon Shrimp and Vegetable Quiche

## Weekly schedule

| Day | Temp | Weather | Featured dishes | Notes |
|---|---|---|---|---|
| **Monday** | 20 °C | cloudy | Kale Mango Cabbage Salad, Korean Soup, Cream of Tomato Soup, Creamy Broccoli Salad, Beet Goat Cheese, Salmon Pesto Artichoke, Ratatouille, Dill Hummus | KM on Monday. Ratatouille anchors the mains as autumn sets in. |
| **Tuesday** | 19 °C | partly cloudy | Veggie Chicken Satay with Almonds, Mushroom Tarragon Soup, The Moroccan, Provencal Salad, Carrot, Celeriac, and Almond Salad, Vege Chicken Salad, Veggie Paella, Salmon Pesto Artichoke Sandwich, Makhani Chicken Sandwich, Makhani Veggie Chicken Wrap, Tuna Salad Wrap, Satay Sauce, Salmon Shrimp and Vegetable Quiche, Butternut Squash Hummus | Sandwiches + wraps + sauce made this morning. First texture (satay). Mushroom tarragon (biweekly slot). |
| **Wednesday** | 18 °C | light rain | Thai Peanut, Squash Apple Swiss, Mediterranean-Style Haddock, Asian Cabbage Salad, Carrot Kale Quinoa, Braised Vegetables | Cool/wet -> hearty. Second cabbage salad (asian) alongside KM (<=2 cabbage). |
| **Thursday** | 17 °C | cloudy | L'eau Vive Stew, Ribollita Soup, Carrot Curry, Veg Almond Coconut, Salmon Crumble, Veggie Moussaka | Coldest day -> hearty stews and casserole. Second texture (L'eau Vive stew). Extra late soups for Friday. |
| **Friday** | 19 °C | partly cloudy | Korean Soup, Thai Peanut, Kale Mango Cabbage Salad, Creamy Broccoli Salad, Salmon Crumble | SERVICE-ONLY - no production. Thursday's late soups + pret-a-manger stock. |

## Comments and weather

Full autumn cooling week (high teens, rain midweek). Cool weather broadens demand, so the week leans into hot soupes and hearty mains while keeping salads on. Mushroom tarragon returns on its biweekly slot; ratatouille/paella swap back in against last week's lasagna/risotto. Wraps continue for the school year.

## Why this menu

### Strategy

Straightforward autumn cooling week (high teens, rain midweek). Cool weather is
the chef's "everything sells" read, so the week runs a full soup + hearty + salad
line and leans a bit hardier as the week cools toward 17C Thursday. Rotation
swaps back to ratatouille/paella and brings mushroom tarragon back on its
biweekly slot; wraps continue for the school year.

### Per-day notes

- **Monday (20 C).** KM anchors Monday; ratatouille leads the mains.
- **Tuesday (19 C).** Sandwiches + wraps + sauce this morning; first texture (satay); mushroom tarragon returns.
- **Wednesday (18 C, rain).** Hearty; second cabbage salad kept within the <=2 rule.
- **Thursday (17 C).** Coldest day, hearty stews + moussaka; second texture (L'eau Vive stew); extra late soups.
- **Friday (19 C).** Service-only.

### Pattern citations

- Cool weather -> soups + hearty + salads all sell - **weather_temp**, chef-stated (medium).
- No >=24C day -> no chilled cold soup - **weather_temp**, chef-stated (high).
- KM -> Monday; texture mains Tue + Thu spaced - **per_day_balance**, chef-stated (high).
- Ratatouille <-> lasagna alternate; paella <-> risotto never same week; mushroom tarragon biweekly (ON this week) - **rotation**, chef-stated (high).
- <=2 cabbage salads (KM + asian cabbage); one carrot salad - **per_day_balance**, chef-stated (high).
- Wraps on for the school year - **rotation / calendar**, chef-stated (high).
- Mon-Thu production, Friday service-only - **per_day_balance / work-week**, chef-stated (high).

### Improvisation / honesty flags

- **Weather is INVENTED** (mid-September normals) - beyond the forecast horizon.
- **One-chicken + one-vege-beef only half-met** - satay chicken + L'eau Vive stew (a plant-substitute stew standing in for the beef texture); no true vege-beef plated main exists.
- **Some repertoire tags (weather/richness) were blank and inferred.**
- **Poke omitted** - no category in the menu template.
