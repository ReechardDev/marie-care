import Image from "next/image";
import Section from "@/components/Section";
import CTAButtons from "@/components/CTAButtons";
import { SITE } from "@/lib/site";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <Section title="Care guided by experience and heart.">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <p className="text-gray-700">
              Led by Robin Miller, with 25+ years supporting families across admissions coordination,
              medical records, hospice care, and patient-family advocacy.
            </p>
            <p className="text-gray-700 mt-4">
              For over two decades, Robin has helped families navigate elder care with clarity and compassion—
              from coordinating admissions and medical records to supporting hospice decisions and day-to-day needs.
              She started {SITE.name} to deliver dependable, respectful in-home and hospice support that keeps loved ones safe,
              comfortable, and connected.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl2 bg-card p-5 shadow-soft">
                <div className="font-semibold mb-2">Safeguards & standards</div>
                <ul className="list-disc ml-5 text-gray-700 leading-7">
                  <li>Background-checked caregivers</li>
                  <li>Caregiver matching + family approval</li>
                  <li>Ongoing check-ins and quality reviews</li>
                </ul>
              </div>
              <div className="rounded-xl2 bg-card p-5 shadow-soft">
                <div className="font-semibold mb-2">Our approach</div>
                <p className="text-gray-700">
                  Listen first → tailor a plan → communicate clearly → adjust as needs change.
                </p>
              </div>
            </div>

            <div className="mt-6"><CTAButtons /></div>
          </div>
          <div className="relative w-full h-72 rounded-xl2 overflow-hidden">
            <Image src="/robin/robin-headshot.jpg" alt="Robin Miller headshot" fill className="object-cover" />
          </div>
        </div>
      </Section>
    </>
  );
}
