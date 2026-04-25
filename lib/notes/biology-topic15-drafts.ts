import type { NoteDraft } from "./types";

/** Full teaching notes for 9700 Topic 15 — subtopics 15.1-15.2 (see lib/notes/AUTHORING.md). */
export const BIOLOGY_TOPIC15_DRAFTS: Record<string, NoteDraft> = {
  "t15-1": {
    noteId: "t15-1",
    syllabusNotes: [
      {
        id: "endocrine-system-features",
        title: "Endocrine signalling in mammals: key features and examples",
        paragraphs: [
          "The endocrine system uses glands that secrete hormones into blood. Hormones are chemical messengers that act on target cells with specific receptors, so only receptor-bearing cells respond strongly.",
          "Compared with neural signalling, endocrine signalling is usually slower in onset but more prolonged in effect because hormones must be transported in blood and then trigger intracellular responses.",
          "ADH (antidiuretic hormone) increases water reabsorption in kidney collecting ducts, helping regulate body water balance. Insulin lowers blood glucose concentration by increasing glucose uptake and promoting glycogen synthesis, while glucagon raises blood glucose concentration mainly by promoting glycogen breakdown in liver.",
          "These examples show a core endocrine pattern: stimulus change -> hormone release -> target-cell response -> restoration of internal conditions by negative feedback.",
        ],
      },
      {
        id: "nervous-vs-endocrine-comparison",
        title: "Nervous system and endocrine system: comparison",
        paragraphs: [
          "The nervous system transmits electrical impulses along neurones and uses neurotransmitters at synapses. It provides rapid, localised, short-duration responses such as reflexes and muscle activation.",
          "The endocrine system transmits hormones in blood and produces slower, often more widespread, longer-lasting responses such as blood glucose regulation or water-balance adjustments.",
          "In exam answers, compare by signal type, route, speed, duration and specificity: nervous signals are impulse-based and point-to-point; endocrine signals are blood-borne and can affect many tissues that carry the relevant receptor.",
        ],
      },
      {
        id: "neurone-types-and-receptors",
        title: "Sensory neurones, intermediate neurones, motor neurones and receptor cells",
        paragraphs: [
          "Sensory receptor cells detect stimuli and transduce stimulus energy into electrical changes in membrane potential. If threshold is reached, a sensory neurone generates action potentials.",
          "Sensory neurones carry impulses from receptors to the central nervous system. Intermediate neurones (relay neurones) connect sensory and motor pathways within the CNS, integrating and processing information.",
          "Motor neurones carry impulses from CNS to effectors such as muscles or glands, producing a response. Structural adaptations differ: sensory neurones have receptor endings and a cell body positioned along the fibre, while motor neurones have the cell body at one end and many dendrites for synaptic input.",
        ],
      },
      {
        id: "taste-chemoreceptor-to-action-potential",
        title: "From chemoreceptor stimulation to sensory action potential",
        paragraphs: [
          "In a taste bud, dissolved chemical stimuli bind receptor proteins on chemoreceptor cells. This alters ion permeability, producing a graded receptor potential in the receptor cell membrane.",
          "If receptor depolarisation is sufficient, neurotransmitter is released onto the sensory neurone ending. Neurotransmitter binding opens ion channels in the sensory neurone membrane, causing depolarisation.",
          "When depolarisation at the trigger region reaches threshold, voltage-gated sodium channels open and an action potential is generated in the sensory neurone.",
        ],
      },
      {
        id: "membrane-potential-action-potential-refractory",
        title: "Resting potential, action potential, refractory period and impulse frequency",
        paragraphs: [
          "At resting potential, neurone membrane is polarised: the inside is negative relative to outside. This is maintained by selective permeability and active transport by the sodium-potassium pump, which exports Na+ and imports K+.",
          "During an action potential, voltage-gated Na+ channels open first, causing rapid Na+ influx and depolarisation. Shortly after, Na+ channels inactivate and voltage-gated K+ channels open, so K+ efflux repolarises and often briefly hyperpolarises the membrane.",
          "During the refractory period, a second action potential cannot be initiated immediately (absolute refractory phase) or requires a stronger stimulus (relative refractory phase). This restores ion-channel states and membrane conditions toward resting potential.",
          "The refractory period enforces one-way propagation and limits the maximum impulse frequency. Stronger stimuli are encoded as higher action-potential frequency, but only up to a limit set by refractory timing.",
        ],
      },
      {
        id: "myelination-saltatory-conduction",
        title: "Rapid transmission in myelinated neurones: saltatory conduction",
        paragraphs: [
          "Myelin sheath electrically insulates axon internodes, reducing ion leakage and increasing conduction speed. Voltage-gated channels are concentrated at nodes of Ranvier.",
          "Local currents carry depolarisation rapidly under myelin from node to node, where new action potentials are regenerated. This node-to-node transmission is saltatory conduction.",
          "Saltatory conduction is faster and more energy-efficient than continuous conduction in unmyelinated fibres because fewer membrane regions exchange ions and therefore less pump activity is needed to restore gradients.",
        ],
      },
      {
        id: "cholinergic-synapse-and-nmj",
        title: "Cholinergic synapse and neuromuscular junction signalling",
        paragraphs: [
          "At a cholinergic synapse, arrival of an action potential at the presynaptic membrane opens voltage-gated Ca2+ channels. Calcium ions enter and trigger fusion of vesicles containing acetylcholine (ACh) with the presynaptic membrane.",
          "ACh diffuses across the synaptic cleft and binds receptors on the postsynaptic membrane, opening ligand-gated ion channels and depolarising the postsynaptic cell. If threshold is reached, a new action potential is generated.",
          "ACh is then hydrolysed by acetylcholinesterase to terminate signalling and prevent continuous stimulation. Choline is recycled into the presynaptic terminal.",
          "At a neuromuscular junction (NMJ), the postsynaptic cell is a muscle fibre motor end plate. The same cholinergic sequence triggers a muscle action potential that spreads over sarcolemma and down T-tubules.",
        ],
      },
      {
        id: "sarcomere-and-sliding-filament",
        title: "Striated muscle ultrastructure and sliding filament model",
        paragraphs: [
          "Striated muscle fibres are multinucleate cells containing myofibrils arranged into repeating sarcomeres. In each sarcomere, thin actin filaments are anchored at Z-lines and thick myosin filaments lie centrally around the M-line.",
          "Banding patterns arise from filament overlap: A band length remains constant during contraction, while I band and H zone narrow as actin slides toward the sarcomere centre.",
          "At rest, tropomyosin blocks myosin-binding sites on actin. Calcium ions released from sarcoplasmic reticulum bind troponin, shifting tropomyosin and exposing binding sites.",
          "Myosin heads form cross-bridges with actin, perform power strokes, and pull actin inward. ATP binding detaches myosin from actin, and ATP hydrolysis re-cocks the head for another cycle. Thus ATP is required both for cross-bridge cycling and for restoring ion gradients and calcium stores.",
          "The T-tubule system carries depolarisation rapidly into the fibre interior, ensuring coordinated calcium release from sarcoplasmic reticulum throughout the cell.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "This subtopic is highly process-driven. Marks are won by sequencing events correctly, naming channels/ions precisely, and linking structure to function in neurones and muscle.",
      items: [
        "Confusing nervous and endocrine control by saying hormones travel in neurones or impulses travel in blood.",
        "Stating that receptor cells themselves conduct impulses long distances; receptor cells usually transduce stimuli, then sensory neurones conduct action potentials.",
        "Describing depolarisation as K+ entry rather than Na+ entry, or omitting K+ efflux during repolarisation.",
        "Treating refractory period as a rest time only, without explaining one-way transmission and frequency limitation.",
        "Explaining saltatory conduction without mentioning nodes of Ranvier and myelin insulation.",
        "At synapses, omitting Ca2+ entry before vesicle release or failing to mention acetylcholinesterase in signal termination.",
        "In muscle contraction, saying ATP is needed only for 'energy' without specifying roles in cross-bridge detachment, recocking, and calcium handling.",
      ],
    },
    workedExamples: [
      {
        id: "t15-1-ex1",
        title: "Comparing endocrine and nervous control in one scenario",
        problem: [
          "A runner starts sprinting and then continues for 30 minutes. Explain which control system dominates immediate leg-muscle activation and which system contributes to longer-term regulation of blood glucose and water balance. Include named hormones.",
        ],
        solution: [
          "Immediate activation of leg muscle fibres is dominated by the nervous system. Motor neurones conduct impulses rapidly to neuromuscular junctions, where ACh release triggers muscle action potentials and contraction within milliseconds.",
          "Longer-term regulation during sustained exercise includes endocrine control. Insulin secretion tends to fall and glucagon action supports maintenance of blood glucose by mobilising hepatic glycogen and promoting glucose availability.",
          "As sweating increases water loss, ADH secretion increases to promote water reabsorption in kidney collecting ducts, reducing water loss in urine.",
          "The response illustrates key contrast: nervous control is fast and short-lived, while endocrine control is slower but prolonged and homeostatic.",
        ],
      },
      {
        id: "t15-1-ex2",
        title: "From taste stimulus to impulse propagation",
        problem: [
          "Describe the sequence from a dissolved sweet molecule contacting a taste bud to rapid impulse conduction along a myelinated sensory neurone.",
        ],
        solution: [
          "The sweet molecule binds receptors on a taste chemoreceptor cell membrane, causing a receptor potential by changing ion permeability.",
          "If depolarisation is sufficient, neurotransmitter is released onto the sensory neurone ending, depolarising its membrane. When threshold is reached, an action potential is initiated.",
          "Action potential depolarisation is driven by opening of voltage-gated Na+ channels; repolarisation follows when Na+ channels inactivate and K+ channels open.",
          "In a myelinated sensory axon, current travels rapidly between nodes of Ranvier and action potentials are regenerated at nodes only, producing saltatory conduction.",
          "Refractory periods ensure one-way transmission and set an upper limit on impulse frequency.",
        ],
      },
      {
        id: "t15-1-ex3",
        title: "Explaining contraction using NMJ, T-tubules and sarcomeres",
        problem: [
          "A motor neurone stimulates a striated muscle fibre. Explain how this leads to sarcomere shortening using the roles of Ca2+, troponin, tropomyosin and ATP.",
        ],
        solution: [
          "At the neuromuscular junction, a motor-neurone action potential opens presynaptic Ca2+ channels; Ca2+ influx triggers ACh release. ACh binds receptors on the motor end plate, depolarising sarcolemma and initiating a muscle action potential.",
          "Depolarisation travels along sarcolemma and down T-tubules, causing sarcoplasmic reticulum to release Ca2+ into the sarcoplasm.",
          "Ca2+ binds troponin, shifting tropomyosin away from actin binding sites so myosin heads can attach and form cross-bridges.",
          "Myosin heads execute power strokes that slide actin toward the M-line. ATP binds myosin to detach it from actin, and ATP hydrolysis re-cocks the head for repeated cycles.",
          "As cross-bridge cycles continue, I bands and H zones decrease while A band length stays constant, showing sarcomere shortening by sliding rather than filament shortening.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t15-1-st1",
        question:
          "Compare the nervous system and endocrine system using signal type, route, speed, duration and target specificity. Include ADH, insulin and glucagon as endocrine examples.",
        modelAnswer: [
          "Nervous signalling uses electrical impulses in neurones and neurotransmitters at synapses; it is very fast, short-lived and usually directed to specific effectors.",
          "Endocrine signalling uses hormones carried in blood; it is generally slower in onset, longer lasting and can affect many tissues with appropriate receptors.",
          "ADH increases water reabsorption in kidney collecting ducts, insulin lowers blood glucose (for example by increasing uptake and glycogen synthesis), and glucagon raises blood glucose (for example by promoting glycogen breakdown in liver).",
        ],
      },
      {
        id: "t15-1-st2",
        question:
          "Describe how a chemoreceptor in a taste bud can lead to action potentials in a sensory neurone.",
        modelAnswer: [
          "Chemical stimulus binds receptor proteins on the chemoreceptor cell, generating a graded receptor potential through altered ion permeability.",
          "If sufficient, neurotransmitter is released onto the sensory neurone ending, causing depolarisation.",
          "When threshold is reached in the sensory neurone membrane, voltage-gated Na+ channels open and an action potential is generated.",
        ],
      },
      {
        id: "t15-1-st3",
        question:
          "Explain resting potential, action potential, and refractory period in a neurone, and state why refractory period affects impulse frequency.",
        modelAnswer: [
          "Resting potential is maintained by selective permeability and active transport by the Na+/K+ pump, keeping inside negative relative to outside.",
          "During action potential, Na+ channels open first causing depolarisation; then Na+ channels inactivate and K+ channels open causing repolarisation (often brief hyperpolarisation).",
          "Refractory period follows because ion channels must reset and membrane conditions must recover; this prevents immediate re-excitation, enforces one-way transmission, and sets a maximum impulse frequency.",
        ],
      },
      {
        id: "t15-1-st4",
        question:
          "Describe a cholinergic synapse and explain the role of Ca2+ in transmission.",
        modelAnswer: [
          "An arriving presynaptic action potential opens voltage-gated Ca2+ channels so Ca2+ enters the synaptic knob.",
          "Ca2+ triggers vesicle fusion and release of acetylcholine into the synaptic cleft.",
          "ACh binds postsynaptic receptors, opening ion channels and depolarising the postsynaptic membrane; if threshold is reached, a new action potential begins.",
          "Acetylcholinesterase hydrolyses ACh to terminate signalling and allow controlled, discrete transmission.",
        ],
      },
      {
        id: "t15-1-st5",
        question:
          "Using the sliding filament model, explain how Ca2+, troponin, tropomyosin, ATP, T-tubules and sarcoplasmic reticulum contribute to striated muscle contraction.",
        modelAnswer: [
          "Muscle action potentials spread along sarcolemma and down T-tubules, triggering Ca2+ release from sarcoplasmic reticulum.",
          "Ca2+ binds troponin, causing tropomyosin to move and expose myosin-binding sites on actin.",
          "Myosin heads bind actin and perform power strokes to slide actin inward; ATP is needed for myosin detachment and head recocking via ATP hydrolysis.",
          "Repeated cross-bridge cycling shortens sarcomeres (I band and H zone decrease while A band stays constant).",
        ],
      },
    ],
  },

  "t15-2": {
    noteId: "t15-2",
    syllabusNotes: [
      {
        id: "venus-fly-trap-rapid-response",
        title: "Rapid response in Venus fly trap",
        paragraphs: [
          "The Venus fly trap has modified leaves with two lobes. On each lobe are sensitive trigger hairs that act as mechanoreceptors for touch stimuli from potential prey.",
          "Stimulation of trigger hairs generates electrical signals in leaf tissue. Repeated stimulation within a short interval increases signal reliability, helping avoid closure by random disturbances such as raindrops.",
          "Electrical signalling leads to rapid changes in cell ion distribution and turgor in hinge regions of the lobes. The curvature of lobes changes quickly, causing trap closure and prey capture.",
          "This response is rapid compared with typical hormone-driven growth responses, showing that plants can also coordinate fast electrical and hydraulic mechanisms.",
        ],
      },
      {
        id: "auxin-cell-elongation-acid-growth",
        title: "Auxin and elongation growth: proton pumping and acidification",
        paragraphs: [
          "Auxin promotes elongation in many plant tissues by stimulating proton pumps (H+-ATPases) in the plasma membrane. Protons are moved into cell walls (apoplast), lowering wall pH.",
          "Acidification activates wall-loosening proteins and increases wall extensibility. With wall resistance reduced, water uptake into the vacuole raises turgor-driven expansion and cells elongate.",
          "Auxin therefore links membrane transport, cell wall chemistry and turgor mechanics. In exam explanations, include proton pumping and acidic cell-wall conditions explicitly; saying only 'auxin makes cells grow' is too vague.",
        ],
      },
      {
        id: "gibberellin-barley-germination",
        title: "Gibberellin in barley germination",
        paragraphs: [
          "During barley seed germination, embryo tissues release gibberellin. Gibberellin diffuses to the aleurone layer and activates gene expression for hydrolytic enzymes, especially amylase.",
          "Amylase is secreted into the starchy endosperm, where starch is hydrolysed to smaller sugars such as maltose. These soluble products are transferred to the embryo as respiratory substrates and carbon sources for biosynthesis.",
          "This mechanism coordinates stored-food mobilisation with early growth. It also links with later genetic-control content: gibberellin signalling can activate transcriptional pathways that alter enzyme production.",
        ],
      },
      {
        id: "integrated-plant-coordination",
        title: "Integrated view of plant coordination",
        paragraphs: [
          "Plant control and coordination includes both rapid signalling (for example Venus fly trap electrical responses) and slower hormone-mediated coordination (auxin and gibberellin effects on growth and germination).",
          "A strong conceptual comparison is timescale and mechanism: rapid responses often use electrical/turgor changes in existing tissues, while hormone responses often depend on altered gene expression, transport processes and growth over longer periods.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "High-mark plant-coordination answers are mechanistic and specific. Examiners penalise generic statements that omit stimulus detection, messenger routes, and target processes.",
      items: [
        "Describing Venus fly trap closure as purely growth-based bending; closure is rapid and mainly involves electrical signalling plus turgor/curvature change.",
        "Failing to mention trigger hairs as stimulus detectors in Venus fly trap questions.",
        "Stating that auxin directly 'stretches' cells without proton-pump activation and wall acidification.",
        "Confusing auxin with gibberellin functions by assigning barley endosperm amylase induction to auxin.",
        "In barley germination, omitting the sequence embryo gibberellin -> aleurone enzyme production -> starch hydrolysis -> sugar supply to embryo.",
      ],
    },
    workedExamples: [
      {
        id: "t15-2-ex1",
        title: "Explaining Venus fly trap closure after stimulation",
        problem: [
          "Explain how touching trigger hairs can lead to rapid closure of a Venus fly trap lobe.",
        ],
        solution: [
          "Trigger hairs detect mechanical stimulation and initiate electrical signals in lobe tissue.",
          "When stimulation pattern indicates likely prey, signalling triggers ion movements and rapid water redistribution in motor regions near the lobe hinge.",
          "Turgor and curvature change quickly, causing the lobes to snap shut and trap the prey.",
          "Because the mechanism is electrical and hydraulic in existing tissue, closure is rapid compared with growth responses.",
        ],
      },
      {
        id: "t15-2-ex2",
        title: "Applying the acid-growth mechanism of auxin",
        problem: [
          "A stem segment is treated with auxin. Predict and explain changes at cell-membrane and cell-wall level that lead to elongation.",
        ],
        solution: [
          "Auxin stimulates plasma-membrane proton pumps, increasing H+ export into the cell wall region.",
          "Cell-wall pH falls, activating wall-loosening processes and increasing wall extensibility.",
          "As wall resistance decreases, turgor pressure drives wall yielding and cell length increases.",
          "Elongation therefore depends on both biochemical wall loosening and water-driven expansion, not on new cell production alone.",
        ],
      },
      {
        id: "t15-2-ex3",
        title: "Tracing gibberellin control in barley germination",
        problem: [
          "Describe how gibberellin controls mobilisation of food reserves in a germinating barley grain.",
        ],
        solution: [
          "The embryo releases gibberellin after imbibition and early metabolic reactivation.",
          "Gibberellin reaches aleurone cells and stimulates transcription/translation of hydrolytic enzymes, notably amylase.",
          "Amylase is secreted into endosperm and hydrolyses starch to soluble sugars.",
          "These sugars move to the embryo and provide substrates for respiration and synthesis, supporting early seedling growth before photosynthesis is established.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t15-2-st1",
        question:
          "Describe the rapid response of Venus fly trap to stimulation of lobe hairs and explain how trap closure is achieved.",
        modelAnswer: [
          "Mechanical stimulation of trigger hairs initiates electrical signals in the modified leaf lobes.",
          "These signals drive rapid ion and water redistribution in hinge/motor tissues, changing turgor and lobe curvature.",
          "The lobes snap shut quickly, trapping prey. The response is rapid because it relies on signalling and hydraulic change, not slow growth.",
        ],
      },
      {
        id: "t15-2-st2",
        question:
          "Explain how auxin promotes elongation growth, with explicit reference to proton pumping and cell-wall acidification.",
        modelAnswer: [
          "Auxin activates plasma-membrane proton pumps (H+-ATPases), increasing proton export to the apoplast.",
          "The lower wall pH activates wall-loosening processes, so the wall becomes more extensible.",
          "With reduced wall resistance, water uptake and turgor pressure drive cell expansion and elongation.",
        ],
      },
      {
        id: "t15-2-st3",
        question:
          "Outline the role of gibberellin in barley germination from hormone release to nutrient supply for the embryo.",
        modelAnswer: [
          "Embryo tissues release gibberellin after germination begins.",
          "Gibberellin acts on the aleurone layer, inducing production of hydrolytic enzymes such as amylase.",
          "Amylase digests endosperm starch to soluble sugars, which are transferred to the embryo for respiration and biosynthesis.",
        ],
      },
      {
        id: "t15-2-st4",
        question:
          "Compare one rapid plant response and one hormone-mediated growth response from this topic.",
        modelAnswer: [
          "Rapid response example: Venus fly trap closure uses touch detection, electrical signalling and rapid turgor/curvature changes within seconds.",
          "Hormone-mediated growth example: auxin-induced elongation or gibberellin-induced enzyme synthesis develops over longer times through membrane transport changes and/or altered gene expression.",
        ],
      },
      {
        id: "t15-2-st5",
        question:
          "Why is it inaccurate to state that all plant coordination is slow? Use evidence from Topic 15.2.",
        modelAnswer: [
          "Topic 15.2 includes Venus fly trap, where touch stimuli trigger rapid electrical and hydraulic responses leading to quick trap closure.",
          "Plants also show slower hormone-mediated coordination (for example auxin-driven elongation and gibberellin-driven enzyme production), so plant control includes both rapid and slower mechanisms.",
        ],
      },
    ],
  },
};
