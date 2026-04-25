import type { NoteDraft } from "./types";

/** Full teaching notes for 9700 Topic 12 — subtopics 12.1-12.2 (see lib/notes/AUTHORING.md). */
export const BIOLOGY_TOPIC12_DRAFTS: Record<string, NoteDraft> = {
  "t12-1": {
    noteId: "t12-1",
    syllabusNotes: [
      {
        id: "energy-in-living-systems",
        title: "Energy transfer in living organisms",
        paragraphs: [
          "Cells require a continuous supply of energy for processes such as active transport, biosynthesis, movement, secretion, and maintenance of membrane potentials. Energy is not created by cells; it is transferred from one form to another during metabolic reactions.",
          "At this level, energy transfer should be described in terms of exergonic and endergonic reactions. Exergonic reactions release usable energy, while endergonic reactions require an input of energy. Cells couple these reactions so that energy released in one process drives another that would not occur spontaneously.",
          "The key immediate energy currency used for this coupling is ATP. Glucose and lipids are long-term chemical energy stores, but ATP is the direct donor used at enzyme-controlled sites where work is done.",
        ],
      },
      {
        id: "atp-structure-and-properties",
        title: "ATP structure and why ATP is suited to cellular work",
        paragraphs: [
          "ATP is adenosine triphosphate. It consists of adenine, ribose and three phosphate groups linked by phosphoanhydride bonds. Its compact, soluble structure allows rapid movement within the cytoplasm and organelles.",
          "ATP is not an energy store in the same way as glycogen or lipid. Instead, it is an intermediate energy carrier with fast turnover: ATP is synthesised and hydrolysed continuously according to demand.",
          "ATP is particularly useful because hydrolysis releases a small, manageable amount of energy per molecule, so cells can control energy transfer in many short steps rather than as a single large release that would be inefficient as heat.",
        ],
      },
      {
        id: "atp-hydrolysis-and-coupling",
        title: "ATP hydrolysis, phosphorylation and coupling",
        paragraphs: [
          "ATP hydrolysis is ATP + H2O -> ADP + Pi. This reaction is exergonic and can transfer a phosphate group to another molecule. The receiving molecule becomes phosphorylated and usually more reactive.",
          "Phosphorylation allows endergonic changes to proceed, for example changing the shape of proteins in active transport carriers, activating substrates in metabolic pathways, or enabling movement in motor proteins.",
          "A clear exam explanation should link ATP hydrolysis directly to mechanism. Rather than writing 'ATP gives energy', write how ATP hydrolysis and phosphate transfer change molecular interactions so a specific process can occur.",
        ],
      },
      {
        id: "atp-regeneration",
        title: "Regeneration of ATP from ADP",
        paragraphs: [
          "ATP must be regenerated from ADP and inorganic phosphate (Pi). This synthesis is endergonic and requires energy from respiration in all cells, and from photosynthesis in plant chloroplasts.",
          "In respiration, ATP can be made by substrate-level phosphorylation and oxidative phosphorylation. In photosynthesis, ATP is made by photophosphorylation. These pathways differ in mechanism and location, but all produce ATP as an immediately usable product.",
          "The ATP-ADP cycle links catabolic and anabolic metabolism. Catabolic pathways release energy used to regenerate ATP; ATP hydrolysis then powers anabolic and transport processes.",
        ],
      },
      {
        id: "atp-uses-in-cells",
        title: "Examples of ATP use in biological systems",
        paragraphs: [
          "Active transport uses ATP to move substances against concentration gradients. ATP hydrolysis changes conformation of membrane proteins, allowing directional movement of ions and solutes.",
          "Metabolic synthesis uses ATP to activate intermediates and drive bond formation, for example in protein synthesis and nucleic acid synthesis.",
          "Muscle contraction uses ATP in the actin-myosin cross-bridge cycle. ATP binding and hydrolysis control attachment, movement and detachment steps of myosin heads.",
          "Intracellular vesicle transport, secretion and signal transduction also depend on ATP-dependent protein conformational changes, showing ATP use across many cell functions rather than one specialised pathway.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "In this subtopic, marks are awarded for precise language about transfer and coupling, not vague statements that ATP is simply 'stored energy'.",
      items: [
        "Calling ATP a long-term energy store; ATP is an immediate, short-term energy carrier with rapid turnover.",
        "Stating that ATP hydrolysis directly 'releases energy to the cell' without explaining phosphorylation or coupling to a specific endergonic step.",
        "Confusing ATP hydrolysis (ATP -> ADP + Pi) with ATP synthesis (ADP + Pi -> ATP).",
        "Describing ATP as made only in mitochondria and ignoring photophosphorylation in chloroplasts and substrate-level phosphorylation pathways.",
        "Giving generic examples of ATP use without linking each example to a mechanistic role such as protein conformational change or substrate activation.",
      ],
    },
    workedExamples: [
      {
        id: "t12-1-ex1",
        title: "Explaining why ATP is called an immediate energy currency",
        problem: [
          "A student writes: 'Glucose is the cell's energy currency, so ATP is just an energy store.' Rewrite this statement as an exam-quality explanation.",
        ],
        solution: [
          "Glucose is an energy-rich fuel molecule, but ATP is the immediate energy currency used directly by enzymes and molecular machines.",
          "ATP is hydrolysed to ADP + Pi, and the released energy plus phosphate transfer are coupled to specific endergonic processes such as active transport and biosynthesis.",
          "ATP is regenerated continuously from ADP using energy from respiration (and photosynthesis in plants), so ATP functions as a rapid-transfer intermediate rather than a long-term store.",
        ],
      },
      {
        id: "t12-1-ex2",
        title: "Applying ATP coupling to active transport",
        problem: [
          "Explain how ATP enables a membrane carrier protein to move ions against their concentration gradient.",
        ],
        solution: [
          "Moving ions against a concentration gradient is endergonic, so it cannot proceed spontaneously.",
          "ATP is hydrolysed at the transport protein. The phosphate group is transferred to the protein (or a coupled site), causing a conformational change.",
          "This shape change alters ion-binding affinity and orientation across the membrane, moving ions in one direction against the gradient.",
          "Release of phosphate returns the protein to its original conformation, ready for another cycle.",
        ],
      },
      {
        id: "t12-1-ex3",
        title: "Linking ATP regeneration to respiration and photosynthesis",
        problem: [
          "Compare how ATP is regenerated in non-photosynthetic cells and photosynthetic cells.",
        ],
        solution: [
          "In non-photosynthetic cells, ATP regeneration depends on respiration. Energy from oxidation of respiratory substrates drives ADP phosphorylation by substrate-level and oxidative phosphorylation.",
          "In photosynthetic cells, ATP is also generated in chloroplasts by photophosphorylation during the light-dependent stage, using light energy captured by chlorophyll.",
          "Both cell types still use the same ATP-ADP cycle: ATP hydrolysis powers cellular work, and ATP is resynthesised from ADP and Pi using an external energy source.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t12-1-st1",
        question: "State the structure of ATP and explain why ATP is suitable as an immediate energy currency.",
        modelAnswer: [
          "ATP is adenosine triphosphate, made of adenine, ribose and three phosphate groups.",
          "It is small and soluble, can be hydrolysed rapidly, and transfers manageable amounts of energy in controlled enzyme-catalysed steps.",
          "It is regenerated continuously, so it supports rapid coupling of energy-releasing and energy-requiring reactions.",
        ],
      },
      {
        id: "t12-1-st2",
        question: "Describe ATP hydrolysis and explain the role of phosphorylation in energy coupling.",
        modelAnswer: [
          "ATP hydrolysis is ATP + H2O -> ADP + Pi, which is an exergonic reaction.",
          "The phosphate group can be transferred to another molecule or protein, forming a phosphorylated intermediate with altered reactivity.",
          "This phosphorylation couples ATP hydrolysis to endergonic processes such as active transport or biosynthesis.",
        ],
      },
      {
        id: "t12-1-st3",
        question: "Explain the ATP-ADP cycle and why continuous ATP regeneration is essential.",
        modelAnswer: [
          "ATP hydrolysis releases energy for cellular work and produces ADP + Pi.",
          "ATP is resynthesised from ADP + Pi using energy from respiration (and photosynthesis in plant chloroplasts).",
          "Because ATP concentration in cells is limited, continuous regeneration is essential to maintain metabolism and transport processes.",
        ],
      },
      {
        id: "t12-1-st4",
        question: "Give two specific cellular processes that use ATP and explain how ATP contributes in each case.",
        modelAnswer: [
          "Active transport: ATP hydrolysis causes conformational changes in carrier proteins that move ions or solutes against gradients.",
          "Protein synthesis: ATP is used to activate amino acids and support steps in the translation pathway, driving bond-forming processes that are not spontaneous alone.",
        ],
      },
      {
        id: "t12-1-st5",
        question:
          "A candidate writes: 'ATP stores lots of energy because breaking bonds releases energy.' Identify the error and provide a corrected explanation.",
        modelAnswer: [
          "The error is the oversimplified claim that energy comes from bond breaking alone.",
          "In ATP hydrolysis, energy transfer depends on the overall reaction: products (ADP + Pi and associated hydration states) are at lower free energy than reactants.",
          "ATP is best described as an intermediate energy carrier whose hydrolysis can be coupled to endergonic cellular reactions.",
        ],
      },
    ],
  },

  "t12-2": {
    noteId: "t12-2",
    syllabusNotes: [
      {
        id: "aerobic-respiration-stages-and-locations",
        title: "Aerobic respiration: four stages and their locations",
        paragraphs: [
          "Aerobic respiration in eukaryotic cells has four linked stages. Glycolysis occurs in the cytoplasm. The link reaction and Krebs cycle occur in the mitochondrial matrix. Oxidative phosphorylation occurs on the inner mitochondrial membrane (cristae).",
          "The order matters because products of one stage are substrates for the next. Glycolysis forms pyruvate and reduced NAD. When oxygen is available, pyruvate enters mitochondria and is oxidised in the link reaction before entering the Krebs cycle.",
          "Reduced coenzymes formed earlier (reduced NAD and reduced FAD) transfer hydrogen to the electron transport chain on the inner membrane, where most ATP is generated by oxidative phosphorylation.",
        ],
      },
      {
        id: "glycolysis-core-outline",
        title: "Glycolysis: phosphorylation, splitting and oxidation to pyruvate",
        paragraphs: [
          "Glycolysis begins with phosphorylation of glucose, making it more reactive. Glucose is converted to fructose 1,6-bisphosphate (6C), which is split into two triose phosphate molecules (3C).",
          "Each triose phosphate is oxidised through a series of enzyme-controlled reactions to pyruvate (3C). During these steps, ATP is produced and NAD is reduced to reduced NAD.",
          "Because one glucose produces two triose phosphates, glycolysis yields two pyruvate molecules per glucose. This stage does not require oxygen directly, so it can proceed under both aerobic and anaerobic conditions.",
        ],
      },
      {
        id: "link-reaction-details",
        title: "Link reaction and role of coenzyme A",
        paragraphs: [
          "When oxygen is available, pyruvate is transported into the mitochondrial matrix and undergoes oxidative decarboxylation. Carbon dioxide is removed from pyruvate and NAD is reduced.",
          "The remaining 2C acetyl fragment combines with coenzyme A to form acetyl coenzyme A. Coenzyme A acts as a carrier, transferring this 2C acetyl group into the Krebs cycle.",
          "The link reaction therefore connects glycolysis to the Krebs cycle and contributes reduced NAD for later oxidative phosphorylation.",
        ],
      },
      {
        id: "krebs-cycle-outline",
        title: "Krebs cycle: citrate formation and return to oxaloacetate",
        paragraphs: [
          "In the matrix, acetyl coenzyme A (2C) transfers its acetyl group to oxaloacetate (4C), producing citrate (6C). Through a sequence of small steps, citrate is converted back to oxaloacetate.",
          "During this cycle, reactions include decarboxylation (CO2 released) and dehydrogenation (hydrogen removed). NAD and FAD are reduced to reduced NAD and reduced FAD.",
          "The regenerated oxaloacetate can accept another acetyl group, so the cycle continues as long as substrates and oxidised coenzymes are available.",
        ],
      },
      {
        id: "oxidative-phosphorylation-mechanism",
        title: "Oxidative phosphorylation and chemiosmosis",
        paragraphs: [
          "Reduced NAD and reduced FAD donate hydrogen to carriers in the inner mitochondrial membrane. Hydrogen atoms split into protons and energetic electrons.",
          "Electrons pass along an electron transport chain, releasing energy in steps. This energy is used to pump protons from the matrix into the intermembrane space, creating a proton electrochemical gradient.",
          "Protons move back into the matrix through ATP synthase by facilitated diffusion. Energy from this proton movement drives ATP synthesis from ADP + Pi.",
          "Oxygen acts as the final electron acceptor. It accepts electrons and combines with protons to form water. Without oxygen as terminal acceptor, the chain cannot continue effectively.",
        ],
      },
      {
        id: "mitochondrion-structure-function",
        title: "How mitochondrial structure supports respiration",
        paragraphs: [
          "Outer membrane encloses the organelle, while the inner membrane is highly folded into cristae. The folds increase surface area for electron carriers and ATP synthase complexes used in oxidative phosphorylation.",
          "The matrix contains enzymes for the link reaction and Krebs cycle, along with mitochondrial DNA and 70S ribosomes needed for some mitochondrial protein synthesis.",
          "The intermembrane space provides a compartment for proton accumulation, allowing formation of the proton gradient required for chemiosmosis.",
          "In electron micrographs, strong candidates relate visible features (many cristae, dense matrix) to metabolic demand rather than merely naming structures.",
        ],
      },
      {
        id: "anaerobic-respiration-and-yield",
        title: "Respiration in anaerobic conditions and energy yield differences",
        paragraphs: [
          "In mammals under low oxygen availability, pyruvate from glycolysis is reduced to lactate (lactate fermentation). This regenerates NAD so glycolysis can continue producing ATP.",
          "In yeast, pyruvate is decarboxylated to ethanal and then reduced to ethanol (ethanol fermentation), also regenerating NAD for glycolysis.",
          "Anaerobic pathways rely on glycolysis only for ATP production, so ATP yield per glucose is much lower than in aerobic respiration, where link reaction, Krebs cycle and oxidative phosphorylation generate additional ATP via reduced coenzymes.",
        ],
      },
      {
        id: "rice-adaptation-in-waterlogged-soils",
        title: "Why rice can grow with submerged roots",
        paragraphs: [
          "Waterlogged soils limit oxygen diffusion into roots. Rice adapts by developing aerenchyma (air spaces) in roots, improving internal oxygen movement from aerial tissues to submerged tissues.",
          "Rice roots can also carry out ethanol fermentation when oxygen is limited, allowing continued ATP production via glycolysis with NAD regeneration.",
          "Faster stem growth helps keep leaves above water, improving access to atmospheric oxygen and light, which supports survival during flooding.",
        ],
      },
      {
        id: "respiration-investigations",
        title: "Investigating respiration with indicators and respirometers",
        paragraphs: [
          "Redox indicators such as DCPIP and methylene blue can be used with yeast to assess respiration rate. As respiration proceeds, reducing conditions increase and the indicator is decolourised; shorter time to colour loss indicates faster respiration.",
          "To test temperature effects, keep substrate concentration, yeast concentration, pH and volume constant while changing only temperature. To test substrate concentration effects, keep temperature and other variables constant while changing substrate concentration.",
          "Simple respirometers can estimate respiration rate by measuring oxygen uptake or pressure/volume change over time. When using living material, maintain constant mass/number of organisms, constant time intervals, and controlled temperature (often with a water bath).",
          "Reliable practical conclusions require repeats, calculation of means, and clear control of variables so observed differences can be attributed to the tested factor.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "This subtopic is sequence-heavy. Examiners reward accurate location, carbon accounting, and clear coenzyme/electron-flow logic.",
      items: [
        "Mixing up locations of stages, especially placing glycolysis in mitochondria or oxidative phosphorylation in the matrix.",
        "Omitting coenzyme A in the link reaction or failing to identify acetyl coenzyme A as the 2C carrier into the Krebs cycle.",
        "Describing the Krebs cycle without mentioning both decarboxylation and dehydrogenation with reduction of NAD and FAD.",
        "Stating that oxygen is needed for glycolysis directly; glycolysis can proceed without oxygen, but sustained ATP yield and NAD reoxidation differ.",
        "Claiming anaerobic and aerobic respiration give similar ATP yield, or forgetting fermentation products differ between mammals (lactate) and yeast (ethanol plus carbon dioxide).",
      ],
    },
    workedExamples: [
      {
        id: "t12-2-ex1",
        title: "Tracing one glucose through aerobic respiration stages",
        problem: [
          "Outline the route of carbon and reduced coenzymes from glucose to carbon dioxide and water in aerobic respiration, naming stage locations.",
        ],
        solution: [
          "In the cytoplasm, glycolysis converts glucose (6C) to two pyruvate molecules (3C), producing ATP and reduced NAD.",
          "In the mitochondrial matrix, each pyruvate undergoes the link reaction: decarboxylation and dehydrogenation produce acetyl coenzyme A, carbon dioxide and reduced NAD.",
          "In the matrix, acetyl coenzyme A enters the Krebs cycle: the 2C acetyl group combines with oxaloacetate (4C) to form citrate (6C), then through decarboxylation and dehydrogenation steps oxaloacetate is regenerated while reduced NAD, reduced FAD and carbon dioxide are produced.",
          "On the inner mitochondrial membrane, reduced NAD and reduced FAD donate hydrogen to the electron transport chain. Electrons drive proton pumping; protons return via ATP synthase to make ATP; oxygen accepts electrons and protons to form water.",
        ],
      },
      {
        id: "t12-2-ex2",
        title: "Explaining low ATP yield in anaerobic conditions",
        problem: [
          "Explain why ATP yield per glucose is much lower in anaerobic respiration than in aerobic respiration, using mammalian and yeast examples.",
        ],
        solution: [
          "In anaerobic conditions, ATP production depends on glycolysis only, so ATP is made by substrate-level phosphorylation alone.",
          "Pyruvate is reduced to lactate in mammals or converted to ethanol (and carbon dioxide) in yeast. These fermentation pathways regenerate NAD so glycolysis can continue, but they do not include the link reaction, Krebs cycle or oxidative phosphorylation.",
          "In aerobic respiration, reduced coenzymes from glycolysis, link reaction and Krebs cycle feed electrons into the electron transport chain, creating a proton gradient that drives substantial ATP synthesis. Without this oxidative phosphorylation stage, ATP yield is much lower.",
        ],
      },
      {
        id: "t12-2-ex3",
        title: "Designing a yeast respiration investigation with DCPIP",
        problem: [
          "Plan how to investigate the effect of temperature on yeast respiration using DCPIP, and state how you would ensure valid conclusions.",
        ],
        solution: [
          "Prepare equal volumes of yeast suspension, substrate solution and DCPIP in identical tubes. Place tubes at different controlled temperatures using water baths.",
          "Start timing when yeast is added and mix consistently. Record time taken for DCPIP to decolourise; shorter time indicates faster respiration rate.",
          "Keep yeast concentration, substrate concentration, pH, total volume and indicator concentration constant so temperature is the only independent variable.",
          "Repeat at each temperature and calculate means. Plot rate (for example 1/time to decolourisation) against temperature and identify trends with justification from enzyme activity and denaturation effects.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t12-2-st1",
        question:
          "State where glycolysis, link reaction, Krebs cycle and oxidative phosphorylation occur in a eukaryotic cell.",
        modelAnswer: [
          "Glycolysis occurs in the cytoplasm.",
          "Link reaction and Krebs cycle occur in the mitochondrial matrix.",
          "Oxidative phosphorylation occurs on the inner mitochondrial membrane (cristae).",
        ],
      },
      {
        id: "t12-2-st2",
        question:
          "Outline glycolysis from glucose to pyruvate, including phosphorylation, splitting, ATP production and reduced NAD formation.",
        modelAnswer: [
          "Glucose is phosphorylated and converted to fructose 1,6-bisphosphate (6C).",
          "Fructose 1,6-bisphosphate is split into two triose phosphate molecules (3C each).",
          "Each triose phosphate is oxidised to pyruvate, producing ATP and reducing NAD to reduced NAD.",
          "Overall, glycolysis yields two pyruvate per glucose and can proceed without direct oxygen use.",
        ],
      },
      {
        id: "t12-2-st3",
        question:
          "Describe the link reaction and Krebs cycle with reference to coenzyme A, oxaloacetate, decarboxylation, dehydrogenation, and reduced coenzymes.",
        modelAnswer: [
          "In the link reaction, pyruvate is decarboxylated and dehydrogenated in the matrix; NAD is reduced and the 2C acetyl group combines with coenzyme A to form acetyl coenzyme A.",
          "In the Krebs cycle, acetyl coenzyme A transfers the 2C acetyl group to oxaloacetate (4C) to form citrate (6C), which is converted back to oxaloacetate through a series of steps.",
          "These steps include decarboxylation and dehydrogenation, producing carbon dioxide, reduced NAD and reduced FAD.",
        ],
      },
      {
        id: "t12-2-st4",
        question:
          "Explain oxidative phosphorylation, including electron transport, proton pumping, ATP synthase, and oxygen as final electron acceptor.",
        modelAnswer: [
          "Reduced NAD and reduced FAD donate hydrogen; hydrogen atoms separate into protons and energetic electrons.",
          "Electrons pass along carriers in the inner mitochondrial membrane, releasing energy used to pump protons into the intermembrane space.",
          "Protons diffuse back into the matrix through ATP synthase, and this chemiosmotic flow drives ATP synthesis from ADP + Pi.",
          "Oxygen is the terminal electron acceptor and combines with electrons and protons to form water.",
        ],
      },
      {
        id: "t12-2-st5",
        question:
          "Compare anaerobic respiration in mammals and yeast, then explain why rice can survive with submerged roots.",
        modelAnswer: [
          "In mammals, anaerobic respiration converts pyruvate to lactate to regenerate NAD. In yeast, pyruvate is converted to ethanol and carbon dioxide, also regenerating NAD.",
          "Both anaerobic pathways allow glycolysis to continue but produce far less ATP than aerobic respiration because oxidative phosphorylation is absent.",
          "Rice survives waterlogged conditions by forming aerenchyma for internal oxygen movement, carrying out ethanol fermentation in roots when oxygen is limited, and showing faster stem growth to keep shoots above water.",
        ],
      },
    ],
  },
};
