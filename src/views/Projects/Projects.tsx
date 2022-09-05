import React, { useEffect } from "react"
import {
  ProjectsContainer,
  ProjectsTitle,
  ProjectsList,
} from "./Projects.style"
import * as S from "../../constants/StringConstants"
import { connect as reduxConnect } from "react-redux"
import { bindActionCreators } from "redux"
import { openModalProject } from "store/modalProject/modalProject_actions"
import {
  IProject,
  projects as ProjectConstants,
} from "constants/ProjectConstants"
import ProjectBanner from "./ProjectBanner"
import { IOpenModalProjectPayload } from "store/modalProject/modalProject_types"

interface IReduxProps {
  openModalProject: (inputProject: IOpenModalProjectPayload) => void
}

const Projects: React.FC<IReduxProps> = ({ openModalProject }) => {
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

  return (
    <ProjectsContainer id="projects">
      <ProjectsTitle>{S.Projects.title}</ProjectsTitle>
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

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators({ openModalProject }, dispatch)

export default reduxConnect(null, mapDispatchToProps)(Projects)
