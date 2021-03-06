import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import processingReducer from "./procesing/processing-reducer";
import {saveToLocalStorageMiddleware} from "../utils/custom-middleware";
import bookmarksReducer from "./bookmarks/bookmarks-reducer";
import searchReducer from "./search/search-reducer";

export const rootReducer = combineReducers({
    search: searchReducer,
    bookmarks: bookmarksReducer,
    process: processingReducer,
})

function loadFromLocalStorage() {
    try {
        const serialisedState = localStorage.getItem("bookmarkState")
        if (serialisedState === null) return
        return JSON.parse(serialisedState)
    } catch (e) {
        console.warn(e)
        return
    }
}

export const store = createStore(rootReducer , loadFromLocalStorage() , applyMiddleware(thunk, saveToLocalStorageMiddleware))

export type RootStateType = ReturnType<typeof rootReducer>

