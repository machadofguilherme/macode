/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'eighty': '80vh',
        'eighty-six': '86vh',
      }
    },
  },
  plugins: [],
}