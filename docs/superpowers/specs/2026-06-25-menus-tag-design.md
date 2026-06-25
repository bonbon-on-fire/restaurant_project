# menus-tag — design

**Date:** 2026-06-25
**Status:** approved design, pending implementation plan

## Summary

`menus-tag` is a new skill that adds structured, menu-planning tags to each
canonical English weekly menu. It is the menu analogue of the existing
`recipes-tag` skill, and it is the **foundation** for a later `menus-analyze`
skill that will reason about the chef's intent and surface cross-week patterns
to power menu recommendations.

`menus-tag` does one thing: for every unique dish on a weekly menu, it anchors
the dish to a recipe where it can, then assigns a small core set of
controlled-vocabulary tags (protein, temperature, richness, format, cuisine,
spice level, diet). It is pure inference + linking. It does **not** transcribe,
translate, change status, or interpret the chef's reasoning — interpretation is
the job of the separate, later `menus-analyze` skill.

## Context (why this shape)

- The recipe pipeline already separates concerns into single-purpose skills:
  `photos-rename` → `photos-to-recipes` → `recipes-translate` → `recipes-tag`.
  `menus-tag` follows the same convention for menus.
- Canonical menus already exist in `data/menus/processed/transcribed-en/` as a
  `pool` (dishes by category) + per-day `schedule` (dishes, `temp_c`,
  `weather`, `notes`). The menu template explicitly says "Dishes stay free-text
  for now; a later pass links them to recipe ids." `menus-tag` is that pass —
  plus tagging.
- A dish name appears **twice** in each menu (once in `pool`, once in
  `schedule`). Attaching tags inline at every mention would duplicate them and
  let them drift, so tags live in **one deduped block**.
- Two recipe corpora exist:
  - `data/recipes/processed/transcribed-en/` — our canonical, **tagged**
    recipes (output of `recipes-tag`). Small set today; carries the full tag
    block, so its tags can be **copied**.
  - `data/parsley/` (see `data/parsley/INDEX.md`) — the chef's actual
    repertoire, ~210 recipes. These match menu dish names closely but are
    **untagged** (ingredients only) and mostly French. Useful for dish identity
    and as ingredient evidence to inform inference.

## Inputs, outputs, gating

- **Input (files to process):** canonical English menus in
  `data/menus/processed/transcribed-en/`. Process a file only if it has a
  `status:` field whose value is **not** `archived`. Skip the original-language
  husks in `transcribed-fr/` entirely. (Mirrors `recipes-tag` gating.)
- **Schema source of truth:** the controlled tag vocabularies in
  `data/recipes/_TEMPLATE.md`. Read fresh each run; pick allowed values from it.
- **Link targets:**
  - `data/recipes/processed/transcribed-en/` — tagged canonical recipes (tags
    can be copied verbatim into the dish entry).
  - `data/parsley/` via `data/parsley/INDEX.md` — repertoire lookup for identity
    and ingredient-informed inference.
- **Output:** the same menu file, edited in place. `menus-tag` only ever writes
  the new `dishes:` frontmatter block and regenerates the derived `## Dish tags`
  body table. It never edits `pool`, `schedule`, `status`, `comment`, `flag`, or
  any other field, and never moves a file.

## The `dishes:` block

A single deduped block in the menu frontmatter — one entry per unique dish
across `pool` + `schedule`. `pool` and `schedule` are not modified; they keep
referencing dishes by their plain name, and a future tool joins on `name`.

```yaml
# ============================================================
# DISH TAGS — added by menus-tag. One entry per UNIQUE dish in
# this week's pool/schedule. pool/schedule are NOT modified.
# Tags use the controlled vocabulary from recipes/_TEMPLATE.md.
# ============================================================
dishes:
  - name: "Haddock mango coconut"     # exact string as in pool/schedule, markers stripped
    recipe_id: aiglefin-mangue-coco   # tagged recipe id | parsley match | null
    recipe_source: transcribed-en     # transcribed-en | parsley | none
    tag_source: linked                # linked = copied from a tagged recipe | inferred
    protein: fish
    temperature: hot
    richness: rich
    format: plated-main
    cuisine: fusion
    spice_level: mild
    diet: [pescatarian]
  - name: "Pho"
    recipe_id: soupe-pho-vegane       # parsley identity match
    recipe_source: parsley
    tag_source: inferred              # tags reasoned from name + parsley ingredients
    protein: beef
    temperature: hot
    richness: light
    format: soup
    cuisine: vietnamese
    spice_level: mild
    diet: []
```

### Field meanings

- `name` — the normalized dish name; must match the string used in
  `pool`/`schedule` so the two can be joined. A dish appearing on multiple days
  gets exactly one entry.
- `recipe_id` — id of the matched recipe, or `null` when no confident match.
- `recipe_source` — `transcribed-en` (our tagged canonical recipe), `parsley`
  (repertoire identity match), or `none`. Distinguishes a trustworthy
  tagged-recipe link from a name/identity match; they mean different things for
  how much to trust the row.
- `tag_source` — `linked` when the tags were copied from a tagged
  `transcribed-en` recipe; `inferred` otherwise. The planner must know which
  tags are authoritative vs. a best guess.

