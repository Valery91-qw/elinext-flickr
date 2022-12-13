import { flickrApi, ResponseImagesType } from '../../dal/axios'
import getPhotos from './search-operations'
import { setPaginationOption, setPhotos, setSearchValue } from './search-actions'
import { isLoad } from '../procesing/processing-actions'

jest.mock('../../dal/axios')

const flickrAPIMock = flickrApi as jest.Mocked<typeof flickrApi>

const dispatchMock = jest.fn()
const getStateMock = jest.fn()

beforeEach(() => {
  dispatchMock.mockClear()
  getStateMock.mockClear()
  flickrAPIMock.searchPhoto.mockClear()
})

test('The converter must call 5 action creators in a strictly specified sequence', async () => {
  const result: ResponseImagesType = {
    photos: {
      page: 1,
      photo: [
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
      ],
      pages: 1,
      perpage: 1,
      total: 1,
    },
    stat: 'ok',
  }

  flickrAPIMock.searchPhoto.mockReturnValue(Promise.resolve(result))

  const expectedActions = [
    setSearchValue('one'),
    isLoad(true),
    setPhotos(result.photos.photo),
    setPaginationOption({ page: result.photos.page, pages: result.photos.pages }),
    isLoad(false),
  ]

  const thunk = getPhotos({searchString: 'one', currentPage: 1})
  await thunk(dispatchMock, getStateMock, {})

  expect(dispatchMock).toBeCalledTimes(5)
  expect(dispatchMock.mock.calls[0][0]).toEqual(expectedActions[0])
  expect(dispatchMock.mock.calls[1][0]).toEqual(expectedActions[1])
  expect(dispatchMock.mock.calls[1][0]).not.toEqual(expectedActions[0])
  expect(dispatchMock.mock.calls[2][0]).toEqual(expectedActions[2])
  expect(dispatchMock.mock.calls[3][0]).toEqual(expectedActions[3])
  expect(dispatchMock.mock.calls[4][0]).toEqual(expectedActions[4])
})
