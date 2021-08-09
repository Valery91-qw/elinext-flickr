import { ActionType } from "./bookmarks-actions";
import {bookmarks_constants} from "./bookmarks-constants";
import {BookmarksStateType, initialBookmarks} from "./bookmarks-model";

export default function bookmarksReducer(bookmarksState = initialBookmarks, action: ActionType): BookmarksStateType {
    switch (action.type) {
        case bookmarks_constants.ADD_IMAGE:
                return {
                    ...bookmarksState,
                    bookmarksImages: [
                        ...bookmarksState.bookmarksImages.map(img => img.tags ? ({...img, tags: [...img.tags]}) : {...img}),
                        {...action.photo, tags: [...action.tags]}
                    ]
                }
        case bookmarks_constants.REMOVE_IMAGE:
           return {
               ...bookmarksState,
               bookmarksImages: bookmarksState.bookmarksImages.filter(el => el.id !== action.bookmarkId)
           }
        default: return bookmarksState
    }
}
