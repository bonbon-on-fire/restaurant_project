import path from "node:path";

// The recipe + photo data lives in the repo's top-level data/ folder, one level
// up from web/. Override with RECIPE_DATA_DIR if you run the app from elsewhere.
export const DATA_DIR =
  process.env.RECIPE_DATA_DIR ?? path.resolve(process.cwd(), "..", "data");

export const RECIPES_DIR = path.join(DATA_DIR, "recipes");
export const TEMPLATE_PATH = path.join(RECIPES_DIR, "_TEMPLATE.md");

export const PHOTOS_DIR = path.join(DATA_DIR, "photos");
export const INBOX_DIR = path.join(PHOTOS_DIR, "inbox");
export const PHOTOS_DONE_DIR = path.join(PHOTOS_DIR, "done");
export const PHOTOS_FLAGGED_DIR = path.join(PHOTOS_DIR, "flagged");

export const STATUSES = ["draft", "flagged", "verified", "archived"] as const;
export type Status = (typeof STATUSES)[number];

export function statusDir(status: Status): string {
  return path.join(RECIPES_DIR, status);
}
