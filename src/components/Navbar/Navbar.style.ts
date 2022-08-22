import styled, { css } from "styled-components"
import MuiHomeIcon from "@mui/icons-material/Home"
import MuiPersonIcon from "@mui/icons-material/Person"
import MuiComputerIcon from "@mui/icons-material/Computer"
import MuiConstructionIcon from '@mui/icons-material/Construction';
import MuiWorkIcon from "@mui/icons-material/Work"

export const NavbarContainer = styled.div`
  position: fixed;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 50vh;
`

export const NavbarList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 15px;
  height: 100%;
`

export const NavbarListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: fit-content;
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
    width: 32px;
    height: 32px;
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
