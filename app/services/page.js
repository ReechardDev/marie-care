// app/services/page.js
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import Section from "@/components/Section";
import CTAButtons from "@/components/CTAButtons";

export const metadata = {
  title: "Services",
  description:
    "Companionship, personal care, medication reminders, meals & housekeeping, errands & transportation, and respite care in Denver. Non-medical support tailored to your family.",
};

const SERVICES = [
  { title: "Companion Care", bullets: ["Conversation & activities","Light housekeeping & meals","Safety checks & reminders"] },
  { title: "Personal Care", bullets: ["Bathing, grooming, dressing","Toileting & incontinence care","Transfers & mobility support"] },
  { title: "Overnight Care", bullets: ["Bedtime & morning routines","Nighttime assistance","Medication reminders"] },
  { title: "Respite Care", bullets: ["Short-term coverage for family breaks","Flexible schedules","Seamless handoffs"] },
  { title: "Post-Hospital Support", bullets: ["Follow discharge plans","Transport to appointments","Meal prep & monitoring"] },
  { title: "Dementia Care", bullets: ["Calming, structured days","Safety & wandering awareness","Family check-ins"] },
];

export default function ServicesPage() {
  return (
    <>
      {/* Intro */}
      <Section title="Services">
        <p className="text-gray-700 leading-relaxed max-w-2xl">
          We support daily living with practical, respectful help. Tell us what
          your loved one needs; we’ll tailor a plan around routines that keep
          them safe, comfortable, and connected.
        </p>
      </Section>

      {/* Header + grid section (pulled up slightly) */}
      <Section style={{ marginTop: "0.75rem" }}>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Kind, reliable care, tailored to your needs
            </h2>
            <p className="mt-2 text-gray-600">
              Choose the support that fits today. We’ll personalize your care
              plan after a free assessment and adjust as needs change.
            </p>
          </div>
          {/* top CTA intentionally removed */}
        </div>

        {/* Teal panel */}
        <div className="mt-4 md:mt-6 rounded-3xl border border-teal/10 bg-teal/10 p-6 sm:p-8">
          {/* Equal-height grid */}
          <div className="grid grid-cols-1 items-stretch gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((svc) => (
              <article
                key={svc.title}
                className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-teal/30"
              >
                <h3 className="text-lg font-semibold text-gray-900">{svc.title}</h3>

                <ul className="mt-2 grow space-y-2 text-gray-700">
                  {svc.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2
                        aria-hidden="true"
                        className="mt-0.5 h-5 w-5 shrink-0"
                        style={{ color: "#167a7a" }} // brand teal icon
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Short, centered CTA (matches care-plan style) */}
                <div className="mt-4 flex justify-center">
                  <Link
                    href={`/contact?reason=request_care&service=${encodeURIComponent(svc.title)}`}
                    className="rounded-xl2 bg-teal px-5 py-2.5 text-white shadow-sm transition hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
                  >
                    Request Care
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

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
            <ul className="list-disc ml-5 leading-7 text-gray-700">
              <li>Nursing procedures, injections, wound care</li>
              <li>Controlled-medication administration</li>
            </ul>
          </div>
          <div className="rounded-xl2 bg-teal/10 p-5 shadow-soft border border-teal/10">
            <div className="font-semibold mb-2">Partners</div>
            <p className="text-gray-700">
              If medical tasks are required, we can coordinate with licensed
              home-health or hospice partners while we continue non-medical
              support.
            </p>
          </div>
        </div>
      </Section>

      {/* Process timeline + CTA (kept) */}
      <Section title="Process timeline">
        <div className="rounded-xl2 bg-teal/10 p-5 shadow-soft text-gray-800">
          Inquiry → Phone consult → Home visit (optional) → Plan & match → Start
          of care → Ongoing check-ins.
        </div>
        <div className="mt-6">
          <CTAButtons />
        </div>
      </Section>
    </>
  );
}
