import type { NoteDraft } from "./types";

/** Full teaching notes for 9700 Topic 18 — subtopics 18.1-18.3 (see lib/notes/AUTHORING.md). */
export const BIOLOGY_TOPIC18_DRAFTS: Record<string, NoteDraft> = {
  "t18-1": {
    noteId: "t18-1",
    syllabusNotes: [
      {
        id: "species-concepts",
        title: "What biologists mean by species",
        paragraphs: [
          "There is no single species definition that works in every biological context, so classification uses complementary species concepts. In exams, you should be able to compare their logic and limitations rather than memorise one sentence.",
          "The biological species concept focuses on reproductive compatibility: members of one species can interbreed naturally and produce fertile offspring, while reproductive isolation separates species. This is powerful for many sexually reproducing organisms, but it is less useful for fossils and asexual organisms.",
          "The morphological species concept classifies organisms by observable structural features. It is practical in fieldwork and museum taxonomy, but can mislead when different species look similar (cryptic species) or when one species has strong variation by sex or life stage.",
          "The ecological species concept defines species by their niche: how they use resources and interact with the environment. This highlights adaptive roles in ecosystems, but ecological boundaries may overlap and can change with environmental conditions.",
        ],
      },
      {
        id: "three-domains-and-prokaryote-split",
        title: "Three-domain classification and why Archaea are separate from Bacteria",
        paragraphs: [
          "Modern classification places all cellular life in three domains: Archaea, Bacteria and Eukarya. This framework reflects deep evolutionary relationships, especially from molecular evidence such as ribosomal RNA comparisons.",
          "Archaea and Bacteria are both prokaryotic because they lack a nucleus and other membrane-bound organelles, but they are not the same group. Key differences include membrane lipid chemistry, ribosomal RNA sequences and cell-wall composition.",
          "Archaeal membrane lipids are chemically distinct from bacterial lipids, and many Archaea lack peptidoglycan in their cell walls, unlike typical bacteria. These differences support classification into separate domains rather than treating all prokaryotes as one homogeneous unit.",
        ],
      },
      {
        id: "eukarya-and-taxonomic-hierarchy",
        title: "Classification within Eukarya and taxonomic hierarchy",
        paragraphs: [
          "Within Eukarya, organisms are organised in a ranked hierarchy: kingdom, phylum, class, order, family, genus and species. As you move down the hierarchy, groups become smaller and members share more specific characteristics.",
          "This hierarchy supports identification, communication and prediction. If two organisms share the same genus, they usually share more features than organisms only sharing a phylum.",
          "In classification questions, present the rank order accurately and avoid switching terms. Cambridge questions often reward precise hierarchy language as much as biological description.",
        ],
      },
      {
        id: "eukaryotic-kingdom-features",
        title: "Characteristic features of Protoctista, Fungi, Plantae and Animalia",
        paragraphs: [
          "Protoctista is a diverse kingdom of mostly eukaryotic, often unicellular organisms; some are autotrophic and others heterotrophic. Their diversity is one reason why kingdom-level labels are broad summaries, not strict descriptions of every member.",
          "Fungi are eukaryotic heterotrophs that feed by extracellular digestion and absorption, usually with cell walls containing chitin. Many are multicellular (for example moulds), while some are unicellular (for example yeasts).",
          "Plantae are multicellular eukaryotes that generally photosynthesise and have cellulose cell walls. Their body plans support light capture, gas exchange and transport.",
          "Animalia are multicellular eukaryotes that are heterotrophic by ingestion and do not have cell walls. They typically show specialised tissues, movement and complex coordination.",
        ],
      },
      {
        id: "virus-classification-basics",
        title: "How viruses are classified at this level",
        paragraphs: [
          "Viruses are not placed in the three-domain system because they are acellular. At this syllabus level, virus classification is based on nucleic acid type.",
          "You should classify viruses as DNA or RNA viruses, and then as single-stranded or double-stranded. This molecular basis links directly to replication strategy and is more informative than classification by disease name alone.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "High-scoring answers in classification combine precise definitions with justified distinctions between taxonomic groups and concepts.",
      items: [
        "Treating the biological species concept as universal and forgetting that it does not classify fossils or asexual organisms effectively.",
        "Using superficial statements like 'Archaea are just extreme bacteria' instead of giving specific differences in membrane lipids, rRNA and cell-wall composition.",
        "Misordering ranks in the taxonomic hierarchy (for example swapping class and order) or omitting levels.",
        "Listing kingdom names without outlining distinguishing features of Protoctista, Fungi, Plantae and Animalia.",
        "Placing viruses inside Bacteria or Eukarya instead of stating they are acellular and classified here by nucleic acid type and strandedness.",
      ],
    },
    workedExamples: [
      {
        id: "t18-1-ex1",
        title: "Choosing the most suitable species concept",
        problem: [
          "A taxonomist is studying: (i) a population of sexually reproducing birds, (ii) fossil shells, and (iii) two insect groups that occupy different habitats but look very similar. State which species concept is most useful in each case and justify your choice.",
        ],
        solution: [
          "For the birds, the biological species concept is most useful because interbreeding and fertility can be tested directly in natural populations.",
          "For fossil shells, the morphological species concept is most useful because reproductive data and ecological interaction cannot be measured directly from fossils.",
          "For similar-looking insects in different habitats, the ecological species concept is useful because niche separation may indicate distinct species despite close morphology.",
          "The key exam skill is selecting a concept based on available evidence, not claiming one concept is always best.",
        ],
      },
      {
        id: "t18-1-ex2",
        title: "Explaining Archaea vs Bacteria in domain classification",
        problem: [
          "A student writes: 'Both Archaea and Bacteria are prokaryotes, so they belong in one domain.' Write an improved exam response.",
        ],
        solution: [
          "Archaea and Bacteria are both prokaryotic because they lack a nucleus, but they are assigned to different domains due to fundamental molecular differences.",
          "Archaea differ from Bacteria in membrane lipid chemistry, ribosomal RNA sequences and cell-wall composition (for example typical bacteria have peptidoglycan, many Archaea do not).",
          "These differences reflect deep evolutionary divergence, so three-domain classification separates Archaea from Bacteria.",
        ],
      },
      {
        id: "t18-1-ex3",
        title: "Applying hierarchy and virus classification in one response",
        problem: [
          "Give the correct taxonomic hierarchy used for Eukarya and then state how viruses are classified at this level of the syllabus.",
        ],
        solution: [
          "The hierarchy is kingdom, phylum, class, order, family, genus and species.",
          "Viruses are not placed in this cellular hierarchy because they are acellular; here they are classified by nucleic acid type (DNA or RNA) and whether the nucleic acid is single-stranded or double-stranded.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t18-1-st1",
        question:
          "Compare the biological, morphological and ecological species concepts, giving one strength or limitation for each.",
        modelAnswer: [
          "Biological species concept: based on natural interbreeding and fertile offspring; strong for many sexual species but weak for asexual organisms and fossils.",
          "Morphological species concept: based on structural features; practical for fossils and field identification but can miss cryptic species or over-split variable species.",
          "Ecological species concept: based on niche and role in ecosystem; useful for adaptive divergence but niche overlap can make boundaries less clear.",
        ],
      },
      {
        id: "t18-1-st2",
        question:
          "State the three domains of life and explain two differences between Archaea and Bacteria while confirming what they share.",
        modelAnswer: [
          "The domains are Archaea, Bacteria and Eukarya.",
          "Archaea and Bacteria both share prokaryotic organisation (no nucleus and no membrane-bound organelles).",
          "They differ in membrane lipid chemistry and in ribosomal RNA sequences; they also differ in cell-wall composition, with typical bacteria containing peptidoglycan while many Archaea do not.",
        ],
      },
      {
        id: "t18-1-st3",
        question:
          "Write the Eukarya taxonomic hierarchy from highest rank to lowest and explain what increasing similarity down the hierarchy means.",
        modelAnswer: [
          "Kingdom -> phylum -> class -> order -> family -> genus -> species.",
          "As rank becomes lower, groups are smaller and organisms share more detailed characteristics and generally closer evolutionary relationships.",
        ],
      },
      {
        id: "t18-1-st4",
        question:
          "Outline the characteristic features of Protoctista, Fungi, Plantae and Animalia.",
        modelAnswer: [
          "Protoctista: very diverse, mostly eukaryotic and often unicellular, with autotrophic or heterotrophic members.",
          "Fungi: eukaryotic heterotrophs by absorption, usually with chitin cell walls and often mycelial organisation.",
          "Plantae: multicellular eukaryotes with cellulose cell walls, generally photosynthetic.",
          "Animalia: multicellular eukaryotes, heterotrophic by ingestion, no cell walls, with specialised tissues.",
        ],
      },
      {
        id: "t18-1-st5",
        question:
          "How are viruses classified in this topic, and why are they not included in the three-domain system?",
        modelAnswer: [
          "Viruses are classified by nucleic acid type (DNA or RNA) and whether it is single-stranded or double-stranded.",
          "They are not included in the three-domain system because that system classifies cellular life, whereas viruses are acellular.",
        ],
      },
    ],
  },

  "t18-2": {
    noteId: "t18-2",
    syllabusNotes: [
      {
        id: "ecosystem-and-niche-definitions",
        title: "Ecosystem and niche: foundation terms for biodiversity",
        paragraphs: [
          "An ecosystem is a community of organisms interacting with each other and with the abiotic environment in a defined area. It includes biological processes and physical conditions, not just a list of species.",
          "A niche is the functional role of a species in an ecosystem, including resource use, habitat use, trophic relationships and interactions with other organisms. Two species may share habitat but differ in niche.",
          "Clear definitions of ecosystem and niche are essential because biodiversity measurements are interpreted at multiple ecological scales.",
        ],
      },
      {
        id: "levels-of-biodiversity",
        title: "Biodiversity at ecosystem, species and genetic levels",
        paragraphs: [
          "Biodiversity can be assessed at ecosystem level (variety of ecosystems and habitats), species level (number of species and their relative abundance) and genetic level (variation of alleles within populations of a species).",
          "A location with many species is not necessarily the most biodiverse if one species dominates overwhelmingly. Relative abundance matters because diversity reflects both richness and evenness.",
          "High genetic variation within a species can improve adaptive capacity under environmental change, so biodiversity assessment is broader than species counting.",
        ],
      },
      {
        id: "random-sampling-and-survey-design",
        title: "Why random sampling is essential in biodiversity surveys",
        paragraphs: [
          "Random sampling reduces investigator bias and gives each potential sampling position an equal chance of selection. This improves representativeness and supports valid statistical inference.",
          "Without randomisation, sampling may over-represent accessible or visually obvious areas and distort estimates of abundance and distribution.",
          "Good survey design also includes sufficient sample size, consistent method, and clear recording of environmental variables to allow comparison between sites.",
        ],
      },
      {
        id: "field-methods-abundance-distribution",
        title: "Field methods: quadrats, transects and mark-release-recapture",
        paragraphs: [
          "Frame quadrats are used for sessile or slow-moving organisms. You can estimate abundance by counting individuals or percentage cover within quadrat area and then scaling appropriately.",
          "Line transects record organisms touching or occurring at set points along a line and are useful for studying change across environmental gradients.",
          "Belt transects sample a strip of habitat using a series of quadrats along a line, giving richer abundance data than a single line record.",
          "For mobile animals, mark-release-recapture allows population estimation. Using the Lincoln index, estimated population size N is given by N = (number marked initially x total caught in second sample) / number of marked recaptures.",
          "Lincoln index reliability depends on assumptions: marks are retained and do not affect survival, marked individuals mix fully back into population, and the population is approximately closed between samples.",
        ],
      },
      {
        id: "correlation-and-diversity-indices",
        title: "Analysing relationships and calculating biodiversity indices",
        paragraphs: [
          "Spearman's rank correlation is used for monotonic relationships in ranked data or when parametric assumptions are unsuitable. Pearson's linear correlation is used for linear relationships in interval or ratio data with appropriate assumptions.",
          "In biodiversity contexts, these tests are used to evaluate how abiotic or biotic variables relate to species distribution or abundance. Correlation indicates association, not direct causation.",
          "Simpson's index of diversity (D) is used to quantify biodiversity by incorporating both species richness and relative abundance. At this syllabus level, higher D indicates greater biodiversity because there is a lower probability that two randomly selected individuals are from the same species.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Most biodiversity marks are lost through weak sampling logic or incorrect interpretation of statistical tools and index values.",
      items: [
        "Defining biodiversity only as 'number of species' and ignoring ecosystem range, relative abundance and genetic variation.",
        "Using non-random sampling positions while claiming conclusions are representative of the whole habitat.",
        "Applying quadrats to fast-moving animals without justification instead of using suitable methods such as mark-release-recapture.",
        "Using the Lincoln index without stating or checking key assumptions (closed population, retained marks, random mixing).",
        "Interpreting correlation as proof of causation or confusing when Spearman's rank versus Pearson's linear correlation should be used.",
      ],
    },
    workedExamples: [
      {
        id: "t18-2-ex1",
        title: "Selecting methods for contrasting organisms",
        problem: [
          "You need to estimate distribution and abundance for: (i) grass species across a moisture gradient, and (ii) a mobile beetle population in the same area. Choose suitable methods and justify each choice.",
        ],
        solution: [
          "For grass species, use line or belt transects with frame quadrats because grasses are sessile and gradient-based sampling reveals changing abundance across moisture levels.",
          "For beetles, use mark-release-recapture because beetles are mobile and cannot be reliably estimated by static quadrats.",
          "Method choice should be matched to organism mobility and ecological question (distribution along gradient versus population size estimate).",
        ],
      },
      {
        id: "t18-2-ex2",
        title: "Using the Lincoln index correctly",
        problem: [
          "In a mark-release-recapture study, 50 butterflies are marked first. In a second sample, 40 are captured and 10 are marked. Estimate population size using the Lincoln index and state one assumption needed.",
        ],
        solution: [
          "N = (50 x 40) / 10 = 200 butterflies.",
          "One required assumption is that marked butterflies have mixed randomly back into the population before the second sample. Other valid assumptions include no major births/deaths/migration and mark retention without affecting survival.",
        ],
      },
      {
        id: "t18-2-ex3",
        title: "Interpreting biodiversity statistics from field data",
        problem: [
          "Two lake margins are surveyed. Site A has 12 species but one species dominates most individuals. Site B has 10 species with more even abundances. Predict which site is likely to have the higher Simpson's index of diversity (D) and explain. Then suggest a suitable correlation test if organism abundance is compared with ranked pollution categories.",
        ],
        solution: [
          "Site B is likely to have the higher D because diversity depends on both richness and evenness, and extreme dominance lowers diversity indices.",
          "For abundance against ranked pollution categories, Spearman's rank correlation is appropriate because one variable is ordinal (ranked) and the analysis targets ranked association.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t18-2-st1",
        question:
          "Define ecosystem and niche, and explain one key difference between these terms.",
        modelAnswer: [
          "An ecosystem is the interacting biological community plus abiotic environment in a defined area.",
          "A niche is the functional role and position of a species, including resource use and interactions.",
          "An ecosystem is a system-level unit containing many species and abiotic factors, whereas a niche describes how one species functions within that system.",
        ],
      },
      {
        id: "t18-2-st2",
        question:
          "State the three levels at which biodiversity can be assessed and give one example indicator for each.",
        modelAnswer: [
          "Ecosystem level: number and range of ecosystem or habitat types in a region.",
          "Species level: species richness and relative abundance (evenness).",
          "Genetic level: allele variation within populations of a species.",
        ],
      },
      {
        id: "t18-2-st3",
        question:
          "Why is random sampling important in biodiversity work, and what risk arises if samples are not random?",
        modelAnswer: [
          "Random sampling reduces investigator bias and makes samples more representative, allowing stronger inference about the wider habitat.",
          "If sampling is not random, estimates of abundance or distribution can be systematically biased (for example over-sampling accessible patches).",
        ],
      },
      {
        id: "t18-2-st4",
        question:
          "Describe how frame quadrats, line transects, belt transects and mark-release-recapture are used to assess biodiversity.",
        modelAnswer: [
          "Frame quadrats sample sessile organisms in a defined area to estimate abundance or percentage cover.",
          "Line transects record occurrences along a line, useful across environmental gradients.",
          "Belt transects use a strip sampled by repeated quadrats to give more detailed abundance patterns.",
          "Mark-release-recapture estimates mobile population size, commonly with the Lincoln index: N = (initially marked x second sample total) / marked recaptures.",
        ],
      },
      {
        id: "t18-2-st5",
        question:
          "When would you use Spearman's rank correlation versus Pearson's linear correlation in biodiversity studies, and what does a higher Simpson's index of diversity indicate?",
        modelAnswer: [
          "Use Spearman's rank for ranked or non-parametric monotonic relationships; use Pearson's linear correlation for linear relationships in suitable interval or ratio data.",
          "A higher Simpson's index of diversity (D) indicates greater biodiversity, reflecting richer and/or more even species composition.",
        ],
      },
    ],
  },

  "t18-3": {
    noteId: "t18-3",
    syllabusNotes: [
      {
        id: "why-species-go-extinct",
        title: "Why populations and species become extinct",
        paragraphs: [
          "Extinction risk rises when populations become small, fragmented or unable to adapt quickly to environmental change. Four major pressures in this topic are climate change, competition, human hunting and habitat degradation or loss.",
          "Climate change alters temperature, rainfall, seasonality and ocean chemistry, shifting habitat suitability and food-web timing. Species that cannot migrate, acclimatise or evolve quickly may decline.",
          "Competition can increase when new species enter habitats or when resources become scarce. Stronger competitors may reduce access to food, nesting sites or breeding territories.",
          "Human hunting and exploitation can remove individuals faster than populations can replace them, especially in slow-breeding species. Habitat destruction and fragmentation reduce carrying capacity and isolate populations, increasing local extinction risk.",
        ],
      },
      {
        id: "why-maintain-biodiversity",
        title: "Why maintaining biodiversity matters",
        paragraphs: [
          "Biodiversity supports ecosystem stability, resilience and key ecosystem services such as nutrient cycling, pollination, water regulation and soil formation.",
          "Human societies also depend on biodiversity for food resources, genetic material for crop and livestock improvement, medicinal discoveries and economic value through tourism and sustainable livelihoods.",
          "There is also an ethical argument: species have intrinsic value and future generations should inherit functioning ecosystems rather than depleted natural systems.",
        ],
      },
      {
        id: "conservation-strategies-ex-situ-in-situ",
        title: "Conservation strategies: in situ and ex situ roles",
        paragraphs: [
          "Conserved areas such as national parks and marine parks protect habitats and ecological interactions in situ, allowing species to persist within functioning ecosystems.",
          "Zoos and botanic gardens support ex situ conservation by maintaining threatened species, running breeding programmes, preserving genetic diversity and contributing to education and research.",
          "Frozen zoos store genetic material such as gametes, embryos or tissue samples at very low temperature, creating long-term genetic archives for endangered species.",
          "Seed banks preserve plant genetic diversity by storing viable seeds under controlled conditions for future restoration, breeding or reintroduction programmes.",
        ],
      },
      {
        id: "assisted-reproduction-conservation",
        title: "Assisted reproduction in endangered mammals",
        paragraphs: [
          "In vitro fertilisation (IVF) allows eggs and sperm to be combined outside the body, which can be useful when natural mating is difficult or population size is very small.",
          "Embryo transfer allows embryos from one female to be implanted into another female, increasing reproductive efficiency from genetically valuable individuals.",
          "Surrogacy allows a female of the same or closely related species to carry offspring when the biological mother cannot carry pregnancy successfully.",
          "These methods do not replace habitat conservation, but they can reduce immediate extinction risk and support recovery plans when used with genetic management.",
        ],
      },
      {
        id: "invasive-species-and-global-governance",
        title: "Invasive alien species control and international conservation frameworks",
        paragraphs: [
          "Invasive alien species can outcompete native species, alter habitats, spread pathogens and disrupt food webs. Control is needed to protect native biodiversity and ecosystem function.",
          "The International Union for Conservation of Nature (IUCN) supports conservation by assessing species status (for example Red List categories), advising priorities and coordinating global expertise.",
          "CITES regulates international trade in wild fauna and flora to reduce overexploitation of threatened species. By controlling trade pressure, CITES supports long-term survival of vulnerable populations.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Conservation responses gain marks when they link a specific threat to a specific mechanism and a realistic management action.",
      items: [
        "Giving only one extinction cause and ignoring the required range of pressures (climate change, competition, hunting, habitat loss/degradation).",
        "Explaining conservation solely as 'saving rare animals' without broader biodiversity reasons such as ecosystem services, resilience and genetic resources.",
        "Confusing in situ and ex situ methods, or listing institutions (zoos, seed banks) without stating their conservation role.",
        "Describing assisted reproduction techniques without distinguishing IVF, embryo transfer and surrogacy.",
        "Naming IUCN and CITES without outlining what each organisation or agreement does in practice.",
      ],
    },
    workedExamples: [
      {
        id: "t18-3-ex1",
        title: "Linking extinction pressures to mechanisms",
        problem: [
          "A coastal bird population has fallen sharply after mangrove clearance, increased storm frequency and egg collection by humans. Explain how each pressure can contribute to extinction risk.",
        ],
        solution: [
          "Mangrove clearance removes nesting habitat and food sources, reducing breeding success and carrying capacity.",
          "Increased storm frequency (climate-related) can destroy nests, lower chick survival and increase year-to-year population fluctuation.",
          "Egg collection is direct human exploitation that reduces recruitment into the breeding population.",
          "When multiple pressures act together, recovery becomes harder because both habitat quality and population replacement rate decline.",
        ],
      },
      {
        id: "t18-3-ex2",
        title: "Designing a conservation plan using multiple tools",
        problem: [
          "An endangered mammal has low natural breeding success in the wild. Propose a strategy using at least three conservation approaches from the syllabus and justify each.",
        ],
        solution: [
          "Protect and restore habitat in a conserved area to reduce ongoing ecological pressures and allow natural behaviour in situ.",
          "Use IVF and embryo transfer to increase offspring production from genetically valuable individuals when natural mating success is low.",
          "Use surrogate mothers where needed to carry embryos if females of the endangered population have poor pregnancy success.",
          "Store gametes or embryos in a frozen zoo to preserve genetic diversity for future breeding plans.",
          "This integrated approach combines short-term demographic support with long-term habitat-based recovery.",
        ],
      },
      {
        id: "t18-3-ex3",
        title: "Explaining invasive species control and treaty roles",
        problem: [
          "A freshwater fish introduced for aquaculture is spreading and displacing native species. Explain why control is needed and how international organisations can support wider conservation.",
        ],
        solution: [
          "Control is needed because invasive species may outcompete native species for food and habitat, reduce native population sizes and alter ecosystem structure.",
          "National management can include prevention, early detection, containment and targeted removal to reduce ecological damage.",
          "IUCN provides conservation status assessments and evidence-based guidance that help prioritise threatened native species.",
          "CITES helps by regulating international trade in threatened wildlife, reducing one major route of overexploitation that can compound invasive and habitat pressures.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t18-3-st1",
        question:
          "Explain how climate change, competition, human hunting and habitat loss can each increase extinction risk.",
        modelAnswer: [
          "Climate change shifts environmental conditions and can create mismatch between species and habitat or breeding timing.",
          "Competition can reduce access to limiting resources and suppress reproduction or survival.",
          "Human hunting/exploitation can remove individuals faster than populations can replace them.",
          "Habitat loss or degradation reduces suitable area, fragments populations and lowers carrying capacity.",
        ],
      },
      {
        id: "t18-3-st2",
        question:
          "Outline reasons for maintaining biodiversity at ecosystem, economic and ethical levels.",
        modelAnswer: [
          "Ecosystem reason: biodiversity supports stable, resilient ecosystem processes and services.",
          "Economic and practical reason: biodiversity provides food resources, genetic variation for breeding, medicines and livelihoods.",
          "Ethical and long-term reason: species and ecosystems have intrinsic value and should be conserved for future generations.",
        ],
      },
      {
        id: "t18-3-st3",
        question:
          "State conservation roles of zoos, botanic gardens, conserved areas, frozen zoos and seed banks.",
        modelAnswer: [
          "Zoos and botanic gardens maintain threatened species ex situ, support breeding, education and research.",
          "Conserved areas (national parks and marine parks) protect species and ecological processes in situ.",
          "Frozen zoos preserve genetic material (for example gametes and embryos) for future conservation breeding.",
          "Seed banks store plant seeds under controlled conditions to conserve plant genetic diversity and support restoration.",
        ],
      },
      {
        id: "t18-3-st4",
        question:
          "Describe IVF, embryo transfer and surrogacy in conservation of endangered mammals.",
        modelAnswer: [
          "IVF: fertilisation occurs outside the body, then embryos are formed for transfer.",
          "Embryo transfer: embryos from donor genetics are implanted into recipient females.",
          "Surrogacy: a female carries pregnancy on behalf of another, useful when the biological mother cannot carry successfully.",
        ],
      },
      {
        id: "t18-3-st5",
        question:
          "Why should invasive alien species be controlled, and what are the roles of IUCN and CITES in conservation?",
        modelAnswer: [
          "Invasive alien species should be controlled because they can outcompete native species, disrupt ecosystems and increase extinction risk.",
          "IUCN evaluates conservation status and provides global conservation guidance and priorities.",
          "CITES regulates international trade in wild fauna and flora to reduce overexploitation of threatened species.",
        ],
      },
    ],
  },
};
