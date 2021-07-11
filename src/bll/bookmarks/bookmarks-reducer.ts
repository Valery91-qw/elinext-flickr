import {PhotoType} from "../../dal/axios";

const ADD_PHOTO = 'ADD_PHOTO'


const initialState: BookmarksStateType = {
    bookmarksPhotos: [],
}

export const bookmarksReducer = (bookmarksState = initialState, action: ActionType): BookmarksStateType => {
    switch (action.type) {
        case ADD_PHOTO:
            if(bookmarksState.bookmarksPhotos.find(el => el.id === action.photo.id)) {
                return {...bookmarksState, bookmarksPhotos: [...bookmarksState.bookmarksPhotos]}
            } else {
                return {
                    ...bookmarksState,
                    bookmarksPhotos: [...bookmarksState.bookmarksPhotos, action.photo]
                }
            }
        default: return bookmarksState
    }
}

export const addImageToBookmark = (photo: PhotoType) => ({type: ADD_PHOTO,photo} as const)

type AddPhotoToBookmarkType = ReturnType<typeof addImageToBookmark>

type ActionType = AddPhotoToBookmarkType


export type BookmarksStateType = {
    bookmarksPhotos: Array<PhotoType>
}