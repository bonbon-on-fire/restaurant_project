---
# ============================================================
# GENERATED MOCK MENU - machine-made week.
# NOT a real chef menu. Produced by the menus-recommend skill.
# ============================================================
id: mock-clim-mtl-2026-09-28
source: generated
status: mock
generated: 2026-08-15
patterns_generated: 2026-08-09
scenario:
  given: "remaining Montreal production weeks (seasonal); week of 2026-09-28"
  invented: >-
    Weather invented from late-Sep/early-Oct normals: Mon 16C, Tue 15C, Wed 14C rain,
    Thu(Oct 1) 13C, Fri 15C. Thursday is Oct 1 -> Chili d'Orge opens its Oct-Apr season.
    No statutory holiday this week. Wraps stay on for the school year.
  week_label: "28 September - 2 October 2026 (seasonal estimate)"
  weather_source: >-
    Invented from Montreal September climate normals (highs easing ~24C -> ~15C
    through the month, more frequent rain). The real Open-Meteo forecast only reaches
    2026-08-30, so every day here is a plausible seasonal placeholder, NOT a forecast.
pool:
  vege: ["Ratatouille", "Veggie Paella", "Braised Vegetables", "Vegan Gluten-Free Mac N' Cheeze"]
  poisson: ["Salmon Pesto Artichoke", "Salt Cod Curry", "Garlic Scape Salmon with Zucchini Gratin"]
  texture: ["Veggie Chicken Makhani", "Coconut Jerk Tofu"]
  soupe: ["Korean Soup", "Mushroom Tarragon Soup", "Vegan Pho Soup", "Barley Chili (Chili d'Orge)", "Harira"]
  potage: ["Cream of Tomato Soup", "Butternut Beet", "Squash Spinach Coconut", "The Moroccan", "Rutabaga Apple Maple Soup"]
  sandwichs: ["Salmon Pesto Artichoke Sandwich", "Vegan Pulled Oyster Mushroom Sandwich"]
  wraps: ["Tuna Salad Wrap", "Makhani Veggie Chicken Wrap"]
  salades: ["Kale Mango Cabbage Salad", "Creamy Broccoli Salad", "Beet Goat Cheese", "Carrot, Celeriac, and Almond Salad", "Crunchy Cabbage Salad", "Provencal Salad"]
  salade-comp: ["Vege Chicken Salad", "Farro"]
  sauces: ["Vegan Tarragon Mushroom Sauce"]
  hummus: ["Parsnip Hummus", "Green Lime Hummus"]
  quiche: ["Forestiere Quiche"]
