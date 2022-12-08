import { ActionType } from './bookmarks-actions'
import { bookmarksEnum } from './bookmarks-enum'
import { BookmarksStateType, initialBookmarks } from './bookmarks-model'

export default function bookmarksReducer(
  bookmarksState = initialBookmarks,
  action: ActionType,
): BookmarksStateType {
  switch (action.type) {
    case bookmarksEnum.ADD_IMAGE:
      return {
        ...bookmarksState,
        bookmarksImages: [
          ...bookmarksState.bookmarksImages.map((img) =>
            img.tags ? { ...img, tags: [...img.tags] } : { ...img },
          ),
          { ...action.photo, tags: [...action.tags] },
        ],
      }
    case bookmarksEnum.REMOVE_IMAGE:
      return {
        ...bookmarksState,
        bookmarksImages: bookmarksState.bookmarksImages.filter((el) => el.id !== action.bookmarkId),
      }
    default:
      return bookmarksState
  }
}
