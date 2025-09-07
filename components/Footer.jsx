import Link from "next/link";
import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t bg-card mt-10">
      <div className="mx-auto max-w-6xl px-4 py-8 grid gap-6 md:grid-cols-3">
        <div>
          <div className="font-semibold">{SITE.name}</div>
          <div className="text-sm mt-2">Phone: {SITE.phoneDisplay}</div>
          <div className="text-sm">Email: {SITE.email}</div>
          <div className="text-sm">Address: {SITE.addressLine}</div>
          <div className="text-sm">Hours: {SITE.hours}</div>
        </div>
        <div>
          <div className="font-semibold">Quick Links</div>
          <ul className="mt-2 space-y-1 text-sm">
            <li><Link href="/services" className="hover:underline">Services</Link></li>
            <li><Link href="/care-plans" className="hover:underline">Care Plans & Pricing</Link></li>
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Connect</div>
          <div className="mt-2 flex flex-col gap-2 text-sm">
            <a href={SITE.phoneLink} className="hover:underline">Call us</a>
            <a href={SITE.whatsappLink} target="_blank" className="hover:underline">WhatsApp</a>
            <a href={`mailto:${SITE.email}`} className="hover:underline">Email</a>
          </div>
        </div>
      </div>
      <div className="text-xs text-center py-4 border-t">© {new Date().getFullYear()} {SITE.name}</div>
    </footer>
  );
}
