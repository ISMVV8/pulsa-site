const steps = [
  {
    number: "01",
    title: "Découverte",
    description:
      "Appel stratégique gratuit de 30min pour comprendre votre vision, vos objectifs et votre marché.",
  },
  {
    number: "02",
    title: "Stratégie",
    description:
      "Maquettes, structure du site et plan d'action validés ensemble avant de commencer.",
  },
  {
    number: "03",
    title: "Développement",
    description:
      "Construction itérative avec vos retours. Vous voyez le progrès en temps réel.",
  },
  {
    number: "04",
    title: "Lancement",
    description:
      "Mise en ligne, optimisation finale et suivi post-lancement pendant 30 jours.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-32 sm:py-40">
      {/* Orb */}
      <div className="orb orb-violet animate-float-slow absolute -left-20 top-1/3 h-[400px] w-[400px] opacity-20" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-20 text-center">
          <span className="mb-4 inline-block text-xs uppercase tracking-[0.2em] text-zinc-500">
            Processus
          </span>
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Comment on{" "}
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              travaille ensemble
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Un processus simple et transparent, de l&apos;idée au lancement.
          </p>
        </div>

        {/* Steps — numbered list style like 8lab */}
        <div className="mx-auto max-w-3xl space-y-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group flex gap-6 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-300 hover:border-white/[0.1] hover:bg-white/[0.06] sm:gap-8 sm:p-10"
            >
              <span className="text-5xl font-bold leading-none text-white/[0.08] sm:text-6xl">
                {step.number}
              </span>
              <div>
                <h3 className="text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
