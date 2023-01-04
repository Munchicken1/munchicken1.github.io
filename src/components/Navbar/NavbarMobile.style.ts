import styled, { css } from "styled-components"
import MuiHomeIcon from "@mui/icons-material/Home"
import MuiPersonIcon from "@mui/icons-material/Person"
import MuiComputerIcon from "@mui/icons-material/Computer"
import MuiConstructionIcon from "@mui/icons-material/Construction"
import MuiWorkIcon from "@mui/icons-material/Work"
import MuiCloseIcon from "@mui/icons-material/Close"
import MuiOpenIcon from "@mui/icons-material/Menu"

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
  justify-content: center;
  align-items: center;
  width: 100%;
  color: ${(props) => props.theme.colors.charcoal};

  :hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.charcoal};
    color: ${(props) => props.theme.colors.white};

    svg {
      color: ${(props) => props.theme.colors.white};
      transition: all 0.3s ease-out;
    }
    transition: all 0.3s ease-out;
  }
`

const IconCSS = css`
  width: 30px;
  height: 30px;
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

export const CloseIcon = styled(MuiCloseIcon)<IProps>`
  && {
    ${IconCSS}
  }

  ${(props) => {
    if (!props.isOpen) {
      return css`
        opacity: 0;
      `
    }
  }}
`
export const OpenIcon = styled(MuiOpenIcon)<IProps>`
  && {
    ${IconCSS}
    position: absolute;
    transition: 0.5s;
  }

  ${(props) => {
    if (props.isOpen) {
      return css`
        opacity: 0;
      `
    } else {
      return css`
        opacity: 1;
      `
    }
  }}
`

interface IProps {
  isOpen: boolean
}

export const NavbarMobileContainer = styled.div`
  position: fixed;
  left: 50%;
  bottom: 15%;
  width: 100px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(-50px);
`

export const NavbarMobileMain = styled.div<IProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  min-width: 60px;
  max-height: 60px;
  background-color: ${(props) => props.theme.colors.moonDark};
  padding: 20px;
  transition: 0.5s;
  border-radius: 50px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`

export const NavbarMobileMenu = styled.div<IProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 0;
  overflow: hidden;
  transition: 0.5s;

  ${(props) => {
    if (props.isOpen) {
      return css`
        width: 250px;
        transition-delay: 0.5s;
      `
    } else {
      return css`
        width: 0;
      `
    }
  }}
`

export const NavbarMobileMenuItem = styled.li`
  list-style: none;
  margin: 0 10px;
`

export const NabarMobileMenuItemButton = styled.a`
  text-decoration: none;
  color: #666;
  text-transform: uppercase;
  font-weight: 600;
  transition: 0.5s;

  :hover {
    color: #161919;
  }
`

export const NavbarMobileMenuInput = styled.input`
  width: 40px;
  height: 40px;
  cursor: pointer;
  opacity: 0;
`

export const NavbarMobileSpan = styled.span<IProps>`
  position: absolute;
  left: 15px;
  width: 30px;
  height: 4px;
  border-radius: 50px;
  background-color: #666;
  pointer-events: none;
  transition: 0.5s;

  :nth-child(2) {
    transform: translateY(-8px);
  }

  :nth-child(3) {
    transform: translateY(8px);
  }

  ${(props) => {
    if (props.isOpen) {
      return css`
        background-color: #ff4d50;

        :nth-child(2) {
          transform: translateY(0) rotate(-45deg);
        }

        :nth-child(3) {
          transform: translateY(0) rotate(45deg);
        }

        :nth-child(1) {
          opacity: 0;
        }
      `
    }
  }}
`
export const NavbarMobileMenuSpan = styled.span`
  width: 30px;
  height: 4px;
  border-radius: 50px;
  background-color: #666;
  pointer-events: none;
  transition: 0.5s;

  :nth-child(2) {
    transform: translateY(-8px);
  }

  :nth-child(3) {
    transform: translateY(8px);
  }
`
