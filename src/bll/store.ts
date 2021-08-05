import {applyMiddleware, combineReducers, createStore} from "redux";
import {searchReducer} from "./search-reducer/search-reducer";
import thunk from "redux-thunk";
import {bookmarksReducer} from "./bookmarks-reducer/bookmarks-reducer";
import {processingReducer} from "./procesing-reducer/processing-reducer";
import {saveToLocalStorageMiddleware} from "./utils/custom-middleware";

const rootReducer = combineReducers({
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

