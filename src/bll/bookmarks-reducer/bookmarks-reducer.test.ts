import {addImageToBookmark, bookmarksReducer, BookmarksStateType, removeImageToBookmark} from "./bookmarks-reducer";
import {ImageType} from "../../dal/axios";


test('the image should be added to state', () => {
    const startState: BookmarksStateType = {
        bookmarksImages: [],
    }
    const image: ImageType = {
        title: 'photo1',
        url: 'myUrl',
        secret: 'secret',
        id: '1',
        server: 'server1',
        farm: 1,
        isfamily: 1,
        isfriend: 1,
        ispublic: 1,
        owner: 'yes',
    }

    const action = addImageToBookmark(image)

    const endState = bookmarksReducer(startState, action)

    expect(endState.bookmarksImages.length).toBe(1)
    expect(endState.bookmarksImages[0].id).toBe('1')
})
test('curren image should be deleted in state', () => {
    const startState: BookmarksStateType = {
        bookmarksImages: [
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
    }
    const action = removeImageToBookmark('1')

    const endState = bookmarksReducer(startState, action)

    expect(startState.bookmarksImages.length).toBe(2)
    expect(endState.bookmarksImages.length).toBe(1)
    expect(endState.bookmarksImages[0].id).toBe('2')
})