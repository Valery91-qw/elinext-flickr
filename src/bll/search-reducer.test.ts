import {searchReducer, SearchStateType, setSearchValue} from "./search-reducer";


test('search value should be added in state', () => {
    const startState: SearchStateType = {
        searchValue: null
    };

    const searchValue = 'Cats';

    const action = setSearchValue(searchValue);

    const endState = searchReducer(startState, action);

    expect(endState.searchValue).toBe(searchValue);
});
