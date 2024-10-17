
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {      
      maxWidth: {
      container: '1170px',
    },
    fontFamily: {
      poppins: ["Poppins", 'sans-serif'],
      inter: [ "Inter", 'sans-serif'],
 
    },
    colors: {
       headText:"#FAFAFA",
       headColor: "#000000",
       searchInput:"#F5F5F5",
       titleColor:"#DB4444",
    },
  },
  },
  plugins: [],
}