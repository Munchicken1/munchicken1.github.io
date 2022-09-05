import styled from "styled-components"
import { TitleText } from "../../style/TextStyle.style"
import { Container } from "../../style/Container.style"
import { device } from "style/media"

const ColumnPadding = "20px"

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
`

export const AboutTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;

  padding: ${ColumnPadding};
`

export const AboutTitle = styled(TitleText)``

export const AboutText = styled.p`
  font-size: 18px;
  line-height: 200%;
  color: ${(props) => props.theme.colors.charcoal};
  font-family: "Roboto", sans-serif;

  margin-top: 20px;
`
