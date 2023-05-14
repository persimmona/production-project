import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { getDarkThemeBackground } from 'shared/config/storybook/getDarkThemeBackground/getDarkThemeBackground';
import { getLightThemeBackground } from 'shared/config/storybook/getLightThemeBackground/getLightThemeBackground';
import { Theme } from 'shared/contexts/theme';
import { Button } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Flat = Template.bind({});
Flat.args = {
    children: 'Text',
    variant: 'flat',
};

export const OutlineLight = Template.bind({});
OutlineLight.args = {
    children: 'Text',
    variant: 'outline',
};
OutlineLight.parameters = {
    backgrounds: getLightThemeBackground(),
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    variant: 'outline',
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
OutlineDark.parameters = {
    backgrounds: getDarkThemeBackground(),
};
