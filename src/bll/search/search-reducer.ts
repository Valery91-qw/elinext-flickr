import { searchEnum } from './search-enum'
import { ActionType } from './search-actions'
import { initialSearch, SearchStateType } from './search-model'

export default function searchReducer(
  searchState = initialSearch,
  action: ActionType,
): SearchStateType {
  switch (action.type) {
    case searchEnum.SET_SEARCH_VALUE:
      return { ...searchState, searchValue: action.searchValue }
    case searchEnum.SET_PHOTOS:
      return { ...searchState, images: [...action.photos] }
    case searchEnum.SET_PAGINATION_OPTION:
      return { ...searchState, pagination: { ...searchState.pagination, ...action.pagination } }
    default:
      return searchState
  }
}
