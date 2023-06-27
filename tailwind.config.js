/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "Home": "url('/src/assets/home.png  ')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
    fontFamily: {
      custom: ["Josefin Sans", "sans-serif"],
    },
  },
  plugins: [],
};
