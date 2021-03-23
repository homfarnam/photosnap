const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  purge: ["./public/**/*.html", "./components/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Dm Sans", ...fontFamily.sans]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
