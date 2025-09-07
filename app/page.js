import { PLANS } from "@/lib/content";
import Image from "next/image";
import Section from "@/components/Section";
import CTAButtons from "@/components/CTAButtons";
import { SITE } from "@/lib/site";
import { VALUE_PILLARS } from "@/lib/content";

export const metadata = {
  title: `In-Home Senior Care in ${SITE.city}`,
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0">
          <Image
            src="/robin/hero-caregiver.jpg"
            alt="Caregiver offering supportive arm to smiling older adult at home."
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-ink/60" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-24 text-white">
          <h1 className="text-3xl md:text-4xl font-semibold max-w-xl">
            Compassionate in-home care you can trust.
          </h1>
          <p className="mt-3 max-w-xl">
            Kind support for daily living, delivered by background-checked caregivers in {SITE.city}, {SITE.state}.
          </p>
          <div className="mt-4 flex gap-2 text-xs">
            <span className="bg-white/10 rounded-full px-3 py-1">CPR Certified</span>
            <span className="bg-white/10 rounded-full px-3 py-1">Background check</span>
            <span className="bg-white/10 rounded-full px-3 py-1">24/7 Support</span>
          </div>
          <CTAButtons />
        </div>
      </section>

      {/* VALUE PILLARS */}
      <Section className="bg-white">
        <div className="grid gap-4 md:grid-cols-3">
          {VALUE_PILLARS.map((p) => (
            <div key={p.title} className="rounded-xl2 bg-card p-5 shadow-soft">
              <div className="font-semibold">{p.title}</div>
              <div className="text-sm text-gray-600 mt-1">{p.desc}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* SERVICES SNAPSHOT */}
      <Section title="How we help">
        <ul className="list-disc ml-5 text-gray-700 leading-8">
          <li>Companionship</li>
          <li>Personal care</li>
          <li>Medication reminders</li>
          <li>Meal prep</li>
          <li>Light housekeeping</li>
          <li>Transportation</li>
        </ul>
        <a href="/services" className="inline-block mt-6 text-teal underline">See all services</a>
      </Section>

      {/* HOW IT WORKS */}
      <Section title="How it works" className="bg-cream">
        <ol className="grid gap-4 md:grid-cols-3">
          {[
            ["Talk with our care coordinator", "Quick phone consult."],
            ["Get a tailored plan", "Hours, tasks, start date."],
            ["Meet your caregiver", "We match, you approve."],
          ].map(([t, d]) => (
            <li key={t} className="rounded-xl2 bg-white p-5 shadow-soft">
              <div className="font-semibold">{t}</div>
              <div className="text-sm text-gray-600 mt-1">{d}</div>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Plans for every family">
  <div className="grid gap-4 md:grid-cols-3">
    {PLANS.slice(0, 3).map((p) => (
      <div key={p.name} className="rounded-xl2 border p-5">
        <div className="font-semibold">{p.name.replace(/\s*\(.*\)/, "")}</div>
        <div className="text-sm text-gray-600 mt-1">{p.from}</div>
      </div>
    ))}
  </div>
  <a href="/care-plans" className="inline-block mt-6 text-teal underline">
    Compare care plans
  </a>
</Section>

      {/* CTA STRIP */}
      <Section className="bg-mint/30">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-lg font-medium">Unsure where to start? Let’s talk today.</div>
          <CTAButtons compact />
        </div>
      </Section>
    </>
  );
}
