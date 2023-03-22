import React from 'react'

// Styles
import { SelectContainer } from './select-input.styles'

interface ISelectIputProps {
  options: {
    value: string | number
    label: string | number
  }[]
  onChange(e: React.ChangeEvent<HTMLSelectElement>): void | undefined
  defaultValue?: string | number
}

export const SelectIpuntComponent: React.FC<ISelectIputProps> = ({
  options,
  onChange,
  defaultValue,
}) => {
  return (
    <SelectContainer>
      <select onChange={onChange} defaultValue={defaultValue}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </SelectContainer>
  )
}
