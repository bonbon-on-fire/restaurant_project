# Kitchen Recipes — web app

A small Next.js app to **browse**, **create**, and **digitize** the kitchen's recipes.
It reads and writes the markdown files in the repo's top-level `../data/` folder — the
same files the `recipes-digitize` skill produces — so the website and the skills share
one source of truth.

## What it does

- **Browse** (`/`) — every recipe across `draft / flagged / verified / archived`, with
  search and status filters. Flagged recipes surface their reviewer note.
- **New recipe** (`/new`) — a manual entry form. Because a human writes it, it's saved
  straight to `data/recipes/verified/`.
- **Upload photo** (`/upload`) — drops the photo in `data/photos/inbox/`, then calls the
  Claude API to (1) name it from the printed title and (2) transcribe it into a recipe.
  Clean reads go to `draft/`, ambiguous ones to `flagged/`; the photo is filed in
  `data/photos/done/` or `data/photos/flagged/`. Photos with no readable title stay in
  the inbox for a human.

## Run it

```sh
# At the REPO ROOT, create .env with your key:
#   ANTHROPIC_API_KEY=sk-ant-...
cd web
npm install
npm run dev                        # http://localhost:3000
```

The secret lives in the **repo-root `.env`** (not inside `web/`); `web/next.config.mjs`
loads it from there. It's gitignored. The `ANTHROPIC_API_KEY` is only needed for the
**Upload photo** feature — Browse and manual create work without it.

## Cost

Digitization uses `claude-sonnet-4-6` (~$0.05 per photo). Override the model with
`RECIPE_PIPELINE_MODEL` in `.env.local`.

## Deploying later

Data is files on disk, so a host with a **persistent volume** (e.g. Railway) fits —
point `RECIPE_DATA_DIR` at the volume. Vercel's ephemeral filesystem can't persist
new recipe files, so it's not a fit without moving storage to a DB/object store.
