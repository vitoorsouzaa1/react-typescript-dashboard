import React, { useMemo } from 'react'

import emojis from '../../utils/emojis'

// Components
import { TogglerComponent } from '../toggle/toggler.component'

// Styles
import {
  HeaderContainer,
  ProfileContainer,
  ProfileTitle,
  UserName,
} from './header.styles'

export const HeaderComponent: React.FC = () => {
  const emoji = useMemo(() => {
    const index = Math.floor(Math.random() * emojis.length)

    return emojis[index]
  }, [])

  return (
    <HeaderContainer>
      <TogglerComponent />

      <ProfileContainer>
        <ProfileTitle>Olá, {emoji}</ProfileTitle>
        <UserName>Vítor Souza</UserName>
      </ProfileContainer>
    </HeaderContainer>
  )
}
