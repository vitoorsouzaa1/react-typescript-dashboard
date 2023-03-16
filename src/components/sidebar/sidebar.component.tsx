import React from 'react'
import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
} from 'react-icons/md'

// Images
import logoImg from '../../assets/logo.svg'

// Styles
import {
  SidebarContainer,
  SidebarHeader,
  SidebarMenu,
  MenuItemLink,
  LogImg,
} from './sidebar.styles'

export const SidebarComponent: React.FC = () => {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <LogImg src={logoImg} alt='Logo do Dashboard' />
      </SidebarHeader>

      <SidebarMenu>
        <MenuItemLink href='#'>
          <MdDashboard />
          Dashboard
        </MenuItemLink>
        <MenuItemLink href='#'>
          <MdArrowUpward />
          Entradas
        </MenuItemLink>
        <MenuItemLink href='#'>
          <MdArrowDownward />
          Saidas
        </MenuItemLink>
        <MenuItemLink href='#'>
          <MdExitToApp />
          Sair
        </MenuItemLink>
      </SidebarMenu>
    </SidebarContainer>
  )
}
