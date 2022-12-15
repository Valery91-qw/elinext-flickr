import { createReducer } from '@reduxjs/toolkit'
import { addImageToBookmark, removeImageToBookmark } from './bookmarks-actions'
import { initialBookmarks } from './bookmarks-model'

const bookmarksReducer = createReducer(initialBookmarks, (builder) => {
  builder
    .addCase(addImageToBookmark, (state, action) => {
      state.bookmarksImages.push({ ...action.payload.photo, tags: action.payload.tags })
    })
    .addCase(removeImageToBookmark, (state, action) => {
      const bookmarkId = action.payload
      const imgIndex = state.bookmarksImages.findIndex((el) => el.id === bookmarkId)
      state.bookmarksImages.splice(imgIndex, 1)
    })
})

export default bookmarksReducer