### Core tag set

Controlled vocabulary, taken from `data/recipes/_TEMPLATE.md`, restricted to the
menu-planning-relevant dimensions:

- `protein` — avoid an all-one-protein day.
- `temperature` — hot/cold; the key weather correlation.
- `richness` — avoid heavy dishes clustering.
- `format` — soup / salad / handheld / plated-main / dip-spread variety.
- `cuisine` — theme & variety detection (open field, as in recipes).
- `spice_level` — hot-day correlation.
- `diet` (multi) — vegan / vegetarian coverage per day.

Excluded on purpose: `course` (the `pool` categories already encode it),
`weight` (overlaps richness), `season` (the date already says it), and the
fine-grained `texture` / `flavor_profile` (heavy to infer per dish, marginal for
planning). These can be added later if `menus-analyze` needs them.

## Body table (derived view)

`menus-tag` regenerates a `## Dish tags` section in the menu body, placed after
the existing "Weekly schedule" / "Comments and weather" sections, in the same
visual style as the rest of the file:

```markdown
## Dish tags

| Dish | Protein | Temp | Richness | Format | Cuisine | Spice | Diet | Recipe |
|------|---------|------|----------|--------|---------|-------|------|--------|
| Haddock mango coconut | fish | hot | rich | plated-main | fusion | mild | pescatarian | aiglefin-mangue-coco |
| Pho | beef | hot | light | soup | vietnamese | mild | — | soupe-pho-vegane |
```

The table is **derived**, never hand-edited. It is fully regenerated from the
`dishes:` block on every run, so the block (source of truth) and the table (view)
cannot drift.

## Procedure (per menu file)

1. **Collect dishes.** Union of all dish strings across `pool` and `schedule`.
2. **Normalize & filter.** Strip status/uncertainty markers (`(struck out)`,
   trailing `?`, parenthetical quantity notes) to get the clean dish name. Drop
   pure non-dish tokens (`x3`, `Yes`, `MDF ?`, etc.). Dedup to unique clean
   names. Whether a dish was struck out or uncertain is a scheduling fact left
   for `menus-analyze` — it is not a tag here.
3. **Two-tier match (per dish):**
   a. **Tagged `transcribed-en` recipe?** If a dish confidently matches one,
      set `recipe_id`, `recipe_source: transcribed-en`, **copy** its core tags,
      `tag_source: linked`.
   b. **Else Parsley match** (via `INDEX.md`)? Record `recipe_id` +
      `recipe_source: parsley`, **read that recipe's ingredients**, infer the
      core tags from name + ingredients, `tag_source: inferred`.
   c. **Else** infer from the dish name alone: `recipe_id: null`,
      `recipe_source: none`, `tag_source: inferred`.
4. **Confident-or-blank.** Set a tag only when the evidence clearly supports one
   allowed value; otherwise leave it blank. A blank field is correct; a wrong
   tag is worse than none because downstream tools trust it.
5. **Write back.** Update the `dishes:` block and regenerate the `## Dish tags`
   body table. Keep YAML formatting consistent with the template. Touch nothing
   else.
6. **Report.** Per menu, summarize: dishes tagged, links found broken down by
   source (transcribed-en / parsley / none), and dishes left mostly blank
   because they were ambiguous or unmatched.

## Rules

- **Controlled vocabulary only.** Every tag value comes from the allowed list in
  `data/recipes/_TEMPLATE.md`. `cuisine` is the one open field: prefer a listed
  value, add a new lowercase one only when nothing fits.
- **Confident or blank.** Mirror `recipes-tag`: set a tag only when clearly
  supported, else leave blank.
- **Mark trust.** Every dish carries `recipe_source` and `tag_source` so the
  planner knows tagged-recipe links (authoritative) from inferred guesses.
- **Idempotent.** Re-running adds entries for new dishes and fills only
  still-blank fields. It may **upgrade** a dish from `inferred` to `linked`
  (replacing only auto-inferred values, never human edits) when a matching
  tagged `transcribed-en` recipe later appears.
- **Never overwrite human edits.** If a field already has a value, leave it.
- **Touch the dishes block + body table only.** Never change `pool`,
  `schedule`, `status`, `flag`, `comment`, identity fields, or move a file.
- **English canonical only.** Process only `transcribed-en/` menus with a
  `status:` field that is not `archived`. Never read or edit the `transcribed-fr/`
  husks.

## Template change

Add the documented `dishes:` block and the `## Dish tags` body section to
`data/menus/_TEMPLATE.md` (the canonical menu template), so the new structure is
discoverable and consistent. The husk template `data/menus/_TEMPLATE_HUSK.md`
stays untouched — husks are pure transcription and carry no tags.

## Out of scope (future `menus-analyze` skill)

- Interpreting the chef's reasoning: why a dish appears on a given day, weather
  / temperature / holiday correlations, theme detection, rotation/repetition
  patterns across weeks.
- Tagging struck-out / uncertain status as signal.
- Any menu recommendation logic.

These all consume `menus-tag`'s output and get their own spec → plan →
implementation cycle.
