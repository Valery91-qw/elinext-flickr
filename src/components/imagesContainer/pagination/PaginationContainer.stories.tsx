import React from 'react';
import {Meta} from '@storybook/react';
import {PaginationContainer} from "./PaginationContainer";
import {ReduxContextDecorator} from "../../../stories/decorators/preview";

export default {
    component: PaginationContainer,
    title: 'Pagination',
    decorators: [ReduxContextDecorator]
} as Meta

export const PaginationExample = () => {
    return <PaginationContainer />
}