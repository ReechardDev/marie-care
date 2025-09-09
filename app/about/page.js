import Image from "next/image";
import Section from "@/components/Section";
import { SITE } from "@/lib/site";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <Section title="Care guided by experience and heart.">
        <div className="grid gap-6 md:grid-cols-3">
          {/* Copy + details */}
          <div className="md:col-span-2">
            <p className="text-gray-700 leading-relaxed">
              Led by Robin Miller, with 25+ years supporting families across admissions coordination,
              medical records, hospice care, and patient-family advocacy.
            </p>

            {/* Headshot inline with bio for faster trust-building */}
            <div className="mt-4 flex items-start gap-4">
              <Image
                src="/robin/robin-headshot.jpg"
                alt="Robin Miller, founder of Robin’s Touch Senior Care"
                width={112}
                height={112}
                className="w-28 h-28 rounded-2xl object-cover"
              />
              <p className="text-gray-700 leading-relaxed">
                For over two decades, I’ve helped families navigate elder care with clarity and compassion—
                from coordinating admissions and medical records to supporting hospice decisions and day-to-day needs.
                I started {SITE.name} to deliver dependable, respectful in-home support that keeps loved ones safe,
                comfortable, and connected.
              </p>
            </div>

            {/* Safeguards & approach */}
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl2 bg-card p-5 shadow-soft">
                <div className="font-semibold mb-2">Safeguards & standards</div>
                <ul className="mt-1 grid grid-cols-2 gap-y-2 text-sm text-gray-800">
                  <li>Background-checked caregivers</li>
                  <li>Insured & supervised</li>
                  <li>Caregiver matching + family approval</li>
                  <li>Ongoing check-ins & quality reviews</li>
                </ul>
              </div>
              <div className="rounded-xl2 bg-card p-5 shadow-soft">
                <div className="font-semibold mb-2">Our approach</div>
                <p className="text-gray-700">
                  Listen first → tailor a plan → communicate clearly → adjust as needs change.
                </p>
              </div>
            </div>

            {/* Page CTA */}
            <a
              href="/contact"
              className="mt-6 inline-block rounded-xl2 bg-teal text-white px-4 py-3"
            >
              Meet with Robin
            </a>
          </div>

          {/* Supporting image (keeps visual interest on desktop; stacks on mobile) */}
          <div className="relative w-full h-72 rounded-xl2 overflow-hidden">
            <Image
              src="/robin/robin-headshot.jpg"
              alt="Robin Miller headshot"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
