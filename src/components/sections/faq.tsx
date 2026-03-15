"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Combien coûte un site web ?",
    answer: "Nos tarifs commencent à 499€ pour une landing page et vont jusqu'à des solutions sur mesure. Chaque projet est unique — contactez-nous pour un devis gratuit adapté à vos besoins.",
  },
  {
    question: "Quel est le délai de livraison ?",
    answer: "En moyenne, nous livrons un site en 7 jours ouvrés pour une landing page, et 2 à 4 semaines pour un site multi-pages. Les projets e-commerce ou sur mesure nécessitent 4 à 8 semaines.",
  },
  {
    question: "Est-ce que le SEO est inclus ?",
    answer: "Oui, chaque site inclut une optimisation SEO de base (structure, meta tags, performance). Pour une stratégie SEO complète avec suivi mensuel, nous proposons des formules dédiées.",
  },
  {
    question: "Proposez-vous un support après la livraison ?",
    answer: "Absolument. Chaque projet inclut 30 jours de support gratuit. Nous proposons également des contrats de maintenance mensuelle pour un accompagnement continu.",
  },
  {
    question: "Quelles technologies utilisez-vous ?",
    answer: "Nous utilisons les technologies les plus modernes : Next.js, React, Tailwind CSS, Webflow, Shopify et WordPress selon les besoins du projet. Performance et scalabilité sont nos priorités.",
  },
  {
    question: "Comment se déroule la collaboration ?",
    answer: "Tout commence par un appel découverte gratuit. Ensuite, nous suivons un processus en 4 étapes : découverte, stratégie, développement et lancement, avec un feedback continu à chaque étape.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="faq-item shadow-faq cursor-pointer overflow-hidden rounded-2xl bg-white"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between p-6">
        <span className="pr-4 text-left text-sm font-medium text-[#222]">
          {question}
        </span>
        <div className="relative flex h-5 w-5 flex-shrink-0 items-center justify-center">
          <div className="h-[1.5px] w-3.5 rounded-full bg-[#131316]" />
          <div
            className={`absolute h-3.5 w-[1.5px] rounded-full bg-[#131316] transition-transform duration-300 ${
              open ? "rotate-90" : ""
            }`}
          />
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 pb-6" : "max-h-0"
        }`}
      >
        <div className="px-6 text-sm leading-relaxed text-[#5e5f6e]">
          {answer}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-[#f7f7f8] py-20">
      <div className="mx-auto max-w-[970px] px-6">
        {/* Header */}
        <div className="mb-10 flex flex-col items-start gap-6">
          <div className="rounded-[100000000px] border border-[#1111111a] p-[7px]">
            <div className="shadow-8lab-sm rounded-[99999px] bg-white px-4 py-2.5">
              <span className="text-[15.25px] font-semibold tracking-[-0.2px] text-[#5e5f6e]">
                FAQ
              </span>
            </div>
          </div>

          <h2 className="font-heading text-[36px] font-medium leading-[1.2] tracking-tight text-[#131316] sm:text-[44px]">
            Questions fréquentes.
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="rounded-[24px] border border-[#1111111a] p-[7px] shadow-[0_0_0_1px_#fff]">
          <div className="flex flex-col gap-3 rounded-[20px]">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
