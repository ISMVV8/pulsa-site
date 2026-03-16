import Image from "next/image";

const footerLinks = {
  Services: [
    { label: "Sites Web", href: "#services" },
    { label: "Landing Pages", href: "#services" },
    { label: "E-Commerce", href: "#services" },
    { label: "SEO", href: "#services" },
    { label: "Gestion Ads", href: "#services" },
  ],
  Navigation: [
    { label: "Réalisations", href: "#portfolio" },
    { label: "Processus", href: "#process" },
    { label: "Tarifs", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="mx-auto max-w-[970px] px-6 py-16">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          {/* Logo + description */}
          <div className="max-w-[300px]">
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo-pulsa.jpg"
                alt="Pulsa Creatives"
                width={32}
                height={32}
                className="rounded-sm brightness-0 invert"
              />
              <span className="font-heading text-xl font-semibold text-white">
                PULSA
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[#abaaa8]">
              Agence digitale premium à Bruxelles. Nous créons des expériences digitales qui convertissent.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="flex flex-col gap-4">
                <span className="text-sm font-medium text-white">
                  {category}
                </span>
                {links.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    className="text-sm text-[#abaaa8] transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Separator */}
        <div className="my-10 h-px bg-[#ffffff0f]" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <span className="text-sm text-[#abaaa8]">
            © 2024 Pulsa Creatives. Tous droits réservés.
          </span>
          <a
            href="mailto:contact@pulsacreatives.com"
            className="text-sm text-[#abaaa8] transition-colors hover:text-white"
          >
            contact@pulsacreatives.com
          </a>
        </div>
      </div>
    </footer>
  );
}
