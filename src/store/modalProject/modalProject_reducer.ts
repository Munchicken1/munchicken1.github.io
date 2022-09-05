import {
  CLOSE_MODAL_PROJECT,
  IModalProjectReducerState,
  ModalProjectActionTypes,
  OPEN_MODAL_PROJECT,
} from "./modalProject_types"

const initialState: IModalProjectReducerState = {
  isOpen: false,
  currentProject: null,
  currentProjectIndex: null,
}

const modalProjectReducer = (
  state = initialState,
  action: ModalProjectActionTypes
): IModalProjectReducerState => {
  switch (action.type) {
    case OPEN_MODAL_PROJECT:
      return {
        ...state,
        isOpen: true,
        currentProject: action.payload.currentProject,
        currentProjectIndex: action.payload.currentProjectIndex,
      }
    case CLOSE_MODAL_PROJECT:
      return {
        ...initialState,
      }
    default:
      return {
        ...state,
      }
  }
}

export default modalProjectReducer
