import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { getDarkThemeBackground } from '@/shared/config/storybook/getDarkThemeBackground/getDarkThemeBackground';
import { getLightThemeBackground } from '@/shared/config/storybook/getLightThemeBackground/getLightThemeBackground';
import { Theme } from '@/shared/contexts/theme';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import { ArticleRating } from './ArticleRating';

export default {
    title: 'features/ArticleRating',
    component: ArticleRating,
    args: {
        articleId: '1',
    },
    decorators: [
        withMock,
        StoreDecorator({
            user: {
                authData: {
                    id: '1',
                },
            },
        }),
    ],
    parameters: {
        mockData: [
            {
                url: `${__API__}/article-ratings?articleId=1&userId=1`,
                method: 'GET',
                status: 200,
                response: [{ rating: 3 }],
            },
        ],
    },
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (args) => <ArticleRating {...args} />;

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
