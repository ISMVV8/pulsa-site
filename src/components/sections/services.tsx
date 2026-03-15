import {
  Globe,
  MousePointerClick,
  ShoppingCart,
  Palette,
  Search,
  Megaphone,
} from "lucide-react";
import type { ReactNode } from "react";

interface Service {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    icon: <Globe size={24} className="text-violet-400" />,
    title: "Sites Web",
    description:
      "Sites vitrines modernes, rapides et performants.",
    features: ["Design sur mesure", "Responsive mobile-first", "SEO optimisé", "Performance A+"],
  },
  {
    icon: <MousePointerClick size={24} className="text-violet-400" />,
    title: "Landing Pages",
    description:
      "Pages de conversion ultra-optimisées.",
    features: ["Copywriting persuasif", "A/B testing", "CTA stratégiques", "Tracking complet"],
  },
  {
    icon: <ShoppingCart size={24} className="text-violet-400" />,
    title: "E-Commerce",
    description:
      "Boutiques en ligne qui convertissent.",
    features: ["Shopify/WooCommerce", "Tunnel de vente", "Paiement sécurisé", "Gestion stock"],
  },
  {
    icon: <Palette size={24} className="text-violet-400" />,
    title: "Branding",
    description:
      "Identité visuelle complète et cohérente.",
    features: ["Logo & charte graphique", "Supports print/web", "Stratégie de marque", "Guidelines"],
  },
  {
    icon: <Search size={24} className="text-violet-400" />,
    title: "SEO",
    description:
      "Visibilité organique et trafic qualifié.",
    features: ["Audit technique", "Optimisation on-page", "Stratégie de contenu", "Suivi mensuel"],
  },
  {
    icon: <Megaphone size={24} className="text-violet-400" />,
    title: "Gestion Ads",
    description:
      "Publicités rentables sur toutes les plateformes.",
    features: ["Meta Ads", "Google Ads", "TikTok Ads", "Rapports de performance"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-32 sm:py-40">
      {/* Orb */}
      <div className="orb orb-blue animate-float-slower absolute -left-40 top-0 h-[400px] w-[400px] opacity-20" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-20 text-center">
          <span className="mb-4 inline-block text-xs uppercase tracking-[0.2em] text-zinc-500">
            Nos services
          </span>
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Tout ce qu&apos;il faut pour{" "}
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              dominer en ligne
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            De la conception à la conversion, nous couvrons l&apos;ensemble de
            vos besoins digitaux.
          </p>
        </div>

        {/* Grid — 3x2 */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-white/[0.06] bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-300 hover:border-white/[0.1] hover:bg-white/[0.06] sm:p-10"
            >
              <div className="mb-5">{service.icon}</div>
              <h3 className="text-lg font-bold text-white">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {service.description}
              </p>
              <ul className="mt-5 space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-sm text-zinc-500"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
