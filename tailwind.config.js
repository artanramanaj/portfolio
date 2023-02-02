/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "primary-green":"#00CE79",
        "secondary-green":"#20B46A",
        "primary-grey":"#C1C1C1",
        "primary-black":"#1D1D1D"
      }
    },
  },
  plugins: [],
}
