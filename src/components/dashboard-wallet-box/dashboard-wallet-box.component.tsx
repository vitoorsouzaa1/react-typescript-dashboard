import React, { useMemo } from 'react'
import CountUp from 'react-countup'

// Icons
import DollarSign from '../../assets/dollar.svg'
import ArrowUp from '../../assets/arrow-down.svg'
import ArrowDown from '../../assets/arrow-up.svg'

// Styles
import { DashboardBoxContainer } from './dashboard-box.styles'

interface IDashboardBoxComponentProps {
  title: string
  amount: number
  footerLaber: string
  cardColor: string
  icon: 'dollarSign' | 'arrowUp' | 'arrowDown'
}

export const DashboardWalletBoxComponent: React.FC<
  IDashboardBoxComponentProps
> = ({ title, amount, footerLaber, cardColor, icon }) => {
  const selectedIcon = useMemo(() => {
    if (icon === 'dollarSign') return DollarSign
    if (icon === 'arrowUp') return ArrowUp
    if (icon === 'arrowDown') return ArrowDown
  }, [icon])

  return (
    <DashboardBoxContainer color={cardColor}>
      <span>{title}</span>
      <h1>
        <strong>R$ </strong>
        <CountUp end={amount} separator='.' decimal=',' decimals={2} />
      </h1>
      <small>{footerLaber}</small>
      <img src={selectedIcon} alt={title} />
    </DashboardBoxContainer>
  )
}
