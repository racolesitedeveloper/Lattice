import type { NoteDraft } from "./types";

/** Full teaching notes for 9701 Topic 18 — subtopics 18.1-18.2 (see lib/notes/AUTHORING.md). */
export const CHEMISTRY_TOPIC18_DRAFTS: Record<string, NoteDraft> = {
  "t18-1": {
    noteId: "t18-1",
    syllabusNotes: [
      {
        id: "carboxylic-acid-structure-and-acidity-context",
        title: "Carboxylic acids: functional group and core behaviour",
        paragraphs: [
          "Carboxylic acids contain the -COOH functional group (carboxyl group). In AS organic chemistry, common examples are methanoic acid, HCOOH, and ethanoic acid, CH3COOH. The functional group controls both acidity and characteristic reaction patterns.",
          "Carboxylic acids are weak Brønsted-Lowry acids in water. They donate H+ from the O-H bond to form carboxylate ions, RCOO-. Their reactions with metals, alkalis and carbonates are therefore acid-base or acid-redox processes that mirror inorganic acid chemistry but with organic ions.",
          "At this stage, reaction prediction is best done by recognising the -COOH group first: oxidation-state chemistry gives preparation routes, acid chemistry gives salt-forming reactions, and reduction converts the acid back to a primary alcohol.",
        ],
      },
      {
        id: "preparation-by-oxidation",
        title: "Preparation route 1: oxidation of primary alcohols and aldehydes",
        paragraphs: [
          "Carboxylic acids are formed by oxidation of primary alcohols and aldehydes using acidified potassium dichromate(VI), K2Cr2O7, or acidified potassium manganate(VII), KMnO4, under reflux.",
          "A primary alcohol first oxidises to aldehyde and then further to carboxylic acid if oxidising conditions are strong enough and reflux prevents loss of volatile intermediates.",
          "Example sequence from ethanol: CH3CH2OH -> CH3CHO -> CH3COOH, with [O] supplied by acidified K2Cr2O7 or acidified KMnO4.",
          "Aldehydes are therefore immediate precursors of carboxylic acids under oxidising reflux conditions.",
        ],
      },
      {
        id: "preparation-by-nitrile-hydrolysis",
        title: "Preparation route 2: hydrolysis of nitriles (acidic or alkaline, then acidification)",
        paragraphs: [
          "Nitriles, R-CN, hydrolyse to carboxylic acids under dilute acid or dilute alkali with heat. Under alkaline hydrolysis, the first organic product is carboxylate ion; acidification is then required to obtain the free carboxylic acid.",
          "With dilute acid and heat, hydrolysis directly gives carboxylic acid (plus ammonium species). With dilute alkali and heat, hydrolysis gives carboxylate salt and ammonia; adding dilute acid then protonates the carboxylate.",
          "This route is synthetically important because nitrile formation from halogenoalkanes increases carbon chain length by one, so nitrile hydrolysis provides a route to homologous carboxylic acids.",
        ],
      },
      {
        id: "preparation-by-ester-hydrolysis",
        title: "Preparation route 3: hydrolysis of esters (acidic or alkaline, then acidification)",
        paragraphs: [
          "Esters hydrolyse with dilute acid and heat to produce a carboxylic acid and an alcohol. The reaction is reversible in acidic conditions.",
          "In dilute alkali and heat, ester hydrolysis gives carboxylate salt and alcohol. This alkaline route is effectively driven to completion because the acid product is converted to carboxylate; acidification is required afterwards to regenerate the carboxylic acid.",
          "So for Topic 18 outcomes, remember the exact wording: hydrolysis can be acidic or alkaline, but when alkaline hydrolysis is used, acidification is needed to isolate the carboxylic acid.",
        ],
      },
      {
        id: "reactions-with-metals-alkalis-carbonates",
        title: "Characteristic reactions with reactive metals, alkalis and carbonates",
        paragraphs: [
          "With reactive metals, carboxylic acids form carboxylate salts and hydrogen gas. Example: 2CH3COOH + Mg -> (CH3COO)2Mg + H2. This is a redox process where metal is oxidised and H+ is reduced.",
          "With alkalis, carboxylic acids undergo neutralisation to give carboxylate salts and water. Example: CH3COOH + NaOH -> CH3COONa + H2O.",
          "With carbonates, they form salt, water and carbon dioxide, with effervescence as key observation. Example: 2CH3COOH + Na2CO3 -> 2CH3COONa + H2O + CO2.",
          "These equations test both organic functional-group understanding and standard acid stoichiometry from earlier topics.",
        ],
      },
      {
        id: "esterification-and-reduction",
        title: "Esterification with alcohols and reduction with LiAlH4",
        paragraphs: [
          "Carboxylic acids react with alcohols in the presence of concentrated H2SO4 catalyst to form esters and water (Fischer esterification). Example: CH3COOH + CH3CH2OH <=> CH3COOCH2CH3 + H2O.",
          "Concentrated sulfuric acid acts as catalyst (and dehydrating agent in practice), and heating under reflux improves rate. The reaction is reversible, so product yield can be improved by removing water or using excess reactant.",
          "Carboxylic acids can be reduced by LiAlH4 to give primary alcohols. Example: CH3COOH + 4[H] -> CH3CH2OH + H2O (organic shorthand).",
          "This reduction closes a useful interconversion loop: primary alcohol -> aldehyde -> carboxylic acid by oxidation, and carboxylic acid -> primary alcohol by strong reduction.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Examiners reward complete route-and-condition statements and chemically balanced equations. Most lost marks come from omitting acidification steps after alkaline hydrolysis, or confusing reaction type (acid-base, condensation, redox).",
      items: [
        "Stating nitrile or ester alkaline hydrolysis gives carboxylic acid directly without mentioning carboxylate formation and required acidification.",
        "Using distillation conditions for forming carboxylic acids from primary alcohols; oxidation to acids requires reflux with acidified K2Cr2O7 or acidified KMnO4.",
        "Writing carboxylic-acid + carbonate equations without CO2 product or incorrect stoichiometric coefficients.",
        "Calling esterification irreversible under standard reflux conditions; it is an equilibrium reaction.",
        "Using NaBH4 for reduction of carboxylic acids; the required reducing agent here is LiAlH4.",
      ],
    },
    workedExamples: [
      {
        id: "t18-1-ex1",
        title: "Planning and writing equations for carboxylic-acid preparation routes",
        problem: [
          "Using compounds with two-carbon chains, write one equation each for preparing ethanoic acid by (a) oxidation of an aldehyde, (b) nitrile hydrolysis under alkaline conditions followed by acidification, and (c) acidic hydrolysis of an ester.",
        ],
        solution: [
          "(a) Oxidation route: CH3CHO + [O] -> CH3COOH (acidified K2Cr2O7 or acidified KMnO4, reflux).",
          "(b) Nitrile alkaline hydrolysis gives carboxylate first: CH3CN + 2H2O + OH- -> CH3COO- + NH3. Then acidification: CH3COO- + H+ -> CH3COOH.",
          "(c) Acidic ester hydrolysis example: CH3COOCH3 + H2O <=> CH3COOH + CH3OH (dilute acid, heat).",
          "These equations collectively cover all three required preparation outcomes and show where acidification is required.",
        ],
      },
      {
        id: "t18-1-ex2",
        title: "Using reaction class to predict products and observations",
        problem: [
          "Ethanoic acid is reacted separately with (i) magnesium ribbon, (ii) sodium hydroxide solution, and (iii) sodium carbonate solution. Write balanced equations and state one key observation for each where relevant.",
        ],
        solution: [
          "(i) 2CH3COOH + Mg -> (CH3COO)2Mg + H2. Observation: effervescence of hydrogen gas and gradual dissolution of magnesium.",
          "(ii) CH3COOH + NaOH -> CH3COONa + H2O. Observation: neutralisation (no gas), pH moves toward neutral at equivalence.",
          "(iii) 2CH3COOH + Na2CO3 -> 2CH3COONa + H2O + CO2. Observation: brisk effervescence of carbon dioxide.",
          "Recognising acid chemistry patterns allows rapid equation construction even with organic acids.",
        ],
      },
      {
        id: "t18-1-ex3",
        title: "Interconversion between acid, ester and alcohol",
        problem: [
          "Write equations for (a) esterification of ethanoic acid with ethanol, and (b) reduction of ethanoic acid to ethanol. Name reagents/conditions for each.",
        ],
        solution: [
          "(a) CH3COOH + CH3CH2OH <=> CH3COOCH2CH3 + H2O, with concentrated H2SO4 catalyst and heat (reflux).",
          "(b) CH3COOH + 4[H] -> CH3CH2OH + H2O, with LiAlH4 as reducing agent (followed by work-up).",
          "Part (a) is condensation (esterification) and reversible; part (b) is reduction to a primary alcohol and requires strong hydride reagent.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t18-1-st1",
        question:
          "State three syllabus routes to carboxylic acids in Topic 18.1, including one key reagent/condition detail for each.",
        modelAnswer: [
          "Route 1: oxidation of primary alcohols/aldehydes using acidified K2Cr2O7 or acidified KMnO4 under reflux.",
          "Route 2: hydrolysis of nitriles with dilute acid or dilute alkali and heat; if alkaline hydrolysis is used, acidification is needed to obtain the carboxylic acid.",
          "Route 3: hydrolysis of esters with dilute acid or dilute alkali and heat; after alkaline hydrolysis, acidification is required to form the free carboxylic acid.",
        ],
      },
      {
        id: "t18-1-st2",
        question:
          "Write balanced equations for ethanoic acid reacting with (a) sodium hydroxide and (b) sodium carbonate.",
        modelAnswer: [
          "(a) CH3COOH + NaOH -> CH3COONa + H2O.",
          "(b) 2CH3COOH + Na2CO3 -> 2CH3COONa + H2O + CO2.",
        ],
      },
      {
        id: "t18-1-st3",
        question:
          "What are the products when ethanoic acid reacts with magnesium, and what type of process is this in redox terms?",
        modelAnswer: [
          "Products are magnesium ethanoate and hydrogen: 2CH3COOH + Mg -> (CH3COO)2Mg + H2.",
          "This is a redox process: Mg is oxidised to Mg2+ and acidic H+ is reduced to H2.",
        ],
      },
      {
        id: "t18-1-st4",
        question:
          "Define esterification in this context and write the equation for ethanoic acid with propan-1-ol.",
        modelAnswer: [
          "Esterification is a condensation reaction between a carboxylic acid and an alcohol, catalysed by concentrated H2SO4, to form an ester and water.",
          "CH3COOH + CH3CH2CH2OH <=> CH3COOCH2CH2CH3 + H2O.",
        ],
      },
      {
        id: "t18-1-st5",
        question:
          "State the reagent used to reduce carboxylic acids at this level and name the organic product type formed.",
        modelAnswer: [
          "The reagent is LiAlH4 (lithium aluminium hydride).",
          "Carboxylic acids are reduced to primary alcohols.",
        ],
      },
    ],
  },

  "t18-2": {
    noteId: "t18-2",
    syllabusNotes: [
      {
        id: "ester-structure-and-naming",
        title: "Ester functional group and naming pattern",
        paragraphs: [
          "Esters contain the -COO- linkage between two carbon groups, with general form RCOOR'. They are formed from carboxylic-acid derivatives and have characteristic sweet/fruity odours in many low-Mr examples.",
          "In this syllabus section, esters are named by writing the alkyl group from the alcohol first, then the carboxylate part from the acid: for example ethyl ethanoate, propyl methanoate.",
          "Recognising ester structure quickly helps predict both synthesis (condensation from acid + alcohol) and breakdown (hydrolysis under acidic or alkaline conditions).",
        ],
      },
      {
        id: "ester-formation-conditions",
        title: "Required ester formation route: condensation of alcohol and carboxylic acid",
        paragraphs: [
          "The required preparation route is the condensation reaction between an alcohol and a carboxylic acid in the presence of concentrated H2SO4 catalyst, usually with heat under reflux.",
          "General equation: RCOOH + R'OH <=> RCOOR' + H2O. Example: CH3COOH + CH3CH2OH <=> CH3COOCH2CH3 + H2O.",
          "Because this is an equilibrium reaction, practical yield depends on conditions. Using excess of one reactant or removing water shifts equilibrium toward ester formation.",
          "This route links directly to Topic 18.1 esterification outcome and should be recalled with both reagent and condition details.",
        ],
      },
      {
        id: "acid-hydrolysis-of-esters",
        title: "Hydrolysis of esters with dilute acid and heat",
        paragraphs: [
          "Acid hydrolysis of an ester is the reverse of esterification. With dilute acid catalyst and heat, ester and water form carboxylic acid and alcohol.",
          "General equation: RCOOR' + H2O <=> RCOOH + R'OH (dilute acid, heat). The reaction is reversible and reaches equilibrium.",
          "For example, ethyl ethanoate hydrolyses to ethanoic acid and ethanol: CH3COOCH2CH3 + H2O <=> CH3COOH + CH3CH2OH.",
          "When exam questions ask for acidic hydrolysis, include both products explicitly as carboxylic acid plus alcohol.",
        ],
      },
      {
        id: "alkaline-hydrolysis-of-esters",
        title: "Hydrolysis of esters with dilute alkali and heat",
        paragraphs: [
          "Alkaline hydrolysis (saponification) uses dilute alkali, such as NaOH(aq), with heat. It produces a carboxylate salt and an alcohol.",
          "General equation: RCOOR' + OH- -> RCOO- + R'OH. In sodium hydroxide, the organic salt is sodium carboxylate (RCOONa).",
          "For ethyl ethanoate: CH3COOCH2CH3 + OH- -> CH3COO- + CH3CH2OH (or CH3COOCH2CH3 + NaOH -> CH3COONa + CH3CH2OH).",
          "Unlike acidic hydrolysis, this route is effectively irreversible in practice because carboxylate ion is formed and does not readily re-esterify under alkaline conditions.",
        ],
      },
      {
        id: "comparing-acidic-and-alkaline-hydrolysis",
        title: "Comparing acidic and alkaline hydrolysis outcomes",
        paragraphs: [
          "Both hydrolysis routes require heat and produce an alcohol component from the ester alkoxy group. The main difference is the carboxyl-containing product: acid route gives carboxylic acid, alkaline route gives carboxylate salt.",
          "Acidic hydrolysis is reversible and often equilibrium-limited. Alkaline hydrolysis is driven by carboxylate formation and is treated as one-way under standard conditions.",
          "If the free carboxylic acid is required after alkaline hydrolysis, the reaction mixture is acidified to protonate the carboxylate ion.",
          "These distinctions are frequently tested using equation completion, reagent choice, and product identification from named esters.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Ester questions are usually high-yield marks if candidates keep route, conditions, and product forms precise. Errors mostly come from swapping acid/alkali outcomes or omitting equilibrium context.",
      items: [
        "Naming esters in reverse order (acid name first) instead of alkyl then carboxylate format.",
        "Writing acidic hydrolysis products as carboxylate salt instead of carboxylic acid.",
        "Writing alkaline hydrolysis products as carboxylic acid without showing carboxylate (or without subsequent acidification step).",
        "Leaving out concentrated H2SO4 catalyst when describing ester formation from alcohol + carboxylic acid.",
        "Treating all hydrolysis pathways as equally reversible; alkaline hydrolysis is effectively irreversible under normal conditions.",
      ],
    },
    workedExamples: [
      {
        id: "t18-2-ex1",
        title: "Forming an ester from named reactants",
        problem: [
          "Write the equation and conditions for preparing propyl ethanoate from a carboxylic acid and an alcohol.",
        ],
        solution: [
          "Propyl ethanoate is formed from ethanoic acid and propan-1-ol.",
          "Equation: CH3COOH + CH3CH2CH2OH <=> CH3COOCH2CH2CH3 + H2O.",
          "Conditions: concentrated H2SO4 catalyst and heat (typically reflux).",
          "This is a condensation (esterification) equilibrium reaction.",
        ],
      },
      {
        id: "t18-2-ex2",
        title: "Predicting products of acid and alkaline hydrolysis",
        problem: [
          "Ethyl methanoate, HCOOCH2CH3, is hydrolysed under (i) dilute acid and heat and (ii) dilute NaOH and heat. Write equations and identify organic products in each case.",
        ],
        solution: [
          "(i) Acid hydrolysis: HCOOCH2CH3 + H2O <=> HCOOH + CH3CH2OH. Organic products are methanoic acid and ethanol.",
          "(ii) Alkaline hydrolysis: HCOOCH2CH3 + NaOH -> HCOONa + CH3CH2OH (or ionic form with HCOO-). Organic products are sodium methanoate (carboxylate salt) and ethanol.",
          "If free methanoic acid is needed after (ii), acidification is required: HCOO- + H+ -> HCOOH.",
        ],
      },
      {
        id: "t18-2-ex3",
        title: "Using hydrolysis data to deduce ester identity",
        problem: [
          "An ester E gives ethanol and sodium propanoate on alkaline hydrolysis. Deduce the structural formula of E and state its systematic name.",
        ],
        solution: [
          "Ethanol as alcohol product means the alkoxy part is -OCH2CH3 (ethyl group from alcohol side).",
          "Sodium propanoate means the acyl part is CH3CH2COO- (from propanoic acid).",
          "So ester structure is CH3CH2COOCH2CH3.",
          "The ester is ethyl propanoate.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t18-2-st1",
        question:
          "State the required route (reagents and conditions) for preparing esters in Topic 18.2.",
        modelAnswer: [
          "Esters are prepared by condensation of an alcohol with a carboxylic acid using concentrated H2SO4 catalyst and heat (typically reflux).",
          "General equation: RCOOH + R'OH <=> RCOOR' + H2O.",
        ],
      },
      {
        id: "t18-2-st2",
        question:
          "Write equations for formation and acid hydrolysis of ethyl ethanoate.",
        modelAnswer: [
          "Formation: CH3COOH + CH3CH2OH <=> CH3COOCH2CH3 + H2O (concentrated H2SO4, heat).",
          "Acid hydrolysis: CH3COOCH2CH3 + H2O <=> CH3COOH + CH3CH2OH (dilute acid, heat).",
        ],
      },
      {
        id: "t18-2-st3",
        question:
          "How do the products differ between acidic and alkaline hydrolysis of an ester?",
        modelAnswer: [
          "Acidic hydrolysis gives a carboxylic acid and an alcohol.",
          "Alkaline hydrolysis gives a carboxylate salt and an alcohol (with acidification needed if the free carboxylic acid is required).",
        ],
      },
      {
        id: "t18-2-st4",
        question:
          "Name the ester CH3CH2COOCH3 and identify the alcohol and carboxylic acid from which it can be formed.",
        modelAnswer: [
          "The ester is methyl propanoate.",
          "It can be formed from methanol (alcohol part) and propanoic acid (carboxylic-acid part).",
        ],
      },
      {
        id: "t18-2-st5",
        question:
          "Why is alkaline ester hydrolysis often treated as irreversible, whereas acid hydrolysis is reversible?",
        modelAnswer: [
          "In alkaline hydrolysis, the carboxylic-acid product is converted to carboxylate ion, which does not readily re-form the ester under basic conditions.",
          "Acid hydrolysis and esterification are reverse reactions of the same equilibrium system, so acidic hydrolysis is reversible.",
        ],
      },
    ],
  },
};
