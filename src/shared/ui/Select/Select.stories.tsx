import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Select } from './Select';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/contexts/theme';

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
                value: 'test2',
            },
            {
                label: 'Test3',
                value: 'test3',
            },
        ],
        value: 'Test',
    },
    parameters: {
        backgrounds: { disable: true },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const DefaultLight = Template.bind({});

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
