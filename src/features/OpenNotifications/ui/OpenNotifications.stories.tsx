import { ComponentMeta, ComponentStory } from '@storybook/react';
import { mockNotifications } from 'entities/Notification';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
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

const Template: ComponentStory<typeof OpenNotifications> = (args) => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        <OpenNotifications {...args} />
    </div>
);

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})];
Light.parameters = {
    backgrounds: getLightThemeBackground(),
};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];
Dark.parameters = {
    backgrounds: getDarkThemeBackground(),
};
