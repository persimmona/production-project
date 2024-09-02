import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/contexts/theme';

import { ValidateProfileFormError } from '../../model/types/profileForm';
import EditableProfileForm from './EditableProfileForm';

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
        backgrounds: { disable: true },
    },
} as ComponentMeta<typeof EditableProfileForm>;

const Template: ComponentStory<typeof EditableProfileForm> = (args) => <EditableProfileForm {...args} />;

export const DefaultLight = Template.bind({});
DefaultLight.decorators = [StoreDecorator({})];

export const WithErrors = Template.bind({});
WithErrors.decorators = [
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
