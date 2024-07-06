/*@type {import('tailwindcss').Config}*/

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        archivo: ["Archivo", "sans-serif"],
        heading: ["Rammetto One", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        grid: "grid 15s linear infinite",
      },
      keyframes: {
        grid: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0026ffbf",
          secondary: "#00ffc4",
          accent: "#00b1ffbf",
          info: "#00a6c6",
          success: "#00e5aa",
          warning: "#8a5f00",
          error: "#ff8aad",
          offwhite: "#fdfdfd",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
