---
# ============================================================
# GENERATED MOCK MENU - machine-made week.
# NOT a real chef menu. Produced by the menus-recommend skill.
# ============================================================
id: mock-clim-mtl-2026-08-31
source: generated
status: mock
generated: 2026-08-15
patterns_generated: 2026-08-09
scenario:
  given: "remaining Montreal production weeks (real weather where available, else seasonal); week of 2026-08-31"
  invented: >-
    Weather invented from late-Aug/early-Sep normals: Mon 26C sunny, Tue 25C, Wed 23C,
    Thu 21C, Fri 22C. Rentree (Quebec back-to-school) week. This is the week BEFORE the
    Sep 7 Labour Day Monday closure, so Monday plate production is trimmed and the
    closure is flagged a week ahead (both chef-stated calendar behaviours).
  week_label: "31 August - 4 September 2026 (seasonal estimate)"
  weather_source: >-
    Invented from Montreal September climate normals (highs easing ~24C -> ~15C
    through the month, more frequent rain). The real Open-Meteo forecast only reaches
    2026-08-30, so every day here is a plausible seasonal placeholder, NOT a forecast.
pool:
  vege: ["Ratatouille", "Veggie Paella", "Braised Vegetables", "Vegan Poutine (Medium)"]
  poisson: ["Salmon Pesto Artichoke", "Sesame Ginger Salmon", "Mediterranean-Style Haddock"]
  texture: ["Veggie Chicken Mango Saffron", "Festive Vegan Meatballs"]
  soupe: ["Korean Soup", "Mushroom Tarragon Soup", "Green Tom Yum Soup", "Harira", "Cold Melonccio Soup"]
  potage: ["Cream of Tomato Soup", "Squash Maple Ginger", "The Moroccan", "Carrot Apple Curry", "Parsnip Pear Pecan Soup"]
  sandwichs: ["Salmon Pesto Artichoke Sandwich", "Satay Vege Chicken Banh Mi Sandwich"]
  salades: ["Kale Mango Cabbage Salad", "Creamy Broccoli Salad", "Beet Goat Cheese", "Carrot, Celeriac, and Almond Salad", "Provencal Salad", "Orange Fennel Salad"]
  salade-comp: ["Vege Chicken Salad", "Root Trio"]
  sauces: ["Satay Sauce"]
  hummus: ["Broccoli and Pistachio Hummus", "Cashew Hummus"]
  quiche: ["Ham and Vegetable Quiche"]
  pico-de-gallo: ["Pico de Gallo"]
schedule:
  - day: monday
    date: 2026-08-31
    dishes: ["Kale Mango Cabbage Salad", "Korean Soup", "Cream of Tomato Soup", "Creamy Broccoli Salad", "Beet Goat Cheese", "Salmon Pesto Artichoke", "Ratatouille", "Broccoli and Pistachio Hummus"]
    temp_c: 26
    weather: "sunny"
    notes: "Rentree week - Monday plate production trimmed ahead of next Monday's Labour Day CLOSURE (flagged a week ahead). Warm 26C, staple-forward. KM on Monday."
  - day: tuesday
    date: 2026-09-01
    dishes: ["Veggie Chicken Mango Saffron", "Cold Melonccio Soup", "Green Tom Yum Soup", "The Moroccan", "Provencal Salad", "Carrot, Celeriac, and Almond Salad", "Vege Chicken Salad", "Veggie Paella", "Salmon Pesto Artichoke Sandwich", "Satay Vege Chicken Banh Mi Sandwich", "Satay Sauce", "Ham and Vegetable Quiche", "Cashew Hummus"]
    temp_c: 25
    weather: "mostly sunny"
    notes: "2-day >=24C (Mon-Tue) -> last chilled Melonccio of the season (borderline, flagged). Sandwiches + sauce made this morning. Ham quiche (the Ham staple). First texture (mango saffron)."
  - day: wednesday
    date: 2026-09-02
    dishes: ["Mushroom Tarragon Soup", "Squash Maple Ginger", "Sesame Ginger Salmon", "Orange Fennel Salad", "Root Trio", "Braised Vegetables"]
    temp_c: 23
    weather: "partly cloudy"
    notes: "Cool-down begins. Mushroom tarragon (biweekly, this-week slot)."
  - day: thursday
    date: 2026-09-03
    dishes: ["Festive Vegan Meatballs", "Harira", "Carrot Apple Curry", "Parsnip Pear Pecan Soup", "Mediterranean-Style Haddock", "Pico de Gallo", "Vegan Poutine (Medium)"]
    temp_c: 21
    weather: "cloudy"
    notes: "Last Pico of the warm season (Thursday slot; flagged - just past the May-Aug window). Second texture (vegan meatballs = the vege-BEEF half of the chef's chicken+beef pair). Extra late soups for Friday."
  - day: friday
    date: 2026-09-04
    dishes: ["Korean Soup", "Mushroom Tarragon Soup", "Kale Mango Cabbage Salad", "Creamy Broccoli Salad", "Mediterranean-Style Haddock"]
    temp_c: 22
    weather: "partly cloudy"
    notes: "SERVICE-ONLY - no production. Wednesday/Thursday late soups + pret-a-manger stock."
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
  - name: "Veggie Chicken Mango Saffron"
    recipe_id: veggie-chicken-mango-saffron
    recipe_source: repertoire
    tag_source: linked
    protein: plant-substitute
    temperature: hot
    weather: cool
    richness: rich
    format: plated-main
    cuisine: moroccan
    spice_level: mild
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
  - name: "Squash Maple Ginger"
    recipe_id: squash-maple-ginger
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

