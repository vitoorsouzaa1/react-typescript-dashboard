import React from 'react'
import { ResponsiveContainer, BarChart, Bar, Cell, Tooltip } from 'recharts'

// Utils
import { Formatter } from '../../utils/formatter.utils'

// Styles
import {
  RelationBarchartBoxContainer,
  TextInfoContainer,
  BarChartContainer,
  SubtextContainer,
  Subtexts,
} from './relation-barchart-box.styles'

interface IRelationBarchartBoxComponentProps {
  title: string
  data: {
    name: string
    amount: number
    percent: number
    color: string
  }[]
}

export const RelationBarchartBoxComponent: React.FC<
  IRelationBarchartBoxComponentProps
> = ({ data, title }) => {
  return (
    <RelationBarchartBoxContainer>
      <TextInfoContainer>
        <h2>{title}</h2>

        <SubtextContainer>
          {data.map((indicator) => (
            <Subtexts key={indicator.name} color={indicator.color}>
              <div>{indicator.percent}%</div>
              <span>{indicator.name}</span>
            </Subtexts>
          ))}
        </SubtextContainer>
      </TextInfoContainer>

      <BarChartContainer>
        <ResponsiveContainer>
          <BarChart data={data}>
            <Bar dataKey='amount' name='Valor'>
              {data.map((indicator) => (
                <Cell
                  key={indicator.name}
                  cursor='pointer'
                  fill={indicator.color}
                />
              ))}
            </Bar>
            <Tooltip
              formatter={(value) => Formatter(Number(value))}
              cursor={{ fill: 'none' }}
            />
          </BarChart>
        </ResponsiveContainer>
      </BarChartContainer>
    </RelationBarchartBoxContainer>
  )
}
