# Lattice study notes — authoring standard

Use this document whenever you add or rewrite `NoteDraft` content (e.g. under `lib/notes/*-drafts.ts` or future data sources). It encodes the bar set by the first full notes (9702 **1.1 Physical quantities**) so quality stays **consistent across every subtopic and subject**.

---

## Role of the page

Each note page is a **self-contained teaching unit** for one syllabus subtopic (see `data/courses/*.json` for titles and codes). A student may have **minimal prior knowledge**. The job is not to “tick off” learning outcomes in one line each, but to **explain** ideas so someone could reach **the highest grades** with practice.

---

## Required structure (`NoteDraft`)

Defined in `types.ts`. Every published note must include:

| Block | Purpose |
|--------|--------|
| **`syllabusNotes`** | One or more `NoteSection`s: **H3-level titles** + paragraphs (+ optional bullets). This is the main teaching narrative. |
| **`examinerPitfalls`** | Optional **intro** + **bullet list**: how marks are lost, wording traps, presentation, common wrong reasoning — **examiner mindset**, not generic study tips. |
| **`workedExamples`** | **Exactly three** examples: clear **Problem** + **Solution** with **full reasoning** (definitions, dimensions, “why this step”, common variants). |
| **`selfTest`** | **Exactly five** items: **question** + **modelAnswer** (can be several strings). Answers stay hidden in the UI until reveal; write them as **complete model answers**, not hints. |

Optional **`eyebrow`**: use sparingly (e.g. level label). Avoid “draft preview” for production notes.

**Ids**: stable `id` fields on sections and examples (`t2-1-ex2`, etc.) for anchors and future editing.

---

## Depth and coverage

1. **Cover the subtopic fully**  
   Everything a student needs for **that** subtopic should be on the page (definitions, rules, exceptions, links forward/back: e.g. “scalar vs vector is developed in 1.4”). Do not assume they read another page first.

2. **Cover every syllabus learning outcome explicitly in content**  
   For each subtopic, map your teaching notes against the official learning outcomes and ensure each outcome is taught directly in at least one section/example/self-test item. Coverage should be explicit in the explanation, but do **not** write headings like `Learning outcome: ...` in learner-facing note text.

3. **Explain, don’t only state**  
   For each important idea: **what it is**, **why it matters**, **how it is used**, and **what goes wrong** if you misuse it. Use short motivating sentences, then precision.

4. **Definitions and language**  
   Use **Cambridge International A Level** register: correct **SI** usage, **UK/international exam** conventions (decimal **point**, space between value and unit, compound units like **m s⁻¹**, **kg m s⁻²**). Name quantities clearly (magnitude + unit; dimensionless ratios where appropriate).
   Write powers with proper superscripts in learner-facing text (e.g. `mv²`, `r³`, `m s⁻¹`) rather than caret notation like `mv^2`.

5. **Maths and dimensions**  
   Where relevant: **homogeneity**, **base/derived** quantities, **dimensional checks**, radians as dimensionless, etc. Show reasoning in worked examples the way a strong candidate would write it.

6. **Pitfalls block**  
   Concrete, **mark-scheme-adjacent** items: wrong units, wrong symbols, dimensional mistakes, “calculator precision” answers, mis-stating base vs derived, etc. The intro sets the tone (examiners reward clarity and correct physics language).

7. **Worked examples**  
   - Increasing difficulty or **different angles** on the same idea is fine.  
   - **Solution** paragraphs should read like **model examination working**, not telegraphic keys.

8. **Self-test**  
   Questions should **probe understanding** (explain, show, state, use dimensions…), not only recall. Model answers should be **examination-quality**: enough for a top band without needing the teacher to fill gaps.

---

## Voice and integrity

- **Voice**: clear, authoritative, neutral; address the reader as a serious student. No filler, no chatty asides, no “simply” / “obviously” as a substitute for explanation.
- **Terminology**: match **Cambridge International** physics (and the qualification named in course JSON), not US AP phrasing unless a comparison is explicitly useful.
- **Copyright**: **Do not** paste verbatim text from the **official syllabus PDF** or from third-party revision sites. **Align coverage** with the public syllabus structure; use **original** explanations. The app’s course JSON already carries a short **copyright / attribution** notice for headings.
- **Consistency**: same structural blocks, same depth expectation, same SI and notation conventions across **physics, chemistry, biology** when those subjects get notes.

---

## Splitting content across `syllabusNotes`

- Prefer **several titled sections** over one endless section when the subtopic naturally breaks (e.g. physical quantity → SI base/derived → homogeneity → dimensions → dimensionless constants).
- **Bullets** for lists students must scan (e.g. seven SI base quantities); **paragraphs** for argument and narrative.
- **`id`**: kebab-case, stable (`physical-quantity`, `homogeneity`, …) for deep links and collapsible UI.

---

## UI contract (no change to copy rules)

The app renders fixed regions in order: **syllabus accordions**, **worked example cards**, **red-tint examiner pitfalls**, then **self-test reveal**. Authors do **not** embed HTML in strings — plain text only. **Length** is fine: the layout is built for long-form notes; avoid breaking ideas artificially just to shorten text.

---

## Checklist before shipping a note

- [ ] Every **required** `NoteDraft` field is present with correct **counts** (3 examples, 5 self-test items).
- [ ] Every official learning outcome for that subtopic is explicitly covered in the note content (sections/examples/self-test), without using `Learning outcome:` labels in learner-facing headings.
- [ ] Syllabus sections **cover** the subtopic; no large gap vs what past papers test.
- [ ] Pitfalls are **specific** to that subtopic (not copy-pasted generic advice unless still true).
- [ ] Worked solutions are **complete**; self-test answers would satisfy a **strict** marker.
- [ ] Units, symbols, and dimensions are **consistent** with the rest of the course notes.
- [ ] No verbatim syllabus **learning outcome** text; no lifted paragraphs from external publishers.

---

## Where to put content

- Today: subject-specific modules such as `lib/notes/physics-topic1-drafts.ts`, resolved via `get-draft.ts`.
- When you add subjects or topics, **mirror this file’s standard** and keep one source of truth per note `noteId`.

### Practice hub (drills) — separate from notes

**Note pages** (`NoteDraft` in `lib/notes/`) are not the same as **practice packs** in `lib/practice/*-practice.ts`. Packs are **10 drills + 10 flashcards** per subtopic. **Drill authoring is outcome-complete:** by the time a student finishes the **10** drill questions, they should have hit **every** learning outcome for that subtopic (definitions, quantitative work, and any other “state / explain / describe” lines in the official subject content) — with **model answers** in **strict exam style** and full detail, not hints. The contract is in **`lib/practice/STRUCTURED_DRILLS.md`** (reveal UI field mapping, syllabus files, and checklists). Do not hand-wave coverage in new or revised packs.

If product rules change (e.g. optional fourth worked example), update **`types.ts`** and the practice doc together.
