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
        <p className="text-gray-700 leading-relaxed max-w-2xl">
          Choose the support that fits your schedule and budget. Rates vary by tasks, hours, and
          days. We’ll confirm exact pricing during your consult.
        </p>

        {/* Pricing cards */}
        <PlanGrid plans={PLANS} />

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
