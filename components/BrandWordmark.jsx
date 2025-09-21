// components/BrandWordmark.jsx
import { SITE } from "@/lib/site";

export default function BrandWordmark({ className = "" }) {
  // If SITE.name is "Robin’s Touch Senior Care", show only "Robin’s Touch" on the top line.
  const rawName = SITE?.name ?? "Robin’s Touch Senior Care";
  const displayName = rawName.replace(/Senior Care/i, "").trim();
  const tagline = SITE?.tagline ?? "Senior Care";

  return (
    <div className={`flex items-center gap-2 text-white ${className}`}>
      {/* small dot/mark */}
      <span aria-hidden="true" className="h-3 w-3 rounded-full bg-white/95 ring-2 ring-white/30" />
      {/* stacked wordmark */}
      <div className="leading-tight">
        <div className="text-base md:text-lg font-semibold tracking-tight">
          {displayName || "Robin’s Touch"}
        </div>
        <div className="text-[11px] md:text-xs text-white/85 -mt-0.5">
          {tagline}
        </div>
      </div>
    </div>
  );
}
