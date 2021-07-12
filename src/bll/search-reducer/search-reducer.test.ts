import {searchReducer, SearchStateType, setPaginationOption, setPhotos, setSearchValue} from "./search-reducer";
import {ImageType} from "../../dal/axios";

let startState: SearchStateType

beforeEach(() => {
    startState = {
        searchValue: undefined,
        pagination: null,
        images: [],
    }
})

test('search value should be added in state', () => {

    const searchValue = 'Cats'

    const action = setSearchValue(searchValue)

    const endState = searchReducer(startState, action)

    expect(endState.searchValue).toBe(searchValue)
})
test('Array images should be added', () => {

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
});
test('the values of pagination fields must be set', () => {

    const paginationOption = {
        page: 1,
        pages: 1
    }
    const action = setPaginationOption(paginationOption)

    const endState = searchReducer(startState, action)

    expect(startState.pagination).toBeNull()
    expect(endState.pagination?.page).toBe(1)
})