import { ComponentMeta, ComponentStory } from '@storybook/react';
import { mockNotifications } from 'entities/Notification';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { getDarkThemeBackground } from 'shared/config/storybook/getDarkThemeBackground/getDarkThemeBackground';
import { getLightThemeBackground } from 'shared/config/storybook/getLightThemeBackground/getLightThemeBackground';
import { Theme } from 'shared/contexts/theme';
import { OpenNotifications } from './OpenNotifications';

export default {
    title: 'features/OpenNotifications',
    component: OpenNotifications,
    parameters: {
        mockData: [
            {
                url: `${__API__}/notifications`,
                method: 'GET',
                status: 200,
                response: mockNotifications,
            },
        ],
    },
} as ComponentMeta<typeof OpenNotifications>;

const Template: ComponentStory<typeof OpenNotifications> = (args) => <OpenNotifications {...args} />;

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
