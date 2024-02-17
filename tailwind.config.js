/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "custom": "0px 20px 35px 0px rgba(167, 167, 167, 0.25)",
        "card-shadow": "0px 29px 44px 0px rgba(150, 150, 150, 0.25)"
      },
      fontFamily: {
        "openSans":["Open Sans", "sans-serif"],
        "roboto":["Roboto", "sans-serif"],
        "yellowtail":["Yellowtail"],
        "inter":["Inter"],
      },
      container: {
        center: true,
        padding: "20px",
        screens: {
          "lg": "1600px"
        }
      },
      colors: {
        "text-color": "#274C5B",
        "dr-white": "#FAFAFA",
        "padua": "#7EB693",
        "sea-lettuce": "#68A47F",
        "funky-yellow": "#EFD372",
        "border-color": "#E0E0E0",
        "text-secondary": "#525C60",
        "disco-ball": "#D5D5D5",
        "heavy-sugar": "#EFF6F1",
        "doctor": "#F9F8F8",
        "fortress-grey": "#B8B8B8",
        "beluga": "#F1F1F1",
        "rain": "#F1F8F4",
        "coronation":"#ECECEC"
      }
    },
  },
  plugins: [],
}