// app/contact/page.js
import Section from "@/components/Section";
import ServiceAreaMap from "@/components/ServiceAreaMap";
import { SITE } from "@/lib/site";

export const metadata = { title: "Contact" };

export default function ContactPage({ searchParams }) {
  const sent = searchParams?.sent === "1";

  return (
    <>
      <Section title="Book a free consult">
        {/* Intro copy centered and width-limited */}
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-700">
            Tell us a little about your needs. I’ll respond the same day to schedule a quick consult.
            Please don’t share medical details online.
          </p>

          {sent && (
            <div className="mt-4 inline-block text-left rounded-xl2 bg-mint/40 border px-4 py-3">
              Thanks! I’ll contact you shortly.
            </div>
          )}
        </div>

        {/* Form centered (CTA unchanged) */}
        <form
          action="/api/contact"
          method="POST"
          className="mt-6 grid gap-4 max-w-xl mx-auto"
        >
          {/* Honeypot (spam trap) */}
          <input
            type="text"
            name="company"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <input
            required
            name="name"
            placeholder="Full name"
            className="border rounded-xl2 px-4 py-3"
            autoComplete="name"
            aria-label="Full name"
          />
          <input
            required
            name="phone"
            placeholder="Phone"
            inputMode="tel"
            className="border rounded-xl2 px-4 py-3"
            autoComplete="tel"
            aria-label="Phone"
          />
          <input
            name="email"
            type="email"
            placeholder="Email (optional)"
            className="border rounded-xl2 px-4 py-3"
            autoComplete="email"
            aria-label="Email (optional)"
          />
          <select
            name="time"
            className="border rounded-xl2 px-4 py-3"
            aria-label="Preferred contact time"
          >
            <option value="">Preferred contact time</option>
            <option>Morning</option>
            <option>Afternoon</option>
            <option>Evening</option>
          </select>
          <textarea
            name="message"
            rows={4}
            placeholder="Short message (optional)"
            className="border rounded-xl2 px-4 py-3"
            aria-label="Message (optional)"
          />
          <p className="text-xs text-gray-500 text-center">We’ll never share your info.</p>

          {/* CTA kept exactly as-is */}
          <button type="submit" className="rounded-xl2 bg-teal text-white px-4 py-3">
            Send
          </button>
        </form>

        {/* Support tiles centered (wider so email fits one line) */}
<div className="mt-10 grid gap-4 md:grid-cols-3 max-w-4xl mx-auto">
  <div className="rounded-xl2 bg-card p-5 shadow-soft text-center">
    <div className="font-semibold">Call</div>
    <a href={SITE.phoneLink} className="text-teal underline whitespace-nowrap">
      {SITE.phoneDisplay}
    </a>
  </div>

  <div className="rounded-xl2 bg-card p-5 shadow-soft text-center">
    <div className="font-semibold">WhatsApp</div>
    <a
      href={SITE.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="text-teal underline whitespace-nowrap"
    >
      Chat with us
    </a>
  </div>

  <div className="rounded-xl2 bg-card p-5 shadow-soft text-center">
    <div className="font-semibold">Email</div>
    <a
      href={`mailto:${SITE.email}`}
      className="text-teal underline whitespace-nowrap"
      title={SITE.email}
    >
      {SITE.email}
    </a>
  </div>
</div>


        {/* Business details centered */}
        <div className="mt-6 text-gray-700 max-w-2xl mx-auto text-center space-y-1">
          <div>
            <span className="font-semibold">Hours:</span> {SITE.hours}
          </div>
          <div>
            <span className="font-semibold">Address:</span> {SITE.addressLine}
          </div>
          <div>
            <span className="font-semibold">Service area:</span> Denver Metro Areas
          </div>
        </div>

        {SITE.calendlyUrl && (
          <div className="mt-6 text-center">
            <a
              href={SITE.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal underline"
            >
              Schedule via Calendly
            </a>
          </div>
        )}
      </Section>

      <ServiceAreaMap />
    </>
  );
}
