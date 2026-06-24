# Restaurant AI Management System

A user-friendly platform to help a small independent restaurant (chef + baker) run
its kitchen: digitize paper recipes, plan menus, understand true cost, and optimize
production. Built bottom-up, multilingual from day one.

## Vision

Existing tools (Parsley, Apicbase, MarketMan, etc.) get a kitchen halfway there but
are built for chains and stop at ingredient cost. The opportunities they leave open:

1. **True cost** — fold fixed costs (rent, electricity, equipment repair) into
   per-dish profitability, not just ingredient COGS.
2. **Production-timing optimization** — *when* to put what in the oven across a
   chef + baker sharing constrained equipment (not just *how much* to prep).
3. **Affordable, multilingual, photo-first onboarding** — turn a binder of paper
   recipes into a clean searchable database for a small shop.

See [docs/research/landscape-scan.md](docs/research/landscape-scan.md) for the
competitive analysis and [docs/product/roadmap.md](docs/product/roadmap.md) for the plan.

## Build order

1. **Recipe digitization** — photo of a paper recipe → clean structured markdown.
2. **Tagging** — veg / warm / hearty / season / course, etc.
3. **Weekly menu planning** — pick dishes → auto-compute total ingredient quantities.
4. **Moats** — true-cost dashboard, then production-timing optimizer, then
   stock/season-aware weekly menu *suggestions*.

Platform: web app. Keep costs low everywhere except OCR accuracy.

## Layout

| Path | What |
|------|------|
| `.claude/skills/` | Claude skills (starting with `photos-to-recipes`) |
| `data/photos/inbox/` | Recipe photos waiting to be digitized |
| `data/photos/done/` | Photos successfully turned into a recipe |
| `data/photos/flagged/` | Photos the skill wasn't confident about — need a human |
| `data/recipes/` | The recipe database — one markdown file per recipe |
| `data/recipes/_TEMPLATE.md` | Canonical recipe format (frontmatter + body) |
| `data/recipes/archived/` | Retired recipes (kept for history) |
| `docs/` | Research and product docs |
