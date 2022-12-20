/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#C4C4C4",
        primary: "#DE3C3F",
        dark: "#171717",
        "light-text": "#E3E6E8",
        gray: "#DCE0E3",
        "dark-gray": "#222222",
        "footer-gray": "#808080",
      },
    },
  },
  plugins: [],
};
