// components/Header.jsx
"use client";

import { useState, useEffect } from "react";
import { SITE } from "@/lib/site";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/care-plans", label: "Care Plans" },
  { href: "/about", label: "About" },
  { href: "/testimonials", label: "Testimonials" }, // add page when ready
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu on route change (if you use <a> it’s fine; this just guards scroll)
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-3">
        {/* Brand (kept compact on mobile to avoid wrapping) */}
        <a href="/" className="block shrink min-w-0" aria-label={SITE?.name ?? "Home"}>
          <div className="font-semibold leading-tight text-base sm:text-lg line-clamp-2 max-w-[180px] sm:max-w-none">
            {SITE?.name ?? "Robin’s Touch Senior Care"}
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-gray-700 hover:text-gray-900"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/contact"
            className="rounded-xl2 bg-teal text-white px-4 py-2 text-sm hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-teal"
          >
            Book a free consult
          </a>
        </nav>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href="/contact"
            className="rounded-xl2 bg-teal text-white px-3 py-2 text-sm hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-teal"
            aria-label="Book a free consult"
          >
            Book
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-xl2 border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal"
            aria-expanded={open ? "true" : "false"}
            aria-controls="mobile-menu"
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile menu (slide-down) */}
      {open && (
        <div id="mobile-menu" className="md:hidden border-t bg-white">
          <nav className="mx-auto max-w-6xl px-4 py-3 grid gap-2">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-xl2 px-3 py-3 text-sm text-gray-800 hover:bg-gray-50"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href={SITE?.phoneLink}
              className="rounded-xl2 px-3 py-3 text-sm text-gray-800 hover:bg-gray-50"
              onClick={() => setOpen(false)}
            >
              Call
            </a>
            <a
              href={SITE?.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl2 px-3 py-3 text-sm text-gray-800 hover:bg-gray-50"
              onClick={() => setOpen(false)}
            >
              WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
