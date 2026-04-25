import type { NoteDraft } from "./types";

/** Full teaching notes for 9700 Topic 17 — subtopics 17.1-17.3 (see lib/notes/AUTHORING.md). */
export const BIOLOGY_TOPIC17_DRAFTS: Record<string, NoteDraft> = {
  "t17-1": {
    noteId: "t17-1",
    syllabusNotes: [
      {
        id: "phenotypic-variation-overview",
        title: "Phenotypic variation and its sources",
        paragraphs: [
          "Phenotypic variation means differences in observable characteristics between individuals in a population. A phenotype can be influenced by genotype, environment, or interaction between both.",
          "Some traits are mainly genetic. For example, ABO blood group is determined by inherited alleles and is not altered by normal environmental conditions.",
          "Some traits are mainly environmental. For example, a person's suntan is caused by ultraviolet exposure and is not inherited as a DNA sequence change.",
          "Many traits are influenced by both factors. Human height has a strong genetic component but also depends on nutrition, health and disease history during growth.",
        ],
      },
      {
        id: "discontinuous-and-continuous-variation",
        title: "Discontinuous and continuous variation",
        paragraphs: [
          "Discontinuous variation produces distinct categories with no intermediates, such as blood groups or attached versus unattached earlobes. Individuals fit into one class or another.",
          "Continuous variation produces a range of values with many intermediates, such as height, body mass and skin pigmentation intensity. Data often show an approximately normal distribution in large samples.",
          "In exam answers, classify variation from the pattern of data: separate groups suggest discontinuous variation, while a smooth spread of measurements suggests continuous variation.",
        ],
      },
      {
        id: "genetic-basis-variation-types",
        title: "Genetic basis of discontinuous and continuous traits",
        paragraphs: [
          "Discontinuous variation is usually controlled by one gene or a small number of genes, often with little environmental influence. Different allele combinations produce discrete phenotypic classes.",
          "Continuous variation is usually polygenic: many genes contribute additive effects to one trait. Environmental factors then modify the final phenotype further, creating a broad spectrum rather than clear categories.",
          "This distinction is not absolute for every trait, but it is the syllabus-level framework used to explain why some characters fall into classes and others form a range.",
        ],
      },
      {
        id: "using-t-test-in-biology",
        title: "Using the t-test to compare means of two samples",
        paragraphs: [
          "The t-test is used to compare the means of two samples and judge whether the observed difference is likely due to chance. The formula is provided in the exam, so focus on interpretation steps.",
          "Set up a null hypothesis (H0), usually that there is no significant difference between sample means. Calculate t from sample means, spread and sample size, then compare with the critical value at the appropriate degrees of freedom and chosen probability level.",
          "If calculated t is greater than or equal to the critical value, reject H0 and conclude a statistically significant difference. If calculated t is lower, fail to reject H0 and conclude any difference could be due to chance.",
          "The t-test is valid when comparing two samples where data are approximately normally distributed and measurements are independent. Examiners often reward clear statement of H0, test decision, and biological conclusion.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "This subtopic often loses marks when candidates can recall definitions but cannot link observed data to the correct variation type or to valid statistical conclusions.",
      items: [
        "Treating all phenotypic variation as purely genetic and ignoring environmental effects such as nutrition, disease or light exposure.",
        "Confusing discontinuous and continuous variation, for example calling height discontinuous because values are rounded into classes.",
        "Saying continuous variation is controlled by one gene; it is usually polygenic and often environmentally influenced.",
        "Using the t-test without a null hypothesis or without comparing calculated t with the correct critical value.",
        "Concluding that a non-significant result proves two populations are identical; it only means there is insufficient evidence of a difference at the chosen significance level.",
      ],
    },
    workedExamples: [
      {
        id: "t17-1-ex1",
        title: "Classifying traits by variation pattern",
        problem: [
          "Classify each trait as discontinuous or continuous variation and justify briefly: ABO blood group, human height, tongue-rolling ability.",
        ],
        solution: [
          "ABO blood group is discontinuous variation because individuals fall into distinct categories (A, B, AB, O) with no intermediates.",
          "Human height is continuous variation because it shows a range of measured values with many intermediate phenotypes.",
          "Tongue-rolling ability is treated as discontinuous at this level because individuals are generally scored into clear classes (can roll or cannot roll).",
          "The classification is based on data pattern, not on whether the trait is easy or difficult to measure.",
        ],
      },
      {
        id: "t17-1-ex2",
        title: "Explaining mixed genetic and environmental influence",
        problem: [
          "Two siblings have similar genotypes for height-related genes, but one is significantly shorter at age 16. Explain this using Topic 17.1 ideas.",
        ],
        solution: [
          "Height is a continuous trait with strong genetic contribution, but environmental factors also influence phenotype.",
          "If one sibling experienced poorer nutrition, chronic illness, or hormonal disruption during growth, final height can be reduced despite similar inherited alleles.",
          "This example shows that phenotype is often the product of genotype-environment interaction, not genotype alone.",
        ],
      },
      {
        id: "t17-1-ex3",
        title: "Interpreting a t-test decision",
        problem: [
          "A student compares mean leaf length of plants grown in two light conditions. Calculated t = 2.6, critical t at the relevant degrees of freedom and p = 0.05 is 2.1. Interpret the result.",
        ],
        solution: [
          "Null hypothesis: there is no significant difference in mean leaf length between the two light conditions.",
          "Because calculated t (2.6) is greater than critical t (2.1), reject the null hypothesis at p = 0.05.",
          "Conclude that the difference in means is statistically significant and is unlikely to be due to random sampling alone.",
          "A strong biological conclusion then links this to light condition affecting growth under the tested conditions.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t17-1-st1",
        question:
          "Explain, with one example each, how phenotypic variation can arise from genetic factors, environmental factors, and both together.",
        modelAnswer: [
          "Genetic-only example: ABO blood group is determined by inherited alleles and is not altered by normal environment.",
          "Environmental-only example: suntan intensity is mainly due to ultraviolet exposure and is not inherited as a permanent DNA change.",
          "Combined example: height depends on inherited alleles plus environmental influences such as nutrition and disease during growth.",
        ],
      },
      {
        id: "t17-1-st2",
        question:
          "Define discontinuous variation and continuous variation, and give one suitable biological example of each.",
        modelAnswer: [
          "Discontinuous variation has distinct categories with no intermediates; example: ABO blood group.",
          "Continuous variation shows a range of values with intermediates; example: human height.",
        ],
      },
      {
        id: "t17-1-st3",
        question:
          "State the genetic basis of discontinuous variation and continuous variation at A Level standard.",
        modelAnswer: [
          "Discontinuous variation is usually controlled by one or a few genes and often has limited environmental influence.",
          "Continuous variation is usually polygenic, with many genes contributing additive effects and environmental factors often modifying the phenotype.",
        ],
      },
      {
        id: "t17-1-st4",
        question:
          "Outline the key decision steps when using a t-test to compare means from two samples.",
        modelAnswer: [
          "State a null hypothesis that there is no significant difference between the two means.",
          "Calculate t using the provided formula and identify the correct critical value for the degrees of freedom and significance level.",
          "Compare calculated t with critical t to decide whether to reject or fail to reject the null hypothesis.",
          "State the biological conclusion clearly in context of the investigation.",
        ],
      },
      {
        id: "t17-1-st5",
        question:
          "Why is it incorrect to say a non-significant t-test result proves there is no difference between populations?",
        modelAnswer: [
          "A non-significant result means the observed difference could have arisen by chance at the chosen probability level.",
          "It does not prove the true population means are exactly identical; it indicates insufficient evidence to reject the null hypothesis from that dataset.",
        ],
      },
    ],
  },

  "t17-2": {
    noteId: "t17-2",
    syllabusNotes: [
      {
        id: "natural-selection-core-mechanism",
        title: "Natural selection and the struggle for existence",
        paragraphs: [
          "Natural selection occurs because populations can produce more offspring than the environment can support. Resources such as food, territory and mates are limited, so individuals compete in a struggle for existence.",
          "Individuals with heritable characteristics that improve survival or reproductive success in that environment are more likely to leave offspring. Their alleles become more common in later generations.",
          "Selection therefore changes allele frequencies over time and can produce adaptation at the population level.",
        ],
      },
      {
        id: "selection-patterns",
        title: "Stabilising, directional and disruptive selection",
        paragraphs: [
          "Stabilising selection favors intermediate phenotypes and acts against extremes. The mean trait value is maintained while variation around the mean is reduced.",
          "Directional selection favors one extreme phenotype, shifting the population mean in one direction. It often occurs when environmental conditions change.",
          "Disruptive selection favors both extremes and acts against intermediate phenotypes. This can increase variation and may promote divergence within a population.",
        ],
      },
      {
        id: "allele-frequency-changes-drift-founder-bottleneck",
        title: "Selection, genetic drift, founder effect and bottleneck effect",
        paragraphs: [
          "Selection changes allele frequencies non-randomly because some phenotypes have higher fitness under specific conditions.",
          "Genetic drift is random change in allele frequency due to chance effects, especially in small populations. Drift can reduce genetic variation and can fix or eliminate alleles without adaptive advantage.",
          "The founder effect occurs when a new population is established by a small number of individuals. The new gene pool may not represent the original population's allele frequencies.",
          "The bottleneck effect occurs when a population is drastically reduced in size by events such as disease or habitat loss. Survivors carry only part of the original variation, and later generations may show altered allele frequencies due to chance.",
        ],
      },
      {
        id: "antibiotic-resistance-as-natural-selection",
        title: "Antibiotic resistance in bacteria as natural selection",
        paragraphs: [
          "Bacterial populations contain variation in antibiotic susceptibility due to mutation or acquired resistance genes.",
          "When an antibiotic is used, susceptible bacteria are removed more effectively. Resistant bacteria survive and reproduce, so resistance alleles increase in frequency.",
          "Overuse and misuse of antibiotics increase selection pressure and accelerate spread of resistance in bacterial populations.",
        ],
      },
      {
        id: "hardy-weinberg-principle",
        title: "Hardy-Weinberg principle: equations, conditions and use",
        paragraphs: [
          "The Hardy-Weinberg principle predicts allele and genotype frequencies in a population where no evolution occurs. If allele frequencies are p and q for a two-allele gene, then p + q = 1 and p^2 + 2pq + q^2 = 1.",
          "Here, p^2 and q^2 are homozygote genotype frequencies and 2pq is the heterozygote frequency. From observed genotype or phenotype data, unknown frequencies can be estimated by suitable algebraic steps.",
          "Conditions for Hardy-Weinberg equilibrium are: very large population, random mating, no mutation, no migration (gene flow), and no selection.",
          "If observed frequencies differ substantially from Hardy-Weinberg predictions, one or more equilibrium conditions may not hold and evolutionary forces may be acting.",
        ],
      },
      {
        id: "artificial-selection-principles-and-examples",
        title: "Artificial selection (selective breeding): principles and syllabus examples",
        paragraphs: [
          "Artificial selection is human-directed breeding to increase frequency of desired alleles in domesticated plants or animals.",
          "Breeders choose parents with target traits, cross them, and select offspring that best express those traits across multiple generations.",
          "Disease resistance can be introduced into wheat and rice by selecting and crossing varieties carrying resistance alleles, then repeatedly selecting resistant progeny.",
          "In maize, inbreeding can produce uniform pure lines while hybridisation between selected inbred lines can produce vigorous, high-yield hybrids (hybrid vigour).",
          "In dairy cattle, selective breeding can increase milk yield by repeatedly breeding individuals with high milk production and desirable health and fertility traits.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "High-level answers distinguish random and non-random forces clearly, and use Hardy-Weinberg equations with explicit assumptions rather than memorised statements.",
      items: [
        "Describing natural selection as organisms 'trying to adapt' during life, rather than differential survival and reproduction of heritable variants.",
        "Mixing up directional, stabilising and disruptive selection patterns when interpreting graphs.",
        "Confusing genetic drift with selection; drift is random and strongest in small populations.",
        "Using Hardy-Weinberg equations without stating equilibrium conditions or without checking whether assumptions are plausible.",
        "Treating artificial selection as identical to natural selection; both change allele frequencies, but artificial selection is directed by human choice.",
      ],
    },
    workedExamples: [
      {
        id: "t17-2-ex1",
        title: "Identifying selection pattern from phenotype distribution",
        problem: [
          "A bird population initially has a wide range of beak sizes. After prolonged drought, seeds are mostly large and hard. Over generations, the mean beak size increases. Name the selection type and explain.",
        ],
        solution: [
          "This is directional selection because one extreme phenotype (larger beak size) is favored.",
          "Individuals with larger beaks crack available hard seeds more effectively, survive better, and leave more offspring.",
          "Alleles contributing to larger beak size increase in frequency, shifting the population mean toward that extreme.",
        ],
      },
      {
        id: "t17-2-ex2",
        title: "Hardy-Weinberg calculation from recessive phenotype frequency",
        problem: [
          "In a large population, 9% of individuals show a recessive phenotype (aa). Assuming Hardy-Weinberg conditions apply, calculate allele frequencies and expected genotype frequencies.",
        ],
        solution: [
          "If recessive phenotype frequency is 0.09, then q^2 = 0.09 and q = 0.3.",
          "Since p + q = 1, p = 1 - 0.3 = 0.7.",
          "Expected genotype frequencies are p^2 = 0.49 (AA), 2pq = 0.42 (Aa), and q^2 = 0.09 (aa).",
          "These predictions are valid only if Hardy-Weinberg assumptions are approximately met.",
        ],
      },
      {
        id: "t17-2-ex3",
        title: "Explaining founder effect versus bottleneck effect",
        problem: [
          "A few birds from mainland population X colonise an isolated island and establish a breeding population. Separately, population Y on another island is reduced to 12 survivors by a cyclone. Identify the processes and expected genetic consequences.",
        ],
        solution: [
          "Population X shows the founder effect because a new population starts from a small, non-representative sample of the original gene pool.",
          "Population Y shows the bottleneck effect because a previously larger population is suddenly reduced to very few survivors.",
          "Both cases can produce large random shifts in allele frequency and reduced genetic variation due to drift, especially in subsequent small populations.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t17-2-st1",
        question:
          "Explain why natural selection occurs in terms of overproduction of offspring, competition, adaptation and allele inheritance.",
        modelAnswer: [
          "Populations produce more offspring than can survive, so individuals compete for limited resources.",
          "Those with heritable traits that improve survival and reproductive success in that environment leave more offspring.",
          "Their alleles are passed to the next generation more often, so allele frequencies change over time.",
        ],
      },
      {
        id: "t17-2-st2",
        question:
          "Compare stabilising, directional and disruptive selection in terms of phenotypes favored and effect on population distribution.",
        modelAnswer: [
          "Stabilising selection favors intermediates and removes extremes, reducing variation around the mean.",
          "Directional selection favors one extreme and shifts the mean toward that extreme.",
          "Disruptive selection favors both extremes and acts against intermediates, which can increase divergence in the population.",
        ],
      },
      {
        id: "t17-2-st3",
        question:
          "Distinguish selection, genetic drift, founder effect and bottleneck effect as causes of allele-frequency change.",
        modelAnswer: [
          "Selection is non-random change due to differential fitness of heritable phenotypes.",
          "Genetic drift is random change in allele frequency due to chance effects, strongest in small populations.",
          "Founder effect is drift when a new population is established by a small sample of founders.",
          "Bottleneck effect is drift after a severe temporary reduction in population size.",
        ],
      },
      {
        id: "t17-2-st4",
        question:
          "Outline how antibiotic resistance in bacteria demonstrates natural selection.",
        modelAnswer: [
          "Variation in antibiotic resistance exists in bacterial populations due to mutation or acquired genes.",
          "Antibiotic exposure removes susceptible bacteria more effectively, while resistant bacteria survive and reproduce.",
          "Resistance alleles therefore increase in frequency in subsequent generations.",
        ],
      },
      {
        id: "t17-2-st5",
        question:
          "State the Hardy-Weinberg equations and conditions for use, then define selective breeding with one syllabus example.",
        modelAnswer: [
          "Equations: p + q = 1 and p^2 + 2pq + q^2 = 1 for a two-allele system.",
          "Conditions: large population, random mating, no mutation, no migration, no selection.",
          "Selective breeding (artificial selection) is human-directed choice of parents with desired traits; for example breeding dairy cattle for increased milk yield.",
        ],
      },
    ],
  },

  "t17-3": {
    noteId: "t17-3",
    syllabusNotes: [
      {
        id: "evolution-theory-overview",
        title: "Evolution as change in gene pools over time",
        paragraphs: [
          "Evolution is the process by which populations of organisms change over generations, leading to the formation of new species from pre-existing species.",
          "At population level, evolution is a change in allele frequencies in the gene pool from one generation to the next. Over long timescales, accumulated genetic changes can produce reproductive isolation and speciation.",
          "Evolution does not require directed progress toward perfection. It reflects differential survival and reproduction under specific environmental conditions.",
        ],
      },
      {
        id: "dna-sequence-evidence-relationships",
        title: "Using DNA sequence data to infer evolutionary relationships",
        paragraphs: [
          "DNA sequence comparison provides molecular evidence of relatedness. Species with more similar nucleotide sequences are usually inferred to share a more recent common ancestor than species with more sequence differences.",
          "Comparisons can use specific genes or larger genomic regions. Mutations accumulate over time, so sequence divergence provides a record of evolutionary separation.",
          "Sequence data can be used to build phylogenetic trees that propose branching patterns of descent. These trees are hypotheses supported by available molecular evidence and may be refined as new data appear.",
        ],
      },
      {
        id: "speciation-basics-isolation",
        title: "How genetic isolation can lead to speciation",
        paragraphs: [
          "Speciation occurs when populations become genetically isolated and diverge until they can no longer interbreed successfully to produce fertile offspring.",
          "Isolation limits gene flow between populations. Mutation, selection and drift then act independently in each population, increasing genetic differences over generations.",
          "When reproductive barriers become strong enough, separate species exist even if populations later come into contact.",
        ],
      },
      {
        id: "allopatric-speciation",
        title: "Allopatric speciation: geographical separation",
        paragraphs: [
          "In allopatric speciation, a physical barrier such as mountain formation, river change, island colonisation or habitat fragmentation separates populations.",
          "Because the populations are geographically isolated, interbreeding stops and gene pools diverge under different mutations, selection pressures and drift.",
          "Over time, reproductive isolation can evolve, so the populations remain separate species even if the barrier is removed.",
        ],
      },
      {
        id: "sympatric-speciation",
        title: "Sympatric speciation: ecological and behavioural separation",
        paragraphs: [
          "In sympatric speciation, populations diverge without physical geographical separation. Instead, isolation arises within the same area through ecological differences, behavioural differences, or both.",
          "Ecological separation can occur when groups exploit different food resources, microhabitats or breeding times. Behavioural separation can occur through differences in courtship signals, mate choice or reproductive timing.",
          "Reduced gene flow between these groups allows genetic divergence and eventual reproductive isolation, producing new species in the same broad location.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Candidates often know key words in evolution but lose marks when they do not connect gene-pool change, evidence from DNA, and mechanisms of reproductive isolation.",
      items: [
        "Describing evolution as change in individuals during life rather than change in allele frequencies across generations in populations.",
        "Stating that DNA similarity proves species are identical; it indicates degree of relatedness and recency of common ancestry.",
        "Confusing allopatric and sympatric speciation by mixing geographical barriers with within-area ecological or behavioural isolation.",
        "Using vague phrases such as 'they became different species' without explaining reduced gene flow and reproductive isolation.",
        "Assuming speciation always requires complete geographical separation; sympatric pathways are also in the syllabus.",
      ],
    },
    workedExamples: [
      {
        id: "t17-3-ex1",
        title: "Interpreting DNA sequence similarity",
        problem: [
          "Gene X sequence comparison shows species A and B differ by 2 base substitutions, while species A and C differ by 18 substitutions across the same aligned region. What evolutionary inference is most likely?",
        ],
        solution: [
          "Species A and B are likely to share a more recent common ancestor with each other than either does with species C.",
          "Fewer sequence differences suggest less accumulated divergence time under comparable mutation rates.",
          "This molecular evidence supports a phylogenetic tree where A and B branch together more recently than C.",
        ],
      },
      {
        id: "t17-3-ex2",
        title: "Applying allopatric speciation reasoning",
        problem: [
          "A single lizard population is split when a new canyon forms. Twenty thousand years later, the two populations show distinct mating displays and hybrids are rare and infertile. Explain this as speciation.",
        ],
        solution: [
          "The canyon created geographical isolation, so gene flow between the two populations was greatly reduced or absent.",
          "Independent mutation, selection and drift caused genetic divergence in each isolated population.",
          "Differences in mating displays indicate prezygotic reproductive barriers, and infertile hybrids indicate postzygotic barriers.",
          "Together these barriers show allopatric speciation has occurred from an ancestral population.",
        ],
      },
      {
        id: "t17-3-ex3",
        title: "Applying sympatric speciation reasoning",
        problem: [
          "A fish species in one lake splits into two groups: one feeds and breeds in shallow vegetated margins, the other in deep open water. They breed at different times and rarely interbreed. Explain how this can lead to new species without geographical separation.",
        ],
        solution: [
          "There is no physical barrier, but ecological separation (different habitats and resources) and behavioural/temporal separation (different breeding timing) reduce gene flow.",
          "Reduced interbreeding allows each group's gene pool to diverge through selection, mutation and drift under different ecological conditions.",
          "Over generations, reproductive isolation can become strong enough that they function as separate species. This is sympatric speciation.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t17-3-st1",
        question:
          "Outline the theory of evolution in terms of changes to gene pools over generations and formation of new species.",
        modelAnswer: [
          "Evolution is change in allele frequencies in a population's gene pool from generation to generation.",
          "Accumulated genetic changes can produce divergence and reproductive isolation, leading to formation of new species from pre-existing species over time.",
        ],
      },
      {
        id: "t17-3-st2",
        question:
          "How can DNA sequence data be used to show evolutionary relationships between species?",
        modelAnswer: [
          "DNA sequences from equivalent genes or genomic regions are compared between species.",
          "Greater sequence similarity usually indicates a more recent common ancestor, while greater differences indicate earlier divergence.",
          "These comparisons support construction of phylogenetic trees showing inferred evolutionary relationships.",
        ],
      },
      {
        id: "t17-3-st3",
        question:
          "Explain how genetic isolation contributes to speciation.",
        modelAnswer: [
          "Genetic isolation reduces or prevents gene flow between populations.",
          "Independent mutation, selection and drift then cause divergence of allele frequencies.",
          "If reproductive barriers evolve so interbreeding no longer produces fertile offspring, separate species result.",
        ],
      },
      {
        id: "t17-3-st4",
        question:
          "Define allopatric speciation and give the core mechanism.",
        modelAnswer: [
          "Allopatric speciation is speciation caused by geographical separation of populations.",
          "A physical barrier prevents interbreeding, gene pools diverge independently, and reproductive isolation eventually develops.",
        ],
      },
      {
        id: "t17-3-st5",
        question:
          "Define sympatric speciation and explain ecological and behavioural separation.",
        modelAnswer: [
          "Sympatric speciation is speciation without geographical separation.",
          "Ecological separation (different habitats/resources) and behavioural separation (different courtship or breeding timing) reduce gene flow within the same area.",
          "Continued genetic divergence can then produce reproductive isolation and new species.",
        ],
      },
    ],
  },
};
