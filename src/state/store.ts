import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counterReducer";
import {loadState, saveState} from "../utils/localStorage";

const rootReducer = combineReducers({
    counterState: counterReducer
})

export type AppRootStateTypes = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, loadState())

store.subscribe(() => {
    saveState(
        {
            counterState : store.getState().counterState,
        })
})