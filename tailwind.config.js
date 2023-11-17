/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      white: '#FFF',
      black: '#000',
      gray: '#777777',
      'light-gray': '#F0F0F0',
      orange: '#ff9230',
      blue: '#0084FF',
    },
  },
  plugins: [],
}
