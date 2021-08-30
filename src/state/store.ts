import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counterReducer";

const rootReducer = combineReducers({
    counterState: counterReducer
})

export type AppRootStateTypes = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)
