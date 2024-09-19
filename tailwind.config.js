/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: "selector",
  theme: {
    container: {
      center: true,
      padding: "12rem",
    },
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "gega-red": "#BC1A45",
        "gega-melon": "#FFD369",
        "gega-grey": "#DDDDDD",
        "gega-white": "#F7F7F7",
      },
      spacing: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};
