import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { getDarkThemeBackground } from '@/shared/config/storybook/getDarkThemeBackground/getDarkThemeBackground';
import { getLightThemeBackground } from '@/shared/config/storybook/getLightThemeBackground/getLightThemeBackground';
import { Theme } from '@/shared/contexts/theme';
import { mockNotifications } from '../../model/mock/notificationMock';
import { NotificationListItem } from './NotificationListItem';

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
