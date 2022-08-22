import React from "react"
import {
  ExperienceContainer,
  ExperienceTitle,
  ExperienceText,
  ExperienceTextContainer,
} from "./Experience.style"
import * as S from "../../constants/StringConstants"

const Experience = () => {
  return (
    <ExperienceContainer id="experience">
      <ExperienceTitle>{S.Experience.title}</ExperienceTitle>
      <ExperienceTextContainer>
        <ExperienceText>{S.Experience.contents}</ExperienceText>
        <br />
        <ExperienceText>{S.Experience.contents}</ExperienceText>
      </ExperienceTextContainer>
    </ExperienceContainer>
  )
}

export default Experience
