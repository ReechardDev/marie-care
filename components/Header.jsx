// components/Header.jsx
"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { SITE } from "@/lib/site";
import { track } from "@/lib/analytics";
import BrandWordmark from "@/components/BrandWordmark";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/care-plans", label: "Care Plans" },
  { href: "/about", label: "About" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = useCallback(() => setOpen(false), []);

  const linkCls = (href) =>
    [
      "text-sm transition",
      pathname === href ? "text-white font-medium" : "text-white/80 hover:text-white",
    ].join(" ");

  return (
    <header
      className={[
        "sticky top-0 z-50 w-full supports-[backdrop-filter]:backdrop-blur-0",
        scrolled ? "bg-[#167a7a] shadow-[0_2px_8px_rgba(0,0,0,0.08)]" : "bg-[#167a7a]",
      ].join(" ")}
      role="banner"
    >
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-3">
        {/* Brand */}
        <a
          href="/"
          aria-label={SITE?.name ?? "Home"}
          className="hover:opacity-95 transition text-white"
        >
          <BrandWordmark />
          <span className="sr-only">{SITE?.name ?? "Home"}</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={linkCls(l.href)}
              aria-current={pathname === l.href ? "page" : undefined}
            >
              {l.label}
            </a>
          ))}
          <a
            href="/contact"
            onClick={() => track("book_consult", { location: "header_desktop" })}
            className="rounded-xl2 bg-white text-[#167a7a] px-4 py-2 text-sm shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-white/70"
          >
            Book a free consult
          </a>
        </nav>

        {/* Mobile actions */}
        <div className="md:hidden flex items-center gap-2">
          <a
            href="/contact"
            onClick={() => track("book_consult", { location: "header_mobile" })}
            className="rounded-xl2 bg-white text-[#167a7a] px-3 py-2 text-sm shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-white/70"
            aria-label="Book a free consult"
          >
            Book
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-xl2 border border-white/20 bg-white/10 text-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white/70"
            aria-expanded={open ? "true" : "false"}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {!open ? (
              <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer + overlay */}
      <div className={`md:hidden ${open ? "block" : "hidden"}`} id="mobile-menu" role="dialog" aria-modal="true">
        <button type="button" className="fixed inset-0 bg-black/40" aria-label="Close menu" onClick={closeMenu} />
        <nav
          className="fixed right-0 top-[64px] bottom-0 w-80 bg-white shadow-xl border-l border-gray-200 p-5 overflow-y-auto"
          aria-label="Mobile"
        >
          <div className="grid gap-2">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-base text-gray-800 hover:text-[#167a7a] transition ${
                  pathname === l.href ? "text-[#167a7a] font-medium" : ""
                }`}
                aria-current={pathname === l.href ? "page" : undefined}
                onClick={closeMenu}
              >
                {l.label}
              </a>
            ))}
            <div className="h-px bg-gray-200 my-2" />
            {SITE?.phoneLink && (
              <a
                href={SITE.phoneLink}
                className="rounded-xl2 px-3 py-3 text-base text-gray-800 hover:bg-gray-50"
                onClick={closeMenu}
              >
                Call
              </a>
            )}
            {SITE?.whatsappLink && (
              <a
                href={SITE.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl2 px-3 py-3 text-base text-gray-800 hover:bg-gray-50"
                onClick={closeMenu}
              >
                WhatsApp
              </a>
            )}
            <a
              href="/contact"
              onClick={() => {
                track("book_consult", { location: "header_drawer" });
                closeMenu();
              }}
              className="mt-1 rounded-xl2 bg-[#167a7a] text-white px-4 py-3 text-base text-center hover:opacity-95"
            >
              Book a free consult
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
