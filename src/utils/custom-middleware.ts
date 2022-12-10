import { Dispatch, Middleware } from 'redux'
import BookmarksEnum from '../bll/bookmarks/bookmarks-enum'
import { ActionType } from '../bll/bookmarks/bookmarks-actions'

function saveToLocalStorage(state: Object) {
  const serialisedState = JSON.stringify(state)
  localStorage.setItem('bookmarkState', serialisedState)
}

const saveToLocalStorageMiddleware: Middleware =
  (store) => (next: Dispatch) => (action: ActionType) => {
    next(action)
    if (action.type === BookmarksEnum.ADD_IMAGE || action.type === BookmarksEnum.REMOVE_IMAGE) {
      saveToLocalStorage({
        bookmarks: store.getState().bookmarks,
      })
    }
  }

export default saveToLocalStorageMiddleware
