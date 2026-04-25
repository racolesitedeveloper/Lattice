import type { NoteDraft } from "./types";

/** Full teaching notes for 9702 Topic 24 — subtopics 24.1–24.3 (see lib/notes/AUTHORING.md). */
export const PHYSICS_TOPIC24_DRAFTS: Record<string, NoteDraft> = {
  "t24-1": {
    noteId: "t24-1",
    syllabusNotes: [
      {
        id: "piezoelectric-principle",
        title: "Piezoelectric effect and transducer action",
        paragraphs: [
          "A piezoelectric crystal changes shape when a potential difference is applied across it. This is the inverse piezoelectric effect and is used to generate ultrasound when an alternating p.d. is applied.",
          "The crystal also works in reverse: if mechanical pressure deforms it, charges separate in the crystal and an e.m.f. appears across its faces. This direct piezoelectric effect is used for detection.",
          "One device can therefore act as both transmitter and receiver. In medical probes, short electrical pulses make the crystal emit short ultrasound pulses, and returning echoes deform the crystal to produce detectable voltage signals.",
        ],
      },
      {
        id: "ultrasound-generation-detection",
        title: "Generation, pulse-echo method and timing",
        paragraphs: [
          "Ultrasound means sound waves with frequency above the upper limit of human hearing (above about 20 kHz). Medical imaging commonly uses MHz frequencies to achieve short wavelength and good spatial detail.",
          "In pulse-echo scanning, an emitted pulse travels through tissue, reflects at boundaries where acoustic properties change, and returns to the probe. The electronic system measures the echo time delay.",
          "If wave speed in tissue is c and round-trip time is Δt, depth to boundary is x = cΔt/2. The factor 1/2 is essential because the measured time includes travel to the boundary and back.",
        ],
      },
      {
        id: "acoustic-impedance-and-reflection",
        title: "Specific acoustic impedance and reflection at boundaries",
        paragraphs: [
          "Specific acoustic impedance is defined as Z = ρc, where ρ is medium density and c is speed of sound in that medium. Unit is kg m⁻² s⁻¹ (rayl).",
          "At a boundary between media 1 and 2, intensity reflection coefficient is Iᵣ/I₀ = (Z₁ - Z₂)²/(Z₁ + Z₂)².",
          "If impedances are similar, reflection is small and transmission is high. If impedances differ greatly, reflection is large. This is why coupling gel is used between probe and skin: it reduces the large impedance mismatch that would occur with trapped air.",
        ],
      },
      {
        id: "attenuation-in-tissue",
        title: "Attenuation in matter and image consequences",
        paragraphs: [
          "As ultrasound travels through tissue, intensity is reduced by absorption and scattering. The model equation is I = I₀e⁻μx, where μ is attenuation coefficient and x is path length in the medium.",
          "Greater depth gives lower returning intensity, so deeper echoes are weaker and require electronic gain compensation. Larger μ also causes stronger attenuation for the same depth.",
          "Attenuation and reflection together control image quality: strong reflection at one boundary can give clear echoes, but excessive attenuation can hide structures beyond that boundary.",
        ],
      },
      {
        id: "diagnostic-use-and-limitations",
        title: "Using boundary reflections for diagnostic information",
        paragraphs: [
          "Ultrasound imaging identifies internal structures by locating boundaries from echo times and echo strengths. Distances and tissue interfaces are inferred from wave travel and reflection behavior.",
          "The technique is non-ionising and well suited to soft tissue imaging and real-time monitoring of motion.",
          "Strong reflections at bone or gas boundaries can limit penetration into deeper regions. This is why scan windows and probe placement matter in practice.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Examiners in 24.1 usually award marks for correct physical interpretation of pulse-echo timing, impedance-based reflection, and attenuation. Most losses are from missing factors and formula-variable confusion.",
      items: [
        "Using x = cΔt instead of x = cΔt/2 in pulse-echo depth calculations.",
        "Treating Z as ρ/c instead of Z = ρc.",
        "Using amplitude ratios where the question asks for intensity reflection coefficient Iᵣ/I₀.",
        "Ignoring the role of coupling gel and claiming air improves transmission.",
        "Using I = I₀ exp(+μx) for attenuation instead of decay form I = I₀e⁻μx.",
      ],
    },
    workedExamples: [
      {
        id: "t24-1-ex1",
        title: "Depth from echo time delay",
        problem: [
          "An ultrasound pulse is sent into tissue where sound speed is 1540 m s⁻¹. A strong echo is received 78 μs after emission. Find the depth of the reflecting boundary.",
        ],
        solution: [
          "Use pulse-echo distance relation x = cΔt/2.",
          "Convert time: 78 μs = 78 x 10⁻⁶ s.",
          "x = (1540 x 78 x 10⁻⁶)/2 = 6.01 x 10⁻² m.",
          "So boundary depth is 0.060 m, about 6.0 cm.",
        ],
      },
      {
        id: "t24-1-ex2",
        title: "Reflection coefficient at a tissue boundary",
        problem: [
          "At a boundary, medium 1 has Z₁ = 1.50 x 10⁶ kg m⁻² s⁻¹ and medium 2 has Z₂ = 1.70 x 10⁶ kg m⁻² s⁻¹. Calculate Iᵣ/I₀.",
        ],
        solution: [
          "Use Iᵣ/I₀ = (Z₁ - Z₂)²/(Z₁ + Z₂)².",
          "Difference term: Z₁ - Z₂ = -0.20 x 10⁶, square gives 0.04 x 10¹².",
          "Sum term: Z₁ + Z₂ = 3.20 x 10⁶, square gives 10.24 x 10¹².",
          "Iᵣ/I₀ = 0.04/10.24 = 3.91 x 10⁻³.",
          "About 0.39% of intensity is reflected at this boundary.",
        ],
      },
      {
        id: "t24-1-ex3",
        title: "Attenuation through tissue",
        problem: [
          "Ultrasound intensity entering tissue is 1.8 W m⁻². The attenuation coefficient is μ = 12 m⁻¹ and path length is 4.0 cm. Find the intensity after this path.",
        ],
        solution: [
          "Use I = I₀e⁻μx with x = 0.040 m.",
          "Exponent: -μx = -(12)(0.040) = -0.48.",
          "I = 1.8e⁻⁰⋅⁴⁸ = 1.8 x 0.619 = 1.11 W m⁻².",
          "Transmitted intensity is 1.11 W m⁻² (3 s.f.).",
        ],
      },
    ],
    selfTest: [
      {
        id: "t24-1-st1",
        question:
          "State how a piezoelectric crystal can both generate and detect ultrasound in the same probe.",
        modelAnswer: [
          "Applying an alternating p.d. makes the crystal oscillate and emit ultrasound (inverse piezoelectric effect).",
          "Incoming ultrasound deforms the crystal and produces an e.m.f. across it (direct piezoelectric effect).",
        ],
      },
      {
        id: "t24-1-st2",
        question:
          "Define specific acoustic impedance and write the reflection-coefficient equation for intensity at a boundary.",
        modelAnswer: [
          "Specific acoustic impedance is Z = ρc.",
          "Intensity reflection coefficient is Iᵣ/I₀ = (Z₁ - Z₂)²/(Z₁ + Z₂)².",
        ],
      },
      {
        id: "t24-1-st3",
        question:
          "Why does an ultrasound probe need coupling gel between the probe face and skin?",
        modelAnswer: [
          "Air has very different acoustic impedance from tissue, so without gel most ultrasound is reflected at the probe-air-skin interfaces.",
          "Gel reduces impedance mismatch and improves transmission into the body.",
        ],
      },
      {
        id: "t24-1-st4",
        question:
          "A returning echo arrives 52 μs after emission in tissue where c = 1500 m s⁻¹. Calculate boundary depth.",
        modelAnswer: [
          "x = cΔt/2 = (1500 x 52 x 10⁻⁶)/2 = 3.90 x 10⁻² m.",
          "Depth is 3.9 cm.",
        ],
      },
      {
        id: "t24-1-st5",
        question:
          "State the attenuation equation for ultrasound intensity and explain one consequence for deep-tissue imaging.",
        modelAnswer: [
          "I = I₀e⁻μx.",
          "As depth x increases, intensity falls exponentially, so echoes from deeper structures are weaker and need gain compensation.",
        ],
      },
    ],
  },

  "t24-2": {
    noteId: "t24-2",
    syllabusNotes: [
      {
        id: "xray-production-in-tube",
        title: "How X-rays are produced in an X-ray tube",
        paragraphs: [
          "In an X-ray tube, electrons are accelerated through a high potential difference and strike a metal target (anode). Rapid deceleration in the target produces X-rays (bremsstrahlung), and characteristic lines may also be produced by inner-shell electron transitions in target atoms.",
          "The accelerating p.d. sets the maximum electron kinetic energy before impact, so it sets the maximum possible photon energy.",
          "From energy conservation, eV = hfₘₐₓ = hc/λₘᵢₙ, giving λₘᵢₙ = hc/(eV). This is the minimum wavelength in the output spectrum.",
        ],
      },
      {
        id: "xray-imaging-and-contrast",
        title: "X-ray imaging and the meaning of contrast",
        paragraphs: [
          "X-ray images form because different tissues attenuate X-rays by different amounts. Regions with greater attenuation transmit fewer photons to the detector and appear different from less attenuating regions.",
          "Image contrast means the difference in detector signal (and displayed brightness) between neighboring regions. Good contrast helps distinguish structures.",
          "Using contrast media can increase attenuation differences between specific tissues and surrounding material, improving visibility of targeted structures.",
        ],
      },
      {
        id: "attenuation-law",
        title: "Attenuation model I = I₀e⁻μx",
        paragraphs: [
          "For X-rays through matter, transmitted intensity follows I = I₀e⁻μx, where μ is attenuation coefficient and x is thickness of material.",
          "Larger μ or larger x reduces transmitted intensity more strongly. For equal thickness, a material with greater μ gives greater attenuation and contributes to stronger image contrast.",
          "The same exponential model is used in ultrasound attenuation, but μ values and interaction mechanisms differ.",
        ],
      },
      {
        id: "ct-reconstruction-principle",
        title: "How CT scanning builds a 3D image",
        paragraphs: [
          "Computed tomography (CT) takes multiple X-ray projections of the same slice from different angles, then computationally reconstructs a 2D cross-sectional image of that slice.",
          "The scanner repeats this process for many adjacent slices along an axis through the body.",
          "Stacking and processing the set of reconstructed slices gives a 3D representation of internal structure.",
        ],
      },
      {
        id: "diagnostic-use-and-tradeoffs",
        title: "Usefulness and practical trade-offs",
        paragraphs: [
          "X-ray imaging is fast and effective for structures with significant attenuation differences, including bone and contrast-enhanced pathways.",
          "CT provides much richer spatial information than a single projection because overlap ambiguity is reduced by tomographic reconstruction.",
          "Because X-rays are ionising, dose management matters: exposure settings are chosen to balance image quality against radiation risk.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "In 24.2, examiners usually test clear links between accelerating p.d., minimum wavelength, attenuation, and CT image formation. Most marks are lost by mixing definitions or omitting reconstruction steps.",
      items: [
        "Using λₘᵢₙ = eV/hc instead of λₘᵢₙ = hc/(eV).",
        "Saying contrast is higher detector count only, rather than difference between neighboring regions.",
        "Using linear attenuation subtraction instead of exponential I = I₀e⁻μx.",
        "Describing CT as one X-ray image that is converted directly into 3D without slice-by-slice reconstruction.",
        "Ignoring that multiple projection angles are required for each CT section.",
      ],
    },
    workedExamples: [
      {
        id: "t24-2-ex1",
        title: "Minimum wavelength from tube voltage",
        problem: [
          "An X-ray tube operates at 80 kV. Calculate the minimum X-ray wavelength produced. Use h = 6.63 x 10⁻³⁴ J s, c = 3.00 x 10⁸ m s⁻¹ and e = 1.60 x 10⁻¹⁹ C.",
        ],
        solution: [
          "Use λₘᵢₙ = hc/(eV).",
          "V = 80 kV = 8.0 x 10⁴ V, so eV = (1.60 x 10⁻¹⁹)(8.0 x 10⁴) = 1.28 x 10⁻¹⁴ J.",
          "hc = (6.63 x 10⁻³⁴)(3.00 x 10⁸) = 1.99 x 10⁻²⁵ J m.",
          "λₘᵢₙ = (1.99 x 10⁻²⁵)/(1.28 x 10⁻¹⁴) = 1.55 x 10⁻¹¹ m.",
          "Minimum wavelength is 1.55 x 10⁻¹¹ m.",
        ],
      },
      {
        id: "t24-2-ex2",
        title: "Comparing attenuation through two tissues",
        problem: [
          "An incident X-ray beam has intensity 120 W m⁻². Through tissue A, μ = 18 m⁻¹ and thickness 2.0 cm. Through tissue B, μ = 7.0 m⁻¹ and the same thickness. Find transmitted intensities and comment on contrast.",
        ],
        solution: [
          "Use I = I₀e⁻μx with x = 0.020 m.",
          "Tissue A: Iₐ = 120e⁻(18 x 0.020) = 120e⁻⁰⋅³⁶ = 83.7 W m⁻².",
          "Tissue B: Iᵦ = 120e⁻(7.0 x 0.020) = 120e⁻⁰⋅¹⁴ = 104 W m⁻².",
          "Because transmitted intensities differ (about 84 vs 104 W m⁻²), detector signals differ, giving image contrast between the two tissues.",
        ],
      },
      {
        id: "t24-2-ex3",
        title: "Explaining CT slice and 3D reconstruction",
        problem: [
          "Describe, in sequence, how CT scanning of the abdomen produces a 3D internal image.",
        ],
        solution: [
          "For one section, X-ray projections are recorded from many angles around the patient.",
          "Computer processing combines these projections to reconstruct one 2D cross-sectional slice.",
          "The scanner then repeats for many neighboring slices along the body axis.",
          "The complete stack of reconstructed slices is combined to form a 3D representation.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t24-2-st1",
        question:
          "Explain why increasing accelerating p.d. in an X-ray tube decreases the minimum wavelength produced.",
        modelAnswer: [
          "Maximum electron kinetic energy is eV, which sets maximum possible photon energy.",
          "Since λ = hc/E, larger E from larger V gives smaller minimum wavelength λₘᵢₙ.",
        ],
      },
      {
        id: "t24-2-st2",
        question:
          "State what is meant by contrast in X-ray imaging.",
        modelAnswer: [
          "Contrast is the difference in detected signal (and displayed brightness) between neighboring regions due to different X-ray attenuation.",
        ],
      },
      {
        id: "t24-2-st3",
        question:
          "Write the attenuation equation for X-rays in matter and define each symbol.",
        modelAnswer: [
          "I = I₀e⁻μx, where I is transmitted intensity, I₀ is incident intensity, μ is attenuation coefficient, and x is thickness/path length in the material.",
        ],
      },
      {
        id: "t24-2-st4",
        question:
          "An X-ray beam has I₀ = 90 W m⁻² and passes through 3.0 cm of tissue with μ = 9.0 m⁻¹. Calculate transmitted intensity.",
        modelAnswer: [
          "x = 0.030 m, so I = 90e⁻(9.0 x 0.030) = 90e⁻⁰⋅²⁷ = 68.7 W m⁻².",
        ],
      },
      {
        id: "t24-2-st5",
        question:
          "Why does CT give more structural information than a single plain X-ray projection?",
        modelAnswer: [
          "CT reconstructs cross-sectional slices from many viewing angles, reducing overlap of structures seen in one projection.",
          "Combining multiple slices then gives 3D spatial information.",
        ],
      },
    ],
  },

  "t24-3": {
    noteId: "t24-3",
    syllabusNotes: [
      {
        id: "tracer-concept",
        title: "Tracer principle in medical imaging",
        paragraphs: [
          "A tracer is a substance containing radioactive nuclei introduced into the body so its distribution can be followed. Tissue uptake of the tracer depends on biological activity of that tissue.",
          "In PET scanning, the tracer uses a nucleus that decays by β⁺ emission. This provides positrons in the tissue region of interest.",
          "Image intensity in PET corresponds to tracer concentration, so the method maps function (activity) rather than only anatomical density.",
        ],
      },
      {
        id: "beta-plus-and-annihilation",
        title: "β⁺ decay, annihilation and conservation laws",
        paragraphs: [
          "A β⁺-emitting nucleus releases a positron. The positron travels a short distance in tissue, then interacts with an electron.",
          "Electron-positron annihilation converts their mass into electromagnetic radiation. In this process, both mass-energy and momentum are conserved.",
          "For near-rest annihilation of an electron-positron pair, two gamma photons are produced in opposite directions, each with energy about 0.511 MeV.",
        ],
      },
      {
        id: "gamma-energy-calculation",
        title: "Energy of gamma photons from e⁻–e⁺ annihilation",
        paragraphs: [
          "Total rest energy of electron plus positron is 2mₑc². If pair kinetic energies are negligible at annihilation, this energy becomes photon energy.",
          "With two photons emitted, each photon has Eγ = mₑc² = 0.511 MeV (approximately 8.18 x 10⁻¹⁴ J).",
          "Opposite directions follow momentum conservation: net momentum before and after must be equal, so two-photon emission at 180° is the simplest conserved outcome.",
        ],
      },
      {
        id: "detection-and-coincidence",
        title: "Detecting photon pairs and localising events",
        paragraphs: [
          "Gamma photons from annihilation leave the body and are detected by surrounding detector elements.",
          "PET electronics use coincidence timing: two detectors receiving photons nearly simultaneously define a line of response on which annihilation occurred.",
          "Many such events are collected and reconstructed computationally to produce a map of tracer concentration across tissue regions.",
        ],
      },
      {
        id: "pet-image-formation",
        title: "From event data to tracer-concentration image",
        paragraphs: [
          "Each valid coincidence event contributes positional information. Reconstruction algorithms combine very large numbers of events to estimate where annihilations occurred most often.",
          "Because annihilation rate is linked to local tracer uptake, reconstructed activity corresponds to tissue tracer concentration.",
          "PET therefore provides functional imaging, for example identifying regions with unusually high or low metabolic activity.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "In 24.3, examiners usually expect clear sequence: tracer uptake, β⁺ emission, annihilation, opposite gamma photons, coincidence detection, and image reconstruction.",
      items: [
        "Describing PET tracer as β⁻ emitter instead of β⁺ emitter.",
        "Saying annihilation produces one gamma photon in this standard PET context; pair production is required for momentum conservation near rest.",
        "Forgetting opposite photon directions when discussing annihilation detection.",
        "Using 0.511 MeV as total pair energy instead of per photon energy.",
        "Confusing anatomical X-ray attenuation imaging with PET tracer-concentration imaging.",
      ],
    },
    workedExamples: [
      {
        id: "t24-3-ex1",
        title: "Gamma-photon energy from annihilation",
        problem: [
          "Calculate the energy of each gamma photon emitted when an electron and positron annihilate at rest. Use mₑ = 9.11 x 10⁻³¹ kg and c = 3.00 x 10⁸ m s⁻¹.",
        ],
        solution: [
          "For annihilation at rest, total energy available is 2mₑc² shared equally by two photons.",
          "So each photon has Eγ = mₑc² = (9.11 x 10⁻³¹)(3.00 x 10⁸)² = 8.20 x 10⁻¹⁴ J.",
          "In eV, Eγ = (8.20 x 10⁻¹⁴)/(1.60 x 10⁻¹⁹) = 5.12 x 10⁵ eV = 0.512 MeV.",
          "Each gamma photon is about 0.511 MeV.",
        ],
      },
      {
        id: "t24-3-ex2",
        title: "Why two opposite photons are produced",
        problem: [
          "Explain, using conservation laws, why PET annihilation events are detected as two nearly simultaneous photons traveling in opposite directions.",
        ],
        solution: [
          "In e⁻–e⁺ annihilation, mass-energy converts to photon energy, so gamma photons are produced.",
          "If the pair is nearly at rest, initial total momentum is approximately zero.",
          "To keep total momentum zero after annihilation, emitted photons must have equal magnitudes of momentum in opposite directions.",
          "This gives two nearly simultaneous photons on opposite paths, enabling coincidence detection.",
        ],
      },
      {
        id: "t24-3-ex3",
        title: "From coincidence events to image",
        problem: [
          "Outline how PET scanner timing data from detector pairs is used to build a tissue tracer map.",
        ],
        solution: [
          "Each coincidence pair defines a line of response containing the annihilation point.",
          "The scanner records many such lines from many events and many directions around the body.",
          "Reconstruction algorithms combine this dataset to estimate event-density distribution in slices/volumes.",
          "Higher reconstructed event density indicates higher tracer concentration in that tissue region.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t24-3-st1",
        question:
          "Define a tracer in the context of PET and state what type of radioactive decay the PET tracer must undergo.",
        modelAnswer: [
          "A tracer is a substance containing radioactive nuclei introduced so its uptake in tissue can be tracked.",
          "For PET, the tracer must include nuclei that decay by β⁺ emission.",
        ],
      },
      {
        id: "t24-3-st2",
        question:
          "State what annihilation means for a particle and its antiparticle, and name the two conservation laws highlighted in PET.",
        modelAnswer: [
          "Annihilation is interaction of a particle with its antiparticle, converting their mass into radiation/other products.",
          "In PET context, mass-energy and momentum are conserved.",
        ],
      },
      {
        id: "t24-3-st3",
        question:
          "Why are PET annihilation photons detected in coincidence rather than as isolated single detections for localisation?",
        modelAnswer: [
          "A coincidence pair gives directional geometry (a line of response) tied to one annihilation event.",
          "Single detections alone do not localise event position reliably.",
        ],
      },
      {
        id: "t24-3-st4",
        question:
          "Calculate total energy released in e⁻–e⁺ annihilation at rest in MeV.",
        modelAnswer: [
          "Total energy is 2mₑc² = 2 x 0.511 MeV = 1.022 MeV.",
        ],
      },
      {
        id: "t24-3-st5",
        question:
          "Explain one key difference between what PET images and what standard X-ray projection images.",
        modelAnswer: [
          "PET images tracer concentration linked to tissue function/activity.",
          "Standard X-ray projections mainly image structural attenuation differences along the beam path.",
        ],
      },
    ],
  },
};
