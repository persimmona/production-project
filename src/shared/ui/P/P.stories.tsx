import { ComponentMeta, ComponentStory } from '@storybook/react';
import { getDarkThemeBackground } from 'shared/config/storybook/getDarkThemeBackground/getDarkThemeBackground';
import { getLightThemeBackground } from 'shared/config/storybook/getLightThemeBackground/getLightThemeBackground';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/contexts/theme';
import { P } from './P';

export default {
    title: 'shared/P',
    component: P,
    args: { children: "I'm p", size: 'medium', color: 'default' },
} as ComponentMeta<typeof P>;

const Template: ComponentStory<typeof P> = (args) => <P {...args} />;

export const DefaultLight = Template.bind({});
DefaultLight.parameters = {
    backgrounds: getLightThemeBackground(),
};

export const Error = Template.bind({});
Error.args = {
    size: 'small',
    color: 'error',
};
Error.parameters = {
    backgrounds: getLightThemeBackground(),
};

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
DefaultDark.parameters = {
    backgrounds: getDarkThemeBackground(),
};
