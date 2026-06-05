import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { brand } from "./data";
import "./globals.css";
import { seoKeywords, siteUrl } from "@/lib/seo";

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
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "P&P Advance Tech solar, inverter, CCTV, and smart technology services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "P&P ADVANCE TECH BRANDS LIMITED",
    description:
      "Solar inverter materials, solar installation, battery backup, CCTV, and smart home automation in Nigeria.",
    images: ["/og-image.jpg"],
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
  "@type": "LocalBusiness",
  name: brand.name,
  url: siteUrl,
  slogan: brand.slogan,
  description: brand.tagline,
  telephone: brand.phone,
  email: brand.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: brand.address,
    addressCountry: "NG",
  },
  areaServed: "Nigeria",
  serviceType: [
    "Solar inverter materials",
    "Solar inverter system installation",
    "CCTV installation",
    "Smart home automation",
    "Battery backup systems",
    "Solar panel installation",
  ],
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
