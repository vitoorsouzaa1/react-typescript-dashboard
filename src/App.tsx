import React from 'react'
import { ThemeProvider } from 'styled-components'

// Custom Hooks
import { useTheme } from './hooks/useTheme'

// Routes
import { Routes } from './routes/routes.router'

// Styles
import GlobalStyles from './styles/GlobalStyles'

export const App: React.FC = () => {
  const { theme } = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  )
}
