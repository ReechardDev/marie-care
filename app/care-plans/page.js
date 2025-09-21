// app/care-plans/page.js
import Section from "@/components/Section";
import CTAButtons from "@/components/CTAButtons";
import PlanGrid from "@/components/PlanGrid";
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
        <p className="max-w-2xl leading-relaxed text-gray-700">
          Choose the support that fits your schedule and budget. Rates vary by tasks, hours, and
          days. I’ll confirm exact pricing during your consult.
        </p>

        {/* Pricing cards */}
        <div className="teal-cards">
          <PlanGrid plans={PLANS} />
        </div>

        {/* Details */}
        <div className="mt-8 space-y-4 text-sm text-gray-800">
          <div className="rounded-xl2 border border-emerald-100 bg-emerald-50 p-5 shadow-soft transition hover:bg-emerald-100 hover:border-emerald-200">
            <div className="mb-2 font-semibold">Add-ons</div>
            <ul className="ml-5 list-disc leading-7">
              <li>Overnight support</li>
              <li>Holiday coverage</li>
              <li>Additional mileage (long trips)</li>
              <li>Second-person transfer assistance</li>
            </ul>
          </div>

          <div className="rounded-xl2 border border-emerald-100 bg-emerald-50 p-5 shadow-soft transition hover:bg-emerald-100 hover:border-emerald-200">
            <div className="mb-2 font-semibold">Fine print</div>
            <ul className="ml-5 list-disc leading-7">
              <li>Final rates depend on tasks, schedule, and location.</li>
              <li>Weekend/holiday differentials may apply.</li>
              <li>No long-term contracts; flexible adjustments.</li>
            </ul>
          </div>

          <div className="rounded-xl2 border border-emerald-100 bg-emerald-50 p-5 shadow-soft transition hover:bg-emerald-100 hover:border-emerald-200">
            <div className="mb-2 font-semibold">FAQs</div>
            <ul className="ml-5 list-disc leading-7">
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
