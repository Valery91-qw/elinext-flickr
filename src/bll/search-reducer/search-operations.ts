import {ActionType, setPaginationOption, setPhotos, setSearchValue} from "./search-actions";
import {flickrApi} from "../../dal/axios";
import {ThunkAction} from "redux-thunk";
import {RootStateType} from "../store";
import {isLoad} from "../procesing-reducer/processing-actions";

export const getPhotos = (searchString: string | undefined, currentPage: number = 1): ThunkType => {
    return async (dispatch) => {
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

type ThunkType = ThunkAction<void, RootStateType, unknown, ActionType>