import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

const SERVICES = [
  {
    title: "Companion Care",
    bullets: [
      "Conversation & activities",
      "Light housekeeping & meals",
      "Safety checks & reminders",
    ],
  },
  {
    title: "Personal Care",
    bullets: [
      "Bathing, grooming, dressing",
      "Toileting & incontinence care",
      "Transfers & mobility support",
    ],
  },
  {
    title: "Overnight Care",
    bullets: [
      "Bedtime & morning routines",
      "Nighttime assistance",
      "Medication reminders",
    ],
  },
  {
    title: "Respite Care",
    bullets: [
      "Short-term coverage for family breaks",
      "Flexible schedules",
      "Seamless handoffs",
    ],
  },
  {
    title: "Post-Hospital Support",
    bullets: [
      "Follow discharge plans",
      "Transport to appointments",
      "Meal prep & monitoring",
    ],
  },
  {
    title: "Dementia Care",
    bullets: [
      "Calming, structured days",
      "Safety & wandering awareness",
      "Family check-ins",
    ],
  },
];

export default function ServiceGrid() {
  return (
    <section aria-labelledby="services-title" className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header row */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2
              id="services-title"
              className="text-3xl font-bold tracking-tight text-gray-900"
            >
              Kind, reliable care, tailored to your needs
            </h2>
            <p className="mt-2 text-gray-600">
              Choose the support that fits today. I’ll personalize your care
              plan after a free assessment and adjust as needs change.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-2xl bg-[#167a7a] px-4 py-2.5 text-white shadow-sm transition hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#167a7a]"
          >
            Book a free consult
          </Link>
        </div>

        {/* Soft panel background */}
        <div className="mt-8 rounded-3xl border border-emerald-200/60 bg-emerald-50/40 p-6 sm:p-8">
          {/* Equal-height grid */}
          <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((svc) => (
              <article
                key={svc.title}
                className="flex h-full flex-col rounded-2xl border border-emerald-200/70 bg-white p-5 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {svc.title}
                </h3>

                <ul className="mt-2 grow space-y-2 text-gray-700">
                  {svc.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2
                        aria-hidden="true"
                        className="mt-0.5 size-5 shrink-0"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/contact?reason=request_care&service=${encodeURIComponent(
                    svc.title
                  )}`}
                  className="mt-4 inline-flex w-full items-center justify-center rounded-xl border border-emerald-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-900 shadow-sm transition hover:bg-emerald-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                >
                  Request Care
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
