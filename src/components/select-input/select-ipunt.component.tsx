import React from 'react'

// Styles
import { SelectContainer } from './select-input.styles'

interface ISelectIputProps {
  options: {
    value: string | number
    label: string | number
  }[]
}

export const SelectIpuntComponent: React.FC<ISelectIputProps> = ({
  options,
}) => {
  return (
    <SelectContainer>
      <select>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </SelectContainer>
  )
}
