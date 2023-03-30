import styled from 'styled-components'

interface ISubtextProps {
  color: string
}

export const BarchartBoxContainer = styled.div`
  display: flex;
  width: 48%;
  min-height: 260px;
  margin: 10px 0;
  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.white};
  border-radius: 7px;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
  }
`

export const TextInfoContainer = styled.aside`
  padding: 30px 20px;

  > h2 {
    padding-left: 19px;
    margin-bottom: 60px;
  }
`

export const SubtextContainer = styled.ul`
  list-style: none;
  height: 175px;
  overflow-y: auto;
  padding-right: 15px;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.secondary};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.colors.tertiary};
  }

  @media (max-width: 1200px) {
    display: flex;
    height: auto;
  }
`

export const Subtexts = styled.li<ISubtextProps>`
  display: flex;
  align-items: center;
  margin-bottom: 7px;
  padding-left: 19px;

  > div {
    background-color: ${(props) => props.color};
    width: 40px;
    height: 40px;
    border-radius: 5px;
    font-size: 14px;
    line-height: 40px;
    text-align: center;
  }

  > span {
    margin-left: 5px;
  }

  @media (max-width: 1200px) {
    > div {
      width: 30px;
      height: 30px;

      font-size: 10px;
      line-height: 30px;
    }
  }
`

export const BarChartContainer = styled.main`
  flex: 1;
  min-height: 150px;
  display: flex;
  justify-content: center;
  padding-top: 35px;
`
