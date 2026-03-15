"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Réalisations", href: "#portfolio" },
  { label: "Processus", href: "#process" },
  { label: "Tarifs", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-6">
      <div className="mx-auto max-w-[970px]">
        <div className="flex items-center justify-between rounded-full border border-[#ffffff0f] bg-[#ffffff0f] px-4 py-3 backdrop-blur-[8px]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="font-heading text-lg font-semibold text-white">
              PULSA
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link-8lab px-4 py-2 text-[15.25px] font-light leading-[1.5] text-[#afb0b9]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="btn-cta hidden rounded-full border border-[#ffffff17] bg-gradient-to-b from-[#161722] to-transparent px-4 py-3 text-[16px] font-light text-white md:block"
          >
            Demander un devis
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white md:hidden"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="mt-2 rounded-2xl border border-[#ffffff0f] bg-[#070707]/95 p-6 backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[15.25px] font-light text-[#afb0b9] transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="btn-cta mt-2 rounded-full border border-[#ffffff17] bg-gradient-to-b from-[#161722] to-transparent px-4 py-3 text-center text-[16px] font-light text-white"
              >
                Demander un devis
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
