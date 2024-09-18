import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { getDarkThemeBackground } from '@/shared/config/storybook/getDarkThemeBackground/getDarkThemeBackground';
import { getLightThemeBackground } from '@/shared/config/storybook/getLightThemeBackground/getLightThemeBackground';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/contexts/theme';

import { QuickFilters } from './QuickFilters';
import { QuickFilter } from '../QuickFilter/QuickFilter';

export default {
    title: 'shared/QuickFilters/QuickFilters',
    component: QuickFilters,
    args: {
        selectedValue: 'science',
        children: [
            <QuickFilter key='science' label='Science' value='science' />,
            <QuickFilter key='general' label='General' value='general' />,
        ],
        onChange: action('onChange'),
    },
} as ComponentMeta<typeof QuickFilters>;

const Template: ComponentStory<typeof QuickFilters> = (args) => <QuickFilters {...args} />;

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
