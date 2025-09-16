// app/testimonials/page.js
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import { TESTIMONIALS } from "@/lib/content";

export const metadata = {
  title: "Testimonials • Robin’s Touch Senior Care",
  description:
    "Notes from Denver families who’ve worked with Robin’s Touch Senior Care.",
};

// Canonical avatar files we actually have / want to use
const AVATAR_FILES = {
  "J.S., Denver, CO": "/robin/testimonials/testimonial-js-denver.jpg",
  "M.L., Cherry Creek, CO": "/robin/testimonials/testimonial-ml-cherry-creek.jpg",
  "K.R., Highlands Ranch, CO": "/robin/testimonials/testimonial-kr-highlands-ranch.jpg",
  "T.B., Aurora, CO": "/robin/testimonials/testimonial-tb-aurora.jpg",
  "N.P., Lakewood, CO": "/robin/testimonials/testimonial-np-lakewood.jpg",
};

export default function TestimonialsPage() {
  const items = (TESTIMONIALS ?? []).map((t) => {
    const alt = `${t.author}, ${t.location}`;
    // Prefer our canonical filenames; only allow t.image if it already lives in /robin/testimonials/
    const image =
      AVATAR_FILES[alt] ??
      (t.image && t.image.startsWith("/robin/testimonials/") ? t.image : null);

    return { ...t, alt, image };
  });

  // Add a CTA tile as the last item to balance the grid
  const gridItems = [...items, { cta: true }];

  return (
    <Section title="What families say">
      <p className="max-w-2xl text-gray-700">
        A few notes from families I’ve supported across Denver. Thank you for the trust.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {gridItems.map((t, i) =>
          t.cta ? (
            <div
              key={`cta-${i}`}
              className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Families say it best.</h3>
                <p className="mt-2 text-gray-700">
                  Want to see if I’m a fit? Book a free consult.
                </p>
              </div>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center justify-center rounded-xl2 bg-teal px-4 py-2.5 text-white shadow-sm hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
              >
                Book a free consult
              </Link>
            </div>
          ) : (
            <figure
              key={`${t.author}-${i}`}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                {t.image ? (
                  <Image
                    src={t.image}
                    alt={t.alt}
                    width={80}
                    height={80}
                    className="h-16 w-16 rounded-full object-cover"
                    priority={i < 2}
                  />
                ) : (
                  <div className="h-16 w-16 rounded-full bg-black/5" aria-hidden />
                )}
                <blockquote className="text-gray-800 italic leading-relaxed">
                  “{t.quote}”
                </blockquote>
              </div>
              <figcaption className="mt-3 text-sm text-gray-600">
                — {t.author}, {t.location}
              </figcaption>
            </figure>
          )
        )}
      </div>
    </Section>
  );
}
