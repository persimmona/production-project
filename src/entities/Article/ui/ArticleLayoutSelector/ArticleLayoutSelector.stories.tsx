import { ComponentStory, ComponentMeta } from '@storybook/react';

import { getDarkThemeBackground } from '@/shared/config/storybook/getDarkThemeBackground/getDarkThemeBackground';
import { getLightThemeBackground } from '@/shared/config/storybook/getLightThemeBackground/getLightThemeBackground';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/contexts/theme';

import { ArticleLayoutSelector } from './ArticleLayoutSelector';

export default {
    title: 'shared/ArticleLayoutSelector',
    component: ArticleLayoutSelector,
    argTypes: {},
} as ComponentMeta<typeof ArticleLayoutSelector>;

const Template: ComponentStory<typeof ArticleLayoutSelector> = (args) => <ArticleLayoutSelector {...args} />;

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
