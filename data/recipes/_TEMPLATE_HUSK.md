---
# ============================================================
# HUSK — pure transcription, original language, recipe content ONLY.
# Produced by photos-to-recipes. Promoted to the full _TEMPLATE.md
# (English, with status + tags) by recipes-translate.
# NO status, tags, categories, allergens, cost, labor, timing, or
# nutrition fields belong here. `flag` is temporary (set on an
# uncertain transcription, removed by recipes-translate).
# ============================================================
id:                       # kebab-case English stem; matches the photo + canonical file
title:                    # primary recipe name, in the sheet's ORIGINAL language
language:                 # source language of this sheet (e.g. fr, en, es)
flag:                     # one-paragraph reason — ONLY when the transcription is uncertain

# ============================================================
# YIELD & PORTION
# ============================================================
yield:
  portions:
  batches:                # optional
  portion_size:           # serving size per portion, e.g. "5 oz", "250 ml", "1 filet"

# ============================================================
# INGREDIENTS  (transcribe exactly as printed)
# ============================================================
ingredients:
  - name:
    section:              # printed sheet section, e.g. Bouillon, Légumes, Hors feu (blank if none)
    qty:
    unit:                 # g, kg, ml, l, filet, ea, tbsp...  (prefer weight for accuracy)
    preparation:          # e.g. "diced", "room temp"
---

# {{ title }}

> Yields {{ portions }} portions{{ #portion_size }} · {{ portion_size }} each{{ /portion_size }}

## Ingredients

- {{ qty }} {{ unit }} {{ name }}{{ #preparation }} — {{ preparation }}{{ /preparation }}

## Instructions

1. <!-- step, with its own preparation/instruction text -->

## Notes

<!-- only text literally printed on the sheet: PLU codes, symbols, printed plating, alternate-size columns, storage text -->
