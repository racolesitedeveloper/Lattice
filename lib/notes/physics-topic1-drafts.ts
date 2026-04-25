import type { NoteDraft } from "./types";

/** Full teaching notes for 9702 Topic 1 — subtopics 1.1–1.4 (see lib/notes/AUTHORING.md). */
export const PHYSICS_TOPIC1_DRAFTS: Record<string, NoteDraft> = {
  "t1-1": {
    noteId: "t1-1",
    syllabusNotes: [
      {
        id: "physical-quantity",
        title: "Physical quantities, magnitude and units",
        paragraphs: [
          "In Cambridge International A Level Physics, a physical quantity is what you measure or what you calculate from measurements. Examples include length, time interval, mass, current, force, energy and many more. Every such quantity has two inseparable parts: a numerical magnitude and a unit. The magnitude tells you ‘how much’ and the unit tells you ‘in what standard chunk’ that amount is expressed.",
          "A number on its own is not a physical quantity. Writing 9.81 tells the examiner nothing unless you add that it is an acceleration in m s⁻², a field strength in N kg⁻¹, or some other stated quantity. Conversely, if a ratio is defined as the quotient of two quantities of the same kind (for example two lengths), it may be dimensionless: it has no unit because the units cancel. Examples include refractive index n = speed in vacuum / speed in medium, and the sine of an angle in a right-triangle definition (opposite/hypotenuse as a ratio of lengths).",
          "You are expected to use correct SI style in written work: a space between the numerical value and the unit symbol (e.g. 12.0 m, not 12.0m), and a decimal point on the line (not a comma) in line with international examination practice. Use negative indices for division in compound units (e.g. m s⁻¹ for speed, kg m s⁻² for the newton) unless a question explicitly uses another acceptable form.",
          "Whether a quantity is a scalar or a vector is important for mechanics, but the syllabus treats that systematically in section 1.4. Here the focus is on units, dimensions and consistency of equations — skills you will use in every later topic.",
        ],
      },
      {
        id: "si-base-derived",
        title: "The SI, base quantities and derived quantities",
        paragraphs: [
          "The International System of Units (SI) defines seven independent base quantities. Each has a name, a symbol for the quantity and a defined unit. At A Level you should know the set and the corresponding SI unit symbols:",
        ],
        bullets: [
          "Length l, unit metre (m)",
          "Mass m, unit kilogram (kg)",
          "Time t, unit second (s)",
          "Electric current I, unit ampere (A)",
          "Thermodynamic temperature T, unit kelvin (K)",
          "Amount of substance n, unit mole (mol)",
          "Luminous intensity, unit candela (cd)",
        ],
      },
      {
        id: "derived-from-base",
        title: "Derived quantities",
        paragraphs: [
          "A derived quantity is defined in terms of products and quotients of base quantities. Its SI unit is therefore a product or quotient of the base units. For example, speed is defined as distance divided by time, so its SI unit is m s⁻¹. Force, from Newton’s second law, has the unit kg m s⁻²; that combination is given the special name newton (symbol N). Energy has the unit kg m² s⁻², named the joule (J).",
          "You do not need to memorise every named derived unit at the start of the course, but you must be able to express any given derived quantity in terms of base units when asked — this is the key skill for checking homogeneity and for dimensional analysis.",
          "Prefixes (such as k for kilo-, m for milli-, μ for micro-) scale the magnitude of a quantity in powers of ten; they are part of how we write values, not part of the dimensional definition of the quantity itself. Prefix manipulation is developed further in section 1.2.",
        ],
      },
      {
        id: "homogeneity",
        title: "Homogeneous equations",
        paragraphs: [
          "An equation in physics is only meaningful if it is homogeneous: every separate term that is added or subtracted on one side of the equation must represent the same physical kind of quantity as every other such term, and the same as the single quantity on the other side (or the same as the corresponding sum on the other side).",
          "For example, in constant linear acceleration work you meet s = ut + ½at². Here s, ut and ½at² must all have the dimension of length. The factor ½ is a pure number; numbers never carry dimensions. If you accidentally wrote s = ut + ½at³, the last term would have an extra factor of time in its dimensions and the equation would not be homogeneous — it could not represent a correct physical relationship.",
          "Multiplication and division are allowed to combine quantities to make a new quantity (e.g. force × displacement gives work). The homogeneity rule applies to terms linked by + or −, and to the two sides of an equation related by =.",
        ],
      },
      {
        id: "dimensions",
        title: "Dimensions and base-unit form",
        paragraphs: [
          "To check an equation quickly, replace each quantity by its dimensions in terms of base dimensions. Square brackets mean ‘the dimensions of’. For mass, length and time one writes [M], [L] and [T]. Electric current contributes [I], and thermodynamic temperature contributes [Θ]. Amount of substance and luminous intensity each have a place in the complete SI dimensional set; at this stage most examination questions on 1.1 use mechanics lines built from [M], [L] and [T], sometimes with [I] or [Θ] when the context demands it.",
          "Rules: quantities multiplied have dimensions multiplied; quantities divided have dimensions divided; powers raise every dimension inside the brackets to that power. For example, speed v = distance/time has [v] = [L][T]⁻¹. Acceleration has [a] = [L][T]⁻². Force, from F = ma, has [F] = [M][L][T]⁻².",
          "Angles in radians are defined as arc length divided by radius: θ = s/r. Both s and r are lengths, so an angle is dimensionless: [θ] = 1. Trigonometric functions therefore take dimensionless arguments; sin θ, cos θ and tan θ have no unit. This is why you cannot take the sine of a physical quantity that still carries units — you must form a dimensionless ratio first.",
          "If a formula contains a sum such as 1 + v/c where c is wave speed, the 1 is dimensionless, so v/c must also be dimensionless — which it is, because [v] = [c] = [L][T]⁻¹.",
        ],
      },
      {
        id: "dimensionless-constants",
        title: "Dimensionless ratios and physical constants",
        paragraphs: [
          "Pure numbers such as ½, π, or integers appearing in counting or in formulae are dimensionless. They do not change the dimensional balance of an equation.",
          "A physical constant may carry units (e.g. the speed of light in vacuum c, with unit m s⁻¹) or be defined as a measured combination that has units. Do not confuse a listed constant with a pure number unless its definition makes it dimensionless.",
          "When you use dimensional analysis to guess or check the form of a relationship, unknown multipliers are usually assumed to be dimensionless constants until experiment or fuller theory fixes them. For example, if you deduce that period T might be proportional to √(l/g), a dimensionless constant k could sit in front: T = k√(l/g). Finding k = 2π needs physics beyond dimensions alone.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Examiners reward clear definitions, correct use of SI, and explicit dimensional reasoning. Many marks are lost through presentation and through mixing ideas that belong to different syllabus sections.",
      items: [
        "Stating a numerical answer with no unit when the question asks for a physical quantity, or omitting the unit in intermediate steps so that the final line appears from nowhere.",
        "Claiming that a trigonometric function of an angle ‘has unit radian’. The angle may be measured in radians, but sin θ, cos θ and tan θ are dimensionless.",
        "Adding or subtracting terms in an equation without checking that every term has the same dimensions — then ‘proving’ a false formula by algebra alone.",
        "Treating grams as the SI base unit of mass. The base unit is the kilogram; the gram is a decimal submultiple with the prefix notation (g).",
        "Using the same symbol for two different quantities in one script (e.g. T for both period and temperature) without defining each case.",
        "Writing compound units ambiguously (e.g. m s⁻¹ must not be read as m × s⁻¹ by accident in messy handwriting — keep spacing clear, or use negative indices consistently).",
      ],
    },
    workedExamples: [
      {
        id: "t1-1-ex1",
        title: "Classifying base quantities, derived quantities and dimensionless quantities",
        problem: [
          "For each of the following, state whether it is a base quantity in the SI, a derived quantity, or neither. Give a brief reason in each case. (a) time interval, (b) density, (c) sin θ where θ is an angle in a triangle, (d) electric current.",
        ],
        solution: [
          "(a) Time interval is a base quantity in the SI. Time is one of the seven independent base quantities; its unit is the second (s).",
          "(b) Density ρ = mass/volume is a derived quantity. It is defined from mass and length; its SI unit is kg m⁻³ (no special name required at A Level).",
          "(c) sin θ is neither a base nor a derived physical quantity in the sense of carrying SI dimensions on its own. It is dimensionless: it is formed as a ratio of lengths in the geometric definition, so its value has no unit.",
          "(d) Electric current is a base quantity in the SI. Its unit is the ampere (A). (Note: although the ampere has a formal definition linked to forces between currents, at A Level you treat current as base and charge as derived.)",
        ],
      },
      {
        id: "t1-1-ex2",
        title: "Using homogeneity to reject an incorrect equation",
        problem: [
          "A student suggests that for motion from rest with constant acceleration a, the displacement is s = ut + ½at³, where u is initial speed. Use dimensional reasoning to show that this cannot be correct as written.",
        ],
        solution: [
          "Write the dimensions of each term using [M], [L], [T]. Displacement s is a length: [s] = [L]. The term ut has [u][t] = [L][T]⁻¹[T] = [L], which is consistent with displacement. The term ½at³: [a] = [L][T]⁻² and [t³] = [T]³, so [at³] = [L][T]⁻²[T]³ = [L][T]. That is not [L] unless [T] were zero, which is meaningless. Therefore at³ cannot be added to ut to give a displacement: the equation is not homogeneous and cannot represent the claimed physical situation.",
          "The correct suvat form for displacement from suvat with constant a is s = ut + ½at²; check as an exercise that every term has dimension [L].",
        ],
      },
      {
        id: "t1-1-ex3",
        title: "Dimensions of an unknown constant in a proposed relationship",
        problem: [
          "A particle of mass m moves in a circle of radius r at constant speed v. A student proposes that the magnitude of the resultant force towards the centre is F = k m v² r, where k is a constant. Use dimensions to comment on this formula.",
        ],
        solution: [
          "Dimensions: [F] = [M][L][T]⁻². Right-hand side: [m] = [M], [v²] = [L²][T]⁻², [r] = [L]. So [k m v² r] = [k][M][L²][T]⁻²[L] = [k][M][L³][T]⁻².",
          "For the equation to be homogeneous, [k][M][L³][T]⁻² must equal [M][L][T]⁻². Hence [k][L²] = 1, so [k] = [L]⁻². The constant k could not be dimensionless; it would have to carry dimensions of inverse area. The standard centripetal result is F = mv²/r, i.e. F = k mv²/r with k dimensionless (k = 1). The student’s proposed power of r is therefore inconsistent with dimensional homogeneity.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t1-1-st1",
        question:
          "Define what is meant by a derived quantity and give one example, stating its definition in terms of base quantities.",
        modelAnswer: [
          "A derived quantity is one that is defined by multiplying or dividing base quantities (and possibly other derived quantities) according to a physical law or definition. Example: speed is defined as distance divided by time, so speed is derived from length and time. (Accept any correct standard example with a clear definition.)",
        ],
      },
      {
        id: "t1-1-st2",
        question:
          "Explain what is meant by a homogeneous equation. State clearly what happens to the dimensions of two quantities if they are added together in a valid physical equation.",
        modelAnswer: [
          "A homogeneous equation is one in which every term that is added or subtracted has the same dimensions, and the two sides of the equation match in dimensions. If two quantities are added, they must have identical dimensions; otherwise the sum has no physical meaning.",
        ],
      },
      {
        id: "t1-1-st3",
        question:
          "Use dimensions to show that the period T of a simple pendulum cannot be proportional to m alone, where m is the bob mass and g is gravitational field strength.",
        modelAnswer: [
          "[T] is the dimension of period. Mass has [m] = [M]. If T ∝ m then we would need [T] = [M], which is impossible because no combination of powers of mass alone can produce time. (A full treatment shows T may depend on l and g; dimensional analysis gives T ∝ √(l/g) up to a dimensionless constant.)",
        ],
      },
      {
        id: "t1-1-st4",
        question:
          "State whether each of the following is dimensionless. Give a one-line reason for each: (a) π, (b) refractive index n = cᵥ / cₘ where cᵥ and cₘ are speeds in vacuum and in a medium, (c) ln(2) where 2 is a pure counting number.",
        modelAnswer: [
          "(a) π is dimensionless — it is a pure mathematical constant with no unit. (b) n is dimensionless — it is the ratio of two speeds, so units cancel. (c) ln(2) is dimensionless — the logarithm of a pure number has no unit. (Note: taking the logarithm of a quantity that still carries units is not defined in this context.)",
        ],
      },
      {
        id: "t1-1-st5",
        question:
          "Show that each term in v² = u² + 2as has the same dimensions, where v and u are speeds and a is acceleration.",
        modelAnswer: [
          "[v²] = [L²][T]⁻² and [u²] = [L²][T]⁻². For 2as: [a][s] = [L][T]⁻²[L] = [L²][T]⁻². The factor 2 is dimensionless. All three terms have dimension [L²][T]⁻², so the equation is homogeneous.",
        ],
      },
    ],
  },

  "t1-2": {
    noteId: "t1-2",
    syllabusNotes: [
      {
        id: "si-base-recap",
        title: "SI base units and derived units in use",
        paragraphs: [
          "Section 1.1 established what base and derived quantities are. Section 1.2 is about using the SI cleanly in calculations and in your written answers: standard prefixes, scientific notation, compound units, and order-of-magnitude estimates. Examiners expect you to move fluently between, for example, metres and millimetres, or joules and megajoules, without losing powers of ten.",
          "The seven SI base units (m, kg, s, A, K, mol, cd) are fixed in the syllabus you are following; every other unit you meet at A Level in mechanics and thermal physics can be traced back to combinations of these. When a question asks for an answer in SI base units, reduce named units (N, J, W, …) until only base symbols remain.",
        ],
      },
      {
        id: "prefixes",
        title: "Prefixes and powers of ten",
        paragraphs: [
          "Prefixes attach to the unit symbol to scale the numerical value by an integer power of ten. You must know the common multiples and submultiples used in physics:",
        ],
        bullets: [
          "T (tera) 10¹², G (giga) 10⁹, M (mega) 10⁶, k (kilo) 10³",
          "d (deci) 10⁻¹, c (centi) 10⁻², m (milli) 10⁻³, μ (micro) 10⁻⁶, n (nano) 10⁻⁹, p (pico) 10⁻¹²",
        ],
      },
      {
        id: "prefix-conventions",
        title: "Kilogram, preferred form and compound prefixes",
        paragraphs: [
          "The kilogram is unusual: the base unit itself carries the prefix kilo. You still write mg for milligram (10⁻³ g) and kg for kilogram; do not invent forms such as kkg.",
          "SI convention prefers prefixes so that the numerical part lies roughly between 0.1 and 1000 when a choice exists — for example 3.3 × 10⁻⁴ m is often written as 0.33 mm or 330 μm depending on context, but 3.3 × 10⁻⁴ m is always acceptable if the question does not demand a particular prefix.",
          "Compound prefixes (two prefix symbols on the same unit) are not allowed. One prefix per unit.",
        ],
      },
      {
        id: "notation",
        title: "Writing compound units and scientific notation",
        paragraphs: [
          "Multiplication within a unit can be shown by a half-high dot or a space: N·m or N m for newton metre. Division is shown by negative indices, a solidus, or a fraction — m s⁻¹ or m/s are both widely accepted; negative indices make repeated division unambiguous (e.g. kg m s⁻² for the newton).",
          "Scientific notation means writing a value as a × 10ⁿ where 1 ≤ |a| < 10 (or sometimes a is given to one digit before the point in intermediate working). It is essential for very large or very small quantities (charge on an electron, astronomical distances) and for keeping significant figures under control on the calculator display.",
          "Your final line should match the precision implied by the data (developed further with uncertainties in section 1.3). For now: do not copy ten digits from the calculator if the inputs had only two or three significant figures.",
        ],
      },
      {
        id: "estimates",
        title: "Orders of magnitude and sensible estimates",
        paragraphs: [
          "An order-of-magnitude estimate is a value correct to about a factor of ten — enough to check whether a numerical answer is physically ridiculous. You should be able to recall or reconstruct everyday scales: room temperature ≈ 300 K, walking speed ≈ 1 m s⁻¹, mass of an adult ≈ 70 kg, height of a person ≈ 2 m, g ≈ 10 m s⁻² for rough work unless a question specifies 9.81 m s⁻².",
          "Estimation questions often say to one significant figure or order of magnitude. Then you are not being asked for a catalogue value to six figures; you are being asked to show physical judgement: correct unit, sensible power of ten, and a short chain of reasoning (e.g. volume of room × density of air ≈ mass of air in the room).",
          "When you estimate, state your assumptions in words (e.g. model the student as a cylinder of height 1.7 m and radius 0.15 m). The examiner can then follow your logic even if they would have chosen slightly different numbers.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "SI and prefix questions are often easy marks — they are lost through careless notation, double prefixes, or answers that are numerically right but given in non-standard or ambiguous units.",
      items: [
        "Using M for milli or m for mega — case matters: M is mega, m is milli, and m is also the symbol for metre, so m next to a unit must be read in context (usually metre unless clearly a prefix before another symbol).",
        "Writing kgs for kilograms: the correct symbol is kg (compound of k + g), not kgs.",
        "Giving an area in m rather than m², or a volume in m² — always attach the correct power to the unit for the dimension you have calculated.",
        "Losing a factor of 10³ when converting between J and kJ, or A and mA, because the prefix was applied to the wrong part of the expression.",
        "Stating the answer is 5 when the quantity has a unit in the question — the magnitude and the unit together form the quantity.",
      ],
    },
    workedExamples: [
      {
        id: "t1-2-ex1",
        title: "Prefixes and conversion in one chain",
        problem: [
          "A resistor dissipates 2.50 × 10⁴ J of energy in 5.0 minutes. Calculate the mean power in watts and express the same power in kilowatts.",
        ],
        solution: [
          "Time in SI base form: 5.0 min = 5.0 × 60 s = 300 s.",
          "Power P = energy / time = (2.50 × 10⁴ J) / 300 s = 83.333… J s⁻¹. The data 2.50 × 10⁴ is given to three significant figures; quote P = 83.3 W to three significant figures (or justify rounding to two if 5.0 min is treated as two s.f. only — state the weaker input).",
          "In kilowatts: P = 83.3 / 1000 kW = 0.0833 kW, or 8.33 × 10⁻² kW.",
        ],
      },
      {
        id: "t1-2-ex2",
        title: "Expressing a derived unit in SI base units",
        problem: [
          "The volt is defined so that 1 V = 1 J C⁻¹. The coulomb is A s. Express the volt in SI base units only.",
        ],
        solution: [
          "Energy: 1 J = 1 N m, and 1 N = 1 kg m s⁻², so 1 J = 1 kg m² s⁻².",
          "Charge: 1 C = 1 A s.",
          "Therefore 1 V = 1 J C⁻¹ = (1 kg m² s⁻²) / (1 A s) = 1 kg m² s⁻³ A⁻¹.",
          "So the volt in base units is kg m² s⁻³ A⁻¹. (You are not usually required to reproduce this from memory in AS papers, but you must be able to follow the reasoning when asked.)",
        ],
      },
      {
        id: "t1-2-ex3",
        title: "Order-of-magnitude estimate",
        problem: [
          "Estimate, to one significant figure, the mass of air in a classroom measuring roughly 10 m × 8 m × 3 m. Take the density of air as about 1 kg m⁻³.",
        ],
        solution: [
          "Volume V ≈ 10 × 8 × 3 m³ = 240 m³. To one significant figure, V ≈ 200 m³, or keep 240 m³ and round the final mass to one significant figure.",
          "Mass m = ρV ≈ (1 kg m⁻³) × (240 m³) ≈ 200 kg to one significant figure.",
          "Stated clearly: m ≈ 200 kg (order of magnitude 10² kg). Assumptions: air density uniform, room empty of furniture volume, dimensions given as rough maxima.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t1-2-st1",
        question:
          "Convert 4.8 × 10⁻⁷ m into nanometres and write the result in standard prefix form.",
        modelAnswer: [
          "1 nm = 10⁻⁹ m, so 4.8 × 10⁻⁷ m = 4.8 × 10⁻⁷ / 10⁻⁹ nm = 4.8 × 10² nm = 480 nm. (Equivalently 0.48 μm if asked for micrometres.)",
        ],
      },
      {
        id: "t1-2-st2",
        question:
          "Explain why the symbol μμF for capacitance is not acceptable in SI usage, and suggest an acceptable replacement.",
        modelAnswer: [
          "SI does not allow two prefixes on the same unit symbol. μμ would imply a compound prefix. Replace with a single prefix on the farad: 1 μμF historically meant 10⁻¹² F, which should be written as pF (picofarad).",
        ],
      },
      {
        id: "t1-2-st3",
        question:
          "Show that the watt is equivalent to kg m² s⁻³ in SI base units.",
        modelAnswer: [
          "P = W = J s⁻¹. Energy J = N m = (kg m s⁻²)(m) = kg m² s⁻². So W = J s⁻¹ = kg m² s⁻³.",
        ],
      },
      {
        id: "t1-2-st4",
        question:
          "Give one reason examination boards prefer m s⁻² over m/s/s for acceleration in printed formulae.",
        modelAnswer: [
          "Negative indices make the structure of division unambiguous and avoid stacked fraction lines that are easy to mis-read in handwritten work.",
        ],
      },
      {
        id: "t1-2-st5",
        question:
          "Estimate the kinetic energy of a car of mass 1.2 × 10³ kg moving at motorway speed, to one significant figure. State any assumption you make for the speed.",
        modelAnswer: [
          "Assume speed ≈ 30 m s⁻¹ (about 70 mph, one significant figure). Ek = ½mv² ≈ 0.5 × 1200 × 900 J ≈ 5 × 10⁵ J to one significant figure (accept other reasonable speed assumptions if stated).",
        ],
      },
    ],
  },

  "t1-3": {
    noteId: "t1-3",
    syllabusNotes: [
      {
        id: "precision-accuracy",
        title: "Precision, accuracy and the idea of uncertainty",
        paragraphs: [
          "Precision describes how close repeated readings are to one another — a precise data set has small scatter. Accuracy describes how close a measured value (or mean of readings) is to the true value accepted for that quantity. A precise instrument can still be inaccurate if it suffers from systematic error (e.g. a clock that always runs fast by the same percentage).",
          "Uncertainty is the interval within which you believe the true value probably lies, given your procedure and instrument resolution. At A Level you quote uncertainty as an absolute value in the same unit as the measurement, or as a fractional (or percentage) uncertainty. Always state what your uncertainty represents (e.g. half the spread of repeat readings, or instrument resolution).",
        ],
      },
      {
        id: "random-systematic",
        title: "Random uncertainty and systematic error",
        paragraphs: [
          "Random uncertainty arises from unpredictable fluctuations: human reaction time, electronic noise, small variations in release conditions. Repeating the measurement and averaging reduces the effect of random scatter on the mean, though it does not change the resolution limit of a single reading.",
          "Systematic error shifts all readings in a related way: a zero offset on a voltmeter, a ruler end that is worn, ignoring air resistance when the model assumes none. Averaging does not remove a systematic bias. You identify it by independent checks (different method, calibration against a standard, or a graph whose intercept does not match theory when the gradient is believable).",
          "In written answers, distinguish clearly: random uncertainty in the timings versus systematic error due to … Vague use of error when you mean uncertainty loses marks.",
        ],
      },
      {
        id: "quoting",
        title: "Quoting measurements and uncertainties",
        paragraphs: [
          "A common convention is to quote the uncertainty Δx to one significant figure, unless the leading digit is 1 when some mark schemes allow two significant figures in Δx to avoid losing information. The mean value is then rounded so that its least significant digit aligns with the place value of the uncertainty.",
          "Example: mean time t̄ = 1.247 s with estimated uncertainty ±0.012 s → round Δt to 0.01 s (1 s.f.) and quote t = (1.25 ± 0.01) s.",
          "Instrument resolution is the smallest change the device can show. If you use a digital meter that reads to 0.01 V, the reading 1.25 V has an implied resolution uncertainty often taken as ±0.01 V at a basic level, unless a specification gives a different accuracy.",
        ],
      },
      {
        id: "combining",
        title: "Combining uncertainties in derived quantities",
        paragraphs: [
          "When you add or subtract quantities (z = x ± y), absolute uncertainties combine in the simple sum form used at A Level for worst-case propagation:",
          "Δz ≈ Δx + Δy (absolute uncertainties add).",
          "When you multiply or divide (z = xy or z = x/y), fractional uncertainties add approximately:",
          "Δz / |z| ≈ Δx / |x| + Δy / |y|.",
          "For a power, z = xⁿ: fractional uncertainty in z is about |n| times the fractional uncertainty in x:",
          "Δz / |z| ≈ |n| Δx / |x|.",
          "These rules are consistent with differentiation for small errors. If a question states that uncertainties are independent and asks for quadrature combination, use √(sum of squares) instead — read the stem carefully.",
        ],
      },
      {
        id: "graphs",
        title: "Uncertainties from graphs",
        paragraphs: [
          "When you determine a gradient from a straight-line graph, draw error bars (if data are provided with uncertainties) and a line of best fit. To estimate uncertainty in the gradient, draw worst acceptable lines of maximum and minimum reasonable slope through or near the error bars, then find the spread in gradient values. Similar ideas apply to the intercept.",
          "If error bars are smaller than the point symbol, state that you take the uncertainty from the scatter of points or from a stated percentage. Always show on the graph how your lines were chosen when the question asks for a graphical uncertainty.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Uncertainty questions test definitions, correct propagation, and honest treatment of data. Marks go for correct structure and matching precision, not for inventing small uncertainties.",
      items: [
        "Calling a systematic shift random because the points look scattered — separate the overall bias from scatter about a wrong line.",
        "Quoting Δx with three significant figures while the mean has four — the uncertainty should not look more precise than the measurement.",
        "Using percentage uncertainty on one quantity and forgetting to convert back to absolute form when adding lengths.",
        "For P = I²R, forgetting to double the fractional uncertainty in I when squaring (use ΔP/P ≈ 2ΔI/I + ΔR/R in the standard linear combination).",
        "Claiming that more repeats always improves accuracy — they improve the precision of the mean for random effects, not systematic error.",
      ],
    },
    workedExamples: [
      {
        id: "t1-3-ex1",
        title: "Mean and uncertainty from repeat readings",
        problem: [
          "Five values for the period T of a pendulum (in s) are: 1.84, 1.91, 1.87, 1.88, 1.90. Calculate the mean period and estimate the uncertainty as half the range. Quote T in the form (mean ± uncertainty) s with sensible rounding.",
        ],
        solution: [
          "Mean: T̄ = (1.84 + 1.91 + 1.87 + 1.88 + 1.90) / 5 = 9.40 / 5 = 1.880 s.",
          "Range = max − min = 1.91 − 1.84 = 0.07 s. Half-range = 0.035 s. Use this as a simple uncertainty estimate: round ΔT to 0.04 s (one significant figure).",
          "Round the mean to match: T = (1.88 ± 0.04) s. (Accept slightly different conventions if the question specifies range or standard deviation of the mean.)",
        ],
      },
      {
        id: "t1-3-ex2",
        title: "Fractional uncertainty in a product",
        problem: [
          "A wire has resistance R = (8.0 ± 0.4) Ω and carries current I = (0.50 ± 0.02) A. Estimate the fractional uncertainty in the power dissipated P = I²R, using ΔP/P ≈ 2ΔI/I + ΔR/R.",
        ],
        solution: [
          "ΔI/I = 0.02 / 0.50 = 0.04 (4%). ΔR/R = 0.4 / 8.0 = 0.05 (5%).",
          "ΔP/P ≈ 2 × 0.04 + 0.05 = 0.08 + 0.05 = 0.13, i.e. about 13% fractional uncertainty.",
          "Note: if you had incorrectly used ΔP/P ≈ ΔI/I + ΔR/R, you would underestimate the effect of squaring the current.",
        ],
      },
      {
        id: "t1-3-ex3",
        title: "Identifying systematic error from a pattern of points",
        problem: [
          "In an experiment to verify Hooke’s law, force F is plotted against extension x for a spring. All measured points lie systematically above the theoretical straight line F = kx that uses the accepted value of k from a single calibration. Suggest one plausible type of error and one action to test it.",
        ],
        solution: [
          "A systematic effect is suggested because the deviation has a consistent direction (not just scatter about the line).",
          "Plausible explanation: the nominal value of k used for the line was too small (calibration done on a different spring), or there is a non-zero intercept because the scale was not zeroed when F = 0, or an unremoved offset mass adds a constant force.",
          "Test: remeasure k with the same spring and plot again; check zero with no load; use an independent method (e.g. oscillation period T = 2π√(m/k)) to find k and compare.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t1-3-st1",
        question:
          "Distinguish between precision and accuracy in the context of a set of repeat measurements of a single quantity.",
        modelAnswer: [
          "Precision describes how close the readings are to each other (small spread implies high precision). Accuracy describes how close the mean (or a reading) is to the true value of the quantity; high precision does not guarantee accuracy if systematic error is present.",
        ],
      },
      {
        id: "t1-3-st2",
        question:
          "Two lengths are (12.0 ± 0.2) cm and (8.0 ± 0.2) cm. Find the absolute uncertainty in their sum S = L₁ + L₂.",
        modelAnswer: [
          "For addition, absolute uncertainties add: ΔS ≈ ΔL₁ + ΔL₂ = 0.2 + 0.2 = 0.4 cm. Quote S = (20.0 ± 0.4) cm after checking the mean is 20.0 cm.",
        ],
      },
      {
        id: "t1-3-st3",
        question:
          "A quantity Q is calculated from Q = a³ / b. If the fractional uncertainty in a is 2% and in b is 3%, estimate the fractional uncertainty in Q.",
        modelAnswer: [
          "ΔQ/Q ≈ 3(Δa/a) + Δb/b = 3 × 0.02 + 0.03 = 0.06 + 0.03 = 0.09 or 9% (linear combination as usually taught at A Level for products and powers).",
        ],
      },
      {
        id: "t1-3-st4",
        question:
          "Explain why averaging many repeat readings reduces the effect of random uncertainty on the mean but does not remove systematic error.",
        modelAnswer: [
          "Random fluctuations tend to cancel partially across many readings, so the mean becomes more stable. Systematic error shifts every reading by a correlated amount in the same sense, so the mean is shifted by the same bias.",
        ],
      },
      {
        id: "t1-3-st5",
        question:
          "On a graph of y against x, what is the purpose of drawing two additional lines besides the line of best fit when estimating uncertainty in the gradient?",
        modelAnswer: [
          "The two extra lines are worst acceptable slopes (steepest and shallowest reasonable lines) consistent with the data and error bars. The range of gradients they give estimates the uncertainty in the gradient.",
        ],
      },
    ],
  },

  "t1-4": {
    noteId: "t1-4",
    syllabusNotes: [
      {
        id: "scalar-vector-def",
        title: "Scalars and vectors",
        paragraphs: [
          "A scalar quantity is specified by a magnitude and a unit (and sign if the quantity can be negative in a chosen convention, such as potential). Examples: distance, speed, mass, energy, temperature, time interval, electric potential.",
          "A vector quantity is specified by a magnitude, a unit, and a direction in space (or equivalently by components in a chosen coordinate system). Examples: displacement, velocity, acceleration, force, momentum, electric field strength.",
          "Displacement is the straight-line vector from start to finish; distance is the scalar length of the path actually travelled. For a curved path, distance can exceed the magnitude of displacement. Speed is the magnitude of the rate of covering distance; velocity is the rate of change of displacement and is a vector.",
        ],
      },
      {
        id: "representation",
        title: "Representing vectors",
        paragraphs: [
          "A vector is drawn as a directed line segment: length to a chosen scale represents magnitude, and arrowhead shows direction. Two vectors are equal only if they have the same magnitude and the same direction; parallel translation does not change a free vector.",
          "The negative of a vector A has the same magnitude as A but the opposite direction. Multiplying a vector by a positive scalar changes its length but not its direction (unless the scalar is zero, which gives the zero vector). Multiplying by a negative scalar reverses the direction.",
        ],
      },
      {
        id: "addition",
        title: "Adding vectors: triangle and parallelogram rules",
        paragraphs: [
          "To add two vectors A and B graphically, place them nose to tail: draw A, then draw B starting from the tip of A. The resultant R = A + B runs from the tail of A to the tip of B.",
          "Alternatively, use the parallelogram construction: place A and B tail to tail, complete the parallelogram; the diagonal from the common tail is R.",
          "For more than two vectors, repeat the nose-to-tail chain; the resultant closes the polygon from the start of the first to the end of the last.",
        ],
      },
      {
        id: "components",
        title: "Components and perpendicular resolution",
        paragraphs: [
          "Choose perpendicular axes (usually x and y in the plane of the problem). The component of a vector along an axis is its shadow on that axis: for angle θ measured from the x-axis, Fx = F cos θ and Fy = F sin θ when θ is measured from x toward y in the standard mathematical sense — always draw a diagram and label θ relative to a stated axis.",
          "If you know components, the magnitude is F = √(Fx² + Fy²) and the direction satisfies tan α = Fy/Fx with quadrant correction (the inverse tangent alone does not distinguish opposite directions).",
          "Resolving replaces one vector by an equivalent pair along chosen axes. Adding vectors in component form: Rx = Ax + Bx, Ry = Ay + By for R = A + B.",
        ],
      },
      {
        id: "resultant",
        title: "Resultant magnitude and special cases",
        paragraphs: [
          "If two vectors of magnitudes A and B meet at angle θ when placed tail to tail, the magnitude of the resultant is given by the parallelogram rule:",
          "R² = A² + B² + 2AB cos θ.",
          "Special cases: θ = 0° gives R = A + B (parallel same sense); θ = 180° gives R = |A − B| (parallel opposite sense); θ = 90° gives R = √(A² + B²).",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Vector questions combine diagrams, trigonometry and clear language. Marks are lost when diagrams are missing, angles are undefined, or velocity and speed are swapped.",
      items: [
        "Adding magnitudes A + B when the vectors are not parallel — use components or cosine rule unless they are collinear.",
        "Using θ = tan⁻¹(Fy/Fx) without stating which axis θ is measured from or which quadrant the vector lies in.",
        "Stating that velocity is constant when speed is constant but direction changes — velocity is a vector, so it is not constant if direction changes.",
        "Confusing displacement from A to B with total distance along a curved route between the same points.",
        "Forgetting to give direction when asked for a vector quantity — both magnitude and direction (or clear components) are required unless the question asks for magnitude only.",
      ],
    },
    workedExamples: [
      {
        id: "t1-4-ex1",
        title: "Perpendicular components of a displacement",
        problem: [
          "A walker moves 4.0 km due east, then 3.0 km due north. Find the magnitude and bearing of the resultant displacement from the start, measured clockwise from north.",
        ],
        solution: [
          "Take east as +x and north as +y. Then Rx = 4.0 km, Ry = 3.0 km.",
          "Magnitude R = √(4.0² + 3.0²) km = √(16 + 9) km = 5.0 km.",
          "Angle φ east of north satisfies tan φ = Rx/Ry = 4.0/3.0, so φ ≈ 53.1° east of north. Bearing clockwise from north = 90° − φ ≈ 37° (to two significant figures; accept a clear diagram-based answer).",
        ],
      },
      {
        id: "t1-4-ex2",
        title: "Resultant of two forces at 120°",
        problem: [
          "Forces of magnitude 6.0 N and 8.0 N act at a point and the angle between their directions is 120°. Find the magnitude of the resultant force.",
        ],
        solution: [
          "Place the vectors tail to tail with 120° between them. With the parallelogram rule, R² = A² + B² + 2AB cos θ with θ the angle between the directions: R² = 6.0² + 8.0² + 2(6.0)(8.0)cos 120°.",
          "Since cos 120° = −0.5, R² = 36 + 64 − 48 = 52, so R = √52 N ≈ 7.2 N.",
          "Sketch the construction and confirm which angle is θ so you do not use the supplementary angle by mistake.",
        ],
      },
      {
        id: "t1-4-ex3",
        title: "Velocity when direction changes",
        problem: [
          "A car travels at constant speed 20 m s⁻¹ around a circular bend. Is its velocity constant? Explain.",
        ],
        solution: [
          "No. Velocity is a vector. The car’s speed (magnitude of velocity) is constant, but the direction of motion changes continuously around the bend, so the velocity vector changes from one instant to the next.",
          "Therefore there is a non-zero acceleration (centripetal) even though speed is constant — you will study circular motion in detail later; here the key exam point is the distinction between speed and velocity.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t1-4-st1",
        question:
          "State whether each quantity is a scalar or a vector: (a) kinetic energy, (b) momentum, (c) work done by a force when the force and displacement may be in different directions.",
        modelAnswer: [
          "(a) Scalar — energy has no direction in this sense. (b) Vector — momentum is mass × velocity. (c) Scalar — work is defined as the scalar product F·s (dot product), so it is a scalar even though F and s are vectors.",
        ],
      },
      {
        id: "t1-4-st2",
        question:
          "Two vectors of equal magnitude F act at a point and the angle between them is 90°. Find the magnitude of their resultant in terms of F.",
        modelAnswer: [
          "R = √(F² + F²) = √(2F²) = F√2 (Pythagoras for perpendicular vectors of equal length).",
        ],
      },
      {
        id: "t1-4-st3",
        question:
          "Explain in words how the parallelogram construction relates to the nose-to-tail triangle rule for vector addition.",
        modelAnswer: [
          "In the parallelogram with A and B from a common tail, the opposite sides are equal and parallel copies of A and B. The diagonal equals the same closing vector you would get by placing B after A nose to tail, so both constructions give the same resultant.",
        ],
      },
      {
        id: "t1-4-st4",
        question:
          "A vector has component +3.0 m s⁻¹ along x and −4.0 m s⁻¹ along y. Find the magnitude of the vector and the angle its direction makes with the +x axis, measured anticlockwise from +x.",
        modelAnswer: [
          "Magnitude v = √(3.0² + (−4.0)²) = √(9 + 16) = 5.0 m s⁻¹. Angle: tan θ = vy/vx = −4.0/3.0, so reference angle ≈ 53.1° below +x; anticlockwise from +x gives θ ≈ 360° − 53.1° ≈ 307° (state the quadrant clearly).",
        ],
      },
      {
        id: "t1-4-st5",
        question:
          "Under what condition does the sum of two non-zero vectors have magnitude zero?",
        modelAnswer: [
          "When they have equal magnitude and opposite direction (antiparallel), so they cancel: A + B = 0.",
        ],
      },
    ],
  },
};