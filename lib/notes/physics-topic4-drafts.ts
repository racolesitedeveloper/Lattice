import type { NoteDraft } from "./types";

/** Full teaching notes for 9702 Topic 4 — subtopics 4.1–4.3 (see lib/notes/AUTHORING.md). */
export const PHYSICS_TOPIC4_DRAFTS: Record<string, NoteDraft> = {
  "t4-1": {
    noteId: "t4-1",
    syllabusNotes: [
      {
        id: "moments-definition",
        title: "Moment of a force and line of action",
        paragraphs: [
          "A force can make an object translate, rotate, or do both. The turning effect of a force about a point is called its moment. In A Level mechanics this point is often called the pivot, hinge, or axis.",
          "The size of a moment depends on two things: the force magnitude F and the perpendicular distance d from the pivot to the line of action of that force. The relation is M = Fd.",
          "The phrase perpendicular distance is essential. It is not usually the sloping distance from pivot to where the force is applied. You must draw or imagine the line of action first, then measure the shortest distance from the pivot to that line.",
          "The SI unit of moment is N m. This has the same base-unit form as the joule, but a moment is not energy. Energy is a scalar transfer quantity, whereas a moment describes a turning tendency about a chosen point.",
        ],
      },
      {
        id: "sense-of-rotation",
        title: "Clockwise and anticlockwise moments",
        paragraphs: [
          "A moment has a sense of rotation. In two-dimensional problems you usually classify each moment as clockwise or anticlockwise about a stated pivot.",
          "For equilibrium calculations, choose one sense as positive and keep that convention. Many candidates take anticlockwise as positive, so clockwise moments enter with a minus sign. You may choose the opposite convention if used consistently.",
          "If a force passes through the pivot, its perpendicular distance is zero and so its moment about that pivot is zero, regardless of the force magnitude.",
        ],
      },
      {
        id: "couples",
        title: "Couples and pure rotation",
        paragraphs: [
          "A couple is a pair of equal and opposite parallel forces acting along different lines of action. The resultant force is zero, so there is no net translation, but there is a non-zero resultant moment that tends to rotate the body.",
          "The moment of a couple is one of the forces multiplied by the perpendicular separation of the two lines of action. This moment is the same about any point because a couple has no net force.",
          "Typical examples are turning a steering wheel or using both hands on opposite sides of a screwdriver handle. In exam work, identify a couple by checking both equal-opposite force condition and line-of-action separation.",
        ],
      },
      {
        id: "principle-of-moments",
        title: "Principle of moments in equilibrium",
        paragraphs: [
          "For a body in rotational equilibrium, the total clockwise moment about any point equals the total anticlockwise moment about that same point.",
          "This is often written as sum of moments about a point equals zero, with sign convention applied. The principle of moments is a direct consequence of zero resultant torque for equilibrium.",
          "Choosing the pivot cleverly can reduce unknowns. If an unknown force acts through your chosen pivot, its moment is zero and the equation becomes simpler.",
        ],
      },
      {
        id: "application-to-beams",
        title: "Applying moments to beams and rods",
        paragraphs: [
          "In beam problems, forces commonly include weights of loads, the beam's own weight acting at its centre of gravity if uniform, and reaction forces at supports.",
          "Start with a clear force diagram. Mark each force direction, its point of action, and all relevant distances from a chosen reference point. Without these labels, sign mistakes are very likely.",
          "When the beam has negligible mass, do not invent a weight force for it. When the beam mass is given or implied uniform, include its weight through the midpoint.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Examiners award moment marks for correct geometry and sign logic. Most errors come from using the wrong distance or forgetting which forces actually produce turning about the chosen point.",
      items: [
        "Using the direct distance from pivot to force application point instead of the perpendicular distance to the line of action.",
        "Forgetting that a force through the pivot contributes zero moment, then incorrectly including it in the moment equation.",
        "Writing all moments as positive without indicating clockwise or anticlockwise sense, making equations physically ambiguous.",
        "Confusing N m for moment with J for energy and then interpreting a turning-effect result as work done.",
        "Missing the beam's own weight when mass is non-negligible, or placing that weight anywhere other than the centre of gravity.",
        "Using inconsistent distance units in the same equation, for example centimetres for one moment arm and metres for another.",
      ],
    },
    workedExamples: [
      {
        id: "t4-1-ex1",
        title: "Single force moment about a hinge",
        problem: [
          "A door handle is 0.80 m from the hinge. A horizontal force of 25 N is applied perpendicular to the door at the handle. Calculate the moment about the hinge.",
        ],
        solution: [
          "Moment magnitude is M = Fd when d is perpendicular distance from hinge to line of action.",
          "Here the force is perpendicular to the door, so d = 0.80 m directly. Therefore M = 25 x 0.80 = 20 N m.",
          "State the sense from the diagram if required (clockwise or anticlockwise). The numerical moment is 20 N m.",
        ],
      },
      {
        id: "t4-1-ex2",
        title: "Balancing a uniform beam with a load",
        problem: [
          "A uniform horizontal beam of length 3.0 m and weight 120 N is pivoted at its left end. A downward load of 180 N is placed 2.4 m from the pivot. Find the upward force that must be applied at the right end to keep the beam in rotational equilibrium.",
        ],
        solution: [
          "Take moments about the pivot at the left end. The reaction at the pivot has zero moment about that point.",
          "Clockwise moments from downward forces: load gives 180 x 2.4 = 432 N m. Beam weight acts at centre, 1.5 m from pivot, giving 120 x 1.5 = 180 N m. Total clockwise = 612 N m.",
          "Let upward force at right end be F at 3.0 m. Its moment is anticlockwise: 3.0F.",
          "Equilibrium gives 3.0F = 612, so F = 204 N upward.",
        ],
      },
      {
        id: "t4-1-ex3",
        title: "Moment of a couple",
        problem: [
          "Two equal and opposite parallel forces of 40 N act on a wheel, with perpendicular separation 0.30 m. Determine the moment of the couple.",
        ],
        solution: [
          "For a couple, moment magnitude equals one force multiplied by perpendicular separation between the lines of action.",
          "So M = 40 x 0.30 = 12 N m.",
          "The couple has zero resultant force but a non-zero turning effect of 12 N m in the sense set by the force directions.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t4-1-st1",
        question:
          "Define the moment of a force about a point and explain why perpendicular distance is used rather than any other distance.",
        modelAnswer: [
          "The moment of a force about a point is the turning effect given by force multiplied by the perpendicular distance from the point to the force's line of action.",
          "Perpendicular distance is used because only the component of position that is perpendicular to the line of action contributes to turning; any component along the line of action does not create rotation about that point.",
        ],
      },
      {
        id: "t4-1-st2",
        question:
          "A 15 N force acts on a spanner at a perpendicular distance of 0.20 m from the nut. Find the moment about the nut.",
        modelAnswer: ["M = Fd = 15 x 0.20 = 3.0 N m."],
      },
      {
        id: "t4-1-st3",
        question:
          "State two conditions that identify a pair of forces as a couple.",
        modelAnswer: [
          "The forces must be equal in magnitude and opposite in direction.",
          "They must be parallel and act along different lines of action, so there is a finite perpendicular separation.",
        ],
      },
      {
        id: "t4-1-st4",
        question:
          "Why is taking moments about a point where unknown forces act often a useful strategy in equilibrium questions?",
        modelAnswer: [
          "Any force whose line of action passes through the chosen point has zero moment there.",
          "Choosing such a point removes those unknowns from the moment equation, leaving fewer unknown quantities to solve for.",
        ],
      },
      {
        id: "t4-1-st5",
        question:
          "A uniform metre rule of weight 1.2 N is pivoted at the 20 cm mark. A downward force 0.80 N acts at the 90 cm mark. Find the downward force needed at the 0 cm mark for rotational equilibrium.",
        modelAnswer: [
          "Take moments about 20 cm mark. Weight of rule acts at 50 cm, so clockwise moment from rule is 1.2 x 0.30 = 0.36 N m.",
          "Downward force at 90 cm gives clockwise moment 0.80 x 0.70 = 0.56 N m.",
          "Let required downward force at 0 cm be F. Its moment is anticlockwise with arm 0.20 m: 0.20F.",
          "Equilibrium: 0.20F = 0.36 + 0.56 = 0.92, so F = 4.6 N downward.",
        ],
      },
    ],
  },
  "t4-2": {
    noteId: "t4-2",
    syllabusNotes: [
      {
        id: "equilibrium-conditions",
        title: "Conditions for equilibrium",
        paragraphs: [
          "A body is in equilibrium when it has no resultant force and no resultant moment. In two-dimensional statics this means both translational and rotational effects are balanced.",
          "Mathematically, you apply sum Fx = 0 and sum Fy = 0 for force balance in perpendicular directions, and sum of moments about any point = 0 for rotational balance.",
          "Satisfying only one condition is not enough. A body can have zero resultant force but still rotate if the forces form a couple, and it can have zero resultant moment about one point while still accelerate if resultant force is not zero.",
        ],
      },
      {
        id: "free-body-diagrams",
        title: "Free-body diagrams and force identification",
        paragraphs: [
          "A free-body diagram isolates the object and shows all external forces acting on it. Internal forces within the object are not shown separately.",
          "For common support situations, include reaction forces correctly: a smooth surface gives a normal reaction only, a rough surface can provide both normal reaction and friction, and a light inextensible string provides tension along its length.",
          "Weight always acts vertically downward through the centre of gravity. If the object is uniform and symmetric, centre of gravity is usually at its geometric centre unless stated otherwise.",
        ],
      },
      {
        id: "resolving-forces",
        title: "Resolving and balancing non-collinear forces",
        paragraphs: [
          "When forces are not all along one line, resolve each into components along chosen axes, then apply force-balance equations in each axis.",
          "For three non-parallel forces in equilibrium acting at a point, vector addition gives a closed triangle of forces. This can be solved graphically or analytically by components.",
          "Choose axes aligned with one or more known forces when possible to reduce trigonometric complexity and minimize sign errors.",
        ],
      },
      {
        id: "equilibrium-on-incline",
        title: "Equilibrium on rough and smooth slopes",
        paragraphs: [
          "For an object on an inclined plane, resolve weight into components parallel and perpendicular to the plane. The parallel component is mg sin θ and the perpendicular component is mg cos θ when θ is the plane angle to the horizontal.",
          "On a smooth plane, friction is absent, so equilibrium along the plane requires other forces to balance mg sin θ.",
          "On a rough plane, static friction adjusts up to a limiting value to maintain equilibrium. Direction of friction opposes the direction in which motion would start if friction were removed.",
        ],
      },
      {
        id: "using-moments-with-force-balance",
        title: "Combining moment and force equations in beam equilibrium",
        paragraphs: [
          "Many equilibrium questions require all three equations: horizontal force balance, vertical force balance, and moment balance.",
          "A standard method is: draw free-body diagram, write one moment equation about a strategically chosen point, solve one unknown reaction, then substitute into force-balance equations for remaining unknowns.",
          "Checking reasonableness is important. For example, support reactions on a simply supported beam carrying only downward loads should usually be upward and should sum to total downward load.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Equilibrium marks are usually method marks. Candidates lose them through incomplete force diagrams, omitted reaction components, or mixing moment and force conditions without a consistent sign convention.",
      items: [
        "Applying only sum Fy = 0 and forgetting sum Fx = 0 when horizontal forces are present.",
        "Assuming reaction at a contact always equals weight, even when additional vertical forces or multiple supports exist.",
        "Resolving mg into wrong components on an incline by swapping sine and cosine relative to the chosen angle.",
        "Using friction in the wrong direction by guessing instead of considering likely direction of impending motion.",
        "Writing a moment equation about one point and then mixing distances measured from a different point in the same expression.",
        "Leaving out one external force from the free-body diagram, especially string tension or beam self-weight.",
      ],
    },
    workedExamples: [
      {
        id: "t4-2-ex1",
        title: "Particle held by two tensions",
        problem: [
          "A particle is in equilibrium under three forces: its weight 50 N downward, a horizontal tension T1 to the left, and a tension T2 in a string making 30 degrees above the horizontal to the right. Find T1 and T2.",
        ],
        solution: [
          "Resolve horizontally and vertically. Take right and up as positive.",
          "Vertical equilibrium: T2 sin 30 degrees - 50 = 0, so T2 = 50 / 0.5 = 100 N.",
          "Horizontal equilibrium: T2 cos 30 degrees - T1 = 0, so T1 = 100 cos 30 degrees = 86.6 N.",
          "Hence T2 = 100 N and T1 = 86.6 N (3 s.f.).",
        ],
      },
      {
        id: "t4-2-ex2",
        title: "Block at rest on a smooth incline",
        problem: [
          "A 4.0 kg block rests on a smooth plane inclined at 25 degrees to the horizontal. A light string parallel to the plane holds it in equilibrium. Take g = 9.81 m s⁻². Find the tension in the string and the normal reaction.",
        ],
        solution: [
          "Weight is mg = 4.0 x 9.81 = 39.24 N.",
          "Resolve along plane: tension T balances downslope component mg sin 25 degrees. So T = 39.24 sin 25 degrees = 16.6 N.",
          "Resolve perpendicular to plane: reaction R balances mg cos 25 degrees. So R = 39.24 cos 25 degrees = 35.6 N.",
          "Both values are positive and physically sensible for a smooth-plane equilibrium.",
        ],
      },
      {
        id: "t4-2-ex3",
        title: "Support reactions on a simply supported beam",
        problem: [
          "A light horizontal beam of length 5.0 m is supported at both ends A and B. A downward load of 300 N acts 2.0 m from A, and a downward load of 200 N acts 4.0 m from A. Find the reactions at A and B.",
        ],
        solution: [
          "Let vertical reactions be RA and RB upward.",
          "Vertical force balance: RA + RB = 300 + 200 = 500 N.",
          "Take moments about A: clockwise moments from loads = 300 x 2.0 + 200 x 4.0 = 600 + 800 = 1400 N m.",
          "Anticlockwise moment from RB at 5.0 m: 5.0RB = 1400, so RB = 280 N.",
          "Then RA = 500 - 280 = 220 N.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t4-2-st1",
        question:
          "State the full set of equilibrium conditions for a rigid body in a plane.",
        modelAnswer: [
          "Resultant force must be zero in two perpendicular directions, so sum Fx = 0 and sum Fy = 0.",
          "Resultant moment about any point must also be zero, so clockwise and anticlockwise moments balance.",
        ],
      },
      {
        id: "t4-2-st2",
        question:
          "Why is a free-body diagram often the most important first step in an equilibrium problem?",
        modelAnswer: [
          "It ensures every external force is identified with correct direction and point of action before equations are written.",
          "Without this, omitted or misdirected forces lead to mathematically neat but physically incorrect equations.",
        ],
      },
      {
        id: "t4-2-st3",
        question:
          "A 10 N force acts east and an unknown force F acts west on a particle in equilibrium along a horizontal line. Find F and explain the sign meaning if east is positive.",
        modelAnswer: [
          "Equilibrium along x gives sum Fx = 0, so +10 + Fx = 0 and Fx = -10 N in the east-positive convention.",
          "The negative sign means the unknown force is 10 N toward west. Magnitude is 10 N.",
        ],
      },
      {
        id: "t4-2-st4",
        question:
          "A block on a 30 degree smooth slope has mass 2.5 kg and is held by a force parallel to the slope. Calculate that force using g = 9.81 m s⁻².",
        modelAnswer: [
          "Along slope for equilibrium: holding force equals mg sin 30 degrees.",
          "mg = 2.5 x 9.81 = 24.525 N, so force = 24.525 x 0.5 = 12.3 N (3 s.f.).",
        ],
      },
      {
        id: "t4-2-st5",
        question:
          "In beam equilibrium, what is the advantage of taking moments about one support when finding support reactions?",
        modelAnswer: [
          "The reaction at that chosen support has zero moment there, so it is eliminated from the moment equation.",
          "This gives a direct equation for the other reaction, reducing algebra and lowering risk of sign errors.",
        ],
      },
    ],
  },
  "t4-3": {
    noteId: "t4-3",
    syllabusNotes: [
      {
        id: "density-concept",
        title: "Density as mass per unit volume",
        paragraphs: [
          "Density is defined as mass per unit volume: rho = m/V. It describes how much mass is packed into a given volume.",
          "SI unit of density is kg m⁻³. In practical work, values may also appear in g cm⁻³, but conversion to SI is often required in exam calculations.",
          "For a uniform substance, density is constant at fixed conditions. If an object is composite or contains cavities, average density from total mass and total external volume may differ from density of the material itself.",
        ],
      },
      {
        id: "measuring-density",
        title: "Determining density of solids and liquids",
        paragraphs: [
          "To determine density experimentally, measure mass with a balance and volume using suitable geometry or displacement methods.",
          "For regular solids, calculate volume from dimensions. For irregular solids, use water displacement in a measuring cylinder or overflow method.",
          "For liquids, density can be found by measuring the mass of a known volume. Subtract container mass if necessary so only liquid mass is used.",
          "Unit consistency is crucial. For example, if mass is in grams and volume in cm³, either quote density in g cm⁻³ or convert both to SI before final answer.",
        ],
      },
      {
        id: "pressure-definition",
        title: "Pressure from normal force on area",
        paragraphs: [
          "Pressure is normal force per unit area: p = F/A. Normal means the component perpendicular to the surface.",
          "The SI unit is pascal (Pa), where 1 Pa = 1 N m⁻².",
          "For a fixed force, smaller contact area produces greater pressure. This explains why sharp tools cut more effectively and why wide tyres reduce pressure on soft ground.",
        ],
      },
      {
        id: "fluid-pressure",
        title: "Pressure in fluids and depth relation",
        paragraphs: [
          "In a fluid at rest, pressure at a point acts equally in all directions. At a given horizontal level in the same continuous fluid, pressure is the same.",
          "Hydrostatic pressure difference with depth is given by delta p = rho g delta h. This follows from p = F/A applied to a vertical fluid column of cross-sectional area A and height delta h: the extra force at the lower face is the weight of the column, rho A delta h g, so delta p = (rho A delta h g)/A = rho g delta h.",
          "Taking surface pressure as reference, pressure at depth h below free surface is p = p0 + rho g h, where p0 may be atmospheric pressure.",
          "Many questions use gauge pressure, which is pressure above atmospheric. Then p gauge = rho g h. Read the wording carefully to decide whether absolute or gauge pressure is required.",
        ],
      },
      {
        id: "upthrust-origin-and-archimedes",
        title: "Upthrust from hydrostatic pressure differences",
        paragraphs: [
          "Upthrust is the resultant upward force on an immersed body caused by pressure increasing with depth. The pressure on lower surfaces is greater than pressure on upper surfaces, so vertical components do not cancel.",
          "For a fully immersed object in a fluid of density rho, upthrust equals the weight of displaced fluid: F = rho g V, where V is displaced volume. This is Archimedes' principle in calculation form used in this syllabus.",
          "Floating and sinking follow from force balance. If upthrust can match weight before full immersion, the object floats. If maximum upthrust when fully immersed is less than weight, the object sinks.",
        ],
      },
      {
        id: "applications-and-interpretation",
        title: "Applications to manometers, dams and hydraulic systems",
        paragraphs: [
          "In manometer-style comparisons of fluid columns, pressure difference between two levels in the same fluid depends on vertical height difference, not path length.",
          "For retaining walls or dams, pressure increases with depth, so lower regions experience greater pressure and hence greater force.",
          "Hydraulic systems use transmission of pressure in enclosed fluids: a pressure applied at one piston is transmitted through the fluid, allowing a larger output force on a larger-area piston. Force gain comes with a corresponding displacement trade-off.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Density and pressure questions are rich in unit traps and interpretation traps. Examiners reward precise definition of pressure type and careful use of area, depth, and unit conversion.",
      items: [
        "Using p = F/A with total force not normal to the surface, instead of using the perpendicular component of force.",
        "Confusing pressure with force and reporting an answer in N when the required unit is Pa, or vice versa.",
        "Using depth along a sloping wall in rho g h instead of vertical depth below the free surface.",
        "Mixing g cm⁻³ and kg m⁻³ without conversion, leading to 10³ errors in density and hydrostatic pressure.",
        "Assuming pressure is the same at different depths in a liquid simply because the container width is constant.",
        "Forgetting to include atmospheric pressure when absolute pressure is requested.",
      ],
    },
    workedExamples: [
      {
        id: "t4-3-ex1",
        title: "Density of an irregular solid",
        problem: [
          "An irregular metal piece has mass 162 g. When fully submerged in water, it displaces 20.0 cm³ of water. Calculate its density in (a) g cm⁻³ and (b) kg m⁻³.",
        ],
        solution: [
          "Density rho = m/V. In given units, rho = 162 / 20.0 = 8.10 g cm⁻³.",
          "Convert to SI: 1 g cm⁻³ = 1000 kg m⁻³. Therefore 8.10 g cm⁻³ = 8.10 x 10³ kg m⁻³.",
          "So density is 8.10 g cm⁻³ or 8.10 x 10³ kg m⁻³.",
        ],
      },
      {
        id: "t4-3-ex2",
        title: "Pressure under a shoe",
        problem: [
          "A student of weight 540 N stands on one shoe sole of area 160 cm². Estimate the pressure on the floor in pascals.",
        ],
        solution: [
          "Use p = F/A with force normal to floor. F = 540 N.",
          "Convert area: 160 cm² = 160 x 10⁻⁴ m² = 0.0160 m².",
          "Therefore p = 540 / 0.0160 = 3.38 x 10⁴ Pa (3 s.f.).",
          "If the weight were shared between two feet equally, force on one sole would be halved, so pressure would be halved.",
        ],
      },
      {
        id: "t4-3-ex3",
        title: "Hydrostatic pressure and upthrust on a submerged object",
        problem: [
          "Water has density 1000 kg m⁻³. (a) Calculate the gauge pressure difference between depths 1.2 m and 4.7 m. (b) A fully submerged object displaces 3.5 x 10⁻³ m³ of this water. Find the upthrust. Take g = 9.81 m s⁻².",
        ],
        solution: [
          "Use hydrostatic relation delta p = rho g delta h with delta h = 4.7 - 1.2 = 3.5 m.",
          "So delta p = 1000 x 9.81 x 3.5 = 3.4335 x 10⁴ Pa, giving 3.43 x 10⁴ Pa (3 s.f.).",
          "Upthrust equals weight of displaced water: F = rho g V = 1000 x 9.81 x 3.5 x 10⁻³ = 34.335 N.",
          "Hence upthrust is 34.3 N (3 s.f.), directed upward because pressure is greater at larger depth.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t4-3-st1",
        question:
          "State the definitions of density and pressure, including formula and SI unit for each.",
        modelAnswer: [
          "Density is mass per unit volume, rho = m/V, SI unit kg m⁻³.",
          "Pressure is normal force per unit area, p = F/A, SI unit pascal (Pa) where 1 Pa = 1 N m⁻².",
        ],
      },
      {
        id: "t4-3-st2",
        question:
          "A liquid has mass 0.750 kg and volume 6.0 x 10⁻⁴ m³. Calculate its density in kg m⁻³.",
        modelAnswer: [
          "rho = m/V = 0.750 / (6.0 x 10⁻⁴) = 1.25 x 10³ kg m⁻³.",
        ],
      },
      {
        id: "t4-3-st3",
        question:
          "Derive the relation delta p = rho g delta h for a stationary fluid using pressure definition and a fluid column model.",
        modelAnswer: [
          "Take a vertical column of fluid with cross-sectional area A and height delta h between two horizontal levels.",
          "The pressure difference gives net downward force delta p A, which balances the weight rho A delta h g of the column in static equilibrium.",
          "So delta p A = rho A delta h g, hence delta p = rho g delta h.",
        ],
      },
      {
        id: "t4-3-st4",
        question:
          "Convert 2.7 g cm⁻³ to kg m⁻³ and state the conversion factor used.",
        modelAnswer: [
          "Use 1 g cm⁻³ = 1000 kg m⁻³.",
          "So 2.7 g cm⁻³ = 2.7 x 10³ kg m⁻³.",
        ],
      },
      {
        id: "t4-3-st5",
        question:
          "An object fully submerged in oil displaces 2.4 x 10⁻³ m³ of oil. The oil density is 850 kg m⁻³. Calculate the upthrust (g = 9.81 m s⁻²) and state the physical origin of this force.",
        modelAnswer: [
          "Upthrust F = rho g V = 850 x 9.81 x 2.4 x 10⁻³ = 20.0 N (3 s.f.).",
          "It arises because hydrostatic pressure is greater on lower surfaces than on upper surfaces, giving a resultant upward force.",
        ],
      },
    ],
  },
};
