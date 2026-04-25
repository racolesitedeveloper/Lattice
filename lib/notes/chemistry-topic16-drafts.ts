import type { NoteDraft } from "./types";

/** Full teaching notes for 9701 Topic 16 — subtopic 16.1 (see lib/notes/AUTHORING.md). */
export const CHEMISTRY_TOPIC16_DRAFTS: Record<string, NoteDraft> = {
  "t16-1": {
    noteId: "t16-1",
    syllabusNotes: [
      {
        id: "alcohol-structure-and-classification",
        title: "Alcohol structure and classification: primary, secondary and tertiary",
        paragraphs: [
          "An alcohol contains the hydroxyl functional group, -OH, bonded to a saturated carbon atom. In this topic, classification is based on the substitution level of the carbon that carries -OH, not on the total carbon number in the molecule.",
          "A primary alcohol has the -OH-bearing carbon attached to one alkyl group (or none in methanol), for example ethanol, CH3CH2OH. A secondary alcohol has that carbon attached to two alkyl groups, for example propan-2-ol, CH3CH(OH)CH3. A tertiary alcohol has that carbon attached to three alkyl groups, for example 2-methylpropan-2-ol, (CH3)3COH.",
          "Polyhydric alcohols contain more than one hydroxyl group, for example ethane-1,2-diol, HOCH2CH2OH. Classification is still applied to each -OH-bearing carbon where relevant.",
        ],
      },
      {
        id: "preparation-routes",
        title: "How alcohols are prepared in this syllabus",
        paragraphs: [
          "Alcohols are formed by electrophilic addition of steam to alkenes using H3PO4 catalyst at elevated temperature and pressure. Example: CH2=CH2 + H2O(g) -> CH3CH2OH.",
          "Cold dilute acidified potassium manganate(VII) adds -OH across C=C to produce a diol, for example CH2=CH2 -> HOCH2CH2OH. This is oxidation of an alkene under mild conditions.",
          "Halogenoalkanes give alcohols by nucleophilic substitution with aqueous NaOH and heat, for example CH3CH2Br + OH- -> CH3CH2OH + Br-.",
          "Carbonyl reduction gives alcohols: aldehydes reduce to primary alcohols and ketones reduce to secondary alcohols using NaBH4 or LiAlH4. Example: CH3CHO + 2[H] -> CH3CH2OH and CH3COCH3 + 2[H] -> CH3CH(OH)CH3.",
          "Carboxylic acids reduce to primary alcohols using LiAlH4, for example CH3COOH + 4[H] -> CH3CH2OH + H2O.",
          "Ester hydrolysis with dilute acid or dilute alkali and heat also produces alcohols. Acid hydrolysis gives alcohol plus carboxylic acid; alkaline hydrolysis gives alcohol plus carboxylate salt.",
        ],
      },
      {
        id: "core-reactions-of-alcohols",
        title: "Core reactions of alcohols: combustion, substitution, sodium and dehydration",
        paragraphs: [
          "Alcohols combust in oxygen. Complete combustion forms CO2 and H2O, for example C2H5OH + 3O2 -> 2CO2 + 3H2O. In limited oxygen, incomplete combustion gives CO and/or C with H2O.",
          "Alcohols are converted to halogenoalkanes by replacing -OH with halogen. Required reagents include HX(g), KCl with concentrated H2SO4 or concentrated H3PO4, PCl3 with heat, PCl5, and SOCl2. Example: C2H5OH + HBr -> C2H5Br + H2O.",
          "Alcohols react with sodium metal to form sodium alkoxides and hydrogen: 2ROH + 2Na -> 2RONa + H2. Effervescence of H2 confirms reaction of the O-H proton with reactive metal.",
          "Dehydration removes H2O to form alkenes using a heated catalyst (for example Al2O3) or concentrated acid. Example: CH3CH2OH -> CH2=CH2 + H2O.",
        ],
      },
      {
        id: "oxidation-patterns-and-distinguishing-tests",
        title: "Oxidation patterns and distinguishing primary, secondary and tertiary alcohols",
        paragraphs: [
          "Acidified K2Cr2O7 or acidified KMnO4 oxidises primary and secondary alcohols but not tertiary alcohols under ordinary syllabus conditions.",
          "A primary alcohol first forms an aldehyde on controlled oxidation and distillation. With stronger conditions or reflux, the aldehyde is further oxidised to carboxylic acid.",
          "A secondary alcohol oxidises to a ketone. Ketones do not oxidise further under these conditions without C-C bond cleavage.",
          "A tertiary alcohol does not undergo oxidation by these oxidants in standard laboratory conditions because there is no hydrogen on the carbon bearing -OH required for the usual oxidation pathway.",
          "A practical distinguishing reaction is warming with acidified K2Cr2O7: orange Cr2O7 2- changes to green Cr3+ for primary and secondary alcohols, while tertiary alcohol shows no corresponding oxidation colour change.",
          "When aldehyde is the intended product from a primary alcohol, distillation is used to remove it as formed and limit further oxidation. Reflux is used when full oxidation to carboxylic acid is required.",
        ],
      },
      {
        id: "esterification-iodoform-and-acidity",
        title: "Ester formation, the iodoform reaction and acidity relative to water",
        paragraphs: [
          "Alcohols form esters with carboxylic acids in a condensation reaction catalysed by concentrated H2SO4. Example: CH3CH2OH + CH3COOH <=> CH3COOCH2CH3 + H2O.",
          "The iodoform reaction identifies the CH3CH(OH)- group in an alcohol, CH3CH(OH)-R. With alkaline iodine, a yellow precipitate of triiodomethane, CHI3, forms and the accompanying organic ion is RCO2-.",
          "Ethanol gives a positive iodoform test because it is oxidised to ethanal under the reaction conditions, which contains the CH3CO- unit needed for CHI3 formation. Secondary alcohols of the CH3CH(OH)-R type also give positive results.",
          "Alcohols are weak acids and are less acidic than water. Alkyl groups have a +I inductive effect, increasing electron density on oxygen and destabilising the conjugate base RO-, so proton loss is less favourable than for H2O forming HO-.",
          "This relative acidity explains why sodium reacts with both water and alcohols, but alcohols do not significantly ionise in water like strong mineral acids.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Alcohol questions usually combine reagent choice, condition control, and structure-based reasoning. Examiners reward candidates who connect class of alcohol to product outcome and who separate similar-looking oxidation pathways accurately.",
      items: [
        "Classifying alcohols by chain length instead of the substitution of the carbon bonded to -OH.",
        "Using NaBH4 or LiAlH4 for carboxylic-acid reduction interchangeably; this syllabus route requires LiAlH4 for carboxylic acids.",
        "Forgetting that tertiary alcohols do not oxidise with acidified K2Cr2O7/KMnO4 under normal conditions.",
        "Writing distillation when carboxylic acid is desired from a primary alcohol; reflux is needed for full oxidation.",
        "Assuming every secondary alcohol gives a positive iodoform test; only alcohols containing CH3CH(OH)- do.",
        "Stating alcohols are more acidic than water; they are less acidic because alkyl groups destabilise RO- by +I effect.",
      ],
    },
    workedExamples: [
      {
        id: "t16-1-ex1",
        title: "Building a route map to ethanol from different starting classes",
        problem: [
          "For each starting compound, give reagent(s)/conditions and an equation to produce ethanol: (a) ethene, (b) bromoethane, (c) ethanal, (d) ethanoic acid, (e) methyl ethanoate.",
        ],
        solution: [
          "(a) From ethene: steam addition with H3PO4 catalyst. CH2=CH2 + H2O(g) -> CH3CH2OH.",
          "(b) From bromoethane: nucleophilic substitution with aqueous NaOH and heat. CH3CH2Br + OH- -> CH3CH2OH + Br-.",
          "(c) From ethanal: reduction with NaBH4 or LiAlH4. CH3CHO + 2[H] -> CH3CH2OH.",
          "(d) From ethanoic acid: reduction with LiAlH4. CH3COOH + 4[H] -> CH3CH2OH + H2O.",
          "(e) From methyl ethanoate: hydrolysis with dilute acid or dilute alkali and heat gives methanol, not ethanol, because the alkoxy fragment is CH3O-. This checks structural reading before choosing route.",
        ],
      },
      {
        id: "t16-1-ex2",
        title: "Using oxidation conditions to distinguish alcohol classes",
        problem: [
          "Compounds P, Q and R are isomeric alcohols with formula C4H10O. On warming with acidified K2Cr2O7, P gives no reaction, Q gives a ketone, and R gives an aldehyde on distillation but a carboxylic acid on reflux. Deduce the class of each alcohol and explain.",
        ],
        solution: [
          "No oxidation for P indicates a tertiary alcohol, because tertiary alcohols lack the required hydrogen on the carbon carrying -OH.",
          "Q giving a ketone identifies a secondary alcohol, since secondary alcohol oxidation stops at ketone under these conditions.",
          "R giving aldehyde by distillation and carboxylic acid by reflux identifies a primary alcohol: controlled oxidation gives aldehyde, and stronger/longer oxidation gives carboxylic acid.",
          "The orange-to-green dichromate colour change occurs for Q and R but not for P.",
        ],
      },
      {
        id: "t16-1-ex3",
        title: "Predicting iodoform outcomes from structure",
        problem: [
          "Predict whether each alcohol gives a positive iodoform test: ethanol, propan-1-ol, propan-2-ol, 2-methylpropan-2-ol. Explain each briefly.",
        ],
        solution: [
          "Ethanol: positive. Under test conditions it is oxidised to ethanal, which contains the CH3CO- unit required for CHI3 formation.",
          "Propan-1-ol: negative. It oxidises to propanal, which does not contain CH3CO- and does not match CH3CH(OH)-R.",
          "Propan-2-ol: positive. It has CH3CH(OH)-CH3, so it fits CH3CH(OH)-R and yields CHI3 with alkaline I2.",
          "2-Methylpropan-2-ol: negative. It is tertiary and lacks CH3CH(OH)- structure; it does not follow the required iodoform pathway.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t16-1-st1",
        question:
          "Classify each alcohol as primary, secondary or tertiary: CH3CH2OH, CH3CH(OH)CH3, (CH3)3COH, HOCH2CH2OH.",
        modelAnswer: [
          "CH3CH2OH is primary.",
          "CH3CH(OH)CH3 is secondary.",
          "(CH3)3COH is tertiary.",
          "HOCH2CH2OH is a diol with both -OH groups on primary carbons.",
        ],
      },
      {
        id: "t16-1-st2",
        question:
          "State one reagent route and condition to prepare an alcohol from each: alkene, halogenoalkane, aldehyde/ketone, carboxylic acid, ester.",
        modelAnswer: [
          "Alkene -> alcohol: steam addition with H3PO4 catalyst.",
          "Halogenoalkane -> alcohol: aqueous NaOH and heat (nucleophilic substitution).",
          "Aldehyde/ketone -> alcohol: reduction with NaBH4 or LiAlH4.",
          "Carboxylic acid -> primary alcohol: reduction with LiAlH4.",
          "Ester -> alcohol: hydrolysis with dilute acid or dilute alkali and heat.",
        ],
      },
      {
        id: "t16-1-st3",
        question:
          "Describe oxidation outcomes of primary, secondary and tertiary alcohols with acidified K2Cr2O7 or acidified KMnO4, including distillation versus reflux for primary alcohols.",
        modelAnswer: [
          "Primary alcohol: oxidises to aldehyde by distillation; further oxidises to carboxylic acid on reflux.",
          "Secondary alcohol: oxidises to ketone.",
          "Tertiary alcohol: no oxidation under these conditions.",
          "Primary/secondary oxidation gives orange-to-green dichromate colour change; tertiary does not show this oxidation change.",
        ],
      },
      {
        id: "t16-1-st4",
        question:
          "Write one equation each for (a) reaction of ethanol with sodium, (b) dehydration of ethanol to ethene, and (c) esterification of ethanol with ethanoic acid.",
        modelAnswer: [
          "(a) 2C2H5OH + 2Na -> 2C2H5ONa + H2.",
          "(b) C2H5OH -> CH2=CH2 + H2O (heated Al2O3 or concentrated acid).",
          "(c) CH3COOH + C2H5OH <=> CH3COOC2H5 + H2O (concentrated H2SO4 catalyst).",
        ],
      },
      {
        id: "t16-1-st5",
        question:
          "State the structural requirement for a positive iodoform test in alcohols and explain why alcohols are less acidic than water.",
        modelAnswer: [
          "Positive iodoform test requires a CH3CH(OH)- group (or ethanol, which is oxidised to ethanal under test conditions).",
          "Alcohols are less acidic than water because alkyl groups donate electron density (+I effect), which destabilises the conjugate alkoxide ion RO- relative to HO-.",
        ],
      },
    ],
  },
};
