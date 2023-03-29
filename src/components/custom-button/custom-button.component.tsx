import React, { ButtonHTMLAttributes } from 'react'

// Styles
import { CustomButtonContainer } from './custom-button.styles'

type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const CustomButton: React.FC<TButtonProps> = ({ children, ...rest }) => {
  return <CustomButtonContainer {...rest}>{children}</CustomButtonContainer>
}
