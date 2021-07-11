import {ImageType} from "../../dal/axios";

const ADD_IMAGE = 'ADD_IMAGE'
const REMOVE_IMAGE = 'REMOVE_IMAGE'

const initialState: BookmarksStateType = {
    bookmarksImages: [],
}

export const bookmarksReducer = (bookmarksState = initialState, action: ActionType): BookmarksStateType => {
    switch (action.type) {
        case ADD_IMAGE:
            if(bookmarksState.bookmarksImages.find(el => el.id === action.photo.id)) {
                return {...bookmarksState, bookmarksImages: [...bookmarksState.bookmarksImages]}
            } else {
                return {
                    ...bookmarksState,
                    bookmarksImages: [...bookmarksState.bookmarksImages, action.photo]
                }
            }
        case REMOVE_IMAGE:
           return {
               ...bookmarksState,
               bookmarksImages: bookmarksState.bookmarksImages.filter(el => el.id !== action.bookmarkId)
           }
        default: return bookmarksState
    }
}

export const addImageToBookmark = (photo: ImageType) => ({type: ADD_IMAGE,photo} as const)
export const removeImageToBookmark = (bookmarkId: string) => ({type: REMOVE_IMAGE, bookmarkId} as const)

type AddImageToBookmarkType = ReturnType<typeof addImageToBookmark>
type RemoveImageToBookmarkType = ReturnType<typeof removeImageToBookmark>

type ActionType = AddImageToBookmarkType | RemoveImageToBookmarkType


export type BookmarksStateType = {
    bookmarksImages: Array<ImageType>
}