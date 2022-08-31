import styled from "styled-components"
import { TitleText } from "../../style/TextStyle.style"
import { Container } from "../../style/Container.style"

// Containers
export const ExperiencesContainer = styled(Container)`
  justify-content: flex-start;
  padding: 40px;
`
export const ExperiencesSectionTitle = styled(TitleText)``

export const ExperiencesContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  margin-top: 40px;
`
export const ExperienceContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;

  padding-left: 100px;
  padding-right: 100px;
`

export const ExperiencesTitleColumn = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  border-right: 2px solid ${(props) => props.theme.colors.charcoal};

  text-align: right;
  padding: 10px;
`

export const ExperiencesDescriptionColumn = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  margin-left: 40px;
  padding: 10px;
`
export const ExperiencesJobDescriptionsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: disc;

  margin-top: 5px;
  padding-left: 15px;
`

export const ExperiencesJobDescriptionContainer = styled.li`
  margin-top: 10px;
`

// Title Column
export const ExperiencesTitleText = styled.p`
  font-weight: 700;
  font-size: 24px;

  margin-bottom: 10px;
`
export const ExperiencesDateText = styled.p``
export const ExperiencesLocationText = styled.p``

// Description Column
export const ExperiencesJobTitleText = styled.p`
  font-size: 28px;
  font-weight: 600;
`
export const ExperiencesJobDescriptionText = styled.p`
  font-size: 18px;
  line-height: 24px;
`
