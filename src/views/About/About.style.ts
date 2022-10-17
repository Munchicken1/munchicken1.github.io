import styled, { css } from "styled-components"
import { TitleText } from "../../style/TextStyle.style"
import { Container } from "../../style/Container.style"
import { device } from "style/media"

const ColumnPadding = "20px"

interface IProps {
  currentLanguage: string
}

export const AboutContainer = styled(Container)`
  background-color: ${(props) => props.theme.colors.white};
  justify-content: space-between;
  align-items: flex-start;

  @media ${device.mobile} {
    flex-direction: column;
    padding: 40px 20px;
  }
  @media ${device.tablet} {
    padding: 40px 150px;
  }
  @media ${device.laptop} {
    flex-direction: row;
  }
`

export const AboutImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${ColumnPadding};
  overflow: hidden;

  @media ${device.mobile} {
    min-width: 0;
  }
  @media ${device.tablet} {
    min-width: 400px;
  }
`

export const AboutImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`

export const AboutTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  min-width: 45%;

  padding: ${ColumnPadding};
`

export const AboutTitle = styled(TitleText)<IProps>`
  margin-bottom: 5px;

  ${(props) => {
    if (props.currentLanguage === "KR") {
      return css`
        font-family: "Gowun Dodum";
      `
    } else {
      return css`
        font-family: "Aboreto";
      `
    }
  }}
`

export const AboutTitlesContainer = styled.div``

export const AboutTextsContainer = styled.div`
  margin-top: 20px;
`
export const AboutText = styled.p<IProps>`
  font-size: 18px;
  line-height: 200%;
  color: ${(props) => props.theme.colors.charcoal};
  /* font-family: "Quicksand", sans-serif; */

  ${(props) => {
    if (props.currentLanguage === "KR") {
      return css`
        font-family: "Gowun Dodum";
      `
    } else {
      return css`
        font-family: "Quicksand", sans-serif;
      `
    }
  }}
`
