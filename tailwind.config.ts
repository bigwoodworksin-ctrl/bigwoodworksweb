import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#211b17",
        bark: "#5a3424",
        walnut: "#7a4a31",
        cedar: "#a4653f",
        linen: "#f4efe7",
        paper: "#fffaf2",
        sage: "#677a5c",
        charcoal: "#2f2b28",
      },
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 70px rgba(33, 27, 23, 0.14)",
        lift: "0 18px 42px rgba(90, 52, 36, 0.18)",
      },
    },
  },
  plugins: [],
} satisfies Config;
