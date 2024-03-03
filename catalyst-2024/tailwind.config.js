const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        headerStart: "#FFF8F0",
        headerEnd: "#FCEAF2",
        headerTeal: "#DCFDFB",
        middleGradient: '#73BEF7',
        endGradient: '#0066B3',
        textColor: "#44ABF9",
        textColorDark: '#097294'
      },
      fontFamily: {
        coco: "CocoBubble",
        bubblegum: "BubblegumSans",
      },
      fontSize: {
        navText: "1.5rem",
      },
      fontWeight: {
        header: "1000",
      },
      height: {
        navBar: "4.5rem",
      },
    },
    backgroundImage: (theme) => ({
        "front-gradient": `linear-gradient(to bottom, ${theme(
            "colors.headerStart")}, ${theme("colors.headerEnd")})`,
        "main-gradient": `linear-gradient(to bottom, ${theme("colors.headerTeal")}, 
        ${theme("colors.middleGradient")}, ${theme("colors.endGradient")})`,

    }),
  },
  variants: {
    extend: {
      fontSize: ["responsive"],
    },
  },
  plugins: [],
};
