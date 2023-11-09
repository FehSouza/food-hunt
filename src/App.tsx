import { ThemeProvider } from 'styled-components'
import { Home } from './pages/Home'
import { useNameTheme } from './states/useThemeMode'
import { GlobalStyles } from './styles/globalStyles'
import { theme } from './styles/theme'

function App() {
  const [nameTheme] = useNameTheme()

  return (
    <ThemeProvider theme={theme[nameTheme]}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  )
}

export default App
