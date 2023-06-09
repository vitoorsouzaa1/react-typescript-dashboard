import React, { useState, useMemo, useCallback } from 'react'

// Repositories
import { expenses } from '../../repositories/expenses'
import { gains } from '../../repositories/gains'

// Components
import { ContentHeaderComponent } from '../../components/content-header/content-header.component'
import { SelectIpuntComponent } from '../../components/select-input/select-ipunt.component'
import { DashboardWalletBoxComponent } from '../../components/dashboard-wallet-box/dashboard-wallet-box.component'
import { DashboardMessageBoxComponent } from '../../components/dashboard-message-box/dashboard-message-box.component'
import { PieChartComponent } from '../../components/piechart-box/piechart.component'
import { HistoryBoxComponent } from '../../components/history-box/history-box.component'
import { BarchartBoxComponent } from '../../components/barchart-box/barchart-box.component'

// Utils
import { Months } from '../../utils/months.utils'

// Image
import happyImg from '../../assets/happy.svg'
import sadImg from '../../assets/sad.svg'
import grinningImg from '../../assets/grinning.svg'

// Styles
import { DashboardContainer, DashboardContent } from './dashboard.styles'

export const DashboardPage: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState<number>(
    new Date().getMonth() + 1
  )

  const [selectedYear, setSelectedYear] = useState<number>(
    new Date().getFullYear()
  )

  const years = useMemo(() => {
    let uniqueYears: number[] = []

    const headerData = [...expenses, ...gains].forEach((item) => {
      const date = new Date(item.date)
      const year = date.getFullYear()

      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year)
      }
    })

    return uniqueYears.map((year) => {
      return { value: year, label: year }
    })
  }, [])

  const months = useMemo(() => {
    return Months.map((month, idx) => {
      return {
        value: idx + 1,
        label: month,
      }
    })
  }, [])

  const totalGains = useMemo(() => {
    let total: number = 0

    gains.forEach((e) => {
      const date = new Date(e.date)

      const year = date.getFullYear()

      const month = date.getMonth() + 1

      if (month === selectedMonth && year === selectedYear) {
        try {
          total += Number(e.amount)
        } catch {
          throw new Error('Invalid amount! Amount must be a number.')
        }
      }
    })

    return total
  }, [selectedMonth, selectedYear])

  const totalExpenses = useMemo(() => {
    let total: number = 0

    expenses.forEach((e) => {
      const date = new Date(e.date)

      const year = date.getFullYear()

      const month = date.getMonth() + 1

      if (month === selectedMonth && year === selectedYear) {
        try {
          total += Number(e.amount)
        } catch {
          throw new Error('Invalid amount! Amount must be a number.')
        }
      }
    })

    return total
  }, [selectedMonth, selectedYear])

  const totalBalance = useMemo(() => {
    return totalGains - totalExpenses
  }, [totalExpenses, totalGains])

  const pieChartRelation = useMemo(() => {
    const total = totalGains + totalExpenses

    const percentOfGains = Number(((totalGains / total) * 100).toFixed(1))

    const percentOfExpenses = Number(((totalExpenses / total) * 100).toFixed(1))

    const gainsPercent = Number(percentOfGains.toFixed(1))
    const expensesPercent = Number(percentOfExpenses.toFixed(1))

    const relationData = [
      {
        name: 'Entradas',
        value: totalGains,
        percent: gainsPercent ? gainsPercent : 0,
        color: '#f7931b',
      },
      {
        name: 'Saídas',
        value: totalExpenses,
        percent: expensesPercent ? expensesPercent : 0,
        color: '#e44c4e',
      },
    ]

    return relationData
  }, [totalExpenses, totalGains])

  const walletMessage = useMemo(() => {
    if (totalBalance < 0) {
      return {
        title: 'Que triste!',
        description: 'Neste mês você gastou mais do que deveria!',
        footerText:
          'Verifique seus gastos e tente cortar algumas despesas desnecessárias.',
        icon: sadImg,
      }
    } else if (totalGains === 0 && totalExpenses === 0) {
      return {
        title: 'Opa!',
        description: 'Não há registros neste mês!',
        footerText:
          'Os dados só estarão à mostra quando houver entradas ou saídas!',
        icon: sadImg,
      }
    } else if (totalBalance === 0) {
      return {
        title: 'Ufaa!',
        description: 'Neste mês você quase excedeu o que tinha!',
        footerText:
          'Tenha cuidado com despesas desnecessárias, e invista o que sobrar!',
        icon: grinningImg,
      }
    } else {
      return {
        title: 'Muito bem!',
        description: 'Sua carteira está positiva!',
        footerText: 'Continue assim. Considere investir seu saldo.',
        icon: happyImg,
      }
    }
  }, [totalBalance, totalExpenses, totalGains])

  const historyBoxData = useMemo(() => {
    return Months.map((_, month) => {
      let entryAmount = 0
      gains.forEach((gain) => {
        const date = new Date(gain.date)
        const gainMonth = date.getMonth()
        const gainYear = date.getFullYear()

        if (gainMonth === month && gainYear === selectedYear) {
          try {
            entryAmount += Number(gain.amount)
          } catch {
            throw new Error(
              'entryAmount is invalid, you must provide a valid number!'
            )
          }
        }
      })

      let outputAmount = 0
      expenses.forEach((expense) => {
        const date = new Date(expense.date)
        const expenseMonth = date.getMonth()
        const expenseYear = date.getFullYear()

        if (expenseMonth === month && expenseYear === selectedYear) {
          try {
            outputAmount += Number(expense.amount)
          } catch {
            throw new Error(
              'outputAmount is invalid, you must provide a valid number!'
            )
          }
        }
      })

      return {
        monthNumber: month,
        month: Months[month].substring(0, 3),
        entryAmount,
        outputAmount,
      }
    }).filter((i) => {
      const currentMonth = new Date().getMonth()
      const currentYear = new Date().getFullYear()

      return (
        (selectedYear === currentYear && i.monthNumber <= currentMonth) ||
        selectedYear < currentYear
      )
    })
  }, [selectedYear])

  const expensesGraphRelation = useMemo(() => {
    let recurrentAmount = 0
    let eventualAmount = 0

    expenses
      .filter((expense) => {
        const date = new Date(expense.date)
        const month = date.getMonth() + 1
        const year = date.getFullYear()

        return month === selectedMonth && year === selectedYear
      })
      .forEach((expense) => {
        if (expense.frequency === 'recorrente') {
          return (recurrentAmount += Number(expense.amount))
        }

        if (expense.frequency === 'eventual') {
          return (eventualAmount += Number(expense.amount))
        }
      })

    const total = recurrentAmount + eventualAmount

    const recurrentPercent = Number(
      ((recurrentAmount / total) * 100).toFixed(1)
    )
    const eventualPercent = Number(((eventualAmount / total) * 100).toFixed(1))

    return [
      {
        name: 'Recorrentes',
        amount: recurrentAmount,
        percent: recurrentPercent ? recurrentPercent : 0,
        color: '#f7931b',
      },

      {
        name: 'Eventuais',
        amount: eventualAmount,
        percent: eventualPercent ? eventualAmount : 0,
        color: '#e44c4e',
      },
    ]
  }, [selectedMonth, selectedYear])

  const gainsGraphRelation = useMemo(() => {
    let recurrentAmount = 0
    let eventualAmount = 0

    gains
      .filter((gain) => {
        const date = new Date(gain.date)
        const month = date.getMonth() + 1
        const year = date.getFullYear()

        return month === selectedMonth && year === selectedYear
      })
      .forEach((gain) => {
        if (gain.frequency === 'recorrente') {
          return (recurrentAmount += Number(gain.amount))
        }

        if (gain.frequency === 'eventual') {
          return (eventualAmount += Number(gain.amount))
        }
      })

    const total = recurrentAmount + eventualAmount

    const recurrentPercent = Number(
      ((recurrentAmount / total) * 100).toFixed(1)
    )
    const eventualPercent = Number(((eventualAmount / total) * 100).toFixed(1))

    return [
      {
        name: 'Recorrentes',
        amount: recurrentAmount,
        percent: recurrentPercent ? recurrentPercent : 0,
        color: '#f7931b',
      },

      {
        name: 'Eventuais',
        amount: eventualAmount,
        percent: eventualPercent ? eventualPercent : 0,
        color: '#e44c4e',
      },
    ]
  }, [selectedMonth, selectedYear])

  const handleSelectedMonth = useCallback((month: string) => {
    try {
      const parseMonth = Number(month)
      setSelectedMonth(parseMonth)
    } catch (err) {
      throw new Error('Invlid month value.')
    }
  }, [])

  const handleSelectedYear = useCallback((year: string) => {
    try {
      const parseYear = Number(year)
      setSelectedYear(parseYear)
    } catch (err) {
      throw new Error('Invlid year value.')
    }
  }, [])

  return (
    <DashboardContainer>
      <ContentHeaderComponent title='Dashboard' lineColor='#f7931b'>
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

      <DashboardContent>
        <DashboardWalletBoxComponent
          title='Saldo'
          cardColor='#4e41f0'
          amount={totalBalance}
          footerLaber='Atualizado com base nas entradas e saídas.'
          icon='dollarSign'
        />

        <DashboardWalletBoxComponent
          title='Entradas'
          cardColor='#f7931b'
          amount={totalGains}
          footerLaber='Atualizado com base nas entradas e saídas.'
          icon='arrowUp'
        />

        <DashboardWalletBoxComponent
          title='Saídas'
          cardColor='#e44c4e'
          amount={totalExpenses}
          footerLaber='Atualizado com base nas entradas e saídas.'
          icon='arrowDown'
        />
        <DashboardMessageBoxComponent
          title={walletMessage.title}
          description={walletMessage.description}
          footerText={walletMessage.footerText}
          icon={walletMessage.icon}
        />

        <PieChartComponent data={pieChartRelation} />

        <HistoryBoxComponent
          data={historyBoxData}
          lineColorEntryAmount='#f7931b'
          lineColorOutputAmount='#e44c4e'
        />

        <BarchartBoxComponent title='Saídas' data={expensesGraphRelation} />

        <BarchartBoxComponent title='Entradas' data={gainsGraphRelation} />
      </DashboardContent>
    </DashboardContainer>
  )
}
