import React from 'react'

// Styles
import { DashboardMessageBoxContainer } from './dashboard-message-box.styles'

interface IDashboardMessageBoxComponentProps {
  title: string
  description: string
  footerText: string
  icon: string
}

export const DashboardMessageBoxComponent: React.FC<
  IDashboardMessageBoxComponentProps
> = ({ title, description, footerText, icon }) => {
  return (
    <DashboardMessageBoxContainer>
      <header>
        <h1>
          {title}
          <img src={icon} alt='' />
        </h1>

        <p>{description}</p>
      </header>
      <footer>
        <span>{footerText}</span>
      </footer>
    </DashboardMessageBoxContainer>
  )
}
