---
# ============================================================
# PATTERNS.md — living synthesis of how this chef plans menus.
# REGENERATED WHOLESALE by the menus-analyze skill from ALL
# currently tagged weekly menus + every data/menus/chef-notes/*.md.
# Do NOT hand-edit: re-run menus-analyze after new weeks are tagged.
# Frontmatter is the machine-readable source of truth; the body
# below is a derived render of the same content.
# ============================================================
meta:
  weeks_analyzed: 47
  week_range: "2024-12-16 .. 2026-06-15"
  weeks: [2024-12-16, 2025-01-06, 2025-01-13, 2025-01-20, 2025-01-27, 2025-02-03,
          2025-02-10, 2025-02-17, 2025-02-24, 2025-03-03, 2025-03-10, 2025-03-17,
          2025-03-24, 2025-03-30, 2025-04-07, 2025-04-14, 2025-04-21, 2025-04-28,
          2025-05-05, 2025-05-12, 2025-05-19, 2025-05-26, 2025-06-02, 2025-06-09,
          2025-06-16, 2025-06-23, 2025-06-30, 2025-07-07, 2025-07-14, 2025-08-11,
          2025-08-18, 2025-08-25, 2025-09-01, 2025-09-08, 2025-09-22, 2025-10-06,
          2025-10-13, 2025-10-20, 2025-10-27, 2025-11-10, 2026-01-19, 2026-05-11,
          2026-05-18, 2026-05-25, 2026-06-01, 2026-06-08, 2026-06-15]
  excluded_untagged: []
  archived_skipped: []
  generated: 2026-08-06
  chef_notes_folded: [2026-07-24, 2026-08-06]   # 2026-07-24.md + 2026-07-24-production-themes.md + 2026-08-06.md (recipe-behaviour pass)
  service_days: 188
  service_days_per_week: 4                 # chef-stated: Mon–Thu production; Fri is service-only (188/47 = 4)
  weeks_with_weather_or_temp: 36    # denominator for weather_temp patterns
  sample_caveat: >-
    47 weeks span 18 months but are NOT contiguous (large gaps: no weeks between
    2025-07-14 and 2025-08-11, none 2025-11-10 .. 2026-01-19, none 2026-01-19 ..
    2026-05-11). Temperature is noted on only 95/188 service days and weather on
    70/188, together covering 36/47 weeks — winter 2024/25 and spring 2025 are
    weather-rich, most of autumn is bare. Only ONE December week (2024-12-16) is
    in the set, so pre-Christmas patterns rest almost entirely on the chef note,
    not on data. Almost all dish tags are INFERRED (tier-2/3), so protein/format
    counts carry inference error. Treat low/speculative rows as hypotheses; trust
    source:stated rows as documented chef intent even where n is small.

# ------------------------------------------------------------
# 1. MENU SKELETON — per-week count distribution per pool category.
# ------------------------------------------------------------
menu_skeleton:
  - category: salades
    per_week_count: {min: 5, median: 6, max: 8}
    support: "47/47"
    confidence: high
    source: inferred
  - category: potage
    per_week_count: {min: 4, median: 5, max: 8}
    support: "47/47"
    confidence: high
    source: inferred
  - category: soupe
    per_week_count: {min: 4, median: 5, max: 7}
    support: "47/47"
    confidence: high
    source: inferred
  - category: vege
    per_week_count: {min: 3, median: 4, max: 8}
    support: "47/47"
    confidence: high
    source: inferred
  - category: poisson
    per_week_count: {min: 2, median: 3, max: 6}
    support: "47/47"
    confidence: high
    source: inferred
  - category: salade-comp
    per_week_count: {min: 2, median: 3, max: 6}
    support: "47/47"
    confidence: high
    source: inferred
  - category: hummus
    per_week_count: {min: 1, median: 2, max: 4}
    support: "47/47"
    confidence: high
    source: inferred
  - category: texture
    per_week_count: {min: 1, median: 2, max: 4}
    support: "47/47"
    confidence: high
    source: inferred
    evidence: "Chef definition (2026-08-06): a texture dish is one whose principal ingredient is végé chicken or végé beef (both soy- and shiitake-based). Falafels are végé, not texture."
  - category: sandwichs
    per_week_count: {min: 2, median: 2, max: 3}
    support: "47/47"
    confidence: high
    source: inferred
    evidence: "Chef (2026-08-06): a normal week = one végé (hummus pomme brie noix) OR texture (banh-mi) sandwich + one fish sandwich; made Tuesday morning after the soups."
  - category: sauces
    per_week_count: {min: 1, median: 1, max: 3}
    support: "47/47"
    confidence: high
    source: inferred
    evidence: "Chef (2026-08-06): produced mainly Tuesdays; the lasagna marinara is the exception, made the day before lasagna production."
  - category: quiche
    per_week_count: {min: 1, median: 1, max: 2}
    support: "47/47"
    confidence: high
    source: inferred
  - category: wraps
    per_week_count: {min: 0, median: 1, max: 3}
    support: "30/47 weeks present"
    confidence: medium
    source: inferred
  - category: burgers
    per_week_count: {min: 0, median: 1, max: 2}
    support: "24/47 weeks present"
    confidence: medium
    source: inferred
    evidence: >-
      Observed concentrated in warm months. Chef (2026-08-06) states production is
      demand-driven with NO rotation pattern — a burger is made when a variety runs
      low in the restaurant or store — so the warm-month clustering is a demand
      effect, not a scheduling rule.
  - category: vinaigrettes
    per_week_count: {min: 0, median: 0, max: 3}
    support: "23/47 weeks present"
    confidence: low
    source: inferred
    evidence: "Often left blank on the sheet; may be under-transcribed rather than absent."
  - category: pico-de-gallo
    per_week_count: {min: 0, median: 0, max: 1}
    support: "1/47 as its own pool row; the dish itself recurs 14/47 (see rotation)"
    confidence: low
    source: inferred
    evidence: "Pico is usually written into another row, not the pico-de-gallo row."
  - category: quenelles-morue
    per_week_count: {min: 0, median: 0, max: 1}
    support: "1/47"
    confidence: speculative
    source: inferred
  - category: croquettes
    per_week_count: {min: 0, median: 0, max: 1}
    support: "1/47"
    confidence: speculative
    source: inferred
  - category: feves-lard
    per_week_count: {min: 0, median: 0, max: 1}
    support: "1/47 as its own row"
    confidence: speculative
    source: inferred
    evidence: "Chef note (2025-05-05): 'Fève sans lard takes a break until winter' — a seasonal item, mostly folded into other rows."
  - category: popee-lentilles
    per_week_count: {min: 0, median: 0, max: 1}
    support: "1/47"
    confidence: speculative
    source: inferred

