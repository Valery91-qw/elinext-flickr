import {search_constants} from "./search-constants";
import {ImageType} from "../../dal/axios";
import {IsLoadType} from "../procesing-reducer/processing-reducer";

export const setSearchValue = (searchValue: string | undefined) => ({type: search_constants.SET_SEARCH_VALUE, searchValue} as const)
export const setPhotos = (photos: Array<ImageType>) => ({type: search_constants.SET_PHOTOS, photos} as const)
export const setPaginationOption = (pagination :{page: number, pages: number}) => ({type: search_constants.SET_PAGINATION_OPTION, pagination} as const)

type SetSearchValueType = ReturnType<typeof setSearchValue>
type SetPhotosType = ReturnType<typeof setPhotos>
type SetPaginationOptionType = ReturnType<typeof setPaginationOption>

export type ActionType = SetSearchValueType | SetPhotosType | SetPaginationOptionType | IsLoadType