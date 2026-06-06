import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
  Star,
} from "lucide-react";
import type { Metadata } from "next";
import { PageShell } from "./components/PageShell";
import { TrackedWhatsAppLink } from "./components/TrackedWhatsAppLink";
import {
  brand,
  partners,
  projectPhotos,
  reasons,
  processSteps,
  services,
  strengthStats,
  testimonials,
  trustPoints,
  videos,
} from "./data";

export const metadata: Metadata = {
  title: "Solar, Inverter, CCTV and Smart Home Solutions",
  description:
    "P&P ADVANCE TECH BRANDS LIMITED supplies solar inverter materials and delivers premium solar, inverter, battery backup, CCTV, and smart home technology solutions in Nigeria.",
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: "P&P ADVANCE TECH BRANDS LIMITED",
    description:
      "CAC registered Nigerian renewable energy and smart technology company for solar, inverter, battery backup, CCTV, and automation services.",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
};

function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#c1121f] px-7 py-4 text-sm font-black text-white shadow-xl shadow-red-950/15 transition hover:bg-[#8f0d17] focus-visible:focus-ring"
    >
      {children}
    </Link>
  );
}

function SectionIntro({
  eyebrow,
  title,
  copy,
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className={tone === "dark" ? "text-sm font-bold uppercase tracking-[0.14em] text-red-200" : "eyebrow"}>
        {eyebrow}
      </p>
      <h2 className={tone === "dark" ? "mt-4 text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl" : "section-title mt-4"}>
        {title}
      </h2>
      {copy ? (
        <p className={tone === "dark" ? "mt-6 text-lg leading-8 text-emerald-50" : "section-copy mt-6"}>
          {copy}
        </p>
      ) : null}
    </div>
  );
}

