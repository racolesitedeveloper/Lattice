import type { NoteDraft } from "./types";

/** Full teaching notes for 9701 Topic 26 — subtopics 26.1-26.2 (see lib/notes/AUTHORING.md). */
export const CHEMISTRY_TOPIC26_DRAFTS: Record<string, NoteDraft> = {
  "t26-1": {
    noteId: "t26-1",
    syllabusNotes: [
      {
        id: "core-kinetics-terms",
        title: "Core kinetics terms used in rate equations",
        paragraphs: [
          "A rate equation links reaction rate to concentrations of species in the rate-determining chemistry. At this level, many rate equations are written in the form rate = k[A]ᵐ[B]ⁿ, where m and n are the orders with respect to A and B, and k is the rate constant.",
          "Order of reaction with respect to one reactant is the power of its concentration in the rate equation, found from experiment rather than directly from stoichiometric coefficients in the overall equation. Overall order is the sum of the individual orders.",
          "The rate constant k is the proportionality constant at a fixed temperature. Its numerical value depends on temperature, and its units depend on overall order.",
          "A half-life is the time taken for the concentration of a reactant to decrease to half its current value. For first-order reactions, half-life is constant and does not depend on concentration.",
          "In multi-step mechanisms, the rate-determining step is the slowest step controlling overall rate. An intermediate is formed in one step and consumed in a later step, so it does not appear in the overall equation.",
        ],
      },
      {
        id: "rate-equations-orders-and-units",
        title: "Using rate = k[A]ᵐ[B]ⁿ and interpreting orders",
        paragraphs: [
          "When m = 0, rate is independent of [A]; doubling [A] leaves rate unchanged. When m = 1, rate is directly proportional to [A]; doubling [A] doubles rate. When m = 2, doubling [A] makes rate four times larger.",
          "The same logic applies independently to each reactant term. For example, if rate = k[A][B]², doubling [A] doubles rate while doubling [B] quadruples rate, so doubling both gives an eightfold increase.",
          "Initial-rate data are commonly compared by holding one concentration constant and changing another. Ratios of rates then reveal orders cleanly. Once orders are known, substitute into the general form to construct the full rate equation.",
          "Rate can be calculated from concentration data by finding change in concentration over change in time near t = 0. Graphically, initial rate is the gradient of the tangent at the start of a concentration-time curve.",
          "After obtaining the rate equation, calculate k by rearrangement. For a fixed temperature, values of k from different experiments should agree within experimental uncertainty.",
        ],
      },
      {
        id: "graphical-methods-and-data-interpretation",
        title: "Deducing order from concentration-time and rate-concentration graphs",
        paragraphs: [
          "A zero-order reaction gives a concentration-time plot that is a straight line with constant negative gradient. A first-order reaction gives a curved concentration-time plot where gradient magnitude decreases as concentration falls.",
          "For first-order reactions, a plot of ln[A] against time is linear, and equal half-lives are seen over successive concentration halvings.",
          "Rate-concentration graphs provide direct order evidence: rate proportional to [A] gives a straight line through the origin (first order), rate independent of [A] gives a horizontal line (zero order), and rate proportional to [A]² gives a curved upward trend.",
          "In exam data tables, always compare experiments where only one reactant concentration changes. If both change, use a ratio approach or isolate one variable by combining experiment pairs.",
          "Graph interpretation marks usually require both pattern identification and explicit order statement, not pattern description alone.",
        ],
      },
      {
        id: "first-order-half-life-and-k",
        title: "Half-life of first-order reactions and finding k",
        paragraphs: [
          "For first-order reactions, half-life is constant because the fraction reacting per unit time is constant. This gives equal time intervals for [A] to fall from c to c/2, c/2 to c/4, and so on.",
          "The first-order link between half-life and rate constant is k = 0.693 / t₁⁄₂, with t₁⁄₂ in consistent time units. A longer half-life means a smaller k and therefore a slower first-order process.",
          "This relationship allows k to be found without initial-rate data. If half-life is taken from a graph, use clear reading points and consistent units (for example seconds).",
          "Because k depends on temperature, k values from different temperatures should not be compared directly without noting thermal conditions.",
        ],
      },
      {
        id: "mechanisms-rds-intermediates-and-prediction",
        title: "Mechanism analysis: deducing and testing rate equations",
        paragraphs: [
          "A proposed mechanism must match both the overall reaction equation and the experimentally determined rate equation. If the slow step is elementary, the rate law often reflects reactants in that step.",
          "Given a mechanism, you can predict order by writing the rate expression for the rate-determining step. If the predicted expression disagrees with experiment, the mechanism or identified slow step is incorrect.",
          "Given an overall equation and measured rate equation, you can suggest a plausible multi-step pathway where the slow step contains the species needed by the observed rate law.",
          "An intermediate appears within mechanism steps but cancels out when steps are added; it is absent from the final overall equation. A catalyst is consumed in an early step and regenerated in a later step, so it is unchanged overall.",
          "When asked to identify the rate-determining step from a mechanism and rate law, choose the step whose molecularity matches the concentration dependence in the observed rate equation.",
        ],
      },
      {
        id: "temperature-effect-on-k",
        title: "Qualitative effect of temperature on k and reaction rate",
        paragraphs: [
          "Increasing temperature increases the rate constant k because a larger fraction of collisions have energy at or above activation energy. This is the same kinetic basis used earlier with Boltzmann distribution arguments.",
          "Since rate = k[A]ᵐ[B]ⁿ, a larger k at fixed concentrations gives a faster rate. Lowering temperature reduces k and slows reaction.",
          "Temperature changes k strongly even when concentrations are unchanged, which is why rate data must always be interpreted at stated temperature.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Topic 26.1 is highly data-driven. Examiners reward candidates who separate experimental deduction from assumption, show clear ratio logic, and keep rate laws consistent with mechanism evidence.",
      items: [
        "Using stoichiometric coefficients from the overall equation as reaction orders without experimental justification.",
        "Confusing first-order concentration-time curvature with second-order behavior instead of checking half-life or rate-concentration evidence.",
        "Calculating k with inconsistent units for time or concentration, then quoting impossible or mixed units.",
        "Calling a species an intermediate when it appears in the overall equation, or missing that true intermediates cancel out.",
        "Choosing a rate-determining step that does not generate the observed rate law from the mechanism.",
        "Stating that half-life of every reaction is constant; this property is specific to first-order kinetics.",
      ],
    },
    workedExamples: [
      {
        id: "t26-1-ex1",
        title: "Constructing a rate equation from initial-rate data",
        problem: [
          "For reaction A + B -> products, initial-rate data are:",
          "Experiment 1: [A] = 0.10 mol dm⁻3, [B] = 0.10 mol dm⁻3, rate = 1.2 × 10⁻3 mol dm⁻3 s⁻1.",
          "Experiment 2: [A] = 0.20 mol dm⁻3, [B] = 0.10 mol dm⁻3, rate = 2.4 × 10⁻3 mol dm⁻3 s⁻1.",
          "Experiment 3: [A] = 0.10 mol dm⁻3, [B] = 0.20 mol dm⁻3, rate = 4.8 × 10⁻3 mol dm⁻3 s⁻1.",
          "Deduce orders, write the rate equation, and find k.",
        ],
        solution: [
          "Compare Experiments 1 and 2: [A] doubles while [B] is constant, and rate doubles. So order with respect to A is 1.",
          "Compare Experiments 1 and 3: [B] doubles while [A] is constant, and rate increases by factor 4. So order with respect to B is 2.",
          "Rate equation is therefore rate = k[A][B]². Overall order is 1 + 2 = 3.",
          "Use Experiment 1 for k: k = rate / ([A][B]²) = (1.2 × 10⁻3) / (0.10 × 0.10²) = 1.2.",
          "Units for a third-order rate constant are dm⁶ mol⁻2 s⁻1, so k = 1.2 dm⁶ mol⁻2 s⁻1 at this temperature.",
        ],
      },
      {
        id: "t26-1-ex2",
        title: "Using first-order half-life to calculate k and concentrations",
        problem: [
          "A first-order decomposition has half-life 180 s. Calculate (a) k, and (b) concentration after 540 s if initial concentration is 0.080 mol dm⁻3.",
        ],
        solution: [
          "For first-order kinetics, k = 0.693 / t₁⁄₂ = 0.693 / 180 = 3.85 × 10⁻3 s⁻1.",
          "A time of 540 s corresponds to 540/180 = 3 half-lives.",
          "After each half-life, concentration halves: 0.080 -> 0.040 -> 0.020 -> 0.010 mol dm⁻3.",
          "So concentration after 540 s is 0.010 mol dm⁻3.",
          "This method works because first-order half-life is independent of concentration.",
        ],
      },
      {
        id: "t26-1-ex3",
        title: "Linking mechanism, intermediate and rate-determining step",
        problem: [
          "Overall reaction: 2NO₂ + F₂ -> 2NO₂F.",
          "Proposed mechanism:",
          "Step 1 (slow): NO₂ + F₂ -> NO₂F + F",
          "Step 2 (fast): F + NO₂ -> NO₂F",
          "Show that the mechanism is consistent with the observed rate equation rate = k[NO₂][F₂], identify the intermediate, and identify the rate-determining step.",
        ],
        solution: [
          "The slow step is Step 1, so the rate law predicted by the mechanism is rate ∝ [NO₂][F₂], matching the observed rate equation.",
          "Adding both steps gives 2NO₂ + F₂ -> 2NO₂F, which matches the overall equation.",
          "Species F is produced in Step 1 and consumed in Step 2, and it does not appear in the overall equation, so F is an intermediate.",
          "Step 1 is the rate-determining step because it is the slow step and controls the overall reaction rate.",
          "The mechanism is therefore kinetically and stoichiometrically consistent with the data.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t26-1-st1",
        question:
          "Define: rate equation, order with respect to a reactant, overall order, rate constant, half-life, intermediate, and rate-determining step.",
        modelAnswer: [
          "A rate equation is an experimentally determined relationship between rate and reactant concentrations, often written rate = k[A]ᵐ[B]ⁿ.",
          "Order with respect to a reactant is the power of its concentration in the rate equation; overall order is the sum of individual orders.",
          "The rate constant k is the proportionality constant in the rate equation at a fixed temperature.",
          "Half-life is the time for a reactant concentration to fall to half its value.",
          "An intermediate is formed in one step and consumed in a later step, so it is absent from the overall equation.",
          "The rate-determining step is the slowest step in a mechanism and controls the overall rate.",
        ],
      },
      {
        id: "t26-1-st2",
        question:
          "A reaction has rate = k[X]²[Y]⁰. State the order with respect to X, the order with respect to Y, the overall order, and the effect on rate of doubling both [X] and [Y].",
        modelAnswer: [
          "Order in X is 2, order in Y is 0, and overall order is 2.",
          "Doubling [X] increases rate by factor 4.",
          "Because order in Y is zero, doubling [Y] has no effect.",
          "Doubling both therefore gives an overall rate increase by factor 4.",
        ],
      },
      {
        id: "t26-1-st3",
        question:
          "How can first-order behavior be identified from (a) half-life evidence and (b) a rate-concentration relationship?",
        modelAnswer: [
          "(a) First-order behavior is shown by constant half-life over successive concentration halvings.",
          "(b) For first order, rate is directly proportional to concentration, so a rate-concentration plot is a straight line through the origin (for that reactant when others are controlled).",
        ],
      },
      {
        id: "t26-1-st4",
        question:
          "For a first-order reaction with t₁⁄₂ = 250 s, calculate k and state how k changes when temperature is increased.",
        modelAnswer: [
          "k = 0.693 / 250 = 2.77 × 10⁻3 s⁻1.",
          "Increasing temperature increases k because a greater fraction of particles has sufficient energy for effective collisions.",
        ],
      },
      {
        id: "t26-1-st5",
        question:
          "Overall reaction: A + B -> C. Proposed mechanism: Step 1 (fast) A + B -> X, Step 2 (slow) X -> C. Deduce predicted rate equation, identify the intermediate, and identify the rate-determining step.",
        modelAnswer: [
          "The slow step is Step 2, so the mechanism predicts rate ∝ [X].",
          "X is an intermediate because it is formed in Step 1 and consumed in Step 2, and does not appear in the overall equation.",
          "Step 2 is the rate-determining step.",
          "Because predicted rate depends on X rather than directly on A and B, this mechanism would only match experiment if additional relationships link [X] to reactant concentrations.",
        ],
      },
    ],
  },

  "t26-2": {
    noteId: "t26-2",
    syllabusNotes: [
      {
        id: "catalyst-types-overview",
        title: "Catalysts, catalysis, and catalyst classification",
        paragraphs: [
          "A catalyst increases reaction rate without being used up in the overall reaction. Catalysis is the process of rate increase due to a catalyst.",
          "Catalysts work by providing an alternative reaction pathway with lower activation energy than the uncatalysed pathway.",
          "Lower activation energy means a larger fraction of collisions can be effective at the same temperature, so rate increases.",
          "A homogeneous catalyst is in the same phase as reactants (for example all in solution or all gases). A heterogeneous catalyst is in a different phase, commonly a solid catalyst with gaseous or liquid reactants.",
        ],
      },
      {
        id: "energy-profile-and-boltzmann-explanation",
        title: "Catalytic effect via reaction pathways, activation energy, and Boltzmann distribution",
        paragraphs: [
          "On a reaction pathway diagram, both catalysed and uncatalysed routes start and end at the same reactant and product enthalpy levels, so overall enthalpy change is unchanged by a catalyst.",
          "The catalysed pathway has a lower peak, representing lower activation energy. Because the energy barrier is lower, more molecules in the Maxwell-Boltzmann distribution have energy above Eₐ at a given temperature.",
          "This is why rate increases without changing equilibrium position through thermodynamic terms. The catalyst alters kinetics, not overall reaction energetics.",
          "In exam sketches, label both curves clearly and show the lower Eₐ for the catalysed route; unclear diagrams often lose straightforward marks.",
        ],
      },
      {
        id: "heterogeneous-mode-of-action",
        title: "Heterogeneous catalysis: adsorption, bond weakening, desorption",
        paragraphs: [
          "In heterogeneous catalysis, reactant molecules adsorb onto active sites on the catalyst surface. Adsorption brings reactants together in favorable orientation and can weaken bonds that must break.",
          "While adsorbed, species react on or near the surface to form products. Products then desorb, freeing active sites for new reactant molecules.",
          "If adsorption is too weak, reactants do not stay long enough to react efficiently; if too strong, products may not desorb and catalyst activity falls. Effective catalysts balance adsorption and desorption behavior.",
          "This adsorption-bond-weakening-desorption sequence is the core explanatory model expected for heterogeneous catalytic action.",
        ],
      },
      {
        id: "haber-iron-example",
        title: "Example: iron catalyst in the Haber process",
        paragraphs: [
          "In the Haber process, N₂ and H₂ gases react on an iron surface to form NH₃. Nitrogen is particularly unreactive because of the strong N≡N bond, so catalytic assistance is essential for practical rates.",
          "Nitrogen and hydrogen adsorb onto iron active sites; adsorption helps weaken the N≡N bond and facilitates stepwise hydrogenation toward ammonia.",
          "Ammonia molecules desorb from the surface, leaving sites available again. The iron is not consumed overall, though poisoning or sintering can reduce activity in industrial operation.",
          "This example should be explained as a surface mechanism, not merely as 'iron speeds up reaction'.",
        ],
      },
      {
        id: "vehicle-catalytic-converter-example",
        title: "Example: Pd, Pt and Rh in catalytic converters",
        paragraphs: [
          "Vehicle catalytic converters use heterogeneous catalysts such as platinum, palladium and rhodium to remove harmful exhaust gases including oxides of nitrogen.",
          "Exhaust molecules adsorb on the catalyst surface, where redox reactions convert pollutants to less harmful gases. For oxides of nitrogen, reduction can produce N₂, while other species such as CO and hydrocarbons are oxidised.",
          "The catalyst's high-surface-area support provides many active sites and improves contact between flowing gases and catalytic metals.",
          "The same surface sequence applies: adsorption, bond weakening/reaction, then desorption of products.",
        ],
      },
      {
        id: "homogeneous-mode-of-action-and-examples",
        title: "Homogeneous catalysis: catalyst consumed then regenerated",
        paragraphs: [
          "A homogeneous catalyst typically appears as a reactant in one mechanistic step and is regenerated in a later step. It therefore does not appear in the net equation, but it creates a faster pathway.",
          "In atmospheric chemistry, oxides of nitrogen catalyse oxidation of SO₂ to SO₃ through a cycle in which nitrogen oxides are transformed and then reformed.",
          "In the iodide-peroxodisulfate reaction, Fe²⁺ and Fe³⁺ can act as homogeneous catalysts through electron-transfer steps. One oxidation state is used in one step and regenerated from the other in a subsequent step.",
          "When identifying catalyst species in mechanisms, check for species that are consumed and then reformed exactly, unlike intermediates which are formed then consumed.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Catalysis questions often appear descriptive but are mechanistic. Examiners reward precise language about pathways and phases, not vague claims that a catalyst 'just makes collisions happen'.",
      items: [
        "Stating that catalysts increase rate by raising temperature or by increasing reactant concentration.",
        "Claiming a catalyst changes the enthalpy change of reaction instead of lowering activation energy through an alternative pathway.",
        "Describing heterogeneous catalysis without adsorption and desorption stages.",
        "Mixing up homogeneous and heterogeneous definitions by discussing only physical state of catalyst, not phase relationship to reactants.",
        "Calling a regenerated catalyst an intermediate, or calling an intermediate a catalyst.",
        "Drawing pathway diagrams where catalysed and uncatalysed curves have different reactant-product enthalpy change.",
      ],
    },
    workedExamples: [
      {
        id: "t26-2-ex1",
        title: "Explaining catalytic effect with pathway and distribution ideas",
        problem: [
          "A candidate says, 'A catalyst speeds a reaction because it releases extra heat.' Explain why this statement is incorrect, using activation energy, pathway diagrams, and Boltzmann reasoning.",
        ],
        solution: [
          "The statement is incorrect because catalysts do not supply extra reaction enthalpy. The overall enthalpy change between reactants and products is unchanged.",
          "A catalyst provides an alternative pathway with lower activation energy, shown on a reaction profile as a lower peak but the same start and end levels.",
          "At fixed temperature, lowering Eₐ increases the fraction of molecules with energy at or above the barrier in the Boltzmann distribution.",
          "Therefore more collisions are successful per unit time, so rate increases without changing overall reaction energetics.",
        ],
      },
      {
        id: "t26-2-ex2",
        title: "Applying heterogeneous-catalyst surface mechanism",
        problem: [
          "Describe how iron acts as a heterogeneous catalyst in the Haber process, explicitly using adsorption, bond weakening, and desorption language.",
        ],
        solution: [
          "Nitrogen and hydrogen molecules adsorb onto active sites on the iron surface, so the catalyst is in a different phase from gaseous reactants.",
          "Adsorption holds reactants close together in suitable orientation and helps weaken bonds, especially the strong N≡N bond.",
          "Surface reactions then produce ammonia species that finally desorb from the iron surface.",
          "Desorption frees active sites so further reactant molecules can adsorb and react, allowing continuous catalytic turnover.",
        ],
      },
      {
        id: "t26-2-ex3",
        title: "Identifying homogeneous catalyst and intermediate in a mechanism",
        problem: [
          "Consider the mechanism:",
          "Step 1: Fe³⁺ + I⁻ -> Fe²⁺ + ½I₂",
          "Step 2: Fe²⁺ + S₂O₈²⁻ -> Fe³⁺ + SO₄²⁻ + SO₄•⁻",
          "Identify the homogeneous catalyst and explain why. Also identify one intermediate if present.",
        ],
        solution: [
          "Fe³⁺/Fe²⁺ is the homogeneous catalyst system because iron ions are in the same aqueous phase as reactants, are used in one step, and are regenerated in a later step.",
          "Catalyst evidence is the regeneration cycle Fe³⁺ -> Fe²⁺ -> Fe³⁺ (or vice versa), leaving no net consumption of iron species overall.",
          "A short-lived species such as SO₄•⁻ is an intermediate if formed in one step and consumed in a subsequent step of the full mechanism.",
          "The key distinction is: catalyst is regenerated overall; intermediate is produced then removed and is not regenerated as a persistent catalytic cycle.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t26-2-st1",
        question:
          "Define catalyst and catalysis, and state the difference between homogeneous and heterogeneous catalysis.",
        modelAnswer: [
          "A catalyst is a substance that increases reaction rate and is not consumed overall. Catalysis is the process of rate increase due to a catalyst.",
          "Homogeneous catalysis has catalyst and reactants in the same phase. Heterogeneous catalysis has catalyst in a different phase from reactants.",
        ],
      },
      {
        id: "t26-2-st2",
        question:
          "Using a reaction pathway diagram, state two features that must be shown when comparing catalysed and uncatalysed routes.",
        modelAnswer: [
          "The catalysed pathway must show a lower activation-energy peak than the uncatalysed pathway.",
          "Both pathways must have the same reactant and product enthalpy levels, so overall enthalpy change is unchanged.",
        ],
      },
      {
        id: "t26-2-st3",
        question:
          "Explain, in Boltzmann-distribution terms, why a catalyst increases reaction rate at constant temperature.",
        modelAnswer: [
          "A catalyst lowers activation energy, so at the same temperature a larger fraction of molecules has energy equal to or greater than Eₐ.",
          "This increases the number of effective collisions per unit time, so reaction rate increases.",
        ],
      },
      {
        id: "t26-2-st4",
        question:
          "Describe the key surface steps in heterogeneous catalysis and apply them briefly to catalytic removal of oxides of nitrogen in vehicle exhaust systems.",
        modelAnswer: [
          "Key steps are adsorption of reactants on active sites, bond weakening/reaction on the surface, then desorption of products.",
          "In catalytic converters, NOₓ and other exhaust gases adsorb on Pd/Pt/Rh surfaces, react by surface redox processes to form less harmful products such as N₂, and products desorb, freeing sites for continued catalysis.",
        ],
      },
      {
        id: "t26-2-st5",
        question:
          "A mechanism contains species Q consumed in Step 1 and regenerated in Step 3, and species R formed in Step 2 then consumed in Step 3. Identify which is catalyst and which is intermediate.",
        modelAnswer: [
          "Q is the catalyst because it is consumed and then regenerated, giving no net change overall.",
          "R is the intermediate because it is formed in one step and consumed in a later step.",
        ],
      },
    ],
  },
};
