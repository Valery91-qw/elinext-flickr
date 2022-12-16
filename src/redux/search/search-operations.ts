import { createAsyncThunk } from '@reduxjs/toolkit'
import { setPaginationOption, setPhotos, setSearchValue } from './search-actions'
import { flickrApi } from '../../dal/axios'
import isLoad from '../procesing/processing-actions'

const getPhotos = createAsyncThunk(
  'photos/get',
  async (searchParam: { searchString: string | undefined; currentPage: number }, thunkAPI) => {
    const { searchString, currentPage = 1 } = searchParam
    thunkAPI.dispatch(setSearchValue(searchString))
    thunkAPI.dispatch(isLoad(true))
    try {
      const data = await flickrApi.searchPhoto(searchString, currentPage)
      thunkAPI.dispatch(setPhotos(data.photos.photo))
      thunkAPI.dispatch(setPaginationOption({ page: data.photos.page, pages: data.photos.pages }))
      thunkAPI.dispatch(isLoad(false))
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn(e)
    }
  },
)

export default getPhotos
