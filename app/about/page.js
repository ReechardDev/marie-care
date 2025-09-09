import Image from "next/image";
import Section from "@/components/Section";
import { SITE } from "@/lib/site";
import Script from "next/script";

export const metadata = {
  title: "About",
  description:
    "Meet Robin Miller of " +
    (SITE?.name ?? "Robin’s Touch Senior Care") +
    ". With 25+ years in elder and hospice care, Robin provides warm, one-on-one support that keeps loved ones safe, comfortable, and connected in Denver, CO.",
  openGraph: {
    title: "About • " + (SITE?.name ?? "Robin’s Touch Senior Care"),
    description:
      "Personal, trustworthy senior care by Robin Miller (25+ yrs). One-on-one support with dignity and respect in Denver, CO.",
    type: "website",
    images: [
      {
        url: "/robin/robin-headshot.jpg",
        width: 1200,
        height: 630,
        alt: "Robin Miller, founder of Robin’s Touch Senior Care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About • " + (SITE?.name ?? "Robin’s Touch Senior Care"),
    description:
      "Warm, one-on-one senior care by Robin Miller (25+ yrs) serving Denver, CO and nearby areas.",
    images: ["/robin/robin-headshot.jpg"],
  },
};

export default function AboutPage() {
  const businessName = SITE?.name ?? "Robin’s Touch Senior Care";

  // ---- LocalBusiness JSON-LD (lean but valid) ----
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: businessName,
    description:
      "One-on-one senior and hospice support by Robin Miller (25+ years). Dignity, safety, and comfort for families in Denver, CO.",
    image: ["/robin/robin-headshot.jpg"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Denver",
      addressRegion: "CO",
      postalCode: "80222",
      addressCountry: "US",
    },
    areaServed: "Denver Metro",
    // telephone: SITE?.phone,
    // email: SITE?.email,
  };

  return (
    <>
      {/* JSON-LD for SEO */}
      <Script
        id="localbusiness-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Section title="Care guided by experience and heart.">
        <div className="grid gap-6 md:grid-cols-3">
          {/* Copy + details */}
          <div className="md:col-span-2">
            <p className="text-gray-700 leading-relaxed">
              Hi, I’m <span className="font-semibold">Robin Miller</span>. For over{" "}
              <span className="font-semibold">25 years</span>, I’ve supported seniors and their
              families through admissions coordination, medical records, hospice care, and
              patient-family advocacy. I started {businessName} to offer something simple and rare:
              one-on-one support you can trust, delivered with kindness and respect.
            </p>

            {/* Headshot inline with bio for faster trust-building */}
            <div className="mt-4 flex items-start gap-4">
              <Image
                src="/robin/robin-headshot.jpg"
                alt="Robin Miller, founder of Robin’s Touch Senior Care"
                width={112}
                height={112}
                className="w-28 h-28 rounded-2xl object-cover"
              />
              <div className="space-y-3">
                <p className="text-gray-700 leading-relaxed">
                  When we work together, you’re not dealing with a big agency—you’re working with
                  me. I listen first, learn what matters most to your family, and build a clear,
                  realistic plan that keeps your loved one safe, comfortable, and connected.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  My promise is steady, respectful care and open communication—so you always know
                  what’s happening and why.
                </p>
              </div>
            </div>

            {/* Safeguards & approach (personal tone) */}
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl2 bg-card p-5 shadow-soft">
                <div className="font-semibold mb-2">Safeguards I personally uphold</div>
                <ul className="mt-1 grid grid-cols-1 gap-y-2 text-sm text-gray-800">
                  <li>• I vet every caregiver for background, character, and fit.</li>
                  <li>• You always approve the caregiver—no surprises.</li>
                  <li>• I check in regularly and welcome feedback.</li>
                  <li>• I adjust the care plan as needs change.</li>
                </ul>
              </div>

              <div className="rounded-xl2 bg-card p-5 shadow-soft">
                <div className="font-semibold mb-2">How we’ll work together</div>
                <ul className="mt-1 grid grid-cols-1 gap-y-2 text-sm text-gray-800">
                  <li>• I listen deeply to understand your needs.</li>
                  <li>• We co-create a simple, personalized care plan.</li>
                  <li>• I communicate clearly and promptly.</li>
                  <li>• We evolve the plan—at your pace.</li>
                </ul>
              </div>
            </div>

            {/* Testimonial (real or placeholder) */}
            <div className="mt-6 rounded-xl2 bg-card p-5 shadow-soft">
              <p className="text-sm italic text-gray-800">
                “Robin felt like family from day one—gentle, reliable, and always there when we
                needed her.”
              </p>
              <p className="mt-2 text-xs text-gray-600">— J.S., Denver, CO</p>
            </div>

            {/* Service area note (clarity) */}
            <p className="mt-4 text-sm text-gray-600">
              Based in Denver, CO (80222). Also supporting nearby areas—ask about your location.
            </p>

            {/* Page CTA */}
            <a
              href="/contact"
              className="mt-6 inline-block rounded-xl2 bg-teal text-white px-4 py-3"
            >
              Book a free consult with Robin
            </a>
          </div>

          {/* Supporting image (swapped to the wide side photo) */}
          <div className="relative w-full h-72 rounded-xl2 overflow-hidden">
            <Image
              src="/robin/about-side.jpg"
              alt="Robin supporting a client at home"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </Section>
    </>
  );
}
