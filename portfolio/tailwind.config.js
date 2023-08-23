/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        pstart: ["Press-Start-2P"],
        pone: ["Passion One", "cursive"],
      },
      colors: {
        cinza: "#1E1E1E",
        roxo: "#5F2FE7",
      },
    },
  },
  plugins: [],
};
