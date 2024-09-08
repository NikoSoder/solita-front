/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        spinY: "spinY 2s linear infinite",
      },
      keyframes: {
        spinY: {
          "0%": { transform: "rotateY(90deg)", background: "#209CE4" },
          "33.3%": { transform: "rotateY(270deg)", background: "#209CE4" },
          "33.31%": { transform: "rotateY(90deg)", background: "#EE7000" },
          "66.6%": { transform: "rotateY(270deg)", background: "#EE7000" },
          "66.61%": { transform: "rotateY(90deg)", background: "#00AC20" },
          "100%": { transform: "rotateY(270deg)", background: "#00AC20" },
        },
      },
    },
  },
  plugins: [],
};
