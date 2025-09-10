// app/testimonials/page.js
import Image from "next/image";
import Section from "@/components/Section";
import { TESTIMONIALS } from "@/lib/content";

export const metadata = {
  title: "Testimonials",
  description:
    "Real words from Denver families about working with Robin’s Touch Senior Care.",
};

export default function TestimonialsPage() {
  return (
    <Section title="What families say">
      <p className="max-w-2xl text-gray-700">
        A few notes from families I’ve supported across Denver. Thank you for the trust.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <figure
            key={`${t.author}-${i}`}
            className="rounded-2xl border border-teal/20 bg-white/80 p-6 shadow-soft hover:shadow-md hover:-translate-y-0.5 transition"
          >
            {t.image ? (
              <Image
                src={t.image}
                alt={`${t.author} — ${t.location}`}
                width={64}
                height={64}
                className="w-16 h-16 rounded-full object-cover mb-3"
              />
            ) : (
              <div className="w-16 h-16 rounded-full bg-black/5 mb-3" aria-hidden />
            )}
            <blockquote className="text-gray-800 italic text-sm leading-relaxed">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-3 text-sm text-gray-600">
              — {t.author}, {t.location}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
