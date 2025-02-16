// custom theme exported from
import customTheme from "./theme.js";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: customTheme.colors, // Use colors from theme.js
      fontFamily: {
        iranYekan: ["IRANYekan", "sans-serif"],
      }, // Use font sizes from theme.js
      fontSize: customTheme.fontSize,
    },
  },
  plugins: [],
};
