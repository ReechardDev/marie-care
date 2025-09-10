// components/Modal.jsx
"use client";
import { useEffect } from "react";

export default function Modal({ open, onClose, title, children }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} aria-hidden="true" />
      <div role="dialog" aria-modal="true" className="mx-auto mt-24 max-w-lg rounded-2xl bg-white p-6 shadow-xl">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="mt-3 text-sm text-neutral-700">{children}</div>
        <div className="mt-5 text-right">
          <button onClick={onClose} className="rounded-xl border px-4 py-2 hover:bg-neutral-50">Close</button>
        </div>
      </div>
    </div>
  );
}
