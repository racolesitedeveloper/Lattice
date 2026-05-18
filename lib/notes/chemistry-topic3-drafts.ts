import type { NoteDraft } from "./types";

/** Full teaching notes for 9701 Topic 3 — subtopics 3.1-3.7 (see lib/notes/AUTHORING.md). */
export const CHEMISTRY_TOPIC3_DRAFTS: Record<string, NoteDraft> = {
  "t3-1": {
    noteId: "t3-1",
    syllabusNotes: [
      {
        id: "electronegativity-definition",
        title: "Electronegativity and what it measures",
        paragraphs: [
          "Electronegativity is the power of an atom to attract electrons to itself in a covalent bond. It is not the same as electron affinity or ionisation energy, although all three depend on nucleus-electron attraction.",
          "In a bond, the shared electron pair is pulled unequally if one atom is more electronegative than the other. The more electronegative atom acquires partial negative charge, and the less electronegative atom acquires partial positive charge.",
          "Pauling values are relative numbers, not measured in physical units. They are used to compare atoms and to predict whether bonding is mainly ionic or mainly covalent.",
        ],
      },
      {
        id: "factors-electronegativity",
        title: "Why electronegativity changes across the Periodic Table",
        paragraphs: [
          "Three ideas explain most trends: nuclear charge, atomic radius, and shielding by inner shells and sub-shells. A larger effective nuclear attraction on bonding electrons gives higher electronegativity.",
          "Across a period, proton number increases while electrons are added to the same principal shell. Shielding does not increase much, radius decreases, and the attraction for bonding electrons increases. Electronegativity therefore generally increases across a period.",
          "Down a group, atoms gain electron shells. Radius increases and inner-shell shielding becomes stronger, so the nucleus attracts bonding electrons less strongly. Electronegativity therefore generally decreases down a group.",
        ],
      },
      {
        id: "bond-type-from-delta-en",
        title: "Using electronegativity difference to predict bond type",
        paragraphs: [
          "A very large electronegativity difference (delta EN) favours electron transfer and ionic bonding. A small difference favours sharing and covalent bonding.",
          "At this level, use Pauling values given in the question and make a reasoned prediction: metals with very electronegative non-metals usually form ionic compounds, while bonds between non-metals are usually covalent.",
          "Real bonding is a continuum. Exam questions in this subtopic classify bonds into ionic or covalent using the supplied values and context.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Examiners look for precise language: trends must be explained with shielding and radius, and bond predictions must reference electronegativity difference rather than vague statements.",
      items: [
        "Defining electronegativity as attraction of electrons by an isolated atom rather than attraction of bonding electrons in a covalent bond.",
        "Mixing up electronegativity with electron affinity or first ionisation energy without defining each term.",
        "Stating trend directions across periods or down groups with no explanation in terms of nuclear charge, shielding and radius.",
        "Predicting ionic or covalent bonding without using the given Pauling values or relative differences.",
        "Assuming every compound with a metal is automatically ionic even when the question context is about bond-type prediction from delta EN.",
      ],
    },
    workedExamples: [
      {
        id: "t3-1-ex1",
        title: "Explaining a period trend",
        problem: [
          "Explain why electronegativity generally increases from sodium to chlorine across Period 3.",
        ],
        solution: [
          "Across Period 3, proton number increases, so nuclear charge increases.",
          "Electrons are added to the same principal shell, so shielding by inner shells changes little. The outer region is pulled closer to the nucleus, so atomic radius decreases.",
          "Because bonding electrons are closer to a nucleus with greater effective attraction, atoms attract shared pairs more strongly. Therefore electronegativity increases across the period.",
        ],
      },
      {
        id: "t3-1-ex2",
        title: "Comparing values to predict bond type",
        problem: [
          "Using Pauling values H = 2.2, Cl = 3.2, Na = 0.9, predict whether H-Cl and Na-Cl are mainly covalent or mainly ionic.",
        ],
        solution: [
          "For H-Cl, delta EN = 3.2 - 2.2 = 1.0. This is a moderate difference between two non-metals, so the bond is mainly covalent but polar.",
          "For Na-Cl, delta EN = 3.2 - 0.9 = 2.3. This large difference between a metal and a non-metal favours electron transfer and ionic bonding.",
          "Hence HCl is covalent (polar covalent), while NaCl is ionic.",
        ],
      },
      {
        id: "t3-1-ex3",
        title: "Down-group comparison",
        problem: [
          "Fluorine is more electronegative than chlorine. Explain this in terms of atomic structure.",
        ],
        solution: [
          "Fluorine is above chlorine in Group 17 and has fewer occupied shells. Its bonding electrons are closer to the nucleus.",
          "Fluorine also has less shielding by inner shells than chlorine, so the nucleus exerts a stronger attraction on bonding electrons.",
          "Therefore fluorine has higher electronegativity than chlorine.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t3-1-st1",
        question: "Define electronegativity.",
        modelAnswer: [
          "Electronegativity is the power of an atom to attract bonding electrons (the shared pair) to itself in a covalent bond.",
        ],
      },
      {
        id: "t3-1-st2",
        question:
          "State and explain the trend in electronegativity down Group 2.",
        modelAnswer: [
          "Electronegativity decreases down Group 2 because atomic radius increases and shielding by additional inner shells increases, reducing attraction for bonding electrons.",
        ],
      },
      {
        id: "t3-1-st3",
        question:
          "Element X has electronegativity 1.0 and element Y has 3.0. Predict the likely bond type in XY and justify briefly.",
        modelAnswer: [
          "The large difference (2.0) suggests mainly ionic bonding, because electron transfer is strongly favoured from the less electronegative atom to the more electronegative atom.",
        ],
      },
      {
        id: "t3-1-st4",
        question:
          "Why is electronegativity not given in SI units like kJ mol-1?",
        modelAnswer: [
          "Electronegativity on the Pauling scale is a relative, dimensionless comparison scale, not an absolute energy quantity with SI units.",
        ],
      },
      {
        id: "t3-1-st5",
        question:
          "In one sentence, distinguish electronegativity from first ionisation energy.",
        modelAnswer: [
          "Electronegativity describes attraction for bonding electrons in a bond, whereas first ionisation energy is the energy needed to remove one electron from each atom in one mole of gaseous atoms.",
        ],
      },
    ],
  },

  "t3-2": {
    noteId: "t3-2",
    syllabusNotes: [
      {
        id: "ionic-definition",
        title: "What ionic bonding is",
        paragraphs: [
          "Ionic bonding is the electrostatic attraction between oppositely charged ions: positive cations and negative anions.",
          "Ionic bonding usually forms when electrons are transferred from a metal atom to a non-metal atom, creating ions with full outer shells.",
          "A strong ionic solid is not made of separate molecules. It is a giant ionic lattice in which each ion is attracted to many oppositely charged neighbours.",
        ],
      },
      {
        id: "forming-common-ionic-compounds",
        title: "Examples: sodium chloride, magnesium oxide and calcium fluoride",
        paragraphs: [
          "In sodium chloride, Na atoms each lose one electron to form Na+, and Cl atoms each gain one electron to form Cl-. The compound has a 1:1 formula because charges balance.",
          "In magnesium oxide, Mg atoms lose two electrons to form Mg2+ and O atoms gain two electrons to form O2-. Charges balance in a 1:1 ratio, giving MgO.",
          "In calcium fluoride, Ca atoms form Ca2+ while F atoms form F-. Two fluoride ions are required for each calcium ion, giving CaF2.",
        ],
      },
      {
        id: "charge-balance-and-formulae",
        title: "Charge balance in ionic formulae",
        paragraphs: [
          "Formulae of ionic compounds show the simplest whole-number ratio of ions that gives overall electrical neutrality.",
          "The ratio depends on ionic charges, not on the numbers of electrons transferred in one specific atom-to-atom event.",
          "For examination answers, show the ions first, then balance charges to obtain the formula.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Most errors in ionic bonding come from weak charge accounting or from treating ionic solids as molecules.",
      items: [
        "Writing ionic compounds as if they are discrete molecules with directional bonds.",
        "Using incorrect ion charges, then deriving the wrong empirical formula.",
        "Forgetting that ionic solids are giant lattices with many electrostatic attractions, not one pairwise bond only.",
        "Describing ionic bonding as sharing electrons rather than electrostatic attraction after electron transfer.",
        "Not checking that total positive charge equals total negative charge in the final formula.",
      ],
    },
    workedExamples: [
      {
        id: "t3-2-ex1",
        title: "Sodium chloride formation",
        problem: [
          "Describe ionic bonding in sodium chloride and explain why the formula is NaCl.",
        ],
        solution: [
          "A sodium atom loses one electron to form Na+, and a chlorine atom gains one electron to form Cl-.",
          "The ions formed are oppositely charged and attract each other by electrostatic forces in all directions in a giant ionic lattice.",
          "Because Na+ has charge +1 and Cl- has charge -1, the neutral compound requires a 1:1 ratio, so the formula is NaCl.",
        ],
      },
      {
        id: "t3-2-ex2",
        title: "Magnesium oxide charge balance",
        problem: [
          "Magnesium forms Mg2+ and oxygen forms O2-. Explain bonding and deduce the formula.",
        ],
        solution: [
          "Magnesium transfers two electrons to oxygen, producing Mg2+ and O2- ions.",
          "Ionic bonding is the attraction between these oppositely charged ions in a giant lattice.",
          "Charges are equal and opposite in a 1:1 ratio, so the formula is MgO.",
        ],
      },
      {
        id: "t3-2-ex3",
        title: "Calcium fluoride ratio",
        problem: [
          "Calcium forms Ca2+ ions and fluorine forms F- ions. Explain why the formula is CaF2.",
        ],
        solution: [
          "One Ca2+ ion has +2 charge. Each F- ion has -1 charge.",
          "Two fluoride ions are needed to balance one calcium ion: (+2) + 2(-1) = 0.",
          "Therefore the simplest neutral ratio is 1:2 and the formula is CaF2. In the solid, these ions form a giant ionic lattice held by electrostatic attraction.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t3-2-st1",
        question: "Define ionic bonding.",
        modelAnswer: [
          "Ionic bonding is the electrostatic attraction between oppositely charged ions (cations and anions).",
        ],
      },
      {
        id: "t3-2-st2",
        question:
          "Write the ions formed by magnesium and oxygen atoms, and state the formula of the compound formed.",
        modelAnswer: [
          "Magnesium loses two electrons to form Mg²⁺ and oxygen gains two electrons to form O²⁻.",
          "The ionic compound formed has formula MgO with a 1:1 ratio of ions.",
        ],
      },
      {
        id: "t3-2-st3",
        question:
          "Why is the formula of aluminium oxide Al2O3 rather than AlO?",
        modelAnswer: [
          "Al forms Al3+ and O forms O2-. The smallest whole-number ratio that gives zero total charge is 2 Al3+ (total +6) to 3 O2- (total -6), so the formula is Al2O3.",
        ],
      },
      {
        id: "t3-2-st4",
        question:
          "In one sentence, state the structural difference between sodium chloride and chlorine gas.",
        modelAnswer: [
          "Sodium chloride is a giant ionic lattice of ions, whereas chlorine gas consists of simple covalent Cl2 molecules.",
        ],
      },
      {
        id: "t3-2-st5",
        question:
          "Explain why ionic bonding is described as non-directional.",
        modelAnswer: [
          "Electrostatic attraction acts in all directions between each ion and surrounding oppositely charged ions in the lattice, rather than along one localized shared pair direction.",
        ],
      },
    ],
  },

  "t3-3": {
    noteId: "t3-3",
    syllabusNotes: [
      {
        id: "metallic-definition",
        title: "What metallic bonding is",
        paragraphs: [
          "Metallic bonding is the electrostatic attraction between positive metal ions and delocalised electrons.",
          "In a metal crystal, outer electrons are not tied to one specific atom; they are mobile through the structure. The remaining positive ions occupy regular lattice positions.",
          "Strong attraction between the ion lattice and the electron sea holds the metallic structure together.",
        ],
      },
      {
        id: "metallic-model-consequences",
        title: "Using the model to explain properties",
        paragraphs: [
          "Because electrons are delocalised and mobile, metals conduct electricity in both solid and molten states.",
          "Layers of metal ions can slide while attraction to delocalised electrons remains, so most metals are malleable and ductile rather than brittle.",
          "Stronger metallic bonding is generally associated with higher charge density of metal ions and more delocalised electrons per atom, giving higher melting points.",
        ],
      },
      {
        id: "comparison-with-other-bonding",
        title: "Comparing metallic with ionic and covalent bonding",
        paragraphs: [
          "Metallic bonding involves positive ions and a shared electron cloud within a giant metallic lattice.",
          "Ionic bonding is attraction between discrete positive and negative ions. Covalent bonding is attraction between atomic nuclei and shared localized electron pairs.",
          "The definitions differ, so exam answers should use the correct species in each case.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "The key marking point is the precise metallic-bonding definition and correct use of delocalised electrons.",
      items: [
        "Saying metallic bonding is attraction between metal atoms only, with no mention of ions and delocalised electrons.",
        "Confusing delocalised electrons with free ions; in solids, ions are fixed in lattice positions and electrons are mobile.",
        "Describing metallic bonding as shared pairs between specific atoms (that is covalent language).",
        "Claiming solid ionic compounds conduct because they have ions present; ions in solids are not free to move.",
        "Using giant molecular instead of giant metallic when describing metal structure.",
      ],
    },
    workedExamples: [
      {
        id: "t3-3-ex1",
        title: "Defining metallic bonding correctly",
        problem: [
          "Write a full-definition statement for metallic bonding suitable for a two-mark question.",
        ],
        solution: [
          "Metallic bonding is the electrostatic attraction between positive metal ions and delocalised electrons.",
          "The ions are arranged in a giant lattice while the delocalised electrons move through the structure.",
        ],
      },
      {
        id: "t3-3-ex2",
        title: "Electrical conductivity of metals",
        problem: [
          "Explain why copper conducts electricity in the solid state using metallic bonding.",
        ],
        solution: [
          "Copper has a giant metallic lattice of positive ions and delocalised electrons.",
          "When a potential difference is applied, the delocalised electrons can move and carry charge through the solid.",
          "Therefore copper conducts electricity in the solid state.",
        ],
      },
      {
        id: "t3-3-ex3",
        title: "Malleability from bonding model",
        problem: [
          "Use metallic bonding to explain why many metals can be hammered into shape without shattering.",
        ],
        solution: [
          "In a metal, layers of positive ions can slide over one another under stress.",
          "The sea of delocalised electrons continues to attract the ions after sliding, so bonding is maintained.",
          "Because the attraction is non-directional and remains effective after ion-layer movement, the metal is malleable.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t3-3-st1",
        question: "Define metallic bonding.",
        modelAnswer: [
          "Metallic bonding is the electrostatic attraction between positive metal ions and delocalised electrons.",
        ],
      },
      {
        id: "t3-3-st2",
        question:
          "Why do metals conduct in the solid state, but solid sodium chloride does not?",
        modelAnswer: [
          "Metals have mobile delocalised electrons that carry charge in the solid. In solid sodium chloride, ions are fixed in the lattice and cannot move, so there are no mobile charge carriers.",
        ],
      },
      {
        id: "t3-3-st3",
        question:
          "State one structural feature of a metal and one resulting property it explains.",
        modelAnswer: [
          "Feature: delocalised electrons in a giant metallic lattice. Property explained: electrical conductivity (or malleability/ductility).",
        ],
      },
      {
        id: "t3-3-st4",
        question:
          "In one sentence, distinguish metallic bonding from ionic bonding.",
        modelAnswer: [
          "Metallic bonding is attraction between metal cations and delocalised electrons, whereas ionic bonding is attraction between oppositely charged ions.",
        ],
      },
      {
        id: "t3-3-st5",
        question:
          "Why is the phrase electrons shared between two metal atoms not a good description of metallic bonding?",
        modelAnswer: [
          "Because metallic electrons are delocalised over the whole lattice rather than localized as shared pairs between specific atom pairs.",
        ],
      },
    ],
  },

  "t3-4": {
    noteId: "t3-4",
    syllabusNotes: [
      {
        id: "covalent-definition-and-basic-molecules",
        title: "Covalent bonding in simple molecules",
        paragraphs: [
          "Covalent bonding is the electrostatic attraction between the nuclei of two atoms and a shared pair of electrons.",
          "Single covalent bonds occur in H2 and Cl2. Oxygen has a double bond in O2, and nitrogen has a triple bond in N2.",
          "Examples including HCl, CO2, NH3, CH4, C2H6 and C2H4 show how atoms share pairs to achieve stable valence-shell arrangements.",
        ],
      },
      {
        id: "expanded-octet-and-coordinate-bonding",
        title: "Expanded octets and coordinate (dative covalent) bonds",
        paragraphs: [
          "Period 3 elements can form compounds in which more than eight electrons are associated with the central atom, for example SO2, PCl5 and SF6.",
          "A coordinate (dative covalent) bond forms when both electrons in the shared pair come from one atom.",
          "Important syllabus examples are NH3 + H+ to form NH4+, and bonding in Al2Cl6 where chlorine donates lone pairs to electron-deficient aluminium centres.",
        ],
      },
      {
        id: "sigma-pi-and-hybridisation",
        title: "Orbital overlap: sigma, pi and hybridisation",
        paragraphs: [
          "A sigma bond forms by direct overlap of orbitals along the internuclear axis. A pi bond forms by sideways overlap of adjacent p orbitals above and below the sigma bond.",
          "H2 has one sigma bond. C2H6 has only sigma bonds. C2H4 has one C-C sigma bond and one C-C pi bond. HCN and N2 contain sigma and pi components in multiple bonds.",
          "Hybridisation describes equivalent bonding orbitals: sp (linear), sp2 (trigonal planar), and sp3 (tetrahedral electron-pair arrangement).",
        ],
      },
      {
        id: "bond-energy-bond-length-reactivity",
        title: "Bond energy, bond length and reactivity",
        paragraphs: [
          "Bond energy is the energy required to break one mole of a specific covalent bond in the gaseous state.",
          "Bond length is the internuclear distance between two covalently bonded atoms.",
          "Shorter bonds are usually stronger and have higher bond energies. Molecules containing weaker bonds are generally more reactive because less energy is required to break those bonds.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "This subtopic tests definitions, structures, and bond models together; many errors come from mixing dot-and-cross ideas with orbital language incorrectly.",
      items: [
        "Defining covalent bonding as sharing electrons only, without stating electrostatic attraction between nuclei and shared pair.",
        "Forgetting that a coordinate bond is still a covalent bond after formation.",
        "Drawing C2H4 with two separate single bonds between carbon atoms instead of one sigma and one pi bond.",
        "Confusing bond energy (kJ mol-1, gaseous bond breaking) with enthalpy change of reaction.",
        "Assuming all central atoms strictly obey octet when period 3 expanded-octet examples are explicitly in the syllabus.",
      ],
    },
    workedExamples: [
      {
        id: "t3-4-ex1",
        title: "Classifying sigma and pi bonds",
        problem: [
          "State the number of sigma and pi bonds in each molecule: C2H6, C2H4 and N2.",
        ],
        solution: [
          "In C2H6, all bonds are single. There are 7 sigma bonds (6 C-H and 1 C-C) and 0 pi bonds.",
          "In C2H4, the C=C contains one sigma and one pi bond; plus four C-H sigma bonds. Total: 5 sigma and 1 pi.",
          "In N2, the triple bond consists of one sigma and two pi bonds.",
        ],
      },
      {
        id: "t3-4-ex2",
        title: "Coordinate bond in ammonium ion",
        problem: [
          "Explain how NH4+ forms from NH3 and H+ and identify the coordinate bond.",
        ],
        solution: [
          "Ammonia has a lone pair on nitrogen. A proton, H+, has no electrons and accepts a pair.",
          "Nitrogen donates its lone pair to H+ to form a new N-H bond. Because both electrons in that bond come from nitrogen, this is a coordinate (dative covalent) bond at formation.",
          "The resulting NH4+ ion has four equivalent N-H covalent bonds in the final structure.",
        ],
      },
      {
        id: "t3-4-ex3",
        title: "Bond energy and likely reactivity",
        problem: [
          "Bond energies (kJ mol-1): H-H 436, Cl-Cl 243. Which molecule is likely to react more readily by bond breaking, H2 or Cl2?",
        ],
        solution: [
          "A lower bond energy means less energy is required for bond breaking.",
          "Cl-Cl has bond energy 243 kJ mol-1, much lower than H-H at 436 kJ mol-1.",
          "Therefore Cl2 is more readily broken and is generally more reactive in processes where initial bond cleavage is important.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t3-4-st1",
        question: "Define covalent bonding.",
        modelAnswer: [
          "Covalent bonding is the electrostatic attraction between the nuclei of two atoms and a shared pair of electrons.",
        ],
      },
      {
        id: "t3-4-st2",
        question:
          "State one molecule in the syllabus where the central atom has an expanded octet.",
        modelAnswer: [
          "Any one of SO2, PCl5 or SF6 is acceptable as an expanded-octet example.",
        ],
      },
      {
        id: "t3-4-st3",
        question:
          "What is the difference between a sigma bond and a pi bond?",
        modelAnswer: [
          "A sigma bond forms by direct orbital overlap along the internuclear axis, while a pi bond forms by sideways overlap of adjacent p orbitals above and below the axis.",
        ],
      },
      {
        id: "t3-4-st4",
        question:
          "Define bond energy and state the physical state required in the definition.",
        modelAnswer: [
          "Bond energy is the energy required to break one mole of a specific covalent bond in the gaseous state.",
        ],
      },
      {
        id: "t3-4-st5",
        question:
          "Why is a shorter bond often associated with a higher bond energy?",
        modelAnswer: [
          "A higher activation energy means fewer collisions have sufficient energy to react at a given temperature.",
          "The rate constant is therefore smaller and the reaction proceeds more slowly under otherwise identical conditions.",
        ],
      },
    ],
  },

  "t3-5": {
    noteId: "t3-5",
    syllabusNotes: [
      {
        id: "vsepr-core-principle",
        title: "VSEPR principle",
        paragraphs: [
          "VSEPR (valence shell electron pair repulsion) theory states that electron pairs around a central atom repel each other and adopt an arrangement that minimises repulsion.",
          "Bonding pairs and lone pairs both repel, but lone pair-lone pair repulsion is strongest, then lone pair-bond pair, then bond pair-bond pair.",
          "Molecular shape is described by atom positions, while electron-pair arrangement includes lone pairs as well.",
        ],
      },
      {
        id: "required-shapes-and-angles",
        title: "Required examples and bond angles",
        paragraphs: [
          "BF3 is trigonal planar with bond angle 120 degrees; CO2 is linear with 180 degrees; CH4 is tetrahedral with 109.5 degrees.",
          "NH3 is pyramidal with about 107 degrees because one lone pair compresses the tetrahedral angle. H2O is non-linear with about 104.5 degrees because two lone pairs compress further.",
          "PF5 is trigonal bipyramidal with 120 and 90 degree bond angles. SF6 is octahedral with 90 degree bond angles.",
        ],
      },
      {
        id: "predicting-analogous-shapes",
        title: "Predicting analogous molecules and ions",
        paragraphs: [
          "To predict shape, count regions of electron density around the central atom, then account for lone pairs.",
          "Species analogous to CH4 (four bonding regions, no lone pairs) are tetrahedral. Species analogous to NH3 (three bonding pairs plus one lone pair) are pyramidal.",
          "Ions are treated with the same VSEPR logic as molecules; include overall charge when counting valence electrons.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Shape questions are usually straightforward if electron-pair counting is shown clearly.",
      items: [
        "Giving electron-pair geometry instead of molecular shape (for example saying tetrahedral for NH3 instead of pyramidal).",
        "Using exact 109.5 degrees for NH3 and H2O without showing lone-pair compression.",
        "Forgetting that trigonal bipyramidal has two distinct bond angles (120 and 90).",
        "Counting atoms attached to the central atom but ignoring lone pairs when applying VSEPR.",
        "Describing H2O as linear because oxygen has two bonds; lone pairs must be included.",
      ],
    },
    workedExamples: [
      {
        id: "t3-5-ex1",
        title: "Shape and angle of ammonia",
        problem: [
          "Use VSEPR to explain why NH3 is pyramidal with bond angle about 107 degrees.",
        ],
        solution: [
          "Nitrogen has five valence electrons. In NH3 it forms three bonding pairs and has one lone pair, giving four electron regions.",
          "Four regions adopt a tetrahedral electron-pair arrangement. However, molecular shape considers atom positions only, so with one lone pair the molecular shape is pyramidal.",
          "Lone pair-bond pair repulsion is stronger than bond pair-bond pair repulsion, so the H-N-H angle is compressed from 109.5 degrees to about 107 degrees.",
        ],
      },
      {
        id: "t3-5-ex2",
        title: "Comparing PF5 and SF6",
        problem: [
          "State the shapes and bond angles of PF5 and SF6.",
        ],
        solution: [
          "PF5 has five bonding regions and no lone pair on phosphorus in the standard VSEPR model, so it is trigonal bipyramidal with 120 degrees (equatorial-equatorial) and 90 degrees (axial-equatorial).",
          "SF6 has six bonding regions and no lone pairs on sulfur in this model, so it is octahedral with 90 degree bond angles.",
        ],
      },
      {
        id: "t3-5-ex3",
        title: "Predicting an analogous ion",
        problem: [
          "Predict the shape of NH4+ and explain your reasoning briefly.",
        ],
        solution: [
          "In NH4+, nitrogen is bonded to four hydrogens and has no lone pair. There are four bonding regions around N.",
          "Four regions repel to a tetrahedral arrangement, and with no lone pairs this is also the molecular shape.",
          "Therefore NH4+ is tetrahedral with bond angles about 109.5 degrees.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t3-5-st1",
        question: "State the shape and bond angle of BF3.",
        modelAnswer: [
          "BF3 is trigonal planar with bond angles of 120 degrees.",
        ],
      },
      {
        id: "t3-5-st2",
        question:
          "Why is H2O bent (non-linear) rather than tetrahedral as a molecular shape?",
        modelAnswer: [
          "Oxygen has four electron regions (two bonding pairs and two lone pairs), giving tetrahedral electron-pair arrangement, but molecular shape includes only atoms so with two lone pairs the shape is bent (non-linear).",
        ],
      },
      {
        id: "t3-5-st3",
        question: "Give the two characteristic bond angles in PF5.",
        modelAnswer: [
          "PF5 has 120 degrees and 90 degrees bond angles in a trigonal bipyramidal arrangement.",
        ],
      },
      {
        id: "t3-5-st4",
        question:
          "Predict the shape of SiCl4 by analogy and state one reason.",
        modelAnswer: [
          "SiCl4 is tetrahedral because the central silicon has four bonding regions and no lone pair, analogous to CH4.",
        ],
      },
      {
        id: "t3-5-st5",
        question:
          "Order these repulsions from strongest to weakest: lone pair-bond pair, bond pair-bond pair, lone pair-lone pair.",
        modelAnswer: [
          "Strongest to weakest: lone pair-lone pair, lone pair-bond pair, bond pair-bond pair.",
        ],
      },
    ],
  },

  "t3-6": {
    noteId: "t3-6",
    syllabusNotes: [
      {
        id: "intermolecular-overview",
        title: "Intermolecular forces and their place in bonding",
        paragraphs: [
          "Intermolecular forces are attractions between molecules (or molecular entities), not the covalent bonds within molecules.",
          "Van der Waals forces is a generic term for intermolecular forces. The syllabus includes instantaneous dipole-induced dipole (London dispersion), permanent dipole-permanent dipole, and hydrogen bonding as a special case.",
          "In general, ionic, covalent and metallic bonds are stronger than intermolecular forces.",
        ],
      },
      {
        id: "hydrogen-bonding-and-water",
        title: "Hydrogen bonding and anomalous properties of water",
        paragraphs: [
          "Hydrogen bonding occurs when H is covalently bonded to a strongly electronegative atom and is attracted to a lone pair on an electronegative atom of another molecule. In this syllabus, focus on N-H and O-H groups using ammonia and water.",
          "Hydrogen bonding gives water relatively high melting and boiling points compared with similar Mr molecules.",
          "Hydrogen bonding between water molecules also contributes to high surface tension. In ice, a more open hydrogen-bonded structure makes solid water less dense than liquid water.",
        ],
      },
      {
        id: "polarity-and-dipole-moment",
        title: "Electronegativity, bond polarity and dipole moment",
        paragraphs: [
          "A bond is polar when atoms have different electronegativities, causing unequal electron sharing and partial charges.",
          "A molecule has a permanent dipole moment when bond dipoles do not cancel by symmetry. For example, CO2 has polar bonds but no overall dipole because the molecule is linear and symmetrical.",
          "Molecular shape therefore determines whether polar bonds produce a polar molecule.",
        ],
      },
      {
        id: "types-of-van-der-waals",
        title: "London forces and permanent dipole interactions",
        paragraphs: [
          "Instantaneous dipole-induced dipole forces arise from temporary electron-cloud fluctuations; they exist in all molecular substances and become stronger with increasing polarisability.",
          "Permanent dipole-permanent dipole forces act between polar molecules with permanent dipoles.",
          "Hydrogen bonding is a particularly strong type of permanent dipole interaction when H is bonded to a highly electronegative atom and interacts with a lone pair on another molecule.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Questions in this area often test whether you can separate intramolecular and intermolecular ideas cleanly and apply them to physical properties.",
      items: [
        "Explaining boiling point by saying covalent bonds are broken in simple molecular substances; usually intermolecular forces are overcome.",
        "Calling every molecule with polar bonds a polar molecule without checking shape and cancellation of dipoles.",
        "Using hydrogen bonding for molecules that do not have suitable N-H or O-H groups in this syllabus context.",
        "Treating van der Waals forces as only London forces, ignoring permanent dipole-permanent dipole and hydrogen bonding in the generic definition.",
        "Stating that intermolecular forces are stronger than ionic or covalent bonds in general.",
      ],
    },
    workedExamples: [
      {
        id: "t3-6-ex1",
        title: "Polarity of CO2 and H2O",
        problem: [
          "Both CO2 and H2O contain polar bonds. Explain why CO2 is non-polar overall but H2O is polar.",
        ],
        solution: [
          "In CO2, each C=O bond is polar, but the molecule is linear. The two bond dipoles are equal and opposite, so they cancel, giving no overall dipole moment.",
          "In H2O, O-H bonds are polar and the molecule is bent (non-linear). Dipoles do not cancel in a bent arrangement.",
          "Therefore CO2 is non-polar overall, while H2O has a permanent dipole moment.",
        ],
      },
      {
        id: "t3-6-ex2",
        title: "Why water has an unusually high boiling point",
        problem: [
          "Explain why water has a much higher boiling point than methane.",
        ],
        solution: [
          "Methane (CH4) is non-polar and its molecules interact mainly by London dispersion forces.",
          "Water molecules are polar and also form extensive hydrogen bonding through O-H groups.",
          "Hydrogen bonds are stronger intermolecular attractions than the London forces in methane, so more energy is needed to separate water molecules on boiling. Hence water has a much higher boiling point.",
        ],
      },
      {
        id: "t3-6-ex3",
        title: "Ice less dense than liquid water",
        problem: [
          "Use hydrogen bonding to explain why ice is less dense than liquid water.",
        ],
        solution: [
          "In ice, hydrogen bonding produces a relatively open, ordered lattice arrangement that holds molecules further apart on average.",
          "On melting, some hydrogen bonds break and the structure collapses partly, allowing molecules to pack closer together.",
          "The liquid therefore has higher density than the solid, so ice floats on water.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t3-6-st1",
        question:
          "State what is meant by van der Waals forces as a generic term.",
        modelAnswer: [
          "Van der Waals forces is a generic term for intermolecular forces between molecular entities other than those due to bond formation, including London dispersion and permanent dipole interactions (with hydrogen bonding as a special case).",
        ],
      },
      {
        id: "t3-6-st2",
        question:
          "Name the intermolecular force responsible for the unusually high surface tension of water.",
        modelAnswer: [
          "A catalyst provides an alternative reaction pathway with lower activation energy.",
          "More collisions are successful per unit time, so rate increases without changing ΔH of the overall reaction.",
        ],
      },
      {
        id: "t3-6-st3",
        question:
          "Why can a molecule have polar bonds but no permanent dipole moment?",
        modelAnswer: [
          "If the molecular shape is symmetrical, individual bond dipoles can cancel vectorially, giving zero resultant dipole moment.",
        ],
      },
      {
        id: "t3-6-st4",
        question:
          "In general, compare the strength of ionic, covalent and metallic bonding with intermolecular forces.",
        modelAnswer: [
          "In general, ionic, covalent and metallic bonding are stronger than intermolecular forces.",
        ],
      },
      {
        id: "t3-6-st5",
        question:
          "Which intermolecular force is present in all molecular substances, including non-polar molecules?",
        modelAnswer: [
          "Instantaneous dipole-induced dipole forces (London dispersion forces) are present in all molecular substances.",
        ],
      },
    ],
  },

  "t3-7": {
    noteId: "t3-7",
    syllabusNotes: [
      {
        id: "purpose-and-rules",
        title: "Purpose and conventions of dot-and-cross diagrams",
        paragraphs: [
          "Dot-and-cross diagrams show outer-shell electrons and how bonding occurs. Different symbols identify electrons from different atoms before bonding.",
          "Use brackets and charges for ions, and show full outer-shell occupancy where required.",
          "For covalent bonds, show shared pairs clearly between the bonded atoms. For coordinate bonds, the shared pair is shown as originating from one atom.",
        ],
      },
      {
        id: "ionic-covalent-coordinate-examples",
        title: "Representing ionic, covalent and coordinate bonding",
        paragraphs: [
          "For ionic compounds such as NaCl, MgO and CaF2, show electron transfer and final ions with charges in brackets.",
          "For covalent molecules (for example H2, O2, N2, HCl, CO2, NH3, CH4, C2H6 and C2H4), show shared pairs and any lone pairs needed for correct valence-shell representation.",
          "For coordinate bonding, examples include NH4+ and Al2Cl6, where one atom donates both electrons in a shared pair.",
        ],
      },
      {
        id: "expanded-octet-and-odd-electron-species",
        title: "Expanded octets and odd-electron species",
        paragraphs: [
          "Dot-and-cross diagrams may include species with expanded octets (for example PCl5 and SF6) where period 3 central atoms are associated with more than eight electrons.",
          "The syllabus also allows diagrams for species with an odd number of electrons, so not all atoms always have complete octets.",
          "The key requirement is a consistent, clearly labelled diagram that communicates electron arrangement and bonding type.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "These questions are highly mark-scheme driven: clear electron accounting and correct use of charges and brackets are essential.",
      items: [
        "Missing brackets and charges on ions in ionic diagrams.",
        "Drawing covalent molecules but not showing lone pairs where they are required in the mark scheme.",
        "Using dots and crosses inconsistently so electron origin is unclear.",
        "Showing coordinate bonds without indicating that both bonding electrons came from one donor atom at formation.",
        "Forgetting stoichiometric ratios in ionic diagrams (for example only one F- shown for CaF2).",
      ],
    },
    workedExamples: [
      {
        id: "t3-7-ex1",
        title: "Ionic diagram logic for calcium fluoride",
        problem: [
          "Describe what must be shown in a correct dot-and-cross diagram for CaF2.",
        ],
        solution: [
          "Show calcium as Ca2+ in brackets with charge 2+ and no outer-shell electrons from the original valence shell.",
          "Show two fluoride ions, each in brackets with charge -, each with a complete outer shell including one electron gained from calcium.",
          "Use consistent symbols (dot/cross) to distinguish electron origin and ensure overall charge balance is evident.",
        ],
      },
      {
        id: "t3-7-ex2",
        title: "Coordinate bond in ammonium ion diagram",
        problem: [
          "A student draws NH4+ with four shared pairs but does not indicate a donated pair. What key feature should be added for a coordinate-bond question?",
        ],
        solution: [
          "The final ion can be shown with four N-H bonds, but for a coordinate-bond question you should indicate that one shared pair originated from nitrogen's lone pair.",
          "This may be shown with an arrow from N to H+ in a formation step or by clear dot-and-cross origin in the relevant bond.",
          "Also include square brackets around NH4 and the overall + charge.",
        ],
      },
      {
        id: "t3-7-ex3",
        title: "Covalent double bond representation",
        problem: [
          "Explain what a correct dot-and-cross diagram for O2 must contain.",
        ],
        solution: [
          "Each oxygen has six valence electrons. In O2, two shared pairs are shown between the atoms (a double bond).",
          "Each oxygen then has two lone pairs shown on the atom.",
          "The diagram should make clear that each shared pair contains one electron from each oxygen.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t3-7-st1",
        question:
          "In an ionic dot-and-cross diagram, why are brackets and charges essential?",
        modelAnswer: [
          "They show that ions, not neutral atoms, are present after electron transfer and indicate the charge on each ion for correct formula and bonding interpretation.",
        ],
      },
      {
        id: "t3-7-st2",
        question:
          "How many shared pairs are shown between the two nitrogen atoms in N2?",
        modelAnswer: [
          "Three shared pairs are shown between the two nitrogen atoms in N2 (a triple bond).",
        ],
      },
      {
        id: "t3-7-st3",
        question:
          "What is the key electron-origin feature of a coordinate bond in a dot-and-cross diagram?",
        modelAnswer: [
          "Both electrons in the shared pair are donated by one atom (the donor) at the time the bond forms.",
        ],
      },
      {
        id: "t3-7-st4",
        question:
          "Why can PCl5 be represented with more than eight electrons around phosphorus?",
        modelAnswer: [
          "Because phosphorus is a period 3 element and the syllabus allows expanded-octet representations for compounds such as PCl5.",
        ],
      },
      {
        id: "t3-7-st5",
        question:
          "State one mark-point difference between dot-and-cross diagrams of CH4 and NH3.",
        modelAnswer: [
          "NH3 must show one lone pair on nitrogen, whereas CH4 has no lone pair on the central carbon; both show four and four/three shared pairs respectively.",
        ],
      },
    ],
  },
};
