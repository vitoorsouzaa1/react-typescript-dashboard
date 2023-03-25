import styled from 'styled-components'

interface ISubtextProps {
  color: string
}

export const PieChartContainer = styled.div`
  width: 48%;
  height: 260px;
  margin: 10px 0;
  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.white};
  border-radius: 7px;
  display: flex;
`

export const SideContainer = styled.aside`
  padding: 30px 20px;

  > h2 {
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
`

export const Subtexts = styled.li<ISubtextProps>`
  display: flex;
  align-items: center;
  margin-bottom: 7px;

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
`

export const GraphContainer = styled.main`
  display: flex;
  flex: 1;
  justify-content: center;
`
