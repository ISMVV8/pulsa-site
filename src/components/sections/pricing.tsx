import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "499",
    description: "Landing page ou one-page pour lancer rapidement.",
    features: [
      "1 page optimisée",
      "Design responsive",
      "SEO de base",
      "Formulaire de contact",
      "Livraison 5 jours",
    ],
    popular: false,
  },
  {
    name: "Business",
    price: "1 499",
    description: "Site vitrine multi-pages pour développer votre activité.",
    features: [
      "Jusqu'à 5 pages",
      "Design sur mesure",
      "SEO avancé",
      "Animations premium",
      "CMS intégré",
      "Support 30 jours",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "Sur devis",
    description: "Solution complète et personnalisée pour scaler.",
    features: [
      "Pages illimitées",
      "Design 100% custom",
      "SEO expert",
      "E-commerce / SaaS",
      "Intégrations API",
      "Support prioritaire",
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-[#070707] py-20">
      <div className="line-h" />
      <div className="line-glow" />

      <div className="relative mx-auto flex max-w-[970px] px-6">
        <div className="line-v hidden self-stretch md:block" />

        <div className="flex-1 py-20">
          {/* Header */}
          <div className="mb-12 flex flex-col items-center gap-6 text-center">
            <div className="glow-btn">
              <span className="text-[15.25px] font-semibold tracking-[-0.2px] text-white">
                Nos Tarifs
              </span>
            </div>

            <h2 className="font-heading text-[36px] font-medium leading-[1.2] tracking-tight text-white sm:text-[44px]">
              Des prix transparents.
            </h2>

            <p className="max-w-[600px] text-lg leading-relaxed text-[#abaaa8]">
              Choisissez la formule qui correspond à vos besoins. Pas de frais cachés.
            </p>
          </div>

          {/* Plans Grid */}
          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`flex flex-col rounded-3xl border p-6 ${
                  plan.popular
                    ? "border-[#353638] bg-[#131316] shadow-[0_0_30px_rgba(255,255,255,0.05)]"
                    : "border-[#242429] bg-[#131316]"
                }`}
              >
                {plan.popular && (
                  <div className="mb-4 w-fit rounded-full border border-[#ffffff0f] bg-[#ffffff0f] px-3 py-1 text-xs font-medium text-white">
                    Populaire
                  </div>
                )}

                <h3 className="font-heading text-xl font-medium text-white">
                  {plan.name}
                </h3>

                <div className="mt-4 flex items-baseline gap-1">
                  {plan.price === "Sur devis" ? (
                    <span className="font-heading text-[32px] font-medium text-white">
                      Sur devis
                    </span>
                  ) : (
                    <>
                      <span className="font-heading text-[32px] font-medium text-white">
                        €{plan.price}
                      </span>
                    </>
                  )}
                </div>

                <p className="mt-3 text-sm leading-relaxed text-[#abaaa8]">
                  {plan.description}
                </p>

                <div className="my-6 h-px bg-[#ffffff0f]" />

                <ul className="flex flex-col gap-3">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <Check size={16} className="flex-shrink-0 text-white" strokeWidth={2} />
                      <span className="text-sm text-[#abaaa8]">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8">
                <a
                  href="#contact"
                  className={`btn-cta flex items-center justify-center gap-2 rounded-full px-5 py-3 text-base font-medium ${
                    plan.popular
                      ? "bg-white text-[#131316]"
                      : "border border-[#ffffff17] bg-gradient-to-b from-[#161722] to-transparent text-white"
                  }`}
                >
                  <span>Commencer</span>
                  <ArrowRight size={16} />
                </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="line-v hidden self-stretch md:block" />
      </div>

      <div className="line-h" />
      <div className="line-glow-right" />
    </section>
  );
}
