import React from 'react'
import ReactDOM from 'react-dom/client'

// Custom Hooks
import { ThemeProvider } from './hooks/useTheme'
import { AuthProvider } from './hooks/useAuth'

// Components
import { App } from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)
