import styled from "styled-components"
import { TitleText } from "../../style/TextStyle.style"
import { Container } from "../../style/Container.style"

export const ExperienceContainer = styled(Container)`
    padding: 40px;
`

export const ExperienceTitle = styled(TitleText)`
`

export const ExperienceTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin: 40px;
    width: 50%;
`

export const ExperienceText = styled.p`
    line-height: 200%;
    margin: 20px;
`
