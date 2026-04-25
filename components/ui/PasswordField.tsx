"use client";

import { Eye, EyeSlash } from "@phosphor-icons/react";
import { useState } from "react";
import s from "./PasswordField.module.css";

type Props = {
  id: string;
  name: string;
  autoComplete: string;
  required?: boolean;
  minLength?: number;
  placeholder?: string;
};

export default function PasswordField({
  id,
  name,
  autoComplete,
  required,
  minLength,
  placeholder,
}: Props) {
  const [visible, setVisible] = useState(false);
  return (
    <div className={s.wrap}>
      <input
        id={id}
        name={name}
        type={visible ? "text" : "password"}
        autoComplete={autoComplete}
        required={required}
        minLength={minLength}
        className={s.input}
        placeholder={placeholder}
      />
      <button
        type="button"
        className={s.toggle}
        onClick={() => setVisible((v) => !v)}
        aria-label={visible ? "Hide password" : "Show password"}
        aria-pressed={visible}
        aria-controls={id}
      >
        {visible ? (
          <EyeSlash className={s.icon} weight="regular" aria-hidden />
        ) : (
          <Eye className={s.icon} weight="regular" aria-hidden />
        )}
      </button>
    </div>
  );
}
