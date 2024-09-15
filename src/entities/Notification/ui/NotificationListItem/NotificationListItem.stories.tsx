import { ComponentMeta, ComponentStory } from '@storybook/react';

import { getDarkThemeBackground } from '@/shared/config/storybook/getDarkThemeBackground/getDarkThemeBackground';
import { getLightThemeBackground } from '@/shared/config/storybook/getLightThemeBackground/getLightThemeBackground';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/contexts/theme';

import { NotificationListItem } from './NotificationListItem';
import { mockNotifications } from '../../model/mock/notificationMock';

export default {
    title: 'entities/Notification/NotificationListItem',
    component: NotificationListItem,
    args: { notification: mockNotifications[0] },
} as ComponentMeta<typeof NotificationListItem>;

const Template: ComponentStory<typeof NotificationListItem> = (args) => <NotificationListItem {...args} />;

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
