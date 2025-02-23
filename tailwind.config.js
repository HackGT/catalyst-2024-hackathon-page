const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        headerStart: "#FFFBF6",
        headerEnd: "#FCEAF2",
        headerTeal: "#DCFDFB",
        headerBlue: "#07246D",
        middleGradient: "#73BEF7",
        endGradient: "#0066B3",
        textColor: "#FFF",
        //textColor: "#44ABF9",
        textColorDark: "#266FAD",
        bgcustom: "#0F0D2E",
      },
      fontFamily: {
        coco: "CocoBubble",
        bubblegum: "BubblegumSans",
        racesport: "RaceSport",
        jetbrains: "JetBrainsMono",
      },
      fontSize: {
        navText: "1.75rem",
      },
      fontWeight: {
        header: "1000",
      },
      height: {
        navBar: "4.5rem",
      },
      width: {
        custom: "75vw",
      },
      spacing: {
        "1/8": "12.5%",
        "1/6": "16.6%",
        "1/5": "20.0%",
      },
    },
    backgroundImage: (theme) => ({
      "custom-gradient": `linear-gradient(to bottom, ${theme(
        "colors.headerStart"
      )}, ${theme("colors.headerStart")}, ${theme("colors.headerEnd")})`,
      "main-gradient": `linear-gradient(to bottom, ${theme(
        "colors.headerTeal"
      )}, 
      ${theme("colors.middleGradient")}, ${theme("colors.endGradient")})`,
    }),
  },
  variants: {
    extend: {
      fontSize: ["responsive"],
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".text-outline-large": {
          color: "white", // Text color
          "-webkit-text-stroke-width": "8.5px", // Stroke width
          "-webkit-text-stroke-color": "#07246D", // Stroke color
        },
        ".text-outline-small": {
          color: "white", // Text color
          "-webkit-text-stroke-width": "6px", // Stroke width
          "-webkit-text-stroke-color": "#07246D", // Stroke color
        },
        // Add more utilities for different stroke widths and colors if needed
      };
      addUtilities(newUtilities);
    }),
  ],
};