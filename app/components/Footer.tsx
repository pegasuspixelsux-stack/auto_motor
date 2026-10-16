import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

const COLUMNS: FooterColumn[] = [
  {
    title: "Mercado",
    links: [
      { label: "Todos los avisos", href: "/#inventory" },
      { label: "Eléctricos e híbridos", href: "/#inventory" },
      { label: "Vendedores particulares", href: "/#inventory" },
      { label: "Últimos ingresos", href: "/#new-listings" },
    ],
  },
  {
    title: "Vender",
    links: [
      { label: "Publicar un auto", href: "#" },
      { label: "Consejos para vender", href: "#" },
      { label: "Mis avisos", href: "#" },
    ],
  },
  {
    title: "Concesionarias",
    links: [
      { label: "Ver concesionarias", href: "/concesionarias" },
      { label: "Portal para concesionarias", href: "#" },
      { label: "Planes y precios", href: "#" },
    ],
  },
  {
    title: "Ayuda",
    links: [
      { label: "Contacto", href: "#" },
      { label: "Seguridad al comprar", href: "#" },
      { label: "Preguntas frecuentes", href: "#" },
    ],
  },
];

const LEGAL_LINKS = [
  { label: "Política de privacidad", href: "#" },
  { label: "Términos y condiciones", href: "#" },
  { label: "Política de cookies", href: "#" },
  { label: "Protección de datos personales", href: "#" },
  { label: "Admin", href: "/login" },
];

export default function Footer() {
  return (
    <footer data-testid="footer" className="border-t border-line bg-bg">
      <div className="mx-auto max-w-[1440px] px-3 py-16 lg:px-6">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {COLUMNS.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-fg">
                {column.title}
              </h2>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted transition-colors duration-150 hover:text-fg"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-line pt-8 text-xs text-subtle sm:flex-row sm:items-center">
          <Logo />
          <div className="flex items-center justify-between gap-6 sm:justify-end">
            <p>© AUTO MOTOR. Todos los derechos reservados.</p>
            <ThemeToggle />
          </div>
        </div>

        <div
          data-testid="disclaimer"
          className="mt-6 max-w-4xl space-y-2 text-xs leading-relaxed text-subtle"
        >
          <p>
            AUTO MOTOR es una plataforma de publicación de avisos. No vendemos
            vehículos ni participamos en las operaciones entre compradores y
            vendedores.
          </p>
          <p>
            La información, las fotos y los precios de cada aviso son publicados
            por vendedores particulares y concesionarias, y no garantizamos que
            sean exactos, completos ni estén actualizados. No nos hacemos
            responsables por errores, omisiones ni por el estado, la titularidad
            o la documentación de los vehículos. Antes de concretar cualquier
            operación, verificá los datos directamente con el vendedor y revisá
            el vehículo y su documentación.
          </p>
        </div>

        <nav
          aria-label="Legal"
          data-testid="legal-links"
          className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs"
        >
          {LEGAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-subtle transition-colors duration-150 hover:text-fg"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
