// components/Footer.jsx
import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-teal/10 bg-brand-cream/70">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-4">
        <div>
          <div className="font-semibold text-[#167a7a]">{SITE.name}</div>
          <div className="mt-2 text-sm text-neutral-700">
            Phone:{" "}
            <a href={SITE.phoneLink} className="text-teal underline hover:no-underline">
              {SITE.phoneDisplay}
            </a>
            <br />
            Email:{" "}
            <a href={`mailto:${SITE.email}`} className="text-teal underline hover:no-underline">
              {SITE.email}
            </a>
            <br />
            Address: {SITE.city}, {SITE.state} {SITE.zip}
            <br />
            Hours: {SITE.hours}
          </div>
        </div>

        <nav className="text-sm">
          <div className="font-semibold">Quick Links</div>
          <ul className="mt-2 space-y-1">
            <li><a className="text-teal underline hover:no-underline" href="/services">Services</a></li>
            <li><a className="text-teal underline hover:no-underline" href="/care-plans">Care Plans & Pricing</a></li>
            <li><a className="text-teal underline hover:no-underline" href="/about">About</a></li>
            <li><a className="text-teal underline hover:no-underline" href="/testimonials">Testimonials</a></li>
            <li><a className="text-teal underline hover:no-underline" href="/contact">Contact</a></li>
          </ul>
        </nav>

        <div className="text-sm">
          <div className="font-semibold">Connect</div>
          <ul className="mt-2 space-y-1">
            <li>
              <a href={SITE.phoneLink} className="text-teal underline hover:no-underline">Call us</a>
            </li>
            <li>
              <a href={SITE.whatsappLink} target="_blank" rel="noopener" className="text-teal underline hover:no-underline">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="text-teal underline hover:no-underline">Email</a>
            </li>
          </ul>
        </div>

        <div className="text-sm">
          <div className="font-semibold">Service Area</div>
          <p className="mt-2 text-neutral-700">
            Denver Metro and nearby communities. Ask about your location.
          </p>
        </div>
      </div>

      <div className="border-t border-teal/10">
        <div className="mx-auto max-w-6xl px-4 py-4 text-xs text-neutral-600">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
