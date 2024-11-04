import { ComponentMeta, ComponentStory } from '@storybook/react';

import { mockNotifications } from '@/entities/Notification';
import { getDarkThemeBackground } from '@/shared/config/storybook/getDarkThemeBackground/getDarkThemeBackground';
import { getLightThemeBackground } from '@/shared/config/storybook/getLightThemeBackground/getLightThemeBackground';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/contexts/theme';

import { Navbar } from './Navbar';

export default {
    title: 'widgets/Navbar',
    component: Navbar,
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
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})];
Light.parameters = {
    themes: getLightThemeBackground(),
};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];
Dark.parameters = {
    themes: getDarkThemeBackground(),
};

export const Auth = Template.bind({});
Auth.args = {};
Auth.decorators = [StoreDecorator({ user: { authData: {} } }), ThemeDecorator(Theme.DARK)];
Auth.parameters = {
    themes: getDarkThemeBackground(),
};
