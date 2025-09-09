"use client";

import { SITE } from "@/lib/site";

export default function StickyBar() {
  return (
    <nav
      className="fixed bottom-0 inset-x-0 z-50 border-t bg-white/95 supports-[backdrop-filter]:bg-white/80 backdrop-blur safe-bottom md:hidden"
      aria-label="Quick actions"
    >
      <div className="mx-auto max-w-6xl px-4 py-2 grid grid-cols-3 gap-2">
        {/* Call button */}
        <a
          href={SITE.phoneLink}
          className="rounded-xl2 shadow-soft border px-3 py-3 min-h-[48px] flex flex-col items-center justify-center text-center focus:outline-none focus:ring-2 focus:ring-teal"
          aria-label={`Call ${SITE.name}`}
        >
          <span className="text-sm font-medium">Call</span>
        </a>

        {/* WhatsApp button */}
        <a
          href={SITE.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl2 shadow-soft border px-3 py-3 min-h-[48px] flex flex-col items-center justify-center text-center focus:outline-none focus:ring-2 focus:ring-teal"
          aria-label="Open WhatsApp chat"
        >
          <span className="text-sm font-medium">WhatsApp</span>
        </a>

        {/* Consult button */}
        <a
          href="/contact"
          className="rounded-xl2 shadow-soft bg-teal text-white px-3 py-3 min-h-[48px] flex flex-col items-center justify-center text-center focus:outline-none focus:ring-2 focus:ring-teal"
          aria-label="Book a free consult"
        >
          <span className="text-sm font-medium">Consult</span>
        </a>
      </div>
    </nav>
  );
}
