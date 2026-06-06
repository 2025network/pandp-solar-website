import Image from "next/image";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import { brand, navItems } from "../data";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-emerald-950/10 bg-white/90 backdrop-blur-xl">
      <div className="section-shell flex min-h-[88px] items-center justify-between gap-4 py-3 sm:min-h-[104px] lg:grid lg:min-h-[118px] lg:grid-cols-[minmax(330px,1fr)_auto_minmax(170px,1fr)] lg:gap-6">
        <Link href="/" className="flex min-w-0 items-center gap-2 lg:gap-3">
          <Image
            src="/solar-logo.png"
            alt="P&P Advance Tech logo"
            width={150}
            height={100}
            priority
            className="h-14 w-auto shrink-0 object-contain sm:h-[70px] lg:h-[92px]"
          />
          <span className="min-w-0 max-w-[190px] sm:max-w-[260px] lg:max-w-[285px]">
            <span className="block text-sm font-black leading-tight text-[#111827] sm:text-base lg:text-lg">
              {brand.name}
            </span>
            <span className="block text-xs font-bold text-[#c1121f]">RC {brand.rcNumber}</span>
          </span>
        </Link>

        <nav className="hidden items-center justify-self-center gap-1 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-emerald-50 hover:text-[#0b6b3a] focus-visible:focus-ring"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden items-center justify-self-end gap-2 rounded-full bg-[#c1121f] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-red-950/15 transition hover:bg-[#8f0d17] focus-visible:focus-ring sm:inline-flex"
        >
          <Phone size={16} aria-hidden="true" /> Request Quote
        </Link>
      </div>
      <nav className="section-shell flex gap-2 overflow-x-auto pb-3 lg:hidden" aria-label="Mobile navigation">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded border border-emerald-900/10 bg-white text-[#0b6b3a]">
          <Menu size={18} aria-hidden="true" />
        </span>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="shrink-0 rounded-full border border-emerald-900/10 bg-white px-4 py-2 text-sm font-semibold text-slate-700"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
