import {ThunkAction} from "redux-thunk";
import {RootStateType} from "./store";
import {flickrApi, PhotoType} from "../dal/axios";

const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE'
const SET_PHOTOS = 'SET_PHOTOS'

export const initialState: SearchStateType = {
    searchValue: null,
    photos: []
}

export const searchReducer = (searchState = initialState, action: ActionType): SearchStateType => {
    switch (action.type) {
        case SET_SEARCH_VALUE:
            return {...searchState,
                searchValue: action.searchValue
            }
        case SET_PHOTOS:
            return {...searchState,
                photos: [...action.photos]
            }
        default:
            return searchState
    }
}


export const setSearchValue = (searchValue: string) => ({type: SET_SEARCH_VALUE, searchValue} as const)
export const setPhotos = (photos: Array<PhotoType>) => ({type: SET_PHOTOS, photos} as const)

export const getPhotos = (searchString: string | null):ThunkType => {
   return async (dispatch, getState :() => RootStateType) => {
       try {
           const data = await flickrApi.searchPhoto(searchString)
           dispatch(setPhotos(data.photos.photo))
       } catch (e) {
           console.log(e)
       }
   }
}



export type SearchStateType = {
    searchValue: string | null
    photos: Array<PhotoType>
}

type SetSearchValueType = ReturnType<typeof setSearchValue>
type SetPhotosType = ReturnType<typeof setPhotos>

export type ActionType = SetSearchValueType | SetPhotosType

type ThunkType = ThunkAction<void, RootStateType, unknown, ActionType>