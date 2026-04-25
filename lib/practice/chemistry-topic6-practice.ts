import type { SubtopicPracticePack } from "./types";

/**
 * Topic 6 course outline: only `t6-1` (6.1) exists in `data/courses/chemistry-9701.json`.
 * LO crosswalk (see `data/syllabus/chemistry-9701-learning-outcomes.md` §6.1):
 * - d1,d8: redox / oxidation / reduction / disproportionation (electron transfer + oxidation number).
 * - d2,d6,d7: calculate oxidation numbers in compounds and ions.
 * - d5,d9: balance equations using changes in oxidation numbers.
 * - d3: oxidising agent and reducing agent.
 * - d4,d6 (name part): Roman numeral shows magnitude of oxidation number in names.
 */

export const CHEMISTRY_TOPIC6_PRACTICE: Record<string, SubtopicPracticePack> = {
  "t6-1": {
    noteId: "t6-1",
    drills: [
      {
        id: "t6-1-d1",
        noteId: "t6-1",
        kind: "structured",
        difficulty: 1,
        marks: 5,
        stem:
          "Explain what is meant by the terms oxidation, reduction and redox reaction, using both:\n(a) electron transfer\n(b) change in oxidation number (oxidation state).",
        modelAnswerPoints: [
          "Oxidation is loss of electrons; reduction is gain of electrons.",
          "Oxidation is an increase in oxidation number; reduction is a decrease in oxidation number.",
          "A redox reaction is one in which oxidation and reduction occur together (electron transfer is conserved overall).",
          "For a given half-process, electron loss accompanies an increase in oxidation number, and electron gain accompanies a decrease in oxidation number.",
        ],
        workedSolution: [
          "(a) In any chemical change, oxidation is defined as the loss of one or more electrons from a species (or from a particular atom when we use oxidation numbers as a bookkeeping device); reduction is defined as the gain of one or more electrons by a species.",
          "(b) Oxidation number is a formal count applied to atoms in compounds and ions so that we can track how electron density is reassigned: when a species is oxidised, the oxidation number of the element that is oxidised becomes more positive (it increases); when a species is reduced, the oxidation number of the element that is reduced becomes less positive or more negative (it decreases).",
          "A redox reaction is a reaction in which at least one species is oxidised and at least one species is reduced in the same overall process, so that electrons are transferred from the reducing pathway to the oxidising pathway.",
          "The two descriptions are consistent, because removing electron density from an atom makes its formal oxidation number rise, while adding electron density makes that formal oxidation number fall.",
        ],
        commonMistake:
          "Defining oxidation only as ‘gain of oxygen’ or reduction only as ‘loss of oxygen’, which fails for many aqueous ionic reactions.",
        tags: ["redox", "definitions", "electron-transfer", "oxidation-number"],
      },
      {
        id: "t6-1-d2",
        noteId: "t6-1",
        kind: "structured",
        difficulty: 1,
        marks: 4,
        stem:
          "Calculate the oxidation number of chromium in the dichromate(VI) ion, Cr2O7^2-. Show how you use the usual rules for oxygen and the overall charge of the ion.",
        modelAnswerPoints: [
          "Oxygen is treated as -2 in this oxoanion (not peroxide or superoxide).",
          "Seven oxygen atoms contribute 7 × (-2) = -14 to the sum of oxidation numbers.",
          "Let each Cr be x; then 2x + (-14) = -2, so x = +6.",
          "Chromium is in the +6 oxidation state in dichromate(VI).",
        ],
        workedSolution: [
          "In the dichromate ion, Cr2O7^2-, each bridging and terminal oxygen is assigned its usual oxidation number of -2 in this context, because the ion is not a peroxide or superoxide species.",
          "Seven oxygen atoms therefore contribute a total of 7 × (-2) = -14 to the sum of oxidation numbers over the whole ion.",
          "The ion carries a single overall charge of -2, so if each chromium atom has oxidation number x, then 2x + (-14) = -2, which rearranges to 2x = +12 and hence x = +6.",
          "Each chromium atom is therefore in the +6 oxidation state, which matches the systematic name dichromate(VI), where the Roman numeral records the magnitude of that oxidation number for chromium.",
        ],
        commonMistake:
          "Using the molecular charge -2 on only one chromium atom, or forgetting to multiply the oxygen contribution by seven before solving for Cr.",
        tags: ["oxidation-number", "dichromate", "calculation"],
      },
      {
        id: "t6-1-d3",
        noteId: "t6-1",
        kind: "structured",
        difficulty: 2,
        marks: 4,
        stem:
          "Explain what is meant by oxidising agent and reducing agent in terms of electron transfer.\nThen, for the reaction I2(aq) + 2S2O3^2-(aq) -> 2I^-(aq) + S4O6^2-(aq), identify the oxidising agent and the reducing agent and justify each choice.",
        modelAnswerPoints: [
          "An oxidising agent is itself reduced (gains electrons) while it causes another species to be oxidised.",
          "A reducing agent is itself oxidised (loses electrons) while it causes another species to be reduced.",
          "Iodine is reduced (0 to -1), so I2 is the oxidising agent.",
          "Thiosulfate is oxidised (average S in S2O3^2- rises in S4O6^2-), so S2O3^2- is the reducing agent.",
        ],
        workedSolution: [
          "The oxidising agent is the species that accepts electrons from another species and is therefore reduced itself; in doing so it drives the oxidation of that other species.",
          "The reducing agent is the species that donates electrons to another species and is therefore oxidised itself; in doing so it drives the reduction of that other species.",
          "In the equation I2 + 2 S2O3^2- -> 2 I- + S4O6^2-, iodine in I2 has oxidation number 0 and ends as iodide at -1, so each iodine atom has gained an electron and iodine has been reduced; I2 therefore acts as the oxidising agent.",
          "The thiosulfate ion is converted into the tetrathionate ion; taking the usual mean oxidation number of sulfur in S2O3^2- as +2 and in S4O6^2- as +2.5, the formal oxidation state of sulfur rises on average when thiosulfate becomes tetrathionate, so thiosulfate has been oxidised and is the reducing agent.",
        ],
        commonMistake:
          "Choosing the product iodide as the oxidising agent because it appears after the arrow, instead of identifying which reactant species is reduced.",
        tags: ["oxidising-agent", "reducing-agent", "definitions", "electron-transfer"],
      },
      {
        id: "t6-1-d4",
        noteId: "t6-1",
        kind: "structured",
        difficulty: 2,
        marks: 4,
        stem:
          "Potassium manganate(VII) is KMnO4.\n(a) Calculate the oxidation number of manganese in the manganate(VII) ion, MnO4^-.\n(b) Explain how the Roman numeral (VII) in the name is related to the oxidation number you have found.",
        modelAnswerPoints: [
          "Each oxygen in MnO4^- is -2, giving -8 from oxygen.",
          "If Mn is x, then x + (-8) = -1, so x = +7.",
          "The Roman numeral (VII) is the magnitude (7) of the oxidation number of manganese in this ion.",
        ],
        workedSolution: [
          "(a) In the manganate(VII) ion, MnO4^-, each oxygen atom is assigned oxidation number -2 under the usual oxoanion rules, so four oxygen atoms contribute 4 × (-2) = -8 to the total.",
          "The overall charge on the ion is -1, so if manganese has oxidation number x, then x + (-8) = -1, which gives x = +7; manganese is in the +7 oxidation state in this ion.",
          "(b) When naming many transition-metal oxoanions and compounds, a Roman numeral in brackets is used to show the magnitude of the oxidation number of the metal (or the element named) in that species, without writing a sign.",
          "Here manganese has oxidation number +7, so the Roman numeral is (VII), read as ‘seven’, and it tells the reader immediately which manganese oxidation state is present, distinguishing this ion from, for example, manganate(VI) where manganese would be +6.",
        ],
        commonMistake:
          "Stating that the Roman numeral counts oxygen atoms or the overall negative charge, rather than the oxidation number of manganese.",
        tags: ["roman-numeral", "permanganate", "oxidation-number", "naming"],
      },
      {
        id: "t6-1-d5",
        noteId: "t6-1",
        kind: "structured",
        difficulty: 3,
        marks: 6,
        stem:
          "Acidified aqueous manganate(VII) oxidises iron(II) ions to iron(III) ions while being reduced to manganese(II).\nBalance the ionic equation Fe^2+(aq) + MnO4^-(aq) + H^+(aq) -> Fe^3+(aq) + Mn^2+(aq) + H2O(l) using changes in oxidation number, showing how you match electron loss and gain.",
        modelAnswerPoints: [
          "Fe changes from +2 to +3: each Fe loses 1 electron (oxidation).",
          "Mn changes from +7 to +2: each Mn gains 5 electrons (reduction).",
          "Scale so that 5 mol Fe^2+ supply 5 mol e^- to 1 mol MnO4^-.",
          "Balanced equation: 5Fe^2+ + MnO4^- + 8H^+ -> 5Fe^3+ + Mn^2+ + 4H2O.",
        ],
        workedSolution: [
          "Assign oxidation numbers: Fe^2+ is +2 and becomes Fe^3+ at +3, so each iron(II) ion increases its oxidation number by one unit and therefore loses one electron when it is oxidised to iron(III).",
          "In MnO4^-, manganese is +7 (from oxygen at -2 and overall charge -1), and it becomes Mn^2+ at +2, so the oxidation number of manganese falls by five units and each permanganate ion gains five electrons when it is reduced to manganese(II).",
          "To conserve electrons in the overall ionic change, the number of iron(II) ions oxidised must be five times the number of permanganate ions reduced, because five electrons lost (five iron atoms each losing one electron) balance five electrons gained (one manganese atom gaining five electrons); therefore we use 5 Fe^2+ with 1 MnO4^- as the stoichiometric core.",
          "Balance charge and atoms in acid: the left side needs eight hydrogen ions to provide the correct positive charge once the iron and manganese stoichiometry is fixed, and the hydrogen and oxygen atoms are completed with four water molecules on the right, giving 5Fe^2+ + MnO4^- + 8H^+ -> 5Fe^3+ + Mn^2+ + 4H2O, which balances atoms and overall charge on both sides.",
        ],
        commonMistake:
          "Using 1:1 Fe^2+ to MnO4^- which cannot balance electron transfer, or balancing atoms without checking total charge with H^+ and H2O.",
        tags: ["balancing", "permanganate", "oxidation-number", "ionic-equation"],
      },
      {
        id: "t6-1-d6",
        noteId: "t6-1",
        kind: "structured",
        difficulty: 3,
        marks: 5,
        stem:
          "Consider the manganate ion, MnO4^2-, found in green melts.\n(a) Calculate the oxidation number of manganese in MnO4^2-.\n(b) State whether the ion should be named manganate(VI) or manganate(VII), and explain how the Roman numeral follows from your answer to (a).",
        modelAnswerPoints: [
          "Oxygen at -2 for four atoms gives -8.",
          "x + (-8) = -2 gives x = +6 for Mn.",
          "The name is manganate(VI) because the Roman numeral is the magnitude of the +6 oxidation number.",
        ],
        workedSolution: [
          "(a) In MnO4^2-, each oxygen is again taken as -2 in this oxoanion context, so four oxygen atoms contribute 4 × (-2) = -8 to the sum of oxidation numbers.",
          "The ion has overall charge -2, so if manganese has oxidation number x, then x + (-8) = -2, which rearranges to x = +6; manganese is therefore in the +6 oxidation state.",
          "(b) The systematic name uses a Roman numeral equal to the magnitude of manganese’s oxidation number, which is 6 here, so the ion is manganate(VI), not manganate(VII), because manganate(VII) would correspond to manganese at +7 as in MnO4^-.",
          "This distinction matters in practical chemistry because the two ions have different colours and different oxidising strengths, and the name encodes which oxidation state of manganese is present.",
        ],
        commonMistake:
          "Assuming every ‘manganate’ ion is MnO4^- with manganese +7, instead of recalculating from the actual charge on the ion.",
        tags: ["manganate", "roman-numeral", "oxidation-number", "calculation"],
      },
      {
        id: "t6-1-d7",
        noteId: "t6-1",
        kind: "mcq",
        difficulty: 3,
        stem:
          "Which name correctly uses a Roman numeral for the oxidation number of the transition metal in [Cu(NH3)4]^2+?",
        options: [
          { id: "A", text: "Tetraamminecopper(I) ion" },
          { id: "B", text: "Tetraamminecopper(II) ion" },
          { id: "C", text: "Tetraamminecopper(III) ion" },
          { id: "D", text: "Tetraamminecopper(IV) ion" },
        ],
        correctOptionId: "B",
        explanation:
          "Each NH3 ligand is electrically neutral, so copper must be +2 to give the +2 complex ion; the Roman numeral (II) matches that oxidation number.",
        distractorRationale: {
          A: "This would require copper in the +1 oxidation state, which cannot give an overall +2 charge with four neutral ammonia ligands.",
          C: "Copper(III) would imply a +3 metal centre with neutral ammonia ligands, giving a +3 complex, not +2.",
          D: "Copper(IV) would imply an even higher positive charge on the metal than the overall ion possesses.",
        },
        tags: ["roman-numeral", "complex-ion", "oxidation-number"],
      },
      {
        id: "t6-1-d8",
        noteId: "t6-1",
        kind: "structured",
        difficulty: 4,
        marks: 5,
        stem:
          "Define disproportionation in terms of electron transfer and oxidation number.\nThen explain, using oxidation numbers, why the reaction of chlorine with cold dilute sodium hydroxide, Cl2(aq) + 2OH^-(aq) -> Cl^-(aq) + ClO^-(aq) + H2O(l), is a disproportionation of chlorine.",
        modelAnswerPoints: [
          "Disproportionation: the same element is simultaneously oxidised and reduced.",
          "In Cl2, chlorine has oxidation number 0.",
          "In Cl^- chlorine is -1 (reduction); in ClO^- chlorine is +1 (oxidation).",
          "Hence some chlorine atoms gain electrons and some lose electrons: disproportionation.",
        ],
        workedSolution: [
          "Disproportionation is a type of redox reaction in which atoms of the same element in a particular reactant species are converted into product species in which that element has both a higher oxidation number in one place and a lower oxidation number in another, so that some atoms of the element lose electrons while others gain electrons within the same overall reaction.",
          "In chlorine molecules, Cl2, each chlorine atom is in its elemental standard state, so the oxidation number of chlorine is 0 before reaction.",
          "In chloride ion, Cl^-, each chlorine has oxidation number -1, which is lower than 0, so that part of the chlorine has been reduced by gaining an electron per atom formed as chloride.",
          "In chlorate(I) hypochlorite, ClO^-, with oxygen at -2, chlorine must be +1 to make the ion’s total charge -1, which is higher than 0, so that part of the chlorine has been oxidised by losing electron density to oxygen.",
          "Because chlorine is both oxidised and reduced in the same process, this is disproportionation of chlorine.",
        ],
        commonMistake:
          "Calling any reaction of Cl2 with alkali ‘disproportionation’ without showing that chlorine ends up at both a higher and a lower oxidation number than in Cl2.",
        tags: ["disproportionation", "halogen-alkali", "definitions"],
      },
      {
        id: "t6-1-d9",
        noteId: "t6-1",
        kind: "structured",
        difficulty: 4,
        marks: 6,
        stem:
          "In acidic solution, dichromate(VI) oxidises iodide ions to iodine while being reduced to chromium(III).\nBalance Cr2O7^2-(aq) + I^-(aq) + H^+(aq) -> Cr^3+(aq) + I2(aq) + H2O(l) using changes in oxidation number, identifying the species oxidised and the species reduced.",
        modelAnswerPoints: [
          "Each Cr in Cr2O7^2- is +6; each becomes +3 in Cr^3+, so two Cr atoms gain a total of 6 electrons.",
          "Each I^- is -1 and half of I2 is 0 per I atom; six I^- to three I2 lose 6 electrons overall.",
          "I^- is oxidised; Cr2O7^2- is reduced (oxidising agent).",
          "Balanced: Cr2O7^2- + 6I^- + 14H^+ -> 2Cr^3+ + 3I2 + 7H2O.",
        ],
        workedSolution: [
          "In Cr2O7^2-, each chromium is in the +6 oxidation state, and in the aqueous chromium(III) product each chromium is +3, so each chromium atom gains three electrons; with two chromium atoms per dichromate ion, one dichromate ion gains six electrons overall when it is reduced.",
          "Iodide is -1 and is converted to iodine in which each iodine atom is 0, so each iodide ion loses one electron when it is oxidised; six iodide ions therefore lose six electrons in total, which matches the six electrons gained by one dichromate ion in this reduction to two chromium(III) ions.",
          "The species oxidised is iodide, I^-, and the species reduced is dichromate(VI), Cr2O7^2-, which therefore acts as the oxidising agent in this acidified mixture.",
          "To balance oxygen and hydrogen in acid, seven water molecules are needed on the right to account for the seven oxygen atoms leaving dichromate, and fourteen hydrogen ions are needed on the left to supply hydrogen for those water molecules, giving the fully balanced equation Cr2O7^2- + 6I^- + 14H^+ -> 2Cr^3+ + 3I2 + 7H2O, which can be checked by atom and charge balance.",
        ],
        commonMistake:
          "Forgetting that one Cr2O7^2- contains two chromium atoms when counting the total electron gain from +6 to +3.",
        tags: ["dichromate", "balancing", "oxidation-number", "ionic-equation"],
      },
      {
        id: "t6-1-d10",
        noteId: "t6-1",
        kind: "mcq",
        difficulty: 5,
        stem:
          "Consider the thermal decomposition of ammonium nitrate: NH4NO3(s) -> N2O(g) + 2H2O(g). Which statement about oxidation numbers in this reaction is correct?",
        options: [
          { id: "A", text: "Nitrogen is only oxidised; its oxidation number increases in every nitrogen-containing product." },
          { id: "B", text: "Nitrogen is only reduced; all nitrogen atoms end in the same lower oxidation state." },
          { id: "C", text: "This is not a redox reaction because oxygen and hydrogen are unchanged in oxidation number." },
          {
            id: "D",
            text: "The ammonium nitrogen (-3) is oxidised and the nitrate nitrogen (+5) is reduced, both forming N2O (+1 for each N).",
          },
        ],
        correctOptionId: "D",
        explanation:
          "In NH4+, N is -3; in NO3-, N is +5; in N2O each N is +1. The -3 nitrogen rises (oxidised) and the +5 nitrogen falls (reduced), so this is an internal redox process.",
        distractorRationale: {
          A: "N2O contains nitrogen at +1, which is lower than +5 in nitrate, so not every nitrogen centre is oxidised.",
          B: "The nitrogen that started in ammonium becomes more positive, which is oxidation, not reduction.",
          C: "Although hydrogen stays +1 and oxygen stays -2 in the usual assignments, nitrogen changes oxidation number, so the reaction is redox.",
        },
        tags: ["ammonium-nitrate", "internal-redox", "advanced"],
      },
    ],
    flashcards: [
      {
        id: "t6-1-f1",
        noteId: "t6-1",
        difficulty: 1,
        front: "Define oxidation and reduction in terms of electrons.",
        back: "Oxidation is loss of electrons; reduction is gain of electrons (OIL RIG).",
        examPhrasing: "Explain what is meant by oxidation and reduction in a redox reaction.",
        tags: ["definitions", "redox"],
      },
      {
        id: "t6-1-f2",
        noteId: "t6-1",
        difficulty: 1,
        front: "Define oxidation and reduction in terms of oxidation number.",
        back: "Oxidation is an increase in oxidation number; reduction is a decrease in oxidation number.",
        examPhrasing: "Explain oxidation and reduction using changes in oxidation state.",
        tags: ["definitions", "oxidation-number"],
      },
      {
        id: "t6-1-f3",
        noteId: "t6-1",
        difficulty: 2,
        front: "What does a Roman numeral in iron(III) chloride or copper(II) sulfate mean?",
        back: "It gives the magnitude of the metal’s oxidation number in that compound: +3 for iron(III), +2 for copper(II).",
        examPhrasing: "Explain the use of the Roman numeral in the name iron(III) chloride.",
        tags: ["roman-numeral", "naming"],
      },
      {
        id: "t6-1-f4",
        noteId: "t6-1",
        difficulty: 2,
        front: "What oxidation number is assigned to an element in its standard uncombined state?",
        back: "Zero, e.g. Na(s), Cl2(g), O2(g).",
        examPhrasing: "State the oxidation number of chlorine in Cl2.",
        confusionPair: "elemental zero vs compound chlorine",
        tags: ["rules", "oxidation-number"],
      },
      {
        id: "t6-1-f5",
        noteId: "t6-1",
        difficulty: 3,
        front: "How do you identify the oxidising agent in an equation?",
        back: "The species that is reduced (gains electrons, oxidation number decreases) while causing oxidation of another species.",
        examPhrasing: "Identify the oxidising agent and justify your answer.",
        tags: ["oxidising-agent", "exam-technique"],
      },
      {
        id: "t6-1-f6",
        noteId: "t6-1",
        difficulty: 3,
        front: "What is disproportionation?",
        back: "The same element is simultaneously oxidised and reduced from one oxidation state in the reactant.",
        examPhrasing: "Explain why this reaction is described as disproportionation.",
        tags: ["disproportionation"],
      },
      {
        id: "t6-1-f7",
        noteId: "t6-1",
        difficulty: 3,
        front: "When balancing Fe^2+ + MnO4^- + H^+ in acid, why is the ratio often 5 : 1 for Fe : Mn?",
        back: "Fe^2+ -> Fe^3+ loses 1 e^- each; MnO4^- -> Mn^2+ gains 5 e^- per Mn; 5 Fe balance 1 Mn for electron conservation.",
        examPhrasing: "Deduce the ratio of iron(II) to manganate(VII) in the balanced equation.",
        tags: ["balancing", "permanganate"],
      },
      {
        id: "t6-1-f8",
        noteId: "t6-1",
        difficulty: 4,
        front: "Why must half-equations and ionic redox equations balance atoms and charge?",
        back: "Matter and charge are conserved; electrons, H^+, OH^- and H2O are added in acid or alkali so both sides match.",
        examPhrasing: "Explain how you balance a redox equation in acidic solution.",
        tags: ["half-equations", "balancing"],
      },
      {
        id: "t6-1-f9",
        noteId: "t6-1",
        difficulty: 4,
        front: "In MnO4^- -> Mn^2+ in acid, how many electrons are gained per manganese atom?",
        back: "Five electrons per Mn (oxidation number +7 to +2).",
        examPhrasing: "Deduce the number of electrons gained by manganese when MnO4^- is reduced to Mn^2+.",
        tags: ["permanganate", "electron-count"],
      },
      {
        id: "t6-1-f10",
        noteId: "t6-1",
        difficulty: 5,
        front: "Can one formula unit of NH4NO3 contain nitrogen at two different oxidation numbers?",
        back: "Yes: NH4+ has N at -3 and NO3- has N at +5 before any reaction between those environments.",
        examPhrasing: "Assign oxidation numbers to nitrogen in ammonium nitrate.",
        confusionPair: "single average vs distinct environments",
        tags: ["advanced", "oxidation-number"],
      },
    ],
  },
};
