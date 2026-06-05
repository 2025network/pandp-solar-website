"use client";

import Link from "next/link";
import type { ReactNode } from "react";

type TrackedWhatsAppLinkProps = {
  ariaLabel?: string;
  children: ReactNode;
  className: string;
  href: string;
  location: string;
};

declare global {
  interface Window {
    dataLayer?: Object[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackWhatsAppClick(location: string) {
  const event = {
    event: "whatsapp_click",
    event_category: "Lead",
    event_label: location,
  };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
  window.gtag?.("event", "whatsapp_click", {
    event_category: "Lead",
    event_label: location,
  });
}

export function TrackedWhatsAppLink({
  ariaLabel,
  children,
  className,
  href,
  location,
}: TrackedWhatsAppLinkProps) {
  return (
    <Link
      aria-label={ariaLabel}
      className={className}
      href={href}
      onClick={() => trackWhatsAppClick(location)}
      rel="noreferrer"
      target="_blank"
    >
      {children}
    </Link>
  );
}
