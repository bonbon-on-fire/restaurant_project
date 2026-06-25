---
name: menus-tag
description: >-
  Add structured menu-planning tags to the canonical English weekly menus in
  data/menus/processed/transcribed-en/. Use when the user wants to tag/classify
  menu dishes, link menu dishes to recipes, fill in the dishes block, or "tag the
  menus". For each unique dish in a week's pool/schedule it anchors the dish to a
  recipe (the tagged transcribed-en recipe if one exists, else the Parsley
  repertoire) and infers a core controlled-vocabulary tag set (protein,
  temperature, richness, format, cuisine, spice_level, diet). This is the menu
  analogue of recipes-tag. Does NOT transcribe, translate, change status, or
  interpret the chef's reasoning — that is the later menus-analyze skill.
---

# Tag menu dishes for menu planning

Fill the `dishes:` block (and regenerate the `## Dish tags` body table) of each
canonical English weekly menu by **anchoring every dish to a recipe where
possible and reasoning about what the dish is**. This is the menu analogue of
`recipes-tag`: the menu transcription step deliberately leaves dishes as
free-text, and this skill is the later pass that links and tags them so a menu
planner/analyzer can later find patterns and build balanced weeks.

This skill **infers** — that is its job — but it infers carefully: **tag only
what you are confident about, and leave the rest blank.** A blank field is
correct; a wrong tag is worse than no tag because downstream tools trust it.

## Inputs and outputs

- **Input:** canonical English menus in `data/menus/processed/transcribed-en/`.
  Process a file only if it has a `status:` field whose value is **not**
  `archived`. **Skip any file with no `status:` field** and **skip
  `status: archived`.** Never read or edit the original-language husks in
  `data/menus/processed/transcribed-fr/`.
- **Vocabulary (schema):** `data/recipes/_TEMPLATE.md` — the controlled
  vocabularies and **allowed values** for every tag. Read it fresh every run; it
  is the source of truth. Use only the core subset (below).
- **Link targets:**
  - `data/recipes/processed/transcribed-en/` — our canonical **tagged** recipes.
    When a dish matches one, its tags can be **copied** verbatim.
  - `data/parsley/INDEX.md` + `data/parsley/recipes-en/` and
    `data/parsley/recipes-fr/` — the chef's ~210-recipe repertoire (untagged,
    mostly French). Use for dish identity and as ingredient evidence to inform
    inference.
- **Output:** the same `transcribed-en/` menu file, edited in place. Only ever
  write the `dishes:` frontmatter block and regenerate the `## Dish tags` body
  table. Never alter `id`, `week_of`, `pool`, `schedule`, `status`, `flag`,
  `comment`, or any other field, and never move a file.

## The core tag set

Per dish, fill only these (allowed values in `data/recipes/_TEMPLATE.md`):

- `protein` — the dish's main component. Watch for meat substitutes (vege
  chicken / TVP / pulled mushroom → `plant-substitute`), mixed mains (`mixed`),
  and meatless dishes (`vegetable`/`legume`/`grain`/`cheese`/`none`).
- `temperature` — `hot` | `warm` | `room` | `cold` | `frozen`. A simmered soup
  is `hot`; a composed salad or gazpacho is `cold`.
- `richness` — cream/butter/cheese/frying/fatty cuts push `rich`/`indulgent`;
  broths, lean proteins, vegetables push `light`/`lean`.
- `format` — `soup` | `salad` | `handheld` | `plated-main` | `dip-spread` |
  `bowl` | `curry` | `pasta` | `sauce-condiment` | … (full list in the template).
- `cuisine` — the open field. Prefer a listed value; add a new lowercase one
  only when nothing fits.
- `spice_level` — `none` | `mild` | `medium` | `hot` | `very-hot`, from
  chili/heat ingredients. If unsure, leave blank.
- `diet` (multi) — list every claim the evidence **clearly supports**
  (`vegan`/`vegetarian`/`pescatarian`/`gluten-free`/`dairy-free`/…). Be
  conservative: if an opaque "maison" powder or sub-recipe could hide an animal
  product or gluten, do not claim the restrictive diet.

Do **not** add `course`, `weight`, `season`, `texture`, or `flavor_profile` —
they are intentionally out of scope for menu tagging.

## Procedure

1. **Find work.** List menus in `data/menus/processed/transcribed-en/`. A menu
   needs tagging if it has a non-`archived` `status:` and its `dishes:` block is
   missing, empty, or incomplete. By default process every such menu; if the
   user names specific weeks, do only those.

