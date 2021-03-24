const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  purge: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
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
  plugins: [require("@tailwindcss/aspect-ratio")],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  }
}
