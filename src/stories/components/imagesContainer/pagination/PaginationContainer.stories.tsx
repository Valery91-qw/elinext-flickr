import React from 'react';
import {Meta} from '@storybook/react';
import {PaginationContainer} from "../../../../components/imagesContainer/pagination/PaginationContainer";
import {ReduxContextDecorator} from "../../../decorators/preview";

export default {
    component: PaginationContainer,
    title: 'Pagination',
    decorators: [ReduxContextDecorator],
} as Meta

export const PaginationContainerExample = () => {
    return <PaginationContainer />
}