2. **Load the vocabulary.** Read `data/recipes/_TEMPLATE.md` and use the comment
   after each tag field as the allowed-value list. Read `data/parsley/INDEX.md`
   so you can look up repertoire recipes by name.

3. **For each menu, in turn:**

   a. **Collect dishes.** Take the union of every dish string across `pool`
      (all categories) and `schedule[].dishes`.

   b. **Normalize & filter.** Strip status/uncertainty markers to get the clean
      dish name: trailing `?`, parentheticals like `(struck out)` / `(struck)`,
      and quantity notes. **Drop pure non-dish tokens** — e.g. `x3`, `Yes`,
      `Yes ? — if cheap`, `MDF ?`, bare category placeholders. Dedup to unique
      clean names (a dish appearing on several days gets ONE entry). Whether a
      dish was struck out or uncertain is a scheduling fact for the later
      `menus-analyze` skill — it is **not** a tag here.

   c. **Two-tier match (per unique dish):**
      - **Tier 1 — tagged canonical recipe.** If the dish confidently matches a
        recipe in `data/recipes/processed/transcribed-en/` (by title/name,
        across FR↔EN), set `recipe_id` to that file's `id`,
        `recipe_source: transcribed-en`, **copy** its core tags, and set
        `tag_source: linked`.
      - **Tier 2 — Parsley repertoire.** Else, if it confidently matches a
        Parsley recipe (via `INDEX.md`; match across FR↔EN, e.g. "Pho" →
        "Soup Pho Végane", "Kale mango cabbage" → "Salade Kale Mangue Chou"),
        set `recipe_id` to a kebab-case id derived from that recipe's name,
        `recipe_source: parsley`, **read that recipe's ingredients**, infer the
        core tags from the name + ingredients, and set `tag_source: inferred`.
      - **Tier 3 — name only.** Else infer the core tags from the dish name
        alone; set `recipe_id:` blank, `recipe_source: none`,
        `tag_source: inferred`.

   d. **Confident or blank.** For each tag, set an allowed value only when the
      evidence clearly supports it; otherwise leave it blank. Never overwrite a
      value already present (a human may have set it) — fill only blanks. You
      may upgrade a dish from `inferred` to `linked` (replacing only
      auto-inferred values, never human edits) when a Tier-1 match now exists.

   e. **Write the block.** Write/extend the `dishes:` block: one entry per unique
      dish, with `name`, `recipe_id`, `recipe_source`, `tag_source`, and the core
      tags. Keep YAML consistent with `data/menus/_TEMPLATE.md` (scalars for
      single-value fields, lists for `diet`).

   f. **Regenerate the body table.** Replace (or create) the `## Dish tags`
      section with a table built **from the `dishes:` block** — one row per dish,
      columns: Dish | Protein | Temp | Richness | Format | Cuisine | Spice |
      Diet | Recipe. Use `—` for blank cells. The table is a derived view: always
      regenerate it from the block so the two cannot drift.

4. **Report.** Per menu, summarize: how many dishes tagged, links found broken
   down by source (`transcribed-en` / `parsley` / `none`), and which dishes were
   left mostly blank because they were ambiguous or unmatched.

## Rules

- **Infer from content, not the title alone.** A "poulet" that is mushroom-based
  TVP is `plant-substitute`; a "salade" served warm is not `cold`. When a
  Parsley match exists, read its ingredients before tagging.
- **Confident or blank.** Set a tag only when clearly supported; downstream
  tools trust these tags.
- **Controlled vocabulary only.** Every value comes from the allowed list in
  `data/recipes/_TEMPLATE.md`; `cuisine` is the one open field.
- **Mark trust.** Every dish carries `recipe_source` and `tag_source`.
- **Never overwrite, only fill.** Re-running fills still-blank fields and adds
  entries for new dishes. Idempotent and safe to re-run.
- **Touch the dishes block + body table only.** Never change `pool`, `schedule`,
  `status`, `flag`, `comment`, identity fields, or move a file.
- **English canonical only.** Process only `transcribed-en/` menus with a
  non-`archived` `status:`. Skip husks entirely.
- **Be conservative with safety claims.** Do not assert a restrictive `diet`
  when a "maison" powder, sauce, or sub-recipe could hide an animal product or
  allergen.
