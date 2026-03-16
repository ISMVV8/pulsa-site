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
  { label: "Projets livrés", value: "50+" },
  { label: "Satisfaction", value: "4.9/5" },
  { label: "Délai moyen", value: "7j" },
  { label: "Sur mesure", value: "100%" },
];

const avatars = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&q=80",
];

/* ─── Reusable line components ─── */
function HLine({ delay = "0s" }: { delay?: string }) {
  return (
    <div className="line-sweep relative h-px w-full bg-[#ffffff0f]" style={{ animationDelay: delay }}>
      <div className="absolute left-0 top-0 h-px w-[60px] bg-gradient-to-r from-[#ffffff30] to-transparent" />
      <div className="absolute right-0 top-0 h-px w-[60px] bg-gradient-to-l from-[#ffffff30] to-transparent" />
    </div>
  );
}

function VLines({ delayL = "0s", delayR = "3s" }: { delayL?: string; delayR?: string }) {
  return (
    <>
      <div className="line-sweep-v absolute bottom-0 left-0 top-0 w-px bg-[#ffffff0f]" style={{ animationDelay: delayL }} />
      <div className="line-sweep-v absolute bottom-0 right-0 top-0 w-px bg-[#ffffff0f]" style={{ animationDelay: delayR }} />
    </>
  );
}

/* ─── Hero Section ─── */
export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#070707]" style={{ paddingTop: "73px" }}>
      {/* ── Background glows ── */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 55% at 50% 28%, rgba(255,255,255,0.035) 0%, transparent 60%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 35% 35% at 8% 95%, rgba(0,180,200,0.035) 0%, transparent 55%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 35% 35% at 92% 95%, rgba(59,130,246,0.025) 0%, transparent 55%)" }} />
      </div>

      {/* ── 1. Top separator ── */}
      <HLine />

      {/* ── 2. Hero content ── */}
      <div className="mx-auto max-w-[1100px] px-5">
        <div className="relative">
          <VLines />

          <div className="flex min-h-[calc(100vh-73px-48px-80px-100px)] flex-col items-center justify-center px-6 py-16 text-center sm:px-12 lg:py-24">

            {/* Badge */}
            <div className="badge-8lab">
              <div className="badge-8lab-inner">
                <span className="text-[12px] font-semibold tracking-wide text-white sm:text-[13px]">
                  Pulsa Creatives : Agence Digitale
                </span>
              </div>
            </div>

            {/* Title */}
            <h1 className="mx-auto mt-7 max-w-[850px] font-[family-name:var(--font-heading)] text-[34px] font-semibold leading-[1.12] tracking-[-1.5px] text-white sm:mt-8 sm:text-[48px] lg:text-[58px]">
              Le digital{" "}
              <span className="font-medium text-[#5e5f6e]">qui fait</span>{" "}
              la différence{" "}
              <span className="font-medium text-[#5e5f6e]">pour votre</span>{" "}
              business
            </h1>

            {/* Subtitle */}
            <p className="mx-auto mt-6 max-w-[580px] text-[15px] leading-[1.65] text-[#5e5f6e] sm:mt-7 sm:text-[17px]">
              <span className="font-bold text-white">
                Pulsa Creatives vous accompagne de A à Z,
              </span>{" "}
              du design à la mise en ligne, pour créer une présence digitale qui
              convertit vraiment.
            </p>

            {/* CTA */}
            <div className="mt-9 sm:mt-10">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-[15px] font-medium text-black shadow-[0_0_20px_rgba(255,255,255,0.08)] transition-all duration-300 hover:scale-[0.975] hover:shadow-[0_0_30px_rgba(255,255,255,0.12)]"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-[#22c55e] pulse-green" />
                Demander un devis
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="transition-transform group-hover:translate-x-0.5">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </Link>
            </div>

            {/* Social proof */}
            <div className="mt-7 flex items-center gap-4">
              <div className="flex">
                {avatars.map((src, i) => (
                  <div
                    key={i}
                    className="relative h-[36px] w-[36px] overflow-hidden rounded-full border-2 border-[#ffffff30] sm:h-[40px] sm:w-[40px]"
                    style={{ marginLeft: i > 0 ? "-12px" : 0, zIndex: 5 - i }}
                  >
                    <Image src={src} alt="" fill className="object-cover" sizes="40px" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-start gap-0.5">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-[16px] w-[16px] text-[#22c55e]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-[13px] font-medium text-white">+50 clients satisfaits</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 3. Listing bar ── */}
      <HLine delay="2s" />

      <div className="mx-auto max-w-[970px] px-5">
        <div className="relative">
          <VLines delayL="1s" delayR="4s" />

          {/* Desktop */}
          <div className="hidden sm:grid sm:grid-cols-6">
            {listingItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className={`flex items-center justify-center gap-2 py-5 ${i < 5 ? "border-r border-[#ffffff0f]" : ""}`}>
                  <Icon className="h-[17px] w-[17px] text-[#5e5f6e]" strokeWidth={1.5} />
                  <span className="text-[14px] font-light text-white">{item.label}</span>
                </div>
              );
            })}
          </div>

          {/* Mobile marquee */}
          <div className="overflow-hidden sm:hidden">
            <div className="animate-marquee flex w-max">
              {[...listingItems, ...listingItems].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex flex-shrink-0 items-center gap-2 border-r border-[#ffffff0f] px-5 py-3.5">
                    <Icon className="h-[15px] w-[15px] text-[#5e5f6e]" strokeWidth={1.5} />
                    <span className="whitespace-nowrap text-[13px] font-light text-white">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ── 4. Stats bar ── */}
      <HLine delay="3.5s" />

      <div className="mx-auto max-w-[970px] px-5">
        <div className="relative">
          <VLines delayL="2.5s" delayR="5s" />

          <div className="grid grid-cols-4">
            {stats.map((stat, i) => (
              <div key={stat.label} className={`flex flex-col items-center justify-center gap-1 py-5 sm:h-[120px] sm:gap-2.5 ${i < 3 ? "border-r border-[#ffffff0f]" : ""}`}>
                <span className="text-[9px] uppercase tracking-wider text-[#5e5f6e] sm:text-[12px]">{stat.label}</span>
                <span className="font-[family-name:var(--font-heading)] text-[18px] font-medium leading-none text-white sm:text-[30px]">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 5. Bottom line ── */}
      <HLine delay="5s" />
    </section>
  );
}
