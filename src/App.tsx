import React from 'react'
import { ThemeProvider } from 'styled-components'

// Components
import { LayoutComponent } from './components/layout/layout.component'
import { ListPage } from './pages/list/list.page'

// Styles
import GlobalStyles from './styles/GlobalStyles'
import dark from './styles/themes/dark.theme'

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <LayoutComponent>
        <ListPage />
      </LayoutComponent>
    </ThemeProvider>
  )
}
