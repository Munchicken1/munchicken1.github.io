import React from "react"
import {
  HomeContainer,
  HomeText,
  CountryIcon,
  IconsContainer,
  HomeBannerText,
  HomeBannerContainer,
} from "./Home.style"
import * as S from "../../constants/StringConstants"

const Home = () => {
  return (
    <HomeContainer id="home">
      <HomeBannerContainer>
          <HomeBannerText>SJ</HomeBannerText>
      </HomeBannerContainer>
      <HomeText>{S.Home.title}</HomeText>
      <IconsContainer>
        <CountryIcon
          className="iconify"
          data-icon="twemoji:flag-united-states"
        ></CountryIcon>
        <CountryIcon
          className="iconify"
          data-icon="twemoji:flag-south-korea"
        ></CountryIcon>
      </IconsContainer>
    </HomeContainer>
  )
}

export default Home
