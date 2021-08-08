import {renderWithRedux} from "../../../../utils/create-store-for-test";
import {TagsArea} from "./TagsArea";
import {screen} from "@testing-library/react";


describe('TagsArea', () => {
    test('the TagsArea component should render', () => {
        renderWithRedux(<TagsArea currentId={"1"} />)
        expect(screen.getByTestId('wrapper')).toBeInTheDocument()
    })
})