/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {},
    screens: {
      large: "1512px",

      mid: "834px",
      small: "390px",
    },
  },
  plugins: [require("daisyui")],
};
