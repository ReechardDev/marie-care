/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mint: "#b8f2e3",
        teal: "#167a7a",
        gold: "#d4af37",
        ink: "#1f2937",
        card: "#f5f5f5",
        cream: "rgb(255 247 237 / 1)",
      },
      borderRadius: { xl2: "1.25rem" },
      boxShadow: { soft: "0 6px 24px rgba(0,0,0,0.06)" },
    },
  },
  plugins: [],
};
