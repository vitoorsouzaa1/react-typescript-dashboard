import React from 'react'

// Utils
import { IChildren } from '../../utils/children.utils'

// Components
import { HeaderComponent } from '../header/header.component'
import { MainContentComponent } from '../main-content/main-content.component'
import { SidebarComponent } from '../sidebar/sidebar.component'

// Styles
import { LayoutContainer } from './layout.styles'

export const LayoutComponent: React.FC<IChildren> = ({ children }) => {
  return (
    <LayoutContainer>
      <SidebarComponent />
      <MainContentComponent>{children}</MainContentComponent>
      <HeaderComponent />
    </LayoutContainer>
  )
}
