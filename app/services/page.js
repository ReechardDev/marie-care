import Image from "next/image";
import Section from "@/components/Section";
import CTAButtons from "@/components/CTAButtons";
import { SERVICES } from "@/lib/content";
import { SITE } from "@/lib/site";

export const metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <Section title="Services">
        <p className="text-gray-700 leading-relaxed max-w-2xl">
          We support daily living with compassionate, practical help. Tell us what your loved one
          needs — we’ll tailor a plan.
        </p>

        {/* Service categories */}
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {SERVICES.map((s) => (
            <div key={s.slug} className="rounded-xl2 bg-card p-5 shadow-soft">
              <div className="flex gap-4">
                <div className="relative w-28 h-20 shrink-0 rounded-xl2 overflow-hidden bg-white">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 768px) 112px, 160px"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="font-semibold">{s.title}</div>
                  <div className="text-sm text-gray-600 mt-1">{s.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick CTA row */}
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="/contact" className="rounded-xl2 bg-teal text-white px-4 py-3">
            Book a free consult
          </a>
          <a href={SITE.phoneLink} className="rounded-xl2 border px-4 py-3">
            Call
          </a>
          <a
            href={SITE.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl2 border px-4 py-3"
          >
            WhatsApp
          </a>
        </div>
      </Section>

      {/* Clarity box */}
      <Section title="What’s included / What’s not" className="bg-cream">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl2 bg-white p-5 shadow-soft">
            <div className="font-semibold mb-2">Included</div>
            <ul className="list-disc ml-5 text-gray-700 leading-7">
              <li>Companionship & safety checks</li>
              <li>Personal care (bathing, dressing, grooming)</li>
              <li>Medication reminders (non-medical)</li>
              <li>Meals, light housekeeping, errands & transportation</li>
            </ul>
          </div>
          <div className="rounded-xl2 bg-white p-5 shadow-soft">
            <div className="font-semibold mb-2">Not included</div>
            <ul className="list-disc ml-5 text-gray-700 leading-7">
              <li>Nursing procedures, injections, wound care</li>
              <li>Controlled-medication administration</li>
            </ul>
          </div>
          <div className="rounded-xl2 bg-white p-5 shadow-soft">
            <div className="font-semibold mb-2">Partners</div>
            <p className="text-gray-700">
              If medical tasks are required, we can coordinate with licensed home-health or hospice
              partners while we continue non-medical support.
            </p>
          </div>
        </div>
      </Section>

      {/* Process timeline + CTA */}
      <Section title="Process timeline">
        <div className="rounded-xl2 bg-card p-5 shadow-soft text-gray-800">
          Inquiry → Phone consult → Home visit (optional) → Plan & match → Start of care →
          Ongoing check-ins.
        </div>
        <div className="mt-6">
          <CTAButtons />
        </div>
      </Section>
    </>
  );
}
