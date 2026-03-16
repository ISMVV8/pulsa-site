import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { ArrowUpRight, ExternalLink, Globe, ShoppingBag, Search, Palette, FileText, Megaphone } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio — Pulsa Creatives | Nos Réalisations",
  description:
    "Découvrez nos projets web : sites vitrine, e-commerce, landing pages. Résultats concrets pour nos clients à Bruxelles.",
};

const projects = [
  {
    title: "City Smile",
    category: "Site vitrine + Réservation",
    description:
      "Centre de blanchiment dentaire à Bruxelles. Site SEO-optimisé avec système de réservation en ligne, slider avant/après et page formation certifiante.",
    tags: ["Next.js", "SEO Local", "Réservation", "Tailwind"],
    color: "#4FC3F7",
    url: "https://city-smile-nine.vercel.app",
    results: [
      { label: "Position Google", value: "Top 3" },
      { label: "Réservations/mois", value: "120+" },
      { label: "Score Lighthouse", value: "98" },
    ],
  },
  {
    title: "Success Talent",
    category: "Plateforme web",
    description:
      "Plateforme de recrutement complète avec espace candidat, espace entreprise, dashboard analytics et système de matching intelligent.",
    tags: ["Next.js", "Dashboard", "Supabase", "UI/UX"],
    color: "#007ce2",
    url: "#",
    results: [
      { label: "Développement", value: "3 sem." },
      { label: "Pages créées", value: "12" },
      { label: "Performance", value: "96/100" },
    ],
  },
  {
    title: "Terra Sky",
    category: "Site immobilier",
    description:
      "Site immobilier premium avec recherche avancée par critères, visites virtuelles intégrées et tunnel de conversion pour la génération de leads.",
    tags: ["Site vitrine", "SEO", "CRM", "Immobilier"],
    color: "#00ccaf",
    url: "#",
    results: [
      { label: "Trafic organique", value: "+180%" },
      { label: "Leads/mois", value: "45" },
      { label: "Chargement", value: "1.2s" },
    ],
  },
];

