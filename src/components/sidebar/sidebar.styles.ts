import styled from 'styled-components'

export const SidebarContainer = styled.div`
  grid-area: SB;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.white};
`
