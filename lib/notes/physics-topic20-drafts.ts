import type { NoteDraft } from "./types";

/** Full teaching notes for 9702 Topic 20 — subtopics 20.1–20.5 (see lib/notes/AUTHORING.md). */
export const PHYSICS_TOPIC20_DRAFTS: Record<string, NoteDraft> = {
  "t20-1": {
    noteId: "t20-1",
    syllabusNotes: [
      {
        id: "field-concept-and-sources",
        title: "Magnetic field as a field of force",
        paragraphs: [
          "A magnetic field is a region in which magnetic forces act. In this syllabus it is treated as a field of force produced either by moving charges (for example current in a wire) or by permanent magnets.",
          "This field model separates cause and effect: source currents or magnets create the field, and magnetic materials, currents or moving charges respond to it.",
          "Unlike electric fields, magnetic forces on charges depend on motion of the charge relative to the field, which is why magnetism and current are closely linked throughout Topic 20.",
        ],
      },
      {
        id: "field-lines-and-direction",
        title: "Representing magnetic fields with field lines",
        paragraphs: [
          "Magnetic fields are represented by field lines. At any point, the tangent to a field line gives the field direction at that point.",
          "Line spacing indicates strength qualitatively: closer lines represent stronger field. Field lines do not cross, because the field at one point cannot have two directions.",
          "For a bar magnet outside the magnet, field direction is from north pole to south pole. Inside the magnet, lines continue from south to north, so complete field lines form closed loops.",
        ],
      },
      {
        id: "typical-patterns",
        title: "Typical magnetic field patterns",
        paragraphs: [
          "A single bar magnet gives a curved pattern with strongest field near the poles. Two unlike poles close together produce dense linking lines in the gap, showing strong field there.",
          "In a nearly uniform field, such as between close, opposite, flat pole faces, field lines are approximately straight, parallel and equally spaced in the central region.",
          "Iron filings and plotting compasses are common demonstrations. Filings reveal pattern density; a compass gives local direction.",
        ],
      },
      {
        id: "link-to-moving-charges",
        title: "Why moving charge is central to magnetism",
        paragraphs: [
          "A current is moving charge, so current-carrying conductors produce magnetic fields. This is the basis of electromagnets, motors and generators.",
          "A stationary charge does not create a magnetic field in the simple school treatment; motion is the key. This connection is why Topics 9, 18 and 20 fit together.",
          "Permanent magnets also produce magnetic fields, but in materials language these arise from microscopic moving charges and magnetic moments.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Examiners reward precise field language and clean diagram interpretation. Most errors come from confusing magnetic-field direction with force direction, or from mixing electric-field conventions into magnetic contexts.",
      items: [
        "Describing magnetic field as force per unit charge. That is electric field definition, not magnetic field definition.",
        "Drawing magnetic field lines as if they begin and end in free space. Magnetic field lines form continuous closed loops.",
        "Stating outside a bar magnet that lines go from south to north. Standard convention is north to south outside.",
        "Using line thickness rather than line density to indicate stronger field in sketches.",
        "Treating stationary charge as a source of magnetic field in this course level without motion/current context.",
      ],
    },
    workedExamples: [
      {
        id: "t20-1-ex1",
        title: "Identifying magnetic-field regions from field-line maps",
        problem: [
          "A field-line diagram around a magnet shows very dense lines near one pole and sparse lines far away. Explain what this says about field strength and direction.",
        ],
        solution: [
          "Field-line density indicates relative magnetic field strength, so the field is stronger near the pole where lines are denser.",
          "Direction at any point is along the tangent to the line. Outside the magnet, arrows run from north toward south.",
          "Sparse lines far away indicate weaker field with increasing distance from the source.",
        ],
      },
      {
        id: "t20-1-ex2",
        title: "Classifying field sources",
        problem: [
          "State whether each source produces a magnetic field: (a) a straight wire carrying current, (b) a bar magnet, (c) a stationary isolated charge.",
        ],
        solution: [
          "(a) Yes. Current is moving charge, so it produces a magnetic field around the wire.",
          "(b) Yes. Permanent magnets produce magnetic fields with north and south poles.",
          "(c) Not in the standard school model for this topic. A stationary charge produces electric field but no magnetic field unless there is charge motion.",
        ],
      },
      {
        id: "t20-1-ex3",
        title: "Uniform versus non-uniform field description",
        problem: [
          "Two diagrams are shown. Diagram A has curved, unevenly spaced lines around a bar magnet. Diagram B has straight, parallel, equally spaced lines in a central gap between pole faces. Identify which region is approximately uniform and justify.",
        ],
        solution: [
          "Diagram B represents an approximately uniform field because lines are parallel (constant direction) and equally spaced (approximately constant magnitude).",
          "Diagram A is non-uniform because both direction and line spacing vary with position.",
          "This distinction matters in force calculations later, where uniform B allows direct use of constant-field formulas.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t20-1-st1",
        question: "State what is meant by a magnetic field and name two types of source in this syllabus.",
        modelAnswer: [
          "A magnetic field is a region where magnetic forces act.",
          "In this syllabus it is produced by moving charges (currents) and by permanent magnets.",
        ],
      },
      {
        id: "t20-1-st2",
        question: "How is magnetic field represented by field lines, and what does line spacing show?",
        modelAnswer: [
          "Field direction at a point is the tangent direction to the field line at that point.",
          "Closer line spacing indicates stronger magnetic field; wider spacing indicates weaker field.",
        ],
      },
      {
        id: "t20-1-st3",
        question: "State the conventional direction of magnetic field lines outside a bar magnet.",
        modelAnswer: ["Outside the magnet, field lines are directed from north pole to south pole."],
      },
      {
        id: "t20-1-st4",
        question: "Why do magnetic field lines not cross?",
        modelAnswer: [
          "If they crossed, one point would have two different field directions simultaneously, which is impossible for a single-valued field at one point.",
        ],
      },
      {
        id: "t20-1-st5",
        question: "Give one reason magnetic field lines are drawn as closed loops.",
        modelAnswer: [
          "Magnetic field is continuous: lines go from north to south outside a magnet and continue through the magnet from south to north, so each line forms a closed path.",
        ],
      },
    ],
  },

  "t20-2": {
    noteId: "t20-2",
    syllabusNotes: [
      {
        id: "motor-effect-concept",
        title: "Force on a current-carrying conductor in a magnetic field",
        paragraphs: [
          "A current-carrying conductor placed in a magnetic field can experience a force. This is the motor effect and is the basis of d.c. motors and loudspeakers.",
          "Microscopically, moving charges in the wire experience magnetic force, and this is transmitted to the lattice so the whole conductor feels a net force.",
          "The force is largest when current direction is perpendicular to field direction and zero when they are parallel.",
        ],
      },
      {
        id: "equation-f-bil-sin-theta",
        title: "Using F = BIL sin θ",
        paragraphs: [
          "For a straight wire segment of length L in uniform magnetic field B carrying current I, force magnitude is F = BIL sin θ.",
          "Here θ is angle between wire/current direction and magnetic-field direction. Use SI units: B in tesla (T), I in ampere (A), L in metre (m), giving F in newton (N).",
          "Special cases: θ = 90° gives F = BIL (maximum), while θ = 0° gives F = 0.",
        ],
      },
      {
        id: "fleming-left-hand-rule",
        title: "Direction of force and Fleming’s left-hand rule",
        paragraphs: [
          "Direction is found by Fleming’s left-hand rule: First finger for magnetic Field direction, seCond finger for Current, thuMb for Motion/force.",
          "The three directions are mutually perpendicular. Reversing field or current reverses force direction.",
          "This directional method is essential in exam explanations where both magnitude and direction are required.",
        ],
      },
      {
        id: "definition-of-b",
        title: "Defining magnetic flux density from force on a wire",
        paragraphs: [
          "Magnetic flux density B can be defined from force on a wire at right angles to the field: B is force per unit current per unit length.",
          "From F = BIL at 90°, B = F/(IL). This gives unit N A⁻¹ m⁻¹, equivalent to tesla.",
          "This operational definition connects abstract field strength directly to measurable force, current and conductor length.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Most marks in this section are lost through angle and direction errors. Examiners look for a correct θ definition, proper left-hand-rule use, and correct identification of when force is maximum or zero.",
      items: [
        "Using cos θ in place of sin θ in F = BIL sin θ for this syllabus equation.",
        "Measuring θ from the wrong line, for example from the normal rather than between current and field directions.",
        "Applying Fleming’s right-hand rule instead of left-hand rule for motor-force direction.",
        "Forgetting that only conductor length inside the field contributes to L in calculations.",
        "Defining B as force per unit charge, which belongs to moving-charge relation, not wire definition.",
      ],
    },
    workedExamples: [
      {
        id: "t20-2-ex1",
        title: "Force magnitude at right angles",
        problem: [
          "A wire of length 0.080 m carries current 5.0 A at right angles to a uniform magnetic field of 0.30 T. Calculate the force on the wire.",
        ],
        solution: [
          "At right angles, θ = 90° so sin θ = 1.",
          "F = BIL = (0.30)(5.0)(0.080) = 0.12 N.",
          "Force on the wire is 0.12 N. Direction is perpendicular to both field and current by Fleming’s left-hand rule.",
        ],
      },
      {
        id: "t20-2-ex2",
        title: "Using angle dependence",
        problem: [
          "A 0.25 m wire carries 3.2 A in a 0.45 T field. The angle between wire and field is 35°. Find force magnitude.",
        ],
        solution: [
          "Use F = BIL sin θ with θ between current direction and field.",
          "F = (0.45)(3.2)(0.25) sin 35°.",
          "F = 0.36 x 0.574 = 0.207 N.",
          "Force magnitude is 0.21 N (2 s.f.).",
        ],
      },
      {
        id: "t20-2-ex3",
        title: "Finding B from definition",
        problem: [
          "A 0.12 m wire at right angles to a magnetic field carries 2.5 A and experiences force 0.090 N. Determine magnetic flux density.",
        ],
        solution: [
          "At right angles, B = F/(IL).",
          "B = 0.090 / [(2.5)(0.12)] = 0.090/0.30 = 0.30 T.",
          "Magnetic flux density is 0.30 T.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t20-2-st1",
        question: "State the equation for force on a current-carrying conductor in a magnetic field and define θ.",
        modelAnswer: [
          "F = BIL sin θ.",
          "θ is the angle between the conductor/current direction and magnetic-field direction.",
        ],
      },
      {
        id: "t20-2-st2",
        question: "When is force on the conductor maximum and when is it zero?",
        modelAnswer: [
          "Maximum when current is perpendicular to field (θ = 90°).",
          "Zero when current is parallel or anti-parallel to field (θ = 0° or 180°).",
        ],
      },
      {
        id: "t20-2-st3",
        question: "State how Fleming’s left-hand rule is used to find force direction.",
        modelAnswer: [
          "Set first finger in magnetic field direction, second finger in conventional current direction, then thumb gives force/motion direction.",
        ],
      },
      {
        id: "t20-2-st4",
        question: "Define magnetic flux density using force on a wire at right angles to the field.",
        modelAnswer: [
          "Magnetic flux density is force per unit current per unit length on a wire at right angles to the field: B = F/(IL).",
        ],
      },
      {
        id: "t20-2-st5",
        question: "A wire segment of length 0.050 m in a 0.40 T field carries 6.0 A at 90°. Calculate force.",
        modelAnswer: ["F = BIL = (0.40)(6.0)(0.050) = 0.12 N."],
      },
    ],
  },

  "t20-3": {
    noteId: "t20-3",
    syllabusNotes: [
      {
        id: "moving-charge-force-direction",
        title: "Force direction on a moving charge in a magnetic field",
        paragraphs: [
          "A moving charge in a magnetic field can experience a magnetic force. The force is perpendicular to both velocity and magnetic-field direction.",
          "For a positive charge, direction follows the same cross-direction logic as conventional current. For a negative charge, force is opposite that direction.",
          "If velocity is parallel to field, no magnetic force acts because the perpendicular component of motion is zero.",
        ],
      },
      {
        id: "equation-f-bqv-sin-theta",
        title: "Using F = BQv sin θ",
        paragraphs: [
          "Force magnitude on a charge Q moving with speed v in field B is F = BQv sin θ, where θ is angle between velocity and field.",
          "At θ = 90°, F = BQv is maximum. At θ = 0°, F = 0.",
          "This is the single-particle analogue of F = BIL sin θ for a wire and is central to particle-beam applications.",
        ],
      },
      {
        id: "hall-voltage-origin-and-equation",
        title: "Origin of Hall voltage and Vₕ = BI/(ntq)",
        paragraphs: [
          "In a conductor carrying current through a magnetic field perpendicular to current, charge carriers are deflected sideways by magnetic force.",
          "This causes charge separation across the conductor thickness and creates a transverse electric field. A potential difference appears between opposite sides: the Hall voltage Vₕ.",
          "At equilibrium, electric and magnetic forces on carriers balance. For slab thickness t, carrier density n and carrier charge q, the syllabus result is Vₕ = BI/(ntq).",
          "The equation shows Hall voltage is larger for larger B and I, and smaller for larger n or thicker sample t.",
        ],
      },
      {
        id: "hall-probe-application",
        title: "Using a Hall probe to measure magnetic flux density",
        paragraphs: [
          "A Hall probe contains a conducting or semiconductor element with controlled current. In an unknown magnetic field, the Hall voltage is measured.",
          "Because Vₕ is proportional to B for fixed probe current and geometry, calibration allows direct B measurement.",
          "In practical use, align probe correctly with field, avoid strong temperature drift and use proper zeroing for accurate readings.",
        ],
      },
      {
        id: "perpendicular-motion-and-velocity-selection",
        title: "Circular motion in magnetic field and velocity selection",
        paragraphs: [
          "If a charged particle enters a uniform magnetic field with velocity perpendicular to field, magnetic force is always perpendicular to velocity. Speed stays constant while direction changes, giving circular motion.",
          "Magnetic force provides centripetal force: BQv = mv²/r, so r = mv/(BQ). This relation underpins mass spectrometry ideas.",
          "In crossed electric and magnetic fields, velocity selection is achieved when forces balance: qE = BQv, so selected speed is v = E/B. Particles with this speed pass undeflected.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "This section mixes direction, dynamics and Hall-effect ideas. Examiners typically penalise sign/direction mistakes, confusion between speed and velocity, and incorrect Hall-variable placement.",
      items: [
        "Using force direction for positive charge when particle is actually negative, without reversing direction.",
        "Assuming magnetic force changes particle speed. Magnetic force changes direction of velocity, not speed, when only magnetic field acts.",
        "Writing Hall equation with t in numerator instead of denominator.",
        "Using current I where carrier drift speed v is required in F = BQv sin θ.",
        "For velocity selector, adding electric and magnetic forces instead of balancing opposite directions for undeflected motion.",
      ],
    },
    workedExamples: [
      {
        id: "t20-3-ex1",
        title: "Force on a moving charged particle",
        problem: [
          "An electron moves at 3.0 x 10⁶ m s⁻¹ perpendicular to a 0.20 T field. Find magnetic force magnitude. Use e = 1.60 x 10⁻¹⁹ C.",
        ],
        solution: [
          "Perpendicular entry gives sin θ = 1, so F = BQv.",
          "F = (0.20)(1.60 x 10⁻¹⁹)(3.0 x 10⁶) = 9.6 x 10⁻¹⁴ N.",
          "Force magnitude is 9.6 x 10⁻¹⁴ N. Direction is opposite to positive-charge rule because the electron is negative.",
        ],
      },
      {
        id: "t20-3-ex2",
        title: "Hall voltage calculation",
        problem: [
          "A Hall probe has current I = 0.040 A, thickness t = 2.0 x 10⁻⁴ m, carrier density n = 8.0 x 10²² m⁻³ and carrier charge q = 1.60 x 10⁻¹⁹ C. In field B = 0.50 T, calculate Hall voltage.",
        ],
        solution: [
          "Use Vₕ = BI/(ntq).",
          "Vₕ = (0.50)(0.040) / [(8.0 x 10²²)(2.0 x 10⁻⁴)(1.60 x 10⁻¹⁹)].",
          "Denominator = 2.56, numerator = 0.020, so Vₕ = 7.8 x 10⁻³ V.",
          "Hall voltage is 7.8 mV.",
        ],
      },
      {
        id: "t20-3-ex3",
        title: "Velocity selector condition",
        problem: [
          "In crossed fields, electric field strength is 2.4 x 10⁴ V m⁻¹ and magnetic flux density is 0.30 T. Find speed of particles that pass undeflected.",
        ],
        solution: [
          "For undeflected motion, electric and magnetic forces balance: qE = BQv.",
          "So v = E/B = (2.4 x 10⁴)/(0.30) = 8.0 x 10⁴ m s⁻¹.",
          "Selected speed is 8.0 x 10⁴ m s⁻¹.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t20-3-st1",
        question: "State the force equation for a moving charge in a magnetic field and define θ.",
        modelAnswer: [
          "F = BQv sin θ.",
          "θ is the angle between velocity direction and magnetic-field direction.",
        ],
      },
      {
        id: "t20-3-st2",
        question: "Describe motion of a charged particle entering a uniform magnetic field perpendicular to its velocity.",
        modelAnswer: [
          "Magnetic force is always perpendicular to velocity, so speed remains constant while direction changes.",
          "The path is circular, with magnetic force providing centripetal force.",
        ],
      },
      {
        id: "t20-3-st3",
        question: "State why a Hall voltage appears across a current-carrying conductor in a magnetic field.",
        modelAnswer: [
          "Magnetic force deflects moving charge carriers sideways, causing charge separation.",
          "This creates a transverse electric field and a measurable potential difference across the sample.",
        ],
      },
      {
        id: "t20-3-st4",
        question: "Write the Hall-voltage expression in terms of B, I, n, t and q.",
        modelAnswer: ["Vₕ = BI/(ntq)."],
      },
      {
        id: "t20-3-st5",
        question: "In a velocity selector, what condition is required for particles to travel straight through?",
        modelAnswer: [
          "Electric and magnetic forces must be equal and opposite: qE = BQv, giving v = E/B.",
        ],
      },
    ],
  },

  "t20-4": {
    noteId: "t20-4",
    syllabusNotes: [
      {
        id: "field-patterns-from-currents",
        title: "Magnetic field patterns due to current configurations",
        paragraphs: [
          "A long straight current-carrying wire produces concentric circular magnetic field lines centred on the wire.",
          "A flat circular coil produces a field like a short bar magnet, with stronger field near coil centre where contributions add.",
          "A long solenoid produces an approximately uniform field inside its central region, with weaker external field. Its field pattern resembles that of a bar magnet with defined poles.",
        ],
      },
      {
        id: "direction-rules",
        title: "Determining field direction around currents",
        paragraphs: [
          "Direction around a straight wire or coil is found by right-hand grip rule: thumb in current direction, curled fingers show magnetic-field direction.",
          "For solenoids, curled fingers follow coil current and thumb indicates field direction inside the solenoid and its north-seeking end.",
          "These direction tools are required for sketching correct field-line orientation in all three syllabus cases.",
        ],
      },
      {
        id: "ferrous-core-effect",
        title: "Why a ferrous core strengthens solenoid field",
        paragraphs: [
          "Inserting a ferrous core (such as soft iron) into a solenoid greatly increases magnetic field strength for the same current.",
          "The core material becomes magnetised and concentrates magnetic flux, giving a stronger combined field.",
          "This is why electromagnets use ferrous cores for relays, lifting magnets and transformers.",
        ],
      },
      {
        id: "forces-between-conductors",
        title: "Origin of forces between current-carrying conductors",
        paragraphs: [
          "Each current-carrying conductor produces a magnetic field. The other conductor lies in that field and experiences motor-effect force.",
          "For parallel wires: currents in the same direction attract; currents in opposite directions repel.",
          "The force direction can be obtained by first finding field from one wire at the position of the other, then applying force direction for current in that second wire.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Examiners expect correct field-shape sketches and direction statements. Typical losses come from mixing up wire/coil/solenoid patterns or from reversing attraction–repulsion rules for parallel currents.",
      items: [
        "Drawing straight rather than circular lines around a long straight wire.",
        "Stating opposite-direction parallel currents attract. In fact they repel.",
        "Using left-hand rule to find field direction from current source, instead of right-hand grip rule.",
        "Claiming a ferrous core increases current in the solenoid. It increases magnetic field for same current.",
        "Sketching solenoid field as completely uniform everywhere, ignoring weaker return field outside.",
      ],
    },
    workedExamples: [
      {
        id: "t20-4-ex1",
        title: "Comparing field patterns",
        problem: [
          "Describe one key field-line feature for each: (a) long straight wire, (b) flat circular coil, (c) long solenoid.",
        ],
        solution: [
          "(a) Long straight wire: concentric circular field lines around wire.",
          "(b) Flat circular coil: denser, near-parallel lines through coil centre with looped return outside.",
          "(c) Long solenoid: approximately uniform, parallel lines inside central region and weaker looping lines outside.",
        ],
      },
      {
        id: "t20-4-ex2",
        title: "Direction of force between parallel currents",
        problem: [
          "Two long parallel wires carry currents upward. State whether they attract or repel and explain origin of the force.",
        ],
        solution: [
          "They attract because each wire produces magnetic field at the position of the other, and each current then experiences motor-effect force toward the other wire.",
          "The interaction is mutual and equal/opposite by Newton’s third law.",
          "Rule summary: same-direction currents attract, opposite-direction currents repel.",
        ],
      },
      {
        id: "t20-4-ex3",
        title: "Effect of inserting ferrous core",
        problem: [
          "A solenoid is connected to a fixed d.c. supply. An iron core is inserted without changing current setting. Describe the magnetic-field change and one practical consequence.",
        ],
        solution: [
          "Magnetic field inside the solenoid becomes much stronger because the ferrous core magnetises and concentrates flux.",
          "A practical consequence is larger magnetic force on nearby ferromagnetic objects, so the device acts as a stronger electromagnet.",
          "This is used when strong switching or lifting action is needed.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t20-4-st1",
        question: "State the magnetic field pattern around a long straight current-carrying wire.",
        modelAnswer: ["Concentric circular field lines centred on the wire."],
      },
      {
        id: "t20-4-st2",
        question: "How does magnetic field in a long solenoid compare inside and outside?",
        modelAnswer: [
          "Inside the central region it is approximately uniform and relatively strong.",
          "Outside it is weaker and forms returning curved lines.",
        ],
      },
      {
        id: "t20-4-st3",
        question: "State the effect of inserting a ferrous core into a current-carrying solenoid.",
        modelAnswer: [
          "It increases magnetic field strength significantly for the same current.",
        ],
      },
      {
        id: "t20-4-st4",
        question: "For two parallel wires, state force outcome for (a) same current direction, (b) opposite current direction.",
        modelAnswer: [
          "(a) Same direction: attraction.",
          "(b) Opposite direction: repulsion.",
        ],
      },
      {
        id: "t20-4-st5",
        question: "Briefly explain why current-carrying conductors can exert forces on each other.",
        modelAnswer: [
          "Each conductor creates a magnetic field, and the other conductor carries current in that field.",
          "A current in a magnetic field experiences force, so each conductor is forced by the field of the other.",
        ],
      },
    ],
  },

  "t20-5": {
    noteId: "t20-5",
    syllabusNotes: [
      {
        id: "flux-and-flux-linkage-definitions",
        title: "Magnetic flux and flux linkage",
        paragraphs: [
          "Magnetic flux Φ through a surface is defined as product of magnetic flux density B and cross-sectional area A perpendicular to B.",
          "For this syllabus form, Φ = BA when B is normal to the area. Unit of flux is weber (Wb), equivalent to T m².",
          "If a coil has N turns and each turn links the same flux Φ, magnetic flux linkage is NΦ. This quantity is central in induction equations.",
        ],
      },
      {
        id: "changing-flux-and-induced-emf",
        title: "Changing flux induces e.m.f.",
        paragraphs: [
          "An e.m.f. is induced in a circuit when magnetic flux linkage through the circuit changes.",
          "The flux can change by changing B, changing area in field, changing orientation, or moving conductor relative to field region.",
          "No induced e.m.f. appears if flux linkage is constant, even if field is present.",
        ],
      },
      {
        id: "faraday-lenz-laws",
        title: "Faraday’s law and Lenz’s law",
        paragraphs: [
          "Faraday’s law gives magnitude relationship: induced e.m.f. is proportional to rate of change of flux linkage. In compact form, ε = -d(NΦ)/dt.",
          "Lenz’s law gives direction: induced e.m.f. (and induced current if circuit is complete) acts to oppose the change that produces it.",
          "The minus sign in Faraday’s law represents Lenz’s law. Opposition is to the change in flux, not to the existing flux itself.",
        ],
      },
      {
        id: "induction-experiments-and-factors",
        title: "Core induction demonstrations and factors affecting e.m.f.",
        paragraphs: [
          "Moving a magnet into or out of a coil gives galvanometer deflection only during motion, showing that changing flux induces e.m.f.",
          "Reversing motion reverses deflection direction, demonstrating Lenz’s law direction change.",
          "Larger induced e.m.f. is obtained by increasing rate of flux change: move magnet faster, use stronger magnet, increase turns, or use larger effective area change.",
        ],
      },
      {
        id: "applications-and-energy-view",
        title: "Physical meaning and applications",
        paragraphs: [
          "Induction underlies generators and transformers, where changing flux linkage produces useful e.m.f.",
          "Lenz’s law is an energy-conservation statement: induced effects resist the change so external work is required to sustain induction.",
          "If induction aided the change instead of opposing it, energy would be created without input, which is impossible.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Induction questions are often conceptually simple but sign-sensitive. Examiners commonly penalise wrong statements of what is opposed, omission of flux linkage, and failure to link magnitude to rate of change.",
      items: [
        "Stating induced e.m.f. depends on magnetic flux alone rather than change of flux linkage.",
        "Using Φ = BA without the perpendicular-area condition, then applying blindly to angled cases.",
        "Saying Lenz’s law means induced current opposes the magnetic field. It opposes the change in flux causing the induction.",
        "Forgetting the N factor for multi-turn coils in rate-of-change relation.",
        "Assuming galvanometer deflection persists while magnet is stationary inside coil. Deflection occurs only while flux linkage changes.",
      ],
    },
    workedExamples: [
      {
        id: "t20-5-ex1",
        title: "Calculating magnetic flux",
        problem: [
          "A coil of area 3.0 x 10⁻³ m² is placed with its area perpendicular to a uniform magnetic field of 0.40 T. Calculate magnetic flux through one turn.",
        ],
        solution: [
          "Use Φ = BA for perpendicular arrangement.",
          "Φ = (0.40)(3.0 x 10⁻³) = 1.2 x 10⁻³ Wb.",
          "Flux through one turn is 1.2 mWb.",
        ],
      },
      {
        id: "t20-5-ex2",
        title: "Induced e.m.f. from changing flux linkage",
        problem: [
          "A 250-turn coil has flux per turn changing uniformly from 8.0 x 10⁻⁴ Wb to 2.0 x 10⁻⁴ Wb in 0.050 s. Find induced e.m.f. magnitude.",
        ],
        solution: [
          "Use |ε| = |Δ(NΦ)/Δt| = N|ΔΦ|/Δt.",
          "ΔΦ = (2.0 - 8.0) x 10⁻⁴ = -6.0 x 10⁻⁴ Wb, so |ΔΦ| = 6.0 x 10⁻⁴ Wb.",
          "|ε| = (250)(6.0 x 10⁻⁴)/0.050 = 3.0 V.",
          "Induced e.m.f. magnitude is 3.0 V.",
        ],
      },
      {
        id: "t20-5-ex3",
        title: "Using Lenz’s law for direction",
        problem: [
          "A bar magnet with north pole facing a coil is moved toward the coil. State direction of induced current effect on the near coil face and explain with Lenz’s law.",
        ],
        solution: [
          "As the north pole approaches, flux linkage through the coil increases in the magnet’s field direction.",
          "By Lenz’s law, induced current must produce a magnetic effect that opposes this increase, so the near face of the coil behaves as a north pole to repel the approaching north.",
          "This opposition explains the observed resistive effect during motion.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t20-5-st1",
        question: "Define magnetic flux and write the syllabus equation for a surface perpendicular to the field.",
        modelAnswer: [
          "Magnetic flux is the product of magnetic flux density and cross-sectional area perpendicular to the field.",
          "For this case, Φ = BA.",
        ],
      },
      {
        id: "t20-5-st2",
        question: "What is magnetic flux linkage for a coil of N turns with flux Φ through each turn?",
        modelAnswer: ["Flux linkage is NΦ."],
      },
      {
        id: "t20-5-st3",
        question: "State Faraday’s law and Lenz’s law in words.",
        modelAnswer: [
          "Faraday’s law: induced e.m.f. is proportional to the rate of change of magnetic flux linkage.",
          "Lenz’s law: induced e.m.f. or current is in a direction that opposes the change producing it.",
        ],
      },
      {
        id: "t20-5-st4",
        question: "List two factors that increase induced e.m.f. in a coil demonstration.",
        modelAnswer: [
          "Increase rate of flux change, for example move the magnet faster.",
          "Increase flux linkage change, for example use more turns or a stronger magnetic field.",
        ],
      },
      {
        id: "t20-5-st5",
        question: "A coil has 120 turns and flux per turn changes by 5.0 x 10⁻⁴ Wb in 0.020 s. Calculate induced e.m.f. magnitude.",
        modelAnswer: [
          "|ε| = N|ΔΦ|/Δt = (120)(5.0 x 10⁻⁴)/0.020 = 3.0 V.",
        ],
      },
    ],
  },
};
