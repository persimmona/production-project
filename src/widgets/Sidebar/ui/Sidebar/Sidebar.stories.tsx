import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { getDarkThemeBackground } from 'shared/config/storybook/getDarkThemeBackground/getDarkThemeBackground';
import { getLightThemeBackground } from 'shared/config/storybook/getLightThemeBackground/getLightThemeBackground';
import { Theme } from 'shared/contexts/theme';
import { Sidebar } from './Sidebar';

export default {
    title: 'widgets/Sidebar',
    component: Sidebar,
    argTypes: {},
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Light = Template.bind({});
Light.decorators = [StoreDecorator({})];
Light.parameters = {
    backgrounds: getLightThemeBackground(),
};

export const Dark = Template.bind({});
Dark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];
Dark.parameters = {
    backgrounds: getDarkThemeBackground(),
};

export const Auth = Template.bind({});
Auth.decorators = [StoreDecorator({ user: { authData: {} } })];
Auth.parameters = {
    backgrounds: getLightThemeBackground(),
};
