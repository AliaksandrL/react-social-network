import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer, {DialogsActionsRootType} from "./ProfileReducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";


export type AppStateTypes = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    profilePage: profileReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))


export type AppActionsType = DialogsActionsRootType
export type RootThunkType = ThunkAction<void, AppStateTypes, unknown, AppActionsType>//Promise <-> void


//@ts-ignore
window.store = store

export default store