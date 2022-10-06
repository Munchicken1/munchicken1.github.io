import React from "react"
import {
  HomeContainer,
  HomeText,
  CountryIcon,
  IconsContainer,
  HomeBannerText,
  HomeBannerContainer,
  IconContainer,
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

interface IReduxProps {
  setLanguageEN: () => void
  setLanguageKR: () => void
  currentLanguage: string
}

const Home: React.FC<IReduxProps> = ({
  currentLanguage,
  setLanguageEN,
  setLanguageKR,
}) => {
  let S = EN
  if (currentLanguage === "EN") {
    S = EN
  } else if (currentLanguage === "KR") {
    S = KR
  }

  return (
    <HomeContainer id="home">
      <HomeBannerContainer>
        <HomeBannerText>{S.Home.bannerText}</HomeBannerText>
      </HomeBannerContainer>
      <HomeText>{S.Home.title}</HomeText>
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