# Week of 31 August - 4 September 2026 (seasonal estimate)

> **⚠️ GENERATED MOCK - not a real chef menu.** A `menus-recommend` "what-if" week
> drawing dishes from `data/repertoire/`, shaped by `data/menus/PATTERNS.md`
> (generated 2026-08-09). **Weather is INVENTED** from Montreal September climate
> normals - it is beyond the 16-day forecast horizon, so treat temps as seasonal
> placeholders, not a forecast. Isolated under `data/menus/generated/`.

## Weekly production

**Vege (mains)** - Ratatouille · Veggie Paella · Braised Vegetables · Vegan Poutine (Medium)
**Poisson** - Salmon Pesto Artichoke · Sesame Ginger Salmon · Mediterranean-Style Haddock
**Texture (vege chicken/beef)** - Veggie Chicken Mango Saffron · Festive Vegan Meatballs
**Soupe** - Korean Soup · Mushroom Tarragon Soup · Green Tom Yum Soup · Harira · Cold Melonccio Soup
**Potage** - Cream of Tomato Soup · Squash Maple Ginger · The Moroccan · Carrot Apple Curry · Parsnip Pear Pecan Soup
**Sandwichs** - Salmon Pesto Artichoke Sandwich · Satay Vege Chicken Banh Mi Sandwich
**Salades** - Kale Mango Cabbage Salad · Creamy Broccoli Salad · Beet Goat Cheese · Carrot, Celeriac, and Almond Salad · Provencal Salad · Orange Fennel Salad
**Salade compose** - Vege Chicken Salad · Root Trio
**Sauces** - Satay Sauce
**Hummus** - Broccoli and Pistachio Hummus · Cashew Hummus
**Quiche** - Ham and Vegetable Quiche
**Pico de gallo** - Pico de Gallo

## Weekly schedule

