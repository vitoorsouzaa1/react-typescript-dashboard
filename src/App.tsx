import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Components
import { LayoutComponent } from './components/layout/layout.component'

// Pages
import { ListPage } from './pages/list/list.page'
import { DashboardPage } from './pages/dashboard/dashboard.page'

// Styles
import GlobalStyles from './styles/GlobalStyles'
import dark from './styles/themes/dark.theme'

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={dark}>
        <GlobalStyles />
        <LayoutComponent>
          <Routes>
            <Route path='/' element={<DashboardPage />} />
            <Route path='/dashboard' element={<DashboardPage />} />
            <Route path='/list/:type' element={<ListPage />} />
          </Routes>
        </LayoutComponent>
      </ThemeProvider>
    </BrowserRouter>
  )
}
