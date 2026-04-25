import type { NoteDraft } from "./types";

/** Full teaching notes for 9702 Topic 7 - subtopics 7.1-7.5 (see lib/notes/AUTHORING.md). */
export const PHYSICS_TOPIC7_DRAFTS: Record<string, NoteDraft> = {
  "t7-1": {
    noteId: "t7-1",
    syllabusNotes: [
      {
        id: "wave-motion-meaning",
        title: "What progressive wave motion means",
        paragraphs: [
          "A progressive wave is a travelling disturbance that transfers energy from one place to another without overall transfer of matter. Individual particles of the medium oscillate about equilibrium positions, but the disturbance pattern moves through the medium.",
          "Rope, spring and ripple-tank demonstrations show this clearly. A pulse sent along a rope makes sections of rope move up and down while the pulse travels horizontally. In a spring, compressions and rarefactions move along the spring while each coil vibrates about a fixed mean position.",
          "The key Cambridge point is to separate particle motion from wave propagation. If a particle in the medium moves only a small distance about equilibrium while energy moves much further through the medium, the phenomenon is wave motion rather than bulk flow of substance.",
        ],
      },
      {
        id: "core-wave-terms",
        title: "Core terms: displacement, amplitude, phase, period, frequency, wavelength and speed",
        paragraphs: [
          "Displacement is the instantaneous distance and direction of a vibrating particle from its equilibrium position. On a displacement graph, positive and negative values show opposite directions from equilibrium.",
          "Amplitude is the maximum magnitude of displacement. It is always positive as a magnitude. Period T is the time for one complete oscillation, and frequency f is number of complete oscillations per second, so f = 1/T.",
          "Wavelength λ is the distance between two successive points in phase, such as crest-to-crest on a transverse wave or compression-to-compression on a longitudinal wave. Phase difference describes how far two oscillations are out of step; one complete cycle corresponds to 360 degrees or 2 pi rad.",
          "Wave speed v is the speed at which a constant phase point travels, for example the crest position. Do not confuse this with instantaneous particle speed in the medium; they are usually different quantities.",
        ],
      },
      {
        id: "cro-usage",
        title: "Using a CRO time-base and y-gain to measure frequency and amplitude",
        paragraphs: [
          "On a cathode-ray oscilloscope, the horizontal axis is controlled by time-base setting, usually in s per division. The vertical axis is controlled by y-gain (volts per division).",
          "To find frequency from a periodic trace, measure one full cycle length in horizontal divisions, multiply by time-base to get period T, then use f = 1/T.",
          "To find amplitude of a voltage signal, measure peak displacement from centre line in vertical divisions and multiply by y-gain. If peak-to-peak value is measured, amplitude is half of peak-to-peak.",
          "A stable trace requires suitable trigger and time-base settings so one cycle shape can be measured reliably. Examination questions usually provide a clear trace scale and expect correct reading of divisions.",
        ],
      },
      {
        id: "wave-equation-derivation",
        title: "Deriving and using v = f λ",
        paragraphs: [
          "In one period T, a progressive wave advances by one wavelength λ. Therefore wave speed is distance travelled per period: v = λ / T.",
          "Since f = 1/T, substitute into v = λ / T to obtain v = f λ. This relation links spatial periodicity (λ) and temporal periodicity (f) to propagation speed v.",
          "For a given medium, wave speed is set by medium properties and may be treated as constant under fixed conditions, so changing source frequency changes wavelength accordingly. In many questions, if frequency increases while speed is unchanged, wavelength decreases.",
        ],
      },
      {
        id: "energy-and-intensity",
        title: "Energy transfer by waves and intensity relations",
        paragraphs: [
          "A progressive wave transfers energy. In mechanical waves this transfer is carried through interactions between neighbouring particles. In electromagnetic waves, energy is carried by the fields.",
          "Intensity I is power transferred per unit area normal to propagation direction: I = P/A, unit W m⁻².",
          "For a progressive wave in a fixed medium and fixed frequency conditions, intensity is proportional to amplitude squared: I proportional to A². Therefore doubling amplitude gives four times intensity.",
          "This amplitude-squared law is a common exam target. Candidates should apply proportional reasoning correctly rather than using direct proportionality to amplitude.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Examiners reward precise wave language and correct distinction between oscillating particles and travelling disturbance. Marks are commonly lost by mixing definitions or applying the intensity rule incorrectly.",
      items: [
        "Defining wavelength as distance travelled by the wave in one second. Correct definition is distance between nearest points in phase.",
        "Confusing frequency and wave speed when using v = f λ, then treating f as a speed unit quantity.",
        "Using whole peak-to-peak height as amplitude on CRO traces without halving.",
        "Assuming particles in the medium move with the wave over long distances. In progressive waves they oscillate about equilibrium.",
        "Applying intensity proportional to amplitude instead of intensity proportional to amplitude squared.",
        "Failing to convert CRO time-base units consistently, for example ms per division used as s per division.",
      ],
    },
    workedExamples: [
      {
        id: "t7-1-ex1",
        title: "Using v = f λ for an ultrasound wave",
        problem: [
          "A wave has frequency 4.0 x 10⁴ Hz and wavelength 8.5 x 10⁻³ m. Calculate its speed.",
        ],
        solution: [
          "Use v = f λ.",
          "v = (4.0 x 10⁴)(8.5 x 10⁻³) = 3.4 x 10² m s⁻¹.",
          "So wave speed is 340 m s⁻¹ (2 s.f.).",
        ],
      },
      {
        id: "t7-1-ex2",
        title: "Reading frequency and amplitude from CRO settings",
        problem: [
          "A sinusoidal trace spans 5.0 horizontal divisions per cycle at a time-base of 0.20 ms div⁻¹. The peak is 2.5 vertical divisions above centre at y-gain 0.40 V div⁻¹. Find (a) frequency and (b) amplitude.",
        ],
        solution: [
          "Period T = (5.0 divisions)(0.20 ms div⁻¹) = 1.0 ms = 1.0 x 10⁻³ s.",
          "Frequency f = 1/T = 1/(1.0 x 10⁻³) = 1.0 x 10³ Hz.",
          "Amplitude = (2.5 divisions)(0.40 V div⁻¹) = 1.0 V.",
          "Hence f = 1.0 kHz and amplitude = 1.0 V.",
        ],
      },
      {
        id: "t7-1-ex3",
        title: "Intensity change from amplitude ratio",
        problem: [
          "At one position in a medium, wave amplitude changes from 3.0 mm to 7.5 mm while frequency and medium stay the same. Determine the factor change in intensity.",
        ],
        solution: [
          "Use I proportional to A², so I2/I1 = (A2/A1)².",
          "A2/A1 = 7.5/3.0 = 2.5.",
          "Therefore I2/I1 = 2.5² = 6.25.",
          "Intensity becomes 6.25 times the original value.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t7-1-st1",
        question:
          "State what is meant by a progressive wave and explain why this does not imply net transfer of matter.",
        modelAnswer: [
          "A progressive wave is a travelling disturbance that transfers energy from one place to another.",
          "Particles of the medium oscillate about equilibrium positions, so they have no overall drift with the wave. Energy is transferred without net transport of matter.",
        ],
      },
      {
        id: "t7-1-st2",
        question:
          "Define displacement, amplitude, period and wavelength for a sinusoidal wave.",
        modelAnswer: [
          "Displacement is the instantaneous distance and direction of a vibrating particle from equilibrium.",
          "Amplitude is the maximum magnitude of displacement.",
          "Period is time for one complete oscillation.",
          "Wavelength is the distance between adjacent points in phase (for example crest to crest).",
        ],
      },
      {
        id: "t7-1-st3",
        question:
          "A wave travels at 24 m s⁻¹ with frequency 15 Hz. Calculate wavelength.",
        modelAnswer: [
          "Use λ = v/f.",
          "λ = 24/15 = 1.6 m.",
        ],
      },
      {
        id: "t7-1-st4",
        question:
          "A CRO trace shows one cycle over 4 divisions with time-base 0.50 ms div⁻¹. Find the signal frequency.",
        modelAnswer: [
          "Period T = 4 x 0.50 ms = 2.0 ms = 2.0 x 10⁻³ s.",
          "f = 1/T = 1/(2.0 x 10⁻³) = 5.0 x 10² Hz.",
          "Frequency is 500 Hz.",
        ],
      },
      {
        id: "t7-1-st5",
        question:
          "Intensity at point X is 18 W m⁻² when amplitude is A. If amplitude becomes 0.50A (same frequency and medium), what is new intensity?",
        modelAnswer: [
          "I proportional to A², so Inew/Iold = (0.50)² = 0.25.",
          "Inew = 0.25 x 18 = 4.5 W m⁻².",
        ],
      },
    ],
  },

  "t7-2": {
    noteId: "t7-2",
    syllabusNotes: [
      {
        id: "compare-wave-types",
        title: "Comparing transverse and longitudinal waves",
        paragraphs: [
          "In a transverse wave, oscillations are perpendicular to direction of energy transfer. Examples include waves on a rope and electromagnetic waves.",
          "In a longitudinal wave, oscillations are parallel to direction of energy transfer. Sound in air is the standard example, represented by compressions and rarefactions.",
          "Both types transfer energy and can be described by wavelength, frequency, period and amplitude, but the physical meaning of displacement direction differs.",
        ],
      },
      {
        id: "transverse-representation",
        title: "Graphical representation of transverse waves",
        paragraphs: [
          "A transverse wave is often drawn as a sinusoidal displacement against position graph. Crests are positive maximum displacement and troughs are negative maximum displacement.",
          "Wavelength is measured horizontally between two nearest points in phase, such as crest-to-crest. Amplitude is measured vertically from equilibrium line to crest (or trough magnitude).",
          "If the graph is displacement against time at one point, one cycle time gives period. Candidates must identify axes before reading wavelength or period values.",
        ],
      },
      {
        id: "longitudinal-representation",
        title: "Graphical representation of longitudinal waves",
        paragraphs: [
          "Longitudinal waves can be shown by a particle-density pattern: compressions where particles are closer and rarefactions where they are further apart.",
          "Wavelength is distance between adjacent compressions or adjacent rarefactions. A displacement graph can also represent longitudinal motion, but then positive or negative displacement means particle shift along propagation axis, not up or down in space.",
          "Pressure variation graphs are also used. For these, pressure maxima correspond to compressions and minima correspond to rarefactions, with phase relationships depending on the quantity plotted.",
        ],
      },
      {
        id: "phase-and-separation",
        title: "Using phase difference in both wave types",
        paragraphs: [
          "Two points one wavelength apart are in phase, so they have same displacement direction and magnitude at the same instant. Two points half a wavelength apart have phase difference 180 degrees (pi rad).",
          "On position graphs, phase difference can be found from separation fraction of wavelength: phase difference = (separation/λ) x 360 degrees.",
          "This method applies to both transverse and longitudinal waves provided you are comparing the same plotted quantity correctly.",
        ],
      },
      {
        id: "interpreting-graphs",
        title: "How to analyse and interpret wave graphs reliably",
        paragraphs: [
          "First identify graph type and axes units. A common error is reading a displacement-time graph as if horizontal axis were distance.",
          "From displacement-time at one point: read period from cycle spacing, then frequency as reciprocal. From displacement-position at one instant: read wavelength directly.",
          "For longitudinal patterns drawn as compressions and rarefactions, avoid measuring wavelength from compression to neighbouring rarefaction; that distance is λ/2.",
          "Good exam method is to annotate one cycle and one wavelength directly on the diagram before substituting any values.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "In this subtopic, marks depend on clean interpretation of diagrams and axis meaning. Examiners penalise correct formulas used on the wrong graph quantity.",
      items: [
        "Calling sound in air transverse because the drawn graph looks sinusoidal. The sinusoidal shape is a graph, not particle path shape.",
        "Measuring wavelength on a time axis or measuring period on a distance axis.",
        "For longitudinal diagrams, taking compression-to-rarefaction distance as one full wavelength instead of half wavelength.",
        "Stating amplitude as distance from crest to trough; that is twice amplitude.",
        "Ignoring phase interpretation and giving arbitrary angle values without wavelength-based ratio.",
      ],
    },
    workedExamples: [
      {
        id: "t7-2-ex1",
        title: "Identifying wave type from motion directions",
        problem: [
          "A disturbance travels east through a medium. A marked particle oscillates north-south. Identify wave type and explain.",
        ],
        solution: [
          "Propagation is east, particle oscillation is north-south.",
          "Oscillation is perpendicular to propagation direction, so this is a transverse wave.",
          "That perpendicular-direction criterion is the defining feature.",
        ],
      },
      {
        id: "t7-2-ex2",
        title: "Reading period and frequency from displacement-time graph",
        problem: [
          "A displacement-time graph for one point on a wave shows consecutive peaks at 0.12 s and 0.52 s. Calculate period and frequency.",
        ],
        solution: [
          "Period is time between consecutive peaks: T = 0.52 - 0.12 = 0.40 s.",
          "Frequency f = 1/T = 1/0.40 = 2.5 Hz.",
          "So T = 0.40 s and f = 2.5 Hz.",
        ],
      },
      {
        id: "t7-2-ex3",
        title: "Phase difference from position separation",
        problem: [
          "Two points on a wave are 0.30 m apart. The wavelength is 0.80 m. Find phase difference between them in degrees.",
        ],
        solution: [
          "Phase difference = (separation/λ) x 360 degrees.",
          "= (0.30/0.80) x 360 = 135 degrees.",
          "Hence the two points differ by 135 degrees in phase (modulo 360 degrees).",
        ],
      },
    ],
    selfTest: [
      {
        id: "t7-2-st1",
        question:
          "State one key difference between transverse and longitudinal waves in terms of particle oscillation direction.",
        modelAnswer: [
          "In transverse waves, particle oscillation is perpendicular to propagation direction.",
          "In longitudinal waves, particle oscillation is parallel to propagation direction.",
        ],
      },
      {
        id: "t7-2-st2",
        question:
          "A compression pattern has neighbouring compressions 0.65 m apart. What is wavelength?",
        modelAnswer: [
          "Distance between neighbouring compressions is one wavelength.",
          "So wavelength = 0.65 m.",
        ],
      },
      {
        id: "t7-2-st3",
        question:
          "On a transverse displacement-position graph, crest is at +4.0 mm and trough at -4.0 mm. Find amplitude and peak-to-peak value.",
        modelAnswer: [
          "Amplitude is maximum displacement from equilibrium, so amplitude = 4.0 mm.",
          "Peak-to-peak value is crest to trough distance = 8.0 mm.",
        ],
      },
      {
        id: "t7-2-st4",
        question:
          "Two points are separated by λ/4 on a sinusoidal wave. What is phase difference in radians?",
        modelAnswer: [
          "Phase difference = (1/4) x 2 pi = pi/2 rad.",
        ],
      },
      {
        id: "t7-2-st5",
        question:
          "Explain why a sinusoidal graph can represent both transverse and longitudinal waves.",
        modelAnswer: [
          "The sinusoidal curve represents how a chosen quantity (for example displacement or pressure) varies with position or time.",
          "It does not by itself define oscillation direction in space, so both wave types can produce sinusoidal graphs of appropriate quantities.",
        ],
      },
    ],
  },

  "t7-3": {
    noteId: "t7-3",
    syllabusNotes: [
      {
        id: "doppler-concept",
        title: "Doppler effect for a moving sound source and stationary observer",
        paragraphs: [
          "The Doppler effect is the change in observed frequency due to relative motion between source and observer. In this syllabus point, the observer is stationary and the sound source moves.",
          "If source moves toward observer, wavefronts are emitted from positions closer to observer each cycle, so effective wavelength in front decreases and observed frequency increases.",
          "If source moves away, effective wavelength behind source increases and observed frequency decreases.",
        ],
      },
      {
        id: "formula-and-sign-choice",
        title: "Using fo = fs v / (v plus or minus vs)",
        paragraphs: [
          "For stationary observer and moving source in still air, use fo = fs v / (v plus or minus vs), where v is sound speed in medium and vs is source speed relative to medium.",
          "Use minus in denominator for source moving toward observer, because denominator becomes smaller so observed frequency is higher.",
          "Use plus in denominator for source moving away, because denominator becomes larger so observed frequency is lower.",
          "This sign logic should be checked physically before final answer: approach means fo > fs, recession means fo < fs.",
        ],
      },
      {
        id: "assumptions-and-limits",
        title: "Assumptions behind the expression",
        paragraphs: [
          "The expression assumes source speed is less than sound speed and medium is at rest relative to observer. It also assumes straight-line relative motion along line joining source and observer.",
          "At very high source speeds comparable to sound speed, simple school treatment may need caution. This course uses standard subsonic model where wavefront spacing argument remains valid.",
          "The syllabus explicitly does not require the moving-observer formula for this section, so candidates should avoid mixing formulas unless question gives extra context.",
        ],
      },
      {
        id: "wavefront-interpretation",
        title: "Wavefront spacing interpretation",
        paragraphs: [
          "In one source period T, source moves distance vsT. Front wavelength is vT - vsT = (v - vs)T for approach direction, while rear wavelength is (v + vs)T.",
          "Observed frequency is v/λ observed, giving fo = v/[(v - vs)T] = fs v/(v - vs) in front and fo = fs v/(v + vs) behind.",
          "This derivation helps avoid memorisation errors and makes denominator sign physically intuitive.",
        ],
      },
      {
        id: "exam-technique",
        title: "Practical exam strategy for Doppler calculations",
        paragraphs: [
          "List fs, v, vs with SI units first. Decide approach or recession from wording before substituting.",
          "After calculation, check magnitude sense: impossible results such as fo lower than fs for approach usually indicate wrong sign.",
          "If multiple observers are on opposite sides of source path, treat each observer with correct relative geometry; one may hear higher frequency while the other hears lower frequency at the same instant.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Doppler questions are usually algebraically short. Most mark losses come from wrong denominator sign or using the observer-motion form that is not required here.",
      items: [
        "Using v plus vs for approach and v minus vs for recession, reversing physical trend.",
        "Substituting source speed in km h⁻¹ without converting to m s⁻¹.",
        "Applying moving-observer formula when observer is stationary and source moves.",
        "Failing to sense-check final frequency relative to source frequency.",
        "Using light-wave Doppler ideas directly with this sound expression without checking syllabus context.",
      ],
    },
    workedExamples: [
      {
        id: "t7-3-ex1",
        title: "Approaching source frequency shift",
        problem: [
          "A siren emits fs = 720 Hz. Speed of sound is v = 340 m s⁻¹. The source moves directly toward a stationary observer at vs = 25 m s⁻¹. Find observed frequency.",
        ],
        solution: [
          "For approach use denominator v - vs.",
          "fo = fs v/(v - vs) = 720 x 340/(340 - 25).",
          "fo = 244800/315 = 777.14... Hz.",
          "Observed frequency is about 777 Hz.",
        ],
      },
      {
        id: "t7-3-ex2",
        title: "Receding source frequency shift",
        problem: [
          "A horn emits 500 Hz. Source moves directly away from a stationary observer at 18 m s⁻¹ in air where sound speed is 330 m s⁻¹. Calculate observed frequency.",
        ],
        solution: [
          "For recession use denominator v + vs.",
          "fo = 500 x 330/(330 + 18) = 165000/348.",
          "fo = 474.1... Hz.",
          "Observed frequency is about 474 Hz, lower than source as expected.",
        ],
      },
      {
        id: "t7-3-ex3",
        title: "Finding source speed from observed shift",
        problem: [
          "A stationary observer hears a 960 Hz siren as 1000 Hz when the source approaches directly. Sound speed is 320 m s⁻¹. Determine source speed.",
        ],
        solution: [
          "Use fo = fs v/(v - vs) for approach.",
          "1000 = 960 x 320/(320 - vs).",
          "So 1000(320 - vs) = 307200.",
          "320000 - 1000vs = 307200, hence 1000vs = 12800.",
          "vs = 12.8 m s⁻¹.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t7-3-st1",
        question:
          "State what happens to observed sound frequency when a source moves toward a stationary observer, and explain in terms of wavefront spacing.",
        modelAnswer: [
          "Observed frequency increases.",
          "Source motion toward observer reduces spacing between successive wavefronts in front of source, so wavelength decreases and f = v/λ increases.",
        ],
      },
      {
        id: "t7-3-st2",
        question:
          "Write the Doppler expression for a moving source and stationary observer, defining every symbol.",
        modelAnswer: [
          "fo = fs v/(v plus or minus vs).",
          "fo is observed frequency, fs source frequency, v speed of sound in medium, vs speed of source relative to medium.",
          "Use minus for approach and plus for recession.",
        ],
      },
      {
        id: "t7-3-st3",
        question:
          "A source emits 400 Hz and approaches at 20 m s⁻¹ in air of speed 340 m s⁻¹. Calculate observed frequency.",
        modelAnswer: [
          "Approach formula: fo = 400 x 340/(340 - 20) = 136000/320 = 425 Hz.",
        ],
      },
      {
        id: "t7-3-st4",
        question:
          "A source emits 850 Hz and recedes at 30 m s⁻¹ in air of speed 340 m s⁻¹. Calculate observed frequency.",
        modelAnswer: [
          "Recession formula: fo = 850 x 340/(340 + 30) = 289000/370 = 781 Hz (3 s.f.).",
        ],
      },
      {
        id: "t7-3-st5",
        question:
          "Give one quick numerical check you should perform after any Doppler calculation for this syllabus case.",
        modelAnswer: [
          "Check whether fo is greater than fs for approach and less than fs for recession.",
          "If the trend is opposite, denominator sign is likely wrong.",
        ],
      },
    ],
  },

  "t7-4": {
    noteId: "t7-4",
    syllabusNotes: [
      {
        id: "em-common-properties",
        title: "Common properties of electromagnetic waves",
        paragraphs: [
          "All electromagnetic (EM) waves are transverse waves. Oscillating electric and magnetic fields are perpendicular to each other and to direction of energy transfer.",
          "In free space all EM waves travel at the same speed c, approximately 3.00 x 10⁸ m s⁻¹, regardless of wavelength or frequency.",
          "The wave relation v = f λ still applies. In free space this becomes c = f λ, so frequency and wavelength are inversely related.",
        ],
      },
      {
        id: "spectrum-order",
        title: "Principal EM spectrum regions in order",
        paragraphs: [
          "From longest wavelength to shortest wavelength (lowest to highest frequency): radio waves, microwaves, infrared, visible light, ultraviolet, X-rays, gamma rays.",
          "Moving from radio to gamma, wavelength decreases while frequency and photon energy increase.",
          "Exam questions may ask order, approximate wavelength bands, or identification of region from given wavelength or frequency.",
        ],
      },
      {
        id: "approx-wavelength-ranges",
        title: "Approximate wavelength ranges in free space",
        paragraphs: [
          "You should recall approximate free-space ranges, not exact boundaries. Typical values are:",
        ],
        bullets: [
          "Radio: about 10³ m to about 10⁻¹ m",
          "Microwaves: about 10⁻¹ m to about 10⁻³ m",
          "Infrared: about 10⁻³ m to about 7 x 10⁻⁷ m",
          "Visible: about 400 nm to 700 nm",
          "Ultraviolet: about 4 x 10⁻⁷ m to about 10⁻⁸ m",
          "X-rays: about 10⁻⁸ m to about 10⁻¹¹ m",
          "Gamma rays: shorter than about 10⁻¹¹ m",
        ],
      },
      {
        id: "visible-band",
        title: "Visible region: 400 nm to 700 nm",
        paragraphs: [
          "Human vision detects only a narrow band of the EM spectrum, approximately 400 nm to 700 nm in free space.",
          "Shorter visible wavelengths are perceived as violet-blue and longer as red. This range is important for identifying whether a given wavelength is visible.",
          "Converting units is essential: 1 nm = 10⁻⁹ m. For example 550 nm is 5.50 x 10⁻⁷ m and lies in visible range.",
        ],
      },
      {
        id: "applications-and-risk-context",
        title: "Contextual understanding across the spectrum",
        paragraphs: [
          "Different regions interact with matter differently and so have different uses, for example radio for communication, microwaves for radar and cooking, infrared for thermal imaging, visible for vision, UV for sterilisation, X-rays and gamma for imaging and treatment.",
          "Higher-frequency regions generally have greater ionising potential and require stronger safety controls. Although detailed biology is beyond this subtopic, qualitative awareness supports exam interpretation.",
          "In media other than vacuum, speed is less than c, but source frequency remains unchanged at boundaries while wavelength changes.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Spectrum questions are often high-scoring if ordering, units and c = f λ are handled carefully. Examiners penalise unit and order mistakes more than complex physics here.",
      items: [
        "Reversing microwave and infrared order, or ultraviolet and X-ray order.",
        "Forgetting that all EM waves have same speed in free space, then assigning different c values by region.",
        "Treating visible range as 400 to 700 m instead of nm due to unit omission.",
        "Using c = f λ with wavelength in nm without converting to m when required by question.",
        "Stating EM waves are longitudinal because they can travel through vacuum. They are transverse.",
      ],
    },
    workedExamples: [
      {
        id: "t7-4-ex1",
        title: "Finding frequency from visible wavelength",
        problem: [
          "Light of wavelength 620 nm travels in free space. Calculate its frequency.",
        ],
        solution: [
          "Convert wavelength: 620 nm = 620 x 10⁻⁹ m = 6.20 x 10⁻⁷ m.",
          "Use c = f λ, so f = c/λ = (3.00 x 10⁸)/(6.20 x 10⁻⁷).",
          "f = 4.84 x 10¹⁴ Hz (3 s.f.).",
        ],
      },
      {
        id: "t7-4-ex2",
        title: "Identifying spectral region from wavelength",
        problem: [
          "Classify EM radiation of wavelength 2.5 x 10⁻² m and of wavelength 3.0 x 10⁻¹⁰ m.",
        ],
        solution: [
          "2.5 x 10⁻² m is about 0.025 m, which lies in microwave region (between radio and infrared).",
          "3.0 x 10⁻¹⁰ m is far shorter than UV and in the X-ray to gamma boundary zone; with this approximate value it is typically classified as X-ray in school-range tables.",
          "Always compare with approximate range boundaries supplied or recalled.",
        ],
      },
      {
        id: "t7-4-ex3",
        title: "Wavelength change at fixed frequency",
        problem: [
          "An EM wave has frequency 9.0 x 10⁹ Hz in free space. Find wavelength in free space and explain what happens to wavelength if the wave enters glass where speed is lower but frequency is unchanged.",
        ],
        solution: [
          "In free space λ0 = c/f = (3.00 x 10⁸)/(9.0 x 10⁹) = 3.33 x 10⁻² m.",
          "At a boundary, source sets frequency so frequency stays same.",
          "Since v = f λ and v decreases in glass while f constant, wavelength must decrease in glass.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t7-4-st1",
        question:
          "State two properties common to all electromagnetic waves in free space.",
        modelAnswer: [
          "All are transverse waves.",
          "All travel at the same speed c in free space, about 3.00 x 10⁸ m s⁻¹.",
        ],
      },
      {
        id: "t7-4-st2",
        question:
          "Write the EM spectrum in order from longest wavelength to shortest wavelength.",
        modelAnswer: [
          "Radio, microwaves, infrared, visible, ultraviolet, X-rays, gamma rays.",
        ],
      },
      {
        id: "t7-4-st3",
        question:
          "State the approximate wavelength limits of visible light in free space.",
        modelAnswer: [
          "Approximately 400 nm to 700 nm.",
        ],
      },
      {
        id: "t7-4-st4",
        question:
          "Calculate frequency of radiation with wavelength 1.5 m in free space.",
        modelAnswer: [
          "f = c/λ = (3.00 x 10⁸)/1.5 = 2.0 x 10⁸ Hz.",
        ],
      },
      {
        id: "t7-4-st5",
        question:
          "An EM wave in free space has frequency 6.0 x 10¹⁴ Hz. Is it visible based on wavelength criterion?",
        modelAnswer: [
          "λ = c/f = (3.00 x 10⁸)/(6.0 x 10¹⁴) = 5.0 x 10⁻⁷ m = 500 nm.",
          "500 nm is within 400-700 nm, so it is visible.",
        ],
      },
    ],
  },

  "t7-5": {
    noteId: "t7-5",
    syllabusNotes: [
      {
        id: "polarisation-meaning",
        title: "What polarisation is and why it identifies transverse waves",
        paragraphs: [
          "Polarisation is restriction of oscillation direction of a transverse wave to one plane. For electromagnetic waves, this means electric field oscillations are confined to one direction perpendicular to propagation.",
          "Only transverse waves can be polarised because longitudinal waves oscillate along propagation direction and have no transverse direction set to restrict.",
          "Demonstrations with two polarising filters show intensity reduction as relative axis angle changes, confirming directional oscillation character of the wave.",
        ],
      },
      {
        id: "polariser-analyser",
        title: "Polariser and analyser roles",
        paragraphs: [
          "A polariser transmits the component of electric field along its transmission axis and absorbs the perpendicular component.",
          "An analyser is a second polariser used to test polarisation direction. Rotating analyser changes transmitted intensity according to axis angle.",
          "When transmission axes are parallel, transmitted intensity is maximum. At 90 degrees (crossed), ideal transmission is zero for plane-polarised input.",
        ],
      },
      {
        id: "malus-law",
        title: "Malus's law I = I0 cos² θ",
        paragraphs: [
          "For plane-polarised incident wave on a polariser, transmitted intensity is I = I0 cos² θ, where θ is angle between incident polarisation direction and polariser transmission axis.",
          "I0 is intensity incident on that particular polariser. In multiple-filter systems, output from one filter becomes input I0 for the next.",
          "Because of cosine-squared dependence, intensity falls symmetrically for plus or minus θ and is unchanged by adding 180 degrees to θ.",
        ],
      },
      {
        id: "series-filters",
        title: "Using Malus's law through a series of filters",
        paragraphs: [
          "For two filters after an initially polarised beam, apply Malus's law sequentially: I1 = I0 cos² θ1, then I2 = I1 cos² θ2 relative to second filter axis.",
          "For crossed first and last filters, inserting an intermediate filter at an angle can permit non-zero transmission by creating a stepwise rotation of transmitted polarisation direction.",
          "Careful angle reference is essential: each θ is measured relative to incident polarisation direction at that filter, not always relative to the very first axis.",
        ],
      },
      {
        id: "scope-note",
        title: "Scope for this syllabus point",
        paragraphs: [
          "This syllabus requires Malus-law use for plane-polarised electromagnetic waves through one or more filters.",
          "It does not require calculation of intensity change when unpolarised light first passes through a polariser, unless additional information is explicitly provided.",
          "Examination answers should keep within asked model and define each angle clearly to secure full marks.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Polarisation marks are frequently lost through angle mis-definition or using the wrong incident intensity in multi-filter calculations. Examiners reward sequential, well-labelled steps.",
      items: [
        "Applying I = I0 cos θ instead of cos² θ.",
        "Using angle between filter axes when question gives angle to incoming polarisation direction at that stage, or vice versa.",
        "Using original source intensity as I0 for every filter instead of stage-by-stage transmitted intensity.",
        "Claiming longitudinal waves can be polarised.",
        "Attempting unpolarised-light half-intensity rule in questions where syllabus note says it is not required and data do not support it.",
      ],
    },
    workedExamples: [
      {
        id: "t7-5-ex1",
        title: "Single-filter Malus-law calculation",
        problem: [
          "A plane-polarised wave of intensity 120 W m⁻² is incident on a polariser. The angle between polarisation direction and transmission axis is 35 degrees. Calculate transmitted intensity.",
        ],
        solution: [
          "Use I = I0 cos² θ.",
          "I = 120 x cos²(35 degrees).",
          "cos(35 degrees) = 0.819, so cos²(35 degrees) = 0.671.",
          "I = 120 x 0.671 = 80.5 W m⁻².",
        ],
      },
      {
        id: "t7-5-ex2",
        title: "Two sequential polarisers",
        problem: [
          "A plane-polarised beam of intensity 90 W m⁻² passes through two polarisers. The first is at 20 degrees to the incident polarisation direction. The second is at 50 degrees to the first filter axis. Find final intensity.",
        ],
        solution: [
          "After first filter: I1 = 90 cos²(20 degrees) = 90 x 0.883 = 79.5 W m⁻².",
          "Incident polarisation for second filter is along first filter axis. Relative angle to second is 50 degrees.",
          "Final intensity: I2 = I1 cos²(50 degrees) = 79.5 x 0.413 = 32.8 W m⁻².",
          "So transmitted intensity after two filters is 32.8 W m⁻².",
        ],
      },
      {
        id: "t7-5-ex3",
        title: "Finding angle from intensity ratio",
        problem: [
          "A plane-polarised beam passes through an analyser and transmitted intensity is 25% of incident intensity on that analyser. Determine the angle between analyser axis and incident polarisation direction.",
        ],
        solution: [
          "Given I/I0 = 0.25.",
          "From Malus's law, cos² θ = 0.25, so cos θ = 0.50 (principal magnitude).",
          "Therefore θ = 60 degrees (also 120 degrees gives same cos² value, but acute axis-angle convention usually quoted as 60 degrees).",
        ],
      },
    ],
    selfTest: [
      {
        id: "t7-5-st1",
        question:
          "Explain why polarisation can be used to show that electromagnetic waves are transverse.",
        modelAnswer: [
          "Polarisation restricts oscillations to one transverse plane.",
          "Only waves with oscillations perpendicular to propagation direction can be restricted this way, so successful polarisation demonstrates transverse nature.",
        ],
      },
      {
        id: "t7-5-st2",
        question:
          "State Malus's law and define all symbols used.",
        modelAnswer: [
          "I = I0 cos² θ.",
          "I is transmitted intensity through the polariser, I0 is intensity incident on that polariser, θ is angle between incident polarisation direction and polariser transmission axis.",
        ],
      },
      {
        id: "t7-5-st3",
        question:
          "A plane-polarised beam of intensity 64 W m⁻² is incident on a polariser at θ = 60 degrees. Find transmitted intensity.",
        modelAnswer: [
          "I = 64 cos²(60 degrees) = 64 x (0.5)² = 16 W m⁻².",
        ],
      },
      {
        id: "t7-5-st4",
        question:
          "A plane-polarised beam passes through an analyser at 90 degrees to its polarisation direction. What is transmitted intensity according to Malus's law?",
        modelAnswer: [
          "cos(90 degrees) = 0, so I = I0 cos²(90 degrees) = 0.",
          "For ideal filters the transmitted intensity is zero.",
        ],
      },
      {
        id: "t7-5-st5",
        question:
          "In a two-filter setup, why must Malus's law be applied sequentially rather than using one angle with original intensity only?",
        modelAnswer: [
          "Each filter changes both intensity and polarisation direction of the transmitted wave.",
          "So output from first filter is input for second, with a new relative angle at that stage.",
          "Using original intensity for all stages ignores this physical change and gives incorrect results.",
        ],
      },
    ],
  },
};
