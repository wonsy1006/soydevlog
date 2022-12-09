/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '',
      md: '',
      lg: '',
    },
    colors: {
      purple: {
        50: 'D9E0D0',
        100: 'C0BEC5',
        200: 'A297B6',
        300: '8570AB',
        400: '6F539F',
        500: '5A3896',
        600: '523492',
        700: '472B87',
        800: '3D2580',
        900: '281972',
      },
      gray: {
        50: 'ffffff',
        100: 'fcfcfc',
        200: 'f7f7f7',
        300: 'e8e8e8',
        400: 'c4c4c4',
        500: 'a6a6a6',
        600: '7c7c7c',
        700: '686868',
        800: '494949',
        900: '282828',
      },
    },
    fontFamily: {},
    fontWeight: {},
    fontSize: {},
    spacing: {},
  },
  plugins: [],
};
