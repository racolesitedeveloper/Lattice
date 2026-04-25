import type { NoteDraft } from "./types";

/** Full teaching notes for 9702 Topic 2 — subtopic 2.1 (see lib/notes/AUTHORING.md). */
export const PHYSICS_TOPIC2_DRAFTS: Record<string, NoteDraft> = {
  "t2-1": {
    noteId: "t2-1",
    syllabusNotes: [
      {
        id: "kinematics-language",
        title: "Kinematics quantities and sign convention",
        paragraphs: [
          "Kinematics describes motion without explaining its cause. For this subtopic, the key quantities are displacement s, velocity u and v, acceleration a, and time t. Displacement and velocity are vectors, so direction matters and signs must be consistent.",
          "Before using any equation, choose a positive direction and keep it throughout the whole solution. For vertical motion, many candidates choose upward as positive; then acceleration due to gravity is negative. You may choose downward as positive instead, but you must then keep g positive and adjust all velocity and displacement signs accordingly.",
          "A common reason for lost marks is mixing speed and velocity language. Speed is scalar; velocity includes direction. In equations of motion, u and v are velocities, so their signs already carry direction information.",
        ],
      },
      {
        id: "constant-acceleration-condition",
        title: "When the suvat equations are valid",
        paragraphs: [
          "The standard equations of motion are valid only when acceleration is constant. If acceleration changes with time, position, or velocity, these equations cannot be used directly.",
          "In many AS-level questions, an object moves in separate stages. You should treat each stage with its own data and apply the equations stage by stage, carrying the final velocity of one stage as the initial velocity of the next.",
          "Always check units before substitution: displacement in m, time in s, velocity in m s⁻¹, acceleration in m s⁻². This helps catch careless errors early.",
        ],
      },
      {
        id: "core-equations",
        title: "The four core equations and their use",
        paragraphs: [
          "For constant acceleration, the core relations are v = u + at, s = (u + v)t / 2, s = ut + (1/2)at², and v² = u² + 2as. These connect five quantities (s, u, v, a, t).",
          "An efficient method is to list known quantities, identify the unknown, then choose the equation that does not involve any extra unknown. This avoids unnecessary simultaneous equations.",
          "The equation v² = u² + 2as does not contain t, so it is useful when time is not given. The equation s = (u + v)t / 2 is often quickest when both velocities and time are known.",
        ],
        bullets: ["v = u + at", "s = (u + v)t / 2", "s = ut + (1/2)at²", "v² = u² + 2as"],
      },
      {
        id: "graph-links",
        title: "Graphical methods for describing motion",
        paragraphs: [
          "You must be able to use graphs for distance, displacement, speed, velocity and acceleration. On a displacement-time graph, gradient gives velocity. On a velocity-time graph, gradient gives acceleration and area under the graph gives displacement.",
          "A speed-time graph gives distance travelled as area under the graph, because speed is scalar and cannot give signed displacement. If a question asks for total path length, a speed-time graph is often the most direct representation.",
          "For constant acceleration, the velocity-time graph is a straight line. Its gradient gives a, and the trapezium area gives s = (u + v)t / 2. This geometric link is useful for checking algebra from suvat equations.",
          "An acceleration-time graph gives the change in velocity as the signed area under the graph. Candidates often forget this when acceleration changes in stages.",
        ],
      },
      {
        id: "free-fall-applications",
        title: "Free-fall applications and common structure",
        paragraphs: [
          "Free-fall questions are direct applications of the same equations with a equal to ±g depending on your sign convention. Near Earth, use g = 9.81 m s⁻² unless the question specifies 9.8 or 10.",
          "In upward-then-downward problems, the top point is often identified by v = 0. You may solve the ascent and descent as separate intervals if that is clearer.",
          "State the sign convention at the start of long solutions. Examiners reward clear, consistent setup, especially when direction changes.",
        ],
      },
      {
        id: "experiment-g",
        title: "Determining g by experiment",
        paragraphs: [
          "A standard school experiment is to release a small dense object and measure fall time over a known vertical distance using an electronic timer and trapdoor (or electromagnet release and light gate). Repeat readings to reduce random uncertainty and use a fixed measured drop height.",
          "From rest, the model is s = (1/2)gt² if air resistance is negligible. So either calculate g from each pair of s and t values, or plot s against t² and find g from the gradient, where gradient = g/2.",
          "To gain full credit, discuss uncertainty and systematic effects: reaction-time error (if manual timing), delay in release mechanism, uncertainty in height measurement, and the fact that large distances/speeds increase air resistance and reduce validity of the constant-acceleration model.",
        ],
      },
      {
        id: "projectile-motion-intro",
        title: "Uniform velocity in one direction and uniform acceleration perpendicular to it",
        paragraphs: [
          "For projectile motion near Earth (neglecting air resistance), horizontal and vertical motions are independent. Horizontally, velocity is uniform because horizontal acceleration is zero. Vertically, acceleration is constant and equal to -g if upward is positive.",
          "This allows component treatment: x = uₓ t in the horizontal direction, while vertical displacement and velocity use suvat with a = -g. The path is curved because one component changes and the perpendicular component does not.",
          "In written explanations, make the perpendicular directions explicit. Examiners award marks for identifying that constant horizontal velocity and constant vertical acceleration act simultaneously, not in separate time intervals.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Most marks are lost in kinematics through setup errors rather than difficult algebra. Examiners look for consistent signs, correct equation choice, and physically sensible final answers.",
      items: [
        "Using suvat equations when acceleration is not constant.",
        "Confusing distance with displacement, or speed with velocity, especially when direction reverses.",
        "Reading graph area/gradient incorrectly (e.g. using area of displacement-time graph).",
        "Substituting speed values without sign in vertical motion, causing direction errors.",
        "Choosing an equation that introduces an extra unknown and then getting stuck.",
        "Mixing units (e.g. cm with m, ms with s) or forgetting to convert before substitution.",
        "Giving only a magnitude when the question asks for velocity or acceleration (direction needed).",
        "In projectile questions, assuming horizontal acceleration is g or assuming horizontal velocity changes without a horizontal force.",
        "Not checking physical sense, such as a negative time or impossible direction for the context.",
      ],
    },
    workedExamples: [
      {
        id: "t2-1-ex1",
        title: "Car accelerating from rest",
        problem: [
          "A car starts from rest and accelerates uniformly at 2.4 m s⁻² for 7.5 s. Find (a) its final velocity and (b) the distance travelled in this time.",
        ],
        solution: [
          "Given u = 0, a = 2.4 m s⁻², t = 7.5 s.",
          "For final velocity, use v = u + at: v = 0 + (2.4)(7.5) = 18.0 m s⁻¹.",
          "For displacement, use s = ut + (1/2)at²: s = 0 + (1/2)(2.4)(7.5)² = 67.5 m.",
          "Both answers are positive in the chosen forward direction, consistent with acceleration from rest.",
        ],
      },
      {
        id: "t2-1-ex2",
        title: "Vertical throw with upward positive",
        problem: [
          "A ball is projected vertically upward with speed 16 m s⁻¹. Taking upward as positive and g = 9.81 m s⁻², find (a) the time to reach maximum height and (b) the maximum height above the launch point.",
        ],
        solution: [
          "Choose upward as positive. Then u = +16 m s⁻¹ and a = -9.81 m s⁻².",
          "At maximum height, v = 0. Use v = u + at: 0 = 16 - 9.81t, so t = 16/9.81 = 1.63 s (3 s.f.).",
          "Now use v² = u² + 2as with v = 0: 0 = 16² + 2(-9.81)s.",
          "So s = 16² / (2 x 9.81) = 13.0 m (3 s.f.).",
          "The positive height confirms the sign convention has been used consistently.",
        ],
      },
      {
        id: "t2-1-ex3",
        title: "Projectile launched horizontally",
        problem: [
          "A ball leaves a table horizontally at 6.0 m s⁻¹ from a height of 1.25 m above the floor. Neglect air resistance. Find (a) the time to hit the floor and (b) the horizontal distance travelled before impact.",
        ],
        solution: [
          "Treat vertical and horizontal directions separately. Vertically, uᵧ = 0, sᵧ = -1.25 m (upward positive), aᵧ = -9.81 m s⁻².",
          "Use s = ut + (1/2)at²: -1.25 = 0 + (1/2)(-9.81)t², so t² = 2(1.25)/9.81 = 0.255 and t = 0.505 s.",
          "Horizontally, acceleration is zero so velocity is constant at 6.0 m s⁻¹. Hence x = uₓ t = 6.0 x 0.505 = 3.03 m.",
          "So the ball travels about 3.0 m horizontally before impact (2 s.f.).",
        ],
      },
    ],
    selfTest: [
      {
        id: "t2-1-st1",
        question:
          "State the condition required for using the standard equations of motion and explain briefly why this condition matters.",
        modelAnswer: [
          "The acceleration must be constant throughout the interval considered.",
          "These equations are derived assuming linear change of velocity with time; if acceleration is not constant, that assumption is false and the equations no longer describe the motion exactly.",
        ],
      },
      {
        id: "t2-1-st2",
        question: "A particle has u = 5.0 m s⁻¹, a = 1.2 m s⁻², t = 4.0 s. Calculate v and s.",
        modelAnswer: [
          "Use v = u + at: v = 5.0 + (1.2)(4.0) = 9.8 m s⁻¹.",
          "Use s = ut + (1/2)at²: s = (5.0)(4.0) + 0.5(1.2)(4.0)² = 20 + 9.6 = 29.6 m.",
        ],
      },
      {
        id: "t2-1-st3",
        question:
          "A stone is thrown vertically upward at 20 m s⁻¹. Using upward positive and g = 9.81 m s⁻², determine the velocity after 1.5 s.",
        modelAnswer: [
          "Take u = +20 m s⁻¹, a = -9.81 m s⁻², t = 1.5 s.",
          "v = u + at = 20 - 9.81(1.5) = +5.29 m s⁻¹.",
          "The positive sign means the stone is still moving upward at that instant.",
        ],
      },
      {
        id: "t2-1-st4",
        question:
          "Describe one suitable experiment to determine g using a falling object, and state how g is obtained from graph data.",
        modelAnswer: [
          "Release a small object from rest through a measured vertical distance s using an electronic release and timer/light gate, and record time t for several drops (or several heights).",
          "Assuming negligible air resistance, use s = (1/2)gt².",
          "Plot s against t². The graph should be a straight line through the origin with gradient g/2, so g = 2 x gradient.",
          "Quote key uncertainties such as measurement of s, timer resolution/release delay, and increasing drag at larger speeds.",
        ],
      },
      {
        id: "t2-1-st5",
        question:
          "A projectile is launched with horizontal speed 8.0 m s⁻¹ from a point 0.80 m above level ground. Neglect air resistance. Find its time of flight and horizontal range.",
        modelAnswer: [
          "Vertical motion: uᵧ = 0, sᵧ = -0.80 m, aᵧ = -9.81 m s⁻².",
          "From s = ut + (1/2)at²: -0.80 = (1/2)(-9.81)t², so t = sqrt(2 x 0.80 / 9.81) = 0.404 s.",
          "Horizontal motion has zero acceleration, so range x = uₓ t = 8.0 x 0.404 = 3.23 m.",
          "Time of flight is 0.404 s and horizontal range is about 3.2 m.",
        ],
      },
    ],
  },
};
