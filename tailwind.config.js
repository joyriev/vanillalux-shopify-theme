/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./templates/*.liquid",
    "./sections/*.liquid",
    "./layout/*.liquid",
    "./snippets/*.liquid",
  ],
  theme: {
    extend: {
      fontFamily: {
        recoleta: ["Recoleta", "serif"],
        circle: ["CircularStd", "sans-serif"],
      },
      colors: {
        midnight: "#222e4f",
        saffron: "#e9735e",
        skyblue: "#a4daf6",
        warmAmber: "#b47342",
      },
    },
  },
  plugins: [],
};
