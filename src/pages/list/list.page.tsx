import React from 'react'

// Components
import { ContentHeaderComponent } from '../../components/content-header/content-header.component'
import { SelectIpuntComponent } from '../../components/select-input/select-ipunt.component'

// Styles
import { ListContainer } from './list.styles'

export const ListPage: React.FC = () => {
  const options = [
    {
      value: 'Maria',
      label: 'Maria',
    },
  ]

  return (
    <ListContainer>
      <ContentHeaderComponent title='Saídas' lineColor='#e44c4e'>
        <SelectIpuntComponent options={options} />
      </ContentHeaderComponent>
    </ListContainer>
  )
}
