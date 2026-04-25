import type { NoteDraft } from "./types";

/** Full teaching notes for 9702 Topic 25 — subtopics 25.1–25.3 (see lib/notes/AUTHORING.md). */
export const PHYSICS_TOPIC25_DRAFTS: Record<string, NoteDraft> = {
  "t25-1": {
    noteId: "t25-1",
    syllabusNotes: [
      {
        id: "luminosity-and-flux",
        title: "Luminosity and radiant flux intensity",
        paragraphs: [
          "Luminosity L of a star is the total power of electromagnetic radiation emitted by that star. It is an intrinsic property of the source and has SI unit watt (W).",
          "Radiant flux intensity F is the power received per unit area at the observer. In SI, F is measured in W m⁻². It depends on distance from the source.",
          "Do not confuse these quantities: luminosity is source output, while flux intensity is what arrives at a detector at some distance.",
        ],
      },
      {
        id: "inverse-square-law",
        title: "Inverse square law for radiant flux",
        paragraphs: [
          "For isotropic emission, radiation from a star spreads over a sphere of area 4πd² at distance d from the star.",
          "So flux intensity is F = L/(4πd²). This is the required inverse square law relation for this subtopic.",
          "The equation rearranges to d = √(L/(4πF)) when distance is unknown. Unit checks are useful: W/(W m⁻²) gives m² inside the square root.",
        ],
      },
      {
        id: "standard-candle-idea",
        title: "What a standard candle is",
        paragraphs: [
          "A standard candle is an astronomical object whose luminosity is known independently. If L is known and F is measured, distance can be calculated from the inverse square law.",
          "This method is fundamental because direct geometric distance measurements become difficult for distant galaxies.",
          "Examples studied at this level include objects such as Cepheid variables and Type Ia supernovae as conceptual distance indicators.",
        ],
      },
      {
        id: "distance-to-galaxies",
        title: "Using standard candles to find galaxy distances",
        paragraphs: [
          "In practice, astronomers identify a standard candle within or associated with a galaxy, estimate its luminosity from known calibration, then measure flux intensity at Earth.",
          "Applying F = L/(4πd²) gives distance to the source and therefore to the host galaxy.",
          "These distance estimates are then combined with redshift measurements for cosmological analysis developed in 25.3.",
        ],
      },
      {
        id: "assumptions-and-limitations",
        title: "Assumptions and limitations in standard-candle use",
        paragraphs: [
          "The method assumes luminosity calibration is reliable and that measured flux has been corrected for absorption and scattering effects along the line of sight.",
          "If a source is misidentified as a standard candle or luminosity is estimated wrongly, calculated distance can be significantly incorrect.",
          "At this level, the key exam requirement is correct physics of the method and clean use of the inverse square law with SI units.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Standard-candle questions are usually high-scoring when candidates separate intrinsic and observed quantities and apply the inverse square law with consistent units.",
      items: [
        "Confusing luminosity L (total power emitted) with flux intensity F (power per unit area received).",
        "Using F proportional to 1/d instead of F proportional to 1/d².",
        "Forgetting the 4π factor when rearranging F = L/(4πd²).",
        "Using distance in light-years with F in SI without converting consistently when SI answers are required.",
        "Claiming standard candles have the same observed brightness rather than known intrinsic luminosity.",
      ],
    },
    workedExamples: [
      {
        id: "t25-1-ex1",
        title: "Distance from known luminosity and measured flux",
        problem: [
          "A standard candle has luminosity 3.2 x 10²⁹ W. The measured flux intensity at Earth is 8.0 x 10⁻¹⁴ W m⁻². Calculate its distance.",
        ],
        solution: [
          "Use d = √(L/(4πF)).",
          "d = √((3.2 x 10²⁹)/(4π x 8.0 x 10⁻¹⁴)).",
          "d = √(3.18 x 10⁴¹) = 5.64 x 10²⁰ m.",
          "Distance is 5.64 x 10²⁰ m.",
        ],
      },
      {
        id: "t25-1-ex2",
        title: "Flux change with distance ratio",
        problem: [
          "Two identical standard candles are observed. Candle B is three times farther away than candle A. Compare their measured flux intensities.",
        ],
        solution: [
          "From inverse square law, F proportional to 1/d² for equal luminosity.",
          "So FB/FA = (dA/dB)² = (1/3)² = 1/9.",
          "Candle B has one ninth of the flux intensity of candle A.",
        ],
      },
      {
        id: "t25-1-ex3",
        title: "Luminosity from flux and distance",
        problem: [
          "A star is at distance 2.0 x 10¹⁹ m and has measured flux intensity 1.2 x 10⁻¹² W m⁻² at Earth. Find luminosity.",
        ],
        solution: [
          "Rearrange to L = 4πd²F.",
          "L = 4π x (2.0 x 10¹⁹)² x 1.2 x 10⁻¹².",
          "L = 4π x 4.0 x 10³⁸ x 1.2 x 10⁻¹² = 6.03 x 10²⁷ W.",
          "Luminosity is 6.03 x 10²⁷ W.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t25-1-st1",
        question:
          "Define luminosity and radiant flux intensity, including SI units.",
        modelAnswer: [
          "Luminosity L is total power emitted by a star, measured in W.",
          "Radiant flux intensity F is received power per unit area at the observer, measured in W m⁻².",
        ],
      },
      {
        id: "t25-1-st2",
        question:
          "State the inverse square law for radiant flux from a star and explain briefly why d² appears.",
        modelAnswer: [
          "F = L/(4πd²).",
          "Radiation spreads over the surface area of a sphere, and sphere area is 4πd², so received flux per unit area falls as 1/d².",
        ],
      },
      {
        id: "t25-1-st3",
        question:
          "What is meant by a standard candle in astronomy?",
        modelAnswer: [
          "A standard candle is an object with known intrinsic luminosity, allowing distance to be calculated from measured flux intensity.",
        ],
      },
      {
        id: "t25-1-st4",
        question:
          "A standard candle has L = 1.0 x 10²⁸ W and measured flux F = 2.0 x 10⁻¹³ W m⁻². Calculate d.",
        modelAnswer: [
          "d = √(L/(4πF)) = √((1.0 x 10²⁸)/(4π x 2.0 x 10⁻¹³)).",
          "d = 6.31 x 10¹⁹ m.",
        ],
      },
      {
        id: "t25-1-st5",
        question:
          "Why can incorrect luminosity calibration of a standard candle lead to incorrect galaxy distance?",
        modelAnswer: [
          "Distance is calculated from d = √(L/(4πF)). If L is wrong, d is wrong because d depends on the square root of L.",
        ],
      },
    ],
  },

  "t25-2": {
    noteId: "t25-2",
    syllabusNotes: [
      {
        id: "wiens-law-temperature",
        title: "Estimating stellar surface temperature with Wien’s law",
        paragraphs: [
          "A star’s continuous spectrum has a peak wavelength λmax linked to surface temperature T by Wien’s displacement law: λmax proportional to 1/T.",
          "In equation form for calculations, λmaxT = b, where b is Wien’s constant.",
          "So shorter peak wavelength implies higher surface temperature. A blue-white peak indicates hotter surface than a red peak.",
        ],
      },
      {
        id: "stefan-boltzmann-law",
        title: "Stefan–Boltzmann law for stellar luminosity",
        paragraphs: [
          "A star approximated as a black-body emitter has luminosity L = 4πσr²T⁴, where r is stellar radius and σ is Stefan–Boltzmann constant.",
          "This shows luminosity depends strongly on temperature because of the T⁴ factor, and also on emitting area through r².",
          "For two stars with the same temperature, the larger radius star is more luminous. For equal radius, the hotter star is much more luminous.",
        ],
      },
      {
        id: "radius-from-observations",
        title: "Estimating stellar radius from λmax and luminosity",
        paragraphs: [
          "This subtopic combines both laws. First use spectral peak to estimate T via Wien’s law. Then substitute T and known L into Stefan–Boltzmann law to solve for r.",
          "Rearranged radius form is r = √(L/(4πσT⁴)).",
          "This method gives an estimate of stellar size from observable spectral and brightness information.",
        ],
      },
      {
        id: "scaling-insight",
        title: "Useful proportional reasoning for radius comparisons",
        paragraphs: [
          "From L = 4πσr²T⁴, radius scales as r proportional to √L/T².",
          "So if two stars have equal luminosity, the hotter one must have smaller radius.",
          "If two stars have equal temperature, radius ratio is square root of luminosity ratio.",
        ],
      },
      {
        id: "data-handling-and-units",
        title: "Data handling and SI conventions",
        paragraphs: [
          "Use λ in metres and T in kelvin in Wien calculations. In Stefan–Boltzmann calculations, use L in W, r in m, T in K, and σ in W m⁻² K⁻⁴.",
          "Keep powers of ten carefully through T⁴. This is a common source of large numerical errors.",
          "Final radius may be reported in m and then compared with known solar radius if requested.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Most errors here are algebra and powers-of-ten issues. Examiners reward a clear two-stage method: temperature from λmax, then radius from L = 4πσr²T⁴.",
      items: [
        "Using Wien’s law as λmax proportional to T instead of inverse proportionality.",
        "Forgetting to convert nm to m before finding temperature.",
        "Dropping the fourth power on temperature in Stefan–Boltzmann law.",
        "Rearranging for radius incorrectly (for example missing square root).",
        "Using Celsius instead of kelvin in black-body relations.",
      ],
    },
    workedExamples: [
      {
        id: "t25-2-ex1",
        title: "Surface temperature from peak wavelength",
        problem: [
          "A star has spectrum peak at λmax = 4.80 x 10⁻⁷ m. Estimate surface temperature using b = 2.90 x 10⁻³ m K.",
        ],
        solution: [
          "From Wien’s law, T = b/λmax.",
          "T = (2.90 x 10⁻³)/(4.80 x 10⁻⁷) = 6.04 x 10³ K.",
          "Estimated surface temperature is 6.04 x 10³ K.",
        ],
      },
      {
        id: "t25-2-ex2",
        title: "Radius from luminosity and temperature",
        problem: [
          "A star has luminosity 1.20 x 10²⁷ W and surface temperature 5800 K. Calculate radius using σ = 5.67 x 10⁻⁸ W m⁻² K⁻⁴.",
        ],
        solution: [
          "Use r = √(L/(4πσT⁴)).",
          "T⁴ = 1.13 x 10¹⁵.",
          "Denominator 4πσT⁴ = 8.05 x 10⁸.",
          "r = √((1.20 x 10²⁷)/(8.05 x 10⁸)) = √(1.49 x 10¹⁸) = 1.22 x 10⁹ m.",
          "Radius is 1.22 x 10⁹ m.",
        ],
      },
      {
        id: "t25-2-ex3",
        title: "Full two-step radius estimate from λmax and L",
        problem: [
          "Observed data for a star: λmax = 6.20 x 10⁻⁷ m and luminosity L = 3.5 x 10²⁶ W. Estimate radius using b = 2.90 x 10⁻³ m K and σ = 5.67 x 10⁻⁸ W m⁻² K⁻⁴.",
        ],
        solution: [
          "Step 1: Wien. T = b/λmax = (2.90 x 10⁻³)/(6.20 x 10⁻⁷) = 4.68 x 10³ K.",
          "Step 2: Stefan–Boltzmann radius form.",
          "r = √(L/(4πσT⁴)) = √((3.5 x 10²⁶)/(4π x 5.67 x 10⁻⁸ x (4.68 x 10³)⁴)).",
          "r = 1.01 x 10⁹ m.",
          "Estimated stellar radius is 1.01 x 10⁹ m.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t25-2-st1",
        question:
          "State Wien’s displacement law and explain what it implies about star colour and temperature.",
        modelAnswer: [
          "Wien’s law states λmax proportional to 1/T (or λmaxT = constant).",
          "Hotter stars have shorter λmax and appear bluer; cooler stars have longer λmax and appear redder.",
        ],
      },
      {
        id: "t25-2-st2",
        question:
          "Write Stefan–Boltzmann law for a star and define each symbol.",
        modelAnswer: [
          "L = 4πσr²T⁴, where L is luminosity, r is stellar radius, T is surface temperature, and σ is Stefan–Boltzmann constant.",
        ],
      },
      {
        id: "t25-2-st3",
        question:
          "A star’s peak wavelength is 5.0 x 10⁻⁷ m. Find surface temperature using b = 2.90 x 10⁻³ m K.",
        modelAnswer: [
          "T = b/λmax = (2.90 x 10⁻³)/(5.0 x 10⁻⁷) = 5.8 x 10³ K.",
        ],
      },
      {
        id: "t25-2-st4",
        question:
          "For two stars with equal luminosity, star A has twice the surface temperature of star B. Find rA/rB.",
        modelAnswer: [
          "From L = 4πσr²T⁴ with equal L, r proportional to 1/T².",
          "So rA/rB = (TB/TA)² = (1/2)² = 1/4.",
        ],
      },
      {
        id: "t25-2-st5",
        question:
          "Why must kelvin be used in Stefan–Boltzmann calculations?",
        modelAnswer: [
          "The law uses absolute thermodynamic temperature. Using Celsius would give incorrect values because the zero point is shifted and T appears to the fourth power.",
        ],
      },
    ],
  },

  "t25-3": {
    noteId: "t25-3",
    syllabusNotes: [
      {
        id: "spectral-redshift-observation",
        title: "Observed increase in wavelength of distant spectral lines",
        paragraphs: [
          "When spectra from distant galaxies are compared with laboratory spectra of the same elements, emission and absorption lines are often shifted to longer wavelength.",
          "This increase in wavelength is called redshift. It is observed in both emission-line and absorption-line spectra.",
          "The observation is quantitative: known rest wavelength λ is compared with observed wavelength λobs, and change is Δλ = λobs - λ.",
        ],
      },
      {
        id: "redshift-approximation",
        title: "Using Δλ/λ ≈ Δf/f ≈ v/c for small redshift",
        paragraphs: [
          "For speeds much less than c, fractional wavelength shift is approximately equal to recessional speed ratio: z = Δλ/λ ≈ v/c.",
          "Equivalent frequency form is Δf/f ≈ v/c in magnitude, noting that redshift corresponds to lower observed frequency.",
          "So recessional speed can be estimated from v ≈ cΔλ/λ when shifts are small.",
        ],
      },
      {
        id: "expanding-universe-idea",
        title: "Why redshift supports expansion of the Universe",
        paragraphs: [
          "A widespread pattern of redshift indicates many distant galaxies are receding from us.",
          "In cosmology this is interpreted as expansion of space, so distances between large-scale structures increase with time.",
          "The redshift trend is not interpreted as Earth being a special central point; expansion appears similarly from any typical galaxy in a homogeneous large-scale Universe.",
        ],
      },
      {
        id: "hubbles-law",
        title: "Hubble’s law in SI form",
        paragraphs: [
          "Hubble’s law states v ≈ H₀d, where v is recessional speed and d is distance. H₀ is Hubble constant.",
          "In SI, H₀ has unit s⁻¹ because (m s⁻¹)/m = s⁻¹.",
          "A graph of recessional speed against distance is approximately linear for suitable ranges, with gradient H₀.",
        ],
      },
      {
        id: "big-bang-link",
        title: "How Hubble’s law leads to Big Bang theory",
        paragraphs: [
          "If galaxies are now moving apart with v proportional to d, extrapolating backward suggests they were closer together in the past.",
          "This supports the Big Bang model: the Universe evolved from a much hotter, denser earlier state and has expanded over cosmic time.",
          "A simple estimate of expansion timescale is about 1/H₀, giving the right order of magnitude for cosmic age in introductory treatment.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Candidates usually lose marks here by mixing wavelength and frequency shift signs, misusing Hubble units, or treating Hubble’s law as exact at all scales and times.",
      items: [
        "Calling any shifted line redshift without checking whether wavelength increased or decreased.",
        "Using z = Δλ/λ but calculating Δλ with wrong sign convention and then interpreting speed incorrectly.",
        "Using H₀ in km s⁻¹ Mpc⁻¹ directly in SI equations without conversion when SI is required.",
        "Confusing Hubble’s law as proof of simple motion through static space rather than evidence for expansion of the Universe.",
        "Stating Big Bang as an explosion into empty space rather than expansion of the Universe itself from a hot dense early state.",
      ],
    },
    workedExamples: [
      {
        id: "t25-3-ex1",
        title: "Speed from measured spectral redshift",
        problem: [
          "A galaxy has a spectral line with rest wavelength 500 nm observed at 510 nm. Estimate recessional speed using v/c ≈ Δλ/λ and c = 3.00 x 10⁸ m s⁻¹.",
        ],
        solution: [
          "Δλ = 510 - 500 = 10 nm.",
          "Fractional shift Δλ/λ = 10/500 = 0.020.",
          "So v ≈ c x 0.020 = 3.00 x 10⁸ x 0.020 = 6.0 x 10⁶ m s⁻¹.",
          "Estimated recessional speed is 6.0 x 10⁶ m s⁻¹.",
        ],
      },
      {
        id: "t25-3-ex2",
        title: "Distance from Hubble’s law",
        problem: [
          "A galaxy’s recessional speed is 1.8 x 10⁷ m s⁻¹. Take H₀ = 2.2 x 10⁻¹⁸ s⁻¹. Estimate its distance.",
        ],
        solution: [
          "Use d = v/H₀.",
          "d = (1.8 x 10⁷)/(2.2 x 10⁻¹⁸) = 8.18 x 10²⁴ m.",
          "Estimated distance is 8.18 x 10²⁴ m.",
        ],
      },
      {
        id: "t25-3-ex3",
        title: "Converting H₀ to SI and estimating expansion timescale",
        problem: [
          "Given H₀ = 70 km s⁻¹ Mpc⁻¹, convert to s⁻¹ using 1 Mpc = 3.09 x 10²² m, then estimate 1/H₀.",
        ],
        solution: [
          "Convert numerator: 70 km s⁻¹ = 7.0 x 10⁴ m s⁻¹.",
          "So H₀ = (7.0 x 10⁴)/(3.09 x 10²²) = 2.27 x 10⁻¹⁸ s⁻¹.",
          "Then 1/H₀ = 4.41 x 10¹⁷ s.",
          "This gives the expected order-of-magnitude cosmic timescale used in Big Bang discussions.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t25-3-st1",
        question:
          "What is meant by redshift in astronomical spectra?",
        modelAnswer: [
          "Redshift means observed spectral lines are shifted to longer wavelength than their known rest values.",
        ],
      },
      {
        id: "t25-3-st2",
        question:
          "State the approximation linking redshift and recessional speed for small shifts.",
        modelAnswer: [
          "For small shifts, Δλ/λ ≈ v/c (and equivalently Δf/f ≈ v/c in magnitude).",
        ],
      },
      {
        id: "t25-3-st3",
        question:
          "State Hubble’s law and give the SI unit of H₀.",
        modelAnswer: [
          "Hubble’s law is v ≈ H₀d.",
          "In SI, H₀ has unit s⁻¹.",
        ],
      },
      {
        id: "t25-3-st4",
        question:
          "A line with rest wavelength 656 nm is observed at 670 nm in a galaxy spectrum. Estimate v using c = 3.00 x 10⁸ m s⁻¹.",
        modelAnswer: [
          "Δλ = 670 - 656 = 14 nm.",
          "Δλ/λ = 14/656 = 0.0213.",
          "v ≈ c(Δλ/λ) = 3.00 x 10⁸ x 0.0213 = 6.39 x 10⁶ m s⁻¹.",
        ],
      },
      {
        id: "t25-3-st5",
        question:
          "Explain briefly how Hubble’s law supports the Big Bang theory.",
        modelAnswer: [
          "Hubble’s law shows more distant galaxies recede faster, consistent with an expanding Universe.",
          "Running this expansion backward implies the Universe was once much smaller, denser and hotter, which is the core Big Bang picture.",
        ],
      },
    ],
  },
};
