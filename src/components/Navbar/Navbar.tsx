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
import useWindowSize from "utilities/hooks/useWindowSize"
import { DeviceNameEnum, size } from "style/media"
import useViewport from "utilities/hooks/useViewport"

enum NavigationItemEnum {
  Home,
  About,
  Skills,
  Projects,
  Experience,
}

const Navbar = () => {
  const [refHome, setRefHome] = React.useState<HTMLElement | null>(null)
  const [refAbout, setRefAbout] = React.useState<HTMLElement | null>(null)
  const [refProjects, setRefProjects] = React.useState<HTMLElement | null>(null)
  const [refSkills, setRefSkills] = React.useState<HTMLElement | null>(null)
  const [refExperience, setRefExperience] = React.useState<HTMLElement | null>(
    null
  )

  const [enumTouching, setEnumTouching] =
    React.useState<NavigationItemEnum | null>(null)
  const viewport: DeviceNameEnum = useViewport()

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

  const handleTouchStart = (inputEnum: NavigationItemEnum) => {
    setEnumTouching(inputEnum)
  }

  const handleTouchEnd = () => {
    setEnumTouching(null)
  }

  return (
    <NavbarContainer>
      <NavbarList>
        <NavbarListItem
          onClick={handleClickHome}
          isTouching={enumTouching === NavigationItemEnum.Home ? 1 : 0}
          onTouchStart={() => handleTouchStart(NavigationItemEnum.Home)}
          onTouchEnd={handleTouchEnd}
        >
          <HomeIcon />
          {viewport !== DeviceNameEnum.mobile && S.Navigation.Home}
        </NavbarListItem>
        <NavbarListItem
          onClick={handleClickAbout}
          isTouching={enumTouching === NavigationItemEnum.About ? 1 : 0}
          onTouchStart={() => handleTouchStart(NavigationItemEnum.About)}
          onTouchEnd={handleTouchEnd}
        >
          <AboutIcon />
          {viewport !== DeviceNameEnum.mobile && S.Navigation.About}
        </NavbarListItem>
        <NavbarListItem
          onClick={handleClickSkills}
          isTouching={enumTouching === NavigationItemEnum.Skills ? 1 : 0}
          onTouchStart={() => handleTouchStart(NavigationItemEnum.Skills)}
          onTouchEnd={handleTouchEnd}
        >
          <SkillsIcon />
          {viewport !== DeviceNameEnum.mobile && S.Navigation.Skills}
        </NavbarListItem>
        <NavbarListItem
          onClick={handleClickProjects}
          isTouching={enumTouching === NavigationItemEnum.Projects ? 1 : 0}
          onTouchStart={() => handleTouchStart(NavigationItemEnum.Projects)}
          onTouchEnd={handleTouchEnd}
        >
          <ProjectsIcon />
          {viewport !== DeviceNameEnum.mobile && S.Navigation.Projects}
        </NavbarListItem>
        <NavbarListItem
          onClick={handleClickExperience}
          isTouching={enumTouching === NavigationItemEnum.Experience ? 1 : 0}
          onTouchStart={() => handleTouchStart(NavigationItemEnum.Experience)}
          onTouchEnd={handleTouchEnd}
        >
          <ExperienceIcon />
          {viewport !== DeviceNameEnum.mobile && S.Navigation.Experience}
        </NavbarListItem>
      </NavbarList>
    </NavbarContainer>
  )
}

export default Navbar
