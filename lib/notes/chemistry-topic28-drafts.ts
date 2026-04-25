import type { NoteDraft } from "./types";

/** Full teaching notes for 9701 Topic 28 — subtopics 28.1-28.5 (see lib/notes/AUTHORING.md). */
export const CHEMISTRY_TOPIC28_DRAFTS: Record<string, NoteDraft> = {
  "t28-1": {
    noteId: "t28-1",
    syllabusNotes: [
      {
        id: "transition-element-definition-and-3d-orbitals",
        title: "What counts as a transition element and why 3d orbitals matter",
        paragraphs: [
          "In this syllabus, a transition element is a d-block element that forms at least one stable ion with an incomplete d sub-shell. This definition excludes species where all common ions have full d orbitals.",
          "The first-row transition series considered here runs from titanium to copper. Their chemistry is dominated by 3d orbitals that are close in energy to 4s orbitals, so electrons can be lost or involved in bonding in several closely spaced ways.",
          "You should be able to sketch key orbital shapes: a 3dxy orbital has four lobes in the xy plane between axes, while a 3dz² orbital has two lobes along the z-axis with a torus-like ring around the center in the xy plane.",
        ],
      },
      {
        id: "variable-oxidation-states-energy-explanation",
        title: "Variable oxidation states from similar 3d and 4s energies",
        paragraphs: [
          "First-row transition elements commonly show more than one oxidation state because the 3d and 4s sub-shells are similar in energy. Removing or redistributing electrons from either sub-shell can therefore be energetically feasible.",
          "Because several oxidation states are stable, transition-metal ions can undergo redox change without extreme conditions. This is central to their chemistry in inorganic reactions and in catalytic cycles.",
          "When writing oxidation-state arguments, do not treat 3d and 4s as having identical energy in all environments; instead, state that their energies are close enough to allow multiple stable oxidation states.",
        ],
      },
      {
        id: "catalysis-by-transition-elements",
        title: "Why transition elements are effective catalysts",
        paragraphs: [
          "Transition elements and their compounds often behave as catalysts because they can cycle between oxidation states during a mechanism, temporarily accepting and donating electrons.",
          "They also have energetically accessible vacant d orbitals that can accept lone pairs from reactants to form weak intermediate complexes or adsorbed species. These interactions can lower activation energy by providing an alternative pathway.",
          "In heterogeneous catalysis this may involve adsorption at a metal surface; in homogeneous catalysis it often involves soluble transition-metal complexes that are reformed at the end of a catalytic cycle.",
        ],
      },
      {
        id: "complex-ion-formation-overview",
        title: "Why transition elements form complex ions and coloured compounds",
        paragraphs: [
          "Transition-metal ions form complex ions because ligands can donate lone pairs into vacant orbitals on the metal center, forming coordinate (dative covalent) bonds.",
          "Because d orbitals are involved, many complexes absorb visible light to promote electrons between non-degenerate d-energy levels, so many transition-metal compounds are coloured.",
          "These linked properties, variable oxidation state, catalysis, complex formation, and colour, are characteristic signatures of first-row transition-element chemistry.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Questions on transition-element basics reward precise definitions and electronic-structure reasoning. Examiners usually penalise vague statements like 'transition metals are reactive' without linking to d-orbital ideas.",
      items: [
        "Defining a transition element as any d-block element, without the required condition of forming a stable ion with incomplete d orbitals.",
        "Stating variable oxidation states without explaining the close energies of 3d and 4s sub-shells.",
        "Explaining catalysis only as 'faster reaction' and omitting oxidation-state cycling or vacant d-orbital bonding with reactants.",
        "Confusing coordinate bonding in complexes with ionic attraction, rather than lone-pair donation to the metal center.",
        "Giving colour explanations in terms of emitted light, instead of absorbed visible light and electronic promotion between split d levels.",
      ],
    },
    workedExamples: [
      {
        id: "t28-1-ex1",
        title: "Applying the syllabus definition of a transition element",
        problem: [
          "A student writes: 'Any d-block element is a transition element.' Improve this statement so it matches the syllabus definition.",
        ],
        solution: [
          "The statement is incomplete because the syllabus uses an ion-based criterion.",
          "A correct definition is: a transition element is a d-block element that forms one or more stable ions with an incomplete d sub-shell.",
          "This wording explains why position in the d-block alone is not enough for classification.",
        ],
      },
      {
        id: "t28-1-ex2",
        title: "Explaining variable oxidation states clearly",
        problem: [
          "Explain in two linked points why titanium to copper commonly show variable oxidation states.",
        ],
        solution: [
          "First, the 3d and 4s sub-shells are close in energy, so different numbers of electrons can be removed or involved in bonding with relatively small energy differences.",
          "Second, this allows several ionic electron arrangements to be stable, giving multiple observable oxidation states in compounds.",
          "Top-band answers make both points: energetic closeness and resulting stability of more than one oxidation state.",
        ],
      },
      {
        id: "t28-1-ex3",
        title: "Linking catalysis and complex formation",
        problem: [
          "State why transition elements are often good catalysts and also good complex-formers, and identify the shared electronic feature.",
        ],
        solution: [
          "For catalysis, they can change oxidation state during a reaction and can form temporary bonds to reactants, lowering activation energy.",
          "For complex formation, ligands donate lone pairs into vacant, accessible orbitals on the metal ion to form coordinate bonds.",
          "The shared feature is the availability of d orbitals (including vacant, energetically accessible orbitals) and multiple stable oxidation states.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t28-1-st1",
        question: "Define a transition element exactly as required by this syllabus.",
        modelAnswer: [
          "A transition element is a d-block element that forms one or more stable ions with incomplete d orbitals.",
        ],
      },
      {
        id: "t28-1-st2",
        question: "Describe the shapes of the 3dxy and 3dz² orbitals.",
        modelAnswer: [
          "A 3dxy orbital has four lobes in the xy plane positioned between the x and y axes.",
          "A 3dz² orbital has two lobes along the z-axis and a ring (torus) around the center in the xy plane.",
        ],
      },
      {
        id: "t28-1-st3",
        question:
          "List four general properties expected for first-row transition elements from titanium to copper.",
        modelAnswer: [
          "They commonly show variable oxidation states.",
          "They often behave as catalysts.",
          "They form complex ions with ligands.",
          "They form coloured compounds.",
        ],
      },
      {
        id: "t28-1-st4",
        question:
          "Why do first-row transition elements show variable oxidation states? Give the electronic argument.",
        modelAnswer: [
          "The 3d and 4s sub-shells are similar in energy, so different numbers of electrons can be removed or shared in bonding, allowing several stable oxidation states.",
        ],
      },
      {
        id: "t28-1-st5",
        question:
          "Explain briefly why transition elements can act as catalysts and form complex ions.",
        modelAnswer: [
          "They can cycle between stable oxidation states and have energetically accessible vacant d orbitals.",
          "These orbitals allow lone-pair donation from reactants or ligands to form temporary or permanent coordinate bonds.",
        ],
      },
    ],
  },

  "t28-2": {
    noteId: "t28-2",
    syllabusNotes: [
      {
        id: "ligands-and-complexes-definitions",
        title: "Ligands, complexes, denticity, and coordination number",
        paragraphs: [
          "A ligand is a species with at least one lone pair that forms a coordinate bond to a central metal atom or ion. A complex is the resulting molecule or ion containing the central metal with one or more attached ligands.",
          "Monodentate ligands bond through one donor atom, for example H₂O, NH₃, Cl⁻, and CN⁻. Bidentate ligands bond through two donor atoms, for example 1,2-diaminoethane (en, H₂NCH₂CH₂NH₂) and ethanedioate, C₂O₄²⁻. A polydentate ligand such as EDTA⁴⁻ can bond through several donor atoms.",
          "Coordination number is the number of coordinate bonds formed to the metal center. It helps determine geometry and therefore the formula and charge of a complex ion.",
        ],
      },
      {
        id: "geometries-formula-charge-prediction",
        title: "Geometry, coordination number, and predicting formula or charge",
        paragraphs: [
          "Common geometries include linear (coordination number 2), square planar (4), tetrahedral (4), and octahedral (6). Geometry and ligand count together allow formula construction.",
          "To predict charge, combine metal oxidation state with total ligand charge. For example, [Cu(H₂O)₆]²⁺ is +2 because water is neutral, while [CuCl₄]²⁻ is -2 because four chloride ligands contribute -4 overall around Cu²⁺.",
          "Questions may give any subset of oxidation state, ligand type, and geometry. Build systematically: find coordination number from geometry, place ligands, then sum charges.",
        ],
      },
      {
        id: "characteristic-reactions-copper-cobalt",
        title: "Characteristic reactions of Cu²⁺ and Co²⁺ with ligands",
        paragraphs: [
          "In aqueous solution, Cu²⁺ is typically present as [Cu(H₂O)₆]²⁺. Adding NH₃(aq) first gives a pale blue precipitate from deprotonation chemistry, then in excess NH₃ ligand exchange forms deep-blue [Cu(NH₃)₄(H₂O)₂]²⁺.",
          "Adding OH⁻ to copper(II) aqua ions gives Cu(OH)₂(s), often seen as a pale blue precipitate. Adding concentrated Cl⁻ can shift equilibrium toward chloride-rich complexes such as [CuCl₄]²⁻ with a color change.",
          "For cobalt(II), [Co(H₂O)₆]²⁺ can undergo ligand exchange with Cl⁻ to form [CoCl₄]²⁻ under chloride-rich conditions, and with NH₃ under suitable conditions to form ammine complexes. These are standard examples of ligand-exchange chemistry.",
        ],
      },
      {
        id: "ligand-exchange-equilibria",
        title: "Ligand exchange as an equilibrium process",
        paragraphs: [
          "Ligand exchange means one ligand set around a metal center is replaced by another. This is usually an equilibrium process controlled by ligand concentration, temperature, and relative complex stability.",
          "Adding a large excess of a competing ligand can drive the equilibrium toward a new complex. Reversing conditions can shift the equilibrium back, so many observed color changes are reversible.",
          "When writing equations, keep coordination numbers and charges balanced. In exam explanations, link observed change explicitly to equilibrium shift and formation of a different complex ion.",
        ],
      },
      {
        id: "redox-feasibility-and-core-systems",
        title: "Redox feasibility using E° values and key transition-element systems",
        paragraphs: [
          "Use E° values to test feasibility: if E°cell is positive for the reaction as written, the redox process is feasible under standard conditions. Construct E°cell from appropriate half-equations.",
          "Core systems include MnO₄⁻ with C₂O₄²⁻ in acid, MnO₄⁻ with Fe²⁺ in acid, and Cu²⁺ with I⁻. Balanced half-equations and electron accounting are essential before any stoichiometric calculation.",
          "You should also be able to perform calculations in unfamiliar redox systems from given data by combining stoichiometry with mole relationships from the balanced ionic equations.",
        ],
      },
      {
        id: "required-redox-equations-and-calculation-style",
        title: "Representative equations and calculation approach",
        paragraphs: [
          "Acidified manganate(VII) with iron(II): MnO₄⁻ + 8H⁺ + 5Fe²⁺ → Mn²⁺ + 4H₂O + 5Fe³⁺.",
          "Acidified manganate(VII) with ethanedioate: 2MnO₄⁻ + 16H⁺ + 5C₂O₄²⁻ → 2Mn²⁺ + 8H₂O + 10CO₂.",
          "Copper(II) with iodide: 2Cu²⁺ + 4I⁻ → 2CuI(s) + I₂. Calculation method is always moles from data, mole ratio from equation, then unknown quantity from stoichiometry.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "This subtopic combines definitions, coordination chemistry, and redox stoichiometry. Marks are often lost by mixing up ligand type with complex charge, or by balancing redox equations without electrons and H⁺/H₂O correctly.",
      items: [
        "Defining a ligand as 'any ion near a metal' instead of a lone-pair donor that forms a coordinate bond.",
        "Confusing coordination number with oxidation state of the metal center.",
        "Predicting complex charge from ligand count only and forgetting ligand charge values.",
        "Treating ligand exchange as complete replacement in all conditions instead of an equilibrium dependent on concentrations.",
        "Using MnO₄⁻ redox equations without acidic conditions and therefore writing incorrect H⁺ or H₂O balancing.",
        "Attempting Cu²⁺/I⁻ stoichiometry without including CuI precipitate formation in the ionic equation.",
      ],
    },
    workedExamples: [
      {
        id: "t28-2-ex1",
        title: "Predicting formula and charge from geometry and ligands",
        problem: [
          "A cobalt complex is octahedral with two NH₃ ligands and four Cl⁻ ligands around Co(III). Write its formula and overall charge.",
        ],
        solution: [
          "Octahedral means coordination number 6, matching 2 + 4 ligands.",
          "Co(III) contributes +3. NH₃ ligands are neutral, while four chloride ligands contribute -4 total.",
          "Overall charge is +3 + 0 - 4 = -1, so the complex ion is [Co(NH₃)₂Cl₄]⁻.",
        ],
      },
      {
        id: "t28-2-ex2",
        title: "Using Fe²⁺/MnO₄⁻ stoichiometry in acid",
        problem: [
          "25.0 cm³ of Fe²⁺ solution requires 20.0 cm³ of 0.0200 mol dm⁻³ acidified MnO₄⁻ for complete reaction. Calculate the concentration of Fe²⁺.",
        ],
        solution: [
          "Moles of MnO₄⁻ used = 0.0200 × 20.0/1000 = 4.00 × 10⁻4 mol.",
          "From MnO₄⁻ + 8H⁺ + 5Fe²⁺ → Mn²⁺ + 4H₂O + 5Fe³⁺, mole ratio Fe²⁺ : MnO₄⁻ is 5 : 1.",
          "Moles of Fe²⁺ in 25.0 cm³ sample = 5 × 4.00 × 10⁻4 = 2.00 × 10⁻3 mol.",
          "Concentration of Fe²⁺ = 2.00 × 10⁻3 / 0.0250 = 0.0800 mol dm⁻³.",
        ],
      },
      {
        id: "t28-2-ex3",
        title: "Cu²⁺ with iodide: redox and stoichiometry",
        problem: [
          "Excess KI is added to 50.0 cm³ of 0.100 mol dm⁻³ Cu²⁺ solution. Calculate moles of I₂ formed.",
        ],
        solution: [
          "Moles of Cu²⁺ initially = 0.100 × 50.0/1000 = 5.00 × 10⁻3 mol.",
          "Use ionic equation: 2Cu²⁺ + 4I⁻ → 2CuI + I₂.",
          "2 moles Cu²⁺ produce 1 mole I₂, so moles I₂ = (5.00 × 10⁻3) / 2 = 2.50 × 10⁻3 mol.",
          "Iodide is in excess, so Cu²⁺ is the limiting species and this value is final.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t28-2-st1",
        question:
          "Define (a) ligand, (b) monodentate ligand, (c) bidentate ligand, and (d) polydentate ligand with one example each.",
        modelAnswer: [
          "A ligand is a species with a lone pair that forms a coordinate bond to a central metal atom/ion.",
          "A monodentate ligand forms one coordinate bond (for example H₂O or NH₃).",
          "A bidentate ligand forms two coordinate bonds (for example en or C₂O₄²⁻).",
          "A polydentate ligand forms several coordinate bonds (for example EDTA⁴⁻).",
        ],
      },
      {
        id: "t28-2-st2",
        question:
          "State what is meant by coordination number and list typical geometries for coordination numbers 2, 4, and 6.",
        modelAnswer: [
          "Coordination number is the number of coordinate bonds from ligands to the central metal.",
          "Coordination number 2 is often linear.",
          "Coordination number 4 can be tetrahedral or square planar.",
          "Coordination number 6 is typically octahedral.",
        ],
      },
      {
        id: "t28-2-st3",
        question:
          "Write balanced ionic equations for acidified MnO₄⁻ with (i) Fe²⁺ and (ii) C₂O₄²⁻.",
        modelAnswer: [
          "MnO₄⁻ + 8H⁺ + 5Fe²⁺ → Mn²⁺ + 4H₂O + 5Fe³⁺.",
          "2MnO₄⁻ + 16H⁺ + 5C₂O₄²⁻ → 2Mn²⁺ + 8H₂O + 10CO₂.",
        ],
      },
      {
        id: "t28-2-st4",
        question:
          "Explain qualitatively why adding excess chloride ions can change the colour of hydrated Cu²⁺ or Co²⁺ solutions.",
        modelAnswer: [
          "Excess Cl⁻ drives ligand-exchange equilibrium toward chloride-containing complexes.",
          "The new complexes have different ligand fields and therefore absorb different visible-light frequencies, so observed colour changes.",
        ],
      },
      {
        id: "t28-2-st5",
        question:
          "How do you use E° values to decide if a redox reaction involving transition-metal ions is feasible under standard conditions?",
        modelAnswer: [
          "Write relevant half-equations, identify cathode and anode, and compute E°cell = E°(cathode) - E°(anode) using reduction potentials.",
          "If E°cell is positive, the reaction as written is feasible under standard conditions.",
        ],
      },
    ],
  },

  "t28-3": {
    noteId: "t28-3",
    syllabusNotes: [
      {
        id: "degenerate-and-non-degenerate-d-orbitals",
        title: "Degenerate vs non-degenerate d orbitals",
        paragraphs: [
          "Degenerate orbitals have equal energy. In an isolated gaseous metal ion, the five d orbitals are degenerate.",
          "When ligands approach the metal center in a complex, electrostatic interactions split these d orbitals into groups with different energies. They are then non-degenerate.",
          "This splitting is the foundation of transition-metal colour because electronic transitions between split d levels can absorb visible radiation.",
        ],
      },
      {
        id: "d-orbital-splitting-octahedral-tetrahedral",
        title: "d-orbital splitting patterns in octahedral and tetrahedral complexes",
        paragraphs: [
          "In an octahedral complex, five d orbitals split into two higher-energy orbitals and three lower-energy orbitals. The energy gap is often represented as ΔE.",
          "In a tetrahedral complex, splitting is reversed in pattern: three orbitals are higher and two are lower. The value of ΔE is usually different from the octahedral case for similar ligands.",
          "Students do not need full crystal-field algebra here, but must know which set is higher or lower and that ΔE controls the energy of absorbed light.",
        ],
      },
      {
        id: "colour-origin-and-light-absorption",
        title: "Why transition-metal complexes are coloured",
        paragraphs: [
          "A complex appears coloured when it absorbs visible light and uses that energy to promote an electron from a lower d level to a higher d level.",
          "The absorbed photon frequency is linked to the splitting by ΔE = hν. Different ΔE values therefore correspond to different absorbed frequencies (and wavelengths) of light.",
          "The colour observed is the complementary colour of the light absorbed. If red light is absorbed strongly, the complex appears closer to the complementary green-blue region.",
        ],
      },
      {
        id: "ligand-effects-on-deltaE-and-colour",
        title: "How ligand identity changes ΔE and observed colour",
        paragraphs: [
          "Different ligands produce different ligand-field strengths, so they produce different ΔE values for the same metal ion and oxidation state.",
          "A larger ΔE means higher-energy, higher-frequency light is absorbed; a smaller ΔE means lower-frequency light is absorbed. Therefore ligand substitution can cause clear colour changes.",
          "This is why ligand exchange is often visible even before formal analysis: changing ligand type alters d-level splitting and therefore the complementary colour seen.",
        ],
      },
      {
        id: "copper-cobalt-ligand-exchange-colour-cases",
        title: "Copper(II) and cobalt(II) colour changes as ligand-exchange examples",
        paragraphs: [
          "Hydrated copper(II), [Cu(H₂O)₆]²⁺, is typically pale blue. In excess NH₃, formation of [Cu(NH₃)₄(H₂O)₂]²⁺ gives a deep-blue solution because ligand field and ΔE change.",
          "Hydrated cobalt(II), [Co(H₂O)₆]²⁺, can appear pink, while chloride-rich [CoCl₄]²⁻ is typically blue. The observed shift reflects ligand exchange from aqua to chloro coordination and a changed ΔE value.",
          "These are required qualitative examples of how ligand exchange directly changes the colour observed in transition-element systems.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Colour-of-complex questions are concept-heavy. Examiners look for the full causal chain: ligand change → ΔE change → absorbed frequency change → complementary observed colour.",
      items: [
        "Saying complexes are coloured because they emit coloured light, rather than absorbing selected visible frequencies.",
        "Using colour names without referencing complementary-colour reasoning.",
        "Stating 'd orbitals split' but not specifying octahedral (2 high, 3 low) and tetrahedral (3 high, 2 low) patterns.",
        "Confusing larger ΔE with lower frequency absorption, instead of higher frequency absorption.",
        "Describing ligand exchange colour changes as simple concentration effects, without linking to changed ligand field and ΔE.",
      ],
    },
    workedExamples: [
      {
        id: "t28-3-ex1",
        title: "Explaining colour from d-level splitting",
        problem: [
          "A transition-metal complex absorbs visible light and appears coloured. Explain this in terms of electronic structure.",
        ],
        solution: [
          "Ligands around the metal ion split initially degenerate d orbitals into non-degenerate levels separated by ΔE.",
          "An electron absorbs a photon with energy matching ΔE and is promoted from a lower to a higher d level.",
          "Because only certain frequencies are absorbed, the transmitted/reflected light is missing those frequencies.",
          "The observed colour is the complementary colour of the absorbed light.",
        ],
      },
      {
        id: "t28-3-ex2",
        title: "Predicting effect of larger ΔE",
        problem: [
          "Two complexes of the same metal ion differ only in ligand. Complex A has larger ΔE than complex B. Compare absorbed light and observed colour trend qualitatively.",
        ],
        solution: [
          "From ΔE = hν, larger ΔE requires higher-frequency (shorter-wavelength) absorbed light.",
          "So complex A absorbs at higher frequency than complex B.",
          "Because observed colour is complementary to absorbed colour, the visible appearance shifts accordingly between the two complexes.",
          "The key point is that changing ligand can shift ΔE and therefore shift colour.",
        ],
      },
      {
        id: "t28-3-ex3",
        title: "Using cobalt ligand exchange as evidence",
        problem: [
          "A pink cobalt(II) solution turns blue after adding concentrated chloride ions. Use this observation to explain ligand exchange and colour change.",
        ],
        solution: [
          "The pink colour is associated mainly with hydrated cobalt(II), often represented as [Co(H₂O)₆]²⁺.",
          "High chloride concentration drives equilibrium toward a chloride-containing complex such as [CoCl₄]²⁻.",
          "Changing from H₂O ligands to Cl⁻ ligands changes ligand-field splitting and therefore ΔE.",
          "A different ΔE means a different frequency is absorbed, so the complementary colour observed changes from pink to blue.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t28-3-st1",
        question: "Define the terms (a) degenerate and (b) non-degenerate d orbitals.",
        modelAnswer: [
          "Degenerate orbitals have equal energy.",
          "Non-degenerate orbitals have different energies.",
        ],
      },
      {
        id: "t28-3-st2",
        question:
          "State the splitting pattern for d orbitals in (i) octahedral and (ii) tetrahedral complexes.",
        modelAnswer: [
          "In octahedral complexes, d orbitals split into two higher-energy and three lower-energy orbitals.",
          "In tetrahedral complexes, d orbitals split into three higher-energy and two lower-energy orbitals.",
        ],
      },
      {
        id: "t28-3-st3",
        question:
          "Use ΔE = hν qualitatively to explain how the frequency of absorbed light changes when ΔE increases.",
        modelAnswer: [
          "If ΔE increases, ν must increase because ΔE is proportional to frequency.",
          "So higher-frequency (shorter-wavelength) light is absorbed.",
        ],
      },
      {
        id: "t28-3-st4",
        question: "Why is the observed colour of a complex usually complementary to absorbed light?",
        modelAnswer: [
          "The complex selectively absorbs part of the visible spectrum for d-electron promotion.",
          "The remaining transmitted/reflected light is seen, giving a complementary colour to what was absorbed.",
        ],
      },
      {
        id: "t28-3-st5",
        question:
          "Give one copper(II) and one cobalt(II) ligand-exchange example where colour changes, and explain the cause in one sentence.",
        modelAnswer: [
          "Copper(II): [Cu(H₂O)₆]²⁺ (pale blue) to [Cu(NH₃)₄(H₂O)₂]²⁺ (deep blue).",
          "Cobalt(II): [Co(H₂O)₆]²⁺ (pink) to [CoCl₄]²⁻ (blue).",
          "In each case ligand exchange changes ΔE, so a different visible frequency is absorbed and the complementary observed colour changes.",
        ],
      },
    ],
  },

  "t28-4": {
    noteId: "t28-4",
    syllabusNotes: [
      {
        id: "stereoisomerism-overview-in-complexes",
        title: "Stereoisomerism in transition-metal complexes",
        paragraphs: [
          "Stereoisomers have the same structural formula but differ in three-dimensional arrangement. In transition-metal complexes this commonly appears as geometrical (cis/trans) isomerism and optical isomerism.",
          "Because geometry is fixed by coordination environment, transition-metal complexes provide clear inorganic examples of stereochemistry alongside organic systems.",
          "At this level, you should identify possible stereoisomers from formula and ligand arrangement, then relate these forms to polarity where required.",
        ],
      },
      {
        id: "geometrical-isomerism-square-planar-octahedral",
        title: "Geometrical (cis/trans) isomerism in square planar and octahedral complexes",
        paragraphs: [
          "In square planar complexes such as [Pt(NH₃)₂Cl₂], cis means identical ligands adjacent (90° apart), while trans means opposite (180° apart).",
          "In octahedral systems with two identical ligands among others, cis places the pair adjacent and trans places them opposite. Examples include [Co(NH₃)₄(H₂O)₂]²⁺ and [Ni(en)₂(H₂O)₂]²⁺.",
          "When deducing cis/trans possibilities, draw the full geometry rather than relying on formula order. The same formula can represent distinct spatial arrangements.",
        ],
      },
      {
        id: "optical-isomerism-in-complexes",
        title: "Optical isomerism in complexes, including bidentate-ligand cases",
        paragraphs: [
          "Optical isomerism occurs when a complex and its mirror image are non-superimposable. The pair of enantiomers rotate plane-polarised light in opposite directions.",
          "Octahedral complexes with suitable ligand arrangements, especially with bidentate ligands like en, often show optical isomerism because the chelate arrangement creates handedness.",
          "Examples include [Ni(en)₃]²⁺ and certain forms of [Ni(en)₂(H₂O)₂]²⁺. These are required examples of optical isomerism in transition-metal chemistry.",
        ],
      },
      {
        id: "stereoisomerism-with-bidentate-ligands",
        title: "Why bidentate ligands increase stereochemical possibilities",
        paragraphs: [
          "A bidentate ligand occupies two coordination positions and introduces a fixed bite arrangement. This constrains geometry and can generate both cis/trans and optical forms depending on the full ligand set.",
          "Chelate rings from bidentate ligands can wrap around the metal in right-handed or left-handed arrangements, producing enantiomers when no internal symmetry plane remains.",
          "Therefore complexes containing en are frequent exam examples for both geometrical and optical stereoisomerism.",
        ],
      },
      {
        id: "deducing-overall-polarity-from-geometry",
        title: "Deducing overall polarity from stereoisomer arrangement",
        paragraphs: [
          "Overall polarity depends on vector addition of bond dipoles in the actual 3D arrangement. Two isomers of the same formula can have different overall polarity.",
          "For many square planar and octahedral cis/trans pairs, trans arrangements of identical ligands are often less polar or non-polar because opposite dipoles can cancel, while cis arrangements are more often polar.",
          "In exam answers, state geometry first, then discuss whether dipoles cancel by symmetry. Avoid blanket statements that 'all trans complexes are non-polar' because ligand sets and geometry still matter.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Stereochemistry marks are usually awarded for clear 3D reasoning, not formula memorisation. Drawn arrangement and symmetry arguments are essential, especially when polarity is tested.",
      items: [
        "Claiming cis/trans isomerism from formula alone without considering actual geometry (square planar or octahedral).",
        "Confusing optical isomerism with cis/trans isomerism and failing to mention non-superimposable mirror images.",
        "Missing optical activity in bidentate-ligand complexes such as [Ni(en)₃]²⁺.",
        "Assuming formula order in brackets gives ligand positions; positions must be deduced from geometry.",
        "Assigning polarity without considering dipole cancellation by symmetry in the specific isomer.",
      ],
    },
    workedExamples: [
      {
        id: "t28-4-ex1",
        title: "Cis/trans isomers in square planar [Pt(NH₃)₂Cl₂]",
        problem: [
          "Describe the two geometrical isomers of [Pt(NH₃)₂Cl₂] and compare their likely polarity.",
        ],
        solution: [
          "In the cis isomer, the two Cl ligands are adjacent (90° apart), and the two NH₃ ligands are also adjacent.",
          "In the trans isomer, identical ligands are opposite (180° apart).",
          "The trans form has greater dipole cancellation and is often less polar (or close to non-polar) than the cis form, where dipoles do not cancel fully.",
        ],
      },
      {
        id: "t28-4-ex2",
        title: "Optical isomerism in an en complex",
        problem: [
          "Explain why [Ni(en)₃]²⁺ can show optical isomerism.",
        ],
        solution: [
          "Each en ligand is bidentate, and three en ligands form an octahedral chelate arrangement around Ni²⁺.",
          "This arrangement can exist in two mirror-image forms (right-handed and left-handed) that are not superimposable.",
          "Because the mirror images are non-superimposable, they are optical isomers (enantiomers).",
        ],
      },
      {
        id: "t28-4-ex3",
        title: "Polarity comparison for cis/trans octahedral isomers",
        problem: [
          "For [Co(NH₃)₄(H₂O)₂]²⁺, compare expected polarity of cis and trans isomers qualitatively.",
        ],
        solution: [
          "In the trans isomer, the two H₂O ligands are opposite, giving stronger dipole cancellation by symmetry.",
          "In the cis isomer, the H₂O ligands are adjacent and dipoles do not cancel fully.",
          "So cis [Co(NH₃)₄(H₂O)₂]²⁺ is expected to be more polar than the trans form.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t28-4-st1",
        question:
          "State the two types of stereoisomerism required in this topic and define each briefly.",
        modelAnswer: [
          "Geometrical (cis/trans) isomerism: same connectivity but different relative positions of ligands in space (for example adjacent vs opposite).",
          "Optical isomerism: non-superimposable mirror-image forms (enantiomers).",
        ],
      },
      {
        id: "t28-4-st2",
        question:
          "Use [Pt(NH₃)₂Cl₂] to explain cis and trans arrangements in a square planar complex.",
        modelAnswer: [
          "Cis means the two identical ligands are adjacent at 90°.",
          "Trans means the two identical ligands are opposite at 180°.",
        ],
      },
      {
        id: "t28-4-st3",
        question:
          "Why are bidentate ligands such as en commonly involved in optical isomerism of octahedral complexes?",
        modelAnswer: [
          "Bidentate ligands form chelate rings with fixed spatial arrangement around the metal.",
          "This can produce chiral right-handed and left-handed arrangements with no plane of symmetry, giving enantiomers.",
        ],
      },
      {
        id: "t28-4-st4",
        question:
          "Give one octahedral complex from this topic that can show geometrical isomerism and one that can show optical isomerism.",
        modelAnswer: [
          "Geometrical example: [Co(NH₃)₄(H₂O)₂]²⁺ (cis/trans).",
          "Optical example: [Ni(en)₃]²⁺.",
        ],
      },
      {
        id: "t28-4-st5",
        question:
          "How do you deduce overall polarity of a complex from its stereoisomeric form?",
        modelAnswer: [
          "Identify the 3D geometry and ligand positions, then combine bond-dipole directions qualitatively.",
          "If symmetry causes dipole cancellation, polarity is low or zero; if cancellation is incomplete, the complex is polar.",
        ],
      },
    ],
  },

  "t28-5": {
    noteId: "t28-5",
    syllabusNotes: [
      {
        id: "kstab-definition-and-meaning",
        title: "Definition of stability constant, Kstab",
        paragraphs: [
          "The stability constant, Kstab, is the equilibrium constant for formation of a complex ion from its constituent metal ion and ligands in a solvent.",
          "A larger Kstab means equilibrium lies further toward the complex, so the complex is more thermodynamically stable relative to separated species under those conditions.",
          "Because Kstab is an equilibrium quantity, it compares relative position of equilibrium, not reaction speed.",
        ],
      },
      {
        id: "writing-kstab-expressions-correctly",
        title: "Writing Kstab expressions correctly",
        paragraphs: [
          "Write the balanced formation equation first, then form the concentration ratio as products over reactants with powers from stoichiometric coefficients.",
          "For example, M²⁺ + 4NH₃ ⇌ [M(NH₃)₄]²⁺ gives Kstab = [[M(NH₃)₄]²⁺] / ([M²⁺][NH₃]⁴).",
          "For aqua complexes in aqueous solution, [H₂O] is not included in Kstab expressions because water is the solvent and its activity is treated as effectively constant.",
        ],
      },
      {
        id: "calculations-with-kstab",
        title: "Using Kstab in calculations",
        paragraphs: [
          "Typical calculations involve solving for an unknown concentration from a Kstab value and initial or equilibrium concentrations of other species.",
          "Rearrange the Kstab expression carefully and substitute with consistent concentration units. In many exam problems, assumptions such as negligible change or dominant ligand concentration are provided or clearly justified.",
          "If no simplifying assumption is valid, use simultaneous relations from stoichiometry and equilibrium to solve systematically.",
        ],
      },
      {
        id: "ligand-exchange-explained-by-kstab",
        title: "Explaining ligand exchange using Kstab values",
        paragraphs: [
          "Ligand exchange can be interpreted as competition between possible complexes of the same metal ion. The complex with larger effective stability under given conditions is favored.",
          "If a newly introduced ligand forms a complex with much larger Kstab than the existing ligand set, equilibrium shifts toward the new complex. This explains many observed colour and solubility changes.",
          "Therefore Kstab provides a quantitative framework for predicting whether ligand substitution is likely to proceed and to what extent.",
        ],
      },
      {
        id: "comparing-stabilities-and-equilibrium-position",
        title: "Comparing complex stabilities and equilibrium position",
        paragraphs: [
          "When two formation equilibria are compared for the same metal center, the one with larger Kstab corresponds to greater thermodynamic stability of that complex in the stated solvent and temperature.",
          "Do not compare Kstab values from different conditions without caution, since temperature and medium can change equilibrium constants.",
          "In examination questions, explicit comparison language such as 'Kstab is larger by several orders of magnitude' should be linked directly to 'equilibrium lies further to complex formation'.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Kstab questions are usually algebraically straightforward but conceptually strict. Examiners reward correct equilibrium setup, proper omission of solvent water, and explicit interpretation of what 'larger Kstab' means.",
      items: [
        "Defining Kstab as a rate constant instead of an equilibrium constant for complex formation.",
        "Writing Kstab expressions without stoichiometric powers on ligand concentrations.",
        "Including [H₂O] in denominator or numerator for aqueous systems where water is the solvent.",
        "Interpreting larger Kstab as meaning faster formation rather than greater equilibrium stability.",
        "Comparing Kstab values from different conditions without noting that equilibrium constants are condition-dependent.",
      ],
    },
    workedExamples: [
      {
        id: "t28-5-ex1",
        title: "Writing a Kstab expression from a formation equation",
        problem: [
          "Write the Kstab expression for formation of [Cu(NH₃)₄(H₂O)₂]²⁺ from [Cu(H₂O)₆]²⁺ and NH₃ in aqueous solution.",
        ],
        solution: [
          "A convenient equilibrium form is [Cu(H₂O)₆]²⁺ + 4NH₃ ⇌ [Cu(NH₃)₄(H₂O)₂]²⁺ + 4H₂O.",
          "Water is the solvent, so [H₂O] is not included in Kstab.",
          "Therefore Kstab = [[Cu(NH₃)₄(H₂O)₂]²⁺] / ([[Cu(H₂O)₆]²⁺][NH₃]⁴).",
        ],
      },
      {
        id: "t28-5-ex2",
        title: "Simple concentration calculation using Kstab",
        problem: [
          "For M²⁺ + 4L ⇌ [ML₄]²⁺, Kstab = 1.0 × 10⁸. At equilibrium, [M²⁺] = 2.0 × 10⁻6 mol dm⁻³ and [L] = 0.10 mol dm⁻³. Calculate [[ML₄]²⁺].",
        ],
        solution: [
          "Use Kstab = [[ML₄]²⁺] / ([M²⁺][L]⁴).",
          "Rearrange: [[ML₄]²⁺] = Kstab × [M²⁺] × [L]⁴.",
          "Substitute: [[ML₄]²⁺] = (1.0 × 10⁸)(2.0 × 10⁻6)(0.10)⁴.",
          "(0.10)⁴ = 1.0 × 10⁻4, so [[ML₄]²⁺] = 2.0 × 10⁻2 mol dm⁻³.",
        ],
      },
      {
        id: "t28-5-ex3",
        title: "Predicting ligand exchange direction from relative Kstab",
        problem: [
          "A metal ion forms complex A with Kstab = 4.0 × 10³ and complex B with Kstab = 2.0 × 10⁹ under the same conditions. Predict which complex is favored after adding ligand B to a solution containing complex A.",
        ],
        solution: [
          "Complex B has a much larger stability constant than complex A (about six orders of magnitude larger).",
          "This means equilibrium for complex B formation lies much further toward products than equilibrium for complex A formation under the same conditions.",
          "After adding ligand B, ligand exchange is strongly favored toward complex B, so A is largely replaced by B at equilibrium.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t28-5-st1",
        question: "Define stability constant, Kstab, for a transition-metal complex.",
        modelAnswer: [
          "Kstab is the equilibrium constant for formation of a complex ion from its constituent ions or molecules in a solvent.",
        ],
      },
      {
        id: "t28-5-st2",
        question:
          "Write the Kstab expression for Co²⁺ + 6NH₃ ⇌ [Co(NH₃)₆]²⁺.",
        modelAnswer: [
          "Kstab = [[Co(NH₃)₆]²⁺] / ([Co²⁺][NH₃]⁶).",
        ],
      },
      {
        id: "t28-5-st3",
        question:
          "Why is [H₂O] usually omitted from Kstab expressions for complexes in aqueous solution?",
        modelAnswer: [
          "Water is the solvent, so its activity is effectively constant and incorporated into the equilibrium constant value; therefore [H₂O] is not written explicitly.",
        ],
      },
      {
        id: "t28-5-st4",
        question:
          "A student says 'Large Kstab means the complex forms quickly.' Correct this statement.",
        modelAnswer: [
          "Large Kstab means the equilibrium strongly favors complex formation, so the complex is thermodynamically stable relative to reactants.",
          "Kstab does not directly state how fast equilibrium is reached.",
        ],
      },
      {
        id: "t28-5-st5",
        question:
          "How do relative Kstab values help explain ligand exchange in transition-metal solutions?",
        modelAnswer: [
          "If a new ligand forms a complex with a larger Kstab than the original complex under the same conditions, equilibrium shifts toward the more stable new complex.",
          "So relative Kstab values predict the favored direction and extent of ligand substitution.",
        ],
      },
    ],
  },
};