# ------------------------------------------------------------
# 2. ROTATION — dish frequency across weeks (name+aka identity).
# 513 distinct dishes: 6 staple, 206 rotating (>=2 weeks), 301 one-off.
# Listed: all staples + rotating dishes present in >=8 weeks.
# The 301 one-off dishes and the long rotating tail are omitted here.
# ------------------------------------------------------------
rotation:
  - {dish: "Ham", weeks_present: 47, role: staple, support: "47/47 [all weeks]", confidence: high, source: inferred}
  - {dish: "Poutine", weeks_present: 47, role: staple, support: "47/47 [all weeks]", confidence: high, source: inferred}
  - {dish: "Kale mango cabbage (KM)", weeks_present: 41, role: staple, support: "41/47", confidence: high, source: inferred}
  - {dish: "Salmon pesto artichoke", weeks_present: 41, role: staple, support: "41/47", confidence: high, source: inferred}
  - {dish: "Korean", weeks_present: 35, role: staple, support: "35/47", confidence: high, source: inferred, evidence: "Chef (2026-08-06): all-year top seller made almost every week; may run 3 weeks in a row then pause a week, or appear twice in one week on demand / produce to use up (bok choy, pineapple)."}
  - {dish: "Creamy broccoli", weeks_present: 28, role: staple, support: "28/47", confidence: high, source: inferred}
  - {dish: "Beet goat cheese", weeks_present: 26, role: rotating, support: "26/47", confidence: high, source: inferred}
  - {dish: "Mushroom tarragon", weeks_present: 25, role: rotating, support: "25/47", confidence: high, source: inferred, evidence: "Chef (2026-08-06): a best seller on a consistent biweekly pattern, but laborious to produce — capped at once per week."}
  - {dish: "Provençal", weeks_present: 24, role: rotating, support: "24/47", confidence: high, source: inferred}
  - {dish: "Ratatouille", weeks_present: 22, role: rotating, support: "22/47", confidence: medium, source: inferred}
  - {dish: "Goat cheese cabbage", weeks_present: 21, role: rotating, support: "21/47", confidence: medium, source: inferred}
  - {dish: "Tuna salad", weeks_present: 21, role: rotating, support: "21/47", confidence: medium, source: inferred}
  - {dish: "Jerk chicken", weeks_present: 20, role: rotating, support: "20/47", confidence: medium, source: inferred}
  - {dish: "Rémoulade", weeks_present: 20, role: rotating, support: "20/47", confidence: medium, source: inferred}
  - {dish: "Carrot celeriac", weeks_present: 19, role: rotating, support: "19/47", confidence: medium, source: inferred}
  - {dish: "Bandhu", weeks_present: 18, role: rotating, support: "18/47", confidence: medium, source: inferred}
  - {dish: "Broccoli pistachio", weeks_present: 18, role: rotating, support: "18/47", confidence: medium, source: inferred}
  - {dish: "Veg almond coconut", weeks_present: 18, role: rotating, support: "18/47", confidence: medium, source: inferred}
  - {dish: "Asian", weeks_present: 17, role: rotating, support: "17/47", confidence: medium, source: inferred}
  - {dish: "Moroccan", weeks_present: 17, role: rotating, support: "17/47", confidence: medium, source: inferred}
  - {dish: "Mulligatawny", weeks_present: 17, role: rotating, support: "17/47", confidence: medium, source: inferred}
  - {dish: "Salmon crumble (croustade)", weeks_present: 17, role: rotating, support: "17/47", confidence: medium, source: inferred}
  - {dish: "Cauliflower shiitake", weeks_present: 16, role: rotating, support: "16/47", confidence: medium, source: inferred}
  - {dish: "Celeriac apple", weeks_present: 16, role: rotating, support: "16/47", confidence: medium, source: inferred}
  - {dish: "Falafels", weeks_present: 16, role: rotating, support: "16/47", confidence: medium, source: inferred}
  - {dish: "Root trio", weeks_present: 16, role: rotating, support: "16/47", confidence: medium, source: inferred}
  - {dish: "Tom yum", weeks_present: 16, role: rotating, support: "16/47", confidence: medium, source: inferred}
  - {dish: "Paella", weeks_present: 15, role: rotating, support: "15/47", confidence: medium, source: inferred}
  - {dish: "Lasagna", weeks_present: 14, role: rotating, support: "14/47", confidence: medium, source: inferred}
  - {dish: "Pico de gallo", weeks_present: 14, role: rotating, support: "14/47 [warm-month weeks only]", confidence: medium, source: inferred, evidence: "All 14 weeks fall May–Aug or late spring; see calendar seasonal."}
  - {dish: "Classic", weeks_present: 13, role: rotating, support: "13/47", confidence: medium, source: inferred}
  - {dish: "Tabbouleh", weeks_present: 13, role: rotating, support: "13/47", confidence: medium, source: inferred}
  - {dish: "Banh mi", weeks_present: 12, role: rotating, support: "12/47", confidence: low, source: inferred, evidence: "Chef (2026-08-06): the standard texture sandwich (végé chicken/beef based)."}
  - {dish: "Carrot kale quinoa", weeks_present: 12, role: rotating, support: "12/47", confidence: low, source: inferred}
  - {dish: "Carrot madras curry", weeks_present: 12, role: rotating, support: "12/47", confidence: low, source: inferred}
  - {dish: "Salmon ginger", weeks_present: 12, role: rotating, support: "12/47", confidence: low, source: inferred}
  - {dish: "Thai peanut", weeks_present: 12, role: rotating, support: "12/47", confidence: low, source: inferred}
  - {dish: "Cod curry", weeks_present: 11, role: rotating, support: "11/47", confidence: low, source: inferred}
  - {dish: "Harira", weeks_present: 11, role: rotating, support: "11/47", confidence: low, source: inferred}
  - {dish: "Indian lentils", weeks_present: 11, role: rotating, support: "11/47", confidence: low, source: inferred}
  - {dish: "Risotto", weeks_present: 11, role: rotating, support: "11/47", confidence: low, source: inferred}
  - {dish: "Roasted peppers", weeks_present: 11, role: rotating, support: "11/47", confidence: low, source: inferred}
  - {dish: "Tomato zucchini", weeks_present: 11, role: rotating, support: "11/47", confidence: low, source: inferred}
  - {dish: "Braised vegetables", weeks_present: 10, role: rotating, support: "10/47", confidence: low, source: inferred}
  - {dish: "Chicken makhani", weeks_present: 10, role: rotating, support: "10/47", confidence: low, source: inferred}
  - {dish: "Cod quenelle", weeks_present: 10, role: rotating, support: "10/47", confidence: low, source: inferred}
  - {dish: "Greek", weeks_present: 10, role: rotating, support: "10/47", confidence: low, source: inferred}
  - {dish: "Haddock mango coconut", weeks_present: 10, role: rotating, support: "10/47", confidence: low, source: inferred}
  - {dish: "Krokante", weeks_present: 10, role: rotating, support: "10/47", confidence: low, source: inferred}
  - {dish: "Old-fashioned potato", weeks_present: 10, role: rotating, support: "10/47", confidence: low, source: inferred}
  - {dish: "Romesco", weeks_present: 10, role: rotating, support: "10/47", confidence: low, source: inferred}
  - {dish: "Rosée", weeks_present: 10, role: rotating, support: "10/47", confidence: low, source: inferred}
  - {dish: "Satay chicken", weeks_present: 10, role: rotating, support: "10/47", confidence: low, source: inferred}
  - {dish: "Thai chicken", weeks_present: 10, role: rotating, support: "10/47", confidence: low, source: inferred}
  - {dish: "Chili d'Orge", weeks_present: null, role: rotating, support: "chef-stated 2026-07-24", confidence: high, source: stated, evidence: "Seasonal (Oct–Apr) — see calendar. A végé stew, not a soupe; weather: cold."}
  - {dish: "Soupe Coréenne (Korean)", weeks_present: null, role: staple, support: "chef-stated 2026-08-06", confidence: high, source: stated, evidence: "All-year top seller, made almost every week; may run 3 weeks straight then pause a week, or appear twice in one week on demand/produce (bok choy, pineapple). Same dish as the inferred 'Korean' staple row above."}
  - {dish: "Soupe Champignon estragon (Mushroom tarragon)", weeks_present: null, role: rotating, support: "chef-stated 2026-08-06", confidence: high, source: stated, evidence: "Consistent biweekly best seller; laborious to make, so at most once per week. Same dish as the inferred 'Mushroom tarragon' row above."}
  - {dish: "Rutabaga pomme sirop d'érable (potage)", weeks_present: null, role: rotating, support: "chef-stated 2026-08-06", confidence: high, source: stated, evidence: "Cold-months dish; biweekly during maple-syrup season (Mar–Apr); a poor summer seller. See calendar."}
  - {dish: "Mole verde (soupe)", weeks_present: null, role: discontinued, support: "chef-stated 2026-08-06", confidence: high, source: stated, evidence: "Discontinued — do not schedule."}
