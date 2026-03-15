import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  gradient: string;
}

const projects: Project[] = [
  {
    title: "Success Talent",
    description:
      "Plateforme de recrutement innovante connectant talents et entreprises.",
    tags: ["Site web", "UX/UI", "SEO"],
    gradient: "from-violet-600 via-violet-700 to-violet-900",
  },
  {
    title: "Terra Sky",
    description:
      "Site vitrine immobilier premium avec visites virtuelles.",
    tags: ["Landing page", "Branding"],
    gradient: "from-blue-600 via-blue-700 to-blue-900",
  },
  {
    title: "City Smile",
    description:
      "Centre de blanchiment dentaire — optimisé conversion et SEO local.",
    tags: ["Site web", "SEO", "Conversion"],
    gradient: "from-emerald-600 via-emerald-700 to-emerald-900",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-32 sm:py-40">
      {/* Orb */}
      <div className="orb orb-blue animate-float absolute right-0 top-1/2 h-[400px] w-[400px] opacity-20" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-20 text-center">
          <span className="mb-4 inline-block text-xs uppercase tracking-[0.2em] text-zinc-500">
            Réalisations
          </span>
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Des projets qui{" "}
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              parlent d&apos;eux-mêmes
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Découvrez quelques-unes de nos réalisations récentes.
          </p>
        </div>

        {/* Projects */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-xl transition-all duration-300 hover:border-white/[0.1] hover:bg-white/[0.06]"
            >
              {/* Gradient mockup */}
              <div
                className={`relative flex h-56 items-center justify-center bg-gradient-to-br ${project.gradient}`}
              >
                <div className="rounded-xl border border-white/[0.15] bg-white/[0.1] px-6 py-3 backdrop-blur-sm">
                  <span className="text-lg font-bold text-white">
                    {project.title}
                  </span>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.2] bg-white/[0.1] px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm">
                    Voir le projet
                    <ExternalLink size={14} />
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 sm:p-8">
                <h3 className="text-lg font-bold text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/[0.08] bg-white/[0.05] px-3 py-1 text-xs text-zinc-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
