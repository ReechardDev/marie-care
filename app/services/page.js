// app/services/page.js
import { HeartHandshake, Bath, Pill, Utensils, Car, Clock } from "lucide-react";
import Section from "@/components/Section";
import CTAButtons from "@/components/CTAButtons";
import { SERVICES } from "@/lib/content";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Services",
  description:
    "Companionship, personal care, medication reminders, meals & housekeeping, errands & transportation, and respite care in Denver. Non-medical support tailored to your family.",
};

function pickIcon(title = "") {
  const t = title.toLowerCase();
  if (t.includes("companionship") || t.includes("safety")) return HeartHandshake;
  if (t.includes("personal")) return Bath;
  if (t.includes("medication") || t.includes("reminder")) return Pill;
  if (t.includes("meal") || t.includes("house")) return Utensils;
  if (t.includes("errand") || t.includes("transport")) return Car;
  if (t.includes("respite")) return Clock;
  return HeartHandshake;
}

export default function ServicesPage() {
  return (
    <>
      <Section title="Services">
        <p className="text-gray-700 leading-relaxed max-w-2xl">
          We support daily living with practical, respectful help. Tell us what your loved one needs —
          we’ll tailor a plan around routines that keep them safe, comfortable, and connected.
        </p>

        {/* Service categories (icon cards) */}
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => {
            const Icon = pickIcon(s.title);
            return (
              <div
                key={s.slug || s.title}
                className="group rounded-2xl border border-teal/20 bg-white p-5 shadow-soft hover:shadow-md hover:-translate-y-0.5 transition"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal/10">
                    <Icon className="h-5 w-5 text-[#167a7a]" aria-hidden />
                  </span>
                  <div>
                    <div className="font-semibold">{s.title}</div>
                    <div className="text-sm text-gray-700 mt-1">{s.desc}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick CTA row */}
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/contact"
            className="rounded-xl2 bg-[#167a7a] text-white px-4 py-3 transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#167a7a]"
          >
            Book a free consult
          </a>
          <a
            href={SITE.phoneLink}
            className="rounded-xl2 border px-4 py-3 transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#167a7a]"
          >
            Call
          </a>
          <a
            href={SITE.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl2 border px-4 py-3 transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#167a7a]"
          >
            WhatsApp
          </a>
        </div>
      </Section>

      {/* Clarity box */}
      <Section title="What’s included / What’s not" className="bg-cream">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl2 bg-white p-5 shadow-soft border border-teal/10">
            <div className="font-semibold mb-2">Included</div>
            <ul className="list-disc ml-5 text-gray-700 leading-7">
              <li>Companionship & safety checks</li>
              <li>Personal care (bathing, dressing, grooming)</li>
              <li>Medication reminders (non-medical)</li>
              <li>Meals, light housekeeping, errands & transportation</li>
            </ul>
          </div>
          <div className="rounded-xl2 bg-white p-5 shadow-soft border border-teal/10">
            <div className="font-semibold mb-2">Not included</div>
            <ul className="list-disc ml-5 text-gray-700 leading-7">
              <li>Nursing procedures, injections, wound care</li>
              <li>Controlled-medication administration</li>
            </ul>
          </div>
          <div className="rounded-xl2 bg-white p-5 shadow-soft border border-teal/10">
            <div className="font-semibold mb-2">Partners</div>
            <p className="text-gray-700">
              If medical tasks are required, we can coordinate with licensed home-health or hospice
              partners while we continue non-medical support.
            </p>
          </div>
        </div>
      </Section>

      {/* Process timeline + CTA */}
      <Section title="Process timeline">
        <div className="rounded-xl2 bg-card p-5 shadow-soft text-gray-800">
          Inquiry → Phone consult → Home visit (optional) → Plan & match → Start of care →
          Ongoing check-ins.
        </div>
        <div className="mt-6">
          <CTAButtons />
        </div>
      </Section>
    </>
  );
}
