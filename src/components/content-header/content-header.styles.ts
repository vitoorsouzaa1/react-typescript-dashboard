import styled from 'styled-components'

interface IContainerTitleProps {
  lineColor: string
}

export const ContentHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media (max-width: 320px) {
    flex-direction: column;
  }
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

  @media (max-width: 420px) {
    > h1 {
      font-size: 22px;

      &::after {
        content: '';
        display: block;
        width: 55px;
        border-bottom: 5px solid ${(props) => props.lineColor};
      }
    }
  }
`

export const ContentControllers = styled.div`
  display: flex;

  @media (max-width: 320px) {
    width: 100%;
    justify-content: space-around;
    margin-top: 20px;
  }
`
