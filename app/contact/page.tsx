import Image from "next/image";
import { Mail, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";
import { ContactLeadForm } from "../components/ContactLeadForm";
import { PageShell } from "../components/PageShell";
import { TrackedWhatsAppLink } from "../components/TrackedWhatsAppLink";
import { brand } from "../data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact P&P ADVANCE TECH BRANDS LIMITED for solar inverter materials, installation, battery backup, CCTV, and smart home technology services.",
  alternates: { canonical: "/contact" },
  openGraph: {
    url: "/contact",
    title: "Contact P&P ADVANCE TECH BRANDS LIMITED",
    description:
      "Request a quote for solar, inverter, battery backup, CCTV/security, and smart automation services.",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
};

export default function ContactPage() {
  const message = encodeURIComponent(
    `Hello ${brand.name}, I would like to request a quote for your solar, inverter, battery, CCTV, or smart technology services.`
  );

  return (
    <PageShell>
      <section className="bg-[#063f2a] py-20 text-white md:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-red-200">Contact</p>
            <h1 className="mt-5 text-4xl font-black leading-[1] sm:text-6xl">
              Request a quote or technical consultation.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-9 text-emerald-50">
              Reach out for solar inverter materials, system design, installation, maintenance,
              battery backup, CCTV/security, and smart home automation.
            </p>
          </div>
          <div className="relative min-h-[300px] overflow-hidden rounded-[30px] bg-emerald-100 shadow-2xl shadow-black/20 md:min-h-[420px]">
            <Image
              src="/projects/technicians-working-1.jpg"
              alt="P&P Advance Tech technicians on a project site"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 48vw, 100vw"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-6">
              <p className="max-w-md text-sm font-bold leading-6 text-white">
                Send your location, load needs, security requirements, or smart technology goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell grid gap-10 py-24 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="grid content-start gap-5">
          {[
            { icon: Phone, title: "Phone", value: brand.phone },
            { icon: Mail, title: "Email", value: brand.email },
            { icon: MapPin, title: "Office", value: brand.address },
            { icon: ShieldCheck, title: "CAC Registration", value: `RC Number: ${brand.rcNumber}` },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="premium-card p-6">
                <Icon className="text-[#0b6b3a]" size={26} aria-hidden="true" />
                <h2 className="mt-5 text-xl font-black text-[#111827]">{item.title}</h2>
                <p className="mt-2 leading-7 text-slate-600">{item.value}</p>
              </div>
            );
          })}
          <TrackedWhatsAppLink
            href={`https://wa.me/${brand.whatsapp}?text=${message}`}
            location="contact_direct"
            className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#25d366] px-7 py-4 text-sm font-black text-white transition hover:brightness-95"
          >
            Chat on WhatsApp <MessageCircle size={18} aria-hidden="true" />
          </TrackedWhatsAppLink>
        </div>

        <ContactLeadForm />
      </section>

      <section className="bg-[#f7fbf8] py-20">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Find our office</p>
            <h2 className="section-title mt-4">Visit P&P Advance Tech.</h2>
            <p className="section-copy mt-6">{brand.address}</p>
          </div>
          <div className="mt-12 overflow-hidden rounded-[30px] border border-emerald-900/10 bg-white shadow-xl shadow-emerald-950/5">
            <iframe
              allowFullScreen
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${encodeURIComponent(brand.address)}&output=embed`}
              title="P&P Advance Tech office location on Google Maps"
            />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
