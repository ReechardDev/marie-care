export default function NotFound() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl md:text-3xl font-semibold">Page not found</h1>
      <p className="mt-2 text-gray-600">
        The page you’re looking for doesn’t exist or has moved.
      </p>

      <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
        <a href="/" className="rounded-xl2 border px-4 py-3">Go home</a>
        <a href="/contact" className="rounded-xl2 bg-teal text-white px-4 py-3">
          Book a free consult
        </a>
      </div>

      <p className="mt-6 text-sm text-gray-500">
        If you think this is a mistake, please contact us.
      </p>
    </div>
  );
}
