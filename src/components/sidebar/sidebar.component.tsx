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
  SidebarImgTitle,
} from './sidebar.styles'

export const SidebarComponent: React.FC = () => {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <LogImg src={logoImg} alt='Logo do Dashboard' />
        <SidebarImgTitle>FinanceBoard</SidebarImgTitle>
      </SidebarHeader>

      <SidebarMenu>
        <MenuItemLink href='/dashboard'>
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
        <MenuItemLink href='#'>
          <MdExitToApp />
          Sair
        </MenuItemLink>
      </SidebarMenu>
    </SidebarContainer>
  )
}
