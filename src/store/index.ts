import { combineReducers, configureStore } from "@reduxjs/toolkit"
import modalProjectReducer from "./modalProject/modalProject_reducer"
import { IModalProjectReducerState } from "./modalProject/modalProject_types"
import languageChangerReducer from "./languageChanger/languageChanger_reducer"
import { ILanguageChangerState } from "./languageChanger/languageChanger_types"

const rootReducer = combineReducers<StoreState>({
  modalProjectReducer,
  languageChangerReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export interface StoreState {
  modalProjectReducer: IModalProjectReducerState
  languageChangerReducer: ILanguageChangerState
}

export default store
