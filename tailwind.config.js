/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {},
      fontFamily: {
        serif: [
          "Noto Serif",
          "Georgia",
          "Cambria" /* ... other fallback fonts */,
        ],
      },
    },
  },
  plugins: [import("tailwindcss-animate")], // Use import instead of require
};
