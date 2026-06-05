import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Download,
  FileText,
  ShieldCheck,
} from "lucide-react";
import type { Metadata } from "next";
import { PageShell } from "../components/PageShell";
import { brand, documents, projectPhotos, reasons, strengthStats, trustPoints } from "../data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about P&P ADVANCE TECH BRANDS LIMITED, a CAC registered Nigerian renewable energy and smart technology company.",
  alternates: { canonical: "/about" },
  openGraph: {
    url: "/about",
    title: "About P&P ADVANCE TECH BRANDS LIMITED",
    description:
      "CAC registered company providing solar inverter materials, solar installation, battery backup, CCTV, and smart home technology in Nigeria.",
  },
};

export default function AboutPage() {
  return (
    <PageShell>
      <section className="section-shell section-pad">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="eyebrow">About P&P</p>
            <h1 className="mt-5 text-5xl font-black leading-[0.98] tracking-[-0.04em] text-[#063f2a] sm:text-6xl">
              Registered renewable energy and smart technology specialists.
            </h1>
            <p className="section-copy mt-7">
              {brand.name} supplies solar inverter materials and delivers professional design,
              installation, and maintenance for solar inverter systems, battery backup,
              CCTV/security systems, smart home technology, and automation.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#c1121f] px-7 py-4 text-sm font-black text-white transition hover:bg-[#8f0d17]"
              >
                Request Company Support <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-emerald-900/15 px-7 py-4 text-sm font-black text-[#063f2a] transition hover:bg-emerald-50"
              >
                View Work Gallery
              </Link>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[34px] bg-emerald-100 shadow-2xl shadow-emerald-950/12">
            <div className="relative aspect-[4/3]">
              <Image
                src="/projects/technicians-working-1.jpg"
                alt="P&P Advance Tech technicians working"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7fbf8] section-pad">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="eyebrow">Certificate</p>
            <h2 className="section-title mt-4">Company registration information.</h2>
            <p className="section-copy mt-6">
              The registration details are presented early so prospects can verify the business
              before requesting a site visit or quote.
            </p>
          </div>
          <div className="premium-card p-8 md:p-10">
            <h3 className="flex items-center gap-3 text-2xl font-black text-[#111827]">
              <ShieldCheck className="text-[#0b6b3a]" size={28} aria-hidden="true" />
              CAC Registered Company
            </h3>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {trustPoints.map((point) => (
                <div key={point.label} className="rounded-3xl bg-[#f4fbf6] p-6">
                  <p className="text-2xl font-black text-[#063f2a]">{point.value}</p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">{point.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell section-pad">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Company Strength</p>
          <h2 className="section-title mt-4">Built for real project delivery.</h2>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {strengthStats.map((point) => (
            <div key={point.label} className="premium-card p-8">
              <p className="text-4xl font-black text-[#c1121f]">{point.value}</p>
              <p className="mt-4 text-base font-bold leading-7 text-[#111827]">{point.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#052f21] section-pad text-white">
        <div className="section-shell">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-red-200">Work Gallery</p>
              <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.03em] md:text-5xl">
                Visible proof of installation work.
              </h2>
              <p className="mt-6 text-lg leading-8 text-emerald-50">
                A small gallery gives the About page credibility without overwhelming the visitor.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {projectPhotos.slice(0, 4).map((project) => (
                <div key={project.title} className="group overflow-hidden rounded-[24px] bg-white/8 ring-1 ring-white/15">
                  <div className="relative aspect-[4/3] overflow-hidden bg-emerald-100">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(min-width: 768px) 25vw, 50vw"
                    />
                  </div>
                  <p className="p-4 text-sm font-black text-white">{project.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell section-pad">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Documents</p>
            <h2 className="section-title mt-4">Download company documents.</h2>
            <p className="section-copy mt-6">
              Use these links for the certificate, company profile, and memorandum documents.
            </p>
          </div>
          <div className="grid gap-5">
            {documents.map((document) => (
              <a
                key={document.href}
                href={document.href}
                className="premium-card flex items-center justify-between gap-5 p-6 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-950/10"
              >
                <span className="flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 text-[#0b6b3a]">
                    <FileText size={24} aria-hidden="true" />
                  </span>
                  <span className="font-black text-[#111827]">{document.title}</span>
                </span>
                <Download className="shrink-0 text-[#c1121f]" size={22} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7fbf8] section-pad">
        <div className="section-shell grid gap-8 md:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <article key={reason.title} className="premium-card p-8">
                <Icon className="text-[#0b6b3a]" size={30} aria-hidden="true" />
                <h2 className="mt-5 text-2xl font-black leading-tight text-[#111827]">{reason.title}</h2>
                <p className="mt-4 text-base leading-8 text-slate-600">{reason.description}</p>
              </article>
            );
          })}
        </div>
      </section>
    </PageShell>
  );
}
