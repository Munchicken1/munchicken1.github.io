import {
  SET_LANGUAGE_EN,
  SET_LANGUAGE_KR,
  ILanguageChangerState,
  LanguageChangerActionTypes,
} from "./languageChanger_types"

const initialState: ILanguageChangerState = {
  currentLanguage: "EN",
}

const languageChangerReducer = (
  state = initialState,
  action: LanguageChangerActionTypes
): ILanguageChangerState => {
  switch (action.type) {
    case SET_LANGUAGE_EN:
      return {
        ...state,
        currentLanguage: "EN",
      }
    case SET_LANGUAGE_KR:
      return {
        ...state,
        currentLanguage: "KR",
      }
    default:
      return {
        ...state,
      }
  }
}

export default languageChangerReducer
