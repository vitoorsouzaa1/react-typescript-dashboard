import React from 'react'

// Components
import { HeaderComponent } from '../header/header.component'
import { MainContentComponent } from '../main-content/main-content.component'
import { SidebarComponent } from '../sidebar/sidebar.component'

// Styles
import { LayoutContainer } from './layout.styles'

export const LayoutComponent: React.FC = () => {
  return (
    <LayoutContainer>
      <SidebarComponent />
      <MainContentComponent />
      <HeaderComponent />
    </LayoutContainer>
  )
}
