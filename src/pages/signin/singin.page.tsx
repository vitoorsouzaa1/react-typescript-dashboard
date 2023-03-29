import React, { useState } from 'react'

// Components
import { CustomInput } from '../../components/custom-input/custom-input.component'
import { CustomButton } from '../../components/custom-button/custom-button.component'

// Custom Hooks
import { useAuth } from '../../hooks/useAuth'

// Images
import logoImg from '../../assets/logo.svg'

// Styles
import {
  SignInContainer,
  Logo,
  FormContainer,
  FormTitle,
} from './signin.styles'

export const SingInPage: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const { signIn } = useAuth()

  return (
    <SignInContainer>
      <Logo>
        <img src={logoImg} alt='financeboard' />
      </Logo>

      <FormContainer onSubmit={() => signIn(email, password)}>
        <FormTitle>Login</FormTitle>

        <CustomInput
          type='email'
          placeholder='Email'
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <CustomInput
          type='password'
          placeholder='Senha'
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <CustomButton type='submit'>Entrar</CustomButton>
      </FormContainer>
    </SignInContainer>
  )
}
