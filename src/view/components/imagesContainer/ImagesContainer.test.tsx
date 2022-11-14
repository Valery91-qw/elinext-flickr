import {ImagesContainer} from "./ImagesContainer";
import {screen} from "@testing-library/react";
import {createMemoryHistory} from "history";
import {Router} from "react-router-dom";
import {renderWithRedux} from "../../../utils/create-store-for-test";



const image = {
    id: '1',
    farm: 1,
    title: 'first images',
    isfamily: 1,
    isfriend: 1,
    ispublic: 1,
    owner: '1',
    secret: 'secret 1',
    server: 'first server',
    url: 'my image'
}
const testData = (function (image) {
    let result = []
        for (let i = 0; i <= 20; i++){
            result.push({
                ...image,
                id: `${i}`
            })
        }
    return  result
})(image)

describe('ImagesContainer', () => {
    test('If in component Images Container the props is equal empty array and path equal /search', () => {
        const history = createMemoryHistory()
        history.push('/search')
        renderWithRedux(
            // @ts-ignore
            <Router history={history}>
                <ImagesContainer images={[]} />
            </Router>
        )

        const searchInput = screen.getByRole('textbox') as HTMLInputElement

        expect(screen.getByPlaceholderText('Search')).toBeInTheDocument()
        expect(screen.getByText(/No images here.Would you try to search for anything else ?/)).toBeInTheDocument()
        expect(searchInput).toBeInTheDocument()
    })
    test('This test describes the case how an images container should be displayed with test data in a path equal to /search',  () => {
        const history = createMemoryHistory()
        history.push('/search')
        renderWithRedux(
            // @ts-ignore
            <Router history={history}>
                <ImagesContainer images={[{
                    id: '1',
                    farm: 1,
                    title: 'first images',
                    isfamily: 1,
                    isfriend: 1,
                    ispublic: 1,
                    owner: '1',
                    secret: 'secret 1',
                    server: 'first server',
                    url: 'my image'
                }, {
                        id: '2',
                        farm: 2,
                        title: 'second images',
                        isfamily: 2,
                        isfriend: 2,
                        ispublic: 2,
                        owner: '2',
                        secret: 'secret 2',
                        server: 'second server',
                        url: 'not my image'}]} />
            </Router>
        )

        expect(screen.getAllByRole('button').length).toBe(2)
        expect(screen.getByText(/first images/)).toBeInTheDocument()
        expect(screen.getByText(/second images/)).toBeInTheDocument()
        expect(screen.queryByText(/No images here.Would you try to search for anything else ?/)).not.toBeInTheDocument()
    })
    test('This case should displayed with the pagination component in a path equal to /search', () => {
        const history = createMemoryHistory()
        history.push('/search')
        renderWithRedux(
            // @ts-ignore
            <Router history={history}>
                <ImagesContainer images={testData} />
            </Router>
        )
        expect(screen.getByRole('navigation')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Search')).toBeInTheDocument()
        expect(screen.getAllByRole('button').length).toBeGreaterThan(19)
    })
    test('The image container must be correctly rendered with a path equal to /bookmarks and props equal to an empty array', () => {
        const history = createMemoryHistory()
        history.push('/bookmarks')
        renderWithRedux(
            // @ts-ignore
            <Router history={history}>
                <ImagesContainer images={[]} />
            </Router>
        )
        expect(screen.queryByText(/No images here.Would you try to search for anything else ?/)).not.toBeInTheDocument()
    })
    test('The images container should not display pagination as it is displayed in the path equal /bookmarks', () => {
        const history = createMemoryHistory()
        history.push('/bookmarks')
        renderWithRedux(
            // @ts-ignore
            <Router history={history}>
                <ImagesContainer images={testData} />
            </Router>
        )
        expect(screen.queryByRole('navigation')).not.toBeInTheDocument()
        expect(screen.getAllByRole('button').length).toBe(testData.length)
    })
})