rotation_summary:
  distinct_dishes: 513
  staples: 6
  rotating: 206
  one_offs: 301
  note: >-
    "One-off" (single-week) dishes dominate the catalogue (301/513): the menu is
    a small stable spine of staples/heavy-rotation dishes plus a wide, mostly
    single-appearance long tail. Cross-week identity is normalized name+aka, so a
    spelling variant not captured as `aka` would over-count one-offs. A dish may
    be absent from the table simply because it is NEW (chef note 2026-08-06) —
    absence is not evidence of removal, except Mole verde (explicitly discontinued).

# ------------------------------------------------------------
# 3. PER-DAY BALANCE — within-day composition tendencies.
# Denominator = 188 service days (days with >=1 dish). Tags inferred.
# Chef-stated (2026-08-06): the work week is 4 service days, Mon–Thu.
# ------------------------------------------------------------
per_day_balance:
  - rule: "The work week is four days, Monday–Thursday; Friday is service-only (no plate/soup production — Thursday's late soups serve Friday)"
    support: "chef-stated 2026-08-06; corroborated (188 service days / 47 weeks = 4)"
    confidence: high
    source: stated
    supersedes: "inferred references to 'all five days of a week'"
  - rule: "Almost every service day fields at least one soup (soupe/potage)"
    support: "181/188 days (96%); every day covered in 40/47 weeks"
    confidence: high
    source: inferred
  - rule: "Almost every service day fields at least one salad"
    support: "181/188 days (96%); every day covered in 40/47 weeks"
    confidence: high
    source: inferred
  - rule: "Most service days field at least one fish main"
    support: "163/188 days (87%); every day covered in 25/47 weeks"
    confidence: high
    source: inferred
  - rule: "Most service days field at least one plant-substitute (texture) main"
    support: "136/188 days (72%); every day covered in 8/47 weeks"
    confidence: medium
    source: inferred
    evidence: "Present most days but rarely on all four service days of a week — texture mains are spaced, matching the chef's Tue/Thu placement rule below. A texture dish = principal ingredient végé chicken or végé beef (soy/shiitake); falafels are végé, not texture (chef 2026-08-06)."
  - rule: "Végé-chicken / texture dishes run Tuesday and Thursday, spaced a day apart; a third texture dish appears on Wednesday only under high demand"
    support: "chef-stated 2026-07-24"
    confidence: high
    source: stated
  - rule: "Kale mango cabbage (KM) is placed on Monday (occasionally Thursday), not every day"
    support: "chef-stated 2026-07-24"
    confidence: high
    source: stated
    evidence: "Corrects the inferred read of KM (staple, 41/47 weeks) as an everyday dish — it recurs weekly but sits on Monday within the week."
  - rule: "Pico de Gallo is served on Thursday and is never made on a Monday"
    support: "chef-stated 2026-07-24"
    confidence: high
    source: stated
  - rule: "A normal week carries two sandwich recipes: one végé (hummus pomme brie noix) OR texture (banh-mi) sandwich, plus one fish sandwich"
    support: "chef-stated 2026-08-06"
    confidence: high
    source: stated

