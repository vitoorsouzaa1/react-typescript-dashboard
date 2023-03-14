import React, { useMemo } from 'react'

import emojis from '../../utils/emojis'

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
      <h1>Toggle</h1>

      <ProfileContainer>
        <ProfileTitle>Olá, {emoji}</ProfileTitle>
        <UserName>Vítor</UserName>
      </ProfileContainer>
    </HeaderContainer>
  )
}
