import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Success Talent",
    category: "Plateforme web",
    description: "Plateforme de recrutement avec espace candidat et entreprise, design premium et UX optimisée.",
    tags: ["Next.js", "Design UI/UX", "Dashboard"],
    gradient: "from-[#007ce2]/20 to-[#007ce2]/5",
  },
  {
    title: "Terra Sky",
    category: "Site vitrine",
    description: "Site immobilier avec visites virtuelles, recherche avancée et intégration CRM.",
    tags: ["Site vitrine", "SEO", "Immobilier"],
    gradient: "from-[#00ccaf]/20 to-[#00ccaf]/5",
  },
  {
    title: "City Smile",
    category: "E-Commerce",
    description: "Centre de blanchiment dentaire — site SEO-optimisé avec réservation en ligne.",
    tags: ["E-Commerce", "SEO", "Réservation"],
    gradient: "from-[#e16540]/20 to-[#e16540]/5",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative bg-[#070707] py-20">
      <div className="line-h" />
      <div className="line-glow" />

      <div className="relative mx-auto flex max-w-[970px] px-6">
        <div className="line-v hidden self-stretch md:block" />

        <div className="flex-1 py-20">
          {/* Header */}
          <div className="mb-12 flex flex-col items-center gap-6 text-center">
            <div className="glow-btn">
              <span className="text-[15.25px] font-semibold tracking-[-0.2px] text-white">
                Nos Réalisations
              </span>
            </div>

            <h2 className="font-heading text-[36px] font-medium leading-[1.2] tracking-tight text-white sm:text-[44px]">
              Des projets qui parlent d&apos;eux-mêmes.
            </h2>

            <p className="max-w-[600px] text-lg leading-relaxed text-[#abaaa8]">
              Découvrez nos dernières réalisations et l&apos;impact concret que nous avons créé pour nos clients.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project, i) => (
              <div
                key={i}
                className="group flex flex-col overflow-hidden rounded-3xl border border-[#242429] bg-[#131316] transition-all duration-300 hover:border-[#353638]"
              >
                {/* Gradient mockup */}
                <div className={`flex h-48 items-center justify-center bg-gradient-to-br ${project.gradient}`}>
                  <span className="font-heading text-2xl font-medium text-white/60">
                    {project.title}
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-3 p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#abaaa8]">
                    {project.category}
                  </span>
                  <h3 className="font-heading text-lg font-medium text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#abaaa8]">
                    {project.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-3">
                    {project.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="rounded-full border border-[#ffffff0f] bg-[#ffffff0f] px-3 py-1 text-xs text-[#abaaa8]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span>Voir le projet</span>
                    <ArrowUpRight size={14} />
                  </div>
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
