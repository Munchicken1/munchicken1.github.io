import React, { useEffect } from "react"
import {
  ProjectsContainer,
  ProjectsTitle,
  ProjectsList,
} from "./Projects.style"
import * as EN from "../../constants/StringConstants"
import * as KR from "../../constants/StringConstantsKR"
import { connect as reduxConnect } from "react-redux"
import { bindActionCreators } from "redux"
import { StoreState } from "store"
import { openModalProject } from "store/modalProject/modalProject_actions"
import { IOpenModalProjectPayload } from "store/modalProject/modalProject_types"
import {
  IProject,
  projects as ProjectConstants,
} from "constants/ProjectConstants"
import ProjectBanner from "./ProjectBanner"

interface IReduxProps {
  openModalProject: (inputProject: IOpenModalProjectPayload) => void
  currentLanguage: string
}

const Projects: React.FC<IReduxProps> = ({
  currentLanguage,
  openModalProject,
}) => {
  useEffect(() => {
    window.addEventListener("popstate", handlePopState)
    return () => {
      window.removeEventListener("popstate", handlePopState)
    }
  }, [])

  const handlePopState = (e) => {
    if (e?.state?.projectIndex !== undefined) {
      openModalProject({
        currentProject: ProjectConstants[Number(e?.state?.projectIndex)],
        currentProjectIndex: Number(e?.state?.projectIndex),
      })
    }
  }

  const handleClickProjectBanner = (
    inputProject: IProject,
    inputProjectIndex: number
  ) => {
    const payload: IOpenModalProjectPayload = {
      currentProject: inputProject,
      currentProjectIndex: inputProjectIndex,
    }
    openModalProject(payload)
  }

  let S = EN

  if (currentLanguage === "EN") {
    S = EN
  } else if (currentLanguage === "KR") {
    S = KR
  }

  return (
    <ProjectsContainer id="projects">
      <ProjectsTitle currentLanguage={currentLanguage}>
        {S.Projects.title}
      </ProjectsTitle>
      <ProjectsList>
        {ProjectConstants.map((project: IProject, index: number) => (
          <ProjectBanner
            project={project}
            handleClickProjectBanner={() =>
              handleClickProjectBanner(project, index)
            }
            key={project.title}
          />
        ))}
      </ProjectsList>
    </ProjectsContainer>
  )
}

const mapStateToProps = (state: StoreState) => ({
  currentLanguage: state.languageChangerReducer.currentLanguage,
})

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators({ openModalProject }, dispatch)

export default reduxConnect(mapStateToProps, mapDispatchToProps)(Projects)
