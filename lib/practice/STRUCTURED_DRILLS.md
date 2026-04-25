# Structured practice drills — authoring contract

Linked from **`AGENTS.md`** (agent overview) and **`lib/notes/AUTHORING.md`** (under “Practice hub”) so note authors and drill authors land on the same rules.

This document keeps **structured** drill content, **subtopic coverage**, and the **reveal UI** aligned. Follow it when adding or editing packs in `lib/practice/*-practice.ts`.

## Locked standard (all subjects) — do not relax

**One pack = one syllabus subtopic (`noteId`) = exactly 10 drill questions** (`TenItems<DrillQuestion>` in `types.ts`) plus 10 flashcards. Treat the **10 drills as one session** that must leave the subtopic “exam ready” for every outcome the board expects in that section.

1. **Full learning-outcome coverage**  
   For the subtopic you are authoring, work from the **learning-outcome list** (internal extracts — do not paste verbatim from the board into the app):
   - **Chemistry 9701** → `data/syllabus/chemistry-9701-learning-outcomes.md` (subsections line up with `data/courses/chemistry-9701.json` via `code` / subtopic `id`).
   - **Physics 9702** → `data/syllabus/physics-9702-learning-outcomes.md` with `data/courses/physics-9702.json`.
   - **Biology 9700** → `data/syllabus/biology-9700-learning-outcomes.md` with `data/courses/biology-9700.json`.  

   **Every** bulleted learning outcome for that subtopic must be **addressed by at least one drill** across the 10-question set (one question may cover several outcomes; **no outcome may be left with zero** aligned question). This is a **crosswalk** exercise, not a vibe check: before you ship a new or heavily revised pack, you should be able to point to which **`id`**(s) (e.g. `t1-4-d1` …) cover which outcome.

2. **Definitions vs calculations (both are mandatory where the syllabus asks)**  
   Where the subtopic’s outcomes include **“define / state what is meant by / describe”** (or equivalent), the pack must **drill the definition register** the mark scheme wants — not only through structured questions; an MCQ can do it if the **explanation** and any revealed rationale are still exam-tight, but the outcome must not be only implied in a flashcard.  
   Where the outcomes include **calculations, use of a formula, or given-data questions**, the pack must include **at least one drill** with **worked line(s)** that match the expected standard (see **Calculations** and **Model answer quality** below). If an outcome is purely qualitative, a precise **“explain / describe / outline”** stem + full model answer is enough.

3. **High-detail exam style (model answers, not study notes in disguise)**  
   **`workedSolution`** is what a **strong candidate writes in the exam**: full sentences, ordered logical steps, correct terminology, and **sufficient** working for the marks on offer. It is **not** bullet abbreviations, not tutor shorthand, and not a list of keywords without the connecting phrases examiners require. **Lines should be as detailed as a top-band response** for that many marks, without padding.

This standard applies **moving forward to every new pack and to any substantial revision** of an existing one. If a subtopic’s outcome list is very long, **combination in single stems** and **tight item design** are preferred over dropping coverage; if you discover a true conflict (e.g. more distinct LOs than can be tested in 10 well-formed items), that is a **product/content exception** to document in the pack file in a **short** block comment and fix in a follow-up.

## What the learner sees (product)

After **“Show model answer and mark scheme”** (`PracticeArticle.tsx`, `MixedDrillArticle.tsx`):

1. **Model answer** — numbered list built from **`workedSolution`** (ordered `<ol>`).
2. **Mark scheme** — bullets built from **`modelAnswerPoints`** (`<ul>`).
3. **Common mistake** — single paragraph from **`commonMistake`**.

So **`workedSolution` is the primary exam-style answer block**, not a secondary “hints” section.

## Data model (`StructuredDrillQuestion` in `types.ts`)

| Field | Role | Voice |
|-------|------|--------|
| `stem` | The question as in the exam. | Must match what you expect in the answer (e.g. if the stem asks for an **ionic** equation, the model path should be ionic, not a different convention). |
| `workedSolution` | **Model answer**: what a strong candidate writes — full sentences, in order, tied to the stem. | First-person optional; avoid tutor shorthand (“Z counts…”, “just use…”) unless you immediately restate in exam language. |
| `modelAnswerPoints` | **Mark scheme**: discrete, mark-bearing lines examiners credit. | Short, scannable; can overlap with `workedSolution` but need not repeat every word. |
| `commonMistake` | One typical wrong idea or slip. | Clear and specific. |

`marks` should be consistent with how many distinct points appear in `modelAnswerPoints` (rough sanity check when authoring).

## Editorial rules

1. **Answer the stem** — Every sentence in `workedSolution` should be interpretable as answering the printed question, not a generic mini-lecture on the topic.
2. **Exam register** — Prefer definitions, “therefore…”, balanced equations with states where asked, and explicit reasoning steps markers reward. For **definitional** outcomes, the model path must include the **defining features** a mark scheme would list (e.g. conditions, “per unit”, “relative to”, state symbols) where they matter.
3. **Notation** — Match existing packs: `->` for reaction arrows, `^` for superscripts in plain text (e.g. `10^-3`, `M_r`), charge as `+`, `2+`, etc., unless a pack already standardises differently.
4. **Length** — Use as many `workedSolution` lines as a **credible** top-band response needs for the stated `marks` — often **2–4** for a 3–6 mark item, but **longer is correct** if the only way to show full credit is to spell out the full argument or every marking point in prose. Never shorten at the cost of **leaving a marking point unstated** in the model answer. Merge or split for clarity, not to save space.
5. **Calculations** — Show **all** working lines the mark scheme would accept (rearrangement, substitution, **units in the result**, s.f. or consistency where the stem implies it), often with a short sentence tying the result back to the question. No “and so the answer is 2.1” with the intermediate step missing.
6. **Do not** use `workedSolution` for meta-only content (“mention state-function first”) unless you rewrite it as the actual student response.

