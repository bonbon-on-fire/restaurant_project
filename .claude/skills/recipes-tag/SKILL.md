---
name: recipes-tag
description: >-
  Add structured menu-planning tags to the canonical English recipe files in
  data/recipes/processed/transcribed-en/. Use when the user wants to tag/classify
  recipes, fill in the tags block, or "tag the recipes" so the menu planner has data
  to work with. Reads each recipe's ingredients and instructions and infers
  controlled-vocabulary tags (protein, course, temperature, spice, richness, diet,
  allergens, etc.). This is the inference step recipes-digitize/recipes-translate
  deliberately skip. Does NOT transcribe, translate, or change a recipe's status.
---

# Tag recipes for menu planning

Fill the `tags`, `allergens`, and `categories` fields of existing recipe files by
**reasoning from the recipe's own content** — its ingredients and instructions. The
`recipes-digitize` skill transcribes recipes but leaves every classification blank
on purpose; this skill is the later step that adds them, so a menu planner can later
build balanced menus (no three creamy braises in a row, no all-chicken meal).

Unlike `recipes-digitize`, this skill **must infer** — that is its whole job. But it
infers carefully: **tag only what you are confident about, and leave the rest blank.**
A blank field is correct; a wrong tag is worse than no tag because the menu planner
will trust it.

## Inputs and outputs

- **Input:** canonical English recipe files in `data/recipes/processed/transcribed-en/`.
  Process a file only if it has a `status:` field whose value is **not** `archived`.
  **Skip files with `status: archived`**, and **skip any file with no `status:` field**
  (an un-promoted husk that `recipes-translate` has not processed yet). Never read or edit
  the original-language husks in other `transcribed-<lang>/` folders.
- **Schema:** `data/recipes/_TEMPLATE.md` — the canonical field set and the **allowed
  values** for every tag. Read it fresh every run; the controlled vocabularies live there
  and are the source of truth.
- **Output:** the same `transcribed-en/` files, edited in place. Only ever touch the
  `tags:` block, `allergens:`, and `categories:`. Never alter `id`, `title`, `status`,
  ingredients, instructions, or any other field. Never move a file.

## Procedure

1. **Find work.** List recipe files in `data/recipes/processed/transcribed-en/`. A recipe
   "needs tagging" if it has a `status:` field that is not `archived` and any tag field is
   empty. Skip files without a `status:` field (un-promoted husks). By default process
   every such recipe; if the user names specific recipes, do only those.

2. **Load the schema.** Read `data/recipes/_TEMPLATE.md` and use the comment after each
   tag field as the **list of allowed values**. You must pick from that list (or leave
   blank). The one exception is `cuisine`, which is open — pick the closest listed value
   or add a new lowercase one if no listed cuisine fits (food can come from any cuisine).

