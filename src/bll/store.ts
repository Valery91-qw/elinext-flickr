import {applyMiddleware, combineReducers, createStore} from "redux";
import {searchReducer} from "./search-reducer/search-reducer";
import thunk from "redux-thunk";
import {bookmarksReducer} from "./bookmarks-reducer/bookmarks-reducer";
import {processingReducer} from "./procesing-reducer/processing-reducer";


const rootReducer = combineReducers({
    search: searchReducer,
    bookmarks: bookmarksReducer,
    process: processingReducer,
})

function saveToLocalStorage(state: any) {
    try {
        const serialisedState = JSON.stringify(state)
        localStorage.setItem("bookmarkState", serialisedState)
    } catch (e) {
        console.warn(e)
    }
}
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

export const store = createStore(rootReducer, loadFromLocalStorage() , applyMiddleware(thunk))

store.subscribe(() => {
    saveToLocalStorage({
        bookmarks: store.getState().bookmarks
    })
})

export type RootStateType = ReturnType<typeof rootReducer>