module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.liquid',
    './src/**/*.md'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'theme-orange': '#FA8334',
        'theme-green': '#17A398',
        'theme-pink': '#F45B69',
        'theme-purple': '#210124',
        'theme-white': '#F8F8F0'
      }
    },
  },
  variants: {},
  plugins: [],
}