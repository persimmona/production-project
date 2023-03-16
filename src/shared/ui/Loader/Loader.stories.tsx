import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/contexts/theme';
import { Loader } from './Loader';

export default {
    title: 'shared/Loader',
    component: Loader,
    argTypes: {},
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const DefaultLight = Template.bind({});
DefaultLight.args = {};

export const DefaultDark = Template.bind({});
DefaultDark.args = {};
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
