import {PhotoType} from "../../dal/axios";

const ADD_PHOTO = 'ADD_PHOTO'


const initialState: BookmarksStateType = {
    bookmarksPhotos: []
}

export const bookmarksReducer = (bookmarksState = initialState, action: ActionType): BookmarksStateType => {
    switch (action.type) {
        case ADD_PHOTO:
            return {
                ...bookmarksState,
                bookmarksPhotos: [...bookmarksState.bookmarksPhotos, action.photo]
            }
        default: return bookmarksState
    }
}

export const addPhotoToBookmark = (photo: PhotoType) => ({type: ADD_PHOTO,photo} as const)

type AddPhotoToBookmarkType = ReturnType<typeof addPhotoToBookmark>

type ActionType = AddPhotoToBookmarkType


export type BookmarksStateType = {
    bookmarksPhotos: Array<PhotoType>
}