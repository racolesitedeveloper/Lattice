import type { NoteDraft } from "./types";

/** Full teaching notes for 9702 Topic 18 — subtopics 18.1–18.5 (see lib/notes/AUTHORING.md). */
export const PHYSICS_TOPIC18_DRAFTS: Record<string, NoteDraft> = {
  "t18-1": {
    noteId: "t18-1",
    syllabusNotes: [
      {
        id: "electric-field-definition",
        title: "Electric field as a field of force",
        paragraphs: [
          "An electric field is a region of space where an electric charge experiences a force. This makes it a field of force, analogous to the gravitational field but acting on charge rather than mass.",
          "Electric field strength E at a point is defined as force per unit positive charge placed at that point. In symbols, E = F/q for a small positive test charge.",
          "The direction of E is the direction of force on a positive test charge. A negative charge experiences force opposite to the field direction.",
        ],
      },
      {
        id: "force-equation-fqe",
        title: "Using F = qE correctly",
        paragraphs: [
          "From the definition E = F/q, the force relation is F = qE. This is a vector equation: force and field are in the same direction for positive q and opposite for negative q.",
          "Units: E has SI unit N C⁻¹ (equivalent to V m⁻¹ in suitable contexts). Force is in N and charge in C.",
          "In one-dimensional questions, signs can be used to represent direction. In two-dimensional work, draw field and force arrows explicitly.",
        ],
      },
      {
        id: "field-lines-representation",
        title: "Representing electric fields with field lines",
        paragraphs: [
          "Field lines are a visual representation of electric fields. Arrows show field direction, i.e. direction of force on a positive test charge.",
          "Line density indicates field strength: closer spacing means stronger field.",
          "Field lines originate on positive charges and terminate on negative charges. They do not cross, because the field at one point cannot have two directions.",
        ],
      },
      {
        id: "common-patterns",
        title: "Recognising common field-line patterns",
        paragraphs: [
          "Around an isolated positive point charge, lines radiate outward uniformly in all directions. Around an isolated negative point charge, lines radiate inward.",
          "For equal and opposite charges, lines run from positive to negative and curve, with greatest density near the charges.",
          "Near large, approximately parallel conducting plates with opposite charge, lines are nearly straight and parallel in the central region, indicating near-uniform field there.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Examiners in 18.1 reward precise definitions and correct direction logic. Most lost marks come from confusing field direction with force on negative charges or from poorly drawn field lines.",
      items: [
        "Defining electric field as force on any charge without dividing by charge magnitude.",
        "Drawing field lines from negative to positive; conventional field direction is from positive to negative.",
        "Saying force is always in direction of E, ignoring sign of q in F = qE.",
        "Allowing field lines to intersect in sketches.",
        "Using units such as N m⁻¹ for E instead of N C⁻¹ (or V m⁻¹).",
      ],
    },
    workedExamples: [
      {
        id: "t18-1-ex1",
        title: "Force on charges in a known electric field",
        problem: [
          "A uniform electric field has strength 2.5 x 10³ N C⁻¹ directed east. Find the force on (a) a +3.0 nC charge and (b) a -3.0 nC charge placed in the field.",
        ],
        solution: [
          "Use F = qE with q in coulombs.",
          "q = 3.0 nC = 3.0 x 10⁻⁹ C. Magnitude F = (3.0 x 10⁻⁹)(2.5 x 10³) = 7.5 x 10⁻⁶ N.",
          "For + charge, force is in field direction: 7.5 x 10⁻⁶ N east.",
          "For - charge of same magnitude, force magnitude is same but direction is opposite: 7.5 x 10⁻⁶ N west.",
        ],
      },
      {
        id: "t18-1-ex2",
        title: "Finding field strength from measured force",
        problem: [
          "A positive test charge of 4.0 x 10⁻⁶ C experiences force 1.2 x 10⁻² N upward at a point. Calculate electric field strength at that point.",
        ],
        solution: [
          "From definition, E = F/q.",
          "E = (1.2 x 10⁻²) / (4.0 x 10⁻⁶) = 3.0 x 10³ N C⁻¹.",
          "Direction of E is upward because the test charge is positive.",
        ],
      },
      {
        id: "t18-1-ex3",
        title: "Interpreting field-line diagrams",
        problem: [
          "Two points P and Q lie on a field-line diagram. At P the lines are visibly denser than at Q. Explain which point has larger field strength and how force on a negative charge compares at P and Q.",
        ],
        solution: [
          "Field-line density indicates field strength, so E is larger at P than at Q.",
          "Force magnitude on a charge is |F| = |q|E, so for the same negative charge, force magnitude is larger at P.",
          "Because charge is negative, force direction is opposite to the local field direction at each point.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t18-1-st1",
        question: "Define electric field strength and state its SI unit.",
        modelAnswer: [
          "Electric field strength at a point is force per unit positive charge at that point, E = F/q.",
          "SI unit is N C⁻¹ (equivalently V m⁻¹).",
        ],
      },
      {
        id: "t18-1-st2",
        question: "State the meaning of the direction of electric field at a point.",
        modelAnswer: [
          "It is the direction of force on a small positive test charge placed at that point.",
        ],
      },
      {
        id: "t18-1-st3",
        question: "A charge -2.0 x 10⁻⁶ C is in field 800 N C⁻¹ directed north. Find force magnitude and direction.",
        modelAnswer: [
          "Magnitude: F = |q|E = (2.0 x 10⁻⁶)(800) = 1.6 x 10⁻³ N.",
          "Direction is opposite to field because charge is negative, so force is south.",
        ],
      },
      {
        id: "t18-1-st4",
        question: "Give two rules for drawing electric field lines.",
        modelAnswer: [
          "Lines point in direction of force on positive test charge, from positive toward negative.",
          "Lines do not cross.",
          "Closer spacing means stronger field.",
        ],
      },
      {
        id: "t18-1-st5",
        question: "Why must a test charge used for defining field strength be small?",
        modelAnswer: [
          "So that its own electric field does not significantly disturb the original field being measured.",
        ],
      },
    ],
  },

  "t18-2": {
    noteId: "t18-2",
    syllabusNotes: [
      {
        id: "uniform-field-between-plates",
        title: "Uniform electric field between charged parallel plates",
        paragraphs: [
          "A uniform electric field has constant magnitude and direction throughout a region. Between large parallel plates with opposite charge, the central region is a good approximation to a uniform field.",
          "Field lines in this central region are straight, parallel and equally spaced, directed from the positive plate to the negative plate.",
          "Near plate edges, fringing makes the field non-uniform; many calculations neglect this by assuming points are well within the central region.",
        ],
      },
      {
        id: "equation-e-vd",
        title: "Using E = ΔV/Δd",
        paragraphs: [
          "For the uniform field between parallel plates, field strength is E = ΔV/Δd, where ΔV is potential difference across plates and Δd is plate separation measured perpendicular to the plates.",
          "This gives E in V m⁻¹. Since 1 V m⁻¹ = 1 N C⁻¹, both units are equivalent.",
          "Always convert plate separation to metres before substitution. Mistakes with mm to m conversion are common.",
        ],
      },
      {
        id: "motion-of-charged-particles",
        title: "Effect on motion of charged particles",
        paragraphs: [
          "A charged particle in a uniform electric field experiences constant force F = qE and therefore constant acceleration a = F/m = qE/m in the field direction for positive charges, opposite for negative charges.",
          "If initial velocity is along the field direction, motion is one-dimensional uniformly accelerated (or uniformly decelerated if velocity is opposite acceleration).",
          "If initial velocity is perpendicular to the field, horizontal and vertical components are independent: one component remains constant while the component along field has constant acceleration. The trajectory is parabolic, analogous to projectile motion in a uniform gravitational field.",
        ],
      },
      {
        id: "energy-perspective",
        title: "Energy and potential difference in uniform fields",
        paragraphs: [
          "Moving a charge through potential difference ΔV changes electric potential energy by ΔEP = qΔV.",
          "For a positive charge moving from higher to lower potential in the field direction, electric potential energy decreases and kinetic energy increases if other forces are negligible.",
          "For a negative charge, signs reverse in potential-energy accounting, so write equations carefully with charge sign retained.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "In 18.2, examiners reward clean separation of field equations, force/acceleration logic, and component motion. Most errors are sign mistakes or incorrect geometry for plate separation.",
      items: [
        "Using plate length or particle path length for d in E = ΔV/Δd instead of plate separation.",
        "Assuming positive and negative charges accelerate in same direction in a field.",
        "Claiming speed is constant when a charged particle moves across a field with a force component present.",
        "Mixing V m⁻¹ and N C⁻¹ as if they were different physical quantities.",
        "Ignoring fringing limitations while interpreting edge-region trajectories.",
      ],
    },
    workedExamples: [
      {
        id: "t18-2-ex1",
        title: "Field strength between plates",
        problem: [
          "Parallel plates are 6.0 mm apart with p.d. 1.8 kV across them. Calculate electric field strength.",
        ],
        solution: [
          "Use E = ΔV/Δd.",
          "Convert units: ΔV = 1.8 x 10³ V, Δd = 6.0 mm = 6.0 x 10⁻³ m.",
          "E = (1.8 x 10³)/(6.0 x 10⁻³) = 3.0 x 10⁵ V m⁻¹.",
          "So field strength is 3.0 x 10⁵ N C⁻¹.",
        ],
      },
      {
        id: "t18-2-ex2",
        title: "Acceleration of a charged particle in a uniform field",
        problem: [
          "An electron enters a uniform field of strength 4.0 x 10⁴ N C⁻¹. Find its acceleration magnitude. Use e = 1.60 x 10⁻¹⁹ C and me = 9.11 x 10⁻³¹ kg.",
        ],
        solution: [
          "Force magnitude on electron: F = eE = (1.60 x 10⁻¹⁹)(4.0 x 10⁴) = 6.4 x 10⁻¹⁵ N.",
          "Acceleration magnitude: a = F/m = (6.4 x 10⁻¹⁵)/(9.11 x 10⁻³¹) = 7.0 x 10¹⁵ m s⁻².",
          "Direction is opposite to field direction because electron charge is negative.",
        ],
      },
      {
        id: "t18-2-ex3",
        title: "Perpendicular-entry trajectory reasoning",
        problem: [
          "A positive ion enters horizontally between parallel plates where field is vertically downward. Describe its motion qualitatively and explain why the path is curved.",
        ],
        solution: [
          "Horizontal velocity component remains constant because no horizontal electric force acts.",
          "Vertical force qE acts downward, giving constant downward acceleration.",
          "Combining constant horizontal velocity with constant vertical acceleration produces a parabolic trajectory curving downward.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t18-2-st1",
        question: "State the equation for electric field strength between parallel plates and define each symbol.",
        modelAnswer: [
          "E = ΔV/Δd, where ΔV is potential difference across the plates and Δd is perpendicular plate separation.",
        ],
      },
      {
        id: "t18-2-st2",
        question: "A field of 2.0 x 10⁴ V m⁻¹ acts on a proton. Find force magnitude. Use e = 1.60 x 10⁻¹⁹ C.",
        modelAnswer: [
          "F = qE = (1.60 x 10⁻¹⁹)(2.0 x 10⁴) = 3.2 x 10⁻¹⁵ N.",
        ],
      },
      {
        id: "t18-2-st3",
        question: "Explain why a uniform electric field gives constant acceleration for a particle of constant charge and mass.",
        modelAnswer: [
          "In a uniform field, E is constant, so force F = qE is constant for fixed q.",
          "With constant mass, a = F/m is therefore constant.",
        ],
      },
      {
        id: "t18-2-st4",
        question: "If an electron is released from rest in a uniform field directed right, which way does it move and why?",
        modelAnswer: [
          "It moves left, opposite to the field direction, because electron charge is negative so F = qE has opposite direction to E.",
        ],
      },
      {
        id: "t18-2-st5",
        question: "A charge +5.0 nC moves through p.d. 200 V. Calculate change in electric potential energy.",
        modelAnswer: [
          "ΔEP = qΔV = (5.0 x 10⁻⁹)(200) = 1.0 x 10⁻⁶ J.",
        ],
      },
    ],
  },

  "t18-3": {
    noteId: "t18-3",
    syllabusNotes: [
      {
        id: "spherical-conductor-point-model",
        title: "Outside a spherical conductor: point-charge model",
        paragraphs: [
          "For points outside a charged spherical conductor, the electric effect is the same as if all charge were concentrated at the sphere centre.",
          "This allows force calculations using point-charge separation from centre to external point.",
          "The model is valid outside the sphere. Internal field behavior of conductors is treated separately in full electrostatics.",
        ],
      },
      {
        id: "coulomb-law",
        title: "Coulomb’s law in free space",
        paragraphs: [
          "The magnitude of electric force between two point charges Q₁ and Q₂ separated by distance r in free space is F = Q₁Q₂/(4πε₀r²).",
          "Here ε₀ is permittivity of free space. The law shows inverse-square dependence: doubling r reduces force to one quarter.",
          "Force direction is along the line joining charges. Like charges repel and unlike charges attract.",
        ],
      },
      {
        id: "vector-and-sign-use",
        title: "Direction, signs and superposition",
        paragraphs: [
          "In one dimension, sign can encode direction if a clear axis is chosen. In two dimensions, resolve forces into components.",
          "When multiple source charges act, resultant force is vector sum of individual Coulomb forces (superposition).",
          "Magnitude equations alone are insufficient where geometry is non-collinear; draw force directions first.",
        ],
      },
      {
        id: "scaling-insight",
        title: "How force scales with charge and distance",
        paragraphs: [
          "Force is directly proportional to each charge magnitude and inversely proportional to r².",
          "So doubling one charge doubles force, doubling both charges quadruples force, and tripling distance reduces force by factor 9.",
          "These proportionalities are useful for rapid checking of calculated answers.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Coulomb-law questions are usually high-yield if direction and distance are handled carefully. Examiners penalise misuse of radius/diameter and force-direction mistakes.",
      items: [
        "Using diameter when question gives centre-to-centre distance or vice versa.",
        "Dropping square on r in Coulomb’s law.",
        "Assuming all electric forces are attractive.",
        "Adding scalar magnitudes where vector addition is required.",
        "Treating 1/(4πε₀) as optional and producing unscaled answers in SI.",
      ],
    },
    workedExamples: [
      {
        id: "t18-3-ex1",
        title: "Force between two point charges",
        problem: [
          "Two charges +4.0 μC and -2.0 μC are separated by 0.30 m in free space. Calculate force magnitude between them. Use 1/(4πε₀) = 8.99 x 10⁹ N m² C⁻².",
        ],
        solution: [
          "Use Coulomb’s law magnitude F = k|Q₁Q₂|/r².",
          "Q₁ = 4.0 x 10⁻⁶ C, Q₂ = 2.0 x 10⁻⁶ C, r = 0.30 m.",
          "F = (8.99 x 10⁹)(8.0 x 10⁻¹²)/(0.30)² = 0.80 N (2 s.f.).",
          "Charges are unlike, so force is attractive along the line joining them.",
        ],
      },
      {
        id: "t18-3-ex2",
        title: "Scaling without full recalculation",
        problem: [
          "For two fixed point charges, initial force is 0.45 N at separation r. What is force when separation becomes 2r?",
        ],
        solution: [
          "By inverse-square relation, F ∝ 1/r².",
          "At 2r, force is F/4.",
          "New force = 0.45/4 = 0.1125 N ≈ 0.11 N.",
        ],
      },
      {
        id: "t18-3-ex3",
        title: "Using spherical-conductor approximation",
        problem: [
          "A charged spherical conductor carries +6.0 μC. A small +1.5 μC charge is 0.20 m from its centre, outside the sphere. Find force on the small charge.",
        ],
        solution: [
          "Outside the sphere, treat sphere charge as point charge at centre.",
          "Use F = kQq/r² = (8.99 x 10⁹)(6.0 x 10⁻⁶)(1.5 x 10⁻⁶)/(0.20)².",
          "F = 2.02 N.",
          "Both charges are positive, so the force is repulsive, directed radially outward from sphere centre.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t18-3-st1",
        question: "State Coulomb’s law for force between two point charges in free space.",
        modelAnswer: [
          "F = Q₁Q₂/(4πε₀r²) in magnitude form with direction along the line joining charges; like charges repel and unlike charges attract.",
        ],
      },
      {
        id: "t18-3-st2",
        question: "How does force change if one charge is tripled while all else remains constant?",
        modelAnswer: ["Force is tripled, because F is directly proportional to each charge."],
      },
      {
        id: "t18-3-st3",
        question: "How does force change if separation is halved?",
        modelAnswer: ["Force becomes four times larger, because F ∝ 1/r²."],
      },
      {
        id: "t18-3-st4",
        question: "Why can a charged spherical conductor be treated as a point charge for external points?",
        modelAnswer: [
          "Its external electric field is the same as that of an equivalent point charge at its centre, so Coulomb calculations use centre-to-point distance.",
        ],
      },
      {
        id: "t18-3-st5",
        question: "Two equal positive charges are fixed on a line. What is direction of force on each due to the other?",
        modelAnswer: [
          "Each experiences force away from the other along the line joining them (repulsion).",
        ],
      },
    ],
  },

  "t18-4": {
    noteId: "t18-4",
    syllabusNotes: [
      {
        id: "point-charge-field-equation",
        title: "Electric field of a point charge",
        paragraphs: [
          "For a point charge Q in free space, electric field strength magnitude at distance r is E = Q/(4πε₀r²).",
          "This follows from combining Coulomb’s law with E = F/q for a test charge.",
          "The field is radial: outward for positive Q and inward for negative Q.",
        ],
      },
      {
        id: "derivation-link",
        title: "Connecting force law and field law",
        paragraphs: [
          "Take a test charge q at distance r from source Q. Coulomb force magnitude is F = Qq/(4πε₀r²).",
          "By definition E = F/q, so q cancels to give E = Q/(4πε₀r²).",
          "The cancellation shows field strength is a property of source charge and position, independent of test-charge magnitude.",
        ],
      },
      {
        id: "inverse-square-behavior",
        title: "Distance dependence and field-line density",
        paragraphs: [
          "E varies as 1/r² for a point charge. If distance doubles, field strength falls to one quarter.",
          "This matches field-line diagrams where radial lines spread out with distance, reducing line density.",
          "Inverse-square dependence is a common comparison point with gravitational fields from point masses.",
        ],
      },
      {
        id: "force-on-test-charge",
        title: "From field to force on any charge",
        paragraphs: [
          "Once E at a point is known, force on charge q at that point is F = qE.",
          "For positive q, force follows field direction; for negative q, force is opposite.",
          "In multi-charge systems, first find resultant field vector at the point by superposition, then apply F = qE for the chosen test charge.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "In 18.4, markers look for correct distinction between source charge and test charge. Errors usually come from symbol confusion or missing directional statements.",
      items: [
        "Including test charge q in final expression for field due to source Q.",
        "Using E ∝ 1/r rather than 1/r² for point charge.",
        "Forgetting radial direction (outward for +Q, inward for -Q).",
        "Using force formula directly when question asks for field strength.",
        "Sign errors when converting from E to force on negative charges.",
      ],
    },
    workedExamples: [
      {
        id: "t18-4-ex1",
        title: "Field strength at a given distance",
        problem: [
          "Find electric field strength at 0.50 m from a +3.0 μC point charge in free space. Use 1/(4πε₀) = 8.99 x 10⁹ N m² C⁻².",
        ],
        solution: [
          "Use E = kQ/r².",
          "E = (8.99 x 10⁹)(3.0 x 10⁻⁶)/(0.50)² = 1.08 x 10⁵ N C⁻¹.",
          "Direction is radially outward from the positive charge.",
        ],
      },
      {
        id: "t18-4-ex2",
        title: "Force on a test charge using field value",
        problem: [
          "At a point, electric field is 6.0 x 10⁴ N C⁻¹ west. Determine force on a charge -2.5 nC placed there.",
        ],
        solution: [
          "Magnitude: |F| = |q|E = (2.5 x 10⁻⁹)(6.0 x 10⁴) = 1.5 x 10⁻⁴ N.",
          "Charge is negative, so force is opposite to field direction.",
          "Therefore force is 1.5 x 10⁻⁴ N east.",
        ],
      },
      {
        id: "t18-4-ex3",
        title: "Comparing field strengths at two radii",
        problem: [
          "For the same point charge, field at r₁ is E₁. Find E₂/E₁ when r₂ = 3r₁.",
        ],
        solution: [
          "For a point charge, E ∝ 1/r².",
          "So E₂/E₁ = (r₁/r₂)² = (1/3)² = 1/9.",
          "Hence field at three times the distance is one ninth of the original value.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t18-4-st1",
        question: "Write the expression for electric field strength due to a point charge in free space.",
        modelAnswer: ["E = Q/(4πε₀r²) in magnitude form."],
      },
      {
        id: "t18-4-st2",
        question: "State the field direction for (a) positive point charge and (b) negative point charge.",
        modelAnswer: [
          "(a) Radially outward from a positive charge.",
          "(b) Radially inward toward a negative charge.",
        ],
      },
      {
        id: "t18-4-st3",
        question: "If distance from a point charge is reduced from r to r/2, by what factor does E change?",
        modelAnswer: ["E increases by factor 4, due to inverse-square dependence."],
      },
      {
        id: "t18-4-st4",
        question: "Explain why E at a point does not depend on the magnitude of test charge used to probe it.",
        modelAnswer: [
          "Because E = F/q and Coulomb force on the test charge is proportional to q, so q cancels in the ratio.",
        ],
      },
      {
        id: "t18-4-st5",
        question: "At a point E = 2.2 x 10³ N C⁻¹ south. What is force on +4.0 μC charge there?",
        modelAnswer: [
          "F = qE = (4.0 x 10⁻⁶)(2.2 x 10³) = 8.8 x 10⁻³ N.",
          "Direction is south because charge is positive.",
        ],
      },
    ],
  },

  "t18-5": {
    noteId: "t18-5",
    syllabusNotes: [
      {
        id: "potential-definition",
        title: "Electric potential at a point",
        paragraphs: [
          "Electric potential V at a point is defined as work done per unit positive charge in bringing a small test charge from infinity to that point.",
          "Potential is a scalar quantity with unit volt, where 1 V = 1 J C⁻¹.",
          "Because the definition uses a positive test charge, potential sign and gradient conventions are consistent across electrostatics.",
        ],
      },
      {
        id: "potential-gradient-link",
        title: "Electric field as negative potential gradient",
        paragraphs: [
          "The electric field at a point equals the negative of the potential gradient there. In one dimension, E = -dV/dr along the chosen coordinate.",
          "The negative sign means field points in direction of decreasing potential.",
          "In a uniform field between plates, potential decreases linearly with distance, so E is constant and equals the magnitude of slope of V-distance graph.",
        ],
      },
      {
        id: "point-charge-potential",
        title: "Using V = Q/(4πε₀r) for a point charge",
        paragraphs: [
          "For a point charge Q in free space, electric potential at distance r is V = Q/(4πε₀r), with reference V = 0 at infinity.",
          "Unlike field strength, potential varies as 1/r, not 1/r².",
          "Potential is positive around a positive charge and negative around a negative charge.",
        ],
      },
      {
        id: "potential-energy-two-charges",
        title: "Potential energy of two point charges",
        paragraphs: [
          "If charge q is in potential V due to another charge, electric potential energy is EP = qV.",
          "For two point charges Q and q separated by r in free space, EP = Qq/(4πε₀r).",
          "A positive EP corresponds to like-charge configurations (repulsive, energy required to bring together). A negative EP corresponds to unlike charges (attractive, energy released on bringing together).",
        ],
      },
      {
        id: "distinguishing-v-e-and-ep",
        title: "Distinguishing potential, field strength and potential energy",
        paragraphs: [
          "Potential V is energy per unit charge (scalar). Field strength E is force per unit positive charge (vector). Potential energy EP is total energy of a specific charge configuration.",
          "Useful links are F = qE, EP = qV, and E = -dV/dr.",
          "In written solutions, state clearly whether the question asks for V, E, ΔV, or EP, because units and equations differ.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Potential questions often mix concepts intentionally. Examiners reward clear variable meaning and sign control, especially when linking V, E and EP.",
      items: [
        "Defining potential as force per unit charge (that is field strength).",
        "Forgetting minus sign in field–potential-gradient relation.",
        "Using V ∝ 1/r² for point charges instead of 1/r.",
        "Using EP = qV without preserving sign of q or V.",
        "Confusing potential difference ΔV with potential at a point V.",
      ],
    },
    workedExamples: [
      {
        id: "t18-5-ex1",
        title: "Potential due to a point charge",
        problem: [
          "Calculate electric potential at 0.25 m from a -5.0 μC point charge in free space. Use 1/(4πε₀) = 8.99 x 10⁹ N m² C⁻².",
        ],
        solution: [
          "Use V = kQ/r.",
          "V = (8.99 x 10⁹)(-5.0 x 10⁻⁶)/0.25 = -1.80 x 10⁵ V.",
          "Potential is negative because source charge is negative.",
        ],
      },
      {
        id: "t18-5-ex2",
        title: "Potential gradient and uniform field",
        problem: [
          "In a region, potential decreases uniformly from 120 V to 20 V over 0.40 m in the +x direction. Find electric field magnitude and direction.",
        ],
        solution: [
          "Potential gradient dV/dx = (20 - 120)/0.40 = -250 V m⁻¹.",
          "E = -dV/dx = -(-250) = +250 V m⁻¹.",
          "So field magnitude is 250 V m⁻¹ and direction is +x (from high potential to low potential).",
        ],
      },
      {
        id: "t18-5-ex3",
        title: "Potential energy of two point charges",
        problem: [
          "Two charges +3.0 μC and -4.0 μC are 0.15 m apart in free space. Calculate their electric potential energy.",
        ],
        solution: [
          "Use EP = kQq/r.",
          "EP = (8.99 x 10⁹)(3.0 x 10⁻⁶)(-4.0 x 10⁻⁶)/0.15 = -0.719 J.",
          "So EP ≈ -0.72 J. Negative sign indicates an attractive bound configuration.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t18-5-st1",
        question: "Define electric potential at a point and give its SI unit.",
        modelAnswer: [
          "Electric potential at a point is work done per unit positive charge in bringing a small test charge from infinity to that point.",
          "SI unit is volt, V = J C⁻¹.",
        ],
      },
      {
        id: "t18-5-st2",
        question: "State the relationship between electric field and potential gradient, including sign meaning.",
        modelAnswer: [
          "E equals the negative of potential gradient, E = -dV/dr in one dimension.",
          "The negative sign shows field points toward decreasing potential.",
        ],
      },
      {
        id: "t18-5-st3",
        question: "Write the expression for potential due to a point charge and compare its distance dependence with field strength.",
        modelAnswer: [
          "V = Q/(4πε₀r).",
          "Potential varies as 1/r, whereas field strength varies as 1/r².",
        ],
      },
      {
        id: "t18-5-st4",
        question: "A charge -2.0 nC is at point where V = +600 V. Find its electric potential energy.",
        modelAnswer: [
          "EP = qV = (-2.0 x 10⁻⁹)(600) = -1.2 x 10⁻⁶ J.",
        ],
      },
      {
        id: "t18-5-st5",
        question: "Explain why field lines are perpendicular to equipotential surfaces.",
        modelAnswer: [
          "Along an equipotential surface, potential does not change, so no work is done in moving a charge along it.",
          "Field is direction of greatest potential decrease, so it must be normal to the equipotential surface.",
        ],
      },
    ],
  },
};
