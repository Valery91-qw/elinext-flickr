import bookmarksReducer from './bookmarks-reducer'
import { ImageType } from '../../dal/axios'
import { addImageToBookmark, removeImageToBookmark } from './bookmarks-actions'
import { BookmarksStateType } from './bookmarks-model'

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
        owner: 'yes',
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
        owner: 'yes',
      },
    ],
  }
})

test('The image should be added to the state. The state tab should be different. Tags must also be added', () => {
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

  const tags = ['one', 'to']

  const action = addImageToBookmark({ photo: image, tags })

  const endState = bookmarksReducer(startState, action)

  expect(endState.bookmarksImages.length).toBe(3)
  expect(endState.bookmarksImages[0].id).toBe('1')
  expect(endState.bookmarksImages[2].id).toBe('3')
  expect(startState.bookmarksImages.length).not.toBe(endState.bookmarksImages.length)
  expect(startState.bookmarksImages).not.toEqual(endState.bookmarksImages)
  expect(endState.bookmarksImages[2].tags?.length).toBe(2)
})
test('Image with id equal to "1" must be removed from the Bookmarks state', () => {
  const action = removeImageToBookmark({ bookmarkId: '1' })

  const endState = bookmarksReducer(startState, action)

  expect(startState.bookmarksImages.length).toBe(2)
  expect(endState.bookmarksImages.length).toBe(1)
  expect(endState.bookmarksImages[0].id).toBe('2')
})
