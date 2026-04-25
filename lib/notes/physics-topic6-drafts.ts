import type { NoteDraft } from "./types";

/** Full teaching notes for 9702 Topic 6 — subtopics 6.1–6.2 (see lib/notes/AUTHORING.md). */
export const PHYSICS_TOPIC6_DRAFTS: Record<string, NoteDraft> = {
  "t6-1": {
    noteId: "t6-1",
    syllabusNotes: [
      {
        id: "deformation-one-dimension",
        title: "Deformation under tensile and compressive forces",
        paragraphs: [
          "Deformation means a change in size or shape caused by forces. In Topic 6 at AS level, the treatment is one-dimensional: we track how length changes along a single line.",
          "A tensile force pulls and tends to increase length. A compressive force pushes and tends to reduce length. In a wire experiment, tensile loading is usually produced by hanging masses. In a rod or spring under push, compression is measured instead.",
          "The syllabus language is precise: load is the force applied to produce deformation; extension is increase in length; compression is decrease in length. If original length is L and final length is L + x, then x is extension (positive in tension).",
          "Always state units clearly: force in newtons (N), length changes in metres (m). Small extensions are often measured in mm but must be converted to m when combining with SI formulae.",
        ],
      },
      {
        id: "hooke-law-and-proportionality",
        title: "Load, extension and the limit of proportionality",
        paragraphs: [
          "For many materials at small deformation, extension is proportional to load. This is Hooke's law behaviour. For a spring or wire in this region, a graph of force F against extension x is a straight line through the origin.",
          "The limit of proportionality is the greatest load (or stress) for which F is proportional to x. Beyond this point, the graph departs from a straight line and Hooke's law no longer holds exactly.",
          "Hooke's law for a spring is written F = kx within the proportional region. The spring constant k is the gradient of the F-x graph in that region, with SI unit N m⁻¹.",
          "Using k = F/x is valid only when the data point is inside the linear region. If you use a point beyond the limit of proportionality, the ratio F/x is no longer constant and does not represent a valid Hooke-law spring constant.",
        ],
      },
      {
        id: "stress-strain-young-modulus",
        title: "Stress, strain and Young modulus",
        paragraphs: [
          "Stress compares applied force with cross-sectional area: stress = F/A. It has SI unit Pa (N m⁻²). This normalises force to the specimen size so different wires can be compared fairly.",
          "Strain compares extension with original length: strain = x/L. Strain is dimensionless because it is a ratio of two lengths.",
          "Young modulus E links stress and strain in the linear elastic region: E = stress / strain. Combining definitions gives E = (F/A) / (x/L) = FL/(Ax).",
          "A large Young modulus means a material is stiff: large stress is needed for a small strain. A small Young modulus means it extends more easily for the same stress.",
          "Dimensional check: stress has unit Pa and strain is dimensionless, so Young modulus also has unit Pa.",
        ],
      },
      {
        id: "force-extension-graph-interpretation",
        title: "Reading force-extension and stress-strain graphs",
        paragraphs: [
          "On a force-extension graph, gradient in the linear region is k. A steeper slope means larger spring constant and greater resistance to extension.",
          "On a stress-strain graph, gradient in the initial straight section is E. This allows Young modulus to be determined graphically from experimental data.",
          "Do not mix graph types: gradient of F-x gives k, whereas gradient of stress-strain gives E. Both are linear-ratio constants but they are not the same quantity and have different units.",
          "The point where straight-line behaviour ends marks the limit of proportionality. Later you will distinguish this from elastic limit in Topic 6.2.",
        ],
      },
      {
        id: "young-modulus-experiment",
        title: "Experiment to determine Young modulus of a metal wire",
        paragraphs: [
          "A standard method uses a long, thin metal wire clamped at the top with load hanger at the lower end. The original length L is measured between fixed reference marks. Diameter is measured at several points with a micrometer to find mean cross-sectional area A = pi d² / 4.",
          "Loads are added in known steps. For each load, extension x is measured using a pointer-scale arrangement, travelling microscope, or vernier arrangement to improve sensitivity. Readings are often taken on loading and unloading to check repeatability and reduce random error.",
          "For each data point in the proportional region, calculate stress F/A and strain x/L, then compute E = stress/strain. Alternatively, plot stress against strain and take the gradient of the best-fit straight line.",
          "Good practice points expected in exam descriptions include: use a long wire for larger measurable extension, keep loads below the proportional range limit, avoid kinks in wire, measure diameter in two perpendicular directions and at multiple positions, and mention eye-level reading to reduce parallax.",
          "State uncertainties and systematic effects: zero error in micrometer, uncertainty in L and d, temperature rise of wire during loading (which can change length independently), and possible slip at clamps.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Markers in Topic 6.1 reward exact definitions and careful distinction between related ratios. The most common losses are from swapping formulae, using non-SI units inconsistently, or applying Hooke's law outside its valid range.",
      items: [
        "Writing stress as A/F instead of F/A, or using total area units incorrectly (for example mm instead of mm² for cross-section).",
        "Treating strain as having unit m because extension has unit m; strain is extension divided by original length and is dimensionless.",
        "Using k = F/x on a point beyond the limit of proportionality and assuming k is still constant.",
        "Confusing limit of proportionality with elastic limit; they are close for some materials but not identical terms.",
        "Using diameter directly as area in Young modulus calculations rather than converting with A = pi d² / 4.",
        "For Young modulus experiments, describing only formula substitution with no practical detail on how extension and cross-sectional area are measured.",
      ],
    },
    workedExamples: [
      {
        id: "t6-1-ex1",
        title: "Hooke-law spring constant from linear data",
        problem: [
          "A spring extends by 18 mm when a load of 7.2 N is applied. The loading is known to be within the proportional region. Calculate the spring constant k in SI units.",
        ],
        solution: [
          "Hooke's law in the proportional region is F = kx, so k = F/x.",
          "Convert extension to metres: 18 mm = 0.018 m.",
          "Therefore k = 7.2 / 0.018 = 400 N m⁻¹.",
          "Answer: k = 4.0 x 10² N m⁻¹ (2 s.f.).",
        ],
      },
      {
        id: "t6-1-ex2",
        title: "Stress, strain and Young modulus of a wire",
        problem: [
          "A metal wire has original length 2.00 m and diameter 0.50 mm. Under a tensile load of 120 N, its extension is 1.50 mm and behaviour is within the proportional region. Calculate (a) stress, (b) strain and (c) Young modulus.",
        ],
        solution: [
          "Convert dimensions to SI: d = 0.50 mm = 5.0 x 10⁻⁴ m, x = 1.50 mm = 1.50 x 10⁻³ m.",
          "Cross-sectional area A = pi d² / 4 = pi(5.0 x 10⁻⁴)² / 4 = 1.96 x 10⁻⁷ m².",
          "Stress = F/A = 120 / (1.96 x 10⁻⁷) = 6.11 x 10⁸ Pa.",
          "Strain = x/L = (1.50 x 10⁻³) / 2.00 = 7.50 x 10⁻⁴.",
          "Young modulus E = stress/strain = (6.11 x 10⁸) / (7.50 x 10⁻⁴) = 8.15 x 10¹¹ Pa.",
          "So stress is 6.11 x 10⁸ Pa, strain is 7.50 x 10⁻⁴, and E is 8.15 x 10¹¹ Pa.",
        ],
      },
      {
        id: "t6-1-ex3",
        title: "Young modulus from stress-strain graph gradient",
        problem: [
          "In the linear region of a stress-strain graph for a metal wire, two points are (strain 2.0 x 10⁻⁴, stress 4.2 x 10⁷ Pa) and (strain 7.0 x 10⁻⁴, stress 1.47 x 10⁸ Pa). Determine Young modulus.",
        ],
        solution: [
          "Young modulus is the gradient of stress-strain graph in the linear region.",
          "Gradient E = delta stress / delta strain = (1.47 x 10⁸ - 4.2 x 10⁷) / (7.0 x 10⁻⁴ - 2.0 x 10⁻⁴).",
          "So E = (1.05 x 10⁸) / (5.0 x 10⁻⁴) = 2.1 x 10¹¹ Pa.",
          "Answer: E = 2.1 x 10¹¹ Pa.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t6-1-st1",
        question:
          "Define load, extension, compression and limit of proportionality in the context of one-dimensional deformation.",
        modelAnswer: [
          "Load is the force applied to a specimen to deform it.",
          "Extension is the increase in length caused by tensile loading.",
          "Compression is the decrease in length caused by compressive loading.",
          "The limit of proportionality is the greatest load (or stress) for which extension remains directly proportional to load.",
        ],
      },
      {
        id: "t6-1-st2",
        question:
          "State Hooke's law and give the formula for spring constant. Include the condition under which the law is valid.",
        modelAnswer: [
          "Hooke's law states that extension is proportional to applied force provided the limit of proportionality is not exceeded.",
          "In formula form F = kx, so k = F/x.",
          "This applies only in the linear proportional region of the force-extension graph.",
        ],
      },
      {
        id: "t6-1-st3",
        question:
          "A wire of original length 1.60 m extends by 0.80 mm under load. Calculate the strain.",
        modelAnswer: [
          "Convert extension: 0.80 mm = 8.0 x 10⁻⁴ m.",
          "Strain = x/L = (8.0 x 10⁻⁴) / 1.60 = 5.0 x 10⁻⁴.",
          "Strain is dimensionless.",
        ],
      },
      {
        id: "t6-1-st4",
        question:
          "Explain why Young modulus is suitable for comparing stiffness of different materials, whereas spring constant alone is not.",
        modelAnswer: [
          "Young modulus uses stress and strain, which normalise force by area and extension by original length, so the value depends on material property rather than sample size alone.",
          "Spring constant depends on both material and geometry of the sample (length, cross-sectional area, coil design for springs), so it is not a pure material constant.",
        ],
      },
      {
        id: "t6-1-st5",
        question:
          "Describe one practical method to determine Young modulus of a metal wire and identify two significant sources of uncertainty.",
        modelAnswer: [
          "Clamp a long wire, measure original length L, then add known loads and measure extension x in the linear region. Measure diameter at several points with a micrometer to find area A, then calculate E = FL/(Ax) or use gradient of stress-strain plot.",
          "Key uncertainties include diameter measurement (because area depends on d²), extension reading uncertainty (small changes), possible zero error in micrometer, and temperature changes of the wire during loading.",
        ],
      },
    ],
  },
  "t6-2": {
    noteId: "t6-2",
    syllabusNotes: [
      {
        id: "elastic-plastic-elastic-limit",
        title: "Elastic deformation, plastic deformation and elastic limit",
        paragraphs: [
          "Elastic deformation is reversible: when load is removed, the specimen returns to its original dimensions. Plastic deformation is permanent: after unloading, some extension remains.",
          "The elastic limit is the greatest load (or stress) for which deformation is fully recoverable. If loading exceeds elastic limit, unloading leaves a permanent set.",
          "The elastic limit is not exactly the same idea as limit of proportionality. Proportional behaviour can end before permanent deformation begins, so a material can be non-linear yet still elastic over a small range beyond proportionality.",
          "In exam explanations, use these terms precisely and link each to what happens during unloading, because that is what distinguishes elastic from plastic response.",
        ],
      },
      {
        id: "area-under-force-extension",
        title: "Work done from force-extension graph area",
        paragraphs: [
          "Work done in stretching or compressing is the energy transferred by the applied force. For a small extension dx under force F, incremental work is dW = F dx.",
          "Therefore total work done in changing extension from 0 to x is W = integral F dx, which is the area under the force-extension graph between those limits.",
          "This area interpretation is valid for both linear and non-linear graphs. If force is not proportional to extension, the area must be found from graph geometry or numerical methods rather than simple triangle formula.",
          "Units check: force (N) times extension (m) gives N m, equivalent to J.",
        ],
      },
      {
        id: "elastic-potential-energy-linear-region",
        title: "Elastic potential energy within proportional region",
        paragraphs: [
          "When deformation remains within the limit of proportionality, F = kx and the F-x graph is a straight line through the origin.",
          "The work done, and therefore elastic potential energy stored, is the triangular area under the graph: Ep = (1/2)Fx.",
          "Substituting F = kx gives Ep = (1/2)kx². These equivalent forms are required by the syllabus.",
          "This stored energy is recoverable when unloading remains elastic. If plastic deformation occurs, not all input work is recoverable as elastic potential energy.",
        ],
      },
      {
        id: "loading-unloading-and-hysteresis",
        title: "Loading and unloading curves, energy loss and hysteresis",
        paragraphs: [
          "For perfectly elastic Hooke-law behaviour, loading and unloading follow the same straight line and all stored energy is returned.",
          "Real materials often show a different unloading path. The enclosed loop between loading and unloading curves represents energy dissipated as internal thermal energy due to internal friction; this is hysteresis.",
          "If unloading returns to zero extension with no residual strain, behaviour is elastic (possibly non-linear). If unloading intercepts extension axis at a non-zero value, plastic deformation has occurred.",
          "This graph interpretation helps distinguish recoverable elastic energy from total work input.",
        ],
      },
      {
        id: "material-choice-and-design",
        title: "Material behaviour in engineering context",
        paragraphs: [
          "Designers choose materials based on stiffness, elastic range, and ability to absorb energy. Springs require high elastic limit and predictable near-linear response in normal operation.",
          "Components that must not permanently deform are operated below elastic limit with suitable safety factors. Components designed to absorb impact may intentionally undergo controlled plastic deformation.",
          "At AS level, use these ideas qualitatively to explain why force-extension behaviour matters, while calculations focus on graph area and formulas Ep = (1/2)Fx and Ep = (1/2)kx² in the proportional region.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "In Topic 6.2, high-scoring answers connect vocabulary to graph evidence and energy interpretation. Marks are commonly lost by treating every deformation as elastic or by using the half-kx² formula outside its valid conditions.",
      items: [
        "Using elastic and proportional as if they are identical; a material may be elastic in a region where force-extension is not proportional.",
        "Calling any non-linear graph plastic. Non-linearity alone does not prove permanent deformation; unloading behaviour is the deciding test.",
        "Applying Ep = (1/2)kx² when the graph is curved and Hooke's law is not valid at that extension.",
        "Forgetting that area under force-extension graph gives work done in joules, not force or extension.",
        "Describing energy as lost during loading-unloading loops instead of transferred to internal energy (dissipated) due to hysteresis.",
        "Failing to mention elastic limit when asked to distinguish elastic and plastic behaviour.",
      ],
    },
    workedExamples: [
      {
        id: "t6-2-ex1",
        title: "Elastic potential energy from Hooke-law data",
        problem: [
          "A spring with constant k = 320 N m⁻¹ is stretched by 4.5 cm, staying within its limit of proportionality. Find (a) the final force and (b) the elastic potential energy stored.",
        ],
        solution: [
          "Convert extension: x = 4.5 cm = 0.045 m.",
          "Final force from Hooke's law: F = kx = 320 x 0.045 = 14.4 N.",
          "Elastic potential energy in linear region: Ep = (1/2)kx² = 0.5 x 320 x (0.045)² = 0.324 J.",
          "Equivalent check using Ep = (1/2)Fx gives 0.5 x 14.4 x 0.045 = 0.324 J.",
        ],
      },
      {
        id: "t6-2-ex2",
        title: "Work done from non-linear force-extension graph area",
        problem: [
          "A polymer strip has force-extension data: at x = 0.010 m, F = 12 N; at x = 0.020 m, F = 20 N. Between these points the graph is approximately a straight line. Estimate the additional work done in stretching from 0.010 m to 0.020 m.",
        ],
        solution: [
          "Work done over an extension interval is area under the F-x graph.",
          "Here the segment is approximated by a trapezium with parallel sides 12 N and 20 N, width 0.010 m.",
          "Area = (1/2)(12 + 20) x 0.010 = 0.16 J.",
          "So additional work done in this interval is 0.16 J.",
        ],
      },
      {
        id: "t6-2-ex3",
        title: "Identifying plastic deformation from loading-unloading data",
        problem: [
          "A wire is loaded to extension 2.4 mm, then unloaded to zero force. The extension at zero force is 0.3 mm. Explain the behaviour and estimate the elastic extension recovered during unloading.",
        ],
        solution: [
          "Because extension is non-zero at zero load after unloading, the wire has permanent set, so plastic deformation occurred.",
          "Total extension at max load was 2.4 mm. Residual extension after unloading is 0.3 mm.",
          "Elastic extension recovered is 2.4 - 0.3 = 2.1 mm.",
          "Hence behaviour includes both elastic recovery (2.1 mm) and plastic deformation (0.3 mm permanent).",
        ],
      },
    ],
    selfTest: [
      {
        id: "t6-2-st1",
        question:
          "Define elastic deformation, plastic deformation and elastic limit. State how unloading behaviour distinguishes elastic from plastic response.",
        modelAnswer: [
          "Elastic deformation is reversible: specimen returns to original dimensions when load is removed.",
          "Plastic deformation is permanent: non-zero deformation remains after unloading.",
          "Elastic limit is the greatest load/stress for which deformation remains fully recoverable.",
          "Unloading back to original length indicates elastic response; residual extension indicates plastic response.",
        ],
      },
      {
        id: "t6-2-st2",
        question:
          "Explain why the area under a force-extension graph equals work done in deforming a specimen.",
        modelAnswer: [
          "For a small extension dx under force F, incremental work is dW = F dx.",
          "Summing all small contributions from 0 to x gives W = integral F dx.",
          "Graphically, this integral is the area under the force-extension curve.",
        ],
      },
      {
        id: "t6-2-st3",
        question:
          "A spring is extended by 0.030 m and the final force is 9.0 N in the proportional region. Calculate the elastic potential energy stored.",
        modelAnswer: [
          "Within the proportional region, Ep = (1/2)Fx.",
          "Ep = 0.5 x 9.0 x 0.030 = 0.135 J.",
        ],
      },
      {
        id: "t6-2-st4",
        question:
          "A force-extension graph is curved from the origin and returns along the same curve when unloaded. Is the behaviour elastic, proportional, both, or neither? Explain.",
        modelAnswer: [
          "The behaviour is elastic because unloading returns to the original length with no residual deformation.",
          "It is not proportional because the graph is not a straight line through the origin, so force is not directly proportional to extension.",
        ],
      },
      {
        id: "t6-2-st5",
        question:
          "State the formulas Ep = (1/2)Fx and Ep = (1/2)kx², and explain the condition under which each may be used safely.",
        modelAnswer: [
          "Ep = (1/2)Fx uses the final force F at extension x and is valid for linear Hooke-law behaviour where force rises uniformly from 0 to F.",
          "Ep = (1/2)kx² follows from F = kx and is valid only within the limit of proportionality.",
          "Outside the proportional region, energy must be found from the actual graph area rather than these linear formulas.",
        ],
      },
    ],
  },
};
