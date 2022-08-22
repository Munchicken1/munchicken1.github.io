import styled from "styled-components"
import { TitleText } from "../../style/TextStyle.style"
import { Container } from '../../style/Container.style'

export const ProjectsContainer = styled(Container)`
  padding: 20px;
`

export const ProjectsTitle = styled(TitleText)`
    padding: 30px;
`

export const ProjectsList = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const ProjectsListItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 350px;
    margin: 30px;
    background-color: ${(props) => props.theme.colors.moonDark};
    cursor: pointer;
`
