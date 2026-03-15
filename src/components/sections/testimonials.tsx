import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  company: string;
  avatar: string;
  rating: number;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sophie Laurent",
    company: "Success Talent",
    avatar: "SL",
    rating: 5,
    quote:
      "Pulsa Creatives a transformé notre vision en réalité. Le site est magnifique, rapide et nos candidatures ont augmenté de 200% en 3 mois.",
  },
  {
    name: "Marc Dubois",
    company: "Terra Sky",
    avatar: "MD",
    rating: 5,
    quote:
      "Un travail exceptionnel. L'équipe est réactive, créative et comprend vraiment les enjeux business. Je recommande à 100%.",
  },
  {
    name: "Léa Martin",
    company: "City Smile",
    avatar: "LM",
    rating: 5,
    quote:
      "Notre site génère maintenant 3x plus de rendez-vous qu'avant. Le SEO et le design font vraiment la différence. Merci Pulsa !",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      {/* Orb */}
      <div className="orb orb-cyan animate-float absolute right-10 top-20 h-[250px] w-[250px] opacity-20" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="glass-badge mb-4 inline-block">Témoignages</span>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold sm:text-4xl lg:text-5xl">
            Ce que disent{" "}
            <span className="gradient-text">nos clients</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#9ca3af]">
            La satisfaction de nos clients est notre meilleure publicité.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="glass glass-hover rounded-2xl p-6 sm:p-8"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-[#f59e0b] text-[#f59e0b]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm leading-relaxed text-[#9ca3af]">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#7c3aed] to-[#3b82f6] text-xs font-bold text-white">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold">{testimonial.name}</div>
                  <div className="text-xs text-[#9ca3af]">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
