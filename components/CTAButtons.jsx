import { SITE } from "@/lib/site";

export default function CTAButtons({ compact = false }) {
  const base = compact ? "px-3 py-2 text-sm" : "px-4 py-3";
  return (
    <div className="mt-4 flex gap-3 flex-wrap">
      <a href="/contact" className={`rounded-xl2 bg-teal text-white ${base}`}>Book a free consult</a>
      <a href={SITE.phoneLink} className={`rounded-xl2 border ${base}`}>Call</a>
      <a href={SITE.whatsappLink} target="_blank" className={`rounded-xl2 border ${base}`}>WhatsApp</a>
    </div>
  );
}
