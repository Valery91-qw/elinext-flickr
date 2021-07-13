import React from 'react';
import {Meta} from '@storybook/react';
import {Header} from "./Header";

export default {
    component: Header,
    title: 'Header',
    parameters: {
        actions: {
            handles: ['click .MuiSvgIcon-root'],
        },
    },
} as Meta

export const HeaderApp = () => {
    return <Header />
}