export default function Home() {
  const whatsappMessage = encodeURIComponent(
    `Hello ${brand.name}, I need a quote for solar, inverter, battery backup, CCTV, or smart home services.`
  );

  return (
    <PageShell>
      <section className="relative isolate overflow-hidden bg-[#052f21] text-white">
        <Image
          src="/projects/solar-installation-1.jpg"
          alt="Solar installation project by P&P Advance Tech"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#052f21]/96 via-[#052f21]/78 to-[#052f21]/30" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#052f21] to-transparent" />

        <div className="section-shell relative grid min-h-[760px] items-center gap-12 py-20 lg:grid-cols-[1fr_420px] lg:py-24">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-red-100 backdrop-blur">
              CAC Registered Company - RC {brand.rcNumber}
            </p>
            <h1 className="mt-8 text-4xl font-black leading-[0.98] text-white sm:text-6xl lg:text-7xl">
              Solar power, inverter backup, CCTV and smart technology for Nigerian properties.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-9 text-emerald-50">
              {brand.name} supplies solar inverter materials and delivers clean design,
              installation, and maintenance for solar, battery backup, CCTV, and automation systems.
            </p>
            <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
              {["Solar installation", "Inverters and batteries", "CCTV security", "Smart automation"].map((item) => (
                <p key={item} className="flex items-center gap-3 text-sm font-bold text-white">
                  <CheckCircle2 className="shrink-0 text-red-200" size={19} aria-hidden="true" />
                  {item}
                </p>
              ))}
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <PrimaryButton href="/contact">
                Get Free Quote <ArrowRight size={18} aria-hidden="true" />
              </PrimaryButton>
              <TrackedWhatsAppLink
                href={`https://wa.me/${brand.whatsapp}?text=${whatsappMessage}`}
                location="home_hero"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-white/55 bg-white/10 px-7 py-4 text-sm font-black text-white backdrop-blur transition hover:bg-white hover:text-[#063f2a] focus-visible:focus-ring"
              >
                WhatsApp Us <MessageCircle size={18} aria-hidden="true" />
              </TrackedWhatsAppLink>
            </div>
          </div>
          <div className="hidden rounded-[30px] border border-white/15 bg-white/10 p-4 shadow-2xl shadow-black/20 backdrop-blur lg:block">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] bg-emerald-100">
              <Image
                src="/projects/inverter-installation-1.jpg"
                alt="Installed inverter and solar backup equipment"
                fill
                className="object-cover"
                sizes="420px"
              />
            </div>
            <div className="grid grid-cols-3 gap-3 pt-4">
              {strengthStats.slice(1).map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-white p-4 text-[#063f2a]">
                  <p className="text-xl font-black">{stat.value}</p>
                  <p className="mt-1 text-xs font-bold leading-4 text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell section-pad">
        <div className="grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="eyebrow">Company Overview</p>
            <h2 className="section-title mt-4">A registered renewable energy and smart technology company.</h2>
          </div>
          <div className="space-y-7">
            <p className="section-copy">
              P&P Advance Tech helps clients move from unreliable power and weak site visibility to
              stable energy, professional backup systems, and smarter property control.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {trustPoints.map((point) => (
                <div key={point.label} className="rounded-3xl border border-emerald-900/10 bg-[#f4fbf6] p-6">
                  <p className="text-2xl font-black text-[#063f2a]">{point.value}</p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">{point.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7fbf8] section-pad">
        <div className="section-shell">
          <SectionIntro
            eyebrow="Services"
            title="Power, security and automation, handled end to end."
            copy="From material supply to installation and maintenance, the service range is built around dependable power, safer premises, and smarter control."
          />
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="premium-card p-8 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-950/10">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-emerald-50 text-[#0b6b3a]">
                    <Icon size={26} aria-hidden="true" />
                  </span>
                  <h3 className="mt-7 text-2xl font-black leading-tight text-[#111827]">{service.title}</h3>
                  <p className="mt-4 text-base leading-8 text-slate-600">{service.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell section-pad">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="eyebrow">Why Choose Us</p>
            <h2 className="section-title mt-4">Clear recommendations, quality materials and accountable delivery.</h2>
            <p className="section-copy mt-6">
              Clients get practical guidance, correctly sized systems, careful installation, and support
              that keeps the equipment useful after handover.
            </p>
          </div>
          <div className="grid gap-6">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <article key={reason.title} className="premium-card flex gap-5 p-7">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#063f2a] text-white">
                    <Icon size={24} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-xl font-black text-[#111827]">{reason.title}</h3>
                    <p className="mt-2 text-base leading-7 text-slate-600">{reason.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#052f21] section-pad text-white">
        <div className="section-shell">
          <SectionIntro
            eyebrow="Company Strength"
            title="Capacity that gives clients confidence."
            copy="A growing technical team and real installed capacity help clients trust the company with serious residential, commercial, and industrial work."
            tone="dark"
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {strengthStats.map((stat) => (
              <article key={stat.label} className="rounded-[28px] border border-white/15 bg-white/8 p-8 backdrop-blur">
                <p className="text-4xl font-black text-white">{stat.value}</p>
                <p className="mt-4 text-base font-semibold leading-7 text-emerald-50">{stat.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-pad">
        <SectionIntro
          eyebrow="Partners"
          title="Recognised solar and energy brands."
          copy="Clean text badges keep the partner section credible without making the page noisy."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner) => (
            <div key={partner} className="rounded-full border border-emerald-900/10 bg-white px-6 py-5 text-center text-base font-black text-[#111827] shadow-sm">
              {partner}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f7fbf8] section-pad">
        <div className="section-shell">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="eyebrow">Recent Projects</p>
              <h2 className="section-title mt-4">Real solar, inverter and battery project photos.</h2>
            </div>
            <PrimaryButton href="/projects">
              View Full Gallery <ArrowRight size={18} aria-hidden="true" />
            </PrimaryButton>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projectPhotos.slice(0, 3).map((project) => (
              <article key={project.title} className="group overflow-hidden rounded-[28px] bg-white shadow-xl shadow-emerald-950/5">
                <div className="relative aspect-[4/3] overflow-hidden bg-emerald-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="p-8">
                  <p className="eyebrow">{project.category}</p>
                  <h3 className="mt-3 text-2xl font-black text-[#111827]">{project.title}</h3>
                  <p className="mt-4 text-base leading-8 text-slate-600">{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-pad">
          <SectionIntro
            eyebrow="Project Videos"
            title="Video proof for clients who want to see the work."
            copy="Project videos give prospects a closer look at the workmanship, equipment, and field activity behind the finished systems."
          />
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {videos.map((video) => (
            <article key={video.src} className="premium-card overflow-hidden p-4">
              <video className="aspect-video w-full rounded-[18px] bg-slate-950" controls preload="metadata">
                <source src={video.src} type="video/mp4" />
              </video>
              <div className="p-5">
                <h3 className="text-2xl font-black text-[#111827]">{video.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{video.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f7fbf8] section-pad">
        <div className="section-shell">
          <SectionIntro eyebrow="Testimonials" title="Clients want clarity, neat work and dependable support." />
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="premium-card p-8">
                <div className="flex gap-1 text-[#c1121f]">
                  {[0, 1, 2, 3, 4].map((item) => (
                    <Star key={item} size={18} fill="currentColor" aria-hidden="true" />
                  ))}
                </div>
                <p className="mt-6 text-base leading-8 text-slate-700">&quot;{testimonial.quote}&quot;</p>
                <p className="mt-7 font-black text-[#063f2a]">{testimonial.name}</p>
                <p className="mt-1 text-sm text-slate-500">{testimonial.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-pad">
        <div className="grid overflow-hidden rounded-[30px] bg-[#063f2a] text-white lg:grid-cols-[1.05fr_0.95fr]">
          <div className="p-8 md:p-14 lg:p-16">
            <div>
              <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-red-200">
                <ShieldCheck size={18} aria-hidden="true" /> Registered and ready
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight md:text-5xl">
                Request a site inspection or materials quote.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-emerald-50">
                Tell us your location, power needs, security requirements, or automation goals.
              </p>
              <div className="mt-8 grid gap-3">
                {processSteps.map((step) => (
                  <p key={step} className="flex items-center gap-3 text-sm font-bold text-white">
                    <CheckCircle2 className="shrink-0 text-red-200" size={18} aria-hidden="true" />
                    {step}
                  </p>
                ))}
              </div>
              <div className="mt-10">
                <PrimaryButton href="/contact">
                  Contact P&P <ArrowRight size={18} aria-hidden="true" />
                </PrimaryButton>
              </div>
            </div>
          </div>
          <div className="relative min-h-[320px]">
            <Image
              src="/projects/battery-backup-1.jpg"
              alt="Battery backup installation"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 48vw, 100vw"
            />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
