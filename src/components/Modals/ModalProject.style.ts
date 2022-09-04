import styled, { css } from "styled-components"
import { Dialog } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import { device } from "style/media"

export const ModalProjectDialog = styled(Dialog)`
  /* min-width: 1000px; */
  overflow-y: none;
`

export const ModalProjectContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  @media ${device.mobile} {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-height: none;
  }

  @media ${device.tablet} {
    max-height: 90vh;
  }

  @media ${device.laptop} {
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
  }
`

export const ModalProjectImageSlideContainer = styled.div`
  display: flex;
  width: 100%;

  @media ${device.mobile} {
    width: 100%;
    /* height: 500px; */
    min-width: 0;
  }

  @media ${device.laptop} {
    width: 60%;
    /* height: 100%; */
    min-width: 600px;
  }
`

export const ModalProjectCarouselSlideContainer = styled.div`
  @media ${device.mobile} {
    height: 45vh;
  }

  @media ${device.tablet} {
    height: 100%;
  }
`

export const ModalProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const ModalProjectBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow-y: auto;
  padding: 40px;

  @media ${device.mobile} {
    width: 100%;

    border-top: 1px solid black;
    border-left: none;
  }

  @media ${device.laptop} {
    width: 40%;

    border-top: none;
    border-left: 1px solid black;
  }
`

export const ModalProjectTitleText = styled.p`
  font-size: 50px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.chelsea};
`

export const ModalProjectContentText = styled.p`
  margin-top: 35px;
  font-size: 20px;
  line-height: 25px;
`

export const ModalProjectCloseButtonContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 2;
  width: 40px;
  height: 40px;
`

export const ModalCloseIcon = styled(CloseIcon)`
  && {
    width: 100%;
    height: 100%;
    cursor: pointer;
    color: ${(props) => props.theme.colors.white};
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 50%;

    padding: 5px;
    transition: 0.2s all linear;
    :hover {
      background: rgba(0, 0, 0, 0.6);
    }
  }
`

const ArrowButtonCSS = css`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;

  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 50%;
  color: white;
  z-index: 1300;
  padding: 10px;
  border: 0;
  cursor: pointer;

  transition: 0.2s all linear;
  :hover {
    background: rgba(0, 0, 0, 0.6);
  }
`

export const ModalProjectPrevButton = styled.button`
  ${ArrowButtonCSS}
  left: 10px;
`
export const ModalProjectNextButton = styled.button`
  ${ArrowButtonCSS}
  right: 10px;
`
