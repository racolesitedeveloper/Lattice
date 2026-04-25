import type { NoteDraft } from "./types";

/** Full teaching notes for 9702 Topic 9 - subtopics 9.1-9.3 (see lib/notes/AUTHORING.md). */
export const PHYSICS_TOPIC9_DRAFTS: Record<string, NoteDraft> = {
  "t9-1": {
    noteId: "t9-1",
    syllabusNotes: [
      {
        id: "current-as-charge-flow",
        title: "Electric current as flow of charge carriers",
        paragraphs: [
          "Electric current is a flow of charge carriers. In metallic conductors the carriers are free electrons; in electrolytes both positive and negative ions move; in semiconductors current can be carried by electrons and holes.",
          "Current at a point in a circuit is defined as the rate of flow of charge: I = dQ/dt. For steady current this becomes Q = It, which is one of the core quantitative relations in this topic.",
          "Current is a scalar quantity in circuit calculations, but its conventional direction is defined as the direction in which positive charge would move. In metals, electrons move opposite to conventional current direction.",
        ],
      },
      {
        id: "quantisation-of-charge",
        title: "Charge carriers and quantisation of charge",
        paragraphs: [
          "Charge is quantised: it exists in discrete packets that are integer multiples of the elementary charge e, where e = 1.60 x 10⁻¹⁹ C.",
          "So for an isolated object or collection of particles, total charge is Q = +/- ne, where n is an integer. This explains why in microscopic counting problems the number of electrons transferred must be a whole number.",
          "A current can still appear continuous on macroscopic timescales because very large numbers of charge carriers pass a point each second.",
        ],
      },
      {
        id: "using-q-it",
        title: "Using Q = It in circuit contexts",
        paragraphs: [
          "For constant current I flowing for time t, total charge transferred is Q = It. SI units: coulomb (C), ampere (A), second (s), with 1 A = 1 C s⁻¹.",
          "Rearrangements are common: I = Q/t and t = Q/I. In exam problems, unit conversion is a frequent source of error, especially minutes to seconds and mA to A.",
          "The relation applies to total charge transfer through a cross-section of a conductor or component, not to net charge accumulation in the whole closed circuit.",
        ],
      },
      {
        id: "drift-model-expression",
        title: "Microscopic current model: I = Anvq",
        paragraphs: [
          "For a conductor of cross-sectional area A containing charge carriers of number density n, each with charge q and average drift speed v, current is I = Anvq.",
          "This comes from counting carriers passing a cross-section each second. In one second, carriers within volume Av pass through, so number passing is nAv; multiplying by charge per carrier q gives charge per second, i.e. current.",
          "Use magnitudes in this formula unless direction is explicitly required. In metals, q is the magnitude of electron charge e and drift direction is opposite to conventional current.",
          "The expression is useful for linking macroscopic circuit data to microscopic material properties.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Examiners in this section reward clear distinction between definitions and models: current as charge flow rate, quantised carrier charge, and microscopic drift expression.",
      items: [
        "Writing Q = I/t instead of Q = It, or rearranging incorrectly under time pressure.",
        "Using time in minutes directly in Q = It without converting to seconds.",
        "Confusing electron flow direction with conventional current direction.",
        "Treating n in I = Anvq as total number of carriers rather than number per unit volume.",
        "Using conductor diameter as area in I = Anvq without first converting to A = pi r².",
      ],
    },
    workedExamples: [
      {
        id: "t9-1-ex1",
        title: "Charge transferred by a steady current",
        problem: [
          "A current of 0.35 A flows through a component for 8.0 min. Calculate the charge transferred.",
        ],
        solution: [
          "Use Q = It for steady current.",
          "Convert time: 8.0 min = 480 s.",
          "Q = 0.35 x 480 = 168 C.",
          "Charge transferred is 1.68 x 10² C.",
        ],
      },
      {
        id: "t9-1-ex2",
        title: "Counting electrons from total charge",
        problem: [
          "A flash unit transfers 3.2 x 10⁻³ C through a lamp. Estimate the number of electrons that pass, using e = 1.60 x 10⁻¹⁹ C.",
        ],
        solution: [
          "Charge is quantised, so number of electrons N = Q/e in magnitude.",
          "N = (3.2 x 10⁻³) / (1.60 x 10⁻¹⁹) = 2.0 x 10¹⁶.",
          "About 2.0 x 10¹⁶ electrons pass through the lamp.",
        ],
      },
      {
        id: "t9-1-ex3",
        title: "Current from drift-speed model",
        problem: [
          "A wire has cross-sectional area 1.5 x 10⁻⁶ m². Free-electron number density is 8.5 x 10²⁸ m⁻³ and drift speed is 2.0 x 10⁻⁴ m s⁻¹. Take q = 1.60 x 10⁻¹⁹ C. Find the current.",
        ],
        solution: [
          "Use I = Anvq.",
          "I = (1.5 x 10⁻⁶)(8.5 x 10²⁸)(2.0 x 10⁻⁴)(1.60 x 10⁻¹⁹).",
          "I = 4.08 A.",
          "Current is approximately 4.1 A (2 s.f.).",
        ],
      },
    ],
    selfTest: [
      {
        id: "t9-1-st1",
        question: "State what is meant by electric current and give its SI unit in base form.",
        modelAnswer: [
          "Electric current is the rate of flow of charge through a cross-section: I = dQ/dt.",
          "Its SI unit is ampere (A), where 1 A = 1 C s⁻¹.",
        ],
      },
      {
        id: "t9-1-st2",
        question:
          "A current of 2.4 A flows for 75 s. Calculate charge transferred.",
        modelAnswer: ["Q = It = 2.4 x 75 = 180 C."],
      },
      {
        id: "t9-1-st3",
        question:
          "Explain what is meant by quantisation of charge and write the corresponding equation.",
        modelAnswer: [
          "Charge exists in discrete packets that are integer multiples of elementary charge e.",
          "So Q = +/- ne, where n is an integer.",
        ],
      },
      {
        id: "t9-1-st4",
        question:
          "Define each symbol in I = Anvq.",
        modelAnswer: [
          "I is current, A is cross-sectional area of conductor, n is number density of charge carriers, v is mean drift speed, q is charge per carrier.",
        ],
      },
      {
        id: "t9-1-st5",
        question:
          "In a metal wire, do electrons move in the same direction as conventional current? Explain briefly.",
        modelAnswer: [
          "No. Conventional current direction is defined as positive-charge flow.",
          "Electrons are negatively charged, so their drift direction is opposite to conventional current.",
        ],
      },
    ],
  },

  "t9-2": {
    noteId: "t9-2",
    syllabusNotes: [
      {
        id: "pd-definition-energy",
        title: "Potential difference as energy transferred per unit charge",
        paragraphs: [
          "Potential difference (p.d.) across a component is defined as energy transferred per unit charge as charge moves through that component.",
          "This is expressed by V = W/Q, where W is energy transferred (or work done) and Q is charge transferred. Unit: volt (V), with 1 V = 1 J C⁻¹.",
          "A larger p.d. means more energy transfer per coulomb. The definition applies across any component, including resistors, lamps and power supplies (for terminal p.d.).",
        ],
      },
      {
        id: "linking-v-w-q",
        title: "Using V = W/Q in calculations",
        paragraphs: [
          "Rearrangements are W = VQ and Q = W/V. These forms are useful in battery and heating calculations where total energy transfer is asked.",
          "Always identify whether a question gives charge in C or current-time data requiring Q = It first. Many multi-step questions combine these relations.",
          "Sign conventions can indicate gain or loss of electrical potential energy, but in standard AS calculation questions magnitudes are usually used unless direction is explicitly requested.",
        ],
      },
      {
        id: "electrical-power-def",
        title: "Electrical power relations",
        paragraphs: [
          "Power is rate of energy transfer: P = W/t. In circuits, combining W = VQ and Q = It gives P = VI.",
          "With Ohm's law for a resistor (V = IR), equivalent forms are P = I²R and P = V²/R. These are valid for the same component when current and p.d. refer to that component.",
          "Choose the form that matches given data to avoid unnecessary substitution and rounding error.",
        ],
      },
      {
        id: "interpreting-power",
        title: "Meaning of power dissipation in components",
        paragraphs: [
          "For resistive components, electrical power is mainly transferred to thermal energy in the component and surroundings.",
          "For devices like motors or speakers, electrical power may be transferred into useful mechanical or sound output as well as thermal pathways.",
          "In examination responses, distinguish clearly between energy (J) and power (W). A device can transfer large energy at low power if it operates for a long time.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "In potential-difference and power questions, marks are usually lost through mixing up rate and total transfer, or choosing inconsistent formula-variable pairs.",
      items: [
        "Defining p.d. as charge per unit energy instead of energy per unit charge.",
        "Using P = VI with V and I from different components in a circuit.",
        "Applying P = I²R to non-ohmic devices without checking given context.",
        "Treating watts and joules as interchangeable without time factor.",
        "Forgetting to convert mA to A before using power formulas.",
      ],
    },
    workedExamples: [
      {
        id: "t9-2-ex1",
        title: "Energy transfer from potential difference and charge",
        problem: [
          "A charge of 250 C passes through a component with p.d. 12 V. Calculate the energy transferred.",
        ],
        solution: [
          "Use W = VQ.",
          "W = 12 x 250 = 3000 J.",
          "Energy transferred is 3.0 x 10³ J.",
        ],
      },
      {
        id: "t9-2-ex2",
        title: "Power from voltage and current",
        problem: [
          "A heater operates at 230 V and draws current 3.2 A. Find its power.",
        ],
        solution: [
          "Use P = VI.",
          "P = 230 x 3.2 = 736 W.",
          "Power is 7.36 x 10² W (about 0.74 kW).",
        ],
      },
      {
        id: "t9-2-ex3",
        title: "Choosing equivalent power form",
        problem: [
          "A resistor has resistance 15 ohm and current 0.40 A. Calculate power dissipated using a suitable formula, then verify with an equivalent form.",
        ],
        solution: [
          "Given I and R directly, use P = I²R.",
          "P = (0.40)² x 15 = 2.4 W.",
          "Check with V = IR = 0.40 x 15 = 6.0 V, then P = V²/R = 6.0²/15 = 2.4 W.",
          "Both methods give consistent power dissipation of 2.4 W.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t9-2-st1",
        question:
          "Define potential difference across a component and state its SI unit relation.",
        modelAnswer: [
          "Potential difference is energy transferred per unit charge across a component: V = W/Q.",
          "1 V = 1 J C⁻¹.",
        ],
      },
      {
        id: "t9-2-st2",
        question:
          "A battery transfers 540 J when 45 C of charge passes. Calculate its p.d.",
        modelAnswer: ["V = W/Q = 540/45 = 12 V."],
      },
      {
        id: "t9-2-st3",
        question:
          "State three equivalent formulas for electrical power in a resistor.",
        modelAnswer: ["P = VI, P = I²R, and P = V²/R."],
      },
      {
        id: "t9-2-st4",
        question:
          "A lamp draws 0.25 A from a 6.0 V supply for 4.0 min. Find (a) power and (b) energy transferred.",
        modelAnswer: [
          "(a) P = VI = 6.0 x 0.25 = 1.5 W.",
          "(b) t = 240 s, so W = Pt = 1.5 x 240 = 360 J.",
        ],
      },
      {
        id: "t9-2-st5",
        question:
          "Explain briefly why a high-power device does not always use more total energy than a lower-power device.",
        modelAnswer: [
          "Power is energy transfer per unit time.",
          "Total energy depends on both power and operating time: W = Pt.",
          "A high-power device used briefly can transfer less total energy than a low-power device used for much longer.",
        ],
      },
    ],
  },

  "t9-3": {
    noteId: "t9-3",
    syllabusNotes: [
      {
        id: "resistance-ohms-law-core",
        title: "Resistance and Ohm's law",
        paragraphs: [
          "Resistance of a component is defined by the ratio R = V/I for that component at a stated condition. SI unit: ohm (ohm), where 1 ohm = 1 V A⁻¹.",
          "Ohm's law states that current through a metallic conductor is directly proportional to p.d. across it, provided physical conditions such as temperature remain constant.",
          "For ohmic conductors at constant temperature, V = IR and the I-V graph is a straight line through the origin (for I plotted against V, constant gradient 1/R).",
        ],
      },
      {
        id: "iv-characteristics-required",
        title: "I-V characteristics: metallic conductor, diode and filament lamp",
        paragraphs: [
          "A metallic conductor at constant temperature has a linear I-V characteristic through the origin. Gradient is constant, so resistance is constant.",
          "A semiconductor diode has very small current in reverse bias (until breakdown, beyond this syllabus detail) and in forward bias conducts significantly after a threshold region, giving a strongly non-linear graph.",
          "A filament lamp has a curve with decreasing gradient as p.d. increases because filament temperature rises. As temperature rises, resistance increases, so current does not rise linearly with p.d.",
        ],
      },
      {
        id: "temperature-light-sensor-resistance",
        title: "How resistance changes in filament lamps, LDRs and thermistors",
        paragraphs: [
          "In a filament lamp, higher current heats the filament. For metals, increased temperature increases lattice vibration and electron scattering, so resistance increases with current.",
          "In a light-dependent resistor (LDR), resistance decreases as light intensity increases. More incident photons generate charge carriers, increasing conductivity.",
          "For an NTC thermistor (negative temperature coefficient, as assumed in this syllabus), resistance decreases as temperature increases because more charge carriers are available for conduction.",
          "These variable-resistance components are important in sensor circuits and potential-divider applications developed in later circuit topics.",
        ],
      },
      {
        id: "resistivity-equation",
        title: "Resistivity and the relation R = rho L/A",
        paragraphs: [
          "Resistivity rho is a material property that links resistance to geometry: R = rho L/A for a uniform conductor of length L and cross-sectional area A.",
          "Rearrangements are rho = RA/L and A = rho L/R. Resistivity unit is ohm m.",
          "For a given material at fixed temperature, increasing length increases resistance proportionally, while increasing cross-sectional area reduces resistance inversely.",
          "The equation applies to uniform conductors; if area or material changes along length, piecewise or integral treatment is needed beyond basic AS problems.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Resistance questions often combine definitions, graph interpretation and material relations. Examiners reward careful conditions language and correct graph reasoning.",
      items: [
        "Stating Ohm's law without the condition of constant physical conditions, especially constant temperature.",
        "Calling any component with R = V/I at one point ohmic without checking full I-V linearity.",
        "Drawing diode I-V graph as symmetric straight line through origin.",
        "Assuming filament-lamp resistance is constant because it is a metal conductor.",
        "Using wire diameter directly as area in R = rho L/A, causing large numerical error.",
      ],
    },
    workedExamples: [
      {
        id: "t9-3-ex1",
        title: "Resistance from V and I",
        problem: [
          "A resistor has p.d. 9.0 V when current is 0.30 A. Calculate resistance.",
        ],
        solution: [
          "Use R = V/I.",
          "R = 9.0/0.30 = 30 ohm.",
          "Resistance is 30 ohm.",
        ],
      },
      {
        id: "t9-3-ex2",
        title: "Using resistivity relation for a wire",
        problem: [
          "A wire has resistivity 1.7 x 10⁻⁸ ohm m, length 2.0 m, and cross-sectional area 3.0 x 10⁻⁷ m². Find its resistance.",
        ],
        solution: [
          "Use R = rho L/A.",
          "R = (1.7 x 10⁻⁸ x 2.0) / (3.0 x 10⁻⁷).",
          "R = 1.13 x 10⁻¹ ohm.",
          "Resistance is 0.11 ohm (2 s.f.).",
        ],
      },
      {
        id: "t9-3-ex3",
        title: "Interpreting non-ohmic I-V behavior",
        problem: [
          "A filament lamp has p.d. changed from 2.0 V to 6.0 V. Current changes from 0.40 A to 0.90 A. Show that resistance has increased and explain physically.",
        ],
        solution: [
          "Initial resistance R1 = V/I = 2.0/0.40 = 5.0 ohm.",
          "Later resistance R2 = 6.0/0.90 = 6.7 ohm (2 s.f.).",
          "Resistance has increased from 5.0 ohm to about 6.7 ohm.",
          "As current increases, filament temperature rises; increased lattice vibrations increase electron scattering, so resistance rises.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t9-3-st1",
        question:
          "State Ohm's law and include the required condition for validity.",
        modelAnswer: [
          "Ohm's law states that current is directly proportional to p.d. across a metallic conductor, provided physical conditions remain constant (especially temperature).",
        ],
      },
      {
        id: "t9-3-st2",
        question:
          "A component has V = 4.5 V and I = 0.15 A. Find its resistance.",
        modelAnswer: ["R = V/I = 4.5/0.15 = 30 ohm."],
      },
      {
        id: "t9-3-st3",
        question:
          "Describe the I-V shape for (a) metallic conductor at constant temperature, (b) diode, (c) filament lamp.",
        modelAnswer: [
          "(a) Straight line through origin.",
          "(b) Very small reverse current and strong non-linear forward conduction after threshold region.",
          "(c) Curved graph with decreasing gradient at larger V because resistance increases with temperature.",
        ],
      },
      {
        id: "t9-3-st4",
        question:
          "State how resistance changes with increasing light intensity for an LDR and with increasing temperature for an NTC thermistor.",
        modelAnswer: [
          "LDR resistance decreases as light intensity increases.",
          "NTC thermistor resistance decreases as temperature increases.",
        ],
      },
      {
        id: "t9-3-st5",
        question:
          "A uniform wire has resistance 8.0 ohm, length 1.6 m and area 2.0 x 10⁻⁷ m². Calculate resistivity.",
        modelAnswer: [
          "Use rho = RA/L.",
          "rho = (8.0 x 2.0 x 10⁻⁷)/1.6 = 1.0 x 10⁻⁶ ohm m.",
        ],
      },
    ],
  },
};
