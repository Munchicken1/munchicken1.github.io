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
import useViewport from "utilities/hooks/useViewport"
import { DeviceNameEnum } from "style/media"
import * as EN from "../../constants/StringConstants"
import * as KR from "../../constants/StringConstantsKR"
import { connect as reduxConnect } from "react-redux"
import { StoreState } from "store"

interface IReduxProps {
  currentLanguage: string
}

const Experience: React.FC<IReduxProps> = ({ currentLanguage }) => {
  const viewport = useViewport()

  let S = EN
  if (currentLanguage === "EN") {
    S = EN
  } else if (currentLanguage === "KR") {
    S = KR
  }
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

const mapStateToProps = (state: StoreState) => ({
  currentLanguage: state.languageChangerReducer.currentLanguage,
})

export default reduxConnect(mapStateToProps)(Experience)
