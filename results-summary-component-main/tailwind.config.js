/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        'Light-slate-blue': '#7857ff',
        'Light-royal-blue': '#2e2be9',

        'Violet-blue': '#4e21ca',
        'Persian-blue': '#2421ca'
      },
    },
  },
  plugins: [],
}

