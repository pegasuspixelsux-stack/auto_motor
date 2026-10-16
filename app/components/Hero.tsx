"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown, Search, SlidersHorizontal } from "lucide-react";
import { useState, type ReactNode } from "react";

interface HeroProps {
  headline?: string;
  subheadline?: string;
}

const EASE_OUT = [0.23, 1, 0.32, 1] as const;
const BACKGROUND_IMAGE = "/hero_image/buyers.webp";

const QUICK_LINKS = [
  { label: "Explorar el mercado", href: "#inventory" },
  { label: "Vender mi vehículo", href: "#" },
  { label: "Motos", href: "#" },
  { label: "Clásicos", href: "#" },
  { label: "Concesionarias", href: "/concesionarias" },
];
const FIELD =
  "w-full rounded-xl border border-line bg-bg/60 px-3 py-2 text-sm text-fg outline-none transition-colors duration-150 placeholder:text-subtle focus:border-fg/40";

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[10px] font-medium uppercase tracking-widest text-muted">
        {label}
      </span>
      {children}
    </label>
  );
}

export default function Hero({
  headline = "El mercado automotor.",
  subheadline = "Conectate directo con vendedores particulares y concesionarias verificadas. Encontrá tu próximo auto o publicá el tuyo en minutos.",
}: HeroProps) {
  const reduce = useReducedMotion();
  const [filtersOpen, setFiltersOpen] = useState(false);
  const rise = (delay: number, y = 16) => ({
    initial: { opacity: 0, y: reduce ? 0 : y },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: EASE_OUT },
  });

  return (
    <section
      data-testid="hero"
      className="hero-on-photo relative flex w-full flex-col sm:h-[calc((100svh_-_290px)_*_0.7)] sm:min-h-[420px] lg:h-[calc((100svh_-_290px)_*_1.155)] lg:min-h-[554px] overflow-hidden bg-bg text-fg selection:bg-fg selection:text-bg"
    >
      <div className="absolute inset-0 z-0 hidden sm:block">
        <Image
          src={BACKGROUND_IMAGE}
          alt="Compradores recibiendo las llaves de su auto frente a una concesionaria"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_45%]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_110%_at_50%_50%,rgba(0,0,0,0.97)_0%,rgba(0,0,0,0.9)_35%,rgba(0,0,0,0.15)_100%)]" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] hidden bg-[radial-gradient(60%_90%_at_0%_0%,rgba(202,138,4,0.38),transparent_65%),radial-gradient(50%_80%_at_100%_100%,rgba(180,83,9,0.28),transparent_65%)] sm:block"
      />
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-center px-3 py-6 sm:justify-end sm:py-6 lg:justify-center lg:px-6 lg:py-14">
        <div className="mx-auto w-full max-w-xl text-center lg:max-w-3xl">
          <div className="mx-auto w-fit max-w-full">
            <motion.h1
              {...rise(0.15, 24)}
              className="whitespace-pre-line text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.02em] sm:text-5xl lg:whitespace-nowrap lg:text-6xl"
            >
              {headline}
            </motion.h1>
            <motion.p
              {...rise(0.28)}
              className="mt-3 w-0 min-w-full text-sm leading-relaxed sm:mt-5 sm:text-base text-muted"
            >
              {subheadline}
            </motion.p>
          </div>
          <motion.form
            {...rise(0.1, 16)}
            role="search"
            action="#inventory"
            data-testid="hero-search"
            className="mt-5 sm:mt-8"
          >
            <div className="flex items-center gap-3 rounded-full border border-line bg-surface py-2 pl-5 pr-2 backdrop-blur-md transition-colors duration-150 focus-within:border-fg/40">
              <Search className="h-4 w-4 shrink-0 text-muted" strokeWidth={1.5} />
              <input
                type="search"
                name="q"
                aria-label="Buscar en el inventario"
                placeholder="Buscá por marca, modelo o palabra clave"
                className="w-full bg-transparent text-sm text-fg outline-none placeholder:text-subtle"
              />
              <button
                type="button"
                aria-expanded={filtersOpen}
                aria-controls="advanced-search"
                data-testid="hero-filters-toggle"
                onClick={() => setFiltersOpen((open) => !open)}
                className="flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-muted transition-[color,transform] duration-150 hover:text-fg active:scale-95"
              >
                <SlidersHorizontal className="h-3.5 w-3.5" strokeWidth={1.75} />
                <span className="hidden sm:inline">Filtros</span>
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${filtersOpen ? "rotate-180" : ""}`}
                  strokeWidth={1.75}
                />
              </button>
              <button
                type="submit"
                aria-label="Buscar"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-inverse text-on-inverse transition-[transform,opacity] duration-150 ease-out hover:opacity-85 active:scale-95"
              >
                <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
              </button>
            </div>

            <AnimatePresence initial={false}>
              {filtersOpen && (
                <motion.div
                  id="advanced-search"
                  data-testid="hero-advanced-search"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: reduce ? 0 : 0.3, ease: EASE_OUT }}
                  className="overflow-hidden"
                >
                  <div className="mt-3 grid grid-cols-2 gap-3 rounded-xl border border-line bg-surface p-4 text-left backdrop-blur-md">
                    <Field label="Marca">
                      <input type="text" name="make" placeholder="Ej. Audi" className={FIELD} />
                    </Field>
                    <Field label="Combustible">
                      <select name="fuel" defaultValue="" className={FIELD}>
                        <option value="">Todos</option>
                        <option value="Electric">Eléctrico</option>
                        <option value="Hybrid">Híbrido</option>
                        <option value="Gasoline">Nafta</option>
                      </select>
                    </Field>
                    <Field label="Año desde">
                      <input type="number" name="yearMin" inputMode="numeric" min={1990} placeholder="2020" className={FIELD} />
                    </Field>
                    <Field label="Año hasta">
                      <input type="number" name="yearMax" inputMode="numeric" min={1990} placeholder="2025" className={FIELD} />
                    </Field>
                    <Field label="Precio máx. (US$)">
                      <input type="number" name="priceMax" inputMode="numeric" min={0} placeholder="100000" className={FIELD} />
                    </Field>
                    <Field label="Kilometraje máx.">
                      <input type="number" name="kmMax" inputMode="numeric" min={0} placeholder="50000" className={FIELD} />
                    </Field>
                    <Field label="Vendedor">
                      <select name="seller" defaultValue="" className={FIELD}>
                        <option value="">Todos</option>
                        <option value="private">Particulares</option>
                        <option value="dealer">Concesionarias</option>
                      </select>
                    </Field>
                    <Field label="Ubicación">
                      <input type="text" name="location" placeholder="Ej. Montevideo" className={FIELD} />
                    </Field>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
          <motion.nav
            {...rise(0.2, 12)}
            aria-label="Accesos rápidos"
            className="mt-3 flex flex-wrap items-center justify-center sm:mt-5 gap-x-6 gap-y-2 text-sm"
          >
            {QUICK_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted underline-offset-4 transition-colors duration-150 hover:text-fg hover:underline"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>
        </div>
      </div>
    </section>
  );
}
