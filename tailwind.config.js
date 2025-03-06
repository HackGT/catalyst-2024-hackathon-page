const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        headerStart: "#0F0D2E", // Deep red for primary areas
        headerEnd: "#0F0D2E", // Slightly lighter red for gradients
        headerTeal: "#0F0D2E", // Darker red for contrast
        headerBlue: "#0F0D2E", // Very dark red, almost black for accents
        middleGradient: "#0F0D2E", // Mid-tone red for transitions
        endGradient: "#0F0D2E", // Bright red for highlights
        textColor: "#0F0D2E", // Light red for text contrast
        textColorDark: "#0F0D2E", // Softer light red for readability
      },
      fontFamily: {
        coco: "CocoBubble",
        bubblegum: "BubblegumSans",
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
      spacing: {
        "1/8": "12.5%",
        "1/6": "16.6%",
        "1/5": "20.0%",
      },

      backgroundImage: (theme) => ({
        "custom-gradient": `linear-gradient(to bottom, ${theme("colors.darkRed")}, ${theme("colors.deepRed")})`,
        "main-gradient": `linear-gradient(to bottom, ${theme("colors.headerTeal")}, 
        ${theme("colors.middleGradient")}, ${theme("colors.endGradient")})`,
      }),
    },
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
          "-webkit-text-stroke-color": "#000000", // Dark red stroke
        },
        ".text-outline-small": {
          color: "white", // Text color
          "-webkit-text-stroke-width": "6px", // Stroke width
          "-webkit-text-stroke-color": "#0F0D2E", // Slightly brighter red stroke
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};