import styled from 'styled-components'

interface IDashboardBoxContainerProps {
  color: string
}

export const DashboardBoxContainer = styled.div<IDashboardBoxContainerProps>`
  background-color: ${(props) => props.color};
  width: 32%;
  height: 150px;
  margin: 10px 0;
  color: ${(props) => props.theme.colors.white};
  border-radius: 7px;
  padding: 10px 20px;
  position: relative;
  overflow: hidden;

  > img {
    position: absolute;
    height: 110%;
    top: -10px;
    right: -30px;
    opacity: 30%;
  }

  > h1 {
    font-size: 36px;
    font-weight: 400;
  }

  > h2 {
    font-size: 30px;
    font-weight: 500;
  }

  > small {
    font-size: 16px;
    position: absolute;
    bottom: 10px;
  }
`
