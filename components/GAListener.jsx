// components/GAListener.jsx
"use client";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const GA_MEASUREMENT_ID = "G-BRVFV0KG6S";

export default function GAListener() {
  const pathname = usePathname();
  const search = useSearchParams();

  useEffect(() => {
    if (typeof window === "undefined" || !window.gtag) return;
    const path = pathname + (search?.toString() ? `?${search}` : "");
    window.gtag("event", "page_view", {
      page_title: document.title,
      page_location: window.location.href,
      page_path: path,
      send_to: GA_MEASUREMENT_ID,
    });
  }, [pathname, search]);

  return null;
}
