import React, { useMemo, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// Components
import { ContentHeaderComponent } from '../../components/content-header/content-header.component'
import { HistoryListComponent } from '../../components/history-list/history-list.component'
import { SelectIpuntComponent } from '../../components/select-input/select-ipunt.component'

// Repositories
import expenses from '../../repositories/expenses'
import gains from '../../repositories/gains'

// Styles
import { ListContainer, ListContent, ListFilters } from './list.styles'

interface IData {
  id: string
  description: string
  amountFormatted: string
  frenquency: string
  formattedDate: string
  tagColor: string
}

export const ListPage: React.FC = () => {
  const [data, setData] = useState<IData[]>([])

  const { type } = useParams()

  const title = useMemo(() => {
    return type === 'entry-balance'
      ? { title: 'Entradas', lineColor: '#187d5f' }
      : { title: 'Saídas', lineColor: '#cc2a2c' }
  }, [type])

  const listData = useMemo(() => {
    return type === 'entry-balance' ? gains : expenses
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

  useEffect(() => {
    const res = listData.map((i) => ({
      id: String(Math.random() * data.length),
      description: i.description,
      amountFormatted: i.amount,
      frenquency: i.frequency,
      formattedDate: i.date,
      tagColor: i.frequency === 'recorrente' ? '#4e41f0' : '#f44c4e',
    }))

    setData(res)
  }, [])

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
        {data.map((item) => (
          <HistoryListComponent
            key={item.id}
            tagColor={item.tagColor}
            title={item.description}
            subTitle={item.formattedDate}
            amount={item.amountFormatted}
          />
        ))}
      </ListContent>
    </ListContainer>
  )
}
