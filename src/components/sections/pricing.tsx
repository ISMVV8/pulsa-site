import { Check, ArrowRight, Star } from "lucide-react";

interface Plan {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

const plans: Plan[] = [
  {
    name: "Starter",
    price: "499€",
    description: "Landing page ou site one-page",
    features: [
      "Design sur mesure",
      "Responsive mobile",
      "Formulaire de contact",
      "Hébergement 1 an inclus",
      "Livraison en 7 jours",
    ],
  },
  {
    name: "Business",
    price: "1 499€",
    description: "Site vitrine multi-pages + SEO de base",
    features: [
      "Jusqu'à 5 pages",
      "Design premium",
      "SEO de base",
      "Animations modernes",
      "Blog intégré",
      "Support 3 mois",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "Sur devis",
    description: "Projet sur mesure, e-commerce, solution complexe",
    features: [
      "Pages illimitées",
      "E-commerce complet",
      "SEO avancé",
      "Intégrations sur mesure",
      "Gestion Ads incluse",
      "Support prioritaire",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      {/* Orbs */}
      <div className="orb orb-violet animate-float absolute -right-32 top-20 h-[300px] w-[300px] opacity-25" />
      <div className="orb orb-cyan animate-float-slower absolute -left-20 bottom-20 h-[250px] w-[250px] opacity-20" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="glass-badge mb-4 inline-block">Tarifs</span>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold sm:text-4xl lg:text-5xl">
            Des formules{" "}
            <span className="gradient-text">adaptées à vos ambitions</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#9ca3af]">
            Choisissez la formule qui correspond à votre projet. Tous nos tarifs incluent un design premium.
          </p>
        </div>

        {/* Plans */}
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`glass glass-hover relative rounded-2xl p-8 ${
                plan.popular ? "border-[#7c3aed]/50 glow-accent" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] px-4 py-1 text-xs font-semibold text-white">
                    <Star size={12} />
                    Le plus populaire
                  </span>
                </div>
              )}

              <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold">
                {plan.name}
              </h3>
              <p className="mt-1 text-sm text-[#9ca3af]">{plan.description}</p>

              <div className="mt-6 mb-6">
                <span className="text-sm text-[#9ca3af]">À partir de</span>
                <div className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold gradient-text">
                  {plan.price}
                </div>
              </div>

              <ul className="mb-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-[#9ca3af]">
                    <Check size={16} className="shrink-0 text-[#7c3aed]" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold text-white ${
                  plan.popular ? "btn-gradient" : "btn-glass"
                }`}
              >
                Demander un devis
                <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>

        {/* Banner */}
        <div className="glass mt-12 rounded-2xl p-8 text-center">
          <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold sm:text-2xl">
            Projet spécial ?{" "}
            <span className="gradient-text">Demandez un devis personnalisé</span>
          </h3>
          <p className="mt-2 text-[#9ca3af]">
            Chaque projet est unique. Discutons de vos besoins pour une solution sur mesure.
          </p>
          <a
            href="#contact"
            className="btn-gradient mt-6 inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-semibold text-white"
          >
            Nous contacter
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
