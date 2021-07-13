import {Meta} from "@storybook/react";
import React from "react";
import {SearchField} from "./SearchField";
import {ReduxContextDecorator} from "../../../stories/decorators/preview";

export default {
    component: SearchField,
    title: 'SearchField',
    decorators: [ReduxContextDecorator]
} as Meta

export const SearchFieldExample = () => {
    return <SearchField />
}