import type { NoteDraft } from "./types";

/** Full teaching notes for 9700 Topic 10 — subtopics 10.1-10.2 (see lib/notes/AUTHORING.md). */
export const BIOLOGY_TOPIC10_DRAFTS: Record<string, NoteDraft> = {
  "t10-1": {
    noteId: "t10-1",
    syllabusNotes: [
      {
        id: "infectious-disease-basics",
        title: "Infectious disease: core definitions and concepts",
        paragraphs: [
          "An infectious disease is a disease caused by a pathogen and capable of being transmitted from one host to another. A pathogen is a disease-causing organism or acellular agent, including bacteria, viruses, fungi, protoctists and some parasites.",
          "In Cambridge 9700, strong definitions matter: infection is entry and multiplication of a pathogen in a host, while disease refers to resulting damage or dysfunction. A person can be infected without showing severe symptoms at first.",
          "Transmission requires a source of pathogen, a route to a new host, and a susceptible individual. Control strategies target one or more of these steps by removing sources, blocking routes, or reducing susceptibility.",
        ],
      },
      {
        id: "named-diseases-and-pathogens",
        title: "Named examples: cholera, tuberculosis, malaria and HIV/AIDS",
        paragraphs: [
          "Cholera is caused by the bacterium Vibrio cholerae and is typically transmitted by contaminated water or food. It causes severe diarrhoea and dehydration, so rapid fluid replacement is critical.",
          "Tuberculosis (TB) is caused by Mycobacterium tuberculosis and mainly affects lungs, though other organs can be involved. It is usually spread in droplets expelled by coughing from infected individuals.",
          "Malaria is caused by Plasmodium (a protoctist), transmitted by female Anopheles mosquitoes acting as vectors. The vector is essential to transmission, so control requires both treatment and vector management.",
          "HIV infection is caused by human immunodeficiency virus. HIV targets helper T cells and progressively weakens immune function; untreated advanced infection may lead to AIDS, where susceptibility to opportunistic infections increases markedly.",
        ],
      },
      {
        id: "transmission-routes",
        title: "How infectious diseases are transmitted",
        paragraphs: [
          "Direct transmission includes person-to-person contact, droplet spread over short distances, sexual transmission, and blood-to-blood exposure (for example via shared needles).",
          "Indirect transmission includes contaminated food or water, contaminated surfaces (fomites), and vector-mediated spread where another organism carries the pathogen between hosts.",
          "In exams, identify the correct route for each disease. For example, cholera is linked to the faecal-oral route via unsafe water, malaria is vector-borne, TB is mainly airborne droplet spread, and HIV is transmitted by exchange of infected body fluids rather than routine social contact.",
        ],
      },
      {
        id: "epidemics-and-spread-factors",
        title: "Why infectious diseases spread rapidly in some populations",
        paragraphs: [
          "Spread depends on biological factors (pathogen virulence, incubation period, infectious period), social factors (crowding, travel patterns, healthcare access), and environmental factors (sanitation, clean water availability, climate and vector habitat).",
          "High population density and poor ventilation increase transmission for respiratory pathogens. Inadequate sanitation and unsafe water supplies increase faecal-oral transmission. Warm, humid conditions and standing water can increase vector populations in endemic regions.",
          "Population movement can introduce pathogens into susceptible communities. Where immunity levels are low and health systems are weak, outbreaks can escalate quickly and remain difficult to contain.",
        ],
      },
      {
        id: "public-health-control-measures",
        title: "Public-health measures to reduce transmission",
        paragraphs: [
          "Control measures include safe drinking water provision, sewage treatment, hygienic food handling, effective waste disposal, vaccination programmes, health education, and rapid case detection with appropriate isolation where needed.",
          "For vector-borne disease, control includes habitat management (removing standing water), insecticide-treated nets, indoor residual spraying, and reducing mosquito breeding sites. These actions reduce contact between vectors and susceptible humans.",
          "For directly transmitted diseases, reducing close-contact exposure, improving ventilation, and encouraging testing and early treatment are important. For blood-borne infections such as HIV, screening blood products and promoting safe injection and sexual practices are key.",
          "Good exam answers link each measure to the transmission route it interrupts rather than listing generic public-health terms.",
        ],
      },
      {
        id: "host-pathogen-environment",
        title: "The host-pathogen-environment framework",
        paragraphs: [
          "Disease patterns are best understood as interactions among host susceptibility, pathogen characteristics and environment. A pathogen may be present, but outbreak scale depends on exposure opportunity and host immunity.",
          "This framework explains why the same pathogen causes different outcomes in different regions. Improvements in sanitation, nutrition, vaccination coverage and healthcare access can reduce incidence even without eliminating the pathogen globally.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Examiners reward route-specific and mechanism-linked explanations. Marks are often lost by mixing up pathogens, transmission pathways, or prevention methods.",
      items: [
        "Describing all infectious diseases as bacterial, ignoring viral and protoctist examples such as HIV and malaria.",
        "Calling malaria a bacterial disease or stating it spreads by contaminated water; malaria is caused by Plasmodium and is vector-borne by female Anopheles mosquitoes.",
        "Saying HIV is spread by casual contact (for example touching, sharing crockery, or coughing). HIV transmission requires specific body-fluid exchange routes.",
        "Listing control methods without linking them to transmission pathways, for example mentioning clean water for a purely respiratory route question.",
        "Confusing infection with disease and failing to define pathogen accurately when asked for key terminology.",
      ],
    },
    workedExamples: [
      {
        id: "t10-1-ex1",
        title: "Matching diseases, pathogen type and transmission route",
        problem: [
          "Complete this table for four diseases: cholera, tuberculosis, malaria and HIV/AIDS. For each, state pathogen type and one principal transmission route.",
        ],
        solution: [
          "Cholera: bacterial (Vibrio cholerae); mainly faecal-oral transmission via contaminated water or food.",
          "Tuberculosis: bacterial (Mycobacterium tuberculosis); mainly airborne droplet transmission from infected individuals.",
          "Malaria: protoctist (Plasmodium); vector transmission by female Anopheles mosquitoes.",
          "HIV/AIDS: viral (human immunodeficiency virus); transmission via infected body fluids (for example unprotected sexual contact, contaminated blood exposure, shared needles, or mother-to-child routes).",
          "This style of answer earns marks because each disease is linked to both pathogen class and route.",
        ],
      },
      {
        id: "t10-1-ex2",
        title: "Explaining an outbreak using transmission factors",
        problem: [
          "A refugee camp reports a rapid rise in watery diarrhoea cases after flooding. Explain likely reasons for spread and propose focused control actions.",
        ],
        solution: [
          "Flooding can contaminate drinking water with sewage, enabling faecal-oral transmission of pathogens such as Vibrio cholerae. Overcrowding and limited sanitation accelerate spread.",
          "Focused controls are immediate provision of treated safe water, emergency chlorination and secure water storage, rapid isolation of severe cases where feasible, oral rehydration and treatment support, and urgent hygiene education (handwashing and safe food handling).",
          "Waste and sewage management must be restored quickly to remove environmental sources of reinfection.",
          "The key reasoning is that each intervention interrupts a specific transmission step rather than acting as a generic health message.",
        ],
      },
      {
        id: "t10-1-ex3",
        title: "Selecting control strategies for vector-borne disease",
        problem: [
          "A tropical district has persistent malaria despite treatment availability. Suggest and justify three additional public-health measures to reduce incidence.",
        ],
        solution: [
          "Use insecticide-treated bed nets to reduce night-time mosquito bites, lowering human-vector contact.",
          "Remove or treat standing water near homes to reduce mosquito breeding sites and vector density.",
          "Use indoor residual spraying in high-risk areas to reduce adult mosquito survival and transmission potential.",
          "These measures target the vector stage of transmission, which treatment alone does not fully control because treated individuals can be reinfected if vector pressure remains high.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t10-1-st1",
        question: "Define the terms pathogen and infectious disease.",
        modelAnswer: [
          "A pathogen is a disease-causing organism or acellular agent.",
          "An infectious disease is a disease caused by a pathogen that can be transmitted between hosts.",
        ],
      },
      {
        id: "t10-1-st2",
        question:
          "Name the pathogen type for cholera, tuberculosis, malaria and HIV/AIDS.",
        modelAnswer: [
          "Cholera: bacterium.",
          "Tuberculosis: bacterium.",
          "Malaria: protoctist (Plasmodium).",
          "HIV/AIDS: virus (HIV).",
        ],
      },
      {
        id: "t10-1-st3",
        question:
          "Compare direct and indirect transmission, giving one named disease example for each.",
        modelAnswer: [
          "Direct transmission is host-to-host transfer without an intermediate vector or contaminated environmental medium, for example TB by droplet spread or HIV by body-fluid exchange.",
          "Indirect transmission involves an intermediate route such as contaminated water/food or a vector, for example cholera via contaminated water and malaria via mosquitoes.",
        ],
      },
      {
        id: "t10-1-st4",
        question:
          "Explain why improving sanitation and water treatment reduces cholera incidence.",
        modelAnswer: [
          "Cholera is transmitted mainly by the faecal-oral route via contaminated water or food.",
          "Sanitation and water treatment remove or reduce pathogen contamination in the environment, breaking transmission from infected faeces to susceptible hosts.",
        ],
      },
      {
        id: "t10-1-st5",
        question:
          "Give three factors that can increase infectious-disease spread in a population and briefly explain each.",
        modelAnswer: [
          "Crowding and poor ventilation increase close-contact transmission, especially for respiratory diseases.",
          "Unsafe water and inadequate sewage disposal increase faecal-oral transmission.",
          "High vector density (for example mosquitoes) increases vector-borne transmission by raising contact between infectious vectors and susceptible hosts.",
        ],
      },
    ],
  },

  "t10-2": {
    noteId: "t10-2",
    syllabusNotes: [
      {
        id: "what-antibiotics-target",
        title: "What antibiotics are and what they target",
        paragraphs: [
          "Antibiotics are antimicrobial drugs used to treat bacterial infections by killing bacteria (bactericidal action) or inhibiting bacterial growth (bacteriostatic action). Their usefulness depends on selective toxicity: they target bacterial features more than host-cell features.",
          "Many bacterial targets are absent in human cells, such as peptidoglycan cell walls or bacterial ribosome structure differences. This allows therapeutic effects with acceptable host toxicity when used correctly.",
          "Antibiotics are not universal cures for infectious disease. They act on bacterial processes and therefore do not treat illnesses caused by viruses.",
        ],
      },
      {
        id: "penicillin-mode-of-action",
        title: "Penicillin: mechanism and effect on bacteria",
        paragraphs: [
          "Penicillin interferes with peptidoglycan cell wall synthesis in bacteria by inhibiting enzymes involved in cross-linking. Without proper cross-links, the wall is weakened.",
          "As bacteria grow and divide, weakened cell walls cannot resist osmotic pressure effectively. Cells may lyse, especially in hypotonic environments, leading to bacterial death.",
          "Because peptidoglycan is a bacterial feature, this mechanism illustrates selective toxicity. Different bacteria vary in susceptibility due to wall structure, enzyme variants or resistance mechanisms.",
        ],
      },
      {
        id: "why-antibiotics-do-not-affect-viruses",
        title: "Why antibiotics do not work against viruses",
        paragraphs: [
          "Viruses are acellular particles that lack peptidoglycan cell walls, ribosomes and independent metabolism. They replicate only inside host cells using host machinery.",
          "Since antibiotic targets are mainly bacterial structures or bacterial metabolic pathways, viruses generally provide no equivalent antibiotic target. Therefore antibiotics do not cure viral infections such as influenza or HIV infection.",
          "Using antibiotics for viral illness gives no therapeutic benefit and increases unnecessary selection pressure for resistant bacteria in patients and communities.",
        ],
      },
      {
        id: "antibiotic-resistance-and-selection",
        title: "How antibiotic resistance develops and spreads",
        paragraphs: [
          "Within bacterial populations, genetic variation can include alleles that reduce antibiotic susceptibility. These may arise by mutation or be acquired via horizontal gene transfer, such as plasmid-mediated transfer.",
          "When antibiotics are used, susceptible bacteria are removed more effectively than resistant bacteria. Resistant bacteria survive, reproduce and become a larger proportion of the population by natural selection.",
          "Resistance can accumulate and spread between strains and species. The result is reduced effectiveness of previously reliable treatments and increased risk of hard-to-treat infections.",
        ],
      },
      {
        id: "consequences-of-resistance",
        title: "Consequences of antibiotic resistance",
        paragraphs: [
          "Clinical consequences include treatment failure, prolonged illness, higher risk of complications, need for second-line drugs that may be more costly or toxic, and increased mortality in severe infections.",
          "Public-health consequences include longer infectious periods, greater transmission opportunities, increased hospital burden, and rising healthcare costs due to isolation needs and complex treatment.",
          "Resistance also threatens routine medical practice, including surgery, chemotherapy support and intensive care, where effective prophylactic or therapeutic antibiotics are essential.",
        ],
      },
      {
        id: "reducing-resistance-impact",
        title: "Reducing the impact of antibiotic resistance",
        paragraphs: [
          "Key measures are antibiotic stewardship (prescribe only when indicated, choose appropriate drug and dose, avoid unnecessary broad-spectrum use), full adherence to prescribed courses, and restriction of non-essential antibiotic use in agriculture.",
          "Infection prevention also reduces antibiotic demand: vaccination programmes, hygiene, handwashing, safe food and water, sterilisation, and robust hospital infection-control practices all lower case numbers and therefore selection pressure.",
          "Surveillance and rapid diagnostics help guide targeted treatment and detect emerging resistant strains early. Public education is also important so antibiotics are not demanded for viral illnesses.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "In this subtopic, marks depend on mechanistic precision and clear selection logic. Generic statements about 'stronger germs' are usually insufficient.",
      items: [
        "Saying penicillin kills viruses; penicillin targets bacterial cell-wall synthesis and has no direct antiviral effect.",
        "Writing that bacteria become resistant because they 'get used to' antibiotics, rather than explaining selection of pre-existing or acquired resistant variants.",
        "Confusing antibiotic resistance with patient tolerance; resistance is a property of bacterial populations, not of the person.",
        "Recommending antibiotics for colds or influenza, which are viral infections.",
        "Listing control steps without explaining how they reduce selection pressure or transmission.",
      ],
    },
    workedExamples: [
      {
        id: "t10-2-ex1",
        title: "Explaining penicillin and virus non-susceptibility",
        problem: [
          "Outline how penicillin acts on bacteria, then explain why the same drug does not treat viral infections.",
        ],
        solution: [
          "Penicillin inhibits enzymes needed to cross-link peptidoglycan in bacterial cell walls. This weakens the wall, and dividing bacteria may lyse due to osmotic stress.",
          "Viruses lack peptidoglycan cell walls and do not carry out independent cell-wall synthesis.",
          "Because the drug target is absent in viruses, penicillin has no direct antiviral therapeutic action.",
        ],
      },
      {
        id: "t10-2-ex2",
        title: "Natural selection model of resistance",
        problem: [
          "A mixed bacterial population contains mostly susceptible cells and a few resistant cells. An antibiotic course is started but stopped early when symptoms improve. Explain what happens to the bacterial population over time.",
        ],
        solution: [
          "Initial treatment kills many susceptible bacteria, reducing symptoms temporarily. Resistant bacteria are less affected and survive at higher relative frequency.",
          "If treatment stops early, surviving bacteria (including resistant ones) multiply. The repopulated infection is then enriched for resistant bacteria.",
          "This is natural selection: antibiotic exposure changes survival and reproduction probabilities, increasing the proportion of resistance-conferring genotypes in later generations.",
        ],
      },
      {
        id: "t10-2-ex3",
        title: "Designing a resistance-impact reduction plan",
        problem: [
          "A clinic reports rising resistant urinary-tract infections. Propose an evidence-based response plan with at least four linked actions.",
        ],
        solution: [
          "Introduce stewardship protocols so antibiotics are prescribed only when indicated and choice is guided by local susceptibility data.",
          "Expand urine culture and sensitivity testing to support targeted therapy rather than routine broad-spectrum empiric use.",
          "Audit prescribing and provide clinician feedback to reduce unnecessary duration and inappropriate drug choice.",
          "Strengthen infection-prevention practice (hand hygiene, catheter-care protocols, patient education) to reduce infection incidence and therefore antibiotic demand.",
          "Each action addresses either selection pressure or transmission, which together determine resistance burden.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t10-2-st1",
        question:
          "Outline how penicillin acts on bacteria at the cell-wall level.",
        modelAnswer: [
          "Penicillin inhibits enzymes involved in peptidoglycan cross-linking during bacterial cell-wall synthesis.",
          "The weakened wall cannot withstand osmotic stress effectively, so susceptible bacteria may lyse, especially during growth and division.",
        ],
      },
      {
        id: "t10-2-st2",
        question: "Why do antibiotics not affect viruses?",
        modelAnswer: [
          "Most antibiotics target bacterial structures or pathways such as peptidoglycan wall synthesis or bacterial ribosomes.",
          "Viruses lack these bacterial targets and rely on host-cell machinery for replication, so antibiotics are generally ineffective against viral disease.",
        ],
      },
      {
        id: "t10-2-st3",
        question:
          "Describe antibiotic resistance using natural-selection language.",
        modelAnswer: [
          "Variation in susceptibility exists in bacterial populations due to mutation or acquired genes.",
          "Antibiotic use selects for resistant bacteria by removing susceptible competitors.",
          "Resistant bacteria survive, reproduce, and pass resistance genes on, increasing resistance frequency in the population.",
        ],
      },
      {
        id: "t10-2-st4",
        question:
          "State three consequences of increasing antibiotic resistance.",
        modelAnswer: [
          "Higher risk of treatment failure and prolonged infection.",
          "Need for more expensive or more toxic second-line drugs.",
          "Increased transmission, hospital burden and mortality from difficult-to-treat infections.",
        ],
      },
      {
        id: "t10-2-st5",
        question:
          "Give four steps that can reduce the impact of antibiotic resistance and explain the rationale briefly.",
        modelAnswer: [
          "Prescribe antibiotics only when indicated and use appropriate narrow-spectrum choices where possible to reduce unnecessary selection pressure.",
          "Ensure patients follow prescribed courses correctly to reduce survival of partially treated bacterial populations.",
          "Improve infection prevention (hygiene, vaccination, sanitation, hospital control) to reduce infection incidence and antibiotic demand.",
          "Use surveillance and diagnostic testing to guide targeted treatment and detect resistant strains early.",
        ],
      },
    ],
  },
};