3. **For each recipe, in turn:**

   a. **Read the recipe** — frontmatter ingredients (names, quantities, sections,
      `preparation` notes) and the body instructions. Understand what the dish actually
      *is* before tagging. Look past surface names: an ingredient called
      "Texture de poulet shitaké" is a **mushroom-based meat substitute**, so the dish
      is `vegetarian` and its `protein` is `plant-substitute`, not chicken.

   b. **Infer each tag from evidence, then pick the allowed value.** For every field,
      ask "does the recipe clearly support one of the allowed values?" If yes, set it.
      If the dish is genuinely ambiguous for that field, **leave it blank.** Fill only
      what is missing — never overwrite a value already present (a human may have set
      it). Field-by-field guidance:

      - `protein` — the dish's main component. Watch for meat substitutes (→
        `plant-substitute`), mixed mains (→ `mixed`), and meatless dishes (→ the
        relevant `vegetable` / `legume` / `grain` / `cheese`, or `none`).
      - `course`, `format`, `temperature`, `weight` — what the dish is and how it's
        served. A simmered pot of broth and vegetables → `course: soup` /
        `format: soup` / `temperature: hot`. A composed cold salad → `salad` / `cold`.
      - `cooking_method` — the *primary* technique from the instructions (braised,
        roasted, raw, simmered…). If several, pick the dominant one.
      - `spice_level` — from chili/heat ingredients and quantities. No heat → `mild`
        (or `none` for a dish where heat is irrelevant); fresh chilies / lots of
        cayenne → `medium`/`hot`. If unsure, leave blank.
      - `richness` — cream, butter, cheese, frying, fatty cuts push toward `rich`;
        broths, lean proteins, vegetables toward `light`.
      - `season` — only tag when the dish strongly signals it (a chilled summer
        gazpacho, a winter braise). Most dishes are fine left blank or `all`.
      - `cuisine` — from the dish's culinary tradition (spices, technique, name).
        Open list; add a new lowercase value if needed.
      - `diet` (multi) — list every claim the ingredients **clearly support**:
        `vegetarian`/`vegan` (no animal products — check stock powders, butter, cream,
        yogurt, honey), `pescatarian`, `gluten-free`, `dairy-free`, etc. Be
        conservative: if a "maison" powder or sub-recipe could hide an animal product
        or gluten, do **not** claim the restrictive diet.
      - `texture` (multi) and `flavor_profile` (multi) — list the defining ones
        (creamy + chunky; savory-umami + herbaceous). Don't exhaustively list every
        possible note — pick what characterizes the dish.

   c. **Allergens — infer freely from ingredients.** List allergens you can see in the
      ingredients using the allowed allergen values (cream/butter/cheese/yogurt →
      `dairy`; wheat/flour/breadcrumbs → `gluten`,`wheat`; soy sauce → `soy`; etc.).
      Tag what the ingredients show. Note that opaque "maison" powders and sub-recipes
      may hide allergens you cannot see — tag what is visible and do not claim an
      allergen-free `diet` when an ingredient is unverifiable.

   d. **Categories.** Add free-form `categories` only if the recipe or its language
      makes an obvious label clear (e.g. `["Poisson", "Plat principal"]`). Otherwise
      leave it as `[]`. This field mirrors how Zane labels in Parsley, so keep it
      loose and human-readable.

4. **Write back.** Edit the file in place, changing only the `tags`/`allergens`/
   `categories` fields. Keep YAML formatting consistent with the template (single-value
   fields as scalars, multi-value fields as YAML lists). Do not reorder or strip other
   fields, and do not touch the body.

5. **Report.** For each recipe, summarize the tags you set (one line each), and call
   out any field you deliberately left blank because the dish was ambiguous or an
   ingredient was unverifiable.

## Rules

- **Infer from content, never from the title alone.** Read the ingredients and method.
  Surface names mislead ("poulet" that is mushroom; "salade" that is served warm).
- **Confident or blank.** Set a tag only when the recipe clearly supports one allowed
  value. When genuinely unsure, leave it blank — the menu planner trusts these tags.
- **Controlled vocabulary only.** Every value must come from the allowed list in
  `_TEMPLATE.md`. `cuisine` is the only open field; for it, prefer a listed value and
  add a new lowercase one only when nothing fits.
- **Never overwrite, only fill.** If a tag already has a value (a human may have set
  it), leave it. Fill empty fields only.
- **Touch tags only.** Never change `id`, `title`, `status`, `created`, ingredients,
  instructions, or move a file. Tagging never re-files a recipe.
- **Canonical English only.** Tag only files in `transcribed-en/` that have a `status:`
  field. Skip `status: archived` and skip the original-language husks entirely.
- **Idempotent.** Re-running only fills still-empty fields, so it is safe to run again
  as new recipes arrive.
- **Be conservative with safety claims.** Do not assert a restrictive `diet` (vegan,
  gluten-free, etc.) when a "maison" powder, sauce, or sub-recipe could contain a
  hidden animal product or allergen.
