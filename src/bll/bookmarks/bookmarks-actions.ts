import {ImageType} from "../../dal/axios";
import {bookmarks_constants} from "./bookmarks-constants";

export const addImageToBookmark = (photo: ImageType) => ({type: bookmarks_constants.ADD_IMAGE, photo} as const)
export const removeImageToBookmark = (bookmarkId: string) => ({type: bookmarks_constants.REMOVE_IMAGE, bookmarkId} as const)
export const addBookmarkTags = (bookmarkId: string, tags: Array<string>) => ({type: bookmarks_constants.ADD_TAGS, bookmarkId , tags} as const)

type AddImageToBookmarkType = ReturnType<typeof addImageToBookmark>
type RemoveImageToBookmarkType = ReturnType<typeof removeImageToBookmark>
type AddBookmarkTags = ReturnType<typeof addBookmarkTags>

export type ActionType = AddImageToBookmarkType | RemoveImageToBookmarkType | AddBookmarkTags