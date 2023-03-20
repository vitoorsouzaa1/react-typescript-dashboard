import React from 'react'

// Components
import { ContentHeaderComponent } from '../../components/content-header/content-header.component'
import { SelectIpuntComponent } from '../../components/select-input/select-ipunt.component'

// Styles
import { DashboardContainer } from './dashboard.styles'

export const DashboardPage: React.FC = () => {
  const options = [
    {
      value: 'Logan',
      label: 'Logan',
    },
  ]

  return (
    <DashboardContainer>
      <ContentHeaderComponent title='Dashboard' lineColor='#fff'>
        <SelectIpuntComponent options={options} />
      </ContentHeaderComponent>
    </DashboardContainer>
  )
}
