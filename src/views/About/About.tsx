import React from "react"
import {
  AboutContainer,
  AboutImageContainer,
  AboutTextContainer,
  AboutText,
  AboutImage,
  AboutTitle,
} from "./About.style"
import Selfie from "../../assets/SJ_selfie.jpg"
import * as EN from "../../constants/StringConstants"
import * as KR from "../../constants/StringConstantsKR"
import { connect as reduxConnect } from "react-redux"
import { StoreState } from "store"

interface IReduxProps {
  currentLanguage: string
}

const About: React.FC<IReduxProps> = ({ currentLanguage }) => {
  let S = EN
  if (currentLanguage === "EN") {
    S = EN
  } else if (currentLanguage === "KR") {
    S = KR
  }
  return (
    <AboutContainer id="about">
      <AboutImageContainer>
        <AboutImage src={Selfie} alt="Selfie" />
      </AboutImageContainer>
      <AboutTextContainer>
        <AboutTitle>{S.About.title}</AboutTitle>
        <AboutText>{S.About.Introduce}</AboutText>
      </AboutTextContainer>
    </AboutContainer>
  )
}

const mapStateToProps = (state: StoreState) => ({
  currentLanguage: state.languageChangerReducer.currentLanguage,
})

export default reduxConnect(mapStateToProps)(About)
