const testimonials = [
  {
    name: "Marc D.",
    role: "CEO, Success Talent",
    quote: "Nos conversions ont doublé en 2 mois. L'équipe Pulsa a compris nos besoins dès le premier appel et a livré un site qui dépasse toutes nos attentes.",
    initial: "M",
  },
  {
    name: "Sarah K.",
    role: "Fondatrice, Bloom Cosmetics",
    quote: "Notre e-commerce tourne parfaitement. Le design est magnifique, le tunnel de vente est optimisé et le support a été exceptionnel.",
    initial: "S",
  },
  {
    name: "Thomas B.",
    role: "Directeur, Terra Sky",
    quote: "Le meilleur investissement de l'année. ROI en moins d'un mois grâce au SEO et aux campagnes Ads gérées par Pulsa.",
    initial: "T",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#f7f7f8] py-20">
      <div className="mx-auto max-w-[970px] px-6">
        {/* Header */}
        <div className="flex flex-col items-start gap-6">
          <div className="rounded-[100000000px] border border-[#1111111a] p-[7px]">
            <div className="shadow-8lab-sm rounded-[99999px] bg-white px-4 py-2.5">
              <span className="text-[15.25px] font-semibold tracking-[-0.2px] text-[#5e5f6e]">
                Témoignages
              </span>
            </div>
          </div>

          <h2 className="font-heading text-[36px] font-medium leading-[1.2] tracking-tight text-[#131316] sm:text-[44px]">
            Ce que nos clients disent.
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-10">
          <div className="rounded-[24px] border border-[#1111111a] p-[7px] shadow-[0_0_0_1px_#fff]">
            <div className="shadow-8lab grid gap-0 overflow-hidden rounded-[20px] bg-white md:grid-cols-3">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className={`flex flex-col gap-6 p-6 ${
                    i < testimonials.length - 1 ? "border-b md:border-b-0 md:border-r" : ""
                  } border-[#1111111a]`}
                >
                  {/* Stars */}
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="#facc15">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="flex-1 text-sm leading-relaxed text-[#5e5f6e]">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-b from-[#363636] to-black text-sm font-medium text-white">
                      {t.initial}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-[#131316]">{t.name}</div>
                      <div className="text-xs text-[#5e5f6e]">{t.role}</div>
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
