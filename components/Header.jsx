// components/Header.jsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SITE } from "@/lib/site";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/care-plans", label: "Care Plans" },
  { href: "/about", label: "About" },
  { href: "/testimonials", label: "Testimonials" }, // make sure this page exists
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  const linkCls = (href) =>
    `text-sm transition hover:text-gray-900 ${
      pathname === href ? "text-teal font-medium" : "text-gray-700"
    }`;

  return (
<header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-gradient-to-r from-white via-teal-50 to-white backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-md">
  <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-3">
    {/* Brand: text instead of logo, dark teal */}
    <a
      href="/"
      className="font-bold text-base sm:text-lg text-[#167a7a] hover:opacity-80 transition"
      aria-label={SITE?.name ?? "Home"}
    >
      {SITE?.name ?? "Robin’s Touch Senior Care"}
    </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className={linkCls(l.href)}>
              {l.label}
            </a>
          ))}
         <a
  href="/contact"
  className="rounded-xl2 bg-[#167a7a] text-white px-4 py-2 text-sm hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[#167a7a]"
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

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="md:hidden border-t bg-white">
          <nav className="mx-auto max-w-6xl px-4 py-3 grid gap-2">
            {navLinks.map((l) => (
              <a
  key={l.href}
  href={l.href}
  className={`text-sm text-gray-800 hover:text-[#167a7a] transition ${pathname === l.href ? "text-[#167a7a] font-medium" : ""}`}
>
  {l.label}
</a>
            ))}
            <div className="h-px bg-gray-200 my-1" />
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
