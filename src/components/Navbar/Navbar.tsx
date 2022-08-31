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
} from "./Navbar.style"
import * as S from "constants/StringConstants"

const Navbar = () => {
  const [refHome, setRefHome] = React.useState<HTMLElement | null>(null)
  const [refAbout, setRefAbout] = React.useState<HTMLElement | null>(null)
  const [refProjects, setRefProjects] = React.useState<HTMLElement | null>(null)
  const [refSkills, setRefSkills] = React.useState<HTMLElement | null>(null)
  const [refExperience, setRefExperience] = React.useState<HTMLElement | null>(
    null
  )

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

  return (
    <NavbarContainer>
      <NavbarList>
        <NavbarListItem onClick={handleClickHome}>
          <HomeIcon />
          {S.Navigation.Home}
        </NavbarListItem>
        <NavbarListItem onClick={handleClickAbout}>
          <AboutIcon />
          {S.Navigation.About}
        </NavbarListItem>
        <NavbarListItem onClick={handleClickSkills}>
          <SkillsIcon />
          {S.Navigation.Skills}
        </NavbarListItem>
        <NavbarListItem onClick={handleClickProjects}>
          <ProjectsIcon />
          {S.Navigation.Projects}
        </NavbarListItem>
        <NavbarListItem onClick={handleClickExperience}>
          <ExperienceIcon />
          {S.Navigation.Experience}
        </NavbarListItem>
      </NavbarList>
    </NavbarContainer>
  )
}

export default Navbar
