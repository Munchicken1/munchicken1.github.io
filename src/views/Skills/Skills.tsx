import React from "react"
import {
  SkillsContainer,
  SkillsTitle,
  SkillsList,
  SkillsListItem,
  SkillsListContainer,
  SkillsIcons,
  SkillsText,
} from "./Skills.style"
import * as S from "../../constants/StringConstants"

const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <SkillsTitle>{S.Navigation.Skills}</SkillsTitle>
      <SkillsListContainer>
        <SkillsList>
          <SkillsListItem color={S.Skills.skillsColor.react}>
            <SkillsIcons className="devicon-react-original" />
            <SkillsText>{S.Skills.skills.react}</SkillsText>
          </SkillsListItem>
          <SkillsListItem color={S.Skills.skillsColor.rubyonrails}>
            <SkillsIcons className="devicon-rails-plain" />
            <SkillsText>{S.Skills.skills.rubyonrails}</SkillsText>
          </SkillsListItem>
          <SkillsListItem color={S.Skills.skillsColor.javascript}>
            <SkillsIcons className="devicon-javascript-plain" />
            <SkillsText>{S.Skills.skills.javascript}</SkillsText>
          </SkillsListItem>
        </SkillsList>
        <SkillsList>
          <SkillsListItem color={S.Skills.skillsColor.html}>
            <SkillsIcons className="devicon-html5-plain" />
            <SkillsText>{S.Skills.skills.html}</SkillsText>
          </SkillsListItem>
          <SkillsListItem color={S.Skills.skillsColor.css}>
            <SkillsIcons className="devicon-css3-plain" />
            <SkillsText>{S.Skills.skills.css}</SkillsText>
          </SkillsListItem>
        </SkillsList>
      </SkillsListContainer>
    </SkillsContainer>
  )
}

export default Skills
