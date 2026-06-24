import Link from "next/link";
import { notFound } from "next/navigation";
import { getRecipe, type Ingredient } from "@/lib/recipes";
import StatusPill from "@/components/StatusPill";

export const dynamic = "force-dynamic";

function groupBySection(ingredients: Ingredient[] = []) {
  const groups = new Map<string, Ingredient[]>();
  for (const ing of ingredients) {
    const key = ing.section?.trim() || "";
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(ing);
  }
  return [...groups.entries()];
}

function fmtQty(ing: Ingredient): string {
  return [ing.qty, ing.unit].filter((v) => v !== undefined && v !== null && v !== "").join(" ");
}

export default async function RecipePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const recipe = await getRecipe(id);
  if (!recipe) notFound();

  const sections = groupBySection(recipe.ingredients);

  return (
    <article className="max-w-3xl">
      <Link href="/" className="text-sm text-stone-500 hover:text-clay">&larr; All recipes</Link>

      <div className="mt-3 flex items-start justify-between gap-3">
        <h1 className="font-serif text-3xl font-semibold text-ink">{recipe.title}</h1>
        <StatusPill status={recipe.status} />
      </div>

      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-stone-500">
        {recipe.language && <span>Language: {recipe.language}</span>}
        {recipe.source && <span>Source: {recipe.source}</span>}
        {recipe.created && <span>Added: {recipe.created}</span>}
        {recipe.item_id && <span>PLU/Item: {recipe.item_id}</span>}
        {recipe.photo && <span>Photo: {recipe.photo}</span>}
      </div>

      {recipe.status === "flagged" && recipe.flag ? (
        <div className="mt-4 rounded-lg border border-rose-200 bg-rose-50 p-3 text-sm text-rose-800">
          <span className="font-semibold">⚑ Needs a human:</span> {recipe.flag}
        </div>
      ) : null}

      {recipe.description ? (
        <p className="mt-4 text-stone-700">{recipe.description}</p>
      ) : null}

      {recipe.yield && (recipe.yield.portions || recipe.yield.portion_size) ? (
        <p className="mt-3 text-sm text-stone-600">
          Yields {recipe.yield.portions ?? "?"} portions
          {recipe.yield.portion_size ? ` · ${recipe.yield.portion_size} each` : ""}
        </p>
      ) : null}

      {(recipe.categories?.length || recipe.allergens?.length || recipe.tags?.diet?.length) ? (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {recipe.categories?.map((c) => (
            <span key={`cat-${c}`} className="rounded bg-stone-100 px-2 py-0.5 text-xs text-stone-700">{c}</span>
          ))}
          {recipe.tags?.diet?.map((d) => (
            <span key={`diet-${d}`} className="rounded bg-sage/15 px-2 py-0.5 text-xs text-sage">{d}</span>
          ))}
          {recipe.allergens?.map((a) => (
            <span key={`alg-${a}`} className="rounded bg-rose-50 px-2 py-0.5 text-xs text-rose-700">allergen: {a}</span>
          ))}
        </div>
      ) : null}

      {recipe.ingredients && recipe.ingredients.length > 0 ? (
        <section className="mt-6">
          <h2 className="font-serif text-xl font-semibold text-ink mb-2">Ingredients</h2>
          <div className="space-y-4">
            {sections.map(([section, items]) => (
              <div key={section || "_"}>
                {section ? (
                  <h3 className="text-sm font-semibold text-clay uppercase tracking-wide mb-1">{section}</h3>
                ) : null}
                <ul className="divide-y divide-stone-100 rounded-lg border border-stone-200 bg-white">
                  {items.map((ing, i) => (
                    <li key={i} className="flex items-baseline gap-3 px-3 py-1.5 text-sm">
                      <span className="min-w-20 font-medium text-ink">{fmtQty(ing)}</span>
                      <span className="text-stone-700">{ing.name}</span>
                      {ing.preparation ? (
                        <span className="text-stone-400 text-xs">— {ing.preparation}</span>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {recipe.body ? (
        <section className="mt-6">
          <h2 className="font-serif text-xl font-semibold text-ink mb-2">Method &amp; notes</h2>
          <pre className="whitespace-pre-wrap font-sans text-sm text-stone-700 rounded-lg border border-stone-200 bg-white p-4 leading-relaxed">
            {recipe.body}
          </pre>
        </section>
      ) : null}
    </article>
  );
}
