
import {getPhotos} from "./search-reducer";
import {flickrApi, ResponseImagesType} from "../../dal/axios";

jest.mock("../../dal/axios")

const flickrAPIMock = flickrApi as jest.Mocked<typeof flickrApi>

const dispatchMock = jest.fn()
const getStateMock = jest.fn()

beforeEach(() => {
    dispatchMock.mockClear()
    getStateMock.mockClear()
    flickrAPIMock.searchPhoto.mockClear()
});

test('get photos thunk', async () => {
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
                    owner: 'yes'
                },
            ],
            pages: 1,
            perpage: 1,
            total: 1,
        },
        stat: 'ok',
    }

    flickrAPIMock.searchPhoto.mockReturnValue(Promise.resolve(result))

    const thunk = getPhotos('one')
    await thunk(dispatchMock, getStateMock, {})

    expect(dispatchMock).toBeCalledTimes(5)
})