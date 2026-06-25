/**
 * Parsley → ingredient files (READ-ONLY)
 * ---------------------------------------------------------------------------
 * Opens a real Chromium window, waits for YOU to log into Parsley, then walks
 * every recipe and sub-recipe and writes one Markdown file per recipe listing
 * its ingredients (name, amount, unit) into data/parsley/.
 *
 * It ONLY performs HTTP GET requests against Parsley's own API using your
 * logged-in session. It never edits, saves, or deletes anything.
 *
 * How it works (reverse-engineered from app.parsleycooks.com):
 *   - GET /api/recipes?includeMeasures=false   -> list of all recipes/sub-recipes
 *   - GET /api/ingredients/minimal             -> ingredient id -> name
 *   - GET /api/measures                        -> unit id -> abbreviation
 *   - GET /api/products/<id>                    -> recipe.steps[].ingredients[]
 *         each line = { ingredient:<id>, amount, measure, unit }
 *   - count-type units (filet, mins, unité...) are custom names stored on the
 *     ingredient product's own measures[]; we look those up and cache them.
 *
 * Usage:
 *   npm i -D playwright            # one-time (or: npm i -D @playwright/test)
 *   npx playwright install chromium
 *   node scripts/scrape-parsley-ingredients.mjs
 *
 * A browser opens on the Parsley login page. Log in (email/password or Google).
 * Once your recipe list is visible the script auto-detects the session and runs.
 */

import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.resolve(__dirname, '..', 'data', 'parsley');
const BASE = 'https://app.parsleycooks.com';

// ---------------------------------------------------------------------------
// Collection logic that runs INSIDE the page (uses your session cookies).
// Returns a plain array: [{ id, name, isSubRecipe, status, ingredients:[...] }]
// ---------------------------------------------------------------------------
async function collectInPage() {
  const j = async (u) => (await fetch(u, { credentials: 'include' })).json();

  const recipesList = await j('/api/recipes?includeMeasures=false');
  const ingMinimal  = await j('/api/ingredients/minimal');
  const measures    = await j('/api/measures');

  const nameById = {};
  ingMinimal.forEach(x => { if (x && x.id != null) nameById[x.id] = x.name; });
  recipesList.forEach(x => { if (x && x.id != null && !nameById[x.id]) nameById[x.id] = x.name; });

  const unitById = {};
  const measureAllowsCustom = {};
  measures.forEach(mg => {
    measureAllowsCustom[mg.id] = !!mg.allowsCustomNames;
    (mg.units || []).forEach(u => { unitById[u.id] = u.abbr; });
  });

  const recipes = recipesList
    .filter(r => r && r.id != null && !r.tombstone)
    .map(r => ({ id: r.id, name: r.name, isSubRecipe: !!r.ingredient, status: r.status }));

  const ingCache = {};
  const customName = async (ingId, measureId) => {
    if (!(ingId in ingCache)) {
      try {
        const d = await j('/api/products/' + ingId);
        const bm = {};
        (d.measures || []).forEach(m => { if (m.customName) bm[m.measure] = m.customName; });
        ingCache[ingId] = bm;
      } catch { ingCache[ingId] = {}; }
    }
    return ingCache[ingId][measureId];
  };

  const fmt = (n) => (n == null ? '' : String(Math.round(n * 1000) / 1000));
  const results = [];

  for (const rec of recipes) {
    try {
      const d = await j('/api/products/' + rec.id);
      const steps = (d.recipe && d.recipe.steps) || [];
      const ingredients = [];
      for (const s of steps) for (const line of (s.ingredients || [])) {
        const nm = nameById[line.ingredient] || ('[ingredient #' + line.ingredient + ']');
        let unit = measureAllowsCustom[line.measure]
          ? (await customName(line.ingredient, line.measure) || unitById[line.unit] || '')
          : (unitById[line.unit] || '');
        ingredients.push({ name: nm, amount: fmt(line.amount), unit, note: line.description || '' });
      }
      results.push({ id: rec.id, name: rec.name, isSubRecipe: rec.isSubRecipe, status: rec.status, ingredients });
    } catch (e) {
      results.push({ id: rec.id, name: rec.name, isSubRecipe: rec.isSubRecipe, status: rec.status, ingredients: [], error: String(e) });
    }
  }
  return results;
}