# ------------------------------------------------------------
# 4. WEATHER / TEMP — temperature/weather buckets → dish tendencies.
# Denominator = 36 weeks with weather/temp noted. Range -25°C .. +33°C.
# ------------------------------------------------------------
weather_temp:
  - pattern: "Hot summer weather → lighter menu: salads, cold soups, fresh dishes; hearty dishes (ragoût, curries, cooked-veg-plus-starch) get harder to sell"
    support: "chef-stated 2026-07-24; corroborated by warm-month weeks"
    confidence: high
    source: stated
    evidence: "Burgers/falafels and Pico de gallo cluster in 20–33°C weeks (May–Jul 2025, May–Jun 2026); margin notes add burgers/falafels on hot days."
  - pattern: "Cool weather → soups sell well AND hearty dishes sell well AND salads still sell (cool days broaden demand rather than narrowing it)"
    support: "chef-stated 2026-07-24"
    confidence: medium
    source: stated
  - pattern: "Cold-served 'cold soups' appear in the rotation ONLY on days that are 24°C and above (a cold soup suits hot weather, not cold)"
    support: "chef-stated 2026-07-24"
    confidence: high
    source: stated
    supersedes: "inferred 'cool/rainy days drive cold soups onto the menu'"
    evidence: >-
      Exceptions, both chef-stated: (a) Potage Vert L'été may appear any season on a
      broccoli/zucchini surplus — it fills the prêt-à-manger fridge, not the hot line
      (it browns if held hot all day and does not sell in the restaurant in cold months);
      (b) Mélonccio (Potage Froid Mélonccio) runs at most once a week, 1–2 weeks apart,
      in the hottest part of summer only. The verbatim 2026-06-15 note 'cold soups for
      rainy/cold weekend' is retained in stated_intent but no longer read as a rule.
  - pattern: "Weather does NOT drive sandwich production up or down — only the social calendar (holidays, school PD days, end of school in June) changes sandwich quantities"
    support: "chef-stated 2026-08-06"
    confidence: high
    source: stated
  - pattern: "Very cold winter days (roughly ≤0°C) → chef reduces production; soups sell, salads/composed dishes slow"
    support: "3/36 weeks with weather noted [2025-01-13, 2025-01-20, 2025-01-27]"
    confidence: medium
    source: inferred
    evidence: "Jan 2025 Friday notes: 'cold — reduce production, soups are selling', 'Cold — reduce production', 'Slow, cold, people not spending after Xmas'. This is a demand/volume effect as much as a dish-placement one (see stated_intent)."

