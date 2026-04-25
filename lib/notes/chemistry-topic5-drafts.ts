import type { NoteDraft } from "./types";

/** Full teaching notes for 9701 Topic 5 — subtopics 5.1–5.2 (see lib/notes/AUTHORING.md). */
export const CHEMISTRY_TOPIC5_DRAFTS: Record<string, NoteDraft> = {
  "t5-1": {
    noteId: "t5-1",
    syllabusNotes: [
      {
        id: "enthalpy-core-ideas",
        title: "Enthalpy change and exothermic or endothermic reactions",
        paragraphs: [
          "At constant pressure, the enthalpy change ΔH for a reaction is the thermal energy transferred between the reacting system and the surroundings. A negative ΔH means the reaction is exothermic: heat is released to the surroundings. A positive ΔH means the reaction is endothermic: heat is absorbed from the surroundings.",
          "In chemical equations, the sign of ΔH belongs to the reaction as written. If you reverse the equation, the sign changes. If you multiply the equation by a factor, ΔH is multiplied by the same factor. This idea is essential for Hess-cycle work in the next subtopic.",
          "Exothermic and endothermic refer to net energy transfer, not to whether individual bonds break or form. In every reaction, some bonds are broken (energy required) and some are made (energy released). The overall sign depends on which total is larger.",
        ],
      },
      {
        id: "pathway-diagrams-and-activation-energy",
        title: "Reaction pathway diagrams and activation energy",
        paragraphs: [
          "A reaction pathway diagram plots enthalpy on the vertical axis against progress of reaction on the horizontal axis. The peak represents a high-energy transition state. The activation energy, Ea, is the energy rise from reactants to this peak.",
          "For an exothermic reaction, products lie lower than reactants and ΔH is negative. For an endothermic reaction, products lie higher and ΔH is positive. You should be able to interpret both Ea and ΔH directly from the diagram.",
          "Catalysts provide an alternative pathway with lower activation energy. They change Ea but do not change the enthalpy levels of reactants and products, so ΔH is unchanged.",
        ],
      },
      {
        id: "standard-conditions-and-standard-enthalpy-definitions",
        title: "Standard conditions and named standard enthalpy changes",
        paragraphs: [
          "A standard enthalpy change is measured under standard conditions, usually shown by the symbol °. In this syllabus, standard conditions are 298 K and 101 kPa. For solution reactions, standard concentration is 1.00 mol dm⁻³.",
          "Standard enthalpy change of reaction, ΔH°r, is the enthalpy change when reactants in the stoichiometric amounts shown in the balanced equation react under standard conditions.",
          "Standard enthalpy change of formation, ΔH°f, is for forming 1 mol of a compound from its elements in their standard states under standard conditions. Standard enthalpy change of combustion, ΔH°c, is for complete combustion of 1 mol of substance in oxygen under standard conditions. Standard enthalpy change of neutralisation, ΔH°neut, is for forming 1 mol of water when an acid reacts with a base in aqueous solution under standard conditions.",
        ],
      },
      {
        id: "bond-breaking-and-bond-making",
        title: "Bond energies and why ΔH can be estimated from them",
        paragraphs: [
          "Breaking a covalent bond requires energy, so bond dissociation has a positive enthalpy value. Forming a bond releases energy, so the corresponding enthalpy contribution is negative. This gives the estimation formula:",
          "ΔH ≈ Σ(bond energies of bonds broken) − Σ(bond energies of bonds formed).",
          "Some bond energies are exact values for a specific bond in a specific molecule, while many tables provide average bond energies, averaged across compounds. Values calculated from average bond energies are therefore estimates, not exact thermochemical constants.",
          "Bond-energy methods are most reliable when bonds in reactants and products are similar to those used to generate the averages. Large deviations are possible for unusual bonding environments.",
        ],
      },
      {
        id: "calorimetry-relationships",
        title: "Using calorimetry data: q = mcΔT and ΔH = -mcΔT / n",
        paragraphs: [
          "In simple calorimetry, the heat change in the solution is q = mcΔT, where m is mass of solution in g, c is specific heat capacity (often 4.18 J g⁻¹ K⁻¹ for dilute aqueous solutions), and ΔT is temperature change in K or °C.",
          "For an exothermic reaction, the solution temperature rises so q for the solution is positive, but q for the reaction is negative. This is why the molar enthalpy change is written ΔH = -mcΔT / n, where n is moles of limiting reagent (or moles of water formed for neutralisation, depending on definition).",
          "Always convert J to kJ if needed, use the correct moles for the enthalpy definition requested, and include the sign. These details are common sources of lost marks.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Examiners usually see strong chemistry knowledge but weak thermochemical discipline. Most lost marks come from sign errors, poor definitions, or incorrect mole bases in calculations.",
      items: [
        "Stating that exothermic reactions have positive ΔH. By definition, exothermic means heat is released by the system, so ΔH is negative.",
        "Labeling activation energy as the difference between products and reactants. Ea is from reactants to transition state peak.",
        "Using the wrong denominator n in ΔH = -mcΔT / n, for example moles of excess reagent instead of limiting reagent or moles of water formed where required.",
        "Forgetting that bond energies for bond making are subtracted, leading to reversed signs in bond-energy calculations.",
        "Calling a value from average bond energies exact; these are estimated values and may differ from experimentally measured ΔH°r.",
        "Using standard enthalpy terms without standard conditions or with incomplete state symbols in defining equations.",
      ],
    },
    workedExamples: [
      {
        id: "t5-1-ex1",
        title: "Reading ΔH and Ea from a reaction pathway diagram",
        problem: [
          "A pathway diagram shows reactants at 120 kJ mol⁻¹, transition state at 185 kJ mol⁻¹, and products at 60 kJ mol⁻¹ on the same arbitrary enthalpy scale. Determine (a) ΔH for the reaction and (b) Ea for the forward reaction. State whether the reaction is exothermic or endothermic.",
        ],
        solution: [
          "Use ΔH = H(products) - H(reactants) = 60 - 120 = -60 kJ mol⁻¹.",
          "A negative ΔH means the reaction is exothermic.",
          "Activation energy for the forward reaction is the rise from reactants to peak: Ea = 185 - 120 = 65 kJ mol⁻¹.",
          "So the correct interpretation is ΔH = -60 kJ mol⁻¹ and Ea = 65 kJ mol⁻¹.",
        ],
      },
      {
        id: "t5-1-ex2",
        title: "Estimating ΔH from average bond energies",
        problem: [
          "Estimate ΔH for H2(g) + Cl2(g) -> 2HCl(g) using average bond energies: H-H = 436, Cl-Cl = 243, H-Cl = 431 kJ mol⁻¹.",
        ],
        solution: [
          "Bonds broken: one H-H and one Cl-Cl. Total energy in = 436 + 243 = 679 kJ mol⁻¹.",
          "Bonds formed: two H-Cl bonds. Total energy out = 2 x 431 = 862 kJ mol⁻¹.",
          "Apply ΔH ≈ broken - formed = 679 - 862 = -183 kJ mol⁻¹.",
          "The negative sign shows the reaction is exothermic. This value is an estimate because average bond energies are used.",
        ],
      },
      {
        id: "t5-1-ex3",
        title: "Calorimetry and molar enthalpy change",
        problem: [
          "50.0 cm³ of 1.00 mol dm⁻³ HCl is mixed with 50.0 cm³ of 1.00 mol dm⁻³ NaOH. Temperature rises by 6.8 °C. Assume total mass of solution is 100.0 g and c = 4.18 J g⁻¹ K⁻¹. Calculate the enthalpy change of neutralisation, in kJ mol⁻¹ of water formed.",
        ],
        solution: [
          "Moles HCl = 1.00 x 50.0 / 1000 = 0.0500 mol. Moles NaOH = 0.0500 mol. They react 1:1, so moles of water formed = 0.0500 mol.",
          "Heat gained by solution: q = mcΔT = 100.0 x 4.18 x 6.8 = 2842.4 J = 2.8424 kJ.",
          "Reaction is exothermic, so q(reaction) = -2.8424 kJ.",
          "Molar enthalpy change: ΔH = q(reaction) / n = -2.8424 / 0.0500 = -56.8 kJ mol⁻¹.",
          "Therefore ΔH°neut is approximately -57 kJ mol⁻¹ under these assumptions.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t5-1-st1",
        question:
          "Define enthalpy change and explain what the sign of ΔH tells you about energy transfer between system and surroundings.",
        modelAnswer: [
          "Enthalpy change ΔH is the thermal energy change of a system at constant pressure.",
          "If ΔH is negative, the reaction is exothermic and heat is transferred from system to surroundings. If ΔH is positive, the reaction is endothermic and heat is transferred from surroundings to system.",
        ],
      },
      {
        id: "t5-1-st2",
        question:
          "State the standard conditions used in this syllabus and define ΔH°f.",
        modelAnswer: [
          "Standard conditions are 298 K and 101 kPa (with 1.00 mol dm⁻³ for solutions).",
          "ΔH°f is the enthalpy change when 1 mol of a compound is formed from its elements in their standard states under standard conditions.",
        ],
      },
      {
        id: "t5-1-st3",
        question:
          "Why is a ΔH value calculated from average bond energies normally an estimate rather than an exact value?",
        modelAnswer: [
          "Average bond energies are mean values from many compounds, so they do not represent the exact bond enthalpy in every specific molecular environment.",
          "Therefore ΔH from average bond energies is approximate and may differ from experimentally measured ΔH° for the reaction.",
        ],
      },
      {
        id: "t5-1-st4",
        question:
          "In a calorimetry experiment, 75.0 g of solution changes by -3.2 °C. Using c = 4.18 J g⁻¹ K⁻¹, calculate q for the solution.",
        modelAnswer: [
          "q = mcΔT = 75.0 x 4.18 x (-3.2) = -1003.2 J, so q is approximately -1.00 x 10³ J.",
          "The negative sign means the solution lost heat; the reaction would have absorbed this heat (endothermic) in this setup.",
        ],
      },
      {
        id: "t5-1-st5",
        question:
          "What does a catalyst change on a reaction pathway diagram, and what does it not change?",
        modelAnswer: [
          "A catalyst lowers activation energy by providing an alternative pathway.",
          "It does not change the enthalpy levels of reactants and products, so ΔH for the reaction is unchanged.",
        ],
      },
    ],
  },

  "t5-2": {
    noteId: "t5-2",
    syllabusNotes: [
      {
        id: "hess-law-principle",
        title: "Hess's law and state-function thinking",
        paragraphs: [
          "Hess's law states that the total enthalpy change for a reaction is independent of the route taken, provided initial and final states are the same. This works because enthalpy is a state function: it depends only on state, not pathway.",
          "In practice, this means you can combine known enthalpy changes algebraically to find an unknown one, even when direct measurement is difficult or impossible.",
          "When building cycles, keep equations balanced and states consistent. A cycle is only valid if all paths connect the same overall start and finish states.",
        ],
      },
      {
        id: "constructing-energy-cycles",
        title: "Constructing simple energy cycles correctly",
        paragraphs: [
          "A useful method is to place the target reaction at the top and choose a convenient common reference level at the bottom (often elements in standard states, or complete combustion products). Then connect each side with known enthalpy changes.",
          "Arrow direction matters. If a known equation is reversed, reverse the sign of its ΔH. If multiplied, scale ΔH by the same factor.",
          "After assigning signs correctly, apply a route equality such as: direct route = alternative route. This avoids memorising many separate formulas.",
        ],
      },
      {
        id: "using-formation-and-combustion-data",
        title: "Finding unknown ΔH using formation or combustion data",
        paragraphs: [
          "With standard enthalpies of formation, the general relationship is:",
          "ΔH°r = ΣΔH°f(products) - ΣΔH°f(reactants), each multiplied by stoichiometric coefficients.",
          "With enthalpies of combustion, you often send both reactants and products to the same combustion products (typically CO2 and H2O). In that case a common form is:",
          "ΔH°r = ΣΔH°c(reactants) - ΣΔH°c(products), again using balanced coefficients and careful signs.",
        ],
      },
      {
        id: "hess-law-with-bond-energies",
        title: "Using Hess's law with bond energy data",
        paragraphs: [
          "Bond-energy calculations are Hess's-law calculations written at bond level. You compare energy required to break all relevant bonds in reactants with energy released when forming all relevant bonds in products.",
          "So the same expression applies: ΔH ≈ Σ(bonds broken) - Σ(bonds formed). Because average bond energies are commonly used, the result is usually approximate.",
          "This method is especially useful for gas-phase molecular reactions where bond-energy tables are available, but less reliable for ionic lattices or unusual bonding.",
        ],
      },
      {
        id: "why-indirect-enthalpy-matters",
        title: "Why indirect determination is needed",
        paragraphs: [
          "Some reactions cannot be measured directly because they are too slow, too fast, have competing side reactions, or are experimentally unsafe. Hess cycles let you determine these enthalpy changes from measurable alternatives.",
          "This is not a theoretical trick only; it is a core thermochemical method used throughout chemistry, including fuel analysis and process design.",
          "In examination questions, success comes from disciplined equation handling: balance first, align with data equations, then perform sign-aware algebra.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Most Hess-law errors are procedural rather than conceptual. Examiners often see correct chemistry spoiled by one sign mistake or an unbalanced target equation.",
      items: [
        "Using an unbalanced reaction in the cycle, which makes any numerical result invalid.",
        "Forgetting to reverse the sign when reversing a formation or combustion equation.",
        "Adding raw ΔH values without multiplying by stoichiometric coefficients from the balanced equation.",
        "Mixing combustion and formation routes without a consistent common reference state.",
        "Using bond energies for phases where they are not applicable, then treating the result as exact.",
      ],
    },
    workedExamples: [
      {
        id: "t5-2-ex1",
        title: "Using standard enthalpies of formation",
        problem: [
          "Calculate ΔH°r for CH4(g) + 2O2(g) -> CO2(g) + 2H2O(l), given: ΔH°f[CH4(g)] = -74.8, ΔH°f[CO2(g)] = -393.5, ΔH°f[H2O(l)] = -285.8, ΔH°f[O2(g)] = 0 kJ mol⁻¹.",
        ],
        solution: [
          "Apply ΔH°r = ΣΔH°f(products) - ΣΔH°f(reactants).",
          "Products: (-393.5) + 2(-285.8) = -965.1 kJ mol⁻¹.",
          "Reactants: (-74.8) + 2(0) = -74.8 kJ mol⁻¹.",
          "So ΔH°r = -965.1 - (-74.8) = -890.3 kJ mol⁻¹.",
          "The reaction is strongly exothermic, consistent with combustion.",
        ],
      },
      {
        id: "t5-2-ex2",
        title: "Finding an unknown using combustion data",
        problem: [
          "Use Hess's law to find ΔH° for C2H4(g) + H2(g) -> C2H6(g), given ΔH°c[C2H4(g)] = -1411, ΔH°c[H2(g)] = -286, ΔH°c[C2H6(g)] = -1560 kJ mol⁻¹.",
        ],
        solution: [
          "Use common combustion products as reference (CO2 and H2O).",
          "For this cycle, ΔH°reaction = ΣΔH°c(reactants) - ΣΔH°c(products).",
          "Reactants combustion sum = (-1411) + (-286) = -1697 kJ mol⁻¹.",
          "Products combustion sum = (-1560) kJ mol⁻¹.",
          "Therefore ΔH° = -1697 - (-1560) = -137 kJ mol⁻¹.",
          "Hydrogenation of ethene is therefore exothermic by 137 kJ mol⁻¹.",
        ],
      },
      {
        id: "t5-2-ex3",
        title: "Hess calculation from bond energies",
        problem: [
          "Estimate ΔH for N2(g) + 3H2(g) -> 2NH3(g) using average bond energies: N≡N = 945, H-H = 436, N-H = 391 kJ mol⁻¹.",
        ],
        solution: [
          "Bonds broken in reactants: one N≡N and three H-H.",
          "Energy in = 945 + 3(436) = 945 + 1308 = 2253 kJ mol⁻¹.",
          "Bonds formed in products: each NH3 has three N-H, so two NH3 has six N-H.",
          "Energy out = 6(391) = 2346 kJ mol⁻¹.",
          "ΔH ≈ broken - formed = 2253 - 2346 = -93 kJ mol⁻¹.",
          "Negative sign means exothermic; value is approximate because average bond energies are used.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t5-2-st1",
        question:
          "State Hess's law in one precise sentence and explain why it works in terms of enthalpy.",
        modelAnswer: [
          "Hess's law states that the enthalpy change of a reaction is the same whatever route is taken between the same initial and final states.",
          "It works because enthalpy is a state function, so total change depends only on the starting and ending states, not on pathway.",
        ],
      },
      {
        id: "t5-2-st2",
        question:
          "Write the formula for ΔH°r in terms of standard enthalpies of formation.",
        modelAnswer: [
          "ΔH°r = ΣΔH°f(products) - ΣΔH°f(reactants), each multiplied by the stoichiometric coefficients in the balanced equation.",
        ],
      },
      {
        id: "t5-2-st3",
        question:
          "A known thermochemical equation is reversed before use in your cycle. What must you do to its ΔH value?",
        modelAnswer: [
          "Reverse the sign of ΔH. A value of +x kJ mol⁻¹ becomes -x kJ mol⁻¹, and vice versa.",
        ],
      },
      {
        id: "t5-2-st4",
        question:
          "Why are Hess cycles useful for enthalpy changes that cannot be measured directly?",
        modelAnswer: [
          "They allow an unknown ΔH to be obtained from other measurable enthalpy changes that connect the same initial and final states.",
          "This is useful when the direct reaction is too slow, too fast, unsafe, or has side reactions.",
        ],
      },
      {
        id: "t5-2-st5",
        question:
          "In one line, give the bond-energy form of Hess's law and state one limitation.",
        modelAnswer: [
          "ΔH ≈ Σ(bond energies broken) - Σ(bond energies formed).",
          "Limitation: values from average bond energies are approximate, so the calculated ΔH is estimated rather than exact.",
        ],
      },
    ],
  },
};
