/** @type {import('tailwindcss').Config} */
import scrollbar from "tailwind-scrollbar";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"]
      }
    }
  },
  plugins: [
    scrollbar({ nocompatible: true }), // Adds custom scrollbar styles
    require("@tailwindcss/line-clamp")
  ]
};
