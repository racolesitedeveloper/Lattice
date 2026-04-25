import type { NoteDraft } from "./types";

/** Full teaching notes for 9702 Topic 16 — subtopics 16.1–16.2 (see lib/notes/AUTHORING.md). */
export const PHYSICS_TOPIC16_DRAFTS: Record<string, NoteDraft> = {
  "t16-1": {
    noteId: "t16-1",
    syllabusNotes: [
      {
        id: "internal-energy-state",
        title: "Internal energy and state of a system",
        paragraphs: [
          "Internal energy U is the total microscopic energy stored in a system due to its particles. It is a state quantity: its value is determined by the state variables of the system (for example temperature, pressure, volume and phase), not by the route taken to reach that state.",
          "At this level, internal energy is described as the sum of a random distribution of microscopic kinetic and potential energies associated with the molecules. The kinetic part comes from random translational, rotational and vibrational motion. The potential part comes from intermolecular forces and depends strongly on separation and phase.",
          "Because U is a state quantity, a change in internal energy ΔU depends only on initial and final states. Different processes can transfer different amounts of heat and work, but if they connect the same two equilibrium states, ΔU is the same.",
        ],
      },
      {
        id: "random-kinetic-and-potential",
        title: "Microscopic picture: random kinetic and potential energies",
        paragraphs: [
          "In a gas, molecules move rapidly and randomly; intermolecular spacing is relatively large except during brief collisions. The internal energy is then mainly kinetic, with smaller average contribution from intermolecular potential energy in the ideal-gas model.",
          "In liquids and solids, molecules remain close enough for intermolecular potential energy to be significant. Energy supplied can change kinetic energy (temperature rise), potential energy (for example phase change), or both.",
          "The word random is essential. Internal energy is not energy of bulk motion of the whole object. If an object translates with speed v, that macroscopic kinetic energy is separate from its internal energy.",
        ],
      },
      {
        id: "temperature-and-u-link",
        title: "Relating temperature rise to increase in internal energy",
        paragraphs: [
          "Temperature measures average random kinetic energy per particle. So, for a fixed amount of material in one phase, a rise in temperature corresponds to an increase in the kinetic-energy contribution to internal energy.",
          "For many practical cases in this syllabus, heating an object without phase change raises its temperature and therefore increases U. If an object cools, its internal energy decreases.",
          "A temperature rise does not automatically mean all transferred energy becomes kinetic. In some systems, especially where expansion occurs, part of the transferred energy can also appear as increased potential-energy contribution or as work done by the system. The required syllabus link is that a rise in temperature implies an increase in internal energy.",
        ],
      },
      {
        id: "state-changes-and-u",
        title: "Internal energy changes without temperature change",
        paragraphs: [
          "During melting or boiling at constant pressure, temperature can remain constant while internal energy still increases. The added energy is used mainly to increase intermolecular potential energy by increasing separation against attractive forces.",
          "This explains why temperature alone does not fully specify internal energy across different phases. Two states can have equal temperature but different internal energy if their molecular arrangements differ.",
          "In exam responses, separate statements carefully: temperature change indicates change in average molecular kinetic energy; phase change at constant temperature mainly changes potential-energy contribution to U.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Examiners reward precise microscopic language and correct distinction between internal energy and macroscopic energies. Most errors come from over-simplifying U as only kinetic energy or from confusing state and process quantities.",
      items: [
        "Stating that internal energy is only molecular kinetic energy; the syllabus requires kinetic and potential contributions.",
        "Confusing internal energy with total mechanical energy of bulk motion, for example treating 1/2mv² of the whole object as part of U.",
        "Saying a temperature rise causes molecules to move faster in one direction; motion is random, so average random kinetic energy increases.",
        "Claiming no internal-energy change occurs during phase change because temperature is constant.",
        "Treating internal energy as path-dependent like heat and work, rather than a state quantity determined by system state.",
      ],
    },
    workedExamples: [
      {
        id: "t16-1-ex1",
        title: "Identifying microscopic energy contributions",
        problem: [
          "A sealed sample of gas is heated from 290 K to 330 K with no phase change. State which part(s) of internal energy must increase and explain briefly.",
        ],
        solution: [
          "Temperature rise means average random molecular kinetic energy increases, so the kinetic contribution to internal energy must increase.",
          "For a gas treated at this level, internal energy is mainly random kinetic energy, so U increases.",
          "Potential-energy contribution may change slightly in real gases, but the compulsory conclusion from the syllabus outcome is that higher temperature corresponds to higher internal energy.",
        ],
      },
      {
        id: "t16-1-ex2",
        title: "Temperature constant but internal energy increasing",
        problem: [
          "Ice at 0 °C is heated and melts completely at 0 °C. Explain how internal energy changes although temperature does not.",
        ],
        solution: [
          "At constant temperature, average random kinetic energy per molecule is unchanged.",
          "Energy supplied is used mainly to overcome intermolecular binding, increasing molecular separation. This increases intermolecular potential energy.",
          "Therefore internal energy increases even though temperature is constant.",
        ],
      },
      {
        id: "t16-1-ex3",
        title: "State-function reasoning across different processes",
        problem: [
          "A system goes from state A to state B by two different processes: process 1 involves slow heating and expansion, process 2 involves electrical heating at fixed volume. Explain what can and cannot differ between the two processes.",
        ],
        solution: [
          "Because internal energy is a state quantity, ΔU from A to B is the same for both processes.",
          "However, heat transfer q and work transfer W can differ because they depend on process path.",
          "So the way energy is transferred can be different, while the final change in internal energy between the same states is unchanged.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t16-1-st1",
        question:
          "Define internal energy in molecular terms suitable for this syllabus.",
        modelAnswer: [
          "Internal energy is the total microscopic energy associated with molecules of a system.",
          "It is the sum of a random distribution of molecular kinetic energies and intermolecular potential energies.",
        ],
      },
      {
        id: "t16-1-st2",
        question:
          "Explain why a rise in temperature of an object implies an increase in its internal energy.",
        modelAnswer: [
          "Temperature is linked to average random molecular kinetic energy.",
          "If temperature rises, average random kinetic energy increases, so internal energy increases.",
        ],
      },
      {
        id: "t16-1-st3",
        question:
          "Give one situation where internal energy changes but temperature remains constant, and explain which microscopic contribution changes.",
        modelAnswer: [
          "During melting or boiling at constant pressure, temperature can stay constant while internal energy increases.",
          "The main change is an increase in intermolecular potential energy as molecules become less strongly bound or further apart.",
        ],
      },
      {
        id: "t16-1-st4",
        question:
          "State one reason internal energy is called a state quantity.",
        modelAnswer: [
          "Its value is determined by the thermodynamic state of the system, and ΔU between two states depends only on those states, not on the path taken.",
        ],
      },
      {
        id: "t16-1-st5",
        question:
          "Distinguish between internal energy and the kinetic energy 1/2mv² of a moving object.",
        modelAnswer: [
          "Internal energy refers to random microscopic energies of molecules within the object.",
          "1/2mv² is macroscopic kinetic energy of the object’s centre-of-mass motion and is not part of internal energy.",
        ],
      },
    ],
  },

  "t16-2": {
    noteId: "t16-2",
    syllabusNotes: [
      {
        id: "constant-pressure-work",
        title: "Work at constant pressure: W = pΔV",
        paragraphs: [
          "When a gas changes volume at constant external pressure p, the magnitude of work associated with volume change is pΔV, where ΔV = Vfinal - Vinitial.",
          "In this course convention, W in the first-law expression is work done on the system. For expansion, the gas does work on surroundings, so work done on the gas is negative. For compression, surroundings do work on the gas, so work done on the gas is positive.",
          "At constant pressure, this sign logic can be written directly: W(on system) = -pΔV. So if ΔV > 0 (expansion), W is negative; if ΔV < 0 (compression), W is positive.",
        ],
      },
      {
        id: "first-law-sign-convention",
        title: "First law in this syllabus form: ΔU = q + W",
        paragraphs: [
          "The first law of thermodynamics expresses conservation of energy for thermodynamic systems. In this syllabus notation: ΔU = q + W.",
          "Here q is energy transferred to the system by heating. So q is positive when the system is heated and negative when the system loses energy by heating to surroundings.",
          "W is work done on the system. So W is positive for compression and negative for expansion. This single sign convention keeps the equation consistent across processes.",
        ],
      },
      {
        id: "physical-interpretation-of-first-law",
        title: "Interpreting process outcomes with ΔU = q + W",
        paragraphs: [
          "If q is positive and W is also positive, internal energy increases strongly because the system gains energy both by heating and by work done on it.",
          "If q is positive but W is negative (heated expansion), the internal-energy increase is reduced by energy transferred out as work done by the gas.",
          "If q = 0 (adiabatic idealisation), then ΔU = W: internal-energy change is caused entirely by work done on or by the system. Expansion gives W < 0 and tends to reduce U; compression gives W > 0 and tends to increase U.",
        ],
      },
      {
        id: "process-cases-and-constant-volume",
        title: "Useful limiting cases and checks",
        paragraphs: [
          "At constant volume, ΔV = 0 so volume-change work is zero. Then first law reduces to ΔU = q for this form, meaning all heating changes internal energy directly.",
          "At constant pressure expansion, q may be positive while ΔU is small if a significant fraction of transferred energy leaves as pΔV work by the gas.",
          "A reliable exam check is to estimate signs before arithmetic: heating suggests q > 0, expansion suggests W < 0, compression suggests W > 0. Then confirm final ΔU sign is physically reasonable for the scenario.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "First-law questions are usually sign-convention questions. Examiners reward consistent definitions of q and W and clear distinction between work done by the gas and work done on the gas.",
      items: [
        "Using ΔU = q - W while also taking W as work done on the system, creating double sign reversal.",
        "Forgetting that W = pΔV usually gives work done by the gas in magnitude form, then substituting directly into ΔU = q + W without sign conversion.",
        "Stating expansion means positive W in this syllabus convention; here expansion gives W(on system) < 0.",
        "Using pressure in kPa with volume in m³ without converting when numerical answer is required in joules.",
        "Treating heat q as a system property rather than an energy transfer process quantity.",
      ],
    },
    workedExamples: [
      {
        id: "t16-2-ex1",
        title: "Work done on gas during constant-pressure expansion",
        problem: [
          "A gas expands at constant pressure 1.5 x 10⁵ Pa from 2.0 x 10⁻³ m³ to 3.2 x 10⁻³ m³. Calculate (a) work done by the gas and (b) work done on the gas.",
        ],
        solution: [
          "Volume change is ΔV = 3.2 x 10⁻³ - 2.0 x 10⁻³ = 1.2 x 10⁻³ m³.",
          "Work done by gas at constant pressure is pΔV = (1.5 x 10⁵)(1.2 x 10⁻³) = 180 J.",
          "With syllabus sign convention W is work done on system, so W(on gas) = -180 J for expansion.",
        ],
      },
      {
        id: "t16-2-ex2",
        title: "Using the first law with heating and expansion",
        problem: [
          "A system receives 420 J by heating and does 150 J of work on surroundings. Using ΔU = q + W with W as work done on the system, find ΔU.",
        ],
        solution: [
          "Heating to system gives q = +420 J.",
          "If system does 150 J of work on surroundings, work done on system is W = -150 J.",
          "Therefore ΔU = q + W = 420 + (-150) = +270 J.",
          "Internal energy increases by 270 J.",
        ],
      },
      {
        id: "t16-2-ex3",
        title: "Adiabatic compression sign analysis",
        problem: [
          "A gas is compressed adiabatically so that 95 J of work is done on it. Find q and ΔU in the syllabus sign convention, and state whether temperature tends to rise or fall.",
        ],
        solution: [
          "Adiabatic means no energy transfer by heating, so q = 0.",
          "Compression means work done on system is positive, here W = +95 J.",
          "From first law, ΔU = q + W = 0 + 95 = +95 J.",
          "Internal energy increases, so temperature tends to rise.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t16-2-st1",
        question:
          "State the first law of thermodynamics in the syllabus sign convention and define each symbol.",
        modelAnswer: [
          "The first law is ΔU = q + W.",
          "ΔU is increase in internal energy, q is energy transferred to the system by heating, and W is work done on the system.",
        ],
      },
      {
        id: "t16-2-st2",
        question:
          "For constant-pressure volume change, write the expression for work done on the gas in terms of p and ΔV, and give the sign for expansion.",
        modelAnswer: [
          "Work done on gas is W = -pΔV when pressure is constant.",
          "For expansion ΔV > 0, so W is negative.",
        ],
      },
      {
        id: "t16-2-st3",
        question:
          "A gas at constant pressure 2.0 x 10⁵ Pa is compressed by 4.0 x 10⁻⁴ m³. Calculate W done on the gas.",
        modelAnswer: [
          "Here ΔV is negative: ΔV = -4.0 x 10⁻⁴ m³.",
          "W = -pΔV = -(2.0 x 10⁵)(-4.0 x 10⁻⁴) = +80 J.",
          "So 80 J of work is done on the gas.",
        ],
      },
      {
        id: "t16-2-st4",
        question:
          "A system loses 60 J by heating while 140 J of work is done on it. Find ΔU.",
        modelAnswer: [
          "Losing energy by heating means q = -60 J.",
          "Work done on system is W = +140 J.",
          "ΔU = q + W = -60 + 140 = +80 J.",
        ],
      },
      {
        id: "t16-2-st5",
        question:
          "Explain briefly why sign conventions for W must be stated before solving first-law problems.",
        modelAnswer: [
          "Different textbooks define W differently (work by system or work on system).",
          "If the convention is not stated, the same physical process can be given opposite signs and lead to wrong numerical conclusions.",
          "Stating the convention ensures consistent use of ΔU = q + W throughout the solution.",
        ],
      },
    ],
  },
};
