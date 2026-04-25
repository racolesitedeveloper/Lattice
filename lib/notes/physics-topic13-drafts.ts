import type { NoteDraft } from "./types";

/** Full teaching notes for 9702 Topic 13 — subtopics 13.1–13.4 (see lib/notes/AUTHORING.md). */
export const PHYSICS_TOPIC13_DRAFTS: Record<string, NoteDraft> = {
  "t13-1": {
    noteId: "t13-1",
    syllabusNotes: [
      {
        id: "field-of-force-idea",
        title: "Gravitational field as a field of force",
        paragraphs: [
          "A gravitational field is a region of space where a mass experiences a force. The field exists because other masses are present, and it allows gravitational interaction to be described at each point in space.",
          "Like electric and magnetic fields studied elsewhere in the course, a gravitational field is a field of force. The field model is useful because it separates source masses (which create the field) from test masses (which detect the field).",
          "In most AS and A Level contexts, the field is treated as attractive: a small test mass is pulled toward the source mass.",
        ],
      },
      {
        id: "field-strength-definition",
        title: "Definition of gravitational field strength",
        paragraphs: [
          "Gravitational field strength g at a point is defined as force per unit mass on a small test mass placed at that point: g = F/m.",
          "From this definition, unit analysis gives N kg⁻¹. Since 1 N = 1 kg m s⁻², N kg⁻¹ is equivalent to m s⁻².",
          "Near Earth, g is about 9.81 N kg⁻¹ downward. The same numerical value can be written as 9.81 m s⁻² because of unit equivalence, but in field context N kg⁻¹ highlights that g is force per unit mass.",
        ],
      },
      {
        id: "vector-nature-and-sign",
        title: "Direction and vector nature of g",
        paragraphs: [
          "Gravitational field strength is a vector quantity. Its direction is the direction of the gravitational force on a small test mass.",
          "For a single isolated spherical mass, the field direction is radially inward at all points outside the mass.",
          "In one-dimensional vertical problems near Earth, a sign convention is often used (for example upward positive so g is negative). In full vector form, direction is handled directly rather than by sign alone.",
        ],
      },
      {
        id: "field-lines-representation",
        title: "Representing gravitational fields with field lines",
        paragraphs: [
          "A gravitational field can be shown using field lines. Arrows point in the direction of the force on a small test mass.",
          "Closer spacing of field lines indicates stronger field. Wider spacing indicates weaker field.",
          "Around a spherical mass, lines are radial and directed inward. Near Earth's surface over small height ranges, lines are drawn approximately parallel and equally spaced to represent an approximately uniform field.",
          "Field lines do not cross. If they crossed, one point would have two force directions for one test mass, which is impossible.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Markers expect precise field language and clear distinction between field strength, force and acceleration. Most errors are definition or diagram errors rather than difficult algebra.",
      items: [
        "Defining gravitational field as force divided by distance instead of force per unit mass.",
        "Treating g as scalar and omitting direction when a vector statement is required.",
        "Writing field-line arrows away from a mass; gravitational field lines point toward the mass.",
        "Mixing up unit symbols, for example using N m⁻¹ instead of N kg⁻¹ for g.",
        "Saying field lines can cross without consequence; crossing would imply two field directions at one point.",
      ],
    },
    workedExamples: [
      {
        id: "t13-1-ex1",
        title: "Field strength from force on a known mass",
        problem: [
          "A 0.80 kg mass experiences a gravitational force of 7.84 N downward at a point in space. Calculate the gravitational field strength at that point.",
        ],
        solution: [
          "Use definition g = F/m.",
          "g = 7.84 / 0.80 = 9.80 N kg⁻¹.",
          "Direction is downward because force on the test mass is downward.",
        ],
      },
      {
        id: "t13-1-ex2",
        title: "Force from given field strength",
        problem: [
          "At a location, gravitational field strength is 3.2 N kg⁻¹ toward a planet. Find the gravitational force on a 2.5 kg probe at that location.",
        ],
        solution: [
          "Rearrange definition F = mg.",
          "F = 2.5 x 3.2 = 8.0 N.",
          "Force direction is toward the planet, same as field direction.",
        ],
      },
      {
        id: "t13-1-ex3",
        title: "Interpreting field-line spacing",
        problem: [
          "Diagram A shows field lines around a planet close together near the surface and further apart at larger distance. Explain what this indicates about field strength with distance.",
        ],
        solution: [
          "Field-line density represents field strength qualitatively.",
          "Closer lines near the planet indicate stronger gravitational field near the planet.",
          "Wider spacing further away indicates weaker field at larger distance.",
          "So gravitational field strength decreases as distance from the planet increases.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t13-1-st1",
        question:
          "Define gravitational field strength and give its SI unit.",
        modelAnswer: [
          "Gravitational field strength at a point is force per unit mass on a small test mass placed at that point: g = F/m.",
          "Its SI unit is N kg⁻¹ (equivalently m s⁻²).",
        ],
      },
      {
        id: "t13-1-st2",
        question:
          "Why is gravitational field described as a field of force?",
        modelAnswer: [
          "Because each point in space is associated with a force effect on a test mass.",
          "The field model describes how a source mass causes forces without requiring direct contact.",
        ],
      },
      {
        id: "t13-1-st3",
        question:
          "A 1.2 kg mass has weight 11.8 N near a moon. Calculate g near that moon.",
        modelAnswer: [
          "g = F/m = 11.8 / 1.2 = 9.83 N kg⁻¹ (3 s.f.).",
        ],
      },
      {
        id: "t13-1-st4",
        question:
          "State two rules for drawing gravitational field lines correctly.",
        modelAnswer: [
          "Arrows show direction of force on a small test mass, so they point toward the attracting mass.",
          "Field lines do not cross.",
          "Denser line spacing indicates stronger field.",
        ],
      },
      {
        id: "t13-1-st5",
        question:
          "Explain why gravitational field near Earth's surface is often drawn with parallel lines.",
        modelAnswer: [
          "Over small height changes compared with Earth's radius, both magnitude and direction of g change very little.",
          "So the field is approximated as uniform, represented by parallel equally spaced lines downward.",
        ],
      },
    ],
  },

  "t13-2": {
    noteId: "t13-2",
    syllabusNotes: [
      {
        id: "point-mass-and-uniform-sphere-model",
        title: "Point masses and uniform spheres",
        paragraphs: [
          "Newton's law of gravitation applies directly to point masses. For a point outside a uniform sphere, the sphere behaves gravitationally as though all its mass were concentrated at its centre.",
          "This model allows planets and stars to be treated as point masses when finding external gravitational force and orbital motion.",
          "The distance r in the formula is the centre-to-centre separation between interacting masses.",
        ],
      },
      {
        id: "newton-law-of-gravitation",
        title: "Newton's law of gravitation",
        paragraphs: [
          "The gravitational force between two point masses m1 and m2 separated by distance r is F = Gm1m2/r².",
          "G is the gravitational constant, approximately 6.67 x 10⁻¹¹ N m² kg⁻². The force is always attractive and acts along the line joining the centres.",
          "The inverse-square dependence means doubling separation reduces force to one quarter.",
        ],
      },
      {
        id: "orbits-and-centripetal-link",
        title: "Circular orbits from gravitational attraction",
        paragraphs: [
          "For a satellite in circular orbit, gravitational force provides the required centripetal force. So G M m / r² = m v² / r, where M is central mass and m is satellite mass.",
          "Mass m of the satellite cancels, showing orbital speed at a given radius depends on central mass and orbital radius, not on satellite mass.",
          "Combining with v = ωr and T = 2 pi / ω gives useful orbit relations such as T² proportional to r³ for orbits about one central body.",
        ],
      },
      {
        id: "geostationary-orbit-conditions",
        title: "Geostationary orbit requirements",
        paragraphs: [
          "A geostationary satellite appears fixed above one point on Earth's surface. For this to happen, specific conditions are required.",
        ],
        bullets: [
          "Orbital period is 24 hours (strictly one sidereal day).",
          "Orbit is from west to east, same sense as Earth's rotation.",
          "Orbit lies in the plane of the Equator.",
          "Orbit is circular so angular speed is constant.",
        ],
      },
      {
        id: "geostationary-use-and-limitations",
        title: "Practical use and limits of geostationary satellites",
        paragraphs: [
          "Geostationary satellites are useful for communications and weather monitoring over a fixed region because ground antennas can remain pointed at one sky position.",
          "They are not suitable for high-latitude continuous coverage because the satellite appears low on the horizon from those locations.",
          "Orbit radius is large, so transmission time delay is noticeable in some communication systems.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Force-and-orbit questions are often straightforward if geometry and conditions are stated clearly. Most lost marks come from wrong radius definition or incomplete geostationary conditions.",
      items: [
        "Using surface distance or altitude directly for r when centre-to-centre distance is required.",
        "Forgetting inverse-square dependence and treating force as proportional to 1/r.",
        "Including both bodies' radii incorrectly in problems already giving centre separation.",
        "Saying geostationary means period 24 h only; Equator and west-to-east conditions are also required.",
        "Equating gravitational force and centripetal acceleration directly instead of equating force to m v²/r.",
      ],
    },
    workedExamples: [
      {
        id: "t13-2-ex1",
        title: "Gravitational force between two point masses",
        problem: [
          "Two masses 8.0 kg and 12.0 kg are 0.40 m apart in space. Calculate gravitational force between them using G = 6.67 x 10⁻¹¹ N m² kg⁻².",
        ],
        solution: [
          "Use F = Gm1m2/r².",
          "F = (6.67 x 10⁻¹¹ x 8.0 x 12.0)/(0.40)².",
          "F = (6.67 x 10⁻¹¹ x 96)/0.16 = 4.00 x 10⁻⁸ N.",
          "The force is attractive, along the line joining the masses.",
        ],
      },
      {
        id: "t13-2-ex2",
        title: "Orbital speed from gravitational centripetal force",
        problem: [
          "A satellite orbits Earth in a circular path of radius 7.0 x 10⁶ m from Earth's centre. Take Earth's mass as 6.0 x 10²⁴ kg and G = 6.67 x 10⁻¹¹ N m² kg⁻². Find orbital speed.",
        ],
        solution: [
          "For circular orbit, gravitational force provides centripetal force: GMm/r² = mv²/r.",
          "Cancel m and rearrange: v = sqrt(GM/r).",
          "v = sqrt((6.67 x 10⁻¹¹ x 6.0 x 10²⁴)/(7.0 x 10⁶)) = 7.56 x 10³ m s⁻¹.",
          "So orbital speed is about 7.6 km s⁻¹.",
        ],
      },
      {
        id: "t13-2-ex3",
        title: "Checking whether an orbit is geostationary",
        problem: [
          "A satellite has circular orbit period 24 h and moves west to east. Its orbit plane is inclined at 30 degrees to the Equator. Is it geostationary? Explain.",
        ],
        solution: [
          "A geostationary satellite must satisfy all required conditions.",
          "Although period is 24 h and direction is west to east, the orbit plane is not the Equatorial plane.",
          "Because of inclination, the satellite moves north and south relative to Earth's surface and will not remain above one fixed point.",
          "So this orbit is not geostationary.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t13-2-st1",
        question:
          "State Newton's law of gravitation, including symbol meanings.",
        modelAnswer: [
          "For two point masses m1 and m2 separated by distance r, gravitational force magnitude is F = Gm1m2/r².",
          "G is gravitational constant and force acts attractively along the line joining the masses.",
        ],
      },
      {
        id: "t13-2-st2",
        question:
          "Why can Earth be treated as a point mass at its centre for satellite force calculations outside Earth?",
        modelAnswer: [
          "For points outside a uniform sphere, gravitational effect is equivalent to all mass concentrated at the sphere centre.",
          "So centre-to-satellite distance can be used in Newton's law.",
        ],
      },
      {
        id: "t13-2-st3",
        question:
          "If distance between two point masses is tripled, by what factor does gravitational force change?",
        modelAnswer: [
          "From inverse-square law, F proportional to 1/r².",
          "Tripling r makes force 1/3² = 1/9 of its original value.",
        ],
      },
      {
        id: "t13-2-st4",
        question:
          "Write the force balance equation for a satellite of mass m in circular orbit radius r around planet mass M.",
        modelAnswer: [
          "Gravitational force provides centripetal force: G M m / r² = m v² / r.",
        ],
      },
      {
        id: "t13-2-st5",
        question:
          "List the conditions needed for a satellite to be geostationary.",
        modelAnswer: [
          "Period 24 h.",
          "Circular orbit.",
          "Orbit in Equatorial plane.",
          "Orbital motion west to east, same sense as Earth rotation.",
        ],
      },
    ],
  },

  "t13-3": {
    noteId: "t13-3",
    syllabusNotes: [
      {
        id: "derivation-of-g-point-mass",
        title: "Deriving g = GM/r² from definitions",
        paragraphs: [
          "Start with Newton's law for force on test mass m due to source mass M: F = G M m / r².",
          "By definition, gravitational field strength is g = F/m. Substituting gives g = (G M m / r²)/m = GM/r².",
          "So field strength due to a point mass (or outside a uniform sphere) decreases with inverse square of distance.",
        ],
      },
      {
        id: "using-g-equation",
        title: "Applying g = GM/r² correctly",
        paragraphs: [
          "In g = GM/r², r is distance from source centre to the point where field is evaluated. For points above Earth's surface, r = RE + h.",
          "If a question asks for force on mass m at that point, use F = mg after finding g.",
          "Dimensional check: [GM/r²] = (N m² kg⁻² x kg)/m² = N kg⁻¹, consistent with field strength.",
        ],
      },
      {
        id: "variation-with-distance",
        title: "How g changes with distance from a mass",
        paragraphs: [
          "Because g proportional to 1/r², moving further from Earth reduces field strength. For example, at r = 2RE, g is one quarter of surface value (ignoring rotation).",
          "This inverse-square behavior explains why orbital periods increase strongly with orbital radius.",
          "Near very large masses, stronger g produces larger curvature of trajectories and shorter-period low orbits.",
        ],
      },
      {
        id: "why-g-near-earth-approximately-constant",
        title: "Why g is approximately constant near Earth's surface",
        paragraphs: [
          "Near Earth's surface, altitude changes h are small compared with Earth's radius RE. So r = RE + h changes only slightly as h changes.",
          "Since g = GM/r², a small fractional change in r gives only a small fractional change in g. Therefore for many AS-level problems over small heights, g can be treated as constant.",
          "This approximation underpins equations such as Delta Ep = mgh and constant-acceleration kinematics in near-Earth vertical motion.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "This subtopic rewards clean derivation and correct radius usage. Typical losses come from substituting altitude for radius or from unclear approximation arguments near Earth's surface.",
      items: [
        "Writing g = GM/r instead of GM/r².",
        "Using r = h above surface rather than r = RE + h.",
        "Forgetting that g is field strength due to source mass only, not involving test mass.",
        "Claiming g is exactly constant near Earth instead of approximately constant for small height changes.",
        "Mixing symbols g and G in equations and calculator work.",
      ],
    },
    workedExamples: [
      {
        id: "t13-3-ex1",
        title: "Derivation from force law and definition",
        problem: [
          "Show algebraically how g = GM/r² follows from Newton's law of gravitation and the definition of field strength.",
        ],
        solution: [
          "Newton's law for force on test mass m due to source mass M is F = G M m / r².",
          "Definition of field strength is g = F/m.",
          "Substitute F into definition: g = (G M m / r²)/m.",
          "Cancel m to obtain g = GM/r².",
        ],
      },
      {
        id: "t13-3-ex2",
        title: "Field strength at altitude",
        problem: [
          "Take Earth radius RE = 6.37 x 10⁶ m and surface field strength 9.81 N kg⁻¹. Estimate g at altitude 4.0 x 10⁵ m above surface using inverse-square scaling.",
        ],
        solution: [
          "Use ratio form from g proportional to 1/r²:",
          "g at altitude = g at surface x (RE/(RE + h))².",
          "g at altitude = 9.81 x (6.37 x 10⁶ / 6.77 x 10⁶)² = 8.68 N kg⁻¹.",
          "So g is reduced from surface value but still of similar order.",
        ],
      },
      {
        id: "t13-3-ex3",
        title: "Why constant-g approximation is reasonable",
        problem: [
          "A lift moves upward by 120 m. Explain quantitatively why taking g as constant is acceptable.",
        ],
        solution: [
          "Earth radius is about 6.37 x 10⁶ m, much larger than 120 m.",
          "Fractional radius change is h/RE = 120/(6.37 x 10⁶) = 1.88 x 10⁻⁵.",
          "Since g proportional to 1/r², fractional change in g is about 2h/RE = 3.8 x 10⁻⁵ (about 0.004%).",
          "This change is negligible for normal AS-level precision, so constant g is a valid approximation.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t13-3-st1",
        question:
          "Derive the expression for gravitational field strength due to a point mass M at distance r.",
        modelAnswer: [
          "From Newton's law, force on test mass m is F = G M m / r².",
          "By definition g = F/m.",
          "So g = (G M m / r²)/m = GM/r².",
        ],
      },
      {
        id: "t13-3-st2",
        question:
          "A planet has mass 4.8 x 10²⁴ kg and radius 5.5 x 10⁶ m. Calculate g at its surface using G = 6.67 x 10⁻¹¹ N m² kg⁻².",
        modelAnswer: [
          "g = GM/r² = (6.67 x 10⁻¹¹ x 4.8 x 10²⁴)/(5.5 x 10⁶)².",
          "g = 10.6 N kg⁻¹ (3 s.f.).",
        ],
      },
      {
        id: "t13-3-st3",
        question:
          "At what multiple of Earth's radius does field strength become one ninth of surface value?",
        modelAnswer: [
          "Using inverse square, g/g0 = (RE/r)² = 1/9.",
          "So RE/r = 1/3 and r = 3RE.",
        ],
      },
      {
        id: "t13-3-st4",
        question:
          "Why does test-mass value not appear in g = GM/r²?",
        modelAnswer: [
          "g is defined as force per unit mass, so the test mass cancels in F/m.",
          "Field strength depends on source mass and position, not on the chosen small test mass.",
        ],
      },
      {
        id: "t13-3-st5",
        question:
          "State one condition under which using constant g in near-Earth calculations is valid.",
        modelAnswer: [
          "Height change must be very small compared with Earth's radius, so r changes by only a tiny fraction and g changes negligibly.",
        ],
      },
    ],
  },

  "t13-4": {
    noteId: "t13-4",
    syllabusNotes: [
      {
        id: "gravitational-potential-definition",
        title: "Definition of gravitational potential",
        paragraphs: [
          "Gravitational potential phi at a point is defined as work done per unit mass in bringing a small test mass from infinity to that point.",
          "Infinity is chosen as reference where potential is taken as zero. Because gravity is attractive, potential near a mass is negative relative to infinity.",
          "Potential is a scalar quantity. It describes energy level per unit mass, while field strength g describes force per unit mass.",
        ],
      },
      {
        id: "point-mass-potential-equation",
        title: "Using phi = -GM/r for a point mass",
        paragraphs: [
          "For a point mass M, gravitational potential at distance r is phi = -GM/r.",
          "The negative sign reflects that work is done by the gravitational field as a mass falls inward, and that the bound state has lower energy than infinity reference.",
          "Unit check: G M / r has units N m kg⁻¹, equivalent to J kg⁻¹.",
        ],
      },
      {
        id: "potential-and-potential-energy",
        title: "From potential to potential energy",
        paragraphs: [
          "Gravitational potential energy EP of two point masses M and m separated by r is EP = m phi = -GMm/r.",
          "This equation follows directly because potential is energy per unit mass. Multiplying by test mass gives total potential energy for that two-body configuration.",
          "Negative EP indicates a bound system: energy must be supplied to separate the masses to infinity where EP is zero.",
        ],
      },
      {
        id: "distinguishing-g-from-phi",
        title: "Distinguishing field strength and potential",
        paragraphs: [
          "Field strength g is force per unit mass and is a vector. Potential phi is energy per unit mass and is scalar.",
          "In a radial field of point mass, g depends on 1/r² while phi depends on 1/r. So potential changes less rapidly with distance than field strength.",
          "A useful directional statement is that g points toward decreasing potential; in one-dimensional radial form g is the negative potential gradient.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Potential questions test sign conventions and conceptual distinctions. Most marks are lost by dropping the negative sign or by confusing potential with potential energy.",
      items: [
        "Defining potential as force per unit mass, which is definition of g not phi.",
        "Omitting negative sign in phi = -GM/r and EP = -GMm/r.",
        "Using EP equation when question asks for potential per unit mass.",
        "Treating infinity reference as arbitrary in the same line while still using zero at infinity formulae.",
        "Giving units of phi as N kg⁻¹ instead of J kg⁻¹ (or equivalent N m kg⁻¹).",
      ],
    },
    workedExamples: [
      {
        id: "t13-4-ex1",
        title: "Potential at a distance from Earth",
        problem: [
          "Take Earth's mass as 6.0 x 10²⁴ kg and radius as 6.4 x 10⁶ m. Use G = 6.67 x 10⁻¹¹ N m² kg⁻². Calculate gravitational potential at Earth's surface.",
        ],
        solution: [
          "Use phi = -GM/r with r = Earth's radius.",
          "phi = -(6.67 x 10⁻¹¹ x 6.0 x 10²⁴)/(6.4 x 10⁶).",
          "phi = -6.25 x 10⁷ J kg⁻¹.",
          "Negative value is expected because potential is lower than zero-at-infinity reference.",
        ],
      },
      {
        id: "t13-4-ex2",
        title: "Potential energy of two masses",
        problem: [
          "A 900 kg satellite is at distance 7.0 x 10⁶ m from Earth's centre. Use M = 6.0 x 10²⁴ kg and G = 6.67 x 10⁻¹¹ N m² kg⁻². Find gravitational potential energy of the Earth-satellite system.",
        ],
        solution: [
          "Use EP = -GMm/r.",
          "EP = -(6.67 x 10⁻¹¹ x 6.0 x 10²⁴ x 900)/(7.0 x 10⁶).",
          "EP = -5.15 x 10¹⁰ J.",
          "The negative sign shows the satellite is gravitationally bound.",
        ],
      },
      {
        id: "t13-4-ex3",
        title: "Energy needed to move between radii",
        problem: [
          "A 2.0 kg probe is moved slowly from r1 = 8.0 x 10⁶ m to r2 = 1.2 x 10⁷ m from a planet centre. Planet mass is 5.0 x 10²⁴ kg. Use G = 6.67 x 10⁻¹¹ N m² kg⁻². Find change in gravitational potential energy.",
        ],
        solution: [
          "Use EP = -GMm/r at each radius and subtract: Delta EP = EP2 - EP1.",
          "EP1 = -(6.67 x 10⁻¹¹ x 5.0 x 10²⁴ x 2.0)/(8.0 x 10⁶) = -8.34 x 10⁷ J.",
          "EP2 = -(6.67 x 10⁻¹¹ x 5.0 x 10²⁴ x 2.0)/(1.2 x 10⁷) = -5.56 x 10⁷ J.",
          "Delta EP = (-5.56 x 10⁷) - (-8.34 x 10⁷) = +2.78 x 10⁷ J.",
          "Positive change means energy input is required to move the probe farther from the planet.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t13-4-st1",
        question:
          "Define gravitational potential at a point and state its SI unit.",
        modelAnswer: [
          "Gravitational potential at a point is work done per unit mass in bringing a small test mass from infinity to that point.",
          "SI unit is J kg⁻¹ (equivalently N m kg⁻¹).",
        ],
      },
      {
        id: "t13-4-st2",
        question:
          "Write expressions for gravitational potential and gravitational potential energy for a point mass source.",
        modelAnswer: [
          "Potential: phi = -GM/r.",
          "Potential energy with test mass m: EP = -GMm/r.",
        ],
      },
      {
        id: "t13-4-st3",
        question:
          "Why are gravitational potential values near an isolated mass negative when infinity is reference zero?",
        modelAnswer: [
          "Gravity is attractive, so as mass moves from infinity to finite r, the field does positive work and system energy decreases.",
          "Therefore potential relative to infinity is below zero, giving negative values.",
        ],
      },
      {
        id: "t13-4-st4",
        question:
          "At what distance from a point mass M does potential equal -2.0 x 10⁶ J kg⁻¹? Use M = 4.0 x 10²³ kg and G = 6.67 x 10⁻¹¹ N m² kg⁻².",
        modelAnswer: [
          "From phi = -GM/r, rearrange r = GM/|phi|.",
          "r = (6.67 x 10⁻¹¹ x 4.0 x 10²³)/(2.0 x 10⁶) = 1.33 x 10⁷ m.",
        ],
      },
      {
        id: "t13-4-st5",
        question:
          "State two differences between gravitational field strength g and gravitational potential phi.",
        modelAnswer: [
          "g is force per unit mass and is a vector; phi is energy per unit mass and is scalar.",
          "For a point mass, g varies as 1/r² while phi varies as 1/r.",
        ],
      },
    ],
  },
};
