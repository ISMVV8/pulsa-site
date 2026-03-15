import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  FileText,
  ShoppingBag,
  Palette,
  Search,
  Megaphone,
} from "lucide-react";

const listingItems = [
  { icon: Globe, label: "Sites Web" },
  { icon: FileText, label: "Landing Pages" },
  { icon: ShoppingBag, label: "E-Commerce" },
  { icon: Palette, label: "Branding" },
  { icon: Search, label: "SEO" },
  { icon: Megaphone, label: "Gestion Ads" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0a0a0a]" style={{ paddingTop: "72px" }}>
      {/* Background — multi-layer gradient like 8lab */}
      <div className="pointer-events-none absolute inset-0">
        {/* Main center vignette — subtle lift from pure black */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(255,255,255,0.04) 0%, transparent 60%)",
          }}
        />
        {/* Bottom left teal glow */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 40% 40% at 10% 100%, rgba(0,180,200,0.04) 0%, transparent 60%)",
          }}
        />
        {/* Bottom right blue glow */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 40% 40% at 90% 100%, rgba(59,130,246,0.03) 0%, transparent 60%)",
          }}
        />
        {/* Top edge — very subtle lighter band like 8lab */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, rgba(255,255,255,0.015) 0%, transparent 20%)",
          }}
        />
      </div>

      {/* Decorative horizontal lines under nav */}
      <div className="line-sweep h-px w-full bg-[#ffffff0f]">
        <div className="absolute left-0 top-0 h-px w-[80px] bg-gradient-to-r from-[#ffffff40] to-transparent" />
      </div>

      {/* Main content area */}
      <div className="mx-auto max-w-[970px] px-6">
        <div className="relative">
          {/* Vertical lines with sweep animation */}
          <div className="line-sweep-v absolute bottom-0 left-0 top-0 w-px bg-[#ffffff0f]">
            <div className="absolute left-0 top-0 h-[80px] w-px bg-gradient-to-b from-[#ffffff40] to-transparent" />
          </div>
          <div className="line-sweep-v absolute bottom-0 right-0 top-0 w-px bg-[#ffffff0f]" style={{ animationDelay: "3s" }}>
            <div className="absolute right-0 top-0 h-[80px] w-px bg-gradient-to-b from-[#ffffff40] to-transparent" />
          </div>

          {/* Hero inner — generous padding like 8lab */}
          <div className="px-4 pb-20 pt-20 text-center sm:px-8 lg:pt-28">
            {/* Badge with rotating glow border like 8lab */}
            <div className="badge-8lab">
              <div className="badge-8lab-inner">
                <span className="text-[13px] font-semibold text-white">
                  Pulsa Creatives : Agence Digitale
                </span>
              </div>
            </div>

            {/* Main heading — 64px like 8lab, semibold, tight tracking */}
            <h1 className="mx-auto mt-6 max-w-[820px] font-[family-name:var(--font-heading)] text-[32px] font-semibold leading-[1.15] tracking-[-1.5px] text-white sm:text-[44px] lg:text-[52px]">
              Le digital{" "}
              <span className="font-medium text-[#5e5f6e]">qui fait</span>{" "}
              la différence{" "}
              <span className="font-medium text-[#5e5f6e]">pour votre</span>{" "}
              business
            </h1>

            {/* Subtitle — with bold white + gray like 8lab */}
            <p className="mx-auto mt-6 max-w-[640px] text-[17px] leading-[1.6] tracking-[-0.2px] text-[#5e5f6e]">
              <span className="font-bold text-white">
                Pulsa Creatives vous accompagne de A à Z,
              </span>{" "}
              du design à la mise en ligne, pour créer une présence digitale qui
              convertit vraiment.
            </p>

            {/* CTA Button — white like 8lab */}
            <div className="mt-10">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full border border-[#e0e0e0] bg-white px-7 py-3.5 text-[15px] font-medium text-black transition-all duration-350 hover:scale-[0.975]"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-[#22c55e] pulse-green" />
                Demander un devis
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </Link>
            </div>

            {/* Social proof — avatars left, stars+text stacked right */}
            <div className="mx-auto mt-6 flex w-fit items-center gap-4">
              {/* Stacked avatars */}
              <div className="flex">
                {[
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80",
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80",
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&q=80",
                ].map((src, i) => (
                  <div
                    key={i}
                    className="relative h-[40px] w-[40px] overflow-hidden rounded-full border-2 border-[#ffffff40] shadow-[0_2px_5px_#0003]"
                    style={{ marginLeft: i > 0 ? "-14px" : 0, zIndex: 5 - i }}
                  >
                    <Image
                      src={src}
                      alt="Client"
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                ))}
              </div>

              {/* Stars + text stacked */}
              <div className="flex flex-col items-start gap-0.5">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-[18px] w-[18px] text-[#22c55e]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-[14px] font-medium text-white">
                  +50 clients satisfaits
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal line with glow + sweep */}
      <div className="line-sweep h-px w-full bg-[#ffffff0f]" style={{ animationDelay: "2s" }}>
        <div className="absolute left-0 top-0 h-px w-[80px] bg-gradient-to-r from-[#ffffff40] to-transparent" />
        <div className="absolute right-0 top-0 h-px w-[80px] bg-gradient-to-l from-[#ffffff40] to-transparent" />
      </div>

      {/* Listing bar */}
      <div className="mx-auto max-w-[970px] px-6">
        <div className="relative">
          {/* Vertical lines */}
          <div className="line-sweep-v absolute bottom-0 left-0 top-0 w-px bg-[#ffffff0f]" style={{ animationDelay: "1s" }} />
          <div className="line-sweep-v absolute bottom-0 right-0 top-0 w-px bg-[#ffffff0f]" style={{ animationDelay: "4s" }} />

          <div className="grid grid-cols-3 sm:grid-cols-6">
            {listingItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className={`flex items-center justify-center gap-2.5 py-5 ${
                    i < listingItems.length - 1
                      ? "border-r border-[#ffffff0f]"
                      : ""
                  }`}
                >
                  <Icon
                    className="h-[18px] w-[18px] text-[#5e5f6e]"
                    strokeWidth={1.5}
                  />
                  <span className="text-[14px] font-light text-white">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Horizontal line with glow + sweep */}
      <div className="line-sweep h-px w-full bg-[#ffffff0f]" style={{ animationDelay: "4s" }}>
        <div className="absolute left-0 top-0 h-px w-[80px] bg-gradient-to-r from-[#ffffff40] to-transparent" />
        <div className="absolute right-0 top-0 h-px w-[80px] bg-gradient-to-l from-[#ffffff40] to-transparent" />
      </div>

      {/* Stats section */}
      <div className="mx-auto max-w-[970px] px-6">
        <div className="relative">
          <div className="line-sweep-v absolute bottom-0 left-0 top-0 w-px bg-[#ffffff0f]" style={{ animationDelay: "2s" }} />
          <div className="line-sweep-v absolute bottom-0 right-0 top-0 w-px bg-[#ffffff0f]" style={{ animationDelay: "5s" }} />

          <div className="grid grid-cols-4">
            {[
              { label: "Projets livrés", value: "50+" },
              { label: "Satisfaction", value: "4.9/5" },
              { label: "Délai moyen", value: "7j" },
              { label: "Sur mesure", value: "100%" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`flex h-[70px] flex-col items-center justify-center gap-1 sm:h-[130px] sm:gap-3 ${
                  i < 3 ? "border-r border-[#ffffff0f]" : ""
                }`}
              >
                <span className="text-[10px] text-[#abaaa8] sm:text-[14px]">
                  {stat.label}
                </span>
                <span className="font-[family-name:var(--font-heading)] text-[18px] font-medium leading-none text-white sm:text-[32px]">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="line-sweep h-px w-full bg-[#ffffff0f]" style={{ animationDelay: "5s" }}>
        <div className="absolute left-0 top-0 h-px w-[80px] bg-gradient-to-r from-[#ffffff40] to-transparent" />
        <div className="absolute right-0 top-0 h-px w-[80px] bg-gradient-to-l from-[#ffffff40] to-transparent" />
      </div>
    </section>
  );
}
