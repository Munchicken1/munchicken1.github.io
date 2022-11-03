import React from "react"
import {
  SkillsContainer,
  SkillsTitle,
  SkillsList,
  SkillsListItem,
  SkillsListContainer,
  SkillsText,
} from "./Skills.style"
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
import * as EN from "../../constants/StringConstants"
import * as KR from "../../constants/StringConstantsKR"
import { connect as reduxConnect } from "react-redux"
import { StoreState } from "store"
import Popper from "@mui/material/Popper"
import Box from "@mui/material/Box"
import Fade from "@mui/material/Fade"

interface IReduxProps {
  currentLanguage: string
}

const Skills: React.FC<IReduxProps> = ({ currentLanguage }) => {
  const [open, setOpen] = React.useState(false)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const viewport: DeviceNameEnum = useViewport()
  const [popperContent, setPopperContent] = React.useState("")

  let S = EN
  if (currentLanguage === "EN") {
    S = EN
  } else if (currentLanguage === "KR") {
    S = KR
  }

  const popperClickHandler =
    (popperContentText: string) => (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget)
      setOpen(
        (previousOpen) => popperContent !== popperContentText || !previousOpen
      )
      setPopperContent(popperContentText)
    }

  const canBeOpen = open && Boolean(anchorEl)
  const id = canBeOpen ? "transition-popper" : undefined

  return (
    <SkillsContainer id="skills">
      {viewport === DeviceNameEnum.mobile && (
        <Popper
          id={id}
          open={open}
          anchorEl={anchorEl}
          placement="top"
          transition
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Box
                sx={{
                  p: 1,
                  bgcolor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                  borderRadius: "5px",
                }}
              >
                {popperContent}
              </Box>
            </Fade>
          )}
        </Popper>
      )}
      <SkillsTitle currentLanguage={currentLanguage}>
        {S.Navigation.Skills}
      </SkillsTitle>
      <SkillsListContainer>
        {/* First Row */}
        <SkillsList>
          {/* React */}
          <SkillsListItem
            id={S.Skills.skills.react}
            onClick={popperClickHandler("React")}
          >
            <ReactIcon />
            {viewport !== DeviceNameEnum.mobile && (
              <SkillsText>{S.Skills.skills.react}</SkillsText>
            )}
          </SkillsListItem>
          {/* TypeScript */}
          <SkillsListItem
            id={S.Skills.skills.typescript}
            onClick={popperClickHandler("TypeScript")}
          >
            <TypeScriptIcon />
            {viewport !== DeviceNameEnum.mobile && (
              <SkillsText>{S.Skills.skills.typescript}</SkillsText>
            )}
          </SkillsListItem>
          {/* JavaScript */}
          <SkillsListItem
            id={S.Skills.skills.javascript}
            onClick={popperClickHandler("JavaScript")}
          >
            <JavaScriptIcon />
            {viewport !== DeviceNameEnum.mobile && (
              <SkillsText>{S.Skills.skills.javascript}</SkillsText>
            )}
          </SkillsListItem>
          {/* CSS */}
          <SkillsListItem
            id={S.Skills.skills.css}
            onClick={popperClickHandler("CSS3")}
          >
            <CSSIcon />
            {viewport !== DeviceNameEnum.mobile && (
              <SkillsText>{S.Skills.skills.css}</SkillsText>
            )}
          </SkillsListItem>
        </SkillsList>
        {/* Second Row */}
        <SkillsList>
          {/* Python */}
          <SkillsListItem
            id={S.Skills.skills.python}
            onClick={popperClickHandler("Python")}
          >
            <PythonIcon />
            {viewport !== DeviceNameEnum.mobile && (
              <SkillsText>{S.Skills.skills.python}</SkillsText>
            )}
          </SkillsListItem>
          {/* Rails */}
          <SkillsListItem
            id={S.Skills.skills.rubyonrails}
            onClick={popperClickHandler("Ruby on Rails")}
          >
            <RailsIcon />
            {viewport !== DeviceNameEnum.mobile && (
              <SkillsText>{S.Skills.skills.rubyonrails}</SkillsText>
            )}
          </SkillsListItem>
          {/* PostgreSQL */}
          <SkillsListItem
            id={S.Skills.skills.postgresql}
            onClick={popperClickHandler("PostgreSQL")}
          >
            <PSQLIcon />

            {viewport !== DeviceNameEnum.mobile && (
              <SkillsText>{S.Skills.skills.postgresql}</SkillsText>
            )}
          </SkillsListItem>
          {/* HTML */}
          <SkillsListItem
            id={S.Skills.skills.html}
            onClick={popperClickHandler("HTML5")}
          >
            <HTMLIcon />

            {viewport !== DeviceNameEnum.mobile && (
              <SkillsText>{S.Skills.skills.html}</SkillsText>
            )}
          </SkillsListItem>
        </SkillsList>
        {/* Third Row */}
        <SkillsList>
          {/* AWS */}
          <SkillsListItem
            id={S.Skills.skills.aws}
            onClick={popperClickHandler("AWS")}
          >
            <AWSIcon />

            {viewport !== DeviceNameEnum.mobile && (
              <SkillsText>{S.Skills.skills.aws}</SkillsText>
            )}
          </SkillsListItem>
          {/* Java */}
          <SkillsListItem
            id={S.Skills.skills.java}
            onClick={popperClickHandler("Java")}
          >
            <JavaIcon />

            {viewport !== DeviceNameEnum.mobile && (
              <SkillsText>{S.Skills.skills.java}</SkillsText>
            )}
          </SkillsListItem>
          <SkillsListItem
            id={S.Skills.skills.git}
            onClick={popperClickHandler("Git")}
          >
            <GitIcon />
            {viewport !== DeviceNameEnum.mobile && (
              <SkillsText>{S.Skills.skills.git}</SkillsText>
            )}
          </SkillsListItem>
          {/* Firebase */}
          <SkillsListItem
            id={S.Skills.skills.firebase}
            onClick={popperClickHandler("Firebase")}
          >
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

const mapStateToProps = (state: StoreState) => ({
  currentLanguage: state.languageChangerReducer.currentLanguage,
})

export default reduxConnect(mapStateToProps)(Skills)
