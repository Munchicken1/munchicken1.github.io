import React from "react"
import {
  HomeContainer,
  HomeText,
  CountryIcon,
  IconsContainer,
  HomeBannerText,
  HomeBannerContainer,
  IconContainer,
  Logo,
} from "./Home.style"
import * as EN from "../../constants/StringConstants"
import * as KR from "../../constants/StringConstantsKR"
import { connect as reduxConnect } from "react-redux"
import { bindActionCreators } from "redux"
import { StoreState } from "store"
import {
  setLanguageEN,
  setLanguageKR,
} from "store/languageChanger/languageChanger_actions"
import { LogoChar } from "assets/SVG/LogoChar"
import { LogoWhite } from "assets/SVG/LogoWhite"
import { SmallLogo } from "assets/SVG/SmallLogo"
import { theme } from "style/Theme"
import { DefaultTheme } from "styled-components"

interface IReduxProps extends IProps {
  setLanguageEN: () => void
  setLanguageKR: () => void
  currentLanguage: string
}

interface IProps {
  selectedTheme: DefaultTheme
}

const Home: React.FC<IReduxProps> = ({
  currentLanguage,
  setLanguageEN,
  setLanguageKR,
  selectedTheme,
}) => {
  let S = EN
  if (currentLanguage === "EN") {
    S = EN
  } else if (currentLanguage === "KR") {
    S = KR
  }

  let colorFill = "Char"
  if (selectedTheme.colors.currentTheme !== "Dark") {
    colorFill = "Char"
  } else if (selectedTheme.colors.currentTheme === "Dark") {
    colorFill = "White"
  }

  return (
    <HomeContainer id="home">
      {/* <SmallLogo /> */}
      <HomeBannerContainer>
        {currentLanguage === "EN" && colorFill === "Char" ? (
          <LogoChar />
        ) : currentLanguage === "EN" && colorFill === "White" ? (
          <LogoWhite />
        ) : (
          <HomeBannerText>{S.Home.bannerText}</HomeBannerText>
        )}
      </HomeBannerContainer>
      {/* <HomeText currentLanguage={currentLanguage}>{S.Home.title}</HomeText> */}
      <IconsContainer>
        <IconContainer onClick={setLanguageEN}>
          <CountryIcon
            className="iconify"
            data-icon="twemoji:flag-united-states"
          ></CountryIcon>
        </IconContainer>
        <IconContainer onClick={setLanguageKR}>
          <CountryIcon
            className="iconify"
            data-icon="twemoji:flag-south-korea"
          ></CountryIcon>
        </IconContainer>
      </IconsContainer>
    </HomeContainer>
  )
}

const mapStateToProps = (state: StoreState) => ({
  currentLanguage: state.languageChangerReducer.currentLanguage,
})

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators({ setLanguageEN, setLanguageKR }, dispatch)

export default reduxConnect(mapStateToProps, mapDispatchToProps)(Home)
