import React from "react"
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
} from "./ModalProject.style"
import { connect as reduxConnect } from "react-redux"
import { StoreState } from "store"
import { closeModalProject } from "store/modalProject/modalProject_actions"
import { bindActionCreators } from "redux"
import * as S from "constants/StringConstants"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import useViewport from "utilities/hooks/useViewport"
import { DeviceNameEnum } from "style/media"
import { IProject } from "constants/ProjectConstants"

interface IProps extends IReduxProps {}

interface IReduxProps {
  currentProject: IProject | null
  isModalProjectOpen: boolean
  closeModalProject: () => void
}

const ModalProject: React.FC<IProps> = ({
  currentProject,
  isModalProjectOpen,
  closeModalProject,
}) => {
  const viewport = useViewport()

  return (
    <ModalProjectDialog
      open={isModalProjectOpen}
      onClose={closeModalProject}
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
                Prev
              </ModalProjectPrevButton>
            )}
            renderArrowNext={(handleNext) => (
              <ModalProjectNextButton onClick={handleNext}>
                Next
              </ModalProjectNextButton>
            )}
          >
            {currentProject.projectImages.map((image) => (
              <ModalProjectCarouselSlideContainer>
                <ModalProjectImage src={image} />
              </ModalProjectCarouselSlideContainer>
            ))}
          </Carousel>
        </ModalProjectImageSlideContainer>
        <ModalProjectBodyContainer>
          <ModalProjectCloseButtonContainer onClick={closeModalProject}>
            <ModalCloseIcon />
          </ModalProjectCloseButtonContainer>
          <ModalProjectTitleText>{currentProject.title}</ModalProjectTitleText>
          <ModalProjectContentText>
            {currentProject.content}
          </ModalProjectContentText>
        </ModalProjectBodyContainer>
      </ModalProjectContainer>
    </ModalProjectDialog>
  )
}

const mapStateToProps = (state: StoreState) => ({
  isModalProjectOpen: state.modalProjectReducer.isOpen,
  currentProject: state.modalProjectReducer.currentProject,
})

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators({ closeModalProject }, dispatch)

export default reduxConnect(mapStateToProps, mapDispatchToProps)(ModalProject)
