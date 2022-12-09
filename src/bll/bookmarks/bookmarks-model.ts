import { ImageType } from '../../dal/axios'

export type BookmarkImageType = ImageType & {
  tags?: Array<string>
}

export type BookmarksStateType = {
  bookmarksImages: Array<BookmarkImageType>
}

export const initialBookmarks: BookmarksStateType = {
  bookmarksImages: [],
}
