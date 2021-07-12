import {ImageType} from "../../dal/axios";

const ADD_IMAGE = 'ADD_IMAGE'
const REMOVE_IMAGE = 'REMOVE_IMAGE'
const ADD_TAGS = 'ADD_TAGS'

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
        case ADD_TAGS:
            return {
                ...bookmarksState,
                bookmarksImages: bookmarksState.bookmarksImages.map(image => {
                    if (image.id === action.bookmarkId) {
                        return {...image, tags: [...action.tags]}
                    } else {
                        return {...image}
                    }
                })
            }
        default: return bookmarksState
    }
}

export const addImageToBookmark = (photo: ImageType) => ({type: ADD_IMAGE,photo} as const)
export const removeImageToBookmark = (bookmarkId: string) => ({type: REMOVE_IMAGE, bookmarkId} as const)
export const addBookmarkTags = (bookmarkId: string, tags: Array<string>) => ({type: ADD_TAGS, bookmarkId , tags} as const)

type AddImageToBookmarkType = ReturnType<typeof addImageToBookmark>
type RemoveImageToBookmarkType = ReturnType<typeof removeImageToBookmark>
type AddBookmarkTags = ReturnType<typeof addBookmarkTags>

type ActionType = AddImageToBookmarkType | RemoveImageToBookmarkType | AddBookmarkTags

export type BookmarkImageType = ImageType &  {
    tags?: Array<string>
}

export type BookmarksStateType = {
    bookmarksImages: Array<BookmarkImageType>
}