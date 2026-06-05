"use client";

import { FormEvent, useState } from "react";
import { MessageCircle } from "lucide-react";
import { brand, services } from "../data";

const fieldClass =
  "min-h-14 rounded-2xl border border-emerald-900/15 bg-white px-5 py-4 text-[#111827] outline-none focus-visible:focus-ring";

export function ContactLeadForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    service: services[0]?.title || "",
    message: "",
  });

  function updateField(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const text = encodeURIComponent(
      `Hello ${brand.name}, I need a quote.

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Location: ${form.location}
Service needed: ${form.service}
Message: ${form.message}`
    );

    window.open(`https://wa.me/${brand.whatsapp}?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[30px] bg-[#f4fbf6] p-7 ring-1 ring-emerald-900/10 md:p-10">
      <h2 className="text-4xl font-black leading-tight tracking-[-0.03em] text-[#063f2a]">Send your project request.</h2>
      <p className="mt-5 text-base leading-8 text-slate-700">
        Submit the form and WhatsApp will open with your details ready to send to our team.
      </p>

      <div className="mt-9 grid gap-6 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-slate-800">
          Full name
          <input
            className={fieldClass}
            required
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="Your full name"
            type="text"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-800">
          Phone number
          <input
            className={fieldClass}
            required
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            placeholder="090..."
            type="tel"
          />
        </label>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-slate-800">
          Email
          <input
            className={fieldClass}
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="you@example.com"
            type="email"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-800">
          Location
          <input
            className={fieldClass}
            required
            value={form.location}
            onChange={(event) => updateField("location", event.target.value)}
            placeholder="City / State"
            type="text"
          />
        </label>
      </div>

      <label className="mt-6 grid gap-2 text-sm font-bold text-slate-800">
        Service needed
        <select
          className={fieldClass}
          value={form.service}
          onChange={(event) => updateField("service", event.target.value)}
        >
          {services.map((service) => (
            <option key={service.title}>{service.title}</option>
          ))}
        </select>
      </label>

      <label className="mt-6 grid gap-2 text-sm font-bold text-slate-800">
        Message
        <textarea
          className={`${fieldClass} min-h-40 resize-y`}
          required
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="Tell us your power, security, or automation needs."
        />
      </label>

      <button
        type="submit"
        className="mt-8 inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#c1121f] px-7 py-4 text-sm font-black text-white transition hover:bg-[#8f0d17] focus-visible:focus-ring"
      >
        Open WhatsApp Message <MessageCircle size={18} aria-hidden="true" />
      </button>
    </form>
  );
}
