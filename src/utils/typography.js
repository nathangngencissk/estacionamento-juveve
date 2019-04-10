import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: [
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Georgia", "serif"],
  googleFonts: [
    {
      name: "Roboto Slab",
      styles: ["100", "400"],
    },
    {
      name: "Raleway",
      styles: ["100", "400"],
    },
    {
      name: "Merriweather",
      styles: ["400", "400i", "700", "700i"],
    },
  ],
})

export default typography
