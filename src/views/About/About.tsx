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
import * as S from "constants/StringConstants"

const About = () => {
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

export default About
