import { ComponentMeta, ComponentStory } from '@storybook/react';

import { getDarkThemeBackground } from '@/shared/config/storybook/getDarkThemeBackground/getDarkThemeBackground';
import { getLightThemeBackground } from '@/shared/config/storybook/getLightThemeBackground/getLightThemeBackground';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/contexts/theme';

import { Skeleton } from './Skeleton';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const DefaultLight = Template.bind({});
DefaultLight.parameters = {
    backgrounds: getLightThemeBackground(),
};

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
DefaultDark.parameters = {
    backgrounds: getDarkThemeBackground(),
};

export const Rounded = Template.bind({});
Rounded.args = {
    variant: 'rounded',
    height: '50px',
    width: '50px',
};
Rounded.decorators = [ThemeDecorator(Theme.DARK)];
Rounded.parameters = {
    backgrounds: getDarkThemeBackground(),
};
