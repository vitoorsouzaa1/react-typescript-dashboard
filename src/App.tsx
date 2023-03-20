import React from 'react'
import { ThemeProvider } from 'styled-components'

// Utils
import { IChildren } from './utils/children.utils'

// Components
import { LayoutComponent } from './components/layout/layout.component'

// Styles
import GlobalStyles from './styles/GlobalStyles'
import dark from './styles/themes/dark.theme'

export const App: React.FC<IChildren> = ({ children }) => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <LayoutComponent>{children}</LayoutComponent>
    </ThemeProvider>
  )
}
