import type { NoteDraft } from "./types";

/** Full teaching notes for 9700 Topic 19 — subtopics 19.1-19.3 (see lib/notes/AUTHORING.md). */
export const BIOLOGY_TOPIC19_DRAFTS: Record<string, NoteDraft> = {
  "t19-1": {
    noteId: "t19-1",
    syllabusNotes: [
      {
        id: "core-terms-and-workflow",
        title: "Recombinant DNA and the overall logic of genetic engineering",
        paragraphs: [
          "Recombinant DNA is DNA formed by joining genetic material from two or more different sources, for example a donor gene joined to a plasmid vector. The joined DNA molecule is then introduced into a host cell so the new genetic information can be replicated and, if appropriate control sequences are present, expressed.",
          "Genetic engineering is deliberate manipulation of genetic material to change a specific characteristic of an organism. In many exam contexts, this means transferring a chosen gene into a host organism and ensuring that host cells produce the gene product.",
          "A complete workflow is: identify target gene, obtain a DNA copy of the gene, prepare vector and insert DNA, ligate to form recombinant DNA, transfer into host cells, select transformed cells, then confirm expression. This logic should be clear in extended responses because marks are often distributed across each step.",
        ],
      },
      {
        id: "obtaining-gene-sequence",
        title: "How genes for transfer can be obtained",
        paragraphs: [
          "A gene can be extracted directly from donor DNA using restriction enzymes if suitable flanking recognition sites are available. This route keeps introns if the donor is eukaryotic genomic DNA, which can be a problem when expressing the gene in prokaryotes.",
          "A gene can be synthesised from donor mRNA by first using reverse transcriptase to make complementary DNA (cDNA), then using DNA polymerase to generate double-stranded DNA. Because mature mRNA has had introns removed, cDNA contains only coding exons and is often suitable for expression in bacteria.",
          "A gene can also be synthesised chemically from nucleotides when the sequence is known. This allows codon optimisation, addition of chosen restriction sites, and custom promoter or tag sequences before cloning.",
        ],
      },
      {
        id: "enzymes-vectors-and-expression-control",
        title: "Roles of enzymes, plasmids, promoters and marker genes",
        paragraphs: [
          "Restriction endonucleases cut DNA at specific recognition sequences, generating fragments with compatible ends. DNA ligase then forms phosphodiester bonds to join insert DNA to vector DNA, producing a stable recombinant molecule.",
          "Plasmids act as vectors: they enter host cells relatively easily, replicate independently, and can carry selectable markers. In many practical designs, both plasmid and insert are cut with the same restriction enzyme so ends are complementary and ligation is efficient.",
          "DNA polymerase is used to synthesise DNA strands, for example in creating double-stranded cDNA or in PCR amplification before cloning. Reverse transcriptase is used when starting from mRNA rather than genomic DNA.",
          "A promoter may need to be transferred with the gene if the host cannot recognise the donor organism's native control sequence. Without a suitable promoter, transcription will be very low or absent even if the gene is present.",
          "Marker genes coding for fluorescent products help identify transformed cells and confirm expression. Fluorescence indicates not only uptake of recombinant DNA but, when coupled to expression design, that transcription and translation are occurring.",
        ],
      },
      {
        id: "gene-editing-pcr-electrophoresis-microarrays",
        title: "Gene editing, PCR, gel electrophoresis, microarrays and databases",
        paragraphs: [
          "Gene editing is genetic engineering that inserts, deletes or replaces DNA at specific genome sites rather than only adding extra DNA randomly. This precision allows targeted correction of alleles or controlled disruption of genes to test function.",
          "PCR clones and amplifies selected DNA by repeated cycles: denaturation separates strands, primers anneal to target boundaries, and Taq polymerase extends from primers to synthesise new strands. Repeating cycles causes exponential increase in target fragment number.",
          "Taq polymerase is essential because it remains active after high temperatures used during denaturation. Without a thermostable polymerase, new enzyme would be needed after each cycle and PCR would be impractical.",
          "Gel electrophoresis separates DNA fragments by size because DNA is negatively charged and moves toward the positive electrode through a gel matrix. Smaller fragments travel farther than larger fragments in a fixed run time, allowing size comparison against a marker ladder.",
          "Microarrays contain many immobilised probe sequences and are used both for genome analysis and for detecting mRNA profiles in gene-expression studies. Hybridisation patterns show which sequences are present and, for expression arrays, which genes are actively transcribed in samples.",
          "Sequence and structure databases provide rapid access to nucleotide sequences, protein sequences and protein structures. Their benefits include faster primer design, gene comparison across species, mutation identification, and prediction of protein function from sequence or structural homology.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Topic 19.1 answers score best when each biotechnology tool is linked to its specific role in a coherent workflow rather than listed as isolated definitions.",
      items: [
        "Defining recombinant DNA vaguely as 'changed DNA' without stating that DNA from different sources has been joined into one molecule.",
        "Confusing reverse transcriptase and DNA polymerase roles; reverse transcriptase makes DNA from RNA, while DNA polymerase extends DNA strands from DNA templates or primers.",
        "Explaining PCR without primers, cycle stages, or the reason Taq polymerase is used at high temperature.",
        "Stating electrophoresis separates DNA by charge only; in standard agarose gels fragments are separated mainly by size as all fragments are similarly negatively charged per unit length.",
        "Claiming presence of a gene guarantees expression, while ignoring the need for compatible promoter and regulatory context in the host.",
      ],
    },
    workedExamples: [
      {
        id: "t19-1-ex1",
        title: "Designing a recombinant-DNA cloning plan from eukaryotic tissue",
        problem: [
          "You need bacteria to produce a human protein. Outline a valid sequence of steps from donor tissue to transformed bacterial colonies, and justify why mRNA may be used instead of genomic DNA.",
        ],
        solution: [
          "First isolate mRNA for the target gene from donor cells where the gene is expressed. Use reverse transcriptase to synthesise cDNA, then DNA polymerase to produce double-stranded DNA.",
          "Cut cDNA and plasmid vector with compatible restriction endonucleases, then use DNA ligase to join insert and plasmid, generating recombinant DNA. Include a promoter that bacteria can recognise if required.",
          "Introduce plasmids into bacteria (transformation), grow on selective medium, and screen transformed colonies using a marker such as fluorescence.",
          "mRNA-derived cDNA is preferred because introns have been removed in mature eukaryotic mRNA; bacteria cannot splice introns efficiently, so genomic DNA often fails to produce the correct protein.",
        ],
      },
      {
        id: "t19-1-ex2",
        title: "Explaining PCR and interpreting fragment separation",
        problem: [
          "A lab has a tiny DNA sample and needs millions of copies of a 450 bp region. Explain how PCR produces this amplification and how gel electrophoresis confirms the expected fragment size.",
        ],
        solution: [
          "PCR cycles through denaturation (separate DNA strands), primer annealing (primers bind flanking target), and extension (Taq polymerase synthesises new strands from primers).",
          "After each cycle, products become templates for later cycles, causing near-exponential amplification of the target sequence.",
          "Taq polymerase is thermostable, so it remains functional after repeated heating during denaturation.",
          "To verify size, run PCR products on agarose gel with a DNA ladder. DNA migrates toward the positive electrode; smaller fragments move farther. A dominant band aligning with the 450 bp ladder position supports correct amplification.",
        ],
      },
      {
        id: "t19-1-ex3",
        title: "Using microarrays to compare gene expression between samples",
        problem: [
          "Researchers compare healthy and diseased tissue to identify genes with altered expression. Explain how a microarray can be used and what the output means.",
        ],
        solution: [
          "Extract mRNA from each tissue sample and convert it to labelled cDNA. Apply labelled material to a microarray containing many fixed DNA probes representing different genes.",
          "cDNA hybridises to complementary probes. Signal intensity at each probe location reflects relative abundance of that transcript in the sample.",
          "By comparing signal patterns between healthy and diseased samples, researchers identify genes upregulated or downregulated in disease.",
          "Follow-up use of sequence and protein databases helps interpret candidate genes, predicted proteins and possible structural/functional consequences.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t19-1-st1",
        question:
          "Define recombinant DNA and explain what makes genetic engineering a deliberate process.",
        modelAnswer: [
          "Recombinant DNA is a DNA molecule created by joining DNA from different sources, such as a donor gene joined to a plasmid vector.",
          "Genetic engineering is deliberate because specific genes and control sequences are selected and manipulated to produce a targeted characteristic or gene product, rather than relying on random breeding variation.",
        ],
      },
      {
        id: "t19-1-st2",
        question:
          "State three ways a gene for transfer can be obtained and one advantage or key feature of each.",
        modelAnswer: [
          "Extract from donor genomic DNA using restriction enzymes; useful when flanking sites are available.",
          "Synthesis from donor mRNA using reverse transcriptase to make cDNA; introns are removed so coding sequence is suitable for bacterial expression.",
          "Chemical synthesis from nucleotides when sequence is known; allows custom design such as codon optimisation or added restriction sites.",
        ],
      },
      {
        id: "t19-1-st3",
        question:
          "Explain roles of restriction endonucleases, DNA ligase, plasmids, promoter sequences and fluorescent marker genes in gene transfer.",
        modelAnswer: [
          "Restriction endonucleases cut vector and insert DNA at specific sites to create compatible ends.",
          "DNA ligase seals sugar-phosphate backbones to form stable recombinant DNA.",
          "Plasmids carry insert DNA into host cells and replicate there as vectors.",
          "A compatible promoter is needed for host RNA polymerase to transcribe the transferred gene.",
          "Fluorescent marker genes allow transformed or expressing cells to be identified visually.",
        ],
      },
      {
        id: "t19-1-st4",
        question:
          "Describe PCR steps in order and explain why Taq polymerase is specifically used.",
        modelAnswer: [
          "PCR repeats denaturation, primer annealing and extension cycles to amplify a target DNA region.",
          "Denaturation separates strands at high temperature; primers bind at lower temperature; Taq polymerase extends from primers to copy the target.",
          "Taq polymerase is used because it is thermostable and remains active after repeated heating steps.",
        ],
      },
      {
        id: "t19-1-st5",
        question:
          "How do gel electrophoresis, microarrays and sequence databases each contribute to modern genetic technology?",
        modelAnswer: [
          "Gel electrophoresis separates DNA fragments by size, allowing verification of fragment lengths and PCR products.",
          "Microarrays analyse many sequences simultaneously and can detect mRNA expression patterns across thousands of genes.",
          "Sequence and structure databases provide reference information for nucleotide/protein comparison, mutation analysis, primer design and protein-function prediction.",
        ],
      },
    ],
  },

  "t19-2": {
    noteId: "t19-2",
    syllabusNotes: [
      {
        id: "recombinant-proteins-in-medicine",
        title: "Why recombinant human proteins transformed treatment",
        paragraphs: [
          "Recombinant human proteins are therapeutic proteins produced using genetically engineered cells. They provide high purity and consistent composition, and they can be manufactured at scale with controlled quality.",
          "Recombinant insulin is used to treat diabetes and avoids dependence on older animal-sourced preparations. It reduces variability of supply and can reduce immunological mismatch compared with some non-human sources.",
          "Recombinant factor VIII is used in haemophilia A treatment and allows reliable replacement therapy with lower risk of pathogen transmission than historical plasma-derived sources.",
          "Adenosine deaminase (ADA) replacement can support treatment of ADA-related severe combined immunodeficiency. Recombinant production enables repeated dosing and controlled medical-grade preparation.",
        ],
      },
      {
        id: "genetic-screening-advantages",
        title: "Advantages of genetic screening in clinical decision-making",
        paragraphs: [
          "Genetic screening analyses DNA to identify variants associated with disease risk or disease presence. For BRCA1 and BRCA2, screening can identify inherited increased risk of breast and ovarian cancer and guide intensified surveillance or preventive strategies.",
          "For Huntington's disease, screening can detect the pathogenic allele before symptoms appear, allowing informed life planning and early access to counselling and support services even though curative treatment is limited.",
          "For cystic fibrosis, screening can support diagnosis, carrier detection and reproductive counselling. In newborn and family contexts, earlier knowledge can improve monitoring and management decisions.",
          "Across conditions, advantages include earlier risk stratification, informed patient choice, family planning support, and more targeted prevention or monitoring. Benefits are greatest when combined with high-quality counselling and consent processes.",
        ],
      },
      {
        id: "gene-therapy-principles-and-examples",
        title: "How gene therapy treats inherited disease",
        paragraphs: [
          "Gene therapy aims to treat disease by introducing, replacing, or editing genetic material so cells produce a functional product. Approaches can be ex vivo (cells modified outside the body then returned) or in vivo (vector delivered directly).",
          "In severe combined immunodeficiency (SCID), therapy can introduce a functional copy of the defective gene into relevant immune cell lineages, restoring enzyme function and improving immune competence.",
          "In inherited eye diseases, vector-mediated delivery of a working gene to retinal cells can improve or stabilise visual function when pathology is caused by a known single-gene defect in targetable tissue.",
          "At this syllabus level, the key concept is therapeutic restoration of gene function in affected cells, not memorising all vector technical details.",
        ],
      },
      {
        id: "social-and-ethical-considerations",
        title: "Social and ethical considerations in screening and gene therapy",
        paragraphs: [
          "Genetic screening raises issues of privacy, confidentiality and potential discrimination in employment or insurance if genetic risk data are misused. Consent must be informed and voluntary, and patients must understand what a result can and cannot predict.",
          "Psychological impacts can be substantial. A high-risk result may cause anxiety, altered self-image or family tension, while uncertain results can create prolonged ambiguity.",
          "Family implications are unique because one person's result can reveal information about biological relatives who may not wish to know. Programmes therefore require careful counselling and respectful communication.",
          "Gene therapy raises questions of equitable access, cost, long-term safety, and boundaries between therapy and enhancement. Many ethical frameworks distinguish treatment of serious disease from non-medical trait modification.",
          "Social acceptance depends on transparent regulation, strong safety monitoring, fair access, and clear distinction between evidence-based medical benefit and inappropriate applications.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "High-grade answers in 19.2 integrate scientific benefit with patient-level, family-level and society-level consequences, rather than giving one-sided claims.",
      items: [
        "Listing recombinant insulin, factor VIII or ADA without explaining why recombinant production is advantageous in safety, purity, consistency or supply.",
        "Confusing genetic screening with diagnosis in every case; many screening programmes estimate risk or identify susceptibility rather than confirm active disease.",
        "Describing gene therapy as changing all body cells permanently; most treatments target specific cells or tissues and outcomes can vary over time.",
        "Giving only benefits or only risks in ethics questions, instead of balanced discussion including consent, privacy, equity and psychosocial impact.",
        "Treating BRCA, Huntington's and cystic fibrosis as interchangeable examples without condition-specific relevance to surveillance, prediction, or reproductive counselling.",
      ],
    },
    workedExamples: [
      {
        id: "t19-2-ex1",
        title: "Comparing recombinant human proteins in treatment",
        problem: [
          "A short-answer item asks for advantages of recombinant human proteins using insulin, factor VIII and ADA. Construct a high-scoring response.",
        ],
        solution: [
          "Recombinant insulin provides a consistent human-sequence product at large scale, reducing dependence on animal sources and improving reliability of supply.",
          "Recombinant factor VIII reduces dependence on pooled donor plasma and lowers historical risks associated with blood-borne pathogen contamination while providing standardised replacement therapy.",
          "Recombinant ADA provides controlled enzyme replacement for ADA-related immunodeficiency, enabling repeat dosing with defined purity and quality.",
          "Across all three examples, recombinant production improves consistency, quality control and scalable manufacture for clinical use.",
        ],
      },
      {
        id: "t19-2-ex2",
        title: "Using screening information in patient counselling",
        problem: [
          "A patient has a strong family history of breast cancer and asks why BRCA1/BRCA2 screening might help. Explain advantages and limitations clearly.",
        ],
        solution: [
          "Screening may identify inherited variants that significantly increase risk, allowing earlier and more frequent surveillance, consideration of preventive options, and informed lifestyle and reproductive decisions.",
          "Results can also inform risk discussions for relatives because inherited variants may run through families.",
          "However, a positive result indicates increased risk, not certainty of disease, and a negative result does not eliminate all cancer risk. Pre-test and post-test counselling are needed to interpret results and reduce misunderstanding.",
        ],
      },
      {
        id: "t19-2-ex3",
        title: "Balanced ethics discussion for gene therapy",
        problem: [
          "Write a concise discussion of social and ethical considerations for offering gene therapy to children with a severe inherited eye disease.",
        ],
        solution: [
          "Potential benefits include preserving vision, improving quality of life, and reducing long-term care burden for patients and families.",
          "Ethical concerns include informed consent for minors, uncertain long-term effects, high treatment costs, and unequal access across healthcare systems.",
          "Social considerations include fairness in allocation of resources and the need for transparent regulation to maintain trust.",
          "A balanced judgement supports use when evidence of safety and efficacy is strong, consent processes are robust, and access policies aim for equity.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t19-2-st1",
        question:
          "Why are recombinant human proteins often preferred in treatment, and how do insulin, factor VIII and ADA illustrate this?",
        modelAnswer: [
          "They are produced with controlled purity and consistency at large scale, improving reliability and quality assurance.",
          "Recombinant insulin provides dependable human-sequence hormone supply for diabetes treatment.",
          "Recombinant factor VIII supports standardised haemophilia A therapy with reduced reliance on donor plasma products.",
          "Recombinant ADA enables enzyme replacement therapy for ADA-related immunodeficiency under controlled pharmaceutical production.",
        ],
      },
      {
        id: "t19-2-st2",
        question:
          "Outline advantages of genetic screening with reference to BRCA1/BRCA2, Huntington's disease and cystic fibrosis.",
        modelAnswer: [
          "BRCA1/BRCA2 screening can identify inherited high-risk individuals and guide earlier surveillance or preventive decisions.",
          "Huntington's screening can provide predictive information before symptom onset, supporting planning and counselling.",
          "Cystic fibrosis screening can aid diagnosis, carrier detection and reproductive counselling for families.",
        ],
      },
      {
        id: "t19-2-st3",
        question:
          "Explain, in principle, how gene therapy can treat SCID and inherited eye disease.",
        modelAnswer: [
          "Gene therapy introduces or restores a functional gene in target cells so a missing or defective protein can be produced.",
          "In SCID, restoring function in relevant immune cell lineages can improve immune competence.",
          "In inherited eye disease, delivering a working gene to affected retinal cells can improve or stabilise visual function.",
        ],
      },
      {
        id: "t19-2-st4",
        question:
          "Give four social or ethical considerations relevant to genetic screening in medicine.",
        modelAnswer: [
          "Informed consent is essential because results can have major personal and family consequences.",
          "Privacy and confidentiality must be protected to prevent misuse of genetic information.",
          "Psychological impact, including anxiety or uncertainty, should be anticipated and supported through counselling.",
          "Potential discrimination and inequitable access to follow-up care are societal concerns requiring policy safeguards.",
        ],
      },
      {
        id: "t19-2-st5",
        question:
          "Discuss one reason to support and one reason to question wider use of gene therapy.",
        modelAnswer: [
          "Support: it can address root genetic causes of severe disease and produce substantial long-term health benefit.",
          "Concern: high cost, uncertain long-term outcomes, and unequal access may create ethical and social inequities if regulation and funding are inadequate.",
        ],
      },
    ],
  },

  "t19-3": {
    noteId: "t19-3",
    syllabusNotes: [
      {
        id: "food-demand-and-gm-rationale",
        title: "Why GM technology is considered in global food systems",
        paragraphs: [
          "Global food demand rises with population growth, changing diets and environmental stress on farming. Genetic engineering is one strategy to improve productivity, resilience or quality in crops and farmed animals.",
          "In syllabus terms, genetic engineering can contribute by improving yield stability, reducing losses to pests, and supporting management systems that maintain production under pressure.",
          "Evaluation must include both biological effectiveness and wider social implications because food systems are economic, cultural and political as well as scientific.",
        ],
      },
      {
        id: "gm-salmon-example",
        title: "Example: GM salmon and productivity in aquaculture",
        paragraphs: [
          "GM salmon are engineered so growth-related gene expression leads to faster growth to market size under farm conditions. The intended benefit is increased production efficiency: less time to harvest and potentially improved output per production cycle.",
          "Potential system-level benefits include increased supply and possible reduction of pressure on wild fish stocks if aquaculture productivity improves.",
          "Risk discussions include escape into natural ecosystems, potential effects on wild populations, and the need for containment and regulation. Scientific benefit therefore depends on responsible management, not gene modification alone.",
        ],
      },
      {
        id: "herbicide-resistant-soybean-example",
        title: "Example: herbicide-resistant soybean and weed control",
        paragraphs: [
          "Herbicide-resistant soybean carries a gene that allows the crop to tolerate a specific herbicide that would otherwise damage it. Farmers can spray to remove competing weeds while leaving soybean plants alive.",
          "Benefits can include simplified weed management, reduced early weed competition and improved yield consistency where weeds are a major limiting factor.",
          "However, repeated use of one herbicide strategy can select for herbicide-resistant weed populations. Long-term effectiveness therefore depends on integrated weed management, not reliance on a single chemical approach.",
        ],
      },
      {
        id: "insect-resistant-cotton-example",
        title: "Example: insect-resistant cotton and pest pressure",
        paragraphs: [
          "Insect-resistant cotton is engineered to produce an insecticidal protein that targets specific pest insects. Crop damage is reduced, and pesticide spraying for target pests may decrease.",
          "Benefits may include improved yield, reduced loss quality, and lower exposure of workers and non-target organisms to some broad-spectrum insecticide applications.",
          "A central limitation is selection pressure on pest populations; resistant insects may evolve if management is poor. Refuge strategies and monitoring are needed to slow resistance development.",
        ],
      },
      {
        id: "ethical-and-social-implications",
        title: "Ethical and social implications of GMO use in food production",
        paragraphs: [
          "Ethical and social debates include food safety confidence, environmental stewardship, farmer autonomy, intellectual property rights and market control by large biotechnology companies.",
          "Some communities value potential gains in food security and reduced crop losses, while others are concerned about biodiversity effects, dependence on purchased seeds, and unequal distribution of economic benefit.",
          "Consumer rights issues include transparent labelling and informed choice. Public trust depends on robust regulation, independent risk assessment, and open communication of evidence and uncertainty.",
          "Strong exam discussion balances possible benefits to productivity and food supply against ecological, economic and social concerns over long-term sustainability and fairness.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "In 19.3, marks are gained by linking each named GMO example to a specific agricultural problem and then evaluating consequences with balanced reasoning.",
      items: [
        "Describing GM crops generically without using syllabus examples (GM salmon, herbicide-resistant soybean, insect-resistant cotton) and their distinct mechanisms.",
        "Assuming all GMO effects are positive and ignoring resistance evolution in weeds or insect pests under strong selection pressure.",
        "Treating social implications as only 'people may not like GM food' without considering access, cost, farmer dependence or regulation.",
        "Confusing herbicide resistance in crops with insect resistance traits; they solve different problems and involve different target organisms.",
        "Making absolute safety or danger claims without acknowledging evidence-based regulation, context and ongoing monitoring requirements.",
      ],
    },
    workedExamples: [
      {
        id: "t19-3-ex1",
        title: "Comparing three GMO examples against food-demand challenges",
        problem: [
          "Explain how GM salmon, herbicide-resistant soybean and insect-resistant cotton each address a different production constraint.",
        ],
        solution: [
          "GM salmon addresses growth-rate and production-cycle constraints in aquaculture by reaching market size faster, which can increase throughput.",
          "Herbicide-resistant soybean addresses weed competition by allowing selective herbicide use that removes weeds while preserving the crop.",
          "Insect-resistant cotton addresses insect pest damage by expressing a protein that reduces losses from target pests.",
          "Together they show that genetic engineering can target distinct bottlenecks in food production: animal growth, weed pressure and insect predation.",
        ],
      },
      {
        id: "t19-3-ex2",
        title: "Evaluating a herbicide-resistant soybean rollout plan",
        problem: [
          "A region plans large-scale adoption of herbicide-resistant soybean with a single herbicide programme. Predict one likely long-term problem and propose a biologically informed mitigation strategy.",
        ],
        solution: [
          "Likely long-term problem: repeated use of one herbicide exerts strong selection pressure for herbicide-resistant weed genotypes, reducing control effectiveness over time.",
          "Mitigation strategy: integrated weed management using herbicide rotation, non-chemical control methods and field monitoring to reduce directional selection for one resistance mechanism.",
          "This maintains weed-control efficacy while preserving benefits of the GM trait in the medium term.",
        ],
      },
      {
        id: "t19-3-ex3",
        title: "Balanced social-ethics response for GMO food production",
        problem: [
          "Write a balanced conclusion on whether a country should expand GMO-based food production.",
        ],
        solution: [
          "A justified expansion can be supported where evidence shows improved productivity, reduced losses and contribution to food security.",
          "However, expansion should include safeguards: environmental risk assessment, resistance-management plans, transparent labelling and policies that protect smallholder access and seed sovereignty.",
          "Ethically, adoption is strongest when benefits and risks are shared fairly and governance is transparent, science-led and publicly accountable.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t19-3-st1",
        question:
          "How can genetic engineering contribute to meeting global food demand according to Topic 19.3?",
        modelAnswer: [
          "It can improve quality and productivity in crops and farmed animals by targeting key constraints such as growth rate, weed competition and insect pest damage.",
          "Potential impact is improved yield stability and higher output where conventional management alone is insufficient.",
        ],
      },
      {
        id: "t19-3-st2",
        question:
          "Explain how GM salmon is intended to improve food production, and state one ecological concern.",
        modelAnswer: [
          "GM salmon are engineered for faster growth to market size, which can increase aquaculture production efficiency and supply.",
          "One ecological concern is potential escape and interaction with wild populations, so containment and regulation are essential.",
        ],
      },
      {
        id: "t19-3-st3",
        question:
          "Describe the principle of herbicide-resistant soybean and one limitation of relying on it alone.",
        modelAnswer: [
          "The soybean is engineered to tolerate a specific herbicide, allowing weed control while the crop survives.",
          "If used as a single strategy repeatedly, it can select for herbicide-resistant weeds, so integrated weed management is needed.",
        ],
      },
      {
        id: "t19-3-st4",
        question:
          "What is insect-resistant cotton, and why are refuge or resistance-management strategies needed?",
        modelAnswer: [
          "Insect-resistant cotton is engineered to produce a protein toxic to target insect pests, reducing pest damage.",
          "Management strategies such as refuges are needed to reduce selection pressure and slow evolution of resistant pest populations.",
        ],
      },
      {
        id: "t19-3-st5",
        question:
          "Give two potential benefits and two social or ethical concerns of using GMOs in food production.",
        modelAnswer: [
          "Potential benefits include increased productivity/food security and reduced losses from weeds or insect pests.",
          "Potential concerns include environmental impacts (for example resistance evolution or biodiversity effects) and social issues such as farmer dependence on proprietary seeds, inequitable access, and need for transparent labelling.",
        ],
      },
    ],
  },
};
