import React, { useEffect, useState } from "react"
import {
  ModalProjectContainer,
  ModalProjectImageSlideContainer,
  ModalProjectBodyContainer,
  ModalProjectTitleText,
  ModalProjectContentText,
  ModalProjectImage,
  ModalProjectDialog,
  ModalProjectCarouselSlideContainer,
  ModalCloseIcon,
  ModalProjectNextButton,
  ModalProjectPrevButton,
  ModalProjectCloseButtonContainer,
  ModalButton,
  ModalButtonSpan,
  ModalProjectButtonContainer,
} from "./ModalProject.style"
import { connect as reduxConnect } from "react-redux"
import { StoreState } from "store"
import { closeModalProject } from "store/modalProject/modalProject_actions"
import { bindActionCreators } from "redux"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import useViewport from "utilities/hooks/useViewport"
import { DeviceNameEnum } from "style/media"
import { IProject } from "constants/ProjectConstants"
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"

interface IProps extends IReduxProps {}

interface IReduxProps {
  currentProject: IProject | null
  currentProjectIndex: number | null
  isModalProjectOpen: boolean
  closeModalProject: () => void
}

const ModalProject: React.FC<IProps> = ({
  currentProject,
  currentProjectIndex,
  isModalProjectOpen,
  closeModalProject,
}) => {
  const viewport = useViewport()
  useEffect(() => {
    if (window.location.pathname !== "/project-modal") {
      window.history.pushState(
        { projectIndex: currentProjectIndex },
        "",
        "/project-modal"
      )
    }
    window.addEventListener("popstate", handlePopState)
    return () => {
      window.removeEventListener("popstate", handlePopState)
    }
  }, [])

  const handlePopState = () => {
    closeModalProject()
  }

  const handleClose = () => {
    window.history.pushState({}, "", "/")
    closeModalProject()
  }

  return (
    <ModalProjectDialog
      open={isModalProjectOpen}
      onClose={handleClose}
      maxWidth={false}
      fullWidth={true}
      fullScreen={viewport !== DeviceNameEnum.mobile ? false : true}
      scroll={"paper"}
    >
      <ModalProjectContainer>
        <ModalProjectImageSlideContainer>
          <Carousel
            infiniteLoop
            emulateTouch
            autoPlay={true}
            showThumbs={false}
            showArrows={viewport !== DeviceNameEnum.mobile ? true : false}
            renderArrowPrev={(handlePrev) => (
              <ModalProjectPrevButton onClick={handlePrev}>
                <KeyboardArrowLeftIcon />
              </ModalProjectPrevButton>
            )}
            renderArrowNext={(handleNext) => (
              <ModalProjectNextButton onClick={handleNext}>
                <KeyboardArrowRightIcon />
              </ModalProjectNextButton>
            )}
          >
            {currentProject.projectImages.map((image) => (
              <ModalProjectCarouselSlideContainer key={currentProject.title}>
                <ModalProjectImage src={image} />
              </ModalProjectCarouselSlideContainer>
            ))}
          </Carousel>
        </ModalProjectImageSlideContainer>
        <ModalProjectBodyContainer themeColor={currentProject.themeColor}>
          <ModalProjectCloseButtonContainer onClick={handleClose}>
            <ModalCloseIcon />
          </ModalProjectCloseButtonContainer>
          <ModalProjectTitleText>{currentProject.title}</ModalProjectTitleText>
          <ModalProjectContentText>
            {currentProject.content}
          </ModalProjectContentText>
          <ModalProjectButtonContainer>
            <a href={currentProject.websiteUrl} target="_blank">
              <ModalButton>
                <ModalButtonSpan>See Publication</ModalButtonSpan>
              </ModalButton>
            </a>
          </ModalProjectButtonContainer>
        </ModalProjectBodyContainer>
      </ModalProjectContainer>
    </ModalProjectDialog>
  )
}

const mapStateToProps = (state: StoreState) => ({
  isModalProjectOpen: state.modalProjectReducer.isOpen,
  currentProject: state.modalProjectReducer.currentProject,
  currentProjectIndex: state.modalProjectReducer.currentProjectIndex,
})

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators({ closeModalProject }, dispatch)

export default reduxConnect(mapStateToProps, mapDispatchToProps)(ModalProject)
