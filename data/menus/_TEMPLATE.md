---
# ============================================================
# MENU CANONICAL — one weekly planning spread, translated to
# ENGLISH, carrying lifecycle status. Promoted from a husk the
# same way recipes-translate promotes a recipe husk.
# `status:` is the SOLE record of status (no status folders).
# Dishes stay free-text for now; a later pass links them to
# recipe ids. The cost/COGS sticky note is NOT captured.
# ============================================================
id:                       # week-start ISO date, e.g. 2026-05-10; shared with the husk
week_of:                  # YYYY-MM-DD week-start (= id)
week_label:               # date range, English, e.g. "10-16 May"
language: en              # language of THIS file — always en
original_language:        # source language of the sheet (e.g. fr); blank/en if originally English
source: photo             # photo | manual
status: draft             # draft | flagged | verified | archived — SOLE record of status
flag:                     # one-paragraph reason — ONLY when status is flagged
created:                  # YYYY-MM-DD
photo:                    # source spread photo filename in data/menus/processed/photos/

# ============================================================
# DISH POOL — LEFT page, by fixed category. English. Free-text
# dish names (recipe linking is a later pass). Omit empty categories.
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
  - day:                  # monday | tuesday | wednesday | thursday | friday
    date:                 # YYYY-MM-DD
    dishes: []            # dishes assigned that day, English
    temp_c:               # temperature noted in the right margin, if any
    weather:              # weather noted, if any
    notes:                # event / note, e.g. "holiday", "closed Monday", "Father's Day"

comment:                  # the "Comments and Weather" footer line, English
---

# Week of {{ week_label }}

## Weekly production

<!-- pool by category -->

## Weekly schedule

<!-- per-day schedule with temperature / weather / notes -->

## Comments and weather

<!-- the footer line -->
