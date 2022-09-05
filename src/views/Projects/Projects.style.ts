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
  padding: 30px;
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
