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
        // Legacy tokens (kept for backwards compatibility)
        teal: { DEFAULT: "#167a7a" }, // brand teal (legacy alias)
        card: "#ffffff",
        cream: "#fafaf7",
        ink: "#0f172a",

        // New brand namespace (preferred going forward)
        brand: {
          teal: "#167a7a",
          cream: "#fff9f0",
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
