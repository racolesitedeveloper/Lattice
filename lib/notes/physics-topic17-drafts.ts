import type { NoteDraft } from "./types";

/** Full teaching notes for 9702 Topic 17 — subtopics 17.1–17.3 (see lib/notes/AUTHORING.md). */
export const PHYSICS_TOPIC17_DRAFTS: Record<string, NoteDraft> = {
  "t17-1": {
    noteId: "t17-1",
    syllabusNotes: [
      {
        id: "sho-language-and-period-relations",
        title: "Displacement, amplitude, period, frequency, angular frequency and phase difference",
        paragraphs: [
          "In oscillations, displacement x is the signed distance from equilibrium position, measured along the line of motion. Amplitude x₀ is the maximum magnitude of displacement and is always positive as a magnitude.",
          "Period T is time for one complete oscillation and frequency f is number of complete oscillations per second, so f = 1/T.",
          "Angular frequency is ω, measured in rad s⁻¹, and links to period and frequency by ω = 2πf and T = 2π/ω. You should be able to move between all three forms depending on given data.",
          "Phase difference describes how far two oscillations are out of step. One full cycle is 2π rad. If two points on an SHM graph differ by quarter cycle, phase difference is π/2 rad.",
        ],
      },
      {
        id: "defining-shm-with-acceleration",
        title: "What makes motion simple harmonic",
        paragraphs: [
          "Simple harmonic motion (SHM) is defined by acceleration being proportional to displacement from a fixed point and opposite in direction.",
          "In symbols this is a = -ω²x. The minus sign is essential: it shows acceleration is a restoring acceleration, always directed toward equilibrium.",
          "This definition is the test for SHM. If acceleration is not proportional to displacement, or not directed oppositely, the motion is oscillatory but not simple harmonic.",
        ],
      },
      {
        id: "displacement-and-velocity-equations",
        title: "Using x = x₀ sin ωt, v = v₀ cos ωt and v = ±ω√(x₀² − x²)",
        paragraphs: [
          "One standard SHM solution is x = x₀ sin ωt for a suitable choice of time origin. This equation describes sinusoidal variation of displacement with time.",
          "Differentiating gives velocity v = dx/dt = ωx₀ cos ωt. If you define v₀ = ωx₀ as maximum speed, this is written v = v₀ cos ωt.",
          "Combining x = x₀ sin ωt and v = ωx₀ cos ωt with sin²θ + cos²θ = 1 gives v² = ω²(x₀² - x²), so v = ±ω√(x₀² - x²).",
          "The plus or minus sign depends on direction of motion. At x = 0, speed is maximum |v| = ωx₀. At turning points x = ±x₀, speed is zero.",
        ],
      },
      {
        id: "graph-analysis",
        title: "Interpreting x–t, v–t and a–t graphs for SHM",
        paragraphs: [
          "Displacement-time graph is sinusoidal with amplitude x₀ and period T. Velocity-time graph is also sinusoidal but shifted in phase by π/2 relative to displacement.",
          "Acceleration-time graph is sinusoidal and in antiphase with displacement, because a = -ω²x.",
          "Graph gradients and areas carry standard meanings: gradient of x–t gives v, gradient of v–t gives a, and area under v–t between two times gives displacement change.",
          "At equilibrium x = 0, acceleration is zero and speed is maximum. At extreme positions x = ±x₀, acceleration magnitude is maximum and speed is zero.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Examiners in SHM reward precise sign usage and graph interpretation. Most lost marks come from dropping direction information or mixing formulas that apply at different points in the cycle.",
      items: [
        "Writing a = +ω²x and then claiming acceleration is restoring. The restoring condition requires a = -ω²x.",
        "Using speed and velocity interchangeably in equations with sign, especially when deciding ± in v = ±ω√(x₀² - x²).",
        "Treating x₀ as instantaneous displacement rather than maximum displacement amplitude.",
        "Assuming v is maximum at maximum displacement. In SHM, v = 0 at x = ±x₀ and |v| is maximum at x = 0.",
        "Reading phase difference from graphs without checking whether shift is in time, radians, or fractions of a cycle.",
      ],
    },
    workedExamples: [
      {
        id: "t17-1-ex1",
        title: "Using period, frequency and angular frequency",
        problem: [
          "An oscillator performs SHM with period 0.80 s and amplitude 0.050 m. Calculate (a) frequency and (b) angular frequency.",
        ],
        solution: [
          "Use f = 1/T, so f = 1/0.80 = 1.25 Hz.",
          "Then ω = 2πf = 2π x 1.25 = 7.85 rad s⁻¹.",
          "So frequency is 1.25 Hz and angular frequency is 7.85 rad s⁻¹.",
        ],
      },
      {
        id: "t17-1-ex2",
        title: "Velocity at a given displacement",
        problem: [
          "For an SHM particle, amplitude x₀ = 0.12 m and angular frequency ω = 5.0 rad s⁻¹. Find the speed when displacement is x = 0.072 m.",
        ],
        solution: [
          "Use v = ±ω√(x₀² - x²). For speed, take magnitude only.",
          "|v| = 5.0√(0.12² - 0.072²) = 5.0√(0.0144 - 0.005184) = 5.0√0.009216.",
          "|v| = 5.0 x 0.0960 = 0.480 m s⁻¹.",
          "Speed is 0.480 m s⁻¹. Velocity could be +0.480 m s⁻¹ or -0.480 m s⁻¹ depending on direction.",
        ],
      },
      {
        id: "t17-1-ex3",
        title: "Checking SHM using acceleration-displacement data",
        problem: [
          "A particle has measured pairs (x, a): (0.020 m, -0.80 m s⁻²), (0.050 m, -2.0 m s⁻²), (-0.040 m, +1.6 m s⁻²). Determine whether this is consistent with SHM and find ω.",
        ],
        solution: [
          "For SHM, a/x should be constant and negative, since a = -ω²x.",
          "From first pair: a/x = -0.80/0.020 = -40 s⁻². Second pair: -2.0/0.050 = -40 s⁻². Third pair: +1.6/(-0.040) = -40 s⁻².",
          "The ratio is constant and negative, so data are consistent with SHM.",
          "Hence ω² = 40 and ω = √40 = 6.32 rad s⁻¹.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t17-1-st1",
        question:
          "Define simple harmonic motion in terms of acceleration and displacement.",
        modelAnswer: [
          "Simple harmonic motion is motion in which acceleration is proportional to displacement from a fixed equilibrium point and directed opposite to that displacement.",
          "So the defining relation is a = -ω²x.",
        ],
      },
      {
        id: "t17-1-st2",
        question:
          "An oscillator has frequency 3.2 Hz. Calculate its period and angular frequency.",
        modelAnswer: [
          "Period T = 1/f = 1/3.2 = 0.3125 s.",
          "Angular frequency ω = 2πf = 2π x 3.2 = 20.1 rad s⁻¹.",
        ],
      },
      {
        id: "t17-1-st3",
        question:
          "State the displacement, speed and acceleration of an SHM particle at equilibrium position.",
        modelAnswer: [
          "At equilibrium, displacement x = 0.",
          "Speed is maximum (|v| = ωx₀).",
          "Acceleration is zero because a = -ω²x.",
        ],
      },
      {
        id: "t17-1-st4",
        question:
          "A particle follows x = 0.040 sin(12t), with x in m and t in s. Find x₀, ω and maximum speed.",
        modelAnswer: [
          "Compare with x = x₀ sin ωt.",
          "So x₀ = 0.040 m and ω = 12 rad s⁻¹.",
          "Maximum speed is v₀ = ωx₀ = 12 x 0.040 = 0.48 m s⁻¹.",
        ],
      },
      {
        id: "t17-1-st5",
        question:
          "Displacement and velocity of one oscillator differ in phase by what value? State in radians and as fraction of a cycle.",
        modelAnswer: [
          "Displacement and velocity in SHM differ by π/2 rad.",
          "This is one quarter of a cycle.",
        ],
      },
    ],
  },

  "t17-2": {
    noteId: "t17-2",
    syllabusNotes: [
      {
        id: "energy-exchange-in-shm",
        title: "Interchange between kinetic and potential energy",
        paragraphs: [
          "In SHM, total mechanical energy is constant if damping is negligible, but energy continuously changes form between kinetic energy and potential energy.",
          "At equilibrium position, speed is maximum, so kinetic energy is maximum and potential energy is minimum.",
          "At each extreme position x = ±x₀, speed is zero, so kinetic energy is zero and potential energy is maximum.",
          "During each quarter cycle, energy transfers smoothly from one form to the other, not in sudden steps.",
        ],
      },
      {
        id: "total-energy-equation",
        title: "Using E = ½mω²x₀² for total SHM energy",
        paragraphs: [
          "For a mass m in SHM of angular frequency ω and amplitude x₀, total energy is E = ½mω²x₀².",
          "This is constant for undamped SHM, so changing amplitude has a strong effect: because E is proportional to x₀², doubling amplitude makes total energy four times larger.",
          "The equation can be applied to spring-mass systems and any SHM system with equivalent restoring behavior when m, ω and x₀ are known.",
        ],
      },
      {
        id: "energy-with-displacement",
        title: "Energy at any displacement x",
        paragraphs: [
          "At any point in the motion, kinetic and potential energies are position-dependent but sum to total E.",
          "Using v² = ω²(x₀² - x²), kinetic energy is EK = ½mv² = ½mω²(x₀² - x²).",
          "Potential energy relative to equilibrium is EP = ½mω²x² (equivalently ½kx² for a spring where k = mω²).",
          "So EK + EP = ½mω²x₀², consistent with constant total energy.",
        ],
      },
      {
        id: "energy-graphs-and-phase",
        title: "How energy varies with time and phase",
        paragraphs: [
          "Displacement varies sinusoidally with time, but energy terms vary with sin² and cos² forms, so each energy oscillates at twice the frequency of displacement.",
          "Kinetic and potential energy are out of phase: when one is maximum, the other is minimum.",
          "In one full oscillation of displacement, each of EK and EP completes two maxima and two minima while total energy remains constant.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Energy questions in SHM are usually direct if candidates keep track of where the oscillator is in the cycle and which quantity is constant.",
      items: [
        "Using E = ½mv² with instantaneous speed as if it were total energy. Total energy uses amplitude through E = ½mω²x₀².",
        "Claiming kinetic and potential energies are both maximum at equilibrium.",
        "Forgetting the square dependence on amplitude when comparing total energies.",
        "Using displacement x instead of amplitude x₀ in the total-energy equation.",
        "Mixing spring notation (k) and SHM notation (mω²) inconsistently without using k = mω².",
      ],
    },
    workedExamples: [
      {
        id: "t17-2-ex1",
        title: "Total energy from m, ω and x₀",
        problem: [
          "A 0.40 kg oscillator performs SHM with angular frequency 6.0 rad s⁻¹ and amplitude 0.080 m. Calculate total mechanical energy.",
        ],
        solution: [
          "Use E = ½mω²x₀².",
          "E = 0.5 x 0.40 x 6.0² x 0.080² = 0.5 x 0.40 x 36 x 0.0064.",
          "E = 0.0461 J.",
          "Total mechanical energy is 4.61 x 10⁻² J.",
        ],
      },
      {
        id: "t17-2-ex2",
        title: "Kinetic and potential energy at given displacement",
        problem: [
          "For an SHM mass m = 0.50 kg, ω = 4.0 rad s⁻¹ and amplitude x₀ = 0.10 m, find EK and EP when x = 0.060 m.",
        ],
        solution: [
          "Total energy: E = ½mω²x₀² = 0.5 x 0.50 x 4.0² x 0.10² = 0.040 J.",
          "Potential energy at x: EP = ½mω²x² = 0.5 x 0.50 x 16 x 0.060² = 0.0144 J.",
          "Kinetic energy is EK = E - EP = 0.040 - 0.0144 = 0.0256 J.",
          "So EK = 0.0256 J and EP = 0.0144 J.",
        ],
      },
      {
        id: "t17-2-ex3",
        title: "Energy ratio and amplitude change",
        problem: [
          "The amplitude of an undamped SHM oscillator increases from 2.0 cm to 5.0 cm while m and ω are unchanged. Find the factor increase in total energy.",
        ],
        solution: [
          "For fixed m and ω, E is proportional to x₀².",
          "So E₂/E₁ = (x₀₂/x₀₁)² = (5.0/2.0)² = 2.5² = 6.25.",
          "Total energy increases by a factor of 6.25.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t17-2-st1",
        question:
          "Describe the energy distribution at (a) equilibrium and (b) extreme displacement in SHM.",
        modelAnswer: [
          "(a) At equilibrium, speed is maximum, so kinetic energy is maximum and potential energy is minimum.",
          "(b) At extreme displacement, speed is zero, so kinetic energy is zero and potential energy is maximum.",
        ],
      },
      {
        id: "t17-2-st2",
        question:
          "State the expression for total energy of SHM and define all symbols.",
        modelAnswer: [
          "E = ½mω²x₀².",
          "E is total mechanical energy, m is oscillating mass, ω is angular frequency, and x₀ is amplitude.",
        ],
      },
      {
        id: "t17-2-st3",
        question:
          "An SHM particle has m = 0.25 kg, ω = 10 rad s⁻¹ and x₀ = 0.030 m. Calculate total energy.",
        modelAnswer: [
          "E = ½mω²x₀² = 0.5 x 0.25 x 10² x 0.030².",
          "E = 0.01125 J.",
        ],
      },
      {
        id: "t17-2-st4",
        question:
          "Explain why the sum EK + EP remains constant in ideal SHM.",
        modelAnswer: [
          "In ideal SHM there is no energy loss to surroundings, so mechanical energy is conserved.",
          "As displacement and speed change, EK and EP interchange continuously, but their sum stays equal to total energy E.",
        ],
      },
      {
        id: "t17-2-st5",
        question:
          "If amplitude is tripled with m and ω unchanged, by what factor does total energy change?",
        modelAnswer: [
          "Because E is proportional to x₀², tripling amplitude gives E factor 3² = 9.",
          "Total energy becomes nine times larger.",
        ],
      },
    ],
  },

  "t17-3": {
    noteId: "t17-3",
    syllabusNotes: [
      {
        id: "damping-and-resistive-force",
        title: "Damping caused by resistive force",
        paragraphs: [
          "When a resistive force acts on an oscillating system, mechanical energy is transferred to surroundings (usually as thermal energy), so amplitude decreases with time. This is damping.",
          "Typical resistive effects include friction in mechanical systems and electrical resistance in oscillatory circuits.",
          "Damping does not usually remove oscillation immediately; it controls how quickly oscillation amplitude decays.",
        ],
      },
      {
        id: "light-critical-heavy-damping",
        title: "Light, critical and heavy damping",
        paragraphs: [
          "See the diagram and revision blocks below for displacement–time sketches of light, critical, and heavy damping.",
        ],
        blocks: [
          {
            type: "paragraph",
            text: "Light damping: oscillations continue with gradually decreasing amplitude (decaying sinusoidal envelope). Critical damping: returns to equilibrium in the shortest time without oscillating. Heavy (over) damping: returns without oscillating but more slowly than critical.",
          },
          {
            type: "diagram",
            title: "Displacement–time sketches: light, critical, and heavy damping",
            caption:
              "Light: oscillatory decay. Critical: fastest non-oscillatory return. Heavy: slower non-oscillatory return.",
            labels: [
              "light — oscillations with decreasing amplitude",
              "critical — no overshoot, minimum return time",
              "heavy — no overshoot, slower than critical",
            ],
          },
        ],
      },
      {
        id: "forced-oscillations",
        title: "Forced oscillations and natural frequency",
        paragraphs: [
          "A forced oscillation occurs when a periodic driving force makes a system oscillate at the driving frequency.",
          "Every oscillator also has a natural frequency, set by its own physical parameters, at which it tends to oscillate when displaced and released.",
          "With forcing present, steady-state behavior depends on relation between driving frequency and natural frequency, and on damping level.",
        ],
      },
      {
        id: "resonance",
        title: "Resonance as maximum-amplitude response",
        paragraphs: [
          "Resonance occurs when driving frequency equals natural frequency, giving maximum oscillation amplitude for a given driving strength.",
          "At resonance, energy transfer from driver to oscillator is most efficient, so amplitude rises strongly unless damping limits it.",
          "Greater damping reduces resonance peak amplitude and broadens the frequency range over which response is significant.",
        ],
      },
      {
        id: "applications-and-avoidance",
        title: "Useful and harmful resonance in practice",
        paragraphs: [
          "Useful resonance examples include tuning circuits and selected-frequency response in sensors and instruments.",
          "Potentially harmful resonance occurs in bridges, buildings, rotating machinery or vehicle components if periodic forcing matches natural frequency.",
          "Engineering control methods include increasing damping, changing stiffness or mass (thus changing natural frequency), and avoiding persistent forcing near resonance.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "In damping and resonance questions, Cambridge marks depend on correct classification of damping types and clear resonance conditions.",
      items: [
        "Defining resonance as any large oscillation without stating frequency match between driving and natural frequencies.",
        "Mixing critical and heavy damping by saying both are fastest return to equilibrium.",
        "Claiming damping always changes frequency only; the defining effect is energy loss and amplitude reduction.",
        "Drawing light damping as non-oscillatory return or drawing critical damping with overshoot.",
        "Assuming maximum amplitude always means no damping; resonance can occur with damping, but peak amplitude is reduced.",
      ],
    },
    workedExamples: [
      {
        id: "t17-3-ex1",
        title: "Classifying damping from displacement-time behavior",
        problem: [
          "Three systems are released from the same initial displacement: A oscillates with slowly decreasing amplitude, B returns to equilibrium without oscillating in minimum time, C returns without oscillating but takes longer than B. Classify A, B and C.",
        ],
        solution: [
          "System A shows oscillations with decaying amplitude, so it is light damping.",
          "System B returns quickest without overshoot, so it is critically damped.",
          "System C has no oscillation but slower return than critical, so it is heavily damped.",
        ],
      },
      {
        id: "t17-3-ex2",
        title: "Identifying resonance from frequency data",
        problem: [
          "A driven oscillator has natural frequency 2.8 Hz. It is forced at 2.0 Hz, 2.8 Hz and 3.6 Hz with same driving strength. At which driving frequency is amplitude greatest, and why?",
        ],
        solution: [
          "Greatest amplitude occurs at 2.8 Hz because resonance occurs when driving frequency equals natural frequency.",
          "At that condition, energy transfer per cycle into the oscillator is maximal, producing the largest steady-state amplitude (limited by damping).",
        ],
      },
      {
        id: "t17-3-ex3",
        title: "Effect of damping on resonance response",
        problem: [
          "Two identical forced oscillators are driven through a range of frequencies. Oscillator P has weak damping, oscillator Q has strong damping. Compare their resonance peaks.",
        ],
        solution: [
          "Oscillator P (weak damping) has a higher and narrower resonance peak.",
          "Oscillator Q (strong damping) has a lower and broader peak.",
          "Reason: stronger damping removes energy more rapidly, reducing maximum achievable amplitude and reducing sharpness of frequency selectivity.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t17-3-st1",
        question:
          "State what is meant by damping and identify the physical cause in terms of forces and energy.",
        modelAnswer: [
          "Damping is decrease of oscillation amplitude with time due to resistive forces acting on the system.",
          "These forces transfer mechanical energy from the oscillator to surroundings, usually as thermal energy.",
        ],
      },
      {
        id: "t17-3-st2",
        question:
          "Distinguish clearly between light, critical and heavy damping using displacement-time descriptions.",
        modelAnswer: [
          "Light damping: oscillatory motion continues with decaying amplitude; displacement–time graph shows a sine-like wave with an envelope that falls gradually to zero.",
          "Critical damping: no oscillation and no overshoot; displacement returns to zero in the shortest possible time for a non-oscillatory response.",
          "Heavy damping: no oscillation; displacement returns to zero more slowly than in the critical case (flatter, longer approach to equilibrium).",
        ],
      },
      {
        id: "t17-3-st3",
        question:
          "Define resonance for a forced oscillator.",
        modelAnswer: [
          "Resonance is the condition of maximum steady-state amplitude when driving frequency equals the system’s natural frequency.",
          "At resonance, energy transfer from driver to oscillator per cycle is most efficient, so amplitude is largest for a given driving strength (limited by damping).",
        ],
      },
      {
        id: "t17-3-st4",
        question:
          "A machine component has natural frequency 12 Hz. A periodic forcing source runs at 12 Hz and large oscillations appear. State two engineering actions that can reduce this resonance risk.",
        modelAnswer: [
          "Increase damping so oscillation amplitude at resonance is reduced.",
          "Change system natural frequency by altering stiffness or mass, or change forcing frequency so it is away from 12 Hz.",
        ],
      },
      {
        id: "t17-3-st5",
        question:
          "Why does stronger damping reduce the maximum amplitude of forced oscillation near resonance?",
        modelAnswer: [
          "Stronger damping increases energy loss from the oscillator each cycle.",
          "So even at frequency match, less net energy builds up in oscillation, giving a smaller maximum steady-state amplitude.",
        ],
      },
    ],
  },
};
