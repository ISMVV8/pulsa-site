import { Phone, Lightbulb, Code, Rocket } from "lucide-react";
import type { ReactNode } from "react";

interface Step {
  number: string;
  icon: ReactNode;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "01",
    icon: <Phone size={24} />,
    title: "Découverte",
    description: "Appel gratuit pour comprendre vos besoins, vos objectifs et votre vision.",
  },
  {
    number: "02",
    icon: <Lightbulb size={24} />,
    title: "Stratégie",
    description: "Plan d'action détaillé, maquettes et choix des technologies adaptées.",
  },
  {
    number: "03",
    icon: <Code size={24} />,
    title: "Développement",
    description: "Construction de votre projet avec des itérations et retours réguliers.",
  },
  {
    number: "04",
    icon: <Rocket size={24} />,
    title: "Lancement",
    description: "Mise en ligne, optimisations finales et suivi des performances.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32">
      {/* Orb */}
      <div className="orb orb-violet animate-float-slow absolute -left-20 top-1/3 h-[300px] w-[300px] opacity-20" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="glass-badge mb-4 inline-block">Processus</span>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold sm:text-4xl lg:text-5xl">
            Comment on{" "}
            <span className="gradient-text">travaille ensemble</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#9ca3af]">
            Un processus simple et transparent, de l&apos;idée au lancement.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line (desktop) */}
              {index < steps.length - 1 && (
                <div className="absolute right-0 top-12 hidden h-px w-6 bg-gradient-to-r from-[#7c3aed]/50 to-transparent lg:block translate-x-full" />
              )}

              <div className="glass glass-hover h-full rounded-2xl p-6 sm:p-8">
                <div className="mb-4 flex items-center gap-3">
                  <span className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold gradient-text">
                    {step.number}
                  </span>
                  <div className="inline-flex rounded-lg bg-gradient-to-br from-[#7c3aed]/20 to-[#3b82f6]/20 p-2.5 text-[#a78bfa]">
                    {step.icon}
                  </div>
                </div>
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#9ca3af]">
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
