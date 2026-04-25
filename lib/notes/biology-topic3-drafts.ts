import type { NoteDraft } from "./types";

/** Full teaching notes for 9700 Topic 3 — subtopics 3.1-3.2. */
export const BIOLOGY_TOPIC3_DRAFTS: Record<string, NoteDraft> = {
  "t3-1": {
    noteId: "t3-1",
    syllabusNotes: [
      {
        id: "enzymes-as-globular-proteins",
        title: "Enzymes as globular proteins in cells and outside cells",
        paragraphs: [
          "Enzymes are globular proteins that act as biological catalysts. A catalyst increases the rate of a reaction without being used up permanently, so one enzyme molecule can catalyse many reaction cycles.",
          "Because enzymes are proteins, their function depends on their three-dimensional tertiary (and sometimes quaternary) structure. The precise folding pattern creates an active site with a specific shape and chemical environment.",
          "Some enzymes act inside cells (intracellular enzymes), for example enzymes in glycolysis in the cytoplasm or in the mitochondrial matrix. Other enzymes are secreted and act outside cells (extracellular enzymes), such as digestive enzymes released into the gut lumen.",
          "This distinction matters for experiments and for physiology: intracellular enzymes work in controlled internal conditions, while extracellular enzymes may function in very different pH values, such as acidic conditions in the stomach.",
        ],
      },
      {
        id: "active-site-and-specificity",
        title: "Active site, enzyme-substrate complex and specificity",
        paragraphs: [
          "The active site is the region of the enzyme where substrate molecules bind and the reaction is catalysed. Binding forms an enzyme-substrate complex, often written E-S.",
          "Specificity means an enzyme catalyses only one reaction or a narrow range of closely related reactions. Specificity arises because only substrates with suitable shape and chemical properties can bind effectively to the active site.",
          "During catalysis, the active site positions reacting groups correctly and may strain bonds in the substrate. These effects make formation of the transition state easier and increase reaction rate.",
        ],
      },
      {
        id: "activation-energy-and-models",
        title: "Lowering activation energy: lock-and-key and induced fit",
        paragraphs: [
          "Activation energy is the minimum energy barrier reactant molecules must overcome for a reaction to proceed. Enzymes lower this activation energy, so more molecules can react per unit time at the same temperature.",
          "In the lock-and-key hypothesis, the active site is treated as a rigid, pre-formed shape that is complementary to the substrate. This model explains basic specificity but does not fully explain all observed enzyme behavior.",
          "In the induced-fit hypothesis, binding of substrate causes a small conformational change in the active site. This improved fit can align catalytic groups and destabilise specific bonds in the substrate, helping to explain very high catalytic efficiency and fine specificity.",
          "In exam answers, both hypotheses should be linked to the same central idea: formation of an enzyme-substrate complex leads to a pathway with lower activation energy.",
        ],
      },
      {
        id: "investigating-rate-catalase",
        title: "Investigating product formation rate with catalase",
        paragraphs: [
          "Catalase catalyses the decomposition of hydrogen peroxide: 2H2O2 -> 2H2O + O2. The progress of this reaction can be followed by measuring oxygen produced against time.",
          "A standard method is to mix catalase source (for example celery, liver or yeast extract) with hydrogen peroxide in a flask connected to a gas syringe. The initial slope of oxygen volume-time data gives the initial rate.",
          "Good practice includes controlling temperature with a water bath, controlling pH with a buffer, and keeping total volume and mixing protocol constant so only the chosen independent variable changes.",
          "Rate data should be collected at short, regular intervals early in the reaction. Initial rate is preferred because substrate concentration has changed least at the start.",
        ],
      },
      {
        id: "investigating-rate-amylase",
        title: "Investigating substrate disappearance rate with amylase",
        paragraphs: [
          "Amylase hydrolyses starch to shorter carbohydrates (eventually maltose). The progress can be monitored by the disappearance of starch using iodine solution.",
          "A common protocol places iodine drops on a spotting tile at timed intervals. Samples from the amylase-starch mixture are added to iodine; blue-black indicates starch is still present, while brown/orange indicates no detectable starch.",
          "From this, you can estimate the time for complete starch disappearance and use rate proportional to 1/time for comparison across conditions. For stronger analysis, repeated trials can improve reliability.",
          "Timing must be consistent, sample volumes should be fixed, and the same criterion for endpoint should be used in each trial.",
        ],
      },
      {
        id: "colorimeter-use",
        title: "Using a colorimeter to monitor enzyme reactions with colour change",
        paragraphs: [
          "A colorimeter measures light absorbance (or transmission) at a selected wavelength, allowing objective tracking of colour intensity during a reaction.",
          "For enzyme assays with coloured products or substrates, absorbance can be recorded at regular time intervals. If absorbance increases with product concentration, the slope of absorbance-time graph indicates reaction rate.",
          "Before measurement, the instrument is zeroed with a blank that contains all assay components except the reacting coloured species. Cuvettes should be clean, oriented consistently, and free of bubbles to avoid measurement error.",
          "Colorimetry provides more precise quantitative data than visual comparison and is especially useful when reaction changes are gradual.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Examiners look for mechanistic enzyme language and valid practical logic. Marks are often lost when candidates write generic statements without linking them to active sites, rates, and controlled variables.",
      items: [
        "Defining enzymes only as 'proteins' without stating catalytic function and without distinguishing intracellular from extracellular contexts.",
        "Using lock-and-key and induced-fit as unrelated ideas rather than two models for substrate binding and specificity.",
        "Saying enzymes 'add energy' to reactions. Enzymes lower activation energy; they do not supply energy to reactants.",
        "Describing practicals without identifying dependent variable and how rate is calculated (for example initial slope or inverse time).",
        "Using amylase-iodine tests with inconsistent sampling times or changing endpoint criteria, which makes comparisons unreliable.",
        "Confusing absorbance with concentration direction in colorimetry; candidates must state whether absorbance rises or falls as reaction proceeds in that specific assay.",
      ],
    },
    workedExamples: [
      {
        id: "t3-1-ex1",
        title: "Explaining specificity using active-site models",
        problem: [
          "A student says: 'Enzymes are specific because substrates have more energy.' Evaluate this statement and give a correct explanation using lock-and-key and induced-fit language.",
        ],
        solution: [
          "The statement is incorrect. Specificity is not caused by substrate molecules having more energy. Specificity is mainly due to complementary binding between substrate and active site.",
          "In lock-and-key terms, the active site has a shape complementary to the substrate, so only suitable substrates bind to form an enzyme-substrate complex.",
          "In induced-fit terms, initial binding triggers a conformational adjustment of the active site, improving fit and positioning catalytic groups. This improves catalysis and preserves specificity for particular substrates.",
          "A complete answer should also state that enzyme action lowers activation energy for that reaction pathway.",
        ],
      },
      {
        id: "t3-1-ex2",
        title: "Calculating initial rate from catalase oxygen data",
        problem: [
          "A catalase assay gives the following oxygen volumes: 0 s: 0.0 cm3, 20 s: 8.0 cm3, 40 s: 14.0 cm3, 60 s: 18.0 cm3, 80 s: 20.0 cm3. Estimate the initial rate and justify your method.",
        ],
        solution: [
          "Initial rate should be estimated from the earliest, near-linear part of the curve because substrate concentration is highest and has changed least.",
          "Using the first 40 s data: change in volume = 14.0 - 0.0 = 14.0 cm3 over 40 s.",
          "Initial rate estimate = 14.0 / 40 = 0.35 cm3 s-1.",
          "Using later intervals would underestimate initial rate because the slope decreases as substrate concentration falls and products accumulate.",
        ],
      },
      {
        id: "t3-1-ex3",
        title: "Designing an amylase practical to compare temperatures",
        problem: [
          "Design a valid method to compare amylase activity at 20 C and 40 C using starch and iodine, stating controlled variables and how rate is derived.",
        ],
        solution: [
          "Prepare two water baths at 20 C and 40 C. Equilibrate amylase and starch solutions separately at each temperature before mixing.",
          "At each temperature, mix fixed volumes and concentrations of amylase and starch, then start timing immediately. Every fixed interval (for example every 15 s), transfer one drop of reaction mixture to iodine on a spotting tile.",
          "Record the first time when no blue-black colour appears (starch no longer detectable). Repeat several times and calculate mean endpoint time.",
          "Use relative rate proportional to 1/time to compare conditions. Keep pH (buffered), total volumes, substrate concentration, enzyme concentration, and sampling intervals constant so temperature is the only independent variable.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t3-1-st1",
        question:
          "State what is meant by intracellular and extracellular enzymes, and give one example context for each.",
        modelAnswer: [
          "Intracellular enzymes catalyse reactions inside cells, for example enzymes of glycolysis in cytoplasm. Extracellular enzymes are secreted and catalyse reactions outside cells, for example digestive amylase acting in the gut lumen.",
        ],
      },
      {
        id: "t3-1-st2",
        question:
          "Define activation energy and explain briefly how enzyme action changes it.",
        modelAnswer: [
          "Activation energy is the minimum energy barrier that reactants must overcome to form products. Enzymes lower this barrier by providing an alternative reaction pathway through enzyme-substrate complex formation, so more collisions lead to reaction at the same temperature.",
        ],
      },
      {
        id: "t3-1-st3",
        question:
          "Compare lock-and-key and induced-fit hypotheses in two clear points.",
        modelAnswer: [
          "Lock-and-key treats the active site as rigid and already complementary to substrate. Induced fit proposes that substrate binding causes a conformational change, improving complementarity and catalytic alignment.",
          "Both models explain specificity and enzyme-substrate complex formation, but induced fit better explains dynamic active-site behavior and strong catalytic efficiency.",
        ],
      },
      {
        id: "t3-1-st4",
        question:
          "In a catalase and hydrogen peroxide practical, what is usually measured and how is rate obtained from that measurement?",
        modelAnswer: [
          "Usually oxygen product volume is measured against time (for example with a gas syringe). Reaction rate is obtained from the gradient of the product-volume-time graph, often using initial slope for initial rate.",
        ],
      },
      {
        id: "t3-1-st5",
        question:
          "Outline two key steps needed to obtain reliable colorimeter data in an enzyme assay with colour change.",
        modelAnswer: [
          "Zero the colorimeter with a suitable blank containing all components except the reacting coloured species, then measure absorbance at a fixed wavelength over time.",
          "Use clean, bubble-free cuvettes inserted consistently, and keep path length and reaction sampling timing consistent across readings.",
        ],
      },
    ],
  },

  "t3-2": {
    noteId: "t3-2",
    syllabusNotes: [
      {
        id: "overview-of-rate-factors",
        title: "Main factors affecting enzyme-catalysed reaction rate",
        paragraphs: [
          "The rate of an enzyme-catalysed reaction depends on collision frequency, successful enzyme-substrate complex formation, and whether active-site structure remains suitable for catalysis.",
          "In Cambridge 9700 Topic 3.2, the key factors are temperature, pH (with buffers), enzyme concentration, substrate concentration, and inhibitor concentration. You should be able to both investigate these experimentally and explain the trends mechanistically.",
          "When comparing rates, initial rate is usually the most informative because substrate depletion and product accumulation are minimal at the start.",
        ],
      },
      {
        id: "temperature-and-ph-effects",
        title: "Effects of temperature and pH",
        paragraphs: [
          "As temperature rises from low values, rate usually increases because enzyme and substrate molecules move faster and collide more often with enough energy for reaction.",
          "Beyond an optimum, rate falls sharply for many enzymes because heat disrupts hydrogen bonds and ionic interactions that maintain tertiary structure. Active-site shape changes, reducing substrate binding and catalytic efficiency; severe changes are described as denaturation.",
          "Each enzyme has an optimum pH where active-site ionisation and bonding are most suitable. Deviation from this pH alters charges on amino acid side chains and substrate groups, disrupting binding and catalysis.",
          "Buffer solutions are used in enzyme practicals to maintain a chosen pH throughout the assay so pH is controlled rather than drifting during reaction.",
        ],
      },
      {
        id: "concentration-effects",
        title: "Effects of enzyme concentration and substrate concentration",
        paragraphs: [
          "If substrate is in excess, increasing enzyme concentration increases rate approximately proportionally, because more active sites are available per unit time.",
          "If enzyme concentration is fixed, increasing substrate concentration raises rate at first because substrate is more likely to collide with available active sites.",
          "At high substrate concentration, all active sites become occupied most of the time (enzyme saturation), so further substrate increase has little effect and rate approaches a maximum value.",
          "This limiting behavior is described by Michaelis-Menten kinetics and leads to the concept of Vmax.",
        ],
      },
      {
        id: "vmax-km-meaning",
        title: "Vmax and Km in Michaelis-Menten analysis",
        paragraphs: [
          "Vmax is the maximum reaction rate when enzyme active sites are effectively saturated by substrate under the assay conditions.",
          "Km (Michaelis-Menten constant) is the substrate concentration at which rate equals 1/2 Vmax. It is not itself a rate; it is a concentration value.",
          "Km is used to compare apparent affinity of different enzymes for their substrates. Lower Km means half-maximal rate is reached at lower substrate concentration, which indicates higher substrate affinity under comparable conditions.",
          "When interpreting exam graphs, identify Vmax from the plateau and Km from the substrate concentration corresponding to half that plateau rate.",
        ],
      },
      {
        id: "reversible-inhibition",
        title: "Reversible inhibition: competitive and non-competitive",
        paragraphs: [
          "A reversible inhibitor binds non-covalently and can dissociate, so inhibition can be reduced or removed under changed conditions.",
          "Competitive inhibitors resemble substrate and compete for active-site binding. At high substrate concentration, substrate can outcompete inhibitor. Therefore Vmax is unchanged, but more substrate is needed to reach a given rate, so apparent Km increases.",
          "Non-competitive inhibitors bind at a site other than the active site (allosteric site) and reduce catalytic activity without direct competition for substrate binding. Increasing substrate does not fully overcome this effect; Vmax decreases, while Km often remains similar in the simplified school model.",
          "In practical interpretation, competitive inhibition shifts the rate-substrate curve rightward; non-competitive inhibition lowers the plateau.",
        ],
      },
      {
        id: "immobilised-enzymes",
        title: "Immobilised enzymes in alginate compared with free enzymes",
        paragraphs: [
          "Immobilised enzymes are physically confined, commonly by entrapping enzyme in calcium alginate beads. Free enzymes are dissolved directly in solution.",
          "Immobilised enzyme systems are compared with free-enzyme systems by measuring activity under matched conditions, for example product formation over time.",
          "Typical observations are that immobilised enzymes may show lower immediate rate due to diffusion limits, but they are easier to separate from product and can be reused repeatedly.",
          "Advantages of immobilised enzymes include easier product purification, enzyme recovery and reuse, improved process control in continuous systems, and often greater stability over longer operational periods.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "High-mark answers link each graph trend to active-site occupancy or structural change, and they use kinetic terms precisely. Marks are lost when candidates memorise shapes without biological explanation.",
      items: [
        "Writing that rate always rises with temperature; this ignores denaturation above optimum.",
        "Using unbuffered pH practicals while claiming pH was controlled.",
        "Treating Km as maximum rate or as a time value; Km is substrate concentration at 1/2 Vmax.",
        "Saying competitive inhibition lowers Vmax in standard Michaelis-Menten interpretation; it usually increases apparent Km but Vmax is unchanged.",
        "Claiming non-competitive inhibition is overcome by high substrate concentration to the same extent as competitive inhibition.",
        "Listing immobilised enzymes as 'faster' without qualification; diffusion into beads can reduce apparent short-term rate even though process advantages are substantial.",
      ],
    },
    workedExamples: [
      {
        id: "t3-2-ex1",
        title: "Interpreting temperature and pH results",
        problem: [
          "An enzyme assay gives relative rates: at 15 C = 20, 25 C = 48, 35 C = 80, 45 C = 42. At fixed temperature, rates at pH 4, pH 6, pH 8 are 18, 76, 30 respectively. Explain both patterns.",
        ],
        solution: [
          "The temperature trend rises from 15 C to 35 C because higher kinetic energy increases successful collisions and enzyme-substrate complex formation. The fall at 45 C suggests thermal disruption of bonding in the enzyme structure, changing active-site shape and reducing activity.",
          "The pH data show an optimum around pH 6, where active-site ionisation and interactions are most favourable for binding/catalysis. Activity is reduced at pH 4 and pH 8 because altered proton concentration changes ionisation states and interferes with active-site function.",
          "A complete exam explanation should mention both increased collision effects at lower temperatures and structural/charge effects away from optimum conditions.",
        ],
      },
      {
        id: "t3-2-ex2",
        title: "Finding Vmax and Km from a rate-substrate table",
        problem: [
          "For one enzyme, rates (arbitrary units) at increasing substrate concentration are: 10, 18, 25, 30, 33, 35, 36. Estimate Vmax and Km.",
        ],
        solution: [
          "The rate approaches a plateau near 36, so Vmax is approximately 36 units.",
          "Half of Vmax is approximately 18 units. Km is the substrate concentration at which rate is 18 units.",
          "From the ordered dataset, Km corresponds to the second substrate concentration point (the one producing rate 18). If actual substrate values were provided, you would report that concentration numerically with units.",
          "This method links directly to the definition: Km is [S] at 1/2 Vmax, not the midpoint of the concentration range.",
        ],
      },
      {
        id: "t3-2-ex3",
        title: "Distinguishing competitive and non-competitive inhibition",
        problem: [
          "Two reversible inhibitors are tested. With inhibitor X, Vmax is unchanged but more substrate is needed to reach half-maximal rate. With inhibitor Y, Vmax decreases markedly and extra substrate does not restore the old maximum. Identify each inhibition type and explain.",
        ],
        solution: [
          "Inhibitor X is competitive. Unchanged Vmax with increased substrate requirement indicates substrate can outcompete inhibitor at high [S], but apparent Km is increased.",
          "Inhibitor Y is non-competitive. Lower Vmax that cannot be restored by adding substrate indicates reduced catalytic capacity independent of active-site competition.",
          "Both are reversible because the inhibitors bind non-covalently and can dissociate, but their kinetic signatures differ through effects on Vmax and Km.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t3-2-st1",
        question:
          "Explain why a pH buffer is used in enzyme practicals investigating pH effects.",
        modelAnswer: [
          "A buffer resists pH change during the reaction, so the chosen pH is maintained. This ensures pH is a controlled experimental variable and observed rate differences are due to intended pH conditions, not uncontrolled drift.",
        ],
      },
      {
        id: "t3-2-st2",
        question:
          "Describe how rate changes with substrate concentration when enzyme concentration is fixed, and explain why the curve levels off.",
        modelAnswer: [
          "Rate increases rapidly at low substrate concentration because more substrate molecules collide with and occupy active sites. At higher substrate concentration, active sites become saturated most of the time, so the enzyme is working near maximum turnover and further substrate addition causes little further increase. The rate approaches Vmax.",
        ],
      },
      {
        id: "t3-2-st3",
        question:
          "Define Vmax and Km, and state what a lower Km indicates when comparing enzymes under similar conditions.",
        modelAnswer: [
          "Vmax is the maximum reaction rate at substrate saturation. Km is the substrate concentration at which rate is half Vmax.",
          "A lower Km indicates higher substrate affinity, because half-maximal rate is reached at a lower substrate concentration.",
        ],
      },
      {
        id: "t3-2-st4",
        question:
          "State one key kinetic difference between competitive and non-competitive reversible inhibition.",
        modelAnswer: [
          "Competitive inhibition leaves Vmax unchanged but increases apparent Km, because high substrate concentration can outcompete inhibitor at the active site.",
          "Non-competitive inhibition lowers Vmax and is not fully overcome by increasing substrate concentration.",
        ],
      },
      {
        id: "t3-2-st5",
        question:
          "Give two advantages of using immobilised enzymes in alginate beads rather than free enzymes in solution.",
        modelAnswer: [
          "Immobilised enzymes are easier to separate from product, reducing downstream purification issues.",
          "They can be recovered and reused, lowering cost in continuous or repeated processes.",
          "They often provide better operational stability and simpler process control in industrial setups.",
        ],
      },
    ],
  },
};
