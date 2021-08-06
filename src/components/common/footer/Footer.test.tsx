import {render, screen} from "@testing-library/react";

import {Footer} from "./Footer";
describe('Footer',  () => {
    test('snapshot test Footer',  () => {
        const {asFragment} = render(<Footer />);
        // @ts-ignore
        expect(asFragment(<Footer />)).toMatchSnapshot()
    })
    test('footer component will be render with text:"Copyrights"',  () => {
        render(<Footer />);
        const text = screen.getByText(/Copyrights/)
        expect(text).toBeInTheDocument()
    })
})
