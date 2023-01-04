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
    height: 35vh;
  }

  @media ${device.laptop} {
    height: 100%;
  }
`

export const ModalProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

interface IModalProjectThemeColor {
  themeColor: string
}

export const ModalProjectBodyContainer = styled.div<IModalProjectThemeColor>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
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

  ${(props) => {
    if (props.themeColor) {
      return css`
        ${ModalProjectTitleText} {
          color: ${props.themeColor};
        }
        ${ModalButton} {
          background-color: ${props.themeColor};
          background-image: linear-gradient(
            315deg,
            ${(props) => props.theme.colors.moon} 0%,
            ${props.themeColor} 74%
          );
          ::before,
          ::after {
            background: ${props.themeColor};
          }
        }
        ${ModalButtonSpan} {
          :hover {
            color: ${props.themeColor};
          }
          ::before,
          ::after {
            background: ${props.themeColor};
          }
        }
      `
    }
  }}
`

export const ModalProjectTitleText = styled.p`
  font-weight: 600;
  font-family: "Barlow";

  @media ${device.mobile} {
    font-size: 40px;
  }
  @media ${device.desktop} {
    font-size: 50px;
  }
`

export const ModalProjectContentTextContainer = styled.div`
  margin: auto;
`

export const ModalProjectContentText = styled.p`
  margin-top: 35px;
  font-size: 20px;
  line-height: 25px;
  margin-bottom: 35px;
  font-family: "Quicksand", sans-serif;
  color: #353239;
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
    color: white;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 50%;

    padding: 5px;
    transition: 0.2s all linear;
    :hover {
      background: rgba(0, 0, 0, 0.6);
    }
  }
`

export const CustomButton = styled.button`
  width: 130px;
  height: 40px;
  color: #fff;
  border-radius: 3px;
  padding: 10px 25px;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    5px 5px 10px 0px rgba(0, 0, 0, 0.1), 3px 3px 4px 0px rgba(0, 0, 0, 0.1);
  outline: none;
`

export const ModalButton = styled(CustomButton)`
  line-height: 42px;
  padding: 0;
  border: none;

  :before,
  :after {
    position: absolute;
    content: "";
    right: 0;
    bottom: 0;
    /* box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.5),
      -4px -4px 6px 0 rgba(116, 125, 136, 0.2),
      inset -4px -4px 6px 0 rgba(255, 255, 255, 0.5),
      inset 4px 4px 6px 0 rgba(116, 125, 136, 0.3); */
    transition: all 0.3s ease;
  }
  :before {
    height: 0%;
    width: 2px;
  }
  :after {
    width: 0%;
    height: 2px;
  }
  :hover:before {
    height: 100%;
  }
  :hover:after {
    width: 100%;
  }
  :hover {
    background: transparent;
  }
`
export const ModalButtonSpan = styled.span`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  font-family: "Roboto", sans-serif;

  :before,
  :after {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    /* box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.5),
      -4px -4px 6px 0 rgba(116, 125, 136, 0.2),
      inset -4px -4px 6px 0 rgba(255, 255, 255, 0.5),
      inset 4px 4px 6px 0 rgba(116, 125, 136, 0.3); */
    transition: all 0.3s ease;
  }
  :before {
    width: 2px;
    height: 0%;
  }
  :after {
    height: 2px;
    width: 0%;
  }
  :hover:before {
    height: 100%;
  }
  :hover:after {
    width: 100%;
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

export const ModalProjectButtonContainer = styled.div`
  position: absolute;

  @media ${device.mobile} {
    right: 40px;
    bottom: 40px;
  }

  @media ${device.tablet} {
    right: auto;
    bottom: 20px;
  }

  @media ${device.desktop} {
    /* transform: translateX(-32.5px); */
  } ;
`

export const ModalProjectPrevButton = styled.button`
  ${ArrowButtonCSS}
  left: 10px;
`
export const ModalProjectNextButton = styled.button`
  ${ArrowButtonCSS}
  right: 10px;
`
