import type { NoteDraft } from "./types";

/** Full teaching notes for 9701 Topic 27 — subtopic 27.1 (see lib/notes/AUTHORING.md). */
export const CHEMISTRY_TOPIC27_DRAFTS: Record<string, NoteDraft> = {
  "t27-1": {
    noteId: "t27-1",
    syllabusNotes: [
      {
        id: "group2-thermal-stability-core-trend",
        title: "Thermal stability of Group 2 nitrates and carbonates",
        paragraphs: [
          "From Mg to Ba, Group 2 nitrates and carbonates become more thermally stable. That means higher temperatures are needed to decompose them.",
          "For carbonates, heating gives oxide and carbon dioxide: MCO₃(s) → MO(s) + CO₂(g). For nitrates, heating gives oxide, nitrogen dioxide and oxygen: 2M(NO₃)₂(s) → 2MO(s) + 4NO₂(g) + O₂(g).",
          "So the trend is not about different products across the group, but about how strongly each anion is held in the lattice before decomposition starts.",
        ],
      },
      {
        id: "polarisation-ionic-radius-explanation",
        title: "Why the trend happens: ionic radius and anion polarisation",
        paragraphs: [
          "The key explanation is polarisation of a large anion by the Group 2 cation. Smaller cations have higher charge density and distort electron clouds of nearby anions more strongly.",
          "Mg²+ is small, so it strongly polarises CO₃²⁻ and NO₃⁻. This distortion weakens internal bonds in the anion, making decomposition easier at lower temperature.",
          "Down the group, cation radius increases (Ca²+, Sr²+, Ba²+), so charge density falls. Polarising power decreases, anion distortion is weaker, and carbonate/nitrate ions are more resistant to breakdown. Therefore thermal stability increases down Group 2.",
        ],
      },
      {
        id: "solubility-trends-hydroxides-sulfates",
        title: "Solubility trends: hydroxides increase, sulfates decrease",
        paragraphs: [
          "Group 2 hydroxides become more soluble down the group, while Group 2 sulfates become less soluble down the group.",
          "This opposite behavior is explained by comparing two energy terms in dissolution: lattice energy (energy needed to separate ions in the solid) and hydration enthalpy (energy released when ions are hydrated by water).",
          "As cation size increases from Mg²+ to Ba²+, lattice energy magnitude decreases because ions are farther apart in the crystal. Hydration enthalpy magnitude also decreases because larger ions interact less strongly with water.",
          "Whether solubility rises or falls depends on which of these two terms changes faster for that family of salts.",
        ],
      },
      {
        id: "enthalpy-of-solution-hydroxides",
        title: "Hydroxides: linking ΔH°sol trend to hydration and lattice effects",
        paragraphs: [
          "For M(OH)₂, the decrease in lattice-energy magnitude down the group is relatively significant, while changes in hydration terms are less dominant overall. Dissolution therefore becomes energetically more favorable down the group.",
          "As a result, ΔH°sol for hydroxides generally becomes less endothermic (or more exothermic) down the group, consistent with increasing solubility from Mg(OH)₂ toward Ba(OH)₂.",
          "In exam explanations, do not state only one term. You must compare the relative changes in both lattice and hydration contributions to justify the observed trend.",
        ],
      },
      {
        id: "enthalpy-of-solution-sulfates",
        title: "Sulfates: why solubility falls down the group",
        paragraphs: [
          "For MSO₄, sulfate is a large doubly charged anion, and the balance of energetic changes is different from hydroxides. Down the group, hydration enthalpy magnitude for the larger M²+ ions drops substantially.",
          "Although lattice energy magnitude also decreases, the reduction in hydration driving force is more important for sulfate dissolution. Dissolving becomes less favorable down the group.",
          "So ΔH°sol for sulfates tends to become more endothermic down the group, and solubility decreases from MgSO₄ toward BaSO₄.",
          "This is the same comparison principle as hydroxides, but with a different net outcome because relative magnitudes of the opposing terms are different.",
        ],
      },
      {
        id: "using-trends-to-make-predictions",
        title: "Using these trends in unfamiliar questions",
        paragraphs: [
          "If asked to predict behavior for an unseen Group 2 compound in this topic, start by identifying what is being compared: thermal decomposition or dissolution.",
          "For thermal stability of large anion salts, link cation size to polarising power. Stronger polarisation means lower stability; weaker polarisation means higher stability.",
          "For solubility and ΔH°sol, compare the direction and relative size of changes in lattice energy and hydration enthalpy. The balance, not either term alone, determines the trend.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Topic 27 answers are usually short but concept-dense. Examiners reward candidates who compare competing effects explicitly rather than memorising isolated trend statements.",
      items: [
        "Reversing the thermal-stability trend and claiming carbonates or nitrates become less stable down Group 2.",
        "Saying 'larger cation gives stronger polarisation' instead of the correct idea that smaller, high-charge-density cations polarise anions more.",
        "Describing decomposition equations incorrectly, especially for nitrates where NO₂ and O₂ must both appear.",
        "Explaining hydroxide or sulfate solubility using only lattice energy or only hydration enthalpy instead of comparing both terms.",
        "Assuming hydroxides and sulfates must show the same solubility trend because both contain M²+ ions.",
        "Mixing up signs and statements for ΔH°sol, for example calling a more endothermic dissolution 'more favorable' without entropy context.",
      ],
    },
    workedExamples: [
      {
        id: "t27-1-ex1",
        title: "Explaining carbonate and nitrate thermal-stability trends",
        problem: [
          "A student states: 'BaCO₃ should decompose more easily than MgCO₃ because barium is lower in the group and less reactive.' Assess this statement and explain the correct trend for both carbonates and nitrates.",
        ],
        solution: [
          "The statement is incorrect. In Group 2, carbonates and nitrates become more thermally stable down the group, so BaCO₃ decomposes less easily than MgCO₃.",
          "The correct explanation is cation polarising power, not simple metal reactivity. Mg²+ is smaller and has higher charge density than Ba²+, so Mg²+ distorts CO₃²⁻ and NO₃⁻ more strongly.",
          "Greater distortion weakens bonds within these large anions, so decomposition needs less heating for magnesium salts. Larger cations down the group polarise less, so anions are less destabilised and salts are more thermally stable.",
          "Therefore both MCO₃ and M(NO₃)₂ show increasing thermal stability from Mg to Ba.",
        ],
      },
      {
        id: "t27-1-ex2",
        title: "Using lattice and hydration ideas for hydroxide trends",
        problem: [
          "Explain why solubility of Group 2 hydroxides increases from Mg(OH)₂ to Ba(OH)₂, and relate this to the trend in ΔH°sol.",
        ],
        solution: [
          "Dissolution depends on competition between lattice-energy breaking and hydration-energy release.",
          "Down Group 2, M²+ ionic radius increases, so lattice-energy magnitude for M(OH)₂ decreases; less energy is required to separate ions in the solid.",
          "Hydration enthalpy magnitude also decreases because larger M²+ ions are less strongly hydrated, but for hydroxides the reduction in lattice-energy barrier is relatively more influential for the net balance.",
          "So dissolution becomes more favorable down the group, giving increased solubility. Correspondingly, ΔH°sol generally becomes less positive (or more negative) from Mg(OH)₂ to Ba(OH)₂.",
        ],
      },
      {
        id: "t27-1-ex3",
        title: "Contrasting sulfate behavior with hydroxides",
        problem: [
          "Group 2 sulfates become less soluble down the group, unlike hydroxides. Explain this contrast using relative magnitudes of hydration and lattice terms, and state the direction of ΔH°sol change for sulfates.",
        ],
        solution: [
          "For sulfates, dissolution still involves opposing lattice and hydration terms, but the balance differs from hydroxides.",
          "As M²+ gets larger down the group, hydration enthalpy magnitude falls markedly, so the energetic benefit of solvating ions becomes weaker.",
          "Although lattice-energy magnitude also falls, the loss of hydration driving force is more significant for sulfate salts. Net dissolution therefore becomes less favorable.",
          "Hence sulfate solubility decreases from MgSO₄ to BaSO₄, and ΔH°sol tends to become more endothermic down the group.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t27-1-st1",
        question:
          "State the trend in thermal stability of Group 2 carbonates and nitrates from magnesium to barium, and give one decomposition equation for each family.",
        modelAnswer: [
          "Thermal stability increases down Group 2 for both carbonates and nitrates.",
          "Carbonate decomposition: MCO₃(s) → MO(s) + CO₂(g).",
          "Nitrate decomposition: 2M(NO₃)₂(s) → 2MO(s) + 4NO₂(g) + O₂(g).",
        ],
      },
      {
        id: "t27-1-st2",
        question:
          "Use ionic radius and polarisation to explain why Mg(NO₃)₂ decomposes at a lower temperature than Ba(NO₃)₂.",
        modelAnswer: [
          "Mg²+ is smaller and has higher charge density than Ba²+, so Mg²+ polarises the NO₃⁻ anion more strongly.",
          "Stronger polarisation distorts and weakens bonding within NO₃⁻, making decomposition easier.",
          "Ba²+ has weaker polarising power, so NO₃⁻ is less destabilised and higher temperature is needed for decomposition.",
        ],
      },
      {
        id: "t27-1-st3",
        question:
          "State the solubility trends down Group 2 for hydroxides and sulfates, then explain why they are opposite.",
        modelAnswer: [
          "Hydroxide solubility increases down the group, while sulfate solubility decreases.",
          "In both cases, dissolution is controlled by the balance between lattice energy and hydration enthalpy.",
          "For hydroxides, decreasing lattice-energy barrier down the group is relatively more important, so dissolution becomes more favorable.",
          "For sulfates, the drop in hydration enthalpy magnitude is relatively more important, so dissolution becomes less favorable.",
        ],
      },
      {
        id: "t27-1-st4",
        question:
          "A candidate writes: 'Because hydration enthalpy always gets less exothermic down Group 2, all Group 2 salts become less soluble down the group.' Explain why this reasoning is incomplete.",
        modelAnswer: [
          "It is incomplete because solubility is not controlled by hydration enthalpy alone.",
          "You must compare hydration enthalpy with lattice energy, since both change down the group and oppose each other in dissolution.",
          "Different anions give different relative changes, so some salt families (such as hydroxides) can become more soluble while others (such as sulfates) become less soluble.",
        ],
      },
      {
        id: "t27-1-st5",
        question:
          "Describe the expected trend in ΔH°sol down Group 2 for (a) hydroxides and (b) sulfates, and link each to observed solubility trend.",
        modelAnswer: [
          "(a) For hydroxides, ΔH°sol generally becomes less endothermic (or more exothermic) down the group, matching increasing solubility.",
          "(b) For sulfates, ΔH°sol tends to become more endothermic down the group, matching decreasing solubility.",
          "Both trends come from different balances between decreasing lattice-energy magnitude and decreasing hydration-enthalpy magnitude.",
        ],
      },
    ],
  },
};
