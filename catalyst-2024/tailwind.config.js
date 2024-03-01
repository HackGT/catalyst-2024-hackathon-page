module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
        "./public/index.html",
    ],
    theme: {
        extend: {
            colors: {
                customStart: '#FFF8F0',
                customEnd: '#FCEAF2',
            },
        },
        backgroundImage: theme => ({
            'custom-gradient': `linear-gradient(to bottom, ${theme('colors.customStart')}, ${theme('colors.customEnd')})`,
        }),
    },
    plugins: [],
};