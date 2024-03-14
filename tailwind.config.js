/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '300': '300px',
      },
      height: {
        '270': '270px',
      },
    },
  },
  plugins: [],
}

