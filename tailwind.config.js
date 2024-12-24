/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "dancing-Script": '"Dancing Script", cursive',
        inter: '"Inter", sans-serif',
        cinzel: '"Cinzel", serif',
        Righteous: '"Righteous", serif',
        "Madimi-One": '"Madimi One", serif'
      },
      colors: {
        'primary': '#890C25',
        "background-Primary": "#F9F8FE"
      }
    },
  },
  plugins: [require("daisyui")],
};
