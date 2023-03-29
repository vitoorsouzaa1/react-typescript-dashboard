import styled from 'styled-components'

export const CustomButtonContainer = styled.button`
  width: 100%;
  height: 35px;
  margin: 7px 0;
  border-radius: 5px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.warning};
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }
`
