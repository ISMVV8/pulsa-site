import { ArrowRight, Sparkles } from "lucide-react";

const stats = [
  { value: "50+", label: "Projets livrés" },
  { value: "4.9/5", label: "Satisfaction" },
  { value: "7 jours", label: "Résultats" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-32 pb-20">
      {/* Orbs */}
      <div className="orb orb-violet animate-float-slow absolute -top-20 -left-20 h-[500px] w-[500px] opacity-60" />
      <div className="orb orb-blue animate-float-slower absolute top-40 -right-32 h-[400px] w-[400px] opacity-50" />
      <div className="orb orb-cyan animate-float absolute -bottom-20 left-1/3 h-[350px] w-[350px] opacity-40" />

      {/* Grid pattern */}
      <div className="grid-pattern absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="glass-badge mb-8 flex items-center gap-2 animate-fade-in-up">
            <Sparkles size={14} />
            <span>Agence digitale Bruxelles</span>
          </div>

          {/* Heading */}
          <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl animate-fade-in-up">
            Votre vision.
            <br />
            <span className="gradient-text">Notre code.</span>
            <br />
            Leur attention.
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-lg text-[#9ca3af] sm:text-xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            L&apos;agence digitale qui transforme vos idées en sites performants.
            Sites web, e-commerce, SEO et Ads — tout ce qu&apos;il faut pour dominer en ligne.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <a
              href="#contact"
              className="btn-gradient inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white"
            >
              Demander un devis
              <ArrowRight size={18} />
            </a>
            <a
              href="#portfolio"
              className="btn-glass inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white"
            >
              Voir nos réalisations
            </a>
          </div>

          {/* Stats */}
          <div className="mt-20 grid w-full max-w-xl grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            {stats.map((stat) => (
              <div key={stat.label} className="glass rounded-xl px-4 py-5 text-center">
                <div className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold gradient-text sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-[#9ca3af] sm:text-sm">
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
