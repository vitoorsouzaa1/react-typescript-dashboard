import React from 'react'

// Utils
import { IChildren } from '../../utils/children.utils'

// Styles
import { MainContentContainer } from './main-content.styles'

export const MainContentComponent: React.FC<IChildren> = ({ children }) => {
  return <MainContentContainer>{children}</MainContentContainer>
}
