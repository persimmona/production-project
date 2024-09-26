import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/contexts/theme';

import LoginForm from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {},
    parameters: {
        themes: { list: [] },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = () => <LoginForm />;

export const DefaultLight = Template.bind({});
DefaultLight.decorators = [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
        loginForm: { username: '123', password: 'asd' },
    }),
];

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        loginForm: { username: '123', password: 'asd' },
    }),
];
