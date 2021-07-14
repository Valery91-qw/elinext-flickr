import {ThunkAction} from "redux-thunk";
import {RootStateType} from "../store";
import {flickrApi, ImageType} from "../../dal/axios";
import {isLoad, IsLoadType} from "../procesing-reducer/processing-reducer";

const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE';
const SET_PHOTOS = 'SET_PHOTOS';
const SET_PAGINATION_OPTION = 'SET_PAGINATION_OPTION'

export const initialState: SearchStateType = {
    searchValue: undefined,
    pagination: null,
    images: []
}

export const searchReducer = (searchState = initialState, action: ActionType): SearchStateType => {
    switch (action.type) {
        case SET_SEARCH_VALUE:
            return {...searchState,
                searchValue: action.searchValue
            }
        case SET_PHOTOS:
            return {...searchState,
                images: [...action.photos]
            }
        case SET_PAGINATION_OPTION:
            return {...searchState, pagination: {...searchState.pagination, ...action.pagination}}
        default:
            return searchState
    }
}


export const setSearchValue = (searchValue: string | undefined) => ({type: SET_SEARCH_VALUE, searchValue} as const)
export const setPhotos = (photos: Array<ImageType>) => ({type: SET_PHOTOS, photos} as const)
export const setPaginationOption = (pagination :{page: number, pages: number}) => ({type: SET_PAGINATION_OPTION, pagination} as const)

export const getPhotos = (
    searchString: string | undefined,
    currentPage: number = 1
): ThunkType => {
    return async (dispatch,
                  getState: () => RootStateType ) => {
        dispatch(setSearchValue(searchString))
        dispatch(isLoad(true))
        try {
            const data = await flickrApi.searchPhoto(searchString, currentPage)
            dispatch(setPhotos(data.photos.photo))
            dispatch(setPaginationOption({page: data.photos.page, pages: data.photos.pages}))
            dispatch(isLoad(false))
        } catch (e) {

        }
    }
}



export type SearchStateType = {
    searchValue: string | undefined
    pagination: { page: number, pages: number } | null
    images: Array<ImageType>
}

type SetSearchValueType = ReturnType<typeof setSearchValue>
type SetPhotosType = ReturnType<typeof setPhotos>
type SetPaginationOptionType = ReturnType<typeof setPaginationOption>

export type ActionType = SetSearchValueType | SetPhotosType | SetPaginationOptionType | IsLoadType

type ThunkType = ThunkAction<void, RootStateType, unknown, ActionType>