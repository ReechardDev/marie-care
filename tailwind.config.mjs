// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
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
        teal: { DEFAULT: "#167a7a" }, // brand teal
        card: "#ffffff",
        cream: "#fafaf7",
        ink: "#0f172a",
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
