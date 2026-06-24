import { promises as fs } from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { RECIPES_DIR, STATUSES, Status, statusDir } from "./paths";

export type Ingredient = {
  name?: string;
  section?: string;
  qty?: string | number;
  unit?: string;
  preparation?: string;
  is_sub_recipe?: boolean;
};

export type Recipe = {
  id: string;
  status: Status;
  title: string;
  description?: string;
  language?: string;
  source?: string;
  flag?: string;
  created?: string;
  photo?: string;
  item_id?: string | number;
  categories?: string[];
  tags?: {
    diet?: string[];
    temperature?: string;
    weight?: string;
    season?: string;
    course?: string;
    cuisine?: string;
  };
  allergens?: string[];
  yield?: { portions?: number | string; batches?: number | string; portion_size?: string };
  ingredients?: Ingredient[];
  /** Raw markdown body (everything after the frontmatter). */
  body: string;
};

/** YAML parses bare `2026-06-23` as a Date; normalize to a YYYY-MM-DD string. */
function asDateString(value: unknown): string | undefined {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  if (typeof value === "string") return value;
  if (value == null) return undefined;
  return String(value);
}

function coerceRecipe(raw: Record<string, unknown>, body: string, id: string, status: Status): Recipe {
  return {
    ...(raw as object),
    id: (raw.id as string) || id,
    status,
    title: (raw.title as string) || id,
    created: asDateString(raw.created),
    body,
  } as Recipe;
}

/** Read and parse a single recipe markdown file. Returns null on parse failure. */
async function readRecipeFile(filePath: string, status: Status): Promise<Recipe | null> {
  try {
    const text = await fs.readFile(filePath, "utf8");
    const { data, content } = matter(text);
    const id = path.basename(filePath, ".md");
    return coerceRecipe(data as Record<string, unknown>, content.trim(), id, status);
  } catch {
    return null;
  }
}

async function listMarkdown(dir: string): Promise<string[]> {
  try {
    const entries = await fs.readdir(dir);
    return entries
      .filter((f) => f.endsWith(".md") && !f.startsWith("_"))
      .map((f) => path.join(dir, f));
  } catch {
    return [];
  }
}

/** All recipes across every status folder, newest-created first. */
export async function getAllRecipes(): Promise<Recipe[]> {
  const all: Recipe[] = [];
  for (const status of STATUSES) {
    const files = await listMarkdown(statusDir(status));
    for (const file of files) {
      const recipe = await readRecipeFile(file, status);
      if (recipe) all.push(recipe);
    }
  }
  all.sort((a, b) => (b.created ?? "").localeCompare(a.created ?? "") || a.title.localeCompare(b.title));
  return all;
}

/** Find one recipe by id across all status folders. */
export async function getRecipe(id: string): Promise<Recipe | null> {
  for (const status of STATUSES) {
    const file = path.join(statusDir(status), `${id}.md`);
    const recipe = await readRecipeFile(file, status);
    if (recipe) return recipe;
  }
  return null;
}

/** True if <id>.md exists in ANY status folder. */
export async function idExists(id: string): Promise<boolean> {
  for (const status of STATUSES) {
    try {
      await fs.access(path.join(statusDir(status), `${id}.md`));
      return true;
    } catch {
      // not here, keep looking
    }
  }
  return false;
}

/** Make an id unique across all status folders by appending -2, -3, ... */
export async function uniqueId(base: string): Promise<string> {
  if (!(await idExists(base))) return base;
  for (let n = 2; n < 1000; n++) {
    const candidate = `${base}-${n}`;
    if (!(await idExists(candidate))) return candidate;
  }
  return `${base}-${Date.now()}`;
}

/** kebab-case an arbitrary title: lowercase, strip accents, collapse to hyphens. */
export function kebab(title: string): string {
  return title
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "") // strip combining diacritics
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export { RECIPES_DIR };
