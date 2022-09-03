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
          <SkillsListItem id={S.Skills.skills.react}>
            {/* color={S.Skills.skillsColor.react} */}
            <SkillsIcons className="devicon-react-original" />
            <SkillsText>{S.Skills.skills.react}</SkillsText>
          </SkillsListItem>
          <SkillsListItem id={S.Skills.skills.typescript}>
            <SkillsIcons className="devicon-typescript-plain" />
            <SkillsText>{S.Skills.skills.typescript}</SkillsText>
          </SkillsListItem>
          <SkillsListItem id={S.Skills.skills.javascript}>
            {/* color={S.Skills.skillsColor.javascript} */}
            <SkillsIcons className="devicon-javascript-plain" />
            <SkillsText>{S.Skills.skills.javascript}</SkillsText>
          </SkillsListItem>
          <SkillsListItem id={S.Skills.skills.html}>
            {/* color={S.Skills.skillsColor.html} */}
            <SkillsIcons className="devicon-html5-plain" />
            <SkillsText>{S.Skills.skills.html}</SkillsText>
          </SkillsListItem>
          <SkillsListItem id={S.Skills.skills.css}>
            {/* color={S.Skills.skillsColor.css} */}
            <SkillsIcons className="devicon-css3-plain" />
            <SkillsText>{S.Skills.skills.css}</SkillsText>
          </SkillsListItem>
        </SkillsList>
        <SkillsList>
          <SkillsListItem id={S.Skills.skills.python}>
            <SkillsIcons className="devicon-python-plain" />
            <SkillsText>{S.Skills.skills.python}</SkillsText>
          </SkillsListItem>
          <SkillsListItem id={S.Skills.skills.rubyonrails}>
            <SkillsIcons className="devicon-rails-plain" />
            <SkillsText>{S.Skills.skills.rubyonrails}</SkillsText>
          </SkillsListItem>
          <SkillsListItem id={S.Skills.skills.postgresql}>
            <SkillsIcons className="devicon-postgresql-plain" />
            <SkillsText>{S.Skills.skills.postgresql}</SkillsText>
          </SkillsListItem>
          <SkillsListItem id={S.Skills.skills.firebase}>
            <SkillsIcons className="devicon-firebase-plain" />
            <SkillsText>{S.Skills.skills.firebase}</SkillsText>
          </SkillsListItem>
        </SkillsList>
        <SkillsList>
        <SkillsListItem id={S.Skills.skills.aws}>
            <SkillsIcons className="devicon-amazonwebservices-plain" />
            <SkillsText>{S.Skills.skills.aws}</SkillsText>
          </SkillsListItem>
          <SkillsListItem id={S.Skills.skills.java}>
            <SkillsIcons className="devicon-java-plain" />
            <SkillsText>{S.Skills.skills.java}</SkillsText>
          </SkillsListItem>
          <SkillsListItem id={S.Skills.skills.git}>
            <SkillsIcons className="devicon-git-plain" />
            <SkillsText>{S.Skills.skills.git}</SkillsText>
          </SkillsListItem>
  

        </SkillsList>
      </SkillsListContainer>
    </SkillsContainer>
  )
}

export default Skills
