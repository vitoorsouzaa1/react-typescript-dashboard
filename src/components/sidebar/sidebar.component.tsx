import React from 'react'
import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
} from 'react-icons/md'

// Images
import logoImg from '../../assets/logo.svg'

// Custom Hooks
import { useAuth } from '../../hooks/useAuth'

// Styles
import {
  SidebarContainer,
  SidebarHeader,
  SidebarMenu,
  MenuItemLink,
  LogImg,
  SidebarImgTitle,
  MenuItemButton,
} from './sidebar.styles'

export const SidebarComponent: React.FC = () => {
  const { signOut } = useAuth()

  return (
    <SidebarContainer>
      <SidebarHeader>
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
    </SidebarContainer>
  )
}
