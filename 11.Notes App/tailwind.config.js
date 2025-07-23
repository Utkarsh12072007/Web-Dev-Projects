/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-blue-400',
    'bg-green-400',
    'bg-orange-400',
    'bg-red-300',
    'bg-purple-400',
    // Add more if needed
  ],
  theme: {
    extend: {
      fontFamily:{
          montserrat : ['Montserrat','sans-serif'],
      }
    },
  },
  plugins: [],
}

