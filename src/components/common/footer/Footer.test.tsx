import {render, screen} from "@testing-library/react";
import {Footer} from "./Footer";
describe('Footer',  () => {
    test('footer component will be render with text:"Copyrights"',  () => {
        render(<Footer />);
        const text = screen.getByText(/Copyrights/)
        expect(text).toBeInTheDocument()
    })
    test('snapshot test Footer',  () => {
        const {asFragment} = render(<Footer />);
        expect(asFragment(<Footer />)).toMatchSnapshot()
    })
})
