/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#26c0ab',
        'neutral': {
          100: '#F4FAFA',
          200: '#C5E4E7',
          300: '#7f9c9f',
          400: '#5E7A7D',
          500: '#00494d'
        }
      }
    },
  },
  plugins: [],
}
