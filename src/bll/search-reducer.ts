
const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE'

export const initialState: SearchStateType = {
    searchValue: null
}

export const searchReducer = (searchState = initialState, action: ActionType) => {
    switch (action.type) {
        case SET_SEARCH_VALUE:
            return {...searchState, searchValue: action.searchValue}
        default:
            return searchState
    }
}


export const setSearchValue = (searchValue: string) => ({type: SET_SEARCH_VALUE, searchValue} as const)

type SearchValueType = ReturnType<typeof setSearchValue>

export type SearchStateType = {
    searchValue: string | null
}

export type ActionType = SearchValueType