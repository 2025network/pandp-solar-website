import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { PageShell } from "../components/PageShell";
import { customerTypes, services, warrantySupport } from "../data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore P&P Advance Tech solar inverter materials, solar installation, battery backup, CCTV/security, and smart home technology services.",
  alternates: { canonical: "/services" },
  openGraph: {
    url: "/services",
    title: "Solar, Inverter, CCTV and Smart Technology Services",
    description:
      "Sales, design, installation, and maintenance for solar inverter systems, CCTV/security, battery backup, solar panels, and automation.",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
};

export default function ServicesPage() {
  return (
    <PageShell>
      <section className="bg-[#063f2a] py-28 text-white">
        <div className="section-shell max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-red-200">Our services</p>
          <h1 className="mt-5 text-5xl font-black leading-[0.98] tracking-[-0.04em] sm:text-6xl">
            Solar, inverter, battery, CCTV and smart home technology services.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-9 text-emerald-50">
            We support material supply, technical design, professional installation, maintenance,
            and upgrades for homes, businesses, and industrial facilities.
          </p>
        </div>
      </section>

      <section className="section-shell section-pad">
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="premium-card p-8 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-950/10">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-emerald-50 text-[#0b6b3a]">
                  <Icon size={26} aria-hidden="true" />
                </span>
                <h2 className="mt-7 text-2xl font-black leading-tight text-[#111827]">{service.title}</h2>
                <p className="mt-4 text-base leading-8 text-slate-600">{service.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-[#f7fbf8] section-pad">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="eyebrow">Who we serve</p>
            <h2 className="section-title mt-4">
              Solutions for residential, commercial, and industrial users.
            </h2>
            <p className="section-copy mt-6">
              Our recommendations are based on load, runtime expectations, site condition,
              available budget, and long-term maintenance requirements.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {customerTypes.map((type) => (
              <div key={type} className="rounded-3xl border border-emerald-900/10 bg-white p-6 text-lg font-black text-[#111827] shadow-sm">
                {type}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-pad">
        <div className="rounded-[34px] bg-[#063f2a] p-8 text-white md:p-14">
          <h2 className="max-w-3xl text-4xl font-black leading-tight tracking-[-0.03em] md:text-5xl">Need a complete technical solution?</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-emerald-50">
            We can combine solar panels, inverter systems, battery backup, CCTV, and smart
            automation into one planned solution with proper installation and maintenance support.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {warrantySupport.map((item) => (
              <p key={item} className="rounded-3xl border border-white/15 bg-white/8 p-5 text-sm font-bold leading-6">
                {item}
              </p>
            ))}
          </div>
          <Link
            href="/contact"
            className="mt-10 inline-flex min-h-14 items-center gap-2 rounded-full bg-[#c1121f] px-7 py-4 text-sm font-black text-white transition hover:bg-[#8f0d17]"
          >
            Request Quote <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
