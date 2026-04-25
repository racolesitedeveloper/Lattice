import type { SubtopicPracticePack } from "./types";

export const PHYSICS_TOPIC5_PRACTICE: Record<string, SubtopicPracticePack> = {
  "t5-1": {
    noteId: "t5-1",
    drills: [
      {
        id: "t5-1-d1",
        noteId: "t5-1",
        kind: "mcq",
        difficulty: 1,
        stem:
          "A moving trolley slows down on a rough horizontal track and eventually stops. Which statement best explains the energy changes?",
        options: [
          { id: "A", text: "Total energy is destroyed by friction." },
          { id: "B", text: "Mechanical energy is transferred mainly to internal energy." },
          { id: "C", text: "Kinetic energy is converted entirely into gravitational potential energy." },
          { id: "D", text: "Energy is created in the trolley's wheels." },
        ],
        correctOptionId: "B",
        explanation:
          "Friction does negative work on the trolley, reducing mechanical energy while transferring energy to thermal stores in surfaces and surroundings.",
        distractorRationale: {
          B: "Correct: total energy is conserved, but mechanical energy decreases.",
          C: "No height change is described, so gravitational potential energy is not the main store.",
          D: "Energy is not created; it is transferred or transformed.",
        },
        tags: ["energy-conservation", "friction", "mechanical-energy"],
      },
      {
        id: "t5-1-d2",
        noteId: "t5-1",
        kind: "mcq",
        difficulty: 2,
        stem:
          "A motor supplies useful power of 1.2 kW while pulling a load at constant speed 0.50 m s^-1. What is the pulling force parallel to motion?",
        options: [
          { id: "A", text: "600 N" },
          { id: "B", text: "1200 N" },
          { id: "C", text: "2400 N" },
          { id: "D", text: "3600 N" },
        ],
        correctOptionId: "C",
        explanation:
          "Use P = Fv for force parallel to velocity. F = P / v = 1200 / 0.50 = 2400 N.",
        distractorRationale: {
          B: "This treats power numerically as force and ignores division by speed.",
          C: "Correct substitution with SI units gives 2400 N.",
          D: "This overestimates by mismanaging decimal division.",
        },
        tags: ["power", "p-equals-fv", "steady-speed"],
      },
      {
        id: "t5-1-d3",
        noteId: "t5-1",
        kind: "mcq",
        difficulty: 3,
        stem:
          "A winch has input power 900 W and useful output power 630 W. What is its efficiency?",
        options: [
          { id: "A", text: "0.27" },
          { id: "B", text: "0.70" },
          { id: "C", text: "1.43" },
          { id: "D", text: "70%" },
        ],
        correctOptionId: "B",
        explanation:
          "Efficiency = useful output / input = 630 / 900 = 0.70. This is equivalent to 70%.",
        distractorRationale: {
          B: "Correct decimal form of efficiency.",
          C: "Efficiency cannot exceed 1 for real machines.",
          D: "Numerically equivalent but question asks in decimal form.",
        },
        tags: ["efficiency", "power-ratio", "units"],
      },
      {
        id: "t5-1-d4",
        noteId: "t5-1",
        kind: "structured",
        difficulty: 1,
        marks: 3,
        stem:
          "State the principle of conservation of energy and explain why braking a bicycle does not violate it.",
        modelAnswerPoints: [
          "Total energy of an isolated system remains constant; energy is not created or destroyed.",
          "Braking converts kinetic energy to internal (thermal) energy in brakes/tyres/road and some sound.",
          "Mechanical energy decreases, but total energy remains conserved.",
        ],
        workedSolution: [
          "Write the conservation statement first to secure the definition mark.",
          "Then describe transfer pathway during braking: kinetic -> thermal (+ sound).",
          "Conclude explicitly that loss is from mechanical store only, not total energy.",
        ],
        commonMistake:
          "Saying 'energy is lost' without naming where it is transferred to.",
        tags: ["definitions", "friction", "energy-stores"],
      },
      {
        id: "t5-1-d5",
        noteId: "t5-1",
        kind: "structured",
        difficulty: 2,
        marks: 4,
        stem:
          "A 1.5 kg cart moves at 8.0 m s^-1 on a rough level track and stops after 5.0 m. Calculate the average resistive force.",
        modelAnswerPoints: [
          "Initial kinetic energy = (1/2)mv^2 = 0.5 x 1.5 x 8.0^2 = 48 J.",
          "Final kinetic energy is 0 J, so resistive work magnitude is 48 J.",
          "Using W = Fs gives F = 48 / 5.0 = 9.6 N.",
          "Force acts opposite motion.",
        ],
        workedSolution: [
          "No height change means gravitational potential term is unchanged.",
          "Change in mechanical energy equals work done by resistive forces.",
          "Compute F from work per distance and keep sign interpretation in words.",
        ],
        commonMistake:
          "Using W = F/t instead of the correct work relation W = Fs.",
        tags: ["work-energy", "resistive-force", "kinetic-energy"],
      },
      {
        id: "t5-1-d6",
        noteId: "t5-1",
        kind: "structured",
        difficulty: 2,
        marks: 4,
        stem:
          "A lifting motor raises a 250 kg load vertically at constant speed 0.40 m s^-1. Calculate the useful output power. Take g = 9.81 m s^-2.",
        modelAnswerPoints: [
          "At constant speed, lifting force equals weight: F = mg.",
          "F = 250 x 9.81 = 2452.5 N.",
          "Power P = Fv = 2452.5 x 0.40 = 981 W.",
          "Useful output power = 9.81 x 10^2 W (about 0.98 kW).",
        ],
        workedSolution: [
          "Use force balance first: no acceleration implies net force zero.",
          "Substitute weight into P = Fv.",
          "Present final answer with sensible significant figures and optional kW conversion.",
        ],
        commonMistake:
          "Using P = mg/h or mixing height and speed in the same step.",
        tags: ["power", "constant-speed", "lifting"],
      },
      {
        id: "t5-1-d7",
        noteId: "t5-1",
        kind: "structured",
        difficulty: 3,
        marks: 5,
        stem:
          "A machine receives 2.4 kJ of energy each second. Its useful output each second is 1.5 kJ.\n(a) Calculate efficiency as a decimal and percentage.\n(b) State one likely cause of wasted transfer.",
        modelAnswerPoints: [
          "Input power = 2.4 kJ s^-1 and useful output power = 1.5 kJ s^-1.",
          "Efficiency = 1.5 / 2.4 = 0.625.",
          "Percentage efficiency = 62.5%.",
          "A valid waste pathway: thermal energy due to friction/resistance.",
        ],
        workedSolution: [
          "Because values are per second, they are power values and can be ratioed directly.",
          "Compute decimal first to avoid arithmetic slips, then convert to percent.",
          "Finish with one physically plausible non-useful transfer mechanism.",
        ],
        commonMistake:
          "Dividing input by output and obtaining efficiency greater than 1.",
        tags: ["efficiency", "power", "exam-technique"],
      },
      {
        id: "t5-1-d8",
        noteId: "t5-1",
        kind: "structured",
        difficulty: 4,
        marks: 6,
        stem:
          "A 3.0 kg crate is pulled 12 m up a rough slope at constant speed. The vertical rise is 4.0 m and the pulling force is 25 N parallel to slope.\nTake g = 9.81 m s^-2.\n(a) Determine work done by pulling force.\n(b) Determine gain in gravitational potential energy.\n(c) Hence find energy dissipated.",
        modelAnswerPoints: [
          "Work input by pull = Fs = 25 x 12 = 300 J.",
          "Gain in GPE = mgh = 3.0 x 9.81 x 4.0 = 117.72 J.",
          "At constant speed, no net kinetic change.",
          "Dissipated energy = 300 - 117.72 = 182.28 J (about 182 J).",
        ],
        workedSolution: [
          "Use an energy balance: input work = increase in mechanical energy + dissipated energy.",
          "Mechanical increase here is entirely gravitational because speed is unchanged.",
          "Subtract useful gravitational gain from input to get dissipation by resistive effects.",
        ],
        commonMistake:
          "Using slope length (12 m) as h in mgh instead of vertical rise (4.0 m).",
        tags: ["energy-balance", "inclined-plane", "dissipation"],
      },
      {
        id: "t5-1-d9",
        noteId: "t5-1",
        kind: "structured",
        difficulty: 4,
        marks: 6,
        stem:
          "A car of mass 900 kg travels at 18 m s^-1 on level road. Brakes apply a constant retarding force and the car stops in 36 m.\n(a) Calculate the retarding force.\n(b) If braking lasts 4.0 s, estimate average power dissipated.",
        modelAnswerPoints: [
          "Initial kinetic energy = (1/2)mv^2 = 0.5 x 900 x 18^2 = 145800 J.",
          "Retarding work magnitude equals KE loss, so F = 145800 / 36 = 4050 N.",
          "Average dissipated power = energy / time = 145800 / 4.0 = 36450 W.",
          "So power dissipated is about 3.65 x 10^4 W.",
        ],
        workedSolution: [
          "Part (a): equate mechanical energy lost to work done by resistive force.",
          "Part (b): power is rate of energy transfer; use total dissipated energy over braking time.",
          "State direction separately: the force is opposite motion.",
        ],
        commonMistake:
          "Using P = Fv with initial speed only and calling it average power without justification.",
        tags: ["braking", "work-energy", "average-power"],
      },
      {
        id: "t5-1-d10",
        noteId: "t5-1",
        kind: "structured",
        difficulty: 5,
        marks: 7,
        stem:
          "A conveyor raises boxes at steady rate. In 1 minute, 180 boxes of mass 12 kg each are raised through 1.6 m. Motor input power is 7.5 kW.\nTake g = 9.81 m s^-2.\n(a) Calculate useful output power.\n(b) Calculate efficiency.\n(c) State one engineering method to improve efficiency.",
        modelAnswerPoints: [
          "Useful energy per box = mgh = 12 x 9.81 x 1.6 = 188.352 J.",
          "Total useful energy in 1 min = 180 x 188.352 = 33903.36 J.",
          "Useful power = 33903.36 / 60 = 565.056 W (about 565 W).",
          "Efficiency = 565.056 / 7500 = 0.0753 (about 7.5%).",
          "Example improvement: reduce friction via lubrication/alignment or use higher-efficiency motor.",
        ],
        workedSolution: [
          "Compute per-item energy gain first, then multiply by throughput to get total per minute.",
          "Convert to power using the 60 s interval.",
          "Compare useful output with input rating using a dimensionless ratio.",
          "End with realistic method that reduces non-useful thermal losses.",
        ],
        commonMistake:
          "Forgetting to divide by time and reporting total energy as power.",
        tags: ["efficiency", "throughput", "power-calculation"],
      },
    ],
    flashcards: [
      {
        id: "t5-1-f1",
        noteId: "t5-1",
        difficulty: 1,
        front: "State the principle of conservation of energy.",
        back: "Energy cannot be created or destroyed; it is only transferred or transformed.",
        examPhrasing:
          "In an isolated system, total energy remains constant although stores/forms may change.",
        confusionPair: "Conservation of energy vs conservation of mechanical energy",
        tags: ["definition", "core-principle"],
      },
      {
        id: "t5-1-f2",
        noteId: "t5-1",
        difficulty: 1,
        front: "What is power and its SI unit?",
        back: "Power is rate of energy transfer (or work done), measured in watt (W), where 1 W = 1 J s^-1.",
        examPhrasing: "P = Delta E / Delta t.",
        tags: ["power", "units"],
      },
      {
        id: "t5-1-f3",
        noteId: "t5-1",
        difficulty: 2,
        front: "Write the relation between power, force, and speed.",
        back: "For force component parallel to motion: P = Fv.",
        examPhrasing: "More generally, P = Fv cos theta.",
        confusionPair: "Full force magnitude vs component parallel to velocity",
        tags: ["power", "vectors"],
      },
      {
        id: "t5-1-f4",
        noteId: "t5-1",
        difficulty: 2,
        front: "Define efficiency in terms of energy or power.",
        back: "Efficiency = useful output / total input, using either energy or power over the same interval.",
        examPhrasing:
          "Efficiency is dimensionless and can be expressed as a decimal or percentage.",
        tags: ["efficiency", "ratios"],
      },
      {
        id: "t5-1-f5",
        noteId: "t5-1",
        difficulty: 3,
        front: "Why does friction reduce mechanical energy but not violate conservation of energy?",
        back: "Friction transfers mechanical energy to internal energy (thermal) and sound, so total energy is still conserved.",
        examPhrasing:
          "Mechanical energy decreases due to non-conservative work; total energy remains constant.",
        tags: ["friction", "non-conservative-forces"],
      },
      {
        id: "t5-1-f6",
        noteId: "t5-1",
        difficulty: 3,
        front: "State the work-energy theorem.",
        back: "Net work done on an object equals change in its kinetic energy.",
        examPhrasing: "W_net = Delta E_k.",
        confusionPair: "Net work vs work by one individual force",
        tags: ["work-energy", "theorem"],
      },
      {
        id: "t5-1-f7",
        noteId: "t5-1",
        difficulty: 4,
        front:
          "Give a robust energy-balance template for mechanics problems with dissipation.",
        back: "Initial mechanical energy + external work input = final mechanical energy + energy dissipated.",
        examPhrasing:
          "E_mech,1 + W_ext = E_mech,2 + E_diss.",
        tags: ["energy-balance", "problem-solving"],
      },
      {
        id: "t5-1-f8",
        noteId: "t5-1",
        difficulty: 4,
        front:
          "A machine has 840 W input and 588 W useful output. State efficiency in decimal and percent.",
        back: "Efficiency = 588/840 = 0.70 = 70%.",
        examPhrasing: "Quote both forms only if requested; otherwise match question wording.",
        tags: ["efficiency", "calculation"],
      },
      {
        id: "t5-1-f9",
        noteId: "t5-1",
        difficulty: 5,
        front:
          "Exam checkpoint: what three statements should appear in a full-mark energy method answer?",
        back: "Define system/initial-final states; write balanced energy equation with all transfers; interpret sign and unit-consistent result.",
        examPhrasing:
          "Credit is awarded for physical accounting, not just substitution.",
        tags: ["exam-technique", "structured-response"],
      },
      {
        id: "t5-1-f10",
        noteId: "t5-1",
        difficulty: 5,
        front: "When is it invalid to assume conservation of mechanical energy?",
        back: "When non-conservative forces (e.g., friction/drag) or external work cause mechanical energy transfer not accounted as potential/kinetic only.",
        examPhrasing:
          "Mechanical energy is conserved only when dissipative effects are negligible and no net external non-conservative work is done.",
        confusionPair: "Total energy conservation vs mechanical energy conservation",
        tags: ["assumptions", "model-validity"],
      },
    ],
  },
  "t5-2": {
    noteId: "t5-2",
    drills: [
      {
        id: "t5-2-d1",
        noteId: "t5-2",
        kind: "mcq",
        difficulty: 1,
        stem: "Which expression gives kinetic energy of a body of mass m moving at speed v?",
        options: [
          { id: "A", text: "mv^2" },
          { id: "B", text: "(1/2)mv^2" },
          { id: "C", text: "mgh" },
          { id: "D", text: "mg/v" },
        ],
        correctOptionId: "B",
        explanation: "The standard AS/A Level relation is E_k = (1/2)mv^2.",
        distractorRationale: {
          B: "Correct formula with the required factor of 1/2.",
          C: "This is gravitational potential-energy change near Earth.",
          D: "Dimensionally incorrect for energy.",
        },
        tags: ["kinetic-energy", "formula"],
      },
      {
        id: "t5-2-d2",
        noteId: "t5-2",
        kind: "mcq",
        difficulty: 2,
        stem:
          "A 2.0 kg object is raised vertically by 3.0 m. Take g = 9.81 m s^-2. What is its gain in gravitational potential energy?",
        options: [
          { id: "A", text: "5.9 J" },
          { id: "B", text: "19.6 J" },
          { id: "C", text: "58.9 J" },
          { id: "D", text: "294 J" },
        ],
        correctOptionId: "C",
        explanation: "Delta E_p = mgh = 2.0 x 9.81 x 3.0 = 58.86 J.",
        distractorRationale: {
          B: "Uses m = 1 kg effectively, missing mass factor.",
          C: "Correct substitution and arithmetic.",
          D: "Likely from multiplying by 5 instead of 3 or other over-scaling.",
        },
        tags: ["gravitational-potential-energy", "calculation"],
      },
      {
        id: "t5-2-d3",
        noteId: "t5-2",
        kind: "mcq",
        difficulty: 3,
        stem:
          "A ball is dropped from rest from height h with negligible air resistance. Which statement is correct just before impact?",
        options: [
          { id: "A", text: "Its speed depends on mass and h." },
          { id: "B", text: "Its speed is sqrt(gh)." },
          { id: "C", text: "Its speed is sqrt(2gh)." },
          { id: "D", text: "Its kinetic energy is mgh/2." },
        ],
        correctOptionId: "C",
        explanation:
          "From mgh = (1/2)mv^2, mass cancels to give v = sqrt(2gh).",
        distractorRationale: {
          B: "Missing factor of 2 from energy equation rearrangement.",
          C: "Correct derivation from conservation of mechanical energy.",
          D: "At impact (ideal), KE gain equals mgh, not half of it.",
        },
        tags: ["free-fall", "energy-conversion", "derive-speed"],
      },
      {
        id: "t5-2-d4",
        noteId: "t5-2",
        kind: "structured",
        difficulty: 1,
        marks: 3,
        stem:
          "Define kinetic energy and gravitational potential-energy change near Earth. Include symbols and units.",
        modelAnswerPoints: [
          "Kinetic energy: E_k = (1/2)mv^2, where m is mass (kg), v is speed (m s^-1), E_k in J.",
          "Near Earth, gravitational potential-energy change: Delta E_p = mgh.",
          "In mgh, h is vertical height change (m), g is gravitational field strength (m s^-2).",
        ],
        workedSolution: [
          "Give each formula with symbol definitions to secure method/definition marks.",
          "State that h must be vertical change, not path length.",
          "Include SI units for all main quantities.",
        ],
        commonMistake:
          "Writing E_k = mv^2 and losing the factor 1/2.",
        tags: ["definitions", "units", "formula-recall"],
      },
      {
        id: "t5-2-d5",
        noteId: "t5-2",
        kind: "structured",
        difficulty: 2,
        marks: 4,
        stem:
          "A 0.60 kg ball is thrown vertically upward at 10 m s^-1. Neglect air resistance.\nCalculate maximum height above launch point. Take g = 9.81 m s^-2.",
        modelAnswerPoints: [
          "At top, speed is zero so initial KE converts to GPE gain.",
          "(1/2)mv^2 = mgh -> h = v^2/(2g).",
          "h = 10^2 / (2 x 9.81) = 5.10 m.",
          "Maximum height is about 5.1 m.",
        ],
        workedSolution: [
          "Use energy directly for shortest method; mass cancels automatically.",
          "State assumption of negligible air resistance.",
          "Substitute carefully and quote answer with sensible significant figures.",
        ],
        commonMistake:
          "Using h = v^2/g (missing factor of 2).",
        tags: ["vertical-motion", "max-height", "energy-method"],
      },
      {
        id: "t5-2-d6",
        noteId: "t5-2",
        kind: "structured",
        difficulty: 2,
        marks: 4,
        stem:
          "An object of mass 1.2 kg has kinetic energy 54 J.\n(a) Calculate its speed.\n(b) State the rearranged equation used.",
        modelAnswerPoints: [
          "Start from E_k = (1/2)mv^2.",
          "Rearrange: v = sqrt(2E_k/m).",
          "v = sqrt((2 x 54)/1.2) = sqrt(90) = 9.49 m s^-1.",
          "Speed is 9.5 m s^-1 (2 s.f.).",
        ],
        workedSolution: [
          "Show algebraic rearrangement before substitution for exam clarity.",
          "Evaluate quantity inside square root first to reduce calculator slips.",
          "Round only at end to preserve accuracy.",
        ],
        commonMistake:
          "Rearranging to v = 2E_k/m without taking square root.",
        tags: ["rearrangement", "kinetic-energy", "numeracy"],
      },
      {
        id: "t5-2-d7",
        noteId: "t5-2",
        kind: "structured",
        difficulty: 3,
        marks: 5,
        stem:
          "A 2.5 kg package slides from rest down a ramp through vertical drop 2.0 m. At the bottom, speed is 5.0 m s^-1.\nTake g = 9.81 m s^-2.\nCalculate energy dissipated by resistive forces.",
        modelAnswerPoints: [
          "Loss of GPE = mgh = 2.5 x 9.81 x 2.0 = 49.05 J.",
          "Gain in KE = (1/2)mv^2 = 0.5 x 2.5 x 5.0^2 = 31.25 J.",
          "Dissipated energy = 49.05 - 31.25 = 17.8 J (approx).",
          "Dissipation is mainly to internal energy/sound.",
        ],
        workedSolution: [
          "Apply full energy balance, not just ideal conversion.",
          "Compute each store change separately then take difference.",
          "State physical interpretation of the missing mechanical energy.",
        ],
        commonMistake:
          "Assuming all lost mgh becomes KE even when data show otherwise.",
        tags: ["dissipation", "rough-surfaces", "energy-balance"],
      },
      {
        id: "t5-2-d8",
        noteId: "t5-2",
        kind: "structured",
        difficulty: 4,
        marks: 6,
        stem:
          "A projectile is launched at speed 20 m s^-1 from ground level and lands at the same level. Neglect air resistance.\n(a) Compare launch and landing speeds.\n(b) Find maximum height if vertical launch component is 12 m s^-1.\nTake g = 9.81 m s^-2.",
        modelAnswerPoints: [
          "At equal height with no dissipation, total mechanical energy gives equal speed magnitudes at launch and landing.",
          "So landing speed equals 20 m s^-1.",
          "At highest point, vertical speed is zero so gain in GPE from vertical KE: h = u_y^2/(2g).",
          "h = 12^2/(2 x 9.81) = 7.34 m.",
        ],
        workedSolution: [
          "Part (a) depends only on same start/end height and no drag.",
          "Part (b) uses vertical component energy conversion only.",
          "Keep scalar speed (magnitude) distinct from velocity direction.",
        ],
        commonMistake:
          "Using total 20 m s^-1 in maximum-height calculation instead of vertical component.",
        tags: ["projectile-motion", "energy", "components"],
      },
      {
        id: "t5-2-d9",
        noteId: "t5-2",
        kind: "structured",
        difficulty: 4,
        marks: 6,
        stem:
          "Show, using equations of motion and work done, that the change in kinetic energy for motion from speed u to v is Delta E_k = (1/2)m(v^2 - u^2).",
        modelAnswerPoints: [
          "Use v^2 - u^2 = 2as so a = (v^2 - u^2)/(2s).",
          "From Newton's second law, F = ma = m(v^2 - u^2)/(2s).",
          "Work done W = Fs = (1/2)m(v^2 - u^2).",
          "By work-energy theorem, W_net = Delta E_k, giving required result.",
        ],
        workedSolution: [
          "Present chain of substitutions clearly, keeping symbols general.",
          "Multiply by s only after expressing F in terms of speed change.",
          "Final line links mathematical result to physical theorem.",
        ],
        commonMistake:
          "Using v - u instead of v^2 - u^2 and losing derivation validity.",
        tags: ["derivation", "work-energy-theorem", "kinematics-link"],
      },
      {
        id: "t5-2-d10",
        noteId: "t5-2",
        kind: "structured",
        difficulty: 5,
        marks: 7,
        stem:
          "A 70 kg climber ascends from a ledge to a platform 18 m higher. During the climb, the climber's kinetic energy increases by 250 J. Total chemical energy transferred from the climber's muscles is 18.0 kJ.\nTake g = 9.81 m s^-2.\n(a) Calculate increase in gravitational potential energy.\n(b) Calculate total increase in mechanical energy.\n(c) Determine overall efficiency of conversion from chemical to mechanical energy.",
        modelAnswerPoints: [
          "Increase in GPE = mgh = 70 x 9.81 x 18 = 12360.6 J.",
          "Increase in mechanical energy = Delta E_p + Delta E_k = 12360.6 + 250 = 12610.6 J.",
          "Input chemical energy = 18.0 kJ = 18000 J.",
          "Efficiency = 12610.6 / 18000 = 0.7006 (about 70.1%).",
          "Remaining energy is transferred mainly as thermal energy.",
        ],
        workedSolution: [
          "Convert all energies to joules before ratio operations.",
          "Mechanical increase includes both potential and kinetic terms.",
          "Use efficiency definition on total useful mechanical output against total chemical input.",
          "Interpret non-useful difference physically to complete exam-style response.",
        ],
        commonMistake:
          "Using only mgh as useful output and forgetting kinetic-energy increase term.",
        tags: ["multi-step-energy", "efficiency", "human-power"],
      },
    ],
    flashcards: [
      {
        id: "t5-2-f1",
        noteId: "t5-2",
        difficulty: 1,
        front: "Write the formula for kinetic energy.",
        back: "E_k = (1/2)mv^2.",
        examPhrasing:
          "Kinetic energy is proportional to mass and to the square of speed.",
        tags: ["formula", "kinetic-energy"],
      },
      {
        id: "t5-2-f2",
        noteId: "t5-2",
        difficulty: 1,
        front: "Write the near-Earth formula for change in gravitational potential energy.",
        back: "Delta E_p = mgh, where h is vertical height change.",
        examPhrasing:
          "Use this when g is approximately constant over the height interval.",
        tags: ["formula", "gpe"],
      },
      {
        id: "t5-2-f3",
        noteId: "t5-2",
        difficulty: 2,
        front: "If speed doubles, what happens to kinetic energy?",
        back: "Kinetic energy becomes four times larger because E_k proportional v^2.",
        examPhrasing: "E_k2 / E_k1 = (v2/v1)^2.",
        confusionPair: "Linear vs quadratic dependence on speed",
        tags: ["proportionality", "exam-quick-check"],
      },
      {
        id: "t5-2-f4",
        noteId: "t5-2",
        difficulty: 2,
        front: "What assumption underlies using Delta E_p = mgh?",
        back: "Gravitational field strength g is effectively constant across the height change.",
        examPhrasing:
          "Valid for ordinary near-Earth height differences in AS/A Level contexts.",
        tags: ["assumptions", "model"],
      },
      {
        id: "t5-2-f5",
        noteId: "t5-2",
        difficulty: 3,
        front: "Derive speed after falling height h from rest (no air resistance).",
        back: "From mgh = (1/2)mv^2, v = sqrt(2gh).",
        examPhrasing:
          "Mass cancels, so impact speed is independent of mass in this ideal model.",
        tags: ["free-fall", "derivation"],
      },
      {
        id: "t5-2-f6",
        noteId: "t5-2",
        difficulty: 3,
        front: "How does changing the zero level for potential energy affect calculated speeds?",
        back: "It does not affect speeds because only potential-energy differences enter conservation equations.",
        examPhrasing:
          "Adding a constant to all E_p values leaves Delta E_p unchanged.",
        tags: ["reference-level", "sign-convention"],
      },
      {
        id: "t5-2-f7",
        noteId: "t5-2",
        difficulty: 4,
        front:
          "State the energy relation for ideal conversion between gravitational potential and kinetic energy.",
        back: "-Delta E_p = Delta E_k, so E_k + E_p is constant when dissipation is negligible.",
        examPhrasing:
          "Use conservation of mechanical energy only under stated ideal assumptions.",
        confusionPair: "Mechanical conservation vs total conservation",
        tags: ["conversion", "mechanical-energy"],
      },
      {
        id: "t5-2-f8",
        noteId: "t5-2",
        difficulty: 4,
        front: "What is the key correction when resistance is present in vertical/ramp motion?",
        back: "Include a dissipated-energy term: lost GPE = gain KE + energy dissipated.",
        examPhrasing:
          "Do not force mgh = (1/2)mv^2 unless resistive work is negligible.",
        tags: ["dissipation", "energy-balance"],
      },
      {
        id: "t5-2-f9",
        noteId: "t5-2",
        difficulty: 5,
        front:
          "Give the derived expression for kinetic-energy change between speeds u and v.",
        back: "Delta E_k = (1/2)m(v^2 - u^2).",
        examPhrasing:
          "Obtained by combining v^2 - u^2 = 2as, F = ma, and W = Fs.",
        tags: ["derivation", "high-yield"],
      },
      {
        id: "t5-2-f10",
        noteId: "t5-2",
        difficulty: 5,
        front:
          "Exam checklist for multi-step energy questions in Topic 5.2?",
        back: "Set reference level and assumptions, write full energy balance, keep units/signs consistent, then interpret any missing energy as dissipation.",
        examPhrasing:
          "Marks reward method clarity plus physical interpretation, not final number alone.",
        tags: ["exam-technique", "structured-solving"],
      },
    ],
  },
};
