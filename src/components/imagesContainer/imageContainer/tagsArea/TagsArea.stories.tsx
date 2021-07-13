import React from 'react';
import {Meta} from '@storybook/react';
import {TagsArea} from "./TagsArea";
import {ReduxContextDecorator} from "../../../../stories/decorators/preview";

export default {
    component: TagsArea,
    title: 'TagsArea',
    decorators: [ReduxContextDecorator]
} as Meta

export const TagsAreaComponent = () => {
    return <TagsArea currentId={'1'}/>
}