import Link from "next/link";
import s from "./TermsAcceptance.module.css";

type Props = {
  id?: string;
  name?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
};

export default function TermsAcceptance({
  id = "accept-terms",
  name = "accept_terms",
  checked,
  onChange,
  disabled = false,
}: Props) {
  return (
    <label className={s.label} htmlFor={id}>
      <input
        id={id}
        name={name}
        type="checkbox"
        className={s.checkbox}
        value="yes"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
        required
      />
      <span className={s.text}>
        I agree to the{" "}
        <Link href="/terms" className={s.link} target="_blank" rel="noopener noreferrer">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link href="/privacy" className={s.link} target="_blank" rel="noopener noreferrer">
          Privacy Policy
        </Link>
        .
      </span>
    </label>
  );
}
