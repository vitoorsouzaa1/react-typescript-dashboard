import React from 'react'

// Styles
import { HistoryListContainer, Tag } from './history-list.styles'

interface IHistoryListComponentProps {
  cardColor: string
  tagColor: string
  title: string
  subTitle: string
  amount: string
}

export const HistoryListComponent: React.FC<IHistoryListComponentProps> = ({
  cardColor,
  tagColor,
  title,
  subTitle,
  amount,
}) => {
  return (
    <HistoryListContainer color={cardColor}>
      <Tag color={tagColor} />
      <div>
        <span>{title}</span>
        <small>{subTitle}</small>
      </div>
      <h3>{amount}</h3>
    </HistoryListContainer>
  )
}
