import React from 'react';
import {Meta, Story} from '@storybook/react';
import {BookmarkButton, BookmarkButtonPropsType} from "./BookmarkButton"
import {action} from "@storybook/addon-actions";

export default {
    component: BookmarkButton,
    title: 'Button',
} as Meta

const Template: Story<BookmarkButtonPropsType> = (args) => <BookmarkButton {...args}/>

export const BookmarkMutableButtonExample = Template.bind({})
BookmarkMutableButtonExample.args = {
    inBookmark: false,
    removeToBookmark: action('Remove callback'),
    addToBookmark: action('add callback'),
}
export const BookmarkStaticButtonPropInBookmarkTrue = () => (<BookmarkButton
    inBookmark={true}
    addToBookmark={action('add callback')}
    removeToBookmark={action('remove callback')} />
)

export const BookmarkStaticButtonPropInBookmarkFalse = () => <BookmarkButton
    inBookmark={false}
    addToBookmark={action('add callback')}
    removeToBookmark={action('remove callback')} />
