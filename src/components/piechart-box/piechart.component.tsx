import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

// Styles
import {
  PieChartContainer,
  SideContainer,
  Subtexts,
  SubtextContainer,
  GraphContainer,
} from './piechart.styles'

interface IPieChartComponentProps {
  data: {
    name: string
    value: number
    percent: number
    color: string
  }[]
}

export const PieChartComponent: React.FC<IPieChartComponentProps> = ({
  data,
}) => (
  <PieChartContainer>
    <SideContainer>
      <h2>Relação</h2>
      <SubtextContainer>
        {data.map((indicator) => (
          <Subtexts key={indicator.name} color={indicator.color}>
            <div>{indicator.percent}%</div>
            <span>{indicator.name}</span>
          </Subtexts>
        ))}
      </SubtextContainer>
    </SideContainer>

    <GraphContainer>
      <ResponsiveContainer>
        <PieChart>
          <Pie data={data} dataKey='percent'>
            {data.map((indicator) => (
              <Cell key={indicator.name} fill={indicator.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </GraphContainer>
  </PieChartContainer>
)
