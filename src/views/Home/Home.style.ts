import styled from "styled-components"
import { Container } from "../../style/Container.style"

export const HomeContainer = styled(Container)`
  height: 100vh;
`

export const HomeBannerContainer = styled.div`
  display: flex;
  place-items: center;
  height: 17vw;
`

export const HomeBannerText = styled.p`
    width: 100%;
    font-size: 15vw;
    font-family: 'Exo', sans-serif;
    font-weight: 900;

    background: linear-gradient(219deg, 
        ${props => props.theme.colors.chelsea} 19%, 
        transparent 19%,transparent 20%, 
        ${props => props.theme.colors.moonComplementary} 20%, ${props => props.theme.colors.moonComplementary}  39%,
        transparent 39%,transparent 40%, 
        ${props => props.theme.colors.brown} 40%,${props => props.theme.colors.brown} 59% ,
        transparent 59%,transparent 60%, 
        ${props => props.theme.colors.css} 60%, ${props => props.theme.colors.css} 79%,
        transparent 79%, transparent 80%, 
        ${props => props.theme.colors.html} 80%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    :hover {
        font-size: 16vw;
    }
    transition: all 0.3s ease-out;
`

export const HomeText = styled.p`
  color: ${(props) => props.theme.colors.charcoal};
  font-size: 42px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
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
`
