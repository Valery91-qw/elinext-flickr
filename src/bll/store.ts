import { combineReducers, configureStore } from '@reduxjs/toolkit'
import processingReducer from './procesing/processing-reducer'
import { saveToLocalStorageMiddleware } from '../utils/custom-middleware'
import bookmarksReducer from './bookmarks/bookmarks-reducer'
import searchReducer from './search/search-reducer'
import loadFromLocalStorage from '../utils/preloaded-state-local-storage';

export const rootReducer = combineReducers({
  search: searchReducer,
  bookmarks: bookmarksReducer,
  process: processingReducer,
})
export const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadFromLocalStorage(),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([saveToLocalStorageMiddleware]),
})

export type RootStateType = ReturnType<typeof rootReducer>
