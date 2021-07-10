import {combineReducers, createStore } from 'redux'
import {settingsValueReducer} from "../../../h10/bll/settingsValueReducer";

const reducersRoot = combineReducers({
    rangeValue: settingsValueReducer,
})

const store = createStore(reducersRoot)

export default store

export type AppStoreType = ReturnType<typeof reducersRoot>