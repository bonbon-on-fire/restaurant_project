import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-16 text-center">
      <h1 className="font-serif text-2xl font-semibold text-ink">Recipe not found</h1>
      <p className="text-sm text-stone-500 mt-2">
        It may have been renamed or moved to a different status folder.
      </p>
      <Link href="/" className="mt-4 inline-block text-clay underline">
        Back to all recipes
      </Link>
    </div>
  );
}
