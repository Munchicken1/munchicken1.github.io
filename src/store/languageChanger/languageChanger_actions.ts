import { action } from "typesafe-actions"
import { SET_LANGUAGE_EN, SET_LANGUAGE_KR } from "./languageChanger_types"

export const setLanguageEN = () => action(SET_LANGUAGE_EN)

export const setLanguageKR = () => action(SET_LANGUAGE_KR)
