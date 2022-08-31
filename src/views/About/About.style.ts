import styled from "styled-components"
import { TitleText } from "../../style/TextStyle.style"
import { Container } from '../../style/Container.style'

const ColumnPadding = '20px'

export const AboutContainer = styled(Container)`
  background-color: ${(props) => props.theme.colors.white};
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 40px;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`

export const AboutImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 50%;
  padding: ${ColumnPadding};
  overflow: hidden;

  @media (max-width: 800px) {
    flex: 100%;
  }
`

export const AboutImage = styled.img`
  width: 100%;
  height: 100%;
  border-top-left-radius: 40%;
  border-bottom-right-radius: 40%;
`

export const AboutTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  flex: 70%;

  padding: ${ColumnPadding};
`

export const AboutTitle = styled(TitleText)`
`

export const AboutText = styled.p`
  font-size: 18px;
  line-height: 200%;
  color: ${(props) => props.theme.colors.charcoal};

  margin-top: 20px;
`
