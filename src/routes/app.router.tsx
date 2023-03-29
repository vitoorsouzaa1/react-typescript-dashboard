import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Components
import { LayoutComponent } from '../components/layout/layout.component'

// Pages
import { DashboardPage } from '../pages/dashboard/dashboard.page'
import { ListPage } from '../pages/list/list.page'

export const AppRouter: React.FC = () => (
  <LayoutComponent>
    <Routes>
      <Route path='/dashboard' element={<DashboardPage />} />
      <Route path='/list/:type' element={<ListPage />} />
    </Routes>
  </LayoutComponent>
)
