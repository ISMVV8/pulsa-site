import { ArrowRight } from "lucide-react";

const stats = [
  { value: "50+", label: "Projets livrés" },
  { value: "4.9/5", label: "Satisfaction client" },
  { value: "7 jours", label: "Délai moyen" },
  { value: "100%", label: "Sur mesure" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-32 pb-20">
      {/* Orbs — subtle like 8lab */}
      <div className="orb orb-violet animate-float-slow absolute -top-40 -left-40 h-[600px] w-[600px] opacity-20" />
      <div className="orb orb-blue animate-float-slower absolute top-20 -right-40 h-[500px] w-[500px] opacity-20" />
      <div className="orb orb-emerald animate-float absolute -bottom-40 left-1/3 h-[400px] w-[400px] opacity-15" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          {/* Badge pill */}
          <div className="animate-fade-in-up mb-8 inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.05] px-4 py-1.5">
            <span className="text-xs text-zinc-400">
              Agence digitale — Bruxelles
            </span>
          </div>

          {/* Massive heading */}
          <h1 className="animate-fade-in-up text-[2.75rem] font-bold leading-[1.05] tracking-tight text-white sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem]">
            Créez le digital qui fait la
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              différence
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="animate-fade-in-up mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400"
            style={{ animationDelay: "0.15s" }}
          >
            Sites web, landing pages, e-commerce, branding, SEO et publicités.
            On transforme vos idées en résultats concrets.
          </p>

          {/* CTAs */}
          <div
            className="animate-fade-in-up mt-10 flex flex-col gap-4 sm:flex-row"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition-colors duration-200 hover:bg-zinc-200"
            >
              Demander un devis
              <ArrowRight size={16} />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.03] px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-white/[0.2] hover:bg-white/[0.06]"
            >
              Voir nos réalisations
            </a>
          </div>

          {/* Stats row — 4 glass cards */}
          <div
            className="animate-fade-in-up mt-20 grid w-full max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6"
            style={{ animationDelay: "0.45s" }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.03] px-4 py-6 text-center backdrop-blur-xl"
              >
                <div className="text-3xl font-bold text-white sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-[0.2em] text-zinc-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
