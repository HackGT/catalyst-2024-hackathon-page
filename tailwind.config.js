const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        headerStart: "#6b0000", // Deep red for primary areas
        headerEnd: "#8b0000", // Slightly lighter red for gradients
        headerTeal: "#400000", // Darker red for contrast
        headerBlue: "#300000", // Very dark red, almost black for accents
        middleGradient: "#700000", // Mid-tone red for transitions
        endGradient: "#a10000", // Bright red for highlights
        textColor: "#ffffff", // Light red for text contrast
        textColorDark: "#fffffa", // Softer light red for readability
      },
      fontFamily: {
        'jetbrains': ['JetBrains Mono', 'monospace'],
        'racesport': ['RaceSport', 'sans-serif'],
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
          "-webkit-text-stroke-color": "#FFFFFF", // Dark red stroke
        },
        ".text-outline-small": {
          color: "white", // Text color
          "-webkit-text-stroke-width": "6px", // Stroke width
          "-webkit-text-stroke-color": "#FFFFFFF", // Slightly brighter red stroke
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};