import type { NoteDraft } from "./types";

/** Full teaching notes for 9701 Topic 10 — subtopic 10.1 (see lib/notes/AUTHORING.md). */
export const CHEMISTRY_TOPIC10_DRAFTS: Record<string, NoteDraft> = {
  "t10-1": {
    noteId: "t10-1",
    syllabusNotes: [
      {
        id: "group2-overview-and-trend-basis",
        title: "Group 2 overview and why trends occur",
        paragraphs: [
          "This subtopic covers Group 2 metals from magnesium to barium: Mg, Ca, Sr and Ba. Their atoms each have two outer-shell electrons and form M2+ ions in compounds. Many property trends can be explained by increasing atomic and ionic radius down the group.",
          "Down Group 2, first and second ionisation energies decrease because outer electrons are further from the nucleus and more shielded. As a result, metals lose two electrons more easily and become more reactive reducing agents.",
          "When writing equations in this topic, use balanced formulae and state symbols where possible. Typical ionic products are Group 2 oxides (MO), hydroxides (M(OH)2), carbonates (MCO3), nitrates (M(NO3)2) and sulfates (MSO4).",
        ],
      },
      {
        id: "metals-reactions-oxygen-water-acids",
        title: "Reactions of Group 2 metals with oxygen, water and dilute acids",
        paragraphs: [
          "With oxygen, Group 2 metals form white ionic oxides. General equation: 2M(s) + O2(g) -> 2MO(s). Example: 2Mg(s) + O2(g) -> 2MgO(s).",
          "With cold water, calcium, strontium and barium react readily to form hydroxide and hydrogen: M(s) + 2H2O(l) -> M(OH)2(aq) + H2(g). Magnesium reacts very slowly with cold water, but reacts with steam: Mg(s) + H2O(g) -> MgO(s) + H2(g).",
          "With dilute hydrochloric acid and dilute sulfuric acid, Group 2 metals produce salts and hydrogen. General forms: M(s) + 2HCl(aq) -> MCl2(aq) + H2(g), and M(s) + H2SO4(aq) -> MSO4(aq/s) + H2(g). Down the group, metal-acid reaction rate generally increases; however, insoluble sulfate layers can reduce the observed rate in sulfuric acid for some metals.",
        ],
      },
      {
        id: "oxides-hydroxides-carbonates-reactions",
        title: "Reactions of Group 2 oxides, hydroxides and carbonates",
        paragraphs: [
          "Group 2 oxides are basic. With water, oxides form hydroxides: MO(s) + H2O(l) -> M(OH)2(aq/s). Magnesium oxide reacts slowly because of lower oxide reactivity and low hydroxide solubility; calcium oxide reacts vigorously to give alkaline solution.",
          "Oxides and hydroxides neutralise dilute acids. Examples: MgO(s) + 2HCl(aq) -> MgCl2(aq) + H2O(l); Ca(OH)2(aq) + H2SO4(aq) -> CaSO4(s) + 2H2O(l).",
          "Group 2 carbonates are basic and react with dilute acids to form salt, water and carbon dioxide. General equation: MCO3(s) + 2H+(aq) -> M2+(aq) + H2O(l) + CO2(g). Example with hydrochloric acid: CaCO3(s) + 2HCl(aq) -> CaCl2(aq) + H2O(l) + CO2(g).",
          "Group 2 carbonates are essentially insoluble in water, so there is no significant reaction of MCO3 with water itself in this syllabus context.",
        ],
      },
      {
        id: "thermal-decomposition-and-stability",
        title: "Thermal decomposition of nitrates and carbonates; stability trend",
        paragraphs: [
          "Group 2 carbonates decompose on heating to oxide and carbon dioxide: MCO3(s) -> MO(s) + CO2(g). Example: CaCO3(s) -> CaO(s) + CO2(g).",
          "Group 2 nitrates decompose on heating to oxide, nitrogen dioxide and oxygen: 2M(NO3)2(s) -> 2MO(s) + 4NO2(g) + O2(g). Example: 2Mg(NO3)2(s) -> 2MgO(s) + 4NO2(g) + O2(g).",
          "Thermal stability of both carbonates and nitrates increases down Group 2 (Mg < Ca < Sr < Ba). So magnesium salts decompose more easily (lower temperature) and barium salts require stronger heating.",
          "Qualitative explanation: as M2+ ionic radius increases down the group, charge density decreases. The cation polarises large anions such as CO3 2- and NO3- less strongly, so these anions are less destabilised and decomposition is harder.",
        ],
      },
      {
        id: "solubility-hydroxides-and-sulfates",
        title: "Solubility trends of Group 2 hydroxides and sulfates",
        paragraphs: [
          "Hydroxide solubility increases down Group 2. Magnesium hydroxide is sparingly soluble, calcium hydroxide is moderately soluble (limewater), while strontium and barium hydroxides are more soluble and give strongly alkaline solutions.",
          "Sulfate solubility decreases down Group 2. Magnesium sulfate is soluble, calcium sulfate is sparingly soluble, and barium sulfate is very insoluble.",
          "These opposite trends are important for practical chemistry. For example, BaSO4(s) is used in sulfate testing and as an X-ray contrast medium because of very low solubility.",
        ],
      },
      {
        id: "integrated-physical-and-chemical-trends",
        title: "Integrated trend summary for physical and chemical properties",
        paragraphs: [
          "Physical trends down Group 2 include increasing atomic/ionic radius and generally decreasing melting point from Mg to Ba (with minor irregularity). Metals become softer overall down the group. These trends reflect weakening metallic bonding as cation size increases.",
          "Chemical reactivity with water and dilute acids generally increases down the group because ionisation energies fall and electron loss becomes easier. Magnesium is the least reactive of the four in cold water; barium is the most reactive.",
          "Basic character of oxides and hydroxides increases down the group, consistent with increasing ionic character and higher hydroxide solubility. Thermal stability of carbonates and nitrates increases down the group, while sulfate solubility decreases and hydroxide solubility increases.",
          "For exam answers, do not only list trend directions. Link each trend to ionic size, charge density, ease of electron loss, and lattice/anion polarisation arguments where relevant.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Group 2 questions are often equation-and-trend heavy. Examiners reward balanced equations, correct state symbols, and explanations tied to ionic size and charge density rather than memorised statements.",
      items: [
        "Writing Group 2 hydroxide formula as MOH instead of M(OH)2.",
        "Giving metal + water as MO + H2 for all metals; in cold water the main products for Ca/Sr/Ba are M(OH)2 and H2.",
        "Stating carbonates become less thermally stable down the group; the correct trend is more thermally stable.",
        "Confusing solubility trends: hydroxides become more soluble down Group 2, but sulfates become less soluble.",
        "Missing gaseous products in nitrate decomposition equations (NO2 and O2).",
        "Explaining trends only by 'reactivity increases' without linking to ionisation energy, ionic radius or polarisation.",
      ],
    },
    workedExamples: [
      {
        id: "t10-1-ex1",
        title: "Writing and balancing key Group 2 equations",
        problem: [
          "Write balanced equations for: (a) magnesium with steam, (b) calcium oxide with hydrochloric acid, (c) calcium carbonate with dilute sulfuric acid.",
        ],
        solution: [
          "(a) Mg(s) + H2O(g) -> MgO(s) + H2(g).",
          "(b) CaO(s) + 2HCl(aq) -> CaCl2(aq) + H2O(l).",
          "(c) CaCO3(s) + H2SO4(aq) -> CaSO4(s) + H2O(l) + CO2(g).",
          "Each equation conserves atoms and total charge. Equation (c) also shows typical carbonate-acid chemistry (salt + water + carbon dioxide).",
        ],
      },
      {
        id: "t10-1-ex2",
        title: "Predicting decomposition and trend in thermal stability",
        problem: [
          "A sample of magnesium carbonate and a sample of barium carbonate are heated equally strongly. Predict which decomposes more readily and write the decomposition equation for each carbonate.",
        ],
        solution: [
          "Magnesium carbonate decomposes more readily because thermal stability of Group 2 carbonates increases down the group, so barium carbonate is more stable to heat.",
          "Magnesium carbonate: MgCO3(s) -> MgO(s) + CO2(g).",
          "Barium carbonate: BaCO3(s) -> BaO(s) + CO2(g) (requires higher temperature).",
          "Reasoning: Mg2+ is smaller and has higher charge density, so it polarises CO3 2- more strongly and destabilises it, making decomposition easier.",
        ],
      },
      {
        id: "t10-1-ex3",
        title: "Using solubility trends in analysis",
        problem: [
          "You need (i) an alkaline Group 2 hydroxide solution and (ii) a sulfate precipitate that remains insoluble in water. Choose suitable Group 2 compounds and justify using trend knowledge.",
        ],
        solution: [
          "For (i), choose Ba(OH)2(aq) or Sr(OH)2(aq), because hydroxide solubility increases down Group 2, giving a more concentrated alkaline solution than Mg(OH)2 or Ca(OH)2.",
          "For (ii), choose BaSO4(s), because sulfate solubility decreases down Group 2 and barium sulfate is very insoluble.",
          "This uses both required solubility trends directly: increasing hydroxide solubility and decreasing sulfate solubility down the group.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t10-1-st1",
        question:
          "Write balanced equations for calcium with (a) water and (b) dilute hydrochloric acid.",
        modelAnswer: [
          "(a) Ca(s) + 2H2O(l) -> Ca(OH)2(aq) + H2(g).",
          "(b) Ca(s) + 2HCl(aq) -> CaCl2(aq) + H2(g).",
        ],
      },
      {
        id: "t10-1-st2",
        question:
          "State and explain the trend in thermal stability of Group 2 carbonates from magnesium carbonate to barium carbonate.",
        modelAnswer: [
          "Thermal stability increases down the group (MgCO3 least stable, BaCO3 most stable).",
          "Down the group, M2+ ions are larger with lower charge density, so they polarise the CO3 2- ion less strongly and destabilise it less, so decomposition requires higher temperature.",
        ],
      },
      {
        id: "t10-1-st3",
        question:
          "Give the general thermal decomposition equation for Group 2 nitrates and name the gaseous products.",
        modelAnswer: [
          "General equation: 2M(NO3)2(s) -> 2MO(s) + 4NO2(g) + O2(g).",
          "The gaseous products are nitrogen dioxide and oxygen.",
        ],
      },
      {
        id: "t10-1-st4",
        question:
          "How do the solubilities of Group 2 hydroxides and Group 2 sulfates vary down the group?",
        modelAnswer: [
          "Hydroxide solubility increases down Group 2.",
          "Sulfate solubility decreases down Group 2.",
        ],
      },
      {
        id: "t10-1-st5",
        question:
          "Explain why Group 2 metals generally react more rapidly with water and dilute acids down the group.",
        modelAnswer: [
          "Down Group 2, first and second ionisation energies decrease as outer electrons are further from the nucleus and more shielded.",
          "The metals lose two electrons more easily to form M2+ ions, so oxidation of the metal is easier and reactions with water and acids are generally faster and more vigorous.",
        ],
      },
    ],
  },
};
