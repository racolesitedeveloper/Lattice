import type { NoteDraft } from "./types";

/** Full teaching notes for 9702 Topic 21 — subtopics 21.1–21.2 (see lib/notes/AUTHORING.md). */
export const PHYSICS_TOPIC21_DRAFTS: Record<string, NoteDraft> = {
  "t21-1": {
    noteId: "t21-1",
    syllabusNotes: [
      {
        id: "ac-terms-and-waveform",
        title: "Period, frequency and peak value for alternating quantities",
        paragraphs: [
          "An alternating current (a.c.) changes direction periodically. An alternating potential difference also changes sign periodically. For sinusoidal a.c., both current and voltage follow smooth sine-wave variation with time.",
          "The period T is the time for one complete cycle. Frequency f is number of cycles per second, so f = 1/T. The peak value is the maximum magnitude reached in either positive or negative half-cycle.",
          "For current, peak value is I₀ and instantaneous current i varies between +I₀ and -I₀. For voltage, peak value is V₀ and instantaneous voltage v varies between +V₀ and -V₀.",
        ],
      },
      {
        id: "sinusoidal-equations",
        title: "Using x = x₀ sin ωt for a.c. current or voltage",
        paragraphs: [
          "A sinusoidal alternating quantity is written in the form x = x₀ sin ωt, where x can represent i or v, and x₀ is the corresponding peak value.",
          "Angular frequency is ω in rad s⁻¹, linked to period and frequency by ω = 2πf = 2π/T.",
          "If a question gives i = I₀ sin ωt, you can read peak current directly as I₀ and determine frequency from ω. The same method applies to v = V₀ sin ωt.",
          "At t = 0, x = 0 for this sine form. The waveform then rises to +x₀ at ωt = π/2, returns to zero at π, reaches -x₀ at 3π/2, and completes one cycle at 2π.",
        ],
      },
      {
        id: "rms-vs-peak",
        title: "Distinguishing r.m.s. values from peak values",
        paragraphs: [
          "Root-mean-square (r.m.s.) value is the steady d.c. value that would produce the same power dissipation in a given resistor as the a.c. quantity.",
          "For sinusoidal current, Iᵣₘₛ = I₀/√2. For sinusoidal voltage, Vᵣₘₛ = V₀/√2.",
          "Peak values are larger than r.m.s. values by factor √2. So I₀ = √2 Iᵣₘₛ and V₀ = √2 Vᵣₘₛ.",
          "Household mains ratings are quoted as r.m.s. values, not peak values. Examiners often test this distinction directly.",
        ],
      },
      {
        id: "mean-and-maximum-power-in-resistor",
        title: "Mean power and maximum power in a resistive load",
        paragraphs: [
          "For a pure resistor R with sinusoidal current i = I₀ sin ωt, instantaneous power is p = i²R = I₀²R sin²ωt.",
          "Maximum instantaneous power occurs when sin²ωt = 1, so pₘₐₓ = I₀²R.",
          "The time average of sin² over a complete cycle is 1/2. Therefore mean power is Pₘₑₐₙ = (1/2)I₀²R.",
          "Hence for sinusoidal a.c. in a resistor, mean power is half the maximum power. This is a required syllabus fact and follows directly from the waveform mathematics.",
        ],
      },
      {
        id: "equivalent-rms-power-forms",
        title: "Equivalent mean-power forms using r.m.s. quantities",
        paragraphs: [
          "Using Iᵣₘₛ = I₀/√2 gives Pₘₑₐₙ = Iᵣₘₛ²R for a resistor.",
          "Using Vᵣₘₛ = V₀/√2 also gives Pₘₑₐₙ = Vᵣₘₛ²/R.",
          "These are the a.c. equivalents of d.c. resistor power formulas, provided the quoted V and I are r.m.s. values.",
          "If you are given peak values, convert first before using r.m.s.-form equations.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Marks in 21.1 are usually lost through confusion between peak and r.m.s. values or by using d.c. assumptions without checking whether values are instantaneous, peak or r.m.s..",
      items: [
        "Treating Iᵣₘₛ and I₀ as the same quantity, then overestimating power by factor 2.",
        "Using f = 2πω instead of ω = 2πf.",
        "Calling p = VI with V and I as peak values the mean power directly in a resistor.",
        "Forgetting that mean power is half maximum power only for sinusoidal a.c. in a resistive load.",
        "Stating average current over a full sine-wave cycle is Iᵣₘₛ; average signed current over a full cycle is zero.",
      ],
    },
    workedExamples: [
      {
        id: "t21-1-ex1",
        title: "Extracting f and T from i = I₀ sin ωt",
        problem: [
          "An alternating current is i = 3.5 sin(120πt), where i is in A and t in s. Find (a) peak current, (b) angular frequency, (c) frequency and (d) period.",
        ],
        solution: [
          "Compare with i = I₀ sin ωt.",
          "So I₀ = 3.5 A and ω = 120π rad s⁻¹.",
          "Frequency f = ω/(2π) = (120π)/(2π) = 60 Hz.",
          "Period T = 1/f = 1/60 = 1.67 x 10⁻² s.",
        ],
      },
      {
        id: "t21-1-ex2",
        title: "Converting between peak and r.m.s.",
        problem: [
          "A sinusoidal mains supply has Vᵣₘₛ = 230 V. Calculate (a) peak voltage V₀ and (b) the peak current in a 920 ohm resistor connected to this supply.",
        ],
        solution: [
          "For sinusoidal voltage, V₀ = √2 Vᵣₘₛ = 1.414 x 230 = 325 V (3 s.f.).",
          "First find Iᵣₘₛ in the resistor: Iᵣₘₛ = Vᵣₘₛ/R = 230/920 = 0.250 A.",
          "Then I₀ = √2 Iᵣₘₛ = 1.414 x 0.250 = 0.354 A.",
          "So V₀ = 325 V and I₀ = 0.354 A.",
        ],
      },
      {
        id: "t21-1-ex3",
        title: "Mean and maximum power in a resistor",
        problem: [
          "A resistor R = 50 ohm carries sinusoidal current with peak value I₀ = 4.0 A. Determine (a) maximum instantaneous power and (b) mean power.",
        ],
        solution: [
          "Maximum power is pₘₐₓ = I₀²R = 4.0² x 50 = 800 W.",
          "For sinusoidal a.c. in a resistor, mean power is half maximum:",
          "Pₘₑₐₙ = pₘₐₓ/2 = 800/2 = 400 W.",
          "Check using r.m.s.: Iᵣₘₛ = I₀/√2 = 2.83 A, so Iᵣₘₛ²R = 400 W, consistent.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t21-1-st1",
        question:
          "State the meanings of period, frequency and peak value for a sinusoidal alternating current.",
        modelAnswer: [
          "Period is time for one complete cycle of the alternating current.",
          "Frequency is number of complete cycles per second, f = 1/T.",
          "Peak value is the maximum magnitude of current in a cycle, denoted I₀.",
        ],
      },
      {
        id: "t21-1-st2",
        question:
          "For v = 12 sin(400πt) (V), determine V₀, ω, f and T.",
        modelAnswer: [
          "By comparison with v = V₀ sin ωt: V₀ = 12 V and ω = 400π rad s⁻¹.",
          "f = ω/(2π) = 200 Hz.",
          "T = 1/f = 5.0 x 10⁻³ s.",
        ],
      },
      {
        id: "t21-1-st3",
        question:
          "A sinusoidal current has peak value 6.0 A. Calculate Iᵣₘₛ.",
        modelAnswer: ["Iᵣₘₛ = I₀/√2 = 6.0/1.414 = 4.24 A."],
      },
      {
        id: "t21-1-st4",
        question:
          "Show that mean power in a resistor is half maximum power for sinusoidal current i = I₀ sin ωt.",
        modelAnswer: [
          "Instantaneous power is p = i²R = I₀²R sin²ωt.",
          "Maximum occurs at sin²ωt = 1, so pₘₐₓ = I₀²R.",
          "Over one cycle, mean of sin²ωt is 1/2, so Pₘₑₐₙ = (1/2)I₀²R = pₘₐₓ/2.",
        ],
      },
      {
        id: "t21-1-st5",
        question:
          "A 100 ohm resistor is connected to a sinusoidal supply of Vᵣₘₛ = 50 V. Find mean power and maximum instantaneous power.",
        modelAnswer: [
          "Mean power in resistor: Pₘₑₐₙ = Vᵣₘₛ²/R = 50²/100 = 25 W.",
          "For sinusoidal a.c., mean power is half maximum, so pₘₐₓ = 2Pₘₑₐₙ = 50 W.",
        ],
      },
    ],
  },

  "t21-2": {
    noteId: "t21-2",
    syllabusNotes: [
      {
        id: "rectification-overview",
        title: "Rectification and why it is needed",
        paragraphs: [
          "Rectification is conversion of alternating current or voltage into unidirectional output suitable for d.c. supply applications.",
          "A diode conducts readily in one direction (forward bias) and blocks current in the reverse direction (for ideal analysis). This one-way behavior makes rectification possible.",
          "The output of a rectifier is not automatically steady d.c.; it is usually pulsating and may need smoothing.",
        ],
      },
      {
        id: "half-wave-vs-full-wave-graphs",
        title: "Graphical distinction: half-wave and full-wave rectification",
        paragraphs: [
          "Half-wave rectification passes only one half-cycle of the input sine wave. The opposite half-cycle is blocked, so output drops to zero every alternate half-cycle.",
          "Full-wave rectification inverts the blocked half-cycle so both half-cycles appear as positive pulses at the output.",
          "Graphically, half-wave output has one pulse per input cycle, while full-wave output has two pulses per input cycle and therefore less time near zero output.",
        ],
      },
      {
        id: "single-diode-half-wave",
        title: "Single diode half-wave rectifier operation",
        paragraphs: [
          "With one diode and a load resistor in series, the diode is forward-biased during one half-cycle and reverse-biased during the other.",
          "During forward-bias half-cycle, current flows through the load and output follows that half of the sine wave (allowing for diode drop if included).",
          "During reverse-bias half-cycle, current is approximately zero and output across the load is approximately zero in ideal treatment.",
        ],
      },
      {
        id: "bridge-full-wave",
        title: "Bridge rectifier with four diodes",
        paragraphs: [
          "A bridge rectifier uses four diodes so that in each input half-cycle, a pair of diodes conducts and drives current through the load in the same direction.",
          "On the next half-cycle, the other pair conducts, again giving the same current direction in the load.",
          "This gives full-wave rectified output without needing a centre-tapped transformer. It is more effective than half-wave for power supplies because ripple frequency is doubled and average output is higher.",
        ],
      },
      {
        id: "capacitor-smoothing-mechanism",
        title: "Smoothing with a single capacitor across the load",
        paragraphs: [
          "A smoothing capacitor connected across the load charges rapidly to near the peak of each rectified pulse and then discharges through the load between peaks.",
          "This discharge supports the output voltage while diode conduction is absent or reduced, so ripple is reduced and output is closer to steady d.c.",
          "If capacitor voltage is above instantaneous rectifier output, diodes are off and capacitor discharges through load resistance until next recharge interval.",
        ],
      },
      {
        id: "effects-of-c-and-r",
        title: "Effect of capacitance and load resistance on smoothing",
        paragraphs: [
          "Larger capacitance C gives larger time constant RC and slower discharge, so ripple decreases and smoothing improves.",
          "Larger load resistance R also increases time constant RC and reduces discharge current, again reducing ripple.",
          "If C is small or R is small (heavy load), capacitor discharges more between peaks, producing larger ripple and poorer smoothing.",
          "In full-wave rectification, recharge pulses are more frequent than in half-wave, so smoothing for the same C and R is better.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "In 21.2, marks are commonly lost by confusing diode conduction states, misidentifying rectifier waveforms, or giving vague statements about smoothing without linking to C and R effects.",
      items: [
        "Drawing half-wave and full-wave outputs with the same pulse frequency.",
        "Saying a bridge rectifier uses all four diodes simultaneously in each half-cycle.",
        "Claiming smoothing capacitor removes ripple completely; it reduces ripple but output is still not perfectly constant in this basic circuit.",
        "Stating that increasing load resistance increases ripple in a capacitor-smoothing circuit; for fixed C, larger R usually reduces ripple.",
        "Ignoring that smaller capacitance gives faster discharge between peaks and therefore poorer smoothing.",
      ],
    },
    workedExamples: [
      {
        id: "t21-2-ex1",
        title: "Identifying waveform type from graph features",
        problem: [
          "Two output waveforms are observed after rectification. Waveform A has positive pulses separated by intervals of zero output for alternate half-cycles. Waveform B has positive pulses every half-cycle with no alternate zero intervals. Identify A and B.",
        ],
        solution: [
          "Waveform A is half-wave rectified output because only one half-cycle is passed and the other is blocked.",
          "Waveform B is full-wave rectified output because both half-cycles are converted to the same polarity pulses.",
          "So A: half-wave, B: full-wave.",
        ],
      },
      {
        id: "t21-2-ex2",
        title: "Conduction paths in a bridge rectifier",
        problem: [
          "Explain how current through the load remains in one direction in a four-diode bridge rectifier when the input a.c. reverses polarity every half-cycle.",
        ],
        solution: [
          "In one half-cycle, one diagonal pair of diodes is forward-biased and conducts, sending current through the load in a chosen direction.",
          "When input polarity reverses, that pair becomes reverse-biased and the opposite diagonal pair becomes forward-biased.",
          "This second pair again drives current through the load in the same direction, so output is full-wave rectified.",
        ],
      },
      {
        id: "t21-2-ex3",
        title: "Predicting smoothing changes when C and R vary",
        problem: [
          "A full-wave rectifier with one smoothing capacitor is connected to a load resistor. Predict the ripple change if (a) capacitance is doubled and (b) load resistance is halved, with all other conditions unchanged.",
        ],
        solution: [
          "Ripple depends on capacitor discharge between recharge peaks. Larger RC gives slower discharge and less ripple.",
          "(a) Doubling C increases RC, so discharge between peaks is smaller and ripple decreases.",
          "(b) Halving R reduces RC, so discharge is faster between peaks and ripple increases.",
          "Therefore (a) improves smoothing, (b) worsens smoothing.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t21-2-st1",
        question:
          "State one graphical difference between half-wave and full-wave rectified outputs.",
        modelAnswer: [
          "Half-wave output has pulses only on alternate half-cycles with zero output between alternate pulses.",
          "Full-wave output has pulses on every half-cycle, so pulse frequency is twice that of the input a.c.",
        ],
      },
      {
        id: "t21-2-st2",
        question:
          "Explain how a single diode produces half-wave rectification.",
        modelAnswer: [
          "During the half-cycle that forward-biases the diode, current flows through the load and output follows that half-cycle.",
          "During the opposite half-cycle, the diode is reverse-biased, current is blocked, and output across the load is approximately zero.",
        ],
      },
      {
        id: "t21-2-st3",
        question:
          "Why does a bridge rectifier use four diodes instead of one?",
        modelAnswer: [
          "A bridge rectifier uses two different diode pairs on alternate half-cycles so current through the load always has the same direction.",
          "This gives full-wave rectification, higher average output and easier smoothing than single-diode half-wave output.",
        ],
      },
      {
        id: "t21-2-st4",
        question:
          "Describe the function of a smoothing capacitor connected across a rectifier load.",
        modelAnswer: [
          "It charges near each pulse peak and then discharges through the load between peaks.",
          "This supports output voltage between peaks, reducing variation and making output closer to steady d.c.",
        ],
      },
      {
        id: "t21-2-st5",
        question:
          "For a rectifier with single-capacitor smoothing, state how ripple changes when (a) C increases, (b) R increases.",
        modelAnswer: [
          "(a) Increasing C increases time constant RC and reduces ripple.",
          "(b) Increasing R also increases RC and reduces ripple.",
          "Both changes improve smoothing for the same rectified input.",
        ],
      },
    ],
  },
};
