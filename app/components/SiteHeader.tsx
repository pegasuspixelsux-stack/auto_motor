import { Menu } from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";

/** `wide` links only show from the lg breakpoint, to keep tablets uncrowded. */
const RIGHT_LINKS = [
  { label: "Financiación", href: "/#calculadora", wide: true },
  { label: "Vende tu auto", href: "/#publicar", wide: true },
  { label: "Guardados (0)", href: "#", wide: false },
  { label: "Ingresar", href: "#", wide: false },
];

const LINKS = [
  { label: "Publicar tu auto", href: "/#publicar" },
  { label: "Compra tu auto", href: "/autos" },
  { label: "Concesionarias", href: "/concesionarias" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/80 backdrop-blur-xl backdrop-saturate-150">
      <nav
        aria-label="Principal"
        className="relative mx-auto flex max-w-[1440px] items-center justify-between px-3 py-6 lg:px-6"
      >
        <button
          type="button"
          aria-label="Abrir menú"
          className="rounded-md p-1 text-fg/90 transition-[transform,color] duration-150 ease-out hover:text-fg active:scale-95 md:hidden"
        >
          <Menu className="h-5 w-5" strokeWidth={1.5} />
        </button>
        <div className="hidden items-center gap-6 md:flex">
          {LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs font-medium uppercase tracking-widest text-muted transition-colors duration-150 hover:text-fg"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Link
          href="/"
          aria-label="AUTO MOTOR, inicio"
          className="absolute left-1/2 -translate-x-1/2"
        >
          <Logo />
        </Link>
        <div className="hidden items-center gap-6 sm:flex">
          {RIGHT_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-xs font-medium uppercase tracking-widest text-muted transition-colors duration-150 hover:text-fg ${link.wide ? "hidden lg:inline" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
