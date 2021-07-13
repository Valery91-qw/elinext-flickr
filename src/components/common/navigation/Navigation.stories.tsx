import React from 'react';
import {Meta} from '@storybook/react';
import {Navigation} from "./Navigation";
import {RouterDecorator} from "../../../stories/decorators/preview";

export default {
    component: Navigation,
    title: 'Navigation',
    decorators: [RouterDecorator],
    parameters: {
        actions: {
            handles: ['click .MuiButtonBase-root'],
        },
    },
} as Meta

export const NavigationApp = () => {
    return <Navigation />
}