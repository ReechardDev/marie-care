"use client";

import { SITE } from "@/lib/site";

export default function StickyBar() {
  return (
    <div
      className="fixed bottom-0 inset-x-0 z-50 bg-white/95 border-t safe-bottom md:hidden"
      role="navigation"
      aria-label="Quick actions"
    >
      <div className="mx-auto max-w-6xl px-4 py-2 grid grid-cols-3 gap-2">
        <a
          href={SITE.phoneLink}
          className="rounded-xl2 shadow-soft border px-3 py-3 min-h-[48px] flex items-center justify-center text-center"
          aria-label={`Call ${SITE.name}`}
        >
          Call
        </a>
        <a
          href={SITE.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl2 shadow-soft border px-3 py-3 min-h-[48px] flex items-center justify-center text-center"
          aria-label="Open WhatsApp chat"
        >
          WhatsApp
        </a>
        <a
          href="/contact"
          className="rounded-xl2 shadow-soft bg-teal text-white px-3 py-3 min-h-[48px] flex items-center justify-center text-center"
          aria-label="Book a free consult"
        >
          Book consult
        </a>
      </div>
    </div>
  );
}
