import React from 'react'

// Styles
import {
  ContentHeaderContainer,
  ContentTitle,
  ContentControllers,
} from './content-header.styles'

interface IContentHeaderProps {
  title: string
  lineColor: string
  children: React.ReactNode
}

export const ContentHeaderComponent: React.FC<IContentHeaderProps> = ({
  title,
  lineColor,
  children,
}) => {
  return (
    <ContentHeaderContainer>
      <ContentTitle lineColor={lineColor}>
        <h1>{title}</h1>
      </ContentTitle>

      <ContentControllers>{children}</ContentControllers>
    </ContentHeaderContainer>
  )
}
