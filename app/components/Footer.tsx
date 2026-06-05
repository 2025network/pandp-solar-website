import Link from "next/link";
import { Mail, MapPin, Phone, ShieldCheck, Zap } from "lucide-react";
import { brand, navItems, partners } from "../data";

export function Footer() {
  return (
    <footer className="bg-[#052f21] text-white">
      <div className="section-shell grid gap-12 py-20 md:grid-cols-[1.25fr_0.7fr_0.9fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-[#0b6b3a]">
              <Zap size={22} aria-hidden="true" />
            </span>
            <h2 className="text-xl font-black">{brand.name}</h2>
          </div>
          <p className="mt-5 max-w-xl text-base leading-7 text-emerald-50">{brand.slogan}</p>
          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300">
            Solar inverter materials, solar systems, battery backup, CCTV/security, and smart home
            automation for residential, commercial, and industrial clients in Nigeria.
          </p>
          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2.5 text-sm font-bold text-white">
            <ShieldCheck size={18} aria-hidden="true" /> CAC Registered - RC {brand.rcNumber}
          </p>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-red-200">Pages</h3>
          <div className="mt-5 grid gap-3 text-sm text-emerald-50">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
          <h3 className="mt-6 text-sm font-bold uppercase tracking-wide text-red-200">Partners</h3>
          <p className="mt-4 text-sm leading-7 text-emerald-50">{partners.slice(0, 5).join(", ")}</p>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-red-200">Contact</h3>
          <div className="mt-5 grid gap-4 text-sm leading-6 text-emerald-50">
            <p className="flex gap-2">
              <Phone size={18} aria-hidden="true" /> {brand.phone}
            </p>
            <p className="flex gap-2">
              <Mail size={18} aria-hidden="true" /> {brand.email}
            </p>
            <p className="flex gap-2">
              <MapPin size={18} aria-hidden="true" /> {brand.address}
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/15 py-5">
        <p className="section-shell text-sm text-slate-300">
          Copyright {new Date().getFullYear()} {brand.name}. All rights reserved. RC {brand.rcNumber}.
        </p>
      </div>
    </footer>
  );
}
