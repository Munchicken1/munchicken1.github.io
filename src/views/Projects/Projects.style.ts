import styled from "styled-components"
import { TitleText } from "../../style/TextStyle.style"
import { Container } from "../../style/Container.style"
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

const images = [
  {
    url: 'assets/project_chelsea_thumb',
    title: 'Chelsea Framing Products',
  },
  {
    url: 'assets/project_chelsea_thumb',
    title: 'Placeholder',
  },
  {
    url: 'assets/project_chelsea_thumb',
    title: 'Coming Soon',
  },
];

export const ProjectsContainer = styled(Container)`
  background-color: ${(props) => props.theme.colors.white};
  padding: 20px;
`

export const ProjectsTitle = styled(TitleText)`
  padding: 30px;
`

export const ProjectsList = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const ProjectsListItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 350px;
  margin: 30px;
  background-color: ${(props) => props.theme.colors.moonDark};
  cursor: pointer;
`

export const ProjectsListImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  -webkit-user-drag: none;
  background-size: cover;
`