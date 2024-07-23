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
        archivo: ["Archivo", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0026ff",
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
