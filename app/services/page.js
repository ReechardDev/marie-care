// app/services/page.js
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
    <div className="bg-white">
      {/* Intro */}
      <Section title="Services">
        <p className="max-w-2xl leading-relaxed text-gray-700">
          We provide practical, respectful daily support, tell us what your loved one needs and we’ll tailor a plan after a free consult
          to keep them safe, comfortable, and connected as needs change.
        </p>
      </Section>

      {/* Services grid — light-teal cards */}
      <Section style={{ marginTop: "0.75rem" }}>
        <div className="grid grid-cols-1 items-stretch gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((svc) => (
            <article
              key={svc.title}
              className="flex h-full flex-col rounded-xl2 border border-emerald-100 bg-white-50 p-5 sm:p-6 shadow-soft transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-100 hover:border-emerald-200"
            >
              <h3 className="text-lg font-semibold text-gray-900">{svc.title}</h3>
              <ul className="mt-2 grow space-y-2 text-gray-700">
                {svc.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0" style={{ color: "#167a7a" }} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      {/* Quick CTA row (kept) */}
      <Section>
        <div className="mt-2">
          <CTAButtons compact align="left" />
        </div>
      </Section>

      {/* Clarity boxes — same light-teal style */}
      <Section title="What’s included / What’s not">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl2 border border-emerald-100 bg-emerald-50 p-5 shadow-soft transition hover:bg-emerald-100 hover:border-emerald-200">
            <div className="mb-2 font-semibold">Included</div>
            <ul className="ml-5 list-disc leading-7 text-gray-700">
              <li>Companionship & safety checks</li>
              <li>Personal care (bathing, dressing, grooming)</li>
              <li>Medication reminders (non-medical)</li>
              <li>Meals, light housekeeping, errands & transportation</li>
            </ul>
          </div>
          <div className="rounded-xl2 border border-emerald-100 bg-emerald-50 p-5 shadow-soft transition hover:bg-emerald-100 hover:border-emerald-200">
            <div className="mb-2 font-semibold">Not included</div>
            <ul className="ml-5 list-disc leading-7 text-gray-700">
              <li>Nursing procedures, injections, wound care</li>
              <li>Controlled-medication administration</li>
            </ul>
          </div>
          <div className="rounded-xl2 border border-emerald-100 bg-emerald-50 p-5 shadow-soft transition hover:bg-emerald-100 hover:border-emerald-200">
            <div className="mb-2 font-semibold">Partners</div>
            <p className="text-gray-700">
              If medical tasks are required, we can coordinate with licensed home-health or hospice partners while we continue non-medical
              support.
            </p>
          </div>
        </div>
      </Section>

      {/* Process timeline — same card style + bottom CTA row (kept) */}
      <Section title="Process timeline">
        <div className="rounded-xl2 border border-emerald-100 bg-emerald-50 p-5 shadow-soft text-gray-800 transition hover:bg-emerald-100 hover:border-emerald-200">
          Inquiry → Phone consult → Home visit (optional) → Plan & match → Start of care → Ongoing check-ins.
        </div>
        <div className="mt-6">
          <CTAButtons />
        </div>
      </Section>
    </div>
  );
}
