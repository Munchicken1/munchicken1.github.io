import styled, { css } from "styled-components"
import MuiHomeIcon from "@mui/icons-material/Home"
import MuiPersonIcon from "@mui/icons-material/Person"
import MuiComputerIcon from "@mui/icons-material/Computer"
import MuiConstructionIcon from "@mui/icons-material/Construction"
import MuiWorkIcon from "@mui/icons-material/Work"
import { device } from "style/media"

export const NavbarContainer = styled.div`
  position: fixed;
  left: 0;
  z-index: 2;

  @media ${device.mobile} {
    top: initial;
    bottom: 0;
    right: 0;
    height: auto;
    transform: none;
    background-color: rgba(0, 0, 0, 0.5);
  }

  @media ${device.tablet} {
    top: 50%;
    bottom: initial;
    right: initial;
    height: 60vh;
    transform: translateY(-50%);
    background-color: transparent;
  }
`

export const NavbarList = styled.ul`
  display: flex;
  justify-content: space-between;

  height: 100%;

  @media ${device.mobile} {
    flex-direction: row;
    margin: 0;
  }

  @media ${device.tablet} {
    flex-direction: column;
    margin-left: 15px;
  }
`

interface INavbarListItemProps {
  isTouching: number
}

export const NavbarListItem = styled.li<INavbarListItemProps>`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 7px;
  color: ${(props) => props.theme.colors.charcoal};
  border-radius: 6px;

  @media ${device.mobile} {
    width: 100%;
    justify-content: center;
    transition: all 0.5s ease-out;
  }

  @media ${device.tablet} {
    justify-content: flex-start;
    width: fit-content;
    transition: all 0.3s ease-out;

    :hover {
      cursor: pointer;
      background-color: ${(props) => props.theme.colors.charcoal};
      color: ${(props) => props.theme.colors.white};

      svg {
        color: ${(props) => props.theme.colors.white};
      }
    }
  }

  ${(props) => {
    if (props.isTouching) {
      return css`
        background-color: ${(props) => props.theme.colors.charcoal};
        color: ${(props) => props.theme.colors.white};

        svg {
          color: ${(props) => props.theme.colors.white} !important;
        }
      `
    }
  }}
`

const IconCSS = css`
  transition: all 0.5s ease-out;
  @media ${device.mobile} {
    margin: 0;
    width: 40px;
    height: 40px;
    color: ${(props) => props.theme.colors.moon};
  }

  @media ${device.tablet} {
    margin-right: 5px;
    width: 32px;
    height: 32px;
    color: ${(props) => props.theme.colors.charcoal};
  }
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
