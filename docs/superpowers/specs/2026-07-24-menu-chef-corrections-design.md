# Design: fold chef corrections into PATTERNS + fix the menu taxonomy

**Date:** 2026-07-24
**Status:** approved (design)
**Scope owner:** menu pipeline (`menus-analyze`, `menus-tag`, `PATTERNS.md`)

## Problem

The chef reviewed the generated mock menus and returned a page of corrections
("MOCK MENU NOTES"). They are **chef-stated ground truth**, and several of them
directly contradict the **inferred** `data/menus/PATTERNS.md`. In this project's
discipline, stated outranks inferred, so these corrections must win.

The corrections fall into three buckets. Only the first two are in scope:

1. **Classification / taxonomy fixes** — dishes filed in the wrong category, and a
   category ("texture") that needs a precise definition.
2. **Scheduling / placement + weather corrections** — placement rules and a
   weather rule that invert what the 6-week sample suggested.
3. **Production-quantity rules** (sandwiches) — **out of scope** for this work.

The central conflict is durability: `PATTERNS.md` is *regenerated* by
`menus-analyze` from the 6 transcribed weeks. Hand-editing it would be silently
overwritten on the next run, because these corrections are **not derivable from
those 6 weeks** — they are new external chef input. So the corrections must be
stored as a first-class input that `menus-analyze` folds in on every run.

## The key insight

A "cold soup" carries **two** independent tags that the old inference conflated:

- `temperature: cold` — how it is *served* (chilled).
- `weather: hot` — the outdoor weather it *suits*.

The old `weather_temp` inference read "cold soup" as a *cold-weather* dish and put
chilled soups on cool/rainy days. The chef's rule fixes exactly this: chilled
soups belong on **hot** days (≥ 24 °C). And *Chili d'orge*, mis-filed as a soup,
is really a `weather: cold` **végé** dish. The taxonomy fix and the PATTERNS fix
are therefore the same correction seen from two sides. The tag schema already has
both axes (`temperature` and `weather`), so no schema change is needed — only
correct classification and correct pattern text.

## Out of scope

