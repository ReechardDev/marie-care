import Image from "next/image";
import Section from "@/components/Section";
import CTAButtons from "@/components/CTAButtons";
import { SERVICES } from "@/lib/content";

export const metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <Section title="Services">
        <p className="text-gray-700 max-w-2xl">
          We support daily living with compassionate, practical help. Tell us what your loved one needs — we’ll tailor a plan.
        </p>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {SERVICES.map((s) => (
            <div key={s.slug} className="rounded-xl2 bg-card p-5 shadow-soft">
              <div className="flex gap-4">
                <div className="relative w-28 h-20 shrink-0 rounded-xl2 overflow-hidden bg-white">
                  <Image src={s.image} alt={s.title} fill className="object-cover" />
                </div>
                <div>
                  <div className="font-semibold">{s.title}</div>
                  <div className="text-sm text-gray-600 mt-1">{s.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="What’s included / What’s not" className="bg-cream">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl2 bg-white p-5 shadow-soft">
            <div className="font-semibold mb-2">Included</div>
            <ul className="list-disc ml-5 text-gray-700 leading-7">
              <li>Non-medical support listed above</li>
              <li>Light housekeeping & meals</li>
              <li>Transportation & errands</li>
            </ul>
          </div>
          <div className="rounded-xl2 bg-white p-5 shadow-soft">
            <div className="font-semibold mb-2">Not included</div>
            <ul className="list-disc ml-5 text-gray-700 leading-7">
              <li>Nursing procedures, injections, wound care</li>
              <li>Controlled medication administration</li>
            </ul>
          </div>
          <div className="rounded-xl2 bg-white p-5 shadow-soft">
            <div className="font-semibold mb-2">Partners</div>
            <p className="text-gray-700">
              We can coordinate with home health partners if medical services are required.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Process timeline">
        <div className="rounded-xl2 bg-card p-5 shadow-soft">
          Inquiry → Phone consult → Home visit (optional) → Plan & match → Start of care → Ongoing check-ins.
        </div>
        <div className="mt-6"><CTAButtons /></div>
      </Section>
    </>
  );
}
