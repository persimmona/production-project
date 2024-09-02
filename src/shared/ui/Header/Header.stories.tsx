import { ComponentMeta, ComponentStory } from '@storybook/react';
import { getDarkThemeBackground } from '@/shared/config/storybook/getDarkThemeBackground/getDarkThemeBackground';
import { getLightThemeBackground } from '@/shared/config/storybook/getLightThemeBackground/getLightThemeBackground';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/contexts/theme';
import { Header } from './Header';

export default {
    title: 'shared/Header',
    component: Header,
    args: { children: "I'm header", tag: 'h1' },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const DefaultLight = Template.bind({});
DefaultLight.parameters = {
    backgrounds: getLightThemeBackground(),
};

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
DefaultDark.parameters = {
    backgrounds: getDarkThemeBackground(),
};
