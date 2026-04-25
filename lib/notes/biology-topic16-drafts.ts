import type { NoteDraft } from "./types";

/** Full teaching notes for 9700 Topic 16 — subtopics 16.1-16.3 (see lib/notes/AUTHORING.md). */
export const BIOLOGY_TOPIC16_DRAFTS: Record<string, NoteDraft> = {
  "t16-1": {
    noteId: "t16-1",
    syllabusNotes: [
      {
        id: "ploidy-and-homologous-pairs",
        title: "Haploid, diploid and homologous chromosome pairs",
        paragraphs: [
          "Diploid (2n) cells contain two sets of chromosomes, one maternal and one paternal. Haploid (n) cells contain one set of chromosomes. In humans, somatic cells are diploid (2n = 46) and gametes are haploid (n = 23).",
          "A homologous pair consists of two chromosomes of the same type: same gene loci in the same order, but not necessarily the same alleles. One homologous chromosome is inherited from each parent.",
          "Because homologous chromosomes carry the same genes at corresponding loci, meiosis can separate alleles into different gametes and create new allele combinations without changing gene identity.",
        ],
      },
      {
        id: "why-reduction-division-is-essential",
        title: "Why meiosis includes reduction division",
        paragraphs: [
          "If gametes were diploid and fertilisation combined two diploid nuclei, chromosome number would double every generation. Reduction division in meiosis prevents this by halving chromosome number before gamete formation.",
          "Meiosis I is the reduction division: homologous chromosomes separate into different daughter cells, reducing ploidy from diploid to haploid. Meiosis II then separates sister chromatids without changing ploidy.",
          "This sequence preserves species chromosome number across generations while enabling reproduction and variation.",
        ],
      },
      {
        id: "stages-of-meiosis-and-cell-structures",
        title: "Chromosome behaviour and cell structures through meiosis",
        paragraphs: [
          "Before meiosis, DNA replication in interphase produces chromosomes consisting of two sister chromatids joined at a centromere. During prophase I, chromosomes condense, homologous chromosomes pair (synapsis), crossing over may occur at chiasmata, the spindle forms, and the nuclear envelope breaks down.",
          "In metaphase I, homologous pairs align at the equator with random orientation. In anaphase I, homologous chromosomes move to opposite poles; sister chromatids remain joined. In telophase I, chromosomes reach poles and cell surface membrane changes lead to cytokinesis, producing two haploid cells.",
          "In prophase II, spindle apparatus reforms in each haploid cell if needed and nuclear envelope breaks down if re-formed. In metaphase II, chromosomes align singly at the equator. In anaphase II, centromeres divide and sister chromatids separate. In telophase II and cytokinesis, nuclei reform and four genetically different haploid cells are produced.",
        ],
      },
      {
        id: "interpreting-micrographs-and-diagrams",
        title: "Interpreting photomicrographs and diagrams of meiosis",
        paragraphs: [
          "To identify stages, focus on chromosome arrangement and what is separating. In metaphase I, homologous pairs are aligned as bivalents. In metaphase II, chromosomes align singly, each still with two chromatids before separation.",
          "A key distinction is anaphase I versus anaphase II: in anaphase I whole homologous chromosomes separate while chromatids remain joined; in anaphase II sister chromatids separate after centromere division.",
          "When answering practical-style questions, describe observed evidence (for example paired chromosomes, centromere behaviour, number of chromosome groups) rather than only naming a stage.",
        ],
      },
      {
        id: "sources-of-genetic-variation-in-sexual-reproduction",
        title: "How meiosis and fertilisation produce genetic variation",
        paragraphs: [
          "Crossing over in prophase I exchanges corresponding DNA segments between non-sister chromatids of homologous chromosomes. This creates recombinant chromatids carrying new allele combinations.",
          "Independent assortment arises because each homologous pair has random orientation at metaphase I. For n chromosome pairs, this gives 2^n possible homologous chromosome combinations before crossing over is even considered. Random orientation of sister chromatids at metaphase II contributes further shuffling of chromatids into gametes.",
          "Fertilisation is also random: any gamete from one parent may fuse with any gamete from the other parent. Random gamete fusion multiplies genetic combinations and therefore generates genetically distinct offspring.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "High-mark meiosis answers are precise about what separates at each stage and explicit about how chromosome behaviour changes ploidy and allele combinations.",
      items: [
        "Defining homologous chromosomes as identical copies; they have the same loci but can carry different alleles.",
        "Calling meiosis II the reduction division. Reduction occurs in meiosis I when homologous chromosomes separate.",
        "Confusing anaphase I and anaphase II by saying chromatids separate in both stages.",
        "Describing crossing over as occurring between sister chromatids rather than non-sister chromatids of homologous chromosomes.",
        "Giving only stage names from micrographs without supporting chromosome evidence from the image.",
        "Explaining variation by crossing over only and omitting independent assortment and random fertilisation.",
      ],
    },
    workedExamples: [
      {
        id: "t16-1-ex1",
        title: "Using chromosome number to justify reduction division",
        problem: [
          "A species has diploid number 2n = 12. Determine chromosome number in gametes and in the zygote after fertilisation, and explain why meiosis must include a reduction division.",
        ],
        solution: [
          "If 2n = 12, then n = 6. Gametes produced by meiosis are haploid and contain 6 chromosomes.",
          "At fertilisation, two haploid gametes fuse, restoring diploid number: 6 + 6 = 12 in the zygote.",
          "Reduction division is essential because without halving chromosome number in gametes, fusion would produce 24 chromosomes and chromosome number would increase each generation.",
        ],
      },
      {
        id: "t16-1-ex2",
        title: "Distinguishing meiosis stages from chromosome behaviour",
        problem: [
          "In one micrograph, paired chromosomes are aligned at the equator. In another, single chromatids are moving to opposite poles. Identify the stages and justify each decision.",
        ],
        solution: [
          "Paired chromosomes aligned at the equator indicate metaphase I because homologous chromosomes are present as bivalents.",
          "Single chromatids moving to opposite poles indicate anaphase II because centromeres have divided and sister chromatids are separating.",
          "The key logic is what unit is separating: homologous chromosomes in meiosis I versus sister chromatids in meiosis II.",
        ],
      },
      {
        id: "t16-1-ex3",
        title: "Quantifying independent assortment and adding random fertilisation",
        problem: [
          "A diploid organism has n = 4. Calculate the number of chromosome combinations possible in one gamete from independent assortment only, then explain how random fertilisation changes potential offspring variation.",
        ],
        solution: [
          "Independent assortment gives 2^n combinations, so 2^4 = 16 possible chromosome combinations in gametes before considering crossing over.",
          "Each parent can produce many gamete types, so random fusion combines one gamete from each parent in many pairings.",
          "Therefore offspring variation is far greater than 16 because combinations from both parents multiply and are further increased by crossing over.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t16-1-st1",
        question:
          "Define haploid and diploid and explain what is meant by a homologous pair of chromosomes.",
        modelAnswer: [
          "Haploid (n) means one set of chromosomes; diploid (2n) means two sets of chromosomes.",
          "A homologous pair is one maternal and one paternal chromosome with the same gene loci in the same positions, but not necessarily the same alleles.",
        ],
      },
      {
        id: "t16-1-st2",
        question:
          "Explain why meiosis requires a reduction division before fertilisation can occur.",
        modelAnswer: [
          "Reduction division in meiosis I separates homologous chromosomes and halves chromosome number from 2n to n in gametes.",
          "This ensures fertilisation restores the diploid number rather than doubling chromosome number each generation.",
        ],
      },
      {
        id: "t16-1-st3",
        question:
          "Describe chromosome, spindle and nuclear envelope behaviour in meiosis from prophase I to telophase II.",
        modelAnswer: [
          "Prophase I: chromosomes condense, homologous chromosomes pair, crossing over may occur, spindle forms, nuclear envelope breaks down.",
          "Metaphase I: homologous pairs align at equator with random orientation; anaphase I: homologous chromosomes separate; telophase I with cytokinesis gives two haploid cells.",
          "Prophase II to metaphase II: spindle reforms and chromosomes align singly; anaphase II: sister chromatids separate after centromere division; telophase II and cytokinesis produce four haploid cells.",
        ],
      },
      {
        id: "t16-1-st4",
        question:
          "How do you distinguish metaphase I from metaphase II, and anaphase I from anaphase II, in diagrams or photomicrographs?",
        modelAnswer: [
          "Metaphase I shows homologous pairs (bivalents) at the equator, while metaphase II shows single chromosomes aligned individually.",
          "Anaphase I separates homologous chromosomes with sister chromatids still joined; anaphase II separates sister chromatids after centromere division.",
        ],
      },
      {
        id: "t16-1-st5",
        question:
          "State and explain three mechanisms in sexual reproduction that generate genetic variation.",
        modelAnswer: [
          "Crossing over in prophase I recombines alleles between non-sister chromatids of homologous chromosomes.",
          "Independent assortment from random orientation of homologous pairs (and chromatids in meiosis II) gives different chromosome combinations in gametes.",
          "Random fertilisation combines one of many possible gametes from each parent, producing genetically different offspring.",
        ],
      },
    ],
  },

  "t16-2": {
    noteId: "t16-2",
    syllabusNotes: [
      {
        id: "core-genetics-language",
        title: "Essential inheritance terms and how they connect",
        paragraphs: [
          "A gene is a DNA sequence that contributes to a functional product, usually a polypeptide or functional RNA. A locus is the position of a gene on a chromosome. Different forms of the same gene are alleles.",
          "Genotype is the allele combination an organism carries; phenotype is the observable characteristic produced by genotype interacting with environment. Homozygous means two identical alleles at a locus; heterozygous means two different alleles.",
          "A dominant allele is expressed in the heterozygote; a recessive allele is expressed only when homozygous. Codominant alleles are both fully expressed in the heterozygote. F1 is first filial generation from parental cross, and F2 is the next generation from F1 crosses.",
          "Linkage means loci on the same chromosome tend to be inherited together. Test cross means crossing an individual with a homozygous recessive genotype to infer the unknown genotype from offspring ratios.",
        ],
      },
      {
        id: "constructing-genetic-diagrams",
        title: "Constructing monohybrid and dihybrid genetic diagrams",
        paragraphs: [
          "A full genetic diagram states parental genotypes, possible gametes, random fertilisation combinations (often shown in Punnett squares), and predicted genotype and phenotype ratios.",
          "In monohybrid crosses with complete dominance, one locus is considered. In dihybrid crosses, two loci are considered simultaneously, so correct gamete combinations must include one allele from each locus.",
          "Always define allele symbols clearly before drawing the cross, and keep genotype notation consistent. Marks are often awarded for method as well as final ratios.",
        ],
      },
      {
        id: "beyond-simple-dominance",
        title: "Codominance, multiple alleles and sex linkage",
        paragraphs: [
          "Codominance is seen when heterozygotes show both allele products, such as IAIB in the ABO system producing blood group AB. Multiple-allele systems have more than two alleles in the population, even though one individual still has only two alleles at a locus.",
          "Sex-linked inheritance usually refers to genes on the X chromosome. Males are hemizygous for X-linked loci, so recessive X-linked alleles are expressed more often in males because there is no second X allele to mask them.",
          "When writing sex-linked crosses, include chromosome notation (for example XH and Xh) so inheritance patterns in sons and daughters can be interpreted correctly.",
        ],
      },
      {
        id: "linkage-epistasis-and-test-crosses",
        title: "Autosomal linkage, epistasis and the use of test crosses",
        paragraphs: [
          "If two loci are autosomally linked, parental allele combinations are inherited together more frequently than expected from independent assortment. Recombination can still produce non-parental combinations, but at lower frequency.",
          "Epistasis occurs when one gene affects expression of another gene at a different locus, modifying expected dihybrid phenotypic ratios. You are expected to explain and interpret crosses with epistasis even when a specific memorised ratio is not required.",
          "A test cross reveals genotype by crossing with a homozygous recessive individual. Any dominant phenotype offspring from the test cross indicates the tested parent contributed a dominant allele.",
        ],
      },
      {
        id: "chi-squared-in-genetics",
        title: "Using chi-squared to evaluate observed and expected ratios",
        paragraphs: [
          "Chi-squared compares observed counts with expected counts under a genetic hypothesis. The statistic is Σ((O − E)^2 / E), summing across categories.",
          "A small chi-squared value indicates observed differences from expected are small and likely due to chance. A large value suggests the hypothesis may not fit.",
          "The test decision uses degrees of freedom and a critical probability level from tables. In this syllabus context, interpretation should focus on whether deviation is significant enough to reject the hypothesis.",
        ],
      },
      {
        id: "genes-proteins-and-phenotype-cases",
        title: "How gene products produce phenotype: named examples",
        paragraphs: [
          "TYR codes for tyrosinase in melanin synthesis. Loss-of-function TYR alleles can reduce or prevent melanin production, giving albinism phenotype.",
          "HBB codes for beta-globin in haemoglobin. The sickle-cell mutation changes amino acid sequence in beta-globin, altering haemoglobin behaviour and causing sickle cell anaemia phenotype.",
          "F8 codes for clotting factor VIII. Reduced or absent functional factor VIII impairs clotting and produces haemophilia phenotype, classically X-linked.",
          "HTT codes for huntingtin. Expanded CAG repeats in HTT alter protein properties and are associated with Huntington's disease, typically late-onset and dominant.",
        ],
      },
      {
        id: "gibberellin-pathway-genotype-and-stem-length",
        title: "Le and le alleles, gibberellin synthesis and stem elongation",
        paragraphs: [
          "Gibberellin promotes stem elongation. In peas, the dominant Le allele codes for a functional enzyme in gibberellin synthesis, so active gibberellin production supports taller stem phenotype.",
          "The recessive le allele codes for a non-functional enzyme, reducing gibberellin synthesis and producing shorter stems unless active gibberellin is supplied externally.",
          "This is a direct gene-to-protein-to-phenotype pathway: allele variation changes enzyme function, which changes hormone level, which changes growth outcome.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Top responses in inheritance questions show complete working, correct notation and clear links from allele behaviour to expected offspring and observed data.",
      items: [
        "Using phenotype words in place of genotype symbols when setting up Punnett squares.",
        "Treating codominance as blending or as dominance with an intermediate phenotype.",
        "Forgetting chromosome notation in sex-linked crosses, causing incorrect male and female predictions.",
        "Assuming linked genes assort independently in every dihybrid cross.",
        "Applying chi-squared without calculating expected values from the stated hypothesis first.",
        "Describing disease examples only by symptoms without linking the named gene to protein function and phenotype.",
      ],
    },
    workedExamples: [
      {
        id: "t16-2-ex1",
        title: "Monohybrid test cross to infer unknown genotype",
        problem: [
          "Tall (T) is dominant to dwarf (t). A tall plant of unknown genotype is crossed with a dwarf plant (tt), producing 52 tall and 48 dwarf offspring. Determine the likely genotype of the tall parent and justify your answer.",
        ],
        solution: [
          "A test cross uses a homozygous recessive partner (tt), so offspring phenotypes directly indicate alleles from the unknown parent.",
          "If the unknown were TT, all offspring would be tall. If it were Tt, expected ratio is about 1 tall : 1 dwarf.",
          "Observed 52:48 is very close to 1:1, so the tall parent is most likely heterozygous Tt.",
        ],
      },
      {
        id: "t16-2-ex2",
        title: "Sex-linked cross with explicit male and female outcomes",
        problem: [
          "Haemophilia is X-linked recessive (Xh). A carrier mother (XHXh) and unaffected father (XHY) have children. Predict genotype and phenotype ratios for sons and daughters.",
        ],
        solution: [
          "Gametes are mother: XH or Xh; father: XH or Y.",
          "Daughters receive father's XH, so daughters are either XHXH (unaffected) or XHXh (carrier, unaffected). No daughters are affected in this cross.",
          "Sons receive father's Y, so sons are either XHY (unaffected) or XhY (affected). Therefore half of sons are expected to be affected, and half of daughters are expected to be carriers.",
        ],
      },
      {
        id: "t16-2-ex3",
        title: "Chi-squared test on a monohybrid ratio",
        problem: [
          "A monohybrid F2 cross gives 290 dominant phenotype and 110 recessive phenotype individuals (total 400). Test fit to a 3:1 expectation using chi-squared.",
        ],
        solution: [
          "Expected numbers for 3:1 in 400 are 300 dominant and 100 recessive.",
          "Chi-squared = ((290 − 300)^2 / 300) + ((110 − 100)^2 / 100) = (100 / 300) + (100 / 100) = 0.33 + 1.00 = 1.33 (to 2 d.p.).",
          "With 2 categories, degrees of freedom = 1. A value of 1.33 is below the 5% critical value for df = 1, so deviation is not significant and data are consistent with a 3:1 model.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t16-2-st1",
        question:
          "Define these terms: gene, locus, allele, genotype, phenotype, dominant, recessive, codominant, homozygous, heterozygous, F1, F2 and test cross.",
        modelAnswer: [
          "Gene: DNA sequence coding for a functional product; locus: gene position on a chromosome; allele: alternative form of a gene.",
          "Genotype: allele combination; phenotype: observable characteristic. Dominant allele is expressed in heterozygote; recessive allele is expressed only when homozygous; codominant alleles are both expressed in heterozygote.",
          "Homozygous means two identical alleles, heterozygous means two different alleles. F1 is first filial generation from parental cross; F2 is produced from F1 crosses. A test cross is crossing with a homozygous recessive individual to infer genotype.",
        ],
      },
      {
        id: "t16-2-st2",
        question:
          "Outline the steps of an exam-quality Punnett square solution for a dihybrid cross.",
        modelAnswer: [
          "State parental genotypes clearly and define allele symbols.",
          "List all possible gametes from each parent with one allele from each locus.",
          "Construct the Punnett square, fill offspring genotypes, then derive genotype and phenotype ratios with correct notation and interpretation.",
        ],
      },
      {
        id: "t16-2-st3",
        question:
          "Explain what linkage and epistasis mean, and why each can alter expected dihybrid outcomes.",
        modelAnswer: [
          "Linkage means two loci are on the same chromosome, so parental allele combinations are inherited together more often than expected by independent assortment.",
          "Epistasis means one gene affects expression of another gene at a different locus, modifying phenotypic categories and their ratios.",
          "Both processes can produce observed ratios that differ from the standard independent-assortment dihybrid expectation.",
        ],
      },
      {
        id: "t16-2-st4",
        question:
          "How do TYR, HBB, F8 and HTT illustrate the link between genes, proteins and phenotype?",
        modelAnswer: [
          "TYR affects tyrosinase function and therefore melanin production, giving normal pigmentation or albinism.",
          "HBB affects beta-globin in haemoglobin, with mutation causing sickle cell phenotype.",
          "F8 affects factor VIII level and clotting function, with deficiency causing haemophilia.",
          "HTT mutation alters huntingtin and is associated with Huntington's disease phenotype.",
        ],
      },
      {
        id: "t16-2-st5",
        question:
          "Explain how Le and le alleles influence stem elongation through gibberellin synthesis.",
        modelAnswer: [
          "Le is dominant and codes for a functional enzyme in the gibberellin synthesis pathway, promoting gibberellin production and stem elongation.",
          "le is recessive and codes for a non-functional enzyme, reducing gibberellin synthesis and resulting in shorter stems.",
          "This demonstrates allele -> enzyme function -> hormone level -> phenotype.",
        ],
      },
    ],
  },

  "t16-3": {
    noteId: "t16-3",
    syllabusNotes: [
      {
        id: "structural-vs-regulatory-genes",
        title: "Structural genes, regulatory genes, inducible and repressible enzymes",
        paragraphs: [
          "A structural gene codes for a product with a direct cellular role, such as an enzyme in a metabolic pathway. A regulatory gene codes for a product that controls expression of other genes, often by affecting transcription.",
          "An inducible enzyme is produced when its substrate or an inducer is present, so synthesis is switched on when needed. A repressible enzyme is usually produced unless an end product or repressor signal switches synthesis down.",
          "This distinction helps explain metabolic economy: cells avoid wasting resources on proteins that are unnecessary under current conditions.",
        ],
      },
      {
        id: "lac-operon-core-logic",
        title: "Genetic control in prokaryotes: lac operon logic",
        paragraphs: [
          "In the lac operon model, structural genes code for proteins involved in lactose uptake and metabolism. Their transcription is controlled by operator-promoter interactions with a repressor protein from a regulatory gene.",
          "When lactose is absent, active repressor binds the operator and prevents RNA polymerase from transcribing structural genes. Enzymes are therefore not produced in significant amounts.",
          "When lactose is present, an inducer derived from lactose binds repressor and changes its shape. Repressor can no longer bind operator effectively, RNA polymerase transcribes structural genes, and lactose-metabolising enzymes are produced.",
          "You are expected to explain this on/off control mechanism without requiring cAMP detail.",
        ],
      },
      {
        id: "eukaryotic-transcription-factors",
        title: "Transcription factors in eukaryotic gene regulation",
        paragraphs: [
          "Transcription factors are proteins that bind specific DNA sequences and alter transcription rate by helping or hindering assembly/activity of transcription machinery.",
          "Some transcription factors act as activators and increase transcription; others act as repressors and decrease transcription. The same gene can be regulated by multiple factors, enabling cell-type-specific expression patterns.",
          "Because different cells contain different combinations of active transcription factors, they can express different subsets of genes even though they contain the same genome.",
        ],
      },
      {
        id: "gibberellin-and-della-control",
        title: "Gibberellin activation of genes via DELLA repressor breakdown",
        paragraphs: [
          "In plant cells, DELLA proteins act as repressors that inhibit transcription-promoting factors linked to growth responses. When DELLA levels are high, growth-related gene expression is restrained.",
          "Gibberellin signalling promotes breakdown of DELLA proteins. As DELLA repression is removed, transcription-promoting factors can act and expression of growth-associated genes increases.",
          "This mechanism links hormone signal to gene expression change and explains how gibberellin can trigger elongation responses in specific tissues.",
        ],
      },
      {
        id: "comparing-gene-control-across-systems",
        title: "Comparing prokaryotic and eukaryotic control strategies",
        paragraphs: [
          "Both prokaryotic and eukaryotic systems regulate transcription to control protein production, but architecture differs. Prokaryotic operons often coordinate several structural genes under a shared control region.",
          "Eukaryotic genes are usually regulated individually with many transcription factors and chromatin-level influences, enabling fine tissue-specific and developmental control.",
          "In exam responses, comparison marks are gained by pairing a similarity with a clear difference rather than listing unrelated facts.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Gene-control questions reward cause-and-effect sequencing: signal, DNA/protein interaction, transcription change, and phenotypic consequence.",
      items: [
        "Confusing structural genes with regulatory genes and assigning control roles to the wrong gene class.",
        "Saying the lac operon is active when lactose is absent; it is typically switched off by repressor binding in the absence of inducer.",
        "Describing transcription factors as DNA sequences rather than proteins that bind DNA.",
        "Assuming all transcription factors increase transcription; some decrease transcription.",
        "Stating gibberellin directly 'is a transcription factor' instead of explaining DELLA breakdown and derepression.",
        "Answering prokaryote/eukaryote comparison with only one system described and no explicit contrast.",
      ],
    },
    workedExamples: [
      {
        id: "t16-3-ex1",
        title: "Predicting lac operon expression in two environments",
        problem: [
          "Predict whether lac structural genes are transcribed when (a) lactose is absent and (b) lactose is present. Explain each state.",
        ],
        solution: [
          "When lactose is absent, repressor is active and binds the operator, blocking transcription of structural genes, so enzyme production is very low.",
          "When lactose is present, inducer binds repressor and prevents effective operator binding, allowing RNA polymerase to transcribe lac structural genes.",
          "Therefore lac enzymes are produced mainly when lactose is available, matching enzyme synthesis to substrate availability.",
        ],
      },
      {
        id: "t16-3-ex2",
        title: "Classifying gene-control statements",
        problem: [
          "Classify each as structural gene product, regulatory gene product, inducible enzyme, or repressible-enzyme context: (i) enzyme in lactose breakdown pathway, (ii) protein that binds operator to block transcription, (iii) enzyme made mainly when substrate appears, (iv) enzyme pathway switched down by end-product signal.",
        ],
        solution: [
          "(i) is a structural gene product because it directly catalyses metabolism.",
          "(ii) is a regulatory gene product because it controls transcription of other genes.",
          "(iii) describes an inducible enzyme pattern because synthesis increases in response to inducer/substrate.",
          "(iv) describes a repressible-enzyme context because pathway expression is reduced when product-level signals indicate synthesis is not needed.",
        ],
      },
      {
        id: "t16-3-ex3",
        title: "Explaining gibberellin-DELLA control in stem growth",
        problem: [
          "A mutant plant line has DELLA proteins that are resistant to breakdown even when gibberellin is present. Predict the effect on growth-related gene expression and stem elongation.",
        ],
        solution: [
          "If DELLA proteins cannot be broken down, they continue repressing transcription-promoting factors.",
          "Growth-related genes therefore remain less active despite gibberellin signal.",
          "The likely phenotype is reduced stem elongation compared with plants in which DELLA proteins are normally degraded in response to gibberellin.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t16-3-st1",
        question:
          "Differentiate structural genes from regulatory genes, and inducible enzymes from repressible enzymes.",
        modelAnswer: [
          "Structural genes code for products with direct cellular roles, such as metabolic enzymes; regulatory genes code for products that control expression of other genes.",
          "Inducible enzymes are synthesised mainly when substrate/inducer is present; repressible-enzyme pathways are typically active until a repressor signal (often related to product abundance) decreases expression.",
        ],
      },
      {
        id: "t16-3-st2",
        question:
          "Explain genetic control of protein production in the lac operon when lactose is absent and when lactose is present.",
        modelAnswer: [
          "Without lactose, active repressor binds operator and blocks transcription of lac structural genes.",
          "With lactose present, inducer inactivates repressor binding to operator, so RNA polymerase transcribes structural genes and lactose-metabolising proteins are produced.",
        ],
      },
      {
        id: "t16-3-st3",
        question:
          "What are transcription factors, and how do they control gene expression in eukaryotes?",
        modelAnswer: [
          "Transcription factors are proteins that bind specific DNA regions and modulate transcription.",
          "They can increase transcription (activators) or decrease transcription (repressors) by affecting recruitment or activity of transcription machinery at target genes.",
        ],
      },
      {
        id: "t16-3-st4",
        question:
          "Describe how gibberellin can activate gene expression through DELLA proteins.",
        modelAnswer: [
          "DELLA proteins repress transcription-promoting factors involved in growth-related gene expression.",
          "Gibberellin signalling causes DELLA protein breakdown, removing repression.",
          "Derepression allows increased transcription of growth-associated genes, supporting stem elongation responses.",
        ],
      },
      {
        id: "t16-3-st5",
        question:
          "State one key similarity and two key differences between prokaryotic and eukaryotic control of gene expression.",
        modelAnswer: [
          "Similarity: both regulate transcription by DNA-protein interactions that alter whether genes are transcribed.",
          "Difference 1: prokaryotes often use operons controlling several structural genes together, while eukaryotic genes are usually regulated individually.",
          "Difference 2: eukaryotes rely on combinations of transcription factors for complex cell-type-specific regulation, while prokaryotic control is often more directly linked to immediate substrate availability.",
        ],
      },
    ],
  },
};
