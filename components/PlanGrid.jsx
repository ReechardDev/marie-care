// components/PlanGrid.jsx
"use client";

export default function PlanGrid({ plans }) {
  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 items-stretch">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className="group relative h-full rounded-2xl border border-teal/20 bg-gradient-to-b from-white to-teal-50/30 p-5 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-teal/30 flex flex-col"
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

          {/* Features grow to push CTA down */}
          <ul className="mt-3 space-y-1 text-gray-700 flex-1">
            {plan.bullet.map((b) => (
              <li key={b}>• {b}</li>
            ))}
          </ul>

          {/* Primary CTA (centered), unchanged */}
          <div className="mt-4 flex justify-center">
            <a
              href="/contact"
              className="inline-block rounded-xl2 bg-[#167a7a] text-white px-4 py-3 text-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#167a7a]"
              aria-label={`Select plan: ${plan.name}`}
            >
              {plan.cta}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
