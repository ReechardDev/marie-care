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
    images: [
      { url: "/robin/hero-caregiver.jpg", width: 1200, height: 630, alt: SITE.name },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: `Compassionate non-medical home care in ${SITE.city}.`,
    images: ["/robin/hero-caregiver.jpg"],
  },
  /** Optional but nice: make sure pages have a single canonical */
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }) {
  // JSON-LD schema for LocalBusiness
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
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
    openingHours: "Mo-Su 00:00-23:59",
  };

  return (
    <html lang="en">
      <body className="bg-white text-ink">
        <Header />
        {/* Add bottom padding so the sticky bar never covers content on mobile */}
        <main className="min-h-screen pb-28">{children}</main>
        <Footer />
        <StickyBar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </body>
    </html>
  );
}
