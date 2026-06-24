---
# ============================================================
# MENU HUSK — pure transcription of one weekly planning spread,
# in the sheet's ORIGINAL language, content ONLY.
# Mirrors the recipe husk: no status, no tags, no recipe links,
# no cost. `flag` is temporary (set on an uncertain transcription,
# removed when promoted to the English canonical _TEMPLATE.md).
# The cost/COGS sticky note on the spread is intentionally NOT
# transcribed.
# ============================================================
id:                       # week-start ISO date, e.g. 2026-05-10; shared with the canonical file
week_label:               # date range exactly as written on the sheet, e.g. "10-16 mai"
language:                 # source language of this sheet (e.g. fr)
flag:                     # one-paragraph reason — ONLY when the transcription is uncertain

# ============================================================
# DISH POOL — LEFT page. The sheet's fixed printed category rows.
# List dish names exactly as written (original language, abbreviations
# kept). Omit categories with no entry that week.
# ============================================================
pool:
  vege: []
  poisson: []
  texture: []
  soupe: []
  potage: []
  sandwichs: []
  wraps: []
  salades: []
  salade-comp: []
  sauces: []
  hummus: []
  quiche: []
  quenelles-morue: []
  croquettes: []
  burgers: []
  vinaigrettes: []
  feves-lard: []
  popee-lentilles: []
  mousse: []
  pico-de-gallo: []

# ============================================================
# DAILY SCHEDULE — RIGHT page. One entry per service day.
# ============================================================
schedule:
  - day:                  # lundi | mardi | mercredi | jeudi | vendredi
    date:                 # YYYY-MM-DD
    dishes: []            # dishes assigned that day, original language
    temp_c:               # temperature noted in the right margin, if any
    weather:              # weather noted, if any (original language)
    notes:                # event / note, e.g. "férié", "fermé lundi", "Fête des Pères"

comment:                  # the "Commentaire et Météo" footer line, if any
---

# Semaine du {{ week_label }}

## Production de la semaine

<!-- pool by category -->

## Horaire de la semaine

<!-- per-day schedule with temperature / météo / notes -->

## Commentaire et météo

<!-- the footer line, verbatim -->
