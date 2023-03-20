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
          cardColor='#313862'
          tagColor='#e44c4e'
          title='Compras do Mês'
          subTitle='01/03/2023'
          amount='R$ 990,02'
        />
        <HistoryListComponent
          cardColor='#313862'
          tagColor='#e44c4e'
          title='Conta de Luz'
          subTitle='02/03/2023'
          amount='R$ 75,00'
        />
        <HistoryListComponent
          cardColor='#313862'
          tagColor='#e44c4e'
          title='Conta de Água'
          subTitle='03/03/2023'
          amount='R$ 89,99'
        />
        <HistoryListComponent
          cardColor='#313862'
          tagColor='#e44c4e'
          title='Cartão de Crédio'
          subTitle='07/03/2023'
          amount='R$ 578,55'
        />
        <HistoryListComponent
          cardColor='#313862'
          tagColor='#e44c4e'
          title='Aplicativo de Mobilidade Urbana'
          subTitle='15/03/2023'
          amount='R$ 12,00'
        />
        <HistoryListComponent
          cardColor='#313862'
          tagColor='#e44c4e'
          title='Aplicativo de Comida'
          subTitle='17/02/2023'
          amount='R$ 95,00'
        />
        <HistoryListComponent
          cardColor='#313862'
          tagColor='#e44c4e'
          title='Aplicativo de Bebidas'
          subTitle='07/02/2023'
          amount='R$ 35,00'
        />
        <HistoryListComponent
          cardColor='#313862'
          tagColor='#e44c4e'
          title='Conta de Luz'
          subTitle='07/02/2023'
          amount='R$ 75,00'
        />
        <HistoryListComponent
          cardColor='#313862'
          tagColor='#e44c4e'
          title='Conta de Água'
          subTitle='02/02/2023'
          amount='R$ 78,00'
        />
        <HistoryListComponent
          cardColor='#313862'
          tagColor='#e44c4e'
          title='Compras do Mês'
          subTitle='01/02/2023'
          amount='R$ 775,00'
        />
      </ListContent>
    </ListContainer>
  )
}
