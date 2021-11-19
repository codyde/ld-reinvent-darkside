module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'ld-pattern': "url('/bars.png')",
        'ld-space': "url('/space.png')",
        'ld-stars': "url('/stars.png')"
      },
      colors: {
        aws: '#FF9900'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
