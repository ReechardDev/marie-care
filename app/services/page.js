// app/services/page.js
import Section from "@/components/Section";
import CTAButtons from "@/components/CTAButtons";
import ServicesGrid from "@/components/ServicesGrid";

export const metadata = {
  title: "Services",
  description:
    "Companionship, personal care, medication reminders, meals & housekeeping, errands & transportation, and respite care in Denver. Non-medical support tailored to your family.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Intro */}
      <Section title="Services">
        <p className="text-gray-700 leading-relaxed max-w-2xl">
          We support daily living with practical, respectful help. Tell us what your loved one needs —
          we’ll tailor a plan around routines that keep them safe, comfortable, and connected.
        </p>
      </Section>

      {/* Reusable services grid with icons (replaces the old manual grid) */}
      <ServicesGrid />

      {/* Quick CTA row (kept) */}
      <Section>
        <div className="mt-2">
          <CTAButtons compact align="left" />
        </div>
      </Section>

      {/* Clarity box (kept) */}
      <Section title="What’s included / What’s not" className="bg-cream">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl2 bg-teal/10 p-5 shadow-soft border border-teal/10">
            <div className="font-semibold mb-2">Included</div>
            <ul className="list-disc ml-5 text-gray-700 leading-7">
              <li>Companionship & safety checks</li>
              <li>Personal care (bathing, dressing, grooming)</li>
              <li>Medication reminders (non-medical)</li>
              <li>Meals, light housekeeping, errands & transportation</li>
            </ul>
          </div>
          <div className="rounded-xl2 bg-teal/10 p-5 shadow-soft border border-teal/10">
            <div className="font-semibold mb-2">Not included</div>
            <ul className="list-disc ml-5 text-gray-700 leading-7">
              <li>Nursing procedures, injections, wound care</li>
              <li>Controlled-medication administration</li>
            </ul>
          </div>
          <div className="rounded-xl2 bg-teal/10 p-5 shadow-soft border border-teal/10">
            <div className="font-semibold mb-2">Partners</div>
            <p className="text-gray-700">
              If medical tasks are required, we can coordinate with licensed home-health or hospice
              partners while we continue non-medical support.
            </p>
          </div>
        </div>
      </Section>

      {/* Process timeline + CTA (kept) */}
      <Section title="Process timeline">
        <div className="rounded-xl2 bg-teal/10 p-5 shadow-soft text-gray-800">
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
