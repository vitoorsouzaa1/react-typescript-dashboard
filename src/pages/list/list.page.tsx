import React, { useMemo, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

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
  formattedAmount: string
  frenquency: string
  formattedDate: string
  tagColor: string
}

export const ListPage: React.FC = () => {
  const [data, setData] = useState<IData[]>([])

  const [selectedMonth, setSelectedMonth] = useState<number>(
    new Date().getMonth() + 1
  )

  const [selectedYear, setSelectedYear] = useState<number>(
    new Date().getFullYear()
  )

  const [selectedFrenquency, setselectedFrenquency] = useState([
    'recorrent',
    'eventual',
  ])

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

  const handleFrequencyClick = (frequency: string) => {
    const alreadySelected = selectedFrenquency.findIndex(
      (item) => item === frequency
    )

    if (alreadySelected >= 0) {
      const filtered = selectedFrenquency.filter((item) => item !== frequency)
      setselectedFrenquency(filtered)
    } else {
      setselectedFrenquency((prev) => [...prev, frequency])
    }
  }

  const handleSelectedMonth = (month: string) => {
    try {
      const parseMonth = Number(month)
      setSelectedMonth(parseMonth)
    } catch (err) {
      throw new Error('Invlid month value.')
    }
  }

  const handleSelectedYear = (year: string) => {
    try {
      const parseYear = Number(year)
      setSelectedYear(parseYear)
    } catch (err) {
      throw new Error('Invlid year value.')
    }
  }

  useEffect(() => {
    const filteredData = listData.filter((item) => {
      const date = new Date(item.date)
      const month = date.getMonth() + 1
      const year = date.getFullYear()

      return (
        month === selectedMonth &&
        year === selectedYear &&
        selectedFrenquency.includes(item.frequency)
      )
    })

    const res = filteredData.map((item) => {
      return {
        id: String(Number(new Date()) * Math.random()),
        description: item.description,
        formattedAmount: Formatter(Number(item.amount)),
        frenquency: item.frequency,
        formattedDate: DateFormatter(item.date),
        tagColor: item.frequency === 'recorrente' ? '#4e41f0' : '#f44c4e',
      }
    })

    setData(res)
  }, [listData, selectedMonth, selectedYear, data.length, selectedFrenquency])

  return (
    <ListContainer>
      <ContentHeaderComponent title={title.title} lineColor={title.lineColor}>
        <SelectIpuntComponent
          options={months}
          onChange={(e) => handleSelectedMonth(e.target.value)}
          defaultValue={selectedMonth}
        />
        <SelectIpuntComponent
          options={years}
          onChange={(e) => handleSelectedYear(e.target.value)}
          defaultValue={selectedYear}
        />
      </ContentHeaderComponent>

      <ListFilters>
        <button
          type='button'
          className={`tag-filter tag-filter-recurrent ${
            selectedFrenquency.includes('recorrente') && 'tag-activated'
          }`}
          onClick={() => handleFrequencyClick('recorrente')}
        >
          Recorrentes
        </button>
        <button
          type='button'
          className={`tag-filter tag-filter-eventual ${
            selectedFrenquency.includes('eventual') && 'tag-activated'
          }`}
          onClick={() => handleFrequencyClick('eventual')}
        >
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
            amount={item.formattedAmount}
          />
        ))}
      </ListContent>
    </ListContainer>
  )
}