schedule:
  - day: monday
    date: 2026-09-28
    dishes: ["Kale Mango Cabbage Salad", "Korean Soup", "Cream of Tomato Soup", "Creamy Broccoli Salad", "Beet Goat Cheese", "Salmon Pesto Artichoke", "Ratatouille", "Parsnip Hummus"]
    temp_c: 16
    weather: "cloudy"
    notes: "KM on Monday. Cool shoulder week - warming mains lead."
  - day: tuesday
    date: 2026-09-29
    dishes: ["Veggie Chicken Makhani", "Mushroom Tarragon Soup", "The Moroccan", "Provencal Salad", "Carrot, Celeriac, and Almond Salad", "Vege Chicken Salad", "Veggie Paella", "Salmon Pesto Artichoke Sandwich", "Vegan Pulled Oyster Mushroom Sandwich", "Tuna Salad Wrap", "Makhani Veggie Chicken Wrap", "Vegan Tarragon Mushroom Sauce", "Forestiere Quiche", "Green Lime Hummus"]
    temp_c: 15
    weather: "partly cloudy"
    notes: "Sandwiches + wraps + sauce this morning. First texture (makhani). Mushroom tarragon (biweekly slot)."
  - day: wednesday
    date: 2026-09-30
    dishes: ["Vegan Pho Soup", "Butternut Beet", "Garlic Scape Salmon with Zucchini Gratin", "Crunchy Cabbage Salad", "Farro", "Braised Vegetables"]
    temp_c: 14
    weather: "light rain"
    notes: "Cold/wet -> hearty and warming."
  - day: thursday
    date: 2026-10-01
    dishes: ["Coconut Jerk Tofu", "Barley Chili (Chili d'Orge)", "Squash Spinach Coconut", "Rutabaga Apple Maple Soup", "Salt Cod Curry", "Vegan Gluten-Free Mac N' Cheeze", "Harira"]
    temp_c: 13
    weather: "cloudy"
    notes: "Oct 1 -> Chili d'Orge (barley chili) OPENS its Oct-Apr season (flagged season-opener). Coldest day; second texture (jerk tofu). Extra late soups for Friday."
  - day: friday
    date: 2026-10-02
    dishes: ["Korean Soup", "Barley Chili (Chili d'Orge)", "Kale Mango Cabbage Salad", "Creamy Broccoli Salad", "Salt Cod Curry"]
    temp_c: 15
    weather: "partly cloudy"
    notes: "SERVICE-ONLY - no production. Thursday's late soups (incl. the new Chili d'Orge) + pret-a-manger stock."
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
  - name: "Garlic Scape Salmon with Zucchini Gratin"
    recipe_id: garlic-scape-salmon-with-zucchini-gratin
    recipe_source: repertoire
    tag_source: linked
    protein: fish
    temperature: hot
    weather: cool
    richness: rich
    format: plated-main
    cuisine: french
    spice_level: mild
    diet: [pescatarian, gluten-free]
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
  - name: "Barley Chili (Chili d'Orge)"
    recipe_id: barley-chili
    recipe_source: repertoire
    tag_source: linked
    protein: vegetable
    temperature: hot
    weather: cold
    richness: moderate
    format: stew
    cuisine: tex-mex
    spice_level: medium
    diet: [vegetarian]
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
  - name: "Rutabaga Apple Maple Soup"
    recipe_id: rutabaga-apple-maple-soup
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
  - name: "Vegan Pulled Oyster Mushroom Sandwich"
    recipe_id: vegan-pulled-oyster-mushroom-sandwich
    recipe_source: repertoire
    tag_source: linked
    protein: mushroom
    temperature: hot
    weather: cool
    richness: moderate
    format: handheld
    cuisine: american
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
  - name: "Vegan Tarragon Mushroom Sauce"
    recipe_id: vegan-tarragon-mushroom-sauce
    recipe_source: repertoire
    tag_source: linked
    protein: mushroom
    temperature: hot
    weather: cool
    richness: moderate
    format: sauce-condiment
    cuisine: french
    spice_level: mild
    diet: [vegan, vegetarian, gluten-free, dairy-free]
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
  - name: "Green Lime Hummus"
    recipe_id: green-lime-hummus
    recipe_source: repertoire
    tag_source: linked
    protein: legume
    temperature: cold
    weather: warm
    richness: moderate
    format: dip-spread
    cuisine: middle-eastern
    spice_level: none
    diet: [vegetarian, gluten-free, dairy-free]
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

# Week of 28 September - 2 October 2026 (seasonal estimate)

> **⚠️ GENERATED MOCK - not a real chef menu.** A `menus-recommend` "what-if" week
> drawing dishes from `data/repertoire/`, shaped by `data/menus/PATTERNS.md`
> (generated 2026-08-09). **Weather is INVENTED** from Montreal September climate
> normals - it is beyond the 16-day forecast horizon, so treat temps as seasonal
> placeholders, not a forecast. Isolated under `data/menus/generated/`.

## Weekly production

