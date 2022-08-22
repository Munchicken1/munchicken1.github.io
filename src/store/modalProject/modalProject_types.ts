// Reducer Type

export interface IModalProjectReducerState {
    isOpen: boolean
}

// Action Types

export const OPEN_MODAL_PROJECT = 'OPEN_MODAL_PROJECT'

interface OpenModalProjectAction {
    type: typeof OPEN_MODAL_PROJECT
}

export const CLOSE_MODAL_PROJECT = 'CLOSE_MODAL_PROJECT'

interface CloseModalProjectAction {
    type: typeof CLOSE_MODAL_PROJECT
}

export type ModalProjectActionTypes = OpenModalProjectAction | CloseModalProjectAction