module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "src/App.vue",
  ],
  theme: {
    extend: {
      "colors": {
        "gray": {
          "extended-700": "#3F3F46",
          "extended-300": "#D4D4D4"
        },
      },
      "fontFamily": {
        "press-start-2p": ["'Press Start 2P'", "sansserif"],
        "roboto": ["Roboto", "sansserif"]
       },
    },
  },
  plugins: [],
}