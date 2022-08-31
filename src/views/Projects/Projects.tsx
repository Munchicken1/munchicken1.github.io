import React from "react"
import {
  ProjectsContainer,
  ProjectsTitle,
  ProjectsList,
  ProjectsListItem,
  ProjectsListImage
} from "./Projects.style"
import * as S from "../../constants/StringConstants"
import { connect as reduxConnect } from "react-redux"
import { bindActionCreators } from "redux"
import { openModalProject } from "store/modalProject/modalProject_actions"
import projectChelsea from 'assets/project_chelsea_thumb.png'
import ButtonBases from "./ButtonBases"

interface IReduxProps {
  openModalProject: () => void
}

const Projects: React.FC<IReduxProps> = ({ openModalProject }) => {

  const handleClickProject = () => {
    openModalProject()
  }

  return (
    <ProjectsContainer id="projects">
      <ProjectsTitle>{S.Projects.title}</ProjectsTitle>
      {/* <ProjectsList>
          <ProjectsListItem onClick={handleClickProject}>
            Project
          </ProjectsListItem>
      </ProjectsList> */}
      <ButtonBases />
    </ProjectsContainer>
  )
}

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators({ openModalProject }, dispatch)

export default reduxConnect(null, mapDispatchToProps)(Projects)
