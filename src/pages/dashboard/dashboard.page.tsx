import React, { useState, useMemo } from 'react'

// Repositories
import { expenses } from '../../repositories/expenses'
import { gains } from '../../repositories/gains'

// Components
import { ContentHeaderComponent } from '../../components/content-header/content-header.component'
import { SelectIpuntComponent } from '../../components/select-input/select-ipunt.component'
import { DashboardWalletBoxComponent } from '../../components/dashboard-wallet-box/dashboard-wallet-box.component'
import { DashboardMessageBoxComponent } from '../../components/dashboard-message-box/dashboard-message-box.component'

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

  const walletMessage = useMemo(() => {
    if (totalBalance < 0) {
      return {
        title: 'Que triste!',
        description: 'Neste mês você gastou mais do que deveria!',
        footerText:
          'Verifique seus gastos e tente cortar algumas despesas desnecessárias.',
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
  }, [totalBalance])

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
      </DashboardContent>
    </DashboardContainer>
  )
}
