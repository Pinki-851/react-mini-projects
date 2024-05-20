/** @type {import('tailwindcss').Config} */
export default {
content: [
  "./src/App.jsx",
  "./src/main.jsx",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/*.{js,ts,jsx,tsx,mdx}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"


  ], 
   theme: {
    extend: {},
  },
  plugins: [],
}

