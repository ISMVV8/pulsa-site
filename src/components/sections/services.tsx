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
    icon: <Globe size={28} />,
    title: "Sites Web",
    description: "Sites vitrines modernes, rapides et responsive qui reflètent votre image de marque.",
    features: ["Design sur mesure", "Mobile-first", "Performance optimisée"],
  },
  {
    icon: <MousePointerClick size={28} />,
    title: "Landing Pages",
    description: "Pages de conversion optimisées pour maximiser vos leads et ventes.",
    features: ["Taux de conversion élevé", "A/B testing", "Copywriting intégré"],
  },
  {
    icon: <ShoppingCart size={28} />,
    title: "E-Commerce",
    description: "Boutiques en ligne performantes qui transforment vos visiteurs en clients.",
    features: ["Paiement sécurisé", "Gestion des stocks", "UX optimisée"],
  },
  {
    icon: <Palette size={28} />,
    title: "Branding",
    description: "Identité visuelle complète qui vous démarque de la concurrence.",
    features: ["Logo & charte graphique", "Direction artistique", "Supports marketing"],
  },
  {
    icon: <Search size={28} />,
    title: "SEO",
    description: "Référencement naturel pour apparaître en premier sur Google.",
    features: ["Audit technique", "Stratégie de contenu", "Suivi des positions"],
  },
  {
    icon: <Megaphone size={28} />,
    title: "Gestion Ads",
    description: "Campagnes publicitaires Meta, Google et TikTok qui génèrent du ROI.",
    features: ["Meta & Google Ads", "TikTok Ads", "Reporting mensuel"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      {/* Orb */}
      <div className="orb orb-blue animate-float-slower absolute top-0 -left-40 h-[300px] w-[300px] opacity-30" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="glass-badge mb-4 inline-block">Nos services</span>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold sm:text-4xl lg:text-5xl">
            Tout ce qu&apos;il faut pour{" "}
            <span className="gradient-text">dominer en ligne</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#9ca3af]">
            De la conception à la conversion, nous couvrons l&apos;ensemble de vos besoins digitaux.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="glass glass-hover group rounded-2xl p-6 sm:p-8"
            >
              <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-[#7c3aed]/20 to-[#3b82f6]/20 p-3 text-[#a78bfa] transition-colors group-hover:from-[#7c3aed]/30 group-hover:to-[#3b82f6]/30">
                {service.icon}
              </div>
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#9ca3af]">
                {service.description}
              </p>
              <ul className="mt-4 space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-[#9ca3af]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#7c3aed]" />
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
