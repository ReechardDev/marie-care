// components/CTAButtons.jsx
"use client";

import { Phone, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";
import { track } from "@/lib/analytics";

export default function CTAButtons({
  compact = false,
  align = "left",
  location = "cta_buttons",
}) {
  const pad = compact ? "px-4 py-3" : "px-5 py-3";
  const wrap = align === "center" ? "justify-center" : "";

  return (
    <div className={`flex flex-wrap gap-3 ${wrap}`}>
      {/* Primary */}
      <a
        href="/contact"
        onClick={() => track("book_consult", { location })}
        className={`rounded-xl2 bg-[#167a7a] text-white ${pad} transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#167a7a]`}
      >
        Book a free consult
      </a>

      {/* Call (no phone number param) */}
      <a
        href={SITE.phoneLink}
        aria-label={`Call ${SITE.name}`}
        onClick={() => track("call_click", { location })}
        className={`rounded-xl2 border border-[#167a7a] text-[#167a7a] ${pad} flex items-center gap-2 transition hover:bg-[#167a7a]/10 hover:-translate-y-0.5 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-[#167a7a]`}
      >
        <Phone className="h-4 w-4" />
        Call
      </a>

      {/* WhatsApp */}
      <a
        href={SITE.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open WhatsApp chat"
        onClick={() => track("whatsapp_click", { location })}
        className={`rounded-xl2 border border-[#25D366] text-[#25D366] ${pad} flex items-center gap-2 transition hover:bg-[#25D366]/10 hover:-translate-y-0.5 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-[#25D366]`}
      >
        <MessageCircle className="h-4 w-4" />
        WhatsApp
      </a>
    </div>
  );
}
