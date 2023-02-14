const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        '4xl': '5rem',
      },
      colors: {
        primary: colors.green,
      },
    },
  },
  plugins: [],
}
