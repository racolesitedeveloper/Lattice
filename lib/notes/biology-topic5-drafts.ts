import type { NoteDraft } from "./types";

/** Full teaching notes for 9700 Topic 5 — subtopics 5.1–5.2 (see lib/notes/AUTHORING.md). */
export const BIOLOGY_TOPIC5_DRAFTS: Record<string, NoteDraft> = {
  "t5-1": {
    noteId: "t5-1",
    syllabusNotes: [
      {
        id: "chromosome-structure",
        title: "Chromosome structure and key terms",
        paragraphs: [
          "A eukaryotic chromosome is one long DNA molecule associated with histone proteins. The DNA wraps around histones to form chromatin, which allows a very long DNA molecule to be compacted in the nucleus while still being accessible for replication and gene expression.",
          "Before DNA replication, one chromosome consists of one DNA double helix. After replication in S phase, each chromosome consists of two sister chromatids. Sister chromatids are genetically identical copies because each was made by semi-conservative DNA replication from the same original chromosome.",
          "The sister chromatids are joined at a centromere. The centromere is the region where kinetochores form and spindle microtubules attach during mitosis, so it is crucial for accurate separation of chromatids.",
          "Telomeres are repetitive DNA sequences at the ends of linear chromosomes. They act as protective caps and reduce the risk of losing coding DNA sequences from chromosome ends during repeated rounds of DNA replication.",
        ],
      },
      {
        id: "mitotic-cell-cycle-overview",
        title: "The mitotic cell cycle: interphase, mitosis and cytokinesis",
        paragraphs: [
          "The mitotic cell cycle is the sequence of events by which one parent cell produces two genetically identical daughter cells. It has three broad parts: interphase, mitosis and cytokinesis.",
          "Interphase includes G₁, S and G₂. In G₁, cells grow, synthesise proteins and organelles, and carry out normal metabolic functions. In S phase, DNA is replicated so each chromosome forms two sister chromatids. In G₂, cells continue growth, synthesise proteins needed for mitosis and check whether replication has completed correctly.",
          "Mitosis is nuclear division: one nucleus divides to form two genetically identical nuclei. Cytokinesis is cytoplasmic division: the cytoplasm splits so two separate daughter cells are formed. A frequent exam error is to use mitosis to mean the whole cycle; mitosis is one part of the cycle, while cytokinesis completes cell division.",
        ],
      },
      {
        id: "why-mitosis-matters",
        title: "Why mitosis is essential in multicellular organisms",
        paragraphs: [
          "Mitosis is needed for growth because multicellular organisms increase cell number from a fertilised egg by repeated divisions that preserve the same genome in somatic cells.",
          "Mitosis also allows replacement of dead or damaged cells. Tissues with high cell turnover (for example epithelial tissues) depend on continual mitotic division to maintain function.",
          "Tissue repair by cell replacement also depends on mitosis. After injury, cell division restores cell number and helps rebuild normal tissue structure.",
          "In asexual reproduction, mitosis produces offspring genetically identical to the parent (apart from mutation). This is advantageous where rapid colonisation is beneficial and stable genotypes are favoured in a stable environment.",
        ],
      },
      {
        id: "telomeres-and-stem-cells",
        title: "Telomeres, stem cells and long-term tissue maintenance",
        paragraphs: [
          "During DNA replication, conventional replication machinery cannot fully copy the very ends of linear chromosomes, so chromosome ends would shorten progressively if unprotected coding regions were exposed. Telomeres buffer this end-replication problem by placing repetitive non-coding DNA at chromosome ends.",
          "Progressive telomere shortening is associated with limits on how many times many somatic cells can divide. This links chromosome-end biology to ageing and to the ability of tissues to renew.",
          "Stem cells are undifferentiated cells that divide by mitosis and can produce daughter cells that either remain stem cells or differentiate into specialised cell types. In cell replacement and tissue repair, stem cells are therefore the long-term source of new functional cells.",
        ],
      },
      {
        id: "control-of-cell-division-and-tumours",
        title: "Control of cell division and tumour formation",
        paragraphs: [
          "Normal cell division is regulated by checkpoints, signalling pathways and genes that promote or inhibit progression through the cycle. These controls ensure that cells usually divide only when needed and with replicated DNA that is sufficiently intact.",
          "A tumour forms when cell division becomes uncontrolled. If mutations activate genes that drive division (proto-oncogenes becoming oncogenes) and/or inactivate genes that suppress division or repair damage (tumour suppressor genes), cells can proliferate despite signals that would normally stop the cycle.",
          "The key syllabus point is causal: uncontrolled mitosis increases cell number inappropriately, producing a mass of abnormal cells. Whether a tumour remains localised or becomes invasive is additional detail, but the initiating logic is loss of normal cell-cycle control.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Examiners usually reward precise use of cell-cycle vocabulary and clear links between structure and function. Marks are often lost by mixing up replicated chromosome terminology and by using vague wording about cancer.",
      items: [
        "Calling sister chromatids homologous chromosomes. Sister chromatids are identical copies of one chromosome after S phase; homologous chromosomes are a maternal-paternal pair with the same loci.",
        "Saying DNA replication occurs during mitosis. Replication occurs in S phase of interphase, before mitosis starts.",
        "Using mitosis and cytokinesis as synonyms. Mitosis is nuclear division; cytokinesis is division of cytoplasm and cell membrane.",
        "Describing telomeres only as 'ageing markers' without stating their replication role at chromosome ends.",
        "Giving functions of stem cells in general terms but not linking them explicitly to cell replacement and tissue repair by mitosis.",
        "Writing 'cancer happens because cells divide fast' without the idea of loss of normal cell-cycle control leading to uncontrolled division and tumour formation.",
      ],
    },
    workedExamples: [
      {
        id: "t5-1-ex1",
        title: "Using chromosome vocabulary accurately through the cycle",
        problem: [
          "A student writes: 'In G₁ each chromosome has two chromatids. In S phase these separate at the centromere.' Rewrite this statement so it is biologically correct and exam-precise.",
        ],
        solution: [
          "In G₁, each chromosome consists of one DNA molecule (one chromatid state). During S phase, DNA replication occurs so each chromosome becomes two sister chromatids joined at a centromere.",
          "The separation of sister chromatids does not happen in S phase. It happens later in mitosis (at anaphase) when spindle fibres pull sister chromatids apart to opposite poles.",
          "A high-scoring answer distinguishes sequence: G₁ growth, S replication, then later mitotic separation.",
        ],
      },
      {
        id: "t5-1-ex2",
        title: "Explaining why mitosis must produce genetically identical daughter cells",
        problem: [
          "Explain why growth and tissue repair in multicellular organisms require mitosis to produce genetically identical daughter cells rather than genetically varied cells.",
        ],
        solution: [
          "Growth and repair increase or restore cell number in existing tissues. For tissue function to remain stable, replacement cells must usually have the same genes and therefore the same potential to express required proteins as the cells they replace.",
          "If daughter cells were not genetically identical, tissue architecture and function could become inconsistent after each division, reducing reliability of coordinated organ function.",
          "Therefore, DNA replication in S phase followed by equal chromatid segregation in mitosis preserves genetic information across somatic cell lineages, allowing controlled growth, replacement and repair.",
        ],
      },
      {
        id: "t5-1-ex3",
        title: "Linking telomeres, stem cells and tumour formation",
        problem: [
          "A tissue sample shows one cell lineage with very high mitotic rate and another lineage with reduced regenerative capacity after many divisions. Use telomeres, stem cells and cell-cycle control to explain both observations.",
        ],
        solution: [
          "Reduced regenerative capacity can be explained by progressive telomere shortening in normal somatic lineages after repeated replication. As telomeres shorten, cells may stop dividing effectively, so tissue renewal declines.",
          "A high mitotic rate lineage may indicate disrupted cell-cycle control. Mutations affecting regulatory genes can allow repeated division despite normal checkpoint signals, leading to uncontrolled proliferation.",
          "Stem cells normally maintain repair because they self-renew and generate differentiated descendants by mitosis. If normal stem-cell pools decline or become dysregulated, either repair failure or tumour-like overgrowth can result depending on the direction of the change.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t5-1-st1",
        question:
          "Describe the structure of a chromosome, including DNA, histone proteins, sister chromatids, centromere and telomeres.",
        modelAnswer: [
          "A chromosome is a DNA molecule associated with histone proteins (chromatin). After replication it consists of two genetically identical sister chromatids joined at a centromere. Telomeres are repetitive DNA regions at each chromosome end that protect chromosome ends during repeated replication.",
        ],
      },
      {
        id: "t5-1-st2",
        question:
          "Outline the mitotic cell cycle and state what happens in G₁, S, G₂, mitosis and cytokinesis.",
        modelAnswer: [
          "The mitotic cell cycle consists of interphase (G₁, S, G₂), then mitosis, then cytokinesis. In G₁ cells grow and synthesise components; in S phase DNA is replicated; in G₂ cells grow further and prepare for mitosis; mitosis divides the nucleus to form two genetically identical nuclei; cytokinesis divides cytoplasm and separates the cell into two daughter cells.",
        ],
      },
      {
        id: "t5-1-st3",
        question:
          "Explain the importance of mitosis in (i) growth, (ii) replacement of damaged or dead cells, (iii) repair of tissues and (iv) asexual reproduction.",
        modelAnswer: [
          "Mitosis increases cell number for growth, replaces dead or damaged cells, and supplies new cells for tissue repair while preserving the genome. In asexual reproduction, mitosis produces offspring genetically identical to the parent (except for mutation), enabling rapid cloning of successful genotypes.",
        ],
      },
      {
        id: "t5-1-st4",
        question:
          "Outline the role of telomeres in preventing loss of genes from chromosome ends during DNA replication.",
        modelAnswer: [
          "Replication of linear DNA leaves chromosome ends at risk of progressive shortening. Telomeres are repetitive, largely non-coding end sequences that act as protective buffers, so shortening affects telomeric repeats before essential gene sequences are lost.",
        ],
      },
      {
        id: "t5-1-st5",
        question:
          "Outline the role of stem cells in tissue repair and explain how uncontrolled cell division can result in a tumour.",
        modelAnswer: [
          "Stem cells divide by mitosis to self-renew and produce cells that differentiate, so they provide a continual source of replacement cells for tissue maintenance and repair. If cell-cycle control is lost, cells continue dividing when they should not, leading to an abnormal mass of cells called a tumour.",
        ],
      },
    ],
  },

  "t5-2": {
    noteId: "t5-2",
    syllabusNotes: [
      {
        id: "mitosis-sequence-and-core-events",
        title: "Main stages of mitosis and chromosome behaviour",
        paragraphs: [
          "Mitosis is described in four named stages: prophase, metaphase, anaphase and telophase. Candidates are expected to identify these stages from images and to relate each stage to chromosome position and behaviour.",
          "In prophase, chromosomes condense and become short, thick and visible as sister chromatids joined at centromeres. The spindle begins to form, and the nuclear envelope breaks down so spindle fibres can interact with chromosomes.",
          "In metaphase, chromosomes align at the equator of the spindle. Spindle fibres from opposite poles attach to kinetochores at centromeres, positioning each chromosome for equal segregation.",
          "In anaphase, centromeres divide and sister chromatids separate. The chromatids (now daughter chromosomes) are pulled to opposite poles by shortening spindle fibres, ensuring each future nucleus receives one copy of each chromosome.",
          "In telophase, chromosomes reach poles and decondense. Nuclear envelopes re-form around each chromosome set, producing two genetically identical nuclei.",
        ],
      },
      {
        id: "spindle-nuclear-envelope-and-membranes",
        title: "Behaviour of spindle, nuclear envelope and cell surface membrane",
        paragraphs: [
          "The spindle is a dynamic microtubule structure that attaches to centromere regions and physically segregates chromatids. Accurate attachment to both poles is crucial; incorrect attachment risks non-identical chromosome sets.",
          "The nuclear envelope disappears as mitosis begins (late prophase/prometaphase) and reforms at telophase. Linking envelope breakdown and reformation to chromosome visibility is a common interpretation clue in micrographs.",
          "The cell surface membrane marks the cell boundary throughout. During cytokinesis after nuclear division, membrane behaviour differs between animal and plant cells but in both cases it completes cell division into two daughter cells.",
        ],
      },
      {
        id: "cytokinesis-in-animal-and-plant-cells",
        title: "Comparing cytokinesis in animal and plant cells",
        paragraphs: [
          "In animal cells, cytokinesis usually occurs by cleavage: a contractile ring constricts the cell surface membrane, forming a cleavage furrow that deepens until two daughter cells separate.",
          "In plant cells, the rigid cell wall prevents furrow cleavage. Vesicles coalesce at the equator to form a cell plate, which expands outward and becomes new plasma membranes and a new cell wall between daughter cells.",
          "When asked to compare plant and animal mitotic division, include this cytokinesis contrast explicitly; it is often a discriminating mark point in structured questions.",
        ],
      },
      {
        id: "reading-micrographs-and-diagrams",
        title: "How to identify mitotic stages in images",
        paragraphs: [
          "To interpret photomicrographs or slides, identify chromosome appearance first: diffuse chromatin suggests interphase; condensed chromosomes indicate mitosis. Then use arrangement and separation patterns to assign stage.",
          "Metaphase is identified by chromosomes at one equatorial plane. Anaphase is identified by two separating groups moving to opposite poles, often V-shaped chromosome movement in some cells.",
          "Telophase is identified by two chromosome groups at poles with re-forming nuclei and often visible onset of cytokinesis. In plant cells, cell plate formation is a key visual clue; in animal cells, a cleavage furrow is the clue.",
          "Exam responses should use evidence language: for example, 'chromosomes aligned at equator' rather than only naming a stage with no supporting feature.",
        ],
      },
      {
        id: "mitotic-cycle-context",
        title: "Mitosis in the wider mitotic cell cycle context",
        paragraphs: [
          "Image interpretation questions may include interphase cells alongside mitotic stages. Interphase cells usually show intact nuclear envelopes and no visibly separate chromosomes because DNA is not highly condensed.",
          "Mitosis and cytokinesis are continuous processes in real cells, so some images represent transitions. If uncertain between two stages, justify the best match with observable features of chromosomes, spindle relation and nuclear envelope status.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Most errors in this subtopic come from stage misidentification and from naming a stage without describing diagnostic features. Examiners award strongly for feature-based interpretation.",
      items: [
        "Confusing prophase with interphase because both can show a nucleus. In prophase chromosomes are condensed and individually visible; in interphase they are not.",
        "Calling any central chromosome arrangement 'anaphase'. Equatorial alignment indicates metaphase; separation into two groups indicates anaphase.",
        "Using 'chromosomes split in metaphase'. Centromere division and sister chromatid separation are anaphase events.",
        "Ignoring differences in cytokinesis between plant and animal cells (cell plate versus cleavage furrow).",
        "Describing spindle fibres as permanent structures rather than dynamic microtubules assembled for division.",
        "Giving a stage name without observational support from the image (for example chromosome position, envelope status, or cytokinesis evidence).",
      ],
    },
    workedExamples: [
      {
        id: "t5-2-ex1",
        title: "Classifying stages from observed features",
        problem: [
          "A slide shows four cells: Cell A has condensed chromosomes with no equatorial alignment; Cell B has chromosomes arranged across the equator; Cell C has two groups of chromatids moving apart; Cell D has two groups at opposite poles with new nuclei forming. Identify the stage of mitosis in each cell.",
        ],
        solution: [
          "Cell A is prophase: chromosomes are condensed but not yet aligned at the equator.",
          "Cell B is metaphase: chromosomes are aligned at the equatorial plane with spindle attachment.",
          "Cell C is anaphase: sister chromatids have separated and are moving to opposite poles.",
          "Cell D is telophase: chromosome groups are at poles and nuclear envelopes are reforming around each set.",
        ],
      },
      {
        id: "t5-2-ex2",
        title: "Explaining equal chromosome distribution",
        problem: [
          "Explain how spindle behaviour during metaphase and anaphase ensures that daughter nuclei are genetically identical.",
        ],
        solution: [
          "At metaphase, each replicated chromosome attaches via its centromere region to spindle fibres from opposite poles. This bi-orientation sets up equal partitioning.",
          "At anaphase, centromeres divide and spindle fibres shorten, pulling sister chromatids to opposite poles. Because sister chromatids are identical copies made in S phase, each pole receives one copy of each original chromosome.",
          "Thus, after telophase, each daughter nucleus has the same chromosome number and genetic information as the parent nucleus (assuming no segregation errors).",
        ],
      },
      {
        id: "t5-2-ex3",
        title: "Distinguishing plant and animal cytokinesis in images",
        problem: [
          "Two telophase cells are shown. Cell X has a constricted furrow at the equator. Cell Y has a flat partition growing from centre to edges. Identify which is animal and which is plant, with reasons.",
        ],
        solution: [
          "Cell X is animal because cytokinesis is by cleavage furrow: contraction at the membrane pinches one cell into two.",
          "Cell Y is plant because cytokinesis is by cell plate formation: vesicles fuse at the centre and expand outward to form new wall and membranes.",
          "The rigid cell wall in plant cells explains why furrow cleavage is not the normal mechanism.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t5-2-st1",
        question:
          "Describe chromosome behaviour during prophase, metaphase, anaphase and telophase in mitosis.",
        modelAnswer: [
          "Prophase: chromosomes condense and become visible as sister chromatids joined at centromeres. Metaphase: chromosomes align at the equator with spindle attachment. Anaphase: centromeres divide and sister chromatids separate to opposite poles. Telophase: chromosomes arrive at poles, decondense, and new nuclear envelopes form.",
        ],
      },
      {
        id: "t5-2-st2",
        question:
          "State the associated behaviour of the nuclear envelope and spindle through mitosis.",
        modelAnswer: [
          "The nuclear envelope breaks down early in mitosis and reforms in telophase. The spindle forms, attaches to chromosomes at centromeres, aligns them at metaphase, and then separates chromatids to opposite poles during anaphase.",
        ],
      },
      {
        id: "t5-2-st3",
        question:
          "Compare cytokinesis in plant and animal cells after mitosis.",
        modelAnswer: [
          "Animal cells divide by cleavage furrow formation as the membrane is pinched inward. Plant cells form a cell plate at the equator that expands outward and develops into new plasma membranes and a new cell wall between daughter cells.",
        ],
      },
      {
        id: "t5-2-st4",
        question:
          "A micrograph shows chromosomes aligned along one central plane with no chromatid separation. Identify the stage and justify your answer.",
        modelAnswer: [
          "This is metaphase. The key feature is chromosomes aligned at the equator without separation to poles, which distinguishes it from anaphase.",
        ],
      },
      {
        id: "t5-2-st5",
        question:
          "A cell image shows two chromosome clusters at opposite poles and a visible cell plate. Identify the stage of mitosis and the cell type.",
        modelAnswer: [
          "The stage is telophase (late telophase/early cytokinesis), because chromosome sets are at opposite poles with nuclei reforming. The cell is a plant cell, indicated by cell plate formation rather than a cleavage furrow.",
        ],
      },
    ],
  },
};
