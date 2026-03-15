import { Check, ArrowRight } from "lucide-react";

interface Plan {
  name: string;
  price: string;
  priceLabel: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

const plans: Plan[] = [
  {
    name: "Starter",
    price: "499€",
    priceLabel: "À partir de",
    description: "Landing page ou site one-page",
    features: [
      "Design personnalisé",
      "Responsive",
      "SEO de base",
      "Livraison 7 jours",
      "1 révision incluse",
    ],
    cta: "Choisir Starter",
  },
  {
    name: "Business",
    price: "1 499€",
    priceLabel: "À partir de",
    description: "Site vitrine multi-pages + SEO",
    features: [
      "Jusqu'à 5 pages",
      "Design premium",
      "SEO complet",
      "Blog intégré",
      "3 révisions",
      "Support 30 jours",
    ],
    popular: true,
    cta: "Choisir Business",
  },
  {
    name: "Premium",
    price: "Sur devis",
    priceLabel: "Projet sur mesure",
    description: "Solution complète et personnalisée",
    features: [
      "Pages illimitées",
      "E-commerce",
      "Fonctionnalités sur mesure",
      "SEO avancé",
      "Branding complet",
      "Support 6 mois",
    ],
    cta: "Demander un devis",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-32 sm:py-40">
      {/* Orbs */}
      <div className="orb orb-violet animate-float absolute -right-40 top-20 h-[400px] w-[400px] opacity-20" />
      <div className="orb orb-emerald animate-float-slower absolute -left-20 bottom-20 h-[300px] w-[300px] opacity-15" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-20 text-center">
          <span className="mb-4 inline-block text-xs uppercase tracking-[0.2em] text-zinc-500">
            Tarifs
          </span>
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Des formules{" "}
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              adaptées à vos ambitions
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Choisissez la formule qui correspond à votre projet. Tous nos tarifs
            incluent un design premium.
          </p>
        </div>

        {/* Plans */}
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-300 hover:bg-white/[0.06] sm:p-10 ${
                plan.popular
                  ? "border-violet-500/40 shadow-[0_0_60px_-15px_rgba(139,92,246,0.3)]"
                  : "border-white/[0.06] hover:border-white/[0.1]"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-gradient-to-r from-violet-500 to-blue-500 px-4 py-1 text-xs font-semibold text-white">
                    Le plus populaire
                  </span>
                </div>
              )}

              <h3 className="text-xl font-bold text-white">{plan.name}</h3>
              <p className="mt-1 text-sm text-zinc-500">{plan.description}</p>

              <div className="mt-6 mb-8">
                <span className="text-xs text-zinc-500">{plan.priceLabel}</span>
                <div className="mt-1 text-4xl font-bold text-white">
                  {plan.price}
                </div>
              </div>

              <ul className="mb-8 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-zinc-400"
                  >
                    <Check
                      size={16}
                      className="shrink-0 text-violet-400"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold transition-all duration-200 ${
                  plan.popular
                    ? "bg-white text-black hover:bg-zinc-200"
                    : "border border-white/[0.1] bg-white/[0.03] text-white hover:border-white/[0.2] hover:bg-white/[0.06]"
                }`}
              >
                {plan.cta}
                <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>

        {/* Banner */}
        <div className="mt-16 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-8 text-center backdrop-blur-xl sm:p-10">
          <h3 className="text-xl font-bold sm:text-2xl">
            Chaque projet est unique.{" "}
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              Contactez-nous pour un devis personnalisé.
            </span>
          </h3>
          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition-colors duration-200 hover:bg-zinc-200"
          >
            Nous contacter
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
