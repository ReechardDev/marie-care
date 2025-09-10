// components/MobileStickyCallBar.jsx
export default function MobileStickyCallBar() {
  return (
    <div className="fixed bottom-3 inset-x-3 z-[55] md:hidden">
      <div className="flex gap-3 rounded-2xl bg-white/90 p-2 shadow-lg backdrop-blur">
        <a href="tel:+17206908765" className="flex-1 rounded-xl bg-[#167a7a] px-4 py-3 text-center text-white font-medium">
          📞 Call
        </a>
        <a
          href="https://wa.me/17206908765"
          className="flex-1 rounded-xl border px-4 py-3 text-center font-medium"
          aria-label="WhatsApp"
        >
          💬 WhatsApp
        </a>
      </div>
    </div>
  );
}
