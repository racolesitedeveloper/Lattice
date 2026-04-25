import type { NoteDraft } from "./types";

/** Full teaching notes for 9701 Topic 32 — subtopics 32.1-32.2 (see lib/notes/AUTHORING.md). */
export const CHEMISTRY_TOPIC32_DRAFTS: Record<string, NoteDraft> = {
  "t32-1": {
    noteId: "t32-1",
    syllabusNotes: [
      {
        id: "alcohols-with-acyl-chlorides-core-reaction",
        title: "Alcohols react with acyl chlorides to form esters",
        paragraphs: [
          "A key A Level extension reaction is ester formation when an alcohol reacts with an acyl chloride. The alcohol oxygen acts as a nucleophile and attacks the electron-deficient carbonyl carbon in the acyl chloride, so this is an addition-elimination process at the acyl group.",
          "The immediate organic product is an ester, and hydrogen chloride is formed as a by-product. The reaction is usually fast at room temperature because acyl chlorides are highly reactive toward nucleophiles.",
          "You should be able to recognise this transformation quickly in synthesis routes: alcohol + acyl chloride gives ester, not ether or carboxylic acid.",
        ],
      },
      {
        id: "ethyl-ethanoate-example-and-equation",
        title: "Required example: formation of ethyl ethanoate",
        paragraphs: [
          "The named example is ethyl ethanoate, formed when ethanol reacts with ethanoyl chloride. A suitable equation is CH₃COCl + CH₃CH₂OH → CH₃COOCH₂CH₃ + HCl.",
          "Name construction confirms product identity: the alkyl part (ethyl) comes from the alcohol, while the -oate part (ethanoate) comes from the acyl chloride (ethanoyl).",
          "This route is distinct from acid-catalysed esterification of alcohols with carboxylic acids, which is reversible and slower. Acyl chloride ester formation is typically much more vigorous and does not require concentrated H₂SO₄ catalyst.",
        ],
      },
      {
        id: "conditions-observations-and-mechanistic-logic",
        title: "Conditions, observations, and mechanistic reasoning",
        paragraphs: [
          "Typical school-laboratory conditions are room temperature with dry glassware where possible; water must be minimised because acyl chlorides hydrolyse readily and would reduce ester yield.",
          "A common observation is steamy, acidic fumes from HCl formation. In synthetic work, a base or excess alcohol can be used to limit acid build-up and improve handling.",
          "Mechanistically, the alcohol adds first to the carbonyl carbon, then chloride is eliminated as the C=O bond is reformed. This explanation earns credit where mark schemes ask for reaction type or why acyl chlorides react readily.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "This short subtopic is often tested through equation writing and pathway analysis. Examiners reward precise product naming and recognition that acyl chlorides react by addition-elimination to give esters rapidly.",
      items: [
        "Writing the by-product as Cl₂ or water, instead of HCl.",
        "Misnaming the ester by swapping acid and alcohol contributions in the name.",
        "Using carboxylic-acid esterification conditions (concentrated H₂SO₄, reflux equilibrium language) for an acyl chloride reaction.",
        "Ignoring hydrolysis competition and therefore proposing wet conditions without consequence.",
        "Calling the mechanism simple substitution without mentioning addition-elimination at the carbonyl carbon.",
      ],
    },
    workedExamples: [
      {
        id: "t32-1-ex1",
        title: "Writing the required ethyl ethanoate equation",
        problem: [
          "Write the equation for the formation of ethyl ethanoate from an alcohol and an acyl chloride, and name the reagents.",
        ],
        solution: [
          "Use ethanol as the alcohol and ethanoyl chloride as the acyl chloride.",
          "Equation: CH₃COCl + CH₃CH₂OH → CH₃COOCH₂CH₃ + HCl.",
          "The ester product is ethyl ethanoate. The by-product is hydrogen chloride.",
        ],
      },
      {
        id: "t32-1-ex2",
        title: "Deriving ester names from reactant parts",
        problem: [
          "Propanoyl chloride reacts with methanol. Predict the ester name and explain the naming logic.",
        ],
        solution: [
          "The alcohol contributes the alkyl part, so methanol gives methyl-.",
          "The acyl chloride contributes the carboxylate part, so propanoyl chloride gives propanoate.",
          "The ester is methyl propanoate. Hydrogen chloride is also formed.",
        ],
      },
      {
        id: "t32-1-ex3",
        title: "Choosing suitable conditions for ester synthesis",
        problem: [
          "A student proposes heating ethanoyl chloride with ethanol under reflux in wet apparatus. Evaluate this plan and improve it.",
        ],
        solution: [
          "Wet apparatus is unsuitable because ethanoyl chloride hydrolyses with water, reducing ester yield and generating extra HCl.",
          "Strong heating is usually unnecessary; acyl chloride reactions with alcohols are rapid at room temperature.",
          "A better approach is controlled addition under dry conditions at room temperature, with appropriate handling of HCl fumes.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t32-1-st1",
        question:
          "State the reaction type and products when an alcohol reacts with an acyl chloride.",
        modelAnswer: [
          "The reaction is addition-elimination at the acyl carbonyl.",
          "Products are an ester and hydrogen chloride (HCl).",
        ],
      },
      {
        id: "t32-1-st2",
        question:
          "Write the equation for ethanoyl chloride reacting with ethanol.",
        modelAnswer: [
          "CH₃COCl + CH₃CH₂OH → CH₃COOCH₂CH₃ + HCl.",
        ],
      },
      {
        id: "t32-1-st3",
        question:
          "Why are dry conditions preferred for making esters from acyl chlorides?",
        modelAnswer: [
          "Acyl chlorides hydrolyse readily with water to carboxylic acids and HCl, so water competes with ester formation and lowers yield.",
        ],
      },
      {
        id: "t32-1-st4",
        question:
          "Ethanol reacts with propanoyl chloride. Name the ester formed.",
        modelAnswer: [
          "Ethyl propanoate.",
        ],
      },
      {
        id: "t32-1-st5",
        question:
          "Give one clear difference between ester formation using acyl chlorides and esterification using carboxylic acids.",
        modelAnswer: [
          "Acyl chlorides react rapidly at room temperature and produce HCl directly, while carboxylic acid esterification is slower, reversible, and usually acid-catalysed with heating.",
        ],
      },
    ],
  },

  "t32-2": {
    noteId: "t32-2",
    syllabusNotes: [
      {
        id: "phenol-from-diazonium-route",
        title: "Preparation of phenol via diazonium chemistry",
        paragraphs: [
          "A required preparation route starts from phenylamine. First, phenylamine is treated below 10 °C with nitrous acid (generated in situ from NaNO₂ and dilute acid) to form benzenediazonium salt.",
          "Second, warming the diazonium solution with water hydrolyses the diazonium group and gives phenol. Temperature control in the first step is essential because diazonium salts are most stable in cold aqueous solution.",
          "This sequence links aromatic amine chemistry to phenol synthesis and is frequently examined as a multi-step pathway with reagent and condition recall.",
        ],
      },
      {
        id: "acid-base-behaviour-and-relative-acidity",
        title: "Acidity of phenol and comparison with water and ethanol",
        paragraphs: [
          "Phenol is a weak acid: it reacts with aqueous NaOH to form sodium phenoxide, but it is not acidic enough to release CO₂ from carbonate under normal conditions.",
          "Phenol also reacts with sodium metal to give sodium phenoxide and H₂, as do water and ethanol. However, relative acidity follows phenol > water > ethanol for this syllabus treatment.",
          "The key explanation is stabilisation of the conjugate base. The negative charge in phenoxide ion is delocalised into the aromatic ring, making deprotonation more favourable than in ethanol where ethoxide has no comparable resonance stabilisation.",
        ],
      },
      {
        id: "electrophilic-substitution-of-phenol",
        title: "Nitration and bromination of phenol under mild conditions",
        paragraphs: [
          "The -OH group donates electron density into the benzene ring by lone-pair interaction, strongly activating the ring toward electrophilic substitution and directing substitution to the 2-, 4-, and 6-positions.",
          "Therefore phenol nitrates with dilute HNO₃ at room temperature to give mainly a mixture of 2-nitrophenol and 4-nitrophenol. Phenol also brominates with bromine water at room temperature to form 2,4,6-tribromophenol.",
          "These conditions are milder than benzene reactions because benzene lacks the activating -OH group. Benzene typically requires halogen carrier or mixed-acid forcing conditions, while phenol reacts without those strong activation systems.",
        ],
      },
      {
        id: "azo-coupling-reaction",
        title: "Coupling with diazonium salts to form azo compounds",
        paragraphs: [
          "In alkaline solution, phenol is converted partly to phenoxide, which is an even stronger electron donor to the ring. This makes the aromatic ring highly reactive toward coupling with diazonium ions.",
          "Reaction of phenol in NaOH(aq) with a diazonium salt gives an azo compound containing the -N=N- linkage. These products are often intensely coloured, which is why azo chemistry is important in dye chemistry.",
          "In mechanism terms this is electrophilic aromatic substitution by the diazonium electrophile, followed by restoration of aromaticity in the coupled product.",
        ],
      },
      {
        id: "applying-phenol-patterns-to-other-phenolics",
        title: "Extending reactivity patterns to other phenolic compounds",
        paragraphs: [
          "The same core ideas apply to other phenolic systems such as naphthols: weak acidity compared with carboxylic acids, reaction with NaOH to form phenoxide-type salts, and high ring reactivity toward electrophiles.",
          "Because the hydroxyl group activates aromatic rings, nitration, bromination, and azo coupling of phenolic compounds generally occur under milder conditions than for unsubstituted benzene analogues.",
          "When making predictions for unfamiliar phenolics, first identify the phenolic -OH on an aromatic system, then apply directing and activation logic before proposing major products.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Phenol questions combine synthesis, acidity, and aromatic substitution. Marks are usually lost when candidates treat phenol either as a simple alcohol or as unactivated benzene, rather than recognising how the phenolic -OH changes both acidity and ring reactivity.",
      items: [
        "Omitting the below 10 °C condition for diazonium formation from phenylamine.",
        "Stating phenol reacts with NaOH because it is a strong acid; phenol is weakly acidic but sufficiently acidic for reaction with hydroxide.",
        "Reversing relative acidity order and claiming ethanol is more acidic than phenol.",
        "Using benzene nitration/bromination conditions for phenol despite ring activation by -OH.",
        "Forgetting that phenol directs mainly to 2-, 4-, and 6-positions in electrophilic substitution.",
      ],
    },
    workedExamples: [
      {
        id: "t32-2-ex1",
        title: "Planning phenol synthesis from phenylamine",
        problem: [
          "Give a two-step route from phenylamine to phenol, including key reagents and temperature conditions.",
        ],
        solution: [
          "Step 1: Generate nitrous acid in situ using NaNO₂ and dilute acid, and react with phenylamine below 10 °C to form benzenediazonium salt.",
          "Step 2: Warm the diazonium solution with water to hydrolyse the diazonium group and form phenol.",
          "The low-temperature first step is essential to control diazonium formation before hydrolysis.",
        ],
      },
      {
        id: "t32-2-ex2",
        title: "Explaining relative acidity of water, phenol, and ethanol",
        problem: [
          "Arrange water, phenol, and ethanol in order of increasing acidity and justify the order using conjugate-base stability.",
        ],
        solution: [
          "Increasing acidity: ethanol < water < phenol.",
          "Phenol is most acidic because phenoxide ion is resonance-stabilised by delocalisation of negative charge into the aromatic ring.",
          "Ethoxide has no equivalent resonance stabilisation and is destabilised by electron-releasing alkyl effect, so ethanol is least acidic.",
        ],
      },
      {
        id: "t32-2-ex3",
        title: "Predicting products and conditions for phenol substitution",
        problem: [
          "Predict major products when phenol reacts with (i) dilute HNO₃ at room temperature and (ii) Br₂(aq) at room temperature, and explain why these conditions are milder than for benzene.",
        ],
        solution: [
          "(i) Dilute HNO₃ gives mainly 2-nitrophenol and 4-nitrophenol.",
          "(ii) Br₂(aq) gives 2,4,6-tribromophenol.",
          "The -OH group activates the ring by donating electron density and directs electrophiles to 2, 4, and 6 positions, so reaction occurs readily without the harsher catalyst systems required for benzene.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t32-2-st1",
        question:
          "State the reagents and temperature condition for converting phenylamine into benzenediazonium salt, then into phenol.",
        modelAnswer: [
          "Use HNO₂ (or NaNO₂ with dilute acid) below 10 °C to form the diazonium salt from phenylamine.",
          "Then warm with water to hydrolyse the diazonium salt and produce phenol.",
        ],
      },
      {
        id: "t32-2-st2",
        question:
          "Write one equation showing phenol acting as an acid with (a) NaOH(aq) and (b) Na(s).",
        modelAnswer: [
          "(a) C₆H₅OH + NaOH → C₆H₅ONa + H₂O.",
          "(b) 2C₆H₅OH + 2Na → 2C₆H₅ONa + H₂.",
        ],
      },
      {
        id: "t32-2-st3",
        question:
          "Give the order of acidity for ethanol, water, and phenol, and one reason for phenol’s position.",
        modelAnswer: [
          "Ethanol < water < phenol.",
          "Phenol is more acidic because its conjugate base (phenoxide) is resonance-stabilised by delocalisation into the aromatic ring.",
        ],
      },
      {
        id: "t32-2-st4",
        question:
          "State the products of phenol with dilute HNO₃(aq) at room temperature and with Br₂(aq) at room temperature.",
        modelAnswer: [
          "With dilute HNO₃(aq): mainly 2-nitrophenol and 4-nitrophenol.",
          "With Br₂(aq): 2,4,6-tribromophenol.",
        ],
      },
      {
        id: "t32-2-st5",
        question:
          "How would you use Topic 32 phenol chemistry to predict reactions of naphthol?",
        modelAnswer: [
          "Treat naphthol as a phenolic aromatic compound: it is weakly acidic, forms phenoxide-type salts with NaOH, and its -OH group activates the ring toward electrophilic substitution and azo coupling under relatively mild conditions.",
        ],
      },
    ],
  },
};
