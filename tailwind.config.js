/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Almarai", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-primeui")],
};
