// Reducer Type

export interface ILanguageChangerState {
  currentLanguage: string
}

// Action Types

export const SET_LANGUAGE_EN = "SET_LANGUAGE_EN"

interface SetLanguageENAction {
  type: typeof SET_LANGUAGE_EN
}

export const SET_LANGUAGE_KR = "SET_LANGUAGE_KR"

interface SetLanguageKRAction {
  type: typeof SET_LANGUAGE_KR
}

export type LanguageChangerActionTypes =
  | SetLanguageENAction
  | SetLanguageKRAction
