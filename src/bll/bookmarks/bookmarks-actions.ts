import {bookmarks_constants} from "./bookmarks-constants";
import {ImageType} from "../../dal/axios";

export const addImageToBookmark = (photo: ImageType, tags: Array<string>) => ({type: bookmarks_constants.ADD_IMAGE, photo, tags} as const)
export const removeImageToBookmark = (bookmarkId: string) => ({type: bookmarks_constants.REMOVE_IMAGE, bookmarkId} as const)

type AddImageToBookmarkType = ReturnType<typeof addImageToBookmark>
type RemoveImageToBookmarkType = ReturnType<typeof removeImageToBookmark>

export type ActionType = AddImageToBookmarkType | RemoveImageToBookmarkType