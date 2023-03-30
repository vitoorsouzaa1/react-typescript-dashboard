import React, { useState } from 'react'
import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
  MdClose,
  MdMenu,
} from 'react-icons/md'

// Components
import { TogglerComponent } from '../toggle/toggler.component'

// Images
import logoImg from '../../assets/logo.svg'

// Custom Hooks
import { useAuth } from '../../hooks/useAuth'
import { useTheme } from '../../hooks/useTheme'

// Styles
import {
  SidebarContainer,
  SidebarHeader,
  SidebarMenu,
  MenuItemLink,
  LogImg,
  SidebarImgTitle,
  MenuItemButton,
  ThemeToggleFooter,
  ToggleMenu,
} from './sidebar.styles'

export const SidebarComponent: React.FC = () => {
  const { signOut } = useAuth()
  const { toggleTheme, theme } = useTheme()

  const [toggleMenuIsOpened, setToggleMenuIsOpened] = useState(false)
  const [darkTheme, setDarkTheme] = useState(() =>
    theme.title === 'dark' ? true : false
  )

  const handleToggleMenu = () => {
    setToggleMenuIsOpened(!toggleMenuIsOpened)
  }

  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme)
    toggleTheme()
  }

  return (
    <SidebarContainer menuIsOpen={toggleMenuIsOpened}>
      <SidebarHeader>
        <ToggleMenu onClick={handleToggleMenu}>
          {toggleMenuIsOpened ? <MdClose /> : <MdMenu />}
        </ToggleMenu>

        <LogImg src={logoImg} alt='Logo do Dashboard' />
        <SidebarImgTitle>FinanceBoard</SidebarImgTitle>
      </SidebarHeader>

      <SidebarMenu>
        <MenuItemLink href='/'>
          <MdDashboard />
          Dashboard
        </MenuItemLink>

        <MenuItemLink href='/list/entry-balance'>
          <MdArrowUpward />
          Entradas
        </MenuItemLink>

        <MenuItemLink href='/list/output-balance'>
          <MdArrowDownward />
          Saidas
        </MenuItemLink>

        <MenuItemButton onClick={signOut}>
          <MdExitToApp />
          Sair
        </MenuItemButton>
      </SidebarMenu>

      <ThemeToggleFooter menuIsOpen={toggleMenuIsOpened}>
        <TogglerComponent
          labelLeft='Light'
          labelRight='Dark'
          checked={darkTheme}
          onChange={handleChangeTheme}
        />
      </ThemeToggleFooter>
    </SidebarContainer>
  )
}
