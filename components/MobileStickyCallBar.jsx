// components/MobileStickyCallBar.jsx
"use client";

import { Phone, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";
import { track } from "@/lib/analytics";

export default function MobileStickyCallBar() {
  const hasCall = Boolean(SITE?.phoneLink);
  const hasWhatsApp = Boolean(SITE?.whatsappLink);

  // If neither link is configured, render nothing
  if (!hasCall && !hasWhatsApp) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white/95 backdrop-blur md:hidden"
      role="region"
      aria-label="Quick contact actions"
    >
      {/* Safe area bottom padding for iOS */}
      <div className="pb-[env(safe-area-inset-bottom)]">
        <div className="mx-auto max-w-6xl px-4 py-3 grid grid-cols-2 gap-3">
          {hasCall && (
            <a
              href={SITE.phoneLink}
              onClick={() => track("call_click", { location: "mobile_sticky" })}
              className="flex items-center justify-center gap-2 rounded-xl2 bg-[#167a7a] text-white px-4 py-3 font-medium hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[#167a7a]"
              aria-label={`Call ${SITE.name}`}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span>Call</span>
            </a>
          )}

          {hasWhatsApp && (
            <a
              href={SITE.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("whatsapp_click", { location: "mobile_sticky" })}
              className="flex items-center justify-center gap-2 rounded-xl2 border border-[#25D366] text-[#25D366] px-4 py-3 font-medium hover:bg-[#25D366]/10 focus:outline-none focus:ring-2 focus:ring-[#25D366]"
              aria-label="Open WhatsApp chat"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              <span>WhatsApp</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
