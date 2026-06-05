import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Settings2, Video } from "lucide-react";
import type { Metadata } from "next";
import { PageShell } from "../components/PageShell";
import { TrackedWhatsAppLink } from "../components/TrackedWhatsAppLink";
import { brand, projectPhotos, videos } from "../data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "View P&P Advance Tech project photos and videos for solar panel installation, inverter installation, battery backup, commercial solar, residential solar, and technicians at work.",
  alternates: { canonical: "/projects" },
  openGraph: {
    url: "/projects",
    title: "Projects | P&P ADVANCE TECH BRANDS LIMITED",
    description:
      "Professional project gallery for solar, inverter, battery backup, CCTV, and smart technology work in Nigeria.",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
};

function GalleryIntro() {
  return (
    <section className="relative isolate overflow-hidden bg-[#052f21] py-28 text-white">
      <Image
        src="/projects/commercial-solar-1.jpg"
        alt="Commercial solar project"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[#052f21]/82" />
      <div className="section-shell relative max-w-4xl">
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-red-200">Projects</p>
        <h1 className="mt-5 text-5xl font-black leading-[0.98] tracking-[-0.04em] sm:text-6xl">
          A cleaner gallery for solar, inverter, battery and field work.
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-9 text-emerald-50">
          All seven project images are displayed with generous spacing, simple project details, and
          clear quote actions.
        </p>
      </div>
    </section>
  );
}

export default function ProjectsPage() {
  const message = encodeURIComponent(
    `Hello ${brand.name}, I saw your project gallery and would like to request a quote.`
  );

  return (
    <PageShell>
      <GalleryIntro />

      <section className="section-shell section-pad">
        <div className="grid gap-10 md:grid-cols-2">
          {projectPhotos.map((project, index) => (
            <article
              key={project.image}
              className={`group overflow-hidden rounded-[30px] bg-white shadow-xl shadow-emerald-950/6 ring-1 ring-emerald-900/10 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-950/12 ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className={`relative overflow-hidden bg-emerald-100 ${index === 0 ? "aspect-[16/8]" : "aspect-[4/3]"}`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes={index === 0 ? "100vw" : "(min-width: 768px) 50vw, 100vw"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-80" />
                <span className="absolute left-6 top-6 rounded-full bg-white/92 px-4 py-2 text-xs font-black uppercase tracking-wide text-[#c1121f]">
                  {project.category}
                </span>
              </div>
              <div className="grid gap-8 p-8 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <h2 className="text-3xl font-black leading-tight tracking-[-0.02em] text-[#111827]">
                    {project.title}
                  </h2>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
                    {project.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-700">
                    <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 font-bold">
                      <MapPin className="text-[#0b6b3a]" size={17} aria-hidden="true" />
                      {project.location}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 font-bold">
                      <Settings2 className="text-[#0b6b3a]" size={17} aria-hidden="true" />
                      {project.systemType}
                    </span>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#c1121f] px-5 py-3 text-sm font-black text-white transition hover:bg-[#8f0d17]"
                >
                  Request Quote <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f7fbf8] section-pad">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow inline-flex items-center gap-2">
              <Video size={18} aria-hidden="true" /> Videos
            </p>
            <h2 className="section-title mt-4">Project videos with a larger showcase.</h2>
            <p className="section-copy mt-6">
              The two uploaded MP4 files are presented here and on the homepage for quick proof of
              field work.
            </p>
          </div>
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
        </div>
      </section>

      <section className="section-shell section-pad">
        <div className="rounded-[34px] bg-[#063f2a] p-8 text-white md:p-14 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="max-w-3xl text-4xl font-black leading-tight tracking-[-0.03em] md:text-5xl">
                Want a similar project for your home or business?
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-emerald-50">
                Send your location and required service. We will guide the inspection, material
                supply, installation, or maintenance process.
              </p>
            </div>
            <TrackedWhatsAppLink
              href={`https://wa.me/${brand.whatsapp}?text=${message}`}
              location="projects_cta"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#c1121f] px-7 py-4 text-sm font-black text-white transition hover:bg-[#8f0d17]"
            >
              WhatsApp for Quote <ArrowRight size={18} aria-hidden="true" />
            </TrackedWhatsAppLink>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
