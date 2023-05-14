import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/contexts/theme';
import { LoginForm } from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {},
    parameters: {
        backgrounds: { disable: true },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = () => <LoginForm />;

export const DefaultLight = Template.bind({});

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
