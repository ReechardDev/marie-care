export default function Section({ title, subtitle, children, className = "" }) {
  return (
    <section className={`px-4 py-10 ${className}`}>
      <div className="mx-auto max-w-6xl">
        {title && <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>}
        {subtitle && <p className="mt-2 text-base text-gray-600">{subtitle}</p>}
        <div className={title || subtitle ? "mt-6" : ""}>{children}</div>
      </div>
    </section>
  );
}
