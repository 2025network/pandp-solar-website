import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { brand } from "./data";
import "./globals.css";
import { seoKeywords, siteUrl } from "@/lib/seo";

const ogImage = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "P&P Advance Tech solar, inverter, CCTV, and smart technology services",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "P&P ADVANCE TECH BRANDS LIMITED",
    template: "%s | P&P ADVANCE TECH BRANDS LIMITED",
  },
  description:
    "P&P ADVANCE TECH BRANDS LIMITED supplies solar inverter materials and provides solar, inverter, battery backup, CCTV, and smart home technology solutions in Nigeria.",
  keywords: seoKeywords,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: siteUrl,
    siteName: "P&P ADVANCE TECH BRANDS LIMITED",
    title: "P&P ADVANCE TECH BRANDS LIMITED",
    description:
      "CAC registered Nigerian renewable energy and smart technology company for solar, inverter, battery backup, CCTV, and automation projects.",
    images: [
      {
        ...ogImage,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "P&P ADVANCE TECH BRANDS LIMITED",
    description:
      "Solar inverter materials, solar installation, battery backup, CCTV, and smart home automation in Nigeria.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: brand.name,
  legalName: brand.name,
  url: siteUrl,
  logo: `${siteUrl}/brand-mark.svg`,
  image: `${siteUrl}/og-image.png`,
  slogan: brand.slogan,
  description: brand.tagline,
  telephone: [brand.primaryPhone, "09041189484"],
  email: brand.email,
  identifier: `RC ${brand.rcNumber}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: brand.address,
    addressRegion: "Nasarawa",
    addressCountry: "NG",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: brand.primaryPhone,
    contactType: "customer service",
    areaServed: "NG",
    availableLanguage: ["English"],
  },
  areaServed: "Nigeria",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Solar, inverter, CCTV and smart technology services",
    itemListElement: [
      "Solar inverter materials",
      "Solar inverter system installation",
      "CCTV installation",
      "Smart home automation",
      "Battery backup systems",
      "Solar panel installation",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name,
      },
    })),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        {children}
        <GoogleAnalytics gaId="G-DWB66M7D0C" />
      </body>
    </html>
  );
}
