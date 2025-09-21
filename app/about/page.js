// app/about/page.js
import Image from "next/image";
import Section from "@/components/Section";
import CTAButtons from "@/components/CTAButtons";
import { SITE } from "@/lib/site";
import { ShieldCheck, Stethoscope, BookOpen, HeartHandshake, Lock, Clock } from "lucide-react";

export const metadata = { title: "About" };

const BADGES = [
  { icon: ShieldCheck, label: "CPR Certified" },
  { icon: Stethoscope, label: "Medical Assisting" },
  { icon: BookOpen, label: "Medical Terminology" },
  { icon: HeartHandshake, label: "Bereavement Care" },
  { icon: Lock, label: "HIPAA-aware Care" },
  { icon: Clock, label: "25+ Years Experience" },
];

export default function AboutPage() {
  return (
    <>
      <Section title="Care guided by experience and heart.">
        <div className="grid gap-8 md:grid-cols-[1fr,420px] items-start">
          {/* LEFT: story */}
          <div>
            <div className="flex items-start gap-3">
              <Image
                src="/robin/robin-headshot.jpg"
                width={56}
                height={56}
                alt="Robin Miller headshot"
                className="w-14 h-14 rounded-full object-cover"
              />
              <p className="text-gray-700 leading-relaxed">
                Hi, I’m <span className="font-medium">Robin Miller</span>. For over{" "}
                <span className="font-medium">25 years</span>, I’ve supported seniors and their
                families through admissions coordination, medical records, hospice care, and
                patient-family advocacy. I started {SITE.name} to offer something simple and rare:
                one-on-one support you can trust, delivered with kindness and respect.
              </p>
            </div>

            <p className="mt-4 text-gray-700 leading-relaxed">
              When we work together, you’re not dealing with a big agency, you’re working with me. I
              listen first, learn what matters most to your family, and build a clear, realistic
              plan that keeps your loved one safe, comfortable, and connected.
            </p>

            <p className="mt-3 text-gray-700 leading-relaxed">
              My promise is steady, respectful care and open communication, so you always know what’s
              happening and why.
            </p>

            {/* Badges / creds */}
            <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              {BADGES.map(({ icon: Icon, label }) => (
                <li key={label} className="inline-flex items-center gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#167a7a]/10">
                    <Icon className="text-[#167a7a]" size={18} aria-hidden="true" />
                  </span>
                  <span className="font-medium">{label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: image */}
          <div className="relative h-64 md:h-[340px] rounded-3xl border bg-white/60 shadow-soft overflow-hidden">
            <Image
              src="/robin/hero-main.jpg"
              alt="Robin with a client in a warm, welcoming setting"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </Section>

      {/* Two info cards */}
      <Section>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl2 bg-teal/10 p-5 shadow-soft border border-teal/10">
            <div className="font-semibold mb-2">Safeguards I personally uphold</div>
            <ul className="list-disc ml-5 text-gray-700 leading-7">
              <li>I vet every caregiver for background, character, and fit.</li>
              <li>You always approve the caregiver. No surprises.</li>
              <li>I check in regularly and welcome feedback.</li>
              <li>I adjust the care plan as needs change.</li>
            </ul>
          </div>
          <div className="rounded-xl2 bg-teal/10 p-5 shadow-soft border border-teal/10">
            <div className="font-semibold mb-2">How we’ll work together</div>
            <ul className="list-disc ml-5 text-gray-700 leading-7">
              <li>I listen deeply to understand your needs.</li>
              <li>We co-create a simple, personalized care plan.</li>
              <li>I communicate clearly and promptly.</li>
              <li>We evolve the plan at your pace.</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Pull-quote */}
      <Section>
        <figure className="rounded-xl2 border border-teal/20 bg-grey/60 p-6 shadow-soft">
          <blockquote className="text-gray-800 italic text-sm leading-relaxed">
            “Robin felt like family from day one. Gentle, reliable, and always there when we needed her.”
          </blockquote>
          <figcaption className="mt-3 text-sm text-gray-600">J.S., Denver, CO</figcaption>
        </figure>

        <p className="mt-4 text-sm text-gray-600">
          Based in {SITE.city}, {SITE.state} ({SITE.zip}). Serving Denver Metro Areas—ask about your
          location.
        </p>

        <div className="mt-6">
          <CTAButtons />
        </div>
      </Section>
    </>
  );
}
