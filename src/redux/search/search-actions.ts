import { createAction } from '@reduxjs/toolkit'
import { ImageType } from '../../dal/axios'
import SearchEnum from './search-enum'

export const setSearchValue = createAction<string | undefined, SearchEnum.SET_SEARCH_VALUE>(
  SearchEnum.SET_SEARCH_VALUE,
)

export const setPhotos = createAction<Array<ImageType>, SearchEnum.SET_PHOTOS>(
  SearchEnum.SET_PHOTOS,
)

export const setPaginationOption = createAction<
  { page: number; pages: number },
  SearchEnum.SET_PAGINATION_OPTION
>(SearchEnum.SET_PAGINATION_OPTION)