| Day | Temp | Weather | Featured dishes | Notes |
|---|---|---|---|---|
| **Monday** | 26 °C | sunny | Kale Mango Cabbage Salad, Korean Soup, Cream of Tomato Soup, Creamy Broccoli Salad, Beet Goat Cheese, Salmon Pesto Artichoke, Ratatouille, Broccoli and Pistachio Hummus | Rentree week - Monday plate production trimmed ahead of next Monday's Labour Day CLOSURE (flagged a week ahead). Warm 26C, staple-forward. KM on Monday. |
| **Tuesday** | 25 °C | mostly sunny | Veggie Chicken Mango Saffron, Cold Melonccio Soup, Green Tom Yum Soup, The Moroccan, Provencal Salad, Carrot, Celeriac, and Almond Salad, Vege Chicken Salad, Veggie Paella, Salmon Pesto Artichoke Sandwich, Satay Vege Chicken Banh Mi Sandwich, Satay Sauce, Ham and Vegetable Quiche, Cashew Hummus | 2-day >=24C (Mon-Tue) -> last chilled Melonccio of the season (borderline, flagged). Sandwiches + sauce made this morning. Ham quiche (the Ham staple). First texture (mango saffron). |
| **Wednesday** | 23 °C | partly cloudy | Mushroom Tarragon Soup, Squash Maple Ginger, Sesame Ginger Salmon, Orange Fennel Salad, Root Trio, Braised Vegetables | Cool-down begins. Mushroom tarragon (biweekly, this-week slot). |
| **Thursday** | 21 °C | cloudy | Festive Vegan Meatballs, Harira, Carrot Apple Curry, Parsnip Pear Pecan Soup, Mediterranean-Style Haddock, Pico de Gallo, Vegan Poutine (Medium) | Last Pico of the warm season (Thursday slot; flagged - just past the May-Aug window). Second texture (vegan meatballs = the vege-BEEF half of the chef's chicken+beef pair). Extra late soups for Friday. |
| **Friday** | 22 °C | partly cloudy | Korean Soup, Mushroom Tarragon Soup, Kale Mango Cabbage Salad, Creamy Broccoli Salad, Mediterranean-Style Haddock | SERVICE-ONLY - no production. Wednesday/Thursday late soups + pret-a-manger stock. |

## Comments and weather

Warm rentree week - the last real burst of summer before the September cool-down. Highs start at 26C Monday and ease through the week. A 2-day >=24C run (Mon-Tue) still meets the chilled-cold-soup trigger, so ONE last Melonccio goes on, and Pico takes its final warm-season Thursday slot. Back-to-school means reduced production favouring staples; Monday plates are trimmed ahead of next Monday's Labour Day closure.

## Why this menu

### Strategy

The seasonal hinge week. Late-August warmth (26C Monday) fades toward the
low-20s, so this is the LAST week that behaves like summer: one final chilled
Melonccio on the Mon-Tue >=24C run, and the last warm-season Pico on Thursday.
It is also **rentree** - Quebec back-to-school - which per the chef means reduced
production and staple-forward menus, and it is the week **before** the Sep 7
Labour Day Monday closure, so Monday plates are trimmed and the closure is flagged
a week ahead.

### Per-day notes

- **Monday (26 C).** Trimmed Monday production (pre-closure rule); staple-forward for rentree; KM anchors Monday.
- **Tuesday (25 C).** Last Melonccio of the season on the 2-day >=24C run; sandwiches + sauce this morning; Ham quiche; first texture (mango saffron).
- **Wednesday (23 C).** Cool-down begins; mushroom tarragon takes its biweekly slot.
- **Thursday (21 C).** Last warm-season Pico; second texture is the vege-beef meatballs; extra late soups for Friday.
- **Friday (22 C).** Service-only.

### Pattern citations

- Back-to-school weeks -> reduced production, favour staples - **calendar**, chef-stated (high).
- Monday plate production cut the week before a Monday closure; closure flagged a week ahead - **calendar**, chef-stated (high).
- Chilled cold soup only on a 2-3 day >=24C streak - **weather_temp**, chef-stated (high). Mon-Tue qualifies (borderline; see flags).
- Pico -> warm season only (May-Aug) - **calendar**, medium. Placed as the season sunset; flagged.
- KM -> Monday; texture mains Tue + Thu spaced - **per_day_balance**, chef-stated (high).
- Ham quiche as the week's quiche - honours the Ham staple (**menu_skeleton / rotation**, high).
- Ratatouille without lasagna; paella without risotto; mushroom tarragon biweekly - **rotation**, chef-stated (high).
- One-chicken + one-vege-beef texture pair MET this week (mango-saffron chicken + vegan meatballs) - **per_day_balance**, chef-stated (high).
- One carrot salad, one cabbage salad (KM) - **per_day_balance**, chef-stated (high).
- Mon-Thu production, Friday service-only - **per_day_balance / work-week**, chef-stated (high).

### Improvisation / honesty flags

- **Weather is INVENTED** (Montreal late-Aug/Sep normals) - beyond the 16-day forecast horizon; treat temps as seasonal placeholders.
- **The final Melonccio is a borderline call** - a 2-day (not 3-day) >=24C run at the tail of summer; placed as a deliberate season-closer.
- **Pico is one day past its stated May-Aug window** - kept as the season sunset; flag it.
- **Reduced production is represented as fewer Monday dishes + staple choices**, not as literal batch sizes (the mock has no quantities).
- **Some repertoire tags (weather/richness) were blank and inferred** from name + ingredients.
- **Poke omitted** - no category in the menu template.
