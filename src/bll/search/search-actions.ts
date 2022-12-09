import { searchEnum } from './search-enum'
import { ImageType } from '../../dal/axios'
import { IsLoadType } from '../procesing/processing-actions'

export const setSearchValue = (searchValue: string | undefined) =>
  ({ type: searchEnum.SET_SEARCH_VALUE, searchValue } as const)
export const setPhotos = (photos: Array<ImageType>) =>
  ({ type: searchEnum.SET_PHOTOS, photos } as const)
export const setPaginationOption = (pagination: { page: number; pages: number }) =>
  ({ type: searchEnum.SET_PAGINATION_OPTION, pagination } as const)

type SetSearchValueType = ReturnType<typeof setSearchValue>
type SetPhotosType = ReturnType<typeof setPhotos>
type SetPaginationOptionType = ReturnType<typeof setPaginationOption>

export type ActionType = SetSearchValueType | SetPhotosType | SetPaginationOptionType | IsLoadType