# ------------------------------------------------------------
# 5. CALENDAR — holiday / event / seasonal behaviors.
# ------------------------------------------------------------
calendar:
  - pattern: "Statutory holidays that fall on a Monday → closed that day (no Monday service)"
    support: "5/47 [2025-04-21 Easter, 2025-05-19 Victoria Day, 2025-09-01 Labour Day, 2025-10-13 Thanksgiving, 2026-05-18 Victoria Day]"
    confidence: high
    source: stated
    evidence: "Header notes flag the closure a week ahead ('no plate Monday', 'Closed next Monday'). Reduced Monday plate production the week before a Monday closure (2025-08-25, 2025-04-14)."
  - pattern: "Occasional summer Tuesday closures (single days, reason not stated on the sheet)"
    support: "2/47 [2025-06-23, 2025-06-30]"
    confidence: low
    source: inferred
  - pattern: "Sandwiches are produced mainly Tuesday morning, once the soups are done; a Monday/Tuesday holiday halves production (one sort only) or spreads it over two days"
    support: "chef-stated 2026-08-06"
    confidence: high
    source: stated
  - pattern: "Sauces are produced mainly on Tuesdays; the lasagna marinara is the exception, made the day before lasagna production"
    support: "chef-stated 2026-08-06"
    confidence: high
    source: stated
  - pattern: "Chili d'Orge appears in the rotation only in the colder months, October–April"
    support: "chef-stated 2026-07-24"
    confidence: high
    source: stated
  - pattern: "Rutabaga pomme sirop d'érable potage → cold months mainly; biweekly during maple-syrup season (March–April); a poor summer seller"
    support: "chef-stated 2026-08-06"
    confidence: high
    source: stated
  - pattern: "Pico de gallo is a warm-season dish — appears only in late-spring/summer weeks"
    support: "14/14 of its weeks fall May–Aug or late spring"
    confidence: medium
    source: inferred
  - pattern: "Pre-Christmas weeks → clients buy heavily from desserts, ragoût, composed salads, and soups; scale these up"
    support: "chef-stated 2026-07-24"
    confidence: medium
    source: stated
    evidence: "Fact is documented chef intent; generality is only low-corroborated in the data because just ONE December week (2024-12-16) is tagged."
  - pattern: "Easter dessert taper — no chocolate desserts after Easter; slow desserts the week after"
    support: "chef-stated, 2/47 [2025-04-14, 2025-04-21]"
    confidence: low
    source: stated
  - pattern: "No fish soup ('soupe de poisson') scheduled immediately before a vacation week"
    support: "chef-stated, 1/47 [2025-02-24]"
    confidence: low
    source: stated
  - pattern: "'Fève sans lard' (pork-free beans) pauses over summer, returns in winter"
    support: "chef-stated, 1/47 [2025-05-05]"
    confidence: low
    source: stated
  - pattern: "Recurring 'MDF' marker appears in most weeks' margins (a production/'make-more' shorthand, exact meaning unresolved)"
    support: "~present across the majority of weeks"
    confidence: low
    source: inferred
    evidence: "Frequently written '?' or 'to confirm'. Not a dish; treated as a scheduling marker until the chef clarifies it. Do not model as a dish or event yet."

# ------------------------------------------------------------
# 6. STATED INTENT — verbatim chef reasoning (highest-confidence signal).
# NEVER edited or removed by a correction; only inferences built on them change.
# ------------------------------------------------------------
stated_intent:
  - {quote: "Slow, cold, people not spending after Xmas, too cold to leave home", week: 2025-01-13, where: notes, source: stated}
  - {quote: "cold — reduce production. Soups are selling. Salade comp light", week: 2025-01-20, where: notes, source: stated}
  - {quote: "Cold — reduce production. Soup Tulem? — does not sell in cold", week: 2025-01-27, where: notes, source: stated}
  - {quote: "Snow storm — less people. Chaudrée (chowder) sold well (6 days). Salade quinoa amandes stalling.", week: 2025-02-10, where: notes, source: stated}
  - {quote: "No soupe de poisson before a vacation week!!", week: 2025-02-24, where: notes, source: stated}
  - {quote: "no chocolate desserts after easter", week: 2025-04-14, where: notes, source: stated}
  - {quote: "week after easter — slow down on desserts", week: 2025-04-21, where: notes, source: stated}
  - {quote: "too much salmon pesto from last week, pushed to next week, 20 dishes left", week: 2025-04-21, where: notes, source: stated}
  - {quote: "Fève sans lard takes a break until winter — or try a new summer white-bean recipe?", week: 2025-05-05, where: notes, source: stated}
  - {quote: "Soups & Salads sell out !!! MDF — sold out one week", week: 2025-05-12, where: notes, source: stated}
  - {quote: "first hot Sunday + Monday fermé — weekend production of burgers and falafels complete, selling well", week: 2025-05-19, where: notes, source: stated}
  - {quote: "Monday: full fridge — stacked plates on the weekend", week: 2025-05-26, where: notes, source: stated}
  - {quote: "busy days in the restaurant, people stayed in QC for vacation", week: 2025-08-11, where: notes, source: stated}
  - {quote: "last nice weekend of summer, people are gone to their cottages, everything is selling less", week: 2025-09-08, where: notes, source: stated}
  - {quote: "Soups starting to sell out — increase production", week: 2025-10-06, where: notes, source: stated}
  - {quote: "Slow until Wednesday. Soupe … / Salades sold out", week: 2026-01-19, where: notes, source: stated}
  - {quote: "Salads selling well — Hummus MDF, make more; Plates selling OK; Poutine stalling", week: 2026-05-18, where: notes, source: stated}
  - {quote: "Start prod for MDF summer vacation; Soup start scaling", week: 2026-06-08, where: notes, source: stated}
  - {quote: "Cold soups for rainy / cold weekend", week: 2026-06-15, where: notes, source: stated, note: "Verbatim retained; the inferred cool/rainy→cold-soup rule it seeded is superseded by the chef's ≥24°C cold-soup rule (2026-07-24)."}

# ------------------------------------------------------------
# DEMAND-VOLUME THEMES — NOT modeled as patterns (no volume dimension yet).
# Captured verbatim per chef notes 2026-07-24-production-themes + 2026-08-06.
# See body.
# ------------------------------------------------------------
demand_volume_notes:
  - "Day before a storm → clients buy more, restaurant busier; day of (and maybe after) → clients stay home."
  - "Very busy leading up to Christmas; on Dec 22–23 a significant dip in clients and sales."
  - "Demand shaped by holidays, back-to-school, pedagogical days, summer & winter vacation."
  - "Soups: every day starts with 1 potage + 1 soupe. Cold months, high demand → +3–4 extra soups; Thursday almost always makes 4 (2 morning, 2 late afternoon) — the last 2 serve Friday + prêt-à-manger. Hot months → cut: Tue/Wed often make only 1 and reheat the previous day's, avoiding a −20% near-expiry markdown."
  - "Sandwiches: usual quantity 18 of each; 5–7 day expiry. Too many unsold last week → next week makes one sort only, or both sorts capped at 12 each."
  - "Sauces: lasagna marinara batch yields 2 lasagna batches (half frozen). Sold prêt-à-manger only: split into 15–17 pasta portions (4 oz over GF pasta) + 6–7 × 500 ml containers."
  - "Burgers: each recipe yields ~200 — ¼ reserved for the restaurant, the rest frozen sous-vide in 4-packs."
  - "Falafels: made to demand as the complete dish, or as sous-vide falafels in bags of 8."
