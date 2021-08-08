import {search_constants} from "./search-constants";
import {ActionType} from "./search-actions";
import {initialSearch, SearchStateType} from "./search-model";


export const searchReducer = (searchState = initialSearch, action: ActionType): SearchStateType => {
    switch (action.type) {
        case search_constants.SET_SEARCH_VALUE:
            return {...searchState,
                searchValue: action.searchValue
            }
        case search_constants.SET_PHOTOS:
            return {...searchState,
                images: [...action.photos]
            }
        case search_constants.SET_PAGINATION_OPTION:
            return {...searchState, pagination: {...searchState.pagination, ...action.pagination}}
        default:
            return searchState
    }
}
