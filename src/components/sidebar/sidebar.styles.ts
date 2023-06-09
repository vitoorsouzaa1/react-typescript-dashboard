import styled, { css } from 'styled-components'

interface ISidebarContainerProps {
  menuIsOpen: boolean
}

interface IThemeTogglerFooterProps {
  menuIsOpen: boolean
}

export const SidebarContainer = styled.div<ISidebarContainerProps>`
  grid-area: SB;
  background-color: ${(props) => props.theme.colors.secondary};
  padding-left: 20px;
  border-right: 1px solid ${(props) => props.theme.colors.gray};

  @media (max-width: 600px) {
    padding-left: 20px;
    position: fixed;
    z-index: 2;
    width: 170px;
    height: ${(props) => (props.menuIsOpen ? '100vh' : '70px')};
    overflow: hidden;
    ${(props) =>
      !props.menuIsOpen &&
      css`
        border: none;
        border-bottom: 1px solid ${(props) => props.theme.colors.gray};
      `};
  }
`

export const SidebarHeader = styled.header`
  display: flex;
  align-items: center;
  height: 70px;
`
export const LogImg = styled.img`
  height: 40px;
  width: 40px;

  @media (max-width: 600px) {
    display: none;
  }
`

export const SidebarImgTitle = styled.h3`
  color: ${(props) => props.theme.colors.white};
  margin-left: 10px;

  @media (max-width: 600px) {
    display: none;
  }
`

export const SidebarMenu = styled.nav`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`

export const MenuItemLink = styled.a`
  color: ${(props) => props.theme.colors.info};
  text-decoration: none;
  margin: 7px 0;
  transition: opacity 0.3s;
  display: flex;
  align-items: center;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }

  > svg {
    font-size: 18px;
    margin-right: 5px;
  }
`

export const MenuItemButton = styled.button`
  font-size: 16px;
  color: ${(props) => props.theme.colors.info};
  background: none;
  border: none;
  margin: 7px 0;
  display: flex;
  align-items: center;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }

  > svg {
    font-size: 18px;
    margin-right: 5px;
  }
`

export const ToggleMenu = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  font-size: 22px;
  background-color: ${(props) => props.theme.colors.warning};
  color: ${(props) => props.theme.colors.white};
  transition: opacity 0.3s;
  display: none;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const ThemeToggleFooter = styled.footer<IThemeTogglerFooterProps>`
  display: none;
  position: absolute;
  bottom: 30px;

  @media (max-width: 470px) {
    display: ${(props) => (props.menuIsOpen ? 'flex' : 'none')};
  }
`
