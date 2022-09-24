import styled from "styled-components"
import { TitleText } from "../../style/TextStyle.style"
import { Container } from "../../style/Container.style"
import { device } from "style/media"

// Containers
export const ExperiencesContainer = styled(Container)`
  justify-content: flex-start;

  @media ${device.mobile} {
    padding: 40px 20px;
  }
  @media ${device.tablet} {
    padding: 40px;
  }
`
export const ExperiencesSectionTitle = styled(TitleText)`
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

export const ExperiencesContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  margin-top: 40px;

  @media ${device.mobile} {
    align-items: flex-start;
  }
  @media ${device.tablet} {
    align-items: center;
  }
`
export const ExperienceContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 40px;

  @media ${device.mobile} {
    flex-direction: column;
    padding: 0;
  }
  @media ${device.tablet} {
    flex-direction: row;

    padding-left: 100px;
    padding-right: 100px;
  }
`

export const ExperiencesTitleColumn = styled.div`
  display: flex;
  justify-content: flex-start;

  padding: 10px;

  @media ${device.mobile} {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    border-bottom: 2px solid ${(props) => props.theme.colors.charcoal};
    border-right: none;
    text-align: left;
  }
  @media ${device.tablet} {
    flex: 0 1;
    width: 40%;
    min-width: 20%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;

    border-bottom: 2px solid ${(props) => props.theme.colors.charcoal};
    border-right: 2px solid ${(props) => props.theme.colors.charcoal};
    border-bottom-right-radius: 5px;
    text-align: right;
  }
`

export const ExperiencesDescriptionColumn = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  padding: 10px;

  @media ${device.mobile} {
    margin-left: 10px;
  }
  @media ${device.tablet} {
    margin-left: 40px;
  }
`
export const ExperiencesJobDescriptionsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: disc;

  margin-top: 5px;

  @media ${device.mobile} {
    padding-left: 0;
  }
  @media ${device.tablet} {
    padding-left: 15px;
  }
`

export const ExperiencesJobDescriptionContainer = styled.li`
  margin-top: 10px;
`

// Title Column
export const ExperiencesTitleText = styled.p`
  font-weight: 700;
  font-family: "Barlow", sans-serif;
  @media ${device.mobile} {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    font-size: 34px;

    margin-bottom: 5px;
  }
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    font-size: 24px;

    margin-bottom: 10px;
  }
`

export const ExperienceDateLocationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${device.mobile} {
    text-align: left;
    margin-top: 8px;
  }
  @media ${device.tablet} {
    text-align: right;
    margin-top: 0;
  }

  /* @media ${device.mobile} {
    width: 50%;
  } */
`
export const ExperiencesDateText = styled.p`
  font-family: "Barlow", sans-serif;
`
export const ExperiencesLocationText = styled.p`
  font-family: "Barlow", sans-serif;
`

// Description Column
export const ExperienceDescriptionHeaderRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const ExperiencesJobTitleText = styled.p`
  font-size: 28px;
  font-weight: 600;
  font-family: "Barlow", sans-serif;
`
export const ExperiencesJobDescriptionText = styled.p`
  font-size: 18px;
  line-height: 30px;
  font-family: "Quicksand", sans-serif;
`
