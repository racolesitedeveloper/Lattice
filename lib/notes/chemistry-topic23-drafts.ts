import type { NoteDraft } from "./types";

/** Full teaching notes for 9701 Topic 23 — subtopics 23.1-23.4 (see lib/notes/AUTHORING.md). */
export const CHEMISTRY_TOPIC23_DRAFTS: Record<string, NoteDraft> = {
  "t23-1": {
    noteId: "t23-1",
    syllabusNotes: [
      {
        id: "atomisation-lattice-energy-definitions",
        title: "Core definitions: atomisation and lattice energy",
        paragraphs: [
          "Enthalpy change of atomisation, ΔH_at, is the enthalpy change when one mole of gaseous atoms is formed from an element in its standard state under standard conditions. For a molecular element such as chlorine, atomisation corresponds to half-bond dissociation per mole of atoms formed.",
          "In this syllabus, lattice energy, ΔH_latt, is defined for lattice formation: the enthalpy change when one mole of an ionic solid is formed from its gaseous ions. This value is usually negative because energy is released when oppositely charged ions come together in the crystal lattice.",
          "Some data books use the opposite sign convention (lattice dissociation enthalpy). Always read the question's definition before calculation, then keep signs consistent throughout the cycle.",
        ],
      },
      {
        id: "electron-affinity-and-trends",
        title: "First electron affinity and periodic factors",
        paragraphs: [
          "First electron affinity, EA1, is the enthalpy change when one mole of electrons is added to one mole of gaseous atoms to form one mole of gaseous 1- ions. For most non-metals this is exothermic, so EA1 is negative.",
          "Electron affinity depends on nuclear charge, atomic radius, and shielding. A stronger attraction between nucleus and incoming electron gives a more exothermic (more negative) value, but electron-electron repulsion in compact orbitals can reduce this effect.",
          "Across Group 17 from chlorine to iodine, first EA becomes less exothermic because atomic radius and shielding increase down the group, weakening attraction for the incoming electron.",
          "Across Group 16 from sulfur to tellurium, first EA also becomes less exothermic down the group for similar reasons. Oxygen is less exothermic than sulfur because the added electron enters a very compact 2p region with relatively high repulsion.",
        ],
      },
      {
        id: "born-haber-cycle-construction",
        title: "Constructing Born-Haber cycles for ionic solids",
        paragraphs: [
          "A Born-Haber cycle applies Hess's law to ionic-solid formation. You connect elements in standard states to gaseous ions through atomisation, ionisation-energy and electron-affinity steps, then connect gaseous ions to solid via lattice energy.",
          "At this level, cycles are limited to salts involving +1 or +2 cations and -1 or -2 anions, for example NaCl, MgO, CaF2 and MgCl2. For +2 cations, include both first and second ionisation energies.",
          "For non-metal elements that are molecular in standard state, include bond dissociation or atomisation correctly before electron-affinity steps. For example, 1/2Cl2(g) -> Cl(g) must be represented if one chloride ion is formed.",
          "The most reliable method is to write every step as a balanced enthalpy equation with states, then apply Hess's law algebraically. Diagram drawing is useful, but equation discipline prevents sign errors.",
        ],
      },
      {
        id: "born-haber-calculations-and-lattice-magnitude",
        title: "Using Born-Haber cycles and explaining lattice-energy magnitude",
        paragraphs: [
          "Typical calculations solve for unknown lattice energy, electron affinity, or ionisation term by summing known steps to equal standard enthalpy of formation. Keep a single consistent direction for all arrows before substituting numbers.",
          "Lattice-energy magnitude increases when ionic charge increases and when ionic radius decreases. Higher charge gives stronger Coulomb attraction, and shorter ion-ion distance increases electrostatic attraction.",
          "So MgO has a much larger magnitude of lattice energy than NaCl: Mg2+ and O2- carry larger charges and are relatively small ions. This qualitative trend explains many stability and melting-point differences in ionic compounds.",
          "When answering qualitative questions, use the phrase 'numerical magnitude' clearly. A more negative lattice-formation value has greater magnitude, not smaller.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Born-Haber questions are sign-sensitive and definition-sensitive. Examiners reward candidates who define terms precisely, include all required steps, and keep a consistent enthalpy direction convention.",
      items: [
        "Using lattice dissociation sign conventions when the question defines lattice energy for gaseous ions to solid lattice formation.",
        "Omitting second ionisation energy for +2 cations such as Mg2+ or Ca2+.",
        "Forgetting atomisation of molecular non-metals (for example 1/2Cl2 to Cl) before applying electron affinity.",
        "Assuming first electron affinity is always exothermic without noting key trend exceptions such as oxygen versus sulfur.",
        "Explaining larger lattice energy using only charge or only radius instead of both electrostatic factors.",
      ],
    },
    workedExamples: [
      {
        id: "t23-1-ex1",
        title: "Setting up a Born-Haber cycle for magnesium oxide",
        problem: [
          "List the enthalpy steps needed to build a Born-Haber cycle for formation of MgO(s) from Mg(s) and 1/2O2(g).",
        ],
        solution: [
          "Start with formation equation: Mg(s) + 1/2O2(g) -> MgO(s), with ΔH°f.",
          "Gas-phase ion route requires: Mg(s) -> Mg(g) (ΔH_at of Mg), Mg(g) -> Mg+(g) + e- (IE1), Mg+(g) -> Mg2+(g) + e- (IE2), 1/2O2(g) -> O(g) (atomisation of oxygen), O(g) + e- -> O-(g) (EA1), O-(g) + e- -> O2-(g) (EA2).",
          "Final lattice step is Mg2+(g) + O2-(g) -> MgO(s) (ΔH_latt by this syllabus definition).",
          "These steps form a complete Hess cycle linking standard-state elements to ionic solid through gaseous ions.",
        ],
      },
      {
        id: "t23-1-ex2",
        title: "Calculating lattice energy from cycle data",
        problem: [
          "For NaCl(s): ΔH°f = -411 kJ mol⁻¹, ΔH_at(Na) = +108, atomisation of 1/2Cl2 to Cl = +121, IE1(Na) = +496, EA1(Cl) = -349. Calculate ΔH_latt for Na+(g) + Cl-(g) -> NaCl(s).",
        ],
        solution: [
          "Apply Hess's law using formation route equals ion route plus lattice step:",
          "ΔH°f = ΔH_at(Na) + atomisation(Cl) + IE1 + EA1 + ΔH_latt.",
          "Substitute: -411 = 108 + 121 + 496 - 349 + ΔH_latt.",
          "Sum known terms: 108 + 121 + 496 - 349 = 376.",
          "So ΔH_latt = -411 - 376 = -787 kJ mol⁻¹.",
          "The negative value is consistent with lattice formation being exothermic.",
        ],
      },
      {
        id: "t23-1-ex3",
        title: "Qualitative comparison of lattice-energy magnitude",
        problem: [
          "Explain why the lattice energy magnitude of CaO is greater than that of KCl.",
        ],
        solution: [
          "In CaO, ions are Ca2+ and O2-, so the product of charges is larger than in KCl where ions are K+ and Cl-.",
          "Ca2+ and O2- are also relatively small ions compared with K+ and Cl-, so average interionic distance is shorter.",
          "Higher ionic charges and shorter ion-ion distance increase electrostatic attraction strongly.",
          "Therefore the lattice-formation enthalpy for CaO is much more negative, i.e. greater numerical magnitude.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t23-1-st1",
        question:
          "Define (a) enthalpy change of atomisation, ΔH_at, and (b) lattice energy, ΔH_latt, using this syllabus convention.",
        modelAnswer: [
          "(a) ΔH_at is the enthalpy change when one mole of gaseous atoms is formed from an element in its standard state under standard conditions.",
          "(b) ΔH_latt is the enthalpy change when one mole of ionic solid is formed from its gaseous ions.",
        ],
      },
      {
        id: "t23-1-st2",
        question:
          "Define first electron affinity, EA1, and state the trend down Group 17 from chlorine to iodine.",
        modelAnswer: [
          "EA1 is the enthalpy change when one mole of electrons is added to one mole of gaseous atoms to form one mole of gaseous 1- ions.",
          "Down Group 17, first electron affinity becomes less exothermic (less negative) from chlorine to iodine.",
        ],
      },
      {
        id: "t23-1-st3",
        question:
          "State which extra ionisation step must be included for MgCl2 in a Born-Haber cycle compared with NaCl.",
        modelAnswer: [
          "MgCl2 requires both first and second ionisation energies of magnesium, because Mg2+ is formed.",
        ],
      },
      {
        id: "t23-1-st4",
        question:
          "Why is lattice energy magnitude generally larger for ions with higher charges and smaller radii?",
        modelAnswer: [
          "ΔS° is the standard entropy change for a reaction under standard conditions.",
          "Positive ΔS° implies greater disorder in products than reactants at the molecular level.",
        ],
      },
      {
        id: "t23-1-st5",
        question:
          "In one sentence, explain a common reason oxygen's first electron affinity is less exothermic than sulfur's.",
        modelAnswer: [
          "The added electron enters oxygen's compact 2p region where electron-electron repulsion is relatively high, making EA1 less exothermic than for sulfur.",
        ],
      },
    ],
  },

  "t23-2": {
    noteId: "t23-2",
    syllabusNotes: [
      {
        id: "definitions-solution-hydration",
        title: "Core definitions: enthalpy of solution and hydration",
        paragraphs: [
          "Enthalpy change of hydration, ΔH_hyd, is the enthalpy change when one mole of gaseous ions becomes hydrated by water molecules to form one mole of aqueous ions.",
          "Enthalpy change of solution, ΔH_sol, is the enthalpy change when one mole of a solute dissolves in water to form an infinitely dilute solution. For ionic solids, this corresponds to separating lattice ions and hydrating them.",
          "Hydration is usually exothermic because ion-dipole attractions form between ions and polar water molecules. The extent of exothermicity depends strongly on ionic charge density.",
        ],
      },
      {
        id: "solution-cycle-construction",
        title: "Energy cycle linking ΔH_sol, lattice energy and hydration",
        paragraphs: [
          "For an ionic solid MX, dissolving can be represented by a Hess cycle: MX(s) -> M+(g) + X-(g) (lattice dissociation, endothermic), then gaseous ions -> aqueous ions (sum of hydration enthalpies, exothermic).",
          "Using this common dissociation-form cycle: ΔH_sol = ΔH_latt(dissociation) + ΔH_hyd(M+) + ΔH_hyd(X-).",
          "If lattice data are given in lattice-formation convention, convert sign before substitution or rearrange the equation consistently. Most mistakes come from mixing conventions mid-calculation.",
          "A clear method is to write every step as an equation with state symbols, then sum to the target dissolution equation.",
        ],
      },
      {
        id: "calculations-and-sign-interpretation",
        title: "Interpreting positive and negative ΔH_sol values",
        paragraphs: [
          "If total hydration enthalpy magnitude exceeds lattice dissociation enthalpy, dissolution is exothermic and ΔH_sol is negative. If lattice dissociation dominates, ΔH_sol is positive (endothermic dissolution).",
          "A positive ΔH_sol does not automatically mean insoluble; solubility also depends on entropy and total Gibbs energy. This link appears explicitly in Topic 23.4.",
          "Calculation questions may ask for unknown ΔH_sol, unknown hydration term, or comparison between salts. Sign discipline and full ionic stoichiometry are essential.",
        ],
      },
      {
        id: "hydration-trends-charge-radius",
        title: "How ionic charge and radius affect hydration enthalpy magnitude",
        paragraphs: [
          "Hydration enthalpy magnitude increases with higher ionic charge because stronger ion-dipole attraction forms between ion and water molecules.",
          "Hydration enthalpy magnitude also increases as ionic radius decreases, because water molecules can approach charge centers more closely, increasing electrostatic attraction.",
          "So small, highly charged ions such as Al3+ have much larger hydration enthalpy magnitude than larger singly charged ions such as K+.",
          "For ions with same charge, the smaller ion has the more negative ΔH_hyd. For similar radius, the higher charged ion has the more negative ΔH_hyd.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Enthalpy-of-solution questions often look simple but are convention-heavy. Examiners reward explicit cycle setup and penalise hidden sign assumptions.",
      items: [
        "Using lattice-formation values directly in a lattice-dissociation equation without sign conversion.",
        "Forgetting to include both cation and anion hydration terms in the cycle sum.",
        "Assuming endothermic dissolution implies insolubility without considering entropy/Gibbs effects.",
        "Explaining hydration trends with radius only and ignoring ionic charge.",
        "Writing hydration enthalpy for ions from solid state rather than gaseous ions.",
      ],
    },
    workedExamples: [
      {
        id: "t23-2-ex1",
        title: "Calculating ΔH_sol from lattice dissociation and hydration data",
        problem: [
          "For NaCl: ΔH_latt(dissociation) = +787 kJ mol⁻¹, ΔH_hyd(Na+) = -406, ΔH_hyd(Cl-) = -364. Calculate ΔH_sol.",
        ],
        solution: [
          "Use the cycle equation: ΔH_sol = ΔH_latt(dissociation) + ΔH_hyd(Na+) + ΔH_hyd(Cl-).",
          "Substitute: ΔH_sol = 787 + (-406) + (-364).",
          "ΔH_sol = +17 kJ mol⁻¹.",
          "So dissolving NaCl is slightly endothermic by this dataset.",
        ],
      },
      {
        id: "t23-2-ex2",
        title: "Finding unknown hydration enthalpy from cycle data",
        problem: [
          "For MgCl2: ΔH_sol = -155 kJ mol⁻¹, ΔH_latt(dissociation) = +2526, ΔH_hyd(Cl-) = -364 each. Calculate ΔH_hyd(Mg2+).",
        ],
        solution: [
          "Write equation: ΔH_sol = ΔH_latt(dissociation) + ΔH_hyd(Mg2+) + 2ΔH_hyd(Cl-).",
          "Substitute known values: -155 = 2526 + ΔH_hyd(Mg2+) + 2(-364).",
          "2(-364) = -728, so -155 = 1798 + ΔH_hyd(Mg2+).",
          "Therefore ΔH_hyd(Mg2+) = -1953 kJ mol⁻¹.",
          "Large negative value is consistent with high charge density of Mg2+.",
        ],
      },
      {
        id: "t23-2-ex3",
        title: "Qualitative comparison of hydration enthalpies",
        problem: [
          "Compare hydration-enthalpy magnitudes for K+, Mg2+ and Al3+ and explain the order.",
        ],
        solution: [
          "The order of increasing magnitude is K+ < Mg2+ < Al3+ (in terms of increasingly negative ΔH_hyd).",
          "From K+ to Al3+, ionic charge increases and ionic radius decreases overall.",
          "Higher charge and smaller radius both increase ion-dipole attraction to water molecules.",
          "So Al3+ has the most exothermic hydration enthalpy among the three.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t23-2-st1",
        question:
          "Define (a) enthalpy change of hydration, ΔH_hyd, and (b) enthalpy change of solution, ΔH_sol.",
        modelAnswer: [
          "(a) ΔH_hyd is the enthalpy change when one mole of gaseous ions is hydrated to form one mole of aqueous ions.",
          "(b) ΔH_sol is the enthalpy change when one mole of solute dissolves in water to form an infinitely dilute solution.",
        ],
      },
      {
        id: "t23-2-st2",
        question:
          "Write the Hess relationship for ionic dissolution using lattice dissociation enthalpy.",
        modelAnswer: [
          "For ionic solid MX, ΔH_sol = ΔH_latt(dissociation) + ΔH_hyd(M+) + ΔH_hyd(X-) (with stoichiometric factors where needed).",
        ],
      },
      {
        id: "t23-2-st3",
        question:
          "Why is hydration of ions generally exothermic?",
        modelAnswer: [
          "Hydration forms ion-dipole attractions between ions and polar water molecules, releasing energy.",
        ],
      },
      {
        id: "t23-2-st4",
        question:
          "For ions of the same charge, how does ionic radius affect hydration-enthalpy magnitude?",
        modelAnswer: [
          "Smaller ions have larger hydration-enthalpy magnitude (more negative ΔH_hyd) because water can approach the charge center more closely.",
        ],
      },
      {
        id: "t23-2-st5",
        question:
          "State one reason why positive ΔH_sol does not by itself prove a salt is insoluble.",
        modelAnswer: [
          "Feasibility of dissolution depends on Gibbs free energy, so entropy effects can still make dissolution feasible even when ΔH_sol is positive.",
        ],
      },
    ],
  },

  "t23-3": {
    noteId: "t23-3",
    syllabusNotes: [
      {
        id: "entropy-definition",
        title: "Defining entropy, S",
        paragraphs: [
          "Entropy, S, is the number of possible arrangements of particles and their energy in a system. A larger number of arrangements corresponds to higher entropy.",
          "Entropy is not simply 'disorder' in a vague sense. High-scoring definitions should mention both particle arrangement and energy distribution explicitly.",
          "In chemistry problems, entropy changes are interpreted from changes in state, temperature and gaseous mole count, then quantified using standard entropy data.",
        ],
      },
      {
        id: "sign-prediction-state-and-temperature",
        title: "Predicting sign of ΔS for state change and temperature change",
        paragraphs: [
          "Entropy increases from solid to liquid to gas because particles become less constrained and more microstates are available. So melting and boiling usually have positive ΔS, while freezing and condensation have negative ΔS.",
          "Dissolving often gives positive entropy when ions or molecules become more dispersed in solution, but magnitude and sign can vary depending on solute-solvent structuring effects.",
          "Raising temperature generally increases entropy because energy is spread over more accessible energy levels. Lowering temperature generally decreases entropy.",
          "When predicting sign in exam questions, always connect the sign to changed freedom of particle motion and energy distribution.",
        ],
      },
      {
        id: "gaseous-moles-and-reaction-entropy",
        title: "Entropy change from change in number of gaseous molecules",
        paragraphs: [
          "For reactions involving gases, an increase in total moles of gas usually gives positive ΔS because more particles in gas phase means many more positional microstates.",
          "A decrease in gaseous moles usually gives negative ΔS. For example, N2(g) + 3H2(g) -> 2NH3(g) has fewer gas molecules in products, so ΔS is negative.",
          "If gaseous mole count is unchanged, ΔS may be small and sign depends on other structural and energetic factors.",
          "This qualitative rule is one of the most frequent mark points in thermodynamics reasoning questions.",
        ],
      },
      {
        id: "entropy-calculation-from-standard-data",
        title: "Calculating ΔS° from standard entropy values",
        paragraphs: [
          "Standard reaction entropy change is calculated by: ΔS° = ΣS°(products) - ΣS°(reactants), using stoichiometric coefficients from the balanced equation.",
          "Units are usually J K⁻¹ mol⁻¹. Keep the same units throughout before combining with ΔH in Gibbs calculations later.",
          "Always multiply each S° value by its coefficient, include every species in the balanced equation, and check sign after subtraction.",
          "At this level, the alternative decomposition into system and surroundings entropy is not required; direct data-table calculation is sufficient.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Entropy questions are often highly mark-scheme driven: definition wording, sign logic, and coefficient handling in calculations all matter.",
      items: [
        "Defining entropy only as 'disorder' without mentioning arrangements of particles and energy.",
        "Predicting positive ΔS whenever a solid dissolves without discussing context or particle dispersal basis.",
        "Ignoring stoichiometric coefficients when applying ΔS° = ΣS°(products) - ΣS°(reactants).",
        "Mixing units (for example kJ with J) before using entropy values in later Gibbs calculations.",
        "Using gaseous-mole-count rule for reactions with no gas-phase species change and treating it as exact rather than qualitative.",
      ],
    },
    workedExamples: [
      {
        id: "t23-3-ex1",
        title: "Predicting ΔS signs for physical changes",
        problem: [
          "Predict and explain the sign of ΔS for (a) ice melting, (b) steam condensing, and (c) heating liquid water from 25 °C to 60 °C.",
        ],
        solution: [
          "(a) Ice melting: ΔS positive, because particles move from fixed crystal positions to a less constrained liquid arrangement.",
          "(b) Steam condensing: ΔS negative, because gas particles lose positional freedom when entering liquid state.",
          "(c) Heating liquid water: ΔS positive, because higher temperature allows broader energy distribution over microstates.",
          "Each sign follows change in number of accessible particle-and-energy arrangements.",
        ],
      },
      {
        id: "t23-3-ex2",
        title: "Using gaseous-mole-count reasoning",
        problem: [
          "Without data tables, predict the sign of ΔS for 2SO2(g) + O2(g) -> 2SO3(g) and justify.",
        ],
        solution: [
          "Reactants have 3 moles of gas in total; products have 2 moles of gas.",
          "A decrease in gaseous molecule count usually decreases the number of positional microstates.",
          "So ΔS is expected to be negative.",
          "This is the standard qualitative entropy argument for gas-phase equilibria.",
        ],
      },
      {
        id: "t23-3-ex3",
        title: "Calculating ΔS° from standard entropy values",
        problem: [
          "Given S° values (J K⁻¹ mol⁻¹): H2(g) = 131, I2(g) = 261, HI(g) = 207. Calculate ΔS° for H2(g) + I2(g) -> 2HI(g).",
        ],
        solution: [
          "Use ΔS° = ΣS°(products) - ΣS°(reactants).",
          "Products: 2 x 207 = 414 J K⁻¹ mol⁻¹.",
          "Reactants: 131 + 261 = 392 J K⁻¹ mol⁻¹.",
          "ΔS° = 414 - 392 = +22 J K⁻¹ mol⁻¹.",
          "So standard entropy change is positive 22 J K⁻¹ mol⁻¹.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t23-3-st1",
        question:
          "Define entropy, S, as required in this syllabus.",
        modelAnswer: [
          "Entropy, S, is the number of possible arrangements of particles and their energy in a given system.",
        ],
      },
      {
        id: "t23-3-st2",
        question:
          "State the expected sign of ΔS for (a) boiling and (b) freezing, with brief reason.",
        modelAnswer: [
          "(a) Boiling: ΔS positive, because particles gain much greater positional freedom in gas phase.",
          "(b) Freezing: ΔS negative, because particles become more constrained in a solid lattice.",
        ],
      },
      {
        id: "t23-3-st3",
        question:
          "For the reaction N2(g) + 3H2(g) -> 2NH3(g), explain the expected sign of ΔS.",
        modelAnswer: [
          "ΔS is negative because total gaseous moles decrease from 4 to 2, reducing the number of available gas-phase arrangements.",
        ],
      },
      {
        id: "t23-3-st4",
        question:
          "Write the equation used to calculate standard entropy change of reaction from data tables.",
        modelAnswer: [
          "ΔS° = ΣS°(products) - ΣS°(reactants), including stoichiometric coefficients.",
        ],
      },
      {
        id: "t23-3-st5",
        question:
          "Why should stoichiometric coefficients be included explicitly in ΔS° calculations?",
        modelAnswer: [
          "Because standard entropy values are per mole of each species, so total entropy contribution of a species in the reaction is coefficient multiplied by its S° value.",
        ],
      },
    ],
  },

  "t23-4": {
    noteId: "t23-4",
    syllabusNotes: [
      {
        id: "gibbs-equation-and-feasibility",
        title: "Gibbs free energy equation and feasibility criterion",
        paragraphs: [
          "Standard Gibbs free energy change is given by ΔG° = ΔH° - TΔS°, where T is in kelvin, ΔH° in kJ mol⁻¹ (or J mol⁻¹ if consistent), and ΔS° in matching energy-per-kelvin units.",
          "A process is thermodynamically feasible under standard conditions when ΔG° is negative. If ΔG° is positive, it is not feasible in that direction under standard conditions. If ΔG° is close to zero, the system is near equilibrium conditions.",
          "Feasible does not mean fast. A reaction can be thermodynamically feasible but kinetically slow due to high activation energy.",
        ],
      },
      {
        id: "gibbs-calculation-technique",
        title: "Reliable calculation method using ΔG° = ΔH° - TΔS°",
        paragraphs: [
          "The most common error is unit inconsistency. If ΔH° is in kJ mol⁻¹ and ΔS° is in J K⁻¹ mol⁻¹, convert one so both terms are in the same energy unit before subtraction.",
          "A safe workflow is: convert ΔS° to kJ K⁻¹ mol⁻¹ by dividing by 1000, then calculate TΔS° in kJ mol⁻¹ and substitute into ΔG° equation.",
          "For threshold-temperature questions, set ΔG° = 0 and rearrange: T = ΔH°/ΔS° (with signs and units consistent). This gives the temperature where feasibility changes under standard assumptions.",
          "Interpret the sign after calculation and explicitly state what it means for feasibility.",
        ],
      },
      {
        id: "temperature-effect-by-sign-combinations",
        title: "Predicting temperature effects from ΔH° and ΔS° signs",
        paragraphs: [
          "If ΔH° is negative and ΔS° is positive, ΔG° is negative at all temperatures, so process is feasible at all temperatures.",
          "If ΔH° is positive and ΔS° is negative, ΔG° is positive at all temperatures, so process is not feasible at any temperature under standard conditions.",
          "If both ΔH° and ΔS° are negative, low temperature favors feasibility because the +T|ΔS°| penalty is smaller.",
          "If both ΔH° and ΔS° are positive, high temperature favors feasibility because the TΔS° term can outweigh positive ΔH°.",
          "These four sign-combination rules are central for exam predictions without full arithmetic.",
        ],
      },
      {
        id: "connecting-gibbs-with-solution-and-entropy-ideas",
        title: "Using Gibbs ideas to interpret solution and reaction behavior",
        paragraphs: [
          "A dissolution with positive ΔH_sol can still be feasible when ΔS is sufficiently positive, making ΔG negative. This links Topic 23.2 and Topic 23.3 directly.",
          "Conversely, an exothermic process may be non-feasible at high temperature if entropy change is strongly negative and TΔS term dominates.",
          "Therefore thermodynamic judgement must combine both enthalpy and entropy, not one alone.",
          "In extended questions, showing this integrated reasoning often distinguishes top-band responses.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Gibbs questions reward clean unit handling and clear interpretation. Examiners frequently see correct formulas with incorrect feasibility conclusions due to sign or unit slips.",
      items: [
        "Substituting temperature in degrees Celsius instead of kelvin.",
        "Combining ΔH in kJ with ΔS in J K⁻¹ mol⁻¹ without unit conversion.",
        "Interpreting positive ΔG as 'slow' rather than thermodynamically non-feasible under stated conditions.",
        "Using sign-combination rules backwards for cases where both ΔH and ΔS are positive or both negative.",
        "Assuming ΔG sign never changes with temperature when ΔH and ΔS have same sign.",
      ],
    },
    workedExamples: [
      {
        id: "t23-4-ex1",
        title: "Direct ΔG° calculation with unit conversion",
        problem: [
          "At 298 K, a reaction has ΔH° = -92.0 kJ mol⁻¹ and ΔS° = -198 J K⁻¹ mol⁻¹. Calculate ΔG° and state feasibility under standard conditions.",
        ],
        solution: [
          "Convert entropy term: ΔS° = -0.198 kJ K⁻¹ mol⁻¹.",
          "Calculate TΔS°: 298 x (-0.198) = -59.0 kJ mol⁻¹ (to 3 s.f.).",
          "Apply equation: ΔG° = ΔH° - TΔS° = -92.0 - (-59.0) = -33.0 kJ mol⁻¹.",
          "ΔG° is negative, so the reaction is thermodynamically feasible under standard conditions at 298 K.",
        ],
      },
      {
        id: "t23-4-ex2",
        title: "Finding temperature where feasibility changes",
        problem: [
          "A reaction has ΔH° = +45.0 kJ mol⁻¹ and ΔS° = +150 J K⁻¹ mol⁻¹. Find the temperature above which it becomes feasible under standard conditions.",
        ],
        solution: [
          "At boundary of feasibility, set ΔG° = 0: 0 = ΔH° - TΔS° so T = ΔH°/ΔS°.",
          "Convert entropy: +150 J K⁻¹ mol⁻¹ = +0.150 kJ K⁻¹ mol⁻¹.",
          "T = 45.0 / 0.150 = 300 K.",
          "For T > 300 K, TΔS° exceeds ΔH° and ΔG° becomes negative, so reaction is feasible above 300 K.",
        ],
      },
      {
        id: "t23-4-ex3",
        title: "Feasibility prediction from sign combinations",
        problem: [
          "Predict temperature dependence of feasibility for each case: (a) ΔH° < 0, ΔS° > 0; (b) ΔH° > 0, ΔS° < 0; (c) ΔH° < 0, ΔS° < 0; (d) ΔH° > 0, ΔS° > 0.",
        ],
        solution: [
          "(a) Feasible at all temperatures (ΔG always negative).",
          "(b) Not feasible at any temperature under standard conditions (ΔG always positive).",
          "(c) Feasible at low temperatures; may become non-feasible at high temperatures.",
          "(d) Non-feasible at low temperatures; becomes feasible at high temperatures.",
          "These conclusions follow directly from how the -TΔS term contributes to ΔG.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t23-4-st1",
        question:
          "State the Gibbs equation and the criterion for thermodynamic feasibility using sign of ΔG.",
        modelAnswer: [
          "Gibbs equation is ΔG° = ΔH° - TΔS°.",
          "A process is thermodynamically feasible under standard conditions when ΔG° is negative.",
        ],
      },
      {
        id: "t23-4-st2",
        question:
          "Why must temperature be in kelvin when using ΔG° = ΔH° - TΔS°?",
        modelAnswer: [
          "Because the thermodynamic equation is defined on an absolute temperature scale, so T must be in kelvin for physically valid and numerically consistent results.",
        ],
      },
      {
        id: "t23-4-st3",
        question:
          "A reaction has ΔH° = -20 kJ mol⁻¹ and ΔS° = +50 J K⁻¹ mol⁻¹. Without full calculation, state whether higher temperature makes it more or less feasible.",
        modelAnswer: [
          "Higher temperature makes it more feasible, because ΔS° is positive so the -TΔS° term becomes more negative as T increases.",
        ],
      },
      {
        id: "t23-4-st4",
        question:
          "For a reaction with ΔH° > 0 and ΔS° > 0, write the expression for the threshold temperature where ΔG° = 0.",
        modelAnswer: [
          "Set 0 = ΔH° - TΔS° so threshold temperature is T = ΔH°/ΔS° (with consistent units).",
        ],
      },
      {
        id: "t23-4-st5",
        question:
          "State one reason why a reaction with negative ΔG may still appear not to proceed quickly in the lab.",
        modelAnswer: [
          "Negative ΔG indicates thermodynamic feasibility, but the reaction can still be kinetically slow if activation energy is high.",
        ],
      },
    ],
  },
};
