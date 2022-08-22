import { combineReducers, configureStore } from "@reduxjs/toolkit"
import modalProjectReducer from "./modalProject/modalProject_reducer"
import { IModalProjectReducerState } from "./modalProject/modalProject_types"


const rootReducer = combineReducers<StoreState>({
    modalProjectReducer
})

const store = configureStore({
    reducer: rootReducer
})

export interface StoreState {
    modalProjectReducer: IModalProjectReducerState
}

export default store