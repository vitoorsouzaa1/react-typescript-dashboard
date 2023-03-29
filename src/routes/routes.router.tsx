import React from 'react'
import { BrowserRouter } from 'react-router-dom'

// Custom Hooks
import { useAuth } from '../hooks/useAuth'

// Routes
import { AppRouter } from './app.router'
import { AuthRouter } from './auth.router'

export const Routes: React.FC = () => {
  const { logged } = useAuth()

  return (
    <BrowserRouter>{logged ? <AppRouter /> : <AuthRouter />}</BrowserRouter>
  )
}
