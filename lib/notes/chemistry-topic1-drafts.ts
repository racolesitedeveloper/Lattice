import type { NoteDraft } from "./types";

/** Full teaching notes for 9701 Topic 1 — subtopics 1.1-1.4. */
export const CHEMISTRY_TOPIC1_DRAFTS: Record<string, NoteDraft> = {
  "t1-1": {
    noteId: "t1-1",
    syllabusNotes: [
      {
        id: "atom-structure-core",
        title: "Particles in the atom and internal structure",
        paragraphs: [
          "An atom consists of a very small, dense nucleus containing protons and neutrons, surrounded by electrons in shells in the mostly empty space around the nucleus. If the nucleus were enlarged to the size of a pea, the electron cloud would be many metres away on that scale, which is why atoms are described as mostly empty space.",
          "Protons carry charge +1 and neutrons carry charge 0. Electrons carry charge -1. Relative masses are proton 1, neutron 1, electron 1/1836 (approximately 0.0005). Because electrons have very small mass compared with nucleons, almost all atomic mass is concentrated in the nucleus.",
          "The atom is electrically neutral when the number of electrons equals the number of protons. Any change in electron number gives an ion; the nucleus itself does not change in ordinary chemical processes.",
        ],
      },
      {
        id: "number-terms",
        title: "Atomic number, nucleon number and reading nuclide data",
        paragraphs: [
          "Atomic number (proton number), Z, is the number of protons in the nucleus. This identifies the element. Nucleon number (mass number), A, is the total number of protons and neutrons in the nucleus.",
          "For a neutral atom: electrons = Z. For an ion: electrons = Z - charge (taking positive charge for cations and negative charge for anions). Neutrons are found from A - Z.",
          "In calculations, always separate clearly: protons define element identity, electrons define ionic charge, and neutrons contribute to nucleon number. Confusing A with Z is one of the most common early errors in atomic structure questions.",
        ],
      },
      {
        id: "mass-charge-distribution",
        title: "Distribution of mass and charge in an atom",
        paragraphs: [
          "Positive charge is concentrated in the nucleus because protons are located there. Negative charge is distributed in the electron cloud around the nucleus. Neutrons contribute mass but no charge.",
          "Almost all mass is in the nucleus (protons and neutrons), while electrons contribute very little to total mass. This is why atomic size is not determined by where most of the mass is; atomic radius is set by the extent of electron distribution.",
          "This separation between where charge is and where mass is explains why electric and magnetic field experiments can distinguish subatomic particles by charge and mass behavior.",
        ],
      },
      {
        id: "beam-behaviour-electric-field",
        title: "Behaviour of proton, neutron and electron beams in an electric field",
        paragraphs: [
          "In a uniform electric field, charged particles experience force F = qE. For particles moving at the same initial velocity through the same field region, direction of deflection depends on sign of charge, and amount of deflection depends on charge-to-mass ratio.",
          "Protons (+1) and electrons (-1) deflect in opposite directions. Neutrons (0) are undeflected because they experience no electric force.",
          "Electrons deflect much more than protons under the same conditions because their mass is far smaller, giving much larger acceleration for similar force magnitude. Proton deflection is in the opposite direction but much smaller in magnitude.",
        ],
      },
      {
        id: "atomic-ionic-radius-trends",
        title: "Atomic radius and ionic radius trends",
        paragraphs: [
          "Across a period, atomic radius generally decreases. Proton number increases, but added electrons enter the same principal shell, so shielding does not increase enough to offset increased nuclear attraction. Electrons are pulled closer to the nucleus.",
          "Down a group, atomic radius increases because each step adds a new electron shell, placing outer electrons further from the nucleus and increasing shielding.",
          "For cations, ionic radius is smaller than the parent atom because one or more outer electrons are removed; in many cases an entire shell is lost and electron-electron repulsion is reduced. For anions, ionic radius is larger than the parent atom because added electrons increase repulsion in the valence shell.",
          "Across an isoelectronic series (same number of electrons), ionic radius decreases as nuclear charge increases because the same electron cloud is attracted more strongly by more protons.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Examiners reward precise particle accounting and clear trend explanations. Marks are lost when candidates state trends without linking them to nuclear attraction, shielding and shell structure.",
      items: [
        "Using nucleon number as if it were proton number when counting electrons in ions.",
        "Saying atoms are dense throughout; only the nucleus is dense, while most atomic volume is empty space.",
        "Stating 'radius decreases across a period because more electrons are added' without explaining increased nuclear charge in the same shell.",
        "Claiming neutrons deflect in an electric field due to mass; deflection in an electric field requires charge.",
        "Comparing ionic radii without checking whether ions are isoelectronic or whether a shell has been lost or gained.",
      ],
    },
    workedExamples: [
      {
        id: "t1-1-ex1",
        title: "Counting subatomic particles in atoms and ions",
        problem: [
          "Determine the numbers of protons, neutrons and electrons in ²⁷Al³⁺ and ³⁵Cl⁻.",
        ],
        solution: [
          "For ²⁷Al³⁺: aluminium has Z = 13, so protons = 13. Neutrons = A - Z = 27 - 13 = 14. A 3+ ion has lost 3 electrons, so electrons = 13 - 3 = 10.",
          "For ³⁵Cl⁻: chlorine has Z = 17, so protons = 17. Neutrons = 35 - 17 = 18. A 1- ion has gained one electron, so electrons = 17 + 1 = 18.",
          "Final answers: ²⁷Al³⁺ has p = 13, n = 14, e = 10. ³⁵Cl⁻ has p = 17, n = 18, e = 18.",
        ],
      },
      {
        id: "t1-1-ex2",
        title: "Predicting beam deflection in an electric field",
        problem: [
          "Three beams of particles (protons, neutrons, electrons) enter the same electric field region at the same speed. Describe and explain their relative paths.",
        ],
        solution: [
          "Protons and electrons deflect in opposite directions because their charges are opposite in sign. Neutrons travel straight because charge is zero, so F = qE = 0.",
          "Electron deflection is much greater than proton deflection because, for comparable |q|, acceleration a = F/m is far larger for the electron due to much smaller mass.",
          "So expected pattern is: one strongly curved beam (electrons), one weakly curved beam in the opposite direction (protons), and one undeflected beam (neutrons).",
        ],
      },
      {
        id: "t1-1-ex3",
        title: "Explaining radius trends with shell and shielding ideas",
        problem: [
          "Explain qualitatively why Na⁺ is smaller than Na, and why Cl⁻ is larger than Cl.",
        ],
        solution: [
          "Na (2,8,1) forms Na⁺ by losing its outer 3s electron, giving 2,8. The outer occupied shell changes from n = 3 to n = 2, so the ion is markedly smaller. Electron-electron repulsion also decreases.",
          "Cl (2,8,7) forms Cl⁻ by gaining one electron to give 2,8,8 in the same shell (n = 3). Added electron increases repulsion among outer electrons, so the electron cloud expands slightly.",
          "Therefore Na⁺ < Na in radius, whereas Cl⁻ > Cl in radius.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t1-1-st1",
        question:
          "State the relative charge and relative mass of a proton, neutron and electron.",
        modelAnswer: [
          "Proton: charge +1, relative mass 1. Neutron: charge 0, relative mass 1. Electron: charge -1, relative mass 1/1836 (approximately 0.0005).",
        ],
      },
      {
        id: "t1-1-st2",
        question:
          "For ⁵⁶Fe²⁺, determine proton number, neutron number and electron number.",
        modelAnswer: [
          "Iron has Z = 26, so protons = 26. Neutrons = 56 - 26 = 30. Fe²⁺ has lost two electrons, so electrons = 26 - 2 = 24.",
        ],
      },
      {
        id: "t1-1-st3",
        question:
          "Explain why atomic radius decreases across Period 3 from Na to Cl.",
        modelAnswer: [
          "Across the period, proton number increases but additional electrons enter the same principal shell, so shielding changes little. Effective nuclear attraction on outer electrons increases, pulling the electron cloud closer and decreasing radius.",
        ],
      },
      {
        id: "t1-1-st4",
        question:
          "A beam of unknown neutral particles and a beam of electrons pass through an electric field. Which beam is undeflected and why?",
        modelAnswer: [
          "The neutral-particle beam is undeflected because electric force is F = qE and q = 0. Electrons are deflected because they carry charge -1.",
        ],
      },
      {
        id: "t1-1-st5",
        question:
          "In the isoelectronic ions O²⁻, F⁻, Na⁺ and Mg²⁺, state the order of increasing ionic radius.",
        modelAnswer: [
          "All have 10 electrons. Radius decreases as nuclear charge increases, so increasing radius is Mg²⁺ < Na⁺ < F⁻ < O²⁻.",
        ],
      },
    ],
  },

  "t1-2": {
    noteId: "t1-2",
    syllabusNotes: [
      {
        id: "isotope-definition",
        title: "Definition and notation of isotopes",
        paragraphs: [
          "Isotopes are atoms of the same element with the same number of protons but different numbers of neutrons. Because proton number is unchanged, isotopes have the same atomic number, Z, but different nucleon number, A.",
          "Nuclide notation places A as a left superscript and Z as a left subscript next to the element symbol X (for example ⁴²₂₀Ca). For chlorine isotopes this is ³⁵₁₇Cl and ³⁷₁₇Cl.",
          "In chemistry calculations and equations, isotope notation is used when mass differences are relevant (for example in mass spectrometry), but the element identity is always determined by Z.",
        ],
      },
      {
        id: "chemical-properties-same",
        title: "Why isotopes have the same chemical properties",
        paragraphs: [
          "Chemical properties are determined mainly by electronic configuration, especially valence-shell electrons. Isotopes of an element have the same proton number and therefore, for neutral atoms, the same electron arrangement.",
          "Since bond formation and reactivity depend on electron arrangement rather than neutron number, isotopes of the same element show the same chemical behavior in ordinary reactions.",
          "Any isotope effects in reaction rate are usually small and not the focus of this syllabus point; the required understanding is that standard chemical properties are effectively the same.",
        ],
      },
      {
        id: "physical-properties-different",
        title: "Why isotopes have different physical properties",
        paragraphs: [
          "Isotopes differ in neutron number, so their masses differ. Differences in mass can change physical properties that depend on particle mass, such as density, diffusion rate and some phase-change temperatures.",
          "For a given amount of substance, the heavier isotope contributes greater mass. If packing and bonding are similar, samples enriched in heavier isotopes have higher density.",
          "The syllabus limits this explanation to differences in mass and density: same electronic structure explains same chemistry, different nuclear mass explains physical differences.",
        ],
      },
      {
        id: "link-to-relative-atomic-mass",
        title: "Isotopes and weighted average ideas",
        paragraphs: [
          "Natural elements are often mixtures of isotopes. The relative atomic mass, Aᵣ, is the weighted mean of isotopic masses according to isotopic abundances.",
          "This is why Aᵣ values in the Periodic Table are often non-integer (for example chlorine approximately 35.5): they reflect a mixture, not one single isotope.",
          "Although full Aᵣ calculations are developed later, isotope understanding from this section underpins those calculations.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Isotope questions are usually direct, but accuracy of language matters. Cambridge mark schemes distinguish clearly between proton number, nucleon number and electron arrangement.",
      items: [
        "Defining isotopes as atoms with same mass but different charge; correct definition is same proton number, different neutron number.",
        "Saying isotopes have different chemical properties because their masses differ; chemistry is governed by electron arrangement.",
        "Using A as proton number and Z as nucleon number in notation.",
        "Claiming isotopes have identical physical properties; they differ in mass and therefore can differ in density.",
        "Writing isotope symbols without atomic number when asked to use full notation.",
      ],
    },
    workedExamples: [
      {
        id: "t1-2-ex1",
        title: "Using isotope notation correctly",
        problem: [
          "Write isotope notation for an atom with 20 protons and 22 neutrons. State the element.",
        ],
        solution: [
          "Proton number Z = 20 identifies calcium, Ca. Nucleon number A = protons + neutrons = 20 + 22 = 42.",
          "So the isotope is ⁴²₂₀Ca.",
          "Element identity comes from proton number, not from nucleon number.",
        ],
      },
      {
        id: "t1-2-ex2",
        title: "Explaining same chemistry for two isotopes",
        problem: [
          "Explain why ³⁵Cl and ³⁷Cl react similarly with sodium to form chloride ions.",
        ],
        solution: [
          "Both isotopes have Z = 17, so neutral atoms of each isotope have 17 electrons with the same electronic configuration.",
          "In reaction with sodium, each gains one electron to form Cl⁻ with the same electron arrangement.",
          "Therefore bonding and reactivity are effectively the same, so their chemical behavior in this reaction is the same.",
        ],
      },
      {
        id: "t1-2-ex3",
        title: "Linking isotope mass to density differences",
        problem: [
          "Two gas samples contain only hydrogen isotopes: one is mostly ¹H₂ and the other mostly ²H₂ at the same temperature and pressure. Which sample is denser and why?",
        ],
        solution: [
          "At the same temperature and pressure, equal gas volumes contain equal numbers of molecules. Density depends on mass per unit volume.",
          "A ²H₂ molecule has greater mass than a ¹H₂ molecule because each deuterium atom has one extra neutron compared with protium.",
          "So the sample richer in ²H₂ has greater mass in the same volume and is therefore denser.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t1-2-st1",
        question: "Define isotope in terms of protons and neutrons.",
        modelAnswer: [
          "Isotopes are atoms of the same element with the same proton number but different neutron numbers.",
        ],
      },
      {
        id: "t1-2-st2",
        question:
          "What do A and Z represent in nuclide notation (left superscript A and left subscript Z next to X), and which one identifies the element?",
        modelAnswer: [
          "A is nucleon (mass) number, Z is proton (atomic) number, and Z identifies the element.",
        ],
      },
      {
        id: "t1-2-st3",
        question:
          "Why do isotopes of magnesium have the same chemical properties?",
        modelAnswer: [
          "They have the same proton number and therefore the same electron arrangement in neutral atoms; chemical properties depend mainly on electron arrangement, especially valence electrons.",
        ],
      },
      {
        id: "t1-2-st4",
        question:
          "State one physical property that can differ between isotopes and explain briefly why.",
        modelAnswer: [
          "Density can differ because isotopes have different masses due to different neutron numbers.",
        ],
      },
      {
        id: "t1-2-st5",
        question:
          "For isotope ⁶⁴₂₉Cu, state numbers of protons, neutrons and electrons in the neutral atom.",
        modelAnswer: [
          "Protons = 29, neutrons = 64 - 29 = 35, electrons = 29.",
        ],
      },
    ],
  },

  "t1-3": {
    noteId: "t1-3",
    syllabusNotes: [
      {
        id: "shells-subshells-orbitals",
        title: "Shells, sub-shells, orbitals and ground state",
        paragraphs: [
          "A shell is a main energy level labelled by principal quantum number n (n = 1, 2, 3, ...). Within each shell are sub-shells (s, p, d) made of orbitals.",
          "An orbital is a region of space where there is a high probability of finding an electron. Each orbital holds a maximum of two electrons with opposite spins.",
          "Ground state means the lowest-energy electron arrangement for an atom or ion. In this section, configurations are always treated in the ground state for elements H to Kr.",
        ],
      },
      {
        id: "orbital-capacities",
        title: "Number of orbitals and electron capacities",
        paragraphs: [
          "The s sub-shell contains 1 orbital and holds up to 2 electrons. The p sub-shell contains 3 orbitals and holds up to 6 electrons. The d sub-shell contains 5 orbitals and holds up to 10 electrons.",
          "For shell n = 1, only 1s exists. For n = 2, sub-shells are 2s and 2p. For n = 3, sub-shells are 3s, 3p and 3d.",
          "Electrons fill lower-energy orbitals before higher-energy orbitals (Aufbau principle), with Pauli exclusion and Hund's rule also governing how orbitals are populated.",
        ],
      },
      {
        id: "energy-order",
        title: "Order of sub-shell energies (first three shells, 4s and 4p)",
        paragraphs: [
          "Required order of increasing energy: 1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p.",
          "This explains why 4s fills before 3d in neutral atoms from K onward. The energy difference is small and can shift in ions, but for writing ground-state configurations in this topic, use the stated order.",
          "The arrangement reflects attraction to nucleus and electron-electron repulsion effects. As sub-shells fill, repulsions can alter relative energies slightly, which is why chemistry of transition ions requires care later.",
        ],
      },
      {
        id: "configuration-writing",
        title: "Electronic configurations of atoms and ions",
        paragraphs: [
          "You should write configurations in full form (for example Fe: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s²) or shorthand noble-gas form ([Ar] 3d⁶ 4s²). Both are acceptable when clearly written.",
          "For ions, add or remove electrons from the highest-energy occupied sub-shell in the species being formed. For transition-metal cations, electrons are removed from 4s before 3d, so Fe²⁺ is [Ar] 3d⁶, not [Ar] 3d⁴ 4s².",
          "Always check total electron count against atomic number and charge; this prevents most configuration errors.",
        ],
      },
      {
        id: "electrons-in-boxes",
        title: "Electrons-in-boxes notation and pairing",
        paragraphs: [
          "Electrons-in-boxes notation shows each orbital as a box and each electron as an arrow. Opposite arrows in one box represent paired electrons with opposite spin.",
          "For degenerate orbitals in a p or d sub-shell, place one electron in each orbital before pairing (Hund's rule). This minimises electron-electron repulsion and gives lower energy.",
          "This notation is useful for identifying unpaired electrons and for linking configuration to properties such as magnetism and free-radical behavior.",
        ],
      },
      {
        id: "orbital-shapes-and-radicals",
        title: "Orbital shapes and free radicals",
        paragraphs: [
          "An s orbital is spherical around the nucleus. A p orbital is dumb-bell shaped with two lobes separated by a nodal plane through the nucleus.",
          "A free radical is a species containing one or more unpaired electrons. Because unpaired electrons are highly reactive, radicals often undergo rapid reactions such as substitution or polymerisation initiation.",
          "Being able to identify unpaired electrons from configuration or boxes notation is therefore both a structural and reactivity skill.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Configuration marks depend on exact ordering, electron counts and clear notation. Small slips in sub-shell order or electron removal sequence often lose full marks.",
      items: [
        "Writing 3d before 4s in neutral atom filling for K and Ca region.",
        "Removing 3d electrons before 4s when forming first-row transition-metal cations.",
        "Pairing electrons in p orbitals too early instead of occupying singly first.",
        "Confusing shell number with sub-shell letter (for example treating 2p and 3p as same energy).",
        "Calling any reactive species a radical; a free radical must contain at least one unpaired electron.",
      ],
    },
    workedExamples: [
      {
        id: "t1-3-ex1",
        title: "Writing full and shorthand configurations",
        problem: [
          "Write the full and shorthand electronic configurations for bromine atom, Br, and bromide ion, Br⁻.",
        ],
        solution: [
          "Bromine has Z = 35, so Br has 35 electrons. Filling order gives 1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁵. Shorthand: [Ar] 3d¹⁰ 4s² 4p⁵.",
          "Br⁻ has one extra electron, so 36 electrons: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶. Shorthand: [Kr].",
          "Check: total electrons match species charge in each case.",
        ],
      },
      {
        id: "t1-3-ex2",
        title: "Transition-metal ion electron removal",
        problem: [
          "Write the electronic configuration of Fe and Fe³⁺, and explain electron removal order.",
        ],
        solution: [
          "Fe (Z = 26): full configuration is 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s², shorthand [Ar] 3d⁶ 4s².",
          "For Fe³⁺ remove three electrons: first two from 4s, then one from 3d. So Fe³⁺ is [Ar] 3d⁵.",
          "4s fills before 3d in neutral atoms, but once 3d is occupied, 4s is higher in energy and electrons are removed from 4s first.",
        ],
      },
      {
        id: "t1-3-ex3",
        title: "Electrons-in-boxes and identifying unpaired electrons",
        problem: [
          "Using electrons-in-boxes reasoning, determine the number of unpaired electrons in a nitrogen atom.",
        ],
        solution: [
          "Nitrogen has configuration 1s² 2s² 2p³. The three 2p electrons occupy the three 2p orbitals singly before any pairing.",
          "So 2p has three singly occupied orbitals, each containing one unpaired electron.",
          "Therefore nitrogen atom has three unpaired electrons in its ground state.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t1-3-st1",
        question:
          "State the number of orbitals and maximum electron capacity for s, p and d sub-shells.",
        modelAnswer: [
          "s: 1 orbital, 2 electrons. p: 3 orbitals, 6 electrons. d: 5 orbitals, 10 electrons.",
        ],
      },
      {
        id: "t1-3-st2",
        question:
          "Give the required order of increasing sub-shell energy up to 4p (including 4s and 3d).",
        modelAnswer: [
          "1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p.",
        ],
      },
      {
        id: "t1-3-st3",
        question:
          "Write the shorthand electronic configuration of Ca²⁺.",
        modelAnswer: [
          "Ca has [Ar] 4s². Ca²⁺ has lost two 4s electrons, so Ca²⁺ is [Ar].",
        ],
      },
      {
        id: "t1-3-st4",
        question:
          "Describe and sketch-label the general shapes of s and p orbitals in words.",
        modelAnswer: [
          "s orbital: spherical. p orbital: dumb-bell shape with two lobes on opposite sides of the nucleus and a nodal plane through the nucleus.",
        ],
      },
      {
        id: "t1-3-st5",
        question:
          "Define a free radical and state why free radicals are typically reactive.",
        modelAnswer: [
          "A free radical is a species with one or more unpaired electrons. Unpaired electrons make the species energetically unstable and prone to react to form electron pairs.",
        ],
      },
    ],
  },

  "t1-4": {
    noteId: "t1-4",
    syllabusNotes: [
      {
        id: "definition-first-ie",
        title: "First ionisation energy and equation conventions",
        paragraphs: [
          "First ionisation energy, IE₁, is the energy required to remove one electron from each atom in one mole of gaseous atoms to form one mole of gaseous 1+ ions.",
          "Standard equation form uses gaseous species, for example: Na(g) → Na⁺(g) + e⁻.",
          "Second and subsequent ionisation energies remove electrons from gaseous ions, for example: Mg⁺(g) → Mg²⁺(g) + e⁻. Ionisation energies are always positive because energy must be supplied to overcome attraction between nucleus and electron.",
        ],
      },
      {
        id: "core-attraction-model",
        title: "Why ionisation energy has the trends it does",
        paragraphs: [
          "Ionisation energy reflects electrostatic attraction between nucleus and the electron being removed. Stronger attraction means higher ionisation energy.",
          "Across a period, first ionisation energy generally increases because nuclear charge rises while the outer electron remains in the same principal shell, so shielding does not increase enough to offset stronger attraction.",
          "Down a group, first ionisation energy generally decreases because outer electrons are further from nucleus and more shielded by additional inner shells, reducing attraction despite higher nuclear charge.",
        ],
      },
      {
        id: "anomalies-across-period",
        title: "Explaining periodic anomalies",
        paragraphs: [
          "Not all points rise smoothly across a period. Two classic dips occur where sub-shell structure and spin pairing matter.",
          "From Be to B (and Mg to Al), IE falls because electron removed from B or Al is in a higher-energy p sub-shell, which is less strongly attracted than an s electron at similar shell level.",
          "From N to O (and P to S), IE falls because O or S has one paired p orbital electron, and electron-electron repulsion in a paired orbital makes removal slightly easier than from the half-filled arrangement in N or P.",
        ],
      },
      {
        id: "successive-ie-and-shells",
        title: "Successive ionisation energies and shell structure",
        paragraphs: [
          "For any element, successive ionisation energies increase because electrons are removed from an increasingly positive ion.",
          "A very large jump between one ionisation energy and the next indicates that the next electron would come from an inner shell closer to the nucleus.",
          "This jump pattern lets you infer valence electron number: if a big jump occurs after the third electron is removed, the atom had three outer-shell electrons.",
        ],
      },
      {
        id: "deducing-position-from-ie-data",
        title: "Using successive IE data to deduce configuration and Periodic Table position",
        paragraphs: [
          "From successive IE data, first locate the major jump to determine number of valence electrons and therefore likely group (for main-group elements in this level).",
          "Then use magnitude trends and context to infer period and likely element range. For example, a huge jump after IE₂ suggests Group 2; after IE₁ suggests Group 1.",
          "This method directly links ionisation data to electronic configuration and position in the Periodic Table.",
        ],
      },
      {
        id: "factor-summary",
        title: "Factors affecting ionisation energy",
        paragraphs: [
          "Required factors are nuclear charge, atomic or ionic radius, shielding by inner shells and sub-shells, and spin-pair repulsion.",
          "Higher nuclear charge tends to increase IE. Greater distance (larger radius) and greater shielding tend to decrease IE. Paired electrons in the same orbital experience repulsion, making electron removal easier and IE slightly lower.",
          "High-quality explanations combine these factors rather than naming only one.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Ionisation-energy questions often require explanation, not just trend statements. Top-band answers use shell, sub-shell and repulsion arguments with precise gaseous equations.",
      items: [
        "Writing ionisation equations with aqueous species or molecules instead of gaseous atoms/ions.",
        "Stating trends without cause, for example 'IE increases across because atoms get smaller' without linking to nuclear charge and shielding.",
        "Ignoring sub-shell differences when explaining Be/B or N/O anomalies.",
        "Assuming the largest IE value always corresponds to valence electron removal; major jumps indicate moving to inner-shell electrons.",
        "Using only one factor when multiple factors are needed, especially in across-period anomaly explanations.",
      ],
    },
    workedExamples: [
      {
        id: "t1-4-ex1",
        title: "Constructing first and second ionisation equations",
        problem: [
          "Write equations for the first and second ionisation energies of magnesium.",
        ],
        solution: [
          "First ionisation energy equation: Mg(g) → Mg⁺(g) + e⁻.",
          "Second ionisation energy equation: Mg⁺(g) → Mg²⁺(g) + e⁻.",
          "Both must be gaseous species and each equation removes one electron per gaseous species shown.",
        ],
      },
      {
        id: "t1-4-ex2",
        title: "Explaining a Period 3 anomaly",
        problem: [
          "First ionisation energy of sulfur is lower than that of phosphorus, although both are in Period 3. Explain.",
        ],
        solution: [
          "Phosphorus has 3p³ with three unpaired electrons in separate p orbitals (half-filled sub-shell, relatively stable).",
          "Sulfur has 3p⁴, so one p orbital contains a pair of electrons. Repulsion within this paired orbital makes one electron easier to remove.",
          "Therefore less energy is needed for sulfur than phosphorus despite the general across-period increase trend.",
        ],
      },
      {
        id: "t1-4-ex3",
        title: "Using successive IE jumps to infer group",
        problem: [
          "An element X has successive ionisation energies (kJ mol⁻¹): 786, 1577, 3232, 4356, 16091, 19805. Deduce the number of valence electrons and likely group.",
        ],
        solution: [
          "There is a very large jump between the 4th and 5th ionisation energies (4356 to 16091 kJ mol⁻¹).",
          "This means four electrons are removed relatively more easily before reaching an inner shell at the 5th removal.",
          "So X has four valence electrons and is likely in Group 14 (main group numbering used in modern Periodic Table conventions).",
        ],
      },
    ],
    selfTest: [
      {
        id: "t1-4-st1",
        question: "Define first ionisation energy precisely.",
        modelAnswer: [
          "First ionisation energy is the energy required to remove one electron from each atom in one mole of gaseous atoms to form one mole of gaseous 1+ ions.",
        ],
      },
      {
        id: "t1-4-st2",
        question:
          "Why does first ionisation energy generally decrease down Group 2?",
        modelAnswer: [
          "Down the group, outer electrons are in higher shells, further from nucleus and more shielded by inner electrons. These effects reduce nuclear attraction to the outer electron, so less energy is needed.",
        ],
      },
      {
        id: "t1-4-st3",
        question:
          "Write the equation for the third ionisation energy of aluminium.",
        modelAnswer: [
          "Al²⁺(g) → Al³⁺(g) + e⁻.",
        ],
      },
      {
        id: "t1-4-st4",
        question:
          "State two factors that increase ionisation energy and one factor that decreases it.",
        modelAnswer: [
          "Increase: higher nuclear charge; smaller atomic/ionic radius (electron closer to nucleus). Decrease: greater shielding by inner shells/sub-shells.",
        ],
      },
      {
        id: "t1-4-st5",
        question:
          "Successive IE data for an element show a major jump after IE₁. What does this indicate about its outer-shell electron count and likely group?",
        modelAnswer: [
          "A major jump after the first ionisation indicates there is one valence electron. The element is likely Group 1.",
        ],
      },
    ],
  },
};
