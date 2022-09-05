// Reducer Type

import { IProject } from "constants/ProjectConstants"

export interface IModalProjectReducerState {
  isOpen: boolean
  currentProject: IProject | null
  currentProjectIndex: number | null
}

// Action Types

export const OPEN_MODAL_PROJECT = "OPEN_MODAL_PROJECT"

export interface IOpenModalProjectPayload {
  currentProject: IProject
  currentProjectIndex: number
}

interface OpenModalProjectAction {
  type: typeof OPEN_MODAL_PROJECT
  payload: IOpenModalProjectPayload
}

export const CLOSE_MODAL_PROJECT = "CLOSE_MODAL_PROJECT"

interface CloseModalProjectAction {
  type: typeof CLOSE_MODAL_PROJECT
}

export type ModalProjectActionTypes =
  | OpenModalProjectAction
  | CloseModalProjectAction
