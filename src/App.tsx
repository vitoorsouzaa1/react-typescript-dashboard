import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Custom Hooks
import { useTheme } from './hooks/useTheme'

// Components
import { LayoutComponent } from './components/layout/layout.component'

// Pages
import { ListPage } from './pages/list/list.page'
import { DashboardPage } from './pages/dashboard/dashboard.page'

// Styles
import GlobalStyles from './styles/GlobalStyles'

export const App: React.FC = () => {
  const { theme } = useTheme()

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
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
