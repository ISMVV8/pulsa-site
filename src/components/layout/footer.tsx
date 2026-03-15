const links = [
  { label: "Services", href: "#services" },
  { label: "Tarifs", href: "#pricing" },
  { label: "Réalisations", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Logo */}
          <div className="flex items-center gap-1.5">
            <span className="text-lg font-bold tracking-tight text-white">
              PULSA
            </span>
            <span className="text-lg font-light tracking-tight text-zinc-400">
              CREATIVES
            </span>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Email */}
          <a
            href="mailto:contact@pulsacreatives.com"
            className="text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
          >
            contact@pulsacreatives.com
          </a>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-white/[0.05] pt-8 text-center">
          <p className="text-xs text-zinc-600">
            © 2026 Pulsa Creatives. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
