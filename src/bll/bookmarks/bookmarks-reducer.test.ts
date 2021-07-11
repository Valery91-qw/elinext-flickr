import {addPhotoToBookmark, bookmarksReducer, BookmarksStateType} from "./bookmarks-reducer";
import {PhotoType} from "../../dal/axios";


test('the photo should be added to state', () => {

    const startState: BookmarksStateType = {
        bookmarksPhotos: []
    }
    const photo: PhotoType = {
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
    };

    const action = addPhotoToBookmark(photo)

    const endState = bookmarksReducer(startState, action)

    expect(endState.bookmarksPhotos.length).toBe(1);
    expect(endState.bookmarksPhotos[0].id).toBe('1')
})