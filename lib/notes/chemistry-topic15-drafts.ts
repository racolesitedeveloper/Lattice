import type { NoteDraft } from "./types";

/** Full teaching notes for 9701 Topic 15 — subtopic 15.1 (see lib/notes/AUTHORING.md). */
export const CHEMISTRY_TOPIC15_DRAFTS: Record<string, NoteDraft> = {
  "t15-1": {
    noteId: "t15-1",
    syllabusNotes: [
      {
        id: "formation-routes-overview",
        title: "How halogenoalkanes are prepared: core synthetic routes",
        paragraphs: [
          "Halogenoalkanes (alkyl halides) are compounds in which a halogen atom (F, Cl, Br or I) is bonded to an alkyl carbon. At AS level, the key synthetic idea is replacing or adding to hydrocarbon frameworks so that a C-X bond is formed under controlled conditions.",
          "From alkanes, halogenoalkanes are produced by free-radical substitution with Cl2 or Br2 under ultraviolet light. For example, ethane gives chloroethane: C2H6 + Cl2 -> C2H5Cl + HCl. This route can continue to multiple substitution products if conditions are not controlled.",
          "From alkenes, halogenoalkanes form by electrophilic addition at room temperature. Addition of HX(g) to an alkene gives a monohalogenoalkane, while addition of X2 gives a dihalogenoalkane. For example, CH2=CH2 + HBr -> CH3CH2Br and CH2=CH2 + Br2 -> BrCH2CH2Br.",
          "From alcohols, substitution of -OH by halogen gives halogenoalkanes. Typical reagents include HX(g), KCl with concentrated H2SO4 or concentrated H3PO4 (to generate HCl), PCl3 with heat, PCl5, or SOCl2. These routes are central in synthesis because alcohols are common intermediates.",
        ],
      },
      {
        id: "classification-and-structure-effects",
        title: "Primary, secondary and tertiary halogenoalkanes",
        paragraphs: [
          "Classification depends on how many alkyl groups are attached to the carbon bearing the halogen. In a primary (1°) halogenoalkane, that carbon is attached to one alkyl group; in secondary (2°), to two; in tertiary (3°), to three.",
          "Examples: CH3CH2Br is primary, CH3CHBrCH3 is secondary, and (CH3)3CBr is tertiary. This structural classification is essential because it controls mechanism and rate in nucleophilic substitution and elimination.",
          "Alkyl groups donate electron density by the inductive effect (+I effect). Increasing alkyl substitution can stabilise a positively charged carbon centre (carbocation), so tertiary structures favour pathways involving carbocation intermediates more than primary structures do.",
        ],
      },
      {
        id: "nucleophilic-substitution-reactions",
        title: "Nucleophilic substitution reactions and required conditions",
        paragraphs: [
          "Halogenoalkanes undergo nucleophilic substitution because the C-X bond is polar (Cδ+ - Xδ-), so nucleophiles attack the carbon attached to halogen. The halide leaves as X-.",
          "With aqueous NaOH and heat, hydroxide ions substitute for halogen to form alcohols. Example: C2H5Br + OH- -> C2H5OH + Br-. This is a standard hydrolysis of halogenoalkanes.",
          "With KCN in ethanol and heat, cyanide substitutes to form nitriles, extending carbon chain length by one carbon. Example: C2H5Br + CN- -> C2H5CN + Br-. This is a key synthetic route to nitriles and then carboxylic acids/amines in later topics.",
          "With NH3 in ethanol, heated under pressure, substitution gives amines. Using excess ammonia helps limit further substitution. Example: C2H5Br + 2NH3 -> C2H5NH2 + NH4Br.",
          "With aqueous silver nitrate in ethanol, hydrolysis and precipitation together provide an identification method for halogen in a halogenoalkane. Halide ions released react with Ag+ to give AgCl (white), AgBr (cream), or AgI (yellow).",
        ],
      },
      {
        id: "elimination-vs-substitution",
        title: "Elimination with ethanolic NaOH and competition with substitution",
        paragraphs: [
          "With NaOH in ethanol and heat, halogenoalkanes can undergo elimination to form alkenes. A hydrogen is removed from a beta carbon while halide leaves from the alpha carbon, giving HX elimination in net terms.",
          "For example, bromoethane gives ethene: CH3CH2Br + OH- -> CH2=CH2 + Br- + H2O. This is a required route to alkenes and links Topic 15 to alkene chemistry.",
          "Aqueous hydroxide conditions favour substitution, whereas ethanolic hydroxide and stronger heating favour elimination. Structure also matters: more substituted halogenoalkanes tend to eliminate more readily under suitable conditions.",
        ],
      },
      {
        id: "sn1-sn2-mechanisms-and-inductive-effects",
        title: "SN1 and SN2 mechanisms, including inductive effects",
        paragraphs: [
          "SN2 is a one-step mechanism. The nucleophile attacks the carbon bearing halogen from the opposite side while the C-X bond breaks simultaneously. Rate depends on both halogenoalkane and nucleophile concentrations: rate = k[RX][Nu-] in a simple treatment.",
          "Primary halogenoalkanes usually react mainly by SN2 because steric hindrance is low and primary carbocations are unstable. Secondary halogenoalkanes can react by both SN1 and SN2 depending on structure, solvent, nucleophile, and conditions.",
          "SN1 is a two-step mechanism. First, C-X bond breaks to form carbocation and halide ion (rate-determining step). Then nucleophile attacks carbocation. Rate depends mainly on halogenoalkane concentration: rate = k[RX].",
          "Tertiary halogenoalkanes are much more likely to react by SN1 because tertiary carbocations are stabilised by +I effects of three alkyl groups. These alkyl groups push electron density toward the positively charged carbon, reducing carbocation instability.",
        ],
      },
      {
        id: "reactivity-trends-and-cx-bond-strength",
        title: "Different reactivities of halogenoalkanes and AgNO3 evidence",
        paragraphs: [
          "For halogenoalkanes with the same alkyl group, reactivity in substitution usually follows RI > RBr > RCl because C-I is weakest and easiest to break, then C-Br, then C-Cl strongest. The C-X bond strength trend is the key explanation required.",
          "In aqueous silver nitrate in ethanol, faster halide release gives faster precipitate formation. Typical order is iodoalkanes fastest (yellow AgI), then bromoalkanes (cream AgBr), then chloroalkanes slowest (white AgCl).",
          "Structure also affects observed rates: tertiary halogenoalkanes often react quickly in protic solvents via SN1, while primary often react more slowly unless strong nucleophile SN2 conditions are present. High-quality answers separate leaving-group effect (C-X strength) from mechanism/structure effects.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Marks are often lost in Topic 15 through mixed-up reagents/conditions, mechanism confusion, and incomplete explanations of why rates differ. Examiners reward clear links between structure, mechanism, and bond strength evidence.",
      items: [
        "Classifying halogenoalkanes by total carbon number instead of the substitution level of the carbon attached to halogen.",
        "Using aqueous NaOH conditions for elimination; ethanolic NaOH with heat is the expected elimination condition.",
        "Writing KCN substitution without stating ethanol and heat, or forgetting that nitrile formation extends carbon chain length by one.",
        "Claiming all halogenoalkanes react by SN2; tertiary commonly follow SN1 and secondary can show mixed behaviour.",
        "Giving reactivity order without explaining C-X bond strength (C-I weakest, C-Cl strongest).",
        "Using AgNO3 test colours incorrectly (AgCl white, AgBr cream, AgI yellow) or treating rate differences as colour differences only.",
      ],
    },
    workedExamples: [
      {
        id: "t15-1-ex1",
        title: "Mechanism choice from structure and conditions",
        problem: [
          "Predict the most likely substitution mechanism(s) for (a) 1-bromopropane and (b) 2-bromopropane in reaction with aqueous hydroxide ions. Explain using structure and inductive effects.",
        ],
        solution: [
          "(a) 1-Bromopropane is a primary halogenoalkane, so substitution is mainly SN2. Primary carbocations are unstable, so SN1 is disfavoured. Low steric hindrance allows backside attack by OH-.",
          "(b) 2-Bromopropane is secondary, so either SN1 or SN2 can occur depending on conditions; at this level it is described as mixed-mechanism behaviour. Secondary carbocations are more stable than primary due to alkyl +I effects, so SN1 becomes possible, but steric hindrance is still moderate so SN2 can also compete.",
          "This matches the syllabus expectation: primary tends to SN2; secondary can react by a mixture of SN1 and SN2 depending on structure and conditions.",
        ],
      },
      {
        id: "t15-1-ex2",
        title: "Substitution and elimination products from bromoethane",
        problem: [
          "Bromoethane is heated under two different conditions: (i) aqueous NaOH, (ii) ethanolic NaOH. State major organic product in each case and write ionic equations.",
        ],
        solution: [
          "(i) Aqueous NaOH favours substitution to ethanol: CH3CH2Br + OH- -> CH3CH2OH + Br-.",
          "(ii) Ethanolic NaOH favours elimination to ethene: CH3CH2Br + OH- -> CH2=CH2 + Br- + H2O.",
          "The key difference is solvent/conditions. Water-rich conditions stabilise substitution pathway, while ethanolic base and heat favour beta-elimination.",
        ],
      },
      {
        id: "t15-1-ex3",
        title: "Interpreting AgNO3 test results for reactivity and identity",
        problem: [
          "Three halogenoalkanes with the same alkyl group are tested with aqueous AgNO3 in ethanol. Tube A gives a yellow precipitate almost immediately, tube B gives cream precipitate after a short delay, tube C gives white precipitate only after much longer heating. Identify the halogen in each and explain the rate order.",
        ],
        solution: [
          "Yellow precipitate indicates AgI, so tube A contains an iodoalkane. Cream indicates AgBr, so tube B contains a bromoalkane. White indicates AgCl, so tube C contains a chloroalkane.",
          "Rate order is RI > RBr > RCl. Hydrolysis and halide release are fastest for iodoalkanes because C-I bond is weakest, slower for C-Br, and slowest for C-Cl because C-Cl bond is strongest.",
          "So the observed precipitation times reflect leaving-group ability controlled by C-X bond strength, not only silver halide solubility differences.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t15-1-st1",
        question:
          "List three preparative routes to halogenoalkanes from (a) alkanes, (b) alkenes, and (c) alcohols, including one reagent/condition for each.",
        modelAnswer: [
          "(a) From alkanes: free-radical substitution with Cl2 or Br2 under ultraviolet light.",
          "(b) From alkenes: electrophilic addition of HX(g) at room temperature to give monohalogenoalkane, or X2 at room temperature to give dihalogenoalkane.",
          "(c) From alcohols: substitution using HX(g), or KCl with concentrated H2SO4/H3PO4, or PCl3 with heat, or PCl5, or SOCl2.",
        ],
      },
      {
        id: "t15-1-st2",
        question:
          "Classify each as primary, secondary or tertiary halogenoalkane: CH3CH2CH2Cl, CH3CHClCH3, (CH3)3CCl.",
        modelAnswer: [
          "CH3CH2CH2Cl is primary (carbon bearing Cl attached to one alkyl group).",
          "CH3CHClCH3 is secondary (attached to two alkyl groups).",
          "(CH3)3CCl is tertiary (attached to three alkyl groups).",
        ],
      },
      {
        id: "t15-1-st3",
        question:
          "State reagents/conditions and products for nucleophilic substitution of a halogenoalkane with (a) aqueous NaOH, (b) KCN in ethanol, (c) NH3 in ethanol under pressure.",
        modelAnswer: [
          "(a) Aqueous NaOH, heat -> alcohol (hydrolysis).",
          "(b) KCN in ethanol, heat -> nitrile (chain length +1 carbon).",
          "(c) NH3 in ethanol, heated under pressure -> amine (often with NH4X by-product).",
        ],
      },
      {
        id: "t15-1-st4",
        question:
          "Explain why primary halogenoalkanes usually react by SN2 while tertiary halogenoalkanes usually react by SN1.",
        modelAnswer: [
          "Primary halogenoalkanes have low steric hindrance and form unstable primary carbocations, so one-step backside-attack SN2 is favoured.",
          "Tertiary halogenoalkanes are sterically hindered for SN2 but form relatively stable tertiary carbocations due to +I effects of alkyl groups, so two-step SN1 is favoured.",
        ],
      },
      {
        id: "t15-1-st5",
        question:
          "A student compares chloroethane, bromoethane and iodoethane using aqueous silver nitrate in ethanol. Predict precipitate colour and relative speed for each, and explain with C-X bond strength.",
        modelAnswer: [
          "Chloroethane gives white AgCl slowly; bromoethane gives cream AgBr at intermediate rate; iodoethane gives yellow AgI fastest.",
          "Relative speed is RI > RBr > RCl because C-I is weakest and easiest to break, C-Br intermediate, and C-Cl strongest.",
        ],
      },
    ],
  },
};
