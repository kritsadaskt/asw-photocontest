/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'db' : ['DB Heavent', 'sans-serif'],
      'gotham' : ['Gotham Bold', 'sans-serif'],
    },
    extend: {
      gridTemplateRows: {
        '8': 'repeat(8, minmax(0, 1fr))',
      },
      gridRow: {
        'span-2': 'span 2 / span 2',
      }
    },
  },
  plugins: [
    require('@headlessui/tailwindcss'),
  ],
}
