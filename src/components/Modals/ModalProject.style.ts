import styled from "styled-components"
import { Dialog } from "@mui/material"

export const ModalProjectDialog = styled(Dialog)`
    /* min-width: 1000px; */
`

export const ModalProjectContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
`

export const ModalProjectImageSlideContainer = styled.div`
  width: 60%;
  height: 100%;
  min-width: 600px;
`

export const ModalProjectImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const ModalProjectBodyContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 40px;
`

export const ModalProjectTitleText = styled.p`
    font-size: 50px;
    font-weight: 600;
    color: ${props => props.theme.colors.chelsea};
`

export const ModalProjectContentText = styled.p`
    margin-top: 35px;
    font-size: 20px;
    line-height: 25px;
`
export const ModalProjectCarouselSlideContainer = styled.div`
    height: 100%;
`