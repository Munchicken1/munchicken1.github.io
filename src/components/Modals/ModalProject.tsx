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
import chelsea1 from "assets/chelsea1.png"
import chelsea2 from "assets/chelsea2.png"
import chelsea3 from "assets/chelsea3.png"
import { connect as reduxConnect } from "react-redux"
import { StoreState } from "store"
import { closeModalProject } from "store/modalProject/modalProject_actions"
import { bindActionCreators } from "redux"
import * as S from "constants/StringConstants"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import useViewport from "utilities/hooks/useViewport"
import { DeviceNameEnum } from "style/media"

interface IProps extends IReduxProps {}

interface IReduxProps {
  isModalProjectOpen: boolean
  closeModalProject: () => void
}

const ModalProject: React.FC<IProps> = ({
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
            <ModalProjectCarouselSlideContainer>
              <ModalProjectImage src={chelsea1} />
            </ModalProjectCarouselSlideContainer>
            <ModalProjectCarouselSlideContainer>
              <ModalProjectImage src={chelsea2} />
            </ModalProjectCarouselSlideContainer>
            <ModalProjectCarouselSlideContainer>
              <ModalProjectImage src={chelsea3} />
            </ModalProjectCarouselSlideContainer>
          </Carousel>
        </ModalProjectImageSlideContainer>
        <ModalProjectBodyContainer>
          <ModalProjectCloseButtonContainer onClick={closeModalProject}>
            <ModalCloseIcon />
          </ModalProjectCloseButtonContainer>
          <ModalProjectTitleText>
            {S.Projects.projectTitle}
          </ModalProjectTitleText>
          <ModalProjectContentText>
            {S.Projects.projectDescription}
            {S.Projects.projectDescription}
            {S.Projects.projectDescription}
            {S.Projects.projectDescription}
            {S.Projects.projectDescription}
            {S.Projects.projectDescription}
            {S.Projects.projectDescription}
            {S.Projects.projectDescription}
            {S.Projects.projectDescription}
            {S.Projects.projectDescription}
            {S.Projects.projectDescription}
            {S.Projects.projectDescription}
            {S.Projects.projectDescription}
            {S.Projects.projectDescription}
            {S.Projects.projectDescription}
          </ModalProjectContentText>
        </ModalProjectBodyContainer>
      </ModalProjectContainer>
    </ModalProjectDialog>
  )
}

const mapStateToProps = (state: StoreState) => ({
  isModalProjectOpen: state.modalProjectReducer.isOpen,
})

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators({ closeModalProject }, dispatch)

export default reduxConnect(mapStateToProps, mapDispatchToProps)(ModalProject)
