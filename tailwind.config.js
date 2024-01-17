/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-gray": "#898989",
        "custom-black": "#282B2F",
        "custom-orange": "#EA5644",
      },
    },
  },
  plugins: [],
};
