import type { NoteDraft } from "./types";

/** Full teaching notes for 9701 Topic 2 — subtopics 2.1-2.4 (see lib/notes/AUTHORING.md). */
export const CHEMISTRY_TOPIC2_DRAFTS: Record<string, NoteDraft> = {
  "t2-1": {
    noteId: "t2-1",
    syllabusNotes: [
      {
        id: "unified-atomic-mass-unit",
        title: "The unified atomic mass unit and relative scales",
        paragraphs: [
          "Chemists need a practical mass scale for atoms and molecules because their actual masses are extremely small in kilograms. The unified atomic mass unit, symbol u, is defined as one twelfth of the mass of one carbon-12 atom in its ground state. This definition fixes a common reference point for all atomic and molecular mass measurements.",
          "Because u is defined from carbon-12, values such as relative atomic mass and relative molecular mass are ratios. Ratios compare a particle mass with 1/12 of a carbon-12 atom, so they are dimensionless numbers even though we often talk about them as 'mass values'.",
          "In data tables you may also see atomic mass in u for individual isotopes. Numerically, a relative isotopic mass is the same number as that isotope's mass expressed in u, but the wording matters: one is a ratio definition, the other is a mass on the atomic scale.",
        ],
      },
      {
        id: "relative-atomic-and-isotopic-mass",
        title: "Relative atomic mass and relative isotopic mass",
        paragraphs: [
          "Relative isotopic mass is the mass of one atom of a specific isotope compared with 1/12 of the mass of one carbon-12 atom. For example, chlorine-35 and chlorine-37 each have their own relative isotopic mass values.",
          "Relative atomic mass, Aᵣ, of an element is the weighted mean mass of an atom of the element compared with 1/12 of a carbon-12 atom. It is a weighted mean because natural elements are usually mixtures of isotopes present in different abundances.",
          "This is why many Aᵣ values are not whole numbers. Chlorine, for example, has Aᵣ about 35.5 because it contains both 35Cl and 37Cl. Examiners often test this idea in calculations from isotope abundance data and in interpreting mass spectra.",
        ],
      },
      {
        id: "relative-molecular-and-formula-mass",
        title: "Relative molecular mass and relative formula mass",
        paragraphs: [
          "Relative molecular mass, Mᵣ, is the average mass of one molecule compared with 1/12 of a carbon-12 atom. It is found by summing the relevant Aᵣ values using the molecular formula. For water, Mᵣ(H₂O) = 2 x Aᵣ(H) + Aᵣ(O).",
          "Relative formula mass is used where a substance does not exist as discrete molecules, especially ionic solids such as sodium chloride. You still add atomic relative masses according to the formula unit, so for NaCl the relative formula mass is Aᵣ(Na) + Aᵣ(Cl).",
          "In calculations, the same arithmetic idea is used for both molecular compounds and ionic compounds. The distinction is in language: molecules for covalent substances, formula units for ionic lattices.",
        ],
      },
      {
        id: "weighted-mean-method",
        title: "Weighted mean calculations from isotopic abundance",
        paragraphs: [
          "To calculate Aᵣ from isotopic data, multiply each isotopic mass by its fractional abundance, then add the products. If abundances are given as percentages, divide each percentage by 100 first or divide the final total by 100.",
          "The method can be written as Aᵣ = Σ(relative isotopic mass x fractional abundance). This makes clear that each isotope contributes in proportion to how much of it is present.",
          "Always quote a sensible number of significant figures based on the data in the question. Over-precise answers can lose marks even when the method is correct.",
        ],
      },
      {
        id: "language-and-exam-precision",
        title: "Exam language and precision with mass terms",
        paragraphs: [
          "Use mass terminology precisely. 'Mass number' counts nucleons in one isotope and is an integer. Relative atomic mass is a weighted average for an element sample and is often non-integer. These are not interchangeable terms.",
          "When questions ask for Aᵣ, Mᵣ or relative formula mass, include the symbol and show your summation steps. Clear structure helps examiners award method marks even if arithmetic slips occur later.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Marks in this section are usually lost through terminology errors or by forgetting that relative masses are weighted ratios, not simple whole-number counts.",
      items: [
        "Writing Aᵣ as a simple average of isotope mass numbers without weighting by abundance.",
        "Confusing mass number of an isotope with relative atomic mass of an element.",
        "Using Mᵣ language for ionic lattices where relative formula mass is the correct term.",
        "Rounding too early in isotope calculations and drifting outside sensible significant figures.",
        "Treating relative masses as having units when they are defined as ratios to 1/12 of carbon-12 mass.",
      ],
    },
    workedExamples: [
      {
        id: "t2-1-ex1",
        title: "Calculating relative atomic mass from isotope abundances",
        problem: [
          "Magnesium has three isotopes with the following data: 24Mg (78.99%), 25Mg (10.00%), 26Mg (11.01%). Calculate the relative atomic mass of magnesium to 3 significant figures.",
        ],
        solution: [
          "Use the weighted mean: Aᵣ = (24 x 78.99 + 25 x 10.00 + 26 x 11.01) / 100.",
          "Numerator = 1895.76 + 250.00 + 286.26 = 2432.02.",
          "Aᵣ = 2432.02 / 100 = 24.3202.",
          "To 3 significant figures, Aᵣ(Mg) = 24.3.",
        ],
      },
      {
        id: "t2-1-ex2",
        title: "Relative molecular mass from molecular formula",
        problem: [
          "Calculate the relative molecular mass of sulfuric acid, H₂SO₄, using Aᵣ values H = 1.0, S = 32.1, O = 16.0.",
        ],
        solution: [
          "Mᵣ(H₂SO₄) = 2 x Aᵣ(H) + Aᵣ(S) + 4 x Aᵣ(O).",
          "Mᵣ = 2 x 1.0 + 32.1 + 4 x 16.0 = 2.0 + 32.1 + 64.0 = 98.1.",
          "So the relative molecular mass of sulfuric acid is 98.1.",
        ],
      },
      {
        id: "t2-1-ex3",
        title: "Relative formula mass for an ionic compound",
        problem: [
          "Calculate the relative formula mass of calcium nitrate, Ca(NO₃)₂, given Aᵣ values Ca = 40.1, N = 14.0, O = 16.0.",
        ],
        solution: [
          "Because calcium nitrate is ionic, use relative formula mass based on formula units.",
          "Relative formula mass = Aᵣ(Ca) + 2 x [Aᵣ(N) + 3 x Aᵣ(O)].",
          "= 40.1 + 2 x (14.0 + 48.0) = 40.1 + 2 x 62.0 = 40.1 + 124.0 = 164.1.",
          "Relative formula mass of Ca(NO₃)₂ = 164.1.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t2-1-st1",
        question:
          "Define the unified atomic mass unit, u.",
        modelAnswer: [
          "The unified atomic mass unit, u, is defined as one twelfth of the mass of one carbon-12 atom.",
        ],
      },
      {
        id: "t2-1-st2",
        question:
          "State the difference between relative isotopic mass and relative atomic mass.",
        modelAnswer: [
          "Relative isotopic mass refers to one specific isotope and compares its mass with 1/12 of a carbon-12 atom. Relative atomic mass, Aᵣ, is the weighted mean mass of atoms of an element (accounting for isotopic abundances) on the same carbon-12 scale.",
        ],
      },
      {
        id: "t2-1-st3",
        question:
          "Explain why the Aᵣ value of chlorine is not an integer.",
        modelAnswer: [
          "Natural chlorine is a mixture of isotopes, mainly 35Cl and 37Cl. Aᵣ is a weighted average of isotope masses, so it is usually not a whole number.",
        ],
      },
      {
        id: "t2-1-st4",
        question:
          "Define relative molecular mass, Mᵣ.",
        modelAnswer: [
          "Relative molecular mass, Mᵣ, is the average mass of one molecule compared with one twelfth of the mass of one carbon-12 atom.",
        ],
      },
      {
        id: "t2-1-st5",
        question:
          "When is the term relative formula mass used instead of relative molecular mass?",
        modelAnswer: [
          "Relative formula mass is used for substances that do not consist of discrete molecules, especially ionic compounds with giant lattices, where the formula represents a formula unit rather than a molecule.",
        ],
      },
    ],
  },

  "t2-2": {
    noteId: "t2-2",
    syllabusNotes: [
      {
        id: "defining-the-mole",
        title: "The mole and amount of substance",
        paragraphs: [
          "The mole is the SI unit for amount of substance. One mole of any specified entities contains the same number of entities. Those entities can be atoms, molecules, ions, electrons or formula units, provided you state clearly which particles you mean.",
          "This fixed number of entities is the Avogadro constant, L (also widely written as Nᴀ), equal to 6.02 x 10²³ mol⁻¹ at this syllabus level. So one mole contains 6.02 x 10²³ entities.",
          "The central relationship is n = N / L, where n is amount in mol and N is number of particles. Rearranging gives N = nL. Most stoichiometry questions are built on this link between microscopic particles and measurable macroscopic amounts.",
        ],
      },
      {
        id: "molar-mass-link",
        title: "From relative mass to molar mass",
        paragraphs: [
          "Molar mass, M, is the mass of one mole of substance in g mol⁻¹. Numerically, molar mass equals the relevant relative mass value (Aᵣ, Mᵣ or relative formula mass) but with units g mol⁻¹.",
          "For example, O₂ has Mᵣ = 32.0, so molar mass M = 32.0 g mol⁻¹. NaCl has relative formula mass 58.5, so M = 58.5 g mol⁻¹ for sodium chloride.",
          "This leads to the mass-mole equation n = m / M, where m is mass in grams. Correct unit handling is essential: if mass is given in mg or kg, convert first.",
        ],
      },
      {
        id: "particle-counting",
        title: "Counting atoms, molecules, ions and electrons",
        paragraphs: [
          "A frequent exam skill is switching particle types correctly. One mole of NaCl contains one mole of Na+ ions and one mole of Cl- ions because each formula unit has one of each ion.",
          "One mole of H₂O contains one mole of molecules, but two moles of hydrogen atoms and one mole of oxygen atoms. Particle accounting always follows the formula ratio.",
          "In redox contexts, one mole of electrons means 6.02 x 10²³ electrons. Keep track of what is being counted, because marks are lost when candidates quote the right number with the wrong entity.",
        ],
      },
      {
        id: "practical-accuracy",
        title: "Practical use in calculations",
        paragraphs: [
          "In calculation chains, move stepwise: mass -> moles -> particle ratio from equation -> moles of target -> required quantity. This structure is robust and reduces avoidable mistakes.",
          "Round only at the end unless instructed otherwise. Carry guard digits in intermediate steps so final answers match significant figure expectations from the question data.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Mole questions are method-heavy. Examiners usually award clear stepwise reasoning, but they penalise particle-type confusion and unit slips.",
      items: [
        "Using n = m/M with mass still in mg or kg without converting to g.",
        "Stating 'one mole = 6.02 x 10²³ g' instead of 6.02 x 10²³ entities.",
        "Mixing up molecules, atoms, ions and formula units when converting particle counts.",
        "Forgetting to include units (mol, g mol⁻¹) so a correct number becomes ambiguous.",
        "Rounding intermediate values too aggressively and drifting to a wrong final answer.",
      ],
    },
    workedExamples: [
      {
        id: "t2-2-ex1",
        title: "Moles from mass and molar mass",
        problem: [
          "Calculate the amount, in moles, of 4.90 g of H₂SO₄. Use H = 1.0, S = 32.1, O = 16.0.",
        ],
        solution: [
          "First find molar mass: M(H₂SO₄) = 2 x 1.0 + 32.1 + 4 x 16.0 = 98.1 g mol⁻¹.",
          "Use n = m / M = 4.90 / 98.1 = 0.0499 mol (3 s.f.).",
          "Amount of H₂SO₄ = 4.99 x 10⁻² mol.",
        ],
      },
      {
        id: "t2-2-ex2",
        title: "Number of molecules and atoms",
        problem: [
          "A sample contains 0.250 mol of carbon dioxide, CO₂. Find (a) the number of CO₂ molecules and (b) the number of oxygen atoms.",
        ],
        solution: [
          "Use N = nL with L = 6.02 x 10²³ mol⁻¹.",
          "(a) Number of molecules = 0.250 x 6.02 x 10²³ = 1.51 x 10²³ molecules.",
          "(b) Each CO₂ molecule has 2 oxygen atoms, so oxygen atoms = 2 x 1.51 x 10²³ = 3.01 x 10²³ atoms.",
        ],
      },
      {
        id: "t2-2-ex3",
        title: "Entities in ionic compounds",
        problem: [
          "How many chloride ions are present in 0.0400 mol of CaCl₂?",
        ],
        solution: [
          "Each formula unit of CaCl₂ contains 2 chloride ions.",
          "Moles of chloride ions = 2 x 0.0400 = 0.0800 mol.",
          "Number of chloride ions = 0.0800 x 6.02 x 10²³ = 4.82 x 10²² ions.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t2-2-st1",
        question:
          "Define the mole in terms of the Avogadro constant.",
        modelAnswer: [
          "One mole is the amount of substance that contains Avogadro's number of specified entities, that is 6.02 x 10²³ entities.",
        ],
      },
      {
        id: "t2-2-st2",
        question:
          "Write equations linking amount of substance n, number of entities N and Avogadro constant L.",
        modelAnswer: [
          "n = N / L and rearranged N = nL.",
        ],
      },
      {
        id: "t2-2-st3",
        question:
          "Find the number of molecules in 0.0100 mol of NH₃.",
        modelAnswer: [
          "N = nL = 0.0100 x 6.02 x 10²³ = 6.02 x 10²¹ molecules.",
        ],
      },
      {
        id: "t2-2-st4",
        question:
          "How many moles of oxygen atoms are present in 0.300 mol of O₂?",
        modelAnswer: [
          "Each O₂ molecule has 2 oxygen atoms, so moles of oxygen atoms = 2 x 0.300 = 0.600 mol.",
        ],
      },
      {
        id: "t2-2-st5",
        question:
          "State the molar mass of Na₂CO₃ using Na = 23.0, C = 12.0, O = 16.0.",
        modelAnswer: [
          "M(Na₂CO₃) = 2 x 23.0 + 12.0 + 3 x 16.0 = 106.0 g mol⁻¹.",
        ],
      },
    ],
  },

  "t2-3": {
    noteId: "t2-3",
    syllabusNotes: [
      {
        id: "ionic-formulas-and-charges",
        title: "Writing ionic formulas from charge and oxidation number",
        paragraphs: [
          "An ionic formula must be electrically neutral overall. Write the cation and anion with their charges, then choose the smallest whole-number ratio that makes total positive and negative charge equal.",
          "Roman numerals in names indicate oxidation number when a metal has variable ionic charge, for example iron(II) and iron(III). Iron(II) sulfate is FeSO₄, while iron(III) sulfate is Fe₂(SO₄)₃.",
          "You can often predict simple ionic charges from Periodic Table positions: Group 1 tends to +1, Group 2 to +2, Group 17 to -1, Group 16 to -2, Group 15 to -3 for simple monatomic ions. Transition metals and polyatomic ions must be handled by stated charge or known ion formula.",
        ],
      },
      {
        id: "required-ions",
        title: "Required ion names and formulas for this topic",
        paragraphs: [
          "You must recall the following ions accurately because they are used repeatedly in formula writing, equation writing and salt chemistry:",
        ],
        bullets: [
          "Nitrate, NO₃-",
          "Carbonate, CO₃²-",
          "Sulfate, SO₄²-",
          "Hydroxide, OH-",
          "Ammonium, NH₄+",
          "Zinc, Zn²+",
          "Silver, Ag+",
          "Hydrogencarbonate, HCO₃-",
          "Phosphate, PO₄³-",
        ],
      },
      {
        id: "balanced-equations-and-state-symbols",
        title: "Balanced equations, ionic equations and state symbols",
        paragraphs: [
          "A balanced equation conserves atoms and charge. Balance by adjusting coefficients, never by changing subscripts in formulas.",
          "In ionic equations, spectator ions are omitted so only species that change appear. For neutralisation, H+(aq) + OH-(aq) -> H₂O(l) is the key ionic equation.",
          "Use state symbols carefully: (s), (l), (g), (aq). They are assessed because they communicate physical state and often whether ions are free in solution.",
        ],
      },
      {
        id: "empirical-vs-molecular",
        title: "Empirical and molecular formulas",
        paragraphs: [
          "Empirical formula is the simplest whole-number ratio of atoms of each element in a compound. Molecular formula shows the actual number of each type of atom in one molecule.",
          "To find empirical formula from composition data, convert each element amount to moles, divide by the smallest value, then scale to whole numbers if needed.",
          "Molecular formula is an integer multiple of the empirical formula. Use molecular mass data: factor = Mᵣ(actual) / Mᵣ(empirical unit). Multiply all empirical subscripts by this factor.",
        ],
      },
      {
        id: "hydration-terminology",
        title: "Anhydrous, hydrated and water of crystallisation",
        paragraphs: [
          "Anhydrous means containing no water of crystallisation. Hydrated means water molecules are present in a fixed ratio within the crystal structure.",
          "Water of crystallisation is the specific number of water molecules per formula unit in a hydrated salt, written with dot notation, for example CuSO₄·5H₂O.",
          "In formula calculations, include both the salt and water parts when hydrated mass data are used. Ignoring water is a common cause of wrong answers.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "This section rewards precision in symbols and logical stoichiometric setup. Small notation mistakes can make an otherwise correct method invalid.",
      items: [
        "Changing subscripts to balance equations instead of adjusting coefficients.",
        "Including spectator ions in an ionic equation when asked for net ionic form.",
        "Missing brackets in ionic formulas such as Ca(NO₃)₂ or Al₂(SO₄)₃.",
        "Using incorrect ion charges, especially for polyatomic ions and variable oxidation state metals.",
        "Stopping empirical-formula ratios at decimals (for example 1 : 1.5) instead of scaling to whole numbers.",
        "Forgetting to include water of crystallisation in hydrated salt formula calculations.",
      ],
    },
    workedExamples: [
      {
        id: "t2-3-ex1",
        title: "Formula from oxidation number and polyatomic ion",
        problem: [
          "Write the formula of copper(II) phosphate.",
        ],
        solution: [
          "Copper(II) means Cu²+. Phosphate is PO₄³-.",
          "Find smallest ratio giving zero net charge: 3 x (+2) = +6 and 2 x (-3) = -6.",
          "Formula is Cu₃(PO₄)₂.",
        ],
      },
      {
        id: "t2-3-ex2",
        title: "Balanced and ionic equation with state symbols",
        problem: [
          "Write (a) the balanced equation and (b) the ionic equation for reaction of aqueous barium chloride with aqueous sodium sulfate.",
        ],
        solution: [
          "(a) Balanced equation with states: BaCl₂(aq) + Na₂SO₄(aq) -> BaSO₄(s) + 2NaCl(aq).",
          "BaSO₄ is insoluble, so it forms a precipitate.",
          "(b) Remove spectator ions Na+ and Cl- to give net ionic equation: Ba²+(aq) + SO₄²-(aq) -> BaSO₄(s).",
        ],
      },
      {
        id: "t2-3-ex3",
        title: "Empirical and molecular formula from composition",
        problem: [
          "A compound contains 40.0% carbon, 6.7% hydrogen and 53.3% oxygen by mass. Its Mᵣ is 180. Determine (a) empirical formula and (b) molecular formula.",
        ],
        solution: [
          "Assume 100 g sample: C = 40.0 g, H = 6.7 g, O = 53.3 g.",
          "Convert to moles: C = 40.0/12.0 = 3.33, H = 6.7/1.0 = 6.7, O = 53.3/16.0 = 3.33.",
          "Divide by smallest (3.33): C : H : O = 1 : 2.01 : 1 ~ 1 : 2 : 1.",
          "Empirical formula = CH₂O.",
          "Empirical formula mass = 12 + 2 + 16 = 30.",
          "Factor = 180/30 = 6, so molecular formula = C₆H₁₂O₆.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t2-3-st1",
        question:
          "Write formulas for (a) iron(III) nitrate and (b) ammonium sulfate.",
        modelAnswer: [
          "(a) Fe(NO₃)₃ because Fe³+ combines with three NO₃-.",
          "(b) (NH₄)₂SO₄ because two NH₄+ are needed to balance SO₄²-.",
        ],
      },
      {
        id: "t2-3-st2",
        question:
          "Give the formula and charge of hydrogencarbonate and phosphate ions.",
        modelAnswer: [
          "Hydrogencarbonate is HCO₃-.",
          "Phosphate is PO₄³-.",
        ],
      },
      {
        id: "t2-3-st3",
        question:
          "Write the net ionic equation for the reaction between hydrochloric acid and sodium hydroxide.",
        modelAnswer: [
          "H+(aq) + OH-(aq) -> H₂O(l).",
        ],
      },
      {
        id: "t2-3-st4",
        question:
          "Define empirical formula and molecular formula.",
        modelAnswer: [
          "Empirical formula is the simplest whole-number ratio of atoms of each element in a compound.",
          "Molecular formula is the actual number of atoms of each element in one molecule of the compound.",
        ],
      },
      {
        id: "t2-3-st5",
        question:
          "State what is meant by anhydrous and hydrated, and give one formula example of a hydrated compound.",
        modelAnswer: [
          "Anhydrous means no water of crystallisation is present. Hydrated means water of crystallisation is present in fixed ratio in the crystal.",
          "Example: copper(II) sulfate pentahydrate, CuSO₄·5H₂O.",
        ],
      },
    ],
  },

  "t2-4": {
    noteId: "t2-4",
    syllabusNotes: [
      {
        id: "stoichiometric-method",
        title: "Core stoichiometric method from equations",
        paragraphs: [
          "Stoichiometry links measured quantities to chemical equations. The reliable method is: write a balanced equation, convert known quantity to moles, use mole ratio from coefficients, then convert moles of target to requested units.",
          "This method underpins reacting mass, gas volume, solution concentration, limiting reagent and yield problems. Keeping the structure explicit prevents most errors.",
          "Always include units and sensible significant figures in final answers. This syllabus expects answers to reflect the data precision provided.",
        ],
      },
      {
        id: "reacting-masses-yield",
        title: "Reacting masses and percentage yield",
        paragraphs: [
          "For reacting masses, use n = m/M at the start or end of a stoichiometric chain. The balanced equation provides the mole relationship between reactants and products.",
          "Theoretical yield is the maximum product predicted from complete reaction of the limiting reagent. Percentage yield compares actual with theoretical yield:",
          "percentage yield = (actual yield / theoretical yield) x 100%.",
          "A yield below 100% can result from incomplete reaction, side reactions, losses during transfer or purification, and measurement uncertainty.",
        ],
      },
      {
        id: "gas-volumes",
        title: "Gas volume calculations",
        paragraphs: [
          "At room conditions, many questions use molar gas volume values given in the stem (for example 24.0 dm³ mol⁻¹ at r.t.p.). If no value is given, use the one expected by the specific question context.",
          "Convert gas volume to moles with n = V / molar gas volume, keeping units consistent (dm³ with dm³ mol⁻¹, or cm³ converted to dm³).",
          "Gas stoichiometry in combustion problems follows the same coefficient ratios as any other equation once moles are found.",
        ],
      },
      {
        id: "solutions-concentration",
        title: "Solutions: concentration, volume and moles",
        paragraphs: [
          "For aqueous solutions, c = n / V where c is concentration in mol dm⁻³ and V is volume in dm³. Rearranged, n = cV.",
          "Convert cm³ to dm³ by dividing by 1000 before using n = cV. This is a frequent source of one-thousand-fold errors.",
          "Titration and neutralisation calculations use the same approach: find moles from one solution, use equation ratio, then solve for unknown concentration or volume.",
        ],
      },
      {
        id: "limiting-and-excess",
        title: "Limiting reagent, excess reagent and deduced stoichiometry",
        paragraphs: [
          "When reactants are mixed in non-stoichiometric amounts, the limiting reagent is used up first and determines maximum product. Excess reagent remains after completion.",
          "Identify the limiting reagent by comparing available moles against required ratio from the balanced equation, not by comparing raw masses directly.",
          "You can also deduce stoichiometric relationships from calculation data. For example, if known amounts consistently react in a fixed mole ratio, that ratio can reveal unknown formula details or confirm equation coefficients.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Stoichiometry questions are usually straightforward for candidates who keep units and mole ratios explicit. Most lost marks come from shortcuts and skipped setup.",
      items: [
        "Using equation coefficients as mass ratios rather than mole ratios.",
        "Forgetting to convert cm³ to dm³ before using n = cV.",
        "Choosing limiting reagent by largest mass instead of comparing moles against stoichiometric need.",
        "Calculating percentage yield with theoretical and actual values reversed.",
        "Applying wrong molar gas volume or mixing cm³ and dm³ units in one step.",
        "Ignoring significant-figure requirements stated in the question.",
      ],
    },
    workedExamples: [
      {
        id: "t2-4-ex1",
        title: "Reacting mass and percentage yield",
        problem: [
          "Calcium carbonate decomposes on heating: CaCO₃(s) -> CaO(s) + CO₂(g).",
          "A student heats 25.0 g of CaCO₃ and obtains 12.0 g of CaO. Calculate (a) the theoretical mass of CaO and (b) the percentage yield.",
          "Use Ca = 40.1, C = 12.0, O = 16.0.",
        ],
        solution: [
          "M(CaCO₃) = 40.1 + 12.0 + 48.0 = 100.1 g mol⁻¹.",
          "M(CaO) = 40.1 + 16.0 = 56.1 g mol⁻¹.",
          "Moles of CaCO₃ = 25.0 / 100.1 = 0.2498 mol.",
          "Equation ratio CaCO₃ : CaO is 1 : 1, so theoretical moles of CaO = 0.2498 mol.",
          "Theoretical mass of CaO = 0.2498 x 56.1 = 14.0 g (3 s.f.).",
          "Percentage yield = (actual / theoretical) x 100 = (12.0 / 14.0) x 100 = 85.7%.",
        ],
      },
      {
        id: "t2-4-ex2",
        title: "Volume of gas from combustion stoichiometry",
        problem: [
          "Propane burns completely: C₃H₈ + 5O₂ -> 3CO₂ + 4H₂O.",
          "What volume of O₂ at r.t.p. is needed to burn 2.00 dm³ of propane completely? Assume all gas volumes measured at same conditions.",
        ],
        solution: [
          "At the same temperature and pressure, gas volume ratios follow mole ratios.",
          "From equation: 1 volume of C₃H₈ reacts with 5 volumes of O₂.",
          "For 2.00 dm³ propane, required O₂ volume = 5 x 2.00 = 10.0 dm³.",
        ],
      },
      {
        id: "t2-4-ex3",
        title: "Limiting reagent with solution concentration",
        problem: [
          "Hydrochloric acid reacts with sodium carbonate:",
          "Na₂CO₃ + 2HCl -> 2NaCl + H₂O + CO₂.",
          "50.0 cm³ of 1.00 mol dm⁻³ HCl is mixed with 2.65 g of Na₂CO₃ (M = 106.0 g mol⁻¹). Determine (a) the limiting reagent and (b) the moles of CO₂ formed.",
        ],
        solution: [
          "Moles of HCl = cV = 1.00 x 0.0500 = 0.0500 mol.",
          "Moles of Na₂CO₃ = 2.65 / 106.0 = 0.0250 mol.",
          "Equation needs 2 mol HCl per 1 mol Na₂CO₃. For 0.0250 mol Na₂CO₃, required HCl = 0.0500 mol.",
          "Available HCl is exactly 0.0500 mol, so reactants are in exact stoichiometric proportion; neither is in excess.",
          "Moles of CO₂ formed equal moles of Na₂CO₃ reacted (1:1) = 0.0250 mol.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t2-4-st1",
        question:
          "State the formula for percentage yield.",
        modelAnswer: [
          "percentage yield = (actual yield / theoretical yield) x 100%.",
        ],
      },
      {
        id: "t2-4-st2",
        question:
          "A solution has concentration 0.200 mol dm⁻³. How many moles are present in 25.0 cm³?",
        modelAnswer: [
          "Convert volume: 25.0 cm³ = 0.0250 dm³.",
          "n = cV = 0.200 x 0.0250 = 0.00500 mol.",
        ],
      },
      {
        id: "t2-4-st3",
        question:
          "What is meant by a limiting reagent?",
        modelAnswer: [
          "The limiting reagent is the reactant that is completely used up first and therefore determines the maximum amount of product that can form.",
        ],
      },
      {
        id: "t2-4-st4",
        question:
          "At r.t.p., 24.0 dm³ of gas is 1.00 mol. How many moles are in 120 cm³ of this gas?",
        modelAnswer: [
          "120 cm³ = 0.120 dm³.",
          "n = V / 24.0 = 0.120 / 24.0 = 0.00500 mol.",
        ],
      },
      {
        id: "t2-4-st5",
        question:
          "Explain briefly how stoichiometric relationships can be deduced from calculation data.",
        modelAnswer: [
          "Convert measured quantities to moles, compare the reacting mole amounts, and simplify to the smallest whole-number ratio. That ratio reveals the stoichiometric relationship between substances and can be used to infer equation coefficients or formula relationships.",
        ],
      },
    ],
  },
};
