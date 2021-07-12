import {
    addBookmarkTags,
    addImageToBookmark,
    bookmarksReducer,
    BookmarksStateType,
    removeImageToBookmark
} from "./bookmarks-reducer";
import {ImageType} from "../../dal/axios";

let startState: BookmarksStateType

beforeEach(() => {
    startState = {
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
})

test('the image should be added to state', () => {

    const image: ImageType = {
        title: 'photo3',
        url: 'myUrl',
        secret: 'secret',
        id: '3',
        server: 'server1',
        farm: 3,
        isfamily: 3,
        isfriend: 3,
        ispublic: 3,
        owner: 'yes',
    }

    const action = addImageToBookmark(image)

    const endState = bookmarksReducer(startState, action)

    expect(endState.bookmarksImages.length).toBe(3)
    expect(endState.bookmarksImages[0].id).toBe('1')
    expect(endState.bookmarksImages[2].id).toBe('3')
})
test('curren image should be deleted in state', () => {

    const action = removeImageToBookmark('1')

    const endState = bookmarksReducer(startState, action)

    expect(startState.bookmarksImages.length).toBe(2)
    expect(endState.bookmarksImages.length).toBe(1)
    expect(endState.bookmarksImages[0].id).toBe('2')
})

test('bookmark tags should be added to the desired image', () => {

    const action = addBookmarkTags('1' ,['My', 'first', 'tag'])

    const endState = bookmarksReducer(startState, action)

    expect(startState.bookmarksImages[1].tags).toBeUndefined()
    expect(endState.bookmarksImages[0].tags?.length).toBe(3)
    if(endState.bookmarksImages[0].tags) {
        expect(endState.bookmarksImages[0].tags[0]).toBe('My')
    }

})