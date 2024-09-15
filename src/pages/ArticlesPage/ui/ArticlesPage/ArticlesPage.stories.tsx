import { ComponentMeta, ComponentStory } from '@storybook/react';

import { articles } from '@/entities/Article';
import { getDarkThemeBackground } from '@/shared/config/storybook/getDarkThemeBackground/getDarkThemeBackground';
import { getLightThemeBackground } from '@/shared/config/storybook/getLightThemeBackground/getLightThemeBackground';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/contexts/theme';

import ArticlesPage from './ArticlesPage';
import { articlesPageReducer } from '../../model/slice/articlesPageSlice';

export default {
    title: 'pages/ArticlesPage',
    component: ArticlesPage,
    argTypes: {},
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = () => <ArticlesPage />;

export const Light = Template.bind({});
Light.decorators = [
    RouterDecorator(),
    StoreDecorator(
        {
            articlesPage: {
                entities: Object.fromEntries(articles.map((article) => [article.id, article])),
                ids: articles.map((article) => article.id),
            },
        },
        { articlesPage: articlesPageReducer },
    ),
];
Light.parameters = {
    backgrounds: getLightThemeBackground(),
};

export const Dark = Template.bind({});
Dark.decorators = [
    RouterDecorator(),
    StoreDecorator(
        {
            articlesPage: {
                entities: Object.fromEntries(articles.map((article) => [article.id, article])),
                ids: articles.map((article) => article.id),
            },
        },
        { articlesPage: articlesPageReducer },
    ),
    ThemeDecorator(Theme.DARK),
];
Dark.parameters = {
    backgrounds: getDarkThemeBackground(),
};
