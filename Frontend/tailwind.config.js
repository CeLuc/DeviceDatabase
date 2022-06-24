module.exports = {
  darkMode: "class",
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`,
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
      fontFamily: {
        comfortaa: ["Comfortaa", "cursive"],
      },
      content: {
        copy: 'url("~/assets/icons/copy.svg")',
      },
    },
  },
};
