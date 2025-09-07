import Section from "@/components/Section";
import CTAButtons from "@/components/CTAButtons";
import { PLANS, FAQ_PREVIEW } from "@/lib/content";

export const metadata = { title: "Care Plans & Pricing" };

export default function CarePlansPage() {
  return (
    <>
      <Section title="Care Plans & Pricing">
        <p className="text-gray-700 max-w-2xl">
          Choose the support that fits your schedule and budget. Rates vary by tasks, hours, and days.
          We’ll confirm exact pricing during your consult.
        </p>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {PLANS.map((p) => (
            <div key={p.name} className="rounded-xl2 border p-5 relative">
              {p.popular && (
                <div className="absolute -top-3 right-3 rounded-full bg-gold text-white text-xs px-3 py-1 shadow-soft">
                  Most Popular
                </div>
              )}
              <div className="font-semibold">{p.name}</div>
              <div className="text-sm text-gray-600 mt-1">{p.from}</div>
              <ul className="list-disc ml-5 mt-3 text-gray-700 leading-7">
                {p.bullet.map((b) => <li key={b}>{b}</li>)}
              </ul>
              <a href="/contact" className="inline-block mt-4 rounded-xl2 bg-teal text-white px-4 py-2">
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl2 bg-card p-5 shadow-soft">
            <div className="font-semibold mb-2">Add-ons</div>
            <ul className="list-disc ml-5 text-gray-700 leading-7">
              <li>Overnight support</li>
              <li>Holiday coverage</li>
              <li>Additional mileage (long trips)</li>
              <li>Second-person transfer assistance</li>
            </ul>
          </div>
          <div className="rounded-xl2 bg-card p-5 shadow-soft">
            <div className="font-semibold mb-2">Fine print</div>
            <ul className="list-disc ml-5 text-gray-700 leading-7">
              <li>Final rates depend on tasks, schedule, location</li>
              <li>Weekend/holiday differentials may apply</li>
              <li>No long-term contracts; flexible adjustments</li>
            </ul>
          </div>
          <div className="rounded-xl2 bg-card p-5 shadow-soft">
            <div className="font-semibold mb-2">FAQs</div>
            <ul className="list-disc ml-5 text-gray-700 leading-7">
              {FAQ_PREVIEW.map((f) => <li key={f.q}><b>{f.q}</b> — {f.a}</li>)}
            </ul>
          </div>
        </div>

        <div className="mt-6"><CTAButtons /></div>
      </Section>
    </>
  );
}
