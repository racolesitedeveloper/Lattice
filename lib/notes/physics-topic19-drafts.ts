import type { NoteDraft } from "./types";

/** Full teaching notes for 9702 Topic 19 — subtopics 19.1–19.3 (see lib/notes/AUTHORING.md). */
export const PHYSICS_TOPIC19_DRAFTS: Record<string, NoteDraft> = {
  "t19-1": {
    noteId: "t19-1",
    syllabusNotes: [
      {
        id: "capacitance-definition-core",
        title: "Capacitance as charge stored per unit potential difference",
        paragraphs: [
          "Capacitance C is defined by C = Q/V, where Q is charge stored and V is potential difference. It measures how much charge is stored for a given p.d., not the total charge or total voltage alone.",
          "Rearrangements Q = CV and V = Q/C are used frequently in circuit and graph questions. SI unit is farad (F), where 1 F = 1 C V⁻¹.",
          "A larger capacitance means more charge can be stored for the same p.d., or equivalently a smaller p.d. rise for the same added charge.",
        ],
      },
      {
        id: "isolated-sphere-capacitance",
        title: "Capacitance of an isolated spherical conductor",
        paragraphs: [
          "For an isolated spherical conductor, capacitance is still defined as C = Q/V using the sphere potential relative to infinity.",
          "Because a larger sphere reaches a lower potential for the same charge, larger radius gives larger capacitance. The definition remains identical to all capacitor contexts: capacitance is a property of geometry and medium, not a function of the momentary charge value.",
          "In exam reasoning, state clearly that capacitance applies to any conductor arrangement where Q and V are defined, including a single isolated sphere.",
        ],
      },
      {
        id: "parallel-plate-capacitor-meaning",
        title: "Capacitance of parallel plate capacitors",
        paragraphs: [
          "A parallel plate capacitor stores equal and opposite charges on two plates. Potential difference is set by the electric field between plates.",
          "Capacitance is again C = Q/V. For fixed plate geometry, Q is proportional to V, so C is constant while dielectric and dimensions are unchanged.",
          "Increasing plate area or reducing plate separation increases capacitance qualitatively because more field-linked charge is stored per volt.",
        ],
      },
      {
        id: "series-combination-derivation",
        title: "Deriving capacitor combination rule for series",
        paragraphs: [
          "In series, each capacitor carries the same charge magnitude Q, because the intermediate conductor cannot accumulate net charge in steady state.",
          "Total p.d. is the sum of individual p.d.s: V = V₁ + V₂ + .... With V = Q/C for each capacitor, V = Q/C₁ + Q/C₂ + ... = Q(1/C₁ + 1/C₂ + ...).",
          "Since C total = Q/V, this gives 1/C total = 1/C₁ + 1/C₂ + .... Equivalent capacitance in series is smaller than the smallest individual capacitor.",
        ],
      },
      {
        id: "parallel-combination-derivation",
        title: "Deriving capacitor combination rule for parallel",
        paragraphs: [
          "In parallel, each capacitor has the same p.d. V because both ends are connected to common nodes.",
          "Total stored charge is sum of branch charges: Q = Q₁ + Q₂ + .... Using Q = CV for each branch, Q = C₁V + C₂V + ... = (C₁ + C₂ + ...)V.",
          "So C total = C₁ + C₂ + .... Equivalent capacitance in parallel is greater than any individual branch capacitance.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Capacitance questions are usually straightforward marks when candidates keep definitions and combination logic clear. Examiners mainly penalise mixing resistor rules with capacitor rules and loose use of Q and V conditions.",
      items: [
        "Writing C = V/Q instead of C = Q/V.",
        "Using resistor-combination rules for capacitors (adding directly in series and reciprocals in parallel).",
        "For series capacitors, assuming p.d. is equal on each capacitor without checking capacitance values.",
        "For parallel capacitors, assuming charge on each branch is equal instead of p.d. being equal.",
        "Treating capacitance as charge stored only, without reference to potential difference.",
      ],
    },
    workedExamples: [
      {
        id: "t19-1-ex1",
        title: "Using C = Q/V to find charge",
        problem: [
          "A capacitor of capacitance 47 μF is connected across a 12 V supply. Calculate charge stored on each plate.",
        ],
        solution: [
          "Use Q = CV.",
          "C = 47 μF = 47 x 10⁻⁶ F, V = 12 V.",
          "Q = (47 x 10⁻⁶)(12) = 5.64 x 10⁻⁴ C.",
          "So charge magnitude stored is 5.64 x 10⁻⁴ C (equal and opposite on the two plates).",
        ],
      },
      {
        id: "t19-1-ex2",
        title: "Equivalent capacitance in series",
        problem: [
          "Capacitors 6.0 μF and 3.0 μF are connected in series across a battery. Find the equivalent capacitance and the total charge stored when supply p.d. is 9.0 V.",
        ],
        solution: [
          "For series: 1/C total = 1/C₁ + 1/C₂ = 1/6.0 + 1/3.0 = 0.5 (in μF⁻¹).",
          "So C total = 2.0 μF.",
          "Total charge in series branch is Q = C total V = (2.0 x 10⁻⁶)(9.0) = 1.8 x 10⁻⁵ C.",
          "Hence equivalent capacitance is 2.0 μF and charge magnitude on each capacitor is 1.8 x 10⁻⁵ C.",
        ],
      },
      {
        id: "t19-1-ex3",
        title: "Equivalent capacitance in parallel",
        problem: [
          "Capacitors 4.0 nF, 6.0 nF and 10 nF are connected in parallel across 5.0 V. Find equivalent capacitance and total charge drawn from the source.",
        ],
        solution: [
          "For parallel: C total = C₁ + C₂ + C₃ = 4.0 + 6.0 + 10 = 20 nF.",
          "So C total = 20 x 10⁻⁹ F.",
          "Total charge: Q = C total V = (20 x 10⁻⁹)(5.0) = 1.0 x 10⁻⁷ C.",
          "Equivalent capacitance is 20 nF and total source charge transfer is 1.0 x 10⁻⁷ C.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t19-1-st1",
        question: "Define capacitance and state its SI unit.",
        modelAnswer: [
          "Capacitance is charge stored per unit potential difference: C = Q/V.",
          "SI unit is farad (F), where 1 F = 1 C V⁻¹.",
        ],
      },
      {
        id: "t19-1-st2",
        question: "A capacitor stores 3.6 x 10⁻⁵ C at 12 V. Calculate its capacitance.",
        modelAnswer: [
          "C = Q/V = (3.6 x 10⁻⁵)/12 = 3.0 x 10⁻⁶ F = 3.0 μF.",
        ],
      },
      {
        id: "t19-1-st3",
        question: "Derive the two-capacitor series formula from Q and V relations.",
        modelAnswer: [
          "In series, charge is same: Q on each capacitor.",
          "Total p.d. is V = V₁ + V₂ = Q/C₁ + Q/C₂ = Q(1/C₁ + 1/C₂).",
          "Since C total = Q/V, then 1/C total = 1/C₁ + 1/C₂.",
        ],
      },
      {
        id: "t19-1-st4",
        question: "For two capacitors in parallel, state what is common and what adds.",
        modelAnswer: [
          "Common quantity is p.d. across each capacitor.",
          "Stored charges add: total Q = Q₁ + Q₂.",
          "Therefore capacitances add: C total = C₁ + C₂.",
        ],
      },
      {
        id: "t19-1-st5",
        question:
          "A 5.0 μF capacitor and 15 μF capacitor are connected in series. Which has larger p.d. across it, and why?",
        modelAnswer: [
          "In series, both carry the same charge Q.",
          "Since V = Q/C, the smaller capacitance has the larger p.d.",
          "So the 5.0 μF capacitor has the larger potential difference.",
        ],
      },
    ],
  },

  "t19-2": {
    noteId: "t19-2",
    syllabusNotes: [
      {
        id: "potential-charge-graph-area",
        title: "Energy stored from the potential–charge graph",
        paragraphs: [
          "When charging a capacitor from 0 to charge Q, potential difference rises from 0 to V. Small energy increment is dW = V dQ.",
          "So total stored electrical potential energy is the area under the V–Q graph from 0 to Q: W = integral V dQ.",
          "For a capacitor with constant C, V is proportional to Q, so graph is a straight line through origin and the area is a triangle.",
        ],
      },
      {
        id: "energy-formulas",
        title: "Using W = ½QV and W = ½CV²",
        paragraphs: [
          "From triangular area under the linear V–Q graph, W = ½QV.",
          "Substitute Q = CV to get W = ½CV². Equivalent form W = Q²/(2C) also follows by eliminating V.",
          "These forms are interchangeable; choose the one matching given data to reduce algebra and rounding errors.",
        ],
      },
      {
        id: "physical-meaning-of-stored-energy",
        title: "Where the stored energy is",
        paragraphs: [
          "The stored energy is associated with the electric field established between capacitor plates. It is not energy stored on one plate only.",
          "During discharge, this stored field energy is transferred to circuit components, commonly as thermal energy in a resistor.",
          "Because W depends on V², doubling p.d. increases stored energy by factor 4 when capacitance is unchanged.",
        ],
      },
      {
        id: "graph-comparisons-and-gradients",
        title: "Interpreting gradients and areas in capacitor graphs",
        paragraphs: [
          "On a V–Q graph, gradient is ΔV/ΔQ = 1/C. So a steeper line means smaller capacitance.",
          "For a fixed final Q, energy is area under graph, so steeper lines can give larger energy because the final V is larger.",
          "For a fixed final V, larger C gives larger Q and larger stored energy W = ½CV².",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Energy-storage questions are often direct application marks. Examiners usually penalise missing ½ factors, wrong graph-area interpretation, and mixing up which variable is held constant in comparisons.",
      items: [
        "Using W = QV instead of W = ½QV for energy stored in a capacitor.",
        "Forgetting that the V–Q graph starts at origin for an initially uncharged capacitor.",
        "Using gradient of V–Q graph as C instead of 1/C.",
        "Assuming doubling voltage doubles stored energy; it quadruples energy.",
        "Confusing energy delivered by source with final stored energy when discussing charging efficiency.",
      ],
    },
    workedExamples: [
      {
        id: "t19-2-ex1",
        title: "Energy from capacitance and voltage",
        problem: [
          "A 220 μF capacitor is charged to 15 V. Calculate the energy stored.",
        ],
        solution: [
          "Use W = ½CV².",
          "C = 220 μF = 220 x 10⁻⁶ F, V = 15 V.",
          "W = 0.5 x (220 x 10⁻⁶) x 15² = 2.48 x 10⁻² J.",
          "Stored energy is 2.48 x 10⁻² J.",
        ],
      },
      {
        id: "t19-2-ex2",
        title: "Energy from V–Q graph area",
        problem: [
          "A capacitor is charged so that final charge is 8.0 mC and final p.d. is 40 V. Use the V–Q graph method to find stored energy.",
        ],
        solution: [
          "For a linear V–Q graph, stored energy is triangular area: W = ½QV.",
          "Q = 8.0 mC = 8.0 x 10⁻³ C, V = 40 V.",
          "W = 0.5 x (8.0 x 10⁻³) x 40 = 0.16 J.",
          "So stored energy is 0.16 J.",
        ],
      },
      {
        id: "t19-2-ex3",
        title: "Comparing energies at fixed charge",
        problem: [
          "Two capacitors A and B each store charge 3.0 x 10⁻⁴ C. Their capacitances are 2.0 μF and 6.0 μF respectively. Which stores more energy, and by what factor?",
        ],
        solution: [
          "At fixed Q, use W = Q²/(2C), so energy is inversely proportional to C.",
          "Therefore smaller capacitance stores more energy for the same charge.",
          "Energy ratio W for A over W for B = C of B over C of A = 6.0/2.0 = 3.",
          "Capacitor A stores three times as much energy as capacitor B.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t19-2-st1",
        question:
          "Explain why stored energy of a capacitor equals area under the V–Q graph.",
        modelAnswer: [
          "During charging, incremental work is dW = V dQ.",
          "Summing from 0 to final Q gives W = integral V dQ.",
          "Graphically, this integral is the area under the V–Q curve.",
        ],
      },
      {
        id: "t19-2-st2",
        question:
          "Write two syllabus energy formulas for a charged capacitor and show one algebraic link between them.",
        modelAnswer: [
          "Formulas: W = ½QV and W = ½CV².",
          "Using Q = CV in W = ½QV gives W = ½(CV)V = ½CV².",
        ],
      },
      {
        id: "t19-2-st3",
        question:
          "A capacitor stores 6.0 x 10⁻⁴ C at 30 V. Calculate stored energy.",
        modelAnswer: [
          "W = ½QV = 0.5 x (6.0 x 10⁻⁴) x 30 = 9.0 x 10⁻³ J.",
        ],
      },
      {
        id: "t19-2-st4",
        question:
          "How does stored energy change if capacitor p.d. doubles while C is unchanged?",
        modelAnswer: [
          "From W = ½CV², energy is proportional to V².",
          "Doubling V increases W by factor 4.",
        ],
      },
      {
        id: "t19-2-st5",
        question:
          "On a V–Q graph for a capacitor, what quantity does the gradient represent?",
        modelAnswer: [
          "Gradient is ΔV/ΔQ = 1/C.",
          "So larger gradient means smaller capacitance.",
        ],
      },
    ],
  },

  "t19-3": {
    noteId: "t19-3",
    syllabusNotes: [
      {
        id: "discharge-process-overview",
        title: "How a capacitor discharges through a resistor",
        paragraphs: [
          "When a charged capacitor is connected across a resistor, charge flows so that capacitor p.d. falls with time.",
          "Current is initially maximum because initial capacitor p.d. is maximum. As p.d. falls, current decreases, so discharge rate slows continuously.",
          "The discharge is exponential, not linear. Equal time intervals do not give equal drops in Q, V or I.",
        ],
      },
      {
        id: "time-constant-meaning",
        title: "Time constant τ = RC and its physical meaning",
        paragraphs: [
          "For discharge through resistance R, time constant is τ = RC.",
          "After one time constant, each decaying quantity Q, V or I has fallen to e⁻¹ (about 0.37) of its initial value.",
          "Larger R or larger C gives larger τ, so discharge is slower. Units check: ohm x farad = second.",
        ],
      },
      {
        id: "exponential-equations",
        title: "Using x = x₀ exp(−t/RC) for Q, V and I",
        paragraphs: [
          "For discharge, charge follows Q = Q₀ exp(−t/RC).",
          "Since V = Q/C, capacitor p.d. follows V = V₀ exp(−t/RC). Current also decays exponentially: I = I₀ exp(−t/RC), with sign set by chosen current direction.",
          "Any equation of the form x = x₀ exp(−t/RC) can represent Q, V or I, provided x and x₀ refer to the same quantity.",
        ],
      },
      {
        id: "graph-analysis",
        title: "Analysing Q–t, V–t and I–t discharge graphs",
        paragraphs: [
          "Each graph starts at its initial value and curves downward toward zero asymptotically.",
          "At t = τ, value is 0.37 of initial. At t = 2τ it is 0.14 of initial (approximately), and by about 5τ discharge is effectively complete for many practical purposes.",
          "Initial graph gradient magnitude is largest; gradient magnitude decreases with time as rate slows.",
        ],
      },
      {
        id: "using-logs-for-data",
        title: "Extracting RC from exponential data",
        paragraphs: [
          "Taking natural logs gives ln x = ln x₀ - t/RC. So a plot of ln x against t is a straight line of gradient -1/RC.",
          "This method is useful when experimental data are noisy and a direct curve-fit is difficult.",
          "In exam contexts, you may also estimate τ directly from graph by finding time for x to reach 0.37x₀.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Discharge questions usually test graph interpretation, exponent use, and time-constant understanding. Examiners mainly penalise linear assumptions, sign mistakes in the exponent, and confusion over which initial value belongs to which variable.",
      items: [
        "Using x = x₀ exp(+t/RC) for discharge instead of the negative exponent.",
        "Treating τ as time to reach zero rather than time to reach 0.37x₀.",
        "Assuming Q, V or I drop by equal absolute amounts per second.",
        "Substituting V₀ in an equation where x is current, or mixing different initial quantities.",
        "Forgetting to convert kΩ or μF to SI before calculating RC.",
      ],
    },
    workedExamples: [
      {
        id: "t19-3-ex1",
        title: "Finding time constant and one-τ value",
        problem: [
          "A 100 μF capacitor discharges through a 47 kΩ resistor. Calculate (a) time constant and (b) fraction of initial p.d. remaining after one time constant.",
        ],
        solution: [
          "Time constant τ = RC = (47 x 10³)(100 x 10⁻⁶) = 4.7 s.",
          "After one τ, V/V₀ = e⁻¹ = 0.37 (to 2 s.f.).",
          "So τ = 4.7 s and about 37% of initial p.d. remains after this time.",
        ],
      },
      {
        id: "t19-3-ex2",
        title: "Using exponential equation for charge",
        problem: [
          "A capacitor has initial charge 2.4 mC and discharges through RC = 3.0 s. Find charge after 5.0 s.",
        ],
        solution: [
          "Use Q = Q₀ exp(−t/RC).",
          "Q = (2.4 x 10⁻³)exp(−5.0/3.0) = (2.4 x 10⁻³)(0.1889).",
          "Q = 4.53 x 10⁻⁴ C.",
          "Charge after 5.0 s is 4.53 x 10⁻⁴ C.",
        ],
      },
      {
        id: "t19-3-ex3",
        title: "Determining R from discharge data",
        problem: [
          "A 22 μF capacitor discharges through an unknown resistor. Initial p.d. is 9.0 V and p.d. after 1.6 s is 3.3 V. Find R.",
        ],
        solution: [
          "Use V = V₀ exp(−t/RC), so V/V₀ = exp(−t/RC).",
          "3.3/9.0 = exp(−1.6/RC). Take natural logs:",
          "ln(3.3/9.0) = -1.6/RC.",
          "RC = -1.6 / ln(3.3/9.0) = 1.59 s.",
          "R = (RC)/C = 1.59/(22 x 10⁻⁶) = 7.23 x 10⁴ Ω.",
          "So resistance is about 72 kΩ.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t19-3-st1",
        question:
          "State the definition of time constant for capacitor discharge and give its equation.",
        modelAnswer: [
          "Time constant is τ = RC for discharge through resistance R.",
          "It is the time for Q, V or I to fall to e⁻¹ (about 0.37) of its initial value.",
        ],
      },
      {
        id: "t19-3-st2",
        question:
          "Write the discharge equation form that can represent charge, p.d. or current.",
        modelAnswer: [
          "x = x₀ exp(−t/RC), where x may be Q, V or I.",
        ],
      },
      {
        id: "t19-3-st3",
        question:
          "A capacitor discharges with τ = 2.0 s. What fraction of initial current remains after 4.0 s?",
        modelAnswer: [
          "I/I₀ = exp(−t/τ) = exp(−4.0/2.0) = e⁻² = 0.135.",
          "So about 0.14 of initial current remains.",
        ],
      },
      {
        id: "t19-3-st4",
        question:
          "Why are discharge graphs for Q, V and I curved rather than straight lines?",
        modelAnswer: [
          "Rate of decrease is proportional to the instantaneous value, so as value falls the rate also falls.",
          "This produces exponential decay, not constant-gradient linear change.",
        ],
      },
      {
        id: "t19-3-st5",
        question:
          "A 68 kΩ resistor is connected to a 10 μF capacitor for discharge. Estimate how long until p.d. is effectively near zero using the 5τ rule.",
        modelAnswer: [
          "τ = RC = (68 x 10³)(10 x 10⁻⁶) = 0.68 s.",
          "Near-complete discharge by about 5τ gives time ≈ 5 x 0.68 = 3.4 s.",
        ],
      },
    ],
  },
};
