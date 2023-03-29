import React from 'react'
import { Route, Routes } from 'react-router-dom'

// Pages
import { SingInPage } from '../pages/signin/singin.page'

export const AuthRouter: React.FC = () => (
  <Routes>
    <Route path='/' element={<SingInPage />} />
  </Routes>
)
