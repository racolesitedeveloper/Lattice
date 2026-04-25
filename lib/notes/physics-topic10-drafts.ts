import type { NoteDraft } from "./types";

/** Full teaching notes for 9702 Topic 10 — subtopics 10.1–10.3 (see lib/notes/AUTHORING.md). */
export const PHYSICS_TOPIC10_DRAFTS: Record<string, NoteDraft> = {
  "t10-1": {
    noteId: "t10-1",
    syllabusNotes: [
      {
        id: "circuit-symbols-and-meaning",
        title: "Practical circuit symbols and what they represent",
        paragraphs: [
          "A practical d.c. circuit diagram is a model of real components connected by conductors. You are expected to recognise and use standard symbols for cell, battery, resistor, variable resistor, lamp, diode, switch, ammeter, voltmeter, power supply, thermistor, LDR and other syllabus-listed components.",
          "In examination diagrams, symbol accuracy matters because meaning is attached to orientation and connection. For example, a voltmeter is connected in parallel across a component to measure potential difference, while an ammeter is connected in series to measure current through a branch.",
          "When drawing circuits, keep lines straight, avoid ambiguous crossing wires, and show junction dots where electrical connection exists. A neat diagram often prevents interpretation errors in later analysis.",
        ],
      },
      {
        id: "drawing-and-interpreting-circuits",
        title: "Drawing and interpreting complete practical circuits",
        paragraphs: [
          "To interpret a circuit, first identify the source, then trace each branch and component function. Decide which components are in series and which are in parallel by checking whether current has a single path or splits at junctions.",
          "A closed switch provides a conducting path; an open switch breaks the path. In practical questions, assume ideal wires (negligible resistance) unless stated otherwise.",
          "A diagram can often be simplified by redrawing nodes and branches without changing connections. This is especially useful before applying Kirchhoff's laws in the next subtopic.",
        ],
      },
      {
        id: "emf-definition",
        title: "Electromotive force as energy transferred per unit charge",
        paragraphs: [
          "Electromotive force (e.m.f.) of a source is the energy transferred by that source per unit charge as charge passes through the source. In symbols, e.m.f. = energy transferred by source / charge.",
          "Its unit is volt (V), the same unit as potential difference, because both are energy per unit charge. The distinction is conceptual: e.m.f. refers to source action around a complete circuit, while p.d. refers to energy transfer between two points across a component.",
          "For an ideal source with no internal resistance, terminal p.d. equals e.m.f. for all currents. Real sources are non-ideal, so terminal p.d. usually falls below e.m.f. when current is drawn.",
        ],
      },
      {
        id: "emf-vs-pd-energy-language",
        title: "Distinguishing e.m.f. and potential difference in energy terms",
        paragraphs: [
          "Potential difference across a component is energy transferred from charge to that component per unit charge. For a resistor, this is electrical energy converted mainly to thermal energy.",
          "E.m.f. describes energy supplied to charge by the source. Potential difference across external components describes energy removed from charge in the external circuit.",
          "In a complete loop, energy supplied per coulomb by the source equals energy transferred per coulomb in all components, including internal resistance, consistent with conservation of energy.",
        ],
      },
      {
        id: "internal-resistance-and-terminal-pd",
        title: "Internal resistance and terminal potential difference",
        paragraphs: [
          "A real source has internal resistance r. When current I flows, some energy per unit charge is transferred inside the source itself, giving an internal voltage drop Ir.",
          "Hence terminal potential difference V is less than e.m.f. E when delivering current: V = E - Ir. If the external circuit is open and I = 0, then V = E.",
          "As load current increases, Ir increases and terminal p.d. decreases. This is why a battery can show a lower voltage under heavy load than when measured with little current draw.",
          "The power dissipated inside the source is I²r. This represents energy transfer to internal heating and is one reason practical sources are less efficient than ideal sources.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Examiners reward precise circuit language and correct energy interpretation of e.m.f., p.d. and internal resistance. Many marks are lost through symbol misuse and ambiguous statements about voltage.",
      items: [
        "Calling e.m.f. a force. It is energy transferred per unit charge, measured in volts.",
        "Using an ammeter in parallel or a voltmeter in series in a drawn circuit.",
        "Stating e.m.f. and p.d. are the same in all circumstances because both use volts.",
        "Forgetting that terminal p.d. falls below e.m.f. when current flows from a source with internal resistance.",
        "Writing V = E + Ir for a discharging source instead of V = E - Ir.",
        "Ignoring internal resistance when interpreting why measured terminal voltage changes with load.",
      ],
    },
    workedExamples: [
      {
        id: "t10-1-ex1",
        title: "Terminal p.d. under load",
        problem: [
          "A battery has e.m.f. 1.50 V and internal resistance 0.20 ohm. It supplies current 1.8 A to an external circuit. Calculate (a) terminal p.d. and (b) power dissipated inside the battery.",
        ],
        solution: [
          "Use V = E - Ir.",
          "V = 1.50 - (1.8)(0.20) = 1.50 - 0.36 = 1.14 V.",
          "Internal power loss is Pinternal = I²r = (1.8)²(0.20) = 0.648 W.",
          "So terminal p.d. is 1.14 V and internal dissipation is 0.648 W.",
        ],
      },
      {
        id: "t10-1-ex2",
        title: "Open-circuit and loaded readings",
        problem: [
          "A source gives 9.0 V on a high-resistance voltmeter when no load is connected. When connected to a resistor, the current is 0.60 A and terminal p.d. is 8.1 V. Find the internal resistance.",
        ],
        solution: [
          "Open-circuit reading gives e.m.f. E = 9.0 V.",
          "Under load, V = 8.1 V and I = 0.60 A. Use V = E - Ir.",
          "So Ir = E - V = 9.0 - 8.1 = 0.9 V.",
          "r = 0.9 / 0.60 = 1.5 ohm.",
          "Internal resistance is 1.5 ohm.",
        ],
      },
      {
        id: "t10-1-ex3",
        title: "Interpreting a practical measurement setup",
        problem: [
          "Describe how to connect a cell, switch, resistor, ammeter and voltmeter so that current through the resistor and p.d. across the resistor are measured correctly.",
        ],
        solution: [
          "Place the cell, switch, resistor and ammeter in one series loop so the same current passes through resistor and ammeter.",
          "Connect the voltmeter in parallel across the resistor only, not across the whole circuit unless that is specifically required.",
          "Ensure polarity is consistent: voltmeter positive terminal to the higher-potential side of resistor according to chosen current direction.",
          "This arrangement gives direct readings of I through and V across the resistor for V-I analysis.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t10-1-st1",
        question:
          "Define e.m.f. and potential difference in terms of energy transfer per unit charge, and state one key difference between them.",
        modelAnswer: [
          "E.m.f. is energy transferred by a source per unit charge in driving charge around the complete circuit.",
          "Potential difference is energy transferred from charge per unit charge between two points, usually across a component.",
          "Key difference: e.m.f. refers to source supply; p.d. refers to energy transfer in components or between points in the circuit.",
        ],
      },
      {
        id: "t10-1-st2",
        question:
          "A source has e.m.f. 12.0 V and internal resistance 0.50 ohm. Find terminal p.d. when current is (a) 0 A and (b) 4.0 A.",
        modelAnswer: [
          "Use V = E - Ir.",
          "(a) I = 0 gives V = 12.0 V.",
          "(b) I = 4.0 A gives V = 12.0 - (4.0)(0.50) = 10.0 V.",
        ],
      },
      {
        id: "t10-1-st3",
        question:
          "Explain why a battery voltage measured with no load can be larger than the voltage measured when it powers a lamp.",
        modelAnswer: [
          "With no load, current is approximately zero so internal drop Ir is negligible and terminal p.d. is close to e.m.f.",
          "When powering a lamp, current flows and internal drop Ir appears, so terminal p.d. decreases below e.m.f.",
        ],
      },
      {
        id: "t10-1-st4",
        question:
          "State where an ammeter and a voltmeter should be placed in a resistor circuit and justify each placement briefly.",
        modelAnswer: [
          "Ammeter goes in series with the resistor so it measures the current through that component.",
          "Voltmeter goes in parallel across the resistor so it measures potential difference between the resistor terminals.",
        ],
      },
      {
        id: "t10-1-st5",
        question:
          "A cell supplies current 2.5 A to an external circuit. Its e.m.f. is 6.0 V and internal resistance is 0.40 ohm. Calculate (a) terminal p.d. and (b) power delivered to external circuit.",
        modelAnswer: [
          "Terminal p.d.: V = E - Ir = 6.0 - (2.5)(0.40) = 5.0 V.",
          "Power delivered externally: Pexternal = VI = (5.0)(2.5) = 12.5 W.",
        ],
      },
    ],
  },

  "t10-2": {
    noteId: "t10-2",
    syllabusNotes: [
      {
        id: "kirchhoff-first-law",
        title: "Kirchhoff's first law and conservation of charge",
        paragraphs: [
          "Kirchhoff's first law states that at any junction, total current entering equals total current leaving. This follows from conservation of charge: charge does not accumulate at a junction in steady-state d.c. conditions.",
          "When applying the law, assign current directions first. If a solved value is negative, actual current is opposite to the assumed direction.",
          "The law is often written as algebraic sum of currents at a node equals zero, using a consistent sign convention for entering and leaving currents.",
        ],
      },
      {
        id: "kirchhoff-second-law",
        title: "Kirchhoff's second law and conservation of energy",
        paragraphs: [
          "Kirchhoff's second law states that around any closed loop, algebraic sum of e.m.f.s and potential differences is zero. This is conservation of energy per unit charge around the loop.",
          "Across a source from negative to positive terminal, there is a rise in electric potential equal to its e.m.f. Across a resistor in direction of current, there is a drop IR.",
          "To avoid sign errors, choose a loop direction and keep it. Record each rise or drop consistently as you traverse components.",
        ],
      },
      {
        id: "series-resistance-derivation",
        title: "Deriving combined resistance in series",
        paragraphs: [
          "For resistors in series, current is the same through each resistor. Total p.d. across the combination is the sum of p.d.s across individual resistors.",
          "Using V = IR for each resistor: Vtotal = IR1 + IR2 + ... = I(R1 + R2 + ...). Therefore equivalent resistance is Rseries = R1 + R2 + ... .",
          "Equivalent resistance in series is always greater than any individual resistor because each added resistor increases total opposition to current.",
        ],
      },
      {
        id: "parallel-resistance-derivation",
        title: "Deriving combined resistance in parallel",
        paragraphs: [
          "For resistors in parallel, p.d. across each branch is the same. Total current entering the junction equals sum of branch currents.",
          "With branch currents I1 = V/R1, I2 = V/R2 and so on, total current Itotal = V/R1 + V/R2 + ... = V(1/R1 + 1/R2 + ...).",
          "Define equivalent resistance by Itotal = V/Req, giving 1/Req = 1/R1 + 1/R2 + ... .",
          "Equivalent resistance of parallel branches is less than the smallest branch resistance, because adding branches provides additional current paths.",
        ],
      },
      {
        id: "solving-simple-circuits",
        title: "Using Kirchhoff's laws in simple circuit problems",
        paragraphs: [
          "A practical method is: label unknown currents, apply first law at key junctions, then write second-law equations for independent loops. Solve simultaneous equations.",
          "Check final answers with physical sense. For example, branch currents in a symmetric network should reflect that symmetry, and total input power should match total dissipated power when sources and signs are handled correctly.",
          "In circuits with internal resistance, include source internal resistor in loop equations as an additional IR drop.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Kirchhoff questions are often method-heavy. Examiners look for explicit law usage, consistent loop signs and clear resistor-combination logic, not just final numeric values.",
      items: [
        "Writing Kirchhoff's first law as voltage law at a junction instead of current law.",
        "Adding resistors in parallel directly as R1 + R2.",
        "Using 1/Req = 1/R1 + 1/R2 for series resistors by mistake.",
        "Dropping sign consistency when traversing loops, especially across sources.",
        "Forgetting that same current flows through all series components.",
        "Forgetting that same p.d. appears across all parallel branches.",
      ],
    },
    workedExamples: [
      {
        id: "t10-2-ex1",
        title: "Series and parallel equivalent resistance",
        problem: [
          "Calculate equivalent resistance of (a) 3.0 ohm, 5.0 ohm and 7.0 ohm in series, and (b) 6.0 ohm and 3.0 ohm in parallel.",
        ],
        solution: [
          "(a) Series: R = 3.0 + 5.0 + 7.0 = 15.0 ohm.",
          "(b) Parallel: 1/R = 1/6.0 + 1/3.0 = 1/6 + 2/6 = 3/6 = 1/2.",
          "So R = 2.0 ohm.",
        ],
      },
      {
        id: "t10-2-ex2",
        title: "Applying first law at a junction",
        problem: [
          "At a junction, current 2.4 A enters from the left and current 0.9 A enters from below. Current I leaves through the right branch. Find I.",
        ],
        solution: [
          "Kirchhoff first law: total entering current equals total leaving current.",
          "Entering total = 2.4 + 0.9 = 3.3 A.",
          "So leaving current I = 3.3 A.",
        ],
      },
      {
        id: "t10-2-ex3",
        title: "Simple loop with source internal resistance",
        problem: [
          "A source has e.m.f. 12 V and internal resistance 1.0 ohm. It is connected to an external resistor of 5.0 ohm in series. Use Kirchhoff's second law to find circuit current.",
        ],
        solution: [
          "Choose loop direction same as current I.",
          "Across source: +12 V rise. Across resistors: drops I(1.0) and I(5.0).",
          "Kirchhoff second law: 12 - I(1.0) - I(5.0) = 0.",
          "So 12 - 6I = 0, hence I = 2.0 A.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t10-2-st1",
        question:
          "State Kirchhoff's first and second laws, and identify the conservation principle behind each.",
        modelAnswer: [
          "First law: total current entering a junction equals total current leaving; this is conservation of charge.",
          "Second law: algebraic sum of e.m.f.s and potential differences around a closed loop is zero; this is conservation of energy.",
        ],
      },
      {
        id: "t10-2-st2",
        question:
          "Derive the equivalent resistance formula for two resistors R1 and R2 in series using Kirchhoff's laws and Ohm's law.",
        modelAnswer: [
          "Series current is same I through both resistors.",
          "Loop p.d. V = V1 + V2 = IR1 + IR2 = I(R1 + R2).",
          "Define V = IReq, so Req = R1 + R2.",
        ],
      },
      {
        id: "t10-2-st3",
        question:
          "Derive the equivalent resistance formula for two resistors R1 and R2 in parallel.",
        modelAnswer: [
          "Parallel p.d. across each branch is same V.",
          "Branch currents: I1 = V/R1 and I2 = V/R2. Total current Itotal = I1 + I2 = V/R1 + V/R2 = V(1/R1 + 1/R2).",
          "Define Itotal = V/Req, so 1/Req = 1/R1 + 1/R2.",
        ],
      },
      {
        id: "t10-2-st4",
        question:
          "Three branch currents meet at a node. Currents 1.2 A and 0.80 A leave the node, and current I enters. Find I.",
        modelAnswer: [
          "By Kirchhoff first law, entering = leaving.",
          "I = 1.2 + 0.80 = 2.0 A.",
        ],
      },
      {
        id: "t10-2-st5",
        question:
          "A 9.0 V source with negligible internal resistance is connected in a single loop with two resistors 2.0 ohm and 7.0 ohm in series. Find loop current and p.d. across each resistor.",
        modelAnswer: [
          "Series equivalent resistance is 2.0 + 7.0 = 9.0 ohm.",
          "Loop current I = V/R = 9.0/9.0 = 1.0 A.",
          "P.d. across 2.0 ohm resistor: V1 = IR1 = 2.0 V.",
          "P.d. across 7.0 ohm resistor: V2 = IR2 = 7.0 V.",
          "Check: V1 + V2 = 9.0 V matches source.",
        ],
      },
    ],
  },

  "t10-3": {
    noteId: "t10-3",
    syllabusNotes: [
      {
        id: "potential-divider-principle",
        title: "Principle of a potential divider",
        paragraphs: [
          "A potential divider uses two or more resistors in series across a supply so that output potential difference is a chosen fraction of the supply.",
          "For two resistors R1 and R2 in series across supply Vs, with output taken across R2, output is Vout = Vs x R2/(R1 + R2). This follows because series current is I = Vs/(R1 + R2) and Vout = IR2.",
          "Changing one resistor value changes the voltage fraction. Variable resistors and sensor resistors make this principle useful in control and sensing circuits.",
        ],
      },
      {
        id: "loaded-divider-behaviour",
        title: "Loaded and unloaded divider behavior",
        paragraphs: [
          "The simple ratio formula assumes output is unloaded or connected to very high input resistance. If a load is connected, effective lower-branch resistance changes and output voltage falls from the ideal value.",
          "In practical electronics, divider stages are often buffered to prevent loading errors. At AS/A level, questions may specify whether loading is negligible.",
          "When solving, redraw the output branch including load resistor if present, then recalculate equivalent resistance before applying the divider relation.",
        ],
      },
      {
        id: "potentiometer-principle",
        title: "Potentiometer as a null-method comparator",
        paragraphs: [
          "A potentiometer uses a uniform resistance wire carrying steady current, creating a linear potential gradient along its length. Potential difference between two points is proportional to their separation along the wire.",
          "An unknown p.d. can be compared with a known p.d. by adjusting contact position until galvanometer shows zero current. At this null point, compared p.d.s are equal according to the chosen section ratio.",
          "Because no current is drawn from the unknown source at balance, potentiometer comparisons avoid loading errors and can be highly accurate.",
        ],
      },
      {
        id: "galvanometer-in-null-methods",
        title: "Role of galvanometer in null methods",
        paragraphs: [
          "In a null method, galvanometer is used as a sensitive zero-current detector, not primarily as a current-measuring instrument.",
          "Balance is reached when galvanometer deflection is zero. At this condition, branch current through the detector path is zero and corresponding p.d.s satisfy the balance relation.",
          "Zero-deflection methods reduce error from detector calibration, because the key observation is sign change around zero rather than absolute scale reading.",
        ],
      },
      {
        id: "thermistor-ldr-dividers",
        title: "Thermistors and LDRs in potential dividers",
        paragraphs: [
          "A thermistor with negative temperature coefficient has resistance that decreases as temperature increases. In a divider, this changes output voltage with temperature.",
          "An LDR has resistance that decreases as light intensity increases. In a divider, output voltage can be made to increase or decrease with light level depending on whether the LDR is in upper or lower branch.",
          "To design the response direction, inspect Vout = Vs x Rlower/(Rupper + Rlower). Increasing lower resistance raises Vout; increasing upper resistance lowers Vout.",
          "These circuits are widely used for temperature alarms, light-activated switches and automatic control systems.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Potential-divider questions reward clear branch definition and correct ratio setup. Examiners often penalise formula use without identifying which resistor output is across and how sensor resistance change affects output direction.",
      items: [
        "Using Vout = Vs x R1/(R1 + R2) without checking whether output is across R1 or R2.",
        "Assuming thermistor resistance increases with temperature for standard NTC thermistors in this syllabus.",
        "Forgetting that LDR resistance decreases as light intensity increases.",
        "Ignoring loading when a finite-resistance load is connected to divider output.",
        "Treating galvanometer zero deflection as zero voltage everywhere, rather than equality of compared potentials at selected points.",
        "Saying potentiometer measures by drawing current from source being measured; null balance ideally draws no current from the unknown.",
      ],
    },
    workedExamples: [
      {
        id: "t10-3-ex1",
        title: "Basic potential-divider output",
        problem: [
          "A 12 V supply is connected across two series resistors, 3.0 kohm (upper) and 9.0 kohm (lower). Find output voltage across the lower resistor.",
        ],
        solution: [
          "Use divider ratio with output across lower resistor.",
          "Vout = Vs x Rlower/(Rupper + Rlower) = 12 x 9.0/(3.0 + 9.0).",
          "Vout = 12 x 9/12 = 9.0 V.",
          "Output is 9.0 V.",
        ],
      },
      {
        id: "t10-3-ex2",
        title: "Effect of NTC thermistor in lower branch",
        problem: [
          "In a divider, upper resistor is fixed at 10 kohm and lower resistor is an NTC thermistor. Supply is 5.0 V. At 20 C, thermistor resistance is 10 kohm; at 60 C, it is 4.0 kohm. Find Vout across thermistor at each temperature and state trend.",
        ],
        solution: [
          "At 20 C: Vout = 5.0 x 10/(10 + 10) = 2.5 V.",
          "At 60 C: Vout = 5.0 x 4.0/(10 + 4.0) = 20/14 = 1.43 V.",
          "As temperature rises, thermistor resistance decreases and Vout across it decreases in this arrangement.",
        ],
      },
      {
        id: "t10-3-ex3",
        title: "Potentiometer null comparison",
        problem: [
          "A potentiometer wire has uniform potential gradient 0.020 V cm⁻¹. Standard cell 1.018 V balances at 50.9 cm. An unknown source balances at 72.0 cm using same setup. Find unknown e.m.f.",
        ],
        solution: [
          "At null, p.d. equals gradient x balance length.",
          "For unknown source: Eunknown = (0.020)(72.0) = 1.44 V.",
          "Consistency check with standard: (0.020)(50.9) = 1.018 V, so gradient value is self-consistent.",
          "Unknown e.m.f. is 1.44 V.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t10-3-st1",
        question:
          "State the principle of a potential divider and write the two-resistor output expression for output taken across the lower resistor.",
        modelAnswer: [
          "A potential divider uses series resistors across a supply to provide an output p.d. that is a fraction of supply p.d.",
          "For two resistors Rupper and Rlower in series, output across lower resistor is Vout = Vs x Rlower/(Rupper + Rlower).",
        ],
      },
      {
        id: "t10-3-st2",
        question:
          "A divider has supply 10 V, upper resistor 6.0 kohm, lower resistor 4.0 kohm. Calculate output across lower resistor.",
        modelAnswer: [
          "Vout = 10 x 4.0/(6.0 + 4.0) = 10 x 4/10 = 4.0 V.",
        ],
      },
      {
        id: "t10-3-st3",
        question:
          "Explain briefly how a potentiometer compares two potential differences using a galvanometer.",
        modelAnswer: [
          "A uniform wire provides known potential gradient. Each source is connected in turn and contact position is adjusted until galvanometer shows zero deflection.",
          "At zero deflection, no current flows through detector branch and source p.d. equals p.d. along selected wire length.",
          "Comparing balance lengths compares potential differences accurately without drawing current from source under test at null.",
        ],
      },
      {
        id: "t10-3-st4",
        question:
          "An LDR is placed as lower resistor in a divider with fixed upper resistor. Describe what happens to output across LDR as light intensity increases.",
        modelAnswer: [
          "As light intensity increases, LDR resistance decreases.",
          "With LDR in lower branch, Vout = Vs x Rlower/(Rupper + Rlower) decreases as Rlower decreases.",
          "So output voltage across the LDR falls with increasing light in this arrangement.",
        ],
      },
      {
        id: "t10-3-st5",
        question:
          "A divider is intended to produce 3.0 V from a 12 V supply across the lower resistor. If upper resistor is 18 kohm, find required lower resistance.",
        modelAnswer: [
          "Use Vout = Vs x Rlower/(Rupper + Rlower).",
          "3.0 = 12 x Rlower/(18 + Rlower).",
          "So 3(18 + Rlower) = 12Rlower, giving 54 + 3Rlower = 12Rlower.",
          "9Rlower = 54, so Rlower = 6.0 kohm.",
        ],
      },
    ],
  },
};
