import styled from "styled-components"
import { TitleText } from "../../style/TextStyle.style"
import { Container } from "../../style/Container.style"
import Box from "@mui/material/Box"
import ButtonBase from "@mui/material/ButtonBase"
import Typography from "@mui/material/Typography"
import { device } from "style/media"

const images = [
  {
    url: "assets/project_chelsea_thumb",
    title: "Chelsea Framing Products",
  },
  {
    url: "assets/project_chelsea_thumb",
    title: "Placeholder",
  },
  {
    url: "assets/project_chelsea_thumb",
    title: "Coming Soon",
  },
]

export const ProjectsContainer = styled(Container)`
  background-color: ${(props) => props.theme.colors.white};
  padding: 20px;
`

export const ProjectsTitle = styled(TitleText)`
  position: relative;
  padding: 20px;
  margin-bottom: 40px;

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

export const ProjectsList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;

  @media ${device.mobile} {
    width: 100%;
  }
  @media ${device.tablet} {
    width: 80%;
  }
`

export const ProjectBannerIconsContainer = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);

  padding: 5px;
  border-radius: 5px;

  @media ${device.mobile} {
    top: 5px;
    right: 5px;
  }
  @media ${device.tablet} {
    top: 10px;
    right: 10px;
  }
`
export const ProjectBannerIcon = styled.i`
  color: white;
  padding: 5px;

  @media ${device.mobile} {
    font-size: 25px;
  }
  @media ${device.tablet} {
    font-size: 35px;
  }
`
