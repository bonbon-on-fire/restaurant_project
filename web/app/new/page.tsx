"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Row = { section: string; qty: string; unit: string; name: string; preparation: string };

const emptyRow = (): Row => ({ section: "", qty: "", unit: "", name: "", preparation: "" });

export default function NewRecipePage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [language, setLanguage] = useState("fr");
  const [categories, setCategories] = useState("");
  const [portions, setPortions] = useState("");
  const [portionSize, setPortionSize] = useState("");
  const [rows, setRows] = useState<Row[]>([emptyRow()]);
  const [body, setBody] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function updateRow(i: number, patch: Partial<Row>) {
    setRows((rs) => rs.map((r, idx) => (idx === i ? { ...r, ...patch } : r)));
  }
  function addRow() {
    setRows((rs) => [...rs, emptyRow()]);
  }
  function removeRow(i: number) {
    setRows((rs) => (rs.length === 1 ? rs : rs.filter((_, idx) => idx !== i)));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!title.trim()) {
      setError("Title is required.");
      return;
    }
    setSaving(true);
    try {
      const res = await fetch("/api/recipes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title.trim(),
          description: description.trim() || undefined,
          language: language.trim() || undefined,
          categories: categories
            .split(",")
            .map((c) => c.trim())
            .filter(Boolean),
          yield: { portions: portions || undefined, portion_size: portionSize || undefined },
          ingredients: rows.map((r) => ({
            section: r.section.trim() || undefined,
            qty: r.qty.trim() || undefined,
            unit: r.unit.trim() || undefined,
            name: r.name.trim() || undefined,
            preparation: r.preparation.trim() || undefined,
          })),
          body: body.trim() || undefined,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to save.");
      router.push(`/recipes/${data.id}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save.");
      setSaving(false);
    }
  }

  const input =
    "w-full rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm focus:border-clay focus:outline-none";
  const label = "block text-sm font-medium text-stone-700 mb-1";

  return (
    <div className="max-w-2xl">
      <h1 className="font-serif text-2xl font-semibold text-ink">New recipe</h1>
      <p className="text-sm text-stone-500 mt-1 mb-6">
        Manually entered recipes are saved as <strong>verified</strong> (a human wrote them).
      </p>

      {error ? (
        <div className="mb-4 rounded-lg border border-rose-200 bg-rose-50 p-3 text-sm text-rose-800">
          {error}
        </div>
      ) : null}

      <form onSubmit={onSubmit} className="space-y-5">
        <div>
          <label className={label}>Title *</label>
          <input className={input} value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>

        <div>
          <label className={label}>Description</label>
          <textarea className={input} rows={2} value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={label}>Language</label>
            <input className={input} value={language} onChange={(e) => setLanguage(e.target.value)} placeholder="fr" />
          </div>
          <div>
            <label className={label}>Categories (comma-separated)</label>
            <input className={input} value={categories} onChange={(e) => setCategories(e.target.value)} placeholder="Soupe, Plat principal" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={label}>Yield — portions</label>
            <input className={input} value={portions} onChange={(e) => setPortions(e.target.value)} placeholder="30" />
          </div>
          <div>
            <label className={label}>Portion size</label>
            <input className={input} value={portionSize} onChange={(e) => setPortionSize(e.target.value)} placeholder="500 ml" />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label className={label + " mb-0"}>Ingredients</label>
            <button type="button" onClick={addRow} className="text-xs text-clay hover:underline">
              + Add ingredient
            </button>
          </div>
          <div className="space-y-2">
            {rows.map((r, i) => (
              <div key={i} className="grid grid-cols-12 gap-1.5 items-center">
                <input className={input + " col-span-3"} placeholder="Section" value={r.section} onChange={(e) => updateRow(i, { section: e.target.value })} />
                <input className={input + " col-span-2"} placeholder="Qty" value={r.qty} onChange={(e) => updateRow(i, { qty: e.target.value })} />
                <input className={input + " col-span-2"} placeholder="Unit" value={r.unit} onChange={(e) => updateRow(i, { unit: e.target.value })} />
                <input className={input + " col-span-4"} placeholder="Name" value={r.name} onChange={(e) => updateRow(i, { name: e.target.value })} />
                <button type="button" onClick={() => removeRow(i)} className="col-span-1 text-stone-400 hover:text-rose-600 text-lg" aria-label="Remove">
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <label className={label}>Method &amp; notes (markdown)</label>
          <textarea
            className={input + " font-mono"}
            rows={8}
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder={"## Instructions\n\n1. ...\n\n## Notes\n"}
          />
        </div>

        <button
          type="submit"
          disabled={saving}
          className="rounded-lg bg-clay px-4 py-2 text-sm font-medium text-white hover:bg-clay/90 disabled:opacity-50"
        >
          {saving ? "Saving…" : "Save recipe"}
        </button>
      </form>
    </div>
  );
}
