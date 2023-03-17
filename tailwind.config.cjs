/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "icon-dollar": "URL('icon-dollar.svg')",
        "icon-person": "URL('icon-person.svg')",
      },
      fontFamily: {
        "space-mono": ["Space Mono", "sans-serif"],
      },
      colors: {
        primary: "#26c0ab",
        neutral: {
          100: "#f3f8fb",
          200: "#c4e4e7",
          300: "#788a8a",
          400: "#28bfac",
          500: "#00474b",
        },
      },
    },
  },
  plugins: [],
};
