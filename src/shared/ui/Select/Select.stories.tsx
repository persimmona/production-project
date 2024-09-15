import { ComponentMeta, ComponentStory } from '@storybook/react';

import { getDarkThemeBackground } from '@/shared/config/storybook/getDarkThemeBackground/getDarkThemeBackground';
import { getLightThemeBackground } from '@/shared/config/storybook/getLightThemeBackground/getLightThemeBackground';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/contexts/theme';

import { Select } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {},
    args: {
        options: [
            {
                readableValue: 'Test',
                value: 'test',
            },
            {
                readableValue: 'Test2',
                value: 'test2',
            },
            {
                readableValue: 'Test3',
                value: 'test3',
            },
        ],
        value: 'test',
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [];
Light.parameters = {
    backgrounds: getLightThemeBackground(),
};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
Dark.parameters = {
    backgrounds: getDarkThemeBackground(),
};
