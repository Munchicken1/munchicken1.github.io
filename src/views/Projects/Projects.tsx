import React from "react"
import {
  ProjectsContainer,
  ProjectsTitle,
  ProjectsList,
  ProjectsListItem,
  ProjectsListImage,
} from "./Projects.style"
import * as S from "../../constants/StringConstants"
import { connect as reduxConnect } from "react-redux"
import { bindActionCreators } from "redux"
import { openModalProject } from "store/modalProject/modalProject_actions"
import projectChelsea from "assets/project_chelsea_thumb.png"
import {
  IProject,
  projects as ProjectConstants,
} from "constants/ProjectConstants"
import ProjectBanner from "./ProjectBanner"
import Box from "@mui/material/Box"
import { IOpenModalProjectPayload } from "store/modalProject/modalProject_types"

interface IReduxProps {
  openModalProject: (inputProject: IOpenModalProjectPayload) => void
}

const Projects: React.FC<IReduxProps> = ({ openModalProject }) => {
  const handleClickProjectBanner = (inputProject: IProject) => {
    const payload: IOpenModalProjectPayload = {
      currentProject: inputProject,
    }
    openModalProject(payload)
  }

  return (
    <ProjectsContainer id="projects">
      <ProjectsTitle>{S.Projects.title}</ProjectsTitle>
      <ProjectsList>
        {ProjectConstants.map((project) => (
          <ProjectBanner
            project={project}
            handleClickProjectBanner={handleClickProjectBanner}
          />
        ))}
      </ProjectsList>
    </ProjectsContainer>
  )
}

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators({ openModalProject }, dispatch)

export default reduxConnect(null, mapDispatchToProps)(Projects)
