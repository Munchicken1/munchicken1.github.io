import React from "react"
import { connect as reduxConnect } from "react-redux"
import { StoreState } from "store"
import { bindActionCreators } from "redux"
import { closeModalProject } from "store/modalProject/modalProject_actions"
import ModalProject from "components/Modals/ModalProject"

interface IProps extends IReduxProps {
  children: React.ReactNode
}

interface IReduxProps {
  isModalProjectOpen: boolean
  closeModalProject: () => void
}

const ModalProvider: React.FC<IProps> = ({
  children,
  isModalProjectOpen,
  closeModalProject,
}) => {
  return (
    <>
      {isModalProjectOpen ? (
            <ModalProject />
      ) : null}
      {children}
    </>
  )
}

const mapStateToProps = (state: StoreState) => ({
  isModalProjectOpen: state.modalProjectReducer.isOpen,
})

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators({ closeModalProject }, dispatch)

export default reduxConnect(mapStateToProps, mapDispatchToProps)(ModalProvider)
