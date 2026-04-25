import type { NoteDraft } from "./types";

/** Full teaching notes for 9700 Topic 11 — subtopics 11.1-11.2 (see lib/notes/AUTHORING.md). */
export const BIOLOGY_TOPIC11_DRAFTS: Record<string, NoteDraft> = {
  "t11-1": {
    noteId: "t11-1",
    syllabusNotes: [
      {
        id: "innate-defence-and-phagocytes",
        title: "Innate defence and the role of phagocytes",
        paragraphs: [
          "The immune system protects the body from pathogens and abnormal cells using coordinated cellular and molecular responses. A first line of internal defence is innate immunity, which responds rapidly and non-specifically.",
          "Phagocytes (such as neutrophils and macrophages) recognise non-self material by receptors that bind common pathogen-associated molecules or by binding to pathogen surfaces coated by immune proteins.",
          "After recognition, the phagocyte surrounds and engulfs the pathogen by endocytosis to form a phagosome. Lysosomes fuse with the phagosome and release hydrolytic enzymes, digesting the pathogen. Useful fragments can be displayed on the cell surface as antigens, linking innate and adaptive responses.",
        ],
      },
      {
        id: "antigens-and-lymphocyte-origins",
        title: "Antigens, B lymphocytes and T lymphocytes",
        paragraphs: [
          "An antigen is any molecule, usually a protein or glycoprotein, that can be specifically recognised by components of the immune system and can trigger an immune response.",
          "Lymphocytes are produced from stem cells in bone marrow. B lymphocytes mature in bone marrow and are central to antibody-mediated (humoral) immunity. T lymphocytes mature in the thymus and are central to cell-mediated immunity.",
          "Each lymphocyte has a receptor with one antigen specificity. This creates a diverse repertoire so the body can respond to many different antigens.",
        ],
      },
      {
        id: "cell-signalling-cytokines",
        title: "Cell signalling in immune responses",
        paragraphs: [
          "Immune responses depend on signalling molecules, especially cytokines. Macrophages and helper T cells release cytokines that activate, recruit and coordinate other immune cells.",
          "In a typical sequence, antigen presentation by an antigen-presenting cell activates helper T cells. Activated helper T cells then release cytokines that stimulate B-cell clonal expansion and support activation of cytotoxic T cells and macrophages.",
          "The key idea is amplification: antigen recognition by a small number of cells leads to cytokine-mediated recruitment and activation of many additional cells.",
        ],
      },
      {
        id: "humoral-immunity-b-cells",
        title: "Humoral immunity: B-cell clonal selection and differentiation",
        paragraphs: [
          "Humoral immunity is mediated by B lymphocytes and antibodies in body fluids. When a B cell with a complementary receptor meets its antigen and receives helper-T-cell cytokine support, it is selected to divide rapidly by mitosis.",
          "This clonal expansion produces plasma cells and memory B cells. Plasma cells secrete large amounts of specific antibody; memory B cells persist long-term and respond rapidly on re-exposure to the same antigen.",
          "Because antibodies are soluble proteins that circulate in plasma and tissue fluid, humoral immunity is especially effective against extracellular pathogens and toxins.",
        ],
      },
      {
        id: "cell-mediated-immunity-t-cells",
        title: "Cell-mediated immunity: helper and cytotoxic T-cell functions",
        paragraphs: [
          "Cell-mediated immunity depends on T lymphocytes acting on infected or abnormal cells rather than secreting antibodies directly. Helper T cells coordinate responses mainly through cytokines.",
          "Cytotoxic T cells recognise infected or abnormal body cells displaying specific non-self antigenic markers and induce their death, limiting pathogen replication inside host cells.",
          "Memory T cells form during a primary response and persist, enabling faster and stronger secondary cell-mediated responses.",
        ],
      },
      {
        id: "memory-cells-and-lymphoid-organs",
        title: "Immunological memory, spleen and thymus",
        paragraphs: [
          "Immunological memory is the basis of long-term protection. Memory B and memory T cells survive after the primary response and react rapidly during a second exposure, producing a faster, larger response that often prevents symptomatic disease.",
          "The thymus is a lymphoid organ where T lymphocytes mature and are selected. This process helps generate functional T cells while reducing strongly self-reactive clones.",
          "The spleen filters blood, removes old red blood cells and pathogens, and provides a site where lymphocytes and antigen-presenting cells interact to initiate immune responses to blood-borne antigens.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "High-level answers in this subtopic explain sequence and cell roles clearly, rather than listing immune terms without mechanism.",
      items: [
        "Confusing phagocytosis with antibody action; phagocytes engulf and digest pathogens, while antibodies are soluble proteins made by plasma cells.",
        "Stating that B cells mature in thymus or that T cells mature in bone marrow; B cells mature in bone marrow and T cells in thymus.",
        "Describing humoral immunity and cell-mediated immunity as identical, without distinguishing antibody secretion from T-cell-directed killing and coordination.",
        "Using the word cytokine without stating function; cytokines coordinate, activate and amplify immune responses between cells.",
        "Omitting memory cells when explaining long-term immunity and secondary responses.",
        "Writing that spleen and thymus have the same role; thymus is mainly T-cell maturation, while spleen filters blood and supports immune activation.",
      ],
    },
    workedExamples: [
      {
        id: "t11-1-ex1",
        title: "Tracing events from pathogen entry to phagocyte action",
        problem: [
          "Describe how a macrophage deals with a bacterial pathogen after it enters tissue, and explain how this can support later adaptive immunity.",
        ],
        solution: [
          "The macrophage recognises non-self molecules on the bacterium and engulfs it by endocytosis, forming a phagosome.",
          "Lysosomes fuse with the phagosome and release hydrolytic enzymes, digesting bacterial components.",
          "Some antigen fragments from the digested bacterium can be displayed on the macrophage surface, allowing interaction with helper T cells.",
          "This links innate and adaptive responses because macrophage processing helps activate antigen-specific lymphocyte responses.",
        ],
      },
      {
        id: "t11-1-ex2",
        title: "Comparing humoral and cell-mediated immunity in a viral infection",
        problem: [
          "A student writes: 'B cells and T cells do the same job because both are lymphocytes.' Correct this statement using a viral infection as context.",
        ],
        solution: [
          "B cells and T cells are both lymphocytes but have different principal functions. B cells produce antibodies (via plasma cells), which are effective against extracellular antigens.",
          "In viral infection, infected host cells often need to be removed by cell-mediated immunity. Cytotoxic T cells recognise infected cells and trigger their death.",
          "Helper T cells support both branches through cytokines, stimulating B-cell clonal expansion and strengthening T-cell responses.",
          "Therefore lymphocyte classes are complementary, not interchangeable.",
        ],
      },
      {
        id: "t11-1-ex3",
        title: "Explaining the secondary response",
        problem: [
          "Two exposures to the same pathogen occur six months apart. Explain why the second response is faster and usually more effective.",
        ],
        solution: [
          "The first exposure generates antigen-specific memory B cells and memory T cells alongside short-lived effector cells.",
          "On second exposure, memory cells are reactivated rapidly and require less time to produce large numbers of effector cells.",
          "Memory B cells quickly generate plasma cells that secrete large amounts of specific antibody, while memory T cells accelerate cell-mediated responses.",
          "The result is a faster, stronger secondary response that can prevent severe symptoms.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t11-1-st1",
        question:
          "Outline the steps of phagocytosis and explain how phagocytes connect innate and adaptive immunity.",
        modelAnswer: [
          "Phagocytes recognise and engulf pathogens to form phagosomes. Lysosomes fuse with phagosomes and release enzymes that digest pathogen material.",
          "Some digested fragments can be displayed as antigens on the phagocyte surface, supporting activation of antigen-specific helper T cells and therefore adaptive immune responses.",
        ],
      },
      {
        id: "t11-1-st2",
        question:
          "Define antigen and compare the origin and maturation sites of B lymphocytes and T lymphocytes.",
        modelAnswer: [
          "An antigen is a molecule that is specifically recognised by the immune system and can trigger an immune response.",
          "Both B and T lymphocytes originate from stem cells in bone marrow. B lymphocytes mature in bone marrow, while T lymphocytes mature in the thymus.",
        ],
      },
      {
        id: "t11-1-st3",
        question:
          "Explain how cytokines coordinate immune responses, naming at least two cell types involved.",
        modelAnswer: [
          "Cytokines are signalling molecules released by immune cells such as macrophages and helper T cells.",
          "They activate and recruit other cells, promote clonal expansion of antigen-specific lymphocytes, and amplify both humoral and cell-mediated responses.",
        ],
      },
      {
        id: "t11-1-st4",
        question:
          "Distinguish between humoral immunity and cell-mediated immunity with reference to the roles of B cells and T cells.",
        modelAnswer: [
          "Humoral immunity is antibody-mediated and depends on B cells differentiating into plasma cells and memory B cells after clonal expansion.",
          "Cell-mediated immunity depends on T cells: helper T cells coordinate responses by cytokine release, and cytotoxic T cells kill infected or abnormal cells.",
        ],
      },
      {
        id: "t11-1-st5",
        question:
          "State one key function of thymus and one key function of spleen, and explain why memory cells are important for long-term immunity.",
        modelAnswer: [
          "Thymus: site of T-lymphocyte maturation and selection. Spleen: filters blood and supports immune responses to blood-borne antigens.",
          "Memory cells persist after a primary response and generate faster, larger secondary responses on re-exposure, providing long-term protection.",
        ],
      },
    ],
  },

  "t11-2": {
    noteId: "t11-2",
    syllabusNotes: [
      {
        id: "antibody-structure-overview",
        title: "Antibody structure and antigen specificity",
        paragraphs: [
          "Antibodies (immunoglobulins) are globular proteins produced by plasma cells. Each antibody molecule has two identical heavy chains and two identical light chains linked by disulfide bonds, forming a Y-shaped structure.",
          "The tips of the Y contain variable regions with antigen-binding sites. Differences in amino acid sequence in these variable regions produce binding specificity, so each antibody binds a particular antigenic shape (epitope).",
          "The stem (constant region) is less variable and interacts with other components of the immune system, linking antigen recognition to effector mechanisms.",
        ],
      },
      {
        id: "antibody-functions",
        title: "How antibody structure supports function",
        paragraphs: [
          "Because antibodies are bivalent, each molecule can bind two antigens, allowing agglutination (clumping) of pathogens and making them easier for phagocytes to remove.",
          "Antibody binding can neutralise toxins or viruses by blocking attachment sites needed for cell entry. This prevents pathogens or toxins from interacting with target cells.",
          "Antibody-coated pathogens are more readily recognised by phagocytes, enhancing phagocytosis. Antibodies can also help activate other immune processes through their constant regions.",
        ],
      },
      {
        id: "hybridoma-method",
        title: "Hybridoma method for monoclonal antibody production",
        paragraphs: [
          "Monoclonal antibodies are identical antibodies produced from one clone of cells, so they bind one specific antigen epitope.",
          "In the hybridoma method, an animal is immunised with a target antigen to stimulate antigen-specific B lymphocytes. B cells are then isolated and fused with myeloma (tumour) cells that can divide indefinitely.",
          "The fused hybrid cells (hybridomas) combine desirable traits: antibody production from B cells and long-term division from myeloma cells. Screening identifies a clone producing the required antibody, and this clone is cultured to produce large quantities of monoclonal antibody.",
        ],
      },
      {
        id: "monoclonal-antibody-applications",
        title: "Principles of monoclonal antibodies in diagnosis and treatment",
        paragraphs: [
          "In diagnosis, monoclonal antibodies can be linked to markers such as enzymes, fluorescent tags or radioactive labels. Binding of the antibody to a specific antigen allows detection of tiny quantities of target molecules in samples.",
          "Examples include pregnancy tests and laboratory immunoassays for hormones, pathogens or tumour markers. Specific binding improves sensitivity and selectivity.",
          "In treatment, monoclonal antibodies can target antigens on diseased cells (for example tumour cells), block cell-signalling pathways, deliver drugs selectively, or modify immune activity in autoimmune disease. The core principle is selective targeting of particular antigens.",
        ],
      },
      {
        id: "immunity-classification",
        title: "Active vs passive and natural vs artificial immunity",
        paragraphs: [
          "Active immunity arises when a person's own immune system is stimulated by antigen and generates antibodies and memory cells. Passive immunity arises when ready-made antibodies are transferred to a person, without producing their own memory cells.",
          "Natural active immunity follows natural infection. Artificial active immunity follows vaccination. Natural passive immunity includes transfer of maternal antibodies (for example across placenta or in colostrum). Artificial passive immunity includes injection of antibodies such as antivenom.",
          "Active immunity usually develops more slowly but is longer lasting because memory cells form. Passive immunity is rapid but temporary because transferred antibodies are gradually broken down.",
        ],
      },
      {
        id: "vaccination-and-programmes",
        title: "Vaccines and vaccination programmes",
        paragraphs: [
          "Vaccines contain antigens (for example weakened pathogens, inactivated pathogens, purified antigen components or antigen-encoding platforms) that stimulate a primary immune response without causing severe disease in healthy recipients.",
          "This primary response generates memory B and T cells, so later exposure to the pathogen produces a faster and stronger secondary response, reducing disease severity and transmission.",
          "Vaccination programmes increase the proportion of immune individuals in a population. As susceptible hosts become less common, transmission chains are interrupted more often, helping control spread and protecting people who cannot be vaccinated.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Top-mark answers connect molecular detail to application, and classify immunity correctly with clear reasoning about memory and duration.",
      items: [
        "Describing monoclonal antibodies as a mixture; monoclonal antibodies are identical molecules from one clone and bind one epitope.",
        "Confusing active and passive immunity by focusing only on antibody presence; the key distinction is whether the person makes their own response and memory cells.",
        "Stating that passive immunity gives long-term protection; passive protection is usually short-lived because no memory cells are formed.",
        "Giving hybridoma steps without mentioning fusion of antigen-specific B cells with myeloma cells and subsequent clone screening.",
        "Explaining vaccines as direct antibody injections; most vaccines provide antigens that stimulate active immunity.",
        "Claiming vaccination programmes only protect vaccinated individuals, without explaining reduced transmission in the wider population.",
      ],
    },
    workedExamples: [
      {
        id: "t11-2-ex1",
        title: "Relating antibody structure to three functions",
        problem: [
          "Explain how antibody molecular structure enables specificity, agglutination and support for phagocytosis.",
        ],
        solution: [
          "Variable regions at the ends of heavy and light chains form antigen-binding sites with complementary shapes, giving specificity for a particular epitope.",
          "Each antibody has two binding sites, so it can cross-link antigens on different particles, causing agglutination.",
          "After binding, the constant region remains exposed and can interact with immune components, helping phagocytes recognise and remove antibody-coated targets.",
        ],
      },
      {
        id: "t11-2-ex2",
        title: "Explaining hybridoma production sequence",
        problem: [
          "Outline a logical sequence for producing a monoclonal antibody against a specific antigen using the hybridoma method.",
        ],
        solution: [
          "Immunise an animal with the target antigen to stimulate B cells producing relevant antibodies.",
          "Isolate B lymphocytes and fuse them with myeloma cells to create hybridoma cells.",
          "Screen hybridoma clones to identify one producing the required antibody specificity.",
          "Culture the selected clone to generate large quantities of a single antibody type (monoclonal antibody).",
        ],
      },
      {
        id: "t11-2-ex3",
        title: "Classifying immunity in clinical scenarios",
        problem: [
          "Classify each case as active/passive and natural/artificial: (i) infant receives maternal antibodies, (ii) person receives tetanus vaccine, (iii) patient receives antivenom antibodies after snake bite.",
        ],
        solution: [
          "(i) Natural passive immunity: antibodies are transferred from mother; infant immune system is not generating that response from antigen exposure.",
          "(ii) Artificial active immunity: vaccine antigens stimulate the person's own immune response and memory-cell formation.",
          "(iii) Artificial passive immunity: injected antibodies provide immediate protection but little long-term memory.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t11-2-st1",
        question:
          "Describe the basic molecular structure of an antibody and explain how this structure produces antigen specificity.",
        modelAnswer: [
          "An antibody has two identical heavy chains and two identical light chains linked by disulfide bonds in a Y shape.",
          "Variable regions at the tips form antigen-binding sites. Their amino acid sequences differ between antibodies, creating complementary binding to specific epitopes and therefore specificity.",
        ],
      },
      {
        id: "t11-2-st2",
        question:
          "Outline the hybridoma method for monoclonal antibody production.",
        modelAnswer: [
          "Immunise an animal with target antigen, then isolate antigen-specific B lymphocytes.",
          "Fuse B cells with myeloma cells to form hybridomas that both divide continuously and secrete antibody.",
          "Screen clones for desired antibody specificity and culture the selected clone to produce monoclonal antibodies.",
        ],
      },
      {
        id: "t11-2-st3",
        question:
          "State the principles of using monoclonal antibodies in diagnosis and in treatment of disease.",
        modelAnswer: [
          "Diagnosis: monoclonal antibodies bind specifically to target antigens and are linked to markers, so detection of marker signal indicates presence or amount of target.",
          "Treatment: monoclonal antibodies selectively bind disease-related antigens, allowing targeted blocking of signalling pathways, targeted delivery of agents, or immune modulation.",
        ],
      },
      {
        id: "t11-2-st4",
        question:
          "Distinguish between active and passive immunity, and between natural and artificial immunity, giving one example of each category.",
        modelAnswer: [
          "Active immunity: own immune system responds to antigen and forms memory (natural active after infection; artificial active after vaccination).",
          "Passive immunity: ready-made antibodies are received, usually without memory formation (natural passive via maternal transfer; artificial passive via antibody injection such as antivenom).",
        ],
      },
      {
        id: "t11-2-st5",
        question:
          "Explain why vaccines provide long-term protection and how vaccination programmes help control infectious disease spread.",
        modelAnswer: [
          "Vaccines provide antigens that stimulate a primary immune response and formation of memory cells.",
          "On later pathogen exposure, memory responses are faster and stronger, reducing disease severity and infectious period.",
          "When many people are vaccinated, fewer susceptible hosts are available, transmission chains are disrupted more often, and spread in the population is reduced.",
        ],
      },
    ],
  },
};
