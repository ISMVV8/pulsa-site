import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pulsa Creatives — Agence Digitale à Bruxelles | Sites Web, SEO & Ads",
  description:
    "Agence digitale premium à Bruxelles. Sites web, landing pages, e-commerce, SEO et gestion Ads. Résultats garantis. Demandez votre devis gratuit.",
  keywords: [
    "agence digitale bruxelles",
    "création site web",
    "SEO",
    "landing page",
    "e-commerce",
    "branding",
    "gestion ads",
    "pulsa creatives",
  ],
  openGraph: {
    title: "Pulsa Creatives — Agence Digitale à Bruxelles",
    description:
      "Agence digitale premium à Bruxelles. Sites web, landing pages, e-commerce, SEO et gestion Ads.",
    url: "https://pulsacreatives.com",
    siteName: "Pulsa Creatives",
    locale: "fr_BE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pulsa Creatives — Agence Digitale à Bruxelles",
    description:
      "Agence digitale premium à Bruxelles. Sites web, landing pages, e-commerce, SEO et gestion Ads.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Pulsa Creatives",
  description:
    "Agence digitale premium à Bruxelles. Sites web, landing pages, e-commerce, SEO et gestion Ads.",
  email: "contact@pulsacreatives.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bruxelles",
    addressCountry: "BE",
  },
  founder: {
    "@type": "Person",
    name: "Ismaa",
  },
  areaServed: "Bruxelles, Belgique",
  priceRange: "€€",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "50",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
