import { MessageCircle } from "lucide-react";
import { brand } from "../data";
import { TrackedWhatsAppLink } from "./TrackedWhatsAppLink";

export function WhatsAppButton() {
  const message = encodeURIComponent(
    `Hello ${brand.name}, I need a quote for solar, inverter, battery, CCTV, or smart home services.`
  );

  return (
    <TrackedWhatsAppLink
      href={`https://wa.me/${brand.whatsapp}?text=${message}`}
      aria-label="Chat with us on WhatsApp"
      location="floating_button"
      className="fixed bottom-5 right-5 z-50 inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#25d366] px-4 text-sm font-black text-white shadow-xl shadow-emerald-950/20 transition hover:scale-105 focus-visible:focus-ring sm:px-5"
    >
      <MessageCircle size={28} aria-hidden="true" />
      <span className="hidden sm:inline">WhatsApp</span>
    </TrackedWhatsAppLink>
  );
}