---

# Menu patterns — living synthesis

**47 weeks analyzed** (2024-12-16 .. 2026-06-15), 0 untagged, 0 archived,
188 service days. Regenerated 2026-08-06, folding chef notes dated **2026-07-24**
(`2026-07-24.md` + `2026-07-24-production-themes.md`) and **2026-08-06**
(`2026-08-06.md`, the recipe-behaviour / production pass). Chef-**stated** rules
outrank inferred ones and are marked `stated`.

> **Small-sample caveat.** The 47 weeks span 18 months but are **not contiguous**
> — there are large gaps (nothing between 2025-07-14 and 2025-08-11, nothing
> 2025-11-10 → 2026-01-19, nothing 2026-01-19 → 2026-05-11). Temperature is noted
> on only 95/188 service days and weather on 70/188, together covering **36/47
> weeks**; autumn is mostly bare. Only **one December week** is tagged, so
> pre-Christmas behavior rests on the chef note, not on data. Nearly all dish tags
> are **inferred**, so protein/format counts carry inference error. Treat
> `low`/`speculative` rows as hypotheses; trust `stated` rows as documented intent.

> **Work week.** Chef-stated (2026-08-06): production runs **four days, Monday–
> Thursday**; **Friday is service-only** — Thursday's late-afternoon soups are
> what serve Friday. 188 service days ÷ 47 weeks = 4 corroborates this. Earlier
> "five days of a week" phrasing is superseded.

## Menu skeleton (per-week count per pool category)

| Category | Min | Median | Max | Weeks present | Confidence |
|---|---|---|---|---|---|
| salades | 5 | 6 | 8 | 47/47 | high |
| potage | 4 | 5 | 8 | 47/47 | high |
| soupe | 4 | 5 | 7 | 47/47 | high |
| vege | 3 | 4 | 8 | 47/47 | high |
| poisson | 2 | 3 | 6 | 47/47 | high |
| salade-comp | 2 | 3 | 6 | 47/47 | high |
| hummus | 1 | 2 | 4 | 47/47 | high |
| texture | 1 | 2 | 4 | 47/47 | high |
| sandwichs | 2 | 2 | 3 | 47/47 | high |
| sauces | 1 | 1 | 3 | 47/47 | high |
| quiche | 1 | 1 | 2 | 47/47 | high |
| wraps | 0 | 1 | 3 | 30/47 | medium |
| burgers | 0 | 1 | 2 | 24/47 | medium (demand-driven, warm-clustered) |
| vinaigrettes | 0 | 0 | 3 | 23/47 | low (maybe under-transcribed) |
| pico-de-gallo | 0 | 0 | 1 | 1/47 row (dish recurs 14/47) | low |
| quenelles-morue | 0 | 0 | 1 | 1/47 | speculative |
| croquettes | 0 | 0 | 1 | 1/47 | speculative |
| feves-lard | 0 | 0 | 1 | 1/47 (seasonal) | speculative |
| popee-lentilles | 0 | 0 | 1 | 1/47 | speculative |

**Read:** the weekly spine is salads (5–6), soups + potages (~5 each), a handful
of végé (4) and fish (3) mains, 2–3 composed salads, and singles of sauce/quiche.
Wraps, burgers, and vinaigrettes are optional/seasonal add-ons.

- **texture** = principal ingredient is végé chicken or végé beef (both soy/shiitake). Falafels are végé, not texture. *(chef 2026-08-06)*
- **sandwichs** = one végé (hummus pomme brie noix) OR texture (banh-mi) + one fish, made Tuesday morning after the soups. *(chef 2026-08-06)*
- **sauces** = made mainly Tuesdays; the lasagna marinara is the exception (made the day before lasagna). *(chef 2026-08-06)*
- **burgers** = production is demand-driven (made when a variety runs low), NOT a seasonal schedule; the warm-month clustering is a demand effect. *(chef 2026-08-06)*

## Rotation (dish frequency)

513 distinct dishes: **6 staple**, **206 rotating** (≥2 weeks), **301 one-off**.
The menu is a small stable spine plus a wide single-appearance long tail. Table
lists all staples + rotating dishes in ≥8 weeks (long tail and one-offs omitted).
A dish may be absent simply because it is **new** — absence isn't removal (except
Mole verde, discontinued).

