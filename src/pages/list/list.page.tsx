import React, { useMemo } from 'react'
import { useParams } from 'react-router-dom'

// Components
import { ContentHeaderComponent } from '../../components/content-header/content-header.component'
import { HistoryListComponent } from '../../components/history-list/history-list.component'
import { SelectIpuntComponent } from '../../components/select-input/select-ipunt.component'

// Styles
import { ListContainer, ListContent, ListFilters } from './list.styles'

export const ListPage: React.FC = () => {
  const { type } = useParams()

  const title = useMemo(() => {
    return type === 'entry-balance'
      ? { title: 'Entradas', lineColor: '#187d5f' }
      : { title: 'Saídas', lineColor: '#cc2a2c' }
  }, [type])

  const months = [
    {
      value: 3,
      label: 'Março',
    },
    {
      value: 2,
      label: 'Fevereiro',
    },
    {
      value: 1,
      label: 'Janeiro',
    },
  ]

  const years = [
    {
      value: 2023,
      label: 2023,
    },
    {
      value: 2022,
      label: 2022,
    },
    {
      value: 2021,
      label: 2021,
    },
  ]
  return (
    <ListContainer>
      <ContentHeaderComponent title={title.title} lineColor={title.lineColor}>
        <SelectIpuntComponent options={months} />
        <SelectIpuntComponent options={years} />
      </ContentHeaderComponent>

      <ListFilters>
        <button type='button' className='tag-filter tag-filter-recurrent'>
          Recorrentes
        </button>
        <button type='button' className='tag-filter tag-filter-eventual'>
          Eventuais
        </button>
      </ListFilters>

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
