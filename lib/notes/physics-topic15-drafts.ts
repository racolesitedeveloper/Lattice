import type { NoteDraft } from "./types";

/** Full teaching notes for 9702 Topic 15 — subtopics 15.1–15.3 (see lib/notes/AUTHORING.md). */
export const PHYSICS_TOPIC15_DRAFTS: Record<string, NoteDraft> = {
  "t15-1": {
    noteId: "t15-1",
    syllabusNotes: [
      {
        id: "amount-of-substance-as-base-quantity",
        title: "Amount of substance as an SI base quantity",
        paragraphs: [
          "Amount of substance is an SI base quantity with symbol n and base unit mol (mole). It is not a derived quantity such as mass per volume; it is one of the fundamental counting-based quantities in SI.",
          "In chemistry and thermal physics, amount of substance connects microscopic particle count to macroscopic measurable quantities. Instead of counting molecules directly, we count in moles, which are practical large-scale units.",
          "You should treat n as a quantity with its own unit mol, just as mass has kg and time has s.",
        ],
      },
      {
        id: "avogadro-constant-and-one-mole",
        title: "One mole and the Avogadro constant",
        paragraphs: [
          "One mole of any substance contains the same number of specified particles: the Avogadro constant Nₐ.",
          "Numerically, Nₐ = 6.02 x 10²³ mol⁻¹ (often 6.022 x 10²³ mol⁻¹ in data tables). The unit mol⁻¹ means per mole.",
          "The particles must be clearly specified: molecules, atoms, ions or electrons depending on context. One mole of O₂ molecules is not the same as one mole of O atoms.",
        ],
      },
      {
        id: "linking-particles-and-moles",
        title: "Converting between particle number and amount of substance",
        paragraphs: [
          "The key relation is N = nNₐ, where N is number of particles and n is amount of substance in mol.",
          "Rearrangements are n = N/Nₐ and Nₐ = N/n. This relation is central in ideal-gas work because gas equations may be written in terms of n or N.",
          "Always keep particle identity consistent. If N counts molecules, then n is amount of molecules. If N counts atoms, n refers to amount of atoms.",
        ],
      },
      {
        id: "molar-quantities-in-gas-context",
        title: "Molar quantities in gas calculations",
        paragraphs: [
          "In Topic 15, the mole is used mainly to express gas amount in the equation of state pV = nRT. Here n gives how much gas is present independently of pressure and temperature conditions.",
          "For two gas samples under the same conditions, the sample with larger n has more particles and usually occupies greater volume if pressure is fixed.",
          "Because n is proportional to N, any conclusion about moles can be restated in terms of number of molecules.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Examiners reward precise language about what is being counted and how n, N and Nₐ are related. Most errors are definition and symbol errors rather than difficult algebra.",
      items: [
        "Writing N = n/Nₐ instead of N = nNₐ.",
        "Treating Nₐ as dimensionless; its unit is mol⁻¹.",
        "Calling mole a derived unit rather than an SI base unit.",
        "Failing to state what particle type is counted (atoms vs molecules vs ions).",
        "Using mass directly as though it were amount of substance without converting by an appropriate relation.",
      ],
    },
    workedExamples: [
      {
        id: "t15-1-ex1",
        title: "Particles from amount of substance",
        problem: [
          "A sample contains 0.250 mol of helium atoms. Find the number of helium atoms. Use Nₐ = 6.02 x 10²³ mol⁻¹.",
        ],
        solution: [
          "Use N = nNₐ.",
          "N = 0.250 x 6.02 x 10²³ = 1.505 x 10²³.",
          "So the sample contains 1.51 x 10²³ helium atoms (3 s.f.).",
        ],
      },
      {
        id: "t15-1-ex2",
        title: "Amount of substance from molecule count",
        problem: [
          "A gas sample has 3.01 x 10²² molecules. Calculate amount of substance in mol.",
        ],
        solution: [
          "Use n = N/Nₐ.",
          "n = (3.01 x 10²²) / (6.02 x 10²³) = 5.00 x 10⁻² mol.",
          "Amount of substance is 0.0500 mol.",
        ],
      },
      {
        id: "t15-1-ex3",
        title: "Comparing two samples by moles and particles",
        problem: [
          "Sample A has 0.80 mol of gas molecules and sample B has 0.50 mol. Find the ratio of numbers of molecules in sample A to sample B.",
        ],
        solution: [
          "Since N = nNₐ, number of molecules is proportional to n.",
          "So molecules in sample A : molecules in sample B = 0.80:0.50 = 8:5.",
          "Sample A has 1.6 times as many molecules as sample B.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t15-1-st1",
        question: "State the SI base quantity and SI base unit for amount of substance.",
        modelAnswer: [
          "The SI base quantity is amount of substance, symbol n.",
          "Its SI base unit is the mole (mol).",
        ],
      },
      {
        id: "t15-1-st2",
        question: "Define one mole using the Avogadro constant.",
        modelAnswer: [
          "One mole is the amount of substance containing Nₐ specified particles, where Nₐ is the Avogadro constant.",
        ],
      },
      {
        id: "t15-1-st3",
        question: "Write the relation linking particle number N, amount n and Avogadro constant Nₐ.",
        modelAnswer: ["N = nNₐ (equivalently n = N/Nₐ)."],
      },
      {
        id: "t15-1-st4",
        question:
          "A sample contains 1.20 mol of molecules. Calculate number of molecules using Nₐ = 6.02 x 10²³ mol⁻¹.",
        modelAnswer: [
          "N = nNₐ = 1.20 x 6.02 x 10²³ = 7.22 x 10²³ molecules (3 s.f.).",
        ],
      },
      {
        id: "t15-1-st5",
        question:
          "Why is it important to specify particle type when using n and N (for example atoms rather than molecules)?",
        modelAnswer: [
          "Because n and N count specified entities.",
          "One mole of molecules and one mole of atoms both contain Nₐ particles, but they refer to different physical entities and therefore different sample descriptions.",
        ],
      },
    ],
  },

  "t15-2": {
    noteId: "t15-2",
    syllabusNotes: [
      {
        id: "ideal-gas-condition",
        title: "Equation-of-state behaviour and ideal-gas definition",
        paragraphs: [
          "A gas that obeys pV proportional to T (thermodynamic temperature) is called an ideal gas.",
          "This means that for a fixed amount of gas, pV/T is constant. The temperature must be in kelvin, not in degrees Celsius.",
          "Real gases approximate this behaviour most closely at low pressure and high temperature where intermolecular effects are less important.",
        ],
      },
      {
        id: "ideal-gas-equation-mole-form",
        title: "Ideal-gas equation in mole form: pV = nRT",
        paragraphs: [
          "For n moles of an ideal gas, the equation of state is pV = nRT.",
          "Here p is pressure (Pa), V is volume (m³), n is amount of substance (mol), T is thermodynamic temperature (K), and R is the molar gas constant (8.31 J mol⁻¹ K⁻¹).",
          "This equation combines Boyle-style, Charles-style and pressure-law trends into one relation for ideal behaviour.",
        ],
      },
      {
        id: "ideal-gas-equation-particle-form",
        title: "Ideal-gas equation in particle form: pV = NkT",
        paragraphs: [
          "The same state relation can be written in microscopic counting form as pV = NkT, where N is number of molecules and k is the Boltzmann constant.",
          "This form is useful when data are given per molecule rather than per mole. It connects directly to kinetic-theory expressions used in subtopic 15.3.",
          "Both pV = nRT and pV = NkT describe the same macroscopic state for an ideal gas.",
        ],
      },
      {
        id: "connection-between-R-k-and-NA",
        title: "Connecting constants: k = R/Nₐ",
        paragraphs: [
          "Because N = nNₐ, substituting into pV = NkT gives pV = nNₐkT.",
          "Comparing with pV = nRT shows R = Nₐk, so k = R/Nₐ.",
          "This relation links one-mole scaling (R) to one-particle scaling (k).",
        ],
      },
      {
        id: "practical-use-and-unit-discipline",
        title: "Using the equation of state reliably",
        paragraphs: [
          "In calculations, convert all quantities to SI before substitution: pressure in Pa, volume in m³, temperature in K.",
          "If temperature is given as θ in degrees Celsius, convert using T/K = θ/°C + 273.15.",
          "Use one equation form consistently in a line of working. Do not mix n and N unless you explicitly convert with N = nNₐ.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Equation-of-state questions are usually method marks for setup, units and correct constant use. Most mistakes are kelvin conversion or mixing mole and molecule forms.",
      items: [
        "Using temperature in °C directly in pV = nRT or pV = NkT.",
        "Using volume in cm³ without converting to m³.",
        "Confusing R and k, or using the wrong one for n or N form.",
        "Assuming pV proportional to T always holds exactly for all real gases.",
        "Mixing n and N in one expression without using N = nNₐ.",
      ],
    },
    workedExamples: [
      {
        id: "t15-2-ex1",
        title: "Finding pressure with pV = nRT",
        problem: [
          "A container holds 0.50 mol of an ideal gas at temperature 300 K in volume 2.4 x 10⁻³ m³. Calculate pressure. Use R = 8.31 J mol⁻¹ K⁻¹.",
        ],
        solution: [
          "Use p = nRT/V.",
          "p = (0.50 x 8.31 x 300) / (2.4 x 10⁻³).",
          "p = 5.19 x 10⁵ Pa.",
          "Pressure is 5.2 x 10⁵ Pa (2 s.f.).",
        ],
      },
      {
        id: "t15-2-ex2",
        title: "Temperature change at constant volume",
        problem: [
          "At constant volume, an ideal gas has pressure 1.20 x 10⁵ Pa at 290 K. Find pressure at 360 K.",
        ],
        solution: [
          "For fixed n and V, p proportional to T, so p1/T1 = p2/T2.",
          "p2 = p1(T2/T1) = 1.20 x 10⁵ x (360/290).",
          "p2 = 1.49 x 10⁵ Pa.",
          "Final pressure is 1.49 x 10⁵ Pa (3 s.f.).",
        ],
      },
      {
        id: "t15-2-ex3",
        title: "Using particle form and deducing Boltzmann constant",
        problem: [
          "A gas sample has p = 1.01 x 10⁵ Pa, V = 1.00 x 10⁻³ m³, T = 300 K and N = 2.44 x 10²² molecules. Use pV = NkT to calculate k.",
        ],
        solution: [
          "Rearrange: k = pV/(NT).",
          "k = (1.01 x 10⁵ x 1.00 x 10⁻³) / (2.44 x 10²² x 300).",
          "k = 1.38 x 10⁻²³ J K⁻¹.",
          "This is consistent with the accepted Boltzmann constant.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t15-2-st1",
        question: "State what is meant by an ideal gas in terms of p, V and T.",
        modelAnswer: [
          "An ideal gas is one that obeys pV proportional to T, where T is thermodynamic temperature in kelvin.",
        ],
      },
      {
        id: "t15-2-st2",
        question: "Write both forms of the ideal-gas equation of state used in this syllabus.",
        modelAnswer: ["pV = nRT and pV = NkT."],
      },
      {
        id: "t15-2-st3",
        question: "Show the constant relation linking R, Nₐ and k.",
        modelAnswer: ["R = Nₐk, so k = R/Nₐ."],
      },
      {
        id: "t15-2-st4",
        question:
          "An ideal gas has n = 0.20 mol, T = 320 K and p = 2.0 x 10⁵ Pa. Find V. Use R = 8.31 J mol⁻¹ K⁻¹.",
        modelAnswer: [
          "V = nRT/p = (0.20 x 8.31 x 320)/(2.0 x 10⁵) = 2.66 x 10⁻³ m³.",
        ],
      },
      {
        id: "t15-2-st5",
        question: "Why must kelvin be used in pV = nRT rather than Celsius?",
        modelAnswer: [
          "Because the proportionality is with thermodynamic temperature measured from absolute zero.",
          "Using °C would shift the zero and break the direct proportional relation.",
        ],
      },
    ],
  },

  "t15-3": {
    noteId: "t15-3",
    syllabusNotes: [
      {
        id: "kinetic-theory-assumptions",
        title: "Basic assumptions of kinetic theory",
        paragraphs: [
          "The kinetic-theory model treats a gas as a large number of identical molecules moving randomly in continuous motion.",
          "Molecules are assumed to have negligible volume compared with container volume, and intermolecular forces are neglected except during collisions.",
          "Collisions between molecules and with container walls are assumed perfectly elastic, and collision time is negligible compared with time between collisions.",
          "With these assumptions, macroscopic pressure and temperature can be linked to molecular motion.",
        ],
      },
      {
        id: "molecular-collisions-and-pressure",
        title: "How molecular motion produces pressure",
        paragraphs: [
          "When molecules collide with a wall, they change momentum. The wall exerts force on molecules, and molecules exert equal and opposite force on the wall.",
          "Pressure is force per unit area, so repeated momentum-transfer events from many molecular collisions create a steady average pressure.",
          "Faster molecules and more frequent collisions increase force on walls and therefore increase pressure.",
        ],
      },
      {
        id: "derivation-pv-third-nmc2",
        title: "Deriving pV = (1/3)Nm⟨c²⟩",
        paragraphs: [
          "In a one-dimensional model for a cube of side L, a molecule of mass m with x-component speed cₓ reverses its x-momentum on wall collision. Momentum change per collision is 2mcₓ.",
          "Collision rate with one wall is cₓ/(2L), giving average force contribution mcₓ²/L from that molecule. Summing over N molecules gives total force F = (m/L) sum(cₓ²).",
          "Pressure p = F/A with A = L², so p = (m/L³) sum(cₓ²) = (Nm/V)⟨cₓ²⟩, where V = L³.",
          "Using isotropic random motion, ⟨cₓ²⟩ = (1/3)⟨c²⟩, giving pV = (1/3)Nm⟨c²⟩.",
        ],
      },
      {
        id: "rms-speed-definition",
        title: "Mean-square and root-mean-square speed",
        paragraphs: [
          "The mean-square speed is ⟨c²⟩, the average of squared molecular speeds.",
          "Root-mean-square speed is cᵣₘₛ = sqrt(⟨c²⟩). It is not the same as average speed.",
          "From pV = (1/3)Nm⟨c²⟩, cᵣₘₛ can be related to measurable macroscopic quantities.",
        ],
      },
      {
        id: "molecular-ke-and-temperature",
        title: "Average translational kinetic energy and temperature",
        paragraphs: [
          "Compare pV = (1/3)Nm⟨c²⟩ with ideal-gas form pV = NkT.",
          "Cancelling N gives (1/3)m⟨c²⟩ = kT, so (1/2)m⟨c²⟩ = (3/2)kT.",
          "Therefore average translational kinetic energy per molecule is (3/2)kT.",
          "This shows absolute temperature is directly proportional to average translational kinetic energy of molecules.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Kinetic-theory questions reward logical use of assumptions, momentum-change reasoning, and correct interpretation of mean-square quantities. Most losses are from mixing averages or dropping the one-third factor.",
      items: [
        "Stating that molecules lose kinetic energy in elastic wall collisions in the ideal model.",
        "Using cᵣₘₛ = ⟨c²⟩ instead of cᵣₘₛ = sqrt(⟨c²⟩).",
        "Forgetting isotropy relation ⟨cₓ²⟩ = (1/3)⟨c²⟩.",
        "Treating average translational kinetic energy as (1/2)kT instead of (3/2)kT.",
        "Confusing mean speed with root-mean-square speed in numerical substitutions.",
      ],
    },
    workedExamples: [
      {
        id: "t15-3-ex1",
        title: "Pressure from molecular data",
        problem: [
          "A gas has N = 1.0 x 10²³ molecules in volume 0.020 m³. Each molecule has mass 4.8 x 10⁻²⁶ kg and mean-square speed ⟨c²⟩ = 2.5 x 10⁵ m² s⁻². Find pressure.",
        ],
        solution: [
          "Use pV = (1/3)Nm⟨c²⟩.",
          "p = [(1/3)Nm⟨c²⟩]/V = [(1/3)(1.0 x 10²³)(4.8 x 10⁻²⁶)(2.5 x 10⁵)]/0.020.",
          "p = 2.0 x 10⁴ Pa.",
          "Pressure is 2.0 x 10⁴ Pa.",
        ],
      },
      {
        id: "t15-3-ex2",
        title: "Root-mean-square speed from temperature",
        problem: [
          "For nitrogen molecules of mass 4.65 x 10⁻²⁶ kg at 300 K, calculate cᵣₘₛ. Use k = 1.38 x 10⁻²³ J K⁻¹.",
        ],
        solution: [
          "From (1/3)m⟨c²⟩ = kT, cᵣₘₛ = sqrt(⟨c²⟩) = sqrt(3kT/m).",
          "cᵣₘₛ = sqrt[(3 x 1.38 x 10⁻²³ x 300)/(4.65 x 10⁻²⁶)].",
          "cᵣₘₛ = 5.17 x 10² m s⁻¹.",
          "So cᵣₘₛ is about 5.2 x 10² m s⁻¹.",
        ],
      },
      {
        id: "t15-3-ex3",
        title: "Average translational kinetic energy",
        problem: [
          "Find the average translational kinetic energy per molecule at 450 K.",
        ],
        solution: [
          "Use average translational kinetic energy = (3/2)kT.",
          "E average = (3/2)(1.38 x 10⁻²³)(450).",
          "E average = 9.32 x 10⁻²¹ J.",
          "Average translational kinetic energy per molecule is 9.3 x 10⁻²¹ J (2 s.f.).",
        ],
      },
    ],
    selfTest: [
      {
        id: "t15-3-st1",
        question: "State four basic assumptions of the kinetic theory of gases.",
        modelAnswer: [
          "Large number of molecules moving randomly in continuous motion.",
          "Molecular volume negligible compared with container volume.",
          "No intermolecular forces except during collisions.",
          "Collisions are perfectly elastic and collision duration is negligible.",
        ],
      },
      {
        id: "t15-3-st2",
        question: "Write the kinetic-theory relation linking pV with Nm and mean-square speed.",
        modelAnswer: ["pV = (1/3)Nm⟨c²⟩."],
      },
      {
        id: "t15-3-st3",
        question: "Define cᵣₘₛ in terms of mean-square speed.",
        modelAnswer: ["cᵣₘₛ = sqrt(⟨c²⟩)."],
      },
      {
        id: "t15-3-st4",
        question:
          "By comparing pV = (1/3)Nm⟨c²⟩ and pV = NkT, state the expression for average translational kinetic energy of one molecule.",
        modelAnswer: ["(1/2)m⟨c²⟩ = (3/2)kT."],
      },
      {
        id: "t15-3-st5",
        question:
          "A gas sample is heated from 300 K to 1200 K. By what factor does cᵣₘₛ change, assuming molecular mass is constant?",
        modelAnswer: [
          "Since cᵣₘₛ proportional to sqrt(T), factor = sqrt(1200/300) = sqrt(4) = 2.",
          "So cᵣₘₛ doubles.",
        ],
      },
    ],
  },
};
