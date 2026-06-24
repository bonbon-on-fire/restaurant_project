"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import StatusPill from "./StatusPill";
import type { Recipe } from "@/lib/recipes";

const STATUS_FILTERS = ["all", "draft", "flagged", "verified", "archived"] as const;

type Lite = Pick<
  Recipe,
  "id" | "status" | "title" | "description" | "language" | "flag" | "tags" | "categories"
>;

export default function RecipeBrowser({ recipes }: { recipes: Lite[] }) {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<(typeof STATUS_FILTERS)[number]>("all");

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: recipes.length };
    for (const r of recipes) c[r.status] = (c[r.status] ?? 0) + 1;
    return c;
  }, [recipes]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return recipes.filter((r) => {
      if (status !== "all" && r.status !== status) return false;
      if (!q) return true;
      const hay = [
        r.title,
        r.description,
        r.id,
        ...(r.categories ?? []),
        r.tags?.cuisine,
        r.tags?.course,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return hay.includes(q);
    });
  }, [recipes, query, status]);

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-5">
        <input
          type="search"
          placeholder="Search recipes…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full sm:max-w-xs rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm focus:border-clay focus:outline-none"
        />
        <div className="flex flex-wrap gap-1.5">
          {STATUS_FILTERS.map((s) => (
            <button
              key={s}
              onClick={() => setStatus(s)}
              className={`rounded-full px-3 py-1 text-xs font-medium capitalize transition ${
                status === s
                  ? "bg-ink text-cream"
                  : "bg-white border border-stone-300 text-stone-600 hover:border-clay"
              }`}
            >
              {s} {counts[s] ? `(${counts[s]})` : ""}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="text-stone-500 text-sm py-10 text-center">No recipes match.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((r) => (
            <Link
              key={`${r.status}/${r.id}`}
              href={`/recipes/${r.id}`}
              className="group rounded-xl border border-stone-200 bg-white p-4 shadow-sm hover:shadow-md hover:border-clay/50 transition"
            >
              <div className="flex items-start justify-between gap-2">
                <h2 className="font-serif text-lg font-semibold text-ink group-hover:text-clay leading-snug">
                  {r.title}
                </h2>
                <StatusPill status={r.status} />
              </div>
              {r.description ? (
                <p className="mt-1.5 text-sm text-stone-600 line-clamp-3">{r.description}</p>
              ) : null}
              {r.status === "flagged" && r.flag ? (
                <p className="mt-2 text-xs text-rose-600 line-clamp-2">⚑ {r.flag}</p>
              ) : null}
              {r.categories && r.categories.length > 0 ? (
                <div className="mt-3 flex flex-wrap gap-1">
                  {r.categories.slice(0, 4).map((c) => (
                    <span key={c} className="rounded bg-stone-100 px-2 py-0.5 text-[11px] text-stone-600">
                      {c}
                    </span>
                  ))}
                </div>
              ) : null}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
