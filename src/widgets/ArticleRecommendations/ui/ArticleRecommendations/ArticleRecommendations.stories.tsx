import { articles } from '@/entities/Article';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { getDarkThemeBackground } from '@/shared/config/storybook/getDarkThemeBackground/getDarkThemeBackground';
import { getLightThemeBackground } from '@/shared/config/storybook/getLightThemeBackground/getLightThemeBackground';
import { Theme } from '@/shared/contexts/theme';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import { ArticleRecommendations } from './ArticleRecommendations';

export default {
    title: 'widgets/ArticleRecommendations',
    component: ArticleRecommendations,
    argTypes: {},
    decorators: [withMock],
    parameters: {
        mockData: [
            {
                url: `${__API__}/articles?_limit=4&_expand=user`,
                method: 'GET',
                status: 200,
                response: articles,
            },
        ],
    },
} as ComponentMeta<typeof ArticleRecommendations>;

const Template: ComponentStory<typeof ArticleRecommendations> = (args) => <ArticleRecommendations {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [RouterDecorator(), StoreDecorator({})];
Light.parameters = {
    backgrounds: getLightThemeBackground(),
};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [RouterDecorator(), StoreDecorator({}), ThemeDecorator(Theme.DARK)];
Dark.parameters = {
    backgrounds: getDarkThemeBackground(),
};