// ---------------------------------------------------------------------------
// Write one Markdown file per recipe + an INDEX.md
// ---------------------------------------------------------------------------
function writeFiles(data) {
  const recipesDir = path.join(OUT, 'recipes');
  const subDir = path.join(OUT, 'sub-recipes');
  fs.mkdirSync(recipesDir, { recursive: true });
  fs.mkdirSync(subDir, { recursive: true });

  const sanitize = (name) => {
    let s = name.normalize('NFC').replace(/[<>:"/\\|?* -]/g, ' ').replace(/\s+/g, ' ').trim().replace(/[. ]+$/g, '');
    return (s || 'recipe').slice(0, 120);
  };
  const used = new Set();
  const uniqueName = (base, id) => {
    let fn = base;
    if (used.has(fn.toLowerCase())) fn = `${base} (${id})`;
    used.add(fn.toLowerCase());
    return fn;
  };

  const indexRows = [];
  for (const r of data) {
    const dir = r.isSubRecipe ? subDir : recipesDir;
    const fileBase = uniqueName(sanitize(r.name), r.id);
    const filePath = path.join(dir, fileBase + '.md');

    const lines = [
      `# ${r.name}`, '',
      `- **Parsley recipe ID:** ${r.id}`,
      `- **Type:** ${r.isSubRecipe ? 'Sub-recipe' : 'Recipe'}`,
      `- **Status:** ${r.status || 'unknown'}`,
      `- **Ingredient count:** ${r.ingredients.length}`, '',
      '## Ingredients', '',
    ];
    if (!r.ingredients.length) {
      lines.push('_No ingredients listed for this recipe._');
    } else {
      for (const ing of r.ingredients) {
        const qty = [ing.amount, ing.unit].filter(Boolean).join(' ').trim();
        let line = qty ? `- ${qty} — ${ing.name}` : `- ${ing.name}`;
        if (ing.note) line += ` _(${ing.note})_`;
        lines.push(line);
      }
    }
    lines.push('');
    fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
    indexRows.push({ name: r.name, type: r.isSubRecipe ? 'Sub-recipe' : 'Recipe', n: r.ingredients.length, rel: path.relative(OUT, filePath).replace(/\\/g, '/') });
  }

  const recipes = data.filter(r => !r.isSubRecipe).length;
  const subs = data.filter(r => r.isSubRecipe).length;
  indexRows.sort((a, b) => a.type.localeCompare(b.type) || a.name.localeCompare(b.name, 'fr'));
  const idx = [
    '# Parsley Recipes — Ingredient Index', '',
    `Collected ${data.length} items from Parsley (read-only). ${recipes} recipes, ${subs} sub-recipes.`, '',
    '| Recipe | Type | # Ingredients | File |', '|---|---|---|---|',
    ...indexRows.map(r => `| ${r.name.replace(/\|/g, '\\|')} | ${r.type} | ${r.n} | [${r.rel}](${r.rel.replace(/ /g, '%20')}) |`),
    '',
  ];
  fs.writeFileSync(path.join(OUT, 'INDEX.md'), idx.join('\n'), 'utf8');
  fs.writeFileSync(path.join(OUT, 'parsley-ingredients.json'), JSON.stringify(data, null, 2), 'utf8');
  return { total: data.length, recipes, subs };
}

// ---------------------------------------------------------------------------
async function main() {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  console.log('Opening Parsley… please log in when the window appears.');
  await page.goto(`${BASE}/auth/login`);

  // Wait until the user has logged in and the recipes app is reachable.
  // We poll the recipes API (only succeeds with a valid session).
  console.log('Waiting for login (up to 5 minutes)…');
  await page.waitForFunction(async () => {
    try {
      const r = await fetch('/api/recipes?includeMeasures=false', { credentials: 'include' });
      return r.ok;
    } catch { return false; }
  }, { timeout: 5 * 60_000, polling: 2000 });

  console.log('Logged in. Collecting recipes (read-only)…');
  const data = await page.evaluate(collectInPage);
  console.log(`Collected ${data.length} recipes. Writing files to ${OUT} …`);

  const summary = writeFiles(data);
  console.log('Done:', JSON.stringify(summary));

  await browser.close();
}

main().catch(err => { console.error(err); process.exit(1); });
