import { action } from "typesafe-actions"
import {
  OPEN_MODAL_PROJECT,
  CLOSE_MODAL_PROJECT,
  IOpenModalProjectPayload,
} from "./modalProject_types"

export const openModalProject = (payload: IOpenModalProjectPayload) =>
  action(OPEN_MODAL_PROJECT, payload)

export const closeModalProject = () => action(CLOSE_MODAL_PROJECT)
