module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    // colors: {
    //   white: "#fff",
    //   gray: "#696969",
    //   "gray-light": "#747678",
    //   black: "#000",
    // },
    extend: {
      colors: {
        primary: "#E10E4B",
        secondary: "#009581",
      },
    },
  },
};
