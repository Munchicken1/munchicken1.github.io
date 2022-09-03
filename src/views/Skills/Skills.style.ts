import styled, { css } from "styled-components"
import { TitleText } from "../../style/TextStyle.style"
import { Container } from "../../style/Container.style"
import * as S from "../../constants/StringConstants"
import { AnyARecord } from "dns"

export const SkillsContainer = styled(Container)`
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

interface IProps {
  id: string
}

export const SkillsListItem = styled.div<IProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 150px;
  margin: 15px;
  color: ${(props) => props.theme.colors.charcoal};
  transition: 0.3s ease-out;

  :hover {
    ${(props) => {
      if (props.id === S.Skills.skills.react) {
        return css`
          color: ${props.theme.colors.react};
        `
      } else if (props.id === S.Skills.skills.rubyonrails) {
        return css`
          color: ${props.theme.colors.rubyonrails};
        `
      } else if (props.id === S.Skills.skills.javascript) {
        return css`
          color: ${props.theme.colors.javascript};
        `
      } else if (props.id === S.Skills.skills.html) {
        return css`
          color: ${props.theme.colors.html};
        `
      } else if (props.id === S.Skills.skills.css) {
        return css`
          color: ${props.theme.colors.css};
        `
      } else {
        return css`
          color: ${props.theme.colors.moonComplementary};
        `
      }
    }}
  }
`

export const SkillsIcons = styled.i`
  font-size: 40px;
`

export const SkillsText = styled.p``
