const baseTheme = {
  colors: {
    primary: '#FEA150',
    primaryLight: '#ffbc82',
    secondary: '#5CAC0E',
    secondaryLight: '#DDFFBC',
    title: '#333333',
    text: '#000000',
    white: '#FFFFFF',
  },
} as const

export type Colors = typeof baseTheme.colors
export type Color = keyof Colors
export const theme = { base: baseTheme }
