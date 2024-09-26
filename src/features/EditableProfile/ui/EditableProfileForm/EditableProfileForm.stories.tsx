import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/contexts/theme';

import EditableProfileForm from './EditableProfileForm';
import { ValidateProfileFormError } from '../../model/types/profileForm';

export default {
    title: 'features/EditableProfileForm',
    component: EditableProfileForm,
    argTypes: {},
    args: {
        initialData: {
            country: 'Ukraine',
            currency: 'UAH',
            firstname: 'Alona',
            lastname: 'Sydorova',
            age: 23,
            city: 'Mariupol',
            username: 'admin',
            avatar: '',
        },
    },
    parameters: {
        themes: { list: [] },
    },
} as ComponentMeta<typeof EditableProfileForm>;

const Template: ComponentStory<typeof EditableProfileForm> = (args) => <EditableProfileForm {...args} />;

export const DefaultLight = Template.bind({});
DefaultLight.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({})];

export const WithErrors = Template.bind({});
WithErrors.decorators = [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
        profileForm: {
            validateErrors: [ValidateProfileFormError.INCORRECT_USER_DATA, ValidateProfileFormError.INCORRECT_AGE],
        },
    }),
];

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [
    StoreDecorator({
        profileForm: {
            data: {},
        },
    }),
    ThemeDecorator(Theme.DARK),
];
