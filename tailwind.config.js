/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'peach' : '#FFDAB9'
      },
      font:{
        'JuliasFavoritt' : ['"Open Sans"']
      }
    },
  },
  plugins: [],
}
