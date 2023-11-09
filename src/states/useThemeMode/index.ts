import { createReStateMethods } from '@raulpesilva/re-state'

const nameThemeKey = 'nameTheme'
const initialValue = 'colorsA' as 'colorsA' | 'colorsB'

export const { useNameTheme, dispatchNameTheme } = createReStateMethods(nameThemeKey, initialValue)
