import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { getDarkThemeBackground } from 'shared/config/storybook/getDarkThemeBackground/getDarkThemeBackground';
import { getLightThemeBackground } from 'shared/config/storybook/getLightThemeBackground/getLightThemeBackground';
import { Theme } from 'shared/contexts/theme';
import { CommentCard } from './CommentCard';

export default {
    title: 'pages/CommentCard',
    component: CommentCard,
    argTypes: {},
    args: {
        comment: {
            id: '1',
            text: 'some text',
            user: {
                id: '111',
                username: 'Text username',
                avatar: 'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg',
            },
        },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Light = Template.bind({});
Light.decorators = [RouterDecorator()];
Light.parameters = {
    backgrounds: getLightThemeBackground(),
};

export const Dark = Template.bind({});
Dark.decorators = [RouterDecorator(), ThemeDecorator(Theme.DARK)];
Dark.parameters = {
    backgrounds: getDarkThemeBackground(),
};
