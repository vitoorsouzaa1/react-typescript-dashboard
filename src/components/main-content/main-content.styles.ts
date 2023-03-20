import styled from 'styled-components'

export const MainContentContainer = styled.div`
  grid-area: MC;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  padding: 25px;
`
