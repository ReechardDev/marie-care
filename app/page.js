// app/page.js
import Image from "next/image";
import Section from "@/components/Section";
import Testimonials from "@/components/Testimonials";
import { SITE } from "@/lib/site";

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

  return (
    <>
      {/* HERO */}
      <section className="relative isolate">
        {/* Optional soft background image block (leave empty if no image yet) */}
        <div className="absolute inset-0 -z-10">
          {/* If you add an image at /public/robin/hero.jpg it will render softly */}
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

              {/* Primary actions */}
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
                  aria-label={`Call ${businessName}`}
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

              <p className="mt-3 text-sm text-gray-600">
                Based in Denver, CO (80222). Serving Denver + nearby areas.
              </p>
            </div>

            {/* Right hero block keeps visual interest even without an image */}
            <div className="relative h-64 md:h-80 rounded-3xl border bg-white/60 shadow-soft backdrop-blur-sm">
              {/* If you have a photo, drop it in /public/robin/robin-c.jpg and uncomment */}
              {/* <Image src="/robin/robin-c.jpg" alt="Caregiver with client" fill className="rounded-3xl object-cover" /> */}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <Section title="What I can help with">
        <p className="max-w-2xl text-gray-700 leading-relaxed">
          I tailor support around your loved one’s routines—keeping them safe, comfortable, and
          connected at home.
        </p>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "Companionship", desc: "Conversation, activities, walks, and social connection." },
            { name: "Personal care", desc: "Bathing, grooming, dressing, and respectful assistance." },
            { name: "Medication reminders", desc: "On-time prompts and simple tracking." },
            { name: "Meals & hydration", desc: "Light meal prep and healthy routines." },
            { name: "Household support", desc: "Laundry, tidying, linens, and light housekeeping." },
            { name: "Errands & rides", desc: "Appointments, groceries, pharmacy, and safe transport." },
          ].map((s) => (
            <div key={s.name} className="rounded-2xl border bg-white/70 p-5 shadow-soft">
              <div className="font-semibold">{s.name}</div>
              <p className="mt-1 text-sm text-gray-700">{s.desc}</p>
            </div>
          ))}
        </div>

        <a
          href="/services"
          className="mt-6 inline-block text-teal underline underline-offset-4 hover:no-underline"
        >
          See all services →
        </a>
      </Section>

      {/* PRICING PREVIEW */}
      <Section title="Clear care plans & pricing">
        <p className="max-w-2xl text-gray-700">
          Flexible options to fit your needs. No long-term contracts.
        </p>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {[
            { name: "Starter", price: "$30/hr", features: ["Companionship", "Reminders", "Light help"] },
            { name: "Standard", price: "$50/hr", features: ["Personal care", "Meals & hydration", "Household support"] },
            { name: "Plus", price: "$100/hr", features: ["Extended support", "Errands & transport", "Flexible hours"] },
          ].map((p) => (
            <div key={p.name} className="rounded-2xl border bg-white/70 p-5 shadow-soft">
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
        <Testimonials
          items={[
            {
              quote:
                "Robin felt like family from day one—gentle, reliable, and always there when we needed her.",
              author: "J.S.",
              location: "Denver, CO",
            },
            {
              quote:
                "Clear communication and so much heart. Our mom is safer and happier at home.",
              author: "M.L.",
              location: "Aurora, CO",
            },
          ]}
        />
        <a
          href="/testimonials"
          className="mt-6 inline-block text-teal underline underline-offset-4 hover:no-underline"
        >
          Read more testimonials →
        </a>
      </Section>

      {/* FINAL CTA */}
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
