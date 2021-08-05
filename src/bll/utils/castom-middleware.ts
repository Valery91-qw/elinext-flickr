import {Dispatch} from "redux";

export const saveToLocalStorageMiddleware = (store: any) => (next: Dispatch) => (action: any) => {
    next(action);
    if (action.type === 'ADD_TAGS' || action.type === 'ADD_IMAGE') {
        saveToLocalStorage({
            bookmarks: store.getState().bookmarks
        })
    }
    if(action.type === "REMOVE_IMAGE") {
        saveToLocalStorage({
            bookmarks: store.getState().bookmarks
        })
    }
}

function saveToLocalStorage(state: any) {
    try {
        const serialisedState = JSON.stringify(state)
        localStorage.setItem("bookmarkState", serialisedState)
    } catch (e) {
        console.warn(e)
    }
}