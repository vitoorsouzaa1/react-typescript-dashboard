import React, { InputHTMLAttributes } from 'react'

// Styles
import { CustomInputContainer } from './custom-input.styles'

type TInputProps = InputHTMLAttributes<HTMLInputElement>

export const CustomInput: React.FC<TInputProps> = ({ ...rest }) => (
  <CustomInputContainer {...rest} />
)
