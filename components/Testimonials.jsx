// components/Testimonials.jsx
"use client";
import Image from "next/image";

export default function Testimonials({ items = [] }) {
  if (!items.length) return null;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((t, i) => (
        <figure
          key={i}
          className="rounded-2xl bg-white/70 p-6 shadow-soft border flex flex-col items-center text-center"
        >
          {t.image && (
            <Image
              src={t.image}
              alt={t.author}
              width={80}
              height={80}
              className="w-20 h-20 rounded-full object-cover mb-4"
            />
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
  );
}
