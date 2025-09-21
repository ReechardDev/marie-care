// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ---- Legacy tokens (keep for backwards compatibility) ----
        teal: { DEFAULT: "#167a7a" }, // legacy alias for brand teal
        card: "#ffffff",
        cream: "#fafaf7",
        ink: "#0f172a",

        // ---- Brand namespace (use going forward) ----
        brand: {
          teal: "#167a7a",           // primary brand teal
          tealLight: "#b8f2e3",      // light teal (card hover / highlights)
          cream: "#fff9f0",          // general soft cream surface
          creamBand: "#fff1da",      // trust bar / pill strip under hero
        },

        // ---- Semantic helpers ----
        surface: "#ffffff",
        border: "#e5e7eb",
        text: {
          heading: "#0f172a",        // near-black
          body: "#374151",           // gray-700
        },
        success: {
          outline: "#10b981",        // emerald outline (WhatsApp etc.)
        },
      },

      boxShadow: {
        soft: "0 8px 24px rgba(0,0,0,0.06)", // shadow-soft
      },
      borderRadius: {
        xl2: "1rem", // rounded-xl2
      },
    },
  },
  plugins: [],
};
