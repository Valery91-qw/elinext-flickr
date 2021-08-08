import React from 'react';
import {Meta} from '@storybook/react';
import {TagsArea} from "../../../../../view/components/imagesContainer/imageContainer/tagsArea/TagsArea";
import {ReduxContextDecorator} from "../../../../decorators/preview";

export default {
    component: TagsArea,
    title: 'TagsArea',
    decorators: [ReduxContextDecorator]
} as Meta

export const TagsAreaComponent = () => {
    return <TagsArea currentId={'1'}/>
}