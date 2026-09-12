/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "pink-dust": "#FF79B0",
        "pink-glow": "#FFB3D4",
        gold: "#C4A882",
        "gold-light": "#E8D9C4",
      },
    },
  },
  plugins: [],
};
