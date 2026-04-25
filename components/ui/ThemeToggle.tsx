"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "@phosphor-icons/react";
import s from "./ThemeToggle.module.css";

type Theme = "light" | "dark";

const STORAGE_KEY = "lattice:theme";

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  window.localStorage.setItem(STORAGE_KEY, theme);
  window.dispatchEvent(new Event("lattice:themechange"));
}

function getThemeSnapshot(): Theme {
  if (typeof document === "undefined") return "light";
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function subscribeToTheme(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", callback);
  window.addEventListener("lattice:themechange", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("lattice:themechange", callback);
  };
}

export default function ThemeToggle({ className }: { className?: string }) {
  const theme = useSyncExternalStore(subscribeToTheme, getThemeSnapshot, () => "light");

  const nextTheme: Theme = theme === "dark" ? "light" : "dark";
  const label = theme === "dark" ? "Light" : "Dark";

  return (
    <button
      type="button"
      className={`${s.toggle} ${className ?? ""}`}
      aria-label={`Switch to ${nextTheme} theme`}
      aria-pressed={theme === "dark"}
      suppressHydrationWarning
      onClick={() => {
        applyTheme(nextTheme);
      }}
    >
      <span className={s.icon} aria-hidden="true">
        {theme === "dark" ? <Sun size={15} weight="bold" /> : <Moon size={15} weight="bold" />}
      </span>
      <span className={s.label}>{label}</span>
    </button>
  );
}
