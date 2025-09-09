// app/testimonials/page.js
import Section from "@/components/Section";
import Testimonials from "@/components/Testimonials";

export const metadata = {
  title: "Testimonials • Robin’s Touch Senior Care",
  description:
    "What families say about working with Robin Miller — gentle, reliable, and personal one-on-one support in Denver.",
};

const TESTIMONIALS = [
  { quote: "Robin felt like family from day one—gentle, reliable, and always there when we needed her.", author: "J.S.", location: "Denver, CO" },
  { quote: "Clear communication and so much heart. Our mom is safer and happier at home.", author: "M.L.", location: "Aurora, CO" },
  { quote: "Professional, kind, and patient. We trust Robin completely.", author: "A.K.", location: "Lakewood, CO" },
];

export default function TestimonialsPage() {
  return (
    <Section title="Kind words from families">
      <p className="mb-6 max-w-2xl text-gray-700">
        A few notes shared by families I’ve supported. Want to speak to a reference? I’m happy to connect you.
      </p>
      <Testimonials items={TESTIMONIALS} />
      <a href="/contact" className="mt-8 inline-block rounded-xl2 bg-teal text-white px-4 py-3">
        Book a free consult
      </a>
    </Section>
  );
}
