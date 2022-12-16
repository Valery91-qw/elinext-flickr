import { createAction } from '@reduxjs/toolkit'
import BookmarksEnum from './bookmarks-enum'
import { ImageType } from '../../dal/axios'

export const addImageToBookmark = createAction<
  { photo: ImageType; tags: Array<string> },
  BookmarksEnum.ADD_IMAGE
>(BookmarksEnum.ADD_IMAGE)

export const removeImageToBookmark = createAction<string, BookmarksEnum.REMOVE_IMAGE>(
  BookmarksEnum.REMOVE_IMAGE,
)
