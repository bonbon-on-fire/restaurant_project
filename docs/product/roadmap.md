# Product Roadmap

## North star

A real tool for one small independent restaurant (chef + baker) that can grow
commercial. Web app. Multilingual from day one. Cheap to run everywhere except
OCR accuracy (where a paid vision model is worth a few cents/recipe).

## The two moats (build the *data hooks* now, the analytics later)

- **True cost** — allocate fixed costs (rent, electricity, equipment repair) into
  per-dish profitability. Low technical risk, high differentiation. Lead the *pitch* here.
- **Production-timing optimizer** — sequence the oven across chef + baker. High wow,
  high risk, heavy data dependency. The eventual showpiece (v3+), built once rich
  structured + timed recipe data exists.

Capture the hooks for both from day one in the recipe format
(`data/recipes/_TEMPLATE.md`): yields + cost fields (true-cost) and per-step
durations + equipment + temps (timing). Cheap now, expensive to retrofit.

## Phases

### Phase 1 — Recipe digitization (current)
- Claude skill: photo of paper recipe → clean structured markdown in `data/recipes/`.
- Output conforms to `_TEMPLATE.md`. One file per recipe.
- Use a paid vision model for accuracy; one-time binder import ≈ a few dollars.

### Phase 2 — Tagging
- veg / warm / hearty / season / course / cuisine — these power menu planning + suggestions.

### Phase 3 — Weekly menu planning
- Pick dishes (repeating + rotating) → auto-compute total ingredient quantities
  (unit conversion, "how many bags"). Print the week.

### Phase 4 — Moats & intelligence
- True-cost dashboard.
- Stock/season/variety-aware **weekly menu suggestions** (rules + tags + stock list;
  no POS data required — this is the novel, small-shop-achievable version).
- Production-timing optimizer.

## Open questions / to verify

- Real recipe photos from Zane (handwritten? typed? languages? consistency?) — drives
  OCR difficulty. **Get 3–5 spanning neatest→messiest and test OCR before coding further.**
- Confirm Parsley cannot OCR paper recipes.
- Define v1 "done."
