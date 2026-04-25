import type { NoteDraft } from "./types";

/** Full teaching notes for 9702 Topic 12 - subtopics 12.1-12.2 (see lib/notes/AUTHORING.md). */
export const PHYSICS_TOPIC12_DRAFTS: Record<string, NoteDraft> = {
  "t12-1": {
    noteId: "t12-1",
    syllabusNotes: [
      {
        id: "radian-and-angular-displacement",
        title: "Radian and angular displacement",
        paragraphs: [
          "Angular displacement describes how far an object has turned about a fixed centre. It is measured by angle θ, and the standard SI unit is the radian (rad).",
          "One radian is the angle subtended at the centre of a circle by an arc whose length is equal to the radius. Using arc length s and radius r, θ in radians is defined by θ = s/r.",
          "Because θ is a ratio of two lengths, it is dimensionless in strict dimensional analysis, but we still write rad to show clearly that the angle is measured in radians.",
          "For one full revolution, arc length is the circumference 2pi r, so θ = (2pi r)/r = 2pi rad. Therefore 360 degrees = 2pi rad, 180 degrees = pi rad, and 1 rad is about 57.3 degrees.",
        ],
      },
      {
        id: "angular-speed-definition",
        title: "Angular speed in uniform circular motion",
        paragraphs: [
          "Angular speed ω is the rate of change of angular displacement: ω = dθ/dt. In uniform circular motion, ω is constant.",
          "Its SI unit is rad s⁻¹. If an object makes many revolutions with constant angular speed, equal time intervals correspond to equal angular displacements.",
          "Period T is the time for one complete revolution. Since one revolution is 2pi rad, the angular speed relation is ω = 2pi/T.",
          "Frequency f is revolutions per second, so f = 1/T and ω = 2pi f. These links are often used to move between rotational and timing data.",
        ],
      },
      {
        id: "linear-and-angular-links",
        title: "Connecting linear and angular quantities",
        paragraphs: [
          "For a point at radius r moving in a circle, the distance travelled along the circle in angle θ is s = rθ (θ in radians).",
          "Differentiate with respect to time: v = ds/dt = r dθ/dt = rω. This gives the key relation v = rω.",
          "Here v is the tangential speed (m s⁻¹) and ω is angular speed (rad s⁻¹). For a rigid rotating body, all points share the same ω but points at larger r have larger tangential speed.",
          "If radius doubles at the same ω, tangential speed doubles. If ω doubles at the same r, tangential speed also doubles.",
        ],
      },
      {
        id: "uniform-circular-kinematics",
        title: "What is constant and what changes",
        paragraphs: [
          "In uniform circular motion, speed is constant but velocity is not constant because the direction of velocity changes continuously.",
          "Velocity is always tangent to the circle, while the radius vector points from centre to particle. Tangent and radius are perpendicular at every point.",
          "The acceleration responsible for direction change is studied in the next subtopic. For this kinematics section, the key point is that constant speed does not imply zero acceleration if direction changes.",
          "A complete description usually involves r, T (or f), ω, and v, connected by ω = 2pi/T and v = rω.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Examiners expect precise radian definitions and clean conversion between angular and linear quantities. Most errors come from unit confusion and mixing degrees with radian formulas.",
      items: [
        "Using s = rθ with θ in degrees. This relation requires θ in radians.",
        "Stating 1 revolution = 360 rad instead of 2pi rad.",
        "Confusing frequency and angular speed, for example writing ω = 1/T instead of ω = 2pi/T.",
        "Assuming velocity is constant in uniform circular motion because speed is constant.",
        "Using v = ω/r instead of v = rω.",
        "Leaving out units, especially rad s⁻¹ for ω and m s⁻¹ for v.",
      ],
    },
    workedExamples: [
      {
        id: "t12-1-ex1",
        title: "Converting between degrees and radians",
        problem: [
          "A wheel turns through 135 degrees. Find the angular displacement in radians. Then find the arc length travelled by a point on the rim if radius is 0.40 m.",
        ],
        solution: [
          "Convert to radians: θ = 135 x (pi/180) = 3pi/4 rad = 2.36 rad (3 s.f.).",
          "Use s = rθ with θ in radians: s = 0.40 x 2.36 = 0.944 m.",
          "So angular displacement is 3pi/4 rad and arc length is 0.944 m.",
        ],
      },
      {
        id: "t12-1-ex2",
        title: "Finding angular speed from period",
        problem: [
          "A rotor completes one revolution in 0.080 s. Calculate (a) angular speed and (b) frequency.",
        ],
        solution: [
          "Given period T = 0.080 s.",
          "Angular speed ω = 2pi/T = 2pi/0.080 = 78.5 rad s⁻¹.",
          "Frequency f = 1/T = 1/0.080 = 12.5 Hz.",
          "Check link: ω = 2pi f = 2pi x 12.5 = 78.5 rad s⁻¹, consistent.",
        ],
      },
      {
        id: "t12-1-ex3",
        title: "Using v = rω",
        problem: [
          "A particle moves in a circle of radius 0.75 m with angular speed 6.4 rad s⁻¹. Find the tangential speed and the distance travelled in 5.0 s.",
        ],
        solution: [
          "Tangential speed v = rω = 0.75 x 6.4 = 4.8 m s⁻¹.",
          "Distance in time t is s = vt for constant speed: s = 4.8 x 5.0 = 24 m.",
          "You can also use θ = ωt = 6.4 x 5.0 = 32 rad and s = rθ = 0.75 x 32 = 24 m.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t12-1-st1",
        question: "Define the radian and state the angular displacement for one complete revolution in radians.",
        modelAnswer: [
          "One radian is the angle subtended at the centre of a circle by an arc equal in length to the radius.",
          "One complete revolution is 2pi rad.",
        ],
      },
      {
        id: "t12-1-st2",
        question: "Show that ω = 2pi/T and ω = 2pi f.",
        modelAnswer: [
          "In one period T, angular displacement is 2pi rad, so ω = angular displacement/time = 2pi/T.",
          "Since f = 1/T, substitute to get ω = 2pi f.",
        ],
      },
      {
        id: "t12-1-st3",
        question: "A turntable rotates at 45 rev min⁻¹. Calculate angular speed in rad s⁻¹.",
        modelAnswer: [
          "First convert frequency: f = 45/60 = 0.75 Hz.",
          "Then ω = 2pi f = 2pi x 0.75 = 4.71 rad s⁻¹.",
        ],
      },
      {
        id: "t12-1-st4",
        question: "Explain why uniform circular motion has constant speed but changing velocity.",
        modelAnswer: [
          "Speed is constant because the magnitude of velocity is unchanged.",
          "Velocity changes because its direction is continuously changing around the circle.",
        ],
      },
      {
        id: "t12-1-st5",
        question: "A point moves in a circle of radius 0.20 m at angular speed 30 rad s⁻¹. Find its speed.",
        modelAnswer: ["Use v = rω: v = 0.20 x 30 = 6.0 m s⁻¹."],
      },
    ],
  },

  "t12-2": {
    noteId: "t12-2",
    syllabusNotes: [
      {
        id: "centripetal-acceleration-concept",
        title: "Why centripetal acceleration is needed",
        paragraphs: [
          "In circular motion, velocity direction changes continuously. Any change in velocity means acceleration, even when speed is constant.",
          "For uniform circular motion, the acceleration is directed toward the centre of the circle. This inward acceleration is called centripetal acceleration.",
          "If the inward acceleration were absent, the object would continue in a straight line tangent to the circle (Newton's first law). Circular motion therefore requires a continuous inward resultant force.",
        ],
      },
      {
        id: "force-direction-and-constant-magnitude",
        title: "Perpendicular force and constant angular speed",
        paragraphs: [
          "A force that is always perpendicular to the instantaneous direction of motion changes velocity direction but not speed. This is why uniform circular motion can have constant speed.",
          "When this perpendicular force has constant magnitude and always points to the centre, it produces circular motion with constant angular speed.",
          "The force that provides this inward effect is not a new type of force. It can be tension, friction, normal reaction, gravitational force, electric force, or a combination. Centripetal describes role and direction, not force identity.",
        ],
      },
      {
        id: "centripetal-acceleration-formulas",
        title: "Using a = rω² and a = v²/r",
        paragraphs: [
          "For uniform circular motion, centripetal acceleration magnitude is a = rω².",
          "Using v = rω, substitute ω = v/r into a = rω² to get the equivalent form a = v²/r.",
          "Both forms are correct and equivalent. Choose a = rω² when angular data are given, and a = v²/r when tangential speed is given.",
          "Unit check: from a = v²/r, units are (m² s⁻²)/m = m s⁻², as expected for acceleration.",
        ],
      },
      {
        id: "centripetal-force-formulas",
        title: "Using F = mrω² and F = mv²/r",
        paragraphs: [
          "Resultant inward force needed is F = ma with a centripetal. So F = mrω² and equivalently F = mv²/r.",
          "The direction is always toward the centre. If you resolve forces in a radial direction, inward resultant must match this value for circular motion to be maintained.",
          "If inward resultant is larger than required for the current speed and radius, motion curves more sharply; if smaller, motion curves less sharply.",
        ],
      },
      {
        id: "solving-circular-motion-problems",
        title: "Problem-solving approach in radial direction",
        paragraphs: [
          "Draw a clear diagram and mark centre, radius, and all real forces. Then choose radial inward as positive and write a radial force equation.",
          "Do not add an extra centripetal force in addition to real forces. The centripetal force is the resultant of real forces in the inward direction.",
          "Check answers for physical trends: for fixed speed, larger radius gives smaller acceleration; for fixed radius, larger speed gives much larger acceleration because of v² dependence.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Markers focus on direction logic in circular motion. Most mistakes come from treating centripetal force as an extra force or using wrong formulas with inconsistent given data.",
      items: [
        "Writing centrifugal force as a real inward force in an inertial-frame force balance.",
        "Adding centripetal force to tension or weight instead of identifying it as the resultant of real forces.",
        "Using a = v/r instead of a = v²/r.",
        "Forgetting that centripetal acceleration is toward the centre, not tangential.",
        "Using speed in rev s⁻¹ directly in a = rω² without converting to ω in rad s⁻¹.",
        "Ignoring unit consistency, especially when radius is given in cm.",
      ],
    },
    workedExamples: [
      {
        id: "t12-2-ex1",
        title: "Centripetal acceleration from speed and radius",
        problem: [
          "A car travels round a bend of radius 60 m at constant speed 18 m s⁻¹. Calculate its centripetal acceleration.",
        ],
        solution: [
          "Use a = v²/r.",
          "a = 18² / 60 = 324/60 = 5.4 m s⁻².",
          "So the car has centripetal acceleration 5.4 m s⁻² toward the centre of the bend.",
        ],
      },
      {
        id: "t12-2-ex2",
        title: "Centripetal force from angular speed",
        problem: [
          "A 0.30 kg mass moves in a horizontal circle of radius 0.80 m with angular speed 9.0 rad s⁻¹. Find the required centripetal force.",
        ],
        solution: [
          "Use F = mrω².",
          "F = 0.30 x 0.80 x 9.0² = 0.24 x 81 = 19.44 N.",
          "Required inward force is 19 N to 2 s.f. (or 19.4 N to 3 s.f.).",
        ],
      },
      {
        id: "t12-2-ex3",
        title: "Finding speed from available inward force",
        problem: [
          "A 1200 kg car moves on a level circular track of radius 50 m. Maximum available horizontal frictional force is 7200 N. Assuming this provides the centripetal force, find the maximum speed for circular motion.",
        ],
        solution: [
          "Set centripetal force equal to available friction: F = mv²/r.",
          "7200 = 1200 v² / 50.",
          "So v² = 7200 x 50 / 1200 = 300.",
          "v = sqrt(300) = 17.3 m s⁻¹.",
          "Maximum speed is 17.3 m s⁻¹ before friction is insufficient for the circular path.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t12-2-st1",
        question: "Explain why an object in uniform circular motion must have acceleration even when speed is constant.",
        modelAnswer: [
          "Acceleration is rate of change of velocity.",
          "In uniform circular motion, velocity direction changes continuously, so velocity changes and acceleration is non-zero.",
          "This acceleration is directed toward the centre.",
        ],
      },
      {
        id: "t12-2-st2",
        question: "State and relate the two formulas for centripetal acceleration.",
        modelAnswer: [
          "The formulas are a = rω² and a = v²/r.",
          "They are equivalent because v = rω, so substituting gives a = rω² = v²/r.",
        ],
      },
      {
        id: "t12-2-st3",
        question: "A 0.50 kg ball moves in a circle of radius 1.2 m at speed 4.0 m s⁻¹. Find the centripetal force.",
        modelAnswer: ["F = mv²/r = 0.50 x 4.0² / 1.2 = 6.7 N (2 s.f.)."],
      },
      {
        id: "t12-2-st4",
        question: "A rotor spins at 20 rev s⁻¹ with radius 0.15 m. Find centripetal acceleration at the rim.",
        modelAnswer: [
          "Convert to angular speed: ω = 2pi f = 2pi x 20 = 125.7 rad s⁻¹.",
          "Then a = rω² = 0.15 x 125.7² = 2.37 x 10³ m s⁻².",
        ],
      },
      {
        id: "t12-2-st5",
        question: "In one sentence, state what is wrong with the phrase centripetal force is an extra force acting on the object.",
        modelAnswer: [
          "Centripetal force is not an extra force; it is the name for the resultant inward force provided by real forces already acting on the object.",
        ],
      },
    ],
  },
};
