const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  important: true,
  theme: {
    extend: {
      animation: 'spin 10s linear infinite',
      fontFamily: {
        'sans': ['Inter', ...defaultTheme.fontFamily.sans],
        'cursive': ['Lilita One', ...defaultTheme.fontFamily.serif]

      },
      colors: {
        'primary': '#037BBC',
        'primary-dark': '#04457E',
        'primary-light': '#0497e6',
        'secondary': '#009241',
        'secondary-light': '#00bc54'
      }
    }
  },
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js'
  ],
  plugins: [
    require('@tailwindcss/forms'),
  ]
}