import React from "react"
import {
  ExperiencesContainer,
  ExperiencesSectionTitle,
  ExperiencesDescriptionColumn,
  ExperiencesTitleText,
  ExperiencesDateText,
  ExperiencesLocationText,
  ExperiencesJobTitleText,
  ExperiencesJobDescriptionText,
  ExperiencesTitleColumn,
  ExperiencesContentContainer,
  ExperiencesJobDescriptionsContainer,
  ExperienceContainer,
  ExperiencesJobDescriptionContainer,
} from "./Experience.style"
import * as S from "../../constants/StringConstants"

const Experience = () => {
  return (
    <ExperiencesContainer id="experience">
      <ExperiencesSectionTitle>{S.Experience.title}</ExperiencesSectionTitle>
      <ExperiencesContentContainer>
        {S.Experience.contents.map((content) => (
          <ExperienceContainer key={content.Title}>
            <ExperiencesTitleColumn>
              <ExperiencesTitleText>{content.Title}</ExperiencesTitleText>
              <ExperiencesDateText>{content.Date}</ExperiencesDateText>
              <ExperiencesLocationText>
                {content.Location}
              </ExperiencesLocationText>
            </ExperiencesTitleColumn>

            <ExperiencesDescriptionColumn>
              <ExperiencesJobTitleText>
                {content.JobTitle}
              </ExperiencesJobTitleText>
              <ExperiencesJobDescriptionsContainer>
                {content.Descriptions.map((description) => (
                  <ExperiencesJobDescriptionContainer key={Math.random()}>
                    <ExperiencesJobDescriptionText key={Math.random()}>
                      {description}
                    </ExperiencesJobDescriptionText>
                  </ExperiencesJobDescriptionContainer>
                ))}
              </ExperiencesJobDescriptionsContainer>
            </ExperiencesDescriptionColumn>
          </ExperienceContainer>
        ))}
      </ExperiencesContentContainer>
    </ExperiencesContainer>
  )
}

export default Experience
