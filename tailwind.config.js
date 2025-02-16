// custom theme exported from
import customTheme from "./theme.js";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Use data from theme.js
      colors: customTheme.colors,
      fontFamily: customTheme.fontFamily.iranyekanxfanum,
      fontSize: customTheme.fontSize,
      borderRadius: customTheme.borderRadius,
      boxShadow: customTheme.boxShadow,
    },
  },
  plugins: [],
};
