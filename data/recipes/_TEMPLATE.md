---
# ============================================================
# IDENTITY  (Parsley: name, description, photo, IDs)
# ============================================================
id:                       # kebab-case, unique (e.g. aiglefin-longe-5oz-pesto)
title:                    # primary recipe name
description:              # optional
language:                 # source language (e.g. fr, en, es)
source: photo             # photo | manual | imported (e.g. from Parsley)
status: draft             # draft | flagged | verified | archived
flag:                     # one-paragraph reason — ONLY when status is flagged
created:                  # YYYY-MM-DD
photo:                    # source photo filename in data/photos/
item_id:                  # optional internal item number (Parsley: Item ID)
barcode:                  # optional

# ============================================================
# CATEGORIES & TAGS
#   categories = free-form, the way Zane already labels in Parsley
#   tags       = our structured taxonomy (powers menu planning + suggestions)
# ============================================================
categories: []            # e.g. ["Poisson", "Plat principal"]
tags:
  diet: []                # veg, vegan, vegetarian, gluten-free, dairy-free, nut-free...
  temperature:            # warm | cold
  weight:                 # light | hearty
  season:                 # spring, summer, fall, winter, all
  course:                 # appetizer | main | dessert | side | bread | sauce
  cuisine:                # free text

# ============================================================
# ALLERGENS  (first-class — safety / liability)
# ============================================================
allergens: []             # gluten, dairy, eggs, fish, shellfish, nuts, peanuts, soy, sesame...

# ============================================================
# SETUP  (Parsley: prep time, shelf life, packout, sub-recipe)
# ============================================================
prep_time_min:            # Parsley "Prep Time"
shelf_life_days:          # Parsley "Shelf Life (Days)"
packout_needed: false     # Parsley "Packout Needed?"
sub_recipe: false         # if true, this recipe can be used as an ingredient elsewhere
raw_weight:               # approx raw ingredient weight (e.g. "7.57 kg") — for sub-recipes

# ============================================================
# YIELD & PORTION  (Parsley: yields N portions, equivalent to M batches)
# ============================================================
yield:
  portions:
  batches:                # optional
  portion_size:           # serving size per portion, e.g. "5 oz", "250 ml", "1 filet"

# ============================================================
# COST  (Parsley: cost per portion + price calculator)
#   true-cost moat = adding labor_cost + overhead_alloc on top of ingredients
# ============================================================
cost:
  method:                 # costing basis (Parsley: "By Most Recent Purchase Price")
  ingredient_cost:        # computed: sum of ingredient costs
  labor_cost:             # computed: from labor block below
  overhead_alloc:         # OUR ADDITION: rent / electricity / equipment-repair share
  cost_per_portion:       # computed total ÷ portions
  price_per_portion:      # menu price (Parsley "Price Calculator")
  food_cost_percent:      # ingredient_cost ÷ price

# ============================================================
# INGREDIENTS  (an ingredient may itself be a sub-recipe)
# ============================================================
ingredients:
  - name:
    section:              # printed sheet section, e.g. Bouillon, Légumes, Hors feu (blank if none)
    is_sub_recipe: false  # true if this line references another recipe (e.g. Pesto Zucchini)
    qty:
    unit:                 # g, kg, ml, l, filet, ea, tbsp...  (prefer weight for accuracy)
    preparation:          # Parsley "Preparation" note, e.g. "diced", "room temp"
    # --- cost hooks (fill later) ---
    supplier:
    pack_size:            # e.g. "10 kg bag"
    pack_cost:

# ============================================================
# LABOR & TIMING  (scheduling moat)
#   Parsley already logs labor as a line item ("Temps du Travail Cuisinier")
# ============================================================
labor:
  - role:                 # cook | baker
    minutes:
timing:
  active_min:             # hands-on minutes
  total_min:              # incl. passive (resting, proofing, baking)
  equipment: []           # oven, stovetop, mixer, proofer, fridge...
  oven_temp:

# ============================================================
# FOOD SAFETY  (HACCP critical control points — optional, keep light)
# ============================================================
critical_control_points:
  - step:                 # what step, e.g. "cook fish", "cool soup"
    limit:                # the safe limit, e.g. "internal 63°C", "to 4°C within 2h"

# ============================================================
# PRESENTATION  (plating consistency)
# ============================================================
plating:
  instructions:           # e.g. "Ladle 8 oz into a 12 oz white bowl, garnish with pesto"
  photo:                  # reference plating photo filename

# ============================================================
# STORAGE & HOLDING
# ============================================================
storage:
  hold:                   # service holding, e.g. "steam table 60°C, max 2h"
  store:                  # storage, e.g. "refrigerate 0–4°C, covered"

# ============================================================
# NUTRITION  (per portion — computed later from ingredients)
# ============================================================
nutrition:
  calories:
  protein_g:
  carbs_g:
  fat_g:
  sodium_mg:
---

# {{ title }}

> Yields {{ portions }} portions{{ #portion_size }} · {{ portion_size }} each{{ /portion_size }}

## Ingredients

- {{ qty }} {{ unit }} {{ name }}{{ #preparation }} — {{ preparation }}{{ /preparation }}

## Instructions

1. <!-- step, with its own preparation/instruction text -->

## Plating

<!-- presentation / garnish; reference photo if available -->

## Notes

<!-- substitutions, variations, suggested accompaniments, allergen warnings, source attribution -->
