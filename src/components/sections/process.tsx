import { Check } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Découverte",
    description: "Appel stratégique gratuit de 30 min pour comprendre vos objectifs, votre cible et vos besoins.",
    details: ["Analyse de vos objectifs", "Étude de votre marché", "Définition du scope"],
  },
  {
    number: "02",
    title: "Stratégie",
    description: "Wireframes, architecture du site, plan de contenu et stratégie de conversion.",
    details: ["Wireframes & maquettes", "Architecture du site", "Plan de contenu"],
  },
  {
    number: "03",
    title: "Développement",
    description: "Développement itératif avec feedback en temps réel et accès à une preview live.",
    details: ["Développement itératif", "Feedback en temps réel", "Preview live"],
  },
  {
    number: "04",
    title: "Lancement",
    description: "Mise en ligne, optimisation des performances et support dédié pendant 30 jours.",
    details: ["Mise en production", "Optimisation SEO", "Support 30 jours"],
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-[#f7f7f8] py-20">
      <div className="mx-auto max-w-[970px] px-6">
        {/* Header */}
        <div className="flex flex-col items-start gap-6">
          <div className="rounded-[100000000px] border border-[#1111111a] p-[7px]">
            <div className="shadow-8lab-sm rounded-[99999px] bg-white px-4 py-2.5">
              <span className="text-[15.25px] font-semibold tracking-[-0.2px] text-[#5e5f6e]">
                Notre Processus
              </span>
            </div>
          </div>

          <h2 className="font-heading text-[36px] font-medium leading-[1.2] tracking-tight text-[#131316] sm:text-[44px]">
            4 étapes vers votre succès.
          </h2>

          <p className="max-w-[600px] text-[18px] leading-relaxed text-[#5e5f6e]">
            Un processus simple et structuré pour garantir des résultats à la hauteur de vos ambitions.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-12">
          <div className="rounded-[24px] border border-[#1111111a] p-[7px] shadow-[0_0_0_1px_#fff]">
            <div className="shadow-8lab overflow-hidden rounded-[20px] bg-white">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className={`flex flex-col gap-4 p-6 sm:flex-row sm:items-start sm:gap-8 ${
                    i < steps.length - 1 ? "border-b border-[#1111111a]" : ""
                  }`}
                >
                  {/* Number */}
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border border-[#1111111a] bg-[#f7f7f8]">
                    <span className="font-heading text-lg font-semibold text-[#131316]">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-medium text-[#131316]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#5e5f6e]">
                      {step.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                      {step.details.map((detail, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <Check size={14} className="text-[#131316]" strokeWidth={2} />
                          <span className="text-sm text-[#5e5f6e]">{detail}</span>
                        </div>
                      ))}
                    </div>
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
