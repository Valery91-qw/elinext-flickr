import {ImageType} from "../../dal/axios";

export const initialBookmarks: BookmarksStateType = {
    bookmarksImages: [],
}

export type BookmarkImageType = ImageType &  {
    tags?: Array<string>
}

export type BookmarksStateType = {
    bookmarksImages: Array<BookmarkImageType>
}