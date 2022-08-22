import { action } from "typesafe-actions";
import { OPEN_MODAL_PROJECT, CLOSE_MODAL_PROJECT } from "./modalProject_types";

export const openModalProject = () => action(OPEN_MODAL_PROJECT)

export const closeModalProject = () => action(CLOSE_MODAL_PROJECT)