import { device } from "style/media"
import styled from "styled-components"
import { Container } from "../../style/Container.style"

export const HomeContainer = styled(Container)`
  height: 100vh;
`

export const HomeBannerContainer = styled.div`
  display: flex;
  place-items: center;

  @media ${device.mobile} {
    height: 18vh;
  }
  @media ${device.tablet} {
    height: 17vw;
  }
`

export const HomeBannerText = styled.p`
  width: 100%;
  font-family: "Exo", sans-serif;
  font-weight: 600;

  background: linear-gradient(
    219deg,
    ${(props) => props.theme.colors.teaGreen} 25%,
    transparent 25%,
    transparent 26%,
    ${(props) => props.theme.colors.limeGreen} 26%,
    ${(props) => props.theme.colors.limeGreen} 39%,
    transparent 39%,
    transparent 40%,
    ${(props) => props.theme.colors.moonComplementary} 40%,
    ${(props) => props.theme.colors.moonComplementary} 57%,
    transparent 57%,
    transparent 58%,
    ${(props) => props.theme.colors.lightPurple} 58%,
    ${(props) => props.theme.colors.lightPurple} 74%,
    transparent 74%,
    transparent 75%,
    ${(props) => props.theme.colors.purple} 75%
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  transition: all 0.3s ease-out;

  @media ${device.mobile} {
    font-size: 16vh;
    :hover {
      font-size: 16vh;
    }
  }
  @media ${device.tablet} {
    font-size: 15vw;
    :hover {
      font-size: 16vw;
    }
  }
`

export const HomeText = styled.p`
  color: ${(props) => props.theme.colors.charcoal};
  font-size: 42px;
  font-family: "Aboreto";
  font-weight: 600;
`

export const CountryIcon = styled.span`
  margin: 20px;
  font-size: 50px;
  border-bottom: 2px solid transparent;

  :hover {
    cursor: pointer;
    border-bottom: 2px solid black;
    font-size: 60px;
  }
  transition: all 0.3s ease-out;
`

export const IconsContainer = styled.div`
  bottom: 25px;
  position: absolute;
  display: flex;
  flex-direction: row;
`

export const IconContainer = styled.div``