**Vege (mains)** - Ratatouille · Veggie Paella · Braised Vegetables · Vegan Gluten-Free Mac N' Cheeze
**Poisson** - Salmon Pesto Artichoke · Salt Cod Curry · Garlic Scape Salmon with Zucchini Gratin
**Texture (vege chicken/beef)** - Veggie Chicken Makhani · Coconut Jerk Tofu
**Soupe** - Korean Soup · Mushroom Tarragon Soup · Vegan Pho Soup · Barley Chili (Chili d'Orge) · Harira
**Potage** - Cream of Tomato Soup · Butternut Beet · Squash Spinach Coconut · The Moroccan · Rutabaga Apple Maple Soup
**Sandwichs** - Salmon Pesto Artichoke Sandwich · Vegan Pulled Oyster Mushroom Sandwich
**Wraps** - Tuna Salad Wrap · Makhani Veggie Chicken Wrap
**Salades** - Kale Mango Cabbage Salad · Creamy Broccoli Salad · Beet Goat Cheese · Carrot, Celeriac, and Almond Salad · Crunchy Cabbage Salad · Provencal Salad
**Salade compose** - Vege Chicken Salad · Farro
**Sauces** - Vegan Tarragon Mushroom Sauce
**Hummus** - Parsnip Hummus · Green Lime Hummus
**Quiche** - Forestiere Quiche

## Weekly schedule

| Day | Temp | Weather | Featured dishes | Notes |
|---|---|---|---|---|
| **Monday** | 16 °C | cloudy | Kale Mango Cabbage Salad, Korean Soup, Cream of Tomato Soup, Creamy Broccoli Salad, Beet Goat Cheese, Salmon Pesto Artichoke, Ratatouille, Parsnip Hummus | KM on Monday. Cool shoulder week - warming mains lead. |
| **Tuesday** | 15 °C | partly cloudy | Veggie Chicken Makhani, Mushroom Tarragon Soup, The Moroccan, Provencal Salad, Carrot, Celeriac, and Almond Salad, Vege Chicken Salad, Veggie Paella, Salmon Pesto Artichoke Sandwich, Vegan Pulled Oyster Mushroom Sandwich, Tuna Salad Wrap, Makhani Veggie Chicken Wrap, Vegan Tarragon Mushroom Sauce, Forestiere Quiche, Green Lime Hummus | Sandwiches + wraps + sauce this morning. First texture (makhani). Mushroom tarragon (biweekly slot). |
| **Wednesday** | 14 °C | light rain | Vegan Pho Soup, Butternut Beet, Garlic Scape Salmon with Zucchini Gratin, Crunchy Cabbage Salad, Farro, Braised Vegetables | Cold/wet -> hearty and warming. |
| **Thursday** | 13 °C | cloudy | Coconut Jerk Tofu, Barley Chili (Chili d'Orge), Squash Spinach Coconut, Rutabaga Apple Maple Soup, Salt Cod Curry, Vegan Gluten-Free Mac N' Cheeze, Harira | Oct 1 -> Chili d'Orge (barley chili) OPENS its Oct-Apr season (flagged season-opener). Coldest day; second texture (jerk tofu). Extra late soups for Friday. |
| **Friday** | 15 °C | partly cloudy | Korean Soup, Barley Chili (Chili d'Orge), Kale Mango Cabbage Salad, Creamy Broccoli Salad, Salt Cod Curry | SERVICE-ONLY - no production. Thursday's late soups (incl. the new Chili d'Orge) + pret-a-manger stock. |

## Comments and weather

Coolest week of the set (low-to-mid teens), the shoulder into October. Hearty soupes, curries, and warming potages dominate; salads stay on but lighter. Thursday falls on Oct 1, which opens the Chili d'Orge (barley chili) season - placed as a flagged season-opener. Ratatouille/paella and mushroom tarragon return on their slots.

## Why this menu

### Strategy

The coolest week of the set and the shoulder into October. Hearty soupes,
curries, and warming potages dominate; salads stay on but lighter. The headline
calendar event is **Thursday = Oct 1**, which opens the Chili d'Orge (barley
chili) season - placed as a flagged season-opener and carried into Friday's
service-only stock. Rotation returns ratatouille/paella and mushroom tarragon.

### Per-day notes

- **Monday (16 C).** KM anchors Monday; warming mains lead.
- **Tuesday (15 C).** Sandwiches + wraps + sauce this morning; first texture (makhani); mushroom tarragon returns.
- **Wednesday (14 C, rain).** Cold/wet -> hearty; garlic-scape salmon gratin.
- **Thursday (Oct 1, 13 C).** Chili d'Orge season-opener; second texture (jerk tofu); extra late soups.
- **Friday (15 C).** Service-only, carrying the new Chili d'Orge.

### Pattern citations

- Chili d'Orge is a seasonal item, Oct-Apr - **calendar / rotation**, chef-stated (high). Oct 1 opens the season.
- Cool/rainy -> push hot, hearty soupes and mains - **weather_temp**, chef-stated (high).
- No >=24C day -> no chilled cold soup - **weather_temp**, chef-stated (high).
- KM -> Monday; texture mains Tue + Thu spaced - **per_day_balance**, chef-stated (high).
- Ratatouille <-> lasagna alternate; paella <-> risotto; mushroom tarragon biweekly (ON) - **rotation**, chef-stated (high).
- Forestiere quiche (Ham quiche ran last week); <=2 cabbage (KM + crunchy), one carrot salad - **menu_skeleton / per_day_balance**, high.
- Wraps on for the school year - **rotation / calendar**, chef-stated (high).
- Mon-Thu production, Friday service-only - **per_day_balance / work-week**, chef-stated (high).

### Improvisation / honesty flags

- **Weather is INVENTED** (late-Sep/early-Oct normals) - beyond the forecast horizon.
- **Chili d'Orge on Oct 1 is a deliberate season-opener** - the chef states Oct-Apr; the exact first day is my choice.
- **Both textures are chicken/tofu** - the vege-beef half is unmet this week (meatballs ran the prior week).
- **Some repertoire tags (weather/richness) were blank and inferred.**
- **Poke omitted** - no category in the menu template.
