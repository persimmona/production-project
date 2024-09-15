import { ComponentMeta, ComponentStory } from '@storybook/react';

import { getDarkThemeBackground } from '@/shared/config/storybook/getDarkThemeBackground/getDarkThemeBackground';
import { getLightThemeBackground } from '@/shared/config/storybook/getLightThemeBackground/getLightThemeBackground';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/contexts/theme';

import { ArticleList } from './ArticleList';
import { articles } from '../../model/mock/articles';

export default {
    title: 'entities/Article/ArticleList',
    component: ArticleList,
    args: {
        articles: articles,
        layout: 'grid',
        isLoading: false,
    },
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [RouterDecorator()];
Light.parameters = {
    backgrounds: getLightThemeBackground(),
};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [RouterDecorator(), ThemeDecorator(Theme.DARK)];
Dark.parameters = {
    backgrounds: getDarkThemeBackground(),
};
