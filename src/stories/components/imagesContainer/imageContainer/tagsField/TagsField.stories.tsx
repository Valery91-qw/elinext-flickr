import React from 'react';
import {Meta, Story} from '@storybook/react';
import {TagsField, TagsFieldPropsType} from "../../../../../view/components/imagesContainer/imageContainer/tagsField/TagsField";
import {ReduxContextDecorator} from "../../../../decorators/preview";
import {action} from "@storybook/addon-actions";


const CustomDocumentationComponent: React.VFC<{}> = () => {
    return (
        <div>
            <h1>Tags field component</h1>
            <p>The component uses internally handler the text field</p>
            <p>This handler splits the string into delimiters such as space and comma.</p>
        </div>
    );
};

export default {
    component: TagsField,
    title: 'TagsField',
    decorators: [ReduxContextDecorator],
    parameters: {
        docs: {
            page: CustomDocumentationComponent
        }
    }
} as Meta

const Template: Story<TagsFieldPropsType> = (args) => <TagsField {...args}/>

export const TagsFieldExample = Template.bind({})
TagsFieldExample.args = {
    setTags: action('Callback works')
}