import styled, { css } from "styled-components"
import { TitleText } from "../../style/TextStyle.style"
import { Container } from "../../style/Container.style"
import * as S from "../../constants/StringConstants"
import { AnyARecord } from "dns"
import { device } from "style/media"

export const SkillsContainer = styled(Container)`
  padding: 40px;
`

export const SkillsTitle = styled(TitleText)`
  position: relative;
  padding-bottom: 20px;

  &:after {
    content: "";
    position: absolute;
    display: block;
    width: 48px;
    height: 2px;
    left: 50%;
    bottom: -3px;
    margin: 0 -24px;
    background: #aaa;
  }
`

export const SkillsListContainer = styled.div`
  padding: 40px 20px 0px 20px;
  width: 80%;
`

export const SkillsList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  margin-bottom: 25px;
`

interface IProps {
  id: string
}

export const SkillsListItem = styled.div<IProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.charcoal};
  transition: 0.3s ease-out;

  margin: 15px;

  @media ${device.mobile} {
    width: 50px;
  }

  @media ${device.tablet} {
    width: 150px;
  }
`

export const SkillsText = styled.p`
  margin-top: 10px;
  font-size: 17px;
  font-family: "Roboto", sans-serif;
  text-align: center;
`
