import { ArrowRight, Globe, PenTool, Search, BarChart3, ShoppingBag, Megaphone } from "lucide-react";

const listings = [
  { icon: Globe, label: "Sites Web" },
  { icon: PenTool, label: "Landing Pages" },
  { icon: ShoppingBag, label: "E-Commerce" },
  { icon: Search, label: "SEO" },
  { icon: Megaphone, label: "Ads" },
  { icon: BarChart3, label: "Branding" },
];

const stats = [
  { label: "Projets livrés", value: "50+" },
  { label: "Satisfaction client", value: "4.9/5" },
  { label: "Délai moyen", value: "7 jours" },
  { label: "Sur mesure", value: "100%" },
];

const avatars = ["M", "S", "T", "A", "L"];

export default function Hero() {
  return (
    <section className="relative bg-[#070707] pt-32">
      {/* Top line */}
      <div className="line-h" />
      <div className="line-glow" />

      {/* Main content with vertical lines */}
      <div className="relative mx-auto flex max-w-[970px] px-6">
        <div className="line-v hidden self-stretch md:block" />
        <div className="line-glow-v-down hidden md:block" />

        <div className="flex-1 py-20">
          <div className="mx-auto flex max-w-[900px] flex-col items-center text-center">
            {/* Animated preheading badge */}
            <div className="glow-btn mb-8 animate-fade-in-up">
              <span className="text-[15.25px] font-semibold tracking-[-0.2px] text-white">
                Agence Digitale — Bruxelles
              </span>
            </div>

            {/* Main heading */}
            <h1 className="animate-fade-in-up-delay-1 font-heading text-[36px] font-medium leading-[1.2] tracking-[-0.02px] text-white sm:text-[44px] md:text-[56px]">
              L&apos;agence qui transforme votre vision en résultats concrets
            </h1>

            {/* Subtext */}
            <p className="animate-fade-in-up-delay-2 mt-6 max-w-[700px] text-lg leading-relaxed text-[#abaaa8]">
              Sites web, landing pages, e-commerce, SEO et gestion Ads.
              Nous créons des solutions digitales premium qui convertissent.
            </p>

            {/* CTA Button */}
            <a
              href="#contact"
              className="btn-cta animate-fade-in-up-delay-3 mt-10 inline-flex items-center gap-2.5 rounded-full border border-black bg-gradient-to-b from-[#4b4b4b] to-[#171717] px-5 py-3 text-base font-medium text-white"
            >
              <span>Demander un devis gratuit</span>
              <ArrowRight size={16} />
            </a>

            {/* Social Proof */}
            <div className="animate-fade-in-up-delay-3 mt-8 flex items-center gap-4 rounded-full border border-[#ffffff0f] bg-[#ffffff0f] px-5 py-3 backdrop-blur-[5px]">
              {/* Avatars */}
              <div className="flex">
                {avatars.map((initial, i) => (
                  <div
                    key={i}
                    className={`flex h-[41px] w-[41px] items-center justify-center rounded-full border border-[#ffffff40] bg-gradient-to-b from-[#3a3940] to-[#1f1e24] text-sm font-medium text-white shadow-[0_2px_5px_#0003] ${i > 0 ? "-ml-4" : ""}`}
                  >
                    {initial}
                  </div>
                ))}
              </div>
              {/* Stars + text */}
              <div className="flex flex-col items-start">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#facc15">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-white">+50 clients satisfaits</span>
              </div>
            </div>
          </div>
        </div>

        <div className="line-glow-v-down hidden md:block" />
        <div className="line-v hidden self-stretch md:block" />
      </div>

      {/* Listing bar */}
      <div className="line-h" />
      <div className="line-glow" />
      <div className="relative mx-auto flex max-w-[970px] px-6">
        <div className="line-v hidden self-stretch md:block" />
        <div className="flex-1">
          <div className="grid grid-cols-3 md:grid-cols-6">
            {listings.map((item, i) => (
              <div
                key={i}
                className={`flex items-center gap-2 p-6 ${i < listings.length - 1 ? "border-r border-[#ffffff0f]" : ""}`}
              >
                <item.icon size={20} className="text-[#abaaa8]" strokeWidth={1.5} />
                <span className="text-sm text-white">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="line-v hidden self-stretch md:block" />
      </div>

      {/* Stats bar */}
      <div className="line-h" />
      <div className="line-glow-right" />
      <div className="relative mx-auto flex max-w-[970px] px-6">
        <div className="line-v hidden self-stretch md:block" />
        <div className="flex-1">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`flex h-[130px] flex-col justify-center p-6 ${i < stats.length - 1 ? "border-r border-[#ffffff0f]" : ""}`}
              >
                <span className="text-sm text-[#abaaa8]">{stat.label}</span>
                <span className="mt-2 font-heading text-[28px] font-medium leading-none text-white sm:text-[32px]">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="line-v hidden self-stretch md:block" />
      </div>
      <div className="line-h" />
      <div className="line-glow" />
    </section>
  );
}
