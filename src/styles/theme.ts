const baseTheme = {
  colors: {
    primary: '#FEA150',
    primary850: '#FEA150D9',
    primaryLight: '#ffbc82',
    secondary: '#5CAC0E',
    secondary850: '#5CAC0ED9',
    secondaryLight: '#DDFFBC',
    title: '#333333',
    text: '#000000',
    white: '#FFFFFF',
  },
} as const

export type Colors = typeof baseTheme.colors
export type Color = keyof Colors

export const theme = { base: baseTheme }
