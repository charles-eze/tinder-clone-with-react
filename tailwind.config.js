const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
     screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    flex: {'2': '0 0 auto'},
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('/src/images/hero_image.webp')",
      })
    },
  },
  important: true,
  variants: {
    extend: {},
  },
  plugins: [],
}
