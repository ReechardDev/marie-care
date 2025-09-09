// app/layout.js
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";
import { SITE } from "@/lib/site";

/** Mobile-safe viewport (uses iOS safe areas) */
export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#167a7a", // lives in viewport (not metadata)
};

/** Page metadata (SEO + social) */
export const metadata = {
  metadataBase: new URL("https://marie-care.vercel.app"),
  title: {
    default: `In-Home Senior Care in ${SITE.city} | ${SITE.name}`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Compassionate non-medical home care. Background-checked caregivers. Flexible plans. Book a free consult today.",
  openGraph: {
    title: `In-Home Senior Care in ${SITE.city} | ${SITE.name}`,
    description:
      "Compassionate non-medical home care. Background-checked caregivers. Flexible plans.",
    url: "https://marie-care.vercel.app",
    siteName: SITE.name,
    images: [{ url: "/robin/hero-caregiver.jpg", width: 1200, height: 630, alt: SITE.name }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: `Compassionate non-medical home care in ${SITE.city}.`,
    images: ["/robin/hero-caregiver.jpg"],
  },
  /** Canonical for cleaner SEO */
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }) {
  // JSON-LD schema for LocalBusiness
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    description:
      "One-on-one senior and hospice support by Robin Miller (25+ years). Dignity, safety, and comfort for families in Denver, CO.",
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.city,
      addressRegion: SITE.state,
      postalCode: SITE.zip,
      addressCountry: "US",
    },
    telephone: SITE.phoneDisplay,
    email: SITE.email,
    url: "https://marie-care.vercel.app",
    areaServed: "Denver Metro",
    openingHours: "Mo-Su 00:00-23:59",
    image: ["/robin/robin-headshot.jpg"],
  };

  return (
    <html lang="en">
      <body className="bg-white text-ink">
        {/* GA4 */}
        <Script
          id="ga4-src"
          src="https://www.googletagmanager.com/gtag/js?id=G-BRVFV0KG6S"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BRVFV0KG6S');
          `}
        </Script>

        {/* Skip link for accessibility */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] rounded bg-teal px-3 py-2 text-white"
        >
          Skip to content
        </a>

        <Header />

        {/* Bottom padding so the sticky bar never covers content on mobile */}
        <main id="main" className="min-h-screen pb-28">
          {children}
        </main>

        <Footer />
        <StickyBar />

        {/* Vercel Analytics */}
        <Analytics />

        {/* LocalBusiness schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </body>
    </html>
  );
}
