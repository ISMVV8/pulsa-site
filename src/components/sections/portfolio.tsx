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
    description: "Plateforme de recrutement moderne connectant talents et entreprises à Bruxelles.",
    tags: ["Site web", "Design", "SEO"],
    gradient: "from-[#7c3aed] via-[#6d28d9] to-[#4c1d95]",
  },
  {
    title: "Terra Sky",
    description: "Site vitrine immobilier premium avec visites virtuelles et prise de rendez-vous.",
    tags: ["Landing page", "Branding"],
    gradient: "from-[#3b82f6] via-[#2563eb] to-[#1e40af]",
  },
  {
    title: "City Smile",
    description: "Site de blanchiment dentaire optimisé pour la conversion et le référencement local.",
    tags: ["Site web", "SEO", "Conversion"],
    gradient: "from-[#06b6d4] via-[#0891b2] to-[#0e7490]",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 sm:py-32">
      {/* Orb */}
      <div className="orb orb-blue animate-float absolute right-0 top-1/2 h-[300px] w-[300px] opacity-20" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="glass-badge mb-4 inline-block">Portfolio</span>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold sm:text-4xl lg:text-5xl">
            Des projets qui{" "}
            <span className="gradient-text">parlent d&apos;eux-mêmes</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#9ca3af]">
            Découvrez quelques-unes de nos réalisations récentes.
          </p>
        </div>

        {/* Projects */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="glass glass-hover group cursor-pointer overflow-hidden rounded-2xl"
            >
              {/* Gradient mockup */}
              <div
                className={`relative flex h-56 items-center justify-center bg-gradient-to-br ${project.gradient}`}
              >
                <div className="glass rounded-lg px-6 py-3">
                  <span className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-white">
                    {project.title}
                  </span>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="btn-glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white">
                    Voir le projet
                    <ExternalLink size={14} />
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#9ca3af]">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="glass-badge text-xs"
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
