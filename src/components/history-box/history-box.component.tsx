import React from 'react'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts'

// Utils
import { Formatter } from '../../utils/formatter.utils'

// Styles
import {
  HistoryBoxContainer,
  HistoryBoxHeaderContainer,
  HeaderSubtitles,
  Subtitles,
} from './history-box.styles'

interface IHistoryBoxComponentProps {
  data: {
    month: string
    entryAmount: number
    outputAmount: number
  }[]
  lineColorEntryAmount: string
  lineColorOutputAmount: string
}

export const HistoryBoxComponent: React.FC<IHistoryBoxComponentProps> = ({
  data,
  lineColorEntryAmount,
  lineColorOutputAmount,
}) => (
  <HistoryBoxContainer>
    <HistoryBoxHeaderContainer>
      <h2>Histórico de Saldo</h2>
      <HeaderSubtitles>
        <Subtitles color={lineColorEntryAmount}>
          <div>a</div>
          <span>Entradas</span>
        </Subtitles>
        <Subtitles color={lineColorOutputAmount}>
          <div>a</div>
          <span>Saídas</span>
        </Subtitles>
      </HeaderSubtitles>
    </HistoryBoxHeaderContainer>

    <ResponsiveContainer>
      <LineChart
        data={data}
        margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray='3  3' stroke='#ccc' />
        <XAxis dataKey='month' stroke='#cecece' />
        <Tooltip formatter={(value) => Formatter(Number(value))} />

        <Line
          type={'monotone'}
          dataKey='entryAmount'
          name='Entradas'
          stroke={lineColorEntryAmount}
          strokeWidth={5}
          dot={{ r: 5 }}
          activeDot={{ r: 8 }}
        />

        <Line
          type={'monotone'}
          dataKey='outputAmount'
          name='Saídas'
          stroke={lineColorOutputAmount}
          strokeWidth={5}
          dot={{ r: 5 }}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  </HistoryBoxContainer>
)
