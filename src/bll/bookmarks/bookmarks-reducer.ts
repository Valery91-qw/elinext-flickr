import { ActionType } from './bookmarks-actions'
import BookmarksEnum from './bookmarks-enum'
import { BookmarksStateType, initialBookmarks } from './bookmarks-model'

export default function bookmarksReducer(
  bookmarksState = initialBookmarks,
  action: ActionType,
): BookmarksStateType {
  switch (action.type) {
    case BookmarksEnum.ADD_IMAGE:
      return {
        ...bookmarksState,
        bookmarksImages: [
          ...bookmarksState.bookmarksImages.map((img) =>
            img.tags ? { ...img, tags: [...img.tags] } : { ...img },
          ),
          { ...action.payload.photo, tags: [...action.payload.tags] },
        ],
      }
    case BookmarksEnum.REMOVE_IMAGE:
      return {
        ...bookmarksState,
        bookmarksImages: bookmarksState.bookmarksImages.filter((el) => el.id !== action.payload.bookmarkId),
      }
    default:
      return bookmarksState
  }
}