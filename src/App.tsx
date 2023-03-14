import React from 'react'
import { ThemeProvider } from 'styled-components'

// Components
import { LayoutComponent } from './components/layout/layout.component'

// Styles
import GlobalStyles from './styles/GlobalStyles'
import dark from './styles/themes/dark.theme'

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <LayoutComponent />
    </ThemeProvider>
  )
}
