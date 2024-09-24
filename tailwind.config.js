/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center: true
      },
      fontFamily: {
        sofadi: ["Sofadi One", 'system-ui'],
        inter: ["inter", 'sans-serif']
      }
    },
  },
  plugins: [],
}