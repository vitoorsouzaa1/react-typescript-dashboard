import styled from 'styled-components'

export const HeaderContainer = styled.div`
  grid-area: HD;
  background-color: ${(props) => props.theme.colors.secondary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray};
`
export const ProfileContainer = styled.div`
  color: ${(props) => props.theme.colors.white};
`

export const ProfileTitle = styled.h3``

export const UserName = styled.span``
