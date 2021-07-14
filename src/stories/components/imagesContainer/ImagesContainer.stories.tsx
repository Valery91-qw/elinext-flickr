import React from 'react';
import {Meta, Story} from '@storybook/react';
import {ImagesContainer, ImagesContainerPropsType} from "../../../components/imagesContainer/ImagesContainer";
import {ReduxContextDecorator, RouterDecorator} from "../../decorators/preview";

export default {
    component: ImagesContainer,
    title: 'ImagesContainer',
    decorators: [RouterDecorator, ReduxContextDecorator]
} as Meta


const Template: Story<ImagesContainerPropsType> = (args) => <ImagesContainer {...args}/>

const images = [
    {
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
    },
    {
        id: '2',
        farm: 2,
        title: 'second images',
        isfamily: 2,
        isfriend: 2,
        ispublic: 2,
        owner: '2',
        secret: 'secret 2',
        server: 'second server',
        url: 'not my image'}
]

export const ImagesContainerExample = Template.bind({})
ImagesContainerExample.args = {
    images: images
}