"use client";

import { useState } from "react";
import { Send } from "lucide-react";

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
    <section id="contact" className="relative py-32 sm:py-40">
      {/* Orbs */}
      <div className="orb orb-violet animate-float-slow absolute left-1/4 top-0 h-[500px] w-[500px] opacity-20" />
      <div className="orb orb-blue animate-float absolute right-1/4 bottom-0 h-[400px] w-[400px] opacity-15" />

      <div className="relative z-10 mx-auto max-w-3xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Prêt à transformer votre{" "}
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              présence digitale
            </span>{" "}
            ?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-400">
            Discutons de votre projet. Premier appel stratégique offert.
          </p>
        </div>

        {/* Form card */}
        <div className="rounded-3xl border border-white/[0.06] bg-white/[0.03] p-8 backdrop-blur-xl sm:p-10">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm text-zinc-500"
                >
                  Nom
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none backdrop-blur-sm transition-all duration-200 focus:border-violet-500/50"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm text-zinc-500"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="votre@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none backdrop-blur-sm transition-all duration-200 focus:border-violet-500/50"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm text-zinc-500"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                placeholder="Décrivez votre projet..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full resize-none rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none backdrop-blur-sm transition-all duration-200 focus:border-violet-500/50"
              />
            </div>
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-white py-3.5 text-sm font-semibold text-black transition-colors duration-200 hover:bg-zinc-200"
            >
              <Send size={16} />
              Envoyer ma demande
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-zinc-600">
            Ou écrivez-nous directement à{" "}
            <a
              href="mailto:contact@pulsacreatives.com"
              className="text-zinc-400 transition-colors hover:text-white"
            >
              contact@pulsacreatives.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
