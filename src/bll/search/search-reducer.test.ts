import {searchReducer} from "./search-reducer";
import {ImageType} from "../../dal/axios";
import {setPaginationOption, setPhotos, setSearchValue} from "./search-actions";
import {SearchStateType} from "./search-model";

let startState: SearchStateType

beforeEach(() => {
    startState = {
        searchValue: undefined,
        pagination: null,
        images: [],
    }
})

test('The string "Cats" needs to be added to the search state. The previous state should not change. A new object will return', () => {

    const searchValue = 'Cats'

    const action = setSearchValue(searchValue)

    const endState = searchReducer(startState, action)

    expect(endState.searchValue).toBe(searchValue)
    expect(startState.searchValue).not.toBe('Cats')
    expect(startState).not.toEqual(endState)
})
test('An array of passed objects must be added to the state. The previous state will not change, a new state object will return', () => {

    const arrayPhotos: Array<ImageType> = [
        {
            title: 'photo1',
            url: 'myUrl',
            secret: 'secret',
            id: '1',
            server: 'server1',
            farm: 1,
            isfamily: 1,
            isfriend: 1,
            ispublic: 1,
            owner: 'yes'
        },
        {
            title: 'photo2',
            url: 'myUrl',
            secret: 'secret',
            id: '2',
            server: 'server2',
            farm: 2,
            isfamily: 2,
            isfriend: 2,
            ispublic: 2,
            owner: 'yes'
        },
    ]

    const action = setPhotos(arrayPhotos)

    const endState = searchReducer(startState, action)

    expect(startState.images.length).toBe(0)
    expect(endState.images[0].id).toBe('1')
    expect(endState.images[1].id).toBe('2')
    expect(startState).not.toEqual(endState)
});
test('A new state object will be created, and the passed object will be the value of the pagination field', () => {

    const paginationOption = {
        page: 1,
        pages: 1
    }
    const action = setPaginationOption(paginationOption)

    const endState = searchReducer(startState, action)

    expect(startState.pagination).toBeNull()
    expect(endState.pagination?.page).toBe(1)
    expect(startState).not.toEqual(endState)
})