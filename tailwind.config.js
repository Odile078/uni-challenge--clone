// tailwind.config.js
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: {
          DEFAULT: "#004191",
        },
      },
      fontFamily: {
        sans: ["var(--font-univers)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
