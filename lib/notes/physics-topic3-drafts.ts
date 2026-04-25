import type { NoteDraft } from "./types";

/** Full teaching notes for 9702 Topic 3 — subtopics 3.1–3.3 (see lib/notes/AUTHORING.md). */
export const PHYSICS_TOPIC3_DRAFTS: Record<string, NoteDraft> = {
  "t3-1": {
    noteId: "t3-1",
    syllabusNotes: [
      {
        id: "force-momentum-rate",
        title: "Newton's second law in momentum form",
        paragraphs: [
          "Linear momentum is defined as p = mv. Momentum is a vector, so its direction is the same as the velocity direction when mass is positive. The SI unit is kg m s⁻¹.",
          "Newton's second law is most general in momentum form: resultant force equals the rate of change of momentum. In symbols, F = dp/dt for one-dimensional motion with sign convention, or as a vector relation in full form. This statement remains valid when mass changes, so it is more fundamental than F = ma.",
          "For constant mass, p = mv gives dp/dt = m dv/dt = ma, so the familiar F = ma is a special case. In written answers, examiners reward candidates who state the condition constant mass when moving between these forms.",
          "From F = ma for constant mass, acceleration is always in the same direction as the resultant force because mass is positive. In force-diagram reasoning, this directional link is essential when deciding signs.",
          "Impulse is the product of force and time interval in the same direction, J = F delta t for constant force, and in general J = integral of F dt. Impulse equals change in momentum, so the area under a force-time graph gives delta p directly.",
        ],
      },
      {
        id: "newtons-laws-meaning",
        title: "Newton's three laws and how they connect",
        paragraphs: [
          "Newton's first law states that a body remains at rest or moves with constant velocity unless acted on by a resultant external force. This is not a claim that motion needs a force; rather, it says acceleration needs a resultant force.",
          "Newton's second law links that resultant force to how quickly momentum changes. Larger resultant force gives a larger rate of change of momentum, and for a given force, larger mass means a smaller acceleration.",
          "Newton's third law states that when body A exerts a force on body B, body B exerts an equal and opposite force on body A. The pair acts on different bodies, so they do not cancel each other on one object.",
          "In many mechanics questions, the first law helps identify equilibrium, the second law provides equations of motion, and the third law clarifies interaction forces such as contact, normal reaction, tension, and drag interactions.",
        ],
      },
      {
        id: "mass-weight-inertia",
        title: "Mass, weight and inertia in dynamics",
        paragraphs: [
          "Mass measures inertia: resistance to changes in velocity. A larger mass requires a larger resultant force to produce the same acceleration, as seen from F = ma.",
          "Weight is the gravitational force on a mass, W = mg. Weight is a force measured in newtons, while mass is measured in kilograms. In the same location, g is approximately constant, so weight is proportional to mass.",
          "Candidates often confuse mass and weight in language and units. Writing mass as N or weight as kg is a direct mark loss in short definition questions and can cause major numerical errors in longer problems.",
          "When drawing force diagrams, include all real forces on the chosen body only. Resolve components if needed, then apply Newton's second law along each axis using a consistent sign convention.",
        ],
      },
      {
        id: "free-body-and-modelling",
        title: "Free-body diagrams and modelling assumptions",
        paragraphs: [
          "A free-body diagram isolates one object and shows all external forces acting on it. Typical forces include weight, normal reaction, tension, thrust, drag and friction. Internal forces within a chosen system do not appear on that system-level diagram.",
          "Define coordinate axes to reduce sign errors. For inclined motion, axes parallel and perpendicular to the plane often simplify equations. Write Newton's second law separately along each axis.",
          "State modelling assumptions where relevant, for example neglecting air resistance or treating a string as light and inextensible. These assumptions explain why some forces are omitted and prevent ambiguity in reasoning.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Mechanics markers look for precise law statements, correct vector signs, and clear force diagrams. Most lost marks come from misidentifying forces or swapping between momentum and acceleration forms without conditions.",
      items: [
        "Writing Newton's second law as force is proportional to velocity. The correct relation is to acceleration for constant mass, or to rate of change of momentum in general.",
        "Treating an action-reaction pair as forces on the same object and then cancelling them in one equation. Third-law pairs act on different bodies.",
        "Using weight in kg or mass in N. Mass is in kg, weight is force in N.",
        "Applying F = ma to one object but using the total mass of a larger system without justification.",
        "Forgetting direction when using impulse and momentum changes, so signs are wrong in one-dimensional collisions.",
        "Omitting a force from the free-body diagram, then compensating with algebraic sign fixes that are physically inconsistent.",
      ],
    },
    workedExamples: [
      {
        id: "t3-1-ex1",
        title: "Resultant force from momentum change",
        problem: [
          "A 0.25 kg ball moving east at 12 m s⁻¹ is struck and then moves west at 8.0 m s⁻¹. The contact time is 0.040 s. Take east as positive. Find (a) the change in momentum and (b) the average force on the ball.",
        ],
        solution: [
          "Initial velocity u = +12 m s⁻¹, final velocity v = -8.0 m s⁻¹. Initial momentum pᵢ = m u = 0.25 x 12 = +3.0 kg m s⁻¹. Final momentum pᶠ = m v = 0.25 x (-8.0) = -2.0 kg m s⁻¹.",
          "Change in momentum Δp = pᶠ - pᵢ = -2.0 - (+3.0) = -5.0 kg m s⁻¹. The negative sign means the change is toward west.",
          "Average force Fₐᵥ = Δp / Δt = (-5.0) / 0.040 = -125 N. Magnitude is 1.25 x 10² N, direction west.",
        ],
      },
      {
        id: "t3-1-ex2",
        title: "Applying Newton's second law with an incline",
        problem: [
          "A 4.0 kg block slides down a rough slope at 30 degrees to the horizontal. The component of the resistive force up the slope is 5.0 N. Calculate the acceleration down the slope. Take g = 9.81 m s⁻².",
        ],
        solution: [
          "Choose down-slope as positive. Component of weight down slope is mg sin 30 degrees = 4.0 x 9.81 x 0.5 = 19.62 N.",
          "Resultant force along slope is 19.62 - 5.0 = 14.62 N down slope.",
          "Using Newton's second law for constant mass, F = ma gives a = 14.62 / 4.0 = 3.66 m s⁻² down slope.",
          "The positive acceleration matches the chosen positive direction, so the sign is consistent.",
        ],
      },
      {
        id: "t3-1-ex3",
        title: "Action-reaction interpretation in a push",
        problem: [
          "A student pushes a wall with a horizontal force of 180 N but the wall does not move. Explain, using Newton's laws, what force acts on the student and why there is no acceleration of the wall.",
        ],
        solution: [
          "By Newton's third law, if the student exerts 180 N on the wall, the wall exerts 180 N on the student in the opposite direction. These two forces are equal and opposite but act on different bodies.",
          "For the wall, the push from the student is balanced by forces from the wall's supports and structure, so its resultant force can be zero. With zero resultant force, acceleration is zero by Newton's second law.",
          "For the student, the wall's reaction is balanced by friction and other contact forces at the feet when standing still. Again, zero resultant force gives no acceleration.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t3-1-st1",
        question:
          "State Newton's second law in its most general form and show how F = ma follows from it under a stated condition.",
        modelAnswer: [
          "Newton's second law states that the resultant force equals the rate of change of momentum of a body, in the direction of that change.",
          "If mass is constant, p = mv so dp/dt = m dv/dt = ma. Therefore the law reduces to F = ma for constant mass motion.",
        ],
      },
      {
        id: "t3-1-st2",
        question:
          "Define impulse and state its relation to momentum. Include SI units.",
        modelAnswer: [
          "Impulse is the product of force and time interval in a given direction, J = F delta t for constant force (or integral of F dt in general).",
          "Impulse equals change in momentum: J = delta p.",
          "The SI unit is N s, which is equivalent to kg m s⁻¹.",
        ],
      },
      {
        id: "t3-1-st3",
        question:
          "Explain why action and reaction forces do not cancel each other when analysing one object.",
        modelAnswer: [
          "Action and reaction forces are equal and opposite but act on different bodies.",
          "When analysing one body, you only include forces acting on that body. The paired force acts on the other body, so it is not part of the same free-body sum.",
        ],
      },
      {
        id: "t3-1-st4",
        question:
          "A constant resultant force of 24 N acts on a 6.0 kg trolley for 3.0 s from rest on a straight track. Find the final speed and distance travelled in that interval.",
        modelAnswer: [
          "Acceleration a = F/m = 24/6.0 = 4.0 m s⁻².",
          "From rest, final speed v = u + at = 0 + (4.0)(3.0) = 12 m s⁻¹.",
          "Distance s = ut + (1/2)at² = 0 + 0.5 x 4.0 x 3.0² = 18 m.",
        ],
      },
      {
        id: "t3-1-st5",
        question:
          "Distinguish clearly between mass and weight, including what each quantity measures and its SI unit.",
        modelAnswer: [
          "Mass measures inertia (resistance to acceleration) and has SI unit kg.",
          "Weight is the gravitational force on a mass, W = mg, and has SI unit N.",
          "Mass is intrinsic to the object, while weight depends on local gravitational field strength g.",
        ],
      },
    ],
  },
  "t3-2": {
    noteId: "t3-2",
    syllabusNotes: [
      {
        id: "friction-and-drag-models",
        title: "Frictional and drag forces in dynamics",
        paragraphs: [
          "Frictional and viscous drag forces oppose relative motion between surfaces or between an object and a fluid. In this section, a qualitative model is required: as speed increases, drag force increases.",
          "Dry contact friction and fluid drag both act opposite to velocity, but their detailed dependence on speed is different. You are not required to use coefficients of friction or viscosity in this syllabus section.",
          "When writing force balances, always separate driving forces from resistive forces. The resultant force determines acceleration through Newton's second law, so any speed-dependent resistance leads naturally to changing acceleration.",
        ],
      },
      {
        id: "falling-with-air-resistance",
        title: "Motion in a uniform gravitational field with air resistance",
        paragraphs: [
          "Consider an object dropped from rest through air. Initially speed is small, so drag is small and resultant downward force is close to weight mg. Hence acceleration is initially close to g.",
          "As speed increases, drag increases upward. The downward resultant force reduces, so acceleration decreases even though the object continues to move downward.",
          "At every stage, the direction of acceleration follows the resultant force, not necessarily the direction of motion. This is why a falling object can still speed up while its acceleration becomes smaller.",
        ],
      },
      {
        id: "terminal-velocity-concept",
        title: "Terminal velocity and force balance",
        paragraphs: [
          "Terminal velocity is reached when resistive force equals the driving force so resultant force is zero. Then acceleration is zero and speed becomes constant.",
          "For a falling body in air, terminal speed occurs when drag upward equals weight downward. The body still moves downward, but no longer speeds up.",
          "A heavier body often has a larger terminal speed than a lighter body of similar shape because a larger weight requires a larger drag force for balance, and larger drag generally needs higher speed.",
        ],
      },
      {
        id: "rising-and-projectile-phases",
        title: "Qualitative stages for upward and downward motion",
        paragraphs: [
          "If an object is projected upward through air, both weight and drag act downward while it rises, so the downward acceleration magnitude can exceed g.",
          "At the highest point, instantaneous speed is zero but acceleration is not zero: weight still acts and so motion begins downward.",
          "During descent, drag acts upward while velocity is downward, so acceleration magnitude is less than g and tends toward zero as terminal speed is approached.",
        ],
      },
      {
        id: "interpreting-qualitative-graphs",
        title: "Expected graph shapes for resistive motion",
        paragraphs: [
          "For a falling object with air resistance, the speed-time graph rises from zero and curves over to a horizontal asymptote at terminal speed. The gradient falls from about g to zero.",
          "The acceleration-time graph starts near +g in the downward direction and decreases toward zero as drag builds.",
          "In qualitative explanations, pair each graph feature to a force argument: increasing drag reduces resultant force, which reduces acceleration, which flattens the speed-time graph.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "In Topic 3.2, examiners reward clear force-based reasoning about resistive motion. Common errors come from treating drag as constant or claiming terminal velocity means no forces act.",
      items: [
        "Stating that drag is constant at all speeds. At this level, use the model that drag increases with speed.",
        "Saying terminal velocity is reached because weight becomes zero. Weight remains mg; terminal speed occurs when drag equals weight so resultant force is zero.",
        "Claiming acceleration is zero as soon as an object is released with air resistance. Initially drag is small, so acceleration is close to g.",
        "For upward motion in air, forgetting that drag and weight can act in the same downward direction while the object is still moving upward.",
        "Using F = ma numerically with inconsistent signs or no stated positive direction in one-dimensional force balances.",
        "Writing no force acts at constant speed. The correct statement is resultant force is zero, while individual forces may be non-zero.",
      ],
    },
    workedExamples: [
      {
        id: "t3-2-ex1",
        title: "Downward motion with increasing drag",
        problem: [
          "A 0.20 kg sphere is dropped vertically in air. At one instant its speed is 6.0 m s⁻¹ downward and air resistance is 1.30 N upward. Take g = 9.81 m s⁻². Find the acceleration at this instant and state whether the sphere has reached terminal velocity.",
        ],
        solution: [
          "Weight W = mg = 0.20 x 9.81 = 1.962 N downward.",
          "Resultant downward force = 1.962 - 1.30 = 0.662 N downward.",
          "Acceleration a = F/m = 0.662/0.20 = 3.31 m s⁻² downward.",
          "Acceleration is not zero, so the sphere is not yet at terminal velocity. It is still speeding up downward, but at less than g because drag is significant.",
        ],
      },
      {
        id: "t3-2-ex2",
        title: "Finding terminal speed from force balance",
        problem: [
          "A cyclist and bicycle have total mass 78 kg on a straight level road. At high speed, the forward driving force is approximately constant at 210 N and resistive force is modelled by Fᵣ = 18v, where v is in m s⁻¹ and force is in N. Determine the terminal speed.",
        ],
        solution: [
          "At terminal speed, acceleration is zero so resultant force is zero.",
          "Therefore driving force = resistive force: 210 = 18v.",
          "So v = 210/18 = 11.7 m s⁻¹.",
          "Interpretation: below this speed, resistive force is smaller than 210 N so the cyclist accelerates; above it, resistive force is larger so the cyclist decelerates back toward 11.7 m s⁻¹.",
        ],
      },
      {
        id: "t3-2-ex3",
        title: "Upward projection with air resistance",
        problem: [
          "A ball is projected vertically upward through air. Describe qualitatively the direction and relative magnitude of acceleration during (a) ascent, (b) at highest point, and (c) early descent before terminal speed is reached.",
        ],
        solution: [
          "During ascent, velocity is upward, but both weight and drag act downward. So acceleration is downward with magnitude greater than g while drag is appreciable.",
          "At the highest point, speed is instantaneously zero so drag is momentarily negligible; weight still acts downward, so acceleration is approximately g downward, not zero.",
          "During early descent, velocity is downward so drag acts upward. Resultant force is still downward but smaller than weight, so acceleration is downward with magnitude less than g.",
          "As descent continues, drag increases until it balances weight; then acceleration becomes zero and terminal downward speed is reached.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t3-2-st1",
        question:
          "Explain why drag force is usually modelled as increasing with speed, and state the direction of drag relative to velocity.",
        modelAnswer: [
          "As speed through a fluid increases, collisions with fluid particles and turbulence effects increase, so resistive force grows.",
          "Drag always acts opposite to the instantaneous velocity of the object relative to the fluid.",
        ],
      },
      {
        id: "t3-2-st2",
        question:
          "A skydiver has weight 760 N and upward air resistance 760 N. What are the acceleration and the motion state at that instant?",
        modelAnswer: [
          "Resultant force is zero because drag equals weight.",
          "Therefore acceleration is zero.",
          "The diver is at terminal velocity at that instant, so speed is constant (not necessarily zero).",
        ],
      },
      {
        id: "t3-2-st3",
        question:
          "Describe qualitatively how acceleration changes for an object dropped from rest in air.",
        modelAnswer: [
          "Initially drag is small so acceleration is close to g downward.",
          "As speed rises, drag rises, reducing resultant downward force.",
          "So acceleration decreases in magnitude toward zero and becomes zero at terminal speed.",
        ],
      },
      {
        id: "t3-2-st4",
        question:
          "Why is the statement no forces act at terminal velocity incorrect?",
        modelAnswer: [
          "At terminal velocity, resultant force is zero, but individual forces still act.",
          "For a falling object, weight acts downward and drag acts upward with equal magnitude.",
          "These forces balance, giving zero acceleration and constant speed.",
        ],
      },
      {
        id: "t3-2-st5",
        question:
          "An object moving upward through air slows down. State the directions of weight, drag and acceleration.",
        modelAnswer: [
          "Weight acts downward.",
          "Drag also acts downward because it opposes the upward velocity.",
          "Resultant force is downward, so acceleration is downward.",
        ],
      },
    ],
  },
  "t3-3": {
    noteId: "t3-3",
    syllabusNotes: [
      {
        id: "momentum-conservation-principle",
        title: "Linear momentum and conservation principle",
        paragraphs: [
          "The linear momentum of a particle is p = mv, a vector quantity. For a system of particles, total momentum is the vector sum of individual momenta.",
          "If the resultant external force on a system is zero, total momentum of the system remains constant. This is conservation of linear momentum. It is a vector statement, so it applies component by component.",
          "In short interaction times such as collisions, external impulses are often negligible compared with internal interaction forces, so total system momentum before and after interaction is conserved to good approximation.",
        ],
      },
      {
        id: "closed-system-and-impulse",
        title: "System choice, external forces and impulse view",
        paragraphs: [
          "Conservation works only for a correctly chosen system. If you choose two colliding trolleys as the system, contact forces between them are internal and cancel in the total-momentum equation. Friction from the track is external and may or may not be negligible depending on context.",
          "From impulse language, total external impulse equals change in total momentum of the system. If external impulse is approximately zero during the collision interval, total momentum is conserved.",
          "Examiners often reward an explicit statement such as external horizontal forces negligible during impact, therefore horizontal momentum conserved.",
        ],
      },
      {
        id: "collisions-and-separation",
        title: "Applying conservation to collisions and explosions",
        paragraphs: [
          "For one-dimensional collisions, choose one positive direction and keep velocity signs. Then write sum of momenta before equals sum after. This single equation can solve many unknowns when one final state is known.",
          "In inelastic collisions, objects may stick together or separate with reduced relative speed. Momentum is conserved if external impulse is negligible, but kinetic energy is not generally conserved.",
          "In elastic collisions, both momentum and kinetic energy are conserved. Also, the relative speed of approach equals the relative speed of separation along the line of impact.",
          "At AS level, many questions use momentum only; if extra conditions are given, check whether kinetic-energy conservation or relative-speed information is required as an additional relation.",
          "For explosions, a stationary object that breaks into parts has zero initial momentum, so vector sum of fragment momenta after explosion is zero.",
        ],
      },
      {
        id: "two-dimensional-conservation",
        title: "Momentum conservation in two dimensions",
        paragraphs: [
          "In two-dimensional problems, resolve momentum into perpendicular axes, usually x and y. Apply conservation separately in each direction.",
          "A common workflow is: write x-momentum equation, write y-momentum equation, solve components of an unknown velocity, then find magnitude and direction.",
          "Signs and direction labels are crucial. A correct scalar equation with wrong direction interpretation can still lose final marks.",
        ],
      },
      {
        id: "energy-distinction",
        title: "Distinguishing momentum conservation from kinetic-energy changes",
        paragraphs: [
          "Momentum depends linearly on velocity, while kinetic energy depends on velocity squared. Therefore energy can decrease substantially in an inelastic collision even when momentum is strictly conserved.",
          "Physical mechanisms such as deformation, sound and heating transfer kinetic energy into internal energy. This is why sticking collisions usually have large kinetic-energy loss.",
          "Candidates should avoid the statement energy is lost. Total energy is conserved; kinetic energy is transformed into other forms.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Momentum questions are usually procedural, but marks are lost through system-definition mistakes and sign errors. Examiners expect explicit conservation conditions and careful vector treatment.",
      items: [
        "Writing momentum before equals momentum after without stating or checking that resultant external impulse is negligible.",
        "Using speeds instead of signed velocities in one-dimensional equations, especially when one object rebounds.",
        "Assuming kinetic energy is conserved in all collisions. Only elastic collisions conserve kinetic energy.",
        "For elastic collisions, forgetting the relative-speed condition: speed of approach equals speed of separation along the line of impact.",
        "Mixing up internal and external forces for the chosen system, leading to incorrect conservation claims.",
        "In two dimensions, writing one momentum equation only and ignoring the perpendicular component.",
        "Concluding energy is lost instead of stating kinetic energy is converted to other forms while total energy is conserved.",
      ],
    },
    workedExamples: [
      {
        id: "t3-3-ex1",
        title: "One-dimensional collision with rebound",
        problem: [
          "Cart A (0.50 kg) moves right at 4.0 m s⁻¹ and collides with cart B (0.80 kg) moving left at 1.5 m s⁻¹ on a near-frictionless track. After collision, B moves right at 0.50 m s⁻¹. Take right as positive and find A's velocity after collision.",
        ],
        solution: [
          "Initial total momentum pᵢ = (0.50)(+4.0) + (0.80)(-1.5) = 2.0 - 1.2 = 0.8 kg m s⁻¹.",
          "Final momentum pᶠ = (0.50)vₐ + (0.80)(+0.50) = 0.50vₐ + 0.40.",
          "Conservation gives 0.8 = 0.50vₐ + 0.40, so 0.50vₐ = 0.40 and vₐ = +0.80 m s⁻¹.",
          "A continues right but at much lower speed after impact.",
        ],
      },
      {
        id: "t3-3-ex2",
        title: "Perfectly inelastic collision and kinetic-energy change",
        problem: [
          "A 0.20 kg putty ball moving at 6.0 m s⁻¹ hits and sticks to a 0.30 kg putty ball initially at rest on a smooth table. Find (a) common speed after collision and (b) kinetic energy before and after, commenting on the difference.",
        ],
        solution: [
          "Momentum before = (0.20)(6.0) + (0.30)(0) = 1.2 kg m s⁻¹.",
          "Combined mass after sticking = 0.50 kg. Common speed v = 1.2/0.50 = 2.4 m s⁻¹.",
          "Initial kinetic energy = 0.5 x 0.20 x 6.0² = 3.6 J.",
          "Final kinetic energy = 0.5 x 0.50 x 2.4² = 1.44 J.",
          "Kinetic energy decreases by 2.16 J, converted to internal energy, sound and deformation. Momentum is conserved, kinetic energy is not.",
        ],
      },
      {
        id: "t3-3-ex3",
        title: "Two-dimensional explosion from rest",
        problem: [
          "A firework shell at rest explodes into two fragments. Fragment 1 has mass 0.40 kg and moves at 15 m s⁻¹ due east. Fragment 2 has mass 0.60 kg. Find the velocity of fragment 2.",
        ],
        solution: [
          "Initial momentum is zero because the shell is at rest.",
          "Take east as positive x-axis. Momentum of fragment 1 is p1 = (0.40)(+15) = +6.0 kg m s⁻¹ in x-direction.",
          "To keep total momentum zero, fragment 2 must have momentum p2 = -6.0 kg m s⁻¹ in x-direction and zero in y-direction.",
          "So v2 = p2/m2 = (-6.0)/0.60 = -10 m s⁻¹, meaning 10 m s⁻¹ due west.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t3-3-st1",
        question:
          "State the condition for conservation of linear momentum in a system and explain why internal forces do not violate this conservation.",
        modelAnswer: [
          "Total linear momentum is conserved when resultant external force (equivalently external impulse over the interval) on the system is zero.",
          "Internal forces occur in equal and opposite pairs between parts of the system, so their impulses cancel in the total-momentum sum.",
        ],
      },
      {
        id: "t3-3-st2",
        question:
          "A 1.2 kg trolley moving at +2.5 m s⁻¹ collides with a stationary 0.8 kg trolley and they move together. Find their common velocity.",
        modelAnswer: [
          "Initial momentum = (1.2)(2.5) + (0.8)(0) = 3.0 kg m s⁻¹.",
          "Total mass after sticking = 2.0 kg.",
          "Common velocity v = 3.0/2.0 = +1.5 m s⁻¹.",
        ],
      },
      {
        id: "t3-3-st3",
        question:
          "Why does momentum conservation alone not imply kinetic-energy conservation in a collision?",
        modelAnswer: [
          "Momentum is proportional to velocity (mv), while kinetic energy is proportional to velocity squared (0.5mv²).",
          "Different post-collision velocity sets can satisfy the same total momentum but give different total kinetic energies.",
          "Kinetic energy is conserved only in elastic collisions; otherwise some becomes other forms of energy.",
        ],
      },
      {
        id: "t3-3-st4",
        question:
          "In a two-dimensional collision, what is the correct method to apply momentum conservation?",
        modelAnswer: [
          "Choose perpendicular axes and resolve momentum vectors into components.",
          "Apply conservation independently in each axis: sum pₓ before equals sum pₓ after, and sum pᵧ before equals sum pᵧ after.",
          "Solve for unknown components, then reconstruct magnitude and direction if required.",
        ],
      },
      {
        id: "t3-3-st5",
        question:
          "State one additional condition that characterises an elastic head-on collision besides conservation of momentum.",
        modelAnswer: [
          "Total kinetic energy is conserved.",
          "Equivalently for a head-on collision, relative speed of approach equals relative speed of separation.",
        ],
      },
    ],
  },
};
