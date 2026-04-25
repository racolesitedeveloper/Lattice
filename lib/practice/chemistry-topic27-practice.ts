import type { SubtopicPracticePack } from "./types";

/**
 * 9701 Topic 27 / 27.1 — Group 2 (Mg–Ba): trends in thermal stability and in
 * solubility / ΔH°sol (A Level depth). One course subtopic `t27-1`.
 *
 * LO crosswalk (`data/syllabus/chemistry-9701-learning-outcomes.md` §27.1):
 * - Thermal stability of nitrates & carbonates + ionic radius / polarisation of
 *   large anion → d1–d5
 * - Solubility & ΔH°sol of hydroxides & sulfates; lattice energy vs hydration
 *   (relative magnitudes) → d6–d10
 *
 * Deliberately avoids repeating AS Topic 10.1 “reagents and equations” trivia
 * (e.g. Mg vs cold water, flame tests, acid–carbonate gas calculations) except
 * where a decomposition equation directly serves the A Level LOs above.
 */
export const CHEMISTRY_TOPIC27_PRACTICE: Record<string, SubtopicPracticePack> = {
  "t27-1": {
    noteId: "t27-1",
    drills: [
      {
        id: "t27-1-d1",
        noteId: "t27-1",
        kind: "structured",
        difficulty: 2,
        marks: 5,
        stem: "For Group 2 salts from magnesium to barium, state how the thermal stability of the carbonates and of the nitrates changes. Write one balanced equation with state symbols for each family, using M as the general Group 2 metal, showing the usual products on strong heating.",
        modelAnswerPoints: [
          "Thermal stability of both nitrates and carbonates increases down the group (more heat needed to decompose barium salts than magnesium salts).",
          "Carbonate: MCO3(s) -> MO(s) + CO2(g).",
          "Nitrate: 2M(NO3)2(s) -> 2MO(s) + 4NO2(g) + O2(g) (or equivalent balanced form).",
          "The trend is interpreted in terms of how strongly M2+ distorts the large anion in the lattice, not different product types across the group.",
        ],
        workedSolution: [
          "Down Group 2 from magnesium to barium, both the carbonates and the nitrates become more thermally stable, which means that a higher temperature is required to achieve a comparable extent of decomposition for barium salts than for magnesium salts under similar conditions.",
          "For any Group 2 carbonate the usual thermal decomposition products are the metal oxide and carbon dioxide gas, represented in general form as MCO3(s) -> MO(s) + CO2(g), where M is the +2 metal and the carbonate ion is fully converted on strong heating.",
          "For any Group 2 nitrate the usual high-temperature decomposition gives the metal oxide together with nitrogen dioxide and oxygen; a balanced general equation is 2M(NO3)2(s) -> 2MO(s) + 4NO2(g) + O2(g), which conserves atoms and matches the brown NO2 and oxygen evolution described in teaching.",
          "Across the group the identity of the products follows the same pattern; what changes is how much thermal energy is needed, and that is what the syllabus ties to cation size and polarisation of the large anion rather than to a different decomposition chemistry at each step.",
        ],
        commonMistake:
          "Stating that thermal stability decreases down the group, or omitting O2(g) from nitrate decomposition while keeping NO2.",
        tags: ["thermal-stability", "equations", "carbonates", "nitrates"],
      },
      {
        id: "t27-1-d2",
        noteId: "t27-1",
        kind: "structured",
        difficulty: 3,
        marks: 6,
        stem: "Explain why barium carbonate is more thermally stable than magnesium carbonate. Your answer should refer to ionic radius of M2+, charge density, polarisation of the carbonate ion, and the effect on ease of loss of CO2.",
        modelAnswerPoints: [
          "Ba2+ has a larger ionic radius than Mg2+ for the same +2 charge, so charge density (charge per unit volume) is lower for Ba2+.",
          "The carbonate ion is large and easily polarised by a nearby cation; polarisation means distortion of the anion’s electron cloud toward the cation.",
          "Mg2+, being smaller and more charge-dense, polarises CO3^2- more strongly, weakening internal bonding in the anion so CO2 is lost more readily at lower temperature.",
          "Ba2+ polarises less, so the carbonate ion is less internally weakened and the lattice withstands more heat before decomposing, hence greater thermal stability.",
        ],
        workedSolution: [
          "Barium ion and magnesium ion both carry a +2 charge, but barium sits lower in Group 2 and has a considerably larger ionic radius, so the same charge is spread over a larger volume which lowers the charge density of Ba2+ compared with Mg2+.",
          "The carbonate ion is a large doubly charged anion whose electron cloud can be pulled toward a neighbouring cation; this polarisation weakens the bonding within the carbonate unit and promotes earlier release of carbon dioxide when the lattice is heated.",
          "Magnesium ion is small and has high charge density, so it exerts a strong polarising field on the carbonate ion, distorting it substantially and making the anion chemically easier to break apart, which corresponds to magnesium carbonate decomposing at a lower temperature than barium carbonate.",
          "Barium ion polarises the carbonate less because its charge density is lower, the anion is less destabilised by cation–anion interaction, and more thermal energy is therefore required before carbon dioxide is lost, which is exactly what is meant by saying barium carbonate is more thermally stable than magnesium carbonate.",
        ],
        commonMistake:
          "Claiming that the larger cation polarises the anion more, or confusing thermal stability with the metal’s reaction with water.",
        tags: ["polarisation", "charge-density", "thermal-stability", "carbonates"],
      },
      {
        id: "t27-1-d3",
        noteId: "t27-1",
        kind: "mcq",
        difficulty: 2,
        stem: "Which statement best explains why Mg(NO3)2 decomposes at a lower temperature than Ba(NO3)2?",
        options: [
          {
            id: "A",
            text: "Mg2+ has a smaller ionic radius and higher charge density, so it polarises NO3^- more strongly than Ba2+ does, weakening the anion more.",
          },
          {
            id: "B",
            text: "Ba2+ has higher charge density than Mg2+, so it pulls electron density out of NO3^- more strongly and makes decomposition easier.",
          },
          {
            id: "C",
            text: "Barium nitrate contains more oxygen atoms per formula unit, so it always decomposes at lower temperature.",
          },
          {
            id: "D",
            text: "Magnesium is less metallic than barium, so its nitrate lattice is held together more weakly overall.",
          },
        ],
        correctOptionId: "A",
        explanation:
          "At constant +2 charge, the smaller Mg2+ ion has greater charge density and stronger polarising power on the large nitrate ion, so the anion is distorted more and decomposes more easily than for Ba2+.",
        distractorRationale: {
          B: "Ba2+ is larger than Mg2+, so its charge density is lower, not higher; weaker polarisation increases thermal stability for the nitrate.",
          C: "Stoichiometry of nitrate type is the same along the group; the syllabus explanation is cation polarisation of the anion, not a crude oxygen count.",
          D: "Metallic character trends do not replace the polarisation argument the mark scheme expects for nitrate thermal stability.",
        },
        tags: ["nitrates", "polarisation", "thermal-stability"],
      },
      {
        id: "t27-1-d4",
        noteId: "t27-1",
        kind: "structured",
        difficulty: 3,
        marks: 5,
        stem: "A candidate writes: ‘Barium carbonate must decompose more easily than magnesium carbonate because barium is lower in Group 2 and its compounds are less thermally stable.’ Explain why this reasoning is incorrect and give the correct trend and explanation in terms of M2+ radius and polarisation of CO3^2-.",
        modelAnswerPoints: [
          "The thermal-stability trend is the opposite of what the candidate claims: carbonates become more stable down the group, so BaCO3 requires more heat than MgCO3 for comparable decomposition.",
          "Lower position in the group means a larger M2+ ion and lower charge density, not higher instability of the salt on heating.",
          "Smaller Mg2+ polarises the large carbonate ion more strongly than Ba2+ does, so the anion is more weakened in MgCO3 and CO2 is lost more readily.",
          "Weaker polarisation by Ba2+ leaves the carbonate less distorted, so the lattice is more resistant to heat.",
        ],
        workedSolution: [
          "The candidate has reversed the thermal-stability trend: for Group 2 carbonates, stability to heat increases from magnesium to barium, which means barium carbonate is less easy to decompose than magnesium carbonate, not more easy.",
          "Being lower in the group corresponds to a larger ionic radius for M2+ at the same +2 charge, which reduces charge density and reduces polarising power on nearby anions, so the argument cannot be turned into ‘less stable salts’ without contradicting the observed decomposition temperatures.",
          "Magnesium ion is small and highly charge-dense, so it polarises the carbonate ion strongly, distorting the electron cloud and encouraging earlier breakdown to oxide and carbon dioxide, whereas barium ion is much larger and polarises the same anion less strongly.",
          "Because barium polarises carbonate less, the internal bonding of the anion is less compromised by the cation field, so more thermal energy must be supplied before decomposition becomes extensive, which is the precise sense in which barium carbonate is more thermally stable than magnesium carbonate.",
        ],
        commonMistake:
          "Confusing ‘more reactive metal’ with ‘less thermally stable carbonate’ instead of using polarisation of the anion.",
        tags: ["thermal-stability", "argument", "polarisation"],
      },
      {
        id: "t27-1-d5",
        noteId: "t27-1",
        kind: "mcq",
        difficulty: 2,
        stem: "Which balanced equation correctly represents the usual thermal decomposition of solid calcium nitrate?",
        options: [
          { id: "A", text: "Ca(NO3)2(s) -> CaO(s) + 2NO2(g) + 1/2 O2(g)" },
          { id: "B", text: "Ca(NO3)2(s) -> CaO(s) + N2(g) + 2O2(g)" },
          { id: "C", text: "Ca(NO3)2(s) -> Ca(NO2)2(s) + O2(g)" },
          { id: "D", text: "Ca(NO3)2(s) -> Ca(s) + N2(g) + 3O2(g)" },
        ],
        correctOptionId: "A",
        explanation:
          "Group 2 nitrates typically give the metal oxide, nitrogen dioxide and oxygen; the stoichiometry in A matches the usual 1:2:1/2 atom balance for one formula unit of Ca(NO3)2.",
        distractorRationale: {
          B: "N2 is not the usual nitrogen-containing gas from nitrate decomposition in this context; NO2 is expected alongside O2.",
          C: "Thermal decomposition proceeds to oxide plus gases, not to nitrite as the sole solid product in the standard syllabus picture.",
          D: "The metal is not produced as a primary product from heating the nitrate; the oxide route with NO2 and O2 is correct.",
        },
        tags: ["nitrates", "equations"],
      },
      {
        id: "t27-1-d6",
        noteId: "t27-1",
        kind: "structured",
        difficulty: 3,
        marks: 6,
        stem: "Dissolving a Group 2 hydroxide M(OH)2 in water can be discussed using lattice energy and hydration enthalpy. Explain why the solubility of the hydroxides increases from magnesium to barium, and state how ΔH°sol is expected to change down the group for these compounds.",
        modelAnswerPoints: [
          "Dissolution involves breaking the ionic lattice (endothermic lattice-related term) and hydrating M2+ and OH^- ions (exothermic hydration).",
          "Down the group, ionic radius of M2+ increases, so lattice energy magnitude decreases: less energy is needed to separate ions in the solid hydroxide.",
          "Hydration enthalpy magnitude for M2+ also decreases as the ion gets larger and interacts less strongly with water, but for hydroxides the fall in lattice-energy barrier is relatively more important for the net balance.",
          "So dissolution becomes more favorable down the group, solubility increases, and ΔH°sol generally becomes less endothermic (or more exothermic) from Mg(OH)2 toward Ba(OH)2.",
        ],
        workedSolution: [
          "When a Group 2 hydroxide dissolves, the crystal lattice must be disrupted so that M2+ and hydroxide ions can pass into aqueous environment, which costs lattice-related energy, while new ion–dipole interactions with water molecules release hydration enthalpy, so the observed solubility reflects how these opposing contributions compare.",
          "As M changes from magnesium to barium, the cationic radius at +2 increases, which weakens the electrostatic attraction between M2+ and OH^- in the solid, so the lattice energy magnitude becomes smaller and less energy is required per mole to pull the ions apart from the hydroxide lattice.",
          "Hydration enthalpies also become less exothermic in magnitude down the group because larger M2+ ions are farther from water dipoles and cannot stabilise solvent as tightly as magnesium ion, yet for the hydroxide series the decrease in lattice-energy magnitude is the dominant influence on the overall energetics of dissolution.",
          "Because the lattice barrier falls relatively more than the loss of hydration driving force for this anion type, dissolving becomes thermodynamically more favorable down the group, which corresponds to increasing solubility in water and to ΔH°sol values that trend toward less positive (more negative) values from magnesium hydroxide to barium hydroxide in the usual teaching sequence.",
        ],
        commonMistake:
          "Explaining hydroxide solubility using only hydration enthalpy or only lattice energy without comparing their relative changes.",
        tags: ["solubility", "hydroxides", "lattice-energy", "hydration", "enthalpy-of-solution"],
      },
      {
        id: "t27-1-d7",
        noteId: "t27-1",
        kind: "structured",
        difficulty: 4,
        marks: 6,
        stem: "Explain why the solubility in water of Group 2 sulfates decreases from magnesium sulfate to barium sulfate. Use the same lattice-energy and hydration-enthalpy ideas as for hydroxides, but make clear which contribution changes relatively more for sulfates and how that links to the trend in ΔH°sol.",
        modelAnswerPoints: [
          "Dissolution still opposes lattice breaking against ion hydration for MSO4.",
          "Lattice energy magnitude decreases down the group as M2+ radius increases, as for hydroxides.",
          "For sulfates, the drop in hydration enthalpy magnitude for the larger M2+ ions is relatively more significant than the lattice change, so the net dissolution process becomes less favorable down the group.",
          "Solubility therefore decreases toward BaSO4, and ΔH°sol tends to become more endothermic down the group.",
        ],
        workedSolution: [
          "When a Group 2 sulfate dissolves, sulfate is a large doubly charged anion and M2+ is doubly charged too, so both lattice disruption and hydration of both ion types matter, and the net enthalpy of solution is again a balance between lattice-related endothermic work and exothermic hydration.",
          "From magnesium to barium the metal ion radius increases at constant charge, which reduces the lattice energy magnitude for the sulfate salt just as it does for hydroxides, meaning the crystal should be easier to disrupt in isolation.",
          "However, as M2+ becomes larger, the hydration enthalpy of the cation becomes markedly less exothermic in magnitude, and for sulfate salts this loss of hydration driving force outweighs the benefit from the falling lattice energy in the usual textbook argument, so the overall dissolution enthalpy moves in an unfavorable direction down the group.",
          "Consequently, dissolving barium sulfate is much less favorable than dissolving magnesium sulfate, which is observed as decreasing solubility from MgSO4 to BaSO4, and the enthalpy of solution for the sulfates becomes more endothermic down the group, matching the idea that thermodynamics disfavors dissolution more strongly for the heavier sulfates despite both lattice and hydration magnitudes decreasing individually.",
        ],
        commonMistake:
          "Reciting the hydroxide ‘lattice dominates’ story for sulfates without stating that hydration loss dominates for MSO4.",
        tags: ["sulfates", "solubility", "lattice-energy", "hydration", "enthalpy-of-solution"],
      },
      {
        id: "t27-1-d8",
        noteId: "t27-1",
        kind: "mcq",
        difficulty: 3,
        stem: "Group 2 hydroxides become more soluble down the group, but sulfates become less soluble. Which row gives the best summary of the usual A Level explanation?",
        options: [
          {
            id: "A",
            text: "For both families, lattice energy decreases more than hydration enthalpy, so both become more soluble.",
          },
          {
            id: "B",
            text: "For hydroxides the decrease in lattice energy is relatively more important; for sulfates the decrease in hydration enthalpy is relatively more important.",
          },
          {
            id: "C",
            text: "Hydration enthalpy becomes more exothermic down the group for all M2+, so sulfates must become more soluble.",
          },
          {
            id: "D",
            text: "Sulfate ion is smaller than hydroxide, so lattice energy always increases down the group for sulfates.",
          },
        ],
        correctOptionId: "B",
        explanation:
          "The opposite solubility trends arise because the balance between falling lattice energy and falling hydration enthalpy differs when the anion is OH^- versus SO4^2-.",
        distractorRationale: {
          A: "That one-sided lattice argument predicts the same direction for both anions and contradicts the observed sulfate trend.",
          C: "Hydration of M2+ becomes less exothermic in magnitude down the group, not more exothermic, and anyway solubility needs the full balance.",
          D: "Sulfate is not the focus of ‘smaller than hydroxide’ as a substitute for the relative-magnitudes argument; the syllabus contrast is about which term changes more for each salt type.",
        },
        tags: ["solubility", "hydroxides", "sulfates", "comparison"],
      },
      {
        id: "t27-1-d9",
        noteId: "t27-1",
        kind: "structured",
        difficulty: 4,
        marks: 5,
        stem: "State the directions of change in ΔH°sol down Group 2 for the hydroxides M(OH)2 and for the sulfates MSO4. In each case, link the direction of ΔH°sol change to the observed solubility trend in water.",
        modelAnswerPoints: [
          "For hydroxides, ΔH°sol generally becomes less endothermic (or more exothermic) from Mg to Ba, consistent with increasing solubility.",
          "For sulfates, ΔH°sol tends to become more endothermic from Mg to Ba, consistent with decreasing solubility.",
          "Both patterns follow from comparing how lattice energy and hydration enthalpy change with increasing M2+ radius, but the dominant relative change differs between OH^- and SO4^2- salts.",
        ],
        workedSolution: [
          "For Group 2 hydroxides, the enthalpy of solution becomes progressively less endothermic, and may even be exothermic for some contexts, as the metal changes from magnesium to barium, which matches the fact that these hydroxides dissolve more readily down the group because the thermodynamics of dissolution shift in a favorable direction overall.",
          "For Group 2 sulfates, the enthalpy of solution moves in the opposite sense, becoming more endothermic down the group, which aligns with the well-known decrease in aqueous solubility culminating in very insoluble barium sulfate despite both lattice and hydration magnitudes individually decreasing with cation size.",
          "The link between ΔH°sol direction and solubility is that a more endothermic dissolution enthalpy disfavors forming a saturated solution from the solid under comparable conditions, whereas a less endothermic or more exothermic value makes high aqueous concentrations easier to attain, always remembering that entropy also matters in a full Gibbs argument but the syllabus here ties the trends to the enthalpy balance explicitly.",
          "Therefore the hydroxide and sulfate families show opposite solubility trends while both involve M2+, because the anion type changes which of the two major enthalpic terms changes faster as M2+ radius increases, and ΔH°sol tracks that changed balance in opposite directions for the two cases.",
        ],
        commonMistake:
          "Stating the same ΔH°sol direction for hydroxides and sulfates, or linking more endothermic ΔH°sol to higher solubility.",
        tags: ["enthalpy-of-solution", "solubility", "trends"],
      },
      {
        id: "t27-1-d10",
        noteId: "t27-1",
        kind: "structured",
        difficulty: 4,
        marks: 5,
        stem: "Explain why it is insufficient to argue that ‘because hydration enthalpy of M2+ becomes less exothermic down Group 2, all Group 2 salts must become less soluble down the group.’ Relate your answer to the need to compare lattice energy and hydration contributions, and to the contrasting behaviour of hydroxides and sulfates.",
        modelAnswerPoints: [
          "Solubility (and ΔH°sol) depends on the balance between lattice-related energy and hydration, not on hydration of M2+ alone.",
          "Both lattice energy magnitude and hydration enthalpy magnitude decrease as M2+ radius increases, but they oppose each other in the dissolution picture.",
          "Different anions change how fast each term alters, so hydroxides can become more soluble while sulfates become less soluble for the same cation trend.",
          "Therefore a one-term argument from cation hydration is incomplete and can give the wrong prediction.",
        ],
        workedSolution: [
          "The proposed argument only tracks how the hydration of the metal ion weakens as M2+ gets larger, but dissolution of a salt always involves paying a lattice-related cost to separate both M2+ and the anion from the crystal as well as hydrating both types of ion, so ignoring the lattice term cannot decide the direction of solubility change.",
          "Down Group 2 the lattice energy magnitude falls because ions are farther apart in the solid, while hydration enthalpies become less exothermic in magnitude for larger ions, and these two effects work against each other when deciding whether dissolving becomes more or less favorable overall.",
          "For hydroxides the lattice-energy reduction is relatively more influential, so the net process becomes more favorable down the group despite weaker hydration of M2+, whereas for sulfates the loss of cation hydration driving force is relatively more influential, so dissolution becomes less favorable down the group even though lattice energy also falls.",
          "Hence the same qualitative change in M2+ hydration cannot force all salt families to show identical solubility trends, and examiners expect an explicit comparison of relative magnitudes rather than a single catchphrase about hydration alone.",
        ],
        commonMistake:
          "Treating ‘less exothermic hydration’ as proof of lower solubility for every anion without mentioning lattice energy in the same sentence.",
        tags: ["enthalpy-of-solution", "argument", "lattice-energy", "hydration"],
      },
    ],
    flashcards: [
      {
        id: "t27-1-f1",
        noteId: "t27-1",
        difficulty: 1,
        front: "How does thermal stability of Group 2 nitrates and carbonates change from Mg to Ba?",
        back: "It increases: more heat is needed to decompose Ba salts than Mg salts.",
        examPhrasing: "State the trend in thermal stability of Group 2 carbonates on heating.",
        tags: ["thermal-stability"],
      },
      {
        id: "t27-1-f2",
        noteId: "t27-1",
        difficulty: 2,
        front: "Why does Mg2+ lower the thermal stability of CO3^2- in the lattice more than Ba2+?",
        back: "Mg2+ is smaller at the same +2 charge, so higher charge density and stronger polarisation of the large carbonate ion.",
        examPhrasing: "Explain the trend in thermal stability using ionic radius and polarisation.",
        confusionPair: "larger cation vs stronger polarisation",
        tags: ["polarisation", "charge-density"],
      },
      {
        id: "t27-1-f3",
        noteId: "t27-1",
        difficulty: 2,
        front: "General thermal decomposition equation for a Group 2 carbonate?",
        back: "MCO3(s) -> MO(s) + CO2(g).",
        examPhrasing: "Write an equation for the thermal decomposition of a Group 2 carbonate.",
        tags: ["carbonates", "equations"],
      },
      {
        id: "t27-1-f4",
        noteId: "t27-1",
        difficulty: 3,
        front: "Typical products when a Group 2 nitrate is strongly heated?",
        back: "Metal oxide + NO2 + O2, e.g. 2M(NO3)2(s) -> 2MO(s) + 4NO2(g) + O2(g).",
        examPhrasing: "Write an equation for the thermal decomposition of a Group 2 nitrate.",
        tags: ["nitrates", "equations"],
      },
      {
        id: "t27-1-f5",
        noteId: "t27-1",
        difficulty: 3,
        front: "What is meant by polarisation of a large anion by M2+?",
        back: "The cation’s electric field distorts the anion’s electron cloud toward itself, weakening internal bonding in the anion.",
        examPhrasing: "Explain what is meant by polarisation in the context of thermal decomposition.",
        tags: ["polarisation", "definitions"],
      },
      {
        id: "t27-1-f6",
        noteId: "t27-1",
        difficulty: 3,
        front: "Why do Group 2 hydroxides become more soluble down the group?",
        back: "Lattice energy magnitude falls significantly with larger M2+; that effect dominates the balance over hydration loss, so dissolution is more favorable.",
        examPhrasing: "Explain the trend in solubility of Group 2 hydroxides using lattice and hydration ideas.",
        tags: ["hydroxides", "solubility"],
      },
      {
        id: "t27-1-f7",
        noteId: "t27-1",
        difficulty: 4,
        front: "Why do Group 2 sulfates become less soluble down the group?",
        back: "Hydration enthalpy of M2+ becomes much less exothermic; that loss outweighs the lattice-energy decrease, so dissolution is less favorable.",
        examPhrasing: "Explain the trend in solubility of Group 2 sulfates using lattice and hydration enthalpies.",
        tags: ["sulfates", "solubility"],
      },
      {
        id: "t27-1-f8",
        noteId: "t27-1",
        difficulty: 4,
        front: "Expected trend in ΔH°sol for Group 2 hydroxides from Mg to Ba?",
        back: "Generally becomes less endothermic (more exothermic), matching higher solubility.",
        examPhrasing: "Describe how ΔH°sol changes for Group 2 hydroxides down the group.",
        tags: ["enthalpy-of-solution", "hydroxides"],
      },
      {
        id: "t27-1-f9",
        noteId: "t27-1",
        difficulty: 4,
        front: "Expected trend in ΔH°sol for Group 2 sulfates from Mg to Ba?",
        back: "Tends to become more endothermic, matching lower solubility toward BaSO4.",
        examPhrasing: "Describe how ΔH°sol changes for Group 2 sulfates down the group.",
        tags: ["enthalpy-of-solution", "sulfates"],
      },
      {
        id: "t27-1-f10",
        noteId: "t27-1",
        difficulty: 5,
        front: "Why must you compare lattice energy and hydration enthalpy together for solubility trends?",
        back: "Both change down the group and oppose each other in dissolution; the net outcome depends on which changes relatively more for that salt type.",
        examPhrasing: "Explain why solubility trends cannot be deduced from hydration enthalpy alone.",
        confusionPair: "hydroxide reasoning vs sulfate reasoning",
        tags: ["lattice-energy", "hydration", "enthalpy-of-solution"],
      },
    ],
  },
};
