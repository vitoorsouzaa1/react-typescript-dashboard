import styled from 'styled-components'

export const SidebarContainer = styled.div`
  grid-area: SB;
  background-color: ${(props) => props.theme.colors.secondary};
  padding-left: 20px;
  border-right: 1px solid ${(props) => props.theme.colors.gray};
`

export const SidebarHeader = styled.header`
  display: flex;
  align-items: center;
  height: 70px;
`
export const LogImg = styled.img`
  height: 40px;
  width: 40px;
`

export const SidebarImgTitle = styled.h3`
  color: ${(props) => props.theme.colors.white};
  margin-left: 10px;
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
