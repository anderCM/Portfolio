/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Roboto", "sans-serif"]
      },
      colors: {
        bodyColor: "#001F3F",
        textColor: "#D1D4C9",
        designColor: "#0D63A5",
        titleRoundBg: "linear-gradient(135deg, rgba(120,204,109,.15) 0%, rgba(120,204,109,1%)",
      },
      animation: {
        "spin-slow": "spin 15s linear infinite",
        "reverse-spin": "reverse-spin 15s linear infite",
      },
      keyframes: {
        "reverse-spin": {
          from: {
            transform: "rotate(360deg)",
          }
        }
      },
      boxShadow: {
        blueShadow: "0px 0px 188px -14px #0C3C78",
        textShadow: "11px 0px 13px -15px #000"
      }
    },
  },
  plugins: [],
}

