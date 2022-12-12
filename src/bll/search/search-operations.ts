import { ThunkAction } from '@reduxjs/toolkit'
import { ActionType, setPaginationOption, setPhotos, setSearchValue } from './search-actions'
import { flickrApi } from '../../dal/axios'
import { RootStateType } from '../store'
import { isLoad } from '../procesing/processing-actions'

const getPhotos =
  (searchString: string | undefined, currentPage = 1): ThunkType =>
  async (dispatch) => {
    dispatch(setSearchValue(searchString))
    dispatch(isLoad(true))
    try {
      const data = await flickrApi.searchPhoto(searchString, currentPage)
      dispatch(setPhotos(data.photos.photo))
      dispatch(setPaginationOption({ page: data.photos.page, pages: data.photos.pages }))
      dispatch(isLoad(false))
    } catch (e) {
      console.warn(e)
    }
  }

export default getPhotos

type ThunkType = ThunkAction<void, RootStateType, unknown, ActionType>
