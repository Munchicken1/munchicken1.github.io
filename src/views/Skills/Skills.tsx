import React from "react"
import {
  SkillsContainer,
  SkillsTitle,
  SkillsList,
  SkillsListItem,
  SkillsListContainer,
  SkillsText,
} from "./Skills.style"
import * as S from "../../constants/StringConstants"
import {
  AWSIcon,
  CSSIcon,
  FirebaseIcon,
  GitIcon,
  HTMLIcon,
  JavaIcon,
  JavaScriptIcon,
  PSQLIcon,
  PythonIcon,
  RailsIcon,
  ReactIcon,
  TypeScriptIcon,
} from "assets/Icons"
import useViewport from "utilities/hooks/useViewport"
import { DeviceNameEnum } from "style/media"

const Skills = () => {
  const viewport: DeviceNameEnum = useViewport()

  return (
    <SkillsContainer id="skills">
      <SkillsTitle>{S.Navigation.Skills}</SkillsTitle>
      <SkillsListContainer>
        {/* First Row */}
        <SkillsList>
          {/* React */}
          <SkillsListItem id={S.Skills.skills.react}>
            <ReactIcon />
            {viewport !== DeviceNameEnum.mobile && (
              <SkillsText>{S.Skills.skills.react}</SkillsText>
            )}
          </SkillsListItem>
          {/* TypeScript */}
          <SkillsListItem id={S.Skills.skills.typescript}>
            <TypeScriptIcon />
            {viewport !== DeviceNameEnum.mobile && (
              <SkillsText>{S.Skills.skills.typescript}</SkillsText>
            )}
          </SkillsListItem>
          {/* JavaScript */}
          <SkillsListItem id={S.Skills.skills.javascript}>
            <JavaScriptIcon />
            {viewport !== DeviceNameEnum.mobile && (
              <SkillsText>{S.Skills.skills.javascript}</SkillsText>
            )}
          </SkillsListItem>
          {/* CSS */}
          <SkillsListItem id={S.Skills.skills.css}>
            <CSSIcon />
            {viewport !== DeviceNameEnum.mobile && (
              <SkillsText>{S.Skills.skills.css}</SkillsText>
            )}
          </SkillsListItem>
        </SkillsList>
        {/* Second Row */}
        <SkillsList>
          {/* Python */}
          <SkillsListItem id={S.Skills.skills.python}>
            <PythonIcon />
            {viewport !== DeviceNameEnum.mobile && (
              <SkillsText>{S.Skills.skills.python}</SkillsText>
            )}
          </SkillsListItem>
          {/* Rails */}
          <SkillsListItem id={S.Skills.skills.rubyonrails}>
            <RailsIcon />
            {viewport !== DeviceNameEnum.mobile && (
              <SkillsText>{S.Skills.skills.rubyonrails}</SkillsText>
            )}
          </SkillsListItem>
          {/* PostgreSQL */}
          <SkillsListItem id={S.Skills.skills.postgresql}>
            <PSQLIcon />

            {viewport !== DeviceNameEnum.mobile && (
              <SkillsText>{S.Skills.skills.postgresql}</SkillsText>
            )}
          </SkillsListItem>
          {/* HTML */}
          <SkillsListItem id={S.Skills.skills.html}>
            <HTMLIcon />

            {viewport !== DeviceNameEnum.mobile && (
              <SkillsText>{S.Skills.skills.html}</SkillsText>
            )}
          </SkillsListItem>
        </SkillsList>
        {/* Third Row */}
        <SkillsList>
          {/* AWS */}
          <SkillsListItem id={S.Skills.skills.aws}>
            <AWSIcon />

            {viewport !== DeviceNameEnum.mobile && (
              <SkillsText>{S.Skills.skills.aws}</SkillsText>
            )}
          </SkillsListItem>
          {/* Java */}
          <SkillsListItem id={S.Skills.skills.java}>
            <JavaIcon />

            {viewport !== DeviceNameEnum.mobile && (
              <SkillsText>{S.Skills.skills.java}</SkillsText>
            )}
          </SkillsListItem>
          <SkillsListItem id={S.Skills.skills.git}>
            <GitIcon />
            {viewport !== DeviceNameEnum.mobile && (
              <SkillsText>{S.Skills.skills.git}</SkillsText>
            )}
          </SkillsListItem>
          {/* Firebase */}
          <SkillsListItem id={S.Skills.skills.firebase}>
            <FirebaseIcon />

            {viewport !== DeviceNameEnum.mobile && (
              <SkillsText>{S.Skills.skills.firebase}</SkillsText>
            )}
          </SkillsListItem>
        </SkillsList>
      </SkillsListContainer>
    </SkillsContainer>
  )
}

export default Skills