- Sandwich production-quantity / unsold-carryover rules.
- Re-tagging the 6 real May–June 2026 weeks. Optional follow-up: of the dishes
  named in the notes, only *falafels* appears in that late-spring window
  (Chili d'orge is Oct–Apr; Mélonccio is peak-summer), so the corpus impact is
  minimal and can be deferred.

## Components

### Component 1 — Chef-notes input file (new)

**Path:** `data/menus/chef-notes/2026-07-24.md`
(Directory `data/menus/chef-notes/` is new; one file per dated note-set.)

Structured YAML frontmatter (machine-readable, the source of truth) plus a prose
body that renders it. Two sections:

- **`corrections:`** — chef-stated pattern rules. Each entry:
  - `rule` — the rule text, as the chef stated it.
  - `dimension` — which `PATTERNS.md` dimension it feeds: `per_day_balance` |
    `weather_temp` | `rotation` | `calendar`.
  - `source: stated`
  - `date: 2026-07-24`
  - `overrides` — (optional) the inferred pattern text this supersedes, so the
    analyzer can find and drop/annotate it. Omit when it is purely additive.

- **`taxonomy:`** — authoritative per-dish classification overrides. Each entry:
  - `dish` — dish name (matched like `menus-tag` matches: normalized name/aka).
  - fields to force, from the controlled vocabulary — e.g. `pool_category`,
    `format`, `protein`, `weather`, plus a free `season` / `note` where relevant.
  - `source: stated`

Both skills treat this file as ground truth that outranks inference.

**Corrections to encode (frontmatter entries):**

| dimension | rule | overrides |
|---|---|---|
| per_day_balance | Pico de Gallo is served **Thursday**; never Monday. | Monday-line staple placement of Pico |
| per_day_balance | Kale mango salad is made **Monday** (occasionally Thursday), **not daily**. | "Kale mango cabbage every day" reading |
| per_day_balance | Végé-chicken / texture dishes run **Tuesday + Thursday**, spaced a day apart; a third (Wednesday) only on **high demand**. | — (additive) |
| weather_temp | Chilled **cold soups** appear **only on days ≥ 24 °C**. | "Cool/rainy days drive cold soups onto the menu" |
| weather_temp | Exception — **Potage Vert L'été** may appear any season when broccoli/zucchini surplus can't be sold; it goes to the **prêt-à-manger fridge**, not the hot line (it browns if held hot, and won't sell in the restaurant in cold months). | — (additive) |
| weather_temp | **Mélonccio** (cold soup): at most **once per week, 1–2 weeks apart**, hottest summer only. | — (refines rotation of Mélonccio) |
| calendar | **Chili d'orge** appears **Oct–Apr only** (a végé dish for cold days). | — (additive) |

**Taxonomy overrides to encode:**

| dish | forced classification |
|---|---|
| Chili d'orge | `pool_category: vege` (**not** soupe); `format:` not `soup`; `weather: cold`; season Oct–Apr; végé dish, good for cold days. |
| Falafels | `pool_category: vege`; a végé dish. May be sold as the complete dish or as sous-vide falafels in bags of 8 (production note, not a tag). |

### Component 2 — `menus-analyze` gains a second input

Edit `.claude/skills/menus-analyze/SKILL.md`:

- **Inputs:** add `data/menus/chef-notes/*.md` as a read-only input alongside the
  tagged menus.
- **Procedure:** after deriving dimensions from the weeks, **fold in** each
  chef-notes `corrections:` entry into its named dimension with `source: stated`.
  Where an entry has `overrides`, find the matching inferred pattern and **remove
  it** (or annotate it as superseded) — the chef-note wins.
- **Confidence:** chef-stated corrections are recorded `source: stated`; a stated
  rule is authoritative as a fact. Score `confidence` per the existing rubric
  (these explicit rules → `high`), and note the override in `evidence`.
- **Invariant preserved:** verbatim `stated_intent` quotes are **never deleted**.
  The 2026-06-15 quote *"Cold soups for rainy / cold weekend"* stays; only the
  `weather_temp` inference built on it is corrected. Confirmed reading: that note
  meant hot/hearty soups for a cold weekend (or Chili d'orge), not the chilled
  format — the analyzer mislabeled it.
- **Wholesale-regeneration rule stays:** PATTERNS is still fully regenerated each
  run; chef-notes are simply a second source folded in, not hand-edits.

### Component 3 — regenerated `PATTERNS.md`

Re-run `menus-analyze` (now chef-notes-aware) to regenerate
`data/menus/PATTERNS.md`. Expected diffs:

- `weather_temp`: the "cool/rainy → cold soups" pattern is replaced by the
  ≥24 °C rule; Potage Vert L'été and Mélonccio-frequency entries added.
- `per_day_balance`: Pico (Thursday/never-Monday), KM (Monday-not-daily), and
  végé-chicken/texture spacing added; the Monday-core over-generalization about
  Pico/KM corrected.
- `calendar`: Chili d'orge Oct–Apr seasonal entry added.
- `stated_intent`: unchanged (verbatim quotes preserved).
- `meta`: note that chef-notes dated 2026-07-24 were folded in.

### Component 4 — taxonomy fixes (`menus-tag` + vocabulary)

- **Define "texture"** in `.claude/skills/menus-tag/SKILL.md` and in the
  `data/menus/_TEMPLATE.md` comment for the `texture` pool category: *a dish whose
  principal ingredient is végé chicken or végé beef (both soy + shiitake based)* →
  `protein: plant-substitute`, pool category `texture`.
- **`menus-tag` reads the chef-notes `taxonomy:` section** as authoritative dish
  overrides: when a dish matches a `taxonomy:` entry, force the stated
  classification instead of inferring it (this is the one place `menus-tag` may
  set a value from an external authority rather than dish content). Chili d'orge →
  végé / `weather: cold` / not a soup; falafels → végé.

### Component 5 — `menus-recommend` one-line fix (approved add-on)

`.claude/skills/menus-recommend/SKILL.md` currently hardcodes "cold/rainy → push
cold soups" in its Rules and in procedure step 5. Correct these to match the new
PATTERNS: hot/hearty **soupes** suit cold days, but **chilled cold soups** go on
**hot** days (≥ 24 °C). Small, surgical edit so the skill stops contradicting the
corrected PATTERNS at runtime.

## Data flow

```
data/menus/chef-notes/2026-07-24.md
    │  corrections:  ─────────────►  menus-analyze  ──►  PATTERNS.md (corrected)  ──►  menus-recommend
    │  taxonomy:     ─────────────►  menus-tag  ──►  tagged menus
    └─ (ground truth, outranks inference)
```

## Testing / verification

No automated test harness exists for the skills (they are prompt files over
markdown). Verification is by regeneration + inspection:

1. After Component 2, run `menus-analyze`; confirm `PATTERNS.md` shows every
   correction in the right dimension with `source: stated`, and that each
   `overrides` target is gone or annotated.
2. Confirm the verbatim 2026-06-15 quote is still present in `stated_intent`.
3. Confirm no chilled-soup-on-cold-day language remains in `PATTERNS.md` or
   `menus-recommend/SKILL.md`.
4. Sanity-generate one mock hot week and one mock cold week with
   `menus-recommend`; confirm cold soups land only on ≥24 °C days, Pico lands
   Thursday, KM lands Monday, and Chili d'orge does not appear in a summer week.

## Risks / notes

- **Dish-name matching** between chef-notes and menus relies on the same
  normalized name/aka matching `menus-tag` already uses; a mis-typed dish name in
  chef-notes would silently no-op. Keep names in chef-notes aligned with the
  pool/Parsley spellings.
- **Idempotency:** folding chef-notes must be deterministic across re-runs — same
  chef-notes in, same PATTERNS out.
- The chef-notes schema is intentionally small; if later note-sets need dimensions
  or fields not covered here, extend the schema rather than overloading `note`.
