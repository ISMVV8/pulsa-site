interface Testimonial {
  name: string;
  handle: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Marc D.",
    handle: "@marcd_tech",
    quote:
      "Pulsa a transformé notre présence en ligne. Le site est magnifique et nos conversions ont doublé en 2 mois.",
  },
  {
    name: "Sarah K.",
    handle: "@sarahk_beauty",
    quote:
      "Professionnels, réactifs et créatifs. Notre e-commerce tourne parfaitement depuis le lancement.",
  },
  {
    name: "Thomas B.",
    handle: "@thomasb_immo",
    quote:
      "Le meilleur investissement qu'on ait fait pour notre business. Le ROI est là dès le premier mois.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-32 sm:py-40">
      {/* Orb */}
      <div className="orb orb-emerald animate-float absolute right-10 top-20 h-[350px] w-[350px] opacity-15" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-20 text-center">
          <span className="mb-4 inline-block text-xs uppercase tracking-[0.2em] text-zinc-500">
            Témoignages
          </span>
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Ce que disent{" "}
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              nos clients
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            La satisfaction de nos clients est notre meilleure publicité.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-300 hover:border-white/[0.1] hover:bg-white/[0.06] sm:p-10"
            >
              {/* Quote */}
              <p className="text-sm leading-relaxed text-zinc-400">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-blue-500 text-xs font-bold text-white">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-zinc-500">
                    {testimonial.handle}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
