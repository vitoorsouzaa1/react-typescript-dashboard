import styled from 'styled-components'

interface ISubtitlesProps {
  color: string
}

export const HistoryBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  height: 320px;
  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.white};
  margin: 10px 0;
  padding: 30px 20px;
  border-radius: 7px;
`

export const HistoryBoxHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  > h2 {
    margin-bottom: 20px;
    padding-left: 19px;
  }

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`

export const HeaderSubtitles = styled.ul`
  list-style: none;
  display: flex;
  padding-right: 19px;
`

export const Subtitles = styled.li<ISubtitlesProps>`
  display: flex;
  align-items: center;
  margin-bottom: 7px;
  margin-left: 7px;

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

  @media (max-width: 1280px) {
    > div {
      width: 30px;
      height: 30px;
    }
  }
`
