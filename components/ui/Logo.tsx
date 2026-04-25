import s from "./Logo.module.css";

interface LogoProps {
  /** Height of the mark in px. Width matches (square). Default: 24. */
  size?: number;
  /** Show the "Lattice" wordmark beside the mark. Default: true. */
  showWordmark?: boolean;
  className?: string;
}

/** Accent from design tokens (mark must match the active theme). */
const ACCENT = "var(--accent)";

/**
 * Lattice logo — 3×3 node grid with an accented L (left column + bottom row).
 * Muted edges use `currentColor` at low opacity; accent path and L-nodes use sage.
 */
export default function Logo({
  size = 24,
  showWordmark = true,
  className,
}: LogoProps) {
  /* Integer grid on 24×24: nodes at (4,4) … (20,20), step 8 */
  return (
    <span className={`${s.root} ${className ?? ""}`}>
      <svg
        className={s.mark}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
        shapeRendering="geometricPrecision"
      >
        {/* Wires not on the L path */}
        <path
          d="
            M4 4h8M12 4h8
            M4 12h8M12 12h8
            M12 4v8M12 12v8
            M20 4v8M20 12v8
          "
          stroke="currentColor"
          strokeOpacity={0.14}
          strokeWidth={1.2}
          strokeLinecap="round"
        />

        {/* L path: left column + bottom row */}
        <path
          d="M4 4V20H20"
          stroke={ACCENT}
          strokeWidth={2.35}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Off-path nodes — ring only, no white fill */}
        <circle cx="12" cy="4" r="2" fill="none" stroke="currentColor" strokeOpacity={0.26} strokeWidth={1.15} />
        <circle cx="20" cy="4" r="2" fill="none" stroke="currentColor" strokeOpacity={0.26} strokeWidth={1.15} />
        <circle cx="12" cy="12" r="2" fill="none" stroke="currentColor" strokeOpacity={0.26} strokeWidth={1.15} />
        <circle cx="20" cy="12" r="2" fill="none" stroke="currentColor" strokeOpacity={0.26} strokeWidth={1.15} />

        {/* L-path terminals */}
        <circle cx="4" cy="4" r="2.2" fill={ACCENT} />
        <circle cx="4" cy="12" r="2.2" fill={ACCENT} />
        <circle cx="4" cy="20" r="2.2" fill={ACCENT} />
        <circle cx="12" cy="20" r="2.2" fill={ACCENT} />
        <circle cx="20" cy="20" r="2.2" fill={ACCENT} />
      </svg>

      {showWordmark && (
        <span className={s.word} aria-label="Lattice">
          Lattice
        </span>
      )}
    </span>
  );
}
