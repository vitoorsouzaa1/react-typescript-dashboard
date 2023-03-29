import React from 'react'

// Styles
import { ToggleContainer, ToggleLabel, ToggleSelector } from './toggler.styles'

interface ITogglerComponentProps {
  labelLeft: string
  labelRight: string
  checked: boolean
  onChange(): void
}

export const TogglerComponent: React.FC<ITogglerComponentProps> = ({
  labelLeft,
  labelRight,
  checked,
  onChange,
}) => {
  return (
    <ToggleContainer>
      <ToggleLabel>{labelLeft}</ToggleLabel>
      <ToggleSelector
        checked={checked}
        uncheckedIcon={false}
        checkedIcon={false}
        onChange={onChange}
      />
      <ToggleLabel>{labelRight}</ToggleLabel>
    </ToggleContainer>
  )
}