| Dish | Weeks | Role | Confidence |
|---|---|---|---|
| Ham | 47/47 | staple | high |
| Poutine | 47/47 | staple | high |
| Kale mango cabbage (KM) | 41/47 | staple | high |
| Salmon pesto artichoke | 41/47 | staple | high |
| Korean | 35/47 | staple | high |
| Creamy broccoli | 28/47 | staple | high |
| Beet goat cheese | 26/47 | rotating | high |
| Mushroom tarragon | 25/47 | rotating | high |
| Provençal | 24/47 | rotating | high |
| Ratatouille | 22/47 | rotating | medium |
| Goat cheese cabbage | 21/47 | rotating | medium |
| Tuna salad | 21/47 | rotating | medium |
| Jerk chicken | 20/47 | rotating | medium |
| Rémoulade | 20/47 | rotating | medium |
| Carrot celeriac | 19/47 | rotating | medium |
| Bandhu | 18/47 | rotating | medium |
| Broccoli pistachio | 18/47 | rotating | medium |
| Veg almond coconut | 18/47 | rotating | medium |
| Asian | 17/47 | rotating | medium |
| Moroccan | 17/47 | rotating | medium |
| Mulligatawny | 17/47 | rotating | medium |
| Salmon crumble (croustade) | 17/47 | rotating | medium |
| Cauliflower shiitake | 16/47 | rotating | medium |
| Celeriac apple | 16/47 | rotating | medium |
| Falafels | 16/47 | rotating | medium |
| Root trio | 16/47 | rotating | medium |
| Tom yum | 16/47 | rotating | medium |
| Paella | 15/47 | rotating | medium |
| Lasagna | 14/47 | rotating | medium |
| Pico de gallo | 14/47 | rotating (warm-season) | medium |
| Classic | 13/47 | rotating | medium |
| Tabbouleh | 13/47 | rotating | medium |
| Banh mi | 12/47 | rotating (texture sandwich) | low |
| Carrot kale quinoa | 12/47 | rotating | low |
| Carrot madras curry | 12/47 | rotating | low |
| Salmon ginger | 12/47 | rotating | low |
| Thai peanut | 12/47 | rotating | low |
| Cod curry | 11/47 | rotating | low |
| Harira | 11/47 | rotating | low |
| Indian lentils | 11/47 | rotating | low |
| Risotto | 11/47 | rotating | low |
| Roasted peppers | 11/47 | rotating | low |
| Tomato zucchini | 11/47 | rotating | low |
| Braised vegetables | 10/47 | rotating | low |
| Chicken makhani | 10/47 | rotating | low |
| Cod quenelle | 10/47 | rotating | low |
| Greek | 10/47 | rotating | low |
| Haddock mango coconut | 10/47 | rotating | low |
| Krokante | 10/47 | rotating | low |
| Old-fashioned potato | 10/47 | rotating | low |
| Romesco | 10/47 | rotating | low |
| Rosée | 10/47 | rotating | low |
| Satay chicken | 10/47 | rotating | low |
| Thai chicken | 10/47 | rotating | low |
| Chili d'Orge | seasonal (Oct–Apr) | rotating | high (stated) |
| Rutabaga pomme sirop d'érable (potage) | seasonal (cold; biweekly Mar–Apr) | rotating | high (stated) |
| Mole verde (soupe) | — | **discontinued** | high (stated) |

**Chef behaviour notes (stated 2026-08-06):**
- **Korean (Soupe Coréenne)** — all-year top seller, near-weekly; may run 3 weeks straight then pause a week, or appear twice in one week on demand/produce (bok choy, pineapple).
- **Mushroom tarragon (Champignon estragon)** — consistent biweekly best seller, but laborious → at most once per week.
- **Rutabaga pomme sirop d'érable** — cold-months potage; biweekly in maple season (Mar–Apr); poor summer seller.
- **Mole verde** — discontinued; do not schedule.

## Per-day balance

- **Four-day work week, Monday–Thursday**; Friday is service-only (no production — Thursday's late soups serve Friday). *(chef-stated 2026-08-06; stated — supersedes "five days")*
- Almost every service day fields **at least one soup** (181/188 days, 96%; all days in 40/47 weeks). *(high; inferred)*
- Almost every service day fields **at least one salad** (181/188 days, 96%; all days in 40/47 weeks). *(high; inferred)*
- Most service days field **at least one fish main** (163/188 days, 87%; all days in 25/47 weeks). *(high; inferred)*
- Most service days field **at least one plant-substitute (texture) main** (136/188 days, 72%; all-days only 8/47 weeks — spaced, not daily). Texture = végé chicken/beef (soy/shiitake); falafels are végé, not texture. *(medium; inferred + chef 2026-08-06)*
- **Végé-chicken / texture → Tuesday + Thursday**, spaced a day apart; a third texture dish on Wednesday only under high demand. *(chef-stated 2026-07-24; stated)*
- **Kale mango cabbage (KM) → Monday** (occasionally Thursday), not every day — recurs weekly but sits on Monday within the week. *(chef-stated 2026-07-24; stated)*
- **Pico de Gallo → Thursday, never Monday.** *(chef-stated 2026-07-24; stated)*
- **Sandwiches → one végé (hummus pomme brie noix) OR texture (banh-mi) + one fish** in a normal week. *(chef-stated 2026-08-06; stated)*

## Weather / temperature

*(Denominator: 36 weeks with weather/temp noted; observed range −25 °C to +33 °C.)*

- **Hot summer → lighter menu:** salads, cold soups, fresh dishes; hearty dishes (ragoût, curries, cooked-veg-plus-starch) get harder to sell. Burgers/falafels and Pico cluster in the 20–33 °C weeks. *(chef-stated 2026-07-24, corroborated; high; stated)*
- **Cool weather → soups + hearty + salads all sell** (cool days broaden demand rather than narrow it). *(chef-stated 2026-07-24; medium; stated)*
- **Cold-served "cold soups" only appear on days ≥ 24 °C** — a cold soup suits hot weather. *(chef-stated 2026-07-24; high; stated)* — **supersedes** the earlier inferred "cool/rainy → cold soups." Exceptions (both stated): *Potage Vert L'été* may appear any season on a broccoli/zucchini surplus (goes to the prêt-à-manger fridge, not the hot line — it browns if held hot all day and won't sell in the restaurant in cold months); *Mélonccio* runs ≤ once/week, 1–2 weeks apart, hottest summer only.
- **Weather does NOT move sandwich production** — only the social calendar (holidays, school PD days, end of school in June) changes sandwich quantities. *(chef-stated 2026-08-06; high; stated)*
- **Very cold winter days (≈ ≤ 0 °C) → chef cuts production; soups sell, salads/composed dishes slow.** Support 3/36 weeks [2025-01-13, 2025-01-20, 2025-01-27]; partly a demand-volume effect. *(medium; inferred)*

