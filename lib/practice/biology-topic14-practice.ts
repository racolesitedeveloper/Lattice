import type { SubtopicPracticePack } from "./types";

/**
 * 9700 Topic 14 — subtopics `t14-1` (14.1 Homeostasis in mammals) and `t14-2` (14.2 Homeostasis in plants).
 *
 * **`t14-1` crosswalk** (`biology-9700-learning-outcomes.md` §14.1 and §14.1 continued):
 * - Homeostasis definition / internal environment (§14.1 LO 1) → t14-1-d1, t14-1-f1
 * - Principles: stimuli, receptors, coordination, effectors, negative feedback (§14.1 LO 2) → woven into d1, d4
 * - ADH / aquaporins / collecting duct osmoregulation (§14.1 LO 8) → t14-1-d3, t14-1-f3
 * - Insulin and glucagon negative feedback (§14.1 continued LO 10) → t14-1-d4, t14-1-d5, t14-1-f4, t14-1-f5
 * - Glucagon cAMP cascade (§14.1 continued LO 9) → t14-1-d6, t14-1-d7, t14-1-f6
 * - Glucose test strips / biosensors (§14.1 continued LO 11) → t14-1-d8, t14-1-f7
 * - Application / MCQ consolidation → t14-1-d9, t14-1-d10, t14-1-f8–f10
 * - t14-1-d2 thermoregulation is teaching enrichment (not a numbered §14.1 bullet in the syllabus extract).
 * - §14.1 LO 3–7 (urea, kidney macrostructure, nephron parts, ultrafiltration, PCT structure) — add dedicated drills when revising this pack.
 *
 * **`t14-2` crosswalk** (`biology-9700-learning-outcomes.md` 14.2):
 * - Stomata: environmental response; CO_2 uptake vs water loss → t14-2-d1, t14-2-f1
 * - Daily rhythms of stomatal opening/closing → t14-2-d2, t14-2-f2
 * - Guard cell structure and turgor mechanism → t14-2-d3, t14-2-d4, t14-2-f3, t14-2-f4
 * - Abscisic acid (ABA) in water stress; Ca^2+ as second messenger → t14-2-d5, t14-2-d6, t14-2-f5, t14-2-f6
 * - Consolidation / MCQs → t14-2-d7–d10, t14-2-f7–f10
 */
