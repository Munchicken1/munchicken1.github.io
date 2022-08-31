import styled, { css } from "styled-components"
import MuiHomeIcon from "@mui/icons-material/Home"
import MuiPersonIcon from "@mui/icons-material/Person"
import MuiComputerIcon from "@mui/icons-material/Computer"
import MuiConstructionIcon from '@mui/icons-material/Construction';
import MuiWorkIcon from "@mui/icons-material/Work"


export const NavbarContainer = styled.div`
  position: fixed;
  bottom: 0px;
  width: 100vw;
  z-index: 1;
`

export const NavbarList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`

export const NavbarListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 7px;
  color: ${(props) => props.theme.colors.charcoal};
  border-radius: 6px;

  :hover {
      cursor: pointer;
      background-color: ${(props) => props.theme.colors.charcoal};
      color: ${(props) => props.theme.colors.white};
      
      svg {
          color: ${(props) => props.theme.colors.white};
          transition: all .3s ease-out;
        }
        transition: all .3s ease-out;
  }
`

const IconCSS = css`
    width: 40px;
    height: 40px;
    margin-right: 5px;
    color: ${(props) => props.theme.colors.charcoal};
`

export const HomeIcon = styled(MuiHomeIcon)`
  && {
    ${IconCSS};
  }
`

export const AboutIcon = styled(MuiPersonIcon)`
  && {
    ${IconCSS};
  }
`
export const ProjectsIcon = styled(MuiComputerIcon)`
  && {
    ${IconCSS};
  }
`

export const SkillsIcon = styled(MuiConstructionIcon)`
  && {
    ${IconCSS};
  }
`
export const ExperienceIcon = styled(MuiWorkIcon)`
  && {
    ${IconCSS};
  }
`
