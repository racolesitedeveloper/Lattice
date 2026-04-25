import type { NoteDraft } from "./types";

/** Full teaching notes for 9700 Topic 14 — subtopics 14.1-14.2 (see lib/notes/AUTHORING.md). */
export const BIOLOGY_TOPIC14_DRAFTS: Record<string, NoteDraft> = {
  "t14-1": {
    noteId: "t14-1",
    syllabusNotes: [
      {
        id: "negative-feedback-blood-glucose-overview",
        title: "Negative feedback control of blood glucose concentration",
        paragraphs: [
          "Homeostasis is maintenance of a stable internal environment around set points despite external and internal change. For blood glucose concentration, stability is essential because glucose supply to cells, especially neurones, must remain reliable while extreme high or low concentrations are harmful.",
          "Regulation depends on negative feedback. A rise in blood glucose after a meal stimulates insulin secretion from pancreatic beta cells. A fall in blood glucose between meals stimulates glucagon secretion from pancreatic alpha cells.",
          "Negative feedback means the hormonal response opposes the original deviation: insulin lowers high blood glucose, while glucagon raises low blood glucose. Once concentration moves back toward the normal range, stimulus for further secretion is reduced.",
        ],
      },
      {
        id: "insulin-effects-liver-muscle",
        title: "How insulin lowers blood glucose in liver and muscle cells",
        paragraphs: [
          "Insulin acts through receptors on target cells, especially hepatocytes (liver cells) and muscle cells, to increase removal of glucose from blood and its storage or use.",
          "In muscle cells, insulin increases uptake of glucose and promotes glycogenesis, so more glucose is converted to glycogen. Insulin also supports glucose use in respiration.",
          "In liver cells, insulin stimulates glycogenesis and suppresses glycogen breakdown and glucose output to blood. The combined effect in both tissues is a fall in blood glucose concentration toward the set point.",
        ],
      },
      {
        id: "glucagon-effects-liver",
        title: "How glucagon raises blood glucose via liver cells",
        paragraphs: [
          "Glucagon mainly targets liver cells when blood glucose concentration is low. It does not produce the same direct effects on muscle cells as insulin in this syllabus context.",
          "In hepatocytes, glucagon signalling activates pathways that increase glycogen breakdown (glycogenolysis). Glucose produced from glycogen is released into the bloodstream, raising blood glucose concentration.",
          "As blood glucose rises back toward normal, glucagon stimulus declines, completing a negative-feedback loop.",
        ],
      },
      {
        id: "cell-signalling-glucagon-camp-pathway",
        title: "Cell signalling: glucagon receptor to enzyme cascade",
        paragraphs: [
          "Glucagon demonstrates core principles of cell signalling. The hormone binds to a complementary cell-surface receptor on the target liver cell membrane. Binding causes a conformational change in the receptor.",
          "The changed receptor activates a G-protein, which then stimulates adenylyl cyclase in the membrane. Adenylyl cyclase converts ATP to cyclic AMP (cAMP), which acts as a second messenger inside the cell.",
          "cAMP activates protein kinase A. Protein kinase A initiates an enzyme cascade in which each activated enzyme activates many molecules of the next enzyme by phosphorylation.",
          "Because one step activates many molecules at the next step, the signal is amplified. The final activated enzyme catalyses glycogen breakdown, producing the cellular response required to increase blood glucose.",
        ],
      },
      {
        id: "test-strips-and-biosensors-glucose",
        title: "Principles of glucose test strips and biosensors",
        paragraphs: [
          "Glucose test strips and biosensors use enzyme specificity to detect glucose in blood or urine. A common system uses glucose oxidase, often coupled with peroxidase.",
          "Glucose oxidase catalyses oxidation of glucose, producing hydrogen peroxide as part of the reaction sequence. Peroxidase then uses hydrogen peroxide in a second reaction that produces a measurable change, commonly a colour change in strips.",
          "In simple strips, colour intensity is compared with a calibrated chart to estimate glucose concentration. In electronic biosensors, the enzyme-catalysed reaction is linked to a transducer so signal magnitude can be converted to a quantitative glucose reading.",
          "Reliable measurement depends on controlled reaction conditions, correct sample application and calibration. These principles allow rapid monitoring in both clinical and self-monitoring contexts.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "In this subtopic, marks are awarded for precise negative-feedback logic and correct signalling sequence, not for vague statements that hormones 'balance sugar levels'.",
      items: [
        "Describing positive feedback instead of negative feedback, or failing to state that hormonal responses oppose the direction of glucose change.",
        "Claiming glucagon acts mainly on muscle cells in the same way as insulin; at this level glucagon effects are centred on liver cells.",
        "Listing signalling components out of order (for example cAMP before adenylyl cyclase activation) and losing the causal chain.",
        "Ignoring amplification in the enzyme cascade, which is a key reason a small hormonal signal can produce a large metabolic effect.",
        "Naming glucose oxidase in biosensors without linking it to peroxidase and the measurable output signal.",
      ],
    },
    workedExamples: [
      {
        id: "t14-1-ex1",
        title: "Applying negative feedback after a carbohydrate-rich meal",
        problem: [
          "A student eats a large carbohydrate-rich meal. Explain, in sequence, how blood glucose concentration returns toward normal using hormone action on named target tissues.",
        ],
        solution: [
          "Blood glucose concentration rises after absorption of glucose from the gut. This stimulates pancreatic beta cells to secrete more insulin and reduces glucagon secretion.",
          "Insulin acts on muscle cells and liver cells, increasing glucose uptake and glycogenesis. In liver cells it also suppresses glycogen breakdown and glucose release.",
          "As glucose is removed from blood and stored or used, blood glucose concentration falls toward the set point. The insulin stimulus then decreases, showing negative feedback control.",
        ],
      },
      {
        id: "t14-1-ex2",
        title: "Tracing glucagon signalling from receptor to glycogen breakdown",
        problem: [
          "Write an exam-style account of how glucagon binding to a liver cell leads to glycogen breakdown, including second messenger and signal amplification.",
        ],
        solution: [
          "Glucagon binds to a specific cell-surface receptor on the hepatocyte membrane and causes receptor conformational change.",
          "The receptor activates a G-protein, which activates adenylyl cyclase. Adenylyl cyclase converts ATP to cAMP, the second messenger.",
          "cAMP activates protein kinase A, which begins an enzyme cascade of phosphorylation steps.",
          "At each stage one activated enzyme activates many molecules of the next enzyme, amplifying the signal.",
          "The final enzyme in the pathway is activated and catalyses glycogen breakdown, producing glucose that can be released into blood.",
        ],
      },
      {
        id: "t14-1-ex3",
        title: "Explaining glucose-strip chemistry",
        problem: [
          "A urine glucose strip contains glucose oxidase and peroxidase plus a chromogenic indicator. Explain how the strip gives a concentration estimate.",
        ],
        solution: [
          "If glucose is present, glucose oxidase catalyses its oxidation and generates hydrogen peroxide in the reaction pathway.",
          "Peroxidase uses hydrogen peroxide to oxidise the indicator dye, producing a colour change.",
          "Greater glucose concentration produces more reaction product in the fixed test time, so colour intensity increases.",
          "The developed colour is compared with a calibration scale to estimate glucose concentration in the sample.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t14-1-st1",
        question:
          "Explain how negative feedback regulates blood glucose concentration, naming the hormones involved at high and low glucose concentrations.",
        modelAnswer: [
          "When blood glucose rises, insulin secretion increases and glucagon secretion decreases. Insulin promotes glucose uptake and storage, so blood glucose falls.",
          "When blood glucose falls, glucagon secretion increases and insulin secretion decreases. Glucagon promotes glycogen breakdown in liver, so blood glucose rises.",
          "In both cases, responses oppose the original change and secretion falls as concentration returns toward normal, which is negative feedback.",
        ],
      },
      {
        id: "t14-1-st2",
        question:
          "State the effects of insulin on muscle cells and liver cells that lead to a reduction in blood glucose concentration.",
        modelAnswer: [
          "In muscle cells, insulin increases glucose uptake and glycogen synthesis.",
          "In liver cells, insulin stimulates glycogen synthesis and reduces glycogen breakdown and glucose release.",
          "These effects remove glucose from blood and lower blood glucose concentration.",
        ],
      },
      {
        id: "t14-1-st3",
        question:
          "Describe the glucagon signalling pathway in liver cells from hormone binding to cellular response, including cAMP and protein kinase A.",
        modelAnswer: [
          "Glucagon binds to a cell-surface receptor and causes conformational change.",
          "The receptor activates a G-protein, which activates adenylyl cyclase.",
          "Adenylyl cyclase forms cAMP from ATP; cAMP acts as a second messenger.",
          "cAMP activates protein kinase A, initiating an enzyme cascade by phosphorylation.",
          "Signal amplification occurs through the cascade, and the final activated enzyme catalyses glycogen breakdown.",
        ],
      },
      {
        id: "t14-1-st4",
        question:
          "Why is signal amplification important in the glucagon enzyme cascade?",
        modelAnswer: [
          "Amplification means one hormone-binding event can trigger activation of many intracellular enzymes.",
          "This allows a small external glucagon signal to produce a large, rapid metabolic response in the cell.",
          "It makes hormonal control efficient at low hormone concentration.",
        ],
      },
      {
        id: "t14-1-st5",
        question:
          "Explain the operating principle of glucose test strips or biosensors with reference to glucose oxidase and peroxidase.",
        modelAnswer: [
          "Glucose oxidase catalyses oxidation of glucose, generating hydrogen peroxide in the reaction sequence.",
          "Peroxidase uses the hydrogen peroxide in a coupled reaction that creates a measurable output, such as colour change or an electrical signal.",
          "The output magnitude is compared with calibration data to estimate glucose concentration in blood or urine.",
        ],
      },
    ],
  },

  "t14-2": {
    noteId: "t14-2",
    syllabusNotes: [
      {
        id: "stomata-balance-co2-and-water-loss",
        title: "Stomata balance carbon dioxide uptake with water conservation",
        paragraphs: [
          "Plant homeostasis includes regulation of water status while sustaining photosynthesis. Stomata are adjustable pores that allow diffusion of carbon dioxide into leaves, but also provide a route for water vapour loss by transpiration.",
          "Opening stomata increases carbon dioxide uptake for photosynthesis but increases water loss. Closing stomata reduces water loss but restricts carbon dioxide entry, which can lower photosynthetic rate.",
          "Regulation of stomatal aperture therefore balances two competing needs: maintaining carbon gain while limiting dehydration risk.",
        ],
      },
      {
        id: "daily-rhythms-of-stomatal-movement",
        title: "Daily rhythms of stomatal opening and closing",
        paragraphs: [
          "Stomata show daily rhythms, typically opening more in daylight and closing more during darkness. This pattern supports daytime photosynthetic demand for carbon dioxide.",
          "The rhythm reflects integration of internal timing signals with environmental cues such as light, temperature and humidity.",
          "Daily rhythmic control does not mean fixed behaviour: stomata can still adjust rapidly to changing conditions, especially water stress.",
        ],
      },
      {
        id: "guard-cell-structure-and-function",
        title: "Guard cell structure and control of aperture",
        paragraphs: [
          "Each stoma is bordered by two guard cells. Guard cells are specialised epidermal cells with unevenly thickened walls: the inner wall (facing the pore) is thicker and less extensible than the outer wall.",
          "When guard-cell turgor rises, differential wall properties cause the cells to bow apart and the pore opens. When guard-cell turgor falls, cells become less curved and the pore closes.",
          "This mechanical design converts changes in guard-cell water content into controlled changes in pore size.",
        ],
      },
      {
        id: "mechanism-of-opening-and-closing",
        title: "Ionic mechanism for stomatal opening and closing",
        paragraphs: [
          "Stomatal movement depends on ion transport and osmosis in guard cells. For opening, solute accumulation in guard cells lowers water potential, so water enters by osmosis and turgor increases.",
          "For closure, solutes leave guard cells, water potential rises, water exits by osmosis and turgor falls. Reduced turgor narrows the pore.",
          "At this syllabus level, the key principle is that ion-driven water-potential changes control guard-cell turgor, and turgor controls aperture.",
        ],
      },
      {
        id: "aba-water-stress-and-calcium-second-messenger",
        title: "Abscisic acid in water-stress signalling and closure",
        paragraphs: [
          "During water stress, abscisic acid (ABA) concentration increases and acts as a stress signal to guard cells. ABA binding triggers intracellular signalling events that promote stomatal closure.",
          "A central part of this pathway is an increase in cytosolic calcium ions, which function as second messengers. Calcium-dependent responses alter ion-channel behaviour, promoting ion efflux from guard cells.",
          "Ion efflux drives water loss from guard cells by osmosis, reducing turgor and closing stomata. Closure reduces transpiration and helps conserve water until conditions improve.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "High-scoring responses explain stomatal control as a physiological trade-off and include mechanistic guard-cell detail, rather than only saying stomata 'open in day and close in night'.",
      items: [
        "Describing stomata as structures that only take in oxygen, instead of recognising their primary photosynthetic role in carbon dioxide uptake.",
        "Ignoring the trade-off between carbon dioxide uptake and transpiration when explaining why aperture changes matter.",
        "Stating that stomata are opened and closed by ordinary epidermal cells rather than by specialised guard cells.",
        "Explaining closure during drought without mentioning ABA signalling and the role of calcium ions as second messengers.",
        "Confusing diffusion of gases through stomata with bulk flow, and omitting osmosis-based turgor changes in guard cells.",
      ],
    },
    workedExamples: [
      {
        id: "t14-2-ex1",
        title: "Explaining midday stomatal behaviour under dry conditions",
        problem: [
          "On a hot, dry day, a plant receives strong light but shows partial stomatal closure at midday. Explain this response in terms of homeostasis.",
        ],
        solution: [
          "Strong light tends to promote stomatal opening to support carbon dioxide uptake for photosynthesis.",
          "However, high temperature and low humidity increase transpiration risk, so water loss can become excessive.",
          "Partial closure reduces water loss and protects leaf water status, even though carbon dioxide entry is reduced.",
          "This demonstrates homeostatic balancing of photosynthetic demand against dehydration risk.",
        ],
      },
      {
        id: "t14-2-ex2",
        title: "Linking guard-cell structure to pore opening",
        problem: [
          "Describe how an increase in guard-cell turgor opens a stoma, making clear how wall structure contributes.",
        ],
        solution: [
          "Solute uptake by guard cells lowers their water potential, so water enters by osmosis and turgor pressure rises.",
          "Because the inner guard-cell wall is thicker and less extensible than the outer wall, expansion is unequal.",
          "The guard cells curve away from each other as they become turgid, widening the stomatal pore.",
          "Thus structural asymmetry in wall thickness converts turgor increase into pore opening.",
        ],
      },
      {
        id: "t14-2-ex3",
        title: "ABA and calcium in drought-induced closure",
        problem: [
          "Outline the signalling sequence by which water stress causes stomatal closure, including the role of calcium ions.",
        ],
        solution: [
          "Water stress increases ABA signalling to guard cells.",
          "ABA triggers intracellular signalling that elevates cytosolic calcium ion concentration; calcium acts as a second messenger.",
          "Calcium-mediated responses promote ion efflux from guard cells, increasing guard-cell water potential.",
          "Water leaves guard cells by osmosis, turgor falls, and the stomatal pore closes to reduce transpiration.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t14-2-st1",
        question:
          "Why must plants regulate stomatal aperture rather than keep stomata permanently open?",
        modelAnswer: [
          "Open stomata are needed for carbon dioxide diffusion into leaves for photosynthesis.",
          "The same open pores allow water vapour loss by transpiration, which can dehydrate tissues if excessive.",
          "Regulation allows plants to balance carbon dioxide uptake with water conservation under changing environmental conditions.",
        ],
      },
      {
        id: "t14-2-st2",
        question:
          "State the daily rhythm typically shown by stomata and explain why this pattern is adaptive.",
        modelAnswer: [
          "Stomata are usually more open during daylight and more closed during darkness.",
          "Daytime opening supports carbon dioxide uptake when light energy is available for photosynthesis.",
          "Night-time closure limits unnecessary water loss when photosynthesis is minimal.",
        ],
      },
      {
        id: "t14-2-st3",
        question:
          "Describe the structure and function of guard cells in controlling stomatal aperture.",
        modelAnswer: [
          "Guard cells are paired specialised epidermal cells surrounding each stomatal pore.",
          "Their inner walls are thicker and less extensible than outer walls, so shape changes during turgor change are directional.",
          "Increased turgor opens the pore; decreased turgor closes it, controlling gas exchange and transpiration rate.",
        ],
      },
      {
        id: "t14-2-st4",
        question:
          "Explain how ion movement and osmosis produce stomatal opening and closing.",
        modelAnswer: [
          "Opening occurs when guard cells accumulate solutes, lowering guard-cell water potential so water enters by osmosis and turgor rises.",
          "Closing occurs when solutes leave guard cells, raising water potential so water exits by osmosis and turgor falls.",
          "Changes in turgor alter guard-cell curvature and therefore stomatal aperture.",
        ],
      },
      {
        id: "t14-2-st5",
        question:
          "Describe the role of abscisic acid in stomatal closure during water stress, including calcium ions.",
        modelAnswer: [
          "Under water stress, ABA signalling to guard cells increases.",
          "ABA causes an increase in cytosolic calcium ions, which act as second messengers in the closure pathway.",
          "Calcium-dependent signalling promotes ion efflux, water loss from guard cells and reduced turgor, leading to stomatal closure and lower transpiration.",
        ],
      },
    ],
  },
};
