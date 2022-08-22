import {CLOSE_MODAL_PROJECT, IModalProjectReducerState, ModalProjectActionTypes, OPEN_MODAL_PROJECT} from './modalProject_types'

const initialState: IModalProjectReducerState = {
    isOpen: false
}

const modalProjectReducer = (state = initialState, action: ModalProjectActionTypes): IModalProjectReducerState => {
    switch (action.type) {
        case OPEN_MODAL_PROJECT:
            return {
                ...state,
                isOpen: true
            }
        case CLOSE_MODAL_PROJECT:
            return {
                ...state,
                isOpen: false
            }
        default:
            return {
                ...state
            }
    }
}

export default modalProjectReducer