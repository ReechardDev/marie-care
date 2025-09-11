// components/BrandWordmark.jsx
export default function BrandWordmark({ variant = "light", className = "" }) {
  const color = variant === "dark" ? "text-white" : "text-[#167a7a]";
  return (
    <div className={`leading-tight ${color} ${className}`}>
      <div className="font-extrabold tracking-tight text-base sm:text-lg">
        Robin’s Touch
      </div>
      <div className="font-medium text-[11px] sm:text-xs opacity-90">
        Senior Care
      </div>
    </div>
  );
}
