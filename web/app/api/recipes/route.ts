import { NextRequest, NextResponse } from "next/server";
import { createVerifiedRecipe, type NewRecipeInput } from "@/lib/writeRecipe";

export async function POST(req: NextRequest) {
  let body: NewRecipeInput;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  if (!body.title || !body.title.trim()) {
    return NextResponse.json({ error: "Title is required." }, { status: 400 });
  }

  // Drop empty ingredient rows the form may have submitted.
  if (Array.isArray(body.ingredients)) {
    body.ingredients = body.ingredients.filter(
      (ing) => ing && (ing.name?.trim() || ing.qty || ing.unit?.trim()),
    );
  }

  try {
    const id = await createVerifiedRecipe(body);
    return NextResponse.json({ id, status: "verified" }, { status: 201 });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to create recipe.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
