"use client";

import { useState } from "react";
import { Send, ArrowRight } from "lucide-react";

const avatars = ["M", "S", "T", "A", "L"];

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
    <section id="contact" className="relative bg-[#070707] py-20">
      <div className="line-h" />
      <div className="line-glow" />

      <div className="relative mx-auto flex max-w-[970px] px-6">
        <div className="line-v hidden self-stretch md:block" />

        <div className="flex-1 px-4 py-20 sm:px-10">
          {/* CTA Card */}
          <div className="overflow-hidden rounded-3xl border-2 border-black bg-gradient-to-b from-[#3a3940] to-[#1f1e24] p-8 sm:p-12">
            <div className="mx-auto flex max-w-[600px] flex-col items-center text-center">
              <h2 className="font-heading text-[36px] font-medium leading-[1.2] tracking-tight text-white sm:text-[44px]">
                Prêt à transformer votre présence digitale ?
              </h2>

              <p className="mt-4 text-lg leading-relaxed text-[#abaaa8]">
                Demandez votre devis gratuit et recevez une proposition sur mesure sous 24h.
              </p>

              {/* Social proof */}
              <div className="mt-6 flex items-center gap-4 rounded-full border border-[#ffffff0f] bg-[#ffffff0f] px-5 py-3 backdrop-blur-[5px]">
                <div className="flex">
                  {avatars.map((initial, i) => (
                    <div
                      key={i}
                      className={`flex h-[36px] w-[36px] items-center justify-center rounded-full border border-[#ffffff40] bg-gradient-to-b from-[#3a3940] to-[#1f1e24] text-xs font-medium text-white shadow-[0_2px_5px_#0003] ${i > 0 ? "-ml-3" : ""}`}
                    >
                      {initial}
                    </div>
                  ))}
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#facc15">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-white">+50 clients</span>
              </div>
            </div>

            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-10 flex max-w-[500px] flex-col gap-4"
            >
              <input
                type="text"
                placeholder="Votre nom"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="rounded-xl border border-[#ffffff12] bg-[#ffffff08] px-4 py-3 text-sm text-white placeholder-[#abaaa8] outline-none transition-colors focus:border-[#ffffff26]"
              />
              <input
                type="email"
                placeholder="Votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="rounded-xl border border-[#ffffff12] bg-[#ffffff08] px-4 py-3 text-sm text-white placeholder-[#abaaa8] outline-none transition-colors focus:border-[#ffffff26]"
              />
              <textarea
                placeholder="Décrivez votre projet..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                required
                className="resize-none rounded-xl border border-[#ffffff12] bg-[#ffffff08] px-4 py-3 text-sm text-white placeholder-[#abaaa8] outline-none transition-colors focus:border-[#ffffff26]"
              />
              <button
                type="submit"
                className="btn-cta flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-base font-medium text-[#131316]"
              >
                <Send size={16} />
                <span>Envoyer ma demande</span>
              </button>
            </form>

            <p className="mt-4 text-center text-xs text-[#abaaa8]">
              Ou contactez-nous directement :{" "}
              <a
                href="mailto:contact@pulsacreatives.com"
                className="text-white underline"
              >
                contact@pulsacreatives.com
              </a>
            </p>
          </div>
        </div>

        <div className="line-v hidden self-stretch md:block" />
      </div>

      <div className="line-h" />
      <div className="line-glow-right" />
    </section>
  );
}
