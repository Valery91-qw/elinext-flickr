import { ActionType } from "./bookmarks-actions";
import {bookmarks_constants} from "./bookmarks-constants";
import {BookmarksStateType, initialBookmarks} from "./bookmarks-model";


export const bookmarksReducer = (bookmarksState = initialBookmarks, action: ActionType): BookmarksStateType => {
    switch (action.type) {
        case bookmarks_constants.ADD_IMAGE:
                return {
                    ...bookmarksState,
                    bookmarksImages: [...bookmarksState.bookmarksImages, action.photo]
                }
        case bookmarks_constants.REMOVE_IMAGE:
           return {
               ...bookmarksState,
               bookmarksImages: bookmarksState.bookmarksImages.filter(el => el.id !== action.bookmarkId)
           }
        case bookmarks_constants.ADD_TAGS:
            return {
                ...bookmarksState,
                bookmarksImages: bookmarksState.bookmarksImages.map(
                    image => image.id === action.bookmarkId
                        ? ({...image, tags: [...action.tags]})
                        : ({...image})
                )}
        default: return bookmarksState
    }
}
