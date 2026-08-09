# Repertoire

The **menu-generation source pool** — the set of recipes that `menus-recommend`
draws dishes from when building weekly menus.

When the menu generator composes a week, every dish it places must map to a
recipe that lives here (its `recipe_id` is an exact filename in this folder,
minus the `.md`). If a dish has no confident match here, the generator marks it
`recipe_source: none` rather than guessing.

## Relationship to `data/recipes/`

This is deliberately **separate** from `data/recipes/`, which is the output of
the photo-digitization pipeline (`recipes-digitize` → `recipes-translate` →
`recipes-tag`). Not every digitized recipe is necessarily menu-eligible — this
folder is the curated pool the chef actually builds menus from.

Historically this pool lived in `data/parsley/recipes-en/`. This folder is the
going-forward home for it.

## Structure

- `INDEX.md` — the browsable index of what's in the pool
- `recipes-en/` — the individual recipe files, one dish per file
