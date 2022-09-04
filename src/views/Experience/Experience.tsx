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
  ExperienceDateLocationContainer,
  ExperienceDescriptionHeaderRow,
} from "./Experience.style"
import * as S from "../../constants/StringConstants"
import useViewport from "utilities/hooks/useViewport"
import { DeviceNameEnum } from "style/media"

const Experience = () => {
  const viewport = useViewport()
  return (
    <ExperiencesContainer id="experience">
      <ExperiencesSectionTitle>{S.Experience.title}</ExperiencesSectionTitle>

      <ExperiencesContentContainer>
        {S.Experience.contents.map((content) => (
          <ExperienceContainer key={content.Title}>
            <ExperiencesTitleColumn>
              <ExperiencesTitleText>{content.Title}</ExperiencesTitleText>
              {viewport !== DeviceNameEnum.mobile && (
                <ExperienceDateLocationContainer>
                  <ExperiencesDateText>{content.Date}</ExperiencesDateText>
                  <ExperiencesLocationText>
                    {content.Location}
                  </ExperiencesLocationText>
                </ExperienceDateLocationContainer>
              )}
            </ExperiencesTitleColumn>

            <ExperiencesDescriptionColumn>
              <ExperienceDescriptionHeaderRow>
                <ExperiencesJobTitleText>
                  {content.JobTitle}
                </ExperiencesJobTitleText>
                {viewport === DeviceNameEnum.mobile && (
                  <ExperienceDateLocationContainer>
                    <ExperiencesDateText>{content.Date}</ExperiencesDateText>
                    <ExperiencesLocationText>
                      {content.Location}
                    </ExperiencesLocationText>
                  </ExperienceDateLocationContainer>
                )}
              </ExperienceDescriptionHeaderRow>
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
