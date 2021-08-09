import {Dispatch} from "redux";
import {bookmarks_constants} from "../bll/bookmarks/bookmarks-constants";
import {ActionType} from "../bll/bookmarks/bookmarks-actions";

export const saveToLocalStorageMiddleware = (store: any) => (next: Dispatch) => (action: ActionType) => {
    next(action);
    if (action.type === bookmarks_constants.ADD_IMAGE ||
        action.type === bookmarks_constants.REMOVE_IMAGE) {
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