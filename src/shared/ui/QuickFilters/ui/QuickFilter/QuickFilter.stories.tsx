import { ComponentStory, ComponentMeta } from '@storybook/react';

import { getDarkThemeBackground } from '@/shared/config/storybook/getDarkThemeBackground/getDarkThemeBackground';
import { getLightThemeBackground } from '@/shared/config/storybook/getLightThemeBackground/getLightThemeBackground';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/contexts/theme';

import { QuickFilter } from './QuickFilter';

export default {
    title: 'shared/QuickFilters/QuickFilter',
    component: QuickFilter,
    args: {
        value: 'science',
        label: 'Science',
        isSelected: false,
    },
} as ComponentMeta<typeof QuickFilter>;

const Template: ComponentStory<typeof QuickFilter> = (args) => <QuickFilter {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [];
Light.parameters = {
    themes: getLightThemeBackground(),
};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
Dark.parameters = {
    themes: getDarkThemeBackground(),
};
