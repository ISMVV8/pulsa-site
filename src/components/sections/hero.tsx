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

const stats = [
  { value: "50+", label: "Projets livrés" },
  { value: "4.9/5", label: "Satisfaction" },
  { value: "7 jours", label: "Délai moyen" },
  { value: "100%", label: "Sur mesure" },
];

export default function Hero() {
  return (
    <section className="relative bg-[#0a0a0a] pt-[72px]">
      {/* Hero content */}
      <div className="mx-auto max-w-[970px] px-6">
        {/* Vertical lines */}
        <div className="relative">
          <div className="absolute bottom-0 left-0 top-0 w-px bg-[#ffffff0f]" />
          <div className="absolute bottom-0 right-0 top-0 w-px bg-[#ffffff0f]" />

          <div className="px-8 pb-16 pt-20 text-center sm:px-16 sm:pt-28">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-[#ffffff0f] bg-[#ffffff0f] px-5 py-2 backdrop-blur-[5px]">
              <span className="text-[14px] font-medium text-[#afb0b9]">
                Pulsa Creatives — Agence Digitale Bruxelles
              </span>
            </div>

            {/* Main heading */}
            <h1 className="mx-auto mt-8 max-w-[800px] font-[family-name:var(--font-heading)] text-[36px] font-medium leading-[1.2] tracking-[-0.02px] text-white sm:text-[48px] lg:text-[56px]">
              Le digital{" "}
              <span className="text-[#abaaa8]">qui fait</span>{" "}
              la différence{" "}
              <span className="text-[#abaaa8]">pour votre</span>{" "}
              business
            </h1>

            {/* Subtitle */}
            <p className="mx-auto mt-6 max-w-[640px] text-[16px] leading-[1.6] text-[#abaaa8]">
              <span className="font-medium text-white">
                Pulsa Creatives vous accompagne de A à Z,
              </span>{" "}
              du design à la mise en ligne, pour créer une présence digitale qui
              convertit vraiment.
            </p>

            {/* CTA Button */}
            <div className="mt-10">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full border border-black bg-gradient-to-b from-[#4b4b4b] to-[#171717] px-6 py-3.5 text-[15px] font-medium text-white transition-all duration-350 hover:scale-95"
              >
                <span className="h-2 w-2 rounded-full bg-[#22c55e]" />
                Demander un devis
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </Link>
            </div>

            {/* Social proof */}
            <div className="mt-8 flex items-center justify-center gap-4">
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
                    className="relative h-[41px] w-[41px] overflow-hidden rounded-full border border-[#ffffff40] shadow-[0_2px_5px_#0003]"
                    style={{ marginLeft: i > 0 ? "-16px" : 0, zIndex: 5 - i }}
                  >
                    <Image
                      src={src}
                      alt="Client"
                      fill
                      className="object-cover"
                      sizes="41px"
                    />
                  </div>
                ))}
              </div>

              {/* Stars + text */}
              <div className="flex flex-col items-start gap-0.5">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-[14px] w-[14px] text-[#22c55e]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-[13px] text-white">
                  +50 clients satisfaits
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal line */}
      <div className="h-px w-full bg-[#ffffff0f]" />

      {/* Listing bar */}
      <div className="mx-auto max-w-[970px] px-6">
        <div className="relative">
          <div className="absolute bottom-0 left-0 top-0 w-px bg-[#ffffff0f]" />
          <div className="absolute bottom-0 right-0 top-0 w-px bg-[#ffffff0f]" />

          <div className="grid grid-cols-3 sm:grid-cols-6">
            {listingItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className={`flex items-center justify-center gap-2 py-5 ${
                    i < listingItems.length - 1
                      ? "border-r border-[#ffffff0f]"
                      : ""
                  }`}
                >
                  <Icon className="h-[18px] w-[18px] text-[#afb0b9]" strokeWidth={1.5} />
                  <span className="text-[13px] font-light text-white sm:text-[14px]">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Horizontal line */}
      <div className="h-px w-full bg-[#ffffff0f]" />

      {/* Stats bar */}
      <div className="mx-auto max-w-[970px] px-6">
        <div className="relative">
          <div className="absolute bottom-0 left-0 top-0 w-px bg-[#ffffff0f]" />
          <div className="absolute bottom-0 right-0 top-0 w-px bg-[#ffffff0f]" />

          <div className="grid grid-cols-2 sm:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex h-[130px] flex-col items-center justify-center gap-2 ${
                  i < stats.length - 1 ? "border-r border-[#ffffff0f]" : ""
                }`}
              >
                <span className="text-[13px] text-[#abaaa8]">
                  {stat.label}
                </span>
                <span className="font-[family-name:var(--font-heading)] text-[28px] font-medium leading-none text-white sm:text-[32px]">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Horizontal line */}
      <div className="h-px w-full bg-[#ffffff0f]" />
    </section>
  );
}
