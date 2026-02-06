/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#13ec6a",
        "primary-dark": "#0da84b",
        "background-light": "#f6f8f7",
        "background-dark": "#102217",
        "text-main": "#111814",
        "text-secondary": "#618971",
        "surface-light": "#ffffff",
        "surface-dark": "#1c2e24",
      },
      fontFamily: {
        "display": ["Public Sans", "sans-serif"],
        "body": ["Noto Sans", "sans-serif"],
      },
      boxShadow: {
        'glow': '0 0 15px rgba(19, 236, 106, 0.3)',
      }
    },
  },
  plugins: [],
}