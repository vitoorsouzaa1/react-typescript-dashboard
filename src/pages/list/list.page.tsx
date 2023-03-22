import React, { useMemo, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { uuid } from 'uuidv4'

// Utils
import { Formatter, DateFormatter } from '../../utils/formatter.utils'
import { Months } from '../../utils/months.utils'

// Components
import { ContentHeaderComponent } from '../../components/content-header/content-header.component'
import { HistoryListComponent } from '../../components/history-list/history-list.component'
import { SelectIpuntComponent } from '../../components/select-input/select-ipunt.component'

// Repositories
import { expenses } from '../../repositories/expenses'
import { gains } from '../../repositories/gains'

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
  const [selectedMonth, setSelectedMonth] = useState<string>(
    String(new Date().getMonth() + 1)
  )
  const [selectedYear, setSelectedYear] = useState<string>(
    String(new Date().getFullYear())
  )

  const { type } = useParams()

  const title = useMemo(() => {
    return type === 'entry-balance'
      ? { title: 'Entradas', lineColor: '#187d5f' }
      : { title: 'Saídas', lineColor: '#cc2a2c' }
  }, [type])

  const listData = useMemo(() => {
    return type === 'entry-balance' ? gains : expenses
  }, [type])

  const years = useMemo(() => {
    let uniqueYears: number[] = []

    listData.forEach((i) => {
      const date = new Date(i.date)
      const year = date.getFullYear()

      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year)
      }
    })

    return uniqueYears.map((year) => {
      return { value: year, label: year }
    })
  }, [listData])

  const months = useMemo(() => {
    return Months.map((month, idx) => {
      return { value: idx + 1, label: month }
    })
  }, [])

  useEffect(() => {
    const filteredData = listData.filter((item) => {
      const date = new Date(item.date)
      const month = String(date.getMonth() + 1)
      const year = String(date.getFullYear())

      return month === selectedMonth && year === selectedYear
    })

    const res = filteredData.map((item) => {
      return {
        id: uuid(),
        description: item.description,
        amountFormatted: Formatter(Number(item.amount)),
        frenquency: item.frequency,
        formattedDate: DateFormatter(item.date),
        tagColor: item.frequency === 'recorrente' ? '#4e41f0' : '#f44c4e',
      }
    })

    setData(res)
  }, [listData, selectedMonth, selectedYear, data.length])

  return (
    <ListContainer>
      <ContentHeaderComponent title={title.title} lineColor={title.lineColor}>
        <SelectIpuntComponent
          options={months}
          onChange={(e) => setSelectedMonth(e.target.value)}
          defaultValue={selectedMonth}
        />
        <SelectIpuntComponent
          options={years}
          onChange={(e) => setSelectedYear(e.target.value)}
          defaultValue={selectedYear}
        />
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
