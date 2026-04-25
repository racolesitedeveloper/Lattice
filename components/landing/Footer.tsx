import Link from "next/link";
import s from "./Footer.module.css";
import Logo from "@/components/ui/Logo";

const links = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.inner}>
        <div className={s.top}>
          <div className={s.brandBlock}>
            <Link href="/" className={s.brand} aria-label="Lattice home">
              <Logo size={24} />
            </Link>
            <p className={s.tagline}>
              Cambridge International A Level — Physics, Chemistry, and Biology.
            </p>
          </div>
          <nav className={s.nav} aria-label="Footer">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className={s.navLink}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className={s.copy}>© 2026 Lattice. All rights reserved.</p>
      </div>
    </footer>
  );
}
