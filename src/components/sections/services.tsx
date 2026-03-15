import { Globe, PenTool, ShoppingBag, Search, Megaphone, Palette } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Sites Web",
    description: "Design custom, responsive, optimisé SEO et haute performance.",
    features: ["Design sur mesure", "Responsive", "SEO optimisé", "Performance"],
  },
  {
    icon: PenTool,
    title: "Landing Pages",
    description: "Pages de conversion avec copywriting, A/B testing et tracking.",
    features: ["Copywriting", "A/B Testing", "CTA optimisés", "Tracking"],
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce",
    description: "Boutiques en ligne Shopify & WooCommerce, tunnel de vente complet.",
    features: ["Shopify / WooCommerce", "Tunnel de vente", "Paiement sécurisé", "Gestion stock"],
  },
  {
    icon: Palette,
    title: "Branding",
    description: "Identité visuelle complète : logo, charte graphique et guidelines.",
    features: ["Logo", "Charte graphique", "Stratégie de marque", "Guidelines"],
  },
  {
    icon: Search,
    title: "SEO",
    description: "Audit technique, optimisation on-page, stratégie de contenu et suivi.",
    features: ["Audit technique", "On-page", "Contenu", "Suivi mensuel"],
  },
  {
    icon: Megaphone,
    title: "Gestion Ads",
    description: "Campagnes Meta, Google et TikTok Ads avec rapports détaillés.",
    features: ["Meta Ads", "Google Ads", "TikTok Ads", "Rapports"],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#f7f7f8] py-20">
      <div className="mx-auto max-w-[970px] px-6">
        {/* Header */}
        <div className="flex flex-col items-start gap-6">
          {/* Preheading */}
          <div className="rounded-[100000000px] border border-[#1111111a] p-[7px]">
            <div className="shadow-8lab-sm rounded-[99999px] bg-white px-4 py-2.5">
              <span className="text-[15.25px] font-semibold tracking-[-0.2px] text-[#5e5f6e]">
                Nos Services
              </span>
            </div>
          </div>

          <h2 className="font-heading text-[36px] font-medium leading-[1.2] tracking-tight text-[#131316] sm:text-[44px]">
            Tout ce dont vous avez besoin.
          </h2>

          <p className="max-w-[600px] text-[18px] leading-relaxed text-[#5e5f6e]">
            Un écosystème complet de services digitaux pour lancer, développer et scaler votre présence en ligne.
          </p>

          <a
            href="#contact"
            className="btn-cta inline-flex items-center gap-2.5 rounded-full border border-black bg-gradient-to-b from-[#363636] to-black px-5 py-3 text-base font-medium text-white"
          >
            Commencer un projet
          </a>
        </div>

        {/* Cards Grid */}
        <div className="mt-10">
          <div className="rounded-[24px] border border-[#1111111a] p-[7px] shadow-[0_0_0_1px_#fff]">
            <div className="shadow-8lab grid gap-0 overflow-hidden rounded-[20px] bg-white sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, i) => (
                <div
                  key={i}
                  className={`flex flex-col gap-4 border-[#1111111a] p-6 ${
                    i < 3 ? "border-b" : ""
                  } ${i % 3 !== 2 ? "lg:border-r" : ""} ${i % 2 === 0 ? "max-lg:border-r max-sm:!border-r-0" : ""}`}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#1111111a] bg-[#f7f7f8]">
                    <service.icon size={20} className="text-[#131316]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-lg font-medium text-[#131316]">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#5e5f6e]">
                    {service.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-2">
                    {service.features.map((feat, j) => (
                      <span
                        key={j}
                        className="rounded-full border border-[#1111111a] bg-[#f7f7f8] px-3 py-1 text-xs text-[#5e5f6e]"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
