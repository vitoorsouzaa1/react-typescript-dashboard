import React from 'react'

// Styles
import { HistoryListContainer, Tag } from './history-list.styles'

interface IHistoryListComponentProps {
  tagColor: string
  title: string
  subTitle: string
  amount: string
}

export const HistoryListComponent: React.FC<IHistoryListComponentProps> = ({
  tagColor,
  title,
  subTitle,
  amount,
}) => (
  <HistoryListContainer>
    <Tag color={tagColor} />
    <div>
      <span>{title}</span>
      <small>{subTitle}</small>
    </div>
    <h3>{amount}</h3>
  </HistoryListContainer>
)
