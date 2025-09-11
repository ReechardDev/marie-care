// components/GAListener.jsx
"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const GA_MEASUREMENT_ID = "G-BRVFV0KG6S";

export default function GAListener() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined" || !window.gtag) return;
    window.gtag("event", "page_view", {
      page_title: document.title,
      page_location: window.location.href,
      page_path: pathname,
      send_to: GA_MEASUREMENT_ID,
    });
  }, [pathname]);

  return null;
}
