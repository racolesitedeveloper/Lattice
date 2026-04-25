import type { NoteDraft } from "./types";

/** Full teaching notes for 9701 Topic 6 — subtopic 6.1 (see lib/notes/AUTHORING.md). */
export const CHEMISTRY_TOPIC6_DRAFTS: Record<string, NoteDraft> = {
  "t6-1": {
    noteId: "t6-1",
    syllabusNotes: [
      {
        id: "redox-core-meanings",
        title: "Redox as electron transfer and oxidation-number change",
        paragraphs: [
          "Redox is short for reduction and oxidation occurring together in one overall reaction. Whenever one species is oxidised, another species must be reduced, because electrons released by one species are accepted by another.",
          "Oxidation can be described as loss of electrons, increase in oxidation number, or gain of oxygen in many inorganic contexts. Reduction is gain of electrons, decrease in oxidation number, or loss of oxygen. In examination answers, electron-transfer language and oxidation-number language should agree.",
          "Oxidation number (oxidation state) is a bookkeeping value assigned to an atom in a species by agreed rules. It is not a real ionic charge in every covalent molecule, but it is a powerful method for tracking electron transfer in complex equations.",
        ],
      },
      {
        id: "oxidation-number-rules",
        title: "Assigning oxidation numbers in ions and compounds",
        paragraphs: [
          "For any free element in its standard uncombined form, oxidation number is 0, for example Na(s), O₂(g), Cl₂(g), S₈(s). For a monatomic ion, oxidation number equals ionic charge, for example Fe³⁺ is +3 and Br- is -1.",
          "In compounds and polyatomic ions, use standard rules: Group 1 metals are usually +1, Group 2 metals are usually +2, fluorine is always -1, oxygen is usually -2 (except peroxides), and hydrogen is usually +1 in compounds with non-metals.",
          "The algebra rule is essential: sum of oxidation numbers is 0 for a neutral compound, and equals the ion charge for a polyatomic ion. Use this to calculate unknown values, including variable oxidation states in transition-metal compounds.",
          "Roman numerals in names show the magnitude of oxidation number for elements with variable values, especially transition metals, for example iron(II), iron(III), copper(I), copper(II), chromium(VI), manganese(VII).",
        ],
      },
      {
        id: "oxidising-and-reducing-agents",
        title: "Oxidising agents and reducing agents",
        paragraphs: [
          "An oxidising agent causes oxidation of another species and is itself reduced. A reducing agent causes reduction of another species and is itself oxidised. Candidates often get these labels reversed, so always identify what happens to the agent itself.",
          "A practical method is to compare oxidation numbers before and after reaction. If an element's oxidation number decreases, that species has been reduced and acts as the oxidising agent. If an element's oxidation number increases, that species has been oxidised and acts as the reducing agent.",
          "Typical oxidising agents include acidified manganate(VII) and dichromate(VI) ions, and halogens such as Cl₂. Typical reducing agents include I-, Fe²⁺, SO₂, and metals such as Zn depending on context.",
        ],
      },
      {
        id: "balancing-by-oxidation-number",
        title: "Balancing redox equations using oxidation-number change",
        paragraphs: [
          "In oxidation-number balancing, first identify atoms whose oxidation numbers change. Then calculate total increase and total decrease in oxidation number and choose coefficients so these totals are equal. This ensures electron loss equals electron gain.",
          "After matching redox changes, balance the remaining atoms. In aqueous conditions, balance O with H₂O and H with H+, then check and balance total charge with electrons if using half-equation refinement.",
          "For many AS-level molecular and ionic equations, oxidation-number balancing is the fastest route to correct coefficients. Always do a final check for both atom balance and charge balance.",
        ],
      },
      {
        id: "disproportionation",
        title: "Disproportionation as simultaneous oxidation and reduction of one species",
        paragraphs: [
          "Disproportionation is a redox process in which the same element in one species is both oxidised and reduced, giving two different oxidation numbers in products.",
          "A classic example is chlorine in alkali. In cold dilute NaOH: Cl₂ + 2OH- -> Cl- + ClO- + H₂O. Chlorine starts at 0, is reduced to -1 in Cl-, and oxidised to +1 in ClO-.",
          "In hot concentrated NaOH: 3Cl₂ + 6OH- -> 5Cl- + ClO₃- + 3H₂O. Chlorine is reduced to -1 and oxidised to +5. Correct oxidation-number tracking makes the disproportionation pattern explicit.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Examiners reward precise oxidation-number work and consistent redox language. Most lost marks come from sign errors, weak definitions, or balancing that ignores electron conservation.",
      items: [
        "Assigning oxidation number 0 to atoms inside compounds (only uncombined elements have oxidation number 0).",
        "Using Roman numerals as ionic charge labels without checking the actual oxidation number in the named compound.",
        "Calling a reducing agent the species that is reduced; a reducing agent is oxidised while reducing something else.",
        "Balancing atoms but not charge in ionic redox equations, especially after adding H₂O and H+.",
        "Stating 'disproportionation' for any redox reaction without showing the same element is both oxidised and reduced.",
      ],
    },
    workedExamples: [
      {
        id: "t6-1-ex1",
        title: "Calculating oxidation numbers in ions and compounds",
        problem: [
          "Determine the oxidation number of chromium in Cr₂O₇²-, sulfur in H₂SO₄, and nitrogen in NO₃-.",
        ],
        solution: [
          "For Cr₂O₇²-: oxygen is -2, so total for oxygen is 7 x (-2) = -14. Let chromium be x each. Then 2x - 14 = -2, so 2x = +12 and x = +6. Chromium is +6.",
          "For H₂SO₄: hydrogen is +1 and oxygen is -2. So 2(+1) + S + 4(-2) = 0 gives +2 + S - 8 = 0, so S = +6.",
          "For NO₃-: oxygen contributes 3(-2) = -6. Let nitrogen be x. Then x - 6 = -1, so x = +5.",
          "Answer: Cr in Cr₂O₇²- is +6, S in H₂SO₄ is +6, N in NO₃- is +5.",
        ],
      },
      {
        id: "t6-1-ex2",
        title: "Balancing a redox equation by oxidation-number change",
        problem: [
          "Balance the equation in acidic conditions:",
          "MnO₄- + Fe²⁺ + H+ -> Mn²⁺ + Fe³⁺ + H₂O",
        ],
        solution: [
          "Oxidation-number changes: Mn changes from +7 in MnO₄- to +2 in Mn²⁺, a decrease of 5 per Mn (reduction). Fe changes from +2 to +3, an increase of 1 per Fe (oxidation).",
          "To equalise total change, use 5 Fe²⁺ for each MnO₄-. Start with: MnO₄- + 5Fe²⁺ -> Mn²⁺ + 5Fe³⁺.",
          "Balance oxygen by adding 4H₂O to the right: MnO₄- + 5Fe²⁺ -> Mn²⁺ + 5Fe³⁺ + 4H₂O.",
          "Balance hydrogen by adding 8H+ to the left: MnO₄- + 5Fe²⁺ + 8H+ -> Mn²⁺ + 5Fe³⁺ + 4H₂O.",
          "Charge check: left side charge is -1 + 10 + 8 = +17; right side charge is +2 + 15 = +17. Equation is balanced.",
        ],
      },
      {
        id: "t6-1-ex3",
        title: "Identifying oxidising agent, reducing agent and disproportionation",
        problem: [
          "For the reaction Cl₂ + 2OH- -> Cl- + ClO- + H₂O, identify oxidation and reduction changes, name the oxidising and reducing agent, and state whether the reaction is disproportionation.",
        ],
        solution: [
          "Chlorine in Cl₂ starts at oxidation number 0. In Cl- it is -1, so that part is reduction. In ClO-, oxygen is -2 and overall ion charge is -1, so chlorine is +1, which is oxidation from 0 to +1.",
          "Because the same reactant species Cl₂ is both reduced and oxidised, Cl₂ acts as both oxidising agent and reducing agent in the same overall reaction.",
          "This satisfies the definition of disproportionation: one element in one species undergoes simultaneous oxidation and reduction to form two products with different oxidation numbers.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t6-1-st1",
        question:
          "Define oxidation and reduction in both electron-transfer terms and oxidation-number terms.",
        modelAnswer: [
          "Oxidation is loss of electrons and an increase in oxidation number.",
          "Reduction is gain of electrons and a decrease in oxidation number.",
        ],
      },
      {
        id: "t6-1-st2",
        question:
          "Calculate the oxidation number of sulfur in SO₃²- and in SO₄²-.",
        modelAnswer: [
          "In SO₃²-, oxygen contributes 3(-2) = -6. So S - 6 = -2, giving S = +4.",
          "In SO₄²-, oxygen contributes 4(-2) = -8. So S - 8 = -2, giving S = +6.",
        ],
      },
      {
        id: "t6-1-st3",
        question:
          "State the oxidation number represented by Roman numerals in the names iron(II) chloride and iron(III) chloride, and write the corresponding formulas.",
        modelAnswer: [
          "Iron(II) means Fe has oxidation number +2, so the chloride is FeCl₂.",
          "Iron(III) means Fe has oxidation number +3, so the chloride is FeCl₃.",
        ],
      },
      {
        id: "t6-1-st4",
        question:
          "In the reaction Zn + Cu²⁺ -> Zn²⁺ + Cu, identify the species oxidised, the species reduced, the reducing agent and the oxidising agent.",
        modelAnswer: [
          "Zn goes from 0 to +2, so Zn is oxidised and is the reducing agent.",
          "Cu²⁺ goes from +2 to 0, so Cu²⁺ is reduced and is the oxidising agent.",
        ],
      },
      {
        id: "t6-1-st5",
        question:
          "Explain why the reaction 2H₂O₂ -> 2H₂O + O₂ is disproportionation using oxidation numbers of oxygen.",
        modelAnswer: [
          "In H₂O₂, oxygen is -1. In H₂O, oxygen is -2 (reduction), and in O₂, oxygen is 0 (oxidation).",
          "The same element, oxygen, in the same reactant species undergoes both reduction and oxidation, so the reaction is disproportionation.",
        ],
      },
    ],
  },
};
