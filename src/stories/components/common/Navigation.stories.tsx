import React from 'react';
import {Meta} from '@storybook/react';
import {Navigation} from "../../../view/components/common/navigation/Navigation";
import {RouterDecorator} from "../../decorators/preview";

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

export const NavigationExample = () => {
    return (
        <div style={{width: '150px'}}>
            <Navigation/>
        </div>
    )
}