/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      screens:{
        'very-sm' : '300px',
        'xtra-sm' : '548px',
        'small': '636px',
        'mid' : '890px',
        'normal':'1240px'
      }
    },
  },
  plugins: [],
}