## Calendar

- **Monday statutory holidays → closed that day.** 5/47 [Easter 2025-04-21, Victoria Day 2025-05-19, Labour Day 2025-09-01, Thanksgiving 2025-10-13, Victoria Day 2026-05-18]. Closures are flagged a week ahead and Monday plate production is cut the week before. *(high; stated)*
- **Occasional summer Tuesday closures** (reason not on the sheet). 2/47 [2025-06-23, 2025-06-30]. *(low; inferred)*
- **Sandwiches made Tuesday morning after the soups**; a Monday/Tuesday holiday halves production (one sort only) or spreads it over two days. *(chef-stated 2026-08-06; high; stated)*
- **Sauces made mainly Tuesdays**, except the lasagna marinara (made the day before lasagna production). *(chef-stated 2026-08-06; high; stated)*
- **Chili d'Orge → October–April only.** *(chef-stated 2026-07-24; high; stated)*
- **Rutabaga pomme sirop d'érable potage → cold months**; biweekly in maple season (Mar–Apr); poor summer seller. *(chef-stated 2026-08-06; high; stated)*
- **Pico de gallo → warm season only** (all 14 of its weeks fall May–Aug/late spring). *(medium; inferred)*
- **Pre-Christmas → scale up desserts, ragoût, composed salads, soups.** *(chef-stated 2026-07-24; medium; stated — generality low because only one December week is tagged)*
- **Easter dessert taper** — no chocolate desserts after Easter; slow desserts the week after. 2/47 [2025-04-14, 2025-04-21]. *(low; stated)*
- **No fish soup immediately before a vacation week.** 1/47 [2025-02-24]. *(low; stated)*
- **"Fève sans lard" pauses over summer, returns in winter.** 1/47 [2025-05-05]. *(low; stated)*
- **Recurring "MDF" margin marker** in most weeks — a production/"make-more" shorthand, exact meaning unresolved; treated as a scheduling marker, not a dish or event. *(low; inferred)*

## Stated intent (verbatim chef reasoning)

The highest-confidence signal — the chef's own words. Never edited by a correction.

- **2025-01-13:** "Slow, cold, people not spending after Xmas, too cold to leave home"
- **2025-01-20:** "cold — reduce production. Soups are selling. Salade comp light"
- **2025-01-27:** "Cold — reduce production. Soup Tulem? — does not sell in cold"
- **2025-02-10:** "Snow storm — less people. Chaudrée (chowder) sold well (6 days). Salade quinoa amandes stalling."
- **2025-02-24:** "No soupe de poisson before a vacation week!!"
- **2025-04-14:** "no chocolate desserts after easter"
- **2025-04-21:** "week after easter — slow down on desserts"; "too much salmon pesto from last week, pushed to next week, 20 dishes left"
- **2025-05-05:** "Fève sans lard takes a break until winter — or try a new summer white-bean recipe?"
- **2025-05-12:** "Soups & Salads sell out !!! MDF — sold out one week"
- **2025-05-19:** "first hot Sunday + Monday fermé — weekend production of burgers and falafels complete, selling well"
- **2025-05-26:** "Monday: full fridge — stacked plates on the weekend"
- **2025-08-11:** "busy days in the restaurant, people stayed in QC for vacation"
- **2025-09-08:** "last nice weekend of summer, people are gone to their cottages, everything is selling less"
- **2025-10-06:** "Soups starting to sell out — increase production"
- **2026-01-19:** "Slow until Wednesday. Soupe … / Salades sold out"
- **2026-05-18:** "Salads selling well — Hummus MDF, make more; Plates selling OK; Poutine stalling"
- **2026-06-08:** "Start prod for MDF summer vacation; Soup start scaling"
- **2026-06-15:** "Cold soups for rainy / cold weekend" *(retained verbatim; the cool/rainy→cold-soup rule it seeded is superseded by the chef's ≥24 °C rule)*

## Demand-volume themes (captured, not modeled)

`PATTERNS.md` tracks **what dish goes where**, not **how much sells or is made**.
These chef-stated themes (from `2026-07-24-production-themes.md` and the
`2026-08-06.md` recipe-behaviour pass) are recorded until a demand/volume
dimension exists:

- **Storms:** the day before a storm clients buy more and the restaurant is busier; the day of (and maybe after) clients stay home.
- **Christmas:** very busy in the lead-up; on **Dec 22–23** a significant dip in clients and sales.
- **Social calendar:** demand is shaped by holidays, back-to-school, pedagogical days, and summer/winter vacation.
- **Soups (production choreography):** each day starts with 1 potage + 1 soupe. Cold months + high demand → **+3–4 extra soups**; **Thursday almost always makes 4** (2 morning, 2 late afternoon) — the last 2 serve **Friday** + prêt-à-manger. Hot months → cut: **Tue/Wed often make only 1** and reheat the previous day's, avoiding a **−20 % near-expiry markdown**.
- **Sandwiches (quantities):** usual **18 of each**; **5–7 day expiry**. Too many unsold last week → next week makes **one sort only**, or **both capped at 12 each**.
- **Sauces (yields):** the lasagna **marinara** batch yields **2 lasagna batches** (half frozen). Sold prêt-à-manger only: split into **15–17 pasta portions** (4 oz over GF pasta) + **6–7 × 500 ml containers**.
- **Burgers (yields):** each recipe yields **~200** — **¼ to the restaurant**, the rest **frozen sous-vide in 4-packs**.
- **Falafels:** made to demand as the complete dish, or as **sous-vide falafels in bags of 8**.