## Per-subject syllabus files (source for coverage)

Use the right file for the course you are authoring:

| Qualification (app) | Learning outcomes (internal) | Course outline (`noteId` / codes) |
|----------------------|------------------------------|-------------------------------------|
| Chemistry 9701 | `data/syllabus/chemistry-9701-learning-outcomes.md` | `data/courses/chemistry-9701.json` |
| Physics 9702 | `data/syllabus/physics-9702-learning-outcomes.md` | `data/courses/physics-9702.json` |
| Biology 9700 | `data/syllabus/biology-9700-learning-outcomes.md` | `data/courses/biology-9700.json` |

**Biology 9700 — extract gap (`t10-1`)** — The internal learning-outcomes file currently lists **§10.2 only** under Topic 10; **§10.1 (Infectious diseases)** bullets are **not present** in that extract. The **`t10-1`** practice pack in `lib/practice/biology-topic10-practice.ts` is therefore authored from **standard 9700 Topic 10.1** until the markdown extract is backfilled; use the pack’s header comment for the drill crosswalk, not a §10.1 slice in `biology-9700-learning-outcomes.md`.

**Biology 9700 — extract gap (`t12-1`)** — The repository extract `biology-9700-learning-outcomes.md` currently lists **§12.2 only** under Topic 12 (**§12.1 (Energy) is not present** in that extract). The **`t12-1`** practice pack in `lib/practice/biology-topic12-practice.ts` is therefore authored from **standard 9700 Topic 12.1** (ATP as a universal energy currency, ADP/ATP interconversion, high-level energy transfers in metabolism) until the markdown is backfilled; use the pack’s header comment, not a §12.1 slice in `biology-9700-learning-outcomes.md`.

**Biology 9700 — extract gap (`t11-1`)** — Topic 11 in the extract jumps to **§11.2**; **§11.1 (The immune system)** bullets are not present. The **`t11-1`** pack in `lib/practice/biology-topic11-practice.ts` is authored from **standard 9700 Topic 11.1** until the markdown is backfilled.

**Biology 9700 — extract gap (`t14-1`)** — The extract shows **§14.1** only as a **“continued”** block (glucagon/cAMP cascade, insulin/glucagon feedback, biosensors). The **`t14-1`** pack in `lib/practice/biology-topic14-practice.ts` adds typical **14.1** framing (e.g. homeostasis, thermoregulation, ADH/osmoregulation outline) **plus** those bullets; confirm wording against the official PDF when teaching.

**Chemistry (topics 1–10 in active development)** — When building or revising packs, **satisfy the “Locked standard” section above** first. In addition, keep a healthy **question-type mix** so students do not only see one format: in practice, most subtopics will include **several** clearly **definitional** stems (`Define …`, `State what is meant by …`, etc.) and **enough** calculation / application stems to meet every **quantitative** outcome. Prefer stems that **mirror the subsection** the course JSON lists for that `noteId` (e.g. 2.1, 3.1, 5.1). For definitional items, `modelAnswerPoints` must list **each** distinct mark-bearing idea; `workedSolution` must read as a **coherent** exam answer, not a keyword list.

## Checklist — new or edited **pack** (entire 10 + flashcards if touched)

- [ ] **Crosswalk** — For this `noteId`, every learning outcome in the right `data/syllabus/*-learning-outcomes.md` slice maps to at least one drill in the pack’s **`drills`** array (each item has a stable `id`, e.g. `t1-4-d1` … `t1-4-d10`), or document the rare exception in a short comment in the pack module.
- [ ] **Definitions** and **calculations** (where the LO list demands them) are both **explicitly** exercised in the drill set, not only in flashcards.
- [ ] **Exam depth** — Structured items use **`workedSolution` as a full, high-detail model answer**; `modelAnswerPoints` align with real mark boundaries.

## Checklist — new or edited **single** structured item

- [ ] `workedSolution` reads as a **model answer** if shown alone (numbered section 1) — top-band detail for the marks.
- [ ] `modelAnswerPoints` still match **what marks are for**, not a duplicate label set.
- [ ] `stem` and answer **convention** agree (wording, ionic vs molecular equation, “define” vs “explain”, etc.).
- [ ] `marks` plausibly matches the number of creditworthy ideas in `modelAnswerPoints`.
- [ ] Build passes: `npm run build`.

## MCQs (same packs)

For `McqDrillQuestion`, put **`distractorRationale` only on wrong options** (keys `A`–`D` that are not `correctOptionId`). Do not attach a “distractor” text to the correct letter — that belongs in `explanation`.

## Code touchpoints

- Types: `lib/practice/types.ts` — `StructuredDrillQuestion`.
- Reveal UI: `app/(app)/[subject]/practice/[noteId]/PracticeArticle.tsx`, `app/(app)/[subject]/practice/mixed/MixedDrillArticle.tsx`.

## Packs — maintenance expectation

**Chemistry** `chemistry-topic1-practice.ts` … `chemistry-topic10-practice.ts` and **any new chemistry topics** should be kept aligned with the **locked standard** (full LO coverage, definitions + calculations as required, high-detail `workedSolution`).

**Biology** `biology-topic1-practice.ts` … `biology-topic19-practice.ts` (9700 — full course outline in the app) should meet the same **locked standard**; see the **Biology 9700 — extract gap** notes above for `t9-1`, `t10-1`, `t11-1`, `t12-1`, `t14-1`, and any other subtopics where the internal LO markdown is incomplete.

**Physics** (`physics-topic*-practice.ts`): apply the same **contract** on every **new** or **heavily edited** file; bring legacy items up to this bar when you touch a pack, not in drive-by rewrites of unrelated subtopics.
