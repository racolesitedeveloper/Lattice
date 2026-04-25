import type { NoteDraft } from "./types";

/** Full teaching notes for 9701 Topic 8 — subtopics 8.1-8.3 (see lib/notes/AUTHORING.md). */
export const CHEMISTRY_TOPIC8_DRAFTS: Record<string, NoteDraft> = {
  "t8-1": {
    noteId: "t8-1",
    syllabusNotes: [
      {
        id: "rate-and-collision-language",
        title: "Rate of reaction and collision terminology",
        paragraphs: [
          "Rate of reaction describes how fast reactants are used up or products are formed. Quantitatively, rate is a change in concentration (or another measurable quantity) per unit time. Typical units are mol dm⁻3 s⁻1, g s⁻1, cm³ s⁻1, or arbitrary instrument units per second, depending on the data provided.",
          "Collision theory explains why reactions have different rates. Reactant particles must collide before they can react. The collision frequency is the number of collisions per unit time.",
          "Not every collision gives products. An effective collision is one that leads to reaction; a non-effective collision is one that does not. At this stage, effective means particles meet with suitable energy and orientation to proceed to products.",
        ],
      },
      {
        id: "concentration-and-pressure-effects",
        title: "Why concentration and pressure change reaction rate",
        paragraphs: [
          "Increasing concentration in a solution means more reactant particles per unit volume. Particles are closer together, so collisions happen more often. If a similar fraction of collisions are effective, the frequency of effective collisions increases, so rate increases.",
          "For gaseous reactions, increasing pressure (at constant temperature) packs gas particles into a smaller volume. This is equivalent to increasing concentration of gas molecules, so collision frequency and effective-collision frequency both increase.",
          "Decreasing concentration or pressure has the opposite effect: fewer collisions per second and a lower frequency of effective collisions, so the reaction slows down.",
        ],
      },
      {
        id: "using-experimental-rate-data",
        title: "Calculating rate from experimental data",
        paragraphs: [
          "Average rate over a time interval is found from change divided by time: rate = Δ(quantity)/Δt. The quantity might be concentration of a reactant, concentration of a product, gas volume, mass loss, or titre-related concentration.",
          "When a reactant is being consumed, Δ[reactant] is negative, so many questions use rate = -Δ[reactant]/Δt to report a positive rate value. For product formation, rate = +Δ[product]/Δt.",
          "Graph questions may ask for initial rate. The initial rate is the gradient of the tangent at t = 0 on a concentration-time (or equivalent) graph. If only tabulated data are given, a small early time interval is often used as an estimate.",
        ],
      },
      {
        id: "interpreting-rate-curves",
        title: "How rate changes during a reaction",
        paragraphs: [
          "In many closed systems, rate decreases as reaction proceeds because reactant concentrations fall, so collision frequency and effective-collision frequency fall.",
          "A steep concentration-time graph means high rate (large magnitude gradient). A flatter graph means low rate. For product curves, gradient is positive and gradually reduces. For reactant curves, gradient is negative and becomes less negative with time.",
          "Being able to move between words, equations and graph gradients is a core exam skill in Topic 8.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Examiners reward precise collision-theory language and correct handling of signs, units, and gradients in data-based rate questions.",
      items: [
        "Defining rate without a time term; rate must be change in a measurable quantity per unit time.",
        "Using 'more collisions' without stating effective collisions when explaining concentration or pressure effects.",
        "Treating pressure effects as applicable to all reactions; the syllabus point here is specifically gas-phase pressure effects.",
        "Calculating rate from graph points but forgetting to convert time units (for example min to s).",
        "Reporting negative rates from reactant data when the question expects a positive rate magnitude.",
      ],
    },
    workedExamples: [
      {
        id: "t8-1-ex1",
        title: "Average rate from concentration-time data",
        problem: [
          "For reaction A -> products, [A] decreases from 0.80 mol dm⁻3 to 0.62 mol dm⁻3 in 30.0 s. Calculate the average rate of reaction over this interval.",
        ],
        solution: [
          "Use rate = -Δ[A]/Δt.",
          "Δ[A] = 0.62 - 0.80 = -0.18 mol dm⁻3.",
          "So rate = -(-0.18)/30.0 = 0.0060 mol dm⁻3 s⁻1.",
          "Average rate over the interval is 6.0 x 10⁻3 mol dm⁻3 s⁻1.",
        ],
      },
      {
        id: "t8-1-ex2",
        title: "Rate from gas-volume measurements",
        problem: [
          "A reaction produces CO₂ gas. The gas volume increases from 12.0 cm³ to 48.0 cm³ between 20.0 s and 80.0 s. Calculate the average rate of gas production in cm³ s⁻1.",
        ],
        solution: [
          "Rate = ΔV/Δt = (48.0 - 12.0) / (80.0 - 20.0).",
          "Rate = 36.0 / 60.0 = 0.600 cm³ s⁻1.",
          "The average gas-production rate in this interval is 0.600 cm³ s⁻1.",
        ],
      },
      {
        id: "t8-1-ex3",
        title: "Qualitative effect of concentration and pressure",
        problem: [
          "Explain, using collision theory, why (a) doubling concentration of aqueous reactants and (b) increasing pressure in a gaseous reaction both increase rate.",
        ],
        solution: [
          "In both cases, particle number per unit volume increases.",
          "Particles are closer together, so collisions occur more frequently.",
          "Therefore the frequency of effective collisions per second increases, so reaction rate increases.",
          "The key exam phrase is not only 'more collisions' but 'greater frequency of effective collisions'.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t8-1-st1",
        question:
          "Define the terms rate of reaction, collision frequency, effective collision, and non-effective collision.",
        modelAnswer: [
          "Rate of reaction is the change in concentration (or another measurable quantity) of reactant or product per unit time.",
          "Collision frequency is the number of collisions per unit time.",
          "An effective collision is one that leads to reaction and product formation.",
          "A non-effective collision is one that does not lead to reaction.",
        ],
      },
      {
        id: "t8-1-st2",
        question:
          "Why does increasing concentration of reactants usually increase reaction rate?",
        modelAnswer: [
          "Higher concentration means more particles in a given volume, so collisions occur more frequently.",
          "This increases the frequency of effective collisions per second, so the reaction rate increases.",
        ],
      },
      {
        id: "t8-1-st3",
        question:
          "State and explain the effect of increasing pressure on the rate of a gas-phase reaction.",
        modelAnswer: [
          "Increasing pressure increases gas-particle concentration (particles per unit volume).",
          "Collision frequency increases, so the frequency of effective collisions increases and the reaction rate rises.",
        ],
      },
      {
        id: "t8-1-st4",
        question:
          "A product concentration rises from 0.10 mol dm⁻3 to 0.34 mol dm⁻3 in 40 s. Calculate the average rate of product formation.",
        modelAnswer: [
          "rate = Δ[product]/Δt = (0.34 - 0.10) / 40 = 0.24/40 = 0.0060 mol dm⁻3 s⁻1.",
        ],
      },
      {
        id: "t8-1-st5",
        question:
          "On a concentration-time graph for a reactant, what does the gradient represent and why does its magnitude often decrease with time?",
        modelAnswer: [
          "The gradient represents rate of disappearance of the reactant (negative slope).",
          "Its magnitude decreases with time because reactant concentration falls, reducing collision frequency and therefore effective-collision frequency.",
        ],
      },
    ],
  },

  "t8-2": {
    noteId: "t8-2",
    syllabusNotes: [
      {
        id: "activation-energy-definition",
        title: "Activation energy and effective collisions",
        paragraphs: [
          "Activation energy, Eₐ, is the minimum energy that colliding particles must have for a collision to be effective and lead to reaction.",
          "Even if particles collide frequently, collisions with energy below Eₐ are non-effective because the system cannot reach the transition state required for bond rearrangement.",
          "So reaction rate depends not only on collision frequency, but on how many collisions have sufficient energy to exceed Eₐ.",
        ],
      },
      {
        id: "boltzmann-distribution-basics",
        title: "Boltzmann distribution and what it shows",
        paragraphs: [
          "The Maxwell-Boltzmann distribution shows the spread of molecular energies at a given temperature. Most particles have intermediate energies; few have very low or very high energies.",
          "On the distribution curve, Eₐ is shown as a vertical line on the energy axis. The area under the curve to the right of Eₐ represents the fraction of particles with energy greater than or equal to Eₐ.",
          "This right-hand area corresponds to particles able to take part in effective collisions.",
        ],
      },
      {
        id: "temperature-effect-via-distribution",
        title: "How increasing temperature changes the distribution",
        paragraphs: [
          "When temperature increases, the distribution curve becomes lower and broader, and its peak shifts to higher energy. Total area under the curve stays constant because total number of particles is unchanged.",
          "A much larger fraction of particles now has energy above Eₐ, so the area to the right of Eₐ increases significantly.",
          "Therefore the frequency of effective collisions increases strongly, giving a faster reaction. This explains why rate can rise sharply for modest temperature increases.",
        ],
      },
      {
        id: "frequency-and-energy-together",
        title: "Temperature effect in terms of both required ideas",
        paragraphs: [
          "Cambridge expects two linked ideas in explanations: (1) at higher temperature particles move faster, so collision frequency increases; and (2) a greater proportion of collisions have energy above Eₐ, so a greater fraction are effective.",
          "The second idea is usually the dominant reason for large rate increases with temperature.",
          "A full answer therefore mentions both collision frequency and Boltzmann-distribution shift above Eₐ.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Top-band answers in this subtopic explicitly connect Eₐ, Boltzmann-curve area above Eₐ, and effective-collision frequency.",
      items: [
        "Defining activation energy as the energy to start a reaction without saying it is the minimum energy for an effective collision.",
        "Drawing two Boltzmann curves with different total areas (total area should remain the same for same number of particles).",
        "Saying temperature increases Eₐ; Eₐ for a given uncatalysed mechanism is unchanged by temperature.",
        "Explaining rate increase only by 'more collisions' without mentioning larger fraction above Eₐ.",
        "Placing the Eₐ line at the peak of the curve by default rather than as a separate threshold position on the energy axis.",
      ],
    },
    workedExamples: [
      {
        id: "t8-2-ex1",
        title: "Using Eₐ in collision-theory language",
        problem: [
          "Explain why a reaction can be slow even when reactant concentration is high.",
        ],
        solution: [
          "High concentration gives frequent collisions, but reaction speed also depends on whether collisions are effective.",
          "If activation energy is high, only a small fraction of collisions has enough energy to exceed Eₐ.",
          "So many collisions are non-effective, and the overall rate can still be low despite high collision frequency.",
        ],
      },
      {
        id: "t8-2-ex2",
        title: "Interpreting Boltzmann curves at two temperatures",
        problem: [
          "Two Maxwell-Boltzmann curves are shown for temperatures T₁ and T₂, with T₂ > T₁ and the same Eₐ line. Describe the differences relevant to rate.",
        ],
        solution: [
          "At T₂, the curve peak is lower and shifted to higher energy; the curve is broader.",
          "The area to the right of Eₐ is larger at T₂, so a greater fraction of particles has energy above Eₐ.",
          "Hence a greater proportion of collisions is effective, so the reaction rate at T₂ is higher than at T₁.",
        ],
      },
      {
        id: "t8-2-ex3",
        title: "Complete qualitative temperature-rate explanation",
        problem: [
          "Explain qualitatively, in terms of both Boltzmann distribution and effective collisions, why increasing temperature from 25 °C to 35 °C increases reaction rate.",
        ],
        solution: [
          "At higher temperature, particles have higher average kinetic energy and move faster, increasing collision frequency.",
          "The Maxwell-Boltzmann distribution shifts so that a much larger fraction of particles has energy above Eₐ.",
          "Therefore both the number of collisions and the fraction that are effective increase; the frequency of effective collisions rises, so rate increases.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t8-2-st1",
        question: "Define activation energy, Eₐ.",
        modelAnswer: [
          "Activation energy, Eₐ, is the minimum energy required for a collision to be effective (to lead to reaction).",
        ],
      },
      {
        id: "t8-2-st2",
        question:
          "On a Boltzmann distribution graph, what does the area to the right of the Eₐ line represent?",
        modelAnswer: [
          "It represents the fraction of particles with energy greater than or equal to Eₐ, i.e. particles able to make effective collisions.",
        ],
      },
      {
        id: "t8-2-st3",
        question:
          "State two changes to the Maxwell-Boltzmann curve when temperature increases.",
        modelAnswer: [
          "The peak becomes lower and shifts to higher energy, and the distribution broadens.",
          "Total area under the curve remains constant.",
        ],
      },
      {
        id: "t8-2-st4",
        question:
          "Explain why a small temperature increase can cause a large increase in reaction rate.",
        modelAnswer: [
          "A small temperature rise causes a relatively large increase in the fraction of particles with energy above Eₐ.",
          "So the frequency of effective collisions increases markedly, giving a large rate increase.",
        ],
      },
      {
        id: "t8-2-st5",
        question:
          "A student says: 'Temperature increases rate because it lowers Eₐ.' Correct this statement.",
        modelAnswer: [
          "Temperature does not lower Eₐ for a given mechanism.",
          "Temperature increases rate mainly because more particles have energy above the same Eₐ, and collision frequency is also higher.",
        ],
      },
    ],
  },

  "t8-3": {
    noteId: "t8-3",
    syllabusNotes: [
      {
        id: "catalyst-and-catalysis-definitions",
        title: "Catalyst and catalysis: core meaning",
        paragraphs: [
          "A catalyst is a substance that increases the rate of a reaction without being used up overall. Catalysis is the process of increasing reaction rate by a catalyst.",
          "A catalyst works by providing an alternative reaction mechanism with a lower activation energy than the uncatalysed pathway.",
          "Because the mechanism changes, the energy profile changes: Eₐ is reduced, so more particles can react per unit time.",
        ],
      },
      {
        id: "boltzmann-view-of-catalysis",
        title: "Catalytic effect explained with Boltzmann distribution",
        paragraphs: [
          "At fixed temperature, the Maxwell-Boltzmann distribution curve itself does not change when a catalyst is added, because particle energy distribution at that temperature is unchanged.",
          "Instead, the Eₐ threshold for the catalysed pathway is lower. On the same curve, the new Eₐ line lies further left.",
          "So the area to the right of Eₐ (fraction of particles with enough energy) is larger for the catalysed pathway. This means more effective collisions per second and therefore a faster reaction.",
        ],
      },
      {
        id: "reaction-pathway-diagrams-with-catalyst",
        title: "Interpreting pathway diagrams with and without catalyst",
        paragraphs: [
          "A reaction pathway diagram with catalyst and without catalyst has the same reactant and product enthalpy levels, so ΔH for the reaction is unchanged.",
          "The catalysed pathway has a lower peak than the uncatalysed pathway, indicating lower activation energy.",
          "In multi-step mechanisms, there may be several peaks, but the key examined point is that the highest barrier is reduced in the catalysed route compared with the uncatalysed route.",
        ],
      },
      {
        id: "homogeneous-vs-heterogeneous-basics",
        title: "Homogeneous and heterogeneous catalysts",
        paragraphs: [
          "A homogeneous catalyst is in the same physical phase as the reactants, often all in solution. A heterogeneous catalyst is in a different phase from at least one reactant, commonly a solid catalyst with gaseous or liquid reactants.",
          "Both types accelerate reaction by changing mechanism and lowering activation energy. The syllabus emphasis in this subtopic is the energy-profile and Boltzmann explanation, not detailed industrial mechanism steps.",
          "For exam writing, always state catalyst type correctly and link catalysis to lower Eₐ rather than vague claims such as 'gives more energy'.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Catalysis questions are often easy marks when responses clearly link alternative mechanism, lower Eₐ, and unchanged ΔH.",
      items: [
        "Saying a catalyst increases rate by increasing particle energy or temperature.",
        "Claiming catalysts change ΔH or equilibrium constant value; for a fixed temperature they change rate, not reaction enthalpy.",
        "Drawing catalysed and uncatalysed pathways with different reactant or product enthalpy levels.",
        "Stating that catalysts are not involved in the reaction at all; they are involved in steps but regenerated overall.",
        "Confusing homogeneous and heterogeneous by phase rather than by whether they are chemically similar substances.",
      ],
    },
    workedExamples: [
      {
        id: "t8-3-ex1",
        title: "Pathway-diagram interpretation",
        problem: [
          "A reaction has Eₐ = 95 kJ mol⁻1 uncatalysed and Eₐ = 52 kJ mol⁻1 catalysed. State what changes and what stays the same on the energy profile.",
        ],
        solution: [
          "The activation-energy barrier is lower for the catalysed pathway (95 to 52 kJ mol⁻1), so the catalysed profile has a lower peak.",
          "Reactant and product enthalpy levels remain the same in both cases, so ΔH is unchanged.",
          "Therefore catalyst changes mechanism and Eₐ, but not overall enthalpy change.",
        ],
      },
      {
        id: "t8-3-ex2",
        title: "Boltzmann explanation of catalytic rate increase",
        problem: [
          "Explain using Boltzmann distribution why adding a catalyst increases rate at constant temperature.",
        ],
        solution: [
          "At constant temperature, the distribution of particle energies is unchanged.",
          "A catalyst lowers Eₐ, moving the threshold energy to a lower value.",
          "So a larger fraction of particles has energy above Eₐ, increasing effective-collision frequency and hence rate.",
        ],
      },
      {
        id: "t8-3-ex3",
        title: "Classifying catalyst type",
        problem: [
          "State whether each is homogeneous or heterogeneous catalysis: (a) acid-catalysed ester hydrolysis in aqueous solution, (b) solid metal catalyst used with gaseous reactants.",
        ],
        solution: [
          "(a) Homogeneous catalysis: catalyst and reactants are in the same phase (aqueous solution).",
          "(b) Heterogeneous catalysis: catalyst is solid, reactants are gases, so different phases are present.",
          "In both cases rate increase is due to an alternative mechanism with lower activation energy.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t8-3-st1",
        question: "Define catalyst and catalysis.",
        modelAnswer: [
          "A catalyst is a substance that increases reaction rate without being used up overall.",
          "Catalysis is the process by which a catalyst increases reaction rate.",
        ],
      },
      {
        id: "t8-3-st2",
        question:
          "How does a catalyst increase reaction rate in terms of mechanism and activation energy?",
        modelAnswer: [
          "A catalyst provides an alternative reaction mechanism with lower activation energy.",
          "With a lower Eₐ, more collisions are effective per second, so rate increases.",
        ],
      },
      {
        id: "t8-3-st3",
        question:
          "On a Maxwell-Boltzmann graph at fixed temperature, what changes when a catalyst is added?",
        modelAnswer: [
          "The distribution curve shape does not change at fixed temperature.",
          "The Eₐ line shifts to lower energy for the catalysed pathway, increasing the area to the right of Eₐ.",
        ],
      },
      {
        id: "t8-3-st4",
        question:
          "What is the difference between homogeneous and heterogeneous catalysts?",
        modelAnswer: [
          "A homogeneous catalyst is in the same phase as reactants.",
          "A heterogeneous catalyst is in a different phase from at least one reactant.",
        ],
      },
      {
        id: "t8-3-st5",
        question:
          "A student says: 'A catalyst speeds a reaction because it makes the reaction more exothermic.' Explain why this is incorrect.",
        modelAnswer: [
          "A catalyst does not change the enthalpy change (ΔH) between reactants and products.",
          "It speeds the reaction by lowering activation energy through an alternative mechanism, increasing the frequency of effective collisions.",
        ],
      },
    ],
  },
};
