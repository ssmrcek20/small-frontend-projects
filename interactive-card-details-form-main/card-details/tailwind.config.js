/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "Secondary": "hsl(270, 3%, 80%)",
        "Secondary-darker": "hsl(279, 6%, 70%)",
        "Primary": "hsl(278, 68%, 11%)",

        "Error": "hsl(0, 100%, 66%)",
        "Gradient-start": "hsl(249, 99%, 64%)",
        "Gradient-end": "hsl(278, 94%, 30%)",
      },
      fontFamily: {
        "font-family": "Space Grotesk, sans-serif",
      },
      fontSize: {
        "regular-size": "1.125rem"
      },
      screens: {
        '2md': '900px',
        '2lg': '1200px'
      },
      boxShadow: {
        'xl-my': '0 20px 25px -5px rgb(0 0 0 / 0.3), 0 8px 10px -6px rgb(0 0 0 / 0.3)',
      }
    },
  },
  plugins: [],
}

