/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        shadyBlack: "#202327",
        BlueBtns: "#16a3b7",
        ShadyWhite: "#f6fffa",
        RedBtns: "#dc3445",
      },
    },
  },
  plugins: [],
};
