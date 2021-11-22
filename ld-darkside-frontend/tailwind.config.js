module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundSize: {
        '50': '100%'
      },
      backgroundImage: {
        'ld-pattern': "url('/bars.png')",
        'ld-space': "url('/space.png')",
        'ld-stars': "url('/stars.png')",
        'ld-ls': "url('/ls_resize.png')"
      },
      colors: {
        aws: '#FF9900',
        ldblue: '#3DD6F5',
        lddblue: '#405BFF',
        ldred: '#FF386B',
        ldpurple: '#A34FDE',
        ldyellow: '#EBFF38',
        ldgray: '#282828',
        ldgraytext: '#BCBEC0',
        ldhl: '#EBFF38'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
