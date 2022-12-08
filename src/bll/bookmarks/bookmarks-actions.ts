import { bookmarksEnum } from './bookmarks-enum'
import { ImageType } from '../../dal/axios'

export const addImageToBookmark = (photo: ImageType, tags: Array<string>) =>
  ({ type: bookmarksEnum.ADD_IMAGE, photo, tags } as const)
export const removeImageToBookmark = (bookmarkId: string) =>
  ({ type: bookmarksEnum.REMOVE_IMAGE, bookmarkId } as const)

type AddImageToBookmarkType = ReturnType<typeof addImageToBookmark>
type RemoveImageToBookmarkType = ReturnType<typeof removeImageToBookmark>

export type ActionType = AddImageToBookmarkType | RemoveImageToBookmarkType
