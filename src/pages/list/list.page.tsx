import React from 'react'

// Components
import { ContentHeaderComponent } from '../../components/content-header/content-header.component'
import { HistoryListComponent } from '../../components/history-list/history-list.component'
import { SelectIpuntComponent } from '../../components/select-input/select-ipunt.component'

// Styles
import { ListContainer, ListContent } from './list.styles'

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

      <ListContent>
        <HistoryListComponent
          tagColor='#e44c4e'
          title='Compras do Mês'
          subTitle='01/03/2023'
          amount='R$ 990,02'
        />
      </ListContent>
    </ListContainer>
  )
}
