import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white text-black flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg-japan.jpg"
          alt="Paysage japonais"
          fill
          className="object-cover opacity-[0.08]"
          priority
        />
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-8 py-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>
        </Link>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com/pulsacreatives"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black/70 hover:text-black transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <a
            href="https://tiktok.com/@pulsacreatives"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black/70 hover:text-black transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.72a8.19 8.19 0 0 0 4.76 1.52V6.79a4.83 4.83 0 0 1-1-.1z" />
            </svg>
          </a>
        </div>
      </header>

      {/* Main Content — Centered */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6">
        <h1
          className="text-[clamp(2.5rem,6vw,4.5rem)] font-semibold tracking-tight text-center leading-[1.1]"
          style={{ fontFamily: "var(--font-instrument), var(--font-sans)" }}
        >
          Build with emotion.
        </h1>
        <p className="mt-4 text-black/50 text-sm tracking-wide">
          Apple-inspired design patterns
        </p>
      </main>

      {/* Footer */}
      <footer className="relative z-10 flex flex-col items-center gap-6 pb-10 px-6">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-3.5 bg-black text-white text-sm font-medium rounded-full hover:bg-black/85 transition-colors"
        >
          Créer votre projet
        </Link>
        <p className="text-xs text-black/40">
          contact@pulsacreatives.com · © Pulsa · <Link href="/legal" className="hover:text-black/60 transition-colors">Legal</Link>
        </p>
      </footer>
    </div>
  );
}
