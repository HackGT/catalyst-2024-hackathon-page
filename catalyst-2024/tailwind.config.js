const plugin = require('tailwindcss/plugin')

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
                headerTeal: '#DCFDFB'
            },
            fontFamily: {
                coco: 'CocoBubble',
            },
            fontSize: {
                'navText': '1.5rem',
            },
            fontWeight: {
                header: '1000',
            },
            height: {
                navBar: '4.5rem',
            }
        },
        backgroundImage: theme => ({
            'custom-gradient': `linear-gradient(to bottom, ${theme('colors.customStart')}, ${theme('colors.customEnd')})`,
        }),
    },
    variants: {
        extend: {
            fontSize: ['responsive']
        }
    },
    plugins: [],
};