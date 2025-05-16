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
        // 'primary': '#890C25',
        // 'secondary': '#CCCCCC',
        // "dark-primary": "#0E0E0E",
        // "dark-secondary": "#121212",
        // "background-Primary": "#F9F8FE"
        "primaryText": '#890C25',
        "primaryBg": '#890C25',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#890C25",
          secondary: "#CCCCCC",
        },
      },
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#0E0E0E",
          secondary: "#121212",
          "text-gray-700":"#FFFFFF"
        },
      },
    ],
  },
};
