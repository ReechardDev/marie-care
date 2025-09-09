// app/care-plans/page.js
import Section from "@/components/Section";
import CTAButtons from "@/components/CTAButtons";
import { PLANS, FAQ_PREVIEW } from "@/lib/content";

export const metadata = {
  title: "Care Plans & Pricing",
  description:
    "Starter from $30/hr, Standard from $50/hr, Plus from $100/hr. Flexible non-medical support with no long-term contracts. Book a free consult to confirm exact pricing.",
};

export default function CarePlansPage() {
  return (
    <>
      <Section title="Care Plans & Pricing">
        <p className="text-gray-700 leading-relaxed max-w-2xl">
          Choose the support that fits your schedule and budget. Rates vary by tasks, hours, and
          days. We’ll confirm exact pricing during your consult.
        </p>

        {/* Pricing cards (equal height, CTA pinned) */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 items-stretch">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className="group relative h-full rounded-2xl border border-teal/20 bg-gradient-to-b from-white to-teal-50/30 p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-md flex flex-col"
            >
              {p.popular && (
                <div
                  className="absolute -top-3 right-3 rounded-full bg-[#D4AF37] text-white text-xs px-3 py-1 shadow-soft"
                  aria-label="Most Popular plan"
                >
                  Most Popular
                </div>
              )}

              <div className="flex items-baseline justify-between">
                <div className="font-semibold text-gray-900">{p.name}</div>
                <div className="text-lg font-semibold text-[#167a7a]">{p.from}</div>
              </div>

              {/* grow to push CTA down */}
              <ul className="mt-3 space-y-1 text-gray-700 flex-1">
                {p.bullet.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>

              <a
                href="/contact"
                className="inline-block mt-4 rounded-xl2 bg-[#167a7a] text-white px-4 py-3 transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#167a7a]"
                aria-label={`Select plan: ${p.name}`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Details */}
        <div className="mt-8 space-y-4 text-sm text-gray-800">
          <div className="rounded-xl2 bg-card p-5 shadow-soft border border-teal/10">
            <div className="font-semibold mb-2">Add-ons</div>
            <ul className="list-disc ml-5 leading-7">
              <li>Overnight support</li>
              <li>Holiday coverage</li>
              <li>Additional mileage (long trips)</li>
              <li>Second-person transfer assistance</li>
            </ul>
          </div>

          <div className="rounded-xl2 bg-card p-5 shadow-soft border border-teal/10">
            <div className="font-semibold mb-2">Fine print</div>
            <ul className="list-disc ml-5 leading-7">
              <li>Final rates depend on tasks, schedule, and location.</li>
              <li>Weekend/holiday differentials may apply.</li>
              <li>No long-term contracts; flexible adjustments.</li>
            </ul>
          </div>

          <div className="rounded-xl2 bg-card p-5 shadow-soft border border-teal/10">
            <div className="font-semibold mb-2">FAQs</div>
            <ul className="list-disc ml-5 leading-7">
              {FAQ_PREVIEW.map((f) => (
                <li key={f.q}>
                  <b>{f.q}</b> — {f.a}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Page CTA */}
        <div className="mt-6">
          <CTAButtons />
        </div>
      </Section>
    </>
  );
}
