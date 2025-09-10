// components/TrustBar.jsx
import { ShieldCheck, HeartHandshake, Clock } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "CPR Certified" },
  { icon: HeartHandshake, label: "HIPAA-aware Care" },
  { icon: Clock, label: "Flexible Hours, 7 Days" },
];

export default function TrustBar() {
  return (
    <section aria-label="Trust badges" className="bg-[#fff9f0]">
      <div className="mx-auto max-w-6xl px-4 py-3 sm:py-4">
        <ul className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          {items.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-2 text-sm sm:text-base">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/5">
                <Icon size={18} aria-hidden="true" />
              </span>
              <span className="font-medium">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
