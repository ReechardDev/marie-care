// components/PlanGrid.jsx
"use client";

import { track } from "@/lib/analytics";

export default function PlanGrid({ plans = [] }) {
  return (
    <div className="mt-6 grid gap-4 sm:gap-5 sm:grid-cols-2 md:grid-cols-3 items-stretch">
      {plans.map((plan) => {
        const slug =
          (plan.slug || plan.name || "")
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "") || null;

        const contactHref = `/contact?plan=${encodeURIComponent(slug || plan.name)}`;

        return (
          <article
            key={plan.name}
            className={[
              "group relative h-full flex flex-col rounded-2xl",
              "border border-border bg-white p-5 md:p-6 shadow-soft",
              "transition-all duration-200",
              "hover:-translate-y-0.5 hover:shadow-md hover:border-brand-teal/30",
              "transition-colors group-hover:bg-brand-tealLight/20",
            ].join(" ")}
          >
            {plan.popular && (
              <div
                className="absolute -top-3 right-3 rounded-full bg-[#D4AF37] text-white text-xs px-3 py-1 shadow-soft"
                aria-label="Most Popular plan"
              >
                Most Popular
              </div>
            )}

            <header className="flex items-baseline justify-between gap-3">
              <h3 className="font-semibold text-text-heading">{plan.name}</h3>
              <div className="text-lg font-semibold text-brand-teal">{plan.from}</div>
            </header>

            {/* Features grow to push CTA down */}
            <ul className="mt-3 space-y-1 text-text-body flex-1">
              {plan.bullet?.map((b, i) => (
                <li key={i} className="pl-4 relative">
                  <span aria-hidden className="absolute left-0">•</span>
                  {b}
                </li>
              ))}
            </ul>

            {/* Primary CTA — force brand teal like the hero button */}
            <div className="mt-4">
              <a
                href={contactHref}
                role="button"
                aria-disabled="false"
                onClick={() =>
                  typeof track === "function" &&
                  track("plan_cta_click", { plan: slug || plan.name })
                }
                className={[
                  "block w-full text-center rounded-xl2 px-4 py-3 shadow-soft hover:shadow-md hover:opacity-95",
                  // hard-force brand color & enable state
                  "!bg-brand-teal !text-white !opacity-100 !pointer-events-auto",
                  "focus:outline-none focus:ring-2 focus:ring-brand-teal/30",
                ].join(" ")}
              >
                {plan.cta || `Choose ${plan.shortTitle || plan.name}`}
              </a>
            </div>
          </article>
        );
      })}
    </div>
  );
}
