import type { NoteDraft } from "./types";

/** Full teaching notes for 9702 Topic 8 — subtopics 8.1–8.4 (see lib/notes/AUTHORING.md). */
export const PHYSICS_TOPIC8_DRAFTS: Record<string, NoteDraft> = {
  "t8-1": {
    noteId: "t8-1",
    syllabusNotes: [
      {
        id: "superposition-principle",
        title: "The principle of superposition",
        paragraphs: [
          "The principle of superposition states that when two or more waves overlap at a point, the resultant displacement is the vector sum of the individual displacements at that point. For waves on a string and sound waves in air, this sum is usually treated with sign: upward or one phase direction positive, downward or opposite phase direction negative.",
          "Superposition applies instant by instant. You do not add amplitudes once and keep that value forever. At one instant two displacements may add constructively, and a fraction of a period later they may cancel partly or completely.",
          "A stationary wave is a direct consequence of superposition: it forms when two progressive waves of equal frequency, equal amplitude and equal speed travel along the same line in opposite directions. In school experiments one wave is usually the incident wave and the other is the reflected wave.",
        ],
      },
      {
        id: "formation-nodes-antinodes",
        title: "Graphical formation of stationary waves, nodes and antinodes",
        paragraphs: [
          "To explain formation graphically, draw two equal sinusoidal waves moving in opposite directions and add their displacements at several positions. You find fixed points with permanent zero displacement and points with maximum possible displacement.",
          "A node is a point of permanent zero displacement because the two component waves are always in antiphase there, giving cancellation at all times. An antinode is a point where the oscillation amplitude is maximum because the component waves arrive in phase there.",
          "All points between a pair of adjacent nodes oscillate in phase with each other, while neighboring sections separated by a node oscillate in antiphase. This phase pattern is a common qualitative mark point in Cambridge questions.",
          "In a stationary wave, there is no net energy transfer along the medium. Energy moves locally between kinetic and potential forms within each loop, unlike a progressive wave where energy is transmitted along the direction of travel.",
        ],
      },
      {
        id: "spatial-separation",
        title: "Determining wavelength from node and antinode positions",
        paragraphs: [
          "Adjacent nodes are separated by half a wavelength, λ/2. Adjacent antinodes are also separated by λ/2. A node to its nearest antinode is separated by λ/4.",
          "Therefore wavelength can be found from position data. If distance between two neighboring nodes is x, then λ = 2x. If distance spans several loops, divide first: for n loop-spacings between nodes, total length L = n(λ/2), so λ = 2L/n.",
          "In practical work, measuring across many intervals and averaging reduces percentage uncertainty. For example, if ten node gaps occupy 0.84 m, one gap is 0.084 m and λ is 0.168 m.",
        ],
      },
      {
        id: "experiments-microwaves-strings-air",
        title: "Stationary-wave experiments with microwaves, stretched strings and air columns",
        paragraphs: [
          "Microwaves: a transmitter and reflecting metal plate produce incident and reflected microwaves. Moving a detector probe along the line shows alternating maxima and minima in received intensity. Minima correspond to nodes (electric field minimum), maxima to antinodes. Spacing between adjacent minima is λ/2.",
          "Stretched string: a vibrator drives one end of a string, with the other end fixed or via a pulley arrangement. At resonance, a clear pattern of loops forms. Fixed ends are nodes. If string length is L and n loops are visible, L = n(λ/2). Combining with v = f λ gives wave speed.",
          "Air columns: a loudspeaker or tuning fork excites standing sound waves in a tube. Displacement nodes and antinodes depend on open or closed ends. For a tube closed at one end, the closed end is displacement node and open end is displacement antinode. Successive resonant lengths differ by λ/2 when end correction is neglected, as assumed in this syllabus.",
          "Across all three experiments, the same ideas are tested: clear identification of node/antinode positions, use of spacing relations, and connection to wave speed through v = f λ.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Stationary-wave questions reward exact language about superposition, phase and spacing. Examiners penalise vague statements that mix progressive-wave properties into stationary-wave descriptions.",
      items: [
        "Defining a node as a point where particles do not move because no wave reaches there. The correct reason is persistent destructive superposition of two opposing waves.",
        "Stating node-to-node spacing is one wavelength. It is half a wavelength.",
        "Saying all points on a stationary wave are in phase. Only points within one loop are in phase; adjacent loops are in antiphase.",
        "Claiming energy is carried along the string by a stationary wave. There is no net energy transfer along the medium.",
        "Using open-end and closed-end conditions incorrectly in air-column questions, especially swapping node and antinode at the tube ends.",
        "Reading minima-to-maxima spacing as λ/2 in microwave detector traces. It is λ/4 for nearest minimum-to-maximum.",
      ],
    },
    workedExamples: [
      {
        id: "t8-1-ex1",
        title: "Wavelength from node spacing on a string",
        problem: [
          "A stationary wave on a stretched string has adjacent nodes 0.125 m apart. The driving frequency is 64.0 Hz. Determine (a) the wavelength and (b) the wave speed on the string.",
        ],
        solution: [
          "Adjacent nodes are separated by λ/2, so λ = 2 x 0.125 = 0.250 m.",
          "Use v = f λ. Hence v = 64.0 x 0.250 = 16.0 m s⁻¹.",
          "Therefore the wavelength is 0.250 m and the wave speed is 16.0 m s⁻¹.",
        ],
      },
      {
        id: "t8-1-ex2",
        title: "Resonance pattern on a fixed-length string",
        problem: [
          "A string fixed at both ends has vibrating length 0.90 m and forms 6 loops at resonance. Calculate the wavelength and the frequency if wave speed is 108 m s⁻¹.",
        ],
        solution: [
          "For a string with nodes at both ends, each loop is half a wavelength. So L = n(λ/2).",
          "Hence 0.90 = 6(λ/2) = 3λ, giving λ = 0.30 m.",
          "Then f = v/λ = 108/0.30 = 360 Hz.",
          "So the resonant pattern corresponds to wavelength 0.30 m and frequency 360 Hz.",
        ],
      },
      {
        id: "t8-1-ex3",
        title: "Air-column resonance difference method",
        problem: [
          "In a tube closed at one end, two successive resonance lengths are 0.19 m and 0.47 m. Assume end correction negligible. Find the wavelength and frequency of the sound if speed of sound is 340 m s⁻¹.",
        ],
        solution: [
          "For successive resonances in this setup, length difference equals λ/2.",
          "So delta L = 0.47 - 0.19 = 0.28 m = λ/2, giving λ = 0.56 m.",
          "Frequency f = v/λ = 340/0.56 = 607 Hz, which is 6.1 x 10² Hz to two significant figures.",
          "Hence wavelength is 0.56 m and frequency is about 610 Hz.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t8-1-st1",
        question: "State the principle of superposition for two overlapping waves.",
        modelAnswer: [
          "When waves overlap, the resultant displacement at any point is the vector sum (signed sum in one dimension) of the individual displacements at that point and at that instant.",
        ],
      },
      {
        id: "t8-1-st2",
        question:
          "Define a node and an antinode in a stationary wave, and state their nearest-neighbor spacing relations in terms of wavelength.",
        modelAnswer: [
          "A node is a point of permanent zero displacement. An antinode is a point of maximum oscillation amplitude.",
          "Adjacent nodes are λ/2 apart, adjacent antinodes are λ/2 apart, and nearest node-to-antinode spacing is λ/4.",
        ],
      },
      {
        id: "t8-1-st3",
        question:
          "Explain why a stationary wave does not transfer net energy along the medium, even though particles are oscillating.",
        modelAnswer: [
          "The pattern comes from two equal opposite progressive waves. Energy flows in opposite directions and averages to zero net transfer.",
          "Particles still oscillate and exchange kinetic and potential energy locally within each loop.",
        ],
      },
      {
        id: "t8-1-st4",
        question:
          "A microwave detector finds adjacent minima 1.8 cm apart in a standing-wave setup. Calculate the microwave wavelength.",
        modelAnswer: [
          "Adjacent minima correspond to adjacent nodes, separated by λ/2.",
          "So λ = 2 x 1.8 cm = 3.6 cm = 3.6 x 10⁻² m.",
        ],
      },
      {
        id: "t8-1-st5",
        question:
          "In a string experiment, fixed endpoints are always nodes. Give one physical reason for this boundary condition.",
        modelAnswer: [
          "At a fixed end the medium cannot move, so displacement is constrained to zero at all times.",
          "That permanent zero-displacement point is therefore a node.",
        ],
      },
    ],
  },

  "t8-2": {
    noteId: "t8-2",
    syllabusNotes: [
      {
        id: "meaning-of-diffraction",
        title: "What diffraction means",
        paragraphs: [
          "Diffraction is the spreading of a wave as it passes through a gap or around an obstacle. The effect is strongest when the gap size or obstacle size is of the same order as the wavelength.",
          "Diffraction does not require a change of medium. Refraction is bending due to speed change between media, while diffraction is geometric spreading due to finite aperture or edge effects.",
          "A useful wavefront view is that each point across the gap acts as a source of secondary wavelets. Their superposition gives a curved transmitted wavefront, showing spread into the region beyond the gap.",
        ],
      },
      {
        id: "gap-wavelength-relationship",
        title: "Effect of gap width relative to wavelength",
        paragraphs: [
          "If gap width a is much larger than wavelength λ, diffraction is small and the wave continues mainly straight ahead.",
          "If gap width is comparable to wavelength, diffraction is strong and clear spreading occurs.",
          "If gap width is smaller than wavelength, spreading is very wide and transmitted amplitude may be reduced because less incident wave energy passes through the small opening.",
          "In exam language, you should compare a and λ explicitly. Statements such as narrower gap gives more diffraction are incomplete unless linked to wavelength scale.",
        ],
      },
      {
        id: "ripple-tank-experiment",
        title: "Diffraction experiments such as ripple-tank demonstrations",
        paragraphs: [
          "In a ripple tank, straight wavefronts are directed at an adjustable slit barrier. You observe the transmitted wavefront pattern for different slit widths while keeping frequency and water depth fixed.",
          "When the slit is wide, transmitted fronts remain nearly straight. As the slit is narrowed to a few wavelengths, fronts become semicircular and spread significantly.",
          "To isolate the variable fairly, keep wavelength constant by keeping vibrator frequency and water depth constant. Then any change in spreading is due to slit width change.",
          "The same qualitative behavior appears with sound at doorways, radio waves around buildings, and light at narrow apertures, but ripple tanks make the geometry visible directly.",
        ],
      },
      {
        id: "applications-limitations",
        title: "Using diffraction ideas across different waves",
        paragraphs: [
          "Long-wavelength radio waves diffract more around hills and buildings than short-wavelength microwaves, so they can provide coverage behind obstacles more effectively.",
          "Low-frequency sounds (longer wavelength) bend around doors and corners more strongly than high-frequency sounds.",
          "For visible light, wavelength is very small, so everyday openings are usually very large compared with λ and diffraction is subtle unless apertures are very narrow.",
          "Qualitative diffraction arguments should always identify both geometry and wavelength scale. This is what Cambridge mark schemes usually look for in explanation questions.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Diffraction answers are often brief but must be precise. Examiners look for explicit comparison of gap width and wavelength, not generic statements about waves bending.",
      items: [
        "Defining diffraction as reflection from the edges of a slit. Diffraction is spreading due to superposition of wavelets, not edge reflection.",
        "Confusing diffraction with refraction and stating that speed change in the same medium causes the spreading.",
        "Writing narrower gap means more diffraction without mentioning relative size to wavelength.",
        "Using ripple-tank evidence while changing both frequency and slit width, making the conclusion invalid.",
        "Claiming diffraction occurs only for light or only for water waves; it is a general wave phenomenon.",
      ],
    },
    workedExamples: [
      {
        id: "t8-2-ex1",
        title: "Ranking diffraction strength by a/λ ratio",
        problem: [
          "Three wave setups have slit width to wavelength ratios a/λ of 8, 2 and 0.7. Rank them from weakest to strongest diffraction and justify qualitatively.",
        ],
        solution: [
          "Diffraction is weakest when a is much larger than λ and strongest when a is closest to or smaller than λ.",
          "So weakest is a/λ = 8, then a/λ = 2, and strongest is a/λ = 0.7.",
          "Reason: decreasing a/λ increases angular spread of transmitted wavefronts.",
        ],
      },
      {
        id: "t8-2-ex2",
        title: "Comparing sound frequencies at a doorway",
        problem: [
          "Two sounds pass through the same doorway: 250 Hz and 2000 Hz. Take speed of sound as 340 m s⁻¹. Which diffracts more and why?",
        ],
        solution: [
          "Calculate wavelengths: at 250 Hz, λ = 340/250 = 1.36 m; at 2000 Hz, λ = 340/2000 = 0.170 m.",
          "With the same doorway width, larger wavelength means smaller a/λ and therefore stronger diffraction.",
          "Hence 250 Hz sound diffracts more strongly than 2000 Hz sound.",
        ],
      },
      {
        id: "t8-2-ex3",
        title: "Designing a fair ripple-tank test",
        problem: [
          "A student wants to show that reducing slit width increases diffraction in a ripple tank. State a valid method using controlled variables and expected observations.",
        ],
        solution: [
          "Set a fixed vibrator frequency and fixed water depth so wavelength remains constant. Produce straight incident wavefronts toward a barrier with adjustable slit.",
          "Use at least two slit widths, one much larger than λ and one close to λ, while keeping amplitude similar.",
          "Observe and sketch transmitted fronts: wide slit gives nearly straight fronts; narrow slit gives noticeably curved, spreading fronts.",
          "This controlled comparison links increased spreading directly to reduced slit width at constant wavelength.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t8-2-st1",
        question: "Define diffraction in one examination-quality sentence.",
        modelAnswer: [
          "Diffraction is the spreading of a wave as it passes through a gap or around an obstacle, most pronounced when the gap or obstacle size is comparable to the wavelength.",
        ],
      },
      {
        id: "t8-2-st2",
        question:
          "A water wave has wavelength 2.5 cm. Compare qualitatively the diffraction for slit widths 15 cm and 3.0 cm.",
        modelAnswer: [
          "For 15 cm, a is much greater than λ (about 6λ), so diffraction is relatively weak.",
          "For 3.0 cm, a is close to λ (about 1.2λ), so diffraction is much stronger with greater spreading.",
        ],
      },
      {
        id: "t8-2-st3",
        question:
          "Explain why lower-frequency radio waves are often received in places where higher-frequency waves from the same transmitter are blocked.",
        modelAnswer: [
          "Lower-frequency waves have longer wavelength, so for the same obstacle size they diffract more.",
          "Greater diffraction allows them to bend around obstacles and reach shadow regions more effectively.",
        ],
      },
      {
        id: "t8-2-st4",
        question:
          "State one key difference between diffraction and refraction in terms of what causes each effect.",
        modelAnswer: [
          "Diffraction is spreading caused by aperture or edge geometry relative to wavelength, while refraction is direction change caused by wave-speed change between media.",
        ],
      },
      {
        id: "t8-2-st5",
        question:
          "In a ripple-tank diffraction experiment, name two variables that should be kept constant to make a fair test when slit width is changed.",
        modelAnswer: [
          "Keep wave frequency constant and keep water depth constant so wavelength stays the same.",
          "Also keep incident wave direction and source amplitude as constant as practical.",
        ],
      },
    ],
  },

  "t8-3": {
    noteId: "t8-3",
    syllabusNotes: [
      {
        id: "interference-and-coherence",
        title: "Interference and coherence",
        paragraphs: [
          "Interference is the pattern formed when waves superpose, giving regions of reinforcement (constructive interference) and cancellation (destructive interference).",
          "For sustained, stable fringes, the sources must be coherent: they must have the same frequency and maintain a constant phase difference.",
          "If phase difference drifts randomly, maxima and minima shift rapidly and the visible or measurable pattern averages out.",
        ],
      },
      {
        id: "two-source-experiments",
        title: "Two-source interference experiments with ripple tank, sound, light and microwaves",
        paragraphs: [
          "Ripple tank: two in-phase dippers generate circular waves. The overlap region shows nodal lines (destructive interference) and antinodal lines (constructive interference).",
          "Sound: two loudspeakers driven by the same signal generator act as coherent sources. Moving a microphone along a line gives alternating loud and quiet points.",
          "Light: Young double-slit setup uses one monochromatic source illuminating two narrow slits, which then act as coherent sources. A screen shows bright and dark fringes.",
          "Microwaves: two coherent microwave sources or a split source arrangement gives maxima and minima detected by a probe as position changes.",
          "Across all experiments, the same condition is tested: fixed phase relation and same frequency produce stable interference structure.",
        ],
      },
      {
        id: "conditions-for-fringes",
        title: "Conditions required to observe two-source interference fringes",
        paragraphs: [
          "Sources must be coherent and of the same frequency. For light, this is usually achieved by splitting one source into two paths or slits rather than using two independent lamps.",
          "The waves should have similar amplitudes so minima are clearly dark and maxima clearly bright. Large amplitude mismatch reduces fringe visibility.",
          "The geometry should allow overlap at the observation region, and path differences should be within coherence length so phase relation is maintained.",
          "For light fringes, monochromatic illumination is normally required for a clear regular pattern. White light gives a limited central fringe and colored side fringes with rapid loss of contrast.",
        ],
      },
      {
        id: "double-slit-equation",
        title: "Using λ = ax/D for double-slit interference",
        paragraphs: [
          "For the Young double-slit arrangement, λ = ax/D where a is slit separation, x is fringe spacing on the screen, and D is distance from slits to screen.",
          "This relation comes from path difference geometry for small angles: for adjacent bright fringes, path difference changes by one wavelength. The small-angle approximation requires D much larger than a and x.",
          "Rearrangements are common: x = λD/a, a = λD/x, or D = ax/λ. Keep units consistent, normally in metres, before substitution.",
          "When using measured positions of several fringes, calculate x from total span divided by number of fringe spacings to reduce random percentage error.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Interference marks are often lost through weak definitions and unclear conditions. Examiners expect the coherence requirement to be explicit and the double-slit formula variables to be identified correctly.",
      items: [
        "Defining coherence as equal amplitude only. The essential condition is constant phase difference with same frequency.",
        "Using two independent light bulbs as coherent sources in explanations.",
        "Confusing slit separation a with fringe spacing x in λ = ax/D substitutions.",
        "Applying λ = ax/D with mixed units such as a in mm and D in m without conversion.",
        "Calling every minimum fully dark when source amplitudes are not equal; in unequal-amplitude cases minima are not zero intensity.",
        "Using the formula outside small-angle setup without checking that screen distance is much larger than slit separation.",
      ],
    },
    workedExamples: [
      {
        id: "t8-3-ex1",
        title: "Find wavelength from fringe data",
        problem: [
          "In a double-slit experiment, slit separation is 0.30 mm and screen distance is 1.80 m. The distance across 10 fringe spacings is 24.0 mm. Calculate the wavelength of the light.",
        ],
        solution: [
          "First find fringe spacing x = 24.0 mm / 10 = 2.40 mm = 2.40 x 10⁻³ m.",
          "Convert slit separation: a = 0.30 mm = 3.0 x 10⁻⁴ m. Use λ = ax/D.",
          "λ = (3.0 x 10⁻⁴)(2.40 x 10⁻³)/1.80 = 4.0 x 10⁻⁷ m.",
          "Therefore wavelength is 4.0 x 10⁻⁷ m, which is 400 nm.",
        ],
      },
      {
        id: "t8-3-ex2",
        title: "Determine slit separation",
        problem: [
          "A monochromatic source of wavelength 632.8 nm produces fringe spacing 1.50 mm on a screen 2.00 m from a double slit. Find slit separation.",
        ],
        solution: [
          "Rearrange formula: a = λD/x.",
          "Use SI units: λ = 632.8 nm = 6.328 x 10⁻⁷ m, x = 1.50 mm = 1.50 x 10⁻³ m, D = 2.00 m.",
          "a = (6.328 x 10⁻⁷ x 2.00)/(1.50 x 10⁻³) = 8.44 x 10⁻⁴ m.",
          "So slit separation is 8.44 x 10⁻⁴ m, or 0.844 mm.",
        ],
      },
      {
        id: "t8-3-ex3",
        title: "Qualitative interference with sound sources",
        problem: [
          "Two loudspeakers are driven by the same signal generator and emit 1.0 kHz sound in phase. A student walking across the overlap region hears alternating loud and quiet points. Explain this observation using interference and coherence language.",
        ],
        solution: [
          "Because both speakers are driven by the same generator, they are coherent sources with the same frequency and a fixed phase relation.",
          "At positions where path difference from the two speakers is an integer multiple of wavelength, waves arrive in phase and interfere constructively, giving loud points.",
          "Where path difference is an odd half-integer multiple of wavelength, waves arrive in antiphase and interfere destructively, giving quiet points.",
          "Alternating path-difference conditions across space therefore produce alternating loud and quiet regions.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t8-3-st1",
        question: "Define coherence for two wave sources in the context of interference experiments.",
        modelAnswer: [
          "Two sources are coherent if they emit waves of the same frequency and maintain a constant phase difference over time.",
        ],
      },
      {
        id: "t8-3-st2",
        question:
          "State the path-difference conditions for constructive and destructive interference between two coherent sources.",
        modelAnswer: [
          "Constructive interference occurs when path difference is nλ, where n is an integer.",
          "Destructive interference occurs when path difference is (n + 1/2)λ.",
        ],
      },
      {
        id: "t8-3-st3",
        question:
          "A double slit has a = 0.25 mm and D = 1.2 m. Light of wavelength 500 nm is used. Calculate fringe spacing x.",
        modelAnswer: [
          "Use x = λD/a.",
          "λ = 500 nm = 5.0 x 10⁻⁷ m, a = 0.25 mm = 2.5 x 10⁻⁴ m.",
          "x = (5.0 x 10⁻⁷ x 1.2)/(2.5 x 10⁻⁴) = 2.4 x 10⁻³ m = 2.4 mm.",
        ],
      },
      {
        id: "t8-3-st4",
        question:
          "Explain why two independent filament lamps do not normally produce a stable double-source interference pattern.",
        modelAnswer: [
          "They are not coherent: each lamp emits many atoms radiating independently, so phase relation between the two lamps changes randomly.",
          "Without constant phase difference, maxima and minima move rapidly and no stable fringe pattern is observed.",
        ],
      },
      {
        id: "t8-3-st5",
        question:
          "In an experiment, replacing a monochromatic light source with white light changes the fringe pattern. State one expected change and explain briefly.",
        modelAnswer: [
          "Fringes become colored and less distinct away from the center.",
          "Different wavelengths in white light have different fringe spacings, so their patterns overlap and blur except near the central region.",
        ],
      },
    ],
  },

  "t8-4": {
    noteId: "t8-4",
    syllabusNotes: [
      {
        id: "grating-equation",
        title: "Using d sin θ = nλ",
        paragraphs: [
          "For a diffraction grating, principal maxima occur when d sin θ = nλ. Here d is grating spacing (distance between adjacent slits), θ is diffraction angle from the normal, n is order number (0, 1, 2, ...), and λ is wavelength.",
          "Order n = 0 gives the central maximum at θ = 0. Higher orders appear symmetrically on both sides for monochromatic light.",
          "The equation is a path-difference condition: adjacent slits contribute waves with path difference d sin θ. Constructive interference occurs when this equals an integer multiple of λ.",
          "Physical limit: sin θ cannot exceed 1, so highest observable order satisfies nλ <= d.",
        ],
      },
      {
        id: "grating-structure-advantages",
        title: "Understanding diffraction gratings in wavelength work",
        paragraphs: [
          "A diffraction grating has a very large number of equally spaced slits per metre. Because many slits interfere, principal maxima are narrow and sharp, giving high angular resolution for wavelength measurements.",
          "Compared with a double slit, a grating gives better precision because maxima are better defined and can be measured at larger angles for the same wavelength range.",
          "Manufacturers often specify line density, for example 600 lines per mm. Convert to spacing by d = 1/N, with N in lines per metre.",
        ],
      },
      {
        id: "determining-wavelength",
        title: "Using a diffraction grating to determine wavelength of light",
        paragraphs: [
          "Typical method uses monochromatic light incident normally on a grating. Measure the angle θ to a chosen order maximum on one side, or better measure both +n and -n and average to reduce alignment error.",
          "Calculate spacing d from grating line density. Then substitute into λ = d sin θ / n.",
          "Higher orders can improve percentage precision because θ is larger, but very high orders may be weak or absent due to the nλ <= d condition.",
          "The syllabus does not require spectrometer structure details, but it does require clear method logic: identify order, measure angle correctly from normal, convert d correctly, and compute λ with SI units.",
        ],
      },
      {
        id: "multi-wavelength-patterns",
        title: "Interpreting grating spectra and order limits",
        paragraphs: [
          "With multiple wavelengths (such as white light), each order spreads into a spectrum: shorter wavelengths at smaller θ, longer wavelengths at larger θ.",
          "Second-order spectra can overlap with first-order spectra of other wavelengths. In practical interpretation, ensure the chosen line and order are correctly identified.",
          "For fixed d, larger wavelength gives larger sin θ for the same order. This directional trend is frequently tested in qualitative questions.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Grating questions are high-scoring when setup and unit conversion are careful. Most mark losses come from misreading angles or incorrect conversion from line density to spacing.",
      items: [
        "Using d as line density directly instead of spacing between slits. Must use d = 1/N.",
        "Substituting angle from grating plane rather than from the normal in d sin θ = nλ.",
        "Forgetting order number n, especially when using second-order maxima.",
        "Mixing mm⁻¹ and m⁻¹ without conversion when finding d.",
        "Calculating an order that violates nλ <= d and not checking physical validity.",
        "Using only one side angle when symmetric +n and -n data are provided for averaging.",
      ],
    },
    workedExamples: [
      {
        id: "t8-4-ex1",
        title: "Wavelength from first-order grating angle",
        problem: [
          "A grating has 500 lines per mm. Monochromatic light gives a first-order maximum at 18.2 degrees from the normal. Find the wavelength.",
        ],
        solution: [
          "Convert line density: N = 500 mm⁻¹ = 5.00 x 10⁵ m⁻¹, so spacing d = 1/N = 2.00 x 10⁻⁶ m.",
          "Use d sin θ = nλ with n = 1 and θ = 18.2 degrees.",
          "λ = d sin θ = 2.00 x 10⁻⁶ x sin 18.2 degrees = 6.24 x 10⁻⁷ m.",
          "Hence wavelength is 6.24 x 10⁻⁷ m, or 624 nm.",
        ],
      },
      {
        id: "t8-4-ex2",
        title: "Maximum observable order",
        problem: [
          "A grating has spacing d = 1.67 x 10⁻⁶ m and is used with light of wavelength 589 nm. Determine the highest observable order.",
        ],
        solution: [
          "Use condition nλ <= d, so n <= d/λ.",
          "d/λ = (1.67 x 10⁻⁶)/(5.89 x 10⁻⁷) = 2.83.",
          "Maximum integer order is therefore n = 2.",
          "So second order is highest observable; third order is not possible because it would require sin θ > 1.",
        ],
      },
      {
        id: "t8-4-ex3",
        title: "Using symmetric angle measurements",
        problem: [
          "For a grating of 300 lines per mm, second-order maxima are observed at +27.6 degrees and -27.2 degrees. Determine the wavelength using the mean angle.",
        ],
        solution: [
          "Take mean magnitude angle θ = (27.6 + 27.2)/2 = 27.4 degrees.",
          "Convert density: N = 300 mm⁻¹ = 3.00 x 10⁵ m⁻¹, so d = 1/N = 3.33 x 10⁻⁶ m.",
          "Use λ = d sin θ / n with n = 2.",
          "λ = (3.33 x 10⁻⁶ x sin 27.4 degrees)/2 = 7.66 x 10⁻⁷ m.",
          "Wavelength is 7.66 x 10⁻⁷ m, about 766 nm.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t8-4-st1",
        question: "State the diffraction grating equation and define each symbol.",
        modelAnswer: [
          "The equation is d sin θ = nλ.",
          "d is slit spacing, θ is angle of the principal maximum from the normal, n is order number, and λ is wavelength.",
        ],
      },
      {
        id: "t8-4-st2",
        question:
          "A grating has 1200 lines per mm. Calculate slit spacing d in metres.",
        modelAnswer: [
          "N = 1200 mm⁻¹ = 1.20 x 10⁶ m⁻¹.",
          "d = 1/N = 8.33 x 10⁻⁷ m.",
        ],
      },
      {
        id: "t8-4-st3",
        question:
          "For d = 2.5 x 10⁻⁶ m and λ = 500 nm, calculate the first-order diffraction angle.",
        modelAnswer: [
          "Use sin θ = nλ/d = (1 x 5.00 x 10⁻⁷)/(2.5 x 10⁻⁶) = 0.200.",
          "θ = sin⁻¹(0.200) = 11.5 degrees.",
        ],
      },
      {
        id: "t8-4-st4",
        question:
          "Explain one reason diffraction gratings usually give more precise wavelength measurements than a simple double slit.",
        modelAnswer: [
          "A grating has many slits, producing very sharp principal maxima with clearer angular positions.",
          "Sharper maxima reduce uncertainty in angle measurement and improve wavelength precision.",
        ],
      },
      {
        id: "t8-4-st5",
        question:
          "Why might a fourth-order maximum be absent even if lower orders are visible?",
        modelAnswer: [
          "Because the grating condition requires nλ <= d.",
          "If n is too large for given d and λ, sin θ would be greater than 1, which is impossible, so that order cannot occur.",
        ],
      },
    ],
  },
};
