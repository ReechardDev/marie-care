// app/page.js
import { TESTIMONIALS } from "@/lib/content";
import CTAButtons from "@/components/CTAButtons";
import Image from "next/image";
import Section from "@/components/Section";
import { SITE } from "@/lib/site";

// Components
import TrustBar from "@/components/TrustBar";
// ⤵ use the new home-only services preview block
import HomeServicesBlock from "@/components/HomeServicesBlock";

export const metadata = {
  title: "In-Home Senior Care in Denver • Robin’s Touch Senior Care",
  description:
    "One-on-one senior care in Denver by Robin Miller (25+ years). Clear pricing, warm support, and flexible plans. Book a free consult.",
  openGraph: {
    title: "In-Home Senior Care in Denver • Robin’s Touch Senior Care",
    description:
      "Personal, trustworthy support for daily living and hospice needs. Clear pricing and flexible plans.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "In-Home Senior Care in Denver",
    description:
      "One-on-one senior care by Robin Miller. Clear pricing. Book a free consult.",
  },
};

export default function HomePage() {
  const businessName = SITE?.name ?? "Robin’s Touch Senior Care";
  const previewTestimonials = (TESTIMONIALS ?? []).slice(0, 2);

  return (
    <>
      {/* HERO (unchanged) */}
      <section className="relative isolate">
        {/* Optional soft background image block */}
        <div className="absolute inset-0 -z-10">
          {/* <Image src="/robin/hero.jpg" alt="" fill className="object-cover opacity-30" priority /> */}
          <div className="h-full w-full bg-gradient-to-b from-teal/10 via-white to-white" />
        </div>

        <div className="mx-auto max-w-6xl px-4 pt-10 pb-8 sm:pt-14">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h1 className="text-3xl sm:text-4xl font-semibold leading-tight">
                Care guided by experience and heart.
              </h1>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Hi, I’m <span className="font-medium">Robin Miller</span>. For over{" "}
                <span className="font-medium">25 years</span>, I’ve supported seniors and families
                with steady, respectful, one-on-one care. I listen first, build a clear plan, and
                stay responsive as needs change.
              </p>

              {/* Primary actions (kept exactly as you have them) */}
              <div className="mt-4">
                <CTAButtons compact align="left" />
              </div>

              <p className="mt-3 text-sm text-gray-600">
                Based in Denver, CO (80222). Serving Denver Metro Areas.
              </p>
            </div>

            {/* Right hero block */}
            <div className="relative h-64 md:h-80 rounded-3xl border bg-white/60 shadow-soft overflow-hidden">
              <Image
                src="/robin/hero-main.jpg"
                alt="Compassionate in-home senior care"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust badges directly under hero */}
      <TrustBar />

      {/* SERVICES – Home-only preview (reverted white cards + hover + 'See full services →') */}
      <HomeServicesBlock />

      {/* PRICING PREVIEW (unchanged) */}
      <Section title="Clear care plans & pricing">
        <p className="max-w-2xl text-grey-700">
          Flexible options to fit your needs. No long-term contracts.
        </p>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {[
            { name: "Starter", price: "$30/hr", features: ["Companionship", "Reminders", "Light help"] },
            { name: "Standard", price: "$50/hr", features: ["Personal care", "Meals & hydration", "Household support"] },
            { name: "Plus", price: "$100/hr", features: ["Extended support", "Errands & transport", "Flexible hours"] },
          ].map((p) => (
            <div
              key={p.name}
              className="group rounded-2xl border border-teal/20 bg-white/70 p-5 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-teal/30"
            >
              <div className="flex items-baseline justify-between">
                <div className="font-semibold">{p.name}</div>
                <div className="text-lg font-semibold">{p.price}</div>
              </div>
              <ul className="mt-3 space-y-1 text-sm text-gray-700">
                {p.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <a
          href="/care-plans"
          className="mt-6 inline-block text-teal underline underline-offset-4 hover:no-underline"
        >
          Compare full plan details →
        </a>
      </Section>

      {/* TESTIMONIALS PREVIEW */}
      <Section title="Families we’ve supported">
        <div className="grid gap-4 sm:grid-cols-2">
          {previewTestimonials.map((t, i) => (
            <figure
              key={`${t.author}-${i}`}
              className="rounded-2xl border border-emerald/50 bg-grey/60 p-6 shadow-soft hover:shadow-md hover:-translate-y-0.5 transition text-center"
            >
              {t.image ? (
                <Image
                  src={t.image}
                  alt={`${t.author}, ${t.location}`}
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                />
              ) : (
                <div className="w-20 h-20 rounded-full bg-black/5 mx-auto mb-4" aria-hidden />
              )}
              <blockquote className="text-gray-800 italic text-sm leading-relaxed">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-3 text-sm text-gray-600">
                — {t.author}, {t.location}
              </figcaption>
            </figure>
          ))}
        </div>

        <a
          href="/testimonials"
          className="mt-6 inline-block text-teal underline underline-offset-4 hover:no-underline"
        >
          Read more testimonials →
        </a>
      </Section>

      {/* FINAL CTA (unchanged) */}
      <Section title="Ready to talk?">
        <p className="max-w-2xl text-gray-700">
          Tell me what your family needs. I’ll listen first and help you build a simple plan.
        </p>
        <div className="mt-4 flex flex-wrap gap-3 sm:gap-4">
          <a
            href="/contact"
            className="rounded-xl2 bg-teal text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal"
          >
            Book a free consult
          </a>
          <a
            href={SITE?.phoneLink}
            className="rounded-xl2 border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal"
          >
            Call
          </a>
          <a
            href={SITE?.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl2 border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal"
          >
            WhatsApp
          </a>
        </div>
      </Section>
    </>
  );
}
