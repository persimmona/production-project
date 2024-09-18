import { ComponentMeta, ComponentStory } from '@storybook/react';

import { getDarkThemeBackground } from '@/shared/config/storybook/getDarkThemeBackground/getDarkThemeBackground';
import { getLightThemeBackground } from '@/shared/config/storybook/getLightThemeBackground/getLightThemeBackground';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/contexts/theme';

import { NotificationList } from './NotificationList';
import { mockNotifications } from '../../model/mock/notificationMock';

export default {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
    argTypes: {},
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />;

export const Light = Template.bind({});
Light.args = { notifications: mockNotifications };
Light.decorators = [];
Light.parameters = {
    themes: getLightThemeBackground(),
};

export const Dark = Template.bind({});
Dark.args = { notifications: mockNotifications };
Dark.decorators = [ThemeDecorator(Theme.DARK)];
Dark.parameters = {
    themes: getDarkThemeBackground(),
};

export const Loading = Template.bind({});
Loading.args = { loading: true, notifications: [] };
Loading.decorators = [];
Loading.parameters = {
    themes: getLightThemeBackground(),
};
