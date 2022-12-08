/* eslint-disable */
import { Dispatch } from 'redux'
import { bookmarksEnum } from '../bll/bookmarks/bookmarks-enum'
import { ActionType } from '../bll/bookmarks/bookmarks-actions'

export const saveToLocalStorageMiddleware =
  (store: any) => (next: Dispatch) => (action: ActionType) => {
    next(action)
    if (action.type === bookmarksEnum.ADD_IMAGE || action.type === bookmarksEnum.REMOVE_IMAGE) {
      saveToLocalStorage({
        bookmarks: store.getState().bookmarks,
      })
    }
  }

function saveToLocalStorage(state: any) {
  try {
    const serialisedState = JSON.stringify(state)
    localStorage.setItem('bookmarkState', serialisedState)
  } catch (e) {
    console.warn(e)
  }
}
