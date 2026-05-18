import type { NoteDraft } from "./types";

/** Full teaching notes for 9701 Topic 1 — subtopics 1.1-1.4.
 *  Style: dense syllabus narrative (see chemistry-topic2-drafts) plus scannable blocks
 *  (tables, equations, steps, bullets, callouts) for revision — original copy only. */
export const CHEMISTRY_TOPIC1_DRAFTS: Record<string, NoteDraft> = {
  "t1-1": {
    noteId: "t1-1",
    syllabusNotes: [
      {
        id: "atom-structure-core",
        title: "Particles in the atom and internal structure",
        paragraphs: [
          "An atom consists of a very small, dense nucleus containing protons and neutrons, surrounded by electrons occupying shells (or energy levels) in the largely empty space around the nucleus. The nucleus is typically of order 10⁻¹⁵ m across, while the chemically relevant size of the whole atom is set by the outer electron distribution and is roughly 10⁻¹⁰ m. If the nucleus were enlarged to the size of a pea, the outer electron region would still be metres away on the same scale, which is why textbooks stress that an atom is mostly empty space rather than a uniformly dense sphere.",
          "Protons carry relative charge +1 and neutrons carry 0. Electrons carry −1. Relative masses are assigned as proton 1, neutron 1, electron about 1/1836 (often quoted as approximately 0.0005). Because electrons contribute almost no mass compared with nucleons, essentially all of the atom's mass sits in the nucleus, yet almost all of the atom's volume is associated with where electrons are found. Examiners like this contrast: mass is nuclear, but size is electronic.",
          "The atom is electrically neutral when the number of electrons equals the number of protons. Chemical change involves rearrangement of electrons between species; the nucleus is unchanged in ordinary chemical reactions, so proton number is fixed while electron number can change to give cations or anions. Nuclear chemistry (radioactivity) is treated elsewhere: for Topic 1 you should keep nuclear change separate from ion formation.",
          "When you describe subatomic structure in written answers, be explicit about location (nucleus versus shells), charge sign, and the neutrality condition. Vague statements such as 'atoms contain charges' lose marks because they do not distinguish protons from electrons or identify where each particle type is found.",
        ],
        blocks: [
          {
            type: "table",
            caption: "Subatomic particles: relative charge and mass",
            columns: ["Particle", "Location", "Relative charge", "Relative mass"],
            rows: [
              ["Proton", "Nucleus", "+1", "1"],
              ["Neutron", "Nucleus", "0", "1"],
              ["Electron", "Shells / energy levels", "-1", "1/1836 (very small)"],
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Atom versus ion",
            paragraphs: [
              "A neutral atom has equal numbers of protons and electrons. An ion forms when electrons are gained or lost; ordinary chemical ion formation does not change the number of protons in the nucleus.",
            ],
          },
        ],
      },
      {
        id: "number-terms",
        title: "Atomic number, nucleon number and reading nuclide data",
        paragraphs: [
          "Atomic number (proton number), Z, counts protons in the nucleus. It identifies the element because each element has a unique value of Z in the Periodic Table. Nucleon number (mass number), A, counts all nucleons: protons plus neutrons. The symbol X in nuclide notation is therefore fixed once Z is known, even if A changes between isotopes.",
          "For a neutral atom, electron number equals Z. For an ion, adjust electron count from Z using the magnitude and sign of charge: a positive charge n+ means n electrons removed, so electrons = Z − n; a negative charge n− means n electrons gained, so electrons = Z + n. Neutron number follows from N = A − Z and does not depend on ionic charge, because neutrons and protons together still make up the nucleus described by that nuclide.",
          "Examination questions often present ions with the same A but different chemistry (isoelectronic species) or isotopes with the same Z but different A. In both cases the discipline is the same: read Z first for element identity, then use charge rules for electrons, then use A and Z together for neutrons.",
          "A frequent slip is to treat A as if it were proton number, or to subtract ionic charge from A when counting neutrons. Ionic charge is an electron imbalance; nucleon number is unaffected unless the question explicitly involves nuclear change, which is outside ordinary ionic chemistry.",
          "When writing structured definitions, separate the three counts (protons, neutrons, electrons) even if the question only asks for one of them: showing all three signals clear thinking and often earns method credit in longer items.",
        ],
        blocks: [
          {
            type: "equation",
            text: "neutrons = A − Z",
          },
          {
            type: "table",
            caption: "Particle accounting in atoms and ions",
            columns: ["Case", "Protons", "Electrons", "Neutrons"],
            rows: [
              ["Neutral atom", "Z", "Z", "A − Z"],
              ["Positive ion, n+", "Z", "Z − n", "A − Z"],
              ["Negative ion, n−", "Z", "Z + n", "A − Z"],
            ],
          },
          {
            type: "callout",
            tone: "warning",
            title: "Common mistake",
            paragraphs: [
              "Do not subtract charge from nucleon number. Ionic charge is caused by electrons being lost or gained; neutron number is still found from A − Z.",
            ],
          },
        ],
      },
      {
        id: "mass-charge-distribution",
        title: "Distribution of mass and charge in an atom",
        paragraphs: [
          "Positive charge is concentrated in the nucleus because only protons carry positive charge among the nucleons. Negative charge is carried by electrons, which occupy shells around the nucleus. Neutrons contribute substantially to mass but contribute zero to charge, which is why neutron number affects A and density-type arguments but not the sign balance of the ion.",
          "Nearly all atomic mass is nuclear, yet nearly all atomic volume is associated with the electron cloud. Atomic radius and ionic radius are therefore properties of electron distribution, not of nuclear diameter. Students sometimes argue that 'the atom is small because the nucleus is small'; for chemical size the correct idea is that outer electrons set the radius even though they contribute little mass.",
          "This separation between mass localisation and charge distribution is exactly why techniques such as deflection in electric and magnetic fields can separate species by q/m: charge controls electric force, while mass controls acceleration for a given force. A neutron beam is electrically neutral overall, so it is not steered by an electric field in the simple particle-beam sense used at this level.",
          "In longer descriptive questions, link observations to the model: mention nuclear concentration of mass and positive charge, delocalised negative charge in shells, and the mostly empty space between nucleus and outer electrons. That package of ideas matches mark-scheme 'describe the atom' expectations.",
        ],
        blocks: [
          {
            type: "bullets",
            items: [
              "Mass concentrated in the nucleus (protons and neutrons); electrons contribute negligible mass.",
              "Positive charge due to protons in the nucleus; electrons in shells account for negative charge around the nucleus.",
              "Atomic radius follows the electron cloud (volume), not where most mass sits — a common distinction in ‘describe the atom’ questions.",
            ],
          },
        ],
      },
      {
        id: "beam-behaviour-electric-field",
        title: "Behaviour of proton, neutron and electron beams in an electric field",
        paragraphs: [
          "In a uniform electric field of strength E, a particle with charge q experiences a force F = qE parallel to the field direction if q is positive, and opposite if q is negative. Using Newton's second law in the form a = F/m, the magnitude of acceleration for a given |q| is inversely proportional to mass. That single pair of relationships is enough to rank deflections for the three beams treated in this topic.",
          "Protons and electrons have charges of equal magnitude but opposite sign, so they accelerate in opposite directions. Neutrons are uncharged, so q = 0, F = 0 and the neutron path is straight (undeflected) in the ideal uniform-field model used at A Level.",
          "Because the electron mass is orders of magnitude smaller than the proton mass, an electron with the same initial speed as a proton in the same field reaches a much larger acceleration and therefore shows a much larger deflection over the same path length. Proton deflection is therefore 'weak' compared with electron deflection, not because the field treats protons gently, but because inertia is large.",
          "When you explain beam observations, mention both direction (sign of q) and relative curvature (magnitude of a). Many mark schemes award one mark for charge reasoning and a second for mass reasoning; giving only one of the two is incomplete.",
          "Be careful with language: neutrons are not 'too heavy to deflect'; they do not deflect in an electric field because they are uncharged. Mass-only arguments belong to magnetic-field contexts or to comparing charged species, not to explaining straight neutron paths in E.",
        ],
        blocks: [
          {
            type: "equation",
            text: "F = qE    and    a = F/m",
          },
          {
            type: "table",
            caption: "Expected observations",
            columns: ["Particle", "Charge", "Path in electric field", "Reason"],
            rows: [
              ["Electron", "-1", "Strongly deflected", "Very small mass gives large acceleration"],
              ["Proton", "+1", "Weakly deflected opposite way", "Same magnitude charge but much greater mass"],
              ["Neutron", "0", "Undeflected", "No electric force because q = 0"],
            ],
          },
        ],
      },
      {
        id: "atomic-ionic-radius-trends",
        title: "Atomic radius and ionic radius trends",
        paragraphs: [
          "Across a period, atomic radius generally decreases from left to right. Proton number increases while successive elements add electrons into the same principal shell, so inner shielding does not rise strongly enough to cancel the rising nuclear charge felt by valence electrons. The outer electron cloud is drawn inward, so atoms become smaller despite having more electrons overall.",
          "Down a group, atomic radius increases. Each new period begins with occupation of a higher principal quantum number n for the group's outer electrons. Outer electrons are on average further from the nucleus, and additional inner shells increase shielding, so the valence electron is held less tightly even though Z has increased.",
          "For monatomic ions derived from main-group atoms, cations are smaller than their parent atoms because electrons are removed, often from the outer shell entirely, reducing electron-electron repulsion and sometimes removing a whole shell from the valence picture. Anions are larger than their parent atoms because extra electrons are added into the same valence shell, increasing repulsion and slightly expanding the electron cloud even though nuclear charge is unchanged from the neutral atom.",
          "Isoelectronic species contain the same total number of electrons (for example O²⁻, F⁻, Na⁺, Mg²⁺ all with 10 electrons). Along such a series, ionic radius decreases as nuclear charge increases because the same electron count is attracted by progressively more protons. Isoelectronic comparisons are a standard examination device; always check electron count before comparing radii.",
          "When explaining any radius trend, structure the answer: state the observed direction, then give a linked account using nuclear charge, distance and shielding (and repulsion for ions). A trend statement alone, with no mechanism, rarely reaches top band.",
        ],
        blocks: [
          {
            type: "table",
            caption: "Radius trends: what changes and why",
            columns: ["Trend", "Outer electron environment", "Typical radius change"],
            rows: [
              ["Across a period", "Same principal shell; Z increases", "Atomic radius decreases"],
              ["Down a group", "New shell; more shielding", "Atomic radius increases"],
              ["Cation vs parent atom", "Fewer electrons; often fewer shells", "Ionic radius smaller"],
              ["Anion vs parent atom", "More electrons in same valence shell", "Ionic radius larger"],
            ],
          },
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "This subtopic is foundational: marks come from precise language and from separating nuclear ideas from electronic ideas. Examiners reward explicit particle accounting, correct use of Z and A, and radius explanations that combine nuclear charge, shell occupancy, shielding and (where relevant) repulsion in ions.",
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
          "Isotopes are atoms of the same element with the same number of protons but different numbers of neutrons. They therefore share the same atomic number Z, but differ in nucleon number A because A counts protons plus neutrons. Changing neutron number changes mass properties and nuclear behaviour, but it does not change which element you have: that is fixed by Z alone.",
          "Nuclide notation writes A as a left superscript and Z as a left subscript beside the element symbol X, for example ⁴²₂₀Ca. The left subscript is redundant if the symbol is already given (because the symbol implies Z), but examinations still require full notation when asked. For chlorine, the two major stable isotopes are commonly written ³⁵₁₇Cl and ³⁷₁₇Cl.",
          "Relative isotopic mass and mass spectrometry (developed later in the course) depend on the fact that isotopes have different masses. In ordinary chemical equations you usually write element symbols without isotopic labels unless the question is specifically about isotopes, separation of isotopes, or mass-spectral peaks.",
          "When you define isotopes in an exam, use the words proton number and neutron number. Definitions framed only in terms of 'different mass' are weaker because they do not state which subatomic particle count changes.",
        ],
        blocks: [
          {
            type: "equation",
            text: "A = Z + N",
          },
          {
            type: "table",
            caption: "Nuclide symbols: what each number means",
            columns: ["Symbol part", "Meaning", "Exam-use wording"],
            rows: [
              ["Z (left subscript)", "Proton (atomic) number", "Identifies the element"],
              ["A (left superscript)", "Nucleon (mass) number", "Total protons + neutrons"],
              ["N", "Neutron number", "Found from A − Z"],
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Mark-scheme adjacent definition",
            items: [
              "Same proton number.",
              "Different neutron number.",
              "Same atomic number (Z), different nucleon number (A).",
            ],
          },
          {
            type: "callout",
            tone: "warning",
            title: "Common definition error",
            paragraphs: [
              "Do not define isotopes using electron number or ionic charge. The required definition is only in terms of protons and neutrons.",
            ],
          },
        ],
      },
      {
        id: "chemical-properties-same",
        title: "Why isotopes have the same chemical properties",
        paragraphs: [
          "Chemical reactivity and bonding are controlled primarily by electron arrangement, particularly valence electrons, because covalent and ionic interactions involve electrostatic attraction and repulsion between nuclei and electrons and between electrons themselves. Isotopes of an element have the same Z, so neutral atoms of each isotope contain the same number of electrons and the same ground-state configuration.",
          "That means the same types of bonds form, the same common ion charges appear (for example Cl forming Cl⁻), and the same overall reaction pathways are followed in typical laboratory chemistry. Any kinetic isotope effect (slightly different rates due to mass) is a subtle physical chemistry point and is not what this syllabus item is testing unless a question explicitly introduces it.",
          "When you compare two isotopes in an explanation item, start from Z, move to electron configuration for the neutral atom, then link to bonding. If the question involves ions, be explicit about how many electrons are gained or lost; the isotope label on the nucleus does not change the electron-counting rules.",
          "In longer answers, avoid implying that neutrons 'take part' in covalent bond formation in the same way as valence electrons. Neutrons influence mass and some physical properties, but ordinary chemical change is an electronic rearrangement at constant Z.",
        ],
        blocks: [
          {
            type: "table",
            caption: "What stays the same and what changes between isotopes",
            columns: ["Feature", "Same or different?", "Consequence"],
            rows: [
              ["Proton number (Z)", "Same", "Same element identity"],
              ["Electron arrangement (neutral atoms)", "Same", "Same bonding pattern and reactivity"],
              ["Neutron number", "Different", "Mass changes, not core chemical identity"],
            ],
          },
          {
            type: "steps",
            title: "How to answer \"same chemical properties\" questions",
            items: [
              "State that isotopes have the same proton number.",
              "Link this to the same electron configuration (for neutral atoms).",
              "Conclude that valence-electron behaviour in bonding is the same.",
              "State that ordinary chemical properties are therefore the same.",
            ],
          },
          {
            type: "callout",
            tone: "warning",
            title: "Avoid this statement",
            paragraphs: [
              "Different mass means different chemical properties is not accepted as the main explanation at this level.",
            ],
          },
        ],
      },
      {
        id: "physical-properties-different",
        title: "Why isotopes have different physical properties",
        paragraphs: [
          "Because isotopes differ in neutron number, atoms of different isotopes have different masses. Many physical properties depend on mass even when the electronic structure is essentially unchanged: molar mass enters density, moments of inertia enter rotation, and reduced mass enters vibrational frequencies in molecules. At this level the syllabus stresses density and related 'heavier particle moves differently' arguments rather than a full catalogue of isotope effects.",
          "For gases at the same temperature and pressure, equal amounts in moles occupy essentially the same volume, but the sample mass differs if the molar mass differs. Density, mass per unit volume, therefore changes when the isotopic composition changes. Similar reasoning applies to effusion and diffusion rates in qualitative questions: lighter molecules or atoms on average move faster at a given temperature.",
          "When you contrast physical and chemical behaviour, keep the logic parallel: same electron arrangement implies the same chemical identity for reaction pathways; different nucleon composition implies different mass and therefore potentially different physical behaviour. Do not claim that all physical properties are identical between isotopes.",
          "In structured questions, tie the physical property named in the stem to mass explicitly. For example, compare ¹H₂ and ²H₂ by molecular mass at constant T and p, then relate to density or mean speed, rather than discussing electronic configuration again.",
        ],
        blocks: [
          {
            type: "equation",
            text: "density = mass / volume",
          },
          {
            type: "table",
            caption: "Mass-based physical effects of isotopic differences",
            columns: ["Property (mass-related)", "Expected isotope trend", "Reason"],
            rows: [
              ["Density", "Heavier-isotope sample can be denser", "Greater mass in comparable volume"],
              [
                "Rate of diffusion (gas)",
                "Heavier isotopic molecules diffuse more slowly",
                "Higher particle mass lowers average speed at given conditions",
              ],
              ["Relative molecular mass of isotopic molecule", "Different", "Atomic isotopic masses differ"],
            ],
          },
        ],
      },
      {
        id: "link-to-relative-atomic-mass",
        title: "Isotopes and weighted average ideas",
        paragraphs: [
          "Natural samples of many elements contain mixtures of isotopes in nearly fixed proportions. The Periodic Table value Aᵣ is therefore a weighted mean: each isotope contributes in proportion to its abundance, not as a simple average of mass numbers. That is why chlorine's Aᵣ is about 35.5 even though no chlorine atom has nucleon number 35.5: the value describes a bulk sample, not a single nuclide.",
          "The weighted-mean idea is the bridge between isotope-level chemistry in Topic 1 and quantitative work on isotopic abundances and mass spectra in later topics. When you interpret a mass spectrum, peak heights (or integrated intensities) relate to relative abundance; when you interpret Aᵣ, you are summarising those abundances in one number on the carbon-12 relative scale developed in Topic 2.",
          "Always convert percentage abundances to fractions before multiplying unless you incorporate the factor of 100 consistently in one line of working. Examiners penalise 'average of 35 and 37' reasoning for chlorine because it ignores the unequal abundances.",
          "If a question gives relative isotopic masses rather than integers, carry those values through the weighting exactly as stated: do not silently round isotopic masses before weighting unless the data justify it.",
        ],
        blocks: [
          {
            type: "equation",
            text: "Aᵣ = Σ (isotopic mass × fractional abundance)",
          },
          {
            type: "steps",
            title: "Weighted-mean method (percentage abundances)",
            items: [
              "Convert each percentage abundance to a fraction by dividing by 100.",
              "Multiply each isotopic mass by its fractional abundance.",
              "Add all contributions.",
              "Report Aᵣ to a sensible number of significant figures for the data given.",
            ],
          },
          {
            type: "table",
            caption: "Illustrative isotope weighting (chlorine-style pattern)",
            columns: ["Isotope mass", "Abundance / %", "Contribution to Aᵣ"],
            rows: [
              ["35", "75", "35 × 0.75 = 26.25"],
              ["37", "25", "37 × 0.25 = 9.25"],
              ["Total", "100", "Aᵣ = 35.50"],
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Why Aᵣ is often non-integer",
            paragraphs: [
              "A non-integer Aᵣ does not mean fractional atoms; it means the sample contains a mixture of isotopes and Aᵣ is a weighted average.",
            ],
          },
          {
            type: "callout",
            tone: "warning",
            title: "Frequent calculation slip",
            paragraphs: [
              "Do not divide by the number of isotopes unless abundances are equal. Use abundance weighting explicitly.",
            ],
          },
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Isotope marks are often lost through loose definitions or through mixing up which properties follow from electrons versus from nuclear composition. Examiners expect clear separation of Z, A and electron count, and they expect physical versus chemical contrasts to be argued with the correct underlying cause.",
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
          "Protons = 29 (subscript in ⁶⁴₂₉Cu).",
          "Neutrons = 64 - 29 = 35.",
          "Electrons in neutral atom = 29 (equals proton number).",
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
          "A shell is a principal energy level labelled by n = 1, 2, 3, … . Each shell contains one or more sub-shells labelled s, p, d (and higher sub-shells exist for heavier elements, but this topic focuses on the rules needed up to the 4p region). A sub-shell is a set of orbitals that share the same n and sub-shell letter and have the same energy in the hydrogen-like picture; in many-electron atoms they are still grouped usefully by the same labels.",
          "An orbital is a region in space (often pictured as a boundary surface) where there is a high probability of finding an electron. Each orbital can hold at most two electrons, and if two are present they must differ in spin direction (Pauli exclusion principle). This 'two per orbital' rule is what makes electron counting predictable once you know how many orbitals each sub-shell has.",
          "Ground state means the lowest total energy arrangement for a given species under normal conditions. Examination questions specify electronic configuration without extra wording; that defaults to ground state unless you are explicitly told otherwise. Excited-state configurations appear in atomic spectroscopy contexts later, but not as the default in Topic 1 drilling.",
          "When you read or write a configuration, mentally parse it in the hierarchy shell → sub-shell → orbital occupancy. That discipline prevents common mistakes such as confusing 3p with 3d or treating all electrons in a shell as equivalent for removal arguments.",
        ],
        blocks: [
          {
            type: "bullets",
            items: [
              "Shell n → sub-shells (s, p, d in range of this topic) → orbitals (≤2 e⁻ each).",
              "Ground state = lowest-energy arrangement unless the question says otherwise.",
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Ground-state wording",
            paragraphs: [
              "When asked for an electronic configuration unless stated otherwise, give the lowest-energy arrangement (ground state), not an excited arrangement.",
            ],
          },
        ],
      },
      {
        id: "orbital-capacities",
        title: "Number of orbitals and electron capacities",
        paragraphs: [
          "The s sub-shell has a single orbital and therefore a maximum of two electrons. The p sub-shell has three mutually perpendicular orbitals (pₓ, pᵧ, p_z in a Cartesian choice of axes) and therefore a maximum of six electrons. The d sub-shell has five orbitals and a maximum of ten electrons. These capacity rules are used constantly when checking whether a proposed configuration obeys Pauli exclusion.",
          "Which sub-shells exist for a given n follows the pattern used in this course: n = 1 only 1s; n = 2 has 2s and 2p; n = 3 has 3s, 3p and 3d. You do not occupy 2d, because the first d sub-shell that appears in the Aufbau filling order for neutral atoms in this range is 3d.",
          "The Aufbau principle is the statement that electrons occupy available orbitals so as to give the lowest overall energy arrangement, subject to Pauli exclusion and Hund's rule. In examinations, 'build up' configurations by filling in the syllabus order rather than by guessing orbital energies case by case.",
          "When you count electrons in ions, the capacity rules do not change: you still cannot place more than two electrons in any one orbital. What changes is the total electron count and therefore how far along the filling order you proceed.",
        ],
        blocks: [
          {
            type: "table",
            caption: "Orbital counts and electron capacities by sub-shell",
            columns: ["Sub-shell", "Number of orbitals", "Maximum electrons"],
            rows: [
              ["s", "1", "2"],
              ["p", "3", "6"],
              ["d", "5", "10"],
            ],
          },
          {
            type: "table",
            caption: "Allowed sub-shells in first three shells",
            columns: ["Shell", "Sub-shells present", "Total orbital count"],
            rows: [
              ["n = 1", "1s", "1"],
              ["n = 2", "2s, 2p", "4"],
              ["n = 3", "3s, 3p, 3d", "9"],
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Hund's rule reminder",
            paragraphs: [
              "In degenerate orbitals (for example p or d in the same sub-shell), place electrons singly with parallel spin before pairing.",
            ],
          },
        ],
      },
      {
        id: "energy-order",
        title: "Order of sub-shell energies (first three shells, 4s and 4p)",
        paragraphs: [
          "For the purposes of writing configurations in this syllabus, sub-shell energies increase in the fixed order 1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p. This ordering already encodes the chemically important fact that 4s is occupied before 3d as neutral atoms are built from potassium onwards, even though 3d has the lower principal quantum number.",
          "The 4s/3d inversion is a classic examination trap: filling order for neutral atoms is not always identical to removal order when forming positive ions. In first-row transition metals, once both 3d and 4s are occupied, 4s electrons are often removed first on ionisation because the orbital energies reorder as the nuclear charge and d occupancy change the effective potential.",
          "Relative sub-shell energies arise from a balance of nuclear attraction, shielding and electron-electron repulsion. You are not required to compute those energies numerically at A Level; you are required to apply the given ordering reliably and to justify ionisation and configuration questions using the rules your teacher and specification use for 4s and 3d.",
          "If a question asks for an 'electron-in-box' diagram for a transition-metal atom in its ground state, still fill 4s before 3d for the neutral atom unless the question states a different experimental context.",
        ],
        blocks: [
          {
            type: "equation",
            text: "1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p",
          },
          {
            type: "callout",
            tone: "exam",
            title: "4s versus 3d in ions",
            paragraphs: [
              "Filling order and removal order are different ideas: 4s fills before 3d in many neutral atoms, but for first-row transition-metal cations electrons are removed from 4s before 3d.",
            ],
          },
        ],
      },
      {
        id: "configuration-writing",
        title: "Electronic configurations of atoms and ions",
        paragraphs: [
          "You may write configurations in full (listing all occupied sub-shells from 1s upward) or by noble-gas shorthand (core in square brackets plus valence sub-shells). Both are acceptable if completely unambiguous. For example, bromine is [Ar] 3d¹⁰ 4s² 4p⁵; do not drop the d block just because argon ends at 3p⁶.",
          "For main-group monatomic ions, electron gain or loss is usually clear from the group number and charge: Group 2 loses two s electrons first; Group 16 non-metals often gain electrons into p orbitals until a noble-gas configuration is reached. For transition metals, the examination expectation for first-row species is explicit: remove 4s electrons before 3d when forming common cations such as Fe²⁺, Fe³⁺, Cu²⁺.",
          "Always finish by checking electron total equals atomic number minus cation charge plus anion charge. A quick checksum catches transposed subscripts, missed d electrons, and the common error of writing 4p³ when 4p⁵ is intended.",
          "When a question asks for both an atom and its ion, write them as two separate final lines rather than embedding a long explanation between half-finished configurations. Clarity improves marking reliability.",
          "If asked for an excited-state configuration, label it as such; otherwise assume ground state and use the syllabus sub-shell order without inventing alternative occupancies 'because they look symmetric'.",
        ],
        blocks: [
          {
            type: "steps",
            title: "Steps for writing electronic configurations",
            items: [
              "Find total electrons from atomic number and charge.",
              "Fill sub-shells in the required energy order up to the correct electron total.",
              "Apply Pauli exclusion and Hund's rule while placing electrons.",
              "For cations, remove electrons from the highest-energy occupied sub-shell in that species (4s before 3d for first-row transition metals).",
              "Check total electrons and rewrite in shorthand form if required.",
            ],
          },
          {
            type: "table",
            caption: "Neutral atom versus common cation (first-row transition metal)",
            columns: ["Species", "Shorthand configuration", "Removal note"],
            rows: [
              ["Fe", "[Ar] 3d⁶ 4s²", "4s fills before 3d in the neutral atom"],
              ["Fe²⁺", "[Ar] 3d⁶", "Remove two 4s electrons before 3d when forming Fe²⁺"],
            ],
          },
        ],
      },
      {
        id: "electrons-in-boxes",
        title: "Electrons-in-boxes notation and pairing",
        paragraphs: [
          "Electrons-in-boxes notation represents each orbital as a box and each electron as an arrow. A pair of opposite arrows in one box denotes two electrons occupying the same spatial orbital with paired spins. Single arrows in separate boxes denote unpaired electrons in degenerate orbitals at the same sub-shell energy.",
          "Hund's rule of maximum multiplicity states that for degenerate orbitals the lowest-energy arrangement puts electrons singly into separate orbitals with parallel spins before any pairing occurs. That arrangement reduces electron-electron repulsion because electrons in different spatial orbitals are on average further apart.",
          "The notation is not just bookkeeping: it is the standard way to show whether a species is likely to be paramagnetic, whether a half-filled sub-shell is present, and whether a species qualifies as a radical under the definition used in organic chemistry introductions.",
          "In examination diagrams, arrows must be drawn clearly inside the correct box count: three boxes for p, five for d. Partially erased or ambiguous diagrams lose marks even when the written configuration is correct.",
        ],
        blocks: [
          {
            type: "bullets",
            items: [
              "One box = one orbital; two arrows in one box = opposite spins (Pauli).",
              "Before pairing in a degenerate set (same sub-shell): put one electron in each orbital first (Hund).",
              "In exam diagrams, pairing all three 2p electrons in one box loses marks; spread singly across three boxes first.",
            ],
          },
        ],
      },
      {
        id: "orbital-shapes-and-radicals",
        title: "Orbital shapes and free radicals",
        paragraphs: [
          "The s orbital has spherical symmetry about the nucleus: equal electron probability in all directions at a given distance, once angular averaging is understood at the qualitative level required here. A p orbital has directional character: two lobes separated by a planar node through the nucleus, giving a dumb-bell picture along an axis.",
          "These shapes matter when you visualise overlap in covalent bonding later: head-on overlap along an internuclear axis is commonly associated with σ frameworks built from s and p combinations, while π ideas appear when p lobes overlap sideways. Topic 1 expects naming and sketching in words rather than full quantum-mechanical detail.",
          "A free radical is defined as a species with one or more unpaired electrons. That definition is electronic: it does not say 'anything reactive is a radical'. Many reactive intermediates are not radicals, and some radicals persist longer than intuition suggests if delocalisation stabilises the spin density.",
          "Reactivity of radicals is explained by the tendency to pair electrons to lower energy: addition to π bonds, abstraction of hydrogen atoms, and initiation of polymerisation chains are typical contexts you will meet later. Here, focus on identifying unpaired electrons from 2p³, 3p² and similar configurations and from incomplete box filling.",
        ],
        blocks: [
          {
            type: "bullets",
            items: [
              "s orbital: spherical about the nucleus.",
              "p orbital: dumb-bell; nodal plane through the nucleus between lobes.",
              "Radical: ≥1 unpaired e⁻ (state this in definitions, not only 'very reactive').",
            ],
          },
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Electronic-structure questions are detail-sensitive: the difference between [Ar] 3d⁶ 4s² and [Ar] 3d⁴ 4s² is not a cosmetic slip for iron. Examiners reward correct sub-shell ordering for neutral atoms, correct removal order for transition-metal ions, and correct application of Hund's rule in diagrams.",
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
          "Order of increasing sub-shell energy: 1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p.",
          "4s is filled before 3d when building atoms in order of increasing atomic number.",
        ],
      },
      {
        id: "t1-3-st3",
        question:
          "Write the shorthand electronic configuration of Ca²⁺.",
        modelAnswer: [
          "Calcium atom: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s².",
          "Ca²⁺ has lost two 4s electrons, so Ca²⁺ is [Ar] or 1s² 2s² 2p⁶ 3s² 3p⁶.",
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
          "First ionisation energy, IE₁, is defined as the energy required to remove one electron from each atom in one mole of gaseous atoms to form one mole of gaseous singly charged ions. The definition is deliberately macroscopic (per mole) to match thermochemical data tabulated in kJ mol⁻¹, but the underlying picture is always one electron leaving one atomic centre at a time in the thought experiment the equation represents.",
          "Standard symbol equations use (g) on every atom and ion shown, and include a free electron as e⁻ on the product side. For example, Na(g) → Na⁺(g) + e⁻. Second ionisation energy uses the gaseous singly charged ion as the reactant: Mg⁺(g) → Mg²⁺(g) + e⁻. Third ionisation begins from Mg²⁺(g), and so on. Each line removes exactly one electron; never fold two ionisation steps into one equation in this notation.",
          "Ionisation energies are endothermic quantities: energy must be supplied to work against attraction between nucleus and electron, so values quoted are positive when described as 'energy required'. If you compare two species, higher IE means the electron is harder to remove.",
          "Common presentation errors include writing aqueous ions, omitting (g), starting from a molecular species for IE₁ without justification, or removing two electrons at once. These are not minor stylistic slips: they show misunderstanding of the definition boundary conditions.",
        ],
        blocks: [
          {
            type: "equation",
            text: "X(g) → X⁺(g) + e⁻",
          },
          {
            type: "equation",
            text: "X⁺(g) → X²⁺(g) + e⁻",
          },
          {
            type: "steps",
            title: "Checklist for correct ionisation-energy equations",
            items: [
              "Start with one gaseous species on the left: atom for IE₁, cation for IE₂ and beyond.",
              "Remove exactly one electron only in each equation line.",
              "Write all species as gaseous, including ions: (g).",
              "Use charge balance to check: total charge on both sides must match.",
              "State energy units as kJ mol⁻¹ when quoting numerical values.",
            ],
          },
          {
            type: "table",
            caption: "Examples of accepted gaseous equations",
            columns: ["Ionisation energy", "Equation"],
            rows: [
              ["First IE of sodium", "Na(g) → Na⁺(g) + e⁻"],
              ["Second IE of magnesium", "Mg⁺(g) → Mg²⁺(g) + e⁻"],
              ["Third IE of aluminium", "Al²⁺(g) → Al³⁺(g) + e⁻"],
            ],
          },
          {
            type: "callout",
            tone: "warning",
            title: "Examiner trigger errors",
            items: [
              "Do not write aqueous ions in ionisation-energy equations.",
              "Do not remove two electrons in a single IE equation line.",
              "Do not start IE₁ from molecules such as Cl₂(g).",
            ],
          },
        ],
      },
      {
        id: "core-attraction-model",
        title: "Why ionisation energy has the trends it does",
        paragraphs: [
          "Ionisation energy measures how strongly the outermost electron is bound, which is controlled mainly by electrostatic attraction to the nucleus moderated by electron-electron repulsion and shielding. A simple mental model is that higher effective nuclear attraction on the electron being removed raises IE, while increased distance or shielding lowers IE.",
          "Across a period, nuclear charge increases by one proton per step while added electrons enter the same principal shell for the main trend argument. Inner shells do not multiply as they do down a group, so shielding does not rise rapidly enough to cancel the rising Z. First IE therefore tends to increase from left to right, with the well-known exceptions handled in the next section.",
          "Down a group, each new period adds another occupied inner shell between nucleus and valence shell. Outer electrons are on average further from the nucleus and experience more shielding from core electrons. Even though Z increases down the group, these geometric and screening effects dominate for first ionisation, so IE generally decreases.",
          "When you compare two specific atoms, avoid vague 'size' arguments alone. Link size to distance of the removed electron from the nucleus, link nuclear charge to proton count, and link shielding to inner electron shells and sub-shells. That triad is what mark schemes encode when they ask for 'reasons for trend'.",
        ],
        blocks: [
          {
            type: "equation",
            text: "Attraction ∝ (nuclear charge) / distance²",
          },
          {
            type: "table",
            caption: "Core model for first-ionisation-energy trends",
            columns: ["Change", "Dominant effect", "Net effect on IE₁"],
            rows: [
              ["Across a period", "Higher nuclear charge; outer electron still in same main shell", "Generally increases"],
              ["Across a period", "Shielding increases only slightly", "Increase reinforced"],
              ["Down a group", "Outer electron in higher shell (greater distance)", "Generally decreases"],
              ["Down a group", "More inner-shell shielding", "Decrease reinforced"],
            ],
          },
        ],
      },
      {
        id: "anomalies-across-period",
        title: "Explaining periodic anomalies",
        paragraphs: [
          "Across a period the general first-IE trend is upward, but not monotonic at every step. Cambridge expects you to explain two dips in Period 2 (Be → B and N → O) and to recognise the same patterns again in Period 3 (Mg → Al and P → S). Examiners reward sub-shell arguments and pairing arguments, not memorised graphs without reasoning.",
          "From beryllium to boron, the outer electron removed from boron is in a 2p orbital, whereas beryllium's outer electron is in 2s. The p sub-shell lies higher in energy than the s sub-shell within the same shell, so less energy is required to remove a boron outer electron despite the increase in Z. Magnesium to aluminium repeats the same s → p pattern in n = 3.",
          "From nitrogen to oxygen, nitrogen has a half-filled 2p configuration (three unpaired electrons in three separate orbitals), which is particularly stable. Oxygen adds a fourth 2p electron that must pair in an already occupied orbital, increasing electron-electron repulsion and making one electron slightly easier to remove. Phosphorus to sulfur is the Period 3 analogue with 3p³ versus 3p⁴.",
          "When you answer anomaly questions, name the two elements, state which electron is removed in each case (sub-shell and occupancy), and compare attraction and repulsion effects explicitly. A generic 'down the group' style answer is wrong for across-period anomalies.",
        ],
        blocks: [
          {
            type: "table",
            caption: "Period anomalies required at this level",
            columns: ["Pair", "Observed change in IE₁", "Electronic reason"],
            rows: [
              [
                "Be → B",
                "Falls",
                "Electron removed from 2p in B rather than 2s in Be; 2p is higher in energy and less strongly attracted.",
              ],
              [
                "N → O",
                "Falls",
                "O has one paired 2p electron; electron-electron repulsion in that orbital makes removal easier than from N (2p³ half-filled).",
              ],
              [
                "Mg → Al",
                "Falls",
                "Electron removed from 3p in Al rather than 3s in Mg; 3p is higher in energy and less strongly attracted.",
              ],
              [
                "P → S",
                "Falls",
                "S has one paired 3p electron; repulsion in the paired orbital lowers energy needed for removal.",
              ],
            ],
          },
          {
            type: "equation",
            text: "Half-filled p³ arrangement has no paired-electron repulsion within a p orbital.",
          },
          {
            type: "bullets",
            items: [
              "Period 3 repeats the same ideas: Mg → Al (s vs p removal), P → S (half-filled vs paired p).",
            ],
          },
        ],
      },
      {
        id: "successive-ie-and-shells",
        title: "Successive ionisation energies and shell structure",
        paragraphs: [
          "Successive ionisation energies IE₁, IE₂, IE₃, … measure removal from gaseous species with increasing positive charge. Each step is harder than the last because the same nucleus binds fewer remaining electrons more tightly overall, so values generally climb along the series for a single element.",
          "Within that climb, the pattern is not uniform: when the next electron to be removed comes from a new, inner principal shell, there is a disproportionately large increase because inner-shell electrons are much closer to the nucleus and experience much stronger effective attraction after valence electrons have been stripped away.",
          "Therefore the position of the first very large jump counts how many electrons occupied the outer shell in the neutral atom. If the jump occurs after IE₄, there were four valence electrons removed relatively 'easily' compared with the fifth removal from a core shell.",
          "When interpreting numerical tables, quote the two successive values that bracket the jump and describe qualitatively how much larger the step is than earlier steps. That numerical gesture convinces a marker you are looking at data, not reciting a template.",
        ],
        blocks: [
          {
            type: "steps",
            title: "How to read successive-ionisation data",
            items: [
              "Check that values rise overall from IE₁ onward.",
              "Locate the first very large jump in value.",
              "Count electrons removed before that jump; this equals outer-shell electron number.",
              "Conclude that the next electron would be removed from an inner shell.",
            ],
          },
          {
            type: "equation",
            text: "Large jump after IEₙ ⇒ element has n valence electrons",
          },
        ],
      },
      {
        id: "deducing-position-from-ie-data",
        title: "Using successive IE data to deduce configuration and Periodic Table position",
        paragraphs: [
          "Successive ionisation data is used as evidence for valence electron count and therefore for main-group number in the modern 1–18 numbering: one valence electron corresponds to Group 1 if the first huge jump follows IE₁, two valence electrons to Group 2 if it follows IE₂, and similarly up to the jump after IE₇ for Group 17 valence counts before core removal begins.",
          "The method is powerful but not magic: several elements could share a similar valence count within one period, and transition-metal patterns need d-electron detail beyond the simple jump-counting template. At this stage, examination questions usually supply enough values that the jump is unambiguous and main-group focused.",
          "Always combine jump logic with a sanity check on IE₁ magnitude if the question gives it: alkali metals have relatively low first ionisation energies compared with noble gases in the same period, for example. That comparative language strengthens 'deduce identity' items without claiming impossible precision.",
          "When writing your conclusion, state valence electron number, state likely group, and (if asked) suggest a narrow list of elements consistent with any extra data such as relative IE magnitudes or other properties given in the stem.",
        ],
        blocks: [
          {
            type: "steps",
            title: "Deduction workflow from successive IE values",
            items: [
              "Find the major jump and infer valence-electron number.",
              "Map valence-electron number to main-group position (Groups 1, 2, 13–18).",
              "Use absolute size of IE₁ with context to estimate whether the atom is higher or lower in the group.",
              "State a justified candidate element range, not an unsupported single guess.",
            ],
          },
          {
            type: "table",
            caption: "Quick group deductions from jump position",
            columns: ["Major jump occurs after", "Valence electrons", "Likely main group"],
            rows: [
              ["IE₁", "1", "Group 1"],
              ["IE₂", "2", "Group 2"],
              ["IE₃", "3", "Group 13"],
              ["IE₄", "4", "Group 14"],
              ["IE₅", "5", "Group 15"],
              ["IE₆", "6", "Group 16"],
              ["IE₇", "7", "Group 17"],
            ],
          },
          {
            type: "callout",
            tone: "warning",
            title: "Do not over-claim",
            paragraphs: [
              "Successive IE data alone often gives group confidently; exact period or exact element may need additional context (for example known period or comparison data).",
            ],
          },
        ],
      },
      {
        id: "factor-summary",
        title: "Factors affecting ionisation energy",
        paragraphs: [
          "Syllabus checklists usually collect nuclear charge, atomic or ionic radius (distance of the electron from nucleus), shielding by inner shells and sub-shells, and spin-pair repulsion in the same orbital. Sub-shell type also matters in anomalies: removing a higher-energy sub-shell electron lowers IE compared with removing an s electron from the same n.",
          "Nuclear charge raises IE when comparing species where the electron being removed starts from a similar distance and similar shielding environment. Increased distance or increased shielding reduces attraction and lowers IE. Spin-pair repulsion is a finer effect: it destabilises paired occupancy relative to half-filled arrangements and lowers IE slightly for the next electron added.",
          "In comparisons, decide which factors genuinely differ between the species. If Z increases across a period but the removed electron stays in the same shell, nuclear charge and shielding arguments dominate. If you compare Na and Na⁺, electron count and shell occupancy differ: do not apply the neutral-atom template blindly to ions unless the question matches.",
          "Examination answers should read as short arguments, not lists. Two well-linked factors with correct directions of effect usually beat five factors named without mechanism.",
        ],
        blocks: [
          {
            type: "table",
            caption: "Factor-by-factor effect on ionisation energy",
            columns: ["Factor", "Increase in factor causes...", "Reason"],
            rows: [
              ["Nuclear charge", "IE increases", "Stronger attraction between nucleus and electron."],
              ["Distance of electron from nucleus (radius)", "IE decreases", "Attraction falls with increased distance."],
              ["Shielding by inner electrons", "IE decreases", "Outer electron feels reduced effective nuclear attraction."],
              ["Spin-pair repulsion in same orbital", "IE decreases slightly", "Repulsion makes one electron easier to remove."],
              [
                "Higher-energy sub-shell occupancy (p vs s in same shell)",
                "IE decreases",
                "Electron starts at higher energy and is less tightly held.",
              ],
            ],
          },
          {
            type: "equation",
            text: "Effective attraction = nuclear attraction − shielding effects",
          },
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Ionisation energy is a definition-heavy, explanation-heavy topic. Examiners penalise sloppy equations and reward structured arguments that move from electron configuration to attraction, shielding, distance and repulsion as appropriate. Anomalies must be tied to sub-shell changes or pairing, not to hand-waving about 'stability' without electronic detail.",
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
          "Al2+(g) -> Al3+(g) + e-.",
          "Third ionisation removes the electron from the 3p sub-shell after two 3p electrons were already removed in earlier steps (overall from Al+ to Al3+ context as defined by question).",
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