export const BIOLOGY_TOPIC14_PRACTICE: Record<string, SubtopicPracticePack> = {
  "t14-1": {
    noteId: "t14-1",
    drills: [
      {
        id: "t14-1-d1",
        noteId: "t14-1",
        kind: "structured",
        difficulty: 1,
        marks: 5,
        stem: "Define homeostasis. Explain what is meant by the internal environment of a mammal and why maintaining its composition and physical conditions within narrow limits matters for enzyme function and metabolism.",
        modelAnswerPoints: [
          "Homeostasis is the maintenance of a relatively constant internal environment despite external change.",
          "Internal environment refers to blood plasma and tissue fluid bathing cells (interstitial fluid).",
          "Stable pH, temperature, and solute concentrations (e.g. glucose) keep enzymes near optimal activity and support controlled metabolic pathways.",
        ],
        workedSolution: [
          "Homeostasis describes the physiological processes that keep the composition and physical properties of the body’s internal fluids within ranges compatible with healthy cell function even when the outside world changes in temperature, hydration, or nutrient availability.",
          "In mammals the internal environment is usefully identified with blood plasma together with tissue fluid that exchanges materials with cells, because this interconnected extracellular compartment is what most cells actually ‘see’ in terms of oxygen, glucose, salts, and waste levels.",
          "If core temperature or blood pH swing widely, many enzymes begin to denature or operate far from their optima, so reaction rates in pathways such as respiration and biosynthesis become inefficient or dangerously skewed.",
          "Similarly, large or prolonged deviations in blood glucose would either starve insulin-dependent tissues of fuel or cause osmotic and biochemical stress, which is why regulatory systems centred on sensors, integrators, and effectors continuously correct deviations.",
        ],
        commonMistake:
          "Defining homeostasis only as ‘keeping temperature constant’ or confusing the internal environment with cytoplasm only.",
        tags: ["homeostasis", "definitions"],
      },
      {
        id: "t14-1-d2",
        noteId: "t14-1",
        kind: "structured",
        difficulty: 2,
        marks: 6,
        stem: "Outline how a mammal uses physiological responses to limit a rise in core body temperature during exercise on a hot day, and how it limits heat loss in a cold environment. Name at least two mechanisms for each situation.",
        modelAnswerPoints: [
          "Heat loss when hot: sweating (evaporative cooling); vasodilation of skin arterioles increasing radiation of heat.",
          "Heat conservation when cold: vasoconstriction of skin arterioles reducing heat loss; shivering (muscle contraction generating heat).",
          "Hair erection in mammals with pilomotor muscles traps an insulating air layer (where fur is present).",
        ],
        workedSolution: [
          "When core temperature rises, thermoreceptors signal centres that increase sweat secretion from eccrine glands; as water evaporates from the skin surface it removes latent heat, which cools blood perfusing the dermis and therefore the body core if sweat loss can keep pace with heat production.",
          "At the same time, vasodilation of arterioles supplying skin capillaries increases skin blood flow so more warm blood is routed near the surface, allowing extra heat transfer to the surroundings by radiation and conduction or convection.",
          "In cold conditions the priority is to reduce passive heat loss from the warm core, so sympathetic vasoconstriction in skin arterioles diverts blood away from the cold periphery, lowering the temperature gradient at the surface.",
          "Shivering involves rhythmic contraction of skeletal muscle without useful external work, which rapidly increases metabolic heat production, while pilomotor contraction that erects hairs improves trapped air insulation in furry mammals, complementing behavioural responses such as seeking shelter.",
        ],
        commonMistake:
          "Listing only behavioural changes (seeking shade) with no autonomic mechanisms, or claiming vasodilation conserves heat.",
        tags: ["thermoregulation", "mammals"],
      },
      {
        id: "t14-1-d3",
        noteId: "t14-1",
        kind: "structured",
        difficulty: 2,
        marks: 6,
        stem: "Describe the role of antidiuretic hormone (ADH) in mammalian osmoregulation. State where ADH is released, name its main target region in the kidney, and explain how ADH changes water reabsorption when blood becomes more concentrated.",
        modelAnswerPoints: [
          "ADH (vasopressin) is released from the posterior pituitary gland into the blood.",
          "Target: cells of the collecting ducts (and late distal tubule) in the kidney nephrons.",
          "High plasma osmolarity stimulates ADH release; ADH increases insertion of aquaporins so more water is reabsorbed by osmosis into the medullary interstitium, producing a smaller volume of more concentrated urine.",
        ],
        workedSolution: [
          "Osmoreceptors in the hypothalamus detect when blood plasma becomes more concentrated than the set point, for example after sweating or insufficient water intake, and this stimulates neurosecretory cells whose axon terminals in the posterior pituitary release ADH into the systemic circulation.",
          "Circulating ADH acts on the principal cells lining the collecting ducts of nephrons, where it triggers intracellular signalling that increases the abundance of aquaporin water channels in the luminal membrane.",
          "Because the renal medulla maintains a high solute concentration gradient, water can move by osmosis from the duct lumen into the interstitial fluid and then into blood whenever the collecting duct epithelium becomes more permeable to water.",
          "The outcome is conservation of body water: urine volume falls and urine becomes hypertonic relative to plasma, which gradually dilutes the blood again and completes a negative-feedback loop centred on plasma osmolarity.",
        ],
        commonMistake:
          "Saying ADH is synthesised in the posterior pituitary (it is made in hypothalamic neurones) or claiming ADH increases glucose uptake.",
        tags: ["ADH", "kidney", "osmoregulation"],
      },
      {
        id: "t14-1-d4",
        noteId: "t14-1",
        kind: "structured",
        difficulty: 3,
        marks: 7,
        stem: "Explain how negative feedback involving insulin and glucagon regulates the concentration of glucose in mammalian blood. Refer specifically to effects of insulin on muscle cells and liver cells, and to the effect of glucagon on liver cells.",
        modelAnswerPoints: [
          "After a carbohydrate meal, rising blood glucose stimulates insulin secretion from pancreatic beta cells.",
          "Insulin increases glucose uptake (e.g. GLUT4 to membranes) and glycogenesis in muscle; in liver it promotes glycogenesis and inhibits glucose release.",
          "Falling blood glucose stimulates glucagon from alpha cells; glucagon acts on liver to increase glycogenolysis (and gluconeogenesis) releasing glucose.",
          "The opposing hormones stabilise blood glucose around a set point (negative feedback).",
        ],
        workedSolution: [
          "Islet beta cells respond to elevated arterial glucose by secreting insulin, which is the principal hormone signalling ‘fuel abundance’ to insulin-sensitive tissues.",
          "Skeletal muscle cells increase facilitated diffusion of glucose at the membrane when insulin-dependent transporters such as GLUT4 are inserted, and simultaneously activate pathways that convert surplus glucose into glycogen, lowering extracellular glucose concentration.",
          "Hepatocytes take up glucose and convert it to glycogen under insulin dominance while reducing the export of free glucose into the blood, so the liver switches from a glucose source to a glucose sink during the absorptive phase.",
          "Hours later, when blood glucose falls between meals, alpha cells release glucagon, which binds hepatocytes and switches liver metabolism toward glycogen phosphorylase activation and release of glucose-6-phosphate-derived glucose into sinusoidal blood.",
          "Because glucagon’s classical rapid response targets liver glycogen rather than skeletal muscle glycogen, the hormone raises systemic glucose without requiring muscle to dump its own reserves into the circulation, and the alternating dominance of insulin versus glucagon around the set point is the essence of negative feedback control.",
        ],
        commonMistake:
          "Claiming glucagon causes muscle glycogen to break down into blood glucose, or omitting liver as glucagon’s key target for rapid glucose mobilisation.",
        tags: ["glucose", "insulin", "glucagon", "negative-feedback"],
      },
      {
        id: "t14-1-d5",
        noteId: "t14-1",
        kind: "structured",
        difficulty: 3,
        marks: 5,
        stem: "Contrast the main cellular targets and metabolic actions of insulin and glucagon in blood-glucose regulation. Your answer should make clear which hormone dominates after ingesting glucose and which dominates during prolonged fasting between meals.",
        modelAnswerPoints: [
          "Insulin: dominant postprandially; promotes storage pathways (glycogenesis, uptake) and suppresses hepatic glucose output.",
          "Glucagon: dominant during fasting/hypoglycaemic tendency; acts chiefly on liver to mobilise glucose from glycogen (and supports gluconeogenesis).",
          "Muscle is a major insulin target for uptake; glucagon does not classically trigger muscle glycogen breakdown to free blood glucose.",
        ],
        workedSolution: [
          "Immediately after carbohydrate absorption, arterial glucose and incretin signals bias the endocrine pancreas toward insulin secretion, so muscle and adipose tissue increase glucose clearance while the liver takes up glucose and packs it into glycogen, collectively producing a downward correction of blood glucose.",
          "During a fast, falling glucose and low insulin relieve suppression of hepatic glucose production while rising amino acid or sympathetic tone can contribute to glucagon release, so hepatocytes become net exporters of glucose derived from glycogenolysis and later from gluconeogenic precursors.",
          "Skeletal muscle stores large glycogen reserves for its own contraction metabolism but lacks glucose-6-phosphatase, so it cannot dump hexose phosphate into the blood; that architectural difference is why glucagon’s rapid systemic glucose-raising role is organised around the liver whereas insulin organises peripheral disposal.",
        ],
        commonMistake:
          "Treating insulin and glucagon as if they both raise and lower glucose symmetrically in the same tissues without distinguishing liver versus muscle roles.",
        tags: ["hormones", "comparison"],
      },
      {
        id: "t14-1-d6",
        noteId: "t14-1",
        kind: "structured",
        difficulty: 4,
        marks: 9,
        stem: "Describe the principles of cell signalling by which glucagon controls liver glycogen breakdown, limited to the syllabus sequence: hormone binding to a cell-surface receptor; G-protein activation and adenylyl cyclase stimulation; formation of cAMP; activation of protein kinase A; initiation of a phosphorylation cascade; amplification; and the final cellular response catalysing glycogen breakdown.",
        modelAnswerPoints: [
          "Glucagon binds a specific hepatocyte surface receptor, inducing a conformational change.",
          "G-protein is activated and stimulates adenylyl cyclase to synthesise cAMP from ATP.",
          "cAMP activates protein kinase A (PKA).",
          "PKA phosphorylates enzymes in a cascade; each step can activate many downstream proteins (amplification).",
          "Final kinase activation leads to activation of glycogen phosphorylase (pathway to glycogen breakdown), increasing glucose-1-phosphate production from glycogen.",
        ],
        workedSolution: [
          "Glucagon arriving at the liver from pancreatic alpha cells binds transmembrane receptors on the basolateral surface of hepatocytes, and this binding distorts the receptor protein so that its cytosolic domain can catalyse exchange of GDP for GTP on an associated heterotrimeric G-protein.",
          "The activated G-protein subunit diffuses along the membrane until it contacts adenylyl cyclase, changing the cyclase conformation so it converts ATP to cyclic AMP at an accelerated rate, thereby raising cytosolic cAMP concentration as the classic second messenger of this pathway.",
          "Elevated cAMP binds to regulatory subunits of protein kinase A, releasing catalytic subunits that are now free to phosphorylate specific serine or threonine residues on target proteins, beginning an ordered enzyme cascade toward glycogen mobilisation.",
          "Because each activated kinase can phosphorylate many substrate molecules and each step may activate further enzymes, a small number of occupied receptors can generate a large intracellular response, which is the biological meaning of signal amplification in this context.",
          "The end stage relevant to the syllabus is activation of the enzymatic machinery that breaks glycogen into glucose-1-phosphate, chiefly through phosphorylase activation, so glycogen polymers are cleaved to provide substrate that can be converted to glucose-6-phosphate and ultimately released as free glucose from the liver during hypoglycaemic demand.",
        ],
        commonMistake:
          "Skipping G-protein or claiming glucagon enters the cell; or confusing PKA with tyrosine kinase receptors used by some other hormones.",
        tags: ["glucagon", "cAMP", "signalling"],
      },
      {
        id: "t14-1-d7",
        noteId: "t14-1",
        kind: "mcq",
        difficulty: 3,
        stem: "In hepatocytes responding to glucagon, which statement best explains why a small extracellular hormone signal can produce a large intracellular response?",
        options: [
          {
            id: "A",
            text: "Each activated enzyme in the phosphorylation cascade can modify many molecules of the next enzyme, multiplying the signal at successive steps.",
          },
          {
            id: "B",
            text: "Glucagon is stored in high concentration inside the nucleus and leaks out slowly.",
          },
          {
            id: "C",
            text: "cAMP is destroyed instantly so the cell must produce enormous amounts of glucagon.",
          },
          {
            id: "D",
            text: "Protein kinase A phosphorylates DNA directly to replicate the hormone message.",
          },
        ],
        correctOptionId: "A",
        explanation:
          "Cascades of kinase activation allow multiplicative amplification because one activated upstream enzyme can phosphorylate many downstream targets, each of which may activate many further molecules.",
        distractorRationale: {
          B: "Peptide hormones such as glucagon bind surface receptors; they are not stored in the nucleus to drive signalling magnitude.",
          C: "cAMP turnover modulates signal duration but does not contradict amplification; amplification arises from enzymatic cascade topology.",
          D: "The described pathway centres on cytoplasmic second messengers and protein phosphorylation, not direct PKA phosphorylation of DNA as the core mechanism.",
        },
        tags: ["amplification", "signalling"],
      },
      {
        id: "t14-1-d8",
        noteId: "t14-1",
        kind: "structured",
        difficulty: 3,
        marks: 6,
        stem: "Explain the principles of operation of test strips or simple biosensors used to estimate glucose concentration in blood or urine, with reference to the enzymes glucose oxidase and peroxidase.",
        modelAnswerPoints: [
          "Glucose oxidase catalyses oxidation of glucose, producing hydrogen peroxide as a by-product.",
          "Peroxidase uses the peroxide to oxidise a chromogen (colour change) or couples to an electrochemical detector in amperometric strips.",
          "Intensity of colour or current correlates with glucose concentration after calibration.",
        ],
        workedSolution: [
          "Disposable glucose strips immobilise glucose oxidase in a reaction pad; when sample fluid hydrates the pad, the enzyme oxidises beta-D-glucose to gluconolactone while reducing oxygen to hydrogen peroxide in the aerobic regime typical of these assays.",
          "A second enzyme, often horseradish peroxidase, transfers electrons from hydrogen peroxide to an organic leuco-dye or mediator molecule, generating a coloured product whose absorbance can be read reflectometrically by the meter.",
          "Alternatively, some electrochemical strips use mediators that shuttle electrons to an electrode so the oxidation current is proportional to glucose concentration, but the syllabus emphasis remains on the paired oxidase/peroxidase chemistry that links glucose concentration to a measurable redox signal.",
          "Manufacturers calibrate the optical or electrical response against standard glucose solutions so the readout in millimoles per litre is reliable within device limits, which is why control solutions are recommended to verify strip batch performance.",
        ],
        commonMistake:
          "Naming only glucose oxidase without peroxidase’s role in linking peroxide to a detectable colour or current.",
        tags: ["biosensor", "glucose-oxidase"],
      },
      {
        id: "t14-1-d9",
        noteId: "t14-1",
        kind: "mcq",
        difficulty: 2,
        stem: "Two hours after a high-carbohydrate meal, which combination best describes the expected hormonal state in a healthy person?",
        options: [
          { id: "A", text: "High glucagon and low insulin." },
          { id: "B", text: "High insulin and low glucagon." },
          { id: "C", text: "High ADH and absent insulin." },
          { id: "D", text: "High glucagon and high insulin equally." },
        ],
        correctOptionId: "B",
        explanation:
          "Absorbed glucose stimulates insulin and suppresses glucagon, coordinating storage and peripheral uptake until blood glucose returns toward the fasting set point.",
        distractorRationale: {
          A: "That pattern fits fasting or hypoglycaemic correction, not the absorptive phase after a carb-rich meal.",
          C: "ADH responds chiefly to plasma osmolarity/volume, not directly as the primary signal for postprandial glucose clearance.",
          D: "Insulin and glucagon are generally reciprocally regulated around meals rather than both maximally high.",
        },
        tags: ["hormones", "MCQ"],
      },
      {
        id: "t14-1-d10",
        noteId: "t14-1",
        kind: "structured",
        difficulty: 3,
        marks: 5,
        stem: "A marathon runner loses a large volume of sweat. Outline how receptors and hormones involved in osmoregulation and thermoregulation interact in this situation, linking at least one heat-loss mechanism to a consequent change in blood concentration.",
        modelAnswerPoints: [
          "Sweating loses water and salts, tending to raise plasma osmolarity.",
          "Osmoreceptors detect increased plasma concentration → increased ADH → greater water reabsorption in collecting ducts.",
          "Thermoregulatory vasodilation also increases skin blood flow for heat loss, compounding fluid loss if sweat continues.",
        ],
        workedSolution: [
          "Profuse sweating removes hypotonic fluid from the extracellular compartment, so unless the athlete drinks, plasma becomes more concentrated and total plasma volume tends to fall, which is sensed both as increased osmolarity at hypothalamic osmoreceptors and as reduced venous pressure at low-pressure baroreceptors.",
          "The neuroendocrine response includes enhanced release of ADH, which increases water permeability of renal collecting ducts so the kidneys retain more free water, partially compensating for sweat loss at the expense of producing smaller volumes of concentrated urine.",
          "Meanwhile, cutaneous vasodilation remains an important thermoregulatory strategy because it raises skin temperature relative to air, facilitating radiation and convection, but it also delivers more plasma water to sweat glands, so the integration of heat defence with fluid conservation is exactly the kind of multi-system homeostatic trade-off examiners may ask candidates to articulate.",
        ],
        commonMistake:
          "Discussing only temperature with no mention of water loss, ADH, or plasma concentration.",
        tags: ["integration", "water-balance"],
      },
    ],
    flashcards: [
      {
        id: "t14-1-f1",
        noteId: "t14-1",
        difficulty: 1,
        front: "Homeostasis — one-sentence definition.",
        back: "Maintenance of a stable internal environment through physiological regulation and negative feedback.",
        examPhrasing: "Define homeostasis.",
        tags: ["definitions"],
      },
      {
        id: "t14-1-f2",
        noteId: "t14-1",
        difficulty: 1,
        front: "Two heat-loss mechanisms when core temperature rises.",
        back: "Sweating (evaporation); peripheral vasodilation increasing heat loss from skin.",
        examPhrasing: "Outline responses to overheating.",
        tags: ["thermoregulation"],
      },
      {
        id: "t14-1-f3",
        noteId: "t14-1",
        difficulty: 2,
        front: "ADH release site vs synthesis.",
        back: "Synthesised in hypothalamic neurones; released from posterior pituitary into blood.",
        examPhrasing: "State the source of ADH.",
        tags: ["ADH"],
      },
      {
        id: "t14-1-f4",
        noteId: "t14-1",
        difficulty: 2,
        front: "Insulin: two effects lowering blood glucose.",
        back: "Increases glucose uptake/storage in muscle and adipose; promotes liver glycogenesis and reduces hepatic glucose output.",
        examPhrasing: "Explain how insulin lowers blood glucose.",
        tags: ["insulin"],
      },
      {
        id: "t14-1-f5",
        noteId: "t14-1",
        difficulty: 2,
        front: "Glucagon: principal target organ for rapid glucose increase.",
        back: "Liver — glycogenolysis (and gluconeogenesis) raising blood glucose.",
        examPhrasing: "State the main target of glucagon.",
        tags: ["glucagon"],
      },
      {
        id: "t14-1-f6",
        noteId: "t14-1",
        difficulty: 3,
        front: "Glucagon pathway: name the second messenger.",
        back: "cyclic AMP (cAMP), produced by adenylyl cyclase after G-protein activation.",
        examPhrasing: "Describe glucagon signal transduction at the membrane.",
        tags: ["cAMP"],
      },
      {
        id: "t14-1-f7",
        noteId: "t14-1",
        difficulty: 3,
        front: "Glucose strip: two enzymes named in the syllabus pairing.",
        back: "Glucose oxidase; peroxidase (links H_2O_2 to colour or electrode signal).",
        examPhrasing: "Explain operation of a glucose test strip.",
        tags: ["biosensor"],
      },
      {
        id: "t14-1-f8",
        noteId: "t14-1",
        difficulty: 4,
        front: "Negative feedback — exam phrase for glucose.",
        back: "A change (e.g. high glucose) triggers a response (insulin) that opposes the original change, returning the variable toward a set point.",
        examPhrasing: "Explain negative feedback in blood glucose control.",
        tags: ["feedback"],
      },
      {
        id: "t14-1-f9",
        noteId: "t14-1",
        difficulty: 4,
        front: "Protein kinase A in the glucagon story.",
        back: "Activated by cAMP; phosphorylates targets, starting cascades toward glycogen breakdown.",
        examPhrasing: "State the role of PKA after glucagon binding.",
        tags: ["signalling"],
      },
      {
        id: "t14-1-f10",
        noteId: "t14-1",
        difficulty: 5,
        front: "Why muscle glycogen does not feed blood glucose like liver glycogen.",
        back: "Muscle lacks glucose-6-phosphatase; hexose phosphate is trapped for local glycolysis.",
        examPhrasing: "Why is glucagon’s glycogen target mainly the liver?",
        tags: ["liver", "muscle"],
      },
    ],
  },
  "t14-2": {
    noteId: "t14-2",
    drills: [
      {
        id: "t14-2-d1",
        noteId: "t14-2",
        kind: "structured",
        difficulty: 2,
        marks: 5,
        stem: "Explain why stomata must open under favourable conditions yet cannot remain fully open indefinitely without risking harm to the plant. Relate your answer to carbon dioxide uptake by diffusion and water loss by transpiration.",
        modelAnswerPoints: [
          "Open stomata allow CO_2 to diffuse into leaves for photosynthesis.",
          "The same pores provide routes for water vapour loss (transpiration) down a water-potential gradient.",
          "Regulation of aperture trades CO_2 gain against water loss according to environment.",
        ],
        workedSolution: [
          "Photosynthesis in mesophyll cells requires a supply of carbon dioxide from the atmosphere, and because the cuticle is waxy and relatively impermeable to gases, most CO_2 enters through stomatal pores where the boundary layer is thin enough for diffusion to sustain Calvin-cycle fixation.",
          "However, the water vapour concentration inside leaf air spaces is high compared with dry ambient air, so whenever stomata are open there is a steep gradient driving water molecules outward as water vapour, which is transpiration.",
          "If stomata stayed wide open during drought, high irradiance without adequate soil water, or freezing conditions, the plant would risk runaway embolism and desiccation without a compensating carbon gain, which is why guard cells adjust aperture continuously rather than maximising either flux in isolation.",
        ],
        commonMistake:
          "Claiming stomata exist only to lose water or only to take in CO_2, without acknowledging the coupled trade-off.",
        tags: ["stomata", "transpiration", "CO2"],
      },
      {
        id: "t14-2-d2",
        noteId: "t14-2",
        kind: "structured",
        difficulty: 2,
        marks: 4,
        stem: "State what is meant by daily rhythms of stomatal opening and closing, and outline one environmental factor and one internal factor that can influence the timing or extent of stomatal opening during a 24-hour cycle.",
        modelAnswerPoints: [
          "Stomata tend to open in daylight and close at night in many species (circadian / diurnal pattern).",
          "Environmental factor example: light intensity or CO_2 availability.",
          "Internal factor example: endogenous circadian clock or accumulation of ABA during stress.",
        ],
        workedSolution: [
          "Daily rhythms refer to repeating cycles of stomatal aperture tied broadly to the day–night cycle, commonly with wider apertures when light-driven photosynthesis benefits from CO_2 entry and narrower apertures in darkness when carbon fixation is low and unnecessary water loss should be avoided.",
          "Light itself acts as a powerful external zeitgeber: blue-light photoreceptors in guard cells trigger ion-pumping responses that favour opening, whereas high intercellular CO_2 in the leaf can partially oppose opening even in light.",
          "Superimposed on external cues, an endogenous circadian oscillator in guard and subsidiary cells can anticipate dawn and dusk, and hormonal signals such as rising abscisic acid during soil drying can override the default daytime-open programme to protect water status.",
        ],
        commonMistake:
          "Describing only ‘plants open in day’ with no mention of rhythmic or regulatory control beyond instant light response.",
        tags: ["rhythms", "stomata"],
      },
      {
        id: "t14-2-d3",
        noteId: "t14-2",
        kind: "structured",
        difficulty: 2,
        marks: 5,
        stem: "Describe the structure of guard cells as specialised epidermal cells and relate one structural feature to their ability to change stomatal pore width.",
        modelAnswerPoints: [
          "Pairs of guard cells flank each stoma in the epidermis.",
          "Cell walls are unevenly thickened (often thicker on ventral/inner walls).",
          "Chloroplasts present (unlike most epidermal cells) supporting energised ion transport.",
          "Differential wall elasticity causes bending when turgor changes, opening or closing the pore.",
        ],
        workedSolution: [
          "Each stomatal pore is delimited by two sausage-shaped guard cells whose coordinated volume changes mechanically lever apart or collapse the central aperture between them.",
          "Radial cellulose microfibril arrangements together with uneven wall thickness mean that when turgor pressure rises and the thinner regions expand more than the stiff inner ledges, the cells bow outward, increasing pore width, whereas loss of turgor allows the stiff inner walls to come together and shut the pore.",
          "Unlike most epidermal cells, guard cells contain chloroplasts capable of photosynthetic electron transport and ATP formation that support proton-pumping at the plasma membrane, linking energy supply directly to the ion fluxes that set solute potential.",
        ],
        commonMistake:
          "Treating guard cells as identical to ordinary epidermal cells with no mention of wall thickenings or turgor-driven bending.",
        tags: ["guard-cells", "structure"],
      },
      {
        id: "t14-2-d4",
        noteId: "t14-2",
        kind: "structured",
        difficulty: 3,
        marks: 7,
        stem: "Explain the mechanism by which guard cells open stomata in favourable light, including the role of solute accumulation, water potential gradients, and water movement into the cells.",
        modelAnswerPoints: [
          "Proton pumping (e.g. H^+-ATPase) hyperpolarises the membrane and drives uptake of K^+ (and counter-ions).",
          "Solute concentration in guard cells rises, lowering (more negative) solute/water potential.",
          "Water enters by osmosis from adjacent epidermal cells; turgor increases; uneven walls cause pore opening.",
        ],
        workedSolution: [
          "Blue light activates signalling that stimulates plasma-membrane H^+-ATPases, exporting protons and making the inside of the guard cell electrically negative relative to the apoplast, which favours opening of voltage-dependent inward-rectifying K^+ channels.",
          "Potassium ions accumulate in the vacuole together with malate and chloride balance charges, so the total osmotic concentration of the guard cell cytosol plus vacuole rises sharply, lowering the water potential inside the cell compared with neighbouring subsidiary cells and apoplast solution.",
          "Water therefore moves down its water-potential gradient across the selectively permeable membranes into the guard cells, increasing hydrostatic turgor pressure against the cell walls.",
          "Because the wall architecture converts rising turgor into outward bowing rather than isotropic ballooning, the central pore widens, completing the opening response that couples light perception to gas-exchange capacity.",
        ],
        commonMistake:
          "Saying ‘water moves by diffusion’ without mentioning water potential/osmosis, or omitting K^+ accumulation.",
        tags: ["mechanism", "turgor"],
      },
      {
        id: "t14-2-d5",
        noteId: "t14-2",
        kind: "structured",
        difficulty: 3,
        marks: 5,
        stem: "Describe the role of abscisic acid (ABA) in promoting stomatal closure during water stress.",
        modelAnswerPoints: [
          "Water deficit increases ABA synthesis / redistribution (e.g. from roots to shoots).",
          "ABA binds guard-cell receptors initiating signalling that favours ion efflux.",
          "Loss of K^+ and anions lowers turgor; guard cells become flaccid and stomata close.",
        ],
        workedSolution: [
          "When roots sense drying soil, they export abscisic acid in the transpiration stream while stressed leaves may also synthesise additional ABA, raising apoplastic hormone concentration around guard cells as an early systemic warning before catastrophic leaf water loss.",
          "ABA perception triggers intracellular second-messenger networks that activate anion channels at the guard-cell plasma membrane, causing depolarisation and subsequent efflux of potassium through outward-rectifying channels.",
          "As solutes leave, water potential inside the guard cells rises toward that of the surroundings, water follows osmotically out of the cells, turgor falls, and the mechanical default of the stiff inner walls narrows or seals the stomatal pore.",
        ],
        commonMistake:
          "Claiming ABA directly ‘pumps water out’ without linking to ion fluxes and turgor loss.",
        tags: ["ABA", "water-stress"],
      },
      {
        id: "t14-2-d6",
        noteId: "t14-2",
        kind: "structured",
        difficulty: 4,
        marks: 6,
        stem: "Explain how calcium ions act as a second messenger in ABA-mediated stomatal closure during water stress, linking cytosolic Ca^2+ changes to downstream events that reduce guard-cell turgor.",
        modelAnswerPoints: [
          "ABA signalling increases cytosolic free Ca^2+ (influx and/or release from internal stores).",
          "Ca^2+ coordinates channel activities (anion and K^+ efflux).",
          "Net solute loss lowers turgor → stomatal closure.",
        ],
        workedSolution: [
          "Second messengers are intracellular signalling molecules that relay an extracellular hormone message to effector proteins; in guard cells, transient elevations in cytosolic Ca^2+ concentration are a central second messenger readout of ABA receptor occupancy.",
          "ABA-activated phospholipid signalling and protein phosphorylation open Ca^2+-permeable channels in the plasma membrane and can trigger release from vacuolar or endomembrane stores, producing characteristic oscillatory or spiked Ca^2+ signatures that encode stress intensity.",
          "Elevated Ca^2+ binds to sensor proteins such as calmodulin-like factors that regulate ion channels, promoting efflux of malate and chloride through anion channels and subsequently driving K^+ efflux through depolarisation-activated pathways.",
          "The coordinated exit of osmotically active ions lowers internal osmotic pressure, water leaves the guard cells, and the loss of turgor closes the stomata even when light would otherwise favour opening, illustrating how second-messenger chemistry overrides default programmes during drought.",
        ],
        commonMistake:
          "Listing Ca^2+ without stating it is intracellular or without connecting it to channel regulation and turgor loss.",
        tags: ["calcium", "second-messenger"],
      },
      {
        id: "t14-2-d7",
        noteId: "t14-2",
        kind: "mcq",
        difficulty: 2,
        stem: "Which statement best describes the primary long-distance warning signal that often rises in the xylem sap when soil dries, priming shoot guard cells to close?",
        options: [
          { id: "A", text: "A fall in root-produced ethylene only." },
          { id: "B", text: "An increase in abscisic acid moving from roots toward leaves." },
          { id: "C", text: "A surge in insulin from root cortical cells." },
          { id: "D", text: "A drop in all plant hormones to zero." },
        ],
        correctOptionId: "B",
        explanation:
          "Drying soil commonly increases ABA synthesis and export from roots, raising ABA around guard cells and biasing stomata toward closure before lethal leaf dehydration.",
        distractorRationale: {
          A: "Ethylene has many roles but the syllabus highlights ABA in drought-related stomatal closure.",
          C: "Insulin is a mammalian hormone and is not part of plant stomatal signalling.",
          D: "Stress responses involve active hormonal signalling, not complete loss of hormones.",
        },
        tags: ["ABA", "MCQ"],
      },
      {
        id: "t14-2-d8",
        noteId: "t14-2",
        kind: "mcq",
        difficulty: 2,
        stem: "When guard cells accumulate K^+ ions during stomatal opening in the light, what is the immediate osmotic consequence before appreciable water movement?",
        options: [
          {
            id: "A",
            text: "Solute potential becomes more negative, so water potential inside the guard cell becomes more negative.",
          },
          { id: "B", text: "Solute potential becomes less negative, so the cell loses turgor instantly." },
          { id: "C", text: "Water potential rises because ions block aquaporins completely." },
          { id: "D", text: "Pressure potential falls below zero and the cell lyses." },
        ],
        correctOptionId: "A",
        explanation:
          "Additional dissolved solutes lower solute potential; with pressure potential initially near zero, total water potential inside becomes more negative, establishing a gradient for water entry.",
        distractorRationale: {
          B: "Gaining solutes lowers solute potential (more negative), favouring water influx once equilibrium can adjust, not immediate turgor loss.",
          C: "Ion accumulation changes solute potential; aquaporin blockage is not the syllabus explanation for the primary osmotic effect.",
          D: "Guard cells regulate turgor within elastic limits; lysis is not the normal teaching outcome of K^+ uptake.",
        },
        tags: ["water-potential", "MCQ"],
      },
      {
        id: "t14-2-d9",
        noteId: "t14-2",
        kind: "structured",
        difficulty: 3,
        marks: 5,
        stem: "A well-watered C_3 plant is moved from low light to bright sunlight at constant humidity. Predict the short-term change in stomatal aperture and explain how this helps photosynthesis while noting one risk if humidity is very low.",
        modelAnswerPoints: [
          "Stomata tend to open wider in brighter light (subject to other limits).",
          "Wider pores increase CO_2 diffusion into the leaf, raising photosynthetic rate.",
          "Low humidity increases transpiration gradient → risk of excessive water loss if stomata remain very open.",
        ],
        workedSolution: [
          "Increasing photon flux raises ATP and NADPH demand in chloroplasts and lowers substomatal CO_2 if pores are narrow, so guard-cell signalling in well-hydrated tissue generally promotes additional opening to admit more CO_2 and relieve photorespiratory inefficiency.",
          "A wider stomatal conductance steepens the CO_2 diffusion gradient from ambient air to chloroplasts, supporting faster carboxylation by rubisco as long as water supply and vascular conductance can sustain transpiration.",
          "If ambient relative humidity is very low, the water-vapour gradient from leaf to air becomes extreme, so even adaptive opening can produce transpiration rates that exceed root uptake temporarily, risking leaf water-potential decline that would later trigger ABA-mediated partial closure.",
        ],
        commonMistake:
          "Stating stomata always close in bright light, or ignoring the CO_2 benefit of opening.",
        tags: ["application", "photosynthesis"],
      },
      {
        id: "t14-2-d10",
        noteId: "t14-2",
        kind: "structured",
        difficulty: 4,
        marks: 6,
        stem: "Integrate the roles of light-driven opening, circadian rhythms, and ABA with Ca^2+ signalling in a brief account of how a leaf might keep stomata partially open at midday yet avoid catastrophic wilting during soil drying.",
        modelAnswerPoints: [
          "Light and circadian cues bias toward opening for CO_2.",
          "Soil drying raises ABA, activating Ca^2+ second-messenger pathways that oppose opening.",
          "Result: moderated aperture balancing carbon gain and hydraulic safety.",
        ],
        workedSolution: [
          "In the morning, combined blue-light phototransduction and circadian gating of ion transporters encourages K^+ uptake and turgor build-up, so stomata reach conductances that support positive net photosynthesis as temperature and irradiance rise.",
          "At midday, even with strong light, partial closure or ‘midday depression’ can occur if vapour pressure deficit is high or if hydraulic signals from the leaf vein indicate limited water delivery, reducing peak transpiration while still admitting some CO_2.",
          "If soil water potential falls, rising root-sourced ABA arrives at guard cells, where receptor-mediated production of cytosolic Ca^2+ spikes recruits efflux channels that remove the ions accumulated for opening, lowering turgor and stomatal conductance despite continued illumination.",
          "The net outcome is neither fully closed stomata that would starve photosynthesis nor maximally open pores that would desiccate the plant, illustrating hierarchical control where hormonal second messengers can override photic cues for homeostasis of leaf water status.",
        ],
        commonMistake:
          "Treating light and ABA as independent toggles with no mention of Ca^2+ or partial aperture control.",
        tags: ["integration", "stress"],
      },
    ],
    flashcards: [
      {
        id: "t14-2-f1",
        noteId: "t14-2",
        difficulty: 1,
        front: "Why stomata cannot be ‘always fully open’.",
        back: "Open pores admit CO_2 but also allow large transpirational water loss; aperture is regulated.",
        examPhrasing: "Explain the trade-off at stomata.",
        tags: ["stomata"],
      },
      {
        id: "t14-2-f2",
        noteId: "t14-2",
        difficulty: 1,
        front: "Daily stomatal rhythm — simple pattern.",
        back: "Often more open by day, more closed at night (species- and environment-dependent).",
        examPhrasing: "State a daily rhythm of stomata.",
        tags: ["rhythms"],
      },
      {
        id: "t14-2-f3",
        noteId: "t14-2",
        difficulty: 2,
        front: "Guard cells vs most epidermal cells (organelle).",
        back: "Guard cells contain chloroplasts; typical epidermal cells usually do not.",
        examPhrasing: "Describe one difference between guard cells and other epidermal cells.",
        tags: ["guard-cells"],
      },
      {
        id: "t14-2-f4",
        noteId: "t14-2",
        difficulty: 2,
        front: "Opening mechanism — one-line osmotic story.",
        back: "K^+ uptake lowers water potential; water enters; turgor bows cells; pore widens.",
        examPhrasing: "Explain stomatal opening.",
        tags: ["turgor"],
      },
      {
        id: "t14-2-f5",
        noteId: "t14-2",
        difficulty: 3,
        front: "ABA during drought — effect on stomata.",
        back: "Promotes closure to reduce transpiration under water stress.",
        examPhrasing: "State the role of ABA in stomatal closure.",
        tags: ["ABA"],
      },
      {
        id: "t14-2-f6",
        noteId: "t14-2",
        difficulty: 3,
        front: "Ca^2+ in guard cells — syllabus label.",
        back: "Second messenger relaying ABA signals to ion channels and turgor loss.",
        examPhrasing: "Describe calcium ions as second messengers in stomatal closure.",
        tags: ["calcium"],
      },
      {
        id: "t14-2-f7",
        noteId: "t14-2",
        difficulty: 4,
        front: "Why uneven guard-cell walls matter.",
        back: "Anisotropic reinforcement converts turgor into bending that opens/closes the pore.",
        examPhrasing: "Relate wall structure to stomatal movement.",
        tags: ["structure"],
      },
      {
        id: "t14-2-f8",
        noteId: "t14-2",
        difficulty: 4,
        front: "Transpiration vs photosynthesis link at the stoma.",
        back: "Same pore controls CO_2 in and H_2O vapour out; regulation balances carbon gain vs water loss.",
        examPhrasing: "Explain coupling of gas exchange at stomata.",
        tags: ["gas-exchange"],
      },
      {
        id: "t14-2-f9",
        noteId: "t14-2",
        difficulty: 5,
        front: "Second messenger — definition.",
        back: "Intracellular molecule spreading/reproducing a signal from a first messenger (e.g. hormone) to target proteins.",
        examPhrasing: "Define second messenger.",
        tags: ["definitions"],
      },
      {
        id: "t14-2-f10",
        noteId: "t14-2",
        difficulty: 5,
        front: "Anion channel efflux in ABA closure — purpose.",
        back: "Depolarises membrane and drives K^+ efflux; net solute loss reduces turgor.",
        examPhrasing: "Why do anions leave guard cells during ABA signalling?",
        tags: ["ABA", "ions"],
      },
    ],
  },
};
