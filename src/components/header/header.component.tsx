import React, { useMemo, useState } from 'react'

// Themes
import { useTheme } from '../../hooks/useTheme'

// Utils
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
  const { toggleTheme, theme } = useTheme()

  const [darkTheme, setDarkTheme] = useState(() =>
    theme.title === 'dark' ? true : false
  )

  const handleThemeChanger = () => {
    setDarkTheme(!darkTheme)
    toggleTheme()
  }

  const emoji = useMemo(() => {
    const index = Math.floor(Math.random() * emojis.length)

    return emojis[index]
  }, [])

  return (
    <HeaderContainer>
      <TogglerComponent
        labelLeft='Light'
        labelRight='Dark'
        checked={darkTheme}
        onChange={handleThemeChanger}
      />

      <ProfileContainer>
        <ProfileTitle>Olá, {emoji}</ProfileTitle>
        <UserName>Vítor Souza</UserName>
      </ProfileContainer>
    </HeaderContainer>
  )
}
