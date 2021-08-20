const primaryColor = '#fe0000'
export default {
  fonts: {
    heading: 'Cinzel Decorative, cursive',
    body: 'Poppins, sans-serif'
  },
  colors: {
    primary: primaryColor,
    accent1: '#902c39',
    dark: '#090909',
    dark1: '#1a1a1a',
    dark2: '#2c2c2c',
    light: '#fff',
    light1: '#bbbbbb',
    light2: '#4b4b4b'
  },
  breakpoints: ['576px', '768px', '992px', '1200px'],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fontSizes: [6, 8, 10, 12, 14, 16, 20, 24, 32, 48, 64],
  fontWeights: {
    normal: 400,
    bold: 700,
    bolder: 900
  },
  shadows: {
    tiny: '0 1.5px 5px 0 rgba(0, 0, 0, 0.1)',
    small: '0px 0px 5px 0px rgba(0,0,0,0.2)',
    tabs: '0 0 4px 0 rgba(0, 0, 0, 0.1)'
  },
  buttons: {
    primary: {
      backgroundColor: primaryColor,
      fontSize: '2rem'
    },
    transparent: {
      backgroundColor: 'transparent',
      color: primaryColor,
      borderColor: primaryColor,
      border: '1px solid'
    }
  },
  cards: {
    primary: {
      backgroundColor: primaryColor,
      boxShadow: '0 1.5px 5px 0 rgba(0, 0, 0, 0.1)'
    }
  }
}
