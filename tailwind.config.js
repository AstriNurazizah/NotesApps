/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      lineClamp: {
        6: '6', 
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

