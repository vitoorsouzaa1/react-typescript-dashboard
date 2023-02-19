import React from 'react'
import { LayoutComponent } from './components/layout/layout.component'

// Styles
import GlobalStyles from './styles/GlobalStyles'

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <LayoutComponent />
    </>
  )
}