const expertise = [
  { icon: Globe, label: "Sites vitrine" },
  { icon: FileText, label: "Landing pages" },
  { icon: ShoppingBag, label: "E-commerce" },
  { icon: Search, label: "SEO" },
  { icon: Palette, label: "Branding" },
  { icon: Megaphone, label: "Ads" },
];

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main className="bg-[#070707]" style={{ paddingTop: "73px" }}>
        {/* ── Hero ── */}
        <section className="relative">
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(255,255,255,0.03) 0%, transparent 60%)" }}
          />

          <div className="relative h-px w-full bg-[#ffffff0f]" />

          <div className="mx-auto max-w-[1100px] px-5">
            <div className="relative">
              <div className="line-sweep-v absolute bottom-0 left-0 top-0 w-px bg-[#ffffff0f]" />
              <div className="line-sweep-v absolute bottom-0 right-0 top-0 w-px bg-[#ffffff0f]" style={{ animationDelay: "3s" }} />

              <div className="px-6 pb-16 pt-20 text-center sm:px-16 lg:pt-28">
                <div className="badge-8lab">
                  <div className="badge-8lab-inner">
                    <span className="text-[12px] font-semibold tracking-wide text-white sm:text-[13px]">
                      Portfolio
                    </span>
                  </div>
                </div>

                <h1 className="mx-auto mt-7 max-w-[750px] font-[family-name:var(--font-heading)] text-[34px] font-semibold leading-[1.12] tracking-[-1.5px] text-white sm:text-[48px] lg:text-[56px]">
                  Des projets{" "}
                  <span className="font-medium text-[#5e5f6e]">qui parlent</span>{" "}
                  d&apos;eux-mêmes
                </h1>

                <p className="mx-auto mt-6 max-w-[540px] text-[15px] leading-[1.65] text-[#5e5f6e] sm:text-[17px]">
                  <span className="font-bold text-white">Chaque projet est unique.</span>{" "}
                  Découvrez comment nous transformons les visions de nos clients en résultats concrets.
                </p>
              </div>
            </div>
          </div>

          <div className="relative h-px w-full bg-[#ffffff0f]" />
        </section>

        {/* ── Expertise bar ── */}
        <div className="mx-auto max-w-[970px] px-5">
          <div className="relative">
            <div className="absolute bottom-0 left-0 top-0 w-px bg-[#ffffff0f]" />
            <div className="absolute bottom-0 right-0 top-0 w-px bg-[#ffffff0f]" />
            <div className="grid grid-cols-3 sm:grid-cols-6">
              {expertise.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className={`flex items-center justify-center gap-2 py-4 sm:py-5 ${i < 5 ? "border-r border-[#ffffff0f]" : ""}`}>
                    <Icon className="h-[15px] w-[15px] text-[#5e5f6e] sm:h-[17px] sm:w-[17px]" strokeWidth={1.5} />
                    <span className="text-[12px] font-light text-white sm:text-[14px]">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="relative h-px w-full bg-[#ffffff0f]" />

        {/* ── Projects ── */}
        <div className="mx-auto max-w-[1100px] px-5">
          <div className="relative">
            <div className="line-sweep-v absolute bottom-0 left-0 top-0 w-px bg-[#ffffff0f]" style={{ animationDelay: "1s" }} />
            <div className="line-sweep-v absolute bottom-0 right-0 top-0 w-px bg-[#ffffff0f]" style={{ animationDelay: "4s" }} />

            <div className="space-y-6 px-6 py-16 sm:px-10 sm:py-20">
              {projects.map((project, i) => (
                <div
                  key={i}
                  className="group overflow-hidden rounded-2xl border border-[#ffffff0a] bg-[#0e0e12] transition-all duration-500 hover:border-[#ffffff15] sm:rounded-3xl"
                >
                  {/* Top: gradient visual */}
                  <div
                    className="relative flex h-44 items-center justify-center overflow-hidden sm:h-64"
                    style={{ background: `linear-gradient(135deg, ${project.color}15 0%, ${project.color}05 60%, transparent 100%)` }}
                  >
                    {/* Decorative circle */}
                    <div
                      className="absolute h-[300px] w-[300px] rounded-full opacity-20 blur-3xl sm:h-[400px] sm:w-[400px]"
                      style={{ background: project.color }}
                    />
                    <span className="relative z-10 font-[family-name:var(--font-heading)] text-2xl font-medium tracking-tight text-white/30 sm:text-4xl">
                      {project.title}
                    </span>
                  </div>

                  {/* Bottom: content */}
                  <div className="p-5 sm:p-8 lg:p-10">
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                      <div className="flex-1">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: project.color }}>
                          {project.category}
                        </span>

                        <h2 className="mt-2 font-[family-name:var(--font-heading)] text-xl font-medium text-white sm:text-2xl lg:text-3xl">
                          {project.title}
                        </h2>

                        <p className="mt-3 max-w-[480px] text-[14px] leading-relaxed text-[#8a8a8e] sm:text-[15px]">
                          {project.description}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {project.tags.map((tag, j) => (
                            <span key={j} className="rounded-full border border-[#ffffff08] bg-[#ffffff06] px-3.5 py-1.5 text-[11px] font-medium text-[#8a8a8e]">
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
                          className="inline-flex w-fit items-center gap-2 rounded-full border border-[#ffffff10] bg-[#ffffff06] px-5 py-2.5 text-[13px] font-medium text-white transition-all duration-300 hover:bg-[#ffffff10]"
                        >
                          Voir le site
                          <ExternalLink size={13} />
                        </a>
                      )}
                    </div>

                    {/* Results */}
                    <div className="mt-8 grid grid-cols-3 gap-3 border-t border-[#ffffff08] pt-8">
                      {project.results.map((result, j) => (
                        <div key={j} className="text-center">
                          <div className="font-[family-name:var(--font-heading)] text-lg font-medium text-white sm:text-2xl">
                            {result.value}
                          </div>
                          <div className="mt-1 text-[10px] uppercase tracking-wider text-[#5e5f6e] sm:text-[11px]">
                            {result.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="line-sweep relative h-px w-full bg-[#ffffff0f]" style={{ animationDelay: "2s" }} />

        <div className="mx-auto max-w-[1100px] px-5">
          <div className="relative">
            <div className="absolute bottom-0 left-0 top-0 w-px bg-[#ffffff0f]" />
            <div className="absolute bottom-0 right-0 top-0 w-px bg-[#ffffff0f]" />

            <div className="flex flex-col items-center gap-6 px-6 py-20 text-center sm:py-24">
              <h2 className="font-[family-name:var(--font-heading)] text-[28px] font-semibold tracking-[-1px] text-white sm:text-[38px]">
                Votre projet est{" "}
                <span className="font-medium text-[#5e5f6e]">le prochain</span> ?
              </h2>
              <p className="max-w-[440px] text-[15px] leading-relaxed text-[#5e5f6e]">
                Discutons de votre vision et créons ensemble quelque chose d&apos;exceptionnel.
              </p>
              <Link
                href="/contact"
                className="group mt-2 inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-[15px] font-medium text-black shadow-[0_0_20px_rgba(255,255,255,0.08)] transition-all duration-300 hover:scale-[0.975]"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-[#22c55e] pulse-green" />
                Demander un devis
                <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-[#ffffff0f]" />
      </main>
      <Footer />
    </>
  );
}
