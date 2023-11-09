const baseTheme = {}

const colorsA = {
  colors: {
    primary: '#FEA150',
    primary850: '#FEA150D9',
    primaryLight: '#ffbc82',
    title: '#333333',
    text: '#000000',
    white: '#FFFFFF',
  },
  ...baseTheme,
}

const colorsB = {
  colors: {
    primary: '#5CAC0E',
    primary850: '#5CAC0ED9',
    primaryLight: '#DDFFBC',
    title: '#333333',
    text: '#000000',
    white: '#FFFFFF',
  },
  ...baseTheme,
}

export const theme = {
  colorsA: colorsA,
  colorsB: colorsB,
}
