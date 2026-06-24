"use client";

import { useState } from "react";
import Link from "next/link";

type Result =
  | { file: string; ok: true; id: string; title: string; status: "draft" | "flagged" }
  | { file: string; ok: false; skipped?: boolean; message: string };

export default function UploadPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [busy, setBusy] = useState(false);
  const [results, setResults] = useState<Result[]>([]);

  async function uploadOne(file: File): Promise<Result> {
    const fd = new FormData();
    fd.append("photo", file);
    try {
      const res = await fetch("/api/upload", { method: "POST", body: fd });
      const data = await res.json();
      if (!res.ok) return { file: file.name, ok: false, message: data.error || "Upload failed." };
      if (data.skipped) return { file: file.name, ok: false, skipped: true, message: data.reason };
      return { file: file.name, ok: true, id: data.id, title: data.title, status: data.status };
    } catch (err) {
      return { file: file.name, ok: false, message: err instanceof Error ? err.message : "Network error." };
    }
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (files.length === 0 || busy) return;
    setBusy(true);
    setResults([]);
    for (const file of files) {
      const r = await uploadOne(file);
      setResults((prev) => [...prev, r]);
    }
    setBusy(false);
    setFiles([]);
  }

  return (
    <div className="max-w-2xl">
      <h1 className="font-serif text-2xl font-semibold text-ink">Upload recipe photos</h1>
      <p className="text-sm text-stone-500 mt-1 mb-6">
        Each photo is auto-named and digitized (via Claude). Clean reads land in{" "}
        <strong>draft</strong>; anything ambiguous is <strong>flagged</strong> for review.
        Photos with no readable title are left in the inbox.
      </p>

      <form onSubmit={onSubmit} className="space-y-4">
        <label className="block rounded-xl border-2 border-dashed border-stone-300 bg-white p-8 text-center cursor-pointer hover:border-clay transition">
          <input
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif"
            multiple
            className="hidden"
            onChange={(e) => setFiles(Array.from(e.target.files ?? []))}
          />
          <span className="text-sm text-stone-600">
            {files.length > 0
              ? `${files.length} photo${files.length === 1 ? "" : "s"} selected`
              : "Click to choose photos (JPG, PNG, WEBP, GIF)"}
          </span>
        </label>

        {files.length > 0 ? (
          <ul className="text-xs text-stone-500 list-disc pl-5">
            {files.map((f) => (
              <li key={f.name}>{f.name}</li>
            ))}
          </ul>
        ) : null}

        <button
          type="submit"
          disabled={busy || files.length === 0}
          className="rounded-lg bg-clay px-4 py-2 text-sm font-medium text-white hover:bg-clay/90 disabled:opacity-50"
        >
          {busy ? "Digitizing…" : `Digitize ${files.length || ""} photo${files.length === 1 ? "" : "s"}`}
        </button>
      </form>

      {results.length > 0 ? (
        <div className="mt-6 space-y-2">
          <h2 className="font-serif text-lg font-semibold text-ink">Results</h2>
          {results.map((r, i) => (
            <div
              key={i}
              className={`rounded-lg border p-3 text-sm ${
                r.ok
                  ? r.status === "flagged"
                    ? "border-rose-200 bg-rose-50"
                    : "border-emerald-200 bg-emerald-50"
                  : "border-amber-200 bg-amber-50"
              }`}
            >
              <span className="font-medium">{r.file}</span>{" "}
              {r.ok ? (
                <>
                  → <Link href={`/recipes/${r.id}`} className="text-clay underline">{r.title}</Link>{" "}
                  <span className="text-xs">({r.status})</span>
                </>
              ) : (
                <span className="text-stone-600">— {r.message}</span>
              )}
            </div>
          ))}
          <p className="text-xs text-stone-400 pt-1">
            <Link href="/" className="underline">Back to browse</Link> to see the new recipes.
          </p>
        </div>
      ) : null}
    </div>
  );
}
