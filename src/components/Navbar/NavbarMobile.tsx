import React from "react"
import {
  NavbarContainer,
  NavbarList,
  NavbarListItem,
  HomeIcon,
  AboutIcon,
  ExperienceIcon,
  ProjectsIcon,
  SkillsIcon,
  NavbarMobileMain,
  NavbarMobileMenu,
  NavbarMobileMenuItem,
  NabarMobileMenuItemButton,
  NavbarMobileMenuInput,
  NavbarMobileSpan,
  NavbarMobileContainer,
  NavbarMobileMenuSpan,
  CloseIcon,
  OpenIcon,
} from "./NavbarMobile.style"
import * as S from "constants/StringConstants"

const NavbarMobile = () => {
  const [refHome, setRefHome] = React.useState<HTMLElement | null>(null)
  const [refAbout, setRefAbout] = React.useState<HTMLElement | null>(null)
  const [refProjects, setRefProjects] = React.useState<HTMLElement | null>(null)
  const [refSkills, setRefSkills] = React.useState<HTMLElement | null>(null)
  const [refExperience, setRefExperience] = React.useState<HTMLElement | null>(
    null
  )

  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    setRefHome(document.getElementById("home"))
    setRefAbout(document.getElementById("about"))
    setRefProjects(document.getElementById("projects"))
    setRefSkills(document.getElementById("skills"))
    setRefExperience(document.getElementById("experience"))
  }, [])

  const handleClickHome = () => {
    if (refHome) {
      refHome.scrollIntoView({ behavior: "smooth" })
    }
  }
  const handleClickAbout = () => {
    if (refAbout) {
      refAbout.scrollIntoView({ behavior: "smooth" })
    }
  }
  const handleClickProjects = () => {
    if (refProjects) {
      refProjects.scrollIntoView({ behavior: "smooth" })
    }
  }
  const handleClickSkills = () => {
    if (refSkills) {
      refSkills.scrollIntoView({ behavior: "smooth" })
    }
  }
  const handleClickExperience = () => {
    if (refExperience) {
      refExperience.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleClickToggleMobileNavbar = () => {
    setIsOpen(!isOpen)
  }

  return (
    // <NavbarContainer>
    //   <NavbarList>
    //     <NavbarListItem onClick={handleClickHome}>
    //       <HomeIcon />
    //     </NavbarListItem>
    //     <NavbarListItem onClick={handleClickAbout}>
    //       <AboutIcon />
    //     </NavbarListItem>
    //     <NavbarListItem onClick={handleClickSkills}>
    //       <SkillsIcon />
    //     </NavbarListItem>
    //     <NavbarListItem onClick={handleClickProjects}>
    //       <ProjectsIcon />
    //     </NavbarListItem>
    //     <NavbarListItem onClick={handleClickExperience}>
    //       <ExperienceIcon />
    //     </NavbarListItem>
    //   </NavbarList>
    // </NavbarContainer>
    <NavbarMobileContainer>
      <NavbarMobileMain isOpen={isOpen} onClick={handleClickToggleMobileNavbar}>
        {/* <NavbarMobileSpan isOpen={isOpen}></NavbarMobileSpan>
        <NavbarMobileSpan isOpen={isOpen}></NavbarMobileSpan>
        <NavbarMobileSpan isOpen={isOpen}></NavbarMobileSpan> */}
        <OpenIcon isOpen={isOpen} />
        <NavbarMobileMenu isOpen={isOpen}>
          <NavbarMobileMenuItem onClick={handleClickAbout}>
            <AboutIcon />
          </NavbarMobileMenuItem>
          <NavbarMobileMenuItem onClick={handleClickSkills}>
            <SkillsIcon />
          </NavbarMobileMenuItem>
          <NavbarMobileMenuItem onClick={handleClickToggleMobileNavbar}>
            <CloseIcon isOpen={isOpen} />
          </NavbarMobileMenuItem>
          <NavbarMobileMenuItem onClick={handleClickProjects}>
            <ProjectsIcon />
          </NavbarMobileMenuItem>
          <NavbarMobileMenuItem onClick={handleClickExperience}>
            <ExperienceIcon />
          </NavbarMobileMenuItem>
        </NavbarMobileMenu>
      </NavbarMobileMain>
    </NavbarMobileContainer>
  )
}

export default NavbarMobile
