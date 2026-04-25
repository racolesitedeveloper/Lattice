import type { NoteDraft } from "./types";

/** Full teaching notes for 9702 Topic 5 — subtopics 5.1–5.2 (see lib/notes/AUTHORING.md). */
export const PHYSICS_TOPIC5_DRAFTS: Record<string, NoteDraft> = {
  "t5-1": {
    noteId: "t5-1",
    syllabusNotes: [
      {
        id: "energy-idea",
        title: "Energy as a conserved quantity",
        paragraphs: [
          "Energy is a scalar quantity that measures the capacity of a system to do work or to transfer thermal energy. In mechanics, you will often track energy in forms such as kinetic energy, gravitational potential energy, elastic potential energy and internal (thermal) energy.",
          "The central principle is conservation of energy: energy cannot be created or destroyed, only transferred between stores or transformed from one form to another. This statement applies to an isolated system. In practical problems, the useful skill is to define a suitable system and then account for all significant transfers across its boundary.",
          "If no external work is done on a system and no energy leaves as heating, sound or radiation, the total mechanical energy can remain constant. If non-conservative forces such as friction act, mechanical energy usually decreases while internal energy increases. Total energy is still conserved; it has been transferred into less mechanically useful forms.",
        ],
      },
      {
        id: "work-link",
        title: "Work done and energy transfer",
        paragraphs: [
          "Work done by a force is a measure of energy transferred by that force. For a constant force F acting through displacement s in the same direction, W = Fs. More generally, for angle θ between force and displacement, W = Fs cos θ.",
          "A positive value of W means the force transfers energy to the object or system. A negative value means the force removes mechanical energy from it. For example, a braking force does negative work on a moving car, reducing its kinetic energy while increasing thermal energy in brake pads and tyres.",
          "At AS/A Level, you should connect equations rather than memorise isolated statements: the work-energy theorem states that net work done on an object equals the change in kinetic energy, net work = ΔEk. This statement underpins later derivations such as ΔEp = mgΔh and Ek = (1/2)mv².",
        ],
      },
      {
        id: "power-and-rate",
        title: "Power as the rate of energy transfer",
        paragraphs: [
          "Power is the rate of doing work or transferring energy, P = Delta E / Delta t. The SI unit is watt (W), where 1 W = 1 J s⁻¹.",
          "For constant speed motion with force component parallel to velocity, P = Fv. This follows from P = W/t and W = Fs with s/t = v. The relation is useful in transport and machinery questions when tractive force and speed are both known or when one must be found from power rating.",
          "Do not confuse energy and power. Energy measures total transfer (in joules). Power measures how quickly that transfer occurs (in watts). Two devices can use the same energy but at different rates, giving different powers.",
        ],
      },
      {
        id: "mechanical-energy-balance",
        title: "Using energy balances in mechanics",
        paragraphs: [
          "An energy balance starts by stating initial and final states and identifying any non-conservative work or dissipation. A robust template is: initial mechanical energy + energy input by external forces = final mechanical energy + energy dissipated.",
          "For many one-dimensional problems, this reduces to Ek₁ + Ep₁ + external work input = Ek₂ + Ep₂ + energy dissipated. If dissipative effects are negligible and no external work enters, then Ek₁ + Ep₁ = Ek₂ + Ep₂.",
          "In exam solutions, define your level for gravitational potential energy, keep signs consistent, and show at least one line explaining where each term comes from. Examiners credit clear physical accounting, not just a final substitution line.",
        ],
      },
      {
        id: "efficiency",
        title: "Efficiency and useful energy transfer",
        paragraphs: [
          "Efficiency compares useful output with total input: efficiency = useful energy output / total energy input, or equivalently useful power output / total power input over the same interval.",
          "Efficiency is dimensionless and is often expressed as a percentage by multiplying by 100%. Real systems have efficiency less than 100% because some energy is transferred in forms not useful for the intended purpose, commonly as thermal energy due to friction or electrical resistance.",
          "In calculations, keep clear whether you are given input and output energies or input and output powers. The same ratio form applies, but mixing energy from one time interval with power from another is not valid.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Examiners usually reward systematic energy accounting. Marks are often lost when candidates treat conservation of mechanical energy as universally true without checking for dissipation or external work.",
      items: [
        "Stating 'energy is lost' when friction acts. Mechanical energy is reduced, but total energy is conserved and transferred mainly to internal energy of surroundings.",
        "Using P = Fv when force is not parallel to velocity, without taking the parallel component.",
        "Mixing joules and watts in one equation step as if they were interchangeable. Joule is energy, watt is rate of transfer.",
        "Applying conservation of mechanical energy in situations with significant resistive force but no allowance for dissipated energy.",
        "Giving efficiency as a percentage in one line and as a decimal in another without clear conversion, causing arithmetic errors.",
      ],
    },
    workedExamples: [
      {
        id: "t5-1-ex1",
        title: "Energy transfer with friction on a horizontal surface",
        problem: [
          "A 2.0 kg block is projected along a horizontal rough surface at 6.0 m s⁻¹ and comes to rest after travelling 4.0 m. Calculate the average resistive force.",
        ],
        solution: [
          "Initial kinetic energy: Ek = (1/2)mv² = 0.5 x 2.0 x 6.0² = 36 J.",
          "Final kinetic energy is zero because the block comes to rest, so change in kinetic energy is -36 J. On a horizontal surface there is no change in gravitational potential energy.",
          "The work done by resistive force equals the change in mechanical energy: resistive work = -36 J. With average resistive force F over distance s, W = -Fs, so -F(4.0) = -36.",
          "Hence F = 9.0 N opposite to motion. The magnitude of the average resistive force is 9.0 N.",
        ],
      },
      {
        id: "t5-1-ex2",
        title: "Power, force and speed",
        problem: [
          "An electric motor delivers a constant useful power of 1.8 kW to pull a crate at steady speed 0.75 m s⁻¹ along a straight horizontal floor. Find the pulling force on the crate.",
        ],
        solution: [
          "At steady speed, use P = Fv for the component of force parallel to motion.",
          "Convert power: 1.8 kW = 1800 W.",
          "So F = P/v = 1800 / 0.75 = 2400 N.",
          "The pulling force is 2.4 x 10³ N. Because speed is constant, this would be balanced by an equal total resistive force in the opposite direction.",
        ],
      },
      {
        id: "t5-1-ex3",
        title: "Efficiency from input power and useful work rate",
        problem: [
          "A pump takes electrical input power 950 W and raises water at a useful rate of 680 J every second. Determine the efficiency and state one likely form of wasted energy.",
        ],
        solution: [
          "Useful power output is 680 J s⁻¹ = 680 W.",
          "Efficiency = useful output power / input power = 680 / 950 = 0.716.",
          "As a percentage, efficiency = 71.6%, usually quoted as 72% to two significant figures.",
          "A likely wasted pathway is thermal energy due to electrical resistance in coils and mechanical friction in moving parts.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t5-1-st1",
        question:
          "State the principle of conservation of energy and explain briefly why friction does not violate it.",
        modelAnswer: [
          "Conservation of energy states that in an isolated system total energy remains constant; energy is transferred or transformed but not created or destroyed.",
          "Friction does not violate this because it converts mechanical energy into internal (thermal) energy and sometimes sound. Mechanical energy decreases, but total energy is conserved.",
        ],
      },
      {
        id: "t5-1-st2",
        question:
          "A 0.50 kg ball has speed 12 m s⁻¹. Calculate its kinetic energy.",
        modelAnswer: [
          "Ek = (1/2)mv² = 0.5 x 0.50 x 12² = 36 J.",
        ],
      },
      {
        id: "t5-1-st3",
        question:
          "A machine does 4.5 x 10⁴ J of useful work in 3.0 min. Calculate its useful output power in watts.",
        modelAnswer: [
          "Convert time: 3.0 min = 180 s.",
          "P = E/t = (4.5 x 10⁴) / 180 = 250 W.",
        ],
      },
      {
        id: "t5-1-st4",
        question:
          "Explain why the equation P = Fv is not always valid in the form using full force magnitude F.",
        modelAnswer: [
          "Power transfer depends on the component of force parallel to velocity, so the correct form is P = Fv cos θ.",
          "Using P = Fv directly is valid only when force and velocity are in the same direction (θ = 0 degrees).",
        ],
      },
      {
        id: "t5-1-st5",
        question:
          "A device has 320 W useful output from 500 W input. Find efficiency as (a) decimal and (b) percentage.",
        modelAnswer: [
          "Efficiency = 320/500 = 0.64.",
          "As a percentage, efficiency = 64%.",
        ],
      },
    ],
  },

  "t5-2": {
    noteId: "t5-2",
    syllabusNotes: [
      {
        id: "definitions",
        title: "Kinetic energy and gravitational potential energy",
        paragraphs: [
          "Kinetic energy is the energy associated with motion. For an object of mass m moving with speed v, Ek = (1/2)mv². Because speed is squared, doubling speed gives four times the kinetic energy.",
          "Gravitational potential energy near Earth's surface is the energy due to height in a gravitational field. For vertical displacement h in a region where g is approximately constant, Delta Ep = mgh.",
          "In this level of treatment, the sign of Delta Ep depends on your chosen reference and direction: raising an object increases its gravitational potential energy; lowering it decreases gravitational potential energy by the same magnitude.",
        ],
      },
      {
        id: "deriving-mgh-from-work",
        title: "Deriving Delta Ep = mgDelta h from work done",
        paragraphs: [
          "For vertical lifting at constant speed in a uniform gravitational field, the lifting force equals weight mg. If the object is raised by vertical distance Delta h, work done against gravity is W = F s = mgDelta h.",
          "This work done is energy transferred to the gravitational potential store of the Earth-object system. Therefore Delta Ep = mgDelta h. The result is valid when g is approximately constant over the height change.",
          "If the object moves downward by Delta h, gravitational potential energy decreases by the same magnitude. In equation form, only the sign changes with direction; the magnitude of change is still mg|Delta h|.",
        ],
      },
      {
        id: "deriving-ke-from-kinematics",
        title: "Deriving Ek = (1/2)mv² from equations of motion",
        paragraphs: [
          "Start with constant resultant force and acceleration in one dimension: F = ma. For motion from speed u to speed v through displacement s, use v² - u² = 2as, so a = (v² - u²)/(2s).",
          "Substitute into F = ma to get F = m(v² - u²)/(2s). Multiplying by s gives work done W = Fs = (1/2)m(v² - u²).",
          "Since net work done equals change in kinetic energy, Delta Ek = (1/2)m(v² - u²). Choosing u = 0 defines kinetic energy at speed v as Ek = (1/2)mv².",
        ],
      },
      {
        id: "constant-g-approx",
        title: "Using Delta Ep = mgh and its limits",
        paragraphs: [
          "The expression Delta Ep = mgh assumes gravitational field strength g is constant over the height change considered. This is an excellent approximation for ordinary laboratory and building-scale heights.",
          "When a question gives motion close to Earth and does not indicate large altitude changes, this approximation is expected. Use g = 9.81 m s⁻² unless another value is stated.",
          "For much larger separations from Earth, g changes with distance and a different gravitational potential model is needed. At AS stage, you mainly apply mgh in near-Earth mechanics questions.",
        ],
      },
      {
        id: "energy-conversion",
        title: "Conversion between Ep and Ek",
        paragraphs: [
          "In ideal motion with negligible air resistance, loss of gravitational potential energy equals gain in kinetic energy: -Delta Ep = Delta Ek. Equivalently, Ek + Ep remains constant.",
          "For an object falling from rest through height h, mgh = (1/2)mv² gives v = sqrt(2gh). Mass cancels, so in this ideal model final speed depends on height and g, not on mass.",
          "If resistive forces are present, not all lost gravitational potential energy becomes kinetic energy. Some is transferred to internal energy of air and object, so kinetic energy gained is smaller than mgh.",
        ],
      },
      {
        id: "projectile-and-vertical-motion",
        title: "Applying energy methods to vertical and projectile motion",
        paragraphs: [
          "For purely vertical throws, energy provides a direct route to maximum height or impact speed without first finding time. At maximum height, speed is zero, so initial kinetic energy equals gain in gravitational potential energy if air resistance is negligible.",
          "For projectiles, gravitational potential energy depends only on vertical position. If launch and landing heights are the same and drag is neglected, speed at landing equals launch speed, although direction differs.",
          "This energy perspective complements kinematics. In exams, use energy when it gives the shortest route and mention assumptions such as negligible air resistance.",
        ],
      },
      {
        id: "choosing-zero-level",
        title: "Reference level and sign consistency",
        paragraphs: [
          "Gravitational potential energy is relative to a chosen zero level. You may define Ep = 0 at ground level, table level or any convenient height, provided you keep that choice consistent throughout the calculation.",
          "Only differences in potential energy are physically significant in these problems. Changing the zero shifts all Ep values by the same constant and does not change measurable outcomes such as speed.",
          "In written solutions, briefly state your reference where confusion is possible. This prevents sign errors and helps the examiner follow your energy accounting.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Questions on mgh and (1/2)mv² are often straightforward, but marks are lost by inconsistent signs, poor assumptions, or treating all lost potential energy as kinetic in non-ideal situations.",
      items: [
        "Using h as total distance travelled instead of vertical height change in Delta Ep = mgh.",
        "Forgetting that speed is squared in kinetic energy and writing Ek = mv².",
        "Cancelling mass incorrectly when additional non-gravitational forces are present.",
        "Assuming speed at return equals launch speed without checking if resistive forces are negligible.",
        "Mixing g values within one question, for example using both 9.8 and 10 without explanation.",
      ],
    },
    workedExamples: [
      {
        id: "t5-2-ex1",
        title: "Speed after falling through a known height",
        problem: [
          "A stone is dropped from rest from a height of 12 m above the ground. Neglect air resistance. Calculate its speed just before impact.",
        ],
        solution: [
          "Take ground as zero potential level. Initial kinetic energy is zero. Initial gravitational potential energy relative to ground is mgh = m x 9.81 x 12.",
          "Just before impact, Ep is approximately zero and kinetic energy is (1/2)mv².",
          "By conservation of mechanical energy: mgh = (1/2)mv². Mass cancels, so v = sqrt(2gh) = sqrt(2 x 9.81 x 12) = 15.3 m s⁻¹.",
          "Speed just before impact is 15 m s⁻¹ to two significant figures (or 15.3 m s⁻¹ to three significant figures).",
        ],
      },
      {
        id: "t5-2-ex2",
        title: "Maximum height from launch speed",
        problem: [
          "A 0.20 kg ball is projected vertically upward with speed 14 m s⁻¹. Neglect air resistance. Find the maximum height reached above the launch point.",
        ],
        solution: [
          "At launch, kinetic energy is Ek1 = (1/2)mv² = 0.5 x 0.20 x 14² = 19.6 J. This expression comes from the derivation Delta Ek = (1/2)m(v² - u²) with u = 0.",
          "At maximum height, speed is zero so kinetic energy is zero. The gain in gravitational potential energy equals 19.6 J.",
          "Set mgh = 19.6: 0.20 x 9.81 x h = 19.6, so h = 19.6 / 1.962 = 10.0 m. The equation mgh represents work done against weight mg over vertical rise h.",
          "Maximum height above launch point is 10.0 m. The mass could also be cancelled earlier by writing (1/2)v² = gh.",
        ],
      },
      {
        id: "t5-2-ex3",
        title: "Including dissipation in an energy balance",
        problem: [
          "A 1.5 kg package slides down from rest through a vertical height of 3.0 m on a rough ramp. At the bottom, its speed is 6.0 m s⁻¹. Calculate the energy dissipated by resistive forces.",
        ],
        solution: [
          "Loss of gravitational potential energy: Delta Ep = mgh = 1.5 x 9.81 x 3.0 = 44.1 J.",
          "Gain in kinetic energy: Delta Ek = (1/2)mv² = 0.5 x 1.5 x 6.0² = 27.0 J.",
          "Not all lost potential energy appears as kinetic energy, so dissipated energy = 44.1 - 27.0 = 17.1 J.",
          "Hence approximately 17 J is transferred to internal energy (and possibly sound) by resistive forces.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t5-2-st1",
        question:
          "State the expressions for kinetic energy and for change in gravitational potential energy near Earth's surface. Define every symbol used and state one condition for each formula.",
        modelAnswer: [
          "Kinetic energy: Ek = (1/2)mv², where m is mass and v is speed.",
          "Change in gravitational potential energy near Earth: Delta Ep = mgh, where m is mass, g is gravitational field strength and h is vertical height change.",
          "For Ek = (1/2)mv², the derivation assumes classical mechanics and follows from constant-force kinematics via work done. For Delta Ep = mgh, g must be approximately constant over the height change.",
        ],
      },
      {
        id: "t5-2-st2",
        question:
          "An object rises vertically by 2.5 m. If its mass is 4.0 kg, find the increase in gravitational potential energy using g = 9.81 m s⁻².",
        modelAnswer: [
          "Delta Ep = mgh = 4.0 x 9.81 x 2.5 = 98.1 J.",
          "Increase in gravitational potential energy is 98 J to two significant figures.",
        ],
      },
      {
        id: "t5-2-st3",
        question:
          "A body has mass 0.80 kg and kinetic energy 25 J. Calculate its speed and state the rearranged equation used.",
        modelAnswer: [
          "From Ek = (1/2)mv², rearrange to v = sqrt(2Ek/m).",
          "Substitute: v = sqrt((2 x 25)/0.80) = sqrt(62.5) = 7.91 m s⁻¹.",
          "Speed is 7.9 m s⁻¹ to two significant figures.",
        ],
      },
      {
        id: "t5-2-st4",
        question:
          "Explain why changing the zero level of gravitational potential energy does not change the final speed found from an energy calculation.",
        modelAnswer: [
          "Only differences in potential energy enter the conservation equation.",
          "Changing zero level adds the same constant to both initial and final potential energies, so their difference is unchanged and predicted speed is unchanged.",
        ],
      },
      {
        id: "t5-2-st5",
        question:
          "A ball is thrown upward and later returns to the release height with air resistance present. Compare its speed at return with its launch speed and explain using energy ideas.",
        modelAnswer: [
          "Return speed is less than launch speed.",
          "During ascent and descent, resistive forces transfer part of the mechanical energy to internal energy of air and ball, so at the original height the kinetic energy is smaller than at launch.",
        ],
      },
    ],
  },
};
