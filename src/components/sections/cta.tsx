"use client";

import { useState } from "react";
import { Send, ArrowRight } from "lucide-react";

export default function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:contact@pulsacreatives.com?subject=Demande de devis - ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Nom: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      {/* Gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="orb orb-violet animate-float-slow absolute left-1/4 top-0 h-[400px] w-[400px] opacity-40" />
        <div className="orb orb-blue animate-float absolute right-1/4 bottom-0 h-[350px] w-[350px] opacity-30" />
        <div className="orb orb-cyan animate-float-slower absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 opacity-20" />
      </div>

      <div className="dot-pattern absolute inset-0 opacity-50" />

      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <div className="glass rounded-3xl p-8 sm:p-12">
          <div className="text-center">
            <span className="glass-badge mb-4 inline-block">Contact</span>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold sm:text-4xl lg:text-5xl">
              Prêt à{" "}
              <span className="gradient-text">lancer votre projet</span> ?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[#9ca3af]">
              Discutons de votre projet. Premier appel gratuit et sans engagement.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-10 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-[#9ca3af]">
                  Nom
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none backdrop-blur-sm transition-colors focus:border-[#7c3aed]/50 focus:ring-1 focus:ring-[#7c3aed]/50"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#9ca3af]">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="votre@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none backdrop-blur-sm transition-colors focus:border-[#7c3aed]/50 focus:ring-1 focus:ring-[#7c3aed]/50"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-[#9ca3af]">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                placeholder="Décrivez votre projet..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none backdrop-blur-sm transition-colors focus:border-[#7c3aed]/50 focus:ring-1 focus:ring-[#7c3aed]/50"
              />
            </div>
            <button
              type="submit"
              className="btn-gradient flex w-full items-center justify-center gap-2 rounded-full py-4 text-base font-semibold text-white"
            >
              <Send size={18} />
              Envoyer ma demande
              <ArrowRight size={18} />
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-[#9ca3af]">
            Ou écrivez-nous directement à{" "}
            <a href="mailto:contact@pulsacreatives.com" className="text-[#a78bfa] hover:underline">
              contact@pulsacreatives.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
