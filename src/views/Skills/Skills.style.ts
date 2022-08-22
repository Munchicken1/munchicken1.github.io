import styled from "styled-components"
import { TitleText } from "../../style/TextStyle.style"
import { Container } from "../../style/Container.style"
import * as S from '../../constants/StringConstants'

export const SkillsContainer = styled(Container)`
  background-color: ${(props) => props.theme.colors.white};
  padding: 40px;
`

export const SkillsTitle = styled(TitleText)``

export const SkillsListContainer = styled.div`
  padding: 40px 20px 0px 20px;
  width: 80%;
`

export const SkillsList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
`

export const SkillsListItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 150px;
  margin: 15px;
  color: ${(props) => props.theme.colors.charcoal};
  :hover {
    color: ${(props) => props.color};
  }
  transition: 0.3s ease-out;
`

export const SkillsIcons = styled.i`
  font-size: 40px;
`

export const SkillsText = styled.p`
`
