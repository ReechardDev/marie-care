// components/ServiceAreaMap.jsx
export default function ServiceAreaMap() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <h2 className="text-xl font-semibold">Service Area</h2>
      <p className="mt-1 text-sm text-neutral-700">Greater Denver — contact for nearby areas.</p>
      <div className="mt-4 overflow-hidden rounded-2xl border">
        <iframe
          title="Denver Service Area"
          className="h-64 w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=Denver,CO&output=embed"
        />
      </div>
    </section>
  );
}
