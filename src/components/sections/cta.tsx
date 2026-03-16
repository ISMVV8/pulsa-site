"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function CTA() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Demande de devis — ${name}`);
    const body = encodeURIComponent(
      `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:contact@pulsacreatives.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative bg-[#070707]">
      <div className="line-sweep h-px w-full bg-[#ffffff0f]" style={{ animationDelay: "2s" }} />

      <div className="mx-auto max-w-[970px] px-6">
        <div className="relative">
          <div className="line-sweep-v absolute bottom-0 left-0 top-0 w-px bg-[#ffffff0f]" style={{ animationDelay: "1s" }} />
          <div className="line-sweep-v absolute bottom-0 right-0 top-0 w-px bg-[#ffffff0f]" style={{ animationDelay: "4s" }} />

          <div className="px-8 py-24 sm:px-16">
            {/* Header */}
            <div className="text-center">
              <div className="badge-8lab">
                <div className="badge-8lab-inner">
                  <span className="text-[13px] font-semibold text-white">
                    Contact
                  </span>
                </div>
              </div>

              <h2 className="mx-auto mt-8 max-w-[700px] font-[family-name:var(--font-heading)] text-[32px] font-semibold leading-[1.15] tracking-[-1px] text-white sm:text-[44px]">
                Prêt à transformer{" "}
                <span className="font-medium text-[#5e5f6e]">votre</span>{" "}
                présence digitale ?
              </h2>

              <p className="mx-auto mt-5 max-w-[520px] text-[16px] leading-[1.6] text-[#5e5f6e]">
                <span className="font-bold text-white">Demandez votre devis gratuit</span>{" "}
                et recevez une proposition sur mesure sous 24h.
              </p>

              {/* Social proof */}
              <div className="mx-auto mt-6 flex w-fit items-center gap-4">
                <div className="flex">
                  {["J", "S", "M", "A", "L"].map((initial, i) => (
                    <div
                      key={i}
                      className={`flex h-[32px] w-[32px] items-center justify-center rounded-full border border-[#ffffff20] bg-[#1a1a2e] text-[11px] font-medium text-white ${
                        i > 0 ? "-ml-2.5" : ""
                      }`}
                    >
                      {initial}
                    </div>
                  ))}
                </div>
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
                  <span className="text-[12px] text-white">+50 clients satisfaits</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-12 flex max-w-[480px] flex-col gap-4"
            >
              <input
                type="text"
                placeholder="Votre nom"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="rounded-xl border border-[#ffffff0f] bg-[#131316] px-5 py-3.5 text-[15px] text-white placeholder-[#5e5f6e] outline-none transition-colors focus:border-[#ffffff26]"
              />
              <input
                type="email"
                placeholder="Votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="rounded-xl border border-[#ffffff0f] bg-[#131316] px-5 py-3.5 text-[15px] text-white placeholder-[#5e5f6e] outline-none transition-colors focus:border-[#ffffff26]"
              />
              <textarea
                placeholder="Décrivez votre projet..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                required
                className="resize-none rounded-xl border border-[#ffffff0f] bg-[#131316] px-5 py-3.5 text-[15px] text-white placeholder-[#5e5f6e] outline-none transition-colors focus:border-[#ffffff26]"
              />
              <button
                type="submit"
                className="group mt-2 flex items-center justify-center gap-3 rounded-full bg-white px-7 py-3.5 text-[15px] font-medium text-black transition-all duration-350 hover:scale-[0.975]"
              >
                <Send size={16} />
                Envoyer ma demande
              </button>
            </form>

            <p className="mt-6 text-center text-[13px] text-[#5e5f6e]">
              Ou contactez-nous directement :{" "}
              <a
                href="mailto:contact@pulsacreatives.com"
                className="text-white underline underline-offset-2"
              >
                contact@pulsacreatives.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="line-sweep h-px w-full bg-[#ffffff0f]" style={{ animationDelay: "5s" }} />
    </section>
  );
}
