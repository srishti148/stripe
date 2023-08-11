/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "cursive"],
        Poppins: ["Poppins", "cursive"],
      },
    },
  },
  plugins: [],
};
