import React from 'react'

// Styles
import { ToggleContainer, ToggleLabel, ToggleSelector } from './toggler.styles'

export const TogglerComponent: React.FC = () => {
  return (
    <ToggleContainer>
      <ToggleLabel>Light</ToggleLabel>
      <ToggleSelector
        checked
        uncheckedIcon={false}
        checkedIcon={false}
        onChange={() => console.log('mudou')}
      />
      <ToggleLabel>Dark</ToggleLabel>
    </ToggleContainer>
  )
}
