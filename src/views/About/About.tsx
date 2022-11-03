import React from "react"
import {
  AboutContainer,
  AboutImageContainer,
  AboutTextContainer,
  AboutText,
  AboutImage,
  AboutTitle,
  AboutTitlesContainer,
  AboutTextsContainer,
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
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    let observer = new IntersectionObserver((e) => {
      e.forEach((el) => {
        if (el.isIntersecting) {
          setIsVisible(true)
          console.log("isIntersecting: ", el.isIntersecting)
          console.log("isVisible: ", isVisible)
        } else {
          setIsVisible(false)
        }
      })
    })
    let animationText = document.querySelector("ul#animated_text")
    console.log("animation Texts: ", animationText)
    observer.observe(animationText)
  }, [])

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
        <AboutTitlesContainer id="animated_text">
          {S.About.title.map((title) => (
            <AboutTitle
              currentLanguage={currentLanguage}
              key={title}
              isVisible={isVisible}
            >
              {title}
            </AboutTitle>
          ))}
        </AboutTitlesContainer>
        {/* <AboutTextsContainer>
          {S.About.Introduce.map((body) => (
            <AboutText currentLanguage={currentLanguage} key={body}>
              {body}
            </AboutText>
          ))}
        </AboutTextsContainer> */}
      </AboutTextContainer>
    </AboutContainer>
  )
}

const mapStateToProps = (state: StoreState) => ({
  currentLanguage: state.languageChangerReducer.currentLanguage,
})

export default reduxConnect(mapStateToProps)(About)
