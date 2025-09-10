// components/PlanGrid.jsx
"use client";

import { useState } from "react";
import Modal from "@/components/Modal";

/** Optional granular details shown in the “Learn more” modal per plan */
const DEFAULT_DETAILS = {
  Starter: [
    "Ideal for light support: companionship, reminders, light housekeeping",
    "Typical minimum 2–3 hours per visit",
    "Weekends/holidays as scheduled",
    "No long-term contracts",
  ],
  Standard: [
    "Personal care support (bathing, grooming, mobility assistance)",
    "Recommended 3–4 hours per visit for continuity",
    "Flexible scheduling; adjust as needs change",
    "Cancellation window per policy (confirm in consult)",
  ],
  Plus: [
    "Specialized support: overnight, post-hospital, memory support, respite",
    "Overnight & 24/7 availability (as scheduled)",
    "Weekend/holiday differentials may apply",
    "Mileage considerations for long trips",
  ],
};

export default function PlanGrid({ plans, detailsByPlan = DEFAULT_DETAILS }) {
  const [openName, setOpenName] = useState(null);

  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 items-stretch">
      {plans.map((plan) => {
        const items =
          detailsByPlan[plan.name] ??
          [
            "Flexible hours and visit length",
            "Final rates depend on tasks and schedule",
            "No long-term contracts",
            "Weekend/holiday differentials may apply",
          ];

        return (
          <div
            key={plan.name}
            className="group relative h-full rounded-2xl border border-teal/20 bg-gradient-to-b from-white to-teal-50/30 p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-md flex flex-col"
          >
            {plan.popular && (
              <div
                className="absolute -top-3 right-3 rounded-full bg-[#D4AF37] text-white text-xs px-3 py-1 shadow-soft"
                aria-label="Most Popular plan"
              >
                Most Popular
              </div>
            )}

            <div className="flex items-baseline justify-between">
              <div className="font-semibold text-gray-900">{plan.name}</div>
              <div className="text-lg font-semibold text-[#167a7a]">{plan.from}</div>
            </div>

            {/* Features grow to push CTAs down */}
            <ul className="mt-3 space-y-1 text-gray-700 flex-1">
              {plan.bullet.map((b) => (
                <li key={b}>• {b}</li>
              ))}
            </ul>

            {/* CTA row: Learn more + Contact */}
            <div className="mt-4 flex items-center gap-3">
              <button
                type="button"
                onClick={() => setOpenName(plan.name)}
                className="rounded-xl2 border px-4 py-3 text-sm hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-[#167a7a]"
                aria-haspopup="dialog"
                aria-expanded={openName === plan.name ? "true" : "false"}
                aria-controls={`plan-modal-${plan.name}`}
              >
                Learn more
              </button>

              <a
                href="/contact"
                className="inline-block rounded-xl2 bg-[#167a7a] text-white px-4 py-3 text-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#167a7a]"
                aria-label={`Select plan: ${plan.name}`}
              >
                {plan.cta}
              </a>
            </div>

            {/* Modal */}
            <Modal
              open={openName === plan.name}
              onClose={() => setOpenName(null)}
              title={`${plan.name} — Details`}
            >
              <ul className="list-disc pl-5 space-y-2">
                {items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
              <div className="mt-4 text-sm text-gray-700">
                Have specific needs?{" "}
                <a
                  href="/contact"
                  className="text-teal underline underline-offset-4 hover:no-underline"
                >
                  Book a free consult
                </a>{" "}
                and we’ll tailor the plan.
              </div>
            </Modal>
          </div>
        );
      })}
    </div>
  );
}
