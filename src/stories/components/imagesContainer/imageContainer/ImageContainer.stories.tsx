import React from 'react';
import {Meta, Story} from '@storybook/react';
import {ImageContainer, ImageContainerPropsType} from "../../../../components/imagesContainer/imageContainer/ImageContainer";
import {ReduxContextDecorator} from "../../../decorators/preview";

export default {
    component: ImageContainer,
    title: 'ImageContainer',
    decorators: [ReduxContextDecorator]
} as Meta

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
    url: 'my image',
    tags: ['in', 'bookmark']
}

const Template: Story<ImageContainerPropsType> = (args) => <ImageContainer {...args}/>

export const ImageContainerExample = Template.bind({})
ImageContainerExample.args = {
    image
}