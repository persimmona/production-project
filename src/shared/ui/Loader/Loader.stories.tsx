import { ComponentMeta, ComponentStory } from '@storybook/react';

import { getDarkThemeBackground } from '@/shared/config/storybook/getDarkThemeBackground/getDarkThemeBackground';
import { getLightThemeBackground } from '@/shared/config/storybook/getLightThemeBackground/getLightThemeBackground';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/contexts/theme';

import { Loader } from './Loader';

export default {
    title: 'shared/Loader',
    component: Loader,
    argTypes: {},
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const DefaultLight = Template.bind({});
DefaultLight.args = {};
DefaultLight.parameters = {
    backgrounds: getLightThemeBackground(),
};

export const DefaultDark = Template.bind({});
DefaultDark.args = {};
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
DefaultDark.parameters = {
    backgrounds: getDarkThemeBackground(),
};
