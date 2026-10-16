export default function AnnouncementBar({
  text = "Más de 500 vendedores particulares y concesionarias publican todos los días.",
  linkText = "Publicá tu auto",
  href = "#inventory",
}: {
  text?: string;
  linkText?: string;
  href?: string;
}) {
  return (
    <div
      data-testid="announcement-bar"
      className="w-full bg-inverse text-on-inverse"
    >
      <div className="mx-auto max-w-[1440px] px-3 py-2.5 text-center text-xs font-medium tracking-tight lg:px-6">
        {text}{" "}
        <a
          href={href}
          className="ml-1 font-semibold underline underline-offset-4 transition-opacity hover:opacity-70"
        >
          {linkText}
        </a>
      </div>
    </div>
  );
}
