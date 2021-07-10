import {searchReducer, SearchStateType, setPhotos, setSearchValue} from "./search-reducer";
import {PhotoType} from "../dal/axios";


test('search value should be added in state', () => {
    const startState: SearchStateType = {
        searchValue: null,
        photos: [],
    };

    const searchValue = 'Cats';

    const action = setSearchValue(searchValue);

    const endState = searchReducer(startState, action);

    expect(endState.searchValue).toBe(searchValue);
});
test('Array photos type should be added', () => {
    const startState: SearchStateType = {
        searchValue: null,
        photos: []
    };

    const arrayPhotos: Array<PhotoType> = [
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
    ];

    const action = setPhotos(arrayPhotos);

    const endState = searchReducer(startState, action);

    expect(startState.photos.length).toBe(0)
    expect(endState.photos[0].id).toBe('1')
    expect(endState.photos[1].id).toBe('2')
})