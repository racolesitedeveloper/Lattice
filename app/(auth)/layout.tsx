import type { Metadata } from "next";
import Link from "next/link";
import s from "./auth.module.css";
import Logo from "@/components/ui/Logo";

export const metadata: Metadata = {
  title: "Lattice ? Sign in",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={s.shell}>
      <div className={s.backdropA} aria-hidden="true" />
      <div className={s.backdropB} aria-hidden="true" />

      <header className={s.topBar}>
        <Link href="/" className={s.brand} aria-label="Back to Lattice home">
          <Logo size={24} />
        </Link>
        <Link href="/" className={s.backLink}>
          Back to home
        </Link>
      </header>

      <div className={s.stage}>{children}</div>
    </div>
  );
}
