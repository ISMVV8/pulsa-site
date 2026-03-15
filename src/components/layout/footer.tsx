import { Instagram, Linkedin } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Tarifs", href: "#pricing" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="glass border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#7c3aed] to-[#3b82f6]">
              <span className="text-sm font-bold text-white">P</span>
            </div>
            <span className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-white">
              Pulsa<span className="gradient-text">Creatives</span>
            </span>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#9ca3af] transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glass rounded-lg p-2.5 text-[#9ca3af] transition-colors hover:text-white"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glass rounded-lg p-2.5 text-[#9ca3af] transition-colors hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col items-center gap-4 border-t border-white/5 pt-8 md:flex-row md:justify-between">
          <p className="text-xs text-[#9ca3af]">
            © 2026 Pulsa Creatives. Tous droits réservés.
          </p>
          <a
            href="mailto:contact@pulsacreatives.com"
            className="text-xs text-[#9ca3af] transition-colors hover:text-[#a78bfa]"
          >
            contact@pulsacreatives.com
          </a>
        </div>
      </div>
    </footer>
  );
}
