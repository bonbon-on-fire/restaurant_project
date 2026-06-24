import { getAllRecipes } from "@/lib/recipes";
import RecipeBrowser from "@/components/RecipeBrowser";

// Always read fresh from disk — recipes change as photos are digitized.
export const dynamic = "force-dynamic";

export default async function HomePage() {
  const recipes = await getAllRecipes();
  const lite = recipes.map((r) => ({
    id: r.id,
    status: r.status,
    title: r.title,
    description: r.description,
    language: r.language,
    flag: r.flag,
    tags: r.tags,
    categories: r.categories,
  }));

  return (
    <div>
      <div className="mb-6">
        <h1 className="font-serif text-2xl font-semibold text-ink">Recipe database</h1>
        <p className="text-sm text-stone-500 mt-1">
          {recipes.length} recipe{recipes.length === 1 ? "" : "s"} across draft, flagged,
          verified, and archived.
        </p>
      </div>
      <RecipeBrowser recipes={lite} />
    </div>
  );
}
