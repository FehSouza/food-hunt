import { ThemeProvider } from 'styled-components'
import { Home } from './pages/Home'
import { GlobalStyles } from './styles/globalStyles'
import { theme } from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme.base}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  )
}

export default App
