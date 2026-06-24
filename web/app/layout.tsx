import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Recipes — Kitchen Database",
  description: "Browse, create, and digitize the kitchen's recipes.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <header className="border-b border-stone-200 bg-cream/80 backdrop-blur sticky top-0 z-10">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-6">
            <Link href="/" className="font-serif text-xl font-semibold text-ink">
              🍳 Kitchen Recipes
            </Link>
            <nav className="flex items-center gap-4 text-sm">
              <Link href="/" className="hover:text-clay">Browse</Link>
              <Link href="/new" className="hover:text-clay">New recipe</Link>
              <Link href="/upload" className="hover:text-clay">Upload photo</Link>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-6xl px-4 py-6">{children}</main>
        <footer className="mx-auto max-w-6xl px-4 py-8 text-xs text-stone-400">
          Recipes are stored as markdown in <code>data/recipes/</code>. Manual entries
          land in <code>verified/</code>; digitized photos land in <code>draft/</code> or{" "}
          <code>flagged/</code>.
        </footer>
      </body>
    </html>
  );
}
