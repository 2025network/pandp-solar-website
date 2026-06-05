import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";
import { ContactLeadForm } from "../components/ContactLeadForm";
import { PageShell } from "../components/PageShell";
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
  },
};

export default function ContactPage() {
  const message = encodeURIComponent(
    `Hello ${brand.name}, I would like to request a quote for your solar, inverter, battery, CCTV, or smart technology services.`
  );

  return (
    <PageShell>
      <section className="bg-[#063f2a] py-28 text-white">
        <div className="section-shell max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-red-200">Contact</p>
          <h1 className="mt-5 text-5xl font-black leading-[0.98] tracking-[-0.04em] sm:text-6xl">
            Request a quote or technical consultation.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-9 text-emerald-50">
            Reach out for solar inverter materials, system design, installation, maintenance,
            battery backup, CCTV/security, and smart home automation.
          </p>
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
          <Link
            href={`https://wa.me/${brand.whatsapp}?text=${message}`}
            target="_blank"
            className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#25d366] px-7 py-4 text-sm font-black text-white transition hover:brightness-95"
          >
            Chat on WhatsApp <MessageCircle size={18} aria-hidden="true" />
          </Link>
        </div>

        <ContactLeadForm />
      </section>
    </PageShell>
  );
}
