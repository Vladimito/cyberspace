/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        'max-purple' : '#733C79',
        'lav-floral' : '#A390E4',
      },
    },
  },
  plugins: [],
}