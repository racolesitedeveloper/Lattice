import type { NoteDraft } from "./types";

/** Full teaching notes for 9702 Topic 22 - subtopics 22.1-22.4 (see lib/notes/AUTHORING.md). */
export const PHYSICS_TOPIC22_DRAFTS: Record<string, NoteDraft> = {
  "t22-1": {
    noteId: "t22-1",
    syllabusNotes: [
      {
        id: "particulate-nature-and-photon-idea",
        title: "Electromagnetic radiation and photons",
        paragraphs: [
          "Electromagnetic radiation shows a particulate nature in many experiments. In this particle description, radiation is emitted and absorbed in discrete packets called photons.",
          "A photon is a quantum of electromagnetic energy. This means energy exchange between matter and radiation is not continuous at all values, but occurs in specific packets linked to radiation frequency.",
          "The photon model does not replace the wave model entirely; both are needed in quantum physics. In this subtopic, the focus is on the particle description and its energy-momentum relations.",
        ],
      },
      {
        id: "photon-energy-equation",
        title: "Photon energy and frequency: E = hf",
        paragraphs: [
          "Photon energy is given by E = hf, where h is Planck constant and f is frequency.",
          "Using h = 6.63 x 10⁻³⁴ J s and f in Hz gives E in joules. Because frequency can be very large for visible and higher-frequency radiation, photon energies are often of order 10⁻¹⁹ J to 10⁻¹⁵ J in syllabus applications.",
          "Since f = c/λ in free space, photon energy is also inversely proportional to wavelength. Shorter wavelength radiation carries higher-energy photons.",
        ],
      },
      {
        id: "electronvolt-usage",
        title: "Using the electronvolt as an energy unit",
        paragraphs: [
          "The electronvolt (eV) is a convenient unit for atomic and quantum-scale energies.",
          "1 eV is the energy gained by one elementary charge moving through a potential difference of 1 V. Numerically, 1 eV = 1.60 x 10⁻¹⁹ J.",
          "Converting between eV and J is common in exam questions. Keep clear whether an answer is required per photon, per electron, or for a total number of particles.",
        ],
      },
      {
        id: "photon-momentum",
        title: "Photon momentum: p = E/c",
        paragraphs: [
          "Although photons have zero rest mass, they carry momentum. The required relation is p = E/c.",
          "Combining with E = hf gives p = hf/c and therefore p = h/λ. This shows momentum increases as wavelength decreases.",
          "Photon momentum is central in processes such as radiation pressure and photon-electron interactions, where momentum conservation is applied even when photon rest mass is zero.",
        ],
      },
      {
        id: "summary-links",
        title: "Core links to retain",
        paragraphs: [
          "For Topic 22.1 calculations, the key equations are E = hf, p = E/c and 1 eV = 1.60 x 10⁻¹⁹ J.",
          "A useful exam sequence is often frequency or wavelength to E, then E to p if needed.",
          "State units explicitly: J or eV for energy, kg m s⁻¹ for momentum, Hz for frequency, and m for wavelength.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Examiners usually award these marks quickly when equations, units and conversions are handled consistently. Most losses come from unit slips and mixing wave-speed formulas with photon formulas without clear steps.",
      items: [
        "Using E = hcλ instead of E = hc/λ (wavelength relation inverted).",
        "Forgetting to convert eV to J before using p = E/c in SI.",
        "Writing photon momentum as p = mc using zero rest mass and concluding p = 0.",
        "Using c = 3.0 x 10⁸ with wavelength in nm but not converting nm to m.",
        "Quoting energy in eV after calculation in J without numerical conversion, or vice versa.",
      ],
    },
    workedExamples: [
      {
        id: "t22-1-ex1",
        title: "Photon energy from frequency and conversion to eV",
        problem: [
          "Ultraviolet radiation has frequency 1.20 x 10¹⁵ Hz. Calculate photon energy in (a) joules and (b) electronvolts. Use h = 6.63 x 10⁻³⁴ J s and 1 eV = 1.60 x 10⁻¹⁹ J.",
        ],
        solution: [
          "Use E = hf.",
          "E = (6.63 x 10⁻³⁴)(1.20 x 10¹⁵) = 7.96 x 10⁻¹⁹ J.",
          "Convert to eV: E = (7.96 x 10⁻¹⁹)/(1.60 x 10⁻¹⁹) = 4.98 eV.",
          "So photon energy is 7.96 x 10⁻¹⁹ J, or about 5.0 eV.",
        ],
      },
      {
        id: "t22-1-ex2",
        title: "Photon momentum from wavelength",
        problem: [
          "A photon has wavelength 550 nm in free space. Find its momentum. Use h = 6.63 x 10⁻³⁴ J s and c = 3.00 x 10⁸ m s⁻¹.",
        ],
        solution: [
          "Use p = h/λ (equivalent to p = E/c).",
          "Convert wavelength: 550 nm = 5.50 x 10⁻⁷ m.",
          "p = (6.63 x 10⁻³⁴)/(5.50 x 10⁻⁷) = 1.21 x 10⁻²⁷ kg m s⁻¹.",
          "Photon momentum is 1.21 x 10⁻²⁷ kg m s⁻¹.",
        ],
      },
      {
        id: "t22-1-ex3",
        title: "Energy and momentum sequence in eV then SI",
        problem: [
          "An X-ray photon has energy 8.0 keV. Calculate its momentum in SI units.",
        ],
        solution: [
          "Convert energy to joules: 8.0 keV = 8.0 x 10³ eV = 8.0 x 10³ x 1.60 x 10⁻¹⁹ J = 1.28 x 10⁻¹⁵ J.",
          "Use p = E/c.",
          "p = (1.28 x 10⁻¹⁵)/(3.00 x 10⁸) = 4.27 x 10⁻²⁴ kg m s⁻¹.",
          "Momentum is 4.27 x 10⁻²⁴ kg m s⁻¹.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t22-1-st1",
        question: "State what is meant by a photon and by a quantum of electromagnetic energy.",
        modelAnswer: [
          "A photon is a discrete packet of electromagnetic radiation.",
          "Calling it a quantum means energy exchange between radiation and matter occurs in packets, not continuously at arbitrary values.",
        ],
      },
      {
        id: "t22-1-st2",
        question: "Write the equation linking photon energy and frequency, and define each symbol.",
        modelAnswer: [
          "E = hf, where E is photon energy, h is Planck constant, and f is radiation frequency.",
        ],
      },
      {
        id: "t22-1-st3",
        question: "Define 1 eV and convert it to joules.",
        modelAnswer: [
          "1 eV is the energy gained by one elementary charge moving through 1 V.",
          "1 eV = 1.60 x 10⁻¹⁹ J.",
        ],
      },
      {
        id: "t22-1-st4",
        question: "A photon has energy 3.2 x 10⁻¹⁹ J. Calculate its momentum.",
        modelAnswer: [
          "Use p = E/c.",
          "p = (3.2 x 10⁻¹⁹)/(3.00 x 10⁸) = 1.07 x 10⁻²⁷ kg m s⁻¹.",
        ],
      },
      {
        id: "t22-1-st5",
        question: "Explain why shorter-wavelength electromagnetic radiation has larger photon momentum.",
        modelAnswer: [
          "From p = h/λ, momentum is inversely proportional to wavelength.",
          "So decreasing λ increases p.",
        ],
      },
    ],
  },

  "t22-2": {
    noteId: "t22-2",
    syllabusNotes: [
      {
        id: "photoelectric-emission-observation",
        title: "What the photoelectric effect shows",
        paragraphs: [
          "Photoelectric emission is the release of electrons (photoelectrons) from a metal surface when electromagnetic radiation falls on it.",
          "Emission occurs only if radiation frequency is high enough. This threshold behavior is a central experimental observation and cannot be explained by a purely classical wave-energy accumulation model.",
          "The effect gives direct evidence that radiation energy arrives in photons, each interacting mainly with one electron at the surface.",
        ],
      },
      {
        id: "threshold-frequency-wavelength",
        title: "Threshold frequency and threshold wavelength",
        paragraphs: [
          "Each metal has a threshold frequency f₀: the minimum frequency required for photoemission.",
          "Equivalent threshold wavelength is λ₀ = c/f₀, the maximum wavelength that can still cause emission. Radiation with wavelength longer than λ₀ does not emit electrons, regardless of intensity.",
          "Threshold values depend on the metal because electron binding at the surface differs by material.",
        ],
      },
      {
        id: "work-function-and-einstein-equation",
        title: "Work function and the photoelectric equation",
        paragraphs: [
          "The work function Φ is the minimum energy needed to remove an electron from the metal surface.",
          "Photon energy is hf. If hf is at least Φ, emission is possible and remaining energy appears as photoelectron kinetic energy.",
          "For the fastest emitted electrons, Einstein’s equation is hf = Φ + ½mvₘₐₓ².",
          "At threshold, vₘₐₓ = 0, so hf₀ = Φ. This links work function directly to threshold frequency.",
        ],
      },
      {
        id: "intensity-vs-kinetic-energy",
        title: "Why intensity changes current but not maximum kinetic energy",
        paragraphs: [
          "At fixed frequency above threshold, increasing intensity increases photon flux (photons per second), so more electrons are emitted per second and photoelectric current increases.",
          "However, maximum kinetic energy depends on photon energy hf and work function Φ, not on number of photons. So at fixed frequency, intensity does not change ½mvₘₐₓ².",
          "At fixed intensity, increasing frequency raises photon energy and therefore increases maximum kinetic energy (and stopping potential in associated experiments).",
        ],
      },
      {
        id: "exam-interpretation",
        title: "Interpreting typical data and graphs",
        paragraphs: [
          "In current-frequency observations, no emission occurs below threshold even at high intensity.",
          "In stopping-potential interpretation, eVₛ = ½mvₘₐₓ², so larger stopping potential indicates larger maximum kinetic energy.",
          "A clear explanation should always distinguish between number of emitted electrons (current) and energy of most energetic electrons.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Photoelectric questions are often conceptual plus one equation line. Examiners mainly penalise mixing up intensity and frequency roles or using threshold terms inaccurately.",
      items: [
        "Saying higher intensity can cause emission below threshold frequency.",
        "Claiming intensity increases maximum kinetic energy at fixed frequency.",
        "Using hf = Φ + mvₘₐₓ² and missing the 1/2 factor.",
        "Confusing threshold wavelength as minimum wavelength rather than maximum wavelength for emission.",
        "Describing photoelectron release as accumulation of wave energy over long time for low-frequency radiation.",
      ],
    },
    workedExamples: [
      {
        id: "t22-2-ex1",
        title: "Finding maximum kinetic energy from Einstein equation",
        problem: [
          "A metal has work function Φ = 2.30 eV. It is illuminated with photons of energy 3.10 eV. Calculate maximum kinetic energy of emitted photoelectrons in (a) eV and (b) joules.",
        ],
        solution: [
          "Use hf = Φ + KEₘₐₓ.",
          "KEₘₐₓ = hf - Φ = 3.10 - 2.30 = 0.80 eV.",
          "Convert to joules: 0.80 eV = 0.80 x 1.60 x 10⁻¹⁹ = 1.28 x 10⁻¹⁹ J.",
          "Maximum kinetic energy is 0.80 eV, or 1.28 x 10⁻¹⁹ J.",
        ],
      },
      {
        id: "t22-2-ex2",
        title: "Threshold wavelength from work function",
        problem: [
          "The work function of a metal is 4.0 x 10⁻¹⁹ J. Find (a) threshold frequency and (b) threshold wavelength. Use h = 6.63 x 10⁻³⁴ J s and c = 3.00 x 10⁸ m s⁻¹.",
        ],
        solution: [
          "At threshold, hf₀ = Φ.",
          "f₀ = Φ/h = (4.0 x 10⁻¹⁹)/(6.63 x 10⁻³⁴) = 6.03 x 10¹⁴ Hz.",
          "Then λ₀ = c/f₀ = (3.00 x 10⁸)/(6.03 x 10¹⁴) = 4.98 x 10⁻⁷ m.",
          "So threshold frequency is 6.03 x 10¹⁴ Hz and threshold wavelength is 4.98 x 10⁻⁷ m (498 nm).",
        ],
      },
      {
        id: "t22-2-ex3",
        title: "Qualitative comparison of two illumination changes",
        problem: [
          "A metal is illuminated above threshold. Compare effects on photoelectric current and maximum kinetic energy for (i) doubling intensity at fixed frequency, and (ii) increasing frequency at fixed intensity.",
        ],
        solution: [
          "(i) Doubling intensity increases photon flux, so photoelectric current increases. Maximum kinetic energy stays unchanged because hf is unchanged.",
          "(ii) Increasing frequency raises hf, so maximum kinetic energy increases. Current trend depends on photon flux details, but at fixed intensity the number of photons per second can decrease as each photon carries more energy.",
          "The key syllabus point is: KEₘₐₓ depends on frequency, current depends mainly on intensity (for frequency above threshold).",
        ],
      },
    ],
    selfTest: [
      {
        id: "t22-2-st1",
        question: "Define threshold frequency and threshold wavelength for photoelectric emission.",
        modelAnswer: [
          "Threshold frequency f₀ is the minimum radiation frequency that can cause photoemission from a metal.",
          "Threshold wavelength λ₀ is the maximum wavelength that can still cause emission, with λ₀ = c/f₀.",
        ],
      },
      {
        id: "t22-2-st2",
        question: "State the photoelectric equation and define each symbol.",
        modelAnswer: [
          "hf = Φ + ½mvₘₐₓ².",
          "h is Planck constant, f is radiation frequency, Φ is work function, m is electron mass, and vₘₐₓ is maximum photoelectron speed.",
        ],
      },
      {
        id: "t22-2-st3",
        question: "Why does increasing light intensity below threshold frequency not produce photoelectrons?",
        modelAnswer: [
          "Below threshold, each photon has energy less than the work function Φ.",
          "Increasing intensity increases number of photons but not energy per photon, so electrons still cannot escape.",
        ],
      },
      {
        id: "t22-2-st4",
        question: "A metal has threshold frequency 5.5 x 10¹⁴ Hz. Calculate its work function in joules.",
        modelAnswer: [
          "Φ = hf₀ = (6.63 x 10⁻³⁴)(5.5 x 10¹⁴) = 3.65 x 10⁻¹⁹ J.",
        ],
      },
      {
        id: "t22-2-st5",
        question: "At fixed frequency above threshold, why is photoelectric current proportional to intensity?",
        modelAnswer: [
          "Higher intensity means more photons arrive each second.",
          "More photons eject more electrons each second, so current increases proportionally.",
        ],
      },
    ],
  },

  "t22-3": {
    noteId: "t22-3",
    syllabusNotes: [
      {
        id: "dual-evidence",
        title: "Wave and particle evidence in quantum physics",
        paragraphs: [
          "Quantum physics uses wave-particle duality: radiation and matter show both wave-like and particle-like behavior in different experiments.",
          "The photoelectric effect supports particle behavior of electromagnetic radiation, because energy transfer occurs via individual photons with E = hf.",
          "Interference and diffraction of light support wave behavior, because these patterns arise from superposition and phase relationships.",
          "A complete model therefore needs both descriptions, chosen according to the physical process being analyzed.",
        ],
      },
      {
        id: "electron-diffraction-evidence",
        title: "Electron diffraction as evidence for wave nature of particles",
        paragraphs: [
          "When electron beams pass through thin crystalline material, they produce diffraction patterns such as rings or maxima at specific angles.",
          "Diffraction is a wave phenomenon, so this observation is qualitative evidence that moving electrons have wave properties.",
          "The pattern changes with electron momentum: higher momentum gives shorter associated wavelength and changes diffraction geometry accordingly.",
        ],
      },
      {
        id: "de-broglie-concept",
        title: "De Broglie wavelength of moving particles",
        paragraphs: [
          "The de Broglie hypothesis states that a moving particle has associated wavelength λ.",
          "The required relation is λ = h/p, where p is particle momentum.",
          "For non-relativistic particles, p = mv, so λ = h/(mv). Larger momentum gives smaller wavelength.",
          "For macroscopic objects, momentum is large so λ is extremely small and wave effects are not observable in ordinary conditions.",
        ],
      },
      {
        id: "using-lambda-h-over-p",
        title: "Applying λ = h/p in problems",
        paragraphs: [
          "Use SI units: h in J s and p in kg m s⁻¹ gives λ in metres.",
          "If kinetic energy is given for a non-relativistic particle, first find momentum from p = sqrt(2mEₖ), then use λ = h/p.",
          "Comparisons are often required: particles with smaller mass at the same speed have larger de Broglie wavelength.",
        ],
      },
      {
        id: "interpretation-scope",
        title: "Interpreting duality statements carefully",
        paragraphs: [
          "Wave-particle duality does not mean a particle is half-wave and half-particle at the same instant in classical terms. It means quantum entities require models with both aspects to explain all observations.",
          "In exam answers, cite a specific experiment for each aspect: photoelectric effect for particle behavior of radiation, and interference/diffraction for wave behavior (including electron diffraction for particles).",
          "Keep evidence and claim paired clearly to secure explanation marks.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Duality questions are usually conceptual with one de Broglie calculation. Examiners mainly penalise vague claims that do not tie to specific evidence.",
      items: [
        "Using photoelectric effect as wave evidence instead of particle evidence.",
        "Saying diffraction proves particles are literally classical waves rather than showing wave behavior.",
        "Applying λ = h/p but using p in eV directly without conversion to SI momentum.",
        "Forgetting that λ decreases when momentum increases.",
        "Writing de Broglie equation as λ = p/h.",
      ],
    },
    workedExamples: [
      {
        id: "t22-3-ex1",
        title: "De Broglie wavelength from momentum",
        problem: [
          "An electron has momentum 3.0 x 10⁻²⁴ kg m s⁻¹. Calculate its de Broglie wavelength. Use h = 6.63 x 10⁻³⁴ J s.",
        ],
        solution: [
          "Use λ = h/p.",
          "λ = (6.63 x 10⁻³⁴)/(3.0 x 10⁻²⁴) = 2.21 x 10⁻¹⁰ m.",
          "De Broglie wavelength is 2.21 x 10⁻¹⁰ m.",
        ],
      },
      {
        id: "t22-3-ex2",
        title: "Comparing wavelengths of particles with different mass",
        problem: [
          "A proton and an electron move at the same speed. Compare their de Broglie wavelengths qualitatively.",
        ],
        solution: [
          "At the same speed, momentum p = mv is proportional to mass.",
          "The proton has much larger mass, so it has much larger momentum.",
          "Since λ = h/p, the proton has much smaller de Broglie wavelength than the electron.",
        ],
      },
      {
        id: "t22-3-ex3",
        title: "Linking evidence to duality",
        problem: [
          "Give one experiment showing particle behavior of electromagnetic radiation and one experiment showing wave behavior of particles, and explain each link in one sentence.",
        ],
        solution: [
          "Photoelectric effect shows particle behavior of radiation because electrons are emitted only when individual photon energy hf exceeds work function.",
          "Electron diffraction shows wave behavior of particles because electrons form diffraction patterns characteristic of wave interference.",
          "Together these results support wave-particle duality.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t22-3-st1",
        question: "State what is meant by wave-particle duality.",
        modelAnswer: [
          "Wave-particle duality means quantum entities (radiation and matter) show both wave-like and particle-like behavior, depending on the experiment.",
        ],
      },
      {
        id: "t22-3-st2",
        question: "Which type of evidence does the photoelectric effect provide for electromagnetic radiation, and why?",
        modelAnswer: [
          "It provides particle evidence, because energy transfer occurs in photons and emission depends on photon energy per electron.",
        ],
      },
      {
        id: "t22-3-st3",
        question: "Write the de Broglie equation and define each symbol.",
        modelAnswer: [
          "λ = h/p, where λ is de Broglie wavelength, h is Planck constant, and p is particle momentum.",
        ],
      },
      {
        id: "t22-3-st4",
        question: "A neutron has momentum 1.5 x 10⁻²⁴ kg m s⁻¹. Find its associated wavelength.",
        modelAnswer: [
          "λ = h/p = (6.63 x 10⁻³⁴)/(1.5 x 10⁻²⁴) = 4.42 x 10⁻¹⁰ m.",
        ],
      },
      {
        id: "t22-3-st5",
        question: "Explain qualitatively why macroscopic objects do not show observable diffraction in everyday situations.",
        modelAnswer: [
          "They have very large momentum, so λ = h/p is extremely small.",
          "Their associated wavelength is far too small for practical diffraction setups.",
        ],
      },
    ],
  },

  "t22-4": {
    noteId: "t22-4",
    syllabusNotes: [
      {
        id: "discrete-energy-levels",
        title: "Discrete electron energy levels in isolated atoms",
        paragraphs: [
          "Electrons in isolated atoms can occupy only specific allowed energy levels, not a continuous range.",
          "These levels are quantised. An electron cannot exist with arbitrary intermediate energy between two allowed states in an isolated atom model such as atomic hydrogen.",
          "Higher levels correspond to less negative (higher) electron energy relative to the ionisation limit, while lower levels are more tightly bound.",
        ],
      },
      {
        id: "transitions-and-photon-energy",
        title: "Photon emission and absorption in transitions",
        paragraphs: [
          "When an electron moves between two levels, atom energy changes by a discrete amount.",
          "A photon is emitted when the electron drops from higher energy to lower energy. A photon is absorbed when the electron is raised from lower to higher energy.",
          "The photon energy is linked to level difference by hf = E₁ - E₂, where E₁ and E₂ are the two level energies with correct sign and order for the transition described.",
        ],
      },
      {
        id: "line-spectra-formation",
        title: "Formation of emission and absorption line spectra",
        paragraphs: [
          "An emission line spectrum is produced when excited atoms de-excite and emit photons at specific wavelengths corresponding to allowed energy differences.",
          "An absorption line spectrum is produced when continuous radiation passes through cooler atoms and photons of specific energies are absorbed to promote electrons upward.",
          "Because only certain transitions are allowed, both emission and absorption spectra consist of discrete lines rather than a continuous spread.",
        ],
      },
      {
        id: "spectral-pattern-interpretation",
        title: "Why each element has characteristic lines",
        paragraphs: [
          "Each element has a unique set of energy levels, so its allowed transition energies are unique.",
          "Therefore spectral line wavelengths are characteristic of the element and can be used for identification in laboratory and astronomical spectra.",
          "Line positions correspond to photon energy differences, while line intensity depends on population of states and transition probabilities.",
        ],
      },
      {
        id: "using-hf-e1-e2",
        title: "Applying hf = E₁ - E₂ in calculations",
        paragraphs: [
          "Use energy units consistently. If level values are in eV, either keep photon energy in eV first or convert carefully to joules when using h in SI.",
          "Once photon energy is known, frequency is f = E/h and wavelength is λ = c/f = hc/E.",
          "In exam work, include direction of transition (upward or downward) to decide whether the line is absorption or emission.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Line-spectrum questions test understanding of quantised levels and transition energy differences. Examiners mostly penalise reversed transition logic and inconsistent energy units.",
      items: [
        "Describing atomic energies as continuous rather than discrete.",
        "Saying emission occurs when electrons absorb energy and move upward.",
        "Using hf = E₂ - E₁ blindly without matching the level ordering in the question.",
        "Mixing eV and J in one equation step without conversion.",
        "Claiming absorption and emission lines occur at unrelated wavelengths for the same atomic transitions.",
      ],
    },
    workedExamples: [
      {
        id: "t22-4-ex1",
        title: "Photon frequency from level difference in eV",
        problem: [
          "An electron transition in hydrogen has energy difference 2.55 eV. Calculate the photon frequency. Use h = 6.63 x 10⁻³⁴ J s and 1 eV = 1.60 x 10⁻¹⁹ J.",
        ],
        solution: [
          "Convert energy: E = 2.55 x 1.60 x 10⁻¹⁹ = 4.08 x 10⁻¹⁹ J.",
          "Use f = E/h.",
          "f = (4.08 x 10⁻¹⁹)/(6.63 x 10⁻³⁴) = 6.15 x 10¹⁴ Hz.",
          "Photon frequency is 6.15 x 10¹⁴ Hz.",
        ],
      },
      {
        id: "t22-4-ex2",
        title: "Emission versus absorption classification",
        problem: [
          "State whether each process gives emission or absorption line: (a) electron moves from -1.5 eV to -3.4 eV, (b) electron moves from -3.4 eV to -1.5 eV.",
        ],
        solution: [
          "(a) Energy decreases (becomes more negative), so photon is emitted: emission line.",
          "(b) Energy increases (less negative), so photon must be absorbed: absorption line.",
          "Both involve the same energy difference, so associated wavelength is the same in emission and absorption spectra for that transition.",
        ],
      },
      {
        id: "t22-4-ex3",
        title: "Wavelength from level energies",
        problem: [
          "An electron drops from level E₁ = -2.0 eV to E₂ = -5.0 eV in an atom. Calculate emitted photon wavelength. Use hc = 1240 eV nm.",
        ],
        solution: [
          "Energy difference magnitude is |E₁ - E₂| = |-2.0 - (-5.0)| = 3.0 eV.",
          "Use λ = hc/E with E in eV and hc in eV nm.",
          "λ = 1240/3.0 = 413 nm.",
          "Emitted wavelength is about 4.13 x 10² nm.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t22-4-st1",
        question: "What is meant by discrete electron energy levels in isolated atoms?",
        modelAnswer: [
          "Electrons can occupy only specific allowed energies, not a continuous range of values.",
        ],
      },
      {
        id: "t22-4-st2",
        question: "Explain how an emission line spectrum is formed.",
        modelAnswer: [
          "Excited electrons drop to lower allowed levels and emit photons with energies equal to level differences.",
          "Only specific transition energies are allowed, so emitted wavelengths form discrete lines.",
        ],
      },
      {
        id: "t22-4-st3",
        question: "Explain how an absorption line spectrum is formed.",
        modelAnswer: [
          "Continuous radiation passes through cooler atoms.",
          "Photons with energies matching upward transitions are absorbed, leaving dark lines at those wavelengths.",
        ],
      },
      {
        id: "t22-4-st4",
        question: "Write the equation linking photon energy and two electron energy levels, and define the symbols.",
        modelAnswer: [
          "hf = E₁ - E₂ for a transition between levels E₁ and E₂ with consistent ordering for the process.",
          "h is Planck constant and f is photon frequency.",
        ],
      },
      {
        id: "t22-4-st5",
        question: "A transition has energy difference 1.90 eV. Calculate photon wavelength using hc = 1240 eV nm.",
        modelAnswer: [
          "λ = hc/E = 1240/1.90 = 653 nm.",
        ],
      },
    ],
  },
};
