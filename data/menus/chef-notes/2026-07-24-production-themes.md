---
date: 2026-07-24
source: chef-notes
context: "Chef's standing 'Themes Affecting Production' notes — how weather, storms, and the social/holiday calendar shape demand and what sells. Chef-stated ground truth; outranks inferred PATTERNS.md. Dish-placement themes are folded into PATTERNS (weather_temp, calendar); demand-volume themes (busyness, sales swings) are captured in the prose body only — PATTERNS does not model demand volume yet."
corrections:
  - rule: "In hot summer weather clients prefer lighter food — salads, cold soups, and fresh dishes; hearty dishes (ragoût, curries, cooked vegetables with a starch) become harder to sell."
    dimension: weather_temp
    source: stated
    date: 2026-07-24
  - rule: "In cool weather soups sell well and hearty dishes sell well, and salads still sell too — cool days broaden what moves rather than narrowing it."
    dimension: weather_temp
    source: stated
    date: 2026-07-24
  - rule: "In the weeks leading up to Christmas clients buy heavily from desserts, ragoût dishes, composed salads, and soups; scale these up for the pre-Christmas period."
    dimension: calendar
    source: stated
    date: 2026-07-24
# Demand-volume themes (storm-day busyness, the pre-Christmas rush, the 22–23 Dec
# sales dip, general "clients buy more / stay home") are captured in the prose body
# only, NOT as corrections: PATTERNS.md has no demand/volume dimension yet. See the
# body section "Demand-volume themes (captured, not yet modelled)".
---

# Chef notes — Themes affecting production (2026-07-24)

Standing chef guidance on what drives demand and what sells. **Chef-stated**;
outranks the inferred patterns in `data/menus/PATTERNS.md`. Two kinds of theme:
**dish-placement** themes (folded into PATTERNS) and **demand-volume** themes
(captured here — PATTERNS does not model demand volume yet).

## Dish-placement themes (folded into PATTERNS.md)

- **Hot summer → lighter food.** When it is too hot, clients prefer lighter
  dishes: salads, cold soups, fresh food. Hearty dishes (ragoût, curries,
  cooked vegetables + a starch) are more difficult to sell. (weather_temp)
- **Cool weather → soups + hearty + salads all sell.** When it is cool, soups
  sell well and so do hearty dishes — and salads still sell too. (weather_temp)
- **Pre-Christmas → desserts, ragoût, composed salads, soups.** In the lead-up
  to Christmas clients buy a lot of these; scale them up. (calendar)

## Demand-volume themes (captured, not yet modelled)

`PATTERNS.md` tracks *what dish goes where*, not *how much sells* or *how busy a
day is*. These themes are recorded here verbatim until a demand/volume model
exists — the same reason the sandwich production-quantity rules are deferred.

### Weather / storms

The day before a storm (snowstorm, freezing rain, thunderstorm, bad weather in
general) clients tend to buy more than usual, and the restaurant may be busier
than usual. The day of the storm — and perhaps the day after — clients stay home.

### Social events

Demand is shaped by: holidays (Christmas, Easter, Valentine's Day, Father's Day,
Mother's Day, Thanksgiving, Québec's Saint-Jean-Baptiste Day, and Canada Day),
back to school, pedagogical days, summer vacation, and winter vacation.

### Christmas

Very busy leading up to Christmas. Clients buy lots of desserts and ragoût
dishes, composed salads, and soups as well. Some clients are on holiday the week
before Christmas and tend to buy a lot. The restaurant is usually full the week
of Christmas; however, on the 22nd and 23rd — two days before Christmas — there
is a significant decrease in clients and sales.
