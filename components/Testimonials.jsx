// components/Testimonials.jsx
"use client";
export default function Testimonials({ items = [] }) {
  if (!items.length) return null;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((t, i) => (
        <figure key={i} className="rounded-2xl bg-white/70 p-5 shadow-soft border">
          <div aria-hidden className="text-3xl leading-none">“</div>
          <blockquote className="mt-2 text-gray-800 italic">{t.quote}</blockquote>
          <figcaption className="mt-3 text-sm text-gray-600">
            — {t.author}{t.location ? `, ${t.location}` : ""}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
