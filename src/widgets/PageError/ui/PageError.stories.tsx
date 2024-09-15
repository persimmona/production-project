import { ComponentMeta, ComponentStory } from '@storybook/react';

import { getDarkThemeBackground } from '@/shared/config/storybook/getDarkThemeBackground/getDarkThemeBackground';
import { getLightThemeBackground } from '@/shared/config/storybook/getLightThemeBackground/getLightThemeBackground';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/contexts/theme';

import { PageError } from './PageError';

export default {
    title: 'widgets/PageError',
    component: PageError,
    argTypes: {},
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = () => <PageError />;

export const Light = Template.bind({});
Light.args = {};
Light.parameters = {
    backgrounds: getLightThemeBackground(),
};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
Dark.parameters = {
    backgrounds: getDarkThemeBackground(),
};
