import Section from "@/components/Section";
import { SITE } from "@/lib/site";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <Section title="Book a free consult">
        <p className="text-gray-700 max-w-2xl">
          Tell us a little about your needs. We’ll respond the same day to schedule a quick consult.
          Please don’t share medical details online.
        </p>

        <form className="mt-6 grid gap-4 max-w-xl">
          <input required name="name" placeholder="Full name" className="border rounded-xl2 px-4 py-3" />
          <input required name="phone" placeholder="Phone" inputMode="tel" className="border rounded-xl2 px-4 py-3" />
          <input name="email" type="email" placeholder="Email (optional)" className="border rounded-xl2 px-4 py-3" />
          <select name="time" className="border rounded-xl2 px-4 py-3">
            <option value="">Preferred contact time</option>
            <option>Morning</option>
            <option>Afternoon</option>
            <option>Evening</option>
          </select>
          <textarea name="message" rows={4} placeholder="Short message (optional)" className="border rounded-xl2 px-4 py-3" />
          <button type="submit" className="rounded-xl2 bg-teal text-white px-4 py-3">Send</button>
        </form>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl2 bg-card p-5 shadow-soft">
            <div className="font-semibold">Call</div>
            <a href={SITE.phoneLink} className="text-teal underline">{SITE.phoneDisplay}</a>
          </div>
          <div className="rounded-xl2 bg-card p-5 shadow-soft">
            <div className="font-semibold">WhatsApp</div>
            <a href={SITE.whatsappLink} target="_blank" className="text-teal underline">Chat with us</a>
          </div>
          <div className="rounded-xl2 bg-card p-5 shadow-soft">
            <div className="font-semibold">Email</div>
            <a href={`mailto:${SITE.email}`} className="text-teal underline">{SITE.email}</a>
          </div>
        </div>

        <div className="mt-6 text-gray-700">
          <div><span className="font-semibold">Hours:</span> {SITE.hours}</div>
          <div><span className="font-semibold">Address:</span> {SITE.addressLine}</div>
          <div><span className="font-semibold">Service area:</span> Denver and nearby areas</div>
        </div>

        {SITE.calendlyUrl && (
          <div className="mt-6">
            <a href={SITE.calendlyUrl} target="_blank" className="text-teal underline">Schedule via Calendly</a>
          </div>
        )}
      </Section>
    </>
  );
}
