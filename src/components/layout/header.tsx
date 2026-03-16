"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-[#0a0a0a]">
      <div className="mx-auto flex h-[72px] max-w-[970px] items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2z" stroke="white" strokeWidth="1.5"/>
            <path d="M10 16h12M16 10v12" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span className="text-[18px] font-medium tracking-[-0.3px] text-white">Pulsa</span>
        </Link>

        {/* Nav links */}
        <nav className="hidden items-center gap-10 md:flex">
          {[
            { label: "Services", href: "/#services" },
            { label: "Portfolio", href: "/portfolio" },
            { label: "Tarifs", href: "/#tarifs" },
            { label: "Contact", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[15.25px] font-light text-[#afb0b9] transition-all duration-300 hover:-translate-y-1 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden rounded-full border border-[#ffffff17] bg-gradient-to-b from-[#161722] to-transparent px-5 py-2.5 text-[15.25px] font-light text-white transition-all duration-350 hover:scale-95 hover:bg-[#212126] md:block"
        >
          Demander un devis
        </Link>

        {/* Mobile */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white md:hidden"
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

      {/* Separator line under navbar */}
      <div className="h-px w-full bg-[#ffffff0f]" />

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="bg-[#070707] px-6 pb-6 pt-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {[
              { label: "Services", href: "/#services" },
              { label: "Portfolio", href: "/portfolio" },
              { label: "Tarifs", href: "/#tarifs" },
              { label: "Contact", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-[15px] text-[#afb0b9]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-full border border-[#ffffff17] px-5 py-3 text-center text-[15px] text-white"
            >
              Demander un devis
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
