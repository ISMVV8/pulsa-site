"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="mx-auto flex h-[72px] max-w-[970px] items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-white">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
            <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="text-[17px] font-medium text-white">Pulsa</span>
        </Link>

        {/* Nav links - center */}
        <nav className="hidden items-center gap-8 md:flex">
          {["Services", "Processus", "Réalisations", "Tarifs"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
              className="text-[15.25px] font-light leading-[1.5] text-[#afb0b9] transition-all duration-300 hover:-translate-y-1 hover:text-white"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="#contact"
          className="hidden rounded-full border border-[#ffffff17] bg-gradient-to-b from-[#161722] to-transparent px-5 py-3 text-[15px] font-light text-white transition-all duration-350 hover:scale-95 hover:bg-[#212126] md:block"
        >
          Demander un devis
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center text-white md:hidden"
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            {mobileOpen ? (
              <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path strokeLinecap="round" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-[#ffffff0f] bg-[#070707] px-6 pb-6 pt-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {["Services", "Processus", "Réalisations", "Tarifs"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileOpen(false)}
                className="text-[15px] text-[#afb0b9]"
              >
                {item}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-full border border-[#ffffff17] bg-gradient-to-b from-[#161722] to-transparent px-5 py-3 text-center text-[15px] text-white"
            >
              Demander un devis
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
