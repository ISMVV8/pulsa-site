import { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { ArrowUpRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio — Pulsa Creatives | Nos Réalisations",
  description:
    "Découvrez nos projets web : sites vitrine, e-commerce, landing pages. Résultats concrets pour nos clients à Bruxelles.",
};

const projects = [
  {
    title: "Success Talent",
    category: "Plateforme web",
    description:
      "Plateforme de recrutement avec espace candidat et entreprise, design premium et UX optimisée pour maximiser les conversions.",
    tags: ["Next.js", "Design UI/UX", "Dashboard", "Supabase"],
    gradient: "from-[#007ce2]/20 to-[#007ce2]/5",
    color: "#007ce2",
    url: "#",
    results: [
      { label: "Temps de développement", value: "3 semaines" },
      { label: "Pages créées", value: "12" },
      { label: "Performance", value: "98/100" },
    ],
  },
  {
    title: "Terra Sky",
    category: "Site vitrine",
    description:
      "Site immobilier avec visites virtuelles, recherche avancée par critères et intégration CRM pour la gestion des leads.",
    tags: ["Site vitrine", "SEO", "Immobilier", "CRM"],
    gradient: "from-[#00ccaf]/20 to-[#00ccaf]/5",
    color: "#00ccaf",
    url: "#",
    results: [
      { label: "Trafic organique", value: "+180%" },
      { label: "Leads générés", value: "45/mois" },
      { label: "Temps de chargement", value: "1.2s" },
    ],
  },
  {
    title: "City Smile",
    category: "Site + Réservation",
    description:
      "Centre de blanchiment dentaire à Bruxelles — site SEO-optimisé avec système de réservation en ligne et page formation.",
    tags: ["Next.js", "SEO Local", "Réservation", "Formation"],
    gradient: "from-[#e16540]/20 to-[#e16540]/5",
    color: "#e16540",
    url: "https://city-smile-nine.vercel.app",
    results: [
      { label: "Position Google", value: "Top 3" },
      { label: "Réservations/mois", value: "120+" },
      { label: "Score SEO", value: "95/100" },
    ],
  },
];

const services = [
  "Sites vitrine",
  "Landing pages",
  "E-commerce",
  "Applications web",
  "SEO & Référencement",
  "Branding digital",
];

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main className="bg-[#0a0a0a]" style={{ paddingTop: "72px" }}>
        {/* Hero */}
        <section className="relative">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(255,255,255,0.04) 0%, transparent 60%)",
            }}
          />

          <div className="line-sweep h-px w-full bg-[#ffffff0f]" />

          <div className="mx-auto max-w-[970px] px-6">
            <div className="relative">
              <div className="line-sweep-v absolute bottom-0 left-0 top-0 w-px bg-[#ffffff0f]" />
              <div className="line-sweep-v absolute bottom-0 right-0 top-0 w-px bg-[#ffffff0f]" style={{ animationDelay: "3s" }} />

              <div className="px-4 pb-16 pt-20 text-center sm:px-8 lg:pt-28">
                <div className="badge-8lab">
                  <div className="badge-8lab-inner">
                    <span className="text-[13px] font-semibold text-white">
                      Nos Réalisations
                    </span>
                  </div>
                </div>

                <h1 className="mx-auto mt-8 max-w-[800px] font-[family-name:var(--font-heading)] text-[36px] font-semibold leading-[1.15] tracking-[-1.5px] text-white sm:text-[50px] lg:text-[60px]">
                  Des projets{" "}
                  <span className="font-medium text-[#5e5f6e]">qui parlent</span>{" "}
                  d&apos;eux-mêmes
                </h1>

                <p className="mx-auto mt-6 max-w-[640px] text-[17px] leading-[1.6] text-[#5e5f6e]">
                  <span className="font-bold text-white">
                    Chaque projet est une collaboration unique.
                  </span>{" "}
                  Découvrez comment nous transformons les visions de nos clients en
                  expériences digitales performantes.
                </p>
              </div>
            </div>
          </div>

          <div className="line-sweep h-px w-full bg-[#ffffff0f]" style={{ animationDelay: "2s" }} />
        </section>

        {/* Services bar */}
        <div className="mx-auto max-w-[970px] px-6">
          <div className="relative">
            <div className="absolute bottom-0 left-0 top-0 w-px bg-[#ffffff0f]" />
            <div className="absolute bottom-0 right-0 top-0 w-px bg-[#ffffff0f]" />
            <div className="grid grid-cols-3 sm:grid-cols-6">
              {services.map((service, i) => (
                <div
                  key={service}
                  className={`flex items-center justify-center py-5 ${
                    i < services.length - 1 ? "border-r border-[#ffffff0f]" : ""
                  }`}
                >
                  <span className="text-[12px] font-light text-white sm:text-[14px]">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="line-sweep h-px w-full bg-[#ffffff0f]" style={{ animationDelay: "3s" }} />

        {/* Projects */}
        <div className="mx-auto max-w-[970px] px-6">
          <div className="relative">
            <div className="line-sweep-v absolute bottom-0 left-0 top-0 w-px bg-[#ffffff0f]" style={{ animationDelay: "1s" }} />
            <div className="line-sweep-v absolute bottom-0 right-0 top-0 w-px bg-[#ffffff0f]" style={{ animationDelay: "5s" }} />

            <div className="py-20">
              {projects.map((project, i) => (
                <div key={i}>
                  <div
                    className={`group overflow-hidden rounded-3xl border border-[#242429] bg-[#131316] transition-all duration-300 hover:border-[#353638] ${
                      i > 0 ? "mt-10" : ""
                    }`}
                  >
                    {/* Top gradient area */}
                    <div
                      className={`flex h-56 items-center justify-center bg-gradient-to-br ${project.gradient} sm:h-72`}
                    >
                      <span className="font-[family-name:var(--font-heading)] text-3xl font-medium text-white/40 sm:text-4xl">
                        {project.title}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-10">
                      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex-1">
                          <span
                            className="text-xs font-semibold uppercase tracking-wider"
                            style={{ color: project.color }}
                          >
                            {project.category}
                          </span>
                          <h2 className="mt-2 font-[family-name:var(--font-heading)] text-2xl font-medium text-white sm:text-3xl">
                            {project.title}
                          </h2>
                          <p className="mt-3 max-w-[500px] text-[15px] leading-relaxed text-[#abaaa8]">
                            {project.description}
                          </p>

                          <div className="mt-5 flex flex-wrap gap-2">
                            {project.tags.map((tag, j) => (
                              <span
                                key={j}
                                className="rounded-full border border-[#ffffff0f] bg-[#ffffff0f] px-3 py-1 text-xs text-[#abaaa8]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {project.url !== "#" && (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-cta inline-flex items-center gap-2 rounded-full border border-[#ffffff17] bg-gradient-to-b from-[#161722] to-transparent px-5 py-2.5 text-sm text-white"
                          >
                            Voir le site
                            <ExternalLink size={14} />
                          </a>
                        )}
                      </div>

                      {/* Results */}
                      <div className="mt-8 grid grid-cols-3 gap-4 border-t border-[#ffffff0f] pt-8">
                        {project.results.map((result, j) => (
                          <div key={j} className="text-center">
                            <div className="font-[family-name:var(--font-heading)] text-xl font-medium text-white sm:text-2xl">
                              {result.value}
                            </div>
                            <div className="mt-1 text-[12px] text-[#abaaa8] sm:text-xs">
                              {result.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {i < projects.length - 1 && (
                    <div className="line-sweep my-0 h-px w-full bg-[#ffffff0f]" style={{ animationDelay: `${4 + i}s` }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="line-sweep h-px w-full bg-[#ffffff0f]" style={{ animationDelay: "6s" }} />

        {/* CTA */}
        <div className="mx-auto max-w-[970px] px-6">
          <div className="relative">
            <div className="absolute bottom-0 left-0 top-0 w-px bg-[#ffffff0f]" />
            <div className="absolute bottom-0 right-0 top-0 w-px bg-[#ffffff0f]" />

            <div className="flex flex-col items-center gap-6 py-20 text-center">
              <h2 className="font-[family-name:var(--font-heading)] text-[28px] font-medium text-white sm:text-[36px]">
                Votre projet est le prochain ?
              </h2>
              <p className="max-w-[500px] text-[#5e5f6e]">
                Discutons de votre vision et créons ensemble quelque chose d&apos;exceptionnel.
              </p>
              <a
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-[15px] font-medium text-black transition-all duration-350 hover:scale-[0.975]"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-[#22c55e] pulse-green" />
                Demander un devis
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-[#ffffff0f]" />
      </main>
      <Footer />
    </>
  );
}
