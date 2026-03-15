"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Tarifs", href: "#pricing" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Processus", href: "#process" },
  { label: "Avis", href: "#testimonials" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#7c3aed] to-[#3b82f6]">
            <span className="text-sm font-bold text-white">P</span>
          </div>
          <span className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-white">
            Pulsa<span className="gradient-text">Creatives</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#9ca3af] transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="btn-gradient hidden rounded-full px-6 py-2.5 text-sm font-semibold text-white md:inline-block"
        >
          Demander un devis
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white md:hidden"
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="glass border-t border-white/5 md:hidden">
          <nav className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 text-sm text-[#9ca3af] transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="btn-gradient mt-2 rounded-full px-6 py-3 text-center text-sm font-semibold text-white"
            >
              Demander un devis
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
