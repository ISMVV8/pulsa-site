"use client";

import { useState } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Send, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

const services = [
  "Site vitrine",
  "Landing page",
  "E-commerce",
  "SEO",
  "Branding",
  "Gestion Ads",
  "Autre",
];

const budgets = [
  "< 500€",
  "500€ — 1 500€",
  "1 500€ — 3 000€",
  "3 000€+",
  "À définir",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Demande de devis — ${formData.name}${formData.company ? ` (${formData.company})` : ""}`
    );
    const body = encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\nTéléphone: ${formData.phone || "—"}\nEntreprise: ${formData.company || "—"}\nService: ${formData.service || "—"}\nBudget: ${formData.budget || "—"}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:contact@pulsacreatives.com?subject=${subject}&body=${body}`;
  };

  const update = (field: string, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  return (
    <>
      <Header />
      <main className="bg-[#0a0a0a]" style={{ paddingTop: "72px" }}>
        {/* Hero */}
        <section className="relative">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(255,255,255,0.04) 0%, transparent 60%)",
            }}
          />

          <div className="line-sweep h-px w-full bg-[#ffffff0f]" />

          <div className="mx-auto max-w-[970px] px-6">
            <div className="relative">
              <div className="line-sweep-v absolute bottom-0 left-0 top-0 w-px bg-[#ffffff0f]" />
              <div className="line-sweep-v absolute bottom-0 right-0 top-0 w-px bg-[#ffffff0f]" style={{ animationDelay: "3s" }} />

              <div className="px-4 pb-12 pt-20 text-center sm:px-8 lg:pt-24">
                <div className="badge-8lab">
                  <div className="badge-8lab-inner">
                    <span className="text-[13px] font-semibold text-white">
                      Contact
                    </span>
                  </div>
                </div>

                <h1 className="mx-auto mt-8 max-w-[800px] font-[family-name:var(--font-heading)] text-[36px] font-semibold leading-[1.15] tracking-[-1.5px] text-white sm:text-[50px] lg:text-[56px]">
                  Parlons de{" "}
                  <span className="font-medium text-[#5e5f6e]">votre</span>{" "}
                  projet
                </h1>

                <p className="mx-auto mt-6 max-w-[580px] text-[17px] leading-[1.6] text-[#5e5f6e]">
                  <span className="font-bold text-white">
                    Réponse sous 24h.
                  </span>{" "}
                  Décrivez votre projet et recevez une proposition sur mesure.
                </p>
              </div>
            </div>
          </div>

          <div className="line-sweep h-px w-full bg-[#ffffff0f]" style={{ animationDelay: "2s" }} />
        </section>

        {/* Main content */}
        <div className="mx-auto max-w-[970px] px-6">
          <div className="relative">
            <div className="line-sweep-v absolute bottom-0 left-0 top-0 w-px bg-[#ffffff0f]" style={{ animationDelay: "1s" }} />
            <div className="line-sweep-v absolute bottom-0 right-0 top-0 w-px bg-[#ffffff0f]" style={{ animationDelay: "5s" }} />

            <div className="grid gap-10 px-4 py-16 sm:px-10 lg:grid-cols-[1fr_340px]">
              {/* Form */}
              <div className="overflow-hidden rounded-3xl border border-[#242429] bg-[#131316] p-6 sm:p-10">
                <h2 className="font-[family-name:var(--font-heading)] text-xl font-medium text-white">
                  Demander un devis gratuit
                </h2>
                <p className="mt-2 text-sm text-[#abaaa8]">
                  Remplissez le formulaire ci-dessous, nous reviendrons vers vous rapidement.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
                  {/* Name + Email */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-[13px] font-medium text-[#abaaa8]">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => update("name", e.target.value)}
                        required
                        placeholder="Jean Dupont"
                        className="w-full rounded-xl border border-[#ffffff12] bg-[#ffffff08] px-4 py-3 text-sm text-white placeholder-[#5e5f6e] outline-none transition-colors focus:border-[#ffffff26]"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-[13px] font-medium text-[#abaaa8]">
                        Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => update("email", e.target.value)}
                        required
                        placeholder="jean@entreprise.be"
                        className="w-full rounded-xl border border-[#ffffff12] bg-[#ffffff08] px-4 py-3 text-sm text-white placeholder-[#5e5f6e] outline-none transition-colors focus:border-[#ffffff26]"
                      />
                    </div>
                  </div>

                  {/* Phone + Company */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-[13px] font-medium text-[#abaaa8]">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        placeholder="+32 4XX XX XX XX"
                        className="w-full rounded-xl border border-[#ffffff12] bg-[#ffffff08] px-4 py-3 text-sm text-white placeholder-[#5e5f6e] outline-none transition-colors focus:border-[#ffffff26]"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-[13px] font-medium text-[#abaaa8]">
                        Entreprise
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => update("company", e.target.value)}
                        placeholder="Votre entreprise (optionnel)"
                      className="w-full rounded-xl border border-[#ffffff12] bg-[#ffffff08] px-4 py-3 text-sm text-white placeholder-[#5e5f6e] outline-none transition-colors focus:border-[#ffffff26]"
                    />
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label className="mb-2 block text-[13px] font-medium text-[#abaaa8]">
                      Service souhaité
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {services.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => update("service", s)}
                          className={`rounded-full border px-4 py-2 text-xs font-medium transition-all ${
                            formData.service === s
                              ? "border-white bg-white text-black"
                              : "border-[#ffffff12] bg-[#ffffff08] text-[#abaaa8] hover:border-[#ffffff26] hover:text-white"
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="mb-2 block text-[13px] font-medium text-[#abaaa8]">
                      Budget estimé
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {budgets.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => update("budget", b)}
                          className={`rounded-full border px-4 py-2 text-xs font-medium transition-all ${
                            formData.budget === b
                              ? "border-white bg-white text-black"
                              : "border-[#ffffff12] bg-[#ffffff08] text-[#abaaa8] hover:border-[#ffffff26] hover:text-white"
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="mb-2 block text-[13px] font-medium text-[#abaaa8]">
                      Décrivez votre projet *
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => update("message", e.target.value)}
                      required
                      rows={5}
                      placeholder="Parlez-nous de votre projet, vos objectifs, vos délais..."
                      className="w-full resize-none rounded-xl border border-[#ffffff12] bg-[#ffffff08] px-4 py-3 text-sm text-white placeholder-[#5e5f6e] outline-none transition-colors focus:border-[#ffffff26]"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="group flex items-center justify-center gap-3 rounded-full bg-white px-7 py-3.5 text-[15px] font-medium text-black transition-all duration-350 hover:scale-[0.975]"
                  >
                    <Send size={16} />
                    Envoyer ma demande
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </button>
                </form>
              </div>

              {/* Sidebar */}
              <div className="flex flex-col gap-6">
                {/* Contact info cards */}
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    value: "contact@pulsacreatives.com",
                    href: "mailto:contact@pulsacreatives.com",
                  },
                  {
                    icon: MapPin,
                    title: "Localisation",
                    value: "Bruxelles, Belgique",
                    href: null,
                  },
                  {
                    icon: Clock,
                    title: "Délai de réponse",
                    value: "Sous 24 heures",
                    href: null,
                  },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className="rounded-2xl border border-[#242429] bg-[#131316] p-5"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#ffffff0f] bg-[#ffffff08]">
                          <Icon size={18} className="text-white" strokeWidth={1.5} />
                        </div>
                        <div>
                          <div className="text-[12px] text-[#5e5f6e]">
                            {item.title}
                          </div>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-[14px] font-medium text-white hover:underline"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <div className="text-[14px] font-medium text-white">
                              {item.value}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Process card */}
                <div className="rounded-2xl border border-[#242429] bg-[#131316] p-5">
                  <h3 className="text-sm font-medium text-white">
                    Comment ça se passe ?
                  </h3>
                  <div className="mt-4 flex flex-col gap-4">
                    {[
                      { step: "01", text: "Vous remplissez le formulaire" },
                      { step: "02", text: "On échange sur votre projet" },
                      { step: "03", text: "Proposition sur mesure sous 48h" },
                      { step: "04", text: "Lancement du projet" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-[#ffffff08] font-[family-name:var(--font-heading)] text-[11px] font-medium text-[#5e5f6e]">
                          {item.step}
                        </span>
                        <span className="text-[13px] leading-relaxed text-[#abaaa8]">
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Trust */}
                <div className="rounded-2xl border border-[#242429] bg-[#131316] p-5 text-center">
                  <div className="flex justify-center gap-1">
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
                  <p className="mt-2 text-sm font-medium text-white">
                    4.9/5 — +50 clients satisfaits
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-[#ffffff0f]" />
      </main>
      <Footer />
    </>
  );
}
