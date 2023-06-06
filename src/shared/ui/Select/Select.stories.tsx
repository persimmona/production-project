import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Select } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {},
    args: {
        options: [
            {
                label: 'Test',
                value: 'test',
            },
            {
                label: 'Test2',
                value: 'test',
            },
            {
                label: 'Test3',
                value: 'test',
            },
        ],
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {};
