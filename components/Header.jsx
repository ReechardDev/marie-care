import Link from "next/link";
import { SITE } from "@/lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg">{SITE.name}</Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/services" className="hover:underline">Services</Link>
          <Link href="/care-plans" className="hover:underline">Care Plans</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="rounded-full bg-teal text-white px-4 py-2">Book consult</Link>
        </nav>
      </div>
    </header>
  );
}
