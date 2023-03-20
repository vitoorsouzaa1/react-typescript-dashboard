import styled from 'styled-components'

interface IContainerTitleProps {
  lineColor: string
}

export const ContentHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`

export const ContentTitle = styled.div<IContainerTitleProps>`
  > h1 {
    color: ${(props) => props.theme.colors.white};

    &::after {
      content: '';
      display: block;
      width: 55px;
      border-bottom: 10px solid ${(props) => props.lineColor};
    }
  }
`

export const ContentControllers = styled.div`
  display: flex;
`
