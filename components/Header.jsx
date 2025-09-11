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

  // Close mobile menu on hashchange (original behavior)
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  // Add scrolled state to improve contrast over hero backgrounds
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = useCallback(() => setOpen(false), []);

  const linkCls = (href) =>
    `text-sm transition ${
      pathname === href
        ? "text-[#167a7a] font-medium"
        : "text-gray-700 hover:text-[#167a7a]"
    }`;

  return (
    <header
      className={[
        "sticky top-0 z-50 w-full supports-[backdrop-filter]:backdrop-blur-md",
        "transition-colors duration-200",
        scrolled
          ? "bg-brand-cream/95 shadow-sm border-b border-teal/20"
          : "bg-gradient-to-r from-brand-cream/90 via-white/90 to-brand-cream/90 border-b border-teal/10",
      ].join(" ")}
      role="banner"
    >
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-3">
        {/* Brand wordmark (typographic) */}
        <a
          href="/"
          aria-label={SITE?.name ?? "Home"}
          className="hover:opacity-90 transition"
        >
          <BrandWordmark />
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
            className="rounded-xl2 bg-[#167a7a] text-white px-4 py-2 text-sm hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[#167a7a]"
          >
            Book a free consult
          </a>
        </nav>

        {/* Mobile actions */}
        <div className="md:hidden flex items-center gap-2">
          <a
            href="/contact"
            onClick={() => track("book_consult", { location: "header_mobile" })}
            className="rounded-xl2 bg-[#167a7a] text-white px-3 py-2 text-sm hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[#167a7a]"
            aria-label="Book a free consult"
          >
            Book
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={[
              "inline-flex items-center justify-center rounded-xl2 border px-3 py-2 text-sm",
              "bg-white/90 border-black/10 focus:outline-none focus:ring-2 focus:ring-[#167a7a]",
            ].join(" ")}
            aria-expanded={open ? "true" : "false"}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {/* Accessible hamburger / close icon (pure SVG) */}
            {!open ? (
              <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M6 6l12 12M18 6l-12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer + overlay */}
      <div
        className={`md:hidden ${open ? "block" : "hidden"}`}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
      >
        {/* Overlay to boost contrast and allow outside-click to close */}
        <button
          type="button"
          className="fixed inset-0 bg-black/40"
          aria-label="Close menu"
          onClick={closeMenu}
        